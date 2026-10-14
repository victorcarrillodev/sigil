import { readServerConfig } from "./server/config";
import { createStaticHandler } from "./server/static-handler";

const config = readServerConfig(process.env);

const server = Bun.serve({
  port: config.port,
  hostname: config.hostname,
  fetch: createStaticHandler({
    publicDirectory: new URL("./public/", import.meta.url),
    production: config.production,
  }),
});

console.info(`Sigil disponible en ${server.url}`);
