/* eslint-disable react-refresh/only-export-components */
import { createTheme, PaletteMode, Theme } from "@mui/material";
import { createContext, FC, PropsWithChildren, useContext } from "react";
import useColorTheme from "../hooks/useColorTheme";

type ThemeContextType = {
  mode: string;
  theme: Theme;
  toggleColorMode: (newMode: PaletteMode) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  theme: createTheme(),
  toggleColorMode: () => {},
});

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = useColorTheme();

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
