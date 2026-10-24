Reglas de Negocio Möov
Documento consolidado para el desarrollo del sistema de administración de Möov. Integra las dos rondas de preguntas, elimina duplicados y conserva las decisiones confirmadas. Cada respuesta representa la regla vigente del negocio.

1. Alumnas

¿Puede haber dos alumnas con el mismo nombre?
Respuesta: Sí. El nombre y los apellidos no serán datos únicos.
¿Qué dato identificará de forma única a una alumna?
Respuesta: Un ID interno autoincrementable.
¿Qué significan los estados de una alumna?
Respuesta: Activa significa que continúa inscrita y tomando clases, aunque tenga una mensualidad pendiente. Baja temporal requiere autorización del administrador, se usa por lesión u otra causa validada y dura como máximo un mes. Baja significa que deja de ser alumna activa; su perfil e historial se conservan, pero su inscripción pierde vigencia.
¿Qué ocurre cuando una alumna se da de baja?
Respuesta: Deja de aparecer entre las alumnas activas, su inscripción activa pierde vigencia y el perfil pasa al historial. Puede reactivarse, pero deberá pagar la mensualidad del mes al que regresa y una nueva inscripción o reinscripción según corresponda. Los saldos pendientes permanecen visibles en su historial.
¿Una alumna siempre tendrá tutor y contacto de emergencia?
Respuesta: Las menores de edad deben tener un tutor registrado y un contacto de emergencia adicional. En las adultas el tutor es opcional, pero el contacto de emergencia es obligatorio. Solo se registrará un tutor y un teléfono principal por alumna.
¿Qué sucede cuando cambia una lesión, alergia u otro dato médico?
Respuesta: La información vigente se actualiza. Los cambios anteriores se conservan en la bitácora y pueden consultarse desde el historial de la alumna.
¿Qué ocurre cuando una alumna cambia de grupo?
Respuesta: Se actualiza su grupo activo y se conserva el historial de los grupos en los que estuvo, con sus periodos correspondientes.
¿Cómo se cobra el primer mes cuando una alumna entra a mitad de mes?
Respuesta: Se cobra únicamente el número de clases restantes. El cálculo es: mensualidad normal ÷ número total de clases programadas para ese grupo en el mes × clases restantes desde su ingreso.

2. Grupos, horarios y capacidad

¿Cuál es la capacidad de un grupo?
Respuesta: La capacidad predeterminada es de nueve alumnas, aunque el administrador podrá modificarla. Al llegar al límite, el sistema impedirá nuevas inscripciones y mostrará que el grupo está lleno.
¿Un grupo puede tener más de un horario?
Respuesta: Sí. Cada grupo podrá tener una o más reglas recurrentes de horario con día o días de la semana, hora de inicio, hora de fin y vigencia. A partir de esas reglas, el sistema generará o calculará las sesiones concretas de clase. Cada sesión podrá modificarse individualmente como excepción, sin alterar necesariamente la recurrencia del grupo.
¿Cuáles son los grupos y horarios actuales?
Respuesta: La configuración inicial será la siguiente:

Aéreo Kids 1, desde 7 años: lunes, miércoles y viernes, de 4:30 p. m. a 5:30 p. m.

Aéreo Kids 2, desde 7 años: martes y jueves, de 5:00 p. m. a 6:00 p. m.

Aéreo Kids 3, desde 7 años: martes y jueves, de 6:00 p. m. a 7:00 p. m.

Aéreo Jr. 1, desde 10 años: lunes, miércoles y viernes, de 5:30 p. m. a 6:30 p. m.

Aéreo Jr. 2, desde 10 años: martes y jueves, de 7:00 p. m. a 8:00 p. m.

Aéreo & Flex 1, desde 16 años: lunes, miércoles y viernes, de 6:30 p. m. a 8:00 p. m.

Aéreo Matutino, desde 16 años: martes y jueves, de 8:30 a. m. a 10:00 a. m.

Aéreo & Flex 2, desde 16 años: martes y jueves, de 8:00 p. m. a 9:30 p. m.

Aéreo Sabatino, desde 16 años: sábados, de 11:00 a. m. a 12:30 p. m.

¿Una alumna puede pertenecer simultáneamente a varios grupos?
Respuesta: En la primera versión solamente tendrá un grupo activo. Su historial sí podrá contener varios grupos anteriores.
¿El precio pertenece al grupo o puede personalizarse por alumna?
Respuesta: Cada grupo tendrá un precio estándar, pero el administrador podrá asignar un precio personalizado a una alumna. Por ejemplo, una alumna que asiste cinco días por semana puede pagar $1,450.
¿Qué ocurre si cambia el costo mensual de un grupo?
Respuesta: El nuevo precio estándar se aplica a las mensualidades futuras de las alumnas actuales del grupo. Los cargos y pagos anteriores conservan el precio histórico utilizado cuando fueron generados. Los precios personalizados podrán administrarse de forma individual.
¿Puede haber varios instructores?
Respuesta: Sí. El sistema permitirá registrar varias maestras y asignarlas a los grupos correspondientes.

3. Asistencia

¿El sistema tendrá control de asistencia?
Respuesta: Sí. La asistencia se administrará sobre sesiones concretas de clase, generadas a partir de las reglas recurrentes de horario de cada grupo.
¿Para qué se utilizará la asistencia?
Respuesta: Servirá como historial de participación y para determinar si corresponde conservar el adeudo y aplicar el recargo cuando una alumna asistió durante un mes que no pagó.
¿Cómo se determina la asistencia de una sesión?
Respuesta: La asistencia funcionará principalmente por excepción. Si una alumna tenía una sesión programada y no existe una cancelación o inasistencia registrada, el sistema asumirá que tomó la clase.
¿Quiénes aparecen como alumnas esperadas en una sesión?
Respuesta: Aparecen las alumnas activas del grupo correspondiente y, cuando aplique, alumnas de otros grupos que hayan reservado esa sesión como recuperación. El sistema distinguirá entre alumna regular y alumna en recuperación.
¿Qué ocurre si una alumna avisa previamente que no asistirá?
Respuesta: La alumna o su tutor podrá seleccionar una clase futura y confirmar que no asistirá. El sistema conservará que tenía originalmente asignada esa sesión, registrará el aviso y podrá liberar temporalmente su lugar para una recuperación de otra alumna.
¿Qué ocurre si una alumna falta sin aviso previo?
Respuesta: Una maestra, administrador o usuario autorizado podrá registrar la inasistencia después de la clase. Esa falta queda en el historial, pero no genera derecho a recuperación y no libera cupo retroactivamente.
¿Una inasistencia modifica la capacidad del grupo?
Respuesta: No. La inasistencia solo libera temporalmente un lugar en esa sesión específica cuando fue avisada antes de la clase. No cambia la capacidad del grupo ni elimina a la alumna de su grupo habitual.
¿Cómo se calcula la disponibilidad para recuperaciones?
Respuesta: La disponibilidad de una sesión considera su capacidad, las alumnas regulares que mantienen su lugar, las alumnas que avisaron que no asistirán y las recuperaciones ya reservadas. No se permitirá confirmar una recuperación si la sesión alcanzó su capacidad.
¿Cómo funciona una recuperación de clase?
Respuesta: Una alumna con derecho a recuperación podrá seleccionar una sesión compatible con cupo disponible. La recuperación queda relacionada con la clase original y con la inasistencia que la originó. Una misma inasistencia no puede generar más de una recuperación.
¿Una recuperación cambia a la alumna de grupo?
Respuesta: No. La alumna conserva su grupo habitual. La sesión de recuperación aparecerá en sus próximas clases como recuperación y la alumna aparecerá como esperada en esa sesión.
¿Qué grupos pueden usarse para recuperaciones?
Respuesta: La compatibilidad entre grupos será configurable. Una alumna solo podrá recuperar en grupos compatibles definidos por Möov; no dependerá únicamente del nombre, edad o categoría del grupo.
¿Hay límite de recuperaciones?
Respuesta: Sí. Cada grupo tendrá configurado un número máximo de clases que una alumna puede reponer por mes calendario. El administrador o un usuario con permiso para crear o modificar grupos podrá definir ese límite.
¿Existe un tiempo mínimo para cancelar antes de clase?
Respuesta: Sí. Cada grupo tendrá una configuración llamada "Tiempo para cancelar antes de clase", que define con cuánta anticipación debe avisar una alumna para conservar el derecho a recuperación. En la configuración inicial estará desactivada o en 0, por lo que inicialmente podrá avisar incluso poco antes de la clase.
¿Qué ocurre si cancela fuera del tiempo permitido?
Respuesta: La inasistencia podrá registrarse y el lugar podrá liberarse si la sesión todavía no ha comenzado, pero no generará derecho a recuperación. El sistema deberá informar claramente que la clase no podrá reponerse.
¿Cuándo se genera el derecho a recuperación?
Respuesta: Solo cuando la alumna tenía originalmente asignada la sesión, avisó que no asistiría antes de la clase, cumplió con el tiempo mínimo de cancelación configurado y no superó el máximo de reposiciones permitido para su grupo.
¿Qué operaciones administrativas podrán hacerse sobre asistencia y recuperaciones?
Respuesta: Los usuarios con permiso podrán registrar o corregir inasistencias, registrar una recuperación manualmente, cancelarla o cambiar la sesión seleccionada. Estas operaciones deberán respetar la capacidad y quedar registradas en la bitácora cuando corresponda.

4. Inscripciones y bajas temporales

¿Cuánto dura una inscripción?
Respuesta: Vence en la misma fecha del siguiente año, no después de 365 días exactos.
¿Cuál es el precio de inscripción y reinscripción?
Respuesta: Ambas cuestan actualmente $550. El administrador podrá modificar estos importes desde la configuración.
¿La reinscripción extiende la anterior o crea una nueva inscripción?
Respuesta: Crea una inscripción nueva y conserva el historial de las anteriores.
¿Se conserva el precio histórico de una inscripción?
Respuesta: Sí. Si el precio cambia, las inscripciones anteriores conservarán el monto que realmente se pagó.
¿Qué reglas tiene la baja temporal?
Respuesta: Solo puede autorizarla el administrador, puede iniciar en la fecha que seleccione, debe incluir una fecha estimada de regreso y no puede durar más de un mes. Si comienza a mitad de mes, el administrador decide el cobro aplicable según el caso.
¿Qué ocurre con la inscripción al regresar de una baja temporal?
Respuesta: Si continúa vigente, no se cobra otra inscripción. Si venció durante la baja temporal, se paga reinscripción al regresar.

5. Mensualidades, descuentos y recargos

¿Qué representa una mensualidad?
Respuesta: Es un cargo asociado a un mes y año específicos. Registra el mes que se está pagando y, por separado, la fecha en que se recibió el dinero.
¿Cuándo se genera la mensualidad?
Respuesta: El primer día de cada mes, a las 00:00, se genera automáticamente el cargo para todas las alumnas activas. Las alumnas dadas de baja no generan mensualidades nuevas.
¿Se permiten pagos parciales?
Respuesta: Sí. Una mensualidad puede recibir varios abonos, incluso en días y métodos de pago diferentes.
¿Cómo funciona el descuento por pronto pago?
Respuesta: La mensualidad debe liquidarse completamente entre los días 1 y 5 para recibir un descuento fijo de $150. Comenzar a abonar dentro de ese periodo no conserva el descuento si se termina de pagar después. El administrador podrá modificar el importe y el día límite.
¿Cómo funciona el recargo?
Respuesta: Cada mensualidad vencida recibe un solo recargo de $250 al comenzar el mes siguiente. La misma deuda no vuelve a crecer. El importe será configurable por el administrador.
¿Cuándo se da de baja automáticamente a una alumna por falta de pago?
Respuesta: Si la mensualidad y su recargo no se liquidan antes de terminar el mes siguiente, la alumna se da de baja antes de generar el cargo del nuevo mes. El saldo pendiente y una nota permanecen en su historial.
¿Debe la mensualidad del mes en que se da de baja?
Respuesta: Solamente si asistió a clases durante ese mes. Si dejó de asistir, no se genera un cargo nuevo al momento de la baja.
¿Puede pagar meses por adelantado?
Respuesta: Puede pagar como máximo un mes por adelantado y únicamente si no tiene mensualidades vencidas.
¿Los pagos anteriores conservan el precio de su momento?
Respuesta: Sí. Los cambios de precio no alteran mensualidades ni pagos históricos.

6. Pagos, cancelaciones y devoluciones

¿Puede un pago dividirse entre varios métodos?
Respuesta: Sí. Cada abono conserva su fecha, importe, método de pago y cuenta destino.
¿A qué adeudo se aplica un pago cuando existen varios?
Respuesta: El sistema lo aplica automáticamente al adeudo más antiguo, pero el administrador puede modificar la aplicación.
¿Qué ocurre si un pago fue capturado por error?
Respuesta: Se cancela, pero no se elimina. Debe conservar el motivo, la persona que realizó la cancelación y la fecha y hora. Una vez cancelado, deja de afectar los adeudos y las cuentas.
¿Quién puede cancelar pagos?
Respuesta: Cualquier usuario interno que tenga asignado el permiso específico para cancelar pagos.
¿Cómo se registran las devoluciones?
Respuesta: Se vinculan al pago original, indican la cuenta de la que sale el dinero y llevan un motivo. Pueden ser totales o parciales y generan el movimiento contable correspondiente.
¿Qué ocurre cuando una mamá sube un comprobante de transferencia?
Respuesta: El comprobante queda pendiente de validación. El administrador puede aprobarlo para marcarlo como pagado o rechazarlo indicando un motivo visible para la mamá.
¿Cómo se registran los pagos con tarjeta y las comisiones de Mercado Pago?
Respuesta: Möov absorbe la comisión. El sistema registra el ingreso bruto pagado por la alumna, la comisión como gasto y el ingreso neto depositado en Mercado Pago. En una etapa posterior podrán utilizarse enlaces de pago de Mercado Pago.

7. Cuentas, contabilidad y gastos

¿Las cuentas tendrán saldo inicial?
Respuesta: Sí. Cada cuenta podrá iniciar con un saldo y se actualizará con los movimientos confirmados de ingresos y egresos.
¿Método de pago y cuenta destino son lo mismo?
Respuesta: No. El método puede ser efectivo, transferencia o tarjeta. La cuenta destino puede ser Caja o Mercado Pago. Actualmente las transferencias y los pagos con tarjeta llegan a Mercado Pago; la tarjeta además genera comisión.
¿Qué información guardará cada gasto?
Respuesta: Fecha, concepto, categoría, monto, cuenta de origen, indicador de facturado, proveedor opcional, notas y usuario que lo registró. Solo se marcará si está facturado; no se guardarán archivos PDF ni XML.
¿Las categorías de gasto serán fijas?
Respuesta: No. El administrador podrá crear, editar y desactivar categorías.
¿Cómo funcionarán los gastos recurrentes?
Respuesta: El administrador podrá definir, editar o desactivar conceptos y montos recurrentes. El sistema los generará automáticamente cada mes como pendientes y solo descontará el dinero de la cuenta cuando se marquen como pagados.
¿Cuáles son los gastos recurrentes actuales?
Respuesta: La configuración inicial incluye:

Renta: $9,280 mensuales.

Internet: $550 mensuales.

Contadora: $696 mensuales.

Suscripciones: $780 mensuales.

Sueldo Paulina: $13,000 mensuales.

Sueldo Karely: $6,960 mensuales.

¿Cómo se calculará la proyección de ingresos?
Respuesta: El sistema sumará automáticamente las mensualidades de las alumnas activas y permitirá agregar ajustes manuales adicionales.

8. Portal para mamás y tutores

¿Cómo iniciarán sesión?
Respuesta: Podrán ingresar con correo y contraseña o solicitar un enlace de acceso temporal enviado a su correo.
¿Una misma cuenta puede tener varias alumnas asociadas?
Respuesta: Sí. Una mamá o tutor podrá iniciar sesión una sola vez y consultar a todas las alumnas relacionadas con su cuenta.
¿Qué podrán consultar en el portal?
Respuesta: Datos personales de sus hijas, historial de pagos, adeudos, inscripciones, avisos, notificaciones y comprobantes.

9. Avisos y notificaciones

¿Cuándo se enviarán los recordatorios de pago?
Respuesta: El día 1 se envía el recordatorio del mes actual; el día 15 se repite únicamente a quienes no hayan pagado; y durante los últimos tres días del mes se recuerda el pago pendiente y se avisa del recargo de $250.
¿Podrán activarse o desactivarse los tipos de notificación?
Respuesta: Sí. El administrador podrá configurar cada tipo y se conservará el historial de los mensajes enviados.
¿Cuál es la diferencia entre una notificación y un aviso?
Respuesta: Una notificación es importante o automática, como un recordatorio de mensualidad. Un aviso es un comunicado general no urgente, como la apertura de inscripciones a un curso.
¿A quiénes pueden dirigirse los avisos?
Respuesta: A todas las alumnas, a un grupo específico o a una alumna determinada.
¿Por qué canales se enviarán en la primera versión?
Respuesta: Aparecerán dentro del portal y también se enviarán por correo. WhatsApp queda para una etapa posterior.

10. Usuarios internos, roles y auditoría

¿Quiénes serán usuarios internos?
Respuesta: Administrador, asistente y maestra. Las mamás y tutores acceden por su propio portal y no son usuarios internos.
¿Qué acceso tendrá cada usuario?
Respuesta: El administrador tendrá acceso total. Los permisos de asistentes y maestras serán personalizados y el administrador decidirá a qué funciones puede acceder cada persona.
¿Una maestra debe tener usuario para existir en el sistema?
Respuesta: No. Puede estar registrada como empleada e instructora sin acceso. Solo tendrá credenciales cuando el administrador cree o habilite su usuario.
¿Cómo funcionarán los roles y permisos?
Respuesta: El administrador podrá crear y editar roles, y activar o desactivar permisos específicos para ver, registrar, editar o cancelar información.
¿Se permitirá borrar información?
Respuesta: No se eliminarán definitivamente registros relevantes. Se desactivarán o cancelarán para conservar el historial.
¿Qué debe registrar la bitácora?
Respuesta: Todos los cambios relevantes, incluyendo valor anterior, valor nuevo, usuario, fecha y hora. El historial no se mostrará permanentemente; se consultará al abrir la opción “Historial” del registro correspondiente.

11. Dashboard y reportes

¿Cómo se determina que una alumna tiene un adeudo?
Respuesta: Al iniciar el mes se genera el cargo para cada alumna activa. Mientras no se liquide, aparece como pendiente. Las alumnas dadas de baja no se mezclan con las activas, aunque sus saldos permanezcan en el historial.
¿Qué se considera ingreso del mes?
Respuesta: Solo pagos y abonos confirmados; los cargos pendientes no se cuentan como ingresos.
¿Qué mostrará la primera versión del dashboard?
Respuesta: Ingresos del mes, adeudos, egresos, alumnas activas, inscripciones próximas a vencer y capacidad general de Möov.
¿Qué reportes forman parte del objetivo final?
Respuesta: Ingresos por mes y por grupo, adeudos, alumnas morosas, alumnas activas, inscripciones por vencer, egresos, gastos por categoría, flujo de efectivo, estado financiero mensual y capacidad.
¿Cómo se mostrará la capacidad?
Respuesta: Primero habrá un resumen general con lugares ocupados y disponibles respecto de la capacidad total de Möov. Al abrirlo, se mostrará el detalle por grupo, por ejemplo, siete de nueve lugares ocupados y dos disponibles.

12. Sistema multiempresa

¿El sistema será exclusivo para Möov?
Respuesta: No. Se construirá con una base reutilizable para que en el futuro pueda ofrecerse a otros estudios.
¿La información de cada empresa estará separada?
Respuesta: Sí. Alumnas, grupos, usuarios, pagos, gastos, cuentas, configuración, roles y avisos pertenecerán a una sola empresa. Ningún estudio podrá consultar la información de otro.
¿Qué podrá personalizar cada empresa?
Respuesta: Nombre, logo, correo, teléfono, dirección, moneda, zona horaria, precio de inscripción y reinscripción, descuento por pronto pago, día límite, monto del recargo, capacidad predeterminada de grupos, cuentas y métodos de pago habilitados.

13. Lógica financiera central

¿Cómo se relacionan el adeudo, el pago y el movimiento de cuenta?
Respuesta: Serán tres registros relacionados, pero distintos. El adeudo representa lo que la alumna debe; el pago o abono representa el dinero que entregó y su método; y el movimiento contable representa la entrada o salida real en una cuenta.
¿Cómo funciona cuando una mensualidad se paga con varios métodos?
Respuesta: Si una alumna debe $950 y entrega $400 en efectivo y $550 por transferencia, el adeudo queda liquidado. Se registran dos abonos y dos movimientos: $400 en Caja y $550 en Mercado Pago.
