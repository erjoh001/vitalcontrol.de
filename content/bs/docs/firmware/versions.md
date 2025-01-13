---
title: "Najnovije verzije firmvera"
linkTitle: "Najnovije verzije"
date: 2023-07-18T12:47:29+02:00
draft: false
weight: 10
description: >
 Lista trenutnih verzija firmvera za uređaj VitalControl.
---

## Određivanje verzija firmvera instaliranih na vašem uređaju {#determine-firmware-versions-installed-on-your-device}

1. Otvorite stavku menija <img src="/icons/device.svg" width="25" align="bottom" alt="Device" /> `{{<T "Device" >}}` na glavnom ekranu vašeg VitalControl uređaja.

2. Pozovite podmeni `{{<T "Info" >}}`, odaberite stavku menija `{{<T "Software" >}}` i potvrdite sa `{{<T "Ok" >}}`. Otvoriće se prozor sa listom verzija softvera trenutno instaliranih na vašem uređaju:

![VitalControl: određivanje verzija firmvera](../images/firmware-versions.png "Prikaz verzija firmvera")

## Najnovije verzije firmvera: {#latest-firmware-versions}

Sledeća tabela prikazuje trenutne verzije firmvera:

|                 | GUI-Firmware  | Middleware  | Bootloader |
|-----------------|:-------------:|:-----------:|:----------:|
| **Verzija**    | {{% version/firmware component="gui" %}} | {{% version/firmware component="middleware" %}} | {{% version/firmware component="bootloader" %}} |
| **Date**       | {{% version/firmware component="gui-date" %}} | {{% version/firmware component="middelware-date" %}} | {{% version/firmware component="bootloader-date" %}} |
| **Commit Hash** | {{% version/firmware component="gui-commitHash" %}} | {{% version/firmware component="middelware-commitHash" %}} |  {{% version/firmware component="bootloader-commitHash" %}} |
| **Commit №**    | {{% version/firmware component="gui-commitNo" %}} | {{% version/firmware component="middelware-commitNo" %}} | {{% version/firmware component="bootloader-commitNo" %}}|

{{% alert title="Savjet" %}}
Ako vam nedostaju novije funkcije na vašem uređaju ili imate problema sa stabilnošću, preporučuje se da [ažurirate](../update/) firmver na vašem uređaju na najnoviju verziju.
{{% /alert %}}
