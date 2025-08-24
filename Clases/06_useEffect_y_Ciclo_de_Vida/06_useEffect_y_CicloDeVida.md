# Clase 6 - useEffect y Ciclo de Vida en React

_Lunes 25/08_

---

## 🔄 Repaso Rápido - Clase 5

### ¿Qué vimos la clase pasada?

**Estado complejo** y **listas en React**:

- Arrays/vectores con `.map()` para renderizar listas
- **Inmutabilidad**: `setTodos([...todos, nuevaTarea])` ✅ vs `todos.push()` ❌
- **Keys estables**: usar IDs únicos, no índices
- **Patrones**: agregar (spread), eliminar (filter), editar (map)

**Dudas clase pasada** --> [.map() y listas](listasReact.md)

### 🤔 Pregunta de conexión

**"¿Qué pasa si quiero que mi TodoList se guarde automáticamente cada vez que agrego una tarea?"**

**Respuesta:** Necesitamos **efectos secundarios** → **useEffect**

---

## 🧠 Teoría - useEffect y Ciclo de Vida

### 1. ¿Qué es useEffect?

**useEffect** ejecuta **efectos secundarios** en nuestros componentes.

**¿Qué son los efectos secundarios?**
Operaciones que van "más allá" del renderizado: APIs, timers, localStorage, etc.

### 2. Estructura básica de useEffect

- useEffect( (no recibe parámetros) => { código que se ejecuta } , [ array de dependencias ]);

```jsx
import { useEffect, useState } from "react";

useEffect(() => {
  // 🎯 Código que se ejecuta
  console.log("Efecto ejecutado");

  // 🧹 Cleanup (opcional)
  return () => {
    console.log("Limpieza");
  };
}, [dependencias]); // 📦 Array de dependencias
```

### 3. ¿Qué son las dependencias?

Las **dependencias** son variables que useEffect "observa". Cuando cambian, el efecto se vuelve a ejecutar.

```jsx
const [count, setCount] = useState(0);
const [name, setName] = useState("");

useEffect(() => {
  console.log("Count o name cambiaron");
}, [count, name]); // ← count y name son dependencias
```

### 4. Tipos de useEffect según dependencias

#### 🔸 **Sin array de dependencias** → Se ejecuta en cada render

```jsx
useEffect(() => {
  console.log("Se ejecuta en CADA render");
}); // ← Sin segundo parámetro
```

**⚠️ Peligro:** Puede causar loops infinitos

#### 🔸 **Con array vacío []** → Solo una vez (al montar)

```jsx
useEffect(() => {
  console.log("Solo UNA vez al montarse");
}, []); // ← Array vacío
```

**Uso típico:** Fetch inicial, configurar listeners

#### 🔸 **Con dependencias [var1, var2]** → Cuando cambian

```jsx
useEffect(() => {
  console.log("Cuando count cambia");
}, [count]); // ← Solo si count cambia
```

### 5. Ciclo de Vida y useEffect

**¿Qué es el ciclo de vida?**
Es como la "vida" de un componente: **nace**, **vive** (cambia), y **muere**.

```jsx
// Ejemplo práctico: cuando cambias de página en una app
function MiComponente() {
  useEffect(() => {
    // 🏗️ MONTAJE: El componente aparece por primera vez
    console.log("¡Hola! Aparecí en pantalla");

    return () => {
      // 🗑️ DESMONTAJE: El componente va a desaparecer
      console.log("¡Adiós! Me voy de la pantalla");
    };
  }, []); // ← Array vacío = solo montaje y desmontaje

  useEffect(() => {
    // 🔄 ACTUALIZACIÓN: El componente cambió algo
    console.log("¡Algo cambió en mí!");
  }, [count]); // ← Cuando count cambia
}
```

**TODOS** los componentes de React siguen este patrón:

1. **Se crean** (aparecen en pantalla)
2. **Se actualizan** (cuando cambia su estado o props)
3. **Se destruyen** (desaparecen de pantalla)

**Ejemplo real:** Ir de página de Login → Dashboard

- Login se **desmonta** (desaparece)
- Dashboard se **monta** (aparece)

### 6. ¿Qué es un Memory Leak?

**Memory Leak = "Fuga de memoria"**
Es cuando tu código sigue "trabajando" aunque ya no lo necesites, desperdiciando recursos.

**Ejemplo sin cleanup (❌ MAL):**

```jsx
function Reloj() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setHora(new Date()); // ← Esto sigue corriendo SIEMPRE
    }, 1000);
  }, []);

  return <div>{hora.toLocaleTimeString()}</div>;
}

// Si el componente desaparece de pantalla, el timer sigue corriendo!
// Resultado: La app se vuelve lenta y consume más memoria
```

**Ejemplo con cleanup (✅ BIEN):**

```jsx
function Reloj() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setHora(new Date()); // ← Actualiza hora cada 1 seg
    }, 1000);

    // 🧹 Cleanup: "limpia" cuando el componente se va
    return () => {
      clearInterval(timer); // ← Para el timer
    };
  }, []);

  return <div>{hora.toLocaleTimeString()}</div>;
}

// setInterval y clearInterval son funciones nativas del navegador (JS)
```

\*\*

---

## 💻 Práctica - Ejemplos Concisos

### Ejemplo 1: Contador con Control

```jsx
function ContadorControlado() {
  const [count, setCount] = useState(0);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    let timer;

    if (activo) {
      // ✅ Solo crear timer si está activo
      timer = setInterval(() => {
        setCount((prev) => prev + 1); // ← Usar función para estado anterior
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [activo]); // ← Se ejecuta cuando activo cambia

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={() => setActivo(!activo)}>
        {activo ? "⏸️ Pausar" : "▶️ Iniciar"}
      </button>
    </div>
  );
}
```

### Ejemplo 2: Fetch de API (Patrón Async Correcto)

```jsx
function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 🚫 MAL: useEffect no puede ser async directamente
    // useEffect(async () => { ... }, [])

    // ✅ BIEN: Función async interna
    async function fetchUsuarios() {
      try {
        setCargando(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Error en la API");
        }

        const data = await response.json();
        setUsuarios(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setUsuarios([]);
      } finally {
        setCargando(false);
      }
    }

    fetchUsuarios(); // ← Llamar la función async
  }, []); // ← Solo al montar

  // Renderizado condicional
  if (cargando) return <div>🔄 Cargando...</div>;
  if (error) return <div>❌ Error: {error}</div>;

  return (
    <div>
      <h2>👥 Usuarios ({usuarios.length})</h2>
      {usuarios.map((user) => (
        <div key={user.id}>
          {user.name} - {user.email}
        </div>
      ))}
    </div>
  );
}
```

### Ejemplo 3: localStorage Persistencia

```jsx
function TodosPersistentes() {
  // 🔄 Inicializar desde localStorage
  const [todos, setTodos] = useState(() => {
    const guardados = localStorage.getItem("todos");
    return guardados ? JSON.parse(guardados) : [];
  });

  // 💾 Guardar automáticamente cuando todos cambie
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // ← Cada vez que todos cambia

  const agregarTodo = (texto) => {
    const nuevo = { id: Date.now(), texto, completado: false };
    setTodos((prev) => [...prev, nuevo]); // ← Se guarda automáticamente
  };

  return (
    <div>
      <h2>📝 Todos Persistentes</h2>
      <p>Total: {todos.length}</p>
      {/* Resto del componente... */}
    </div>
  );
}
```

---

## ⚠️ Errores Comunes con useEffect

### 1. **Dependencias faltantes**

```jsx
// ❌ MAL
const [userId, setUserId] = useState(1);
useEffect(() => {
  fetchUser(userId); // ← userId debería estar en dependencias
}, []); // ← Array vacío, pero usa userId

// ✅ BIEN
useEffect(() => {
  fetchUser(userId);
}, [userId]); // ← Incluir userId
```

### 2. **No hacer cleanup**

```jsx
// ❌ MAL - Memory leak
useEffect(() => {
  setInterval(() => console.log("tick"), 1000);
}, []);

// ✅ BIEN - Con cleanup
useEffect(() => {
  const timer = setInterval(() => console.log("tick"), 1000);
  return () => clearInterval(timer);
}, []);
```

### 3. **useEffect async incorrecto**

```jsx
// ❌ MAL - useEffect no puede ser async
useEffect(async () => {
  const data = await fetchData();
}, []);

// ✅ BIEN - Función async interna
useEffect(() => {
  async function loadData() {
    const data = await fetchData();
    setData(data);
  }
  loadData();
}, []);
```

### 4. **Loops infinitos**

```jsx
// ❌ MAL - Loop infinito
const [data, setData] = useState([]);
useEffect(() => {
  setData([...data, newItem]); // ← Cambia data, triggerea useEffect otra vez
}, [data]);

// ✅ BIEN - Sin dependencia de data
useEffect(() => {
  setData((prev) => [...prev, newItem]);
}, [newItem]); // ← Solo cuando newItem cambia
```

---

## 🎯 Resumen de Buenas Prácticas

### ✅ **SÍ hacer:**

- Incluir todas las dependencias que uses
- Hacer cleanup de timers, listeners, etc.
- Usar funciones async internas (no useEffect async)
- Inicializar estado desde localStorage con función

### ❌ **NO hacer:**

- Olvidar dependencias (causa bugs)
- Dejar timers sin limpiar (memory leaks)
- Hacer useEffect async directamente
- Mutar estado directamente en efectos

---

## 🏆 Ejercicios práctico clase hoy

**Modificar el TodoList de la clase 5 para que persista en localStorage**

- Al recargar la página, las tareas deben seguir ahí
- Usar el patrón que vimos en el Ejemplo 4

---

## 📚 Próxima Clase

**Formularios avanzados y validación**

## 🎥 Video de Referencia

Tutorial completo de useEffect: [https://www.youtube.com/watch?v=KtBtkEDggOI](https://www.youtube.com/watch?v=KtBtkEDggOI)
