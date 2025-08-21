import TodoItem from "./TodoItem";
import "./TodoList.css";

export default function TodoList({ items, onToggle, onDelete, onEdit }) {
  if (items.length === 0) {   // Si no hay tareas, mostramos un mensaje de aviso
    return (
      <p className="todo-empty">
        No hay tareas para mostrar.
      </p>
    );
  }

  return (
    <ul className="todo-list">
      {items.map(t => (
        <TodoItem
          key={t.id}
          todo={t}
          onToggle={() => onToggle(t.id)}
          onDelete={() => onDelete(t.id)}
          onEdit={(patch) => onEdit(t.id, patch)}
        />
      ))}
    </ul>
  );
}
