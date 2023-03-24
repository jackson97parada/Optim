import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ServiceDetail from "./components/service/ServiceDetail";

const routes = createBrowserRouter([
  {
    path: "/Optim",
    element: <App />,
  },
  {
    path: "/Optim/services/:serviceId",
    element: <ServiceDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
