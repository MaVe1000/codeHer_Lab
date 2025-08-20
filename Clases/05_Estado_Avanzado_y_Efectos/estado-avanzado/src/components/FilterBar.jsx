//Filtros (todos / completados / pendientes) 
import "./FilterBar.css";

export default function FilterBar({ filter, onChange, pending, done, total, onClearCompleted }) {
  const btn = (val, label) => (
    <button
      onClick={() => onChange(val)}  //Cuando se hace clic en el botón, se llama a la función onChange con el valor del filtro correspondiente
      className={`filter-btn ${filter === val ? "active" : ""}`} //Si el filtro actual es igual al valor del botón, se añade la clase "active"
    >
      {label}
    </button>
  );

  return (
    <div className="filter-bar">
      <div className="filter-group">
        {btn("all", "Todos")}
        {btn("active", "Pendientes")}
        {btn("completed", "Completados")}
      </div>
      <div className="stats-group">
        <span className="stats-text">
          Total: {total} · Pend: {pending} · Comp: {done}
        </span>
        <button
          onClick={onClearCompleted}
          className="clear-btn"
        >
          Limpiar completados
        </button>
      </div>
    </div>
  );
}
