# Intro a Typescript

Tomemos como ejemplo el código js, donde se consideran algunas operaciones que podríamos ejecutar en una variable llamada message:

```bash
1.
// Accedemos a la propiedad 'toLowerCase'
// en 'message' y luego la llamamos
message.toLowerCase();

2.
// Invocamos a 'message'
message();
```

### Desglose del código inicial

- La primera línea ejecutable accede a la propiedad toLowerCase de message y luego la invoca.

- La segunda línea intenta llamar directamente a message como si fuera una función.

### El problema de no conocer el valor de message

- Si no sabemos qué valor tiene message (y esto es muy común), no podemos predecir con certeza qué resultados obtendremos al ejecutar el código.

- El comportamiento de cada operación depende completamente del valor que tenía message al inicio.

### Preguntas clave que surgen

- ¿Es message invocable como función?

- ¿Tiene message una propiedad llamada toLowerCase?

- Si la tiene, ¿esa propiedad es realmente invocable?

- Si ambas son invocables, ¿qué valores devuelven?

Normalmente, como desarrolladores de JavaScript, mantenemos estas respuestas “en la cabeza” mientras escribimos código y confiamos en que no cometimos errores.

### Ejemplo con 'message' definido

```bash
const message = "Hello World!";
```

1. Al ejecutar message.toLowerCase(), obtenemos la misma cadena, pero en minúsculas: "hello world!".

2. En cambio, al ejecutar message(), obtenemos una excepción:

```bash
TypeError: message is not a function
```

### Conclusión del ejemplo

- Este error ocurre porque el string "Hello World!" no puede ser llamado como función.

- El motor de JavaScript decide qué hacer según el tipo del valor: qué comportamientos y capacidades tiene.

- Eso es lo que expresa el TypeError: indica que un string no es invocable como función.

### Inspección de tipos en tiempo de ejecución

- Para valores primitivos como string o number, podemos identificar su tipo en tiempo de ejecución con el operador typeof.

- Sin embargo, para ciertos valores (como funciones o propiedades internas de objetos), no existe un mecanismo tan directo en tiempo de ejecución para saber qué tipo tienen.

## Ejemplo adicional

```bash
function fn(x) {
  return x.flip();
}
```

🔹 Observación del código

- La función solo funciona si recibe un objeto que tenga una propiedad flip.

- Esa propiedad además debe ser invocable (es decir, una función).

## Limitación de JavaScript

- JavaScript no expone esa información de forma directa en tiempo de ejecución.

- La única manera de saber qué hace fn con un valor específico es ejecutarla y ver qué pasa.

- Esto hace que sea difícil predecir el comportamiento del código antes de correrlo.

## Qué es un tipo (en este contexto)

Un tipo describe:

- Qué valores se pueden pasar a fn sin errores.

- Qué valores producirán un fallo (ej. TypeError).

## Tipado en JavaScript

- JavaScript ofrece solo tipado dinámico: el tipo de un valor se determina mientras el código corre.

- Para saber si algo funciona, hay que ejecutarlo.

## Alternativa : Tipado estático

Un sistema de tipos estático permite:

- Predecir el comportamiento del código antes de ejecutarlo.

- Detectar errores potenciales mientras se escribe, en lugar de descubrirlos al correrlo.

👉 En resumen:

JS dinámico → “ejecuto y veo qué pasa”.

Tipos estáticos (ej. TypeScript) → “sé de antemano qué va a pasar”.

# Diferencia entre tipado dinámico y tipado estático.

## 1️⃣ JavaScript → Tipado dinámico

```bash
function fn(x) {
  return x.flip();
}
```

- Creamos una función fn que espera un argumento x.

- Dentro de la función intentamos llamar a x.flip()

- Problema: JavaScript no verifica en tiempo de compilación si x realmente tiene flip como función.

- Solo se descubre cuando ejecutamos la función.

### Probamos con un objeto correcto

```bash
const objOk = {
  flip: () => "girado ✅"
};
console.log(fn(objOk));  // "girado ✅"
```

- objOk tiene una propiedad flip que es una función, así que todo funciona.

- La función fn llama a x.flip() → devuelve "girado ✅".

### Probamos con un objeto incorrecto

```bash
const objBad = {
  notFlip: () => "esto no sirve ❌"
};
console.log(fn(objBad)); // TypeError
```

- objBad no tiene flip, solo tiene notFlip.

- JavaScript no avisa mientras escribimos el código.

- Al ejecutar fn(objBad), se produce un TypeError:

```bash
TypeError: x.flip is not a function
```

- Esto ilustra que en JS puro, los errores de tipo se descubren solo al ejecutar.

## 2️⃣ TypeScript → Tipado estático

```bash
type Flippable = {
  flip: () => string;
};
```

- La función fn ahora requiere un argumento x de tipo Flippable.

- TypeScript verifica antes de ejecutar si cualquier valor que pasemos cumple ese tipo.

### Probamos con un objeto correcto

```bash
const objOk: Flippable = {
  flip: () => "girado ✅"
};
console.log(fn(objOk));  // "girado ✅"
```

- Funciona igual que en JS.

- Pero ahora TypeScript nos asegura en tiempo de desarrollo que objOk es válido.

### Probamos con un objeto incorrecto

```bash
const objBad = {
  notFlip: () => "esto no sirve ❌"
};
console.log(fn(objBad)); // ❌ Error de compilación
```

- objBad no tiene flip, así que TypeScript marca un error antes de ejecutar:

# Continuar en :

https://www.typescriptlang.org/docs/handbook/2/basic-types.html
