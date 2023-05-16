//#region Imports

import { Moon, Sun } from "@phosphor-icons/react";

import { useAppData } from "@/data/hooks/useAppData";

//#endregion

interface ToggleDarkModeProps {
  className?: string;
}

export function ToggleDarkMode({ className }: ToggleDarkModeProps) {
  const appData = useAppData();

  return (
    <button
      type="button"
      onClick={appData.switchTheme}
      className={`layout-toggleDarkMode ${className}`}
      title="Toggle Dark Mode"
    >
      {appData.theme === "dark" ? <Moon size={32} /> : <Sun size={32} />}
    </button>
  );
}
