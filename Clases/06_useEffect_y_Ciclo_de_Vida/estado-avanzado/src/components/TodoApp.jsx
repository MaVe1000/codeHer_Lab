import { useMemo, useState, useEffect } from "react"; // ← PASO 1: Importar useEffect
import TodoForm from "./TodoForm";
import FilterBar from "./FilterBar";
import TodoList from "./TodoList";
import "./TodoApp.css";

const newId = () =>
  crypto?.randomUUID?.() ?? String(Date.now() + Math.random());

export default function TodoApp() {
  // PASO 2: Inicializar estado desde localStorage
  const [todos, setTodos] = useState(() => {
    console.log("🔄 Intentando recuperar todos desde localStorage...");

    try {
      const todosGuardados = localStorage.getItem("todos");

      if (todosGuardados) {
        const todosParsed = JSON.parse(todosGuardados);
        console.log("✅ Todos recuperados desde localStorage:", todosParsed);
        return todosParsed;
      } else {
        console.log("📝 No hay todos guardados, usando datos iniciales");
        // Datos iniciales solo si no hay nada guardado
        return [
          {
            id: newId(),
            title: "Repasar useState",
            completed: false,
            priority: "medium",
            dueDate: "",
            notes: "",
          },
          {
            id: newId(),
            title: "Armar filtros",
            completed: true,
            priority: "low",
            dueDate: "",
            notes: "",
          },
        ];
      }
    } catch (error) {
      console.error("❌ Error al parsear todos desde localStorage:", error);
      return []; // Array vacío si hay error
    }
  });

  const [filter, setFilter] = useState("all");

  // PASO 3: useEffect para guardar automáticamente en localStorage
  useEffect(() => {
    console.log("💾 Guardando todos en localStorage:", todos);
    console.log("📊 Cantidad de todos a guardar:", todos.length);

    // Guardar en localStorage cada vez que todos cambie
    localStorage.setItem("todos", JSON.stringify(todos));

    // Para ver en la consola del navegador también
    console.log(
      "🔍 Verificar localStorage desde DevTools → Application → Local Storage"
    );
  }, [todos]); // ← Dependencia: se ejecuta cada vez que todos cambia

  const visibleTodos = useMemo(() => {
    if (filter === "active") return todos.filter((t) => !t.completed);
    if (filter === "completed") return todos.filter((t) => t.completed);
    return todos;
  }, [todos, filter]);

  const addTodo = (data) => {
    const todo = {
      id: newId(),
      title: data.title.trim(),
      completed: false,
      priority: data.priority,
      dueDate: data.dueDate || "",
      notes: data.notes || "",
    };
    if (!todo.title) return;

    console.log("➕ Agregando nuevo todo:", todo);
    setTodos((prev) => [...prev, todo]); // ← Esto disparará el useEffect automáticamente
  };

  const removeTodo = (id) => {
    console.log("🗑️ Eliminando todo con id:", id);
    setTodos((prev) => prev.filter((t) => t.id !== id)); // ← Esto disparará el useEffect
  };

  const toggleTodo = (id) => {
    console.log("✅ Cambiando estado de todo con id:", id);
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const updateTodo = (id, patch) => {
    console.log("✏️ Editando todo con id:", id, "patch:", patch);
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, ...patch } : t)));
  };

  const clearCompleted = () => {
    console.log("🧹 Limpiando todos completados");
    setTodos((prev) => prev.filter((t) => !t.completed));
  };

  const total = todos.length;
  const done = todos.filter((t) => t.completed).length;
  const pending = total - done;

  return (
    <div className="todo-app">
      {/* PASO 4: Indicador visual de persistencia (opcional) */}
      <div
        style={{
          padding: "8px",
          backgroundColor: "#e8f5e8",
          borderRadius: "4px",
          marginBottom: "16px",
          fontSize: "14px",
          color: "#2d5a2d",
        }}
      >
        💾 Los todos se guardan automáticamente. Total guardados: {total}
      </div>

      <TodoForm onAdd={addTodo} />
      <FilterBar
        filter={filter}
        onChange={setFilter}
        pending={pending}
        done={done}
        total={total}
        onClearCompleted={clearCompleted}
      />
      <TodoList
        items={visibleTodos}
        onToggle={toggleTodo}
        onDelete={removeTodo}
        onEdit={updateTodo}
      />
    </div>
  );
}

/* 

-> ¿Por qué en TodoApp? Porque es donde está el estado principal
-> ¿Por qué función inicializadora? Para que solo lea localStorage una vez
-> ¿Por qué useEffect con [todos]? Para guardar automáticamente cuando algo cambia
-> JSON.stringify/parse para convertir objeto ↔ string

*/
