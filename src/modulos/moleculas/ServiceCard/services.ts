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
      "Haz que tus clientes encuentren lo que ofreces y sepan cómo comprarte. Diseñamos sitios, catálogos y tiendas con tus productos, servicios y formas de contacto.",
    tags: ["Sitios web", "Portales", "Comercio electrónico"],
    action: "Cotizar mi web",
  },
  {
    id: "management",
    number: "02",
    category: "software",
    icon: "management",
    description:
      "Deja de buscar información entre archivos y mensajes. Reúne clientes, ventas, inventarios y cotizaciones en un sistema pensado para las tareas de tu negocio.",
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
      "Dedica menos tiempo a tareas repetitivas. Creamos herramientas que se adaptan a tu forma de trabajar, conectan tus aplicaciones y reducen la captura duplicada de datos.",
    tags: ["Integraciones", "Automatización", "Aplicaciones"],
    action: "Cotizar software a medida",
  },
  {
    id: "support",
    number: "04",
    category: "infrastructure",
    icon: "network",
    description:
      "¿El Wi-Fi falla o tus equipos te hacen perder tiempo? Revisamos el problema y resolvemos la configuración, el cableado o el mantenimiento que necesites.",
    tags: ["Redes", "Wi-Fi empresarial", "Mantenimiento"],
    action: "Cotizar soporte y redes",
  },
  {
    id: "security",
    number: "05",
    category: "infrastructure",
    icon: "camera",
    description:
      "Mantén a la vista lo que ocurre en tu negocio. Diseñamos e instalamos sistemas de cámaras para tus espacios, con acceso a las grabaciones y almacenamiento según tus necesidades.",
    tags: ["Cámaras IP", "Grabación NVR", "Acceso remoto"],
    action: "Cotizar mis cámaras",
  },
  {
    id: "servers",
    number: "06",
    category: "infrastructure",
    icon: "server",
    description:
      "Cuida la información que sostiene tu negocio. Configuramos servidores, accesos y respaldos para tus aplicaciones, con un plan para recuperar tus datos cuando lo necesites.",
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
