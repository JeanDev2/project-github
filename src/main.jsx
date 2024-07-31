import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStylesStyled from "./components/Global-styles.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:user",
    element: <App />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <GlobalStylesStyled />
      <RouterProvider router={router} />
    </>
  </React.StrictMode>
);
