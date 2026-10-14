import { isIP } from "node:net";

type Environment = Readonly<Record<string, string | undefined>>;

export interface ServerConfig {
  readonly port: number;
  readonly hostname: string;
  readonly production: boolean;
}

export function readServerConfig(environment: Environment): ServerConfig {
  const rawPort = environment.PORT ?? environment.BUN_PORT ?? "3100";
  const port = Number(rawPort);
  const hostname = environment.HOST ?? "127.0.0.1";

  if (!/^\d+$/.test(rawPort) || !Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("PORT debe ser un número entero entre 1 y 65535.");
  }

  const validHostname =
    hostname.length <= 253 &&
    hostname.split(".").every((part) => /^[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?$/i.test(part));

  if (!isIP(hostname) && !validHostname) {
    throw new Error("HOST debe ser una dirección IP o un nombre de host, sin protocolo ni puerto.");
  }

  return {
    port,
    hostname,
    production: environment.NODE_ENV === "production",
  };
}
