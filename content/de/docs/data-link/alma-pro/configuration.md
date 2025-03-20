---
title: Einmalige Aktivierung und Konfiguration des Geräts in den Einstellungen des Tränkeautomaten
linkTitle: Konfiguration
date: 2023-08-04T12:32:28+02:00
draft: false
description: >
  Vor der erstmaligen Nutzung müssen Sie das VitalControl einmalig am Automaten aktivieren und passend für ihren Einsatzfall konfigurieren.
slug: konfiguration
weight: 10
Kategorien: [Alma Pro]
translationKey: alma-pro/configuration
---
Zur Aktivierung und Einrichtung des VitalControl-Geräts gehen Sie wie folgt vor:

## Einstellungsmenü `VitalControl` aufrufen

{{% alert title="Achtung" %}}
Um die Aktivierung und Einrichtung des VitalControl-Geräts vornehmen zu können, müssen Sie in der Benutzerrolle `Betriebsleiter` am Automaten angemeldet sein. Andernfalls sind einige der unten abgebildeten und beschriebenen Schaltflächen für sie nicht sichtbar.
{{% /alert %}}

1. Klicken Sie in der linken Seitenliste des Touch-Terminals auf die unterste Schaltfläche <img src="/icons/gear.svg" width="25" align="bottom" alt="Alma Pro: Menü Einstellungen" title="Einstellungen"/> `Einstellungen` <span style="font-size: 140%">➀</span>. Sollten Sie sich im Hauptmenü befinden, wo keine Seitenleiste sichtbar ist, drücken sie die Schaltfläche &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Automatenmenü" title="Automatenmenü"/> `Automat`, um die Seitenleiste anzuzeigen.

1. Klicken Sie in der unteren Symbolleiste des Touch-Terminals auf die zweite Schaltfläche von links <img src="/icons/touch-gear.svg" width="25" align="bottom" alt="Einstellungen Touch-Terminal" title="Einstellungen Touch"/> `Einstellungen Touch-Terminal` <span style="font-size: 140%">➁</span>.

1. In der linken Hälfte des zentralen Bildschirmbereichs erscheint jetzt einen Reihe von Menüpunkten. Klicken Sie auf die unterste Schaltfläche `Zubehör` <span style="font-size: 140%">➂</span>.

1. In der rechten Hälfte des zentralen Bildschirmbereichs erscheint jetzt ein (oder ggf. auch mehrere) Menüpunkt(e). Klicken Sie auf die oberste Schaltfläche `VitalControl` <span style="font-size: 140%">➃</span>.  Die Schaltfläche wechselt jetzt auf die linke Bildschirmhälfte.

1. Unten in der rechten Bildschirmhälfte wird nun die Schaltfläche &nbsp;<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Einstellungen VitalControl öffnen" title="Einstellungen öffnen" /> `Einstellungen öffnen` <span style="font-size: 140%">➄</span> angezeigt. Klicken Sie auf diese Schaltfläche, es öffnet sich dann ein Popup-Fenster, in welchem  [Seite 1](#settings-menu-vitalcontrol-page-1) des Einstellungsmenüs `VitalControl` angezeigt wird.

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/open-settings-vitalcontrol.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Einstellungen VitalControl: Aufruf" title="Aufruf Einstellungsmenü VitalControl" />
    <figcaption class="figure-caption fs-6">Screenshot 1: Aufruf des Einstellungsmenüs <span style="font-style: italic;">VitalControl</span></figcaption>
</figure>

Das Einstellungsmenü `VitalControl` ist auf zwei Seiten verteilt: 

## Einstellungsmenü `VitalControl` - Seite 1 {#settings-menu-vitalcontrol-page-1}

Seite 1 des Einstellungsmenüs <span style="font-style: italic;">VitalControl</span> präsentiert sich wie folgt:

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-1.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Einstellungsmenü VitalControl: Seite 1" title="Einstellungen VitalControl (1)" />
    <figcaption class="figure-caption fs-6">Screenshot 2: Einstellungsmenü <span style="font-style: italic;">VitalControl</span>, Seite 1</figcaption>
</figure>

Sie können auf dieser Seite folgende Aktionen und Einstellungen durchführen bzw. vornehmen.

### Aktivierung des VitalControl-Geräts

Im Auslieferungszustand des Automaten ist das VitalControl deaktiviert. Stellen Sie den <span style="font-style: italic;">Ein/Aus</span> Schalter <span style="font-size: 140%">➀</span> auf die rechte Position <span style="font-style: italic;">Ja</span>, um das VitalControl-Gerät zu aktivieren. Anschließend wird in der rechten Seitenleiste des Automatenmenüs unterhalb der Symbol(e) für die/den angeschlossenen Automat(en) das Symbol <img src="/icons/device.svg" width="20" align="bottom" alt="VitalControl-Gerät" title="VitalControl"/> für das `VitalControl`-Gerät angezeigt (siehe Screenshot <span style="font-style: italic;"><a href="../synchronisation#synchronize-vc-ap">Automatenmenü</a></span>, dortige Ziffer <span style="font-size: 140%">➁</span>).

### Synchronisation Automat <span style="font-size: 150%">🠲</span> VitalControl

Auf der linken Seite des Bildschirms befindet sich einzig die Option <span style="font-style: italic;">Auf VitalControl neu anlegen</span> <span style="font-size: 140%">➁</span>. 

Diese Option regelt das Verhalten für den Fall, dass bei der Synchronisation auf dem Automaten Tiere vorhanden sind, die dem VitalControl noch nicht bekannt sind. Diese Option ist standardmäßig aktiviert und sollte in der Regel auch gesetzt bleiben. Erfassen ihre zugekauften Fresser durch Scannen der Tierpässe, muss diese Option jedoch zwingend deaktiviert werden.

<span style="font-weight: bold">Aktivieren</span> Sie diese Option:

- wenn Sie ein fabrikneues VitalControl vor sich haben, auf welches Sie alle Tiere eines Automaten übertragen wollen. Nach der Synchronisation sind dann alle dem Automaten bekannten Tiere auch auf dem VitalControl vorhanden.
- wenn Sie im laufenden Betrieb kontinuierlich neue Kälber an den Automaten bringen. Diese Tiere werden dann im Zuge der Synchronisation ebenfalls auf dem VitalControl angelegt.

<span style="font-weight: bold">Deaktivieren</span> Sie diese Option:
- wenn Sie auf Ihrem VitalControl Tiere durch das Scannen von Tierpässen neu angelegt haben, wobei
    - diesen Tieren noch kein Transponder zugewiesen wurde und
   - diese Tieren bereits am Automat gefüttert werden und sie insofern dort registriert sind.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Achtung</span><br>
            Bleibt in der oben aufgeführten Konstellation die Option gesetzt, so werden nach der Synchronisation Tiere doppelt auf dem VitalControl vorhanden.
        </div>
    </div>

### Synchronisation VitalControl <span style="font-size: 150%">🠲</span> Automat

Auf der rechten Seite des Bildschirms befinden sich zwei Optionen:

- Die Option <span style="font-style: italic;">Vom VitalControl löschen</span> <span style="font-size: 140%">➂</span> regelt, ob Tiere, die vom Automaten gelöscht wurden, bei der nächsten Synchronisation auch auf dem VitalControl gelöscht werden. Nutzen Sie das VitalControl nur während der Tränkeperiode der Tiere, so sollte die Option gesetzt sein. Möchten Sie die Tiere über die Tränkeperiode hinaus verfolgen, so müssen Sie diese Option deaktivieren.

    <span style="font-weight: bold">Aktivieren</span> Sie diese Option:

    - wenn Sie nur während der Tränkeperiode Daten für die Tiere erfassen,
    - wenn Sie möchten, dass die Tiere sofort nach dem Löschen am Automat automatisch auch vom VitalControl gelöscht werden. Nur so sammeln sich im Lauf der Zeit keine Tiere auf dem VitalControl an.

    <span style="font-weight: bold">Deaktivieren</span> Sie diese Option:
    - wenn Sie auch nach Anschluß der Tränkeperiode noch Daten für die Tiere erfassen möchten, etwa im Zuge einer Wiegung,
    - wenn Sie bereit sind, die Tiere selbst manuell vom VitalControl zu löschen.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Achtung</span><br>
            Wenn Sie diese Option deaktivieren, müssen Sie, sobald ein Tier auf dem Automat gelöscht wurde, für dieses Tier auf dem VitalControl den Transponder lösen. Unterbleibt dieses Lösen des Transponders, so werden dem Tierdatensatz fälschlicherweise Datensätze eines anderen, auf dem Automaten neu angelegten Tieres hinzugefügt, welches jetzt denselben Transponder trägt, den das auf dem VitalControl verbliebene Tier seinerzeit getragen hatte.
        </div>
    </div>

- Die Option <span style="font-style: italic;">Auf Automat neu anlegen</span> <span style="font-size: 140%">➃</span> regelt, ob auf dem VitalControl vorhandene Tiere, die dem Automaten unbekannt sind, im Zuge der nächsten Synchronisation auf dem Automaten angelegt werden. Im Standard ist diese Option nicht aktiviert. Aktivieren Sie diese Option, wenn die Ersterfassung ihrer Tiere mit dem VitalControl erfolgt. Lassen Sie diese Option deaktiviert, wenn Sie ein VitalControl an mehreren Automaten nutzen und/oder wenn ihre Tiere im Zuge der erstmaligen Fütterung am Automaten registriert werden.

    <span style="font-weight: bold">Deaktivieren</span> Sie diese Option bzw. lassen Sie sie deaktiviert:
    - wenn Sie Ihr VitalControl-Gerät an mehreren Automaten gleichzeitig nutzen,
    - wenn Sie Ihre Tiere direkt an den Automaten bringen, ohne Sie vorher mit dem VitalControl zu erfassen.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Achtung</span><br>
            Wird das VitalControl an mehreren Automaten genutzt und bleibt diese Option gesetzt, so werden im Zuge der Synchronisation ungewollt Tiere von einem Automaten auf den anderen übertragen.
        </div>
    </div>

    <span style="font-weight: bold">Aktivieren</span> Sie diese Option:

    - wenn Sie ihre neugeborenen Tiere mit dem VitalControl erfassen,
    - wenn Sie ihre zugekauften Tiere durch Einscannen der Tierpässe auf dem VitalControl erfassen.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Achtung</span><br>
            Aktivieren Sie diese Option nur, wenn sie das VitalControl an einem einzigen Automaten nutzen! Wollen Sie bei gesetzter Option die Synchronisation mit mehreren Automaten durchführen, so müssen Sie sich Automat ein separates VitalControl-Gerät nutzen.
        </div>
    </div>

## Einstellungsmenü `VitalControl` - Seite 2

### Vorrang bei Synchronisationskonflikten

<figure class="figure" style="margin-top: 5px;">
    <img src="../images/settings-vitalcontrol-2.png" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Einstellungsmenü VitalControl: Seite 2" title="Einstellungen VitalControl (2)" />
    <figcaption class="figure-caption fs-6">Screenshot 3: Einstellungsmenü <span style="font-style: italic;">VitalControl</span>, Seite 2</figcaption>
</figure>
