# Clase 02: JSX, Fragmentos y Props

## 1. 🧬 ¿Qué es JSX?

### 📌 **Concepto técnico:**

- JSX (JavaScript XML) es una **extensión de sintaxis para JavaScript** que nos permite escribir elementos HTML dentro del código JavaScript.
- Aunque **parece HTML**, en realidad es **transpilado a JavaScript puro** (React lo convierte con `React.createElement`).
- JSX permite que el código sea **más declarativo, legible y cercano al DOM real**.

### 💡 **Explicación simple:**

- Es como escribir HTML, pero dentro de JavaScript. No es estrictamente HTML, pero se parece mucho.
- El navegador no lo entiende directamente. Por eso usamos herramientas como Babel que lo **transpilan** (lo convierten) a código JS nativo antes de que llegue al navegador.

###🧪 **¿Qué significa "transpilar"?**

    Transpilar (de transpile = translate + compile) significa convertir código escrito en una sintaxis avanzada a una más básica que pueda entender el navegador.

    En el caso de React, JSX no es un estándar del navegador, por eso debe ser convertido a JavaScript puro antes de ejecutarse.

### 🧠 **Ejemplo:**

```jsx
const elemento = <h1>Hola, mundo</h1>;
// Esto se transpila a:
React.createElement("h1", null, "Hola, mundo");
```

Este fragmento usa JSX, una extensión de JavaScript que permite escribir elementos de React de forma declarativa y parecida a HTML.

Aunque parece HTML, JSX no es HTML: es azúcar sintáctico que se transforma en llamadas a React.createElement.

### 🔧 **¿Cómo lo interpreta React?**

JSX no se ejecuta directamente en el navegador. Antes de que el código llegue al navegador, herramientas como Babel lo transpilan a JavaScript puro:

```jsx
React.createElement("h1", null, "Hola, mundo");
```

Esto significa:

- 'h1': el tipo de elemento (una etiqueta HTML).

- null: las propiedades (props). En este caso no hay ninguna.

- 'Hola, mundo': el contenido del elemento, que será el child (hijo) del h1.

### 🧩 **¿Qué devuelve React.createElement?**

Devuelve un objeto de tipo React Element, algo así:

```Js
{
  type: 'h1',
  props: {
    children: 'Hola, mundo'
  }
}
```

Este objeto es lo que React usa internamente para construir el Virtual DOM, comparar cambios y renderizar eficientemente en el navegador.

## 🧙‍♀️ ¿Por qué es útil JSX?

✅ Más legible y expresivo que React.createElement.

✅ Permite componer interfaces como si fueran HTML, pero con todo el poder de JavaScript.

✅ Facilita el trabajo con componentes, props y lógica condicional.

✅ Mejora la productividad y la claridad del código en proyectos React.

## 🧩 Resumen

| Concepto         | JSX                                      |
| ---------------- | ---------------------------------------- |
| ¿Qué es?         | Sintaxis parecida a HTML dentro de JS    |
| ¿Cómo funciona?  | Se transpila a `React.createElement`     |
| ¿Qué devuelve?   | Un objeto `React Element`                |
| ¿Por qué usarlo? | Legibilidad, expresividad, productividad |

---

# 2. 🧱 ¿Qué son los Fragmentos?

## 📌 **Concepto técnico:**

Los Fragmentos en React permiten agrupar múltiples elementos sin añadir nodos extra al DOM.

- En React, cada componente debe retornar un único elemento padre.

- Si se necesita agrupar múltiples elementos sin agregar un nodo(div) extra al DOM, se puede usar un Fragmento.

- React ofrece dos formas de escribir fragmentos:

  - Forma explícita: <React.Fragment> ... </React.Fragment>

  - Forma abreviada: <> ... </>

### 💡 **Explicación simple:**

Es como un contenedor invisible que agrupa elementos.

En vez de envolver todo en un <div>, usamos fragmentos para que React no se queje, pero sin ensuciar el HTML con etiquetas que no aportan nada.

- Es como si React dijera: “Ok, no te voy a romper el HTML, pero dame un contenedor invisible que junte todo”.

- <></> es ese contenedor invisible.

## 🧩 **¿Cuándo conviene usar fragmentos?**

    - Cuando estás devolviendo varios elementos JSX hermanos.

    - Cuando no querés agregar etiquetas HTML extras (por ejemplo, div, section, etc.).

    - Cuando te importa mantener un DOM limpio, sin elementos innecesarios que puedan romper el diseño o el estilo.

### 🧠 **Ejemplo de transpilación de un componente con Fragmentos:**

Vimos que:

- JSX es una extensión de JavaScript que permite escribir HTML dentro del código JS.

```jsx
return (
  <>
    <h1>Título</h1>
    <p>Contenido</p>
  </>
);
```

- Pero React no usa HTML: usa objetos JavaScript que describen qué debe renderizarse.

- Lo anterior se transpila (es decir, se convierte de JSX a llamadas React.createElement) a:

```Js
React.createElement(React.Fragment, null,
  React.createElement('h1', null, 'Título'),
  React.createElement('p', null, 'Contenido')
);
```

- Las llamadas a React.createElement crean objetos como:

```Js
{
  type: React.Fragment,
  props: {
    children: [
      { type: 'h1', props: { children: 'Título' } },
      { type: 'p', props: { children: 'Contenido' } }
    ]
  }
}
```

- Este objeto es generado internamente por React y representa lo que se conoce como el **_element tree_**, que se usa para construir el Virtual DOM, comparar cambios y renderizar eficientemente.

🧪 **¿Por qué parece que no cambia nada?**

Porque el resultado visual en el navegador es el mismo. Pero internamente, React está trabajando con objetos como el anterior.

### **🧙‍♀️ ¿Por qué es útil saber esto?**

✅ Te ayuda a entender cómo React funciona internamente.

✅ Te permite escribir JSX con confianza, sabiendo que es solo una capa de abstracción.

✅ Si alguna vez ves errores raros, entender la transpilation te puede ayudar a debuggear mejor.

## **Resumen**

| Concepto         | Fragmentos                                  |
| ---------------- | ------------------------------------------- |
| ¿Qué es?         | Contenedor invisible para agrupar elementos |
| ¿Cómo funciona?  | Se usa `<></>` o `<React.Fragment>`         |
| ¿Qué devuelve?   | Múltiples elementos sin añadir nodos extra  |
| ¿Por qué usarlo? | Limpieza del DOM, evitar divs innecesarios  |

---

# 3. 🎁 ¿Qué son las Props?

## 📌 **Concepto técnico:**

En React, props (abreviación de "properties") son los valores que se pasan desde un componente padre a un componente hijo.

- Son inmutables: el componente hijo no puede modificarlas, solo usarlas.

- Permiten que los componentes sean reutilizables y dinámicos, ya que pueden recibir distintos datos según el contexto.

- Internamente, React las agrupa en un objeto llamado props, que se recibe como argumento en componentes funcionales.

### 💡 **Explicación simple:**

Pensá en los props como parámetros de una función componente.

Si tenés un componente que muestra un saludo, podés pasarle el nombre como prop: → “Hola, Pepita” o “Hola, Juanita”, según lo que le mandes.

Son como regalos que el componente padre le da al hijo para que sepa qué mostrar.

### 🧩 **¿Qué es un componente padre y un componente hijo?**

El componente padre es el que invoca o usa otro componente dentro de su JSX.

El componente hijo es el que recibe props y se encarga de renderizar algo con esos datos.

### 🧠 \*\*Ejemplo

✅ Versión 1: Acceso tradicional, usando el objeto completo

```Js
function Saludo(props) {
  return <h1>Hola, {props.nombre}</h1>;
}
```

✅ Versión 2: Usando destructuring. una técnica de JavaScript que extrae directamente la propiedad nombre del objeto props.

```Js
function Saludo({ nombre }) {
  return <h1>Hola, {nombre}</h1>;
}
```

_Ambas versiones hacen exactamente lo mismo: muestran un saludo personalizado usando el valor de la prop nombre._

## 🧠 **¿Cómo se usan estos componentes?**

### 🧓 **Componente padre:**

```Js
function App() {
  return <Saludo nombre="Pepita" />;
}
```

### **👶 Componente hijo:**

```Js
function Saludo({ nombre }) {
  return <h1>Hola, {nombre}</h1>;
}
```

### 🔄 **¿Cómo interactúan?**

El componente App es el padre porque usa el componente Saludo.

Le pasa una prop llamada nombre con el valor "Fabiana".

El componente Saludo es el hijo porque recibe esa prop.

Dentro de Saludo, se accede a nombre y se muestra en pantalla.

🔍 ¿Qué pasa internamente?
Cuando React ve esto:

```Jsx
<Saludo nombre="Pepita" />
```

lo transpila a :

```Js
React.createElement(Saludo, { nombre: 'Pepita' });
```

Y dentro del componente Saludo, React interpreta:

```Js
props = { nombre: 'Fabiana' };
```

Si se está usando destructuring:

```Js
const { nombre } = props;
```

Esto renderiza:

```txt
Hola, Pepita
```

### 🧪 **Comparación entre las dos formas**

| Forma            | Código       | Ventajas                       |
| ---------------- | ------------ | ------------------------------ |
| Acceso por props | props.nombre | Útil si hay muchas props       |
| Destructuring    | { nombre }   | Más limpio si usás pocas props |

### 🧙‍♀️ **¿Cuándo usar cada uno?**

✅ Usá props.nombre si querés mantener el objeto completo y pasarlo a otros componentes o funciones.

✅ Usá { nombre } si solo necesitás una o dos props y querés que el código sea más legible.

### 🧙‍♀️ **¿Por qué es útil la estructura padre-hijo?**

✅ Permite composición: construir interfaces como piezas de Lego.

✅ Facilita la reutilización: podés usar Saludo con distintos nombres.

✅ Mejora la claridad: cada componente tiene una responsabilidad clara.

### 🧩 **En síntesis:**

| Elemento        | Rol                   | Función principal                       | Archivo sugerido        | Tipo de entidad           |
| --------------- | --------------------- | --------------------------------------- | ----------------------- | ------------------------- |
| `App`           | Componente padre      | Invoca `Saludo` y le pasa datos         | `App.jsx`               | Función (React Component) |
| `Saludo`        | Componente hijo       | Recibe `nombre` y lo muestra            | `Saludo.jsx`            | Función (React Component) |
| `props`         | Medio de comunicación | Transfiere datos del padre al hijo      | (parte de `Saludo.jsx`) | Objeto (JS parameter)     |
| `destructuring` | Técnica de acceso     | Extrae `nombre` directamente del objeto | (parte de `Saludo.jsx`) | Sintaxis de JavaScript    |

_🗂️ Separar componentes en archivos individuales como Saludo.jsx y App.jsx mejora la organización, facilita la reutilización y hace que el código sea más escalable._

## 🧩 **Resumen**

| Concepto         | Props                                                 |
| ---------------- | ----------------------------------------------------- |
| ¿Qué es?         | Datos que se pasan de un componente padre a otro      |
| ¿Cómo funciona?  | Se reciben como argumentos (`props`)                  |
| ¿Qué devuelve?   | Un objeto con propiedades accesibles en el componente |
| ¿Por qué usarlo? | Reutilización, dinamismo, composición de interfaces   |

### 🔍 **Detalles clave**

- App y Saludo son funciones que devuelven JSX, por lo tanto son componentes funcionales en React.

- props es un objeto que React construye automáticamente y pasa como argumento al componente. Contiene todas las propiedades que se le asignan.

- destructuring es una técnica de JavaScript que permite extraer propiedades de un objeto directamente en la firma de la función o dentro de su cuerpo.
