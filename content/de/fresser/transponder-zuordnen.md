---
title: Transponder zuordnen
linkTitle: Transponder zuordnen
date: 2025-03-04T13:38:35+01:00
draft: false
weight: 23
type: docs
description: >
 Den mittels Scan der Tierpässse neu angelegten Tiere ihren jeweiligen Transponder zuordnen.
---

## Grundlegender Ablauf

1. Mittels des Scans der Tierpässe haben Sie im vorherigen Schritt anhand der eingescannten Ohrmarkennummer neue Tiere auf dem VitaControl angelegt. Diese Tiere werden im Listenbildschirm `Zukäufe, kein Transponder zugeordnet` tabellarisch angezeigt.

1. Jedes dieser Tiere muss jetzt noch einen mit einem Transponder ausgestattet werden, damit es im Tränkestand erkannt und damit am Automaten versorgt werden kann. Der Transponder wird dem Tiere entweder ins Ohr eingezogen oder er befindet sich in dem Halsband, welchen dem Tier umgehängt wird.

1. Dieser Transponder, mit dem das Tier ausgestattet wurde, muss dem Tier noch zugeordnet werden. Im Zuge des Zuordnung wird die Transpondernummer in den Tierdatensatz mit aufgenommen. Die Zuordnung des Transponders kann auf zweierlei Wegen erfolgen:

    - Zuordnung des Transponders im Tränkestand, während das Tier angelernt und erstmalig nach dem Transport mit Tränke versorgt wird. Hierbei wird das im Tränkestand befindliche Tiere per manueller Suche aus der Tierliste ausgewählt.

    - Zuordnung des Transponder während die Tiere im Fressgitter fixiert sind und der Tierart die Einstalluntersuchung durchführt. Hierbei erfolgt die Auswahl des Tieres aus der Tierliste per Scan desjenigen Barcodes, welcher auf der gelben Ohrmarke des Tieres aufgedruckt ist.

1. Nachdem einem Tier ein Transponder zugeordnet wurde, verschwindet dieses Tier aus dem Listenbildschirm. Die Anzahl der Tiere reduziert sich somit stetig.

1. Wenn sich keine Tiere mehr auf dem Listenbildschirm befinden, ist die Zuordnung der Transponder beendet.

<figure class="figure mt-2">
{{< tabpane >}}
{{< tab header="**Tierauswahl:**" text=true disabled=true />}}
{{% tab header="Manuelle Auswahl aus Liste" text=true %}}
![Ablauf Transponder zuordnen, manuelle Suche](../images/transponder-zuordnen.png "Transponder zuordnen, manuelle Suche")
{{% /tab %}}
{{% tab header="Scan des Barcodes auf der Ohrmarke" text=true %}}
![Ablauf Transponder zuordnen, Barcodescan](../images/transponder-zuordnen-barcodescan.png "Transponder zuordnen, Barcodescan")
{{% /tab %}}
{{< /tabpane >}}
<a name="link-transponder" ><figcaption class="figure-caption fs-6">Abbildung 1: Grundlegender Ablauf der Zuordnung von Transpondern</figcaption></a>
</figure>

## Barcodescanner abziehen

1. Ziehen Sie nach dem Scan aller Tierpässe das Kabel des Barcodescanners von der USB-C Buchse des VitalControl-Gerät ab (<a href="#screen-link-transponder">Abbildung 2</a>: <span style="font-style: italic;">Schritt</span> <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Schritt 1" />).

1. Es öffnet sich ein Popup-Fenster, in dem abgefragt wird, ob zum Zuordnungsbildschirm weitergeleitet werden soll. Markieren sie hier mittels der Cursortasten die Option `Ja` und starten Sie die Weiterleitung mit der `OK`-Taste (<a href="#screen-link-transponder">Abbildung 2</a>: <span style="font-style: italic;">Schritt</span> <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Schritt 2" />).

1. Es öffnet sich ein Listenbildschirm, in dem je alle Zukäufe aufgeführt sind, denen aktuell noch kein Transponder zugewiesen wurde.

    <figure class="figure mt-2">
        <img src="/images/synchronisation/disconnect-scanner.svg" class="border border-2 figure-img img-fluid rounded p-4" width="900px" align="bottom" alt="Wechsel zu Bildschirm Transponder verknüpfen" title="Transponder verknüpfen" />
        <a name="screen-link-transponder" ><figcaption class="figure-caption fs-6">Abbildung 2: Wechsel zum Bildschirm <span style="font-style: italic;">Transponder zuordnen</span> durch Abziehen des USB-Kabels</figcaption></a>
    </figure>

{{% alert title="Hinweis" %}}
Sollte nach dem Einstecken des Barcodescanner der Bildschirm `MassenTransponder zuordnen` nicht aufgerufen werden, so folgend sie den untenstehenden [Anweisungen](#manueller-aufruf-des-bildschirms-transponder-zuordnen), um den Bildschirm manuell aufzurufen.
{{% /alert %}}

## Transponder zuordnen

1. Im Listenbildschirm `Zukäufe, kein Transponder zugeordnet` werden alle Zukäufe aufgelistet, denen aktuell noch kein Transponder zugewiesen wurde.

{{< tabpane >}}
{{< tab header="**Tierauswahl:**" text=true disabled=true />}}
{{% tab header="Manuelle Auswahl aus Liste" text=true %}}
![Ablauf der Verknüpfung von Transpondern, manuelle Zuordnung](../images/ablauf-zuordnung.png "Ablauf Transponder verknüpfen")
{{% /tab %}}
{{% tab header="Scan des Barcodes auf der Ohrmarke" text=true %}}
![Ablauf der Verknüpfung von Transpondern, Barcodescan](../images/ablauf-zuordnung-barcodescan.png "Ablauf Transponder verknüpfen, Barcodescan")
{{% /tab %}}
{{< /tabpane >}}
<a name="link-transponder" ><figcaption class="figure-caption fs-6">Abbildung 3: Ablauf der Verknüpfung von Transpondern</figcaption></a>
</figure>

## Ergänzungen und Erläuterungen

### Anpassung der Einstellungen Transponder zuordnen

### Manueller Aufruf des Bildschirms Transponder zuordnen

1. Wählen Sie im Hauptbildschirm Ihres VitalControl-Geräts den Menüpunkt <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Zugänge" /> `Zugänge` und drücken Sie die Taste `OK`.

1. Es öffnet sich ein Untermenü. Wählen Sie mit den Pfeiltasten ◁ ▷ △ ▽ den Menüpunkt <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Zukäufe, kein Transponder" /> `Zukäufe, kein Transponder` und bestätigen Sie mit `OK`.

1. Es öffnet sich ein Listenbildschirm, in dem je alle Zukäufe aufgeführt sind, denen aktuell noch kein Transponder zugewiesen wurde.

<figure class="figure" style="margin-top: 20px">
  <img src="../images/aufruf-transponder-zuordnen.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Aufruf Bildschirm Transponder zuordnen" title="Bildschirm Transponder zuordnen" />
  <a name="AnschlussBarcodescanner" ><figcaption class="figure-caption fs-6">Abbildung 4: Aufruf des Bildschirms <span style="font-style: italic;">Transponder zuordnen</span></figcaption></a>
</figure>

<div style="max-width: 80%; margin-top: 20px;">
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <div class="d-grid gap-2">
        <a class="text-start btn btn-lg btn-outline-primary" role="button"  href="../paesse-scannen"><span class="fs-6">Vorherige</span><br><span class="fs-4 fw-semibold">« Pässe einscannen</span></a>
      </div>
    </div>
    <div class="col">
      <div class="d-grid gap-2">
        <a class="btn btn-lg btn-outline-primary text-end" role="button" href="../synchronisation"><span class="fs-6">Nächste</span><br><span class="fs-4 fw-semibold">Synchronisation mit Alma Pro »</span></a>
      </div>
    </div>
  </div>
</div>
<div>
