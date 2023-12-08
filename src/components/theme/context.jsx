import React from "react";
import { LIGHT_THEME } from "./constants";

export const ThemeContext = React.createContext({
  theme: LIGHT_THEME
});