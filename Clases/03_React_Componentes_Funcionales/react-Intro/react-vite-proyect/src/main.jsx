import React from "react";                 /* Importa libreria de React */
import ReactDOM from "react-dom/client";   /* Módulo que permite renderizar app en el navegador */
import App from "./App.jsx";               /* Componente raíz de toda la aplicación */
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);


/* 
Sintaxis:

🔸 document.getElementById('root') --> Busca el div con ID "root" en el index.html
🔸 createRoot(...).render(...)     --> Crea un "root" de React y renderiza el componente App dentro de él
🔸 Una root es el punto de entrada de tu aplicación React en el DOM real.
🔸 <React.StrictMode>...</React.StrictMode>  --> Ayuda a identificar problemas en la aplicación durante el desarrollo
🔸 main.jsx por lo general siempre es igual (!excepto si quiero agregar rutas o configuraciones)
*/