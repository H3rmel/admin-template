//#region Imports

import Image from "next/image";

import { Menu, MenuItem } from "./Menu";

import {
  IconContext,
  House,
  Faders,
  Bell,
  SignOut,
} from "@phosphor-icons/react";
import { useAuthData } from "@/data/hooks";

//#endregion

export function Sidebar() {
  const { logout } = useAuthData();

  return (
    <IconContext.Provider value={{ size: 24 }}>
      <aside className="layout-aside">
        <figure className="layout-logo">
          <Image src="/logo.svg" width={32} height={32} alt="Webapp Logo" />
        </figure>
        <Menu className="flex-grow">
          <MenuItem url="/" text="Início" icon={<House />} />
          <MenuItem url="/settings" text="Configurações" icon={<Faders />} />
          <MenuItem url="/notifications" text="Notificações" icon={<Bell />} />
        </Menu>
        <Menu>
          <MenuItem
            onClick={logout}
            text="Sair"
            icon={<SignOut />}
            className="justify-self-end text-light-500 bg-accent-500 hover:bg-accent-600 hover:dark:bg-accent-600"
          />
        </Menu>
      </aside>
    </IconContext.Provider>
  );
}
