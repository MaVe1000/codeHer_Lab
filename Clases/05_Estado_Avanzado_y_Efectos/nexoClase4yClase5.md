# 🛠️ Tips y Buenas Prácticas

## Antes de empezar con la clase n°5, vamos a ver algunos tips y buenas prácticas.

## 1. Diferencia entre variables normales y estado.\_

Veremos qué pasa si intentamos actualizar un contador con una variable normal:

```js
let count = 0;
function App() {
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          count++;
          console.log(count);
        }}
      >
        Incrementar
      </button>
    </div>
  );
}
```

El número no cambia en pantalla porque React no sabe que debe re-renderizar.

👉 Con useState sí lo hace.

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

```

## 2. Estados iniciales y tipos de datos

El estado "useState" no es solo para contadores:

```js
const [activo, setActivo] = useState(true); // booleano
const [texto, setTexto] = useState("Hola"); // string
const [lista, setLista] = useState([]); // array
const [objeto, setObjeto] = useState({ nombre: "Ana", edad: 25 }); // objeto
```

En éste ejemplo podemos ver que el valorInicial de useState no siempre es un número.

## 3. setState es asíncrono

Aquí podemos ver que setVariable no actualiza el valor de inmediato, sino que programa un re-render.
Ejemplo:

```js
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1);
  console.log(count); // muestra el valor viejo
};
```

👉 Usar setCount(prev => prev + 1) cuando dependemos del estado anterior.

## 4. Eventos con argumentos

Cómo pasar parámetros a funciones en eventos:

```js
<button onClick={() => manejarClick("Hola")}>Click</button>
```

Pero, si se usa del siguiente modo, se ejecuta inmediatamente.

(Es un error común de principiantes):

```js
 onClick={manejarClick("Hola")}
```

## 5. Inputs controlados vs no controlados

Comparar:

```js
 // No controlado (JS puro)
<input type="text" />

// Controlado (React)
<input value={texto} onChange={(e) => setTexto(e.target.value)} />

```

👉 Mostrar que con input controlado podemos:

- Validar en tiempo real

- Convertir a mayúsculas

- Limpiar fácilmente el input

## 6. Debug del re-renderizado

(Explicar cómo ver cuando un componente se vuelve a renderizar):

```js
function Componente() {
  console.log("Renderizado");
  ...
}
```

Y mostrar cómo se dispara al cambiar estado.

## 7. Buenas prácticas

- Nunca mutar directamente arrays u objetos:

```js
// ❌ Incorrecto
lista.push("nuevo");
setLista(lista);

// ✅ Correcto
setLista([...lista, "nuevo"]);
```

- Siempre clonar arrays y objetos antes de mutarlos.

- Mantener el estado lo más simple posible

- Usar key única en listas

### Explicación de Nunca mutar directamente el estado (ni arrays ni objetos).

🚫 Qué significa "mutar":

Mutar es cambiar directamente un valor existente, por ejemplo:

```js
// ❌ Esto muta el estado directamente:
const [lista, setLista] = useState([1, 2, 3]);

lista.push(4); // cambia el array original
setLista(lista); // React no detecta bien el cambio
```

En este caso, React puede no re-renderizar porque el array sigue teniendo la misma referencia en memoria.

✅ Qué hacer en su lugar:

Siempre crear una copia nueva antes de actualizar:

- Con arrays:

```js
// Usando spread operator
setLista([...lista, 4]);

// Filtrar (ej: eliminar un item)
setLista(lista.filter((item) => item !== 2));

// Mapear (ej: editar un item)
setLista(lista.map((item) => (item === 2 ? 20 : item)));
```

- Con objetos:

```js
const [usuario, setUsuario] = useState({ nombre: "Ana", edad: 25 });

// Usar spread operator
setUsuario({ ...usuario, edad: 26 });
```

📌 ¿Por qué es buena práctica?

- Garantiza que React detecte los cambios de estado (porque compara referencias, no contenido).

- Evita bugs difíciles de rastrear.

- Mantiene el principio de inmutabilidad, que hace más predecible el código.

- Es la base para optimizaciones internas de React (reconciliación con el Virtual DOM).

```js

```
