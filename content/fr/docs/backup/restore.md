---
title: "Restoring a data backup"
linkTitle: "Restaurer"
date: 2023-07-20
weight: 20
description: >
 Via a data restore, the entire data of a VitalControl device can be restored on a different device using a backup file.
---
{{% usb-drive/en "In order to restore a data backup to you VitalControl device," %}}

On this USB flash drive, a directory `backup` must exist, which must held a valid **data backup file `backup.vcu`**.

![USB-flash drive with backup file VitalControl](../images/backup-file.png "USB-flash drive with backup file")

{{% alert title="Note" %}}
Inside the directory `backup` of your USB flash drive, you may find several backup files with extension `.vcu`. The VitalControl device always restores the backup data form the file named `backup.vcu`, which is always the newest file. If you want to restore data from an older backup file (which contains the backup date in the file name), you have to rename this older backup file to `backup.vcu` before performing data restore!
{{% /alert %}}

## Data restoration to VitalControl device

1. Open the menu item &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `Device` in the main screen of the VitalControl device to which you want to restore the data.

2. Invoke the submenu `Data management` and select the submenu item `Data backup` afterwards. Now select the menu item `Restore backup` and confirm with `OK`. You are now asked to insert an USB flash drive:

   ![VitalControl: menu path data restore](../images/restore.png "Restoring from backup file")

3. Insert the USB flash drive (C plug) into the connector at the bottom of the device.

   ![VitalControl: insert USB flash drive](/images/firmware/update/plug-in-dual-usb-stick.svg "Plug in USB flash drive")

4. Once the device detected insertion of the USB stick, a confirmation window appears. Acknowledge this popup with `Yes` to start the data restore. Decompressing and restoring the backup may take a minute or longer. When the data restore is complete, a success message is displayed:

   ![VitalControl: success message data restore](../images/restore-done.png "Success message data restore")

5. Backup data were successfully restored to VitalControl device.
