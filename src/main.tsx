import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./estilos/main.css";

const root = document.getElementById("root");
if (!root) throw new Error("No se encontró el contenedor de la aplicación.");

document.documentElement.classList.add("js");
const application = (
  <StrictMode>
    <App />
  </StrictMode>
);
if (root.hasChildNodes()) hydrateRoot(root, application);
else createRoot(root).render(application);
