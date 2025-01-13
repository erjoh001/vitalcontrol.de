---
title: "Последни версии на фърмуера"
linkTitle: "Последни версии"
date: 2023-07-18T12:47:29+02:00
draft: false
weight: 10
description: >
 Списък на текущите версии на фърмуера за устройството VitalControl.
---

## Определяне на инсталираните версии на фърмуера във вашето устройство {#determine-firmware-versions-installed-on-your-device}

1. Отворете менюто <img src="/icons/device.svg" width="25" align="bottom" alt="Устройство" /> `{{<T "Device" >}}` на главния екран на вашето устройство VitalControl.

2. Активирайте подменюто `{{<T "Info" >}}`, изберете менюто `{{<T "Software" >}}` и потвърдете с `{{<T "Ok" >}}`. Отваря се изскачащ прозорец, който показва версиите на софтуера, инсталирани в момента на вашето устройство:

![VitalControl: определяне на версиите на фърмуера](../images/firmware-versions.png "Показване на версиите на фърмуера")

## Последни версии на фърмуера: {#latest-firmware-versions}

Следната таблица изброява текущите версии на фърмуера:

|                 | GUI-Фърмуер  | Middleware | Зареждаща програма |
|-----------------|:-------------:|:-----------:|:----------:|
| **Версия**     | {{% version/firmware component="gui" %}} | {{% version/firmware component="middleware" %}} | {{% version/firmware component="bootloader" %}} |
| **Дата**        | {{% version/firmware component="gui-date" %}} | {{% version/firmware component="middleware-date" %}} | {{% version/firmware component="bootloader-date" %}} |
| **Хеш на комит**  | {{% version/firmware component="gui-commitHash" %}} | {{% version/firmware component="middleware-commitHash" %}} |  {{% version/firmware component="bootloader-commitHash" %}} |
| **№ на комит**    | {{% version/firmware component="gui-commitNo" %}} | {{% version/firmware component="middleware-commitNo" %}} | {{% version/firmware component="bootloader-commitNo" %}}|

{{% alert title="Съвет" %}}
Ако липсват по-нови функции на вашето устройство или имате проблеми със стабилността, препоръчва се [актуализация](../update/) на фърмуера на вашето устройство до последната издадена версия.
{{% /alert %}}
