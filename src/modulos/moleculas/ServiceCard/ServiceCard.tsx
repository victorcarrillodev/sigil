import type { Ref } from "react";
import { ActionLink } from "../../atomos/ActionLink/ActionLink";
import { isPrimaryLinkClick } from "../../atomos/ActionLink/anchor-events";
import { Icon } from "../../atomos/Icon/Icon";
import { SERVICE_LABELS, type Service, type ServiceId } from "./services";

interface ServiceCardProps {
  readonly service: Service;
  readonly hidden: boolean;
  readonly onSelect: (service: ServiceId) => void;
  readonly cardRef?: Ref<HTMLElement>;
}

export function ServiceCard({ service, hidden, onSelect, cardRef }: ServiceCardProps) {
  return (
    <article
      className="service-card"
      id={`servicio-${service.id}`}
      data-category={service.category}
      hidden={hidden}
      ref={cardRef}
    >
      <div className="card-top">
        <Icon className="service-icon" name={service.icon} />
        <span className="mono">{service.number}</span>
      </div>
      <h3>{service.title ?? SERVICE_LABELS[service.id]}</h3>
      <p>{service.description}</p>
      <ul className="service-tags" aria-label="Incluye">
        {service.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <ActionLink
        className="card-link"
        href="#contacto"
        data-service={service.id}
        onClick={(event) => {
          if (isPrimaryLinkClick(event)) onSelect(service.id);
        }}
      >
        {service.action}
      </ActionLink>
    </article>
  );
}
