export function QuoteProposal() {
  return (
    <aside className="solution-example" id="ejemplo-integracion" aria-labelledby="example-title">
      <div className="example-heading">
        <p className="mono">PARA DECIDIR CON CLARIDAD</p>
        <h3 id="example-title">
          Antes de contratar,
          <br />
          conoce tu propuesta.
        </h3>
        <p>Te explicamos qué vamos a hacer, cuánto cuesta y cómo te lo entregamos.</p>
      </div>
      {/* biome-ignore lint/a11y/noRedundantRoles: Safari needs this role for a list with list-style none outside nav. */}
      <ol className="example-flow" role="list">
        <li>
          <span className="example-number" aria-hidden="true">
            01
          </span>
          <div>
            <h4>Qué vamos a resolver</h4>
            <p>
              Tu propuesta describe la solución, las funciones o instalaciones que incluye y lo que
              necesitamos de ti para comenzar.
            </p>
            <span className="example-result">Alcance y entregables</span>
          </div>
        </li>
        <li>
          <span className="example-number" aria-hidden="true">
            02
          </span>
          <div>
            <h4>Cuánto vas a invertir</h4>
            <p>
              Detallamos los costos del proyecto y distinguimos equipos, licencias, alojamiento y
              mantenimiento cuando apliquen.
            </p>
            <span className="example-result">Costos y condiciones</span>
          </div>
        </li>
        <li>
          <span className="example-number" aria-hidden="true">
            03
          </span>
          <div>
            <h4>Cómo recibirás tu solución</h4>
            <p>
              Acordamos las etapas, los tiempos y las pruebas. También dejamos claro qué orientación
              y soporte incluye la entrega.
            </p>
            <span className="example-result">Entrega y acompañamiento</span>
          </div>
        </li>
      </ol>
      <p className="example-note">
        Primero revisas la propuesta. Después decides si quieres trabajar con Sigil.
      </p>
    </aside>
  );
}
