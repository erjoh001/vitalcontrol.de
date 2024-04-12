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

4. Une fois que l'appareil a détecté l'insertion de la clé USB, une fenêtre de confirmation apparaît. Accordez cette fenêtre contextuelle avec `Oui` pour démarrer la restauration des données. La décompression et la restauration de la sauvegarde peuvent prendre une minute ou plus. Lorsque la restauration des données est terminée, un message de réussite est affiché :

   ![VitalControl: message de réussite de la restauration des données](../images/restore-done.png "Message de réussite de la restauration des données")

5. Les données de sauvegarde ont été restaurées avec succès sur l'appareil VitalControl.
