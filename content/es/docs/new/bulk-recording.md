---
title: "Registro masivo de un grupo de animales comprados"
linkTitle: "Registro-masivo"
date: 2023-07-28T13:25:28+02:00
weight: 15
draft: false
slug: bulk-recording
description: >
  Utiliza el escáner de códigos de barras para registrar una variedad de animales.
categorías: [Registro-masivo]
etiquetas: [Registro-masivo]
translationKey: new/bulk-recording
---
## Registro granel {#bulk-recording}

Con la ayuda del registro masivo, puedes capturar un gran número de animales en poco tiempo y guardarlos en tu dispositivo. Utiliza el escáner de códigos de barras para escanear los códigos de las etiquetas de oreja y la fecha de nacimiento en los pasaportes del ganado. El animal se guarda automáticamente y puedes escanear el siguiente pasaporte inmediatamente. Para realizar el registro masivo de animales, procede de la siguiente manera:

1. Conecta el escáner de códigos de barras al VitalControl usando el cable.

2. En la pantalla principal de tu dispositivo VitalControl, selecciona el ítem del menú <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="Nuevo animal" /> `{{<T "New" >}}` y presiona el botón `{{<T "Ok" >}}`.

3. Se abre un submenú. Usa las teclas de flecha ◁ ▷ △ ▽ para seleccionar el ítem del menú <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Registro masivo" /> `{{<T "BulkRecording" >}}` y confirma con `{{<T "Ok" >}}`.

4. Se abre otro submenú, que contiene un campo para el número de etiqueta de oreja del animal y otro campo para la fecha de nacimiento del animal. Primero escanea el código de barras del número de etiqueta de oreja. El borde del campo cambia de rojo a verde. Luego escanea la fecha de nacimiento. El borde se vuelve verde brevemente antes de que ambos bordes aparezcan de nuevo en rojo. El contador debajo del símbolo de pasaporte <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Pasaportes de animales" title="Pasaportes de animales" /> en la parte superior de la pantalla se incrementa de 0 a 1. El primer animal ha sido guardado. Continúa y escanea los otros pasaportes del ganado. Después de cada pasaporte escaneado, el contador debajo del símbolo de pasaporte <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Pasaportes de animales" title="Pasaportes de animales" /> aumenta en uno. El contador debajo del símbolo del grupo de animales <img src="/icons/header/group.svg" width="35" align="bottom" alt="Grupo de animales"  title="Grupo de animales" /> también aumenta en uno.

{{% alert title="Sugerencia" %}}
El contador debajo del símbolo de pasaporte <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Pasaportes de animales" title="Pasaportes de animales" /> muestra cuántos pases has escaneado de una vez sin salir de la pantalla de `{{<T "BulkRecording" >}}`. El contador debajo del símbolo de rebaño <img src="/icons/header/group.svg" width="35" align="bottom" alt="Nuevo animal" /> muestra cuántos pasaportes has escaneado en total. Este contador no se reinicia a cero si sales de la pantalla de `{{<T "BulkRecording" >}}`. El número es equivalente a tus entradas en el elemento del menú ['Compras'](../new-on-farm/purchased-animals/).
{{% /alert %}}

   ![VitalControl: Menú 'Nuevo - Registro masivo'](../images/bulk-recording.png "Registro masivo")

{{% alert title="Sugerencia" %}}
Tienes más opciones de configuración dentro del elemento del menú `{{<T "BulkRecording" >}}`. Estas se explican a continuación. Como pasos preparatorios, siempre accede primero al elemento del menú `{{<T "BulkRecording" >}}` y luego procede como en las instrucciones.
{{% /alert %}}

{{% alert title="Sugerencia" %}}
Pueden aparecer mensajes de error durante el proceso de escaneo. En este caso, el escáner de código de barras emite un sonido y no es posible continuar escaneando. Reconoce el mensaje de error correspondiente en la pantalla de VitalControl y continúa escaneando.
{{% /alert %}}

### Fecha de nacimiento obligatoria {#birth-date-mandatory}

Con esta opción de configuración puedes determinar si se debe especificar la fecha de nacimiento al crear los animales. Si desactivas esta opción, solo tienes que escanear el código de barras para guardar un animal. ¡Para estos animales, sin embargo, se almacena la fecha actual como fecha de nacimiento! Esta función está activada por defecto. Para desactivarla, haz lo siguiente:

1. Usa el botón <img src="/icons/gear.svg" width="25" align="bottom" alt="Menú de configuración" /> `On/Off` para abrir el menú de configuración.

2. Usa las teclas de flecha △ ▽ para seleccionar la opción de configuración `{{<T "BirthDateMandatory" >}}` y confirma con `{{<T "Ok" >}}`.

3. El círculo amarillo simboliza que la función está activada. Un círculo gris simboliza que la función está desactivada.

4. Guarda la configuración y usa la tecla `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Guardar y regresar" /> para volver al elemento del menú <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Registro masivo" />&nbsp; `{{<T "BulkRecording" >}}`.

![VitalControl: Menú Nuevo Fecha de nacimiento obligatoria](../images/birthdate.png "Fecha de nacimiento obligatoria")

### Valores por defecto {#default-values}

Dentro del menú de configuración `{{<T "DefaultValues" >}}`, estableces estándares que se aplican a cada animal que creas. El proceso de creación con el escáner de código de barras permanece sin cambios como se describió anteriormente. Tienes la opción de configurar el tipo de ganado, género, raza y ubicación. Para configurar los `{{<T "DefaultValues" >}}`, procede de la siguiente manera:

1. Usa el botón <img src="/icons/gear.svg" width="25" align="bottom" alt="Menú de configuraciones" /> `On/Off` para abrir el menú de configuraciones.

2. Usa las teclas de flecha △ ▽ para seleccionar el ítem del menú `{{<T "DefaultValues" >}}` y confirma con `{{<T "Ok" >}}`.

3. Se abre un submenú con las diferentes opciones de configuración. Usa las teclas de flecha △ ▽ para seleccionar la opción de configuración deseada. Usa las teclas de flecha ◁ ▷ para seleccionar la configuración deseada.

4. Guarda las configuraciones y usa la tecla `F1`&nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Guardar y regresar" /> para volver al ítem del menú <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Registro masivo" />&nbsp; `{{<T "BulkRecording" >}}`.

   ![VitalControl: Menú Nuevo Valores por defecto](../images/defaultvalues.png "Valores por defecto")
 
### Valores registrados {#recorded-values}

Dentro del menú de configuración `{{<T "RecordedValues" >}}`, puedes especificar qué valores deben capturarse además del número de etiqueta de la oreja y la fecha de nacimiento. Puedes elegir entre `{{<T "Breed" >}}`, `{{<T "Sex" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "CurrentWeight" >}}`, `{{<T "BirthWeight" >}}` y `{{<T "TypeAnimal" >}}`. Tan pronto como configures al menos un valor, el proceso cambia durante el escaneo. Primero escanea el número de etiqueta de la oreja y la fecha de nacimiento. Luego usa las teclas de dirección △ ▽ para seleccionar los valores a configurar y establece los valores. Luego guarda tus entradas con la tecla `F3`. ¡Solo entonces se crea el animal! Para configurar los valores a registrar, procede de la siguiente manera:

1. Usa el botón <img src="/icons/gear.svg" width="25" align="bottom" alt="Menú de configuraciones" /> `On/Off` para abrir el menú de configuraciones.

2. Usa las teclas de flecha △ ▽ para seleccionar el ítem del menú `{{<T "RecordedValues" >}}` y confirma con `{{<T "Ok" >}}`.

3. Seleccione el valor deseado para ser registrado con las teclas de flecha △ ▽ y confirme con `{{<T "Ok" >}}`. Aparece un círculo amarillo. Si desea desactivar el valor a registrar, confirme nuevamente con `{{<T "Ok" >}}`. El círculo amarillo desaparece.

4. Guarde los ajustes y utilice la tecla `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Guardar y volver" /> para volver al ítem del menú <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Registro masivo" />&nbsp; `{{<T "BulkRecording" >}}`.

5. Si desea desactivar todos los valores a registrar nuevamente, seleccione la opción de configuración `{{<T "EnableAllResetOrder" >}}` en el ítem del menú `{{<T "RecordedValues" >}}` y confirme con `{{<T "Ok" >}}`.

   ![VitalControl: Menú Nuevos valores de registro](../images/recordvalues.png "Valores de registro")
