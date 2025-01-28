---
title: "Legújabb firmware verziók"
linkTitle: "Legújabb verziók"
date: 2023-07-18T12:47:29+02:00
draft: false
weight: 10
description: >
 Az aktuális firmware verziók listája a VitalControl eszközhöz.
---

## Telepített firmware verziók meghatározása az eszközön {#determine-firmware-versions-installed-on-your-device}

1. Nyissa meg a <img src="/icons/device.svg" width="25" align="bottom" alt="Device" /> `{{<T "Device" >}}` menüpontot a VitalControl eszköz főképernyőjén.

2. Hívja elő az `{{<T "Info" >}}` almenüt, válassza ki a `{{<T "Software" >}}` menüpontot, és erősítse meg az `{{<T "Ok" >}}` gombbal. Egy felugró ablak jelenik meg, amely felsorolja az eszközön jelenleg telepített szoftver verziókat:

![VitalControl: firmware verziók meghatározása](../images/firmware-versions.png "Firmware verziók megjelenítése")

## Legújabb firmware verziók: {#latest-firmware-versions}

A következő táblázat az aktuális firmware verziókat sorolja fel:

|                 | GUI-Firmware  | Middleware  | Bootloader |
|-----------------|:-------------:|:-----------:|:----------:|
| **Verzió**     | {{% version/firmware component="gui" %}} | {{% version/firmware component="middleware" %}} | {{% version/firmware component="bootloader" %}} |
| **Dátum**       | {{% version/firmware component="gui" info="date" %}}  | {{% version/firmware component="middleware" info="date" %}} | {{% version/firmware component="bootloader" info="date" %}} |
| **Commit Hash** | {{% version/firmware component="gui" info="commitHash" %}} | {{% version/firmware component="middleware" info="commitHash" %}} |  {{% version/firmware component="bootloader" info="commitHash" %}} |
| **Commit №**    | {{% version/firmware component="gui" info="commitNo" %}} | {{% version/firmware component="middleware" info="commitNo" %}} | {{% version/firmware component="bootloader" info="commitNo" %}}|

{{% alert title="Tipp" %}}
Ha újabb funkciókat hiányol az eszközén, vagy stabilitási problémákkal szembesül, javasoljuk, hogy [frissítse](../update/) az eszköz firmware-jét a legújabb kiadott verzióra.
{{% /alert %}}
