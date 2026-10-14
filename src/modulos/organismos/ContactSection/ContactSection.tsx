import { Eyebrow } from "../../atomos/Eyebrow/Eyebrow";
import { ContactForm } from "../ContactForm/ContactForm";
import type { ServiceId } from "../../moleculas/ServiceCard/services";
interface ContactSectionProps {
  readonly selectedService: ServiceId | "";
}
export function ContactSection({ selectedService }: ContactSectionProps) {
  return (
    <section className="contact-section" id="contacto" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-copy">
          <Eyebrow>04 / Tu siguiente paso</Eyebrow>
          <h2 id="contact-title">
            Hablemos de
            <br />
            <span className="accent-text">tu proyecto.</span>
          </h2>
          <p>
            ¿Qué quieres mejorar en tu negocio? Empieza por contarnos eso. No necesitas saber qué
            tecnología elegir para dar el primer paso.
          </p>
          <div className="contact-note">
            <span className="note-label mono">SITIO EN VALIDACIÓN</span>
            <p>
              Por ahora puedes preparar y guardar tu solicitud. El canal de contacto se habilitará
              al terminar las pruebas.
            </p>
          </div>
          <div className="contact-signature">
            <img className="signature-logo" src="/sigil-emblem.jpg" width="40" height="40" alt="" />
            <span>Ideas. Sistemas. Resultados.</span>
          </div>
        </div>
        <div className="contact-panel">
          <ContactForm selectedService={selectedService} />
        </div>
      </div>
    </section>
  );
}
