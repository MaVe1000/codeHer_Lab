# 🧠 Teoría — Estado complejo y listas

## 1) Estado con objetos y arrays

Podés guardar en el estado cualquier tipo: booleanos, strings, objetos, arrays…

Con objetos y arrays, no mutes: siempre creá copias.

```js
// Objeto
const [user, setUser] = useState({ nombre: "Ana", edad: 25 });
// Actualizar una propiedad (copia + cambio)
setUser((prev) => ({ ...prev, edad: 26 }));

// Array
const [tags, setTags] = useState(["react", "hooks"]);
// Agregar
setTags((prev) => [...prev, "state"]);
// Eliminar
setTags((prev) => prev.filter((t) => t !== "hooks"));
// Editar
setTags((prev) => prev.map((t) => (t === "react" ? "React" : t)));
```

## 2) Inmutabilidad en React (por qué importa)

React detecta cambios comparando referencias. Si mutás, la referencia no cambia y React puede no re-renderizar o reusar cosas que no debe.

Regla de oro: cloná y devolvé un objeto/array nuevo.

## 3) Renderizado de listas con .map()

```js
const items = [{ id: 1, titulo: "Aprender useState" }];
return (
  <ul>
    {items.map((item) => (
      <li key={item.id}>{item.titulo}</li>
    ))}
  </ul>
);
```

## 4) Keys en React: por qué importan

- Ayudan a React a identificar cada ítem entre renders.

- Usá IDs estables (de tu data). Evitá index como key si hay inserciones/eliminaciones/reordenamientos.

- Mal ejemplo (riesgo de bugs al eliminar):

```js
{
  items.map((item, index) => <li key={index}>{item.titulo}</li>);
}
```

- Bien (key estable por id):

```js
{
  items.map((item) => <li key={item.id}>{item.titulo}</li>);
}
```

## 5) Patrón de actualización de arrays (cheat-sheet)

```js
// agregar
setTodos((prev) => [...prev, nuevo]);

// eliminar por id
setTodos((prev) => prev.filter((t) => t.id !== id));

// actualizar por id
setTodos((prev) =>
  prev.map((t) => (t.id === id ? { ...t, title: "Nuevo" } : t))
);

// toggle booleano
setTodos((prev) =>
  prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
);
```

## 💻 Práctica — TODO List por componentes (con filtros y formulario “más complejo”)

## 📽️ **Video demostrativo:**

[Haz clic aquí para ver el TodoList con React en acción](./estado-avanzado/public/video/video%20demostrativo%20TodoList%20con%20React.mp4)

## 📁 Estructura sugerida

```
src/
├─ components/
│ ├─ TodoApp.jsx
│ ├─ TodoForm.jsx
│ ├─ FilterBar.jsx
│ ├─ TodoList.jsx
│ └─ TodoItem.jsx
├─ App.jsx
└─ index.css // Tailwind ya configurado (darkMode opcional)
```

## Modelo de dato de la tarea:

```plaintext
Todo = {
  id: string,                 // identificador único (ej: uuid)
  title: string,              // título o descripción de la tarea
  completed: boolean,         // true si está completada, false si no
  priority: "low" | "medium" | "high", // prioridad de la tarea
  dueDate: string | null,     // fecha de vencimiento (formato "YYYY-MM-DD")
  notes: string               // notas adicionales
}
```

## ✅ Qué cubre esta práctica

- Estado complejo (array de objetos con varias propiedades).

- Inmutabilidad (siempre clones con map, filter, spread).

- Render de listas con .map() y keys estables por id.

- Patrones de actualización: agregar, eliminar, toggle, editar.

- Filtros (todos/pendientes/completados) sin duplicar estado (derivado con useMemo).

- Formulario más complejo (múltiples campos, validación y reset).

## 🧪 Extensiones opcionales (si querés sumar)

- Persistir en localStorage con useEffect.

- Ordenar por prioridad/fecha.

- Botón “marcar todas”.

- Contador de progreso en una barra.
