---
title: "Actualización del firmware de su dispositivo"
linkTitle: Actualización
weight: 4
description: >
  Al realizar una actualización de firmware, el firmware de su dispositivo VitalControl puede actualizarse a las últimas versiones disponibles.
---
Primero, asegúrese de que haya una [versión de firmware más reciente](../versions/) disponible para su dispositivo y, si es necesario, actualice el firmware de su dispositivo siguiendo las siguientes instrucciones.

## Accesorio necesario {#required-accessory}

Para instalar la actualización en su dispositivo, necesita una memoria USB dual (pendrive 2 en 1) Tipo-C/USB 3.0 con un conector USB C y un conector USB A. Tal memoria USB dual se entrega junto con su dispositivo. También puede comprar una memoria USB de este tipo de diferentes proveedores.

![Memoria USB dual (USB A / USB C)](/images/firmware/update/usb-dual-stick.svg "Memoria USB dual")
 
## Preparación: descargar el último firmware {#preparation-download-latest-firmware}

1. Inserte su memoria USB en el conector USB de su computadora. Luego cree un nuevo directorio llamado 'update' en el directorio raíz de su memoria USB.

    ![Explorador de Windows: memoria USB con directorio 'update'](../images/create-folder-update.png "Memoria USB: directorio 'update'")

1. Descargue el [archivo de firmware](/download/firmware.vcu) (nombre del archivo: `firmware.vcu`) y guárdelo en el directorio `update` que creó anteriormente en su memoria USB. El archivo de actualización requiere aproximadamente 2.5 MB de espacio de almacenamiento en la memoria USB.

    ![Explorador de Windows: memoria USB con archivo de firmware 'firmware.vcu'](../images/save-firmware-file.png "Memoria USB con archivo de firmware")

1. Cree una [copia de seguridad de datos][] en su dispositivo.

    {{% alert title="Info" %}}
La copia de seguridad de datos es una medida de precaución recomendada. Todos los datos existentes de animales y del dispositivo se conservarán al actualizar el firmware del dispositivo VitalControl.
    {{% /alert %}}

[copia de seguridad de datos]: {{< relref "../backup/backup/" >}}

## Realizar la actualización de firmware {#perform-firmware-update}

1. Abra el elemento del menú `Dispositivo` en la pantalla principal de su dispositivo VitalControl.

1. Invoque el submenú `Servicio`, seleccione el elemento del menú `Actualización de firmware` y confirme con `OK`. Ahora se le pedirá que inserte la memoria USB que ya preparó:

![VitalControl: ruta del menú para actualización de firmware](../images/firmware-update.png "Actualización de firmware")

1. Inserte la memoria USB (conector tipo C) en el conector en la parte inferior del dispositivo y confirme con `OK`.

    ![VitalControl: Insertar memoria USB](/images/firmware/update/plug-in-dual-usb-stick.svg "Insertar memoria USB")

    El dispositivo realiza la actualización automáticamente. Durante la actualización, la pantalla le informa sobre el progreso de la actualización. Después de completar la actualización, el dispositivo se reinicia automáticamente y muestra un mensaje de éxito después del reinicio:

   ![VitalControl: Mensaje de éxito en la actualización de firmware](../images/update-success.png "Éxito en la actualización de firmware")

   El nuevo firmware está ahora instalado en su dispositivo.
