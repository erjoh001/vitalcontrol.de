---
title: "RFID-Scan: Reichweitentest und Diagnose von Transpondern"
linkTitle: RFID-Scan
date: 2023-08-07T10:10:11+02:00
draft: false
translationKey: diagnosis/rfid-scan
description: >
  Überprüfen Sie die Reichweite ihres RFID-Scanners oder lassen Sie sich das Übertragungsprotokoll und die Nummern von Ihnen unbekannten Transponder anzeigen.
Kategorien: [Diagnose, RFID-Scan]
weight: 20
---
Über das Menü `Reichweitentest` können Sie die Tauglichkeit des Geräts für ihnen vorliegende Transponder ermitteln. In diesem Zuge können Sie auch bequem das von diesen Transponder verwendete Übertragungsprotokoll ermitteln sowie die auf dem Transponder hinterlegte Nummer anzeigen lassen.

## Reichweitentest durchführen

1. Öffnen Sie im Hauptbildschirm Ihres VitalControl-Geräts das Menü `Gerät`.

1. Wechseln Sie ins Untermenü `Service`, wählen Sie dort den Eintrag `Reichweitentest` und bestätigen Sie mit `OK`. Es wird nun ein animierter Scan-Bildschirm angezeigt.

    ![VitalControl: Menüfolge Reichweitentest RFID-Scanner](../abbildungen/reichweitentest.png "Reichweitentest RFID-Scanner")

1.  Nähern Sie nun einen Transponder langsam an den Lesekopf des VitalControl-Geräts an. Um ein gutes Leseergebnis zu erreichen, muss der Transponder waagrecht an den Lesekopf des VitalControl-Geräts herangeführt werden.

    ![Transponder korrekt an Lesekopf des VitalControl-Geräts heranführen](/images/diagnosis/transponderscan.svg "Korrekter Transponderscan")

1. Sobald der RFID-Scanner den Transponder erkennt,wird ein Vibrationsalarm ausgelöst und die Hintergrundfarbe des auf dem Bildschirm angezeigten Transponders wechselt auf Grün:

   ![VitalControl: Reichweitentest: Transponder erkannt](../abbildungen/transponder-erkannt.png "Transponder erkannt")

1. Bewegen Sie den Transponder mehrmals an der Grenze des Lesefelds hin un her. So ermitteln Sie die Lesereichweite des RFID-Scanners in Verbindung mit dem von Ihnen verwendeten Transponder.

## Überprüfung von Transpondern

Sie können den oben beschriebenen Reichweitentest auch dazu nutzen, um Informationen zu ihnen vorliegenden Transpondern aus verschiedenster Herkunft zu erhalten:

### Offizielle Transponderohrmarken

1. Setzen Sie für ihre Tiere Transponderohrmarken ein, auf denen die offiziell vergebene, 15-stellige Ohrmarkennummer des Tiers kodiert ist, so werden nach der Erkennung des Transponders folgende Angaben auf dem Bildschirm ausgegeben:

    - 15 stellige ID des Tieres, unter der dieses Tiere im nationalen Meldesystem (Deutschland: HI-Tier, Österreich: AMA) bekannt ist
    - Land in dem der Betrieb ansässig ist
    - Bundesland in dem der Betrieb ansässig ist
    - Verwendetes Übertragungsprotokoll (FDX oder HDX)
    <br>

    ![VitalControl: Überprüfung Transponderohrmarke](../abbildungen/transponder-offiziell.png "Info Transponderohrmarke")

### Transponder verschiedener Anbieter

1. Nutzen Sie für die elektronische Kennzeichnung ihrer Tiere dagegen Transponder von Drittanbietern, wie etwa von Urban, so werden nach der Erkennung des Transponders folgende Angaben auf dem Bildschirm angezeigt:

    - ID des Transponders, Stellenlänge je nach Hersteller unterschiedlich
    - Hersteller des Transponders (falls auf dem Transponder hinterlegt)
    - Verwendetes Übertragungsprotokoll (FDX oder HDX)
    <br>

    ![VitalControl: Überprüfung Transponder von Herstellern](../abbildungen/transponder-hersteller.png "Info Ohrmarke Hersteller")
