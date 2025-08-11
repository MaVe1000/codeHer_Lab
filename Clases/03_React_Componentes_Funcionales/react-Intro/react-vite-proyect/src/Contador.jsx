import React, { useState } from "react";

// Recibe props (inicial, nombre) desde App.jsx o toma los valores por defecto.

function Contador({ inicial = 0, nombre = "Contador" }) {
  // const [variable de estado, función para cambiar ese valor] = useState("valor Inicial");
  const [contador, setContador] = useState(inicial);

  // Funciones para manejar eventos
  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  const resetear = () => {
    setContador(inicial);
  };

  return (
    <div
      style={{
        border: "2px solid #ddd",
        padding: "20px",
        margin: "20px 0",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h3>{nombre}</h3>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}> Valor: {contador}</p>

      <button onClick={decrementar}>➖ Restar</button>
      <button onClick={resetear} style={{ margin: "0 10px" }}>
        🔄 Reset
      </button>
      <button onClick={incrementar}>➕ Sumar</button>
    </div>
  );
}

export default Contador;

/* 




*/
