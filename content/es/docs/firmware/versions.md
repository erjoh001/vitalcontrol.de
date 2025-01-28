---
title: "Últimas versiones del firmware"
linkTitle: "Últimas versiones"
date: 2023-07-18T12:47:29+02:00
draft: false
weight: 10
description: >
 Lista de las versiones actuales del firmware para el dispositivo VitalControl.
---

## Determinar las versiones de firmware instaladas en su dispositivo {#determine-firmware-versions-installed-on-your-device}

1. Abra el elemento del menú <img src="/icons/device.svg" width="25" align="bottom" alt="Dispositivo" /> `{{<T "Device" >}}` en la pantalla principal de su dispositivo VitalControl.

2. Invoque el submenú `{{<T "Info" >}}`, seleccione el elemento del menú `{{<T "Software" >}}` y confirme con `{{<T "Ok" >}}`. Se abrirá una ventana emergente que lista las versiones de software actualmente instaladas en su dispositivo:

![VitalControl: determinar versiones de firmware](../images/firmware-versions.png "Mostrar versiones de firmware")

## Últimas versiones de firmware: {#latest-firmware-versions}

La siguiente tabla lista las versiones actuales de firmware:

|                 | GUI-Firmware  | Middleware  | Bootloader |
|-----------------|:-------------:|:-----------:|:----------:|
| **Versión**     | {{% version/firmware component="gui" %}} | {{% version/firmware component="middleware" %}} | {{% version/firmware component="bootloader" %}} |
| **Fecha**       | {{% version/firmware component="gui" info="date" %}}  | {{% version/firmware component="middleware" info="date" %}} | {{% version/firmware component="bootloader" info="date" %}} |
| **Hash de commit** | {{% version/firmware component="gui" info="commitHash" %}} | {{% version/firmware component="middleware" info="commitHash" %}} |  {{% version/firmware component="bootloader" info="commitHash" %}} |
| **Número de commit**    | {{% version/firmware component="gui" info="commitNo" %}} | {{% version/firmware component="middleware" info="commitNo" %}} | {{% version/firmware component="bootloader" info="commitNo" %}}|

{{% alert title="Consejo" %}}
Si echa en falta nuevas características en su dispositivo o enfrenta problemas de estabilidad, se recomienda [actualizar](../update/) el firmware de su dispositivo a la última versión lanzada.
{{% /alert %}}
