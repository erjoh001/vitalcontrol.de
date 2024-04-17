---
title: "Mise à jour du micrologiciel de votre appareil"
linkTitle: Mise à jour
weight: 4
description: >
  En effectuant une mise à jour du micrologiciel, le micrologiciel de votre appareil VitalControl peut être mis à jour vers les versions les plus récentes disponibles.
---

Tout d'abord, assurez-vous qu'une [version plus récente du micrologiciel](../versions/) est disponible pour votre appareil et, si nécessaire, mettez à jour le micrologiciel de votre appareil en suivant les instructions suivantes.

## Accessoire requis

Pour installer la mise à jour sur votre appareil, vous avez besoin d'une clé USB double (clé USB 2-en-1) Type-C/USB 3.0 avec un connecteur USB C et un connecteur USB A. Une telle clé USB double est livrée avec votre appareil. Vous pouvez également acheter une telle clé USB auprès de différents fournisseurs.

![Clé USB double (USB A / USB C)](/images/firmware/update/usb-dual-stick.svg "Clé USB double")

## Préparation : téléchargement du micrologiciel le plus récent

1. Insérez votre clé USB dans le connecteur USB de votre ordinateur. Ensuite, créez un nouveau répertoire nommé 'update' dans le répertoire racine de votre clé USB.

    ![Explorateur Windows : clé USB avec le répertoire 'update'](../images/create-folder-update.png "Clé USB : répertoire 'update'")

1. Téléchargez le [fichier de micrologiciel](/download/firmware.vcu) (nom de fichier : `firmware.vcu`) et enregistrez-le dans le répertoire `update` précédemment créé de votre clé USB. Le fichier de mise à jour nécessite environ 2,5 Mo d'espace de stockage sur la clé USB.

    ![Explorateur Windows : clé USB avec le fichier de micrologiciel 'firmware.vcu'](../images/save-firmware-file.png "Clé USB avec le fichier de micrologiciel")

1. Effectuez une [sauvegarde des données][] sur votre appareil.

    {{% alert title="Info" %}}
La sauvegarde des données est une mesure de précaution recommandée. Toutes les données animales et de l'appareil existantes seront préservées lors de la mise à jour du micrologiciel de l'appareil VitalControl.
    {{% /alert %}}

[Sauvegarde des données]: {{< relref "../sauvegarde/backup/" >}}

## Effectuer la mise à jour du micrologiciel

1. Ouvrez l'élément de menu `Appareil` sur l'écran principal de votre appareil VitalControl.

1. Accédez au sous-menu `Service`, sélectionnez l'option `Mise à jour du micrologiciel` et validez avec `OK`. Vous serez alors invité à insérer la clé USB que vous avez préalablement préparée :

    ![VitalControl: chemin du menu mise à jour du micrologiciel](../images/firmware-update.png "Mise à jour du micrologiciel")

1. Insérez la clé USB (connecteur C) dans le port situé en bas de l'appareil et confirmez avec `OK`.

    ![VitalControl: Insérer la clé USB](/images/firmware/update/plug-in-dual-usb-stick.svg "Insérer la clé USB")

    L'appareil procède alors à la mise à jour automatiquement. Pendant ce processus, l'écran affiche l'avancement de la mise à jour. Une fois la mise à jour terminée, l'appareil redémarre automatiquement et un message de confirmation apparaît après le redémarrage :

   ![VitalControl: Message de succès de la mise à jour du micrologiciel](../images/update-success.png "Succès de la mise à jour du micrologiciel")

   Le nouveau micrologiciel est désormais installé sur votre appareil.
