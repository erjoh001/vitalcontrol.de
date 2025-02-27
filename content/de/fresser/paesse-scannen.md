---
title: Scan aller Tierpässe mit dem Barcodeleser
linkTitle: Scan aller Tierpässe
date: 2025-02-22T13:06:56+01:00
draft: false
weight: 20
type: docs
slug: paesse-scannen
description: >
 Die Tierpässe aller zugekauften Tiere mittels Barcodescanner einscannen.
---
## Tierpässe aller Zukäufe bereitstellen

Legen Sie die Tierpässe aller zugekauften Tiere als Stapel vor sich hin, Sie werden im nächsten Schritt alle diese Pässen einscannen. Stellen Sie sicher, dass auf der Arbeitsfläche vor Ihnen genügend Platz ist, damit das Umblättern von Pass zu Pass reibungslos funktioniert.

## Barcodescanner anschließen

1. Schalten Sie das VitalControl-Gerät ein bzw. stellen Sie im laufenden Betrieb sicher, dass Sie sich in der obersten Menüebene befinden. Drücken Sie dazu ggf. ein- oder mehrmals die linke obere Taste `F1` <img src="/icons/footer/exit.svg" width="24" align="bottom" alt="Zurück" />&nbsp; um auf die oberste Menüebene zu gelangen.

1. Schließen Sie gemäß der unten aufgeführten Zeichnung den Barcode-Scanner mittels des mitgelieferten Kabels an das VitalControl-Gerät an (<a href="#AnschlussBarcodescanner">Abbildung 1</a>: <span style="font-style: italic;">Schritt</span> <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Schritt 1" />).

1. Es wird jetzt automatisch der Bildschirm `Massenzugang` aufgerufen (<a href="#AnschlussBarcodescanner">Abbildung 1</a>: <span style="font-style: italic;">Schritt</span> <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Schritt 2" />).

{{% alert title="Hinweis" %}}
Sollte nach dem Einstecken des Barcodescanner der Bildschirm `Massenzugang` nicht aufgerufen werden, so folgend sie den untenstehenden [Anweisungen](#manueller-aufruf-des-bildschirms-massenzugang), um den Bildschirm manuell aufzurufen.
{{% /alert %}}

<br>
<figure class="figure">
  <img src="/images/synchronisation/connect-to-scanner.svg" class="border border-2 figure-img img-fluid rounded p-4" width="900px" align="bottom" alt="VitalControl: Barcodescanner anschließen" title="Barcodescanner anschließen" />
  <a name="AnschlussBarcodescanner" ><figcaption class="figure-caption fs-6">Abbildung 1: Anschluss des Barcodescanners</figcaption></a>
</figure>

## Tierpässe einscannen

1. Im Erfassungsbildschirm wird untereinander je ein Feld für die Ohrmarkennummer und ein Feld für das Geburtsdatum des zu erfassenden Tieres angezeigt.

1. Richten Sie den Barcodescanner auf den obersten Tierpass. Zielen Sie dort auf den Barcode für die Ohrmarkennummer (Abbildung 2: <span style="font-style: italic;">Buchstabe</span> <img src="/digits/O_negative_circled.svg" width="25" align="middle" alt="Circled letter O" title="Buchstabe O" />). Drücken Sie die Taste am Griff des Scanners, um den Pass einzuscannen. Nach erfolgreichem Scan des Barcodes wird die eingescannte Nummer in das oberste Feld `Ohrmarkennummer` des Bildschirms übernommen. Zugleich wechselt die Umrandung des Feldes wechselt von rot zu grün.

1. Scannen Sie in gleicher Weise das Geburtsdatum des Tieres ein (Abbildung 2: <span style="font-style: italic;">Buchstabe</span> <img src="/digits/G_negative_circled.svg" width="25" align="middle" alt="Circled letter O" title="Buchstable G" />).

1. Die beiden Pflichtfelder `Ohrmarkennummer` und `Geburtsdatum` wurden erfolgreich befüllt, das erste Tier wird jetzt gespeichert.

1. Die Erfassungsmaske wird jetzt zurückgesetzt. Blättern Sie einen Pass weiter und scannen Sie den nächsten Rinderpass ein.

1. Scannen Sie nacheinander alle Tierpässe gemäß dem in den obigen Punkten erläuterten Ablauf ein.

[Exportieren](../export-csv) Sie nach der erfolgreichen Erfassung aller zugekauften Tiere die von Ihnen erfassten Daten auf einen USB-Stick. 

<figure class="figure">
  <img src="../images/ablauf-massenzugang.png" class="border border-2 figure-img img-fluid rounded p-3" width="900px" align="bottom" alt="Ablaufplan Massenzugang" title="Ablauf Massenzugang" />
  <a name="AnschlussBarcodescanner" ><figcaption class="figure-caption fs-6">Abbildung 2: Ablauf bei der Registrierung von Neuzugängen</figcaption></a>
</figure>

{{% alert title="Hinweis" %}}
Nach jedem erfolgreichen Scan eines Tierpasses wird der Zähler rechts neben den Symbol &nbsp;<img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Tierpässe" title="Tierpässe" /> `Tierpässe` in der Kopfzeile wird von 0 auf 1 erhöht. Gleichzeitig erhöht sich auch der mit dem Symbol <img src="/icons/header/group.svg" width="35" align="bottom" alt="Tiergruppe" title="Tiergruppe" /> `Zukäufe` assoziierte Zähler für die Gesamtzahl der zugekauften Tiere. 
{{% /alert %}}

## Ergänzungen und Erläuterungen

{{% alert title="Hinweis" %}}
Verwenden Sie bitte ausschließlich den mitgelieferten Barcodescanner des Herstellers! Nur mit diesem diesem Scanner bekommen Sie ein akustisches und visuelles Feedback, wenn es während des Scanvorgangs zu Fehlern kommt (doppeltes Einscannen einer Tiernummern, Einscannen eines ungültigen Wertes, etc.).
{{% /alert %}}

### Anpassung der Einstellungen Massenzugang

{{% alert title="Hinweis" %}}
Bezüglich des Ablaufs bei der Erfassung ihrer zugekauften Tiere bestehen zahlreiche Einstellungsmöglichkeiten, welche auf der entsprechenden [Dokumentationsseite](/docs/neu/massenzugang/#einstellungen-massenzugang) erläutert sind.
{{% /alert %}}

### Manueller Aufruf des Bildschirms Massenzugang

1. Wählen Sie im Hauptbildschirm Ihres VitalControl-Geräts den Menüpunkt <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="New animal" /> `Neu` und drücken Sie die Taste `OK`.

1. Es öffnet sich ein Untermenü. Wählen Sie mit den Pfeiltasten ◁ ▷ △ ▽ den Menüpunkt <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Massenzugang" /> `Massenzugang` und bestätigen Sie mit `OK`.

1. Es öffnet sich der Erfassungsbildschirm, in dem je ein Feld für die Ohrmarkennummer und ein Feld für das Geburtsdatum des zu erfassenden Tieres angezeigt werden.

<figure class="figure" style="margin-top: 20px">
  <img src="../images/aufruf-massenzugang.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Aufruf Bildschirm Massenzugang" title="Bildschirm Massenzugang" />
  <a name="AnschlussBarcodescanner" ><figcaption class="figure-caption fs-6">Abbildung 3: Aufruf des Bildschirms <span style="font-style: italic;">Massenzugang</span></figcaption></a>
</figure>

<div style="max-width: 80%; margin-top: 20px">
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="d-grid gap-2">
          <a class="text-start btn btn-lg btn-outline-primary" role="button"  href="../betriebsnummer"><span class="fs-6">Vorherige</span><br><span class="fs-4 fw-semibold">« Eingabe Betriebsnummer</span></a>
        </div>
      </div>
      <div class="col">
        <div class="d-grid gap-2">
          <a class="btn btn-lg btn-outline-primary text-end" role="button" href="../export-csv"><span class="fs-6">Nächste</span><br><span class="fs-4 fw-semibold">Export CSV-Datei »</span></a>
        </div>
      </div>
    </div>
  </div>
<div>
