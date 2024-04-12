---
title: "Het maken van een gegevensback-up"
linkTitle: "Back-up maken"
date: 2023-07-20
weight: 20
description: >
  Door middel van een gegevensback-up wordt een back-upbestand gemaakt dat alle gegevens bevat die zijn opgeslagen op het VitalControl-apparaat.
categories: [Gegevensback-up]
tags: [back-upbestand, USB-flashstation]
---
{{% usb-drive/nl "Om een gegevensback-up voor uw apparaat uit te voeren," %}}

## Gegevensback-up uitvoeren

1. Open het menu-item &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Apparaat" /> `Apparaat` op het hoofdscherm van uw VitalControl-apparaat.

2. Roep het submenu `Gegevensbeheer` op en selecteer vervolgens het submenu-item `Gegevensback-up`. Selecteer nu het menu-item `Back-up maken` en bevestig met `OK`. U wordt nu gevraagd om een USB-flashstation in te voegen:

   ![VitalControl: menupad gegevensback-up](../images/backup.png "Roep gegevensback-up op")

3. Steek de USB-flashdrive (C-stekker) in de connector onderaan het apparaat.

   ![VitalControl: USB-flashstation invoegen](/images/firmware/update/plug-in-dual-usb-stick.svg "USB-flashstation invoegen")

4. Zodra het apparaat de invoeging van de USB-stick detecteert, wordt de gegevensback-up automatisch gestart. Het verzamelen, comprimeren en schrijven van de back-upgegevens kan een minuut of langer duren. Wanneer de back-up is voltooid, wordt een succesbericht weergegeven:

   ![VitalControl: succesbericht back-up](../images/backup-done.png "Succes gegevensback-up")

5. De gegevensback-up is nu gemaakt. U vindt het aangemaakte bestand `backup.vcu` in de map `backup` op uw USB-flashstation. Het back-upbestand vereist ongeveer 1 MB aan opslagruimte op het flashstation.

   ![USB-flashstation met back-upbestand VitalControl](../images/backup-file.png "USB-flashstation met back-upbestand")

   {{% alert title="Tip" %}}
  Als er al een bestand `backup.vcu` bestaat in de map `backup` van uw USB-flashstation, wordt dit bestand hernoemd. De nieuwe naam van het bestand bestaat uit de leidende tekenreeks `backup` en de datum en tijd waarop het back-upbestand is gemaakt (bijv. `backup_2023-07-17_12-50-37.vcb`). Het nieuw geschreven back-upbestand heeft altijd de naam `backup.vcu`.
    {{% /alert %}}

6. Het aangemaakte back-upbestand kan worden gebruikt om de opgeslagen gegevens te [herstellen](../restore) naar een willekeurig VitalControl-apparaat indien nodig.
