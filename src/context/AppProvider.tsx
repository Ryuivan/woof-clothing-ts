import { ThemeProvider } from "@emotion/react";
import { ReactElement } from "react";
import { useThemeContext } from "./ThemeProvider";
import { ProductsProvider } from "./ProductsProvider";
import { CartProvider } from "./CartProvider";
import { CssBaseline } from "@mui/material";

const AppProvider = ({ children }: { children: ReactElement[] }) => {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ProductsProvider>
        <CartProvider>{children}</CartProvider>
      </ProductsProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
