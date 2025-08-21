/*.Primero realizaremos la importacion de los hooks que vamos a utilizar,
  useMemo (sirve para guardar cálculos y no repetirlos innecesariamente.)
  y useState (sirve para guardar datos que cambian (estado de la app).), 
  de la libreria de React. 
  .Luego importaremos los componentes que vamos a utilizar en nuestra aplicacion,
  TodoForm, FilterBar y TodoList, ademas del archivo de estilos TodoApp.css.*/
import { useMemo, useState } from "react";
import TodoForm from "./TodoForm";
import FilterBar from "./FilterBar";
import TodoList from "./TodoList";
import "./TodoApp.css";
//.Funcion para generar un ID unico para cada tarea.
//Utiliza crypto.randomUUID si está disponible, o una combinación de Date.now() y Math.random() como alternativa.
const newId = () =>
  crypto?.randomUUID?.() ?? String(Date.now() + Math.random());

//.Exportamos la funcion TodoApp que es el componente principal de nuestra aplicacion.
//Este componente maneja el estado de las tareas (todos) y los filtros aplicados a ellas.
export default function TodoApp() {
  const [todos, setTodos] = useState([
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
  ]);
  const [filter, setFilter] = useState("all");

  const visibleTodos = useMemo(() => {
    //useMemo evita recalcular el filtro cada vez que el componente se actualiza, (lo hace solo si cambian "todos" o "filter").
    if (filter === "active") return todos.filter((t) => !t.completed); // Filtra las tareas activas (no completadas)
    if (filter === "completed") return todos.filter((t) => t.completed); // Filtra las tareas completadas
    return todos; // Si el filtro es "all", devuelve todas las tareas
  }, [todos, filter]);

  //Funciones para manejar las tareas:
  // - addTodo: Agrega una nueva tarea.
  // - removeTodo: Elimina una tarea por su ID.
  // - toggleTodo: Cambia el estado de completado de una tarea.
  // - updateTodo: Actualiza los detalles de una tarea.
  // - clearCompleted: Elimina todas las tareas completadas.
  const addTodo = (data) => {
    const todo = {
      id: newId(),
      title: data.title.trim(), // Elimina espacios en blanco al inicio y al final del título
      completed: false,
      priority: data.priority,
      dueDate: data.dueDate || "",
      notes: data.notes || "",
    };
    if (!todo.title) return; // No agrega la tarea si el título está vacío
    setTodos((prev) => [...prev, todo]); // Agrega la nueva tarea al estado todos clonando el estado anterior
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));  // Elimina la tarea con el ID especificado
    // Utiliza filter para crear un nuevo array que excluye la tarea con el ID dado
  };

  const toggleTodo = (id) => {  // Cambia el estado de completado o pendiente de una tarea por su ID
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)) // Utiliza map para crear un nuevo array con la tarea actualizada
    );
  };

  const updateTodo = (id, patch) => {  // Actualiza los detalles de una tarea ,por ejemplo: título, fecha, notas, prioridad
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, ...patch } : t)));
  };

  const clearCompleted = () => {  // Elimina todas las tareas que están marcadas como completadas
    setTodos((prev) => prev.filter((t) => !t.completed)); // Utiliza filter para crear un nuevo array que solo incluya las tareas no completadas
  };

  const total = todos.length;  // Total de tareas
  // Calcula el número de tareas completadas y pendientes
  const done = todos.filter((t) => t.completed).length;
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
