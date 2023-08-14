import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, BrowserRouter } from "react-router-dom";
import router from "./plugins/router";
import "./index.css";
import NavBar from "./components/TheNavbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
    <RouterProvider router={router} />
  </React.StrictMode>
);
