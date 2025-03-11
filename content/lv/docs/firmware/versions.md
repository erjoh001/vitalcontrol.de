---
title: "Jaunākās programmaparatūras versijas"
linkTitle: "Jaunākās versijas"
date: 2023-07-18T12:47:29+02:00
draft: false
weight: 10
description: >
 Pašreizējo VitalControl ierīces programmaparatūras versiju saraksts.
---

## Nosakiet ierīcē instalētās programmaparatūras versijas {#determine-firmware-versions-installed-on-your-device}

1. Atveriet izvēlnes vienumu <img src="/icons/device.svg" width="25" align="bottom" alt="Device" /> `{{<T "Device" >}}` jūsu VitalControl ierīces galvenajā ekrānā.

2. Atveriet apakšizvēlni `{{<T "Info" >}}`, izvēlieties izvēlnes vienumu `{{<T "Software" >}}` un apstipriniet ar `{{<T "Ok" >}}`. Tiks atvērts uznirstošais logs, kurā uzskaitītas pašlaik ierīcē instalētās programmatūras versijas:

![VitalControl: nosakiet programmaparatūras versijas](../images/firmware-versions.png "Parādīt programmaparatūras versijas")

## Jaunākās programmaparatūras versijas: {#latest-firmware-versions}

Šajā tabulā ir uzskaitītas pašreizējās programmaparatūras versijas:

|                 | GUI-Programmaparatūra  | Starpprogrammatūra  | Bootloader |
|-----------------|:----------------------:|:-------------------:|:----------:|
| **Versija**     | {{% version/firmware component="gui" %}} | {{% version/firmware component="middleware" %}} | {{% version/firmware component="bootloader" %}} |
| **Datums**      | {{% version/firmware component="gui" info="date" %}}  | {{% version/firmware component="middleware" info="date" %}} | {{% version/firmware component="bootloader" info="date" %}} |
| **Commit Hash** | {{% version/firmware component="gui" info="commitHash" %}} | {{% version/firmware component="middleware" info="commitHash" %}} |  {{% version/firmware component="bootloader" info="commitHash" %}} |
| **Commit №**    | {{% version/firmware component="gui" info="commitNo" %}} | {{% version/firmware component="middleware" info="commitNo" %}} | {{% version/firmware component="bootloader" info="commitNo" %}}|

{{% alert title="Padoms" %}}
Ja jūsu ierīcē trūkst jaunāku funkciju vai rodas stabilitātes problēmas, ieteicams [atjaunināt](../update/) ierīces programmaparatūru uz jaunāko izlaisto versiju.
{{% /alert %}}

Izskatās, ka jūs neesat ievietojis nekādu saturu. Lūdzu, ievietojiet Markdown saturu, kuru vēlaties tulkot, un es palīdzēšu ar tulkojumu latviešu valodā.
