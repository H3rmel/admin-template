import Link from "next/link";

import { ReactNode } from "react";

interface MenuProps {
  children: ReactNode;
}

export function Menu({ children }: MenuProps) {
  return <ul className="layout-aside-links">{children}</ul>;
}

interface MenuItemProps {
  url: string;
  text: string;
  icon: ReactNode;
}

export function MenuItem({ url, text, icon }: MenuItemProps) {
  return (
    <li>
      <Link href={url} className="layout-aside-link">
        {icon}
        <span>{text}</span>
      </Link>
    </li>
  );
}
