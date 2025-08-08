/* import React from "react";
import "./Header.css"

function Header() {
  return (
    <header>
      <h1 className="titulo">Mi primer componente Header</h1>
    </header>
  );
}

export default Header; */

// =============================== con prop ================================

import React from "react";
import "./Header.css";

function Header({ titulo }) {
  return (
    <header className="header">
      <h1>{titulo}</h1>
    </header>
  );
}

export default Header;
