import { Icon } from "../../atomos/Icon/Icon";

interface FaqItemProps {
  readonly question: string;
  readonly answer: string;
}

export function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <details>
      <summary>
        {question}
        <Icon name="plus" />
      </summary>
      <p>{answer}</p>
    </details>
  );
}
