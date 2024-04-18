---
title: "Restauración de una copia de seguridad de datos"
linkTitle: "Restaurar"
date: 2023-07-20
weight: 20
description: >
 A través de una restauración de datos, se puede restaurar toda la información de un dispositivo VitalControl en un dispositivo diferente utilizando un archivo de copia de seguridad.
---
{{% usb-drive/es "Para restaurar una copia de seguridad de datos en su dispositivo VitalControl," %}}

En esta unidad flash USB, debe existir un directorio `backup`, que debe contener un **archivo de copia de seguridad válido `backup.vcu`**.

![Unidad flash USB con archivo de copia de seguridad VitalControl](../images/backup-file.png "Unidad flash USB con archivo de copia de seguridad")

{{% alert title="Nota" %}}
Dentro del directorio `backup` de su unidad flash USB, es posible que encuentre varios archivos de copia de seguridad con la extensión `.vcu`. El dispositivo VitalControl siempre restaura los datos de copia de seguridad del archivo llamado `backup.vcu`, que siempre es el archivo más reciente. Si desea restaurar datos de un archivo de copia de seguridad más antiguo (que contiene la fecha de la copia de seguridad en el nombre del archivo), debe renombrar este archivo de copia de seguridad más antiguo a `backup.vcu` antes de realizar la restauración de datos.
{{% /alert %}}

## Restauración de datos en el dispositivo VitalControl

1. Abra el elemento de menú &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Dispositivo" /> `Dispositivo` en la pantalla principal del dispositivo VitalControl al que desea restaurar los datos.

2. Invoque el submenú `Gestión de datos` y seleccione el elemento de submenú `Copia de seguridad de datos`. Ahora seleccione el elemento de menú `Restaurar copia de seguridad` y confirme con `OK`. Se le pedirá que inserte una unidad flash USB:

   ![VitalControl: ruta del menú para restaurar datos](../images/restore.png "Restaurando desde archivo de copia de seguridad")

3. Inserte la unidad flash USB (conector C) en el conector en la parte inferior del dispositivo.

![VitalControl: insertar unidad flash USB](/images/firmware/update/plug-in-dual-usb-stick.svg "Insertar unidad flash USB")

4. Una vez que el dispositivo detecte la inserción de la memoria USB, aparecerá una ventana de confirmación. Confirme esta ventana emergente con `Sí` para iniciar la restauración de datos. La descompresión y restauración de la copia de seguridad puede tardar un minuto o más. Cuando la restauración de datos esté completa, se mostrará un mensaje de éxito:


   ![VitalControl: mensaje de éxito de restauración de datos](../images/restore-done.png "Mensaje de éxito de restauración de datos")

5. Los datos de respaldo se restauraron correctamente en el dispositivo VitalControl.
