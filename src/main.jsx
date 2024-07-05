import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStylesStyled from "./components/Global-styles.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <GlobalStylesStyled />
      <App />
    </>
  </React.StrictMode>
);
