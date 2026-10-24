# Especificación del MVP — Möov

**Versión:** 0.1  
**Estado:** Borrador de alcance  
**Producto:** Sistema de administración Möov

---

## 1. Objetivo del MVP

El MVP de Möov tiene como objetivo centralizar la operación administrativa, académica y financiera del estudio en un solo sistema.

Al finalizar esta versión, Möov debe poder administrar el ciclo completo de una alumna:

**registro → inscripción → asignación de grupo → asistencia → generación de mensualidad → pagos/abonos → adeudos → recargos → reinscripción o baja**

El sistema también deberá permitir conocer el estado financiero operativo del estudio mediante el registro de ingresos, egresos y movimientos por cuenta.

El objetivo no es únicamente digitalizar información, sino reducir el control manual y permitir responder rápidamente preguntas como:

- ¿Quiénes son las alumnas activas?
- ¿Quién debe?
- ¿Cuánto debe?
- ¿Qué pagos se recibieron?
- ¿Cuánto dinero entró este mes?
- ¿Cuánto dinero salió?
- ¿Cuánto debería existir en cada cuenta?
- ¿Qué inscripciones están próximas a vencer?
- ¿Qué grupos tienen lugares disponibles?
- ¿Quién asistió a cada clase?

---

# 2. Principios del sistema

## 2.1 Historial antes que eliminación

Los registros relevantes no se eliminarán permanentemente.

Las operaciones como bajas, cancelaciones o desactivaciones deberán conservar la información histórica necesaria para auditoría.

---

## 2.2 Separación financiera

El sistema tratará como conceptos distintos:

### Cargo o adeudo

Representa lo que una alumna debe.

Ejemplo:

Mensualidad septiembre 2026: $950.

### Pago o abono

Representa dinero entregado por una alumna.

Ejemplo:

$400 en efectivo.

### Movimiento contable

Representa la entrada o salida real de dinero en una cuenta.

Ejemplo:

Caja +$400.

Estas entidades estarán relacionadas, pero no serán intercambiables.

---

## 2.3 Información histórica inmutable

Los cambios futuros de precios, descuentos o configuraciones no modificarán operaciones históricas.

Por ejemplo, si una mensualidad fue generada por $950, continuará mostrando $950 aunque posteriormente el grupo cambie de precio.

---

## 2.4 Configuración antes que valores fijos

Los valores de negocio que puedan cambiar deberán ser configurables cuando corresponda.

Ejemplos:

- Precio de inscripción.
- Precio de reinscripción.
- Descuento por pronto pago.
- Día límite de pronto pago.
- Importe del recargo.
- Capacidad predeterminada de grupos.
- Precios de grupos.
- Cuentas.
- Métodos de pago.
- Categorías de gastos.

---

## 2.5 Multiempresa desde la arquitectura

Aunque el primer estudio que utilizará la aplicación será Möov, la arquitectura deberá permitir que en el futuro existan múltiples empresas.

La información de cada empresa estará aislada.

Una empresa no podrá consultar registros pertenecientes a otra.

---

# 3. Tipos de usuario

## 3.1 Administrador

Tendrá acceso completo al sistema.

Podrá administrar:

- Configuración.
- Alumnas.
- Grupos.
- Personal.
- Pagos.
- Gastos.
- Cuentas.
- Roles.
- Permisos.
- Avisos.
- Notificaciones.
- Reportes.

---

## 3.2 Asistente

Será un usuario interno.

Sus accesos dependerán de los permisos asignados por el administrador.

No tendrá privilegios implícitos únicamente por tener el rol de asistente.

---

## 3.3 Maestra

Podrá existir como empleada o instructora sin necesariamente tener acceso al sistema.

Si tiene usuario, sus accesos dependerán de los permisos asignados.

---

## 3.4 Mamá o tutor

Será un usuario externo.

Accederá mediante el portal para consultar la información de las alumnas relacionadas con su cuenta.

Una misma cuenta podrá estar asociada con varias alumnas.

---

# 4. Alcance funcional del MVP

## 4.1 Gestión de alumnas

El sistema permitirá registrar y administrar alumnas.

Cada alumna tendrá información personal, médica, tutor cuando corresponda, contacto de emergencia, grupo actual, estatus e información administrativa.

Se manejarán como mínimo los siguientes estados:

### Activa

La alumna continúa tomando clases y puede tener adeudos.

### Baja temporal

Debe ser autorizada por el administrador.

Tendrá fecha de inicio y fecha estimada de regreso.

No podrá durar más de un mes.

### Baja

La alumna deja de formar parte de las alumnas activas.

Su perfil, historial y adeudos anteriores permanecerán disponibles.

Su inscripción activa perderá vigencia.

---

## 4.2 Historial de alumna

Desde el perfil de cada alumna se deberá poder consultar:

- Historial de grupos.
- Historial de inscripciones.
- Historial de cargos.
- Historial de pagos y abonos.
- Adeudos.
- Historial de cambios relevantes de datos.
- Asistencia.

---

## 4.3 Gestión de grupos

El administrador podrá:

- Crear grupos.
- Editar grupos.
- Desactivar grupos.
- Definir precio mensual.
- Definir capacidad.
- Definir edad mínima cuando aplique.
- Asignar instructores.

Cada alumna podrá pertenecer a un solo grupo activo en esta versión.

Los grupos anteriores permanecerán en su historial.

---

## 4.4 Horarios y recurrencia de clases

Cada grupo podrá tener una o más reglas recurrentes de horario.

Una regla de horario deberá definir como mínimo:

- Día o días de la semana.
- Hora de inicio.
- Hora de fin.
- Fecha de inicio de vigencia.
- Fecha de fin de vigencia.

Ejemplo:

Aéreo Kids 1

- Vigencia: 1 de septiembre de 2026 al 31 de diciembre de 2026.
- Lunes, miércoles y viernes.
- 16:30 a 17:30.

A partir de estas reglas, el sistema generará o calculará las sesiones concretas de clase correspondientes.

Ejemplo:

- Lunes 7 de septiembre de 2026, 16:30–17:30.
- Miércoles 9 de septiembre de 2026, 16:30–17:30.
- Viernes 11 de septiembre de 2026, 16:30–17:30.

Cada sesión deberá poder administrarse individualmente sin alterar necesariamente la regla recurrente del grupo.

Una sesión específica podrá:

- Cambiar de fecha u horario.
- Cancelarse.
- Cambiar de instructor.
- Modificar excepcionalmente su capacidad.

Estas modificaciones deberán considerarse excepciones de la recurrencia original.

## 4.5 Capacidad

Cada grupo tendrá una capacidad máxima configurable.

Al alcanzar la capacidad:

- El grupo se mostrará como lleno.
- El sistema impedirá agregar una nueva alumna al grupo.

El dashboard mostrará tanto capacidad general como capacidad por grupo.

---

# 5. Asistencia y reposición de clases

El sistema administrará la asistencia sobre cada sesión de clase programada.

Cada sesión representa una clase concreta con fecha y horario determinados, generada a partir de las reglas recurrentes definidas para el grupo.

Ejemplo:

- Grupo: Aéreo Kids 1
- Fecha: lunes 7 de septiembre de 2026
- Horario: 16:30–17:30
- Capacidad: 9 alumnas

La asistencia funcionará principalmente por excepción.

Si una alumna tenía una clase programada y no existe ningún registro de cancelación o inasistencia, el sistema asumirá que tomó la clase.

Una maestra, administrador o usuario autorizado podrá registrar una inasistencia cuando corresponda.

La asistencia tendrá tres objetivos principales:

1. Mantener un historial de participación de cada alumna.
2. Participar en las reglas administrativas relacionadas con adeudos y recargos.
3. Administrar inasistencias y reposiciones de clases sin exceder la capacidad disponible.

---

## 5.1 Alumnas esperadas por sesión

Cada sesión tendrá una lista de alumnas esperadas.

Por defecto, serán las alumnas activas cuyo grupo corresponda a dicha sesión.

El sistema también podrá incluir alumnas provenientes de otros grupos que hayan reservado esa sesión como recuperación.

La lista deberá permitir distinguir entre:

- Alumna regular de la sesión.
- Alumna que asiste mediante una recuperación.

---

## 5.2 Asistencia por defecto

Cuando llegue la fecha de una sesión, las alumnas que tenían asignada esa clase se considerarán asistentes por defecto, siempre que no exista alguna excepción registrada.

No será necesario que la maestra confirme manualmente la asistencia de todas las alumnas en cada clase.

Solo será necesario registrar situaciones excepcionales, como:

- La alumna avisó previamente que no asistiría.
- La alumna faltó sin haber avisado.
- La alumna tenía una recuperación reservada y no asistió.

Una maestra, administrador o usuario autorizado podrá registrar o corregir una inasistencia cuando sea necesario.

---

## 5.3 Aviso de inasistencia

Una alumna o su tutor podrá avisar previamente que no podrá asistir a una de sus clases programadas.

El flujo será:

1. Consultar sus próximas clases.
2. Seleccionar la clase a la que no podrá asistir.
3. Seleccionar la opción `No podré asistir`.
4. Confirmar la inasistencia.

Una vez confirmada, el sistema deberá conservar el registro de que la alumna tenía originalmente asignada esa clase, pero avisó que no asistiría.

Ese lugar podrá quedar disponible para una posible recuperación de otra alumna.

---

## 5.4 Inasistencia registrada por personal

Si una alumna no avisó previamente que faltaría, pero finalmente no asistió, una maestra, administrador o usuario autorizado podrá registrar la inasistencia después de la clase.

Esta acción deberá modificar el historial de asistencia de esa sesión.

La alumna dejará de considerarse como asistente en esa clase.

Una inasistencia registrada de esta manera no generará derecho a recuperación. La clase se considerará perdida para efectos de reposición.

---

## 5.5 Liberación de cupo

Cuando una alumna confirme previamente que no asistirá a una sesión, su lugar podrá considerarse disponible para efectos de reposiciones.

Ejemplo:

Capacidad de la sesión: 9  
Alumnas regulares: 9  
Inasistencias avisadas: 2  
Lugares disponibles para recuperación: 2

Una inasistencia no modifica permanentemente la capacidad del grupo ni elimina a la alumna de su grupo habitual.

Únicamente libera temporalmente un lugar dentro de esa sesión específica.

Una falta registrada después de que la sesión haya ocurrido no libera cupo retroactivamente.

---

## 5.6 Recuperación de una clase

Cuando una alumna tenga derecho a recuperar una clase, podrá seleccionar otra sesión disponible, siempre que cumpla las reglas establecidas por Möov.

El flujo será:

1. Seleccionar la clase original a la que no asistirá.
2. Registrar o confirmar la inasistencia.
3. Consultar las sesiones compatibles disponibles.
4. Seleccionar una sesión con cupo.
5. Confirmar la recuperación.

El sistema deberá mantener relacionada la clase original con la sesión seleccionada como recuperación.

Una misma inasistencia no podrá generar más de una recuperación.

---

## 5.7 Compatibilidad entre grupos

Una alumna no podrá recuperar una clase en cualquier grupo.

El sistema deberá permitir definir qué grupos son compatibles entre sí para reposiciones.

Ejemplo conceptual:

- Grupos Kids podrán recuperar en determinados grupos Kids.
- Grupos Junior podrán recuperar en determinados grupos Junior.
- Grupos de adultos podrán recuperar únicamente en los grupos compatibles definidos por Möov.

La compatibilidad deberá ser configurable y no depender únicamente del nombre, edad o categoría del grupo.

---

## 5.8 Disponibilidad para reposiciones

Una sesión solamente podrá ofrecerse como recuperación cuando tenga capacidad disponible.

La disponibilidad deberá considerar:

- Capacidad de la sesión.
- Alumnas regulares que mantienen su lugar.
- Alumnas que avisaron previamente que no asistirán.
- Recuperaciones que ya fueron reservadas.

Conceptualmente:

`Cupos disponibles = capacidad - lugares ocupados`

Los lugares ocupados deberán incluir tanto a las alumnas regulares que mantienen su asistencia programada como a las alumnas que ya reservaron una recuperación.

---

## 5.9 Prevención de sobrecupo

El sistema no permitirá confirmar una recuperación cuando la sesión haya alcanzado su capacidad máxima.

Cuando no existan lugares disponibles:

- La sesión no podrá seleccionarse para recuperación.
- Podrá mostrarse como `Sin cupo`.

La disponibilidad deberá validarse nuevamente al momento de confirmar la recuperación para evitar que dos alumnas ocupen simultáneamente el último lugar disponible.

---

## 5.10 Reserva de recuperación

Cuando una recuperación sea confirmada:

- Se reservará inmediatamente un lugar en la sesión seleccionada.
- La alumna aparecerá dentro de las alumnas esperadas para esa sesión.
- Se conservará su grupo habitual.
- La sesión aparecerá dentro de sus próximas clases como recuperación.
- La recuperación quedará relacionada con la inasistencia que le dio origen.

La recuperación no representa un cambio de grupo.

---

## 5.11 Asistencia a una recuperación

Una alumna que tenga una recuperación reservada se considerará asistente por defecto cuando llegue la fecha de dicha sesión, de la misma manera que una alumna regular.

Si finalmente no asiste, una maestra, administrador o usuario autorizado deberá registrar la inasistencia correspondiente.

El sistema conservará la relación entre:

- Clase original.
- Inasistencia.
- Clase de recuperación.
- Resultado final de la recuperación.

---

## 5.12 Modificaciones administrativas

Los usuarios que tengan los permisos correspondientes podrán intervenir manualmente cuando sea necesario.

Como mínimo podrán:

- Registrar una inasistencia.
- Corregir una inasistencia.
- Registrar una recuperación manualmente.
- Cancelar una recuperación.
- Cambiar la sesión seleccionada para una recuperación.

Estas operaciones deberán respetar las reglas de capacidad y quedar registradas en la bitácora cuando corresponda.

---

## 5.13 Relación con adeudos y recargos

La asistencia participará en las reglas administrativas de cobranza.

Para efectos de estas reglas, el sistema deberá poder determinar si una alumna tomó una o más clases durante un periodo.

Una alumna se considerará que asistió cuando tenía una sesión asignada y no existe una excepción de inasistencia registrada.

Las inasistencias, avisos y recuperaciones deberán conservarse como historial.

---

## 5.14 Reglas de recuperación

### 5.14.1 Límite de recuperaciones por grupo

Cada grupo tendrá configurado un número máximo de clases que una alumna puede reponer por mes calendario.
Este valor será definido al crear o editar el grupo por:

- Administrador.
- Usuarios con permiso para crear o modificar grupos.

El límite podrá ser diferente entre grupos.

Ejemplo:

- Aéreo Kids 1: máximo 2 reposiciones por mes.
- Aéreo Jr. 1: máximo 1 reposición por mes.

El sistema deberá contabilizar las recuperaciones utilizadas por cada alumna y evitar nuevas reservas cuando alcance el límite correspondiente.

---

### 5.14.2 Inasistencia sin aviso previo

Si una alumna falta a una clase sin haber registrado previamente que no asistiría, la maestra o un usuario autorizado podrá marcarla como inasistencia.

Una inasistencia registrada de esta manera no genera derecho a recuperación.

La clase se considerará perdida para efectos de reposición.

Por lo tanto:

- La ausencia queda registrada en el historial.
- No se genera una recuperación disponible.
- La alumna no podrá utilizar posteriormente esa clase para reservar otra sesión.

---

### 5.14.3 Tiempo mínimo para cancelar una clase

Cada grupo tendrá una configuración denominada:

`Tiempo para cancelar antes de clase`

Este valor definirá con cuánta anticipación debe avisar una alumna que no asistirá para conservar el derecho a recuperación.

Ejemplo futuro:

`Tiempo para cancelar antes de clase: 6 horas`

Si la sesión comienza a las 17:00, la alumna deberá cancelar antes de las 11:00 para que esa clase pueda generar derecho a reposición.

---

### 5.14.4 Configuración inicial

Durante la primera etapa de operación de Möov, esta restricción estará desactivada o configurada en `0`.

Esto significa que inicialmente una alumna podrá avisar que no asistirá incluso poco antes de comenzar la clase y conservar el derecho a reposición.

Cuando Möov defina formalmente el tiempo mínimo de aviso, el administrador podrá modificar esta configuración sin necesidad de realizar cambios en el sistema.

---

### 5.14.5 Cancelación fuera del tiempo permitido

Cuando `Tiempo para cancelar antes de clase` tenga un valor mayor a cero y una alumna intente cancelar después del límite establecido:

- La inasistencia podrá registrarse.
- Su lugar podrá liberarse si la sesión todavía no ha comenzado.
- La ausencia quedará en su historial.
- No generará derecho a recuperación.

El sistema deberá informar claramente a la alumna que está cancelando fuera del periodo permitido y que no podrá reponer esa clase.

---

### 5.14.6 Generación del derecho a recuperación

Una clase podrá generar derecho a recuperación únicamente cuando:

1. La alumna tenía originalmente asignada esa sesión.
2. Registró que no asistiría antes de la clase.
3. Cumplió con el `Tiempo para cancelar antes de clase` configurado.
4. No ha superado el número máximo de reposiciones permitido para su grupo.

Si alguna de estas condiciones no se cumple, la clase no podrá utilizarse para reservar una recuperación.

# 6. Inscripciones

Cada inscripción tendrá:

- Alumna.
- Fecha de inicio.
- Fecha de vencimiento.
- Importe histórico.
- Estado.

La inscripción vencerá en la misma fecha del siguiente año.

Ejemplo:

15 de septiembre de 2026 → 15 de septiembre de 2027.

Una reinscripción generará un nuevo registro y no modificará la inscripción anterior.

Inscripción y reinscripción tendrán precios configurables.

---

# 7. Generación de mensualidades

El sistema generará automáticamente un cargo mensual para cada alumna activa el primer día de cada mes.

El cargo contendrá como mínimo:

- Alumna.
- Grupo relacionado.
- Mes.
- Año.
- Importe original.
- Descuentos aplicables.
- Recargos aplicables.
- Total.
- Total pagado.
- Saldo pendiente.
- Estado.

Las alumnas dadas de baja no generarán cargos nuevos.

---

# 8. Primer mes proporcional

Cuando una alumna ingrese después de iniciado el mes, su primera mensualidad se calculará según las clases restantes.

La fórmula será:

**precio mensual / total de clases programadas del grupo durante el mes × clases restantes desde la fecha de ingreso**

El resultado generará el cargo correspondiente a su primer mes.

---

# 9. Precio personalizado

Los grupos tendrán un precio mensual estándar.

El administrador podrá asignar un precio mensual personalizado a una alumna.

Cuando exista un precio personalizado vigente, este tendrá prioridad sobre el precio estándar del grupo para la generación de su mensualidad.

Los cargos históricos conservarán el precio utilizado cuando fueron generados.

---

# 10. Descuento por pronto pago

El sistema aplicará un descuento fijo configurable cuando una mensualidad quede completamente liquidada dentro del periodo de pronto pago.

Configuración inicial de Möov:

**Descuento:** $150 MXN  
**Periodo:** días 1 al 5 del mes

Realizar un abono durante ese periodo no será suficiente.

La mensualidad deberá quedar totalmente liquidada antes de terminar el día límite.

---

# 11. Recargos

Una mensualidad que permanezca vencida al comenzar el siguiente mes podrá recibir un único recargo.

Configuración inicial:

**Recargo:** $250 MXN

El mismo cargo no acumulará recargos adicionales posteriormente.

El importe del recargo será configurable.

---

# 12. Baja automática por falta de pago

Cuando una mensualidad y su recargo permanezcan sin liquidar durante todo el mes siguiente, la alumna será dada de baja antes de generar el siguiente cargo mensual.

El sistema deberá:

- Cambiar su estatus.
- Cancelar su inscripción activa.
- Conservar el adeudo.
- Conservar su historial.
- Registrar el motivo de baja.

La operación deberá ejecutarse antes del proceso de generación de mensualidades del nuevo mes.

---

# 13. Pagos y abonos

El sistema permitirá realizar pagos totales o parciales.

Un cargo podrá recibir múltiples abonos.

Cada abono almacenará:

- Alumna.
- Cargo al que se aplica.
- Fecha.
- Importe.
- Método de pago.
- Cuenta destino.
- Usuario que lo registró.
- Estado.

Si existen varios adeudos, el sistema propondrá aplicar el dinero al más antiguo.

Un usuario autorizado podrá cambiar la aplicación.

---

# 14. Métodos y cuentas

Método de pago y cuenta contable serán conceptos distintos.

Métodos iniciales:

- Efectivo.
- Transferencia.
- Tarjeta.

Cuentas iniciales:

- Caja.
- Mercado Pago.

Ejemplo:

Una transferencia puede tener:

**Método:** Transferencia  
**Cuenta destino:** Mercado Pago

---

# 15. Cancelación de pagos

Los pagos y abonos no se eliminarán.

Un usuario con el permiso correspondiente podrá cancelarlos.

La cancelación deberá registrar:

- Motivo.
- Usuario.
- Fecha.
- Hora.

Una operación cancelada dejará de afectar tanto el adeudo como el saldo de las cuentas.

---

# 16. Devoluciones

El sistema permitirá devoluciones totales o parciales.

Toda devolución deberá:

- Estar relacionada con el pago original.
- Especificar el importe.
- Especificar la cuenta de origen.
- Incluir un motivo.
- Generar el movimiento contable correspondiente.

---

# 17. Comprobantes de transferencia

El sistema permitirá registrar comprobantes de transferencia.

Estados mínimos:

### Pendiente de validación

El comprobante todavía no ha sido revisado.

### Aprobado

El administrador acepta el comprobante y se registra el pago correspondiente.

### Rechazado

El administrador rechaza el comprobante y registra un motivo visible para la mamá o tutor.

---

# 18. Cuentas y movimientos contables

Cada cuenta tendrá un saldo inicial.

Los saldos posteriores se determinarán mediante sus movimientos contables.

Los movimientos podrán representar:

- Ingresos.
- Egresos.
- Devoluciones.
- Comisiones.
- Ajustes autorizados.

El saldo mostrado por el sistema deberá ser explicable mediante el historial de movimientos.

---

# 19. Gastos

El sistema permitirá registrar gastos.

Cada gasto incluirá como mínimo:

- Fecha.
- Concepto.
- Categoría.
- Importe.
- Cuenta de origen.
- Facturado sí/no.
- Proveedor opcional.
- Notas.
- Usuario que lo registró.
- Estado.

Cuando el gasto sea marcado como pagado se generará el movimiento correspondiente en la cuenta.

---

# 20. Gastos recurrentes

El administrador podrá configurar gastos recurrentes.

Cada mes el sistema generará estos gastos como pendientes.

La generación del gasto no afectará todavía el saldo de la cuenta.

El saldo cambiará únicamente cuando el gasto sea marcado como pagado.

---

# 21. Dashboard

El dashboard inicial deberá mostrar como mínimo:

### Ingresos del mes

Suma de pagos y abonos confirmados recibidos durante el mes.

### Adeudos

Cargos con saldo pendiente.

### Egresos

Dinero confirmado que salió de las cuentas durante el mes.

### Alumnas activas

Cantidad actual de alumnas con estatus activo.

### Inscripciones por vencer

Inscripciones próximas a llegar a su fecha de vencimiento.

### Capacidad

Resumen de lugares ocupados y disponibles.

El detalle permitirá consultar la capacidad de cada grupo.

---

# 22. Portal para mamás y tutores

El MVP incluirá un portal externo.

El usuario podrá iniciar sesión mediante:

- Correo y contraseña.
- Enlace temporal enviado al correo.

Una cuenta podrá consultar todas las alumnas asociadas con ella.

El portal permitirá consultar:

- Datos personales.
- Historial de pagos.
- Adeudos.
- Inscripciones.
- Avisos.
- Notificaciones.
- Comprobantes.

---

# 23. Avisos y notificaciones

El sistema manejará dos conceptos.

## Notificaciones

Mensajes operativos o importantes.

Ejemplo:

Recordatorio de mensualidad pendiente.

## Avisos

Comunicados generales no urgentes.

Ejemplo:

Curso de verano.

Los avisos podrán dirigirse a:

- Toda la empresa.
- Un grupo.
- Una alumna.

En el MVP deberán aparecer dentro del portal y podrán enviarse también por correo.

---

# 24. Automatización de recordatorios

La configuración inicial de Möov será:

### Día 1

Recordatorio de mensualidad del mes actual.

### Día 15

Nuevo recordatorio únicamente a alumnas que continúen con saldo pendiente.

### Últimos tres días del mes

Recordatorio de pago y advertencia sobre el próximo recargo.

El administrador podrá activar o desactivar los diferentes tipos de notificación.

---

# 25. Usuarios, roles y permisos

El sistema no dependerá únicamente de roles rígidos.

Se implementarán permisos individuales que posteriormente podrán agruparse mediante roles.

Ejemplos conceptuales:

`students.view`  
`students.edit`  
`payments.view`  
`payments.create`  
`payments.cancel`  
`expenses.view`  
`expenses.create`  
`accounting.view`  
`attendance.manage`

El administrador podrá crear y modificar roles y determinar sus permisos.

---

# 26. Bitácora

El sistema mantendrá una bitácora de operaciones relevantes.

La bitácora deberá poder identificar:

- Registro afectado.
- Acción realizada.
- Valor anterior cuando aplique.
- Valor nuevo cuando aplique.
- Usuario.
- Fecha.
- Hora.

El historial se consultará bajo demanda y no estará permanentemente desplegado en las pantallas principales.

---

# 27. Configuración de empresa

Cada empresa podrá definir como mínimo:

- Nombre.
- Logo.
- Correo.
- Teléfono.
- Dirección.
- Moneda.
- Zona horaria.
- Precio de inscripción.
- Precio de reinscripción.
- Descuento de pronto pago.
- Día límite de pronto pago.
- Recargo.
- Capacidad predeterminada.
- Cuentas.
- Métodos de pago.

---

# 28. Fuera del alcance del MVP

Los siguientes elementos no forman parte de esta primera implementación:

### WhatsApp

Las notificaciones por WhatsApp quedan para una fase posterior.

### Pago online integrado

No se implementará todavía el cobro automático mediante API o links de pago de Mercado Pago.

Los pagos con terminal y las transferencias sí podrán registrarse administrativamente.

### Facturación electrónica

El sistema podrá indicar si un gasto está facturado, pero no generará facturas ni administrará archivos XML o PDF.

### Múltiples grupos activos por alumna

Una alumna tendrá únicamente un grupo activo durante el MVP.

### Reportería financiera avanzada

El sistema contará con dashboard y datos operativos, pero la suite completa de reportes financieros y analítica avanzada podrá evolucionar después del MVP.

---

# 29. Criterio general de terminación del MVP

El MVP podrá considerarse funcional cuando Möov pueda realizar su operación diaria sin depender de una hoja externa para controlar alumnas, grupos, mensualidades, pagos, adeudos, asistencia, inscripciones, cuentas y gastos.

Como escenario principal, el sistema deberá soportar correctamente el siguiente flujo:

Una alumna es registrada, se inscribe, entra a un grupo, asiste a clases, recibe automáticamente su mensualidad, obtiene o pierde el descuento según su fecha de liquidación, realiza uno o varios abonos, dichos abonos afectan las cuentas correctas, su saldo se actualiza y toda la operación puede posteriormente consultarse y auditarse.

También deberá funcionar correctamente el escenario contrario:

Una alumna recibe una mensualidad, asiste a clases, no la liquida, recibe el recargo correspondiente, continúa con saldo pendiente y finalmente es dada de baja conforme a las reglas configuradas, sin perder su información histórica ni sus adeudos.

---

# 30. Elementos que se definirán en documentos posteriores

Esta especificación define **qué debe hacer el MVP**.

Los siguientes documentos definirán **cómo lo hará técnicamente**:

`02_MODELO_DE_DATOS.md`  
Entidades, relaciones, campos, restricciones y ERD.

`03_ESTADOS_Y_AUTOMATIZACIONES.md`  
Estados de cargos, pagos, inscripciones, alumnas, comprobantes y gastos, además de procesos automáticos.

`04_ROLES_Y_PERMISOS.md`  
Catálogo completo de permisos y roles iniciales.

`05_FLUJOS_DE_USUARIO.md`  
Flujos de pantallas y operaciones principales.

`06_CRITERIOS_DE_ACEPTACION.md`  
Casos verificables para determinar cuándo cada funcionalidad está terminada.