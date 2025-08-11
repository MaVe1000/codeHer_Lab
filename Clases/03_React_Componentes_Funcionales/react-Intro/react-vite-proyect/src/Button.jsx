import React from "react";

// Componente que recibe texto, color y función como props
function Button({ texto, onClick, color = "blue" }) {
  return (
    <button
      onClick={onClick} // Manejador de evento onClick recibido como prop
      style={{
        backgroundColor: color,
        color: "white",
      }}
    >
      {texto}
    </button>
  );
}

export default Button;

/* 
Info Props (propiedades -> parametros)
👉 texto: El texto que se muestra en el botón (como en clase pasada)
👉 onClick={onClick} → Pasamos función como prop
👉 color = "blue" → Valor por defecto

Estilo dentro de JSX
👉 style={{}} → Doble llave: objeto JavaScript dentro de JSX 
👉 <img className="avatar" /> → Clase CSS en JSX
👉

*/
