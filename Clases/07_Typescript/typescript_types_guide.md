# Guía Completa de Tipos en TypeScript

## 1. Tipos Primitivos

## `boolean`

**Para qué sirve:** Representa valores verdadero/falso

**Con qué se usa:** Variables, parámetros, retornos de función

**Cómo se usa:**

```typescript
let isActive: boolean = true;
let isComplete: boolean = false;
```

## `number`

**Para qué sirve:** Números enteros y decimales

**Con qué se usa:** Cálculos matemáticos, contadores, medidas

**Cómo se usa:**

```typescript
let age: number = 25;
let price: number = 99.99;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

### `string`

**Para qué sirve:** Cadenas de texto

**Con qué se usa:** Textos, URLs, nombres, mensajes

**Cómo se usa:**

```typescript
let name: string = "Juan";
let message: string = `Hola ${name}`;
let multiline: string = `
  Línea 1
  Línea 2
`;
```

## `bigint`

**Para qué sirve:** Números enteros muy grandes

**Con qué se usa:** Cálculos con números mayores a Number.
MAX_SAFE_INTEGER

**Cómo se usa:**

```typescript
let bigNumber: bigint = 9007199254740991n;
let anotherBig: bigint = BigInt(9007199254740991);
```

## `symbol`

**Para qué sirve:** Identificadores únicos

**Con qué se usa:** Claves de objetos únicas, metadatos

**Cómo se usa:**

```typescript
let sym: symbol = Symbol("description");
let key: symbol = Symbol.for("globalKey");
```

## 2. Tipos Especiales

## `any`

**Para qué sirve:** Desactivar el chequeo de tipos

**Con qué se usa:** Migración de JS a TS, APIs dinámicas (¡usar con precaución!)

**Cómo se usa:**

```typescript
let dynamic: any = 42;
dynamic = "string";
dynamic = true;
dynamic.foo.bar; // No error
```

## `unknown`

**Para qué sirve:** Tipo seguro para valores desconocidos

**Con qué se usa:** APIs externas, parsing de datos

**Cómo se usa:**

```typescript
let userInput: unknown = getUserInput();
if (typeof userInput === "string") {
  console.log(userInput.toUpperCase());
}
```

## `void`

**Para qué sirve:** Ausencia de valor de retorno

**Con qué se usa:** Funciones que no retornan nada

**Cómo se usa:**

```typescript
function logMessage(msg: string): void {
  console.log(msg);
}
```

## `never`

**Para qué sirve:** Valores que nunca ocurren

**Con qué se usa:** Funciones que lanzan errores, loops infinitos

**Cómo se usa:**

```typescript
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
```

## `undefined` y `null`

**Para qué sirve:** Valores nulos o indefinidos

**Con qué se usa:** Valores opcionales, inicialización

**Cómo se usa:**

```typescript
let maybeString: string | undefined = undefined;
let nullableNumber: number | null = null;
```

## 3. Tipos de Colección

## Arrays

**Para qué sirve:** Colecciones de elementos del mismo tipo

**Con qué se usa:** Listas, conjuntos de datos

**Cómo se usa:**

```typescript
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];
let mixed: (string | number)[] = [1, "two", 3];
```

## Tuplas

**Para qué sirve:** Arrays con longitud y tipos fijos

**Con qué se usa:** Coordenadas, pares clave-valor, retornos múltiples

**Cómo se usa:**

```typescript
let coordinate: [number, number] = [10, 20];
let nameAge: [string, number] = ["Juan", 25];
let optional: [string, number?] = ["test"];
let rest: [string, ...number[]] = ["first", 1, 2, 3];
```

## `ReadonlyArray<T>`

**Para qué sirve:** Arrays inmutables

**Con qué se usa:** Datos que no deben modificarse

**Cómo se usa:**

```typescript
let immutableArray: ReadonlyArray<number> = [1, 2, 3];
// immutableArray.push(4); // Error!
```

## 4. Tipos de Objeto

## Interfaces

**Para qué sirve:** Definir la estructura de objetos

**Con qué se usa:** Contratos de datos, APIs, configuraciones

**Cómo se usa:**

```typescript
interface User {
  id: number;
  name: string;
  email?: string; // Opcional
  readonly createdAt: Date; // Solo lectura
  [key: string]: any; // Propiedades adicionales
}

interface Admin extends User {
  permissions: string[];
}
```

## Types (Alias de Tipo)

**Para qué sirve:** Crear nombres para tipos complejos

**Con qué se usa:** Tipos de unión, intersección, reutilización

**Cómo se usa:**

```typescript
type ID = string | number;
type Status = "pending" | "approved" | "rejected";
type UserWithStatus = User & { status: Status };
```

## Tipos de Objeto Anónimos

**Para qué sirve:** Definir estructuras inline

**Con qué se usa:** Parámetros simples, retornos específicos

**Cómo se usa:**

```typescript
function createUser(data: { name: string; age: number }) {
  // ...
}
```

## 5. Tipos Funcionales

## Tipos de Función

**Para qué sirve:** Definir firmas de funciones

**Con qué se usa:** Callbacks, parámetros funcionales

**Cómo se usa:**

```typescript
type MathOperation = (a: number, b: number) => number;
type Callback = () => void;
type EventHandler = (event: Event) => void;

const add: MathOperation = (a, b) => a + b;
```

## Sobrecarga de Funciones

**Para qué sirve:** Múltiples firmas para una función

**Con qué se usa:** Funciones con comportamiento variable

**Cómo se usa:**

```typescript
function getValue(key: string): string;
function getValue(key: number): number;
function getValue(key: string | number): string | number {
  // implementación
}
```

## 6. Tipos Literales

## String Literals

**Para qué sirve:** Valores de cadena específicos

**Con qué se usa:** Estados, configuraciones, enums de string

**Cómo se usa:**

```typescript
type Theme = "light" | "dark" | "auto";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
```

## Number Literals

**Para qué sirve:** Valores numéricos específicos

**Con qué se usa:** Códigos de estado, versiones

**Cómo se usa:**

```typescript
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
type HttpStatus = 200 | 404 | 500;
```

## Boolean Literals

**Para qué sirve:** Valores booleanos específicos

**Con qué se usa:** Flags específicos

**Cómo se usa:**

```typescript
type Success = true;
type Failure = false;
```

## 7. Enums

## Enums Numéricos

**Para qué sirve:** Conjunto de constantes numéricas
**Con qué se usa:** Estados, opciones, códigos
**Cómo se usa:**

```typescript
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

enum Status {
  Pending = 1,
  Approved = 2,
  Rejected = 3,
}
```

## Enums de String

**Para qué sirve:** Conjunto de constantes de cadena

**Con qué se usa:** Estados legibles, configuraciones

**Cómo se usa:**

```typescript
enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue",
}
```

## Const Enums

**Para qué sirve:** Enums optimizados en compilación

**Con qué se usa:** Mejor rendimiento en runtime

**Cómo se usa:**

```typescript
const enum Directions {
  Up = "UP",
  Down = "DOWN",
}
```

## 8. Tipos de Unión e Intersección

## Union Types (`|`)

**Para qué sirve:** Valor que puede ser uno de varios tipos

**Con qué se usa:** Parámetros flexibles, valores opcionales

**Cómo se usa:**

```typescript
type StringOrNumber = string | number;
type LoadingState = "loading" | "success" | "error";

function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toString();
}
```

## Intersection Types (`&`)

**Para qué sirve:** Combinar múltiples tipos

**Con qué se usa:** Mixins, extensión de tipos

**Cómo se usa:**

```typescript
interface Timestamped {
  timestamp: Date;
}

interface Tagged {
  tag: string;
}

type TimestampedAndTagged = Timestamped & Tagged;
```

## 9. Tipos Genéricos

## Genéricos Básicos

**Para qué sirve:** Tipos reutilizables y flexibles
**Con qué se usa:** Funciones, clases, interfaces genéricas
**Cómo se usa:**

```typescript
function identity<T>(arg: T): T {
  return arg;
}

interface Container<T> {
  value: T;
}

class Box<T> {
  contents: T;
  constructor(value: T) {
    this.contents = value;
  }
}
```

## Restricciones de Genéricos

**Para qué sirve:** Limitar tipos genéricos
**Con qué se usa:** Garantizar ciertas propiedades
**Cómo se usa:**

```typescript
interface Lengthy {
  length: number;
}

function logLength<T extends Lengthy>(arg: T): T {
  console.log(arg.length);
  return arg;
}
```

## Genéricos Condicionales

**Para qué sirve:** Tipos que dependen de condiciones

**Con qué se usa:** Tipos avanzados, utilidades

**Cómo se usa:**

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
```

## 10. Tipos de Utilidad (Utility Types)

## `Partial<T>`

**Para qué sirve:** Hacer todas las propiedades opcionales

**Con qué se usa:** Actualizaciones parciales, configuraciones opcionales

**Cómo se usa:**

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

function updateUser(id: number, updates: Partial<User>) {
  // Todas las propiedades de User son opcionales
}
```

## `Required<T>`

**Para qué sirve:** Hacer todas las propiedades requeridas

**Con qué se usa:** Validación, transformaciones

**Cómo se usa:**

```typescript
interface Config {
  apiUrl?: string;
  timeout?: number;
}

const fullConfig: Required<Config> = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
};
```

## `Readonly<T>`

**Para qué sirve:** Hacer todas las propiedades de solo lectura

**Con qué se usa:** Datos inmutables, configuraciones constantes

**Cómo se usa:**

```typescript
interface User {
  id: number;
  name: string;
}

const immutableUser: Readonly<User> = { id: 1, name: "Juan" };
// immutableUser.name = "Pedro"; // Error!
```

## `Pick<T, K>`

**Para qué sirve:** Seleccionar propiedades específicas

**Con qué se usa:** DTOs, vistas parciales

**Cómo se usa:**

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicUser = Pick<User, "id" | "name" | "email">;
```

## `Omit<T, K>`

**Para qué sirve:** Excluir propiedades específicas

**Con qué se usa:** Crear tipos sin ciertas propiedades

**Cómo se usa:**

```typescript
interface User {
  id: number;
  name: string;
  password: string;
}

type UserWithoutPassword = Omit<User, "password">;
```

## `Record<K, T>`

**Para qué sirve:** Crear objeto con claves y valores de tipos específicos

**Con qué se usa:** Mapas, diccionarios

**Cómo se usa:**

```typescript
type Scores = Record<string, number>;
type UserRoles = Record<"admin" | "user" | "guest", boolean>;

const gameScores: Scores = {
  player1: 100,
  player2: 250,
};
```

## `Exclude<T, U>`

**Para qué sirve:** Excluir tipos de una unión

**Con qué se usa:** Filtrar tipos, crear subconjuntos

**Cómo se usa:**

```typescript
type AllTypes = string | number | boolean;
type StringAndNumber = Exclude<AllTypes, boolean>; // string | number
```

## `Extract<T, U>`

**Para qué sirve:** Extraer tipos comunes de una unión

**Con qué se usa:** Filtrar tipos, intersecciones

**Cómo se usa:**

```typescript
type AllTypes = string | number | boolean;
type JustString = Extract<AllTypes, string>; // string
```

## `NonNullable<T>`

**Para qué sirve:** Excluir null y undefined

**Con qué se usa:** Garantizar valores no nulos

**Cómo se usa:**

```typescript
type MaybeString = string | null | undefined;
type DefiniteString = NonNullable<MaybeString>; // string
```

## `Parameters<T>`

**Para qué sirve:** Obtener tipos de parámetros de una función

**Con qué se usa:** Metaprogramming, utilidades de función

**Cómo se usa:**

```typescript
function greet(name: string, age: number) {
  return `Hello ${name}, you are ${age}`;
}

type GreetParams = Parameters<typeof greet>; // [string, number]
```

## `ReturnType<T>`

**Para qué sirve:** Obtener tipo de retorno de una función

**Con qué se usa:** Inferir tipos de retorno

**Cómo se usa:**

```typescript
function createUser() {
  return { id: 1, name: "Juan" };
}

type User = ReturnType<typeof createUser>; // { id: number; name: string; }
```

## 11. Tipos Avanzados

## Mapped Types

**Para qué sirve:** Transformar tipos existentes

**Con qué se usa:** Crear variaciones de tipos

**Cómo se usa:**

```typescript
type Optional<T> = {
  [P in keyof T]?: T[P];
};

type Getters<T> = {
  [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P];
};
```

## Template Literal Types

**Para qué sirve:** Tipos basados en plantillas de string

**Con qué se usa:** APIs tipadas, rutas, eventos

**Cómo se usa:**

```typescript
type EventName<T extends string> = `on${Capitalize<T>}`;
type ButtonEvent = EventName<"click">; // "onClick"

type Route = `/api/${string}`;
type UserRoute = `/users/${number}`;
```

## Conditional Types

**Para qué sirve:** Tipos que dependen de condiciones

**Con qué se usa:** Lógica compleja de tipos

**Cómo se usa:**

```typescript
type ApiResponse<T> = T extends string
  ? { message: T }
  : T extends number
  ? { count: T }
  : { data: T };
```

## `infer` Keyword

**Para qué sirve:** Inferir tipos en tipos condicionales

**Con qué se usa:** Extraer tipos complejos

**Cómo se usa:**

```typescript
type ArrayElement<T> = T extends (infer U)[] ? U : never;
type StringArray = string[];
type Element = ArrayElement<StringArray>; // string
```

## 12. Tipos de Módulos

## `namespace`

**Para qué sirve:** Organizar código en espacios de nombres

**Con qué se usa:** Bibliotecas, organización de código

**Cómo se usa:**

```typescript
namespace Utils {
  export function formatDate(date: Date): string {
    return date.toISOString();
  }

  export const API_URL = "https://api.example.com";
}
```

## Declaration Merging

**Para qué sirve:** Extender tipos existentes

**Con qué se usa:** Bibliotecas de terceros, plugins

**Cómo se usa:**

```typescript
interface Window {
  myCustomProperty: string;
}

// Ahora window.myCustomProperty está disponible
```

## 13. Decoradores (Experimental)

## Class Decorators

**Para qué sirve:** Modificar clases en tiempo de compilación

**Con qué se usa:** Frameworks como Angular, metaprogramming

**Cómo se usa:**

```typescript
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Example {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
}
```

## 14. Tipos de Assertion

## Type Assertions

**Para qué sirve:** Decirle a TS qué tipo es un valor

**Con qué se usa:** Cuando conoces más que el compilador

**Cómo se usa:**

```typescript
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
// o
let strLength2: number = (<string>someValue).length;
```

## Non-null Assertion (`!`)

**Para qué sirve:** Indicar que un valor no es null/undefined

**Con qué se usa:** Cuando estás seguro de que no es nulo

**Cómo se usa:**

```typescript
function processUser(user: User | undefined) {
  // Si estás seguro de que user no es undefined
  console.log(user!.name);
}
```

## 15. Tipos de Index Signatures

## Index Signatures

**Para qué sirve:** Objetos con claves dinámicas

**Con qué se usa:** Mapas, diccionarios dinámicos

**Cómo se usa:**

```typescript
interface StringDictionary {
  [key: string]: string;
}

interface NumberDictionary {
  [index: number]: string;
  length: number; // OK, length is a number
  name: string; // OK, name is a string
}
```

# Consejos de Uso

1. **Preferir interfaces sobre types** para definir objetos
2. **Usar union types** en lugar de enums cuando sea posible
3. **Evitar `any`**, usar `unknown` si es necesario
4. **Usar utility types** para transformaciones comunes
5. **Ser específico** con los tipos para mejor IntelliSense
6. **Usar genéricos** para código reutilizable
7. **Preferir tipos literales** para valores constantes

# Para desarrollo diario:

- Usa interfaces para objetos y contratos
- Aprovecha los utility types como Partial, Pick, Omit
- Los tipos de unión (|) son muy útiles para flexibilidad
- Los genéricos te permiten crear código reutilizable

# Para código avanzado:

- Los mapped types y conditional types son poderosos para transformaciones
- Template literal types son geniales para APIs tipadas
- Los tipos literales mejoran mucho la experiencia de desarrollo

# Mejores prácticas:

- Evita any a toda costa
- Usa unknown para tipos realmente desconocidos
- Sé específico con tus tipos para mejor IntelliSense
- Prefiere composición de tipos sobre jerarquías complejas
