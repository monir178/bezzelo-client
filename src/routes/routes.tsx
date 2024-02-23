import App from "@/App";
import Home from "@/pages/home";

import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import SignUp from "@/pages/signup/SignUp";
import Products from "@/pages/Products/Products";

import Cart from "@/pages/cart/Cart";
import SingleProduct from "../pages/Products/SingleProduct";
import AboutUsPage from "@/pages/aboutusPage/AboutUsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "aboutus",
        element: <AboutUsPage />,
      },
      {
        path: "categories/:id",
        element: <Products></Products>,
      },
      {
        path: "product/:id",
        element: <SingleProduct></SingleProduct>,
      },
    ],
  },
]);

export default router;
