---
title: Exportación de datos a memoria USB
linkTitle: A memoria USB
date: 2023-07-20
weight: 10
description: >
  Exportar archivos de datos CVS que contienen datos de animales y valores de medición almacenados en el dispositivo VitalControl a una memoria USB.
categories: [Exportación de datos]
tags: [Archivos CSV, Memoria USB]
translationKey: data-export/usb-drive
---
{{% usb-drive/es "Para realizar una exportación de los datos de su dispositivo," %}}

## Realizar la exportación de datos {#perform-data-export}	

1. Abra el elemento del menú &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Dispositivo" /> `{{<T "Device" >}}` en la pantalla principal de su dispositivo VitalControl.

2. Acceda al submenú `{{<T "DataManagement" >}}`, seleccione la opción de menú `{{<T "AnimalData" >}}` y confirme con `{{<T "Ok" >}}`.

3. Se abre otro submenú. Seleccione el punto de menú `{{<T "ExportAnimalData" >}}` y confirme con `{{<T "Ok" >}}`.

4. Se le pedirá que introduzca una memoria USB:

   ![VitalControl: Ruta del menú exportación de datos](../images/data-export.png "Invocar exportación de datos")

5. Inserte la memoria USB (conector tipo C) en el conector en la parte inferior del dispositivo.

   ![VitalControl: insertar memoria USB](/images/firmware/update/plug-in-dual-usb-stick.svg "Insertar memoria USB")

6. Una vez que el dispositivo detecte la inserción de la memoria USB, la exportación de datos se inicia automáticamente. Escribir los datos de respaldo puede tardar unos segundos. Cuando la exportación de datos haya finalizado, se mostrará un mensaje de éxito:

   ![VitalControl: mensaje de éxito en la exportación de datos](../images/success-data-export.png "Éxito en la exportación de datos")

7. La exportación de datos ahora está completa. Encontrará los cuatro archivos de exportación [archivos de exportación](../export-files/) dentro del directorio `export-csv` en su memoria USB.

   ![Memoria USB con archivos de exportación VitalControl](../images/export-files.png "Archivos de exportación en memoria USB")

   {{% alert title="Notas" %}}
  - Para evitar la sobreescritura accidental de los archivos de exportación, el nombre de cada archivo de exportación siempre incluye la fecha y la hora en que se creó el archivo. Asegúrese de usar la versión más reciente de los archivos de exportación si ha exportado datos de animales varias veces.
  - El tamaño de archivo de los archivos de exportación depende del número de animales en el VitalControl y del número de mediciones realizadas. En general, los archivos de exportación solo ocupan unos pocos kB de espacio de almacenamiento en la memoria USB.
   {{% /alert %}}
