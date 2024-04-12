---
title: "Firmware-update van uw apparaat"
linkTitle: Update
weight: 4
description: >
  Door een firmware-update uit te voeren, kan de firmware van uw VitalControl-apparaat worden bijgewerkt naar de nieuwste beschikbare versies.
---
Zorg er eerst voor dat er een [nieuwere firmwareversie](../versions/) beschikbaar is voor uw apparaat en update indien nodig de firmware van uw apparaat volgens de volgende instructies.

## Benodigde accessoire

Om de update op uw apparaat te installeren, heeft u een dubbele USB-flashdrive (2-in-1 USB-stick) Type-C/USB 3.0 met een USB C-connector en een USB A-connector nodig. Zo'n dubbele USB-flashdrive wordt samen met uw apparaat geleverd. U kunt ook zo'n USB-flashdrive aanschaffen bij verschillende leveranciers.

![Dubbele USB-flashdrive (USB A / USB C)](/images/firmware/update/usb-dual-stick.svg "Dubbele USB-flashdrive")

## Voorbereiding: download de nieuwste firmware

1. Steek uw USB-flashdrive in de USB-connector van uw computer. Maak vervolgens een nieuwe map met de naam 'update' aan in de hoofdmap van uw flashdrive.

    ![Windows Verkenner: USB-flashdrive met map 'update'](../images/create-folder-update.png "USB-flashdrive: map 'update'")

1. Download het [firmwarebestand](/download/firmware.vcu) (bestandsnaam: `firmware.vcu`) en sla het op in de eerder aangemaakte map `update` van uw USB-flashdrive. Het updatebestand vereist ongeveer 2,5 MB opslagruimte op de flashdrive.

    ![Windows Verkenner: flashdrive met firmwarebestand 'firmware.vcu'](../images/save-firmware-file.png "Flashdrive met firmwarebestand")

1. Maak een [gegevensback-up][] op uw apparaat.

    {{% alert title="Info" %}}
De gegevensback-up is een aanbevolen voorzorgsmaatregel. Alle bestaande dier- en apparaatgegevens blijven behouden bij het bijwerken van de firmware van het VitalControl-apparaat.
    {{% /alert %}}

[gegevensback-up]: {{< relref "../backup/backup/" >}}

## Voer firmware-update uit

1. Open het menu-item `Apparaat` op het hoofdscherm van uw VitalControl-apparaat.

1. Roep het submenu `Service` op, selecteer het menu-item `Firmware-update` en bevestig met `OK`. U wordt nu gevraagd om de USB-flashdrive die u al heeft voorbereid in te voegen:

    ![VitalControl: menupad firmware-update](../images/firmware-update.png "Firmware-update")

1. Steek de USB-flashdrive (C-stekker) in de connector onderaan het apparaat en bevestig met `OK`.

    ![VitalControl: USB-flashdrive invoegen](/images/firmware/update/plug-in-dual-usb-stick.svg "USB-flashdrive invoegen")

   Het apparaat voert de update automatisch uit. Tijdens de update informeert het display u over de voortgang van de update. Na voltooiing van de update start het apparaat automatisch opnieuw op en toont een succesbericht na de herstart:

   ![VitalControl: Succesbericht firmware-update](../images/update-success.png "Succes firmware-update")

   De nieuwe firmware is nu geïnstalleerd op uw apparaat.

