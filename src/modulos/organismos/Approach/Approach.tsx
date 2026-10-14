import { ActionLink } from "../../atomos/ActionLink/ActionLink";
import { Eyebrow } from "../../atomos/Eyebrow/Eyebrow";
import { QuoteProposal } from "../../moleculas/QuoteProposal/QuoteProposal";
import { TrustValue } from "../../moleculas/TrustValue/TrustValue";

const VALUES = [
  {
    number: "01",
    title: "Empieza con lo que necesitas",
    description:
      "Puedes contratar un servicio puntual. Te explicamos cuándo conviene conectarlo con otras herramientas que ya utilizas.",
  },
  {
    number: "02",
    title: "Trato directo",
    description:
      "Hablas con el equipo que desarrolla tu proyecto. Resolvemos tus dudas y revisamos contigo cada avance.",
  },
  {
    number: "03",
    title: "Una entrega que puedes usar",
    description:
      "Probamos la solución contigo y te damos los accesos y la orientación acordados para que tu equipo pueda usarla.",
  },
] as const;

export function Approach() {
  return (
    <section className="approach light-section" id="enfoque" aria-labelledby="approach-title">
      <div className="container approach-grid">
        <div className="approach-copy">
          <Eyebrow>02 / Nuestro enfoque</Eyebrow>
          <h2 id="approach-title">
            La tecnología
            <br />
            debería resolver.
            <br />
            <span className="muted-heading">No complicar.</span>
          </h2>
          <p>
            Tu web, tus sistemas y tu red forman parte del mismo negocio. Los conectamos para que la
            información fluya y tu equipo pueda trabajar con menos pasos y más claridad.
          </p>
          <p>
            Primero escuchamos lo que necesitas. Después te proponemos una solución pensada para tu
            operación, tus prioridades y tu presupuesto.
          </p>
          <ActionLink href="#proceso" icon="arrow">
            Así lo llevamos a la práctica
          </ActionLink>
        </div>
        <QuoteProposal />
      </div>
      <div className="container approach-values">
        {VALUES.map((value) => (
          <TrustValue key={value.number} {...value} />
        ))}
      </div>
    </section>
  );
}
