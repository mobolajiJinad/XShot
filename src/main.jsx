import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import PhotoCategories from "./pages/PhotoCategories";
import OnileIsmail from "./pages/OnileIsmail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/categories",
    element: <PhotoCategories />,
  },
  {
    path: "/showcase/onileIsmail",
    element: <OnileIsmail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
