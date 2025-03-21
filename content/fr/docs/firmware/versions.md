---
title: "Dernières versions du firmware"
linkTitle: "Dernières versions"
date: 2023-07-18T12:47:29+02:00
draft: false
weight: 10
description: >
 Liste des versions actuelles du firmware pour le dispositif VitalControl.
---

## Déterminer les versions du firmware installées sur votre dispositif {#determine-firmware-versions-installed-on-your-device}

1. Ouvrez l'élément de menu <img src="/icons/device.svg" width="25" align="bottom" alt="Dispositif" /> `{{<T "Device" >}}` sur l'écran principal de votre dispositif VitalControl.

2. Appelez le sous-menu `{{<T "Info" >}}`, sélectionnez l'élément de menu `{{<T "Software" >}}` et confirmez avec `{{<T "Ok" >}}`. Une fenêtre contextuelle s'ouvre qui liste les versions logicielles actuellement installées sur votre dispositif :

![VitalControl : déterminer les versions du firmware](../images/firmware-versions.png "Afficher les versions du firmware")

## Dernières versions du firmware: {#latest-firmware-versions}

Le tableau suivant liste les versions actuelles du firmware :

|                 | GUI-Firmware  | Middleware  | Bootloader |
|-----------------|:-------------:|:-----------:|:----------:|
| **Version**     | {{% version/firmware component="gui" %}} | {{% version/firmware component="middleware" %}} | {{% version/firmware component="bootloader" %}} |
| **Date**       | {{% version/firmware component="gui" info="date" %}}  | {{% version/firmware component="middleware" info="date" %}} | {{% version/firmware component="bootloader" info="date" %}} |
| **Commit Hash** | {{% version/firmware component="gui" info="commitHash" %}} | {{% version/firmware component="middleware" info="commitHash" %}} |  {{% version/firmware component="bootloader" info="commitHash" %}} |
| **Commit №**    | {{% version/firmware component="gui" info="commitNo" %}} | {{% version/firmware component="middleware" info="commitNo" %}} | {{% version/firmware component="bootloader" info="commitNo" %}}|

{{% alert title="Conseil" %}}
Si vous manquez de nouvelles fonctionnalités sur votre dispositif ou rencontrez des problèmes de stabilité, nous vous encourageons à [mettre à jour](../update/) le firmware sur votre dispositif vers la dernière version disponible.
{{% /alert %}}


