import type { ComponentPropsWithoutRef } from "react";
import { Icon, type IconName } from "../Icon/Icon";

interface ActionLinkProps extends ComponentPropsWithoutRef<"a"> {
  readonly icon?: IconName;
}

export function ActionLink({
  children,
  className = "text-link",
  icon = "diagonal",
  ...props
}: ActionLinkProps) {
  return (
    <a className={className} {...props}>
      {children}
      <Icon name={icon} />
    </a>
  );
}
