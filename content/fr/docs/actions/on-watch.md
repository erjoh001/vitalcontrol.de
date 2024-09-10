---
title: En surveillance
linkTitle: En surveillance
slug: on-watch
weight: 70
description: >
 Mettez des animaux sur la liste de surveillance ou retirez-les.
date: 2023-07-26
catégories: [Actions]
étiquettes: [Actions, en surveillance]
translationKey: actions/on-watch
---

## En surveillance {#on-watch}

Avec l'action `{{<T "OnWatch" >}}`, vous placez des animaux sur la liste de surveillance ou les retirez de celle-ci. La liste de surveillance vous aide à trouver plus rapidement et facilement les animaux suspects, facilitant vos contrôles de routine quotidiens. Pour appliquer l'action `{{<T "OnWatch" >}}`, procédez comme suit :

1. Sur l'écran principal de votre appareil VitalControl, sélectionnez l'élément de menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` et appuyez sur le bouton `{{<T "Ok" >}}`.

2. Soit scannez un animal à l'aide du transpondeur, soit sélectionnez un animal dans la liste. Confirmez avec `{{<T "Ok" >}}` et sélectionnez un animal avec les touches fléchées △ ▽. Confirmez avec `{{<T "Ok" >}}`.

3. Un sous-menu avec les actions pour animaux s'ouvre. Utilisez les touches fléchées ◁ ▷ △ ▽ pour sélectionner l'action &nbsp;<img src="/icons/actions/on-watch.svg" width="35" align="bottom" alt="En surveillance" /> `{{<T "OnWatch" >}}` et confirmez avec `{{<T "Ok" >}}`.

4. Une notification apparaît indiquant que l'animal a été ajouté avec succès à la liste de surveillance.

5. Vous pouvez retirer l'animal de la liste de surveillance en appliquant de nouveau l'action &nbsp;<img src="/icons/actions/on-watch-minus.svg" width="35" align="bottom" alt="Pas en surveillance" />  `{{<T "OnWatch" >}}`. Que vous ajoutiez ou retiriez l'animal de la liste de surveillance en utilisant l'action `{{<T "OnWatch" >}}` est indiqué par un petit signe ⊕ ou ⊖.

{{< tabpane >}}
{{< tab header="En surveillance :" text=true disabled=true />}}
{{% tab header="Scan de transpondeur" text=true %}}
![VitalControl: Menu Actions En surveillance](../images/onwatch-scan.png "En surveillance")
{{% /tab %}}
{{% tab header="Sélection manuelle dans la liste" text=true %}}
![VitalControl: Menu Actions En surveillance](../images/onwatch.png "En surveillance")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Astuce" %}}
Si cette action n'est pas disponible, l'action a probablement été désactivée ! Activez l'action dans le menu [paramètres des actions](../setting/). Alternativement, la réinitialisation de toutes les actions fera réapparaître cette action.
{{% /alert %}}
