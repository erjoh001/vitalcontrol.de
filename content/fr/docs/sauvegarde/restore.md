---
title: "Restauration d'une sauvegarde de données"
linkTitle: "Restaurer"
date: 2023-07-20
weight: 20
description: >
 Grâce à une restauration de données, l'ensemble des données d'un appareil VitalControl peut être restauré sur un autre appareil à l'aide d'un fichier de sauvegarde.
---
{{% usb-drive/fr "Pour restaurer une sauvegarde de données sur votre appareil VitalControl," %}}

Sur cette clé USB, un répertoire `backup` doit exister, qui doit contenir un **fichier de sauvegarde de données valide `backup.vcu`**.

![Clé USB avec fichier de sauvegarde VitalControl](../images/backup-file.png "Clé USB avec fichier de sauvegarde")

{{% alert title="Note" %}}
À l'intérieur du répertoire `backup` de votre clé USB, vous pouvez trouver plusieurs fichiers de sauvegarde avec l'extension `.vcu`. L'appareil VitalControl restaure toujours les données de sauvegarde à partir du fichier nommé `backup.vcu`, qui est toujours le fichier le plus récent. Si vous souhaitez restaurer des données à partir d'un fichier de sauvegarde plus ancien (qui contient la date de sauvegarde dans le nom du fichier), vous devez renommer ce fichier de sauvegarde plus ancien en `backup.vcu` avant d'effectuer la restauration des données !
{{% /alert %}}

## Restauration des données sur l'appareil VitalControl

1. Ouvrez l'élément de menu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Appareil" /> `Appareil` à l'écran principal de l'appareil VitalControl sur lequel vous souhaitez restaurer les données.

2. Appelez le sous-menu `Gestion des données` et sélectionnez ensuite l'élément de sous-menu `Sauvegarde de données`. Sélectionnez maintenant l'élément de menu `Restaurer la sauvegarde` et confirmez avec `OK`. Vous êtes maintenant invité à insérer une clé USB :

   ![VitalControl : chemin du menu de restauration des données](../images/restore.png "Restauration à partir du fichier de sauvegarde")

3. Insérez la clé USB (connecteur C) dans le connecteur situé en bas de l'appareil.

   ![VitalControl : insérer la clé USB](/images/firmware/update/plug-in-dual-usb-stick.svg "Insérer la clé USB")

4. Once the device has detected the insertion of the USB key, a confirmation window appears. Grant this popup with `Yes` to start the data restoration. Decompressing and restoring the backup may take a minute or more. When the data restoration is complete, a success message is displayed:

   ![VitalControl: data restoration success message](../images/restore-done.png "Data restoration success message")

5. The backup data has been successfully restored on the VitalControl device.
