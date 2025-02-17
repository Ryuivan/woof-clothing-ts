import { Route, Routes } from "react-router";
import { routes } from "./routes";
import MainLayout from "./components/layout/MainLayout";
import Header from "./components/layout/header/Header";
import AppProvider from "./context/AppProvider";
import { Bounce, ToastContainer } from "react-toastify";
import Footer from "./components/layout/footer/Footer";

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
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Bounce}
      />
    </AppProvider>
  );
}

export default App;
