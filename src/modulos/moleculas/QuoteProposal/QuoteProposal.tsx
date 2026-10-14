export function QuoteProposal() {
  return (
    <aside className="solution-example" id="ejemplo-integracion" aria-labelledby="example-title">
      <div className="example-heading">
        <h3 id="example-title">
          Todo claro,
          <br />
          desde el principio.
        </h3>
        <p>Esto es lo que conocerás antes de contratar.</p>
      </div>
      {/* biome-ignore lint/a11y/noRedundantRoles: Safari needs this role for a list with list-style none outside nav. */}
      <ol className="example-flow" role="list">
        <li>
          <span className="example-number" aria-hidden="true">
            01
          </span>
          <div>
            <h4>Qué incluye tu proyecto</h4>
            <p>La solución, sus entregables y lo que necesitamos de ti para comenzar.</p>
          </div>
        </li>
        <li>
          <span className="example-number" aria-hidden="true">
            02
          </span>
          <div>
            <h4>Cuánto vas a invertir</h4>
            <p>
              El costo del proyecto y los gastos de equipos, licencias o mantenimiento que apliquen.
            </p>
          </div>
        </li>
        <li>
          <span className="example-number" aria-hidden="true">
            03
          </span>
          <div>
            <h4>Cómo y cuándo lo recibirás</h4>
            <p>Las etapas, los tiempos acordados y el acompañamiento incluido en la entrega.</p>
          </div>
        </li>
      </ol>
      <p className="example-note">
        Primero revisas la propuesta. Después decides si quieres trabajar con Sigil.
      </p>
    </aside>
  );
}
