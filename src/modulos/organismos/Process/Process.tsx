import { Eyebrow } from "../../atomos/Eyebrow/Eyebrow";
import { ProcessStep, type ProcessStepContent } from "../../moleculas/ProcessStep/ProcessStep";
const STEPS: readonly ProcessStepContent[] = [
  {
    description:
      "Escuchamos lo que quieres lograr y conocemos cómo trabaja tu equipo para identificar dónde podemos ayudarte.",
    title: "Entendemos",
    output: "Problema y prioridades",
    number: "01",
    last: false,
  },
  {
    description:
      "Te presentamos una propuesta con lo que construiremos, cuánto costará y los tiempos de entrega. Tú decides con toda la información.",
    title: "Definimos",
    output: "Alcance, entregables y condiciones",
    number: "02",
    last: false,
  },
  {
    description:
      "Damos forma a tu solución por etapas. Revisamos los avances contigo y la probamos con las tareas que tu equipo realiza cada día.",
    title: "Construimos",
    output: "Revisiones y pruebas de uso",
    number: "03",
    last: false,
  },
  {
    description:
      "Te entregamos tu solución y orientamos a tu equipo para usarla. También acordamos el soporte y mantenimiento que necesites.",
    title: "Acompañamos",
    output: "Documentación, accesos y soporte",
    number: "04",
    last: true,
  },
];
export function Process() {
  return (
    <section className="section process container" id="proceso" aria-labelledby="process-title">
      <div className="section-heading">
        <div>
          <Eyebrow>03 / Cómo trabajamos</Eyebrow>
          <h2 id="process-title">
            Un buen resultado
            <br />
            empieza con claridad.
          </h2>
        </div>
        <p>
          Te acompañamos desde la primera idea hasta la entrega. En cada etapa sabes qué estamos
          haciendo y cuál es el siguiente paso.
        </p>
      </div>
      <ol className="process-grid">
        {STEPS.map((step) => (
          <ProcessStep key={step.number} {...step} />
        ))}
      </ol>
    </section>
  );
}
