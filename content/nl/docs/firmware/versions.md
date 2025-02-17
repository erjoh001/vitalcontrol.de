---
title: "Laatste firmwareversies"
linkTitle: "Laatste versies"
date: 2023-07-18T12:47:29+02:00
draft: false
weight: 10
description: >
 Lijst van de huidige firmwareversies voor het VitalControl-apparaat.
---

## Bepaal geïnstalleerde firmwareversies op uw apparaat {#determine-firmware-versions-installed-on-your-device}

1. Open het menu-item <img src="/icons/device.svg" width="25" align="bottom" alt="Apparaat" /> `Apparaat` op het hoofdscherm van uw VitalControl-apparaat.

2. Roep het submenu `Info` op, selecteer het menu-item `Software` en bevestig met `OK`. Er opent een pop-upvenster dat de momenteel geïnstalleerde softwareversies op uw apparaat weergeeft:

![VitalControl: bepaal firmwareversies](../images/firmware-versions.png "Weergave firmwareversies")

## Laatste firmwareversies: {#latest-firmware-versions}

De volgende tabel toont de huidige firmwareversies:

|                 | GUI-Firmware  | Middleware  | Bootloader |
|-----------------|:-------------:|:-----------:|:----------:|
| **Versie**     | {{% version/firmware component="gui" %}} | {{% version/firmware component="middleware" %}} | {{% version/firmware component="bootloader" %}} |
| **Date**       | {{% version/firmware component="gui" info="date" %}}  | {{% version/firmware component="middleware" info="date" %}} | {{% version/firmware component="bootloader" info="date" %}} |
| **Commit Hash** | {{% version/firmware component="gui" info="commitHash" %}} | {{% version/firmware component="middleware" info="commitHash" %}} |  {{% version/firmware component="bootloader" info="commitHash" %}} |
| **Commit №**    | {{% version/firmware component="gui" info="commitNo" %}} | {{% version/firmware component="middleware" info="commitNo" %}} | {{% version/firmware component="bootloader" info="commitNo" %}}|

{{% alert title="Tip" %}}
Als u nieuwere functies mist op uw apparaat of stabiliteitsproblemen ondervindt, wordt u aangeraden de firmware op uw apparaat [bij te werken](../update/) naar de nieuwste uitgebrachte versie.
{{% /alert %}}
