---
title: "Siste firmware-versjoner"
linkTitle: "Siste versjoner"
date: 2023-07-18T12:47:29+02:00
draft: false
weight: 10
description: >
 Liste over de nåværende firmware-versjonene for VitalControl-enheten.
---

## Bestem firmware-versjoner installert på enheten din {#determine-firmware-versions-installed-on-your-device}

1. Åpne menyelementet <img src="/icons/device.svg" width="25" align="bottom" alt="Device" /> `{{<T "Device" >}}` på hovedskjermen til din VitalControl-enhet.

2. Åpne undermenyen `{{<T "Info" >}}`, velg menyelementet `{{<T "Software" >}}` og bekreft med `{{<T "Ok" >}}`. Et popup-vindu åpnes som viser programvareversjonene som for øyeblikket er installert på enheten din:

![VitalControl: determine firmware versions](../images/firmware-versions.png "Display firmware versions")

## Siste firmware-versjoner: {#latest-firmware-versions}

Følgende tabell viser de nåværende firmware-versjonene:

|                 | GUI-Firmware  | Middleware  | Bootloader |
|-----------------|:-------------:|:-----------:|:----------:|
| **Versjon**     | {{% version/firmware component="gui" %}} | {{% version/firmware component="middleware" %}} | {{% version/firmware component="bootloader" %}} |
| **Dato**       | {{% version/firmware component="gui-date" %}} | {{% version/firmware component="middleware-date" %}} | {{% version/firmware component="bootloader-date" %}} |
| **Commit Hash** | {{% version/firmware component="gui-commitHash" %}} | {{% version/firmware component="middleware-commitHash" %}} |  {{% version/firmware component="bootloader-commitHash" %}} |
| **Commit №**    | {{% version/firmware component="gui-commitNo" %}} | {{% version/firmware component="middleware-commitNo" %}} | {{% version/firmware component="bootloader-commitNo" %}}|

{{% alert title="Tips" %}}
Hvis du mangler nyere funksjoner på enheten din eller opplever stabilitetsproblemer, oppfordres du til å [oppdatere](../update/) firmwaren på enheten din til den nyeste utgitte versjonen.
{{% /alert %}}
