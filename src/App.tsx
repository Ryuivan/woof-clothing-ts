import { Route, Routes } from "react-router";
import { routes } from "./routes";
import MainLayout from "./components/layout/MainLayout";
import Header from "./components/layout/header/Header";
import AppProvider from "./context/AppProvider";

function App() {
  return (
    <AppProvider>
      <Header />
      <MainLayout>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </MainLayout>
    </AppProvider>
  );
}

export default App;
