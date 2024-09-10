---
title: Sécher
linkTitle: Sécher
slug: dry-off
weight: 115
description: >
 Sécher une vache ou l'ajouter à la liste des vaches fraîches
date: 2023-07-26
catégories: [Sécher]
étiquettes: [Sécher]
translationKey: actions/dry-cows
---

## Sécher {#dry-off}

{{% alert title="Conseil" %}}
Selon le statut initial de la vache, vous pouvez soit sécher l'animal et l'ajouter à la liste des sécheuses, soit marquer l'animal comme une trayeuse fraîche et ainsi l'ajouter à la liste des trayeuses fraîches. La distinction entre les fonctions est clairement indiquée par un symbole plus ou un symbole moins.
{{% /alert %}}

### Sécher une vache {#dry-off-a-cow}

1. Sur l'écran principal de votre appareil VitalControl, sélectionnez l'élément de menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` et appuyez sur le bouton `{{<T "Ok" >}}`.

2. Soit scannez le transpondeur de l'animal sans l'ID national de l'animal, soit sélectionnez l'animal dans la liste. Pour ce faire, confirmez avec `{{<T "Ok" >}}` et sélectionnez l'ID de l'animal à l'aide des touches fléchées △ ▽. Confirmez avec `{{<T "Ok" >}}`.

3. Un sous-menu avec les actions de l'animal s'ouvre. Utilisez les touches fléchées ◁ ▷ △ ▽ pour sélectionner l'action <img src="/icons/actions/dryoff-plus.svg" width="35" align="bottom" alt="Sécher" /> `{{<T "DryOff" >}}` et confirmez avec `{{<T "Ok" >}}`.

4. L'animal a été marqué avec succès comme sec.

{{< tabpane >}}
{{< tab header="Sécher une vache :" text=true disabled=true />}}
{{% tab header="Scan du transpondeur" text=true %}}
![VitalControl: Menu Actions Sécher](../images/dryoff-scan.png "Sécher une vache")
{{% /tab %}}
{{% tab header="Sélection manuelle dans la liste" text=true %}}
![VitalControl: Menu Actions Sécher](../images/dryoff.png "Sécher une vache")
{{% /tab %}}
{{< /tabpane >}}

### Marquer comme lactée {#mark-as-lactated}

1. Sur l'écran principal de votre appareil VitalControl, sélectionnez l'élément de menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` et appuyez sur le bouton `{{<T "Ok" >}}`.

2. Soit scannez le transpondeur de l'animal sans l'ID national de l'animal, soit sélectionnez l'animal dans la liste. Pour ce faire, confirmez avec `{{<T "Ok" >}}` et sélectionnez l'ID de l'animal à l'aide des touches fléchées △ ▽. Confirmez avec `{{<T "Ok" >}}`.

3. Un sous-menu avec les actions pour les animaux s'ouvre. Utilisez les touches fléchées ◁ ▷ △ ▽ pour sélectionner l'action <img src="/icons/actions/dryoff-minus.svg" width="35" align="bottom" alt="Dry off" /> `{{<T "DryOff" >}}` et confirmez avec `{{<T "Ok" >}}`.

4. L'animal a été marqué avec succès comme lacté.

{{< tabpane >}}
{{< tab header="Marquer comme lacté :" text=true disabled=true />}}
{{% tab header="Scan de transpondeur" text=true %}}
![VitalControl: Menu Actions Marquer comme lacté](../images/lactated-scan.png "Marquer comme lacté")
{{% /tab %}}
{{% tab header="Sélection manuelle dans la liste" text=true %}}
![VitalControl: Menu Actions Marquer comme lacté](../images/lactated.png "Marquer comme lacté")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Astuce" %}}
Si cette action n'est pas disponible, l'action a probablement été désactivée ! Activez l'action dans le menu [paramètres d'actions](../setting/). Alternativement, réinitialiser toutes les actions fera réapparaître cette action.
{{% /alert %}}
