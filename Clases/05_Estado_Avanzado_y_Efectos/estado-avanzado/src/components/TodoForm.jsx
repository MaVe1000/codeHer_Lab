/*Formulario “más complejo”

Campos: title (requerido), priority (select), dueDate (date), notes (textarea)

Todo controlado; validación mínima; reseteo al enviar.*/
import { useState } from "react";
import "./TodoForm.css";

const initial = { title: "", priority: "medium", dueDate: "", notes: "" };

 function TodoForm({ onAdd }) {
  const [form, setForm] = useState(initial);
  const [error, setError] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) {
      setError("El título es obligatorio.");
      return;
    }
    onAdd(form);
    setForm(initial);
    setError("");
  };

  return (
    <form onSubmit={onSubmit} className="todo-form">
      <div className="form-row">
        <input
          name="title"
          value={form.title}
          onChange={onChange}
          placeholder="Nueva tarea…"
          className="input"
        />
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
        <input
          name="dueDate"
          type="date"
          value={form.dueDate}
          onChange={onChange}
          className="input"
        />
        <button
          type="submit"
          className="button"
        >
          Agregar
        </button>
      </div>

      <textarea
        name="notes"
        value={form.notes}
        onChange={onChange}
        placeholder="Notas (opcional)…"
        className="textarea"
      />

      {error && <p className="error">{error}</p>}
    </form>
  );
}
export default TodoForm;