---
title: "Liste des vaches fraîches"
linkTitle: "Liste des vaches fraîches"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: fresh-cows
description: >
  Facilitez le contrôle de vos vaches fraîches.
categories: [Listes]
tags: [Listes, vache fraîche]
translationKey: lists/fresh-cows
---
### Liste des vaches fraîches {#fresh-cows-list}

{{% alert title="Explication" %}}
Lors de la gestion des vaches fraîches, il est considéré comme une routine de meilleures pratiques de vérifier quotidiennement les animaux pendant plusieurs jours après la naissance. La liste des vaches fraîches facilite ce contrôle des vaches fraîches, notamment en termes d'enregistrement de la température. Pour chaque animal, un graphique en colonnes sur tous les jours de la période de contrôle est affiché, chaque jour de la période de contrôle est représenté par une barre verticale. Selon la couleur de la barre (verte, jaune ou rouge), vous pouvez voir si une température normale, élevée ou critique a été mesurée ce jour-là pour l'animal concerné.
{{% /alert %}}

Les vaches sont placées sur la liste des vaches fraîches immédiatement après que leur vêlage a été enregistré. Elles restent sur cette liste pendant une certaine période, la durée de cette période (en jours) peut être ajustée dans les [paramètres](../../settings/data-acquisition/#control-period-of-fresh-cows)).
 Les actions suivantes sont disponibles pour cette liste :

- [Menu d'action complet](../alarm/#full-action-menu)
- [Données de l'animal](../alarm/#animal-data)
- [Prendre la température](../alarm/#take-temperature)
- [Changer le statut d'alarme](#toggle-alarm-status)
- [Changer le statut de surveillance](#toggle-watch-status)
- [Masquer les vaches mesurées](#hide-measured-cows)
- [Rechercher un animal](../alarm/#search-animal)
- [Définir un filtre](../alarm/#set-filter)

{{% alert title="Conseil" %}}
Certaines actions doivent être effectuées de la même manière que dans la [liste d'alarme](../alarm). Elles ne sont pas expliquées ici. Effectuez les étapes préliminaires et utilisez le lien de l'action respective pour accéder aux instructions.
{{% /alert %}}

### Étapes préliminaires {#preliminary-steps}

1. Sélectionnez l'élément de menu <img src="/icons/main/lists.svg" width="25" align="bottom" alt="Listes" /> `{{<T "Lists" >}}` dans l'écran principal de votre appareil VitalControl et appuyez sur le bouton `{{<T "Ok" >}}`.

2. Un sous-menu s'ouvre dans lequel diverses listes sont affichées. Sélectionnez la liste `{{<T "FreshCows" >}}` <img src="/icons/lists/freshcows.svg" width="30" align="bottom" alt="Fresh-cows" />. Confirmez avec `{{<T "Ok" >}}`.

3. La liste des vaches fraîches est maintenant ouverte.

   ![VitalControl Lists Fresh cows list](../images/firststeps4.png "Liste des vaches fraîches")

### Basculer le statut d'alarme {#toggle-alarm-status}

1. Complétez les étapes préliminaires.

2. Utilisez la touche `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; pour invoquer un menu contextuel qui liste les actions possibles lors de l'appui sur la touche `{{<T "Ok" >}}`. Utilisez les touches fléchées △ ▽ pour mettre en surbrillance l'action `{{<T "ToggleAlarmStatus" >}}` et sélectionnez cette option en appuyant sur le bouton central `{{<T "Ok" >}}` ou la touche `F3` `{{<T "Ok" >}}`.

3. Dans la liste des vaches fraîches, utilisez les touches fléchées △ ▽ pour sélectionner l'animal désiré et confirmez avec `{{<T "Ok" >}}`. Alternativement, vous pouvez rechercher un animal. Utilisez le bouton `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> et utilisez les touches fléchées ◁ ▷ △ ▽ pour sélectionner les chiffres désirés. Enfin, confirmez avec `{{<T "Ok" >}}`.

4. L'animal est maintenant ajouté ou retiré de la liste d'alerte selon son statut initial.

   ![VitalControl Lists Fresh cows list](../images/togglealarmstatus.png "Basculer le statut d'alarme")

### Basculer le statut de surveillance {#toggle-watch-status}

1. Complétez les étapes préliminaires.

2. Utilisez la touche `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; pour invoquer un menu contextuel qui liste les actions possibles lors de l'appui sur la touche `{{<T "Ok" >}}`. Utilisez les touches fléchées △ ▽ pour mettre en surbrillance l'action `{{<T "ToggleWatchStatus" >}}` et sélectionnez cette option en appuyant sur le bouton central `{{<T "Ok" >}}` ou la touche `F3` `{{<T "Ok" >}}`.

3. Dans la liste des vaches fraîches, utilisez les touches fléchées △ ▽ pour sélectionner l'animal désiré et confirmez avec `{{<T "Ok" >}}`. Alternativement, vous pouvez rechercher un animal. Utilisez le bouton `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> et utilisez les touches fléchées ◁ ▷ △ ▽ pour sélectionner les chiffres désirés. Enfin, confirmez avec `{{<T "Ok" >}}`.

4. L'animal est maintenant ajouté ou retiré de la liste de surveillance selon son statut initial.

![VitalControl Lists Fresh cows list](../images/togglewatchstatus.png "Toggle watch status")

### Masquer les vaches mesurées {#hide-measured-cows}

Si cette fonction est activée, les animaux pour lesquels une mesure de température a été effectuée sont cachés sur la liste des vaches taries. Si cette fonction n'est pas activée, les animaux restent visibles sur la liste.

1. Complétez les étapes préliminaires.

2. Utilisez la touche `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Actions" />&nbsp; pour invoquer un menu popup qui liste différentes options. Utilisez les touches fléchées △ ▽ pour mettre en surbrillance l'option `{{<T "HideMeasuredCows" >}}` et activez cette option en appuyant sur le bouton central `{{<T "Ok" >}}` ou la touche `F3` `{{<T "Ok" >}}`.

3. Dans la liste des vaches fraîches, utilisez les touches fléchées △ ▽ pour sélectionner l'animal désiré et confirmez avec `{{<T "Ok" >}}`. Alternativement, vous pouvez rechercher un animal. Utilisez le bouton `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> et utilisez les touches fléchées ◁ ▷ △ ▽ pour sélectionner les chiffres désirés. Enfin, confirmez avec `{{<T "Ok" >}}`.

4. La fonction `{{<T "HideMeasuredCows" >}}` est maintenant activée. L'activation est indiquée par une case cochée.

![VitalControl Lists Fresh cows list](../images/hidemeasuredcows.png "Hide measured cows")
