# Historias de Usuario - Sistema Web Instituto Secundario

## Contexto del Proyecto

Desarrollo de una página web para un instituto secundario que incluye:
- **Sección pública**: Información general del instituto, clima, eventos, historia institucional
- **Sección privada**: Acceso para padres/tutores mediante login para consultar información académica de sus hijos
- **Base de datos**: MySQL con información de estudiantes, calificaciones, asistencias

## Roles Identificados

- **Visitante**: Persona que accede al sitio web para obtener información del instituto
- **Alumno**: Estudiante del instituto que utiliza la sección del clima con fines educativos y didácticos
- **Director**: Responsable de aprobar y solicitar actualizaciones de contenido institucional
- **Soporte Técnico**: Personal del instituto que interactúa con el equipo de desarrollo para gestionar actualizaciones

## Requisitos del Sistema (Extraídos de la Entrevista)

### Funcionalidades Prioritarias (Para Implementar)
- Landing page informativa del instituto
- Sección de comunicados/novedades importantes
- Historia del instituto y promociones escolares
- Eventos públicos
- Información de contacto y datos institucionales
- **Sección de clima integrada con datos de estación meteorológica del instituto**
- Sistema de actualización de contenido por soporte técnico
- **Interfaz de datos climáticos para uso didáctico de alumnos**

### Funcionalidades Futuras (Para Próximas Versiones)
- Sistema de autenticación para padres/tutores
- Consulta de calificaciones, asistencias y sanciones
- Análisis de suelos y aguas con mapas interactivos
- Comunicados privados diferenciados
- Historial académico completo multi-año

---

## Historia de Usuario 1: Visualizar Información del Instituto

### Anverso
- **ID:** Visualizar información instituto
- **TÍTULO:** Como visitante quiero acceder a información general del instituto para conocer sus características y propuesta educativa
- **REGLAS DE NEGOCIO:** La información debe estar actualizada y ser de acceso público sin necesidad de registro

### Reverso - Criterios de Aceptación

**Escenario 1: Acceso exitoso a información**
- **Dado** que soy un visitante del sitio web
- **Cuando** ingreso a la página principal
- **Entonces** puedo ver la información del instituto, historia, propuesta educativa y datos de contacto

**Escenario 2: Navegación entre secciones**
- **Dado** que estoy en la página principal
- **Cuando** selecciono diferentes pestañas del menú
- **Entonces** puedo navegar entre historia, eventos, promociones escolares sin inconvenientes

---

## Historia de Usuario 2: Solicitar Actualización de Contenido

### Anverso
- **ID:** Solicitar actualización contenido
- **TÍTULO:** Como director quiero comunicar información importante al equipo de desarrollo para mantener actualizada la página web con novedades institucionales
- **REGLAS DE NEGOCIO:** 
  - Solo el director puede solicitar cambios de contenido institucional oficial
  - Las actualizaciones deben ser comunicadas al soporte técnico del instituto

### Reverso - Criterios de Aceptación

**Escenario 1: Solicitud de comunicado importante**
- **Dado** que hay una novedad institucional relevante (ej: cambio de horarios, evento especial)
- **Cuando** el director comunica la información al soporte técnico
- **Entonces** se puede coordinar la actualización del contenido en la sección correspondiente

**Escenario 2: Actualización de información general**
- **Dado** que cambió información institucional (contacto, propuesta educativa, etc.)
- **Cuando** el director solicita la modificación
- **Entonces** el soporte técnico puede gestionar el cambio con el equipo de desarrollo

---

## Historia de Usuario 3: Gestionar Actualizaciones Técnicas

### Anverso
- **ID:** Gestionar actualizaciones técnicas
- **TÍTULO:** Como soporte técnico quiero coordinar con el equipo de desarrollo para implementar cambios de contenido solicitados por la dirección
- **REGLAS DE NEGOCIO:** 
  - El soporte técnico actúa como intermediario entre la dirección y el equipo de desarrollo
  - Debe validar que las solicitudes sean apropiadas para el sitio web

### Reverso - Criterios de Aceptación

**Escenario 1: Coordinación exitosa de cambios**
- **Dado** que el director solicita una actualización de contenido
- **Cuando** recibo la solicitud y los detalles necesarios
- **Entonces** puedo comunicar al equipo de desarrollo los cambios requeridos con la información completa

**Escenario 2: Validación de contenido**
- **Dado** que se solicita una actualización
- **Cuando** reviso que el contenido sea apropiado para el sitio web
- **Entonces** puedo aprobar o sugerir modificaciones antes de enviar al desarrollo

---

## Historia de Usuario 4: Publicar Comunicados Importantes

### Anverso
- **ID:** Publicar comunicados importantes
- **TÍTULO:** Como visitante quiero ver comunicados y novedades importantes del instituto para mantenerme informado sobre situaciones relevantes
- **REGLAS DE NEGOCIO:** 
  - Los comunicados deben ser de carácter público e institucional
  - Deben estar ordenados por fecha de publicación
  - Solo mostrar información que no requiera autenticación

### Reverso - Criterios de Aceptación

**Escenario 1: Visualización de comunicados actuales**
- **Dado** que accedo a la sección de novedades/comunicados
- **Cuando** consulto la información disponible
- **Entonces** puedo ver comunicados importantes como cambios de horarios, suspensiones de clases, eventos especiales

**Escenario 2: Información ordenada cronológicamente**
- **Dado** que hay múltiples comunicados publicados
- **Cuando** ingreso a la sección
- **Entonces** veo la información ordenada desde la más reciente a la más antigua

---

## Historia de Usuario 5: Consultar Información del Clima

### Anverso
- **ID:** Consultar clima
- **TÍTULO:** Como visitante quiero acceder a información meteorológica para conocer las condiciones climáticas actuales de la zona del instituto
- **REGLAS DE NEGOCIO:** La información del clima debe ser actual y precisa para la zona del instituto

### Reverso - Criterios de Aceptación

**Escenario 1: Acceso desde página principal**
- **Dado** que estoy en la página principal
- **Cuando** hago clic en el widget de clima o en el acceso rápido
- **Entonces** puedo ver la información meteorológica actual

**Escenario 2: Acceso desde pestaña dedicada**
- **Dado** que navego por el sitio
- **Cuando** selecciono la pestaña de clima
- **Entonces** accedo a una sección completa con información meteorológica detallada

---

## Historia de Usuario 6: Consultar Datos Meteorológicos para Actividades Didácticas

### Anverso
- **ID:** Consultar datos meteorológicos didácticos
- **TÍTULO:** Como alumno quiero acceder a datos meteorológicos detallados de la estación del instituto para realizar actividades educativas y análisis climatológicos
- **REGLAS DE NEGOCIO:** 
  - Los datos deben provenir de la estación meteorológica del instituto
  - Información debe ser precisa y actualizada para fines educativos
  - Debe incluir datos históricos para análisis comparativos

### Reverso - Criterios de Aceptación

**Escenario 1: Consulta de datos actuales para actividades**
- **Dado** que soy un alumno realizando una actividad didáctica
- **Cuando** accedo a la sección de datos meteorológicos
- **Entonces** puedo ver mediciones actuales de temperatura, humedad, presión atmosférica y otros parámetros registrados por la estación del instituto

**Escenario 2: Acceso a datos históricos para análisis**
- **Dado** que necesito datos históricos para un proyecto educativo
- **Cuando** consulto la sección de datos meteorológicos
- **Entonces** puedo acceder a registros anteriores para realizar comparaciones y análisis de tendencias climatológicas

**Escenario 3: Interpretación educativa de datos**
- **Dado** que estoy utilizando los datos con fines didácticos
- **Cuando** reviso la información meteorológica
- **Entonces** puedo entender los datos presentados de manera clara y educativa, facilitando mi aprendizaje sobre meteorología

---

## Historia de Usuario 7: Visualizar Eventos Institucionales

### Anverso
- **ID:** Visualizar eventos institucionales
- **TÍTULO:** Como visitante quiero ver eventos y actividades del instituto para conocer la agenda institucional y participar en actividades abiertas a la comunidad
- **REGLAS DE NEGOCIO:** Solo se muestran eventos de carácter público y actividades abiertas a la comunidad

### Reverso - Criterios de Aceptación

**Escenario 1: Lista de eventos próximos**
- **Dado** que accedo a la sección de eventos
- **Cuando** consulto las actividades programadas
- **Entonces** veo una lista actualizada de eventos próximos como ferias de ciencias, actos escolares, jornadas de puertas abiertas

**Escenario 2: Información detallada de eventos**
- **Dado** que hay eventos programados
- **Cuando** selecciono un evento específico
- **Entonces** puedo ver detalles como fecha, horario, lugar y descripción de la actividad

---

## Historia de Usuario 8: Consultar Promociones Escolares

### Historia de Usuario - Análisis de Suelos y Aguas
**Justificación para postergación:** Requiere integración compleja con mapas, coordenadas GPS y base de datos científica especializada que excede el presupuesto y alcance actual del proyecto.

### Historia de Usuario - Historial Académico Multi-año
**Justificación para postergación:** Necesita migración y estructuración de datos históricos que no están actualmente digitalizados en el sistema del instituto.

---

## Consideraciones Técnicas

### Estación Meteorológica del Instituto
- **Fuente de datos:** Estación meteorológica física instalada en el instituto
- **Tipo de datos:** Temperatura, humedad, presión atmosférica, precipitaciones, velocidad del viento
- **Frecuencia de actualización:** Datos en tiempo real o intervalos regulares (cada 15-30 minutos)
- **Almacenamiento:** Base de datos para datos históricos necesarios para actividades didácticas
- **Integración:** API o sistema de lectura de datos de la estación meteorológica

### Requerimientos Técnicos del Sistema

#### Funcionalidades de Datos Meteorológicos:
- **Conectividad con estación meteorológica:** Sistema de captura de datos automatizado
- **Almacenamiento de datos históricos:** Base de datos para registros climatológicos
- **Interfaz de visualización:** Gráficos y tablas comprensibles para alumnos
- **Actualización en tiempo real:** Sistema de refresh automático de datos
- **Acceso diferenciado:** Vista básica para visitantes, vista detallada para uso didáctico

#### Arquitectura Propuesta
- **Frontend:** Página web estática/semi-estática responsive con sección dinámica para datos meteorológicos
- **Backend específico clima:** Servicio para conectar con estación meteorológica y gestionar datos
- **Base de datos meteorológica:** Almacenamiento de datos históricos climatológicos
- **Gestión de contenido:** Sistema simple de actualización coordinado entre dirección, soporte técnico y equipo de desarrollo  
- **Integración con hardware:** Conexión directa o indirecta con estación meteorológica del instituto
- **Hosting:** Servidor web con capacidad de procesamiento para datos en tiempo real

### Casos de Uso Técnico - Estación Meteorológica

#### Escenario 1: Falla en la estación meteorológica
- **Situación:** La estación meteorológica no envía datos
- **Requerimiento:** Sistema debe detectar la falta de datos y mostrar mensaje informativo
- **Fallback:** Posibilidad de mostrar datos de respaldo o últimas mediciones válidas

#### Escenario 2: Datos inconsistentes o erróneos
- **Situación:** La estación envía datos fuera de rangos normales
- **Requerimiento:** Sistema de validación de datos con alertas automáticas
- **Acción:** Filtrado de datos anómalos y notificación al soporte técnico

#### Escenario 3: Alto volumen de consultas de alumnos
- **Situación:** Múltiples alumnos acceden simultáneamente durante actividades didácticas
- **Requerimiento:** Sistema debe soportar carga concurrente sin degradación
- **Solución:** Optimización de consultas y posible caché de datos frecuentemente consultados

#### Escenario 4: Mantenimiento de la estación
- **Situación:** Necesidad de mantenimiento o calibración de equipos
- **Requerimiento:** Sistema debe permitir pausas programadas en la captura de datos
- **Comunicación:** Notificación automática sobre períodos de mantenimiento

### Arquitectura Propuesta
- **Frontend:** Página web estática/semi-estática responsive
- **Gestión de contenido:** Sistema simple de actualización coordinado entre dirección, soporte técnico y equipo de desarrollo  
- **Integración externa:** API de clima para información meteorológica
- **Hosting:** Servidor web estándar sin necesidad de base de datos compleja

### Flujo de Actualización de Contenido
1. **Director** identifica necesidad de actualización
2. **Soporte técnico** recibe solicitud y valida información
3. **Equipo de desarrollo** implementa cambios
4. **Soporte técnico** verifica y aprueba la actualización

### Criterios de Éxito del Proyecto
1. Landing page institucional completamente funcional y responsive
2. Sistema de comunicación efectivo entre stakeholders para actualizaciones
3. Secciones de información estática (historia, promociones, contacto) operativas
4. Sección de comunicados/novedades actualizable
5. **Integración funcional con estación meteorológica del instituto**
6. **Interfaz de datos climáticos educativa y funcional para alumnos**
7. Sección de eventos institucionales informativa y actualizada
8. **Sistema robusto de manejo de datos meteorológicos en tiempo real**