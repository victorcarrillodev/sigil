import type { ServiceFilter } from "../ServiceCard/services";

const FILTERS = [
  { value: "all", label: "Todos los servicios" },
  { value: "software", label: "Software y web" },
  { value: "infrastructure", label: "Infraestructura" },
] as const;

interface ServiceFiltersProps {
  readonly value: ServiceFilter;
  readonly onChange: (filter: ServiceFilter) => void;
  readonly total: number;
}

export function ServiceFilters({ value, onChange, total }: ServiceFiltersProps) {
  return (
    <fieldset className="service-filters" id="service-filters">
      <legend className="sr-only">Filtrar servicios</legend>
      {FILTERS.map((filter) => (
        <button
          key={filter.value}
          className="filter-button"
          type="button"
          data-filter={filter.value}
          aria-pressed={value === filter.value}
          onClick={() => onChange(filter.value)}
        >
          {filter.label}
          {filter.value === "all" && <span>{String(total).padStart(2, "0")}</span>}
        </button>
      ))}
    </fieldset>
  );
}
