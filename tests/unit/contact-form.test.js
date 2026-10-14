import test from "node:test";
import assert from "node:assert/strict";
import {
  formatRequest,
  normalizeRequest,
  validateRequest,
} from "../../public/js/modules/contact-form.js";

const validRequest = {
  nombre: "Ana Pérez",
  empresa: "Taller Norte",
  email: "ana@example.com",
  linea: "management",
  mensaje: "Necesitamos organizar los pedidos y dar seguimiento a cada entrega.",
};

test("acepta una solicitud completa y la empresa opcional", () => {
  assert.deepEqual(validateRequest(validRequest), {});
  assert.deepEqual(validateRequest({ ...validRequest, empresa: "" }), {});
});

test("rechaza campos vacíos, espacios, correo inválido y servicio desconocido", () => {
  const errors = validateRequest({ nombre: "  ", email: "ana@", linea: "unknown", mensaje: "  " });
  assert.deepEqual(Object.keys(errors), ["nombre", "email", "linea", "mensaje"]);
});

test("rechaza dominios mal formados y caracteres inválidos en el correo", () => {
  [
    "ana@example..com",
    "ana@-example.com",
    "ana@exam_ple.com",
    'ana"@example.com',
    "ana @example.com",
  ].forEach((email) => {
    assert.ok(validateRequest({ ...validRequest, email }).email);
  });
  assert.deepEqual(
    validateRequest({ ...validRequest, email: "ana.perez+proyecto@equipo.example.com" }),
    {},
  );
});

test("comprueba los límites de longitud", () => {
  const atLimits = {
    nombre: "a".repeat(80),
    empresa: "b".repeat(100),
    email: `${"c".repeat(242)}@example.com`,
    linea: "integral",
    mensaje: "d".repeat(2000),
  };
  assert.deepEqual(validateRequest(atLimits), {});

  const overLimits = {
    ...atLimits,
    nombre: `${atLimits.nombre}a`,
    empresa: `${atLimits.empresa}b`,
    email: `c${atLimits.email}`,
    mensaje: `${atLimits.mensaje}d`,
  };
  assert.deepEqual(Object.keys(validateRequest(overLimits)), [
    "nombre",
    "empresa",
    "email",
    "mensaje",
  ]);
});

test("valida el mínimo tras quitar espacios exteriores", () => {
  assert.ok(
    validateRequest({ ...validRequest, nombre: " A ", mensaje: ` ${"a".repeat(19)} ` }).nombre,
  );
  assert.ok(validateRequest({ ...validRequest, mensaje: ` ${"a".repeat(19)} ` }).mensaje);
  assert.deepEqual(
    validateRequest({ ...validRequest, nombre: " Al ", mensaje: "a".repeat(20) }),
    {},
  );
});

test("normaliza valores sin modificar los originales ni perder saltos de línea", () => {
  const values = {
    ...validRequest,
    nombre: " Ana Pérez ",
    mensaje: " Primera línea\nSegunda línea ",
  };
  const result = normalizeRequest(values);
  assert.equal(result.nombre, "Ana Pérez");
  assert.equal(result.mensaje, "Primera línea\nSegunda línea");
  assert.equal(values.nombre, " Ana Pérez ");
});

test("genera un resumen reutilizable que aclara que no se ha enviado", () => {
  const summary = formatRequest({ ...validRequest, empresa: "" });
  assert.match(summary, /Nombre: Ana Pérez/);
  assert.match(summary, /Empresa: No indicada/);
  assert.match(summary, /Servicio: Sistemas de gestión/);
  assert.ok(summary.includes(validRequest.mensaje));
  assert.match(summary, /No se ha enviado a Sigil/);
});

test("no acepta nombres heredados como opciones de servicio", () => {
  assert.ok(validateRequest({ ...validRequest, linea: "constructor" }).linea);
  assert.ok(validateRequest({ ...validRequest, linea: "__proto__" }).linea);
});
