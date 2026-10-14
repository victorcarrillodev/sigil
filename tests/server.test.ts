import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { mkdtemp, mkdir, rm, symlink, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { readServerConfig } from "../server/config";
import { createStaticHandler } from "../server/static-handler";

let fixture: string;
let directory: string;
let handleRequest: ReturnType<typeof createStaticHandler>;

beforeAll(async () => {
  fixture = await mkdtemp(join(tmpdir(), "sigil-server-"));
  directory = join(fixture, "public");
  await mkdir(join(directory, "css"), { recursive: true });
  await mkdir(join(directory, "folder.html"));
  await mkdir(join(fixture, "private"));
  await writeFile(join(directory, "index.html"), "<!doctype html><title>Sigil</title>");
  await writeFile(join(directory, "css", "main.css"), "body { color: #222; }");
  await writeFile(join(directory, ".env"), "PRIVATE=true");
  await writeFile(join(directory, "private.ts"), "const privateValue = true;");
  await writeFile(join(fixture, "private", "private.txt"), "This must not be served.");
  await symlink(join(fixture, "private"), join(directory, "linked"), "junction");
  handleRequest = createStaticHandler({ publicDirectory: directory, production: true });
});

afterAll(async () => {
  if (!fixture.startsWith(join(tmpdir(), "sigil-server-")))
    throw new Error("Unexpected test fixture directory.");
  await rm(fixture, { recursive: true, force: true });
});

function request(path: string, init?: RequestInit): Request {
  return new Request(`https://sigil.test${path}`, init);
}

function requiredHeader(response: Response, name: string): string {
  const value = response.headers.get(name);
  if (value === null) throw new Error(`Missing response header: ${name}`);
  return value;
}

describe("server configuration", () => {
  test("uses defaults and environment precedence", () => {
    expect(readServerConfig({})).toEqual({ port: 3100, hostname: "127.0.0.1", production: false });
    expect(readServerConfig({ BUN_PORT: "4321" }).port).toBe(4321);
    expect(
      readServerConfig({ PORT: "4322", BUN_PORT: "4321", HOST: "0.0.0.0", NODE_ENV: "production" }),
    ).toEqual({ port: 4322, hostname: "0.0.0.0", production: true });
  });

  test.each(["", "abc", "3.5", "0", "65536", "-1", " 3000"])("rejects invalid port %p", (port) => {
    expect(() => readServerConfig({ PORT: port })).toThrow("PORT");
  });

  test.each(["localhost", "sigil.local", "127.0.0.1", "0.0.0.0", "::1"])(
    "accepts host %p",
    (hostname) => {
      expect(readServerConfig({ HOST: hostname }).hostname).toBe(hostname);
    },
  );

  test.each(["", "https://localhost", "localhost:3000", " bad-host", "-host", "bad/host"])(
    "rejects invalid host %p",
    (hostname) => {
      expect(() => readServerConfig({ HOST: hostname })).toThrow("HOST");
    },
  );
});

describe("static HTTP handler", () => {
  test("serves the home page and establishes browser security headers", async () => {
    const response = await handleRequest(request("/?source=test"));
    expect(response.status).toBe(200);
    expect(await response.text()).toContain("<title>Sigil</title>");
    expect(response.headers.get("Content-Type")).toBe("text/html; charset=utf-8");
    expect(response.headers.get("Cache-Control")).toBe("no-cache");
    expect(response.headers.get("X-Content-Type-Options")).toBe("nosniff");
    expect(response.headers.get("X-Frame-Options")).toBe("DENY");
    expect(response.headers.get("Content-Security-Policy")).toContain("script-src 'self'");
  });

  test("returns HEAD metadata without a body", async () => {
    const response = await handleRequest(request("/css/main.css", { method: "HEAD" }));
    expect(response.status).toBe(200);
    expect(await response.text()).toBe("");
    expect(Number(response.headers.get("Content-Length"))).toBeGreaterThan(0);
    expect(response.headers.get("Content-Type")).toBe("text/css; charset=utf-8");
  });

  test("caches assets in production and revalidates in development", async () => {
    const productionResponse = await handleRequest(request("/css/main.css"));
    expect(productionResponse.headers.get("Cache-Control")).toBe(
      "public, max-age=3600, must-revalidate",
    );
    const developmentHandler = createStaticHandler({ publicDirectory: directory });
    expect((await developmentHandler(request("/css/main.css"))).headers.get("Cache-Control")).toBe(
      "no-cache",
    );
  });

  test("handles ETag and modified-date revalidation", async () => {
    const initial = await handleRequest(request("/css/main.css"));
    const etag = requiredHeader(initial, "ETag");
    const modified = requiredHeader(initial, "Last-Modified");
    const cached = await handleRequest(
      request("/css/main.css", { headers: { "If-None-Match": `"other", ${etag}` } }),
    );
    expect(cached.status).toBe(304);
    expect(await cached.text()).toBe("");
    expect(cached.headers.get("ETag")).toBe(etag);
    expect(
      (
        await handleRequest(
          request("/css/main.css", { headers: { "If-Modified-Since": modified } }),
        )
      ).status,
    ).toBe(304);
    expect(
      (
        await handleRequest(
          request("/css/main.css", {
            headers: { "If-None-Match": '"different"', "If-Modified-Since": modified },
          }),
        )
      ).status,
    ).toBe(200);
  });

  test("rejects mutation methods explicitly", async () => {
    const response = await handleRequest(request("/", { method: "POST" }));
    expect(response.status).toBe(405);
    expect(response.headers.get("Allow")).toBe("GET, HEAD");
  });

  test.each(["/%invalid", "/%E0%A4%A"])("handles malformed encoded URL %p", async (path) => {
    expect((await handleRequest(request(path))).status).toBe(400);
  });

  test.each([
    "/%2e%2e%2fprivate.txt",
    "/css%5c..%5cprivate.txt",
    "/index.html%00",
    "/index.html%3Aprivate",
    "/linked/private.txt",
  ])("blocks unsafe path %p", async (path) => {
    expect((await handleRequest(request(path))).status).toBe(403);
  });

  test.each(["/missing", "/.env", "/private.ts", "/folder.html", "/css/main.css/missing.css"])(
    "does not expose file or directory %p",
    async (path) => {
      const response = await handleRequest(request(path));
      expect(response.status).toBe(404);
      expect(response.headers.get("Cache-Control")).toBe("no-store");
    },
  );

  test("HEAD error responses remain bodyless", async () => {
    const response = await handleRequest(request("/missing", { method: "HEAD" }));
    expect(response.status).toBe(404);
    expect(await response.text()).toBe("");
  });

  test("preserves file bodies and conditional responses over HTTP", async () => {
    const server = Bun.serve({ port: 0, fetch: handleRequest });

    try {
      const response = await fetch(new URL("/css/main.css", server.url));
      expect(response.status).toBe(200);
      expect(await response.text()).toBe("body { color: #222; }");

      const head = await fetch(new URL("/css/main.css", server.url), { method: "HEAD" });
      expect(head.status).toBe(200);
      expect(await head.text()).toBe("");
      expect(head.headers.get("Content-Length")).toBe(response.headers.get("Content-Length"));

      const cached = await fetch(new URL("/css/main.css", server.url), {
        headers: { "If-None-Match": requiredHeader(response, "ETag") },
      });
      expect(cached.status).toBe(304);
      expect(await cached.text()).toBe("");
    } finally {
      await server.stop(true);
    }
  });
});
