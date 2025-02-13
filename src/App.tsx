import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { useThemeContext } from "./theme/ThemeContextProvider";
import MainLayout from "./layout/MainLayout";

function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
        <RouterProvider router={router} />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
