---
title: "Creating a data backup"
linkTitle: "Backup"
date: 2023-07-20
weight: 20
description: >
  By means of a data backup, a backup file is created which contains the entire data stored on the VitalControl device.
categories: [Data backup]
tags: [backup file, USB flash drive]
---
{{% usb-drive/en "In order to perform a data backup for your device," %}}

## Perform data backup

1. Open the menu item &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `Device` in the main screen of your VitalControl device.

2. Invoke the submenu `Data management` and select the submenu item `Data backup` afterwards. Now select the menu item `Create backup` and confirm with `OK`. You are now asked to insert an USB flash drive:

   ![VitalControl: menu path data backup](../images/backup.png "Invoke data backup")

3. Insert the USB flash drive (C plug) into the connector at the bottom of the device.

   ![VitalControl: insert USB flash drive](/images/firmware/update/plug-in-dual-usb-stick.svg "Insert USB flash drive")

4. Once the device detected insertion of the USB stick, the data backup is automatically started. Collecting, compressing and writing the backup data may take a minute or longer. When the backup is done, a success message is displayed:

   ![VitalControl: success message backup](../images/backup-done.png "Success data backup")

5. The data backup is now created. You will find the created file `backup.vcu` in the directory `backup` on your USB flash drive. The backup file requires approx. 1 MB of storage space on the flash drive.

   ![USB flash drive with backup file VitalControl](../images/backup-file.png "USB flash drive with backup file")

   {{% alert title="Hint" %}}
  If a file `backup.vcu` already exists in the `backup` directory of your USB flash drive, this file will be renamed. The new name of the file is composed of the leading string `backup` and the date and time when the backup file was created (e.g. `backup_2023-07-17_12-50-37.vcb`). The newly written backup file is always named `backup.vcu`.
    {{% /alert %}}

6. The created backup file can be used to [restore](../restore) the stored data to any VitalControl device if needed.
