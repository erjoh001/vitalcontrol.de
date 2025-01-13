---
title: "Naujausios programinės įrangos versijos"
linkTitle: "Naujausios versijos"
date: 2023-07-18T12:47:29+02:00
draft: false
weight: 10
description: >
 Dabartinių VitalControl įrenginio programinės įrangos versijų sąrašas.
---

## Nustatyti įrenginyje įdiegtas programinės įrangos versijas {#determine-firmware-versions-installed-on-your-device}

1. Atidarykite meniu punktą <img src="/icons/device.svg" width="25" align="bottom" alt="Device" /> `{{<T "Device" >}}` pagrindiniame VitalControl įrenginio ekrane.

2. Iškvieskite submeniu `{{<T "Info" >}}`, pasirinkite meniu punktą `{{<T "Software" >}}` ir patvirtinkite su `{{<T "Ok" >}}`. Atsidarys iššokantis langas, kuriame bus išvardytos šiuo metu jūsų įrenginyje įdiegtos programinės įrangos versijos:

![VitalControl: nustatyti programinės įrangos versijas](../images/firmware-versions.png "Rodyti programinės įrangos versijas")

## Naujausios programinės įrangos versijos: {#latest-firmware-versions}

Šioje lentelėje pateikiamos dabartinės programinės įrangos versijos:

|                 | GUI-Firmware  | Middleware  | Bootloader |
|-----------------|:-------------:|:-----------:|:----------:|
| **Versija**     | {{% version/firmware component="gui" %}} | {{% version/firmware component="middleware" %}} | {{% version/firmware component="bootloader" %}} |
| **Data**       | {{% version/firmware component="gui-date" %}} | {{% version/firmware component="middelware-date" %}} | {{% version/firmware component="bootloader-date" %}} |
| **Commit Hash** | {{% version/firmware component="gui-commitHash" %}} | {{% version/firmware component="middelware-commitHash" %}} |  {{% version/firmware component="bootloader-commitHash" %}} |
| **Commit №**    | {{% version/firmware component="gui-commitNo" %}} | {{% version/firmware component="middelware-commitNo" %}} | {{% version/firmware component="bootloader-commitNo" %}}|

{{% alert title="Patarimas" %}}
Jei jūsų įrenginyje trūksta naujesnių funkcijų arba susiduriate su stabilumo problemomis, rekomenduojame [atnaujinti](../update/) įrenginio programinę įrangą į naujausią išleistą versiją.
{{% /alert %}}
