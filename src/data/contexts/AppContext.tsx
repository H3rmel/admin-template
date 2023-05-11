import { createContext, useState } from "react";

//#region Types & Imports

type Theme = "dark" | "";

interface AppContextProps {
  theme?: Theme;
  switchTheme?: () => void;
}

interface AppProviderProps {
  children: React.ReactNode;
}

//#endregion

const AppContext = createContext<AppContextProps>({});

export function AppProvider({ children }: AppProviderProps) {
  const [theme, setTheme] = useState<Theme>("");

  const switchTheme = () => {
    setTheme(theme === "" ? "dark" : "");
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        switchTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
