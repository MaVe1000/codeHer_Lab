import { useMemo, useState } from "react";
import TodoForm from "./TodoForm";
import FilterBar from "./FilterBar";
import TodoList from "./TodoList";
import "./TodoApp.css";

const newId = () => (crypto?.randomUUID?.() ?? String(Date.now() + Math.random()));

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: newId(), title: "Repasar useState", completed: false, priority: "medium", dueDate: "", notes: "" },
    { id: newId(), title: "Armar filtros", completed: true,  priority: "low",    dueDate: "", notes: "" },
  ]);
  const [filter, setFilter] = useState("all");

  const visibleTodos = useMemo(() => {
    if (filter === "active") return todos.filter(t => !t.completed);
    if (filter === "completed") return todos.filter(t => t.completed);
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
    setTodos(prev => [...prev, todo]);
  };

  const removeTodo = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const updateTodo = (id, patch) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, ...patch } : t));
  };

  const clearCompleted = () => {
    setTodos(prev => prev.filter(t => !t.completed));
  };

  const total = todos.length;
  const done = todos.filter(t => t.completed).length;
  const pending = total - done;

  return (
    <div className="todo-app">
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

