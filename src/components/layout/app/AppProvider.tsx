import { ThemeProvider } from "@emotion/react";
import { ReactElement } from "react";
import { useThemeContext } from "../../../context/ThemeProvider";
import { ProductsProvider } from "../../../context/ProductsProvider";
import { CartProvider } from "../../../context/CartProvider";
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
