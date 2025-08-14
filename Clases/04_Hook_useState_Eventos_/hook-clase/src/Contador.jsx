import { useState } from "react";


 export const Contador = () => {
//estado: 

const [num, setNum] = useState(0);
//num contiene como tal el valor
// setNum le dice a React que debe redibujar el componente
// useState tiene el valor inicial que le pasamos


//funcion manejadora del evento onClick
const sumar = () => {
setNum(num+1);
}

//jsx
return (
    <div>
      <button onClick={sumar}>+1</button>
      <p>{num}</p>
    </div>
)
}

