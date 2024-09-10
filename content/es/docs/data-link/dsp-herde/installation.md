---
title: "Configuración de la Tecnología VitalControl:"
linkTitle: Configuración
date: 2023-08-04T12:21:53+02:00
draft: false
description: >
  Define los parámetros de sincronización para el intercambio de datos entre el software *Herde* y el dispositivo VitalControl.
weight: 10
categorías: [DSP Herde]
translationKey: DSPherde/installation
---
Antes del primer [intercambio de datos](../data-exchange/), se debe crear y configurar una vez el acoplamiento tecnológico con el dispositivo VitalControl.

{{% alert title="Atención" %}}
Antes de configurar el acoplamiento tecnológico, verifica si el software 'VCSynchronizer' está instalado en tu PC; este software es obligatorio para el intercambio de datos. Para hacerlo, abre el menú de inicio de Windows y busca en la lista de tus aplicaciones una entrada llamada 'Urban VitalControl'. Si no encuentras tal entrada, [instala](../../vcsynchronizer/installation/) el software `VCSynchronizer` en tu PC.
{{% /alert %}}

Para configurar la tecnología, procede de la siguiente manera:

## Crear nuevo conjunto de parámetros para el intercambio de datos con el dispositivo VitalControl

1. Dentro del software `Herde`, abre la ventana `Configuración`. Dependiendo de la configuración de tu interfaz de usuario, puedes abrir esta ventana a través del ítem de menú `Organización` en el menú principal (ítem de nivel superior _Configuración_), en el menú lateral o en tu caja de herramientas personalizada (horizontal o vertical).

   ![Software Herde: invocación del menú de configuración](../screenshots/settings.png "Herde: invocar Configuración")

1. Se abre una ventana emergente `Configuración`, en cuya barra lateral izquierda se listan numerosas categorías de configuración. Abre la categoría `Servicio` ➊ y selecciona la subcategoría `Tecnología` ➋.

1. En el encabezado del área principal derecha, ahora aparece un desplegable en el que se listan todos los conjuntos de parámetros tecnológicos definidos. El número de tecnologías configuradas se muestra a la derecha. Haz clic en el botón ![Software Herde: Crear nuevo conjunto de parámetros tecnológicos](/icons/new.png "Herde: Crear Acoplamiento Tecnológico") `Crear nuevo conjunto de parámetros tecnológicos` ➌.

   ![Software Herde: pantalla de configuración para tecnología](../screenshots/settings-technology.png "Herde: Configuración para Tecnología")

1. Se abre otra ventana emergente. Introduce `VitalControl` como **Nombre de la conexión** y `Urban VitalControl (Gen 2)` como **Tipo de Tecnología** y luego haz clic en el botón `Aceptar`.

   ![Software Herde: Crear nuevo conjunto de parámetros para el dispositivo VitalControl](../screenshots/new-technology.png "Crear nueva tecnología: VitalControl").

   El conjunto de parámetros para la tecnología `VitalControl` ahora está creado y debe configurarse en los siguientes pasos.

## Configuración: Ajustes básicos

Inicialmente, la pestaña `Ajustes básicos` está seleccionada en la pantalla mostrada, como se muestra en la figura a continuación. Realiza ajustes allí en las categorías `Programa externo` ➊, `Datos del animal` ➋, `Ubicaciones` ➌ y `Salida` ➍ según las condiciones específicas de tu granja.

   ![Software Herde: Configuración de ajustes básicos](../screenshots/basic-settings.png "Tecnología VitalControl: Ajustes básicos").
   
### Categoría `Programa externo` ➊

Para realizar el intercambio de datos entre VitalControl y Herde Plus, se necesita el software básico [VitalControl Synchronizer](../../vcsynchronizer) como programa auxiliar externo. Para la correcta función de este programa, se deben hacer algunos ajustes en la categoría `Programa externo` ➊.

- **Nombre del dispositivo para el intercambio de datos**:  
  Por defecto este campo está vacío. Sin embargo, se recomienda ingresar el nombre de tu computadora aquí. Para hacerlo, presiona el icono ![Software Herde: Crear nueva tecnología de acoplamiento](/icons/arrow-down.png "Herde: Crear acoplamiento tecnológico") `Flecha hacia abajo` en el extremo derecho del campo desplegable. Ahora se determinará y mostrará tu nombre de computadora para selección dentro de la lista desplegable. Una vez que el campo esté lleno con el nombre de tu computadora y esta configuración esté guardada, el intercambio de datos solo se puede activar desde tu computadora a partir de ahora.

- **Ejecutar en la ruta**:
  Por favor, introduce `%LOCALAPPDATA%\Urban\VitalControl\Synchronizer` en este campo de entrada. Esta es la ruta absoluta al programa `VitalControl Synchronizer` (o más específicamente al archivo `vcsynchronizer.exe`). Si el directorio objetivo para este programa ha sido cambiado durante la [instalación del VCSynchronizer](../../vcsynchronizer/installation), por favor introduce aquí el directorio objetivo seleccionado.

- **Programa HerdePlus 🡒 Tecnología**:  
  Este campo de entrada debe ser llenado con el valor `vc_imp.bat`. El archivo batch con el mismo nombre especifica la secuencia de operaciones durante la importación de datos.

- **Tecnología 🡒 Programa HerdePlus**:  
  Este campo de entrada debe ser llenado con el valor `vc_exp.bat`. El archivo batch con el mismo nombre especifica la secuencia de operaciones durante la exportación de datos.

### Categoría `Datos del Animal` ➋

Se deben realizar ajustes adicionales en la categoría 'Datos del animal' ➋ para que el intercambio de datos funcione completamente.

- **Número del animal**:  
  Esta configuración determina qué ID reciben los animales para su visualización en el dispositivo VitalControl:
  - Si has asignado IDs cortos (`Número de establo`, de 2 a 6 dígitos) a tus animales, deberías seleccionar el valor 'Número de establo' aquí: la ID mostrada de un animal en el VitalControl entonces corresponderá al número de establo asignado al animal.
  - Si **no** has asignado números de ID cortos a tus animales - esto es común en el sector de engorde, por ejemplo - entonces deberías seleccionar el valor `Número de etiqueta (5 dígitos)` aquí. La ID mostrada de un animal en el dispositivo VitalControl entonces corresponderá a los últimos 5 dígitos de la ID impresa en la etiqueta auricular amarilla del animal.
  
<br>

- **Número de transmisor**:  
  Esta configuración determina el número esperado para un animal durante el escaneo RFID:  
  - Si colocas un collar con un transpondedor a tus animales o pones un transpondedor auricular en tus animales -por ejemplo para identificación en el alimentador automático-, deberías seleccionar el valor 'Transpondedor' aquí.
  - Si tus animales o terneros llevan etiquetas auriculares electrónicas codificadas con el número de identificación nacional oficial de 15 dígitos de tu animal, que servirá para la identificación del animal durante toda su vida, deberías seleccionar el valor 'Número de etiqueta (15 dígitos)` aquí.

<br>

- **Edad mínima para la transferencia**:  
  Si se introduce `0` como valor para este campo de entrada, **todos los animales** serán transferidos al dispositivo VitalControl, independientemente de su edad. Un valor mayor que `0` define la edad mínima (en días) para que los animales sean transferidos. Por ejemplo, si **solo las vacas** deben ser transferidas al dispositivo, se debe ingresar aquí un valor de 600 días (= 20 meses) como la edad mínima.

### Categoría `Ubicaciones` ➌

Utiliza esta categoría para excluir animales en ciertas ubicaciones de la transferencia de datos al dispositivo. Para hacerlo, elimina la marca de verificación de la(s) ubicación(es) para las cuales **no** deseas transferir los animales alojados allí al dispositivo.

### Categoría `Salida` ➍

Marca la opción 'Salida en HERDEplus' aquí. De esta manera especificas que los animales que salieron del rebaño también se eliminan del dispositivo VitalControl durante la sincronización.
También marca la opción 'No existe en stock'. De esta manera especificas que los animales en el VitalControl que no son conocidos por el software `Herde` se eliminan del VitalControl durante la sincronización.

## Configuración: Ajustes específicos de la tecnología

A continuación, haz clic en la pestaña `Ajustes específicos de la tecnología` para determinar el alcance del intercambio de datos. Se recomienda marcar todas las casillas de verificación listadas allí excepto por la casilla `Guardar archivo de importación después del procesamiento`. La última casilla está destinada a fines diagnósticos y debe ser seleccionada solo si el personal de servicio lo requiere.

- **Edad máxima para la transferencia**:  
  Si se ingresa `0` aquí como valor, **todos los animales** serán transferidos al dispositivo VitalControl, independientemente de su edad. Un valor mayor que `0` define la edad máxima (en días) para los animales a ser transferidos. Si, por ejemplo, **solo terneros** deben ser transferidos al dispositivo, se debe ingresar aquí un valor de 90 días (= 3 meses) como edad máxima.

   ![Software Herde: Configuración Intercambio de datos](../screenshots/technology-specific-settings.png "Intercambio de datos: ajustes específicos").

## Guardar configuración de intercambio de datos

Presiona la tecla `Guardar (F2)` después de haber configurado todos los parámetros de configuración adecuadamente. El conjunto de parámetros para el intercambio de datos al dispositivo VitalControl ahora está guardado y listo para usarse.  
Realiza un [intercambio de datos](../data-exchange/) ahora para verificar si los ajustes estipulados son válidos para que puedas intercambiar datos exitosamente hacia y desde el dispositivo VitalControl.
