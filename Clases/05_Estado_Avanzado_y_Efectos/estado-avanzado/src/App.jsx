import TodoApp from "./components/TodoApp";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Clase 5 — TODO List</h1>
        <TodoApp />
      </div>
    </div>
  );
}









/*Instalar Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
*/

/*Configurar Tailwind CSS
En el archivo tailwind.config.js, agrega las rutas a tus archivos de componentes:
module.exports = {
  content: [
    "./index.html",
    "./src/**.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
*/

/*Agregar las directivas de Tailwind en tu CSS
Crea un archivo CSS (por ejemplo, src/index.css) y agrega las siguientes líneas:
@tailwind base;
@tailwind components;
@tailwind utilities;
*/

/*Importar el archivo CSS en tu proyecto
Asegúrate de importar el archivo CSS en tu archivo principal (por ejemplo, src/main.jsx):
import './index.css';
*/