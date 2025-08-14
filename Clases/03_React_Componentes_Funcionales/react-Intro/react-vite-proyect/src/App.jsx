// Modifico React con useState y agrego Contador y Button
import React, { useState } from "react";
import Header from "./Header.jsx";
import Button from "./Button.jsx";
import Contador from "./Contador.jsx";
import "./App.css";

function App() {
  // Estado para demostrar funcionalidad
  const [mensaje, setMensaje] = useState("¡Hola React!");
  const [mensajeColor, setMensajeColor] = useState("blue"); // para cambiar el color del mensaje
  // Funciones para los botones
  const saludar = () => {
    setMensaje("¡Hola desde React! 👋");
    setMensajeColor("green");
  };

  const cambiarColor = () => {
    setMensaje("¡Color cambiado! 🎨");
    setMensajeColor("purple");
  };

  const resetear = () => {
    setMensaje("¡Hola React!");
    setMensajeColor("blue");
  };

  return (
    <>
      <Header titulo="Bienvenidas a nuestra primera app con React" />

      <div style={{ padding: "20px" }}>
        <h2> Complementos y props </h2>

        {/* Mostrar mensaje dinámico */}
        <p style={{ fontSize: "1.5rem", color: mensajeColor }}>{mensaje}</p>

        {/* Botones con diferentes funcionalidades */}
        <div>
          <h3>Botones con funciones:</h3>
          <Button texto="Saludar" onClick={saludar} color="green" />
          <Button texto="Cambiar" onClick={cambiarColor} color="purple" />
          <Button texto="Reset" onClick={resetear} color="blue" />
        </div>

        {/* Contadores independientes */}
        <div>
          <h3>Contadores:</h3>
          <Contador nombre="Contador A" inicial={0} />
          {/* <Contador nombre="Contador B" inicial={10} /> */}
        </div>
      </div>
    </>
  );
}

export default App;

/* 
Sintaxis:

🔸 { useState }: hook que nos permite manejar estado dentro de componentes funcionales.
🔸 const [variable de estado, función para cambiar ese valor] = useState("valor Inicial");
🔸 A cada botón le paso 3 props (texto que muestra botón, funcion onClick, color usado dentro de Button.jsx)

🔸 <Contador />   : componente de React personalizado con dos props (inicial y nombre)
*/
