import { ReactNode } from "react";

interface ContentProps {
  children?: ReactNode;
}

export function Content({ children }: ContentProps) {
  return <section className="flex flex-col mt-7">{children}</section>;
}
