import { useState } from "react";
import "./TodoItem.css";

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(todo.title);

  const save = () => {
    const title = draft.trim();
    if (title && title !== todo.title) onEdit({ title });
    setEditing(false);
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
        className="todo-checkbox"
      />

      <div className="todo-content">
        {editing ? (
          <input
            autoFocus
            value={draft}
            onChange={e => setDraft(e.target.value)}
            onBlur={save}
            onKeyDown={e => {
              if (e.key === "Enter") save();
              if (e.key === "Escape") {
                setEditing(false);
                setDraft(todo.title);
              }
            }}
            className="todo-edit-input"
          />
        ) : (
          <div className={`todo-title ${todo.completed ? "completed" : ""}`}>
            {todo.title}
          </div>
        )}

        <div className="todo-meta">
          <span className="todo-tag">Prioridad: {labelPriority(todo.priority)}</span>
          {todo.dueDate && <span className="todo-tag">Vence: {todo.dueDate}</span>}
        </div>

        {todo.notes && (
          <p className="todo-notes">{todo.notes}</p>
        )}
      </div>

      <div className="todo-actions">
        {!editing && (
          <button
            onClick={() => setEditing(true)}
            className="edit-btn"
            title="Editar título"
          >
            ✏️
          </button>
        )}
        <button
          onClick={onDelete}
          className="delete-btn"
          title="Eliminar"
        >
          🗑
        </button>
      </div>
    </li>
  );
}

function labelPriority(p) {
  if (p === "high") return "Alta";
  if (p === "medium") return "Media";
  return "Baja";
}
