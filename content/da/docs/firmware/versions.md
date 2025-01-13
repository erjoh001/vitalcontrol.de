---
title: "Seneste firmware-versioner"
linkTitle: "Seneste versioner"
date: 2023-07-18T12:47:29+02:00
draft: false
weight: 10
description: >
 Liste over de nuværende firmware-versioner for VitalControl-enheden.
---

## Bestem firmware-versioner installeret på din enhed {#determine-firmware-versions-installed-on-your-device}

1. Åbn menuen <img src="/icons/device.svg" width="25" align="bottom" alt="Device" /> `{{<T "Device" >}}` på hovedskærmen af din VitalControl-enhed.

2. Åbn undermenuen `{{<T "Info" >}}`, vælg menuen `{{<T "Software" >}}` og bekræft med `{{<T "Ok" >}}`. Et pop-up vindue åbnes, som viser de software-versioner, der i øjeblikket er installeret på din enhed:

![VitalControl: bestem firmware-versioner](../images/firmware-versions.png "Vis firmware-versioner")

## Seneste firmware-versioner: {#latest-firmware-versions}

Følgende tabel viser de nuværende firmware-versioner:

|                 | GUI-Firmware  | Middleware  | Bootloader |
|-----------------|:-------------:|:-----------:|:----------:|
| **Version**     | {{% version/firmware component="gui" %}} | {{% version/firmware component="middleware" %}} | {{% version/firmware component="bootloader" %}} |
| **Dato**       | {{% version/firmware component="gui-date" %}} | {{% version/firmware component="middleware-date" %}} | {{% version/firmware component="bootloader-date" %}} |
| **Commit Hash** | {{% version/firmware component="gui-commitHash" %}} | {{% version/firmware component="middleware-commitHash" %}} |  {{% version/firmware component="bootloader-commitHash" %}} |
| **Commit №**    | {{% version/firmware component="gui-commitNo" %}} | {{% version/firmware component="middleware-commitNo" %}} | {{% version/firmware component="bootloader-commitNo" %}}|

{{% alert title="Tip" %}}
Hvis du mangler nyere funktioner på din enhed eller oplever stabilitetsproblemer, opfordres du til at [opdatere](../update/) firmwaren på din enhed til den senest udgivne version.
{{% /alert %}}
