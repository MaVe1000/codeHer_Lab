import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface Props {
  items: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, patch: { title: string }) => void;
}

export default function TodoList({ items, onToggle, onDelete, onEdit }: Props) {
  if (items.length === 0) return <p>No hay tareas para mostrar.</p>;

  return (
    <ul>
      {items.map((t) => (
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
