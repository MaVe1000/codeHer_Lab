# Clase 3: Componentes Funcionales en React

## 🔄 Repaso rápido de la Clase 2
- **JSX**: Sintaxis que parece HTML pero se transpila a `React.createElement()`
- **Fragmentos**: `<>...</>` para agrupar elementos sin agregar nodos extra al DOM
- **Props**: Datos que pasan de componente padre a hijo (inmutables)

---

## 🏗️ 1. ¿Qué son los Componentes Funcionales?

### 📌 Concepto técnico:
Un **componente funcional** es una función JavaScript que:
- Recibe un objeto `props` como parámetro
- Retorna JSX (elementos de React)
- Representa una parte reutilizable de la interfaz

### 💡 Explicación simple:
Es como una "máquina" que recibe ingredientes (props) y produce una parte de la página web (JSX).

```jsx
// Componente básico
function MiComponente() {
  return <h1>¡Hola mundo!</h1>;
}

// Componente con props
function Saludo({ nombre }) {
  return <h1>¡Hola, {nombre}!</h1>;
}
```

### 🧩 Anatomía de un componente funcional:

```jsx
import React from 'react'; // 1. Importar React

// 2. Definir la función (siempre PascalCase)
function NombreComponente({ prop1, prop2 }) {
  // 3. Lógica del componente (opcional)
  
  // 4. Return con JSX
  return (
    <div>
      <h1>{prop1}</h1>
      <p>{prop2}</p>
    </div>
  );
}

// 5. Exportar para usar en otros archivos
export default NombreComponente;
```

---

## 🎯 2. Creando nuestros primeros componentes

### 🎨 Ejercicio práctico: Componente `Button`

Crear el archivo `src/Button.jsx`:

```jsx
import React from 'react';

function Button({ texto, onClick, color = "blue" }) {
  return (
    <button 
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        margin: "5px"
      }}
    >
      {texto}
    </button>
  );
}

export default Button;
```

### 🔢 Ejercicio práctico: Componente `Contador` con useState

Crear el archivo `src/Contador.jsx`:

```jsx
import React, { useState } from "react";

function Contador({ inicial = 0, nombre = "Contador" }) {
  // ¡Aquí usamos nuestro primer Hook!
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
    <div style={{ 
      border: "2px solid #ddd", 
      padding: "20px", 
      margin: "20px 0",
      borderRadius: "10px",
      textAlign: "center" 
    }}>
      <h3>{nombre}</h3>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>
        Valor: {contador}
      </p>
      
      <button onClick={decrementar}>➖ Restar</button>
      <button onClick={resetear} style={{ margin: "0 10px" }}>
        🔄 Reset
      </button>
      <button onClick={incrementar}>➕ Sumar</button>
    </div>
  );
}

export default Contador;
```

### 🧠 Adelanto: ¿Qué es `useState`?
El componente `Contador` usa nuestro **primer Hook**: `useState`. 
- Permite que el componente "recuerde" información que puede cambiar
- Cuando cambia el estado, React re-dibuja automáticamente el componente
- En la **Clase 4** profundizaremos este concepto

---

## 🔗 3. Composición de componentes

### 📌 Concepto técnico:
La **composición** es el proceso de combinar componentes pequeños para crear interfaces más complejas.

### Tu `App.jsx` actualizado:

```jsx
import React, { useState } from "react";
import Header from "./Header.jsx";
import Button from "./Button.jsx";
import Contador from "./Contador.jsx";
import "./App.css";

function App() {
  // Estado para demostrar funcionalidad
  const [mensaje, setMensaje] = useState("¡Hola React!");

  // Funciones para los botones
  const saludar = () => {
    setMensaje("¡Hola desde React! 👋");
  };

  const cambiarColor = () => {
    setMensaje("¡Color cambiado! 🎨");
  };

  const resetear = () => {
    setMensaje("¡Hola React!");
  };

  return (
    <>
      <Header titulo="Mi primera app React completa" />
      
      <div style={{ padding: "20px" }}>
        <h2>Bienvenidas a nuestra primera app con React</h2>
        
        {/* Mostrar mensaje dinámico */}
        <p style={{ fontSize: "18px", color: "blue" }}>
          {mensaje}
        </p>

        {/* Botones con diferentes funcionalidades */}
        <div>
          <h3>Botones con funciones:</h3>
          <Button texto="Saludar" onClick={saludar} color="green" />
          <Button texto="Cambiar" onClick={cambiarColor} color="purple" />
          <Button texto="Reset" onClick={resetear} color="red" />
        </div>

        {/* Contadores independientes */}
        <div>
          <h3>Contadores:</h3>
          <Contador nombre="Contador A" inicial={0} />
          <Contador nombre="Contador B" inicial={10} />
        </div>
      </div>
    </>
  );
}

export default App;
```

## 🚀 Instrucciones para implementar

1. **Crear Button.jsx** en tu carpeta `src/`
2. **Crear Contador.jsx** en tu carpeta `src/`
3. **Actualizar App.jsx** con el nuevo código
4. **Ejecutar** `npm run dev` para ver los cambios


---

## 🎭 4. Props avanzadas

### 🔍 Props con valores por defecto:

```jsx
function Tarjeta({ titulo = "Sin título", descripcion, color = "#f0f0f0" }) {
  return (
    <div style={{ backgroundColor: color }}>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}
```

### 🔍 Props condicionales:

```jsx
function Insignia({ texto, activo }) {
  return (
    <span style={{
      padding: '5px 10px',
      backgroundColor: activo ? 'green' : 'gray',  <-- Ternario: condición ? valorSiVerdadero : valorSiFalso
      color: 'white',
      borderRadius: '15px'
    }}>
      {texto}
    </span>
  );
}

// Uso:
<Insignia texto="Premium" activo={true} />
<Insignia texto="Básico" activo={false} />
```

### Props como funciones (Ya implementado en tu Button):

```jsx
// El componente padre define qué hacer (en App.jsx)
function App() {
  const saludar = () => {
    setMensaje("¡Hola desde React! 👋");
  };

  // Le pasamos la función al componente hijo
  return <Button texto="Saludar" onClick={saludar} color="green" />;
}

// El componente hijo ejecuta la función (en Button.jsx)
function Button({ texto, onClick, color }) {
  return (
    <button onClick={onClick}>  {/* Aquí se ejecuta */}
      {texto}
    </button>
  );
}
```

---

## 📁 5. Organización de archivos

### 🏗️ Tu estructura actual:

```
src/
├── Header.jsx          # ✅ Ya creado (Clase 2)
├── Button.jsx          # ✅ Ya creado (Clase 3)
├── Contador.jsx        # ✅ Ya creado (Clase 3)
├── App.jsx             # ✅ Componente principal actualizado
├── App.css
├── index.css
└── main.jsx
```

### 📝 Convenciones de nombres:
- **Componentes**: `PascalCase` → `MiComponente.jsx`
- **Archivos comunes**: `camelCase` → `utilidades.js`
- **Estilos**: `kebab-case` → `mi-componente.css`

---

## 🎯 Lo que ya logramos

### ✅ Componentes funcionando:
- **Header**: Recibe `titulo` como prop
- **Button**: Recibe `texto`, `onClick` y `color` como props  
- **Contador**: Usa `useState` para manejar estado local y recibe `inicial` y `nombre`

### ✅ Conceptos aplicados:
- **Composición**: App combina Header + Button + Contador
- **Props**: Comunicación de padre a hijo
- **Eventos**: onClick en los botones
- **Estado básico**: useState en App y Contador (adelanto de Clase 4)

---

## 🎯 Ejercicio opcional para reforzar

### Crea un componente `Tarjeta.jsx` (opcional):

```jsx
import React from 'react';

function Tarjeta({ titulo, descripcion, color = "#f9f9f9" }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px',
      maxWidth: '300px',
      backgroundColor: color
    }}>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

export default Tarjeta;
```

### Úsalo en `App.jsx`:

```jsx
// Agregar después de los contadores
<div>
  <h3>Tarjetas informativas:</h3>
  <Tarjeta 
    titulo="React" 
    descripcion="Biblioteca para construir interfaces"
    color="#e3f2fd"
  />
  <Tarjeta 
    titulo="Components" 
    descripcion="Bloques reutilizables de código"
    color="#f1f8e9"
  />
</div>
```

---

## 🧠 Conceptos clave para recordar

| Concepto | Definición | Ejemplo |
|----------|------------|---------|
| **Componente Funcional** | Función que retorna JSX | `function Mi() { return <div/>; }` |
| **Props** | Datos que pasan de padre a hijo | `<Hijo nombre="Juan" />` |
| **Destructuring** | Extraer propiedades del objeto props | `function({ nombre })` |
| **Composición** | Combinar componentes pequeños | `<App><Header/><Main/></App>` |
| **Export/Import** | Conectar componentes entre archivos | `export default Mi;` |

---

## 🚀 Próximos pasos (Clase 4)

En la siguiente clase profundizaremos en:
- **Hooks básicos**: `useState` para manejar estado
- **Interactividad**: Eventos y cambios de estado
- **Ciclo de vida**: Cuándo se crean y actualizan los componentes
- **useEffect**: Para efectos secundarios

---

## 💡 Tips importantes

✅ **Hazlo**: Un componente por archivo  
✅ **Hazlo**: Nombres en PascalCase  
✅ **Hazlo**: Props descriptivas y específicas  

❌ **Evita**: Componentes gigantes  
❌ **Evita**: Modificar las props dentro del componente  
❌ **Evita**: Lógica compleja en el JSX  

---

## 💡 Preguntas para la clase

1. **¿Por qué creamos componentes separados?**
   - Reutilización de código
   - Organización y mantenimiento
   - Separación de responsabilidades

2. **¿Cuándo usar un archivo nuevo para un componente?**
   - Si el componente es reutilizable
   - Si tiene lógica compleja
   - Si ayuda a mantener App.jsx limpio

3. **¿Qué es mejor: un archivo grande o muchos pequeños?**
   - Muchos pequeños = más organizado
   - Un componente por archivo = estándar de la industria

4. **Props vs State:**
   - props: datos que recibe el componente (inmutables).
   - state: datos internos que pueden cambiar.


## Atributos con JSX (Detalles sintaxis)

⚠️ En JSX, los nombres de atributos suelen estar en camelCase

  - Se puede utilizar comillas para especificar valor string 
```jsx
const elemento = <div tabIndex="0"> </div>
```

  - Usar llaves para insertar expresión Js
```jsx
const elemento = <img src={user.avatarUrl} />
```


