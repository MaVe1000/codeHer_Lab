# 🚀 Clase: Creación de una web escolar con Next.js y React

## 🎯 Objetivo

En esta clase vas a aprender los fundamentos de **Next.js**, un framework basado en React que facilita la creación de sitios web rápidos, organizados y listos para producción.  
Crearemos una **web simple para un colegio** con varias páginas, un menú de navegación y una sección de noticias.

⏱️ **Duración de la clase:** 1:30 hora

---

## 📌 1. ¿Qué es Next.js?

- Es un **framework de React**.
- Agrega funciones útiles:
  - **Rutas automáticas:** cada archivo en `pages/` es una URL.
  - **SEO optimizado** (los buscadores indexan mejor).
  - **Renderizado del lado del servidor (SSR)**.
  - **API routes** para backend sencillo.
    Para mayor información, visitar la web: https://nextjs.org/

👉 En esta clase usaremos Next.js para hacer una **web escolar** con 4 páginas:  
`Inicio | Nosotros | Noticias | Contacto`

---

## 📌 2. Crear el proyecto

## 🎯 Objetivo

En esta clase aprenderemos a crear una **web para un colegio secundario** utilizando **React + Next.js 13/14 con App Router**.  
La web tendrá:

- Página de inicio
- Página "Nosotros"
- Página de noticias
- Página de contacto
- Un header con menú de navegación
- Estilos en tonos azules
- Imágenes libres de [Unsplash](https://unsplash.com/es/s/fotos/school)

Ejecutar en la terminal:

```bash
npx create-next-app@latest colegio-web
cd colegio-web
npm run dev
```

Abrí en el navegador Ej.:👉 http://localhost:3000

---

### 📌. Preguntas que hace la terminal

Durante la instalación, create-next-app hará algunas preguntas.
Estas son las respuestas recomendadas para esta clase:

Pregunta Respuesta

- Would you like to use TypeScript? No
- Would you like your code inside a src/ directory? No
- Would you like to use App Router? (recommended) Yes
- Would you like to use Turbopack? (recommended) Yes
- Would you like to customize the default import alias (@/\*)? No

---

## 📌 3. Estructura del proyecto

    - pages/ → cada archivo es una página

    - components/ → guardaremos componentes reutilizables

    - public/ → imágenes y archivos estáticos

```bash
/colegio-web
 ├── /app
 │    ├── layout.jsx
 │    ├── page.jsx
 │    ├── /nosotros
 │    │     └── page.jsx
 │    ├── /noticias
 │    │     └── page.jsx
 │    └── /contacto
 │          └── page.jsx
 ├── /components
 │    └── Header.jsx
 ├── /public
 │    ├── hero.jpg
 │    └── biblioteca.jpg
 └── /styles
      └── globals.css

```

---

## 📌 4. Código del proyecto

4.1🔹 Layout global

📂 app/layout.tsx

```jsx
import "../styles/globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Colegio Nacional San Martín",
  description: "Sitio web oficial del colegio secundario",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
```

---

4.2. Componente Header (menú de navegación)

📂 components/Header.jsx

```jsx
export default function Header() {
  return (
    <header>
      <h1>Colegio Nacional San Martín</h1>
      <nav>
        <a href="/">Inicio</a> |<a href="/nosotros">Nosotros</a> |
        <a href="/noticias">Noticias</a> |<a href="/contacto">Contacto</a>
      </nav>
    </header>
  );
}
```

---

4.3. Página de Inicio

📂 app/page.jsx

```jsx
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h2>Bienvenidos al sitio oficial</h2>
      <p>Formando estudiantes desde 1950</p>
      <Image src="/hero.jpg" alt="Colegio" width={800} height={400} />
    </main>
  );
}
```

---

4.4. Página Nosotros

📂 app/nosotros/page.jsx (antes de la version 13 se ponían: pages/nosotros.js)

```jsx
export default function Nosotros() {
  return (
    <main>
      <h2>Sobre nuestro colegio</h2>
      <p>
        Somos una institución educativa con más de 70 años de historia,
        comprometida con la formación integral de nuestros estudiantes.
      </p>
    </main>
  );
}
```

---

4.5. Página Noticias

📂 app/noticias/page.jsx

```jsx
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
```

---

4.6. Página Contacto

📂 app/contacto/page.jsx

```jsx
export default function Contacto() {
  return (
    <main>
      <h2>Contacto</h2>
      <p>Email: info@colegiosanmartin.edu</p>
      <p>Teléfono: (011) 1234-5678</p>
      <p>Dirección: Av. Siempre Viva 742</p>
    </main>
  );
}
```

---

## 📌 5. Ejercicio final (Agregar otra página)

👉 Para practicar:

    - Agreguen una nueva página llamada actividades.js en la carpeta pages/.

    - En esa página, hagan una lista de 3 actividades extracurriculares (Ejemplo: Deportes, Música, Arte).

    - Agreguen el link de esa página en el menú de navegación del Header.

---

### 📌🎨 6.1. Archivo de estilos globales

📂 styles/globals.css

```
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f8fafc;
  color: #1e293b;
}

header {
  background-color: #1e40af; /* azul oscuro */
  color: white;
  padding: 20px;
  text-align: center;
}

header h1 {
  margin: 0 0 10px 0;
}

nav a {
  color: #e0f2fe;
  text-decoration: none;
  margin: 0 10px;
  font-weight: bold;
}

nav a:hover {
  color: #93c5fd;
}

main {
  padding: 20px;
}

h2 {
  color: #1e3a8a;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background: #e0f2fe;
  border-left: 5px solid #1e40af;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
}

img {
  max-width: 100%;
  border-radius: 12px;
  margin-top: 15px;
}

```

## 📌 6.2. Conectar los estilos globales

En Next.js, abrí el archivo pages/\_app.js y asegurate de importar el CSS:

📂 pages/\_app.js

```
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

---

## 📸 6.3. Imágenes libres desde Unsplash

Guardar en /public/:

hero.jpg:
https://unsplash.com/photos/MYbhN8KaaEc

biblioteca.jpg:
https://unsplash.com/photos/hLvQ4-QEBAE

## 🖼️ 6.4. Modificar páginas para usar imágenes

pages/index.js

```js
import Header from "../components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <h2>Bienvenidos al sitio oficial</h2>
        <p>Formando estudiantes desde 1950</p>
        <Image src="/hero.jpg" alt="Colegio" width={800} height={400} />
      </main>
    </div>
  );
}
```

pages/noticias.js

```js
import Header from "../components/Header";
import Image from "next/image";

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
    <div>
      <Header />
      <main>
        <h2>Noticias del colegio</h2>
        <Image
          src="/biblioteca.jpg"
          alt="Biblioteca del colegio"
          width={600}
          height={300}
        />
        <ul>
          {noticias.map((n) => (
            <li key={n.id}>
              <h3>{n.titulo}</h3>
              <p>{n.detalle}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
```

---
