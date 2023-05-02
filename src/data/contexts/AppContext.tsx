import { createContext, useState } from "react";

type Theme = "dark" | "";

interface AppContextProps {
  theme?: Theme;
  switchTheme?: () => void;
}

const AppContext = createContext<AppContextProps>({});

interface AppProviderProps {
  children: React.ReactNode;
}

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
