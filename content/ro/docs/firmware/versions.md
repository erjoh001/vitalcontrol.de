---
title: "Ultimele versiuni de firmware"
linkTitle: "Ultimele versiuni"
date: 2023-07-18T12:47:29+02:00
draft: false
weight: 10
description: >
 Lista versiunilor actuale de firmware pentru dispozitivul VitalControl.
---

## Determinați versiunile de firmware instalate pe dispozitivul dvs. {#determine-firmware-versions-installed-on-your-device}

1. Deschideți elementul de meniu <img src="/icons/device.svg" width="25" align="bottom" alt="Device" /> `{{<T "Device" >}}` în ecranul principal al dispozitivului dvs. VitalControl.

2. Accesați submeniul `{{<T "Info" >}}`, selectați elementul de meniu `{{<T "Software" >}}` și confirmați cu `{{<T "Ok" >}}`. Se deschide o fereastră pop-up care listează versiunile de software instalate în prezent pe dispozitivul dvs.:

![VitalControl: determine firmware versions](../images/firmware-versions.png "Display firmware versions")

## Ultimele versiuni de firmware: {#latest-firmware-versions}

Următorul tabel listează versiunile actuale de firmware:

|                 | GUI-Firmware  | Middleware  | Bootloader |
|-----------------|:-------------:|:-----------:|:----------:|
| **Versiune**     | {{% version/firmware component="gui" %}} | {{% version/firmware component="middleware" %}} | {{% version/firmware component="bootloader" %}} |
| **Data**       | {{% version/firmware component="gui" info="date" %}}  | {{% version/firmware component="middleware" info="date" %}} | {{% version/firmware component="bootloader" info="date" %}} |
| **Commit Hash** | {{% version/firmware component="gui" info="commitHash" %}} | {{% version/firmware component="middleware" info="commitHash" %}} |  {{% version/firmware component="bootloader" info="commitHash" %}} |
| **Commit №**    | {{% version/firmware component="gui" info="commitNo" %}} | {{% version/firmware component="middleware" info="commitNo" %}} | {{% version/firmware component="bootloader" info="commitNo" %}}|

{{% alert title="Sfat" %}}
Dacă vă lipsesc funcții noi pe dispozitivul dvs. sau întâmpinați probleme de stabilitate, vă recomandăm să [actualizați](../update/) firmware-ul dispozitivului dvs. la cea mai recentă versiune lansată.
{{% /alert %}}
