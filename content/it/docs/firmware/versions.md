---
title: "Ultime versioni del firmware"
linkTitle: "Ultime versioni"
date: 2023-07-18T12:47:29+02:00
draft: false
weight: 10
description: >
 Elenco delle versioni attuali del firmware per il dispositivo VitalControl.
---

## Determinare le versioni del firmware installate sul tuo dispositivo {#determine-firmware-versions-installed-on-your-device}

1. Apri l'elemento del menu <img src="/icons/device.svg" width="25" align="bottom" alt="Device" /> `{{<T "Device" >}}` nella schermata principale del tuo dispositivo VitalControl.

2. Richiama il sottomenu `{{<T "Info" >}}`, seleziona l'elemento del menu `{{<T "Software" >}}` e conferma con `{{<T "Ok" >}}`. Si apre una finestra pop-up che elenca le versioni del software attualmente installate sul tuo dispositivo:

![VitalControl: determinare le versioni del firmware](../images/firmware-versions.png "Visualizza le versioni del firmware")

## Ultime versioni del firmware: {#latest-firmware-versions}

La seguente tabella elenca le versioni attuali del firmware:

|                 | GUI-Firmware  | Middleware  | Bootloader |
|-----------------|:-------------:|:-----------:|:----------:|
| **Versione**     | {{% version/firmware component="gui" %}} | {{% version/firmware component="middleware" %}} | {{% version/firmware component="bootloader" %}} |
| **Data**       | {{% version/firmware component="gui" info="date" %}}  | {{% version/firmware component="middleware" info="date" %}} | {{% version/firmware component="bootloader" info="date" %}} |
| **Commit Hash** | {{% version/firmware component="gui" info="commitHash" %}} | {{% version/firmware component="middleware" info="commitHash" %}} |  {{% version/firmware component="bootloader" info="commitHash" %}} |
| **Commit №**    | {{% version/firmware component="gui" info="commitNo" %}} | {{% version/firmware component="middleware" info="commitNo" %}} | {{% version/firmware component="bootloader" info="commitNo" %}}|

{{% alert title="Suggerimento" %}}
Se ti mancano nuove funzionalità sul tuo dispositivo o riscontri problemi di stabilità, ti consigliamo di [aggiornare](../update/) il firmware del tuo dispositivo all'ultima versione rilasciata.
{{% /alert %}}
