// Importamos hooks de React y tipos para eventos controlados
import { useState, ChangeEvent, FormEvent } from "react";

// Importamos el tipo Todo definido en types/todo.ts
import { Todo } from "../types/todo";

// ✅ Definimos los props que espera el componente TodoForm
// onAdd es una función que recibe un objeto con los campos de Todo,
// excepto "id" y "completed", que se generan automáticamente en TodoApp.
interface TodoFormProps {
  onAdd: (data: Omit<Todo, "id" | "completed">) => void;
}

// ✅ Estado inicial del formulario
// Usamos Omit para excluir "id" y "completed", ya que no se editan desde el form.
// Esto garantiza que el estado tenga exactamente los campos que el usuario puede modificar.
const initial: Omit<Todo, "id" | "completed"> = {
  title: "", // Campo obligatorio
  priority: "medium", // Valor por defecto
  dueDate: "", // Fecha opcional
  notes: "", // Notas opcionales
};

// ✅ Componente funcional TodoForm
// Recibe la función onAdd como prop, tipada arriba.
export default function TodoForm({ onAdd }: TodoFormProps) {
  // Estado del formulario, inicializado con los campos editables
  const [form, setForm] = useState(initial);

  // Estado para mostrar errores de validación (ej: título vacío)
  const [error, setError] = useState("");

  // 🔄 Maneja cambios en cualquier campo del formulario
  // Tipamos el evento como ChangeEvent para inputs, selects y textareas
  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Actualizamos el campo correspondiente usando el nombre como clave
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 📤 Maneja el envío del formulario
  // Tipamos el evento como FormEvent para formularios
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validación mínima: el título no puede estar vacío
    if (!form.title.trim()) {
      setError("El título es obligatorio.");
      return;
    }

    // Llamamos a la función onAdd con los datos actuales
    onAdd(form);

    // Reseteamos el formulario y limpiamos el error
    setForm(initial);
    setError("");
  };

  // 🧱 Render del formulario
  return (
    <form onSubmit={onSubmit} className="todo-form">
      <div className="form-row">
        {/* Campo de texto para el título */}
        <input
          name="title"
          value={form.title}
          onChange={onChange}
          placeholder="Nueva tarea…"
          className="input"
        />

        {/* Selector de prioridad */}
        <select
          name="priority"
          value={form.priority}
          onChange={onChange}
          className="select"
        >
          <option value="low">Baja</option>
          <option value="medium">Media</option>
          <option value="high">Alta</option>
        </select>

        {/* Campo de fecha para la fecha límite */}
        <input
          name="dueDate"
          type="date"
          value={form.dueDate}
          onChange={onChange}
          className="input"
        />

        {/* Botón para enviar el formulario */}
        <button type="submit" className="button">
          Agregar
        </button>
      </div>

      {/* Área de texto para notas opcionales */}
      <textarea
        name="notes"
        value={form.notes}
        onChange={onChange}
        placeholder="Notas (opcional)…"
        className="textarea"
      />

      {/* Mensaje de error si el título está vacío */}
      {error && <p className="error">{error}</p>}
    </form>
  );
}
