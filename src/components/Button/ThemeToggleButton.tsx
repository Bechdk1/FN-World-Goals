import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import type { ThemeContextProps } from "../../types/types";
import { Button } from "./Button";

export const ThemeToggleButton = () => {
  const { darkMode, toggleTheme } = useContext<ThemeContextProps>(ThemeContext);

  return (
    <Button
      onClick={toggleTheme}
      textValue={darkMode ? "Light mode" : "Dark mode"}
    ></Button>
  );
};
