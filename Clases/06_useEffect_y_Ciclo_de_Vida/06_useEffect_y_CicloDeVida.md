# Clase 6 - useEffect y Ciclo de Vida en React

_Lunes 25/08_

---

## 🔄 Repaso Rápido - Clase 5

### ¿Qué vimos la clase pasada?

En la clase anterior trabajamos con **estado complejo** y **listas en React**:

```jsx
// Estado con objetos y arrays (vectores/arreglos)
const [todos, setTodos] = useState([
  { id: 1, title: "Estudiar React", completed: false },
]);
// ↑ todos es un ARRAY/VECTOR que contiene objetos
```

**📝 Aclaración sobre "listas":**
En React, cuando hablamos de **"listas"** nos referimos a **arrays/vectores** que contienen datos (objetos, strings, números, etc.) que queremos mostrar en pantalla usando `.map()`.

- [🔗 Listas en React y uso de .map()](listasReact.md)

### Reglas importantes que vimos:

**🔸 Inmutabilidad (no mutar):**

```jsx
// ❌ MAL - Mutar directamente
todos.push(nuevaTarea); // Modifica el array original
setTodos(todos);

// ✅ BIEN - Crear copia nueva
setTodos([...todos, nuevaTarea]); // Crea un array nuevo
```

_¿Por qué?_ React compara referencias. Si modificas el original, React puede no detectar el cambio.

Los tres puntos (...) en JavaScript se llaman **spread operator**. Se usan mucho para crear un nuevo estado a partir del anterior.

**🔸 Keys estables en listas:**

```jsx
// ❌ MAL - usar index como key
{
  todos.map((todo, index) => <li key={index}>{todo.title}</li>);
}

// ✅ BIEN - usar ID único
{
  todos.map((todo) => <li key={todo.id}>{todo.title}</li>);
}
```

_¿Por qué?_ React usa las keys para identificar qué elementos cambiaron, se agregaron o eliminaron.

**🔸 Patrones de actualización:**

```jsx
// Agregar: spread operator (...) copia todo y agrega al final
setTodos((prev) => [...prev, nuevoTodo]);

// Eliminar: filter crea nuevo array sin el elemento
setTodos((prev) => prev.filter((t) => t.id !== idAEliminar));

// Editar: map recorre y cambia solo el que coincide
setTodos((prev) =>
  prev.map((t) => (t.id === idAEditar ? { ...t, completed: !t.completed } : t))
);
```

### 🤔 Pregunta de conexión

**"¿Qué pasa si quiero que mi TodoList se guarde automáticamente cada vez que agrego una tarea?"**

**Respuesta:** Necesitamos **efectos secundarios** → **useEffect**

---

## 🧠 Teoría - useEffect y Ciclo de Vida

### 1. ¿Qué es useEffect?

**useEffect** es un hook que nos permite ejecutar **efectos secundarios** en nuestros componentes.

**¿Qué son los efectos secundarios?**

- Operaciones que van "más allá" del renderizado
- Ejemplos: llamadas a APIs, timers, localStorage, suscripciones

```jsx
import { useEffect, useState } from "react";

function MiComponente() {
  const [count, setCount] = useState(0);

  // ✨ Efecto secundario que actualiza titulo
  useEffect(() => {
    document.title = `Contador: ${count}`;
  });

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### 2. Tipos de useEffect (según dependencias)

#### 🔸 **Sin dependencias** → Se ejecuta en cada render

```jsx
useEffect(() => {
  console.log("Se ejecuta en cada render");
});
```

**⚠️ Cuidado:** Puede causar loops infinitos

#### 🔸 **Con array vacío []** → Solo al montar el componente

```jsx
useEffect(() => {
  console.log("Solo se ejecuta una vez (al montarse)");
}, []); // ← Array vacío
```

**Uso típico:** Fetch inicial de datos, setup de listeners

#### 🔸 **Con dependencias [var1, var2]** → Cuando cambian las dependencias

```jsx
useEffect(() => {
  console.log("Se ejecuta cuando count o name cambian");
}, [count, name]); // ← Solo se ejecuta si cambian count o name
```

### 3. Cleanup de efectos

Algunos efectos necesitan "limpieza" (cleanup) cuando el componente se desmonta o antes de ejecutar el efecto nuevamente.

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Cada segundo");
  }, 1000);

  // 🧹 Cleanup function
  return () => {
    clearInterval(timer); // Limpia el timer
  };
}, []);
```

**¿Cuándo usar cleanup?**

- Timers (setInterval, setTimeout)
- Suscripciones a eventos
- Conexiones WebSocket
- Cancelar requests HTTP

### 4. Casos de uso comunes

| Caso de uso           | Dependencias   | Ejemplo                           |
| --------------------- | -------------- | --------------------------------- |
| **Fetch inicial**     | `[]`           | Cargar datos al montar            |
| **Actualizar título** | `[count]`      | Cambiar title cuando count cambia |
| **Timer/Reloj**       | `[]` + cleanup | setInterval con clearInterval     |
| **LocalStorage**      | `[data]`       | Guardar cuando data cambia        |
| **Resize listener**   | `[]` + cleanup | window.addEventListener           |

---

## 💻 Práctica - Ejemplos paso a paso

**🎯 Objetivo:** Entender useEffect a través de 4 ejemplos prácticos que van de simple a complejo, cubriendo los casos de uso más comunes en aplicaciones React.

### Ejemplo 1: Reloj Digital

**📚 Conceptos que aprenderás:**

- useEffect con array vacío `[]`
- setInterval en React
- Cleanup para evitar memory leaks
- Manejo de fechas en JavaScript

```jsx
import { useState, useEffect } from "react";

function RelojDigital() {
  // Estado para guardar la hora actual
  const [hora, setHora] = useState(new Date());

  // useEffect que se ejecuta solo una vez al montar el componente
  useEffect(() => {
    console.log("⏰ Configurando el reloj...");

    // Crear un timer que actualice la hora cada segundo
    const timer = setInterval(() => {
      console.log("🔄 Actualizando hora...");
      setHora(new Date()); // Crear nueva fecha con hora actual
    }, 1000); // 1000ms = 1 segundo

    // 🧹 Función de cleanup (MUY IMPORTANTE)
    // Se ejecuta cuando el componente se desmonta
    return () => {
      console.log("🛑 Limpiando timer del reloj");
      clearInterval(timer); // Limpiar el timer para evitar memory leaks
    };
  }, []); // Array vacío = solo al montar el componente

  // Formatear la hora para mostrarla bonita
  const horaFormateada = hora.toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="text-center p-8 bg-gray-900 text-white rounded-lg">
      <h2 className="text-lg mb-4">🕐 Reloj Digital</h2>
      <div className="text-4xl font-mono font-bold">{horaFormateada}</div>
      <div className="text-sm mt-2 text-gray-300">
        {hora.toLocaleDateString("es-AR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    </div>
  );
}
```

**🔍 Análisis detallado:**

- **¿Por qué `[]` en useEffect?** Queremos que el timer se cree solo UNA vez
- **¿Qué pasa sin cleanup?** Si el componente se desmonta, el timer sigue corriendo → memory leak
- **new Date()** crea un objeto con la fecha/hora actual del sistema

### Ejemplo 2: Contador Automático

**📚 Conceptos que aprenderás:**

- useEffect que depende de una variable `[activo]`
- Estados booleanos para controlar comportamiento
- Conditional timer (timer que se puede pausar/reanudar)

```jsx
function ContadorAutomatico() {
  const [count, setCount] = useState(0);
  const [activo, setActivo] = useState(false); // Control de play/pause
  const [velocidad, setVelocidad] = useState(1000); // Velocidad en ms

  // useEffect que se ejecuta cuando 'activo' o 'velocidad' cambian
  useEffect(() => {
    let timer;

    console.log(`🎮 Estado del contador: ${activo ? "ACTIVO" : "PAUSADO"}`);

    if (activo) {
      // Solo crear timer si está activo
      timer = setInterval(() => {
        console.log("📈 Incrementando contador...");
        // Usar función para acceder al valor anterior
        setCount((prevCount) => prevCount + 1);
      }, velocidad);
    }

    // Cleanup: limpiar timer siempre (activo o no)
    return () => {
      if (timer) {
        console.log("🧹 Limpiando timer del contador");
        clearInterval(timer);
      }
    };
  }, [activo, velocidad]); // Se ejecuta cuando cualquiera de estos cambia

  // Función para resetear el contador
  const resetear = () => {
    setCount(0);
    setActivo(false);
  };

  return (
    <div className="text-center p-6 bg-blue-50 rounded-lg">
      <h2 className="text-xl mb-4">🔄 Contador Automático</h2>

      {/* Mostrar contador */}
      <div className="text-6xl font-bold text-blue-600 mb-4">{count}</div>

      {/* Controles */}
      <div className="flex gap-2 justify-center mb-4">
        <button
          onClick={() => setActivo(!activo)}
          className={`px-4 py-2 rounded font-semibold ${
            activo
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-green-500 hover:bg-green-600 text-white"
          }`}
        >
          {activo ? "⏸️ Pausar" : "▶️ Iniciar"}
        </button>

        <button
          onClick={resetear}
          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded"
        >
          🔄 Reset
        </button>
      </div>

      {/* Control de velocidad */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Velocidad: {velocidad}ms ({1000 / velocidad} por segundo)
        </label>
        <input
          type="range"
          min="100" // Muy rápido
          max="3000" // Muy lento
          value={velocidad}
          onChange={(e) => setVelocidad(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Rápido</span>
          <span>Lento</span>
        </div>
      </div>

      {/* Estado actual */}
      <div className="mt-4 text-sm text-gray-600">
        Estado: {activo ? "🟢 Corriendo" : "🔴 Pausado"}
      </div>
    </div>
  );
}
```

**🔍 Puntos importantes:**

- **Dependencias `[activo, velocidad]`:** El efecto se re-ejecuta cuando cualquiera cambia
- **Cleanup condicional:** Siempre limpiamos, pero solo si existe un timer
- **setCount con función:** `setCount(prev => prev + 1)` es más seguro que `setCount(count + 1)`

### Ejemplo 3: Fetch de Datos desde API

**🌐 ¿Qué es una API y qué diferencias hay con JavaScript vanilla?**

**API (Application Programming Interface):** Es un "puente" que nos permite comunicarnos con un servidor para obtener o enviar datos. Es como un "mesero" que lleva tu pedido a la cocina y te trae la comida.

**📊 Comparación JavaScript vanilla vs React:**

| Aspecto                       | JavaScript Vanilla                            | React con useEffect                   |
| ----------------------------- | --------------------------------------------- | ------------------------------------- |
| **¿Cuándo hacer el fetch?**   | `window.onload` o cuando el usuario hace algo | `useEffect` con `[]` (al montarse)    |
| **¿Dónde guardar los datos?** | Variables globales o DOM                      | Estado del componente (`useState`)    |
| **¿Cómo mostrar loading?**    | Manipular DOM directamente                    | Estado `loading` + render condicional |
| **¿Cómo manejar errores?**    | try/catch + manipular DOM                     | Estado `error` + mostrar mensaje      |

**JavaScript Vanilla (lo que ya conocen):**

```javascript
// En JavaScript normal
let usuarios = [];
let loading = true;

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    usuarios = data;
    loading = false;
    // Manipular DOM manualmente
    document.getElementById("lista").innerHTML = "...";
  });
```

**React con useEffect (lo nuevo):**

```jsx
function ListaUsuarios() {
  // Estados para manejar datos, loading y errores
  const [usuarios, setUsuarios] = useState([]); // Array vacío inicial
  const [cargando, setCargando] = useState(true); // Empieza cargando
  const [error, setError] = useState(null); // Sin error inicial

  useEffect(() => {
    // Función asíncrona para obtener datos
    async function cargarUsuarios() {
      try {
        setCargando(true);
        // Fetch similar a JS vanilla
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        // Verificar si la respuesta es exitosa
        if (!response.ok) {
          throw new Error("Error en la respuesta del servidor");
        }

        const data = await response.json();
        setUsuarios(data); // Guardar en estado (no en variable global)
        setError(null); // Limpiar errores anteriores
      } catch (err) {
        setError(`Error al cargar usuarios: ${err.message}`);
        setUsuarios([]); // Limpiar usuarios si hay error
      } finally {
        setCargando(false); // Siempre quitar el loading
      }
    }

    cargarUsuarios();
  }, []); // ← Solo al montar el componente (una vez)

  // Renderizado condicional basado en el estado
  if (cargando)
    return <div className="text-center">🔄 Cargando usuarios...</div>;
  if (error) return <div className="text-red-500">❌ {error}</div>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Usuarios ({usuarios.length})</h2>
      <ul className="space-y-2">
        {usuarios.map((user) => (
          <li key={user.id} className="p-2 bg-gray-100 rounded">
            <strong>{user.name}</strong> - {user.email}
            <br />
            <small className="text-gray-600">🌐 {user.website}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

**🔍 Análisis paso a paso:**

1. **Estados iniciales:**

   - `usuarios`: Array vacío `[]`
   - `cargando`: `true` (para mostrar "Cargando...")
   - `error`: `null` (sin errores inicialmente)

2. **useEffect con dependencias vacías `[]`:**

   - Se ejecuta solo UNA vez cuando el componente aparece en pantalla
   - Similar a `window.onload` en JS vanilla

3. **async/await:**

   - Igual que en JavaScript vanilla
   - Hace más legible el código asíncrono

4. **Manejo de estados:**

   - **Antes del fetch:** `setCargando(true)`
   - **Si todo sale bien:** guardar datos y quitar error
   - **Si hay error:** guardar mensaje de error y limpiar datos
   - **Siempre al final:** `setCargando(false)`

5. **Renderizado condicional:**
   - Si está cargando → mostrar "Cargando..."
   - Si hay error → mostrar mensaje de error
   - Si todo OK → mostrar la lista

### Ejemplo 4: LocalStorage - Persistencia de Datos 

**🏪 ¿Qué es localStorage y por qué es útil?**

**localStorage** es una "caja fuerte" en el navegador donde podemos guardar datos que persisten aunque cierres y abras la página. Es como guardar un archivo en tu computadora.

**🔄 El problema que resuelve:**

```jsx
// Sin localStorage
function TodoApp() {
  const [todos, setTodos] = useState([]);
  // Al recargar la página... ¡todos se pierden! 😱
}

// Con localStorage
function TodoApp() {
  const [todos, setTodos] = useState(() => {
    // Al cargar la página, recuperamos los datos guardados
    const guardados = localStorage.getItem("todos");
    return guardados ? JSON.parse(guardados) : [];
  });
  // Los todos persisten al recargar 🎉
}
```

**📊 Comparación con JavaScript vanilla:**

| JavaScript Vanilla                   | React + useEffect                     |
| ------------------------------------ | ------------------------------------- |
| `localStorage.setItem('key', value)` | Mismo método, pero en useEffect       |
| `localStorage.getItem('key')`        | En función inicializadora de useState |
| Manual: decidir cuándo guardar       | Automático: useEffect observa cambios |

**Implementación completa:**

```jsx
function TodosConPersistencia() {
  // 1️⃣ INICIALIZAR desde localStorage
  const [todos, setTodos] = useState(() => {
    console.log("🔄 Recuperando datos del localStorage...");
    const guardados = localStorage.getItem("todos");

    if (guardados) {
      try {
        const todosParseados = JSON.parse(guardados);
        console.log("✅ Datos recuperados:", todosParseados);
        return todosParseados;
      } catch (error) {
        console.error("❌ Error al parsear datos guardados:", error);
        return [];
      }
    }

    console.log("📝 No hay datos guardados, empezando con array vacío");
    return [];
  });

  const [nuevaTarea, setNuevaTarea] = useState("");

  // 2️⃣ GUARDAR automáticamente cuando todos cambie
  useEffect(() => {
    console.log("💾 Guardando en localStorage:", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // ← Se ejecuta cada vez que todos cambia

  // 3️⃣ FUNCIONES para manipular todos
  const agregarTarea = () => {
    if (nuevaTarea.trim()) {
      const nuevoTodo = {
        id: Date.now(), // ID único basado en timestamp
        title: nuevaTarea.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
      };

      // Agregar al estado (que automáticamente se guardará por useEffect)
      setTodos((prev) => [...prev, nuevoTodo]);
      setNuevaTarea(""); // Limpiar input
    }
  };

  const toggleTarea = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const eliminarTarea = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const limpiarCompletadas = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  // 4️⃣ RENDERIZADO
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">📝 Todos Persistentes</h1>

      {/* Formulario para agregar */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && agregarTarea()}
          placeholder="Escribe una tarea..."
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={agregarTarea}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          ➕
        </button>
      </div>

      {/* Estadísticas */}
      <div className="text-sm text-gray-600 mb-4">
        Total: {todos.length} | Pendientes:{" "}
        {todos.filter((t) => !t.completed).length} | Completadas:{" "}
        {todos.filter((t) => t.completed).length}
      </div>

      {/* Lista de tareas */}
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center gap-2 p-2 bg-gray-50 rounded"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTarea(todo.id)}
            />
            <span
              className={`flex-1 ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.title}
            </span>
            <button
              onClick={() => eliminarTarea(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="text-center text-gray-500 py-8">
          No hay tareas. ¡Agrega una! 🎯
        </p>
      )}

      {todos.some((t) => t.completed) && (
        <button
          onClick={limpiarCompletadas}
          className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
        >
          🧹 Limpiar Completadas
        </button>
      )}
    </div>
  );
}
```

**🔍 Puntos clave de la persistencia:**

1. **Inicialización inteligente:**

   ```jsx
   const [todos, setTodos] = useState(() => {
     // Esta función solo se ejecuta una vez al crear el componente
     const guardados = localStorage.getItem("todos");
     return guardados ? JSON.parse(guardados) : [];
   });
   ```

2. **Guardado automático:**

   ```jsx
   useEffect(() => {
     localStorage.setItem("todos", JSON.stringify(todos));
   }, [todos]); // Cada vez que todos cambia, se guarda automáticamente
   ```

3. **JSON.stringify y JSON.parse:**

   - `JSON.stringify(objeto)` → convierte objeto a string para guardar
   - `JSON.parse(string)` → convierte string de vuelta a objeto

4. **Manejo de errores:**
   - try/catch al parsear datos (por si están corruptos)
   - Verificar si existen datos antes de parsear

---

## 🎯 Puntos Clave para Recordar

### ✅ **DO - Buenas prácticas**

```jsx
// 1. Siempre incluir dependencias
useEffect(() => {
  fetchData(userId);
}, [userId]); // ← userId en dependencias

// 2. Cleanup para evitar memory leaks
useEffect(() => {
  const timer = setInterval(callback, 1000);
  return () => clearInterval(timer); // ← Cleanup
}, []);

// 3. Estado inicial desde localStorage
const [data, setData] = useState(() => {
  return JSON.parse(localStorage.getItem("data")) || [];
});
```

### ❌ **DON'T - Errores comunes**

```jsx
// ❌ Olvidar dependencias (puede causar bugs)
useEffect(() => {
  fetchData(userId);
}, []); // Falta userId

// ❌ No hacer cleanup de timers
useEffect(() => {
  setInterval(callback, 1000); // Memory leak!
}, []);

// ❌ Mutar estado directamente
useEffect(() => {
  data.push(newItem); // ❌ Mutación
  setData(data);
}, []);
```

---

## 🏆 Ejercicio Final (15 min)

**Crear un componente que:**

1. Muestre un contador que se incremente automáticamente cada 2 segundos
2. Permita pausar/reanudar con un botón
3. Guarde el valor actual en localStorage
4. Al recargar la página, recupere el valor guardado

```jsx
function ContadorPersistente() {
  // Tu código aquí...
  // Pistas: useState, useEffect, localStorage, setInterval
}
```

---

## 📚 Recursos y Próxima Clase

### Para practicar en casa:

- Modificar el TodoList de la clase 5 para que persista en localStorage


### Próxima clase:

**Formularios avanzados y validación** - ¡Nos vemos el miércoles!

---

_¿Preguntas? ¡Este es el momento perfecto para resolverlas!_ 🙋‍♂️🙋‍♀️
