---
title: Datenaustausch zwischen VitalControl und der Managementsoftware Herde
linkTitle: Datenaustausch
date: 2023-08-04T12:22:12+02:00
draft: false
description: >
  Importieren Sie den Tierbestand von der Herde Software auf das VitalControl und spielen sie mit dem VitalControl erfasste Daten in Herde ein.
weight: 20
slug: datentausch
Kategorien: [Datenaustausch, DSP Herde]
---
Gehen Sie wie folgt vor, um Daten zwischen der Herde Software und dem VitalControl abzugleichen:

### VitalControl mit dem PC verbinden

1. Verbinden Sie das VitalControl-Gerät via des mitgelieferten USB-Kabels mit ihrem Computer oder Laptop.

   ![VitalControl mit dem PC verbinden](/images/synchronisation/connect-to-pc.svg "VitalControl mit PC koppeln")

1. Stellen Sie sicher, dass das VitalControl-Gerät eingeschaltet ist.

### Vollständigen Datentausch durchführen

1. Weisen Sie die Herde-Software an, einen Datenaustausch durchzuführen. Je nach Konfiguration ihrer Benutzeroberfläche erreichen Sie den entsprechenden Menüpunkt `Datentausch` im Hauptmenü (Menüpunkt _Technik_), in der Seitenleiste oder in der angepassten Werkzeugleiste (horizontal oder vertikal).

   ![Herde Software: Aufruf der Funktion Datenaustausch](../screenshots/datentausch.png "Herde: Aufruf Datenaustausch")

1. Es öffnet sich ein Pop-up, in dessen linker Seitenleiste die eingerichteten Technikkopplungen aufgelistet sind. Klicken Sie auf den Eintrag `VitalControl`, um den Datenaustausch zu starten:

   ![Herde Software: Datenaustausch starten](../screenshots/start-kopplung.png "Herde: Start Datenaustausch")

1. Beim erstmaligen Datenaustausch erscheint ein Warnhinweis, dass noch keine Tiere auf dem VitalControl angelegt sind. Quittieren Sie diesen Hinweis mit `Ja`. Der Datenaustausch wird gestartet.

   ![Herde Software, Datenaustausch: Warnhinweis](../screenshots/warnmeldung.png "Datenaustausch: Warnhinweis")

1. Der Datenaustausch ist ein zweistufiger Prozess: Im ersten Schritt ➊ werden die Stamm- bzw. Tierdaten von der `Herde`-Software an das VitalControl übergeben. Im zweiten Schritt ➋ werden die mit dem VitalControl erfassten Daten von der `Herde`-Software eingelesen. Die Anzahl der übergebenen Datensätze (Tiere, Abkalbungen, Technikalarme und Gewichte) ist in dem Popup aufgeführt:

   ![Datenaustausch mit Herde Software: Ablauf](../screenshots/ablauf-kopplung.png "Herde: Ablauf Datenaustausch")

1. Der erfolgreiche Abschluss der Datentausches wird über ein Popup mit einer Erfolgsmeldung signalisiert.

   ![Herde Software: Erfolgsmeldung Datenaustausch](../screenshots/erfolgsmeldung.png "Herde: Erfolgsmeldung Datenaustausch")

    {{% alert title="Achtung" %}}
Falls viele Tiere übertragen sollen, kann der Datenaustausch eine gewisse Zeitspanne in Anspruch nehmen. Den Fortschritt der Datenübertragung können Sie dabei dem Display des VitalControl-Geräts entnehmen.

![Datensynchronisation mit Herde, Fortschrittsanzeige](../../vcsynchronizer/images/tierimport/datenuebertragung.png "VitalControl: Fortschritt Datenübertragung")
    {{% /alert %}}
