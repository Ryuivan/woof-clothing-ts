import { Route, Routes } from "react-router";
import { routes } from "./routes";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { useThemeContext } from "./context/ThemeProvider";
import MainLayout from "./components/layout/MainLayout";
import Header from "./components/layout/Header";

function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
        <Header />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
