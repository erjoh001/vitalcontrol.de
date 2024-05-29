---
title: Désinscription d'un animal
linkTitle: Désinscrire
slug: unregister
weight: 100
description: >
 Désinscrire un animal
date: 2023-07-26
categories: [Actions]
tags: [Actions, Désinscription]
translationKey: actions/unregister
---
{{% alert title="Attention" color="warning" %}}
Dès que vous supprimez l'enregistrement des données de l'animal, il n'est plus disponible pour des fins d'évaluation ! Si vous désinscrivez un animal, mais souhaitez par exemple évaluer à nouveau le développement de l'animal par la suite, vous devez conserver l'enregistrement des données de l'animal !
{{% /alert %}}

## Désinscription {#unregister}

L'action `{{<T "Unregister" >}}` vous permet de désinscrire un animal dès qu'il est déplacé. Pour désinscrire un animal, procédez comme suit :

1. Dans l'écran principal de votre appareil VitalControl, sélectionnez l'élément de menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` et appuyez sur le bouton `{{<T "Ok" >}}`.

2. Soit scannez un animal à l'aide du transpondeur, soit sélectionnez un animal dans la liste. Confirmez avec `{{<T "Ok" >}}` et sélectionnez un animal avec les touches fléchées △ ▽. Confirmez avec `{{<T "Ok" >}}`.

3. Un sous-menu avec les actions pour l'animal s'ouvre. Utilisez les touches fléchées ◁ ▷ △ ▽ pour sélectionner l'action &nbsp;<img src="/icons/actions/unregister.svg" width="33" align="bottom" alt="Désinscrire" /> `{{<T "Unregister" >}}` et confirmez avec `{{<T "Ok" >}}`.

4. Un autre sous-menu s'ouvre dans lequel vous pouvez enregistrer divers paramètres. Utilisez les touches fléchées △ ▽ pour sélectionner l'option de paramètre souhaitée. Utilisez les touches fléchées ◁ ▷ pour sélectionner le paramètre souhaité.

5. Utilisez la touche `F3` `{{<T "Unregister" >}}` pour désinscrire l'animal avec les paramètres spécifiés.

{{< tabpane >}}
{{< tab header="Désinscription :" text=true disabled=true />}}
{{% tab header="Scan du transpondeur" text=true %}}
![VitalControl: Menu Action Désinscription](../images/unregister-scan.png "Désinscrire un animal")
{{% /tab %}}
{{% tab header="Sélection manuelle dans la liste" text=true %}}
![VitalControl: Menu Action Désinscription](../images/unregister.png "Désinscrire un animal")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Astuce" %}}
Si cette action n'est pas disponible, l'action a probablement été désactivée ! Activez l'action dans le menu [paramètres des actions](../setting/). Alternativement, la réinitialisation de toutes les actions permettra de retrouver cette action.
{{% /alert %}}
