import { SERVICE_LABELS } from "./services.js";

const FIELD_NAMES = ["nombre", "empresa", "email", "linea", "mensaje"];
const EMAIL_PATTERN =
  /^[a-z\d.!#$%&'*+/=?^_`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)+$/i;

export function normalizeRequest(values) {
  return Object.fromEntries(FIELD_NAMES.map((name) => [name, String(values[name] ?? "").trim()]));
}

export function validateRequest(values) {
  const request = normalizeRequest(values);
  const errors = {};

  if (request.nombre.length < 2) {
    errors.nombre = "Escribe tu nombre (al menos 2 caracteres).";
  } else if (request.nombre.length > 80) {
    errors.nombre = "El nombre puede tener hasta 80 caracteres.";
  }

  if (request.empresa.length > 100) {
    errors.empresa = "El nombre de la empresa puede tener hasta 100 caracteres.";
  }

  if (!request.email) {
    errors.email = "Escribe un correo de contacto.";
  } else if (request.email.length > 254 || !EMAIL_PATTERN.test(request.email)) {
    errors.email = "Escribe un correo válido, por ejemplo nombre@empresa.com.";
  }

  if (!Object.hasOwn(SERVICE_LABELS, request.linea)) {
    errors.linea = "Selecciona el servicio que necesitas.";
  }

  if (request.mensaje.length < 20) {
    errors.mensaje = "Cuéntanos un poco más (al menos 20 caracteres).";
  } else if (request.mensaje.length > 2000) {
    errors.mensaje = "La descripción puede tener hasta 2000 caracteres.";
  }

  return errors;
}

export function formatRequest(values) {
  const request = normalizeRequest(values);

  return [
    "SOLICITUD · SIGIL",
    "",
    `Nombre: ${request.nombre}`,
    `Empresa: ${request.empresa || "No indicada"}`,
    `Correo: ${request.email}`,
    `Servicio: ${SERVICE_LABELS[request.linea] ?? request.linea}`,
    "",
    "Descripción del proyecto:",
    request.mensaje,
    "",
    "Resumen preparado en tu dispositivo. No se ha enviado a Sigil.",
  ].join("\n");
}

export function initContactForm() {
  const form = document.getElementById("contact-form");
  const summary = document.getElementById("request-summary");
  const requestText = document.getElementById("request-text");
  const copyButton = document.getElementById("copy-request");
  const downloadLink = document.getElementById("download-request");
  const status = document.getElementById("form-status");
  const messageCount = document.getElementById("mensaje-count");

  if (!form || !summary || !requestText || !downloadLink || !status) return;

  const fields = Object.fromEntries(
    FIELD_NAMES.map((name) => [name, form.querySelector(`#${name}`)]),
  );
  if (FIELD_NAMES.some((name) => !fields[name])) return;
  const submitButton = form.querySelector('button[type="submit"]');

  let requestUrl = "";
  let preparedRequest = "";

  const errorElements = Object.fromEntries(
    FIELD_NAMES.map((name) => {
      let error = document.getElementById(`${name}-error`);
      if (!error) {
        error = document.createElement("span");
        error.id = `${name}-error`;
        error.className = "field-error";
        fields[name].insertAdjacentElement("afterend", error);
      }

      const descriptions = new Set(
        (fields[name].getAttribute("aria-describedby") ?? "").split(/\s+/).filter(Boolean),
      );
      descriptions.add(error.id);
      fields[name].setAttribute("aria-describedby", Array.from(descriptions).join(" "));
      return [name, error];
    }),
  );

  const readValues = () =>
    Object.fromEntries(FIELD_NAMES.map((name) => [name, fields[name].value]));

  const showError = (name, message = "") => {
    errorElements[name].textContent = message;
    if (message) fields[name].setAttribute("aria-invalid", "true");
    else fields[name].removeAttribute("aria-invalid");
  };

  const revokeDownload = () => {
    if (requestUrl) URL.revokeObjectURL(requestUrl);
    requestUrl = "";
    downloadLink.removeAttribute("href");
  };

  const prepareDownload = () => {
    revokeDownload();
    requestUrl = URL.createObjectURL(
      new Blob([preparedRequest], { type: "text/plain;charset=utf-8" }),
    );
    downloadLink.href = requestUrl;
  };

  const updateMessageCount = () => {
    if (messageCount) messageCount.textContent = `${fields.mensaje.value.length} / 2000`;
  };

  const invalidateSummary = () => {
    if (!preparedRequest) return;
    summary.hidden = true;
    preparedRequest = "";
    requestText.value = "";
    status.textContent = "";
    revokeDownload();
  };

  FIELD_NAMES.forEach((name) => {
    const field = fields[name];

    const handleEdit = () => {
      invalidateSummary();
      if (name === "mensaje") updateMessageCount();
      if (field.getAttribute("aria-invalid") === "true") {
        showError(name, validateRequest(readValues())[name]);
      }
    };

    field.addEventListener("input", handleEdit);
    field.addEventListener("change", handleEdit);
    field.addEventListener("blur", () => {
      if (field.value.trim() || field.getAttribute("aria-invalid") === "true") {
        showError(name, validateRequest(readValues())[name]);
      }
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const values = readValues();
    const errors = validateRequest(values);
    FIELD_NAMES.forEach((name) => {
      showError(name, errors[name]);
    });

    const firstInvalid = FIELD_NAMES.find((name) => errors[name]);
    if (firstInvalid) {
      invalidateSummary();
      status.textContent = "Revisa los campos indicados para preparar tu solicitud.";
      fields[firstInvalid].focus();
      return;
    }

    preparedRequest = formatRequest(values);
    requestText.value = preparedRequest;
    prepareDownload();
    summary.hidden = false;
    status.textContent =
      "Tu solicitud está preparada. Puedes copiar o descargar el resumen. Todavía no se ha enviado.";
  });

  copyButton?.addEventListener("click", async () => {
    if (!preparedRequest) return;
    const textToCopy = preparedRequest;

    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(textToCopy);
      if (preparedRequest === textToCopy) {
        status.textContent = "Resumen copiado. Puedes guardarlo o compartirlo cuando lo necesites.";
      }
    } catch {
      if (preparedRequest !== textToCopy) return;
      requestText.focus();
      requestText.select();
      status.textContent =
        "No se pudo copiar automáticamente. El resumen está seleccionado; cópialo con el menú o el teclado de tu dispositivo.";
    }
  });

  window.addEventListener("pagehide", revokeDownload);
  window.addEventListener("pageshow", () => {
    if (preparedRequest && !requestUrl) prepareDownload();
  });

  updateMessageCount();
  if (submitButton) submitButton.disabled = false;
}
