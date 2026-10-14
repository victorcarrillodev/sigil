import { readServerConfig } from "./server/config";
import { createStaticHandler } from "./server/static-handler";

const config = readServerConfig(process.env);
const publicDirectory = new URL("./dist/", import.meta.url);

if (!(await Bun.file(new URL("index.html", publicDirectory)).exists())) {
  throw new Error(
    "Falta la aplicación compilada. Ejecuta bun run build antes de iniciar el servidor.",
  );
}

const server = Bun.serve({
  port: config.port,
  hostname: config.hostname,
  fetch: createStaticHandler({
    publicDirectory,
    production: config.production,
  }),
});

console.info(`Sigil disponible en ${server.url}`);
