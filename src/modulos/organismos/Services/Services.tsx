import { useEffect, useRef } from "react";
import { ActionLink } from "../../atomos/ActionLink/ActionLink";
import { isPrimaryLinkClick } from "../../atomos/ActionLink/anchor-events";
import { Eyebrow } from "../../atomos/Eyebrow/Eyebrow";
import { ServiceCard } from "../../moleculas/ServiceCard/ServiceCard";
import {
  SERVICES,
  filterServices,
  serviceForHash,
  type ServiceFilter,
  type ServiceId,
} from "../../moleculas/ServiceCard/services";
import { ServiceFilters } from "../../moleculas/ServiceFilters/ServiceFilters";

interface ServicesProps {
  readonly filter: ServiceFilter;
  readonly onFilterChange: (value: ServiceFilter) => void;
  readonly onServiceSelect: (value: ServiceId) => void;
}

export function Services({ filter, onFilterChange, onServiceSelect }: ServicesProps) {
  const cardRefs = useRef<Partial<Record<ServiceId, HTMLElement | null>>>({});
  const visible = filterServices(filter);
  useEffect(() => {
    let frame = 0;
    const revealHashTarget = () => {
      const service = serviceForHash(window.location.hash);
      if (!service) return;
      onFilterChange("all");
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() =>
        cardRefs.current[service.id]?.scrollIntoView({ block: "start" }),
      );
    };
    revealHashTarget();
    window.addEventListener("hashchange", revealHashTarget);
    return () => {
      window.removeEventListener("hashchange", revealHashTarget);
      window.cancelAnimationFrame(frame);
    };
  }, [onFilterChange]);

  return (
    <section className="section services container" id="servicios" aria-labelledby="services-title">
      <div className="section-heading">
        <div>
          <Eyebrow>01 / Lo que hacemos</Eyebrow>
          <h2 id="services-title">
            ¿Qué necesita
            <br />
            tu negocio hoy?
          </h2>
        </div>
        <p>
          Una web para mostrar tus servicios, un sistema para llevar tus ventas o una red que
          funcione mejor. Podemos ayudarte con una necesidad puntual o con varias a la vez.
        </p>
      </div>
      <div className="service-toolbar">
        <ServiceFilters value={filter} onChange={onFilterChange} total={SERVICES.length} />
        <span className="toolbar-note mono" aria-hidden="true">
          DE LA IDEA A LA IMPLEMENTACIÓN
        </span>
      </div>
      <p className="sr-only" id="services-status" role="status" aria-live="polite">
        Mostrando {visible.length} servicios.
      </p>
      <div className="services-grid">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            hidden={filter !== "all" && service.category !== filter}
            onSelect={onServiceSelect}
            cardRef={(node) => {
              cardRefs.current[service.id] = node;
            }}
          />
        ))}
      </div>
      <div className="services-bottom">
        <p>¿Necesitas conectar varias soluciones? En Sigil las trabajamos como un solo proyecto.</p>
        <ActionLink
          href="#contacto"
          icon="arrow"
          data-service="integral"
          onClick={(event) => {
            if (isPrimaryLinkClick(event)) onServiceSelect("integral");
          }}
        >
          Preparar mi proyecto
        </ActionLink>
      </div>
    </section>
  );
}
