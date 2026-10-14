import type { ReactNode } from "react";

interface EyebrowProps {
  readonly children: ReactNode;
  readonly withLine?: boolean;
}

export function Eyebrow({ children, withLine = false }: EyebrowProps) {
  return (
    <p className="eyebrow">
      {withLine && <span className="accent-line" />}
      {children}
    </p>
  );
}
