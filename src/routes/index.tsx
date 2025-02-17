import Home from "../pages/home";
import Error from "../pages/error";
import Page404 from "../pages/404";
import { ReactElement } from "react";
import Products from "../pages/products";
import Cart from "../pages/cart";

type RouteType = {
  path: string;
  element: ReactElement;
  errorElement?: ReactElement;
};

export const routes: RouteType[] = [
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "*",
    element: <Page404 />,
    errorElement: <Error />,
  },
];
