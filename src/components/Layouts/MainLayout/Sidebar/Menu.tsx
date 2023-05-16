//#region Imports

import Link from "next/link";

import { ReactNode } from "react";

//#endregion

//#region Interfaces

interface MenuProps {
  children: ReactNode;
  className?: string;
}

interface MenuItemProps {
  url?: string;
  text: string;
  icon: ReactNode;
  className?: string;
  onClick?: (e: any) => void;
}

//#endregion

export function Menu({ children, className }: MenuProps) {
  return <ul className={`layout-aside-links ${className}`}>{children}</ul>;
}

export function MenuItem({
  url,
  text,
  icon,
  className,
  onClick,
}: MenuItemProps) {
  return (
    <li>
      {url ? (
        <Link href={url} className={`layout-aside-link ${className}`}>
          {icon}
          <span>{text}</span>
        </Link>
      ) : (
        <button type="button" onClick={onClick} className={`layout-aside-link ${className}`}>
          {icon}
          <span>{text}</span>
        </button>
      )}
    </li>
  );
}
