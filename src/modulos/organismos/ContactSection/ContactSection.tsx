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
          <h2 id="contact-title">
            Hablemos de
            <br />
            <span className="accent-text">tu proyecto.</span>
          </h2>
          <p>
            ¿Qué quieres mejorar en tu negocio? Empieza por contarnos eso. No necesitas saber qué
            tecnología elegir para dar el primer paso.
          </p>
        </div>
        <ContactForm selectedService={selectedService} />
      </div>
    </section>
  );
}
