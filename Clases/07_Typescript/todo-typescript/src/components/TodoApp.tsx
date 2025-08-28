// Instalar los tipos para typescript:
// npm install uuid
// npm install --save-dev @types/uuid

// Importamos el hook useState para manejar estado local
import { useState } from "react";

// Importamos el tipo Todo definido en src/types/todo.ts
import { Todo } from "../types/todo";

// Importamos los componentes hijos
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import FilterBar from "./FilterBar";

// Importamos la función v4 para generar IDs únicos
import { v4 as uuid } from "uuid";

// ✅ Definimos un tipo literal para los filtros disponibles
// Esto restringe el estado del filtro a solo estos tres valores válidos
type Filter = "all" | "active" | "completed";

// ✅ Componente principal de la aplicación
export default function TodoApp() {
  // 🧠 Estado que contiene todas las tareas
  // Tipado explícito como arreglo de Todo
  const [todos, setTodos] = useState<Todo[]>([]);

  // 🎯 Estado que indica qué filtro está activo
  // Tipado como Filter para restringir valores válidos
  const [filter, setFilter] = useState<Filter>("all");

  // ➕ Función para agregar una nueva tarea
  // Recibe un objeto con los campos editables del formulario
  // Se omiten "id" y "completed" porque se generan internamente
  const addTodo = (data: Omit<Todo, "id" | "completed">) => {
    const newTodo: Todo = {
      id: uuid(), // Generamos un ID único
      completed: false, // Inicializamos como no completada
      ...data, // Incorporamos los datos del formulario
    };
    setTodos((prev) => [...prev, newTodo]); // Agregamos la nueva tarea al estado
  };

  // ✅ Función para alternar el estado de completado de una tarea
  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // 🗑 Función para eliminar una tarea por ID
  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  // ✏️ Función para editar el título de una tarea
  // patch es un objeto parcial que puede contener solo el campo "title"
  const editTodo = (id: string, patch: Partial<Pick<Todo, "title">>) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, ...patch } : t)));
  };

  // 🧹 Función para eliminar todas las tareas que estén completadas
  const clearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed));
  };

  // 🔍 Filtramos las tareas según el filtro activo
  const filtered = todos.filter((t) =>
    filter === "all" ? true : filter === "active" ? !t.completed : t.completed
  );

  // 📊 Calculamos estadísticas para mostrar en la barra de filtros
  const stats = {
    total: todos.length,
    pending: todos.filter((t) => !t.completed).length,
    done: todos.filter((t) => t.completed).length,
  };

  // 🧱 Render del componente principal
  return (
    <div className="todo-app">
      {/* 📝 Formulario para agregar nuevas tareas */}
      <TodoForm onAdd={addTodo} />

      {/* 🎛 Barra de filtros y estadísticas */}
      <FilterBar
        filter={filter}
        onChange={setFilter}
        {...stats}
        onClearCompleted={clearCompleted}
      />

      {/* 📋 Lista de tareas filtradas */}
      <TodoList
        items={filtered}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  );
}
