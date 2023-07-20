---
title: Export von Tierdaten und Messwerten
linkTitle: Datenexport
description: >
  Tierdaten und Messwerte auf dem VitalControl in eine CVS-Datei exportieren
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

   ![dd](../images/data-export.png)
   
1. Der Exportvorgang wird gestartet. Nach dem Ende des Exportvorgangs öffnet sich ein Windows-Explorer Fenster, mit dem Datenverzeichnis `data`.

   ![dd](../images/data-export/exportdateien.png)

1. in dem  Datenverzeichnis finden sich 4 Dateien im CSV-Format, welche.

Die folgende Tabelle listet die aktuellen Firmware-Versionen auf:

|                 | animals.csv  | temperatures.csv | weights.csv | ratings.csv | 
|-----------------|:--------------:|:-------------:|:------------:|:------------:|
| **Inhalt der Tabelle**     | Tierdaten        | Temperaturen      | Tiergewichte      | Bewertungen  |
| **Spaltenanzahl**       | 6   |   | 5 | 8 |
| **Spalte 1** | : `National-Animal-ID`: VVO-Nummer des Tieres : ||||
| **Commit №**    | 1884         | n/a         | n/a        |------------|


   {{% alert title="Hinweis" %}}
  Sie können jede dieser 4 Tabellen in einem Tabellenkalkulationsprogramm ihrer Wahl öffnen (wie etwa [Microsoft Excel]() oder [Openoffice Calc]() öffnen und dort eine erweiterte Auswertungen der Daten durchführen. Beispielhaft ist unten die Ansicht der Tabelle `animals.csv` in einer Tabellenkalkulation wiedergegeben.

  ![dd](/images/data-export/animals.png)
   {{% /alert %}}

