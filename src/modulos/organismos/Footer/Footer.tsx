import { ActionLink } from "../../atomos/ActionLink/ActionLink";
import { Brand } from "../../moleculas/Brand/Brand";
import { FooterColumn, type FooterLink } from "../../moleculas/FooterColumn/FooterColumn";

const COLUMNS: readonly { id: string; title: string; links: readonly FooterLink[] }[] = [
  {
    id: "footer-software-title",
    title: "Software y web",
    links: [
      { href: "#servicio-web", service: "web", label: "Web y comercio electrónico" },
      { href: "#servicio-management", service: "management", label: "Sistemas de gestión" },
      { href: "#servicio-custom", service: "custom", label: "Software a medida" },
    ],
  },
  {
    id: "footer-infrastructure-title",
    title: "Infraestructura",
    links: [
      { href: "#servicio-support", service: "support", label: "Soporte TI y redes" },
      { href: "#servicio-security", service: "security", label: "Videovigilancia" },
      { href: "#servicio-servers", service: "servers", label: "Servidores y respaldos" },
    ],
  },
  {
    id: "footer-project-title",
    title: "Tu proyecto",
    links: [
      { href: "#enfoque", label: "Nuestro enfoque" },
      { href: "#proceso", label: "Cómo trabajamos" },
      { href: "#preguntas", label: "Preguntas frecuentes" },
      { href: "#contacto", label: "Quiero cotizar" },
    ],
  },
];
interface FooterProps {
  readonly onServiceNavigate: () => void;
}

export function Footer({ onServiceNavigate }: FooterProps) {
  return (
    <footer className="site-footer" id="pie-de-pagina">
      <div className="container footer-layout">
        <div className="footer-identity">
          <Brand footer />
          <p>Web, software e infraestructura para tu negocio.</p>
        </div>
        {COLUMNS.map((column) => (
          <FooterColumn key={column.id} {...column} onServiceNavigate={onServiceNavigate} />
        ))}
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Sigil · Soluciones digitales</p>
      </div>
    </footer>
  );
}
