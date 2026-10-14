import { useCallback, useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { Icon } from "../../atomos/Icon/Icon";
import { SERVICE_LABELS } from "../../moleculas/ServiceCard/services";
import type { ServiceId } from "../../moleculas/ServiceCard/services";
import { REQUEST_FIELDS, formatRequest, validateRequest } from "./contact-validation";
import type { RequestErrors, RequestField, RequestValues } from "./contact-validation";
import { createRequestDownload } from "./request-download";

export interface ContactFormProps {
  selectedService?: ServiceId | "";
}

type FormControl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const EMPTY_REQUEST: RequestValues = {
  nombre: "",
  empresa: "",
  email: "",
  linea: "",
  mensaje: "",
};

export function ContactForm({ selectedService = "" }: ContactFormProps) {
  const [values, setValues] = useState<RequestValues>(() => ({
    ...EMPTY_REQUEST,
    linea: selectedService,
  }));
  const [errors, setErrors] = useState<RequestErrors>({});
  const [summary, setSummary] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [status, setStatus] = useState("");
  const [ready, setReady] = useState(false);
  const download = useRef<ReturnType<typeof createRequestDownload> | null>(null);
  const fields = useRef<Record<RequestField, FormControl | null>>({
    nombre: null,
    empresa: null,
    email: null,
    linea: null,
    mensaje: null,
  });
  const summaryField = useRef<HTMLTextAreaElement>(null);
  const preparedRequest = useRef("");
  const copyRevision = useRef(0);
  const focusField = useRef<RequestField | null>(null);
  const mounted = useRef(false);

  const invalidateSummary = useCallback(() => {
    copyRevision.current += 1;
    preparedRequest.current = "";
    download.current?.revoke();
    setSummary("");
    setDownloadUrl("");
    setStatus("");
  }, []);

  useEffect(() => {
    const requestDownload = createRequestDownload();
    download.current = requestDownload;
    mounted.current = true;
    setReady(true);

    const onPageHide = () => {
      copyRevision.current += 1;
      requestDownload.revoke();
      setDownloadUrl("");
    };
    const onPageShow = () => {
      if (preparedRequest.current && !requestDownload.href) {
        setDownloadUrl(requestDownload.prepare(preparedRequest.current));
      }
    };

    window.addEventListener("pagehide", onPageHide);
    window.addEventListener("pageshow", onPageShow);
    return () => {
      mounted.current = false;
      copyRevision.current += 1;
      requestDownload.revoke();
      if (download.current === requestDownload) download.current = null;
      window.removeEventListener("pagehide", onPageHide);
      window.removeEventListener("pageshow", onPageShow);
    };
  }, []);

  useEffect(() => {
    setValues((previous) => ({ ...previous, linea: selectedService }));
    setErrors((previous) => {
      if (!previous.linea) return previous;
      const next = { ...previous };
      if (selectedService) delete next.linea;
      else next.linea = "Selecciona el servicio que necesitas.";
      return next;
    });
    invalidateSummary();
  }, [selectedService, invalidateSummary]);

  useEffect(() => {
    if (focusField.current && errors[focusField.current]) {
      fields.current[focusField.current]?.focus();
      focusField.current = null;
    }
  }, [errors]);

  const setFieldError = (name: RequestField, message: string | undefined) => {
    setErrors((previous) => {
      const next = { ...previous };
      if (message) next[name] = message;
      else delete next[name];
      return next;
    });
  };

  const changeField = (name: RequestField, value: string) => {
    const next = { ...values, [name]: value };
    setValues(next);
    invalidateSummary();
    if (errors[name]) setFieldError(name, validateRequest(next)[name]);
  };

  const blurField = (name: RequestField) => {
    if (values[name].trim() || errors[name]) {
      setFieldError(name, validateRequest(values)[name]);
    }
  };

  const prepareRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateRequest(values);
    setErrors(nextErrors);
    const firstInvalid = REQUEST_FIELDS.find((name) => nextErrors[name]);
    if (firstInvalid) {
      invalidateSummary();
      focusField.current = firstInvalid;
      setStatus("Revisa los campos indicados para preparar tu solicitud.");
      return;
    }

    const text = formatRequest(values);
    copyRevision.current += 1;
    preparedRequest.current = text;
    setSummary(text);
    setDownloadUrl(download.current?.prepare(text) ?? "");
    setStatus(
      "Tu solicitud está preparada. Puedes copiar o descargar el resumen. Todavía no se ha enviado.",
    );
  };

  const copyRequest = async () => {
    const text = preparedRequest.current;
    if (!text) return;
    const revision = ++copyRevision.current;
    const isCurrent = () =>
      mounted.current && revision === copyRevision.current && preparedRequest.current === text;

    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(text);
      if (isCurrent()) {
        setStatus("Resumen copiado. Puedes guardarlo o compartirlo cuando lo necesites.");
      }
    } catch {
      if (!isCurrent()) return;
      summaryField.current?.focus();
      summaryField.current?.select();
      setStatus(
        "No se pudo copiar automáticamente. El resumen está seleccionado; cópialo con el menú o el teclado de tu dispositivo.",
      );
    }
  };

  return (
    <>
      <div className="contact-panel">
        <form
          id="contact-form"
          className="contact-form"
          action="/contact-unavailable"
          method="post"
          noValidate
          onSubmit={prepareRequest}
        >
          <div className="form-heading">
            <h3>Prepara tu solicitud de cotización</h3>
            <p>Los campos con * son obligatorios.</p>
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor="nombre">
                Tu nombre <span>*</span>
              </label>
              <input
                ref={(node) => {
                  fields.current.nombre = node;
                }}
                id="nombre"
                name="nombre"
                autoComplete="name"
                placeholder="¿Cómo te llamas?"
                required
                minLength={2}
                maxLength={80}
                aria-describedby="nombre-error"
                aria-invalid={errors.nombre ? true : undefined}
                value={values.nombre}
                onChange={(event) => changeField("nombre", event.currentTarget.value)}
                onBlur={() => blurField("nombre")}
              />
              <span className="field-error" id="nombre-error">
                {errors.nombre}
              </span>
            </div>
            <div className="field">
              <label htmlFor="empresa">
                Empresa <span className="optional">(opcional)</span>
              </label>
              <input
                ref={(node) => {
                  fields.current.empresa = node;
                }}
                id="empresa"
                name="empresa"
                autoComplete="organization"
                placeholder="Nombre de tu negocio"
                maxLength={100}
                aria-describedby="empresa-error"
                aria-invalid={errors.empresa ? true : undefined}
                value={values.empresa}
                onChange={(event) => changeField("empresa", event.currentTarget.value)}
                onBlur={() => blurField("empresa")}
              />
              <span className="field-error" id="empresa-error">
                {errors.empresa}
              </span>
            </div>
          </div>
          <div className="field">
            <label htmlFor="email">
              Correo electrónico <span>*</span>
            </label>
            <input
              ref={(node) => {
                fields.current.email = node;
              }}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="tu@empresa.com"
              required
              maxLength={254}
              aria-describedby="email-error"
              aria-invalid={errors.email ? true : undefined}
              value={values.email}
              onChange={(event) => changeField("email", event.currentTarget.value)}
              onBlur={() => blurField("email")}
            />
            <span className="field-error" id="email-error">
              {errors.email}
            </span>
          </div>
          <div className="field">
            <label htmlFor="linea">
              ¿Qué necesitas? <span>*</span>
            </label>
            <select
              ref={(node) => {
                fields.current.linea = node;
              }}
              id="linea"
              name="linea"
              required
              aria-describedby="linea-error"
              aria-invalid={errors.linea ? true : undefined}
              value={values.linea}
              onChange={(event) => changeField("linea", event.currentTarget.value)}
              onBlur={() => blurField("linea")}
            >
              <option value="">Selecciona un servicio</option>
              {Object.entries(SERVICE_LABELS).map(([id, label]) => (
                <option key={id} value={id}>
                  {label}
                </option>
              ))}
            </select>
            <span className="field-error" id="linea-error">
              {errors.linea}
            </span>
          </div>
          <div className="field">
            <label htmlFor="mensaje">
              Cuéntanos un poco más <span>*</span>
            </label>
            <textarea
              ref={(node) => {
                fields.current.mensaje = node;
              }}
              id="mensaje"
              name="mensaje"
              rows={4}
              placeholder="¿Qué quieres mejorar en tu negocio? ¿Cómo trabaja hoy tu equipo?"
              required
              minLength={20}
              maxLength={2000}
              aria-describedby="mensaje-hint mensaje-error"
              aria-invalid={errors.mensaje ? true : undefined}
              value={values.mensaje}
              onChange={(event) => changeField("mensaje", event.currentTarget.value)}
              onBlur={() => blurField("mensaje")}
            />
            <div className="field-meta">
              <span id="mensaje-hint">Al menos 20 caracteres.</span>
              <span id="mensaje-count">{values.mensaje.length} / 2000</span>
            </div>
            <span className="field-error" id="mensaje-error">
              {errors.mensaje}
            </span>
          </div>
          <button className="button button-primary form-submit" type="submit" disabled={!ready}>
            Preparar solicitud <Icon name="arrow" />
          </button>
          <p className="form-privacy">
            Este formulario crea un resumen en tu navegador. No envía ni almacena tus datos en un
            servidor.
          </p>
          <p id="form-status" className="form-status" role="status" aria-live="polite">
            {status}
          </p>
          <noscript>
            <p className="form-status">
              Activa JavaScript para preparar el resumen de tu proyecto. El canal de contacto está
              pendiente de habilitación.
            </p>
          </noscript>
        </form>
      </div>
      <section
        className="request-summary"
        id="request-summary"
        aria-labelledby="summary-title"
        hidden={!summary}
      >
        <h3 id="summary-title">Tu proyecto, en un resumen.</h3>
        <p>Revísalo y guárdalo. La solicitud todavía no se ha enviado.</p>
        <label className="sr-only" htmlFor="request-text">
          Resumen de la solicitud
        </label>
        <textarea ref={summaryField} id="request-text" readOnly rows={10} value={summary} />
        <div className="summary-actions">
          <button
            className="button button-outline"
            id="copy-request"
            type="button"
            onClick={copyRequest}
          >
            Copiar resumen
          </button>
          <a
            className="text-link"
            id="download-request"
            href={downloadUrl || undefined}
            download="solicitud-sigil.txt"
          >
            Descargar <Icon name="download" />
          </a>
        </div>
      </section>
    </>
  );
}
