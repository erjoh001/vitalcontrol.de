---
title: "Останні версії прошивки"
linkTitle: "Останні версії"
date: 2023-07-18T12:47:29+02:00
draft: false
weight: 10
description: >
 Список поточних версій прошивки для пристрою VitalControl.
---

## Визначення версій прошивки, встановлених на вашому пристрої {#determine-firmware-versions-installed-on-your-device}

1. Відкрийте пункт меню <img src="/icons/device.svg" width="25" align="bottom" alt="Device" /> `{{<T "Device" >}}` на головному екрані вашого пристрою VitalControl.

2. Викличте підменю `{{<T "Info" >}}`, виберіть пункт меню `{{<T "Software" >}}` і підтвердіть `{{<T "Ok" >}}`. Відкриється спливаюче вікно, в якому буде перелічено версії програмного забезпечення, встановлені на вашому пристрої:

![VitalControl: визначення версій прошивки](../images/firmware-versions.png "Відображення версій прошивки")

## Останні версії прошивки: {#latest-firmware-versions}

У наступній таблиці наведено поточні версії прошивки:

|                 | GUI-Firmware  | Middleware  | Bootloader |
|-----------------|:-------------:|:-----------:|:----------:|
| **Version**     | {{% version/firmware component="gui" %}} | {{% version/firmware component="middleware" %}} | {{% version/firmware component="bootloader" %}} |
| **Date**       | {{% version/firmware component="gui" info="date" %}}  | {{% version/firmware component="middleware" info="date" %}} | {{% version/firmware component="bootloader" info="date" %}} |
| **Commit Hash** | {{% version/firmware component="gui" info="commitHash" %}} | {{% version/firmware component="middleware" info="commitHash" %}} |  {{% version/firmware component="bootloader" info="commitHash" %}} |
| **Commit №**    | {{% version/firmware component="gui" info="commitNo" %}} | {{% version/firmware component="middleware" info="commitNo" %}} | {{% version/firmware component="bootloader" info="commitNo" %}}|

{{% alert title="Порада" %}}
Якщо ви не бачите нових функцій на вашому пристрої або стикаєтеся з проблемами стабільності, рекомендується [оновити](../update/) прошивку на вашому пристрої до останньої випущеної версії.
{{% /alert %}}
