import { createContext, useEffect, useState } from "react";
import type { ThemeContextProps, ProviderProps } from "../types/types";

export const ThemeContext = createContext<ThemeContextProps>({
  darkMode: false,
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }: ProviderProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((current) => !current);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
