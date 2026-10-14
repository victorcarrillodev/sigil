import { Eyebrow } from "../../atomos/Eyebrow/Eyebrow";
import { FaqItem } from "../../moleculas/FaqItem/FaqItem";
const QUESTIONS = [
  {
    question: "¿Qué información ayuda a comenzar?",
    answer:
      "Cuéntanos qué quieres mejorar y cómo trabaja hoy tu equipo. Si tienes una fecha o un presupuesto en mente, compártelos con nosotros. Te ayudamos a definir la parte técnica.",
  },
  {
    question: "¿Pueden trabajar con lo que ya tenemos?",
    answer:
      "Sí. Revisamos tus herramientas y equipos para aprovechar lo que ya funciona. Te explicamos qué podemos integrar y qué conviene actualizar antes de comenzar.",
  },
  {
    question: "¿Necesito saber exactamente qué solución quiero?",
    answer:
      "Puedes empezar contándonos qué te está costando trabajo: una tarea repetitiva, información dispersa o problemas de conexión. Nosotros te ayudamos a encontrar las alternativas y elegir la más adecuada para tu negocio.",
  },
  {
    question: "¿Cómo se determina el costo y el tiempo?",
    answer:
      "Cada proyecto tiene necesidades distintas. Después de conocer las tuyas, te presentamos una propuesta con costos, tiempos y entregables para que decidas antes de contratar.",
  },
  {
    question: "¿Qué pasa después de la entrega?",
    answer:
      "Te entregamos la documentación y orientamos a tu equipo según lo acordado. Si necesitas mantenimiento, actualizaciones o soporte, te explicamos las opciones y sus condiciones en la propuesta.",
  },
  {
    question: "¿El alojamiento, los equipos y el soporte están incluidos?",
    answer:
      "Te indicamos qué incluye tu propuesta y qué se cotiza por separado: alojamiento, licencias, equipos y soporte. También revisamos qué recursos ya tienes para que sepas exactamente qué necesitas contratar.",
  },
] as const;
export function Faq() {
  return (
    <section className="faq-section container" id="preguntas" aria-labelledby="faq-title">
      <div>
        <Eyebrow>Antes de empezar</Eyebrow>
        <h2 id="faq-title">
          Resolvemos
          <br />
          tus dudas.
        </h2>
      </div>
      <div className="faq-list">
        {QUESTIONS.map((item) => (
          <FaqItem key={item.question} {...item} />
        ))}
      </div>
    </section>
  );
}
