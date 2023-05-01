import Image from "next/image";

import { Menu, MenuItem } from "./Menu";

import { IconContext, House, Faders, Bell } from "@phosphor-icons/react";

export function Sidebar() {
  return (
    <IconContext.Provider value={{ size: 24 }}>
      <aside className="layout-aside">
        <figure className="layout-logo">
          <Image src="/logo.svg" width={32} height={23} alt="Webapp Logo" />
        </figure>
        <Menu>
          <MenuItem url="/" text="Início" icon={<House />} />
          <MenuItem url="/settings" text="Configurações" icon={<Faders />} />
          <MenuItem url="/notifications" text="Notificações" icon={<Bell />} />
        </Menu>
      </aside>
    </IconContext.Provider>
  );
}
