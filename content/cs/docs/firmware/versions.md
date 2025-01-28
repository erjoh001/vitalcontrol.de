---
title: "Nejnovější verze firmwaru"
linkTitle: "Nejnovější verze"
date: 2023-07-18T12:47:29+02:00
draft: false
weight: 10
description: >
 Seznam aktuálních verzí firmwaru pro zařízení VitalControl.
---

## Zjištění verzí firmwaru nainstalovaných na vašem zařízení {#determine-firmware-versions-installed-on-your-device}

1. Otevřete položku menu <img src="/icons/device.svg" width="25" align="bottom" alt="Zařízení" /> `{{<T "Device" >}}` na hlavní obrazovce vašeho zařízení VitalControl.

2. Vyvolejte podmenu `{{<T "Info" >}}`, vyberte položku menu `{{<T "Software" >}}` a potvrďte stisknutím `{{<T "Ok" >}}`. Otevře se vyskakovací okno, které zobrazí aktuálně nainstalované verze softwaru na vašem zařízení:

![VitalControl: zjištění verzí firmwaru](../images/firmware-versions.png "Zobrazení verzí firmwaru")

## Nejnovější verze firmwaru: {#latest-firmware-versions}

Následující tabulka uvádí aktuální verze firmwaru:

|                 | GUI-Firmware  | Middleware  | Bootloader |
|-----------------|:-------------:|:-----------:|:----------:|
| **Verze**  | {{% version/firmware component="gui" %}} | {{% version/firmware component="middleware" %}} | {{% version/firmware component="bootloader" %}} |
| **Date**       | {{% version/firmware component="gui" info="date" %}}  | {{% version/firmware component="middleware" info="date" %}} | {{% version/firmware component="bootloader" info="date" %}} |
| **Commit Hash** | {{% version/firmware component="gui" info="commitHash" %}} | {{% version/firmware component="middleware" info="commitHash" %}} |  {{% version/firmware component="bootloader" info="commitHash" %}} |
| **Commit №**    | {{% version/firmware component="gui" info="commitNo" %}} | {{% version/firmware component="middleware" info="commitNo" %}} | {{% version/firmware component="bootloader" info="commitNo" %}}|

{{% alert title="Tip" %}}
Pokud vám na vašem zařízení chybí novější funkce nebo máte problémy se stabilitou, doporučujeme [aktualizovat](../update/) firmware na vašem zařízení na nejnovější vydanou verzi.
{{% /alert %}}
