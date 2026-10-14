import type { IconName } from "../../atomos/Icon/Icon";

export const SERVICE_LABELS = {
  web: "Sitios web y tiendas en línea",
  management: "Sistemas de gestión",
  custom: "Software a medida",
  support: "Soporte TI y redes",
  security: "Videovigilancia",
  servers: "Servidores y respaldos",
  integral: "No estoy seguro / Necesito orientación",
} as const;

export type ServiceId = keyof typeof SERVICE_LABELS;
export type ServiceCategory = "software" | "infrastructure";
export type ServiceFilter = "all" | ServiceCategory;

export interface Service {
  readonly title?: string;
  readonly id: Exclude<ServiceId, "integral">;
  readonly number: string;
  readonly category: ServiceCategory;
  readonly icon: IconName;
  readonly description: string;
  readonly tags: readonly string[];
  readonly action: string;
}

export const SERVICES: readonly Service[] = [
  {
    id: "web",
    number: "01",
    category: "software",
    icon: "web",
    description:
      "Presenta tus servicios o vende tus productos con una web que facilite a tus clientes dar el siguiente paso.",
    tags: ["Sitios web", "Portales", "Comercio electrónico"],
    action: "Cotizar mi web",
  },
  {
    id: "management",
    number: "02",
    category: "software",
    icon: "management",
    description:
      "Reúne ventas, clientes e inventarios en un sistema que tu equipo pueda consultar y mantener al día.",
    tags: ["Clientes y ventas", "Inventarios", "Paneles de control"],
    action: "Cotizar mi sistema",
  },
  {
    id: "custom",
    title: "Software a tu medida",
    number: "03",
    category: "software",
    icon: "code",
    description:
      "Creamos herramientas para tu forma de trabajar y conectamos tus aplicaciones para reducir la captura manual de datos.",
    tags: ["Integraciones", "Automatización", "Aplicaciones"],
    action: "Cotizar software a medida",
  },
  {
    id: "support",
    number: "04",
    category: "infrastructure",
    icon: "network",
    description:
      "Resolvemos fallas de conexión y equipos. Revisamos tu instalación y atendemos la configuración o el mantenimiento que necesites.",
    tags: ["Redes", "Wi-Fi empresarial", "Mantenimiento"],
    action: "Cotizar soporte y redes",
  },
  {
    id: "security",
    number: "05",
    category: "infrastructure",
    icon: "camera",
    description:
      "Instalamos cámaras según tus espacios y configuramos el acceso a las grabaciones para que puedas consultar lo que ocurre.",
    tags: ["Cámaras IP", "Grabación NVR", "Acceso remoto"],
    action: "Cotizar mis cámaras",
  },
  {
    id: "servers",
    number: "06",
    category: "infrastructure",
    icon: "server",
    description:
      "Organizamos dónde guardar tu información, quién puede acceder y cómo recuperarla ante un imprevisto.",
    tags: ["Servidores", "Nube", "Copias de seguridad"],
    action: "Cotizar servidores y respaldos",
  },
];

export function serviceForHash(hash: string): Service | undefined {
  return SERVICES.find((service) => hash === `#servicio-${service.id}`);
}

export function filterServices(filter: ServiceFilter): readonly Service[] {
  return filter === "all" ? SERVICES : SERVICES.filter((service) => service.category === filter);
}
