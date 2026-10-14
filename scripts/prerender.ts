import { createElement } from "react";
import { renderToString } from "react-dom/server";
import App from "../src/App";

const indexFile = Bun.file(new URL("../dist/index.html", import.meta.url));
const html = await indexFile.text();
const rootMarker = '<div id="root"></div>';

if (!html.includes(rootMarker) || html.indexOf(rootMarker) !== html.lastIndexOf(rootMarker)) {
  throw new Error("No se encontró el contenedor vacío #root en dist/index.html.");
}

const content = renderToString(createElement(App));
await Bun.write(
  indexFile,
  html.replace(rootMarker, () => `<div id="root">${content}</div>`),
);
console.info("Contenido de Sigil prerenderizado en dist/index.html.");
