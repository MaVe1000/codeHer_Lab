const noticias = [
  {
    id: 1,
    titulo: "Inicio del ciclo lectivo 2025",
    detalle: "El lunes 3 de marzo comienzan las clases...",
  },
  {
    id: 2,
    titulo: "Nueva biblioteca digital",
    detalle: "Se inauguró la biblioteca digital con más de 500 libros...",
  },
];

export default function Noticias() {
  return (
    <main>
      <h2>Noticias del colegio</h2>
      <img src="/biblioteca.jpg" alt="Biblioteca del colegio" />
      <ul>
        {noticias.map((n) => (
          <li key={n.id}>
            <h3>{n.titulo}</h3>
            <p>{n.detalle}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}