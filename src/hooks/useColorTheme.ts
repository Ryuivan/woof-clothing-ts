import { createTheme, PaletteMode } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { getDesignTokens } from "../theme/theme";

export const useColorTheme = () => {
  const getInitialMode = (): PaletteMode => {
    return (localStorage.getItem("themeMode") as PaletteMode) || "light";
  };

  const [mode, setMode] = useState<PaletteMode>(getInitialMode);

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const toggleColorMode = () => {
    setMode((prevMode: PaletteMode): PaletteMode => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", newMode);

      return newMode;
    });
  };

  const modifiedTheme = useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};
