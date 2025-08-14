import { useState } from "react";

export const Formulario = () => {
    //Estado
    const [valorInput, setValorInput] = useState('hola');
     
    //funcion manejadora del evento onChange
    
    const onChange = (evento) => {
        const valorInput = evento.target.value; 
        setValorInput(valorInput);
    }
    
    
   
    //JSX
    return (
        <div>
            <input value={valorInput} onChange={onChange} /> 
            <p>{valorInput}</p>
        </div>
    )

}




/* import { useState } from "react";

export const Formulario = () => {
    //Estado
    const [valorInput, setValorInput] = useState('');
    
    //funcion manejadora del evento onChange
    const onChange = (evento) => {
      console.log(evento);
    }

    //JSX
    return (
        <div>
            <input onChange={evento=>onChange(evento)} /> 
            <p>{valorInput}</p>
        </div>
    )

} */
