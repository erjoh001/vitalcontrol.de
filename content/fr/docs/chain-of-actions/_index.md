---
title: "Chaîne d'actions : configuration et utilisation"
linkTitle: "Chaîne d'actions"
weight: 15
date: 2023-07-28T13:25:28+02:00
draft: false
slug: chain-of-actions
description: >
 Effectuer plusieurs actions animales consécutivement
categories: [Chaîne d'actions]
tags: [Chaîne d'actions, Actions]
translationKey: action-chain
---
## Chaîne d'actions {#chain-of-actions}

La chaîne d'actions vous permet d'exécuter automatiquement plusieurs actions pour un animal l'une après l'autre. Par exemple, vous pouvez sélectionner les actions `{{<T "Temperature" >}}` et `{{<T "Rating" >}}`. Si vous exécutez ensuite la chaîne d'actions, vous pouvez d'abord prendre la température de votre animal et enregistrer l'évaluation immédiatement après.

### Utiliser la chaîne d'actions {#use-chain-of-actions}

1. Sur l'écran principal de votre appareil VitalControl, sélectionnez l'élément de menu &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Chaîne d'actions" />&nbsp; `{{<T "ActionChain" >}}` et appuyez sur le bouton `{{<T "Ok" >}}`.

2. Soit scannez un animal à l'aide du transpondeur, soit confirmez avec `{{<T "Ok" >}}` et utilisez les touches fléchées △ ▽ ◁ ▷ pour entrer l'ID de l'animal souhaité.

3. La chaîne d'actions est maintenant exécutée. Dès que toutes les actions dans la chaîne d'actions ont été effectuées, le prochain animal peut être sélectionné directement.

{{< tabpane >}}
{{< tab header="Utiliser la chaîne d'actions :" text=true disabled=true />}}
{{% tab header="Scan de transpondeur" text=true %}}
![VitalControl : Menu chaîne d'actions](images/chainofactions-scan.png "Chaîne d'actions")
{{% /tab %}}
{{% tab header="Sélection manuelle dans la liste" text=true %}}
![VitalControl : Menu chaîne d'actions](images/chainofactions.png "Chaîne d'actions")
{{% /tab %}}
{{< /tabpane >}}

### Configurer la chaîne d'actions {#set-chain-of-actions}

1. Sur l'écran principal de votre appareil VitalControl, sélectionnez l'élément de menu &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Chaîne d'actions" />&nbsp; `{{<T "ActionChain" >}}` et appuyez sur le bouton `{{<T "Ok" >}}`.

2. Utilisez le bouton `F2` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Chaîne d'actions" />&nbsp; (`{{<T "Settings" >}}`).

3. Un écran superposé apparaît. Utilisez les touches fléchées △ ▽ pour choisir entre les actions listées 1 - 4 (vous pouvez effectuer jusqu'à quatre actions de suite). Utilisez les touches fléchées ◁ ▷ pour sélectionner l'action désirée pour l'action respective. Sauvegardez les paramètres avec la touche `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Sauvegarder et retourner" />&nbsp;.

4. Si vous souhaitez réinitialiser la chaîne d'actions complète, sélectionnez l'option `{{<T "ResetActionChain" >}}` dans le sous-menu en utilisant les touches fléchées △ ▽ et confirmez avec `{{<T "Ok" >}}`.

    ![VitalControl: Menu chaîne d'actions](images/setchainofactions.png "Configurer la chaîne d'actions")

{{% alert title="Astuce" %}}
Dans les actions individuelles, vous disposez des mêmes options de réglage que celles décrites dans le chapitre [Actions](../actions) pour chaque action individuelle.
{{% /alert %}}

{{% alert title="Astuce" %}}
Les symboles dans l'écran de démarrage de la chaîne d'actions montrent quelles actions vous avez définies et dans quel ordre.
{{% /alert %}}
