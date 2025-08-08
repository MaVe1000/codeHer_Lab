## Repaso

En la clase anterior ya creamos el proyecto con vite, usando:

```bash
npm create vite@latest nombre-del-proyecto -- --template react
# al agregar -- --template react se crea directamente un proyecto de React con JavaScript usando Vite en una sola línea
cd nombre-del-proyecto
npm install
```

- Correr el servidor de desarrollo:

```bash
npm run dev
```

Cuando se ejecuta esto, es lo mismo que decirle:

```bash
vite
```

Y Vite hace lo siguiente:

1. Levanta un servidor local

2. Compila JSX y JS moderno

3. Abre la app en el navegador (ej: http://localhost:5173)

4. Detecta cambios en vivo (hot reload)

## Estructura mínima de un proyecto:

```css
mi-proyecto-react/
├── index.html
├── src/
│   ├── main.jsx  ← punto de entrada
│   └── App.jsx   ← componente raíz
└── package.json
```

## Estructura mínima de nuestra primera app

```css
/my-app
│
├── index.html         // HTML base con <div id="root">
├── /src
│   ├── main.jsx       // Renderiza App en #root
│   ├── App.jsx        // Componente principal
│   ├── Header.jsx     // Componente reutilizable
│   ├── App.css        // Estilos para App
│   ├── Header.css     // Estilos para Header
│   └── index.css      // Estilos globales (opcional)

```

### 🧠 Este ejemplo te permite practicar:

- JSX básico

- Estructura por componentes

- Importación/exportación

- Uso de Fragmentos (<> </>)

- Atributos en JSX (className)

## Relación entre los archivos

```bash
index.html  ← HTML base, contiene <div id="root"></div>
   │
   └── main.jsx  ← punto de entrada de React, monta <App /> en #root
         │
         └── App.jsx  ← componente principal, organiza la interfaz
              └── Header.jsx, Footer.jsx, etc.  ← otros componentes
```

## Recordando:

🧠 ¿Qué es un prop en React?

    Un prop (abreviación de property) es una propiedad que se pasa de un componente padre a un hijo.

    Permite que los componentes sean reutilizables y dinámicos.

🎯 **En nuestro ejemplo, el componente Header puede mostrar títulos diferentes según el valor que le pases como prop desde App.**

🔧 ¿Cómo le paso el prop?

En el componente padre (App):
👉 titulo="Texto" → lo paso como atributo

```Js
<Header titulo="Mi primera app con React" />
```

Le estamos diciendo:
🗣️ “Componente Header, te paso un prop llamado titulo con el valor "Mi primera app con React"

🔧 ¿Cómo lo recibe el componente hijo?

En el componente hijo (Header), se recibe como parámetro de la función.

👉 { titulo } → lo recibo como si fuera una variable

```Js
function Header({ titulo }) {
  return (
    <header className="header">
      <h1>{titulo}</h1>
    </header>
  );
}
```

Acá le estamos diciendo:

📥 “Recibo un objeto con los props. Quiero usar el prop titulo, así que lo extraigo directamente”.

### En síntesis:

```Js
// App.jsx
<Header titulo="Hola mundo!" />
         ↑
         └── 📦 Paso 1: App "envía una carta" con un prop llamado 'titulo' y valor 'Hola mundo!'

           ↓
        React lo transpila a:

React.createElement(Header, { titulo: 'Hola mundo!' })
         ↑
         └── 🧠 Paso 2: Internamente se crea un objeto con props

           ↓
        React ejecuta el componente Header:

// Header.jsx
function Header({ titulo }) {
  return <h1>{titulo}</h1>;
}
         ↑
         └── 📬 Paso 3: Header "abre el sobre", extrae 'titulo' y lo muestra
```

### **_Props como envío de información_**

    - App es quien escribe y envía la carta 📩

    - Header es quien la recibe y la lee 📬

    - El prop es el contenido del sobre
