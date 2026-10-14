import { copyFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

interface ThreePackage {
  readonly name: string;
  readonly version: string;
  readonly repository: { readonly url: string };
}

const sourceDirectory = new URL("../node_modules/three/", import.meta.url);
const destinationDirectory = new URL("../public/vendor/three/", import.meta.url);
const metadata: ThreePackage = await Bun.file(new URL("package.json", sourceDirectory)).json();

await mkdir(destinationDirectory, { recursive: true });

const result = await Bun.build({
  entrypoints: ["three.module.js", "three.core.js"].map((name) =>
    fileURLToPath(new URL(`build/${name}`, sourceDirectory)),
  ),
  outdir: fileURLToPath(destinationDirectory),
  naming: "[name].[ext]",
  target: "browser",
  format: "esm",
  external: ["*"],
  minify: true,
  env: "disable",
});

if (!result.success) {
  throw new AggregateError(result.logs, "No se pudo preparar Three.js para el navegador.");
}

await copyFile(new URL("LICENSE", sourceDirectory), new URL("LICENSE", destinationDirectory));

const attribution = [
  "# Three.js local",
  "",
  `Versión: ${metadata.version} (paquete npm \`${metadata.name}\`).`,
  `Origen: ${metadata.repository.url}.`,
  "",
  "`three.module.js` y `three.core.js` se minifican con Bun a partir de los módulos",
  "ESM de `node_modules/three/build/`, preservando sus exportaciones. Los imports",
  "se mantienen externos al bundle; el módulo principal importa su núcleo mediante",
  "`./three.core.js`, por lo que ambos archivos se sirven desde el mismo origen.",
  "La licencia MIT del paquete se conserva en `LICENSE`.",
  "",
  "Estos archivos se actualizan mediante `bun run vendor` y automáticamente con",
  "`bun install`. La versión instalada se registra en `bun.lock`.",
  "",
].join("\n");

await Bun.write(new URL("README.md", destinationDirectory), attribution);
console.info(`Three.js ${metadata.version} optimizado en public/vendor/three/.`);
