---
title: Data export to USB flash drive
linkTitle: To USB flash drive
date: 2023-07-20
weight: 10
description: >
  Export CVS data files containing animal data and measurement values stored on the VitalControl device to a USB flash drive.
categories: [Data export]
tags: [CSV files, USB flash drive]
translationKey: data-export/usb-drive
---
{{% usb-drive/en "In order to perform an export of your device data," %}}

## Perform data export {#perform-data-export}

1. Open the menu item &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `Device` in the main screen of your VitalControl device.

2. Invoke the submenu `Data management`, select the menu item `Animal data` and confirm with `OK`.

3. Another submenu opens. Select the menu item `Export animal data (csv)` and confirm with `OK`.

4. You are now asked to insert an USB flash drive:

   ![VitalControl: Menu path data export](../images/data-export.png "Invoke data export")

5. Insert the USB flash drive (C plug) into the connector at the bottom of the device.

   ![VitalControl: insert USB flash drive](/images/firmware/update/plug-in-dual-usb-stick.svg "Insert USB flash drive")

6. Once the device detected insertion of the USB stick, data export is automatically started. Writing the backup data may take a few seconds. When the data export finished, a success message is displayed:

   ![VitalControl: success message data export](../images/success-data-export.png "Success data export")

7. Data export is now complete. You will find the four created [export files](../export-files/) inside the directory `export-csv` on your USB flash drive.

   ![USB flash drive with export files VitalControl](../images/export-files.png "Export files on USB flash drive")

   {{% alert title="Notes" %}}
  - To prevent accidental overwriting of export files, the file name of each export file always includes the date and time when the file was created. Be sure to use the latest version of the export files if you have exported animal data multiple times.
  - The file size of the export files depends on the number of animals on the VitalControl and on the number of measurements performed. In general, the export files only occupy a few kB of storage space on the USB stick.
   {{% /alert %}}
   