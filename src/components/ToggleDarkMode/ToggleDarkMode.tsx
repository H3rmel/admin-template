import { Moon, Sun } from "@phosphor-icons/react";

import { useAppData } from "@/data/hooks/useAppData";

export function ToggleDarkMode() {
  const appData = useAppData();

  return (
    <button onClick={appData.switchTheme} className="layout-toggleDarkMode">
      {appData.theme === "dark" ? <Moon size={32} /> : <Sun size={32} />}
    </button>
  );
}
