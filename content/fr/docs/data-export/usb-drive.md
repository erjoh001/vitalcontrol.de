---
title: Exportation de données sur clé USB
linkTitle: Vers clé USB
date: 2023-07-20
weight: 10
description: >
  Exporter des fichiers de données CVS contenant des données animales et des valeurs de mesure stockées sur l'appareil VitalControl vers une clé USB.
categories: [Exportation de données]
tags: [Fichiers CSV, Clé USB]
translationKey: data-export/usb-drive
---
{{% usb-drive/fr "Afin de réaliser une exportation des données de votre appareil," %}}

## Réaliser l'exportation des données {#perform-data-export}

1. Ouvrez l'élément de menu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Appareil" /> `Appareil` dans l'écran principal de votre appareil VitalControl.

2. Accédez au sous-menu `Gestion des données`, sélectionnez l'élément de menu `Exporter les données animales (csv)` et confirmez avec `OK`. Il vous sera alors demandé d'insérer une clé USB :

   ![VitalControl : Chemin du menu exportation des données](../images/data-export.png "Lancer l'exportation des données")

3. Insérez la clé USB (connecteur C) dans le connecteur situé au bas de l'appareil.

   ![VitalControl : insérer la clé USB](/images/firmware/update/plug-in-dual-usb-stick.svg "Insérer la clé USB")

4. Une fois la clé USB détectée par l'appareil, l'exportation des données commence automatiquement. L'écriture des données de sauvegarde peut prendre quelques secondes. Lorsque l'exportation des données est terminée, un message de succès s'affiche :

   ![VitalControl : message de succès de l'exportation des données](../images/success-data-export.png "Succès de l'exportation des données")

5. L'exportation des données est maintenant terminée. Vous trouverez les quatre fichiers d'exportation [fichiers d'exportation](../export-files/) dans le répertoire `export-csv` sur votre clé USB.

   ![Clé USB avec fichiers d'exportation VitalControl](../images/export-files.png "Fichiers d'exportation sur clé USB")

   {{% alert title="Notes" %}}
  - Pour éviter l'écrasement accidentel des fichiers d'exportation, le nom de chaque fichier d'exportation inclut toujours la date et l'heure de création du fichier. Assurez-vous d'utiliser la version la plus récente des fichiers d'exportation si vous avez exporté des données animales à plusieurs reprises.
  - La taille des fichiers d'exportation dépend du nombre d'animaux sur le VitalControl et du nombre de mesures effectuées. En général, les fichiers d'exportation n'occupent que quelques ko d'espace de stockage sur la clé USB.
   {{% /alert %}}
