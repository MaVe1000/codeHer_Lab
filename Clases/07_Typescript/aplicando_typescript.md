# React + TypeScript + Vite desde el principio

##**Objetivo:** crear un proyecto nuevo con TypeScript habilitado desde el día 1, con configuración estricta, ESLint y scripts útiles.

## 0. Requisitos

- Node.js (versión LTS recomendada).

- npm (o pnpm/yarn).

## 1. Crear el proyecto con Vite y plantilla TypeScript

```bash
# con npm:
npm create vite@latest todo-typescript -- --template react-ts

# entrar a la carpeta
cd todo-typescript

# instalar dependencias
npm install

# correr en desarrollo
npm run dev
```

### _La plantilla react-ts ya trae TS listo y archivos .tsx._

## 2. Estructura mínima sugerida

```bash
todo-typescript/
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  └─ Ejemplo.tsx
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ vite-env.d.ts
├─ index.html
├─ package.json
├─ tsconfig.json
└─ README.md
```

## Y en src:

```bash
src/
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes básicos (Button, Input, etc.)
│   └── layout/         # Componentes de layout (Header, Footer, etc.)
├── pages/              # Páginas/Rutas principales
├── hooks/              # Custom hooks
├── utils/              # Funciones utilitarias
├── services/           # APIs y servicios externos
├── types/              # Definiciones de tipos TypeScript
├── assets/             # Assets estáticos
│   ├── images/
│   ├── icons/
│   └── styles/
├── __tests__/          # Tests (opcional)
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```

## 3. Configuración de TypeScript (tsconfig estricta)

### Revisar/ajustar tsconfig.json :

```bash
{
  // 🔧 Opciones del compilador TypeScript
  "compilerOptions": {
    // 🧠 Permite usar JSX con React
    "jsx": "react-jsx",

    // 📦 Módulo ESNext para compatibilidad con Vite
    "module": "ESNext",

    // 🎯 Target moderno para navegadores actuales
    "target": "ESNext",

    // 📁 Resolución de módulos estilo Node.js
    "moduleResolution": "Node",

    // 🧭 Permite usar rutas relativas desde src/
    "baseUrl": "./src",

    // 🛡️ Verifica que los archivos tengan tipos estrictos
    "strict": true,

    // 🧹 Elimina código no usado
    "noUnusedLocals": true,
    "noUnusedParameters": true,

    // 🧩 Mejora la inferencia de tipos
    "noImplicitAny": true,

    // 🧱 Permite importar archivos JSON
    "resolveJsonModule": true,

    // 🧰 Incluye tipos para importaciones como imágenes o CSS
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,

    // 🧼 Limpia el output para evitar errores innecesarios
    "skipLibCheck": true
  },

  // 📂 Archivos que TypeScript debe incluir
  "include": ["src"],

  // 🚫 Archivos que debe ignorar
  "exclude": ["node_modules", "dist"]
}
```

### ¿Qué significan algunas claves importantes?

"strict": true → activa todas las comprobaciones de tipos estrictas.

"noImplicitAny": true → te obliga a no dejar tipos “cualquier cosa”.

"noUncheckedIndexedAccess": true → arrays/objetos indexados devuelven tipos más seguros.

"paths" + "baseUrl" → habilita imports como @/components/....
