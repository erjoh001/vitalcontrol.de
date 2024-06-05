---
title: "Enregistrement en masse d'un groupe d'animaux achetés"
linkTitle: "Enregistrement en masse"
date: 2023-07-28T13:25:28+02:00
weight: 15
draft: false
slug: bulk-recording
description: >
  Utilisez le scanner de codes-barres pour enregistrer une variété d'animaux.
categories: [Enregistrement en masse]
tags: [Enregistrement en masse]
translationKey: new/bulk-recording
---
## Enregistrement en masse {#bulk-recording}

Grâce à l'enregistrement en masse, vous pouvez capturer un grand nombre d'animaux en peu de temps et les sauvegarder sur votre appareil. Utilisez le scanner de codes-barres pour scanner les codes-barres du numéro de boucle auriculaire et de la date de naissance sur les passeports du bétail. L'animal est enregistré automatiquement et vous pouvez scanner immédiatement le passeport suivant. Pour effectuer l'enregistrement en masse des animaux, procédez comme suit :

1. Connectez le scanner de codes-barres au VitalControl à l'aide du câble.

2. Sur l'écran principal de votre appareil VitalControl, sélectionnez l'élément de menu <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="Nouvel animal" /> `{{<T "New" >}}` et appuyez sur le bouton `{{<T "Ok" >}}`.

3. Un sous-menu s'ouvre. Utilisez les touches fléchées ◁ ▷ △ ▽ pour sélectionner l'élément de menu <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Enregistrement en masse" /> `{{<T "BulkRecording" >}}` et confirmez avec `{{<T "Ok" >}}`.

4. Un autre sous-menu s'ouvre, qui contient un champ pour le numéro de boucle auriculaire de l'animal et un autre champ pour la date de naissance de l'animal. Commencez par scanner le code-barres du numéro de boucle auriculaire. Le bord du champ passe du rouge au vert. Ensuite, scannez la date de naissance. Le bord devient brièvement vert avant que les deux bords ne redeviennent rouges. Le compteur sous le symbole du passeport <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Passeports animaux" title="Passeports animaux" /> en haut de l'écran passe de 0 à 1. Le premier animal a été enregistré. Continuez et scannez les autres passeports du bétail. Après chaque passeport scanné, le compteur sous le symbole du passeport <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Passeports animaux" title="Passeports animaux" /> augmente de un. Le compteur sous le symbole du troupeau <img src="/icons/header/group.svg" width="35" align="bottom" alt="Groupe d'animaux"  title="Groupe d'animaux" /> augmente également de un.

{{% alert title="Conseil" %}}
Le compteur sous le symbole du passeport <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Passeports animaliers" title="Passeports animaliers" /> indique combien de passes vous avez scannés en une seule fois sans quitter l'écran `{{<T "BulkRecording" >}}`. Le compteur sous le symbole du troupeau <img src="/icons/header/group.svg" width="35" align="bottom" alt="Nouvel animal" /> montre combien de passeports vous avez scannés au total. Ce compteur ne se remet pas à zéro si vous quittez l'écran `{{<T "BulkRecording" >}}`. Le nombre est équivalent à vos entrées dans l'élément de menu ['Achats'](../new-on-farm/purchased-animals/).
{{% /alert %}}

   ![VitalControl : Menu 'Nouveau - Enregistrement en masse'](../images/bulk-recording.png "Enregistrement en masse")

{{% alert title="Conseil" %}}
Vous avez d'autres options de réglage dans l'élément de menu `{{<T "BulkRecording" >}}`. Elles sont expliquées ci-dessous. Comme étapes préparatoires, accédez toujours d'abord à l'élément de menu `{{<T "BulkRecording" >}}` puis procédez comme dans les instructions.
{{% /alert %}}

{{% alert title="Conseil" %}}
Des messages d'erreur peuvent apparaître pendant le processus de scan. Dans ce cas, le scanner de codes-barres émet un son et il n'est plus possible de continuer à scanner. Accusez réception du message d'erreur correspondant sur l'affichage VitalControl et continuez à scanner.
{{% /alert %}}

### Date de naissance obligatoire {#birth-date-mandatory}

Avec cette option de réglage, vous pouvez déterminer si la date de naissance doit être spécifiée lors de la création des animaux. Si vous désactivez cette option, vous n'avez qu'à scanner le code-barres pour enregistrer un animal. Pour ces animaux, cependant, la date actuelle est alors enregistrée comme date de naissance ! Cette fonction est activée par défaut. Pour la désactiver, procédez comme suit :

1. Utilisez le bouton <img src="/icons/gear.svg" width="25" align="bottom" alt="Menu des paramètres" /> `On/Off` pour ouvrir le menu des paramètres.

2. Utilisez les touches fléchées △ ▽ pour sélectionner l'option de réglage `{{<T "BirthDateMandatory" >}}` et confirmez avec `{{<T "Ok" >}}`.

3. Le cercle jaune symbolise que la fonction est activée. Un cercle gris symbolise que la fonction est désactivée.

4. Sauvegardez les paramètres et utilisez la touche `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Sauvegarder et retourner" /> pour revenir à l'élément de menu <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Enregistrement en masse" />&nbsp; `{{<T "BulkRecording" >}}`.

![VitalControl : Menu Nouvelle Date de naissance obligatoire](../images/birthdate.png "Date de naissance obligatoire")

### Valeurs par défaut {#default-values}

Dans le menu des paramètres `{{<T "DefaultValues" >}}`, vous définissez les normes qui s'appliquent à chaque animal que vous créez. Le processus de création avec le scanner de codes-barres reste inchangé comme décrit ci-dessus. Vous avez la possibilité de définir le type de bétail, le sexe, la race et le lieu de détention. Pour régler les `{{<T "DefaultValues" >}}`, procédez comme suit :

1. Utilisez le bouton <img src="/icons/gear.svg" width="25" align="bottom" alt="Menu des paramètres" /> `On/Off` pour ouvrir le menu des paramètres.

2. Utilisez les touches fléchées △ ▽ pour sélectionner l'élément de menu `{{<T "DefaultValues" >}}` et confirmez avec `{{<T "Ok" >}}`.

3. Un sous-menu s'ouvre avec les différentes options de réglage. Utilisez les touches fléchées △ ▽ pour sélectionner l'option de réglage désirée. Utilisez les touches fléchées ◁ ▷ pour sélectionner le réglage désiré.

4. Sauvegardez les paramètres et utilisez la touche `F1`&nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Sauvegarder et retourner" /> pour revenir à l'élément de menu <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Enregistrement en masse" />&nbsp; `{{<T "BulkRecording" >}}`.

   ![VitalControl : Menu Nouvelles Valeurs par défaut](../images/defaultvalues.png "Valeurs par défaut")

### Valeurs enregistrées {#recorded-values}

Dans le menu des paramètres `{{<T "RecordedValues" >}}`, vous pouvez spécifier quelles valeurs doivent être capturées en plus du numéro de boucle auriculaire et de la date de naissance. Vous pouvez choisir entre `{{<T "Breed" >}}`, `{{<T "Sex" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "CurrentWeight" >}}`, `{{<T "BirthWeight" >}}` et `{{<T "TypeAnimal" >}}`. Dès que vous réglez au moins une valeur, le processus change lors de la numérisation. Scannez d'abord le numéro de boucle auriculaire et la date de naissance. Ensuite, utilisez les touches directionnelles △ ▽ pour sélectionner les valeurs à régler et réglez les valeurs. Ensuite, sauvegardez vos entrées avec la touche `F3`. Ce n'est qu'ensuite que l'animal est créé ! Pour régler les valeurs à enregistrer, procédez comme suit :

1. Utilisez le bouton <img src="/icons/gear.svg" width="25" align="bottom" alt="Menu des paramètres" /> `On/Off` pour ouvrir le menu des paramètres.

2. Utilisez les touches fléchées △ ▽ pour sélectionner l'élément de menu `{{<T "RecordedValues" >}}` et confirmez avec `{{<T "Ok" >}}`.

3. Sélectionnez la valeur désirée à enregistrer avec les touches fléchées △ ▽ et confirmez avec `{{<T "Ok" >}}`. Un cercle jaune apparaît. Si vous souhaitez désactiver la valeur à enregistrer, confirmez à nouveau avec `{{<T "Ok" >}}`. Le cercle jaune disparaît.

4. Sauvegardez les paramètres et utilisez la touche `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" /> pour revenir à l'élément de menu <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" />&nbsp; `{{<T "BulkRecording" >}}`.

5. Si vous souhaitez désactiver toutes les valeurs à enregistrer à nouveau, sélectionnez l'option de réglage `{{<T "EnableAllResetOrder" >}}` dans l'élément de menu `{{<T "RecordedValues" >}}` et confirmez avec `{{<T "Ok" >}}`.

   ![VitalControl: Menu Nouvelles valeurs d'enregistrement](../images/recordvalues.png "Enregistrer les valeurs")
