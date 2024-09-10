---
title: "RFID-scan: bereiktest en diagnose van transponders"
linkTitle: RFID-scan
date: 2023-08-07T10:09:46+02:00
draft: false
categorieën: [Diagnose, RFID-scan]
description: >
  Controleer het bereik van uw RFID-scanner of toon het leesprotocol en de nummers opgeslagen op onbekende transponders.
translationKey: diagnosis/rfid-scan
weight: 20
---

Met behulp van het menu 'Bereiktest' kunt u bepalen of het VitalControl-apparaat transponders die u bij de hand heeft kan lezen. Naast het controleren van compatibiliteit, kunt u ook gemakkelijk het transmissieprotocol dat door deze transponders wordt gebruikt bepalen en het nummer dat op de transponder is opgeslagen weergeven.

## Voer bereiktest uit {#perform-range-test}

1. Open het menu-item &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Apparaat" /> `Apparaat` op het hoofdscherm van uw VitalControl-apparaat.

1. Roep het submenu `Service` op, selecteer het menu-item `Range test` en bevestig met `OK`. Er wordt nu een geanimeerd scanscherm weergegeven.

    ![VitalControl: Menupad Bereiktest RFID-scanner](../images/rangetest.png "Bereiktest RFID-scanner")

1.  Benader uw transponder langzaam tot de leeskop van het VitalControl-apparaat. Om een goed leesresultaat te bereiken, moet de transponder horizontaal ten opzichte van de leeskop van het VitalControl-apparaat worden uitgelijnd.

    ![ VitalControl: transponder correct benaderen tot RFID-leeskop](/images/diagnosis/transponderscan.svg "Correcte transponderscan")

1. Zodra de RFID-scanner de transponder detecteert, wordt een trilalarm geactiveerd en verandert de achtergrondkleur van het op het scherm weergegeven transponderbeeld naar groen:

   ![VitalControl: Bereiktest: Transponder gedetecteerd](../images/transponder-detected.png "Transponder gedetecteerd")

1. Beweeg de transponder meerdere keren heen en weer aan de rand van het leesveld. Op deze manier kunt u het leesbereik van de RFID-scanner in combinatie met de transponders die u gebruikt bepalen.

## Transpondercontrole {#transponder-check}

Door de hierboven beschreven bereiktest uit te voeren, kunt u ook informatie verkrijgen over transponders van verschillende herkomst:

### Officiële transponder oormerken {#official-transponder-ear-tags}

1. Als u transponder oormerken voor uw dieren gebruikt, waarop het officieel toegewezen 15-cijferige oormerknummer van het dier is gecodeerd, wordt de volgende informatie op het scherm weergegeven zodra de transponder is gelezen:

    - 15-cijferige ID officieel toegewezen aan uw dier vanuit uw nationale dienst voor dieridentificatie.
    - Land waarin het bedrijf gevestigd is
    - Land waarin het bedrijf gevestigd is (alleen Duitse boerderijen)
    - Gebruikt transmissieprotocol (FDX of HDX)
    <br>

    ![VitalControl: controle van officiële transponder oormerk](../images/transponder-official.png "Info officiële transponder oormerk")

### Transponders van derde partijen {#transponders-from-third-party-vendors}

1. Als u transponders van derde partij leveranciers gebruikt, zoals Urban, voor de elektronische identificatie van uw dieren, wordt de volgende informatie op het scherm weergegeven zodra de transponder is gelezen:

    - ID gecodeerd op transponder, aantal cijfers varieert afhankelijk van de fabrikant
    - Fabrikant van de transponder (indien opgeslagen op de transponder)
    - Gebruikt transmissieprotocol (FDX of HDX)
    <br>

    ![VitalControl: controle van transponder van fabrikant](../images/transponder-manufacturer.png "Info transponder van fabrikant")

