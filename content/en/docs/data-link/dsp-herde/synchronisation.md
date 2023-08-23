---
title: Data synchronisation between VitalControl and herd management software Herde
linkTitle: Synchronisation
date: 2023-08-04T12:22:12+02:00
draft: false
description: >
  Synchronise the animals stored on VitalControl device with animals managed by *Herde* software and transfer measured values recorded with VitalControl device to *Herde* software.
weight: 20
categories: [Data exchange, DSP Herde]
---
Gehen Sie wie folgt vor, um Daten zwischen der Herde Software und dem VitalControl abzugleichen:

### Connect VitalControl to PC

1. Connect the VitalControl device to your computer or laptop via the supplied USB cable.

   ![Connect VitalControl to PC or laptop](/images/synchronisation/connect-to-pc.svg "Connect VitalControl to PC")

1. Make sure your VitalControl device is turned on.

### Vollständigen Datentausch durchführen

1. Weisen Sie die Herde-Software an, einen Datenaustausch durchzuführen. Je nach Konfiguration ihrer Benutzeroberfläche erreichen Sie den entsprechenden Menüpunkt `Datentausch` im Hauptmenü (Menüpunkt _Technik_),  in der Seitenleiste oder in der Werkzeugleiste (horizontal oder vertikal).

   ![Herde Software: Aufruf der Funktion Datenaustausch](../screenshots/data-exchange.png "Herde: Aufruf Datenaustausch")

1. Es öffnet sich ein Pop-up, in dessen linker Seitenleiste die eingerichteten Technikkopplungen aufgelistet sind. Klicken Sie auf den Eintrag `VitalControl`, um den Datenaustausch zu starten:

   ![Datenaustausch mit Herde Software: Warnhinweis](../screenshots/start-transfer.png "Herde: Start Datenaustausch")

1. Beim erstmaligen Datenaustausch erscheint ein Warnhinweis, dass noch keine Tiere auf dem VitalControl angelegt sind. Quittieren Sie diesen Hinweis mit `Ja`. Der Datenaustausch wird gestartet.

   ![Herde Software: Datenaustausch starten](../screenshots/warning.png "Herde: Start Datenaustausch")

1. Der Datenaustausch ist ein zweistufiger Prozess: Im ersten Schritt ➊ werden die Stamm- bzw. Tierdaten von der `Herde`-Software an das VitalControl übergeben. Im zweiten Schritt ➋ werden die mit dem VitalControl erfassten Daten von der `Herde`-Software eingelesen. Die Anzahl der übergebenen Datensätze (Tiere, Abkalbungen, Technikalarme und Gewichte) ist in dem Popup aufgeführt:  

   ![Datenaustausch mit Herde Software: Ablauf](../screenshots/data-transfer.png "Herde: Ablauf Datenaustausch")

1. Der erfolgreiche Abschluss der Datentausches wird über eine Popup mit einer Erfolgsmeldung signalisiert.

   ![Herde Software: Erfolgsmeldung Datenaustausch](../screenshots/success-message.png "Herde: Erfolgsmeldung Datenaustausch")   

    {{% alert title="Attention" %}}
Falls viele Tiere übertragen sollen, kann der Importvorgang eine gewisse Zeitspanne in Anspruch nehmen. Den Fortschritt des Datenimports können Sie dabei dem Display des VitalControl-Geräts entnehmen.

![Datensynchronisation mit Herde, Fortschrittsanzeige](../../vcsynchronizer/images/import-animals/data-transfer.png "VitalControl: Fortschritt Datenübertragung")
    {{% /alert %}}
