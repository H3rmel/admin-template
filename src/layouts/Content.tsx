import { ReactNode } from "react";

interface ContentProps {
  children?: ReactNode;
}

export function Content({ children }: ContentProps) {
  return <section className="layout-content">{children}</section>;
}
