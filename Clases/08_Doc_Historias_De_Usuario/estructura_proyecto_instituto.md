# Estructura del Proyecto - Instituto Web

## Estructura Simplificada

```
instituto-web/
├── 📄 README.md                    
├── 📁 docs/
│   ├── 📄 historias-usuario.md         # ✅ Ya completado
│   ├── 📄 fundamentos-hu.md            # ✅ Ya completado  
│   ├── 📄 arquitectura-tecnica.md      # Decisiones técnicas
│   ├── 📄 plan-testing.md              # Estrategia de pruebas
│   └── 📄 cronograma-desarrollo.md     # Sprints y timeline
├── 📁 design/
│   └── 📁 wireframes/                  # Bocetos básicos
└── 📄 TEAM-GUIDE.md                    # Roles y metodología
```

---

## Distribución Simple del Equipo

### **DUPLA A - Documentación Técnica** 👩‍💻👩‍💻
**Personas con conocimientos técnicos**

**Persona A1:** `arquitectura-tecnica.md`
- Stack tecnológico (React, Node.js, etc.)
- Integración con estación meteorológica
- Base de datos para históricos del clima
- Hosting y deployment

**Persona A2:** `cronograma-desarrollo.md` 
- Sprints basados en historias de usuario
- Timeline realista (8-10 semanas)
- Metodología de trabajo
- Definición de "terminado" para cada HU

### **DUPLA B - Testing y Validación** 🧪🧪  
**Personas con conocimientos de testing**

**Persona B1:** `plan-testing.md`
- Testing manual por cada historia de usuario
- Checklist basado en criterios de aceptación
- Testing de integración (clima + web)
- Validación con stakeholders del instituto

**Persona B2:** `wireframes/` + `TEAM-GUIDE.md`
- Bocetos básicos de las páginas principales
- Flujos de usuario (visitante → información, alumno → clima)
- Guía de roles del equipo y metodología

---

## Cronograma Concentrado - 1 Semana

### **Lunes - Martes: Trabajo Individual**

**DUPLA A (Técnica):**
- Lunes: Leer HU completas + definir stack tecnológico
- Martes: Escribir arquitectura técnica + cronograma inicial

**DUPLA B (Testing):**
- Lunes: Leer HU completas + crear wireframes básicos  
- Martes: Escribir plan de testing + guía del equipo

### **Miércoles: Revisión Cruzada** 
- Intercambio de documentos entre duplas
- Feedback y mejoras
- Integración de documentos

### **Jueves: Finalización**
- Últimos ajustes
- README principal
- **✅ Documentación completa**

### **Viernes: Preparación Figma**
- Setup de herramientas
- Clase de Figma
- **🎨 Inicio de fase de diseño**

---

## Contenido Específico por Documento

### **arquitectura-tecnica.md** (A1)
```markdown
# Stack Tecnológico
- Frontend: React + CSS/Tailwind
- API Clima: Node.js + Express
- Base de datos: MySQL (ya existe en el instituto)
- Hosting: [definir opción]

# Integración Estación Meteorológica  
- Tipo de conexión con hardware
- Formato de datos esperado
- Manejo de errores y datos faltantes

# Consideraciones Performance
- Usuarios concurrentes esperados
- Actualización de datos climáticos
```

### **cronograma-desarrollo.md** (A2)
```markdown
# Sprints Definidos
Sprint 1 (2 sem): Landing + info institucional (HU1, HU4)
Sprint 2 (2 sem): Widget clima básico (HU5)  
Sprint 3 (3 sem): Datos meteorológicos completos (HU6)
Sprint 4 (1 sem): Eventos y promociones (HU7, HU8)

# Definición de Terminado
- Funcionalidad cumple criterios de aceptación ✅
- Testing manual completado ✅  
- Responsive en móvil y desktop ✅
- Validado con stakeholder ✅
```

### **plan-testing.md** (B1)
```markdown
# Testing por Historia de Usuario
HU1: Visualizar información instituto
  ✅ Se muestra información correcta
  ✅ Navegación funciona en móvil
  ✅ Tiempo de carga < 3 segundos

HU6: Datos meteorológicos para alumnos
  ✅ Datos se actualizan cada 30 min
  ✅ Interfaz comprensible para estudiantes
  ✅ Datos históricos se cargan correctamente

# Proceso de Validación
- Testing manual antes de mostrar al instituto
- Feedback del instituto documentado
- Correcciones implementadas
```

### **TEAM-GUIDE.md** (B2)
```markdown
# Roles del Equipo
- Dupla A: Backend + arquitectura técnica
- Dupla B: Frontend + testing/QA
- Rotación: Cada sprint rotamos algunas tareas

# Metodología Ágil Simplificada
- Sprints de 2-3 semanas
- Revisión semanal con todo el equipo
- Testing continuo durante desarrollo
- Validación con cliente al final de cada sprint

# Herramientas
- Git/GitHub para código
- [Herramienta] para comunicación diaria
- Figma para diseño colaborativo
```

---

## Flujo del Proyecto - Secuencia Clara

### **FASE 1: DOCUMENTACIÓN** 📋 
**Duración: 1 semana**
```
Lunes-Martes    → Trabajo individual en duplas
Miércoles       → Revisión cruzada entre duplas  
Jueves          → Finalización de documentos
Viernes         → ✅ Documentación terminada
```

**Entregables:**
- ✅ Arquitectura técnica definida
- ✅ Plan de testing listo
- ✅ Cronograma de sprints claro
- ✅ Wireframes básicos hechos

### **FASE 2: DISEÑO** 🎨
**Duración: 1 semana**  
```
Viernes         → Clase de Figma + setup
Lunes-Martes    → Diseños de HU prioritarias
Miércoles       → Revisión y ajustes de diseño
Jueves          → Export de componentes y assets
Viernes         → ✅ Diseños listos para desarrollo
```

**Entregables:**
- ✅ Diseños de Figma completos
- ✅ Assets exportados
- ✅ Componentes definidos

### **FASE 3: DESARROLLO** 👩‍💻
**Duración: 8 semanas (4 sprints)**
```
Sprint 1 → Landing básica + info institucional  
Sprint 2 → Sistema de clima básico
Sprint 3 → Datos meteorológicos avanzados
Sprint 4 → Eventos, promociones y ajustes finales
```

---

## Criterios de Éxito - Fase Documentación

### **Al final de la Semana 1 tendremos:**
1. ✅ **Stack tecnológico decidido** - sabemos con qué herramientas trabajar
2. ✅ **Plan de testing claro** - sabemos cómo validar cada funcionalidad  
3. ✅ **Cronograma realista** - sabemos cuánto tiempo llevará cada parte
4. ✅ **Wireframes básicos** - sabemos cómo se verá la estructura
5. ✅ **Roles definidos** - cada dupla sabe qué hará en desarrollo

### **Señales de que estamos listos:**
- Cualquiera del equipo puede explicar la arquitectura técnica
- Sabemos exactamente qué testear en cada historia de usuario
- El cronograma parece realista (ni muy fácil ni imposible)
- Los wireframes reflejan las necesidades de cada tipo de usuario

**🎯 Objetivo: Pasar a Figma con total claridad sobre qué diseñar**