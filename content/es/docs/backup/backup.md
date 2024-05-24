---
title: "Creación de una copia de seguridad de datos"
linkTitle: "Copia de seguridad"
date: 2023-07-20
weight: 20
description: >
  Mediante una copia de seguridad de datos, se crea un archivo de respaldo que contiene todos los datos almacenados en el dispositivo VitalControl.
categories: [Copia de seguridad de datos]
tags: [archivo de respaldo, unidad flash USB]
translationKey: backup
---
{{% usb-drive/es "Para realizar una copia de seguridad de datos para su dispositivo," %}}

## Realizar copia de seguridad de datos {#perform-data-backup}

1. Abra el elemento de menú &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Dispositivo" /> `Dispositivo` en la pantalla principal de su dispositivo VitalControl.

2. Invoque el submenú `Gestión de datos` y seleccione posteriormente el elemento de submenú `Copia de seguridad de datos`. Ahora seleccione el elemento de menú `Crear copia de seguridad` y confirme con `OK`. Se le pedirá que inserte una unidad flash USB:

   ![VitalControl: ruta de menú copia de seguridad de datos](../images/backup.png "Invoque copia de seguridad de datos")

3. Inserte la unidad flash USB (conector tipo C) en el conector en la parte inferior del dispositivo.

   ![VitalControl: insertar unidad flash USB](/images/firmware/update/plug-in-dual-usb-stick.svg "Insertar unidad flash USB")

4. Una vez que el dispositivo detecte la inserción de la memoria USB, la copia de seguridad de datos se iniciará automáticamente. La recopilación, compresión y escritura de los datos de respaldo pueden tardar un minuto o más. Cuando se complete la copia de seguridad, se mostrará un mensaje de éxito:

   ![VitalControl: mensaje de éxito copia de seguridad](../images/backup-done.png "Éxito copia de seguridad de datos")

5. La copia de seguridad de datos ha sido creada. Encontrará el archivo creado `backup.vcu` en el directorio `backup` de su unidad flash USB. El archivo de respaldo requiere aproximadamente 1 MB de espacio de almacenamiento en la memoria flash.

   ![Unidad flash USB con archivo de respaldo VitalControl](../images/backup-file.png "Unidad flash USB con archivo de respaldo")

{{% alert title="Consejo" %}}
Si un archivo `backup.vcu` ya existe en el directorio `backup` de su unidad flash USB, este archivo será renombrado. El nuevo nombre del archivo está compuesto por la cadena principal `backup` y la fecha y hora en que se creó el archivo de respaldo (por ejemplo, `backup_2023-07-17_12-50-37.vcb`). El archivo de respaldo recién escrito siempre se llama `backup.vcu`.
{{% /alert %}}

6. El archivo de copia de seguridad creado se puede utilizar para [restaurar](../restore) los datos almacenados en cualquier dispositivo VitalControl si es necesario.
