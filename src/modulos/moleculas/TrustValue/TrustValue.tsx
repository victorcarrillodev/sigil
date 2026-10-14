interface TrustValueProps {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

export function TrustValue({ number, title, description }: TrustValueProps) {
  return (
    <div>
      <span className="mono">{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
