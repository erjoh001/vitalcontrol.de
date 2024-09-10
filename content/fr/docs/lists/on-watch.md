---
title: "Liste de surveillance"
linkTitle: "Liste de surveillance"
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: on-watch
description: >
 Consultez votre liste de surveillance.
catégories: [Listes]
étiquettes: [Listes, en surveillance]
translationKey: lists/on-watch
---
## Liste de surveillance {#on-watch-list}

Sur la liste de surveillance, vous trouverez tous les animaux que vous avez ajoutés manuellement à la liste. Cette liste vous aide à garder un aperçu des animaux que vous avez jugés suspects. De plus, pour chaque animal sur la liste, vous pouvez effectuer les actions suivantes :

- [Menu d'action complet](../alarm/#full-action-menu)
- [Données de l'animal](../alarm/#animal-data)
- [Prendre la température](../alarm/#take-temperature)
- [Évaluer l'animal](../alarm/#rate-animal)
- [Retirer de la liste de surveillance](#remove-from-watch-list)
- [Basculer le statut d'alarme](#toggle-alarm-status)
- [Rechercher un animal](../alarm/#search-animal)
- [Définir un filtre](../alarm/#set-filter)

{{% alert title="Conseil" %}}
Certaines actions doivent être effectuées de la même manière que dans la [Liste d'alarme](../alarm). Elles ne sont pas expliquées ici. Effectuez les étapes préliminaires et utilisez le lien de l'action respective pour accéder aux instructions.
{{% /alert %}}

La liste d'alarme est structurée comme suit :

   ![VitalControl Listes Liste de surveillance](../images/onwatchstructure.png "Structure de la Liste de surveillance")

|Symbole   | Description
|---------|-----
| ![VitalControl Listes Liste de surveillance](../images/kopf.png "Compteur taille du troupeau") | Montre combien d'animaux sont sur la liste
| ![Icône pour vache](../images/kopf2.png "Tête de vache") | Indique si l'animal sélectionné est un veau ou une vache
| ![VitalControl Listes Liste de surveillance](../images/auge.png "Évaluation") | La dernière évaluation enregistrée est affichée sous le symbole avec les couleurs du système de feux de circulation
| &nbsp;<img src="/icons/actions/temperature.svg" width="12" align="bottom" alt="Température corporelle" title="Température corporelle" /> | La dernière mesure de fièvre enregistrée est affichée sous le symbole avec les couleurs du système de feux de circulation
| &nbsp;&nbsp;<img src="/icons/header/alarm.svg" width="8" align="bottom" alt="Afficher l'animal en alarme" title="Animal en alarme" /> | Un marqueur circulaire sous le symbole indique que l'animal est sur la liste d'alarme

### Étapes préliminaires {#preliminary-steps}

1. Sélectionnez l'élément de menu <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Listes" /> `{{<T "Lists" >}}` sur l'écran principal de votre appareil VitalControl et appuyez sur le bouton `{{<T "Ok" >}}`.

2. Un sous-menu s'ouvre dans lequel différentes listes sont affichées. Sélectionnez la liste &nbsp;<img src="/icons/lists/onwatch.svg" width="28" align="bottom" alt="Liste 'Surveillance'" /> `{{<T "OnWatch" >}}`. Confirmez avec `{{<T "Ok" >}}`.

3. La liste `{{<T "OnWatch" >}}` est maintenant ouverte.

   ![Listes VitalControl Liste de surveillance](../images/firststeps2.png "Étapes préliminaires")

### Retirer de la liste de surveillance {#remove-from-watch-list}

1. Complétez les étapes préliminaires.

2. Utilisez la touche `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Ouvrir le menu popup" />&nbsp; pour invoquer un menu popup qui liste les actions possibles en appuyant sur la touche `{{<T "Ok" >}}`. Utilisez les touches fléchées △ ▽ pour mettre en surbrillance l'action `{{<T "RemoveFromWatchList" >}}` et sélectionnez cette option en appuyant sur le bouton central `{{<T "Ok" >}}` ou la touche `F3` `{{<T "Ok" >}}`.

3. Dans la liste de surveillance, utilisez les touches fléchées △ ▽ pour sélectionner l'animal désiré et confirmez avec `{{<T "Ok" >}}`. Alternativement, vous pouvez rechercher un animal. Utilisez le bouton `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Recherche" /> et utilisez les touches fléchées ◁ ▷ △ ▽ pour sélectionner les chiffres désirés. Enfin, confirmez avec `{{<T "Ok" >}}`.

4. L'animal est maintenant retiré de la liste de surveillance.

   ![Listes VitalControl Liste de surveillance](../images/remove.png "Retirer de la liste de surveillance")

### Basculer le statut de l'alarme {#toggle-alarm-status}

1. Complétez les étapes préliminaires.

2. Utilisez la touche `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Ouvrir le menu popup" />&nbsp; pour invoquer un menu popup qui liste les actions possibles en appuyant sur la touche `{{<T "Ok" >}}`. Utilisez les touches fléchées △ ▽ pour mettre en surbrillance l'action `{{<T "ToggleAlarmStatus" >}}` et sélectionnez cette option en appuyant sur le bouton central `{{<T "Ok" >}}` ou la touche `F3` `{{<T "Ok" >}}`.

3. Dans la liste de surveillance, utilisez les touches fléchées △ ▽ pour sélectionner l'animal désiré et confirmez avec `{{<T "Ok" >}}`. Alternativement, vous pouvez rechercher un animal. Utilisez le bouton `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Recherche" /> et utilisez les touches fléchées ◁ ▷ △ ▽ pour sélectionner les chiffres désirés. Enfin, confirmez avec `{{<T "Ok" >}}`.

4. L'animal est maintenant ajouté ou retiré de la liste d'alarme selon son statut initial.

   ![VitalControl Lists Toggle alarm status](../images/alarmstatus.png "Toggle alarm status")
