---
title: Gegevensexport naar USB-stick
linkTitle: Naar USB-stick
date: 2023-07-20
weight: 10
description: >
  Exporteer CVS-gegevensbestanden met dierengegevens en meetwaarden opgeslagen op het VitalControl-apparaat naar een USB-stick.
categories: [Gegevensexport]
tags: [CSV-bestanden, USB-stick]
translationKey: data-export/usb-drive
---
{{% usb-drive/en "Om een export van uw apparaatgegevens uit te voeren," %}}

## Voer gegevensexport uit

1. Open het menu-item &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Apparaat" /> `Apparaat` op het hoofdscherm van uw VitalControl-apparaat.

2. Roep het submenu `Data management` op, selecteer het menu-item `Exporteer dierdata (csv)` en bevestig met `OK`. U wordt nu gevraagd om een USB-stick in te voeren:

   ![VitalControl: Menupad gegevensexport](../images/data-export.png "Roep gegevensexport op")

3. Steek de USB-stick (C-stekker) in de connector aan de onderkant van het apparaat.

   ![VitalControl: USB-stick invoeren](/images/firmware/update/plug-in-dual-usb-stick.svg "USB-stick invoeren")

4. Zodra het apparaat de invoering van de USB-stick detecteert, wordt de gegevensexport automatisch gestart. Het schrijven van de back-upgegevens kan enkele seconden duren. Wanneer de gegevensexport is voltooid, wordt een succesmelding weergegeven:

   ![VitalControl: succesmelding gegevensexport](../images/success-data-export.png "Succes gegevensexport")

5. De gegevensexport is nu voltooid. U vindt de vier gecreëerde [exportbestanden](../export-bestanden/) in de map `export-csv` op uw USB-stick.

   ![USB-stick met exportbestanden VitalControl](../images/export-files.png "Exportbestanden op USB-stick")

   {{% alert title="Opmerkingen" %}}
  - Om per ongeluk overschrijven van exportbestanden te voorkomen, bevat de bestandsnaam van elk exportbestand altijd de datum en tijd waarop het bestand is gemaakt. Zorg ervoor dat u de nieuwste versie van de exportbestanden gebruikt als u meerdere keren diergegevens hebt geëxporteerd.
  - De bestandsgrootte van de exportbestanden hangt af van het aantal dieren op de VitalControl en van het aantal uitgevoerde metingen. Over het algemeen nemen de exportbestanden slechts enkele kB opslagruimte in beslag op de USB-stick.
   {{% /alert %}}
