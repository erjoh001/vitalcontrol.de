---
title: Datenexport auf USB-Stick
linkTitle: Auf USB-Stick
description: >
  CVS-Dateien mit Tierdaten und Messwerten des VitalControl-Geräts auf einen USB-Stick exportieren
date: 2023-07-20
weight: 10
kategorien: [Datenexport]
translationKey: data-export/usb-drive
---
{{% usb-drive/de "Um mit ihrem Gerät einen Datenexport auf USB-Stick durchzuführen," %}}

## Datenexport durchführen

1. Öffnen Sie im Hauptbildschirm Ihres VitalControl-Geräts das Menü `Gerät`.

2. Wechseln Sie ins Untermenü `Datenmanagement`, wählen Sie dort den Eintrag `Tierdaten exportieren (CSV)` und bestätigen Sie mit `OK`. Das Gerät fordert Sie jetzt dazu auf, einen USB-Stick einzustecken.

   ![VitalControl: Menüfolge Datenexport](../images/datenexport.png "Datenexport aufrufen")

3. Stecken Sie den USB-Stick (C-Stecker) in die Buchse im Handgriff des Geräts ein.

   ![VitalControl: USB-Stick einstecken](/images/firmware/update/plug-in-dual-usb-stick.svg "USB-Stick einstecken")

4. Sobald das Gerät das Einstecken des USB-Sticks erkannt hat wird automatisch mit dem Datenexport begonnen. Das Schreiben der Exportdateien kann einen kurzen Augenblick Zeit in Anspruch nehmen. Nach Abschluss des Datenexports wird eine Erfolgsmeldung angezeigt:

   ![VitalControl: Erfolgsmeldung Datenexport](../images/erfolg-datenexport.png "Datenexport abgeschlossen")

5. Der Datenexport ist damit abgeschlossen. Sie finden die erstellten vier [Exportdateien](../data-files/) im Verzeichnis `export-csv` auf ihrem USB-Stick.

   ![USB-Stick mit Exportdateien VitalControl](../images/exportdateien.png "Exportdateien auf USB-Stick")

   {{% alert title="Hinweise" %}}
  - Um ein versehentliches Überschreiben von Exportdateien zu verhindern, wird in den Dateinamen der jeweiligen Exportdatei immer das Datum und die Uhrzeit der Erstellung der Datei mit aufgenommen. Achten Sie darauf, die neueste Version der Exportdateien zu verwenden, falls sie mehrere Datenexportvorgänge durchgeführt haben.
  - Die Dateigröße der Exportdateien ist abhängig von der Anzahl der Tiere auf dem VitalControl und von der Anzahl der durchgeführten Messungen. Generell belegen die Exportdateien nur wenige kB Speicherplatz auf dem USB-Stick.
   {{% /alert %}}
