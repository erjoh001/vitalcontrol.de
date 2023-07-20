---
title: "Datensicherung zurückspielen"
linkTitle: "Sicherung einspielen"
date: 2023-07-20T08:42:51+02:00
draft: false
weight: 20
description: >
  Bei einer Datenrücksicherung wird mittels einer Backup-Datei der gesamte Datenbestand des VitalControl-Geräts wiederhergestellt.
---
{{% usb-drive/de "Um Daten auf ihrem ihr Gerät eine Datenrücksicherung durchzuführen," %}}

Dieser Stick muss zwingend ein Verzeichnis `backup` enthalten, in dem sich eine gültige **Datensicherungsdatei `backup.vcu`** befindet.

![USB-Stick mit Datensicherungsdatei VitalControl](../images/backup-datei.png)

{{% alert title="ACHTUNG" %}}
Sollten sich im Verzeichnis `backup` ihres USB-Sticks mehrere Sicherungsdateien mit der Endung `.vcu` befinden, so achten Sie unbedingt darauf, dass die die neueste Datei zurücksichern. Das VitalControl-Gerät verwendet für die Rücksicherung immer die Datei mit dem Namen `backup.vcu`, Sicherungsdateien mit dem Sicherungsdatum im Dateinamen werden **nicht** berücksichtigt! Ggf. müssen sie vor der Rücksicherung ihre jüngste vorliegende Sicherungsdatei nach `backup.vcu` umbenennen!
{{% /alert %}}

## Daten aufs VitalControl zurücksichern

1. Öffnen Sie im Hauptbildschirm desjenigen VitalControl-Geräts, auf das sie die Daten zurückspielen wollen, das Menü `Gerät`.

2. Wechseln Sie ins Untermenü `Datenmanagement`, wählen Sie dort den Eintrag `Datensicherung einspielen` und bestätigen Sie mit `OK`. Das Gerät fordert Sie jetzt dazu auf, einen USB-Stick einzustecken.

   ![VitalControl: Menüfolge Datenrücksicherung](../images/restore.png)

3. Stecken Sie den USB-Stick (C-Stecker) in die Buchse im Handgriff des Geräts ein.

   ![VitalControl: USB-Stick einstecken](/images/firmware/update/plug-in-dual-usb-stick.svg)

4. Sobald das Gerät das Einstecken des USB-Sticks erkannt hat erscheint eine Sicherheitsabfrage. Quittieren Sie diese Abfrage mit `Ja`, um die Datenrücksicherung zu starten. Das Dekomprimieren und Rücksichern des Backups kann eine Minute oder länger dauern. Nach Abschluss der Datenrücksicherung wird eine Erfolgsmeldung angezeigt:

   ![VitalControl: Erfolgsmeldung Datenrücksicherung](../images/restore-done.png)

5. Die Daten wurden damit erfolgreich auf dem VitalControl wiederhergestellt.
