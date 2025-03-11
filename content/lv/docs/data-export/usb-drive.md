---
title: Datu eksports uz USB zibatmiņu
linkTitle: Uz USB zibatmiņu
date: 2023-07-20
weight: 10
description: >
  Eksportējiet CVS datu failus, kas satur dzīvnieku datus un mērījumu vērtības, kas saglabātas VitalControl ierīcē, uz USB zibatmiņu.
categories: [Datu eksports]
tags: [CSV faili, USB zibatmiņa]
translationKey: data-export/usb-drive
---
{{% usb-drive/en "In order to perform an export of your device data," %}}

## Veiciet datu eksportu {#perform-data-export}

1. Atveriet izvēlnes vienumu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `{{<T "Device" >}}` jūsu VitalControl ierīces galvenajā ekrānā.

2. Izvēlieties apakšizvēlni `{{<T "DataManagement" >}}`, atlasiet izvēlnes vienumu `{{<T "AnimalData" >}}` un apstipriniet ar `{{<T "Ok" >}}`.

3. Atveras cita apakšizvēlne. Atlasiet izvēlnes vienumu `{{<T "ExportAnimalData" >}}` un apstipriniet ar `{{<T "Ok" >}}`.

4. Tagad jums tiek lūgts ievietot USB zibatmiņu:

   ![VitalControl: Menu path data export](../images/data-export.png "Invoke data export")

5. Ievietojiet USB zibatmiņu (C spraudni) ierīces apakšējā savienotājā.

   ![VitalControl: insert USB flash drive](/images/firmware/update/plug-in-dual-usb-stick.svg "Insert USB flash drive")

6. Kad ierīce ir konstatējusi USB zibatmiņas ievietošanu, datu eksports automātiski sākas. Datu rezerves kopijas rakstīšana var aizņemt dažas sekundes. Kad datu eksports ir pabeigts, tiek parādīts veiksmīga eksporta ziņojums:

   ![VitalControl: success message data export](../images/success-data-export.png "Success data export")

7. Datu eksports ir pabeigts. Jūs atradīsiet četrus izveidotos [eksporta failus](../export-files/) direktorijā `export-csv` uz jūsu USB zibatmiņas.

   ![USB flash drive with export files VitalControl](../images/export-files.png "Export files on USB flash drive")

   {{% alert title="Notes" %}}
  - Lai novērstu nejaušu eksporta failu pārrakstīšanu, katra eksporta faila nosaukumā vienmēr ir iekļauts datums un laiks, kad fails tika izveidots. Pārliecinieties, ka izmantojat jaunāko eksporta failu versiju, ja esat eksportējis dzīvnieku datus vairākas reizes.
  - Eksporta failu lielums ir atkarīgs no dzīvnieku skaita VitalControl un veikto mērījumu skaita. Parasti eksporta faili aizņem tikai dažus kB atmiņas vietas uz USB zibatmiņas.
   {{% /alert %}}

Lūdzu, ielīmējiet Markdown saturu, kuru vēlaties tulkot.
