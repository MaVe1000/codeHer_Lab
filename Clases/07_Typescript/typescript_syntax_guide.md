# Guía Completa: Sintaxis de Tipado en JavaScript/TypeScript

## 1. Variables y Constantes

### Tipado Explícito

```typescript
// Forma básica
let nombre: string = "Juan";
let edad: number = 25;
let activo: boolean = true;

// Múltiples declaraciones
let x: number, y: number, z: number;
x = 1;
y = 2;
z = 3;

// Constantes tipadas
const PI: number = 3.14159;
const MENSAJE: string = "Hola mundo";
```

### Tipado por Inferencia

```typescript
// TypeScript infiere el tipo automáticamente
let nombre = "Juan"; // string
let edad = 25; // number
let activo = true; // boolean

// El tipo se infiere del primer valor asignado
let valor = 42; // number
// valor = "texto";        // ❌ Error: no puede ser string
```

### Tipado con `let` vs `const`

```typescript
// Con let - tipo mutable
let status = "pending"; // tipo: string
status = "completed"; // ✅ OK

// Con const - tipo literal
const status = "pending"; // tipo: "pending" (literal)
// status = "completed";   // ❌ Error: es readonly

// Para evitar literal en const
const status: string = "pending"; // tipo: string
```

## 2. Funciones

### Parámetros Tipados

```typescript
// Tipado básico de parámetros
function saludar(nombre: string, edad: number) {
  return `Hola ${nombre}, tienes ${edad} años`;
}

// Parámetros opcionales
function crearUsuario(nombre: string, edad?: number, email?: string) {
  // edad y email pueden ser undefined
}

// Parámetros con valores por defecto
function configurar(host: string = "localhost", puerto: number = 3000) {
  // Si no se pasan, usan los valores por defecto
}

// Rest parameters
function sumar(...numeros: number[]): number {
  return numeros.reduce((a, b) => a + b, 0);
}
```

### Tipo de Retorno

```typescript
// Retorno explícito
function obtenerNombre(): string {
  return "Juan";
}

function calcular(a: number, b: number): number {
  return a + b;
}

// Retorno void (no retorna nada)
function mostrarMensaje(msg: string): void {
  console.log(msg);
}

// Retorno never (nunca retorna)
function lanzarError(mensaje: string): never {
  throw new Error(mensaje);
}

// Retorno por inferencia
function multiplicar(a: number, b: number) {
  return a * b; // TypeScript infiere: number
}
```

### Funciones como Expresiones

```typescript
// Function expression
const saludar = function (nombre: string): string {
  return `Hola ${nombre}`;
};

// Arrow function
const multiplicar = (a: number, b: number): number => a * b;

// Arrow function con inferencia
const dividir = (a: number, b: number) => a / b; // retorna number

// Función que retorna función
const crearMultiplicador = (factor: number) => {
  return (valor: number): number => valor * factor;
};
```

### Tipos de Función

```typescript
// Definir tipo de función
type OperacionMatematica = (a: number, b: number) => number;

const sumar: OperacionMatematica = (x, y) => x + y;
const restar: OperacionMatematica = (x, y) => x - y;

// Como parámetro
function ejecutarOperacion(
  operacion: OperacionMatematica,
  a: number,
  b: number
): number {
  return operacion(a, b);
}

// Callback tipado
function procesarDatos(
  datos: string[],
  callback: (item: string, index: number) => string
): string[] {
  return datos.map(callback);
}
```

## 3. Objetos

### Objetos Simples

```typescript
// Tipado inline
let usuario: { nombre: string; edad: number; activo: boolean } = {
  nombre: "Juan",
  edad: 25,
  activo: true,
};

// Propiedades opcionales
let configuracion: {
  host: string;
  puerto?: number; // opcional
  ssl?: boolean; // opcional
} = {
  host: "localhost",
  // puerto y ssl son opcionales
};

// Propiedades readonly
let punto: {
  readonly x: number;
  readonly y: number;
} = { x: 10, y: 20 };
// punto.x = 30;  // ❌ Error: readonly
```

### Index Signatures

```typescript
// Propiedades dinámicas
let diccionario: { [key: string]: string } = {
  es: "Hola",
  en: "Hello",
  fr: "Bonjour",
};

// Con tipos mixtos
let configuracion: {
  nombre: string; // propiedad específica
  [key: string]: any; // propiedades adicionales
} = {
  nombre: "MiApp",
  version: "1.0.0",
  debug: true,
};

// Index signature numérico
let lista: { [index: number]: string } = {
  0: "primero",
  1: "segundo",
  2: "tercero",
};
```

### Métodos en Objetos

```typescript
let calculadora: {
  valor: number;
  sumar(n: number): number;
  restar(n: number): number;
  reset(): void;
} = {
  valor: 0,
  sumar(n) {
    return (this.valor += n);
  },
  restar(n) {
    return (this.valor -= n);
  },
  reset() {
    this.valor = 0;
  },
};

// Método con diferentes sintaxis
let objeto: {
  metodo1(param: string): string; // method signature
  metodo2: (param: string) => string; // property con function type
} = {
  metodo1(param) {
    return param.toUpperCase();
  },
  metodo2: (param) => param.toLowerCase(),
};
```

## 4. Arrays y Tuplas

### Arrays

```typescript
// Sintaxis básica
let numeros: number[] = [1, 2, 3, 4, 5];
let nombres: string[] = ["Ana", "Luis", "María"];

// Sintaxis alternativa
let valores: Array<number> = [10, 20, 30];
let textos: Array<string> = ["a", "b", "c"];

// Arrays multidimensionales
let matriz: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// Arrays de objetos
let usuarios: { nombre: string; edad: number }[] = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Ana", edad: 30 },
];

// Arrays de tipos mixtos
let mixto: (string | number)[] = ["texto", 42, "más texto", 100];
```

### Tuplas

```typescript
// Tupla básica
let coordenada: [number, number] = [10, 20];
let persona: [string, number, boolean] = ["Juan", 25, true];

// Tuplas con etiquetas (TS 4.0+)
let punto: [x: number, y: number] = [10, 20];
let usuario: [nombre: string, edad: number, activo: boolean] = [
  "Ana",
  30,
  true,
];

// Tuplas opcionales
let respuesta: [boolean, string?] = [true]; // segundo elemento opcional
let datos: [string, number?] = ["texto"]; // número opcional

// Tuplas con rest elements
let primera: [string, ...number[]] = ["inicio", 1, 2, 3, 4];
let variada: [boolean, ...string[], number] = [true, "a", "b", "c", 42];

// Tuplas readonly
let inmutable: readonly [string, number] = ["texto", 42];
// inmutable[0] = "nuevo";  // ❌ Error: readonly
```

## 5. Interfaces

### Interfaces Básicas

```typescript
// Definición básica
interface Usuario {
  nombre: string;
  edad: number;
  email: string;
}

// Uso de la interface
let usuario: Usuario = {
  nombre: "Juan",
  edad: 25,
  email: "juan@email.com",
};

// Función que usa interface
function crearPerfil(usuario: Usuario): string {
  return `${usuario.nombre} (${usuario.edad})`;
}
```

### Propiedades Opcionales y Readonly

```typescript
interface Configuracion {
  readonly id: number; // solo lectura
  nombre: string;
  descripcion?: string; // opcional
  activo?: boolean; // opcional
  readonly fechaCreacion: Date; // solo lectura
}

let config: Configuracion = {
  id: 1,
  nombre: "Mi Config",
  fechaCreacion: new Date(),
  // descripcion y activo son opcionales
};

// config.id = 2;  // ❌ Error: readonly
```

### Métodos en Interfaces

```typescript
interface Calculadora {
  valor: number;
  sumar(n: number): number;
  restar(n: number): number;
  obtenerValor(): number;
}

// Implementación
let calc: Calculadora = {
  valor: 0,
  sumar(n) {
    return (this.valor += n);
  },
  restar(n) {
    return (this.valor -= n);
  },
  obtenerValor() {
    return this.valor;
  },
};

// Interface para funciones
interface FuncionSaludo {
  (nombre: string, apellido: string): string;
}

let saludar: FuncionSaludo = (nombre, apellido) => {
  return `Hola ${nombre} ${apellido}`;
};
```

### Extensión de Interfaces

```typescript
// Interface base
interface Animal {
  nombre: string;
  edad: number;
}

// Interface que extiende
interface Perro extends Animal {
  raza: string;
  ladrar(): void;
}

// Implementación
let miPerro: Perro = {
  nombre: "Max",
  edad: 3,
  raza: "Labrador",
  ladrar() {
    console.log("¡Guau!");
  },
};

// Extensión múltiple
interface Volador {
  volar(): void;
  alturaMaxima: number;
}

interface Ave extends Animal, Volador {
  tipoPluma: string;
}
```

### Index Signatures en Interfaces

```typescript
interface Diccionario {
  [clave: string]: string;
}

interface DiccionarioMixto {
  nombre: string; // propiedad específica
  [clave: string]: string | number; // propiedades adicionales
}

// Implementación
let dict: DiccionarioMixto = {
  nombre: "MiDict",
  clave1: "valor1",
  clave2: 42,
};
```

## 6. Type Aliases

### Types Básicos

```typescript
// Alias para tipos primitivos
type ID = string | number;
type Estado = "activo" | "inactivo" | "pendiente";

// Uso
let userId: ID = "user123";
let userStatus: Estado = "activo";

// Alias para objetos
type Usuario = {
  id: ID;
  nombre: string;
  estado: Estado;
};

let usuario: Usuario = {
  id: 1,
  nombre: "Juan",
  estado: "activo",
};
```

### Sintaxis Completa con `type`

#### Types para Objetos

```typescript
// Objeto básico con type
type Usuario = {
  nombre: string;
  edad: number;
  email: string;
};

// Propiedades opcionales
type Configuracion = {
  host: string;
  puerto?: number; // opcional
  ssl?: boolean; // opcional
};

// Propiedades readonly
type Punto = {
  readonly x: number;
  readonly y: number;
};

// Index signatures
type Diccionario = {
  [clave: string]: string;
};

type DiccionarioMixto = {
  nombre: string; // propiedad específica
  [clave: string]: string | number; // propiedades adicionales
};

// Métodos en types
type Calculadora = {
  valor: number;
  sumar(n: number): number; // método
  restar: (n: number) => number; // property function
  reset(): void;
};

// Uso
let calc: Calculadora = {
  valor: 0,
  sumar(n) {
    return (this.valor += n);
  },
  restar: (n) => (this.valor -= n),
  reset() {
    this.valor = 0;
  },
};
```

#### Types para Funciones

```typescript
// Función simple
type Saludo = (nombre: string) => string;

// Función con múltiples parámetros
type OperacionMatematica = (a: number, b: number) => number;

// Función con parámetros opcionales
type CrearUsuario = (nombre: string, edad?: number, email?: string) => Usuario;

// Función con rest parameters
type Sumadora = (...numeros: number[]) => number;

// Función que no retorna nada
type Logger = (mensaje: string) => void;

// Función que nunca retorna
type LanzarError = (mensaje: string) => never;

// Sobrecarga de funciones con types
type Parseador = {
  (input: string): string;
  (input: number): number;
  (input: boolean): boolean;
};

// Función genérica
type Transformador<T, U> = (input: T) => U;
type Comparador<T> = (a: T, b: T) => boolean;

// Uso
let saludar: Saludo = (nombre) => `Hola ${nombre}`;
let sumar: OperacionMatematica = (a, b) => a + b;
let crearPerfil: CrearUsuario = (nombre, edad = 0) => ({
  nombre,
  edad,
  email: "",
});
```

#### Types para Arrays y Tuplas

```typescript
// Arrays con type
type ListaNumeros = number[];
type ListaStrings = Array<string>;
type ListaMixta = (string | number)[];

// Array de objetos específico
type ListaUsuarios = {
  nombre: string;
  edad: number;
}[];

// Tuplas exactas
type Coordenada2D = [number, number];
type Coordenada3D = [number, number, number];
type PersonaInfo = [string, number, boolean]; // [nombre, edad, activo]

// Tuplas con etiquetas
type PuntoEtiquetado = [x: number, y: number];
type RespuestaAPI = [exito: boolean, datos: any, mensaje: string];

// Tuplas opcionales
type RespuestaOpcional = [boolean, string?];
type DatosVariables = [string, ...number[]]; // primer elemento string, resto números

// Tuplas readonly
type ConfiguracionInmutable = readonly [string, number, boolean];

// Uso
let punto: Coordenada2D = [10, 20];
let persona: PersonaInfo = ["Juan", 25, true];
let config: ConfiguracionInmutable = ["prod", 3000, true];
```

#### Types vs Interfaces - Comparación Detallada

```typescript
// ✅ AMBOS pueden hacer (sintaxis equivalente):

// Objetos básicos
type PersonaType = {
  nombre: string;
  edad: number;
};

interface PersonaInterface {
  nombre: string;
  edad: number;
}

// Métodos
type CalculadoraType = {
  sumar(a: number, b: number): number;
  valor: number;
};

interface CalculadoraInterface {
  sumar(a: number, b: number): number;
  valor: number;
}

// Extensión/Herencia
type EmpleadoType = PersonaType & {
  empresa: string;
  salario: number;
};

interface EmpleadoInterface extends PersonaInterface {
  empresa: string;
  salario: number;
}

// ✅ SOLO TYPES pueden hacer:

// Union types
type StringONumero = string | number;
type Estado = "loading" | "success" | "error";

// Intersection types
type UsuarioConFechas = Usuario & {
  fechaCreacion: Date;
  fechaModificacion: Date;
};

// Tuplas
type Coordenadas = [number, number];

// Primitivos y literales
type ID = string | number;
type Tema = "light" | "dark";

// Conditional types
type EsArray<T> = T extends any[] ? true : false;

// Mapped types
type Opcional<T> = {
  [K in keyof T]?: T[K];
};

// Template literal types
type EventName<T> = `on${Capitalize<T & string>}`;

// Function types directos
type Handler = (event: Event) => void;

// Alias de utility types
type UsuarioParcial = Partial<Usuario>;
type ClaveUsuario = keyof Usuario;

// ✅ SOLO INTERFACES pueden hacer:

// Declaration merging (fusión de declaraciones)
interface Window {
  miPropiedad: string;
}

interface Window {
  otraPropiedad: number;
}
// Resultado: Window tiene ambas propiedades

// Implementación por clases (más natural)
interface Volador {
  volar(): void;
}

class Pajaro implements Volador {
  volar() {
    console.log("Volando...");
  }
}
```

#### Casos de Uso Específicos con Types

##### 1. Estados de Aplicación

```typescript
// Estados con union types
type EstadoCarga = "idle" | "loading" | "success" | "error";
type EstadoAuth = "authenticated" | "unauthenticated" | "pending";

// Estados complejos con discriminated unions
type EstadoCompleto =
  | { estado: "loading"; progreso: number }
  | { estado: "success"; datos: any }
  | { estado: "error"; mensaje: string; codigo: number };

// Type guards para estados
type EsEstadoError = (
  estado: EstadoCompleto
) => estado is Extract<EstadoCompleto, { estado: "error" }>;

// Uso
function manejarEstado(estado: EstadoCompleto) {
  switch (estado.estado) {
    case "loading":
      console.log(`Cargando... ${estado.progreso}%`);
      break;
    case "success":
      console.log("Datos:", estado.datos);
      break;
    case "error":
      console.log(`Error ${estado.codigo}: ${estado.mensaje}`);
      break;
  }
}
```

##### 2. Configuraciones con Types

```typescript
// Configuración base
type ConfiguracionBase = {
  readonly version: string;
  debug: boolean;
  timeout: number;
};

// Configuración de desarrollo
type ConfiguracionDev = ConfiguracionBase & {
  hotReload: boolean;
  sourceMaps: boolean;
};

// Configuración de producción
type ConfiguracionProd = ConfiguracionBase & {
  minify: boolean;
  cdn: string;
};

// Configuración de ambiente
type Configuracion<T extends "dev" | "prod"> = T extends "dev"
  ? ConfiguracionDev
  : ConfiguracionProd;

// Factory con types
type CrearConfiguracion = {
  <T extends "dev">(
    ambiente: T,
    opciones: Omit<ConfiguracionDev, keyof ConfiguracionBase>
  ): ConfiguracionDev;
  <T extends "prod">(
    ambiente: T,
    opciones: Omit<ConfiguracionProd, keyof ConfiguracionBase>
  ): ConfiguracionProd;
};
```

##### 3. API Types

```typescript
// Request/Response types
type ApiRequest<T = any> = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  body?: T;
};

type ApiResponse<T = any> = {
  status: number;
  data: T;
  message: string;
  timestamp: Date;
};

// Endpoints específicos
type UsuarioEndpoints = {
  obtener: (id: number) => Promise<ApiResponse<Usuario>>;
  crear: (usuario: Omit<Usuario, "id">) => Promise<ApiResponse<Usuario>>;
  actualizar: (
    id: number,
    cambios: Partial<Usuario>
  ) => Promise<ApiResponse<Usuario>>;
  eliminar: (id: number) => Promise<ApiResponse<void>>;
};

// REST API completa con types
type RestAPI<T, K extends keyof T = keyof T> = {
  [P in K]: T[P] extends (...args: any[]) => any ? T[P] : never;
};
```

##### 4. Event Handling con Types

```typescript
// Eventos del DOM
type DOMEventMap = {
  click: MouseEvent;
  keydown: KeyboardEvent;
  change: Event;
  submit: SubmitEvent;
  load: Event;
};

// Custom events
type CustomEventMap = {
  "usuario:login": { usuario: Usuario; timestamp: Date };
  "usuario:logout": { timestamp: Date };
  "dato:actualizado": { id: string; cambios: any };
};

// Event handler type
type EventHandler<T extends keyof (DOMEventMap & CustomEventMap)> = (
  event: (DOMEventMap & CustomEventMap)[T]
) => void;

// Event emitter con types
type EventEmitter<T extends Record<string, any>> = {
  on<K extends keyof T>(evento: K, handler: (data: T[K]) => void): void;
  off<K extends keyof T>(evento: K, handler: (data: T[K]) => void): void;
  emit<K extends keyof T>(evento: K, data: T[K]): void;
};

// Uso
type MiEventEmitter = EventEmitter<CustomEventMap>;
```

##### 5. Utility Types Personalizados

```typescript
// Deep Partial
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Deep Readonly
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

// Flatten object
type Flatten<T> = T extends any[]
  ? T[number]
  : T extends object
  ? T[keyof T]
  : T;

// Non-empty array
type NonEmptyArray<T> = [T, ...T[]];

// Exact type (no propiedades extra)
type Exact<T, U> = T extends U ? (U extends T ? T : never) : never;

// Mutable (opuesto a Readonly)
type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

// Optional keys
type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
}[keyof T];

// Required keys
type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

// Uso de utility types personalizados
type UsuarioMutable = Mutable<Readonly<Usuario>>;
type ConfigCompleta = DeepPartial<Configuracion<"prod">>;
```

##### 6. Generic Types Avanzados

```typescript
// Conditional types con infer
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type UnwrapArray<T> = T extends (infer U)[] ? U : T;
type UnwrapFunction<T> = T extends (...args: any[]) => infer R ? R : T;

// Recursive types
type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

// Path types para objetos anidados
type PathsToStringProps<T> = T extends string
  ? []
  : {
      [K in Extract<keyof T, string>]: [K, ...PathsToStringProps<T[K]>];
    }[Extract<keyof T, string>];

type JoinPaths<T extends ReadonlyArray<string | number>> = T extends readonly [
  infer Head,
  ...infer Tail
]
  ? Head extends string | number
    ? Tail extends ReadonlyArray<string | number>
      ? Tail["length"] extends 0
        ? `${Head}`
        : `${Head}.${JoinPaths<Tail>}`
      : never
    : never
  : "";

// Template literal types avanzados
type SnakeCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? "_" : ""}${Lowercase<T>}${SnakeCase<U>}`
  : S;

type KebabCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? "-" : ""}${Lowercase<T>}${KebabCase<U>}`
  : S;

// Uso
type Paths = JoinPaths<
  PathsToStringProps<{ user: { name: string; profile: { bio: string } } }>
>;
// Resultado: "user.name" | "user.profile.bio"

type SnakeCaseExample = SnakeCase<"userName">; // "user_name"
type KebabCaseExample = KebabCase<"userName">; // "user-name"
```

### Types Complejos

```typescript
// Intersection types
type Timestamped = {
  fechaCreacion: Date;
  fechaModificacion: Date;
};

type Usuario = {
  nombre: string;
  email: string;
};

type UsuarioConFechas = Usuario & Timestamped;

let usuario: UsuarioConFechas = {
  nombre: "Juan",
  email: "juan@email.com",
  fechaCreacion: new Date(),
  fechaModificacion: new Date(),
};
```

## 7. Enums

### Enums Numéricos

```typescript
// Enum básico (valores auto-incrementales)
enum DiaSemana {
  Lunes, // 0
  Martes, // 1
  Miercoles, // 2
  Jueves, // 3
  Viernes, // 4
  Sabado, // 5
  Domingo, // 6
}

let hoy: DiaSemana = DiaSemana.Lunes;

// Enum con valores específicos
enum HttpStatus {
  OK = 200,
  NotFound = 404,
  InternalServerError = 500,
}

let status: HttpStatus = HttpStatus.OK;
```

### Enums de String

```typescript
enum Color {
  Rojo = "red",
  Verde = "green",
  Azul = "blue",
}

enum Direccion {
  Arriba = "UP",
  Abajo = "DOWN",
  Izquierda = "LEFT",
  Derecha = "RIGHT",
}

// Uso
let colorFavorito: Color = Color.Azul;
let movimiento: Direccion = Direccion.Arriba;

// En funciones
function mover(direccion: Direccion) {
  console.log(`Moviendo hacia ${direccion}`);
}

mover(Direccion.Derecha);
```

### Const Enums

```typescript
// Se optimiza en tiempo de compilación
const enum Tamaños {
  Pequeño = "small",
  Mediano = "medium",
  Grande = "large",
}

let tamaño = Tamaños.Mediano; // Se reemplaza por "medium" en JS
```

## 8. Clases

### Propiedades de Clase

```typescript
class Persona {
  // Propiedades públicas (por defecto)
  nombre: string;
  edad: number;

  // Propiedad privada
  private ssn: string;

  // Propiedad protegida
  protected id: number;

  // Propiedad readonly
  readonly fechaNacimiento: Date;

  // Propiedad estática
  static especies: string = "Homo sapiens";

  constructor(nombre: string, edad: number, ssn: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.ssn = ssn;
    this.id = Math.random();
    this.fechaNacimiento = new Date();
  }
}

let persona = new Persona("Juan", 25, "123-45-6789");
```

### Modificadores de Acceso en Constructor

```typescript
class Usuario {
  // Sintaxis abreviada - crea y asigna propiedades automáticamente
  constructor(
    public nombre: string,
    private email: string,
    protected id: number,
    readonly fechaRegistro: Date = new Date()
  ) {
    // No necesita asignaciones manuales
  }

  obtenerEmail(): string {
    return this.email; // Acceso permitido dentro de la clase
  }
}

let usuario = new Usuario("Juan", "juan@email.com", 123);
console.log(usuario.nombre); // ✅ público
// console.log(usuario.email);  // ❌ privado
```

### Métodos

```typescript
class Calculadora {
  private resultado: number = 0;

  // Método público
  sumar(valor: number): this {
    this.resultado += valor;
    return this; // Para method chaining
  }

  // Método privado
  private validar(valor: number): boolean {
    return !isNaN(valor) && isFinite(valor);
  }

  // Método estático
  static crear(): Calculadora {
    return new Calculadora();
  }

  // Getter
  get valor(): number {
    return this.resultado;
  }

  // Setter
  set valor(nuevoValor: number) {
    if (this.validar(nuevoValor)) {
      this.resultado = nuevoValor;
    }
  }
}

let calc = Calculadora.crear();
calc.sumar(10).sumar(20);
console.log(calc.valor); // 30
```

### Herencia

```typescript
// Clase base
abstract class Animal {
  constructor(public nombre: string, protected edad: number) {}

  // Método abstracto - debe implementarse en clases derivadas
  abstract hacerSonido(): string;

  // Método concreto
  obtenerInfo(): string {
    return `${this.nombre} tiene ${this.edad} años`;
  }
}

// Clase derivada
class Perro extends Animal {
  constructor(nombre: string, edad: number, public raza: string) {
    super(nombre, edad); // Llamar al constructor padre
  }

  // Implementar método abstracto
  hacerSonido(): string {
    return "¡Guau!";
  }

  // Sobrescribir método
  obtenerInfo(): string {
    return `${super.obtenerInfo()} y es un ${this.raza}`;
  }
}

let perro = new Perro("Max", 3, "Labrador");
```

### Implementación de Interfaces

```typescript
interface Volador {
  volar(): void;
  alturaMaxima: number;
}

interface Nadador {
  nadar(): void;
  profundidadMaxima: number;
}

// Clase que implementa múltiples interfaces
class Pato implements Volador, Nadador {
  alturaMaxima: number = 1000;
  profundidadMaxima: number = 10;

  volar(): void {
    console.log("El pato está volando");
  }

  nadar(): void {
    console.log("El pato está nadando");
  }
}
```

## 9. Genéricos

### Funciones Genéricas

```typescript
// Función genérica básica
function identidad<T>(arg: T): T {
  return arg;
}

// Uso con inferencia
let resultado1 = identidad("hello"); // T es string
let resultado2 = identidad(42); // T es number

// Uso explícito
let resultado3 = identidad<boolean>(true);

// Múltiples parámetros genéricos
function combinar<T, U>(primero: T, segundo: U): [T, U] {
  return [primero, segundo];
}

let combinado = combinar<string, number>("texto", 42);
```

### Interfaces Genéricas

```typescript
interface Contenedor<T> {
  valor: T;
  obtener(): T;
  establecer(valor: T): void;
}

class CajaDeTexto implements Contenedor<string> {
  constructor(public valor: string) {}

  obtener(): string {
    return this.valor;
  }

  establecer(valor: string): void {
    this.valor = valor;
  }
}

// Interfaz genérica con múltiples tipos
interface Par<K, V> {
  clave: K;
  valor: V;
}

let configuracion: Par<string, number> = {
  clave: "timeout",
  valor: 5000,
};
```

### Clases Genéricas

```typescript
class Lista<T> {
  private items: T[] = [];

  agregar(item: T): void {
    this.items.push(item);
  }

  obtener(index: number): T | undefined {
    return this.items[index];
  }

  obtenerTodos(): T[] {
    return [...this.items]; // copia defensiva
  }

  filtrar(predicate: (item: T) => boolean): T[] {
    return this.items.filter(predicate);
  }
}

let listaNumeros = new Lista<number>();
listaNumeros.agregar(1);
listaNumeros.agregar(2);

let listaTextos = new Lista<string>();
listaTextos.agregar("hello");
listaTextos.agregar("world");
```

### Restricciones de Genéricos

```typescript
// Restricción básica
interface TieneLongitud {
  length: number;
}

function obtenerLongitud<T extends TieneLongitud>(item: T): number {
  return item.length; // ✅ Sabemos que T tiene length
}

obtenerLongitud("texto"); // ✅ string tiene length
obtenerLongitud([1, 2, 3]); // ✅ array tiene length
// obtenerLongitud(42);          // ❌ number no tiene length

// Restricción con keyof
function obtenerPropiedad<T, K extends keyof T>(objeto: T, clave: K): T[K] {
  return objeto[clave];
}

let persona = { nombre: "Juan", edad: 25 };
let nombre = obtenerPropiedad(persona, "nombre"); // tipo: string
let edad = obtenerPropiedad(persona, "edad"); // tipo: number
// obtenerPropiedad(persona, "altura");           // ❌ 'altura' no existe
```

## 10. Tipos Avanzados

### Union Types

```typescript
// Union básico
type StringOrNumber = string | number;

function formatear(valor: StringOrNumber): string {
  if (typeof valor === "string") {
    return valor.toUpperCase(); // TypeScript sabe que es string
  } else {
    return valor.toString(); // TypeScript sabe que es number
  }
}

// Union con literales
type Estado = "cargando" | "exitoso" | "error";
type TamañoBoton = "pequeño" | "mediano" | "grande";

function mostrarEstado(estado: Estado) {
  switch (estado) {
    case "cargando":
      console.log("Cargando...");
      break;
    case "exitoso":
      console.log("¡Éxito!");
      break;
    case "error":
      console.log("Error occurred");
      break;
  }
}
```

### Intersection Types

```typescript
// Combinar tipos
type Persona = {
  nombre: string;
  edad: number;
};

type Empleado = {
  empresa: string;
  salario: number;
};

type EmpleadoCompleto = Persona & Empleado;

let empleado: EmpleadoCompleto = {
  nombre: "Juan",
  edad: 30,
  empresa: "TechCorp",
  salario: 50000,
};

// Intersection con interfaces
interface Timestamped {
  createdAt: Date;
  updatedAt: Date;
}

interface Tagged {
  tags: string[];
}

type Post = {
  title: string;
  content: string;
} & Timestamped &
  Tagged;
```

### Type Guards

```typescript
// Type guard de función
function esString(valor: unknown): valor is string {
  return typeof valor === "string";
}

function procesarValor(valor: unknown) {
  if (esString(valor)) {
    console.log(valor.toUpperCase()); // TypeScript sabe que es string
  }
}

// Type guard con 'in' operator
interface Ave {
  volar(): void;
  plumas: boolean;
}

interface Pez {
  nadar(): void;
  aletas: boolean;
}

function moverAnimal(animal: Ave | Pez) {
  if ("volar" in animal) {
    animal.volar(); // TypeScript sabe que es Ave
  } else {
    animal.nadar(); // TypeScript sabe que es Pez
  }
}

// Discriminated unions
interface Rectangulo {
  tipo: "rectangulo";
  ancho: number;
  alto: number;
}

interface Circulo {
  tipo: "circulo";
  radio: number;
}

type Forma = Rectangulo | Circulo;

function calcularArea(forma: Forma): number {
  switch (forma.tipo) {
    case "rectangulo":
      return forma.ancho * forma.alto; // TS sabe que es Rectangulo
    case "circulo":
      return Math.PI * forma.radio ** 2; // TS sabe que es Circulo
  }
}
```

## 11. Utility Types

### Usando Utility Types

```typescript
// Partial - hace todas las propiedades opcionales
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  activo: boolean;
}

function actualizarUsuario(id: number, cambios: Partial<Usuario>) {
  // cambios puede tener cualquier combinación de propiedades de Usuario
}

actualizarUsuario(1, { nombre: "Nuevo Nombre" });
actualizarUsuario(2, { email: "nuevo@email.com", activo: false });

// Required - hace todas las propiedades requeridas
interface Configuracion {
  host?: string;
  puerto?: number;
  ssl?: boolean;
}

let configCompleta: Required<Configuracion> = {
  host: "localhost",
  puerto: 3000,
  ssl: true,
};

// Pick - selecciona propiedades específicas
type UsuarioPublico = Pick<Usuario, "id" | "nombre">;

let perfilPublico: UsuarioPublico = {
  id: 1,
  nombre: "Juan",
  // email y activo no están disponibles
};

// Omit - excluye propiedades específicas
type UsuarioSinId = Omit<Usuario, "id">;

let nuevoUsuario: UsuarioSinId = {
  nombre: "Ana",
  email: "ana@email.com",
  activo: true,
  // id no está disponible
};

// Record - crea objeto con claves y valores específicos
type PaginasWeb = Record<"inicio" | "acerca" | "contacto", string>;

let urls: PaginasWeb = {
  inicio: "/home",
  acerca: "/about",
  contacto: "/contact",
};
```

## 12. Type Assertions

### Assertions Básicas

```typescript
// Assertion con 'as'
let valorDesconocido: unknown = "esto es un string";
let longitudString = (valorDesconocido as string).length;

// Assertion con angle brackets (no recomendado en JSX)
let longitudString2 = (<string>valorDesconocido).length;

// Non-null assertion
function obtenerElemento(id: string): HTMLElement | null {
  return document.getElementById(id);
}

let elemento = obtenerElemento("miElemento")!; // Aserta que no es null
elemento.style.display = "none";

// Assertion a tipo más específico
interface Usuario {
  nombre: string;
  email: string;
}

interface Admin extends Usuario {
  permisos: string[];
}

let usuario: Usuario = obtenerUsuario();
let admin = usuario as Admin; // Aserta que es Admin
console.log(admin.permisos); // Asumiendo que realmente lo es
```

### Const Assertions

```typescript
// Sin const assertion
let colores1 = ["rojo", "verde", "azul"]; // tipo: string[]
colores1.push("amarillo"); // ✅ permitido

// Con const assertion
let colores2 = ["rojo", "verde", "azul"] as const; // tipo: readonly ["rojo", "verde", "azul"]
// colores2.push("amarillo");  // ❌ Error: readonly

// En objetos
let configuracion1 = {
  host: "localhost",
  puerto: 3000,
}; // tipos: { host: string; puerto: number }

let configuracion2 = {
  host: "localhost",
  puerto: 3000,
} as const; // tipos: { readonly host: "localhost"; readonly puerto: 3000 }

// Para crear tipos literales
const ESTADOS = ["pendiente", "procesando", "completado"] as const;
type Estado = (typeof ESTADOS)[number]; // "pendiente" | "procesando" | "completado"
```

## 13. Decoradores

### Decoradores de Clase

```typescript
// Habilitar experimentalDecorators en tsconfig.json

// Decorador simple
function sellado(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sellado
class Ejemplo {
  propiedad = "valor";
}

// Decorador con parámetros
function entidad(nombre: string) {
  return function (constructor: Function) {
    constructor.prototype.nombreEntidad = nombre;
  };
}

@entidad("Usuario")
class Usuario {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
}
```

### Decoradores de Método

```typescript
// Decorador de método
function log(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  let metodo = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Llamando a ${propertyName} con argumentos:`, args);
    let resultado = metodo.apply(this, args);
    console.log(`Resultado:`, resultado);
    return resultado;
  };
}

class Calculadora {
  @log
  sumar(a: number, b: number): number {
    return a + b;
  }
}
```

## 14. Namespaces y Módulos

### Namespaces

```typescript
namespace Utilidades {
  export function formatearFecha(fecha: Date): string {
    return fecha.toISOString().split("T")[0];
  }

  export class Logger {
    static log(mensaje: string): void {
      console.log(`[${new Date().toISOString()}] ${mensaje}`);
    }
  }

  // No exportado - privado al namespace
  function funcionPrivada() {
    return "privada";
  }
}

// Uso
let fechaFormateada = Utilidades.formatearFecha(new Date());
Utilidades.Logger.log("Aplicación iniciada");

// Namespace anidados
namespace MiApp {
  export namespace API {
    export interface Respuesta<T> {
      datos: T;
      estado: number;
      mensaje: string;
    }

    export function procesarRespuesta<T>(respuesta: Respuesta<T>): T {
      if (respuesta.estado === 200) {
        return respuesta.datos;
      }
      throw new Error(respuesta.mensaje);
    }
  }

  export namespace UI {
    export class ComponenteBase {
      protected elemento: HTMLElement;

      constructor(selector: string) {
        this.elemento = document.querySelector(selector)!;
      }

      mostrar(): void {
        this.elemento.style.display = "block";
      }

      ocultar(): void {
        this.elemento.style.display = "none";
      }
    }
  }
}

// Uso de namespaces anidados
let respuesta: MiApp.API.Respuesta<string> = {
  datos: "Hola mundo",
  estado: 200,
  mensaje: "OK",
};

let datos = MiApp.API.procesarRespuesta(respuesta);
```

### Módulos ES6

```typescript
// archivo: usuario.ts
export interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

export class ServicioUsuario {
  private usuarios: Usuario[] = [];

  agregar(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }

  obtenerPorId(id: number): Usuario | undefined {
    return this.usuarios.find((u) => u.id === id);
  }

  obtenerTodos(): Usuario[] {
    return [...this.usuarios];
  }
}

// Export default
export default class DatabaseConnection {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  conectar(): Promise<void> {
    // Lógica de conexión
    return Promise.resolve();
  }
}

// archivo: main.ts
import DatabaseConnection, { Usuario, ServicioUsuario } from "./usuario";

// Import con alias
import {
  Usuario as ModeloUsuario,
  ServicioUsuario as UserService,
} from "./usuario";

// Import todo
import * as UsuarioModule from "./usuario";

// Re-exports
export { Usuario, ServicioUsuario } from "./usuario";
export { default as Database } from "./usuario";
```

## 15. Declaration Files (.d.ts)

### Declaraciones Básicas

```typescript
// archivo: global.d.ts
// Declarar variables globales
declare var VERSION: string;
declare var DEBUG: boolean;

// Declarar funciones globales
declare function obtenerConfiguracion(): any;
declare function establecerConfiguracion(config: any): void;

// Declarar namespaces para bibliotecas externas
declare namespace jQuery {
  interface JQueryStatic {
    (selector: string): JQuery;
  }

  interface JQuery {
    addClass(className: string): JQuery;
    removeClass(className: string): JQuery;
    html(): string;
    html(content: string): JQuery;
  }
}

declare var $: jQuery.JQueryStatic;

// Módulos externos
declare module "mi-biblioteca" {
  export function funcionPrincipal(param: string): number;
  export class ClasePrincipal {
    constructor(config: any);
    metodo(): void;
  }
}

// Declaración de módulos con comodines
declare module "*.json" {
  const valor: any;
  export default valor;
}

declare module "*.css" {
  const contenido: string;
  export default contenido;
}
```

### Ambient Declarations

```typescript
// Declarar tipos para bibliotecas de terceros
declare module "biblioteca-sin-tipos" {
  interface Configuracion {
    url: string;
    timeout: number;
  }

  export function inicializar(config: Configuracion): void;
  export function procesar(datos: any): Promise<any>;

  export as namespace MiBiblioteca; // Para UMD
}

// Extender tipos existentes
declare global {
  interface Window {
    miPropiedad: string;
    miFuncion(): void;
  }

  interface Array<T> {
    primerElemento(): T | undefined;
    ultimoElemento(): T | undefined;
  }
}

// Implementación de extensiones
Array.prototype.primerElemento = function <T>(this: T[]): T | undefined {
  return this[0];
};

Array.prototype.ultimoElemento = function <T>(this: T[]): T | undefined {
  return this[this.length - 1];
};
```

## 16. Mapped Types y Conditional Types

### Mapped Types

```typescript
// Mapped type básico
type Opcional<T> = {
  [K in keyof T]?: T[K];
};

interface Usuario {
  nombre: string;
  edad: number;
  email: string;
}

type UsuarioOpcional = Opcional<Usuario>;
// Resultado: { nombre?: string; edad?: number; email?: string; }

// Mapped type con transformación de claves
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type UsuarioGetters = Getters<Usuario>;
// Resultado: { getNombre(): string; getEdad(): number; getEmail(): string; }

// Mapped type condicional
type SoloStrings<T> = {
  [K in keyof T]: T[K] extends string ? T[K] : never;
};

interface MixedData {
  id: number;
  nombre: string;
  activo: boolean;
  descripcion: string;
}

type SoloStringsDeMixed = SoloStrings<MixedData>;
// Resultado: { id: never; nombre: string; activo: never; descripcion: string; }

// Filtrar propiedades
type SoloClaves<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

type ClavesString<T> = SoloClaves<T, string>;
type ClavesMixed = ClavesString<MixedData>; // "nombre" | "descripcion"
```

### Conditional Types

```typescript
// Conditional type básico
type EsArray<T> = T extends any[] ? true : false;

type Resultado1 = EsArray<string[]>; // true
type Resultado2 = EsArray<string>; // false

// Conditional type con infer
type TipoElemento<T> = T extends (infer U)[] ? U : never;

type Elemento1 = TipoElemento<string[]>; // string
type Elemento2 = TipoElemento<number[]>; // number
type Elemento3 = TipoElemento<string>; // never

// Conditional type complejo
type TipoRetorno<T> = T extends (...args: any[]) => infer R ? R : never;

function ejemplo(): { nombre: string; edad: number } {
  return { nombre: "Juan", edad: 25 };
}

type RetornoEjemplo = TipoRetorno<typeof ejemplo>;
// Resultado: { nombre: string; edad: number }

// Conditional type distributivo
type ToArray<T> = T extends any ? T[] : never;

type ArrayUnion = ToArray<string | number>; // string[] | number[]

// Non-distributivo
type ToArrayNonDist<T> = [T] extends [any] ? T[] : never;

type ArrayUnion2 = ToArrayNonDist<string | number>; // (string | number)[]
```

## 17. Template Literal Types

### Template Literals Básicos

```typescript
// Template literal type básico
type Saludo = `Hola ${string}`;

let mensaje1: Saludo = "Hola mundo"; // ✅
let mensaje2: Saludo = "Hola TypeScript"; // ✅
// let mensaje3: Saludo = "Adiós mundo";  // ❌

// Con union types
type Protocolo = "http" | "https";
type Dominio = "localhost" | "example.com";
type URL = `${Protocolo}://${Dominio}`;

let url1: URL = "http://localhost"; // ✅
let url2: URL = "https://example.com"; // ✅
// let url3: URL = "ftp://localhost";    // ❌

// Template literal con números
type Versiones = `v${1 | 2 | 3}.${number}`;
let version1: Versiones = "v1.0"; // ✅
let version2: Versiones = "v2.15"; // ✅
// let version3: Versiones = "v4.0";     // ❌
```

### Template Literals Avanzados

```typescript
// Eventos con template literals
type EventoNombre<T extends string> = `on${Capitalize<T>}`;

type EventosClick = EventoNombre<"click">; // "onClick"
type EventosChange = EventoNombre<"change">; // "onChange"

// CSS Properties
type CSSProp = "margin" | "padding" | "border";

type CSSDirection = "top" | "right" | "bottom" | "left";

type CSSProperties = `${CSSProp}-${CSSDirection}`;
// "margin-top" | "margin-right" | ... | "border-left"

// API Routes
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type ApiVersion = "v1" | "v2";
type Resource = "users" | "posts" | "comments";

type ApiEndpoint = `/api/${ApiVersion}/${Resource}`;
type ApiRoute = `${HttpMethod} ${ApiEndpoint}`;

let ruta1: ApiRoute = "GET /api/v1/users"; // ✅
let ruta2: ApiRoute = "POST /api/v2/posts"; // ✅

// Transformaciones de string
type PascalCase<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${Uppercase<First>}${Rest}`
  : S;

type CamelToPascal<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${Uppercase<First>}${CamelToPascal<Rest>}`
  : "";

type Ejemplo1 = PascalCase<"usuario">; // "Usuario"
type Ejemplo2 = CamelToPascal<"miVariable">; // Complejo pero posible
```

## 18. Patrones Avanzados de Tipado

### Builder Pattern

```typescript
class QueryBuilder<T = any> {
  private query: string = "";

  select<K extends keyof T>(campos: K[]): QueryBuilder<Pick<T, K>> {
    this.query += `SELECT ${campos.join(", ")} `;
    return this as any;
  }

  from(tabla: string): QueryBuilder<T> {
    this.query += `FROM ${tabla} `;
    return this;
  }

  where(condicion: string): QueryBuilder<T> {
    this.query += `WHERE ${condicion} `;
    return this;
  }

  build(): string {
    return this.query.trim();
  }
}

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  edad: number;
}

let query = new QueryBuilder<Usuario>()
  .select(["id", "nombre"]) // Tipo inferido: QueryBuilder<Pick<Usuario, "id" | "nombre">>
  .from("usuarios")
  .where("edad > 18")
  .build();
```

### Fluent API

```typescript
interface ValidadorConfig<T> {
  requerido?: boolean;
  minLongitud?: number;
  maxLongitud?: number;
  patron?: RegExp;
}

class ValidadorCampo<T> {
  private configuracion: ValidadorConfig<T> = {};

  requerido(): ValidadorCampo<T> {
    this.configuracion.requerido = true;
    return this;
  }

  minimo(longitud: number): ValidadorCampo<T> {
    this.configuracion.minLongitud = longitud;
    return this;
  }

  maximo(longitud: number): ValidadorCampo<T> {
    this.configuracion.maxLongitud = longitud;
    return this;
  }

  coincideCon(patron: RegExp): ValidadorCampo<T> {
    this.configuracion.patron = patron;
    return this;
  }

  validar(valor: T): boolean {
    // Lógica de validación
    return true;
  }
}

// Uso fluido
let validadorEmail = new ValidadorCampo<string>()
  .requerido()
  .minimo(5)
  .maximo(100)
  .coincideCon(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
```

### Type-safe Event Emitter

```typescript
interface Eventos {
  "usuario:creado": { id: number; nombre: string };
  "usuario:actualizado": { id: number; cambios: any };
  "usuario:eliminado": { id: number };
  "sistema:error": { mensaje: string; codigo: number };
}

class EventEmitter<T extends Record<string, any>> {
  private listeners: { [K in keyof T]?: Array<(data: T[K]) => void> } = {};

  on<K extends keyof T>(evento: K, callback: (data: T[K]) => void): void {
    if (!this.listeners[evento]) {
      this.listeners[evento] = [];
    }
    this.listeners[evento]!.push(callback);
  }

  emit<K extends keyof T>(evento: K, data: T[K]): void {
    const callbacks = this.listeners[evento];
    if (callbacks) {
      callbacks.forEach((callback) => callback(data));
    }
  }

  off<K extends keyof T>(evento: K, callback: (data: T[K]) => void): void {
    const callbacks = this.listeners[evento];
    if (callbacks) {
      const index = callbacks.indexOf(callback);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    }
  }
}

// Uso type-safe
const emitter = new EventEmitter<Eventos>();

emitter.on("usuario:creado", (data) => {
  // data es automáticamente tipado como { id: number; nombre: string }
  console.log(`Usuario creado: ${data.nombre} con ID ${data.id}`);
});

emitter.emit("usuario:creado", { id: 1, nombre: "Juan" }); // ✅
// emitter.emit('usuario:creado', { id: 1 });               // ❌ Error: falta 'nombre'
```

### Recursive Types

```typescript
// Tipo para estructura de árbol
interface Nodo<T> {
  valor: T;
  hijos?: Nodo<T>[];
}

// Tipo para path anidado
type PropiedadAnidada<T, K extends keyof T> = K extends string
  ? T[K] extends Record<string, any>
    ? `${K}` | `${K}.${PropiedadAnidada<T[K], keyof T[K]>}`
    : `${K}`
  : never;

interface ConfiguracionCompleja {
  servidor: {
    host: string;
    puerto: number;
    ssl: {
      certificado: string;
      clave: string;
    };
  };
  baseDatos: {
    url: string;
    timeout: number;
  };
}

type RutasConfiguracion = PropiedadAnidada<
  ConfiguracionCompleja,
  keyof ConfiguracionCompleja
>;
// "servidor" | "servidor.host" | "servidor.puerto" | "servidor.ssl" |
// "servidor.ssl.certificado" | "servidor.ssl.clave" | "baseDatos" |
// "baseDatos.url" | "baseDatos.timeout"

// Función para obtener valor anidado
function obtenerConfiguracion<T, K extends PropiedadAnidada<T, keyof T>>(
  configuracion: T,
  ruta: K
): any {
  return ruta.split(".").reduce((obj, key) => obj[key], configuracion as any);
}
```

## 19. Integration con JavaScript Legacy

### Migración Gradual

```typescript
// archivo: legacy.js (JavaScript existente)
function calcularPrecio(producto, descuento) {
  return producto.precio * (1 - descuento);
}

// archivo: types.d.ts (declaraciones para JS existente)
interface Producto {
  nombre: string;
  precio: number;
  categoria: string;
}

declare function calcularPrecio(producto: Producto, descuento: number): number;

// archivo: nuevo.ts (nuevo código TypeScript)
import { calcularPrecio } from "./legacy.js";

const producto: Producto = {
  nombre: "Laptop",
  precio: 1000,
  categoria: "Electrónicos",
};

const precioConDescuento = calcularPrecio(producto, 0.1);
```

### JSDoc para Tipado

```javascript
// En archivos .js, usando JSDoc para tipado
/**
 * @typedef {Object} Usuario
 * @property {number} id - ID del usuario
 * @property {string} nombre - Nombre del usuario
 * @property {string} email - Email del usuario
 * @property {boolean} [activo] - Si el usuario está activo (opcional)
 */

/**
 * Crea un nuevo usuario
 * @param {string} nombre - El nombre del usuario
 * @param {string} email - El email del usuario
 * @returns {Usuario} El usuario creado
 */
function crearUsuario(nombre, email) {
  return {
    id: Math.floor(Math.random() * 1000),
    nombre: nombre,
    email: email,
    activo: true,
  };
}

/**
 * @param {Usuario[]} usuarios - Lista de usuarios
 * @param {(usuario: Usuario) => boolean} filtro - Función de filtro
 * @returns {Usuario[]} Usuarios filtrados
 */
function filtrarUsuarios(usuarios, filtro) {
  return usuarios.filter(filtro);
}

// TypeScript puede inferir tipos desde JSDoc
const usuario = crearUsuario("Juan", "juan@email.com");
const activos = filtrarUsuarios([usuario], (u) => u.activo === true);
```

## 20. Configuración y Herramientas

### tsconfig.json Básico

```json
{
  "compilerOptions": {
    // Opciones de compilación
    "target": "ES2020", // Versión de JS de salida
    "module": "commonjs", // Sistema de módulos
    "lib": ["ES2020", "DOM"], // Librerías incluidas
    "outDir": "./dist", // Directorio de salida
    "rootDir": "./src", // Directorio raíz del código fuente

    // Opciones de tipado
    "strict": true, // Modo estricto (recomendado)
    "noImplicitAny": true, // Error en 'any' implícito
    "strictNullChecks": true, // Chequeos estrictos de null/undefined
    "strictFunctionTypes": true, // Chequeos estrictos de funciones

    // Opciones de módulos
    "moduleResolution": "node", // Resolución estilo Node.js
    "baseUrl": "./", // Base para rutas relativas
    "paths": {
      // Alias de rutas
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"]
    },

    // Opciones adicionales
    "esModuleInterop": true, // Interop con CommonJS
    "allowSyntheticDefaultImports": true, // Imports por defecto sintéticos
    "skipLibCheck": true, // Saltar chequeo de .d.ts
    "forceConsistentCasingInFileNames": true, // Consistencia en nombres

    // Decoradores
    "experimentalDecorators": true, // Habilitar decoradores
    "emitDecoratorMetadata": true // Emitir metadata de decoradores
  },

  "include": [
    "src/**/*" // Archivos a incluir
  ],

  "exclude": [
    "node_modules", // Excluir node_modules
    "dist", // Excluir directorio de salida
    "**/*.test.ts" // Excluir archivos de test
  ]
}
```

### Integración con Bundlers

```typescript
// webpack.config.js para TypeScript
module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};

// vite.config.ts
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    target: "esnext",
    minify: "esbuild",
  },
});
```

# Cuándo usar la sintaxis Específica con type:

- Objetos con type: Sintaxis exacta para propiedades, métodos, opcionales, readonly
- Funciones con type: Todas las variantes incluyendo sobrecargas y genéricos
- Arrays y Tuplas: Sintaxis completa para estructuras de datos
- Comparación Types vs Interfaces: Qué puede hacer cada uno y cuándo usarlos

## Casos de Uso Específicos:

- Estados de aplicación: Union types para manejo de estados
- Configuraciones: Intersection types y conditional types
  -APIs: Request/Response types estructurados
- Event Handling: Event maps type-safe
- Utility Types personalizados: Transformaciones avanzadas

# Características Únicas de type:

- Union types (|)
- Intersection types (&)
- Conditional types
- Mapped types
- Template literal types
- Tuple types
- Primitive aliases

# Cuándo Usar type vs interface:

## Usa type cuando:

- Necesites union types
- Trabajes con tuplas
- Requieras conditional/mapped types
- Definas aliases de primitivos
- Uses template literal types

## Usa interface cuando:

- Definas la forma de objetos/clases
- Necesites declaration merging
- Implementes en clases
- Extiendas de otros tipos de objeto

# Progresión Recomendada para el uso de tipado:

- Empezar simple: Variables tipadas y funciones básicas
- Interfaces y tipos: Para estructurar objetos
- Genéricos: Para código reutilizable
- Utility types: Para transformaciones comunes
- Patrones avanzados: Según necesidades específicas

# Mejores Prácticas:

- Inferencia vs Explícito: Deja que TypeScript infiera cuando sea obvio, sé explícito cuando agregue claridad
- Strict mode: Siempre usa "strict": true en tsconfig.json
- Migración gradual: Puedes agregar tipado incrementalmente a proyectos JavaScript existentes
- JSDoc: Útil para agregar algo de tipado a JavaScript sin convertir a TypeScript

# Casos de Uso Principales:

- APIs: Interfaces para requests/responses
- Estado: Union types para estados de aplicación
- Configuraciones: Types con propiedades opcionales
- Eventos: Template literal types para type-safe event handling
- Utilidades: Mapped types y conditional types para transformaciones

**_Esta guía cubre todas las formas posibles de agregar tipado a JavaScript, desde lo más básico hasta patrones muy avanzados. Lo importante es empezar gradualmente e ir adoptando características más avanzadas según las necesidades del proyecto._**
