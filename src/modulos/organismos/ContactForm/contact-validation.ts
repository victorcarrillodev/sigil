import { SERVICE_LABELS } from "../../moleculas/ServiceCard/services";

export const REQUEST_FIELDS = ["nombre", "empresa", "email", "linea", "mensaje"] as const;

export type RequestField = (typeof REQUEST_FIELDS)[number];
export type RequestValues = Record<RequestField, string>;
export type RequestErrors = Partial<Record<RequestField, string>>;

const EMAIL_PATTERN =
  /^[a-z\d.!#$%&'*+/=?^_`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)+$/i;

export function normalizeRequest(values: Partial<RequestValues> = {}): RequestValues {
  return {
    nombre: String(values.nombre ?? "").trim(),
    empresa: String(values.empresa ?? "").trim(),
    email: String(values.email ?? "").trim(),
    linea: String(values.linea ?? "").trim(),
    mensaje: String(values.mensaje ?? "").trim(),
  };
}

export function validateRequest(values: Partial<RequestValues>): RequestErrors {
  const request = normalizeRequest(values);
  const errors: RequestErrors = {};

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

export function formatRequest(values: Partial<RequestValues>): string {
  const request = normalizeRequest(values);
  const service = Object.entries(SERVICE_LABELS).find(([id]) => id === request.linea)?.[1];

  return [
    "SOLICITUD · SIGIL",
    "",
    `Nombre: ${request.nombre}`,
    `Empresa: ${request.empresa || "No indicada"}`,
    `Correo: ${request.email}`,
    `Servicio: ${service ?? request.linea}`,
    "",
    "Descripción del proyecto:",
    request.mensaje,
    "",
    "Resumen preparado en tu dispositivo. No se ha enviado a Sigil.",
  ].join("\n");
}
