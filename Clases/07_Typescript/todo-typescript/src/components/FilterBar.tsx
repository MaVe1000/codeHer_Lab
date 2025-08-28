type Filter = "all" | "active" | "completed";

interface Props {
  filter: Filter;
  onChange: (f: Filter) => void;
  total: number;
  pending: number;
  done: number;
  onClearCompleted: () => void;
}

export default function FilterBar({
  filter,
  onChange,
  total,
  pending,
  done,
  onClearCompleted,
}: Props) {
  const btn = (val: Filter, label: string) => (
    <button
      onClick={() => onChange(val)}
      className={filter === val ? "active" : ""}
    >
      {label}
    </button>
  );

  return (
    <div className="filter-bar">
      <div>
        {btn("all", "Todos")}
        {btn("active", "Pendientes")}
        {btn("completed", "Completados")}
      </div>
      <div>
        <span>
          Total: {total} · Pend: {pending} · Comp: {done}
        </span>
        <button onClick={onClearCompleted}>Limpiar completados</button>
      </div>
    </div>
  );
}
