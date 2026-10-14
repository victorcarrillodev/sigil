import type { ReactNode } from "react";

const SHAPES = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  diagonal: <path d="M6 18 18 6M6 6h12v12" />,
  web: (
    <>
      <rect x="4" y="6" width="24" height="20" rx="2" />
      <path d="M4 12h24M9 9h1m3 0h1m-3 7-4 3 4 3m10-6 4 3-4 3m-4-7-2 8" />
    </>
  ),
  management: (
    <>
      <rect x="4" y="4" width="9" height="9" rx="1" />
      <rect x="19" y="4" width="9" height="9" rx="1" />
      <rect x="4" y="19" width="9" height="9" rx="1" />
      <path d="M19 21h9m-9 6h9" />
    </>
  ),
  code: <path d="m10 9-7 7 7 7m12-14 7 7-7 7M19 5l-6 22" />,
  network: (
    <>
      <rect x="11" y="3" width="10" height="8" rx="1" />
      <rect x="3" y="21" width="10" height="8" rx="1" />
      <rect x="19" y="21" width="10" height="8" rx="1" />
      <path d="M16 11v6M8 21v-4h16v4" />
    </>
  ),
  camera: (
    <>
      <path d="M5 9h18l6 10H11ZM13 19l-3 6H4m10-6 7 6m-4-14h3" />
      <circle cx="23" cy="16" r="1" />
    </>
  ),
  server: (
    <>
      <rect x="5" y="4" width="22" height="10" rx="2" />
      <rect x="5" y="18" width="22" height="10" rx="2" />
      <path d="M10 9h1m-1 14h1m7-14h5m-5 14h5" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  download: <path d="M12 3v12m-5-5 5 5 5-5M5 16v4h14v-4" />,
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof SHAPES;
const LARGE_ICONS: ReadonlySet<IconName> = new Set([
  "web",
  "management",
  "code",
  "network",
  "camera",
  "server",
]);

interface IconProps {
  readonly name: IconName;
  readonly className?: string;
}

export function Icon({ name, className = "icon" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox={LARGE_ICONS.has(name) ? "0 0 32 32" : "0 0 24 24"}
      aria-hidden="true"
      focusable="false"
    >
      {SHAPES[name]}
    </svg>
  );
}
