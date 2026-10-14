import { Icon } from "../../atomos/Icon/Icon";
import "./ProcessStep.css";

export interface ProcessStepContent {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly last?: boolean;
}

export function ProcessStep({
  number,
  title,
  description,
  last = false,
}: ProcessStepContent) {
  return (
    <li>
      <div className="process-step-top">
        <span className="step-number">{number}</span>
        <Icon name={last ? "check" : "arrow"} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
