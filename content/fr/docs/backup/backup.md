---
title: Création d'une sauvegarde de données
linkTitle: Sauvegarde
date: 2023-07-20
weight: 20
description: >
  Au moyen d'une sauvegarde de données, un fichier de sauvegarde est créé contenant l'ensemble des données stockées sur l'appareil VitalControl.
catégories: [Sauvegarde de données]
étiquettes: [fichier de sauvegarde, clé USB]
translationKey: backup
---
{{% usb-drive/fr "Afin de réaliser une sauvegarde de données pour votre appareil," %}}

## Réaliser une sauvegarde de données {#perform-data-backup}

1. Ouvrez l'élément de menu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="{{< T "Device" >}}" /> `{{< T "Device" >}}` sur l'écran principal de votre appareil VitalControl.

2. Appelez le sous-menu `{{< T "DataManagement" >}}` et sélectionnez ensuite l'élément de sous-menu `{{< T "DataBackup" >}}`. Sélectionnez maintenant l'élément de menu `{{< T "CreateBackup" >}}` et confirmez avec `OK`. Vous êtes maintenant invité à insérer une clé USB :

   ![VitalControl : chemin du menu sauvegarde de données](../images/backup.png "Appeler la sauvegarde de données")

3. Insérez la clé USB (connecteur C) dans le connecteur situé en bas de l'appareil.

   <figure class="figure">
        <img src="/images/firmware/update/plug-in-dual-usb-stick.svg" class="border border-2 figure-img img-fluid rounded p-3" style="max-width: 500px; width: 100%;" align="bottom" alt="VitalControl: Insérer une clé USB" title="Insérer une clé USB" />
        <a name="AnschlussBarcodescanner" ><figcaption class="figure-caption fs-6">Figure 2 : Insertion de la clé USB dans le VitalControl</figcaption></a>
   </figure>

4. Une fois que l'appareil a détecté l'insertion de la clé USB, la sauvegarde de données démarre automatiquement. La collecte, la compression et l'écriture des données de sauvegarde peuvent prendre une minute ou plus. Lorsque la sauvegarde est terminée, un message de succès s'affiche :

   ![VitalControl : message de succès de la sauvegarde](../images/backup-done.png "Succès de la sauvegarde de données")

5. La sauvegarde de données est maintenant créée. Vous trouverez le fichier créé `backup.vcu` dans le répertoire `backup` de votre clé USB. Le fichier de sauvegarde nécessite environ 1 Mo d'espace de stockage sur la clé USB.

   ![Clé USB avec fichier de sauvegarde VitalControl](../images/backup-file.png "Clé USB avec fichier de sauvegarde")

   {{% alert title="Astuce" %}}
  Si un fichier `backup.vcu` existe déjà dans le répertoire `backup` de votre clé USB, ce fichier sera renommé. Le nouveau nom du fichier est composé de la chaîne initiale `backup` et de la date et de l'heure de création du fichier de sauvegarde (par exemple `backup_2023-07-17_12-50-37.vcb`). Le fichier de sauvegarde nouvellement écrit est toujours nommé `backup.vcu`.
    {{% /alert %}}

6. Le fichier de sauvegarde créé peut être utilisé pour [restaurer](../restore) les données stockées sur n'importe quel appareil VitalControl si nécessaire.
