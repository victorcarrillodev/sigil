interface BrandProps {
  readonly footer?: boolean;
}

export function Brand({ footer = false }: BrandProps) {
  return (
    <a
      className="brand"
      href="#top"
      aria-label={footer ? "Sigil, volver al inicio" : "Sigil, inicio"}
    >
      <img
        className="brand-logo"
        src="/sigil-emblem.jpg"
        width="64"
        height="64"
        alt=""
        loading={footer ? "lazy" : "eager"}
      />
      <span className="brand-copy">
        <span className="brand-name">SIGIL</span>
        <span className="brand-tagline">Soluciones digitales</span>
      </span>
    </a>
  );
}
