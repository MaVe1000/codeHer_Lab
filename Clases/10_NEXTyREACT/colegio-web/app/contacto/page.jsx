import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h2>Bienvenidos al sitio oficial</h2>
      <p>Formando estudiantes desde 1960</p>
      <Image src="/hero.jpg" alt="Colegio" width={800} height={400} />
    </main>
  );
}