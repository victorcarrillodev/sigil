import { isPrimaryLinkClick } from "../../atomos/ActionLink/anchor-events";
import type { ServiceId } from "../ServiceCard/services";

export interface FooterLink {
  readonly label: string;
  readonly href: string;
  readonly service?: ServiceId;
}
interface FooterColumnProps {
  readonly id: string;
  readonly title: string;
  readonly links: readonly FooterLink[];
  readonly onServiceNavigate: () => void;
}

export function FooterColumn({ id, title, links, onServiceNavigate }: FooterColumnProps) {
  return (
    <nav className="footer-column" aria-labelledby={id}>
      <h2 id={id}>{title}</h2>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              data-service-target={link.service}
              onClick={(event) => {
                if (link.service && isPrimaryLinkClick(event)) onServiceNavigate();
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
