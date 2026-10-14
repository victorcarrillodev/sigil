import { cp, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

function copyStaticAssets(): Plugin {
  const outputDirectory = new URL("./dist/", import.meta.url);
  const sourceDirectory = new URL("./public/", import.meta.url);

  return {
    name: "sigil-static-assets",
    apply: "build",
    async closeBundle() {
      await mkdir(outputDirectory, { recursive: true });

      for (const name of ["fonts", "images", "sigil-emblem.jpg"]) {
        await cp(new URL(name, sourceDirectory), new URL(name, outputDirectory), {
          recursive: true,
        });
      }

      const licensesDirectory = new URL("third-party/", outputDirectory);
      await mkdir(licensesDirectory, { recursive: true });
      await cp(
        new URL("./node_modules/three/LICENSE", import.meta.url),
        new URL("three-LICENSE.txt", licensesDirectory),
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), copyStaticAssets()],
  server: {
    host: "localhost",
    port: 3100,
    strictPort: true,
  },
  build: {
    outDir: fileURLToPath(new URL("./dist/", import.meta.url)),
    copyPublicDir: false,
    license: { fileName: "licenses.txt" },
  },
});
