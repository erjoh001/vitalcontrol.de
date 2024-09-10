---
title: Évaluation
linkTitle: Évaluation
slug: rating
weight: 30
description: >
 Évaluez vos animaux.
date: 2023-07-26
catégories: [Actions]
étiquettes: [Actions, Évaluation]
translationKey: actions/animal-rating
---

## Évaluez vos animaux {#rate-your-animals}

Lors de l'évaluation de l'animal, vous documentez l'état de l'animal individuel. L'état est déterminé visuellement et enregistré à l'aide du système de feux de circulation. Dans l'évaluation de base, seul l'état général est enregistré. Dans l'évaluation étendue, vous enregistrez l'état général, l'ingestion de nourriture, la consistance des fèces et les maladies respiratoires. Vous pouvez soit changer le mode d'évaluation directement dans l'action <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Évaluation" /> `{{<T "Rating" >}}` ou vous pouvez le définir dans les [paramètres](../../settings/data-acquisition/#mode-of-animal-rating).

{{% alert title="Conseil" %}}
Une évaluation jaune ou rouge signifie que VitalControl classe l'animal comme remarquable et le place sur la liste d'alarme.
{{% /alert %}}

1. Dans l'écran principal de votre appareil VitalControl, sélectionnez l'élément de menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` et appuyez sur le bouton `{{<T "Ok" >}}`.

2. Soit scannez un animal à l'aide du transpondeur, soit sélectionnez un animal dans la liste. Confirmez avec `{{<T "Ok" >}}` et sélectionnez un animal avec les touches fléchées △ ▽. Confirmez avec `{{<T "Ok" >}}`.

3. Un sous-menu avec les actions de l'animal s'ouvre. Utilisez les touches fléchées ◁ ▷ pour sélectionner l'action <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Évaluation" /> `{{<T "Rating" >}}` et confirmez avec `{{<T "Ok" >}}`.

4. Le menu d'évaluation s'ouvre. Si vous souhaitez changer le mode d'évaluation, utilisez le bouton `On/Off` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Chaîne d'actions" />&nbsp; et les touches fléchées ◁ ▷. Avec la touche `F1` <img src="/icons/footer/exit.svg" width="24" align="bottom" alt="Retour" />&nbsp; vous revenez au menu d'évaluation.

5. Utilisez les touches fléchées ◁ ▷ △ ▽ pour sélectionner un état et enregistrez-le avec la touche `F3` <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Sauvegarder" /> ou la touche `{{<T "Ok" >}}`.

6. En mode avancé, utilisez les touches `F1` et `F3` pour basculer entre les paramètres d'évaluation.

{{% alert title="Astuce" %}}
Si vous ne faites pas de sélection en utilisant les touches fléchées ◁ ▷ mais que vous enregistrez directement avec la touche `F3` ou `{{<T "Ok" >}}`, VitalControl enregistre une évaluation neutre, représentée par une couleur grise.
{{% /alert %}}

### Évaluation de base {#basic-rating}

{{< tabpane >}}
{{< tab header="Évaluation de base :" text=true disabled=true />}}
{{% tab header="Balayage de transpondeur" text=true %}}
![VitalControl: Actions du menu Évaluation](../images/basicrating-scan.png "Évaluation de base")
{{% /tab %}}
{{% tab header="Sélection manuelle dans la liste" text=true %}}
![VitalControl: Actions du menu Évaluation](../images/basicrating.png "Évaluation de base")
{{% /tab %}}
{{< /tabpane >}}

### Évaluation étendue {#extended-rating}

{{< tabpane >}}
{{< tab header="Évaluation de base :" text=true disabled=true />}}
{{% tab header="Balayage de transpondeur" text=true %}}
![VitalControl: Actions du menu Évaluation](../images/extendedrating-scan.png "Évaluation étendue")
{{% /tab %}}
{{% tab header="Sélection manuelle dans la liste" text=true %}}
![VitalControl: Actions du menu Évaluation](../images/extendedrating.png "Évaluation étendue")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Astuce" %}}
Si cette action n'est pas disponible, l'action a probablement été désactivée ! Activez l'action dans le menu [paramètres des actions](../setting/). Alternativement, la réinitialisation de toutes les actions fera réapparaître cette action.
{{% /alert %}}
