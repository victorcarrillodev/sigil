import { describe, expect, test } from "bun:test";

const packageDirectory = new URL("../node_modules/three/", import.meta.url);
const vendorDirectory = new URL("../public/vendor/three/", import.meta.url);

describe("local Three.js distribution", () => {
  test("preserves the original license and records the installed version", async () => {
    const expected = await Bun.file(new URL("LICENSE", packageDirectory)).arrayBuffer();
    const actual = await Bun.file(new URL("LICENSE", vendorDirectory)).arrayBuffer();
    expect(new Uint8Array(actual)).toEqual(new Uint8Array(expected));

    const metadata: { version: string } = await Bun.file(
      new URL("package.json", packageDirectory),
    ).json();
    expect(await Bun.file(new URL("README.md", vendorDirectory)).text()).toContain(
      metadata.version,
    );
  });

  test("minifies standalone modules without changing exports or revision", async () => {
    for (const name of ["three.module.js", "three.core.js"]) {
      const originalUrl = new URL(`build/${name}`, packageDirectory);
      const localUrl = new URL(name, vendorDirectory);
      expect(Bun.file(localUrl).size).toBeLessThan(Bun.file(originalUrl).size);

      const [original, local] = await Promise.all([
        import(originalUrl.href),
        import(localUrl.href),
      ]);
      expect(Object.keys(local).sort()).toEqual(Object.keys(original).sort());
      expect(local.REVISION).toBe(original.REVISION);
    }

    expect(await Bun.file(new URL("three.module.js", vendorDirectory)).text()).toContain(
      "./three.core.js",
    );
  });

  test("resolves its core module locally and exposes the scene API", async () => {
    const three = await import(new URL("three.module.js", vendorDirectory).href);
    const scene = new three.Scene();
    const geometry = new three.BoxGeometry(1, 1, 1);
    expect(scene.isScene).toBe(true);
    expect(geometry.getAttribute("position").count).toBeGreaterThan(0);
    expect(typeof three.WebGLRenderer).toBe("function");
    geometry.dispose();
  });
});
