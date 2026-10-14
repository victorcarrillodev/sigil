import { expect, test } from "bun:test";
import {
  formatRequest,
  normalizeRequest,
  validateRequest,
} from "../../src/modulos/organismos/ContactForm/contact-validation";
import type { RequestValues } from "../../src/modulos/organismos/ContactForm/contact-validation";
import { createRequestDownload } from "../../src/modulos/organismos/ContactForm/request-download";

const validRequest: RequestValues = {
  nombre: "Ana Pérez",
  empresa: "Taller Norte",
  email: "ana@example.com",
  linea: "management",
  mensaje: "Necesitamos organizar los pedidos y dar seguimiento a cada entrega.",
};

test("acepta una solicitud completa y la empresa opcional", () => {
  expect(validateRequest(validRequest)).toEqual({});
  expect(validateRequest({ ...validRequest, empresa: "" })).toEqual({});
});

test("rechaza campos vacíos, espacios, correo inválido y servicio desconocido", () => {
  const errors = validateRequest({ nombre: "  ", email: "ana@", linea: "unknown", mensaje: "  " });
  expect(Object.keys(errors)).toEqual(["nombre", "email", "linea", "mensaje"]);
});

test("rechaza dominios mal formados y caracteres inválidos en el correo", () => {
  [
    "ana@example..com",
    "ana@-example.com",
    "ana@exam_ple.com",
    'ana"@example.com',
    "ana @example.com",
  ].forEach((email) => {
    expect(validateRequest({ ...validRequest, email }).email).toBeDefined();
  });
  expect(
    validateRequest({ ...validRequest, email: "ana.perez+proyecto@equipo.example.com" }),
  ).toEqual({});
});

test("comprueba los límites de longitud", () => {
  const atLimits: RequestValues = {
    nombre: "a".repeat(80),
    empresa: "b".repeat(100),
    email: `${"c".repeat(242)}@example.com`,
    linea: "integral",
    mensaje: "d".repeat(2000),
  };
  expect(validateRequest(atLimits)).toEqual({});
  expect(
    Object.keys(
      validateRequest({
        ...atLimits,
        nombre: `${atLimits.nombre}a`,
        empresa: `${atLimits.empresa}b`,
        email: `c${atLimits.email}`,
        mensaje: `${atLimits.mensaje}d`,
      }),
    ),
  ).toEqual(["nombre", "empresa", "email", "mensaje"]);
});

test("valida el mínimo tras quitar espacios exteriores", () => {
  expect(
    validateRequest({ ...validRequest, nombre: " A ", mensaje: ` ${"a".repeat(19)} ` }).nombre,
  ).toBeDefined();
  expect(
    validateRequest({ ...validRequest, mensaje: ` ${"a".repeat(19)} ` }).mensaje,
  ).toBeDefined();
  expect(validateRequest({ ...validRequest, nombre: " Al ", mensaje: "a".repeat(20) })).toEqual({});
});

test("normaliza valores sin modificar los originales ni perder saltos de línea", () => {
  const values = {
    ...validRequest,
    nombre: " Ana Pérez ",
    mensaje: " Primera línea\nSegunda línea ",
  };
  const result = normalizeRequest(values);
  expect(result.nombre).toBe("Ana Pérez");
  expect(result.mensaje).toBe("Primera línea\nSegunda línea");
  expect(values.nombre).toBe(" Ana Pérez ");
});

test("genera un resumen reutilizable que aclara que no se ha enviado", () => {
  const summary = formatRequest({ ...validRequest, empresa: "" });
  expect(summary).toContain("Nombre: Ana Pérez");
  expect(summary).toContain("Empresa: No indicada");
  expect(summary).toContain("Servicio: Sistemas de gestión");
  expect(summary).toContain(validRequest.mensaje);
  expect(summary).toContain("No se ha enviado a Sigil");
});

test("no acepta nombres heredados como opciones de servicio", () => {
  expect(validateRequest({ ...validRequest, linea: "constructor" }).linea).toBeDefined();
  expect(validateRequest({ ...validRequest, linea: "__proto__" }).linea).toBeDefined();
});

test("reemplaza la descarga revocando la URL anterior y conserva el resumen UTF-8", async () => {
  const blobs: Blob[] = [];
  const revoked: string[] = [];
  const download = createRequestDownload({
    createObjectURL(blob: Blob) {
      blobs.push(blob);
      return `blob:request-${blobs.length}`;
    },
    revokeObjectURL(url: string) {
      revoked.push(url);
    },
  });
  const firstSummary = formatRequest(validRequest);
  expect(download.prepare(firstSummary)).toBe("blob:request-1");
  expect(blobs[0]?.type).toBe("text/plain;charset=utf-8");
  expect(await blobs[0]?.text()).toBe(firstSummary);
  expect(download.prepare("Nueva solicitud")).toBe("blob:request-2");
  expect(revoked).toEqual(["blob:request-1"]);
  expect(download.href).toBe("blob:request-2");
});

test("puede revocar en pagehide o desmontaje y recrear la descarga al volver", () => {
  const revoked: string[] = [];
  let created = 0;
  const download = createRequestDownload({
    createObjectURL() {
      created += 1;
      return `blob:request-${created}`;
    },
    revokeObjectURL(url: string) {
      revoked.push(url);
    },
  });
  const summary = formatRequest(validRequest);
  download.prepare(summary);
  download.revoke();
  download.revoke();
  expect(download.href).toBe("");
  expect(revoked).toEqual(["blob:request-1"]);
  expect(download.prepare(summary)).toBe("blob:request-2");
  download.revoke();
  expect(revoked).toEqual(["blob:request-1", "blob:request-2"]);
});
