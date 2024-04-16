---
title: "Herstellen van een gegevensback-up"
linkTitle: "Back-up herstellen"
date: 2023-07-20
weight: 20
description: >
 Via een gegevensherstel kan alle data van een VitalControl-apparaat worden hersteld op een ander apparaat met behulp van een back-upbestand.
---
{{% usb-drive/nl "Om een gegevensback-up naar uw VitalControl-apparaat te herstellen," %}}

Op deze USB-flashstation moet een map `backup` bestaan, die een geldig **gegevensback-upbestand `backup.vcu`** moet bevatten.

![USB-flashstation met back-upbestand VitalControl](../images/backup-file.png "USB-flashstation met back-upbestand")

{{% alert title="Opmerking" %}}
In de map `backup` van uw USB-flashstation kunt u meerdere back-upbestanden met de extensie `.vcu` vinden. Het VitalControl-apparaat herstelt altijd de back-upgegevens uit het bestand met de naam `backup.vcu`, dat altijd het nieuwste bestand is. Als u gegevens wilt herstellen vanuit een ouder back-upbestand (dat de back-updatum in de bestandsnaam bevat), moet u dit oudere back-upbestand hernoemen naar `backup.vcu` voordat u het gegevensherstel uitvoert!
{{% /alert %}}

## Gegevensherstel naar VitalControl-apparaat

1. Open het menu-item &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Apparaat" /> `Apparaat` op het hoofdscherm van het VitalControl-apparaat waarop u de gegevens wilt herstellen.

2. Roep het submenu `Data management` op en selecteer vervolgens het submenu-item `Data backup`. Selecteer nu het menu-item `Bewaar Back Up` en bevestig met `OK`. U wordt nu gevraagd om een USB-flashstation in te voeren:

   ![VitalControl: menupad gegevensherstel](../images/restore.png "Herstellen vanuit back-upbestand")

3. Steek de USB-flashdrive (C-stekker) in de connector onderaan het apparaat.

   ![VitalControl: USB-flashstation insteken](/images/firmware/update/plug-in-dual-usb-stick.svg "Steek de USB-flashstation in")

4. Zodra het apparaat de invoeging van de USB-stick detecteert, verschijnt er een bevestigingsvenster. Bevestig deze pop-up met `Ja` om het gegevensherstel te starten. Het uitpakken en herstellen van de back-up kan een minuut of langer duren. Wanneer het gegevensherstel is voltooid, wordt er een succesbericht weergegeven:

   ![VitalControl: succesbericht gegevensherstel](../images/restore-done.png "Succesbericht gegevensherstel")

5. Back-upgegevens zijn succesvol hersteld op het VitalControl-apparaat.
