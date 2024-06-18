---
title: "Registrar animales"
linkTitle: "Registrar animales"
date: 2023-07-28T13:25:28+02:00
weight: 60
draft: false
slug: animal-registration
description: >
  Aquí puedes ajustar varios estándares preestablecidos de fábrica sobre el registro de nuevos animales a los requisitos de tu granja.
categories: [settings]
tags: [settings, Default values]
translationKey: settings/new-animals
---
## Establecer Valores por defecto {#set-default-values}
### Configurar peso(s) registrado(s) {#set-recorded-weights}

Aquí defines qué peso se registra y guarda al crear nuevos animales en tu granja. Para configurar el peso registrado en tu dispositivo, procede de la siguiente manera.

1. En la pantalla principal de tu dispositivo VitalControl, selecciona el ítem del menú <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` y presiona la tecla `{{<T "Ok" >}}`.

2. Se abre un submenú en el que se muestran varias configuraciones. Usa las teclas de flecha △ ▽ para seleccionar `{{<T "RegistrationAnimals" >}}`. Confirma con `{{<T "Ok" >}}`.

3. Se abre otro submenú en el que puedes usar las teclas de flecha △ ▽ para alternar entre los campos de configuración para `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` y `{{<T "AssignmentEartagNr" >}}`. Selecciona `{{<T "DefaultValues" >}}` y confirma con `{{<T "Ok" >}}`.

4. El área de `{{<T "WeightRecorded" >}}` se selecciona automáticamente. Usa las teclas de flecha ◁ ▷ para seleccionar el peso a capturar.

    ![VitalControl: ajustes del menú Configurar peso(s) registrado(s)](../images/recordweights.png "Configurar peso(s) registrado(s)")

{{% alert title="Consejo" %}}
 Selecciona `{{<T "None" >}}` si: los animales se crean automáticamente en segundo plano (mediante escaneo de transpondedor), no hay una báscula disponible en la granja y no se desean valores estimados, los pesos al nacer son desconocidos.
{{% /alert %}}

### Configurar edad al registrarse {#set-age-at-registration}
{{% alert title="Consejo" %}}
Basado en la edad ingresada aquí, el dispositivo calcula la fecha de nacimiento que se sugiere para un animal creado manualmente o que se usa para la creación automática en segundo plano (mediante escaneo de transpondedor). Para granjas lecheras, ingresa la edad en días en la que los terneros recién nacidos se registran en VitalControl. Para granjas de engorde, se debe ingresar la edad promedio de los terneros comprados aquí. El rango de valores permitido es de 0 a 99 días.
{{% /alert %}}

Para configurar la edad al crear en su dispositivo, proceda de la siguiente manera:

1. En la pantalla principal de su dispositivo VitalControl, seleccione el elemento del menú <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` y presione la tecla `{{<T "Ok" >}}`.

2. Se abre un submenú en el que se muestran varios ajustes. Utilice las teclas de flecha △ ▽ para seleccionar `{{<T "RegistrationAnimals" >}}`. Confirme con `{{<T "Ok" >}}`.

3. Se abre otro submenú en el que puede usar las teclas de flecha △ ▽ para alternar entre los campos de configuración para `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` y `{{<T "AssignmentEartagNr" >}}`. Seleccione `{{<T "DefaultValues" >}}` y confirme con `{{<T "Ok" >}}`.

4. Utilice las teclas de flecha △ ▽ para seleccionar la `{{<T "AgeRegistration" >}}`.

5. Utilice las teclas de flecha ◁ ▷ para establecer la edad al crear.

    ![VitalControl: configuración del menú Establecer edad al registro](../images/ageatregistration.png "Establecer edad al registro")

### Establecer sexo {#set-sex}

Aquí define qué sexo se sugiere (creación manual) o se adopta automáticamente (creación en el
fondo). Para definir el sexo al registrar un animal en su dispositivo, proceda de la siguiente manera.

1. En la pantalla principal de su dispositivo VitalControl, seleccione el elemento del menú <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` y presione la tecla `{{<T "Ok" >}}`.

2. Se abre un submenú en el que se muestran varios ajustes. Utilice las teclas de flecha △ ▽ para seleccionar `{{<T "RegistrationAnimals" >}}`. Confirme con `{{<T "Ok" >}}`.

3. Se abre otro submenú en el que puede usar las teclas de flecha △ ▽ para alternar entre los campos de configuración para `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` y `{{<T "AssignmentEartagNr" >}}`. Seleccione `{{<T "DefaultValues" >}}` y confirme con `{{<T "Ok" >}}`.

4. Utilice las teclas de flecha △ ▽ para seleccionar el `{{<T "Sex" >}}`.

5. Utilice las teclas de flecha ◁ ▷ para establecer el sexo al crear.

    ![VitalControl: configuración del menú Establecer sexo](../images/setsex.png "Establecer sexo")

### Establecer tipo de animal {#set-type-of-animal}

Aquí define qué tipo de animal se registra al crear nuevos animales en su granja. Para definir el tipo de animal al crearlo en su dispositivo, proceda de la siguiente manera:

1. En la pantalla principal de su dispositivo VitalControl, seleccione el elemento del menú <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` y presione la tecla `{{<T "Ok" >}}`.

2. Se abre un submenú en el que se muestran varios ajustes. Utiliza las flechas △ ▽ para seleccionar `{{<T "RegistrationAnimals" >}}`. Confirma con `{{<T "Ok" >}}`.

3. Se abre otro submenú en el que puedes usar las flechas △ ▽ para alternar entre los campos de ajuste para `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` y `{{<T "AssignmentEartagNr" >}}`. Selecciona `{{<T "DefaultValues" >}}` y confirma con `{{<T "Ok" >}}`.

4. Utiliza las flechas △ ▽ para seleccionar el `{{<T "TypeAnimal" >}}`.

5. Utiliza las flechas ◁ ▷ para establecer el tipo de animal al crear.

    ![VitalControl: ajustes del menú tipo de animal](../images/typeofanimal.png "tipo de animal")

### Establecer raza {#set-breed}

Aquí defines qué raza del ganado se registra al crear nuevos animales en tu granja. Para definir la raza al crear en tu dispositivo, procede de la siguiente manera:

1. En la pantalla principal de tu dispositivo VitalControl, selecciona el ítem del menú <img src="/icons/gear.svg" width="25" align="bottom" alt="Ajustes" /> `{{<T "Settings" >}}` y presiona la tecla `{{<T "Ok" >}}`.

2. Se abre un submenú en el que se muestran varios ajustes. Utiliza las flechas △ ▽ para seleccionar `{{<T "RegistrationAnimals" >}}`. Confirma con `{{<T "Ok" >}}`.

3. Se abre otro submenú en el que puedes usar las flechas △ ▽ para alternar entre los campos de ajuste para `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` y `{{<T "AssignmentEartagNr" >}}`. Selecciona `{{<T "DefaultValues" >}}` y confirma con `{{<T "Ok" >}}`.

4. Utiliza las flechas △ ▽ para seleccionar `{{<T "Breed" >}}`.

5. Utiliza las flechas ◁ ▷ para establecer la raza al crear.

    ![VitalControl: ajustes del menú tipo de animal](../images/breed.png "tipo de animal")

### Establecer Ubicación {#set-whereabouts}

Aquí defines qué ubicaciones se asignan a los animales al crear nuevos animales de granja. Para definir la ubicación del animal de granja cuando se crea en tu dispositivo, procede de la siguiente manera:

1. En la pantalla principal de tu dispositivo VitalControl, selecciona el ítem del menú <img src="/icons/gear.svg" width="25" align="bottom" alt="Ajustes" /> `{{<T "Settings" >}}` y presiona la tecla `{{<T "Ok" >}}`.

2. Se abre un submenú en el que se muestran varios ajustes. Utiliza las flechas △ ▽ para seleccionar `{{<T "RegistrationAnimals" >}}`. Confirma con `{{<T "Ok" >}}`.

3. Se abre otro submenú en el que puedes usar las teclas de flecha △ ▽ para cambiar entre los campos de configuración para `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` y `{{<T "AssignmentEartagNr" >}}`. Selecciona `{{<T "DefaultValues" >}}` y confirma con `{{<T "Ok" >}}`.

4. Usa las teclas de flecha △ ▽ para seleccionar `{{<T "Whereabouts" >}}`.

5. Usa las teclas de flecha ◁ ▷ para establecer el paradero al crear.

    ![VitalControl: ajustes del menú paradero](../images/whereabout.png "paradero")

Guarda los ajustes y regresa al menú principal `{{<T "Settings" >}}` presionando la tecla `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Guardar y regresar" />&nbsp;.

## Autoregistro {#auto-registration}

Aquí defines el comportamiento del dispositivo cuando se escanea un nuevo transpondedor, que aún no es conocido por el dispositivo VitalControl. Para este caso, se pueden definir tres comportamientos diferentes.

{{% alert title = "Consejo" %}}
Cuando el usuario confirma la creación de animales, aparece una pantalla de entrada en la que el usuario puede ingresar los datos del nuevo animal a crear (género, fecha de nacimiento, etc.). Con la creación automática, los valores definidos en "Ajustes > Crear nuevos animales" se utilizan para todos los animales creados automáticamente para sexo, edad, etc. Aquí no son posibles ajustes específicos para cada animal.
{{% /alert %}}

Para definir el comportamiento cuando el animal del usuario se crea automáticamente en tu dispositivo, procede de la siguiente manera:

1. En la pantalla principal de tu dispositivo VitalControl, selecciona el ítem del menú <img src="/icons/gear.svg" width="25" align="bottom" alt="Ajustes" /> `{{<T "Settings" >}}` y presiona la tecla `{{<T "Ok" >}}`.

2. Se abre un submenú en el que se muestran varios ajustes. Usa las teclas de flecha △ ▽ para seleccionar `{{<T "RegistrationAnimals" >}}`. Confirma con `{{<T "Ok" >}}`.

3. Se abre otro submenú en el que puedes usar las teclas de flecha △ ▽ para cambiar entre los campos de configuración para `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` y `{{<T "AssignmentEartagNr" >}}`. Selecciona `{{<T "AutoRegistration" >}}` y confirma con `{{<T "Ok" >}}`.

4. El campo de preferencia `{{<T "AutoRegistration" >}}` se selecciona automáticamente. Usa las teclas de flecha ◁ ▷ para determinar el comportamiento del dispositivo al crear nuevos animales.

![VitalControl: configuración del menú Autoregistro](../images/autoregistration.png "Autoregistro")

## Asignación de ID de animal {#assignment-animal-id}

Aquí defines qué ID de animal se propone (derivada del número de transpondedor) o se utiliza (Consecutivo) al crear un nuevo animal en tu granja.

{{% alert title = "Consejo" %}}
Selecciona la opción "Consecutivo" si el número de establo que usas para la identificación visual del animal se asigna independientemente del número de transpondedor utilizado para la identificación electrónica. Los números de establo o collar se asignan entonces Consecutivomente dentro de un cierto rango (por ejemplo, 1 - 40) y luego no están directamente relacionados con los números de transpondedor utilizados. Selecciona la opción "Derivar del número de transpondedor" si deseas vincular el número de establo del animal directamente al número del transpondedor que se le asignó al animal. Esta opción es especialmente útil si usas etiquetas electrónicas amarillas para las orejas; el número del establo será entonces idéntico a los últimos dígitos del número de animal de diez dígitos impreso en la etiqueta amarilla.
{{% /alert %}}

Para definir la asignación de la ID de animal al crear el animal de granja en tu dispositivo, procede de la siguiente manera:

1. En la pantalla principal de tu dispositivo VitalControl, selecciona el elemento del menú <img src="/icons/gear.svg" width="25" align="bottom" alt="Configuración" /> `{{<T "Settings" >}}` y presiona la tecla `{{<T "Ok" >}}`.

2. Se abre un submenú en el que se muestran varias configuraciones. Usa las teclas de flecha △ ▽ para seleccionar `{{<T "RegistrationAnimals" >}}`. Confirma con `{{<T "Ok" >}}`.

3. Se abre otro submenú en el que puedes usar las teclas de flecha △ ▽ para alternar entre los campos de configuración para `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` y `{{<T "AssignmentEartagNr" >}}`. Selecciona `{{<T "AutoRegistration" >}}` y confirma con `{{<T "Ok" >}}`.

4. Usa las teclas de flecha △ ▽ para seleccionar `{{<T "AssignmentIDs" >}}`.

5. Usa las teclas de flecha ◁ ▷ para establecer la asignación de la ID de animal del animal de trabajo al crear.

6. Si seleccionas la configuración `{{<T "Consecutive" >}}`, tienes la opción de especificar la `{{<T "NextAnimalID" >}}`. Usa las teclas de flecha △ ▽ para seleccionar el área de `{{<T "NextAnimalID" >}}` y confirma con `{{<T "Ok" >}}`. Navega dentro del área usando las teclas de flecha ◁ ▷. Ahora puedes seleccionar un número usando las teclas de flecha △ ▽. El dispositivo ahora usará automáticamente este número para comenzar el conteo continuo desde allí. Además, puedes configurar si los números deben contarse de manera continuamente creciente o continuamente decreciente. Para hacerlo, usa las teclas de flecha ◁ ▷ para ir al símbolo 9/1. Usa las teclas de flecha △ ▽ para alternar entre contar de manera continuamente creciente o continuamente decreciente. Guarda la configuración usando la tecla `F1` o `{{<T "Ok" >}}` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Guardar y volver" />&nbsp;.

![VitalControl: configuración del menú asignación de ID de animal](../images/assignmentanimalid2.png "Asignación de ID de animal")

![VitalControl: configuración del menú asignación de ID de animal](../images/assignmentanimalid3.png "asignación de ID de animal")

{{% alert title = "Consejo" %}}
Solo al usar la opción `{{<T "Consecutive" >}}`: si has configurado usar rangos de números separados para animales machos y hembras al asignar el número de etiqueta de oreja, se almacena un número de animal siguiente para cada uno de machos, hembras y animales de sexo desconocido. Un símbolo colocado a la izquierda del número de animal indica para qué se usa el siguiente número de animal: ¿para macho ♀ o para hembra ♂ o para animales de sexo desconocido ♀♂?
{{% /alert %}}

### Dígito del nuevo ID {#digit-of-the-new-id}

Aquí defines la longitud que tiene un número de granero derivado del número de transpondedor para un nuevo animal en tu granja. El rango de valores posible es de 2 a 6 dígitos. Para definir la longitud del nuevo ID del animal de granja en tu dispositivo procede de la siguiente manera:

1. En la pantalla principal de tu dispositivo VitalControl, selecciona el ítem del menú <img src="/icons/gear.svg" width="25" align="bottom" alt="Configuración" /> `{{<T "Settings" >}}` y presiona la tecla `{{<T "Ok" >}}`.

2. Se abre un submenú en el que se muestran varias configuraciones. Usa las teclas de flecha △ ▽ para seleccionar `{{<T "RegistrationAnimals" >}}`. Confirma con `{{<T "Ok" >}}`.

3. Se abre otro submenú en el que puedes usar las teclas de flecha △ ▽ para alternar entre los campos de configuración para `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` y `{{<T "AssignmentEartagNr" >}}`. Selecciona `{{<T "AutoRegistration" >}}` y confirma con `{{<T "Ok" >}}`.

4. Usa las teclas de flecha △ ▽ para seleccionar `{{<T "AssignmentIDs" >}}`.

5. Usa las teclas de flecha ◁ ▷ para establecer el dígito del nuevo ID del animal de trabajo al crear.

    ![VitalControl: configuración del menú Dígito del nuevo ID](../images/digitofnewid.png "Dígito del nuevo ID")

### Desplazamiento a la derecha {#right-offset}

Aquí defines si también se tiene en cuenta un desplazamiento al derivar un número de granero del número de transpondedor. Sin desplazamiento, los últimos 2-6 dígitos del número de transpondedor se usarán como número de establo, con un desplazamiento de 1 se descartará el dígito más a la derecha, con un desplazamiento de 2 los dos dígitos más a la derecha, y así sucesivamente.

{{% alert title = "Sugerencia" %}}
Para ilustrar gráficamente el efecto de los parámetros establecidos, se muestra un número de transpondedor de quince dígitos debajo de la línea para configurar el desplazamiento. Un marco verde indica el número de establo que se derivaría del número de transpondedor con los ajustes actuales. Un cambio en los valores de ajuste "Longitud" y "Desplazamiento" conduce directamente a una actualización del número de establo derivado.
{{% /alert %}}

Para configurar el desplazamiento a la derecha del animal en su dispositivo, proceda de la siguiente manera:

1. En la pantalla principal de su dispositivo VitalControl, seleccione el elemento del menú <img src="/icons/gear.svg" width="25" align="bottom" alt="Configuración" /> `{{<T "Settings" >}}` y presione la tecla `{{<T "Ok" >}}`.

2. Se abre un submenú en el que se muestran varios ajustes. Utilice las teclas de flecha △ ▽ para seleccionar `{{<T "RegistrationAnimals" >}}`. Confirme con `{{<T "Ok" >}}`.

3. Se abre otro submenú en el que puede usar las teclas de flecha △ ▽ para alternar entre los campos de ajuste para `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` y `{{<T "AssignmentEartagNr" >}}`. Seleccione `{{<T "AutoRegistration" >}}` y confirme con `{{<T "Ok" >}}`.

4. Utilice las teclas de flecha △ ▽ para seleccionar `{{<T "OffsetRight" >}}`.

5. Utilice las teclas de flecha ◁ ▷ para establecer el área de desplazamiento derecho del animal de trabajo al crear.

    ![VitalControl: ajustes del menú desplazamiento derecho](../images/rightoffset.png "desplazamiento derecho")

Guarde los ajustes y regrese al menú principal <img src="/icons/gear.svg" width="25" align="bottom" alt="Configuración" /> `{{<T "Settings" >}}` presionando la tecla `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Guardar y volver" />&nbsp;.

## Asignación del número de la marca auricular {#assignment-ear-tag-number}

Aquí define si se utilizan uno o dos rangos de números al asignar el número de etiqueta de oreja en el curso del re-registro manual de animales. Para definir la asignación del número de etiqueta de oreja del animal de granja en su dispositivo, proceda de la siguiente manera:

1. En la pantalla principal de su dispositivo VitalControl, seleccione el elemento del menú <img src="/icons/gear.svg" width="25" align="bottom" alt="Configuración" /> `{{<T "Settings" >}}` y presione la tecla `{{<T "Ok" >}}`.

2. Se abre un submenú en el que se muestran varios ajustes. Utiliza las teclas de flecha △ ▽ para seleccionar `{{<T "RegistrationAnimals" >}}`. Confirma con `{{<T "Ok" >}}`.

3. Se abre otro submenú en el que puedes usar las teclas de flecha △ ▽ para alternar entre los campos de ajuste para `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` y `{{<T "AssignmentEartagNr" >}}`. Selecciona `{{<T "AssignmentEartagNr" >}}` y confirma con `{{<T "Ok" >}}`.

4. Utiliza las teclas de flecha ◁ ▷ para asignar el número de arete al animal de trabajo al crear.

    ![VitalControl: ajustes del menú Asignación del número de la marca auricular](../images/assignmenteartagnumber.png "Asignación del número de la marca auricular")

Guarda los ajustes y regresa al menú principal `{{<T "RegistrationAnimals" >}}` presionando la tecla `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Guardar y regresar" />&nbsp;.

Guarda los ajustes y regresa al menú principal <img src="/icons/gear.svg" width="25" align="bottom" alt="Ajustes" /> `{{<T "Settings" >}}` presionando la tecla `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Guardar y regresar" />&nbsp;.
