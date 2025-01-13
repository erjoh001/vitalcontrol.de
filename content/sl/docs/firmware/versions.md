---
title: "Najnovejše različice vdelane programske opreme"
linkTitle: "Najnovejše različice"
date: 2023-07-18T12:47:29+02:00
draft: false
weight: 10
description: >
 Seznam trenutnih različic vdelane programske opreme za napravo VitalControl.
---

## Določite različice vdelane programske opreme nameščene na vaši napravi {#determine-firmware-versions-installed-on-your-device}

1. Odprite meni <img src="/icons/device.svg" width="25" align="bottom" alt="Device" /> `{{<T "Device" >}}` na glavnem zaslonu vaše naprave VitalControl.

2. Odprite podmeni `{{<T "Info" >}}`, izberite meni `{{<T "Software" >}}` in potrdite z `{{<T "Ok" >}}`. Odpre se pojavno okno, ki prikazuje trenutno nameščene različice programske opreme na vaši napravi:

![VitalControl: določite različice vdelane programske opreme](../images/firmware-versions.png "Prikaz različic vdelane programske opreme")

## Najnovejše različice vdelane programske opreme: {#latest-firmware-versions}

Naslednja tabela prikazuje trenutne različice vdelane programske opreme:

|                 | GUI-Firmware  | Middleware  | Bootloader |
|-----------------|:-------------:|:-----------:|:----------:|
| **Različica**     | {{% version/firmware component="gui" %}} | {{% version/firmware component="middleware" %}} | {{% version/firmware component="bootloader" %}} |
| **Date**       | {{% version/firmware component="gui-date" %}} | {{% version/firmware component="middleware-date" %}} | {{% version/firmware component="bootloader-date" %}} |
| **Commit Hash** | {{% version/firmware component="gui-commitHash" %}} | {{% version/firmware component="middleware-commitHash" %}} |  {{% version/firmware component="bootloader-commitHash" %}} |
| **Commit №**    | {{% version/firmware component="gui-commitNo" %}} | {{% version/firmware component="middleware-commitNo" %}} | {{% version/firmware component="bootloader-commitNo" %}}|

{{% alert title="Nasvet" %}}
Če pogrešate novejše funkcije na vaši napravi ali imate težave s stabilnostjo, vam priporočamo, da [posodobite](../update/) vdelano programsko opremo na vaši napravi na najnovejšo izdano različico.
{{% /alert %}}
