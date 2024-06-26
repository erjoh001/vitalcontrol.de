---
title: "Firmware update of your device"
linkTitle: Update
weight: 4
description: >
  By performing a firmware update, the firmware of your VitalControl device can be updated to the latest available versions.
---
First, make sure that a [newer firmware version](../versions/) is available for your device and, if needed, update the firmware of your device according to the following instructions.

## Required accessory {#required-accessory}

To install the update on your device, you need a dual USB flash drive (2-in-1 USB stick) Type-C/USB 3.0 with a USB C connector and a USB A connector. Such a dual USB flash drive is delivered together with your device. You may also purchase such an USB flash drive from different vendors.

![Dual USB flash drive (USB A / USB C)](/images/firmware/update/usb-dual-stick.svg "Dual USB flash drive")

## Preparation: download latest firmware {#preparation-download-latest-firmware}

1. Insert your USB flash drive into the USB connector of your computer. Then create a new directory named 'update' in the root directory of your flash drive.

    ![Windows Explorer: USB flash drive with directory 'update'](../images/create-folder-update.png "USB flash drive: directory 'update'")

1. Download the [firmware file](/download/firmware.vcu) (file name: `firmware.vcu`) and store it in the previously created directory `update` of your USB flash drive. The update file requires approx. 2.5 MB of storage space on the flash drive.

    ![Windows Explorer: flash drive with firmware file 'firmware.vcu'](../images/save-firmware-file.png "Flash drive with firmware file")

1. Create a [data backup][] on your device.

    {{% alert title="Info" %}}
The data backup is a recommended precautionary measure. All existing animal and device data will be preserved when updating the firmware of the VitalControl device.
    {{% /alert %}}

[data backup]: {{< relref "../backup/backup/" >}}

## Perform firmware update {#perform-firmware-update}

1. Open the menu item `{{<T "Device" >}}` in the main screen of your VitalControl device.

1. Invoke the submenu `{{<T "Service" >}}`, select the menu item `{{<T "FirmwareUpdate" >}}` and confirm with `{{<T "Ok" >}}`. You are now asked to insert the USB flash drive you prepared already:

    ![VitalControl: menu path firmware update](../images/firmware-update.png "Firmware update")

1. Insert the USB flash drive (C plug) into the connector at the bottom of the device and confirm with `{{<T "Ok" >}}`.

    ![VitalControl: Insert USB flash drive](/images/firmware/update/plug-in-dual-usb-stick.svg "Insert USB flash drive")

    The device performs the update automatically. During the update, the display informs you about the progress of the update. After the update is completed, the device restarts automatically and displays a success message after the restart:

   ![VitalControl: Success message firmware update](../images/update-success.png "Success firmware update")

   The new firmware is now installed on your device.
