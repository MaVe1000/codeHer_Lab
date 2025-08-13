# CLASE 4
### Repaso para comprender que es el estado
Un componente tiene tres importantes caracteristicas:
- un estado
- un ciclo de vida
- Algo que renderiza

El `estado` se refiere a como está nuestro componente en un determinado momento del tiempo.
El estado existe porque React debe saber cuando redibujarse para mostar cambios.
Una variable no puede decirle a React cuando redibujarse, por eso creamos el estado. 

## 1. ¿Qué son los Hooks en React?
Los Hooks son funciones especiales que te permiten "engancharte" a las características de React desde componentes funcionales. Antes de los Hooks (introducidos en React 16.8), solo los componentes de clase podían manejar estado y ciclo de vida.

### Características importantes de los Hooks:
- Solo se pueden usar en componentes funcionales
- Siempre empiezan con la palabra "use" (useState, useEffect, etc.)
- Deben llamarse en el nivel superior del componente (no dentro de loops, condiciones o funciones anidadas)

## 2. useState: Estado Local en Componentes
El Hook useState nos permite agregar estado local a componentes funcionales.
Sintaxis:
```js
const [variable, setVariable] = useState(valorInicial);
```

¿Qué significa cada parte?

- variable: el valor actual del estado
- setVariable: función para actualizar el estado
- valorInicial: el valor que tendrá el estado al inicio

Ejemplo básico:
```js
import React, { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}
```

## 3. Eventos en React
React maneja los eventos de manera similar al JavaScript vanilla, pero con algunas diferencias importantes:
Eventos comunes:

- `onClick`: cuando se hace clic
- `onChange`: cuando cambia el valor de un input
- `onSubmit`: cuando se envía un formulario
- `onMouseOver`: cuando el mouse pasa por encima

### Características de los eventos en React:

- Se escriben en camelCase (onClick, no onclick)
- Se pasan como funciones, no como strings
- React usa SyntheticEvents (eventos sintéticos) que funcionan igual en todos los navegadores

## 4. Re-renderizado: Cuándo y Por Qué
React re-renderiza un componente cuando:

- El estado del componente cambia (con useState)
- Las props del componente cambian
- El componente padre se re-renderiza

### ¿Por qué es importante?

- React actualiza automáticamente la UI cuando el estado cambia
- Solo actualiza lo que realmente cambió (DOM virtual)
- Esto hace que las aplicaciones sean eficientes y reactivas

## 5. Inputs Controlados
Un input controlado es aquel cuyo valor está controlado por el estado de React:

```js
function FormularioControlado() {
  const [nombre, setNombre] = useState('');
  
  return (
    <input 
      type="text"
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
      placeholder="Escribe tu nombre"
    />
  );
}
```
Ventajas:
- React controla completamente el valor
- Fácil validación y manipulación
- Un solo lugar donde vive la verdad (single source of truth)


### Contenido extra
## Hooks más conocidos
🔥 Los Hooks Esenciales:
1. useState - Estado local
```js
const [valor, setValor] = useState(0);
```
2. useEffect - Efectos secundarios
```js
useEffect(() => {
  // Se ejecuta después del render
  console.log('Componente renderizado');
}, []); // Array vacío = solo una vez
```
3. useContext - Compartir datos globales
```js
const valor = useContext(MiContexto);
```
🚀 Hooks Intermedios:
4. useReducer - Estado complejo
```js
const [state, dispatch] = useReducer(reducer, initialState);
```
5. useMemo - Memorización de cálculos
```js
const resultado = useMemo(() => calcularAlgo(datos), [datos]);
```
6. useCallback - Memorización de funciones
```js
const miFuncion = useCallback(() => {
  // función
}, [dependencias]);
```
🔧 Hooks Avanzados:
- useRef - Referencias a elementos DOM
- useLayoutEffect - Efectos síncronos
- useImperativeHandle - Personalizar referencias
- useDebugValue - Debugging custom hooks





