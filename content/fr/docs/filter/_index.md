---
title: Application d'un filtre sur une liste d'animaux
linkTitle: Filtre
weight: 50
description: >
 Comment appliquer un filtre sur une liste d'animaux afin d'afficher uniquement un sous-ensemble des animaux présents sur l'appareil.
date: 2023-07-26
catégories: [Filtre]
étiquettes: [Filtre]
translationKey: filter
---
## Application des filtres {#applying-filters}

{{% alert title="NOTE" %}}
Le filtre vous aide à effectuer une sélection en utilisant des critères de filtrage dans les éléments de menu `{{<T "Herd" >}}`, `{{<T "Lists" >}}` et `{{<T "Evaluation" >}}` de l'appareil VitalControl. Dès que vous appliquez un filtre, des symboles pour les différents critères de filtrage apparaissent en haut de l'écran. Ces symboles sont utilisés pour vous aider à savoir si et quels critères de filtrage sont activés. Par exemple, si vous réglez le filtre `{{<T "Sex" >}}` sur masculin, l'appareil n'utilisera que des animaux mâles. Par exemple, si vous activez également le filtre `{{<T "OnWatch" >}}`, l'appareil n'utilise que des animaux mâles qui sont sur la liste d'observation.
{{% /alert %}}

Pour créer un filtre dans les évaluations, procédez comme suit :

1. Dans le sous-menu appartenant à l'élément de menu principal <img src="/icons/main/evaluation.svg" width="50" align="bottom" alt="Évaluation" /> `{{<T "Evaluation" >}}` appuyez une fois sur la touche `F3` <img src="/icons/footer/filter.svg" width="25" align="bottom" alt="Filtre" />. Dans le sous-menu appartenant aux éléments de menu principaux <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Listes" /> `{{<T "Lists" >}}` et <img src="/icons/main/herd.svg" width="60" align="bottom" alt="Troupeau" /> `{{<T "Herd" >}}`, vous devez appuyer deux fois sur la touche.

2. Un sous-menu s'ouvre dans lequel vous pouvez régler toutes les options de filtrage. Vous pouvez filtrer par `{{<T "AnimalID" >}}`, `{{<T "Age" >}}`, `{{<T "Sex" >}}`, `{{<T "Transponder" >}}`, `{{<T "NationalAnimalID" >}}`, `{{<T "Fever" >}}`, `{{<T "OnWatch" >}}`, `{{<T "TypeAnimal" >}}` et `{{<T "Alarm" >}}`.

3. Pour les filtres `{{<T "TypeAnimal" >}}`, `{{<T "Sex" >}}`, `{{<T "Transponder" >}}` et `{{<T "NationalAnimalID" >}}` naviguez vers la zone correspondante et confirmez avec `{{<T "Ok" >}}`. Utilisez les touches fléchées ◁ ▷ pour spécifier le réglage souhaité. Utilisez la touche `F3` `{{<T "Apply" >}}` pour mettre en place le réglage sélectionné. Pour annuler vos modifications de filtre, appuyez sur la touche `F1` &nbsp;<img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Retour" />&nbsp;.

![VitalControl : menu Évaluation Créer un filtre](images/filter.png "Créer un filtre")

4. Pour les filtres `{{<T "AnimalID" >}}` et `{{<T "Age" >}}`, sélectionnez le critère correspondant et confirmez avec `{{<T "Ok" >}}`. Vous verrez alors une limite inférieure et supérieure. Naviguez jusqu'à la limite désirée en utilisant les touches fléchées △ ▽ et confirmez en appuyant deux fois sur `{{<T "Ok" >}}`. Vous pouvez maintenant régler le nombre désiré en utilisant les touches fléchées ◁ ▷ et les touches fléchées △ ▽. Une fois tous les réglages corrects, appuyez de nouveau sur `{{<T "Ok" >}}` pour quitter le mode de réglage et appliquer le(s) filtre(s) sélectionné(s) avec la touche `F3` `{{<T "Apply" >}}`. En utilisant la touche `F1` &nbsp;<img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Retour" />&nbsp;, vous pouvez annuler vos modifications si vous le souhaitez.

![VitalControl : menu Évaluation Créer un filtre](images/filter2.png "Créer un filtre")

5. Pour les filtres `{{<T "Fever" >}}`, `{{<T "OnWatch" >}}` et `{{<T "Alarm" >}}`, il est possible de désactiver ou d'activer leur application. Pour ce faire, sélectionnez le filtre correspondant et confirmez avec `{{<T "Ok" >}}`. Le filtre est maintenant actif. Confirmez de nouveau avec `{{<T "Ok" >}}` pour désactiver le filtre.

![VitalControl : menu Évaluation Créer un filtre](images/filter3.png "Créer un filtre")

6. Une fois que vous avez réglé tous les filtres, utilisez la touche `F3` `{{<T "Apply" >}}` pour mettre en place les filtres définis ou appuyez sur la touche `F1` <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Retour" /> pour annuler vos modifications aux filtre(s).
