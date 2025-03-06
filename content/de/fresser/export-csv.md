---
title: CSV-Datei für Massenmeldung auf USB-Stick exportieren
linkTitle: Export CSV-Datei
date: 2025-02-22T13:07:29+01:00
draft: false
weight: 30
type: docs
slug: export-csv
description: >
  Eine CSV-Datei mit den melderelevanten Daten aller zugekauften Tiere auf einen USB-Stick exportieren.
---
1. Stellen Sie sicher, dass Sie sich im Bildschirm `Zukäufe` befinden und ihnen dort all ihre zugekauften Tiere aufgelistet werden. Sollte ihnen dieser Bildschirm `Zukäufe` nicht angezeigt werden, so folgen sie den untenstehenden [Anweisungen](#manueller-aufruf-des-bildschirms-zukäufe), um den Bildschirm manuell aufzurufen.

1. Drücken Sie mittlere obere `F2` Taste `CSV-Export`, um den Datenexport zu starten. Es öffnet sich nun ein Popup-Fenster, in dem Sie aufgefordert werden, einen USB-Stick in Ihr VitalControl-Gerät einzustecken.

    <figure class="figure" style="margin-top: 20px">
         <img src="../images/aufruf-export-zukaeufe.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Aufruf Exportvorgang CSV-Datei" title="Aufruf CSV-Export" />
        <a name="AufrufExportZukaeufe" ><figcaption class="figure-caption fs-6">Abbildung 1: Aufruf des CSV-Exportvorgangs</figcaption></a>
    </figure>

    <br>

1. Stecken Sie den USB-Stick (C-Stecker) in die Buchse im Handgriff des Geräts ein.

    <figure class="figure">
        <img src="/images/firmware/update/plug-in-dual-usb-stick.svg" class="border border-2 figure-img img-fluid rounded p-3" width="500px" align="bottom" alt="VitalControl:USB-Stick einstecken" title="USB-Stick einstecken" />
        <a name="AnschlussBarcodescanner" ><figcaption class="figure-caption fs-6">Abbildung 2: USB-Stick am VitalControl einstecken</figcaption></a>
    </figure>

1. Der eingesteckte Stick wird unmittelbar nach dem Einstecken erkannt und das Vital-Control-Gerät beginnt automatisch mit dem Export der Daten.

    <figure class="figure" style="margin-top: 20px">
        <img src="../images/export-zukaeufe.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Exportvorgang CSV-Datei" title="Export CSV-Datei" />
        <a name="ExportZukaeufe" ><figcaption class="figure-caption fs-6">Abbildung 3: CSV-Exportvorgang</figcaption></a>
    </figure>

1. Nach dem erfolgreichem Abschluss des Exports ist auf dem USB-Stick im Verzeichnis `zugaenge` <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Ziffer 1" /> eine Datei mit dem Namen `zugang-TT-MM-JJJJ_HH-MM.csv` <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Ziffer 2" /> hinterlegt. Diese CSV-Datei wird im nächsten Schritt zur [Massenmeldung](../massenmeldung) bei HI-Tier genutzt.

    <figure class="figure" style="margin-top: 20px">
        <img src="../images/exportdatei.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Exportvorgang CSV-Datei" title="Export CSV-Datei" />
        <a name="ExportZukaeufe" ><figcaption class="figure-caption fs-6">Abbildung 4: CSV-Exportdatei auf USB-Stick</figcaption></a>
    </figure>

{{% alert title="Hinweis" %}}
Bei einer größeren Anzahl an zu exportierenden Tieren kann der Exportvorgang einige Zeit in Anspruch nehmen. Entfernen Sie den USB-Stick nicht vor dem Erscheinen der Erfolgsmeldung!
{{% /alert %}}

## Ergänzungen und Erläuterungen

### Direktfunktionen und Optionen beim CSV-Export

Der Listenbildschirm CSV-Export bietet mehrere [Direktfunktionen](/docs/zugaenge/zukaeufe/#direct-function-calls), welche auf den aktuell ausgewählten Listeneintrag angewandt werden können, zudem kann die Option [`Alle Nachrichten nach Export löschen`](/docs/zugaenge/zukaeufe/#options-delete-all-notices-after-export) aktiviert oder deaktiviert werden.

### Manueller Aufruf des Bildschirms <span style="font-style: italic;">Zukäufe</span>

1. Wählen Sie im Hauptbildschirm Ihres VitalControl-Geräts den Menüpunkt <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Zugänge" /> `Zugänge` und drücken Sie die Taste `OK`.

2. Wählen Sie mit den Pfeiltasten ◁ ▷ △ ▽ den Menüpunkt <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Zukäufe" /> `Zukäufe` aus und bestätigen Sie mit `OK`.

3. Es öffnet sich eine Liste mit Ihren Zukäufen, die Sie im vorherigen Schritt [`Scan aller Tierpässe`](../paesse-scannen) registriert haben.

<figure class="figure" style="margin-top: 20px">
  <img src="../images/aufruf-zukaeufe.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Aufruf Bildschirm Zukäufe" title="Bildschirm Zukäufe" />
  <a name="AufrufZukaeufe" ><figcaption class="figure-caption fs-6">Abbildung 5: Aufruf des Listenbildschirms <span style="font-style: italic;">Zukäufe</span></figcaption></a>
</figure>

<div style="max-width: 80%; margin-top: 20px;">
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <div class="d-grid gap-2">
        <div class="text-start btn btn-lg btn-primary" role="button" ><span class="fs-6">Vorherige Seite</span><span class="float-end fw-semibold fs-5">Tränkeautomat:</span><br><span class="fs-4 fw-semibold"><a href="../synchronisation" class="link-light">« Synchronisation mit Alma Pro</a></span><span class="float-end fs-5">mit</span><br><span class="fs-4 fw-semibold"><a href="../synchronisation" class="link-light">« Scan aller Tierpässe</a></span><span class="float-end fs-5">ohne</span></div>
      </div>
    </div>
    <div class="col">
      <div class="d-grid gap-2">
        <a class="btn btn-lg btn-primary text-end" role="button" href="../massenmeldung"><span class="fs-6">Nächste Seite</span><br><br><span class="fs-4 fw-semibold">Massenmeldung HI-Tier »</span></a>
      </div>
    </div>
  </div>
</div>
<div>
