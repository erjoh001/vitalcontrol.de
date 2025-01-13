---
title: "Senaste firmware-versionerna"
linkTitle: "Senaste versionerna"
date: 2023-07-18T12:47:29+02:00
draft: false
weight: 10
description: >
 Lista över de aktuella firmware-versionerna för VitalControl-enheten.
---

## Bestäm firmware-versioner installerade på din enhet {#determine-firmware-versions-installed-on-your-device}

1. Öppna menyalternativet <img src="/icons/device.svg" width="25" align="bottom" alt="Device" /> `{{<T "Device" >}}` på huvudskärmen på din VitalControl-enhet.

2. Gå till undermenyn `{{<T "Info" >}}`, välj menyalternativet `{{<T "Software" >}}` och bekräfta med `{{<T "Ok" >}}`. Ett popup-fönster öppnas som listar de programvaruversioner som för närvarande är installerade på din enhet:

![VitalControl: bestäm firmware-versioner](../images/firmware-versions.png "Visa firmware-versioner")

## Senaste firmware-versionerna: {#latest-firmware-versions}

Följande tabell listar de aktuella firmware-versionerna:

|                 | GUI-Firmware  | Middleware  | Bootloader |
|-----------------|:-------------:|:-----------:|:----------:|
| **Version**     | {{% version/firmware component="gui" %}} | {{% version/firmware component="middleware" %}} | {{% version/firmware component="bootloader" %}} |
| **Date**       | {{% version/firmware component="gui-date" %}} | {{% version/firmware component="middleware-date" %}} | {{% version/firmware component="bootloader-date" %}} |
| **Commit Hash** | {{% version/firmware component="gui-commitHash" %}} | {{% version/firmware component="middleware-commitHash" %}} |  {{% version/firmware component="bootloader-commitHash" %}} |
| **Commit №**    | {{% version/firmware component="gui-commitNo" %}} | {{% version/firmware component="middleware-commitNo" %}} | {{% version/firmware component="bootloader-commitNo" %}}|

{{% alert title="Tips" %}}
Om du saknar nyare funktioner på din enhet eller stöter på stabilitetsproblem, rekommenderas du att [uppdatera](../update/) firmware på din enhet till den senaste släppta versionen.
{{% /alert %}}
