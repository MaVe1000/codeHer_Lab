# 📅 Cronograma - Curso React Inicial

- Ejemplo para cubrir ciertos temas por clase (chequear)

## 🗓️ **SEMANA 1** - Fundamentos

### **Clase 1** - Lunes 04/08

**🧠 Teoría (1h):** Introducción y Setup

- ¿Qué es React y por qué usarlo?
- Diferencias con HTML/CSS/JS tradicional
- Instalación de Node.js y herramientas
- Creación del proyecto con Vite
- Estructura de carpetas y archivos clave

**💻 Práctica (1h):**

- Instalación paso a paso en computadoras
- Explorar archivos generados (`main.jsx`, `App.jsx`)
- Primer "¡Hola Mundo!" personalizado
- Modificar estilos básicos en `App.css`

---

### **Clase 2** - Miércoles 06/08

**🧠 Teoría (1h):** JSX, Fragmentos y Props

- ¿Qué es JSX y cómo funciona la transpilación?
- Fragmentos: `<>...</>` vs `<div>`
- Props: comunicación padre → hijo
- Destructuring de props

**💻 Práctica (1h):**

- Crear componente `Header.jsx` con props
- Implementar fragmentos en `App.jsx`
- Pasar diferentes valores como props
- Ejercicios de destructuring

**📁 Entregable:** Componente Header funcionando

---

## 🗓️ **SEMANA 2** - Componentes y Interactividad

### **Clase 3** - Lunes 11/08

**🧠 Teoría (1h):** Componentes Funcionales

- Anatomía de un componente funcional
- Import/Export entre archivos
- Composición de componentes
- Props avanzadas (valores por defecto, condicionales)
- Organización de archivos

**💻 Práctica (1h):**

- Crear componentes `Button.jsx` y `Contador.jsx`
- Integrar componentes en `App.jsx`
- Experimentar con props diferentes
- Refactorizar código existente

**📁 Entregable:** 3 componentes funcionando (Header, Button, Contador)

---

### **Clase 4** - Miércoles 13/08

**🧠 Teoría (1h):** Hooks - useState y Eventos

- ¿Qué son los Hooks en React?
- useState: estado local en componentes
- Eventos en React (onClick, onChange)
- Re-renderizado: cuándo y por qué
- Inputs controlados

**💻 Práctica (1h):**

- Profundizar en el useState del Contador
- Crear formulario básico con input controlado
- Toggle de visibilidad (mostrar/ocultar)
- Lista simple con agregar/eliminar items

**📁 Entregable:** App interactiva con estado

---

## 🗓️ **SEMANA 3** - Estado Avanzado y Efectos

### **Clase 5** - Lunes 18/08 y Miércoles 20/08 _(Tema extendido)_

**🧠 Teoría (1h - Lunes):** Estado Complejo y Listas

- Estado con objetos y arrays
- Inmutabilidad en React (por qué importa)
- Renderizado de listas con `.map()`
- Keys en React: ¿por qué son importantes?
- Patrón de actualización de arrays (cheat-sheet)

**💻 Práctica (1h - Lunes + 2h - Miércoles):**

- **Lunes:** TODO List básico con componentes
- **Miércoles:** TODO List avanzado con filtros y formulario complejo
  - Componentes separados (`TodoApp`, `TodoForm`, `TodoList`, `TodoItem`)
  - Filtros (todos/pendientes/completados)
  - Formulario con múltiples campos (título, prioridad, fecha, notas)
  - Validación básica

**📁 Entregable:** TODO List funcional y componentizado

---

### **Clase 6** - Lunes 25/08

**🧠 Teoría (1h):** useEffect y Ciclo de Vida

- ¿Qué es useEffect?
- Efectos secundarios en componentes
- useEffect sin dependencias, con dependencias vacías, con dependencias
- Cleanup de efectos
- Casos de uso comunes

**💻 Práctica (1h):**

- Reloj digital con useEffect
- Contador automático que se incrementa cada segundo
- Fetch de datos desde una API pública
- LocalStorage: guardar y recuperar datos

**📁 Entregable:** App con persistencia de datos

---

## 🗓️ **SEMANA 4** - Integración y Proyecto

### **Clase 7** - Miércoles 27/08

**🧠 Teoría (1h):** Formularios Avanzados y Validación

- Formularios controlados vs no controlados
- Validación en tiempo real
- Custom hooks para formularios
- Manejo de múltiples inputs
- Validación con patrones y regex básicos
- UX en formularios (mensajes de error, estados de carga)

**💻 Práctica (1h):**

- Formulario de contacto con validación completa
- Custom hook `useForm` para reutilización
- Validación de email, teléfono, campos requeridos
- Integración con localStorage para guardar borradores

**📁 Entregable:** Formulario robusto con validación

---

### **Clase 8** - Lunes 01/09

**🧠 Teoría (1h):** Patrones, Custom Hooks y Buenas Prácticas

- ¿Cuándo crear un componente nuevo?
- Custom Hooks: extraer lógica reutilizable
- Composición vs props drilling
- Estructura de carpetas escalable
- Convenciones de nomenclatura
- Performance básica (cuándo React re-renderiza)

**💻 Práctica (1h):**

- Crear custom hooks: `useLocalStorage`, `useApi`, `useToggle`
- Refactorizar proyectos anteriores usando custom hooks
- Organizar componentes en carpetas lógicas
- Optimizar renders innecesarios

---

### **Clase 9** - Miércoles 03/09

**🧠 Teoría (1h):** Proyecto Integrador y Deployment

- Planificación del proyecto final
- Build de producción con Vite
- Deploy gratuito en Netlify/Vercel
- Variables de entorno en producción
- Debugging y herramientas de desarrollo

**💻 Práctica (1h):**

- Definir proyecto integrador individual
- Setup de deployment
- Primeros pasos del proyecto final
- Configuración de entorno de producción

**📁 Entregable:** Proyecto desplegado y funcionando

---

## 🆕 **TEMAS IMPORTANTES AGREGADOS:**

### ✅ **Custom Hooks (Clase 8)**

**¿Por qué es importante?**

- Reutilización de lógica entre componentes
- Código más limpio y mantenible
- Concepto fundamental en React moderno

### ✅ **Formularios Avanzados (Clase 7)**

**¿Por qué es importante?**

- Los formularios son cruciales en aplicaciones reales
- Validación es esencial para UX
- Base para aplicaciones más complejas

### ✅ **Performance Básica (Clase 8)**

**¿Por qué es importante?**

- Entender cuándo React re-renderiza
- Evitar bugs comunes de performance
- Preparación para conceptos avanzados

### ✅ **Estructura de Proyectos (Clase 8)**

**¿Por qué es importante?**

- Escalabilidad del código
- Colaboración en equipo
- Buenas prácticas profesionales

---

## 🎯 **Proyectos Prácticos por Semana**

| Semana | Proyecto                  | Conceptos aplicados                                   |
| ------ | ------------------------- | ----------------------------------------------------- |
| **1**  | Portfolio Personal Básico | JSX, Props, Componentes                               |
| **2**  | Calculadora Simple        | useState, Eventos, Lógica                             |
| **3**  | **TODO List Avanzado**    | Estado complejo, useEffect, LocalStorage, Componentes |
| **4**  | **Dashboard Personal**    | Custom Hooks, Formularios, APIs, Deploy               |

**💡 Dashboard Personal incluirá:**

- Lista de tareas persistente
- Formulario de contacto validado
- Widget del clima (API)
- Reloj digital
- Notas rápidas
- Deploy en producción

---

### ⏳ **Para React Intermedio (próximo mes):**

- React Router (navegación)
- Context API (estado global)
- useReducer para estado complejo
- Optimización avanzada (memo, useMemo)
- Testing básico
- TypeScript con React

---

## 📚 **Recursos por Semana**

### **Semana 1-2:** Fundamentos

- [React.dev - Tutorial oficial](https://react.dev/learn)
- [MDN - JavaScript ES6+](https://developer.mozilla.org/es/docs/Web/JavaScript)

### **Semana 3-4:** Hooks y Avanzado

- [React Hooks Documentation](https://react.dev/reference/react)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - API para pruebas

---

## 🏆 **Objetivos de Aprendizaje**

### **Al finalizar el mes, las estudiantes podrán:**

✅ Crear componentes funcionales reutilizables  
✅ Manejar estado local con useState  
✅ Implementar interactividad con eventos  
✅ Realizar efectos secundarios con useEffect  
✅ Consumir APIs externas  
✅ Organizar código en proyectos escalables  
✅ Deployar aplicaciones React

---

_Cronograma sujeto a ajustes según el ritmo de aprendizaje del grupo_
