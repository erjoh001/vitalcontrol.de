---
title: Datensicherung zurückspielen
linkTitle: Sicherung einspielen
date: 2023-07-20T08:42:51+02:00
draft: false
weight: 20
description: >
  Bei einer Datenrücksicherung wird mittels einer Backup-Datei der gesamte Datenbestand des VitalControl-Geräts wiederhergestellt.
---
{{% usb-drive/de "Um auf ihrem Gerät eine Datenrücksicherung durchzuführen," %}}

Dieser Stick muss zwingend ein Verzeichnis `backup` enthalten, in dem sich eine gültige **Datensicherungsdatei `backup.vcu`** befindet.

![USB-Stick mit Datensicherungsdatei VitalControl](../images/backup-datei.png "USB Stick mit Datei Datensicherung")

{{% alert title="HINWEIS" %}}
Im Verzeichnis `backup` ihres USB-Sticks können sich mehrere Sicherungsdateien mit der Endung `.vcu` befinden. Das VitalControl-Gerät verwendet für die Rücksicherung immer die Datei mit dem Namen `backup.vcu`, dies ist immer auch die neueste Datei. Wollen Sie eine ältere Sicherungsdateien (mit dem Sicherungsdatum im Dateinamen) zurückspielen, so müssen Sie diese ältere Sicherungsdatei vor der Rücksicherung nach `backup.vcu` umbenennen!
{{% /alert %}}

## Daten aufs VitalControl zurücksichern

1. Öffnen Sie im Hauptbildschirm desjenigen VitalControl-Geräts, auf das sie die Daten zurückspielen wollen, das Menü &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Gerät" /> `Gerät`.

2. Wechseln Sie ins Untermenü `Datenmanagement`, wählen Sie dort den Eintrag `Datensicherung einspielen` und bestätigen Sie mit `OK`. Das Gerät fordert Sie jetzt dazu auf, einen USB-Stick einzustecken.

   ![VitalControl: Menüfolge Datenrücksicherung](../images/restore.png "Rücksichern einer Datensicherung")

3. Stecken Sie den USB-Stick (C-Stecker) in die Buchse im Handgriff des Geräts ein.

   ![VitalControl: USB-Stick einstecken](/images/firmware/update/plug-in-dual-usb-stick.svg "USB-Stick einstecken")

4. Sobald das Gerät das Einstecken des USB-Sticks erkannt hat erscheint eine Sicherheitsabfrage. Quittieren Sie diese Abfrage mit `Ja`, um die Datenrücksicherung zu starten. Das Dekomprimieren und Rücksichern des Backups kann eine Minute oder länger dauern. Nach Abschluss der Datenrücksicherung wird eine Erfolgsmeldung angezeigt:

   ![VitalControl: Erfolgsmeldung Datenrücksicherung](../images/restore-done.png "Erfolgsmeldung Datenrücksicherung")

5. Die Daten wurden damit erfolgreich auf dem VitalControl wiederhergestellt.
