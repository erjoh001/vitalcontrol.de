---
title: "Najnovije verzije firmvera"
linkTitle: "Najnovije verzije"
date: 2023-07-18T12:47:29+02:00
draft: false
weight: 10
description: >
 Popis trenutnih verzija firmvera za uređaj VitalControl.
---

## Odredite verzije firmvera instalirane na vašem uređaju {#determine-firmware-versions-installed-on-your-device}

1. Otvorite stavku izbornika <img src="/icons/device.svg" width="25" align="bottom" alt="Device" /> `{{<T "Device" >}}` na glavnom ekranu vašeg VitalControl uređaja.

2. Pozovite podizbornik `{{<T "Info" >}}`, odaberite stavku izbornika `{{<T "Software" >}}` i potvrdite s `{{<T "Ok" >}}`. Otvorit će se skočni prozor koji prikazuje verzije softvera trenutno instalirane na vašem uređaju:

![VitalControl: odredite verzije firmvera](../images/firmware-versions.png "Prikaz verzija firmvera")

## Najnovije verzije firmvera: {#latest-firmware-versions}

Sljedeća tablica prikazuje trenutne verzije firmvera:

|                 | GUI-Firmware  | Middleware  | Bootloader |
|-----------------|:-------------:|:-----------:|:----------:|
| **Verzija**     | {{% version/firmware component="gui" %}} | {{% version/firmware component="middleware" %}} | {{% version/firmware component="bootloader" %}} |
| **Date**       | {{% version/firmware component="gui" info="date" %}}  | {{% version/firmware component="middleware" info="date" %}} | {{% version/firmware component="bootloader" info="date" %}} |
| **Commit Hash** | {{% version/firmware component="gui" info="commitHash" %}} | {{% version/firmware component="middleware" info="commitHash" %}} |  {{% version/firmware component="bootloader" info="commitHash" %}} |
| **Commit №**    | {{% version/firmware component="gui" info="commitNo" %}} | {{% version/firmware component="middleware" info="commitNo" %}} | {{% version/firmware component="bootloader" info="commitNo" %}}|

{{% alert title="Savjet" %}}
Ako vam nedostaju novije značajke na vašem uređaju ili imate problema sa stabilnošću, preporučuje se [ažurirati](../update/) firmver na vašem uređaju na najnoviju objavljenu verziju.
{{% /alert %}}
