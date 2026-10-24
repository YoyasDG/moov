# Modelo de Datos - Calculadora

## Objetivo

Definir las entidades del sistema, la información que almacenan y la relación entre ellas.

---

# 1. Usuario

## Descripción

Representa a una persona que utiliza la aplicación.

## Campos

- id
- nombre
- correo
- contraseña
- fechaRegistro

## Relaciones

- Un usuario puede tener muchas operaciones.

---

# 2. Operación

## Descripción

Representa un cálculo realizado por un usuario.

## Campos

- id
- usuario
- operación
- primerValor
- segundoValor
- resultado
- fecha

## Relaciones

- Pertenece a un usuario.

---

# 3. Favorito

## Descripción

Permite guardar operaciones importantes.

## Campos

- id
- operación
- nombre

## Relaciones

- Pertenece a una operación.

---

# Restricciones

## Usuario

- El correo debe ser único.

## Operación

- Debe pertenecer a un usuario.

## Favorito

- Una operación solo puede marcarse como favorita una vez.

---

# Campos calculados

Usuario

- cantidadOperaciones

Operación

- ninguno

Favorito

- ninguno

---

# Pendientes

- ¿Debe existir papelera?
- ¿Se pueden compartir operaciones?