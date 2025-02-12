import { createBrowserRouter } from "react-router";
import Home from "../pages/home";
import Error from "../pages/error";
import Page404 from "../pages/404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "*",
    element: <Page404 />,
    errorElement: <Error />,
  },
]);
