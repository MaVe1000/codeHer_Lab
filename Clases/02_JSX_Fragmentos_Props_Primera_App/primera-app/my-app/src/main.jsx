import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Renderiza el componente raíz (App) en el div con id="root" del index.html
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
