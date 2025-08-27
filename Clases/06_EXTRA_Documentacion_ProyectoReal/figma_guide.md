# Figma para Desarrolladoras Web

[Link Proyecto Figma](https://www.figma.com/design/K5wg1ovv606ue21qpiV5Fh/Instituto-Velez-Sarsfield?node-id=0-1&t=Aa95FtKFa6gEFuSQ-1) 

## ¿Qué es Figma y por qué nos sirve?

**Figma** es nuestro "plano arquitectónico" antes de programar. Nos permite:
- Planificar visualmente antes de escribir código
- Probar diseños responsive (mobile/desktop)
- Crear componentes reutilizables (como funciones, pero visuales)
- Exportar especificaciones exactas para CSS/Tailwind

## Conceptos clave que necesitas conocer

### 🎨 Design System
Tu "caja de herramientas" con todos los elementos reutilizables: colores, botones, textos.

### 🏷️ Design Tokens
Variables globales para tu diseño. En lugar de recordar `#3498db`, usas "Azul Primario".

### 🧩 Componentes
Elementos reutilizables que creas una vez y usas en todo el proyecto.

### 📋 Handoff
Cuando "entregas" el diseño para programar. Figma te da medidas, colores y espacios exactos.

## Estructura del archivo Figma

```
📁 ColegioXYZ - Web
├── 🎨 Design_System (tokens + componentes base)
├── 📱 Landing_Page (todas las secciones)
└── 🌤️ Clima_Page (app meteorológica)
```

**¿Por qué solo 3 páginas?**
- **Maximizamos** el espacio de la versión gratuita
- **Cada componente** se mapea directo a React
- **Estructura clara** para el handoff

## Workflow paso a paso

### 1. Setup inicial
- Crear proyecto "ColegioXYZ - Web"
- Crear las 3 páginas básicas

### 2. Design Tokens (variables globales)
**En Design_System crear:**

**Colores principales:**
- Primary: `#3B82F6` (azul colegio)
- Secondary: `#10B981` (verde éxito)
- Grays: `#F3F4F6`, `#4B5563`, `#111827`

**Tipografías responsive:**
- H1: 48px/32px (desktop/mobile)
- Body: 16px/14px
- Small: 14px/12px

**Espaciados (múltiplos de 8px):**
- xs: 8px, sm: 16px, md: 24px, lg: 32px, xl: 48px

### 3. Componentes atómicos
**Crear con Variants (estados como props de React):**

- **Button:** variants `primary/secondary/outline`, states `default/hover/disabled`
- **Card:** variants `news/subject/clima`
- **Input:** states `default/focus/error`
- **Badge:** variants `success/warning/info`

### 4. Landing Page
**Desktop (1200px) + Mobile (375px):**
- Header con navegación
- Hero + CTA principal
- Sección Sobre + Noticias grid + Materias grid
- Footer completo

### 5. Clima Page
- Header reutilizado
- ClimaCard (temp + ícono + ciudad)
- DetalleCard (humedad + viento)
- Estados: loading + error

## Tips prácticos

1. **Design System primero** - Crea tokens y componentes antes que las páginas
2. **Auto-layout everywhere** - Hace responsive automático
3. **Naming convention** - `component-variant-state`
4. **Piensa en React** - Cada componente Figma = un archivo .jsx
5. **Datos realistas** - Usa info que realmente vas a tener

## Checklist entregable

### Design System ✅
- [ ] Tokens definidos (colores, tipografías, espaciados)
- [ ] Componentes base con variants
- [ ] Auto-layout en todos los componentes

### Páginas responsive ✅
- [ ] Landing completa (desktop + mobile)
- [ ] Clima app funcional
- [ ] Navegación entre páginas

### Handoff ready ✅
- [ ] Prototipo interactivo navegable
- [ ] Nombres descriptivos para componentes
- [ ] Assets exportados (SVGs)
- [ ] Colors/fonts listos para Tailwind

## Resultado esperado

Un archivo Figma **production-ready** que funciona como especificación técnica completa:
- **ClimaCard.jsx** ← diseño de ClimaCard en Figma
- **Header.jsx** ← componente Header con navegación
- **NewsCard.jsx** ← Card variant="news"

**Figma = Plano. Next.js = Construcción.**