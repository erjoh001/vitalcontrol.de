---
title: "Viimased püsivara versioonid"
linkTitle: "Viimased versioonid"
date: 2023-07-18T12:47:29+02:00
draft: false
weight: 10
description: >
 Viimaste püsivara versioonide loetelu VitalControl seadmele.
---

## Määra oma seadme paigaldatud püsivara versioonid {#determine-firmware-versions-installed-on-your-device}

1. Ava menüüpunkt <img src="/icons/device.svg" width="25" align="bottom" alt="Seade" /> `{{<T "Device" >}}` oma VitalControl seadme põhiekraanil.

2. Kutsu esile alammenüü `{{<T "Info" >}}`, vali menüüpunkt `{{<T "Software" >}}` ja kinnita `{{<T "Ok" >}}`. Avaneb hüpikaken, mis loetleb hetkel seadmesse paigaldatud tarkvaraversioonid:

![VitalControl: määra püsivara versioonid](../images/firmware-versions.png "Kuva püsivara versioonid")

## Viimased püsivara versioonid: {#latest-firmware-versions}

Järgnev tabel loetleb praegused püsivara versioonid:

|                 | GUI-püsivara  | Tarkvara vahenduskiht  | Alglaadur |
|-----------------|:-------------:|:-----------:|:----------:|
| **Versioon**     | {{% version/firmware component="gui" %}} | {{% version/firmware component="middleware" %}} | {{% version/firmware component="bootloader" %}} |
| **Kuupäev**       | {{% version/firmware component="gui-date" %}} | {{% version/firmware component="middleware-date" %}} | {{% version/firmware component="bootloader-date" %}} |
| **Kommiti Hash** | {{% version/firmware component="gui-commitHash" %}} | {{% version/firmware component="middleware-commitHash" %}} |  {{% version/firmware component="bootloader-commitHash" %}} |
| **Kommiti №**    | {{% version/firmware component="gui-commitNo" %}} | {{% version/firmware component="middleware-commitNo" %}} | {{% version/firmware component="bootloader-commitNo" %}}|

{{% alert title="Nipp" %}}
Kui sinu seadmel puuduvad uuemad funktsioonid või esineb stabiilsusprobleeme, soovitame [uuendada](../update/) seadme püsivara viimase välja antud versioonini.
{{% /alert %}}
