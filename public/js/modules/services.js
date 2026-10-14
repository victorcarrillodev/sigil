export const SERVICE_LABELS = Object.freeze({
  web: "Sitios web y tiendas en línea",
  management: "Sistemas de gestión",
  custom: "Software a medida",
  support: "Soporte TI y redes",
  security: "Videovigilancia",
  servers: "Servidores y respaldos",
  integral: "No estoy seguro / Necesito orientación",
});

export function initServices() {
  const filters = document.getElementById("service-filters");
  const cards = Array.from(document.querySelectorAll(".service-card[data-category]"));
  const status = document.getElementById("services-status");

  const buttons = Array.from(filters?.querySelectorAll("button[data-filter]") ?? []);
  const validFilters = new Set(["all", "software", "infrastructure"]);
  let currentFilter;

  const applyFilter = (filter) => {
    if (!validFilters.has(filter) || filter === currentFilter) return;
    currentFilter = filter;

    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
    });

    let count = 0;
    cards.forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
      if (!card.hidden) count += 1;
    });

    if (status) {
      status.textContent = `Mostrando ${count} ${count === 1 ? "servicio" : "servicios"}.`;
    }
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.filter));
  });

  const initialFilter = buttons.find((button) => button.getAttribute("aria-pressed") === "true");
  applyFilter(initialFilter?.dataset.filter ?? "all");

  const targetForService = (service) => {
    if (!Object.hasOwn(SERVICE_LABELS, service)) return undefined;
    return cards.find((card) => card.id === `servicio-${service}`);
  };

  document.querySelectorAll("a[data-service-target]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return;
      if (targetForService(link.dataset.serviceTarget)) applyFilter("all");
    });
  });

  const revealHashTarget = () => {
    const prefix = "#servicio-";
    if (!window.location.hash.startsWith(prefix)) return;
    const target = targetForService(window.location.hash.slice(prefix.length));
    if (!target) return;
    const wasHidden = target.hidden;
    applyFilter("all");
    if (wasHidden) target.scrollIntoView({ block: "start" });
  };

  window.addEventListener("hashchange", revealHashTarget);
  revealHashTarget();

  const serviceSelect = document.getElementById("linea");
  if (!serviceSelect) return;

  document.querySelectorAll("a[data-service]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return;

      const service = link.dataset.service;
      const available = Array.from(serviceSelect.options).some(
        (option) => option.value === service,
      );
      if (!available) return;

      serviceSelect.value = service;
      serviceSelect.dispatchEvent(new Event("change", { bubbles: true }));
    });
  });
}
