---
title: "En son yazılım sürümleri"
linkTitle: "En son sürümler"
date: 2023-07-18T12:47:29+02:00
draft: false
weight: 10
description: >
 Mevcut VitalControl cihazı için yazılım sürümlerinin listesi.
---

## Cihazınıza yüklü yazılım sürümlerini belirleyin {#determine-firmware-versions-installed-on-your-device}

1. VitalControl cihazınızın ana ekranında <img src="/icons/device.svg" width="25" align="bottom" alt="Device" /> `{{<T "Device" >}}` menü öğesini açın.

2. Alt menüyü `{{<T "Info" >}}` çağırın, menü öğesini `{{<T "Software" >}}` seçin ve `{{<T "Ok" >}}` ile onaylayın. Cihazınıza şu anda yüklü olan yazılım sürümlerini listeleyen bir açılır pencere açılır:

![VitalControl: yazılım sürümlerini belirleyin](../images/firmware-versions.png "Yazılım sürümlerini görüntüle")

## En son yazılım sürümleri: {#latest-firmware-versions}

Aşağıdaki tablo mevcut yazılım sürümlerini listeler:

|                 | GUI-Firmware  | Middleware  | Bootloader |
|-----------------|:-------------:|:-----------:|:----------:|
| **Version**     | {{% version/firmware component="gui" %}} | {{% version/firmware component="middleware" %}} | {{% version/firmware component="bootloader" %}} |
| **Date**       | {{% version/firmware component="gui-date" %}} | {{% version/firmware component="middleware-date" %}} | {{% version/firmware component="bootloader-date" %}} |
| **Commit Hash** | {{% version/firmware component="gui-commitHash" %}} | {{% version/firmware component="middleware-commitHash" %}} |  {{% version/firmware component="bootloader-commitHash" %}} |
| **Commit №**    | {{% version/firmware component="gui-commitNo" %}} | {{% version/firmware component="middleware-commitNo" %}} | {{% version/firmware component="bootloader-commitNo" %}}|

{{% alert title="İpucu" %}}
Cihazınızda daha yeni özellikleri kaçırıyorsanız veya kararlılık sorunları yaşıyorsanız, cihazınızdaki yazılımı en son sürüme [güncellemenizi](../update/) öneririz.
{{% /alert %}}
