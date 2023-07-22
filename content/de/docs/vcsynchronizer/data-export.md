---
title: Export von Tierdaten und Messwerten
linkTitle: Datenexport
description: >
  Tierdaten und Messwerte auf dem VitalControl in mehrere CVS-Dateien exportieren
date: 2023-07-19
weight: 20
---
Gehen Sie wie folgt vor, um Daten vom VitalControl auf einen Massenspeicher ihres PCs zu exportieren:

1. [Verbinden](#) Sie das VitalControl-Gerät via USB-Kabel mit ihrem Computer und stellen Sie sicher, das das VitalControl-Gerät eingeschaltet ist.

1. Drücken Sie die Windows-Taste, um das Startmenü zu öffnen

1. *Nur Windows 11*: Klicken Sie auf den Eintrag `Alle Apps`

1. Scrollen Sie in der Liste ihrer installierten Anwendungen nach unten bis zum Buchstaben `U`. Dort sollten Sie einen Eintrag `Urban VitalControl` vorfinden. Klappen Sie ggf. diesen Eintrag auf, damit alle Untermenüeinträge angezeigt werden.

   {{% alert title="Achtung" %}}
  Falls Sie in der Liste ihrer Anwendungen den Eintrag `Urban VitalControl` nicht finden können, müssen Sie ggf. die Software `VCSynchronizer` auf ihrem [PC installieren](../installation/).
   {{% /alert %}}

1. Klicken Sie jetzt auf den Menüeintrag `Datenexport (CVS)`.

   ![Windows Startmenü, Eintrag für Urban VitalControl (VCSynchronizer)](../images/data-export.png "Windows Startmenü, VitalControl")
   
1. Der Exportvorgang wird gestartet. Nach dem Ende des Exportvorgangs öffnet sich ein Windows-Explorer Fenster, in dem das Datenverzeichnis angezeigt wird. In dem angezeigten Verzeichnis `data` befinden sich die vier neu erstellten [Exportdateien](../../data-export/data-files/).

   ![Lokales Datenverzeichnis mit Exportdateien](../images/data-export/exportdateien.png "Exportdataien, lokal gespeichert")

   {{% alert title="Hinweis" %}}
  Sie können jede dieser 4 [Exportdateien](../../data-export/data-files/) in einem Tabellenkalkulationsprogramm ihrer Wahl öffnen (wie etwa [Microsoft Excel](https://products.office.com/excel) oder [Openoffice Calc](https://www.openoffice.org/de/) öffnen und dort eine erweiterte Auswertungen der Daten durchführen. Beispielhaft ist unten die Ansicht der Tabelle `animals.csv` in einer Tabellenkalkulation wiedergegeben.

  ![Exportierte Tierdaten, geöffnet in Tabellenkalkulationsprogramm](/images/data-export/animals.png "Tabellenkalkulationsprogramm mit Tierdaten")
   {{% /alert %}}

