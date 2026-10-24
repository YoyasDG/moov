# Modelo de datos - Moov Aerial Studio

## Objetivo

Definir las entidades del sistema, la información que almacenan, y la relación entre ellas

# Usuario

## Descripción

Representa a una persona con acceso a el sistema

## ¿Por qué existe?

Permite a una persona física desempeñar actividades dentro del sistema

## Campos principales

- id
- nombre
- username
- contraseña
- 

## Relaciones

¿Con qué otras entidades se conecta?

## Restricciones

¿Qué reglas siempre deben cumplirse?

## No almacena

¿Qué información pertenece a otras entidades?

# Persona

# Rol

# Permiso

# Alumna

# Tutor

# Grupo

## Descripción

Representa un conjunto de alumnas que comparten un programa de entrenamiento, un precio mensual y una o más reglas de horario.

## ¿Por qué existe?

Porque las alumnas se organizan en grupos, y las mensualidades, horarios, sesiones y capacidad dependen de ellos.

## Campos

- id
- nombre
- edadMinima
- capacidad
- precioMensual
- estatus

## Relaciones

Pertenece a:

- Empresa

Tiene muchos:

- Horarios
- Sesiones
- Alumnas
- Cargos

Tiene asignados:

- Uno o varios instructores

## Restricciones

- Una alumna solo puede pertenecer a un grupo activo.
- Un grupo puede tener varios horarios.
- Un grupo puede estar desactivado sin eliminar su historial.

## No guarda

- Asistencias
- Pagos
- Recuperaciones

Solo mantiene la relación con ellas.

# Horario

# Sesión

## Descripción

Representa una clase específica que ocurre en una fecha y horario determinados.

## ¿Por qué existe?

Porque la asistencia, las recuperaciones y las cancelaciones ocurren sobre clases concretas, no sobre el horario recurrente.

## Campos

- id
- fecha
- horaInicio
- horaFin
- capacidad
- estado

## Relaciones

Pertenece a:

- Grupo

Puede tener:

- Muchas alumnas esperadas
- Muchas asistencias
- Recuperaciones

## Restricciones

- Se genera a partir de un horario.
- Puede modificarse individualmente.
- Puede cancelarse.

## No guarda

- El horario recurrente.
- La mensualidad.

# Inscripción

# Cargo (o Mensualidad)

# Pago

# Movimiento Contable

# Cuenta

# Gasto

# Categoría de Gasto

# Aviso

# Notificación