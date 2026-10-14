import { realpath, stat } from "node:fs/promises";
import { extname, isAbsolute, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

interface StaticHandlerOptions {
  readonly publicDirectory: string | URL;
  readonly production?: boolean;
  readonly onError?: (error: unknown) => void;
}

const CONTENT_TYPES: Readonly<Record<string, string>> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

const SECURITY_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Content-Security-Policy": [
    "default-src 'self'",
    "script-src 'self'",
    "style-src 'self'",
    "font-src 'self'",
    "img-src 'self' data:",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
  ].join("; "),
};

function staysWithin(directory: string, candidate: string): boolean {
  const path = relative(directory, candidate);
  return path !== ".." && !path.startsWith(`..${sep}`) && !isAbsolute(path);
}

function hasUnsafePathCharacters(pathname: string): boolean {
  if (pathname.includes("\\") || pathname.includes(":")) return true;

  for (let index = 0; index < pathname.length; index += 1) {
    const code = pathname.charCodeAt(index);
    if (code < 32 || code === 127) return true;
  }

  return false;
}

function isMissingFile(error: unknown): boolean {
  if (!(error instanceof Error) || !("code" in error)) return false;
  return error.code === "ENOENT" || error.code === "ENOTDIR";
}

function errorResponse(request: Request, status: number, message: string): Response {
  return new Response(request.method === "HEAD" ? null : message, {
    status,
    headers: {
      ...SECURITY_HEADERS,
      "Cache-Control": "no-store",
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Length": String(Buffer.byteLength(message)),
      ...(status === 405 ? { Allow: "GET, HEAD" } : {}),
    },
  });
}

function isFresh(request: Request, etag: string, modifiedAt: number): boolean {
  const ifNoneMatch = request.headers.get("If-None-Match");

  if (ifNoneMatch !== null) {
    const expected = etag.replace(/^W\//, "");
    return ifNoneMatch.split(",").some((value) => {
      const candidate = value.trim();
      return candidate === "*" || candidate.replace(/^W\//, "") === expected;
    });
  }

  const ifModifiedSince = request.headers.get("If-Modified-Since");
  return (
    ifModifiedSince !== null && Math.floor(modifiedAt / 1000) * 1000 <= Date.parse(ifModifiedSince)
  );
}

export function createStaticHandler(
  options: StaticHandlerOptions,
): (request: Request) => Promise<Response> {
  const publicDirectory = resolve(
    options.publicDirectory instanceof URL
      ? fileURLToPath(options.publicDirectory)
      : options.publicDirectory,
  );
  const reportError =
    options.onError ??
    ((error: unknown) => console.error("No se pudo atender la solicitud.", error));

  return async (request: Request): Promise<Response> => {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return errorResponse(request, 405, "Método no permitido.");
    }

    let pathname: string;

    try {
      pathname = decodeURIComponent(new URL(request.url).pathname);
    } catch {
      return errorResponse(request, 400, "La dirección no es válida.");
    }

    const segments = pathname.split("/");

    // Reject Windows path aliases as well as encoded traversal before resolution.
    if (
      hasUnsafePathCharacters(pathname) ||
      segments.some((segment) => segment === ".." || /[. ]$/.test(segment))
    ) {
      return errorResponse(request, 403, "Acceso no permitido.");
    }

    if (segments.some((segment) => segment.startsWith("."))) {
      return errorResponse(request, 404, "No se encontró esta página.");
    }

    if (pathname === "/") pathname = "/index.html";

    const contentType = CONTENT_TYPES[extname(pathname).toLowerCase()];
    const requestedPath = resolve(publicDirectory, `.${pathname}`);

    if (!contentType || !staysWithin(publicDirectory, requestedPath)) {
      return errorResponse(request, 404, "No se encontró esta página.");
    }

    try {
      const [root, filePath] = await Promise.all([
        realpath(publicDirectory),
        realpath(requestedPath),
      ]);

      // A public symlink must not make a private file available over HTTP.
      if (!staysWithin(root, filePath)) {
        return errorResponse(request, 403, "Acceso no permitido.");
      }

      const fileStat = await stat(filePath);

      if (!fileStat.isFile()) {
        return errorResponse(request, 404, "No se encontró esta página.");
      }

      const etag = `W/"${fileStat.size.toString(16)}-${fileStat.mtimeMs.toString(16)}"`;
      const headers = new Headers({
        ...SECURITY_HEADERS,
        "Content-Type": contentType,
        "Cache-Control":
          options.production && contentType !== CONTENT_TYPES[".html"]
            ? "public, max-age=3600, must-revalidate"
            : "no-cache",
        "Last-Modified": fileStat.mtime.toUTCString(),
        ETag: etag,
      });

      if (isFresh(request, etag, fileStat.mtimeMs)) {
        return new Response(null, { status: 304, headers });
      }

      headers.set("Content-Length", String(fileStat.size));
      return new Response(request.method === "HEAD" ? null : Bun.file(filePath), { headers });
    } catch (error) {
      if (isMissingFile(error)) {
        return errorResponse(request, 404, "No se encontró esta página.");
      }

      reportError(error);
      return errorResponse(request, 500, "No se pudo cargar esta página.");
    }
  };
}
