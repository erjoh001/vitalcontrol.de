---
title: "Acquisition de données"
linkTitle: "Acquisition de données"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: data-acquisition
description: >
 Stockage des paramètres pertinents pour la collecte de données animales
categories: [paramètres]
tags: [paramètres, acquisition de données]
translationKey: settings/data-acquisition
maphilight: true
---
## Vue d'ensemble

Le graphique suivant liste les paramètres disponibles concernant l'enregistrement des données animales :

<img src="../images/animaldataacquisition.png" alt="Acquisition de données animales" title="Acquisition de données animales" usemap="#workmap-overview" class="maphilight" />

<map name="workmap-overview">
  <area shape="rect" coords="3,40,239,80" alt="Enregistrement du poids" title="Sous-menu : Paramètres pour l'enregistrement du poids&#10;Clic de souris : ouvrir la documentation" href="#settings-weight-recording">
  <area shape="rect" coords="3,80,239,160" alt="Mode d'évaluation des animaux" title="Définir le mode d'évaluation des animaux&#10;Clic de souris : ouvrir la documentation" href="#mode-of-animal-rating">
  <area shape="rect" coords="3,160,239,240" alt="Période de contrôle de la longueur pour les vaches fraîches" title="Définir la durée de la période de contrôle pour les vaches fraîches&#10;Clic de souris : ouvrir la documentation" href="#control-period-of-fresh-cows">

  <area shape="rect" coords="2,282,125,318" alt="Retour" title="Revenir d'un niveau" href="/fr/docs/settings/">
</map>

{{% alert title="Conseil" %}}
Déplacez le pointeur de la souris sur un symbole dans le graphique ci-dessous et laissez-le reposer un moment. Une infobulle apparaît, présentant des informations sur le paramètre respectif. Si vous cliquez sur l'une des lignes, vous serez redirigé vers une description du paramètre respectif.
{{% /alert %}}

## Paramètres *Enregistrement du poids*

Le graphique suivant liste les paramètres disponibles concernant l'enregistrement du poids des animaux :

<img src="../images/weightrecording.png" alt="Éléments du sous-menu paramètres pour l'enregistrement du poids" title="Paramètres d'enregistrement du poids" usemap="#workmap-weight" class="maphilight" />

<map name="workmap-weight">
  <area shape="rect" coords="1,40,230,199" alt="Valeurs seuils évaluation du gain de poids quotidien" title="Définir les valeurs seuils pour l'évaluation du gain de poids quotidien&#10;Clic de souris : ouvrir la documentation" href="#assessment-of-daily-weight-gain-threshold-values">
  <area shape="rect" coords="1,200,230,280" alt="Poids à la naissance" title="Définir le poids à la naissance proposé lors de l'enregistrement d'un nouvel animal&#10;Clic de souris : ouvrir la documentation" href="#birth-weight">
  <area shape="rect" coords="1,280,230,360" alt="Gain de poids quotidien moyen" title="Définir le gain de poids quotidien moyen utilisé lors de l'estimation du poids des animaux&#10;Clic de souris : ouvrir la documentation" href="#average-daily-weight-gain">
  <area shape="rect" coords="1,360,230,440" alt="Précision de l'enregistrement du poids" title="Définir la précision de l'enregistrement du poids&#10;Clic de souris : ouvrir la documentation" href="#precision-of-weight-recording">
</map>

### Évaluation du gain de poids quotidien : valeurs seuils

{{% alert title="Conseil" %}}
Le champ rouge indique la zone de "gain de poids trop faible critique". Le champ jaune montre la zone de "gain de poids suboptimal".
{{% /alert %}}

Pour ajuster les valeurs seuils pour l'évaluation du gain de poids quotidien, procédez comme suit :

1. Dans l'écran principal de votre appareil VitalControl, sélectionnez l'élément de menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Paramètres" /> `Réglages` et appuyez sur le bouton `OK`.

2. Un sous-menu s'ouvre dans lequel divers paramètres sont affichés. Utilisez les touches fléchées △ ▽ pour sélectionner `Acquisition de données`. Confirmez avec `OK`.

3. Un autre sous-menu s'ouvre dans lequel vous pouvez utiliser les touches fléchées △ ▽ pour naviguer entre les champs de réglage pour `Enregistrement du poids`, `Évaluation des animaux` et `Période de contrôle des nouvelles vaches`. Sélectionnez `Enregistrement du poids` et confirmez avec `OK`.

4. Le champ de préférence `Croissance journalière` est automatiquement sélectionné. Utilisez les touches fléchées ◁ ▷ pour sélectionner l'espèce animale désirée. Confirmez avec `OK`. Alternativement, vous pouvez utiliser l'icône de crayon avec <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Modifier" /> la touche `F3` pour passer directement à l'édition des zones rouge et jaune.

5. Utilisez les touches fléchées △ ▽ pour sélectionner l'augmentation "supérieure à" ou "équivalente à" g/jour dans la zone rouge et jaune. Utilisez les touches `F2`/`F3` 🡄 🡆 ou les touches fléchées ◁ ▷ pour sélectionner entre les zones rouge et jaune.

6. Une fois que vous avez défini l'augmentation "supérieure à" ou "équivalente à" g/jour souhaitée, utilisez la touche `F1` <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Sortie" /> ou confirmez avec `OK` pour revenir à `Croissance journalière`.

    ![VitalControl : paramètres du menu gain de poids quotidien](../images/dailyweightgain.png "Gain de poids quotidien")

### Poids à la naissance

L'appareil utilise le poids à la naissance enregistré ici dans les paramètres comme valeur par défaut lors de la création de nouveaux animaux. Afin de pouvoir sélectionner plus rapidement le poids à la naissance individuel d'un animal nouvellement né, vous devrez peut-être ajuster cette valeur par défaut pour votre ferme. Pour ajuster la valeur pour le `Poids de naissance`, procédez comme suit :

1. Sur l'écran principal de votre appareil VitalControl, sélectionnez l'élément de menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `Réglage` et appuyez sur le bouton `OK`.

2. Un sous-menu s'ouvre dans lequel divers paramètres sont affichés. Utilisez les touches fléchées △ ▽ pour sélectionner `Acquisition de données`. Confirmez avec `OK`.

3. Un autre sous-menu s'ouvre dans lequel vous pouvez utiliser les touches fléchées △ ▽ pour naviguer entre les champs de paramètres pour `Enregistrement du poids`, `Évaluation de l'animal` et `Période de contrôle des nouvelles vaches`. Sélectionnez `Enregistrement du poids` et confirmez avec `OK`.

4. Utilisez les touches fléchées △ ▽ pour sélectionner le champ de paramètre `Poids de naissance` et utilisez les touches fléchées ◁ ▷ pour définir le poids à la naissance souhaité. L'appareil utilise désormais le poids à la naissance défini ici comme standard lors de la création de nouveaux animaux. Le poids à la naissance individuel d'un nouvel animal peut alors être sélectionné plus rapidement.

    ![VitalControl : paramètres du menu poids à la naissance](../images/birthweight.png "Poids à la naissance")

{{% alert title="Avertissement" color="warning" %}}
Le poids à la naissance standard est seulement une valeur approximative, qui doit être ajustée individuellement lors de la création d'un nouvel animal.
Si vous ne souhaitez pas faire cet ajustement ou si vous créez des animaux automatiquement [en arrière-plan](../animal-registration/#auto-registration), aucun poids à la naissance ne devrait être interrogé ou enregistré lors de la création d'un nouvel animal. Cela peut être défini dans les paramètres pour [l'enregistrement des animaux](../animal-registration/#set-recorded-weights).
{{% /alert %}}

{{% alert title="Valeurs par défaut des poids à la naissance :" %}}

| Type de nouvel animal         |  Agneau        | Veau          |
|-------------------------------|----------------|---------------| 
| Valeur par défaut *poids à la naissance* : | 4 kg           | 40 kg         |
| Plage de valeurs :            | 1,0 à 99 kg    | 1,0 à 99 kg   |
{{% /alert %}}

### Gain de poids quotidien moyen

{{% alert title="Explication" %}}
Lors de la [pesée](../../actions/record-weight/) d'un animal, l'augmentation quotidienne définie est utilisée pour le calcul de la valeur de poids suggérée lors de la pesée de l'animal. Si la valeur de poids suggérée est trop basse ou trop élevée pour la majorité des animaux à peser, vous devriez ajuster la valeur définie vers le bas ou vers le haut, respectivement, pour réduire le temps nécessaire à l'ajustement de la valeur de poids avec les touches fléchées.
{{% /alert %}}

Pour définir le `Prise de poids quotidienne moyenne` utilisé dans le calcul du poids approximatif d'un animal, procédez comme suit.

1. Sur l'écran principal de votre appareil VitalControl, sélectionnez l'élément de menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Paramètres" /> `Réglages` et appuyez sur le bouton `OK`.

2. Un sous-menu s'ouvre dans lequel divers paramètres sont affichés. Utilisez les touches fléchées △ ▽ pour sélectionner `Acquisition de données`. Confirmez avec `OK`.

3. Un autre sous-menu s'ouvre dans lequel vous pouvez utiliser les touches fléchées △ ▽ pour naviguer entre les champs de réglage pour `Enregistrement du poids`, `Évaluation de l'animal` et `Période de contrôle des nouvelles vaches`. Sélectionnez `Enregistrement du poids` et confirmez avec `OK`.

4. Utilisez les touches fléchées △ ▽ pour sélectionner le champ de réglage `Prise de poids quotidienne moyenne`. Utilisez les touches fléchées ◁ ▷ pour régler l'augmentation quotidienne moyenne souhaitée en g/jour. L'appareil utilise désormais le gain quotidien moyen défini ici comme norme pour le gain quotidien attendu des animaux.

    ![VitalControl : paramètres du menu gain de poids quotidien moyen](../images/averagedailyweightgain.png "Gain de poids quotidien moyen")

### Précision de l'enregistrement du poids

{{% alert title="Explication" %}}
Selon le cas d'utilisation et l'espèce animale (*agneau*, *veau*, *vache*), il existe différentes exigences concernant la résolution de la valeur de poids à enregistrer (précision de *10 g*, *100 g* ou *1 kg*). Pour répondre à ces exigences, il est nécessaire d'utiliser le réglage *Précision maximale*.
{{% /alert %}}

Le tableau ci-dessous montre la précision de l'enregistrement du poids en fonction de la plage de poids et du réglage stipulé pour *Précision maximale* :

| Réglage *Précision maximale* :               |  10 g | 100 g | 1 kg |
|--------------------------------------------|-------|-------|------|
| Précision dans la plage de *0 à 9,9 kg* :   | 10 g  | 100 g | 1 kg |
| Précision dans la plage de *10 à 49,9 kg* : | 100 g | 100 g | 1 kg |
| Précision dans la plage de *50 à 99,9 kg* : | 500 g | 500 g | 1 kg |
| Précision pour les valeurs *≥ 100 kg* :     | 1 kg  | 1 kg  | 1 kg |

Pour régler la précision maximale lors de l'enregistrement des poids des animaux avec votre appareil, procédez comme suit :

1. Sur l'écran principal de votre appareil VitalControl, sélectionnez l'élément de menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `Réglage` et appuyez sur le bouton `OK`.

2. Un sous-menu s'ouvre dans lequel divers paramètres sont affichés. Utilisez les touches fléchées △ ▽ pour sélectionner `Acquisition de données`. Confirmez avec `OK`.

3. Un autre sous-menu s'ouvre dans lequel vous pouvez utiliser les touches fléchées △ ▽ pour naviguer entre les champs de paramètres pour `Enregistrement du poids`, `Évaluation de l'animal` et `Période de contrôle des nouvelles vaches`. Sélectionnez `Enregistrement du poids` et confirmez avec `OK`.

4. Utilisez les touches fléchées △ ▽ pour sélectionner le champ de paramètre `Précision maximale`. Utilisez les touches fléchées ◁ ▷ pour régler la précision maximale souhaitée. La précision de l'enregistrement du poids sur l'appareil suit maintenant le paramètre stipulé.

    ![VitalControl : chemin du menu paramètres précision maximale enregistrement du poids](../images/precisionweightrecording.png "Stipuler la précision maximale de l'enregistrement du poids.")

<br>
Enregistrez les paramètres et retournez au menu principal `Acquisition de données` en appuyant sur la touche `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.

## Mode d'évaluation des animaux

{{% alert title="Explication" %}}
Dans le mode simple, seule la condition générale est interrogée lors de l'évaluation de l'animal (vert/jaune/rouge). Dans l'évaluation étendue, 4 catégories d'évaluation sont interrogées : condition générale, consommation alimentaire, diarrhée et maladie respiratoire.
{{% /alert %}}

Pour régler l'`Évaluation des animaux` sur votre appareil, procédez comme suit.

1. Sur l'écran principal de votre appareil VitalControl, sélectionnez l'élément de menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `Réglages` et appuyez sur le bouton `OK`.

2. Un sous-menu s'ouvre dans lequel divers paramètres sont affichés. Utilisez les touches fléchées △ ▽ pour sélectionner `Acquisition de données`. Confirmez avec `OK`.

3. Un autre sous-menu s'ouvre dans lequel vous pouvez utiliser les touches fléchées △ ▽ pour naviguer entre les champs de paramètres pour `Enregistrement du poids`, `Évaluation de l'animal` et `Période de contrôle des nouvelles vaches`. Sélectionnez `Évaluation des animaux` et confirmez avec `OK`.

4. Utilisez les touches fléchées ◁ ▷ pour régler la note désirée des animaux.

    ![VitalControl : réglages du menu note moyenne des animaux](../images/raitingofanimals.png "Note des animaux")

## Période de contrôle des vaches fraîches

{{% alert title="Explication" %}}
Lors de la gestion des vaches fraîches, il est considéré comme une meilleure pratique de vérifier quotidiennement les animaux pendant plusieurs jours après la naissance, y compris de prendre leur température. La durée de cette période de contrôle varie considérablement d'une ferme à l'autre. Pour cette raison, la longueur de la période de contrôle peut être réglée entre 3 et 14 jours dans les paramètres de VitalControl. La valeur définie pour la période de contrôle des vaches fraîches détermine le nombre de colonnes du graphique en colonnes affiché pour chaque animal dans la [liste des vaches fraîches](../../lists/fresh-cows/).
{{% /alert %}}

Pour régler la durée de la période de contrôle pour vos vaches fraîches, procédez comme suit :

1. Dans l'écran principal de votre appareil VitalControl, sélectionnez l'élément de menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Paramètres" /> `Réglages` et appuyez sur le bouton `OK`.

2. Un sous-menu s'ouvre dans lequel divers paramètres sont affichés. Utilisez les touches fléchées △ ▽ pour sélectionner `Acquisition de données`. Confirmez avec `OK`.

3. Un autre sous-menu s'ouvre dans lequel vous pouvez utiliser les touches fléchées △ ▽ pour passer entre les champs de réglage pour `Enregistrement du poids`, `Note de l'animal` et `Période de contrôle nouvelles vaches`. Sélectionnez `Période de contrôle nouvelles vaches` et confirmez avec `OK`.

4. Utilisez les touches fléchées ◁ ▷ pour régler la durée souhaitée de la période de contrôle en jours post-partum.

    ![VitalControl : réglages du menu période de contrôle vaches fraîches](../images/controlperiodfreshcows.png "Période de contrôle vaches fraîches")

<br>

Enregistrez les paramètres et revenez au menu principal <img src="/icons/gear.svg" width="25" align="bottom" alt="Paramètres" /> `Paramètres` en appuyant sur la touche `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Enregistrer et retourner" />&nbsp;.
