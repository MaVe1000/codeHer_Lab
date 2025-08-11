/* 

- En el componente padre (App):
👉 titulo="Texto" → lo paso como atributo

- En el hijo (Header):
👉 { titulo } → lo recibo como si fuera una variable

props: es un objeto que contiene todos los atributos del componente padre
*/


import React from "react";

function Header({ titulo }) {
  return (
    <header>
      <h1 className="titulo">{titulo}</h1>
    </header>
  );
}

export default Header;