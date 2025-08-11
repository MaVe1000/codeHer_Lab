// =================================== SIN PROP ====================================

/* import React from "react";
import Header from "./Header.jsx";
import "./App.css"; // Importación del css

function App() {
  return (
    <>
      <Header />
      <h2>Bienvenidas a nuestra primera app con React</h2>
      <p>Este es un párrafo dentro del componente App.</p>
    </>
  );
}

export default App; */

// ============================= CON PROP ========================================

// “Componente Header, te paso un prop llamado titulo con el valor "Mi primera app con React"”.

import React from "react";
import Header from "./Header.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header titulo="Mi primera app" />
      <h2>Bienvenidas a nuestra primera app con React</h2>
      <p>Este es un párrafo dentro del componente App.</p>
    </>
  );
}

export default App;
