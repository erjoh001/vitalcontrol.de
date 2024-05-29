---
title: Détacher le transpondeur
linkTitle: Détacher le transpondeur
slug: unlink-transponder
weight: 110
description: >
 Détacher le lien du transpondeur à un animal
date: 2023-07-26
categories: [Transpondeur]
tags: [Transpondeur]
translationKey: actions/transponder-unlink
---
{{% alert title="Attention" color="warning" %}}
Cette action n'est pas activée par défaut ! Activez-la comme décrit dans [paramètre d'action](../setting/).
{{% /alert %}}

## Détacher le transpondeur {#unlink-transponder}

Avec cette action, vous pouvez détacher un transpondeur qui a déjà été assigné à un animal de cet animal.

1. Sur l'écran principal de votre appareil VitalControl, sélectionnez l'élément de menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` et appuyez sur le bouton `{{<T "Ok" >}}`.

2. Soit scannez l'animal avec le transpondeur désiré, soit sélectionnez l'animal avec le transpondeur dans la liste. Pour ce faire, confirmez avec `{{<T "Ok" >}}` et sélectionnez l'ID de l'animal en utilisant les touches fléchées △ ▽. Confirmez avec `{{<T "Ok" >}}`.

3. Un sous-menu avec les actions pour l'animal s'ouvre. Utilisez les touches fléchées ◁ ▷ △ ▽ pour sélectionner l'action &nbsp;<img src="/icons/actions/unlink-transponder.svg" width="45" align="bottom" alt="Détacher le transpondeur" /> `{{<T "UnlinkTransponder" >}}` et confirmez avec `{{<T "Ok" >}}`.

4. Le transpondeur a été détaché avec succès de l'animal.

{{< tabpane >}}
{{< tab header="Détacher le transpondeur :" text=true disabled=true />}}
{{% tab header="Scan du transpondeur" text=true %}}
![VitalControl: Menu Action Détacher le transpondeur](../images/unlinktransponder-scan.png "Détacher le transpondeur")
{{% /tab %}}
{{% tab header="Sélection manuelle dans la liste" text=true %}}
![VitalControl: Menu Action Détacher le transpondeur](../images/unlinktransponder.png "Détacher le transpondeur")
{{% /tab %}}
{{< /tabpane >}}
