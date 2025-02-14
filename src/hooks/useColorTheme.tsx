import { createTheme, PaletteMode } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { getDesignTokens } from "../theme/theme";

const useColorTheme = () => {
  const getInitialMode = (): PaletteMode => {
    return (localStorage.getItem("themeMode") as PaletteMode) || "light";
  };

  const [mode, setMode] = useState<PaletteMode>(getInitialMode);

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const toggleColorMode = (newMode: PaletteMode) => {
    setMode(newMode);
    localStorage.setItem("themeMode", newMode);
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

export default useColorTheme;