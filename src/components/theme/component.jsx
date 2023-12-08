import { useCallback } from "react";
import { useState } from "react";
import { ThemeContext } from "./context";
import { DARK_THEME, LIGHT_THEME } from "./constants";

export const ThemeProvider = ({ children, defaultTheme = LIGHT_THEME }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME))
    },[]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};