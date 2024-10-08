---
title: Animaux achetés
linkTitle: Animaux achetés
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: purchased-animals
description: >
  Ici, vous pouvez consulter vos achats actuels et exporter les données.
catégories: [Nouveau à la ferme]
étiquettes: [Nouveau à la ferme]
translationKey: new-on-farm/new-on-farm
---
## Animaux achetés {#purchased-animals}

Dans cette liste, vous trouverez tous les animaux que vous avez créés via l'enregistrement en masse. Vous pouvez exporter cette liste et ainsi enregistrer vos ajouts directement dans le programme de gestion de troupeau DSP-Herde et dans HI-Tier. Alternativement, vous pouvez supprimer toutes les notifications d'achat.

{{% alert title="Conseil" %}}
Pour exporter des données, vous avez besoin de la clé USB incluse. Connectez la clé USB avec l'adaptateur USB-C à votre appareil VitalControl avant de suivre les instructions.
{{% /alert %}}

1. Sur l'écran principal de votre appareil VitalControl, sélectionnez l'élément de menu <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Nouveau à la ferme" /> `{{<T "NewOnFarm" >}}` et appuyez sur le bouton `{{<T "Ok" >}}`.

2. Un sous-menu s'ouvre dans lequel vous pouvez choisir entre <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Nouveau à la ferme, sans transpondeur" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Animaux achetés" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Aucun numéro national d'identification animale" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Naissances" /> `{{<T "Births" >}}` et <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Aucun transpondeur attribué" /> `{{<T "NoTransponderAssigned" >}}`. Utilisez les touches fléchées ◁ ▷ △ ▽ pour sélectionner l'élément de menu <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Animaux achetés" /> `{{<T "PurchasedAnimals" >}}` et confirmez avec `{{<T "Ok" >}}`.

3. Une liste s'ouvre avec vos achats que vous avez enregistrés via l'élément de menu d'enregistrement en masse.

4. Utilisez la touche `F2` `{{<T "CSVExport" >}}`.

5. La liste des messages CSV est maintenant enregistrée sur votre clé USB.

![VitalControl : Liste des animaux achetés, export csv](../images/purchasedanimals.png "Animaux achetés, export csv")

## Options : Supprimer toutes les notifications après l'exportation {#options-delete-all-notices-after-export}

Avec cette option, vous pouvez définir si tous les messages dans la liste `{{<T "PurchasedAnimals" >}}` doivent être supprimés après que le fichier CSV a été exporté. Utilisez cette option uniquement si vous êtes sûr de ne plus avoir besoin des messages !

1. Utilisez la touche `F3`. Un sous-menu s'ouvre.

2. Utilisez les touches fléchées △ ▽ pour sélectionner l'option `{{<T "DeleteAllNoticesAfterExport" >}}` et confirmez avec `{{<T "Ok" >}}`.

3. La case est maintenant marquée d'une coche. L'option est activée. Confirmez à nouveau avec `{{<T "Ok" >}}` pour désactiver l'option.

    ![VitalControl : Liste des animaux achetés, export csv](../images/delete-all.png "Supprimer toutes les notifications après l'exportation")

## Appels de fonction directs {#direct-function-calls}

En plus de créer le fichier d'exportation, vous disposez des options suivantes :

- [Dissocier le transpondeur](#unlink-transponder)
- [Effacer toutes les notifications d'achat](#clear-all-purchase-notices)
- [Supprimer animal + notification](#delete-animal--purchase-notice)
- [Effacer la notification d'achat](#clear-notice-of-purchase)
- [Modifier une marque](#edit-data-of-purchased-animal)

{{% alert title="Conseil" %}}
Ouvrez toujours la liste des `{{<T "PurchasedAnimals" >}}` en premier comme décrit dans les instructions ci-dessus.
{{% /alert %}}

### Dissocier le transpondeur {#unlink-transponder}

Vous pouvez utiliser cette fonction pour retirer le transpondeur d'un animal.

1. Utilisez la touche `F3`. Un sous-menu s'ouvre.

2. Utilisez les touches fléchées △ ▽ pour sélectionner l'option `{{<T "UnlinkTransponder" >}}` et confirmez avec `{{<T "Ok" >}}`.

3. Le transpondeur a été dissocié avec succès.

    ![VitalControl : Liste des animaux achetés, export csv](../images/unlink-transponder.png "Animaux achetés, dissocier le transpondeur")

### Effacer toutes les notifications d'achat {#clear-all-purchase-notices}

Avec cette fonction, vous pouvez supprimer tous les animaux de la liste `{{<T "PurchasedAnimals" >}}` sans avoir à créer un fichier d'exportation au préalable.

1. Utilisez la touche `F3`. Un sous-menu s'ouvre.

2. Utilisez les touches fléchées △ ▽ pour sélectionner l'option `{{<T "ClearAllPurchaseNotices" >}}` et confirmez avec `{{<T "Ok" >}}`.

3. Les notifications d'achat ont été supprimées avec succès.

![VitalControl : Liste des animaux achetés, effacer les avis d'achat](../images/clear.png "Effacer tous les avis d'achat")

### Supprimer un animal + avis d'achat {#delete-animal--purchase-notice}

Pour supprimer un animal et son avis d'achat correspondant, procédez comme suit :

1. Utilisez les touches fléchées △ ▽ pour sélectionner l'animal que vous souhaitez supprimer.

2. Utilisez la touche `F3`. Un sous-menu s'ouvre.

3. Utilisez les touches fléchées △ ▽ pour sélectionner l'option de menu `{{<T "UnregisterAnimalAndBirthNotice" >}}` et confirmez avec `{{<T "Ok" >}}`.

4. L'animal et le message d'accès ont été supprimés avec succès.

    ![VitalControl : Liste des animaux achetés, supprimer animal + avis](../images/delete.png "Supprimer animal + avis")

### Effacer l'avis d'achat {#clear-notice-of-purchase}

Pour supprimer l'avis d'achat d'un animal de la liste, procédez comme suit :

1. Utilisez les touches fléchées △ ▽ pour sélectionner l'animal dont vous souhaitez supprimer l'avis d'achat.

2. Utilisez la touche `F3`. Un sous-menu s'ouvre.

3. Utilisez les touches fléchées △ ▽ pour sélectionner l'option de menu `{{<T "ClearPurchaseNotice" >}}` et confirmez avec `{{<T "Ok" >}}`.

4. L'avis d'achat de l'animal sélectionné a été supprimé avec succès.

    ![VitalControl : Liste des animaux achetés, effacer l'avis d'achat](../images/clearnotice.png "Effacer l'avis d'achat")

### Modifier les données d'un animal acheté {#edit-data-of-purchased-animal}

Pour modifier les données d'un animal dans la liste des achats, procédez comme suit :

1. Utilisez les touches fléchées △ ▽ pour sélectionner l'animal que vous souhaitez modifier.

2. Utilisez le bouton `{{<T "Ok" >}}`. Un sous-menu avec les données de l'animal s'ouvre. Vous pouvez apprendre comment modifier ces données [ici](/fr/docs/actions/edit/#edit-animal-data).

    ![VitalControl : Liste des animaux achetés, Modifier les données de l'animal](../images/edit.png "Modifier les données de l'animal acheté")
