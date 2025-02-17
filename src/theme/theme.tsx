import { createTheme, PaletteMode, responsiveFontSizes } from "@mui/material";
import { amber, grey } from "@mui/material/colors";

let theme = createTheme({
  palette: {
    primary: amber,
  },
});

theme = responsiveFontSizes(theme);

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: amber,
          divider: "#fac600",
          background: {
            default: grey[100],
            primary: grey[300],
            paper: grey[50],
            navbar: "rgba(241, 241, 241, 0.6)",
          },
          text: {
            primary: "#252627",
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: grey,
          divider: "#fac600",
          background: {
            default: "#121212",
            paper: grey[900],
            navbar: "rgba(0, 0, 0, 0.6)",
          },
          text: {
            primary: "#f1f1f1",
            secondary: grey[300],
          },
        }),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default theme;
