---
title: "Datensicherung erstellen"
linkTitle: "Sicherung erstellen"
date: 2023-07-20T08:42:39+02:00
draft: false
weight: 10
description: >
  Mittels einer Datensicherung wird eine Backup-Datei erzeugt, welche den gesamten Datenbestand des VitalControl-Geräts enthält.
kategorien: [Datensicherung]
tags: [Sicherungsdatei, USB-Stick]
translationKey: backup
---
{{% usb-drive/de "Um für ihr Gerät eine Datensicherung durchzuführen," %}}

## Datensicherung durchführen {#perform-data-backup}

1. Öffnen Sie im Hauptbildschirm Ihres VitalControl-Geräts das Menü &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="{{< T "Device" >}}" /> `{{< T "Device" >}}`.

2. Wechseln Sie ins Untermenü `{{< T "DataManagement" >}}` und wählen Sie dort den ersten Eintrag `{{< T "DataBackup" >}}` aus. Wählen Sie nun die Zeile `{{< T "CreateBackup" >}}` und bestätigen Sie mit `OK`. Das Gerät fordert Sie jetzt dazu auf, einen USB-Stick einzustecken.

   ![VitalControl: Menüfolge Erstellung Datensicherung](../images/backup.png "Datensicherung aufrufen")

3. Stecken Sie den USB-Stick (C-Stecker) in die Buchse im Handgriff des Geräts ein.

   ![VitalControl: USB-Stick einstecken](/images/firmware/update/plug-in-dual-usb-stick.svg "USB-Stick einstecken")

4. Sobald das Gerät das Einstecken des USB-Sticks erkannt hat wird automatisch mit der Durchführung der Datensicherung begonnen. Das Erfassen, Komprimieren und Schreiben des Backups kann eine Minute oder länger dauern. Nach Abschluss der Datensicherung wird eine Erfolgsmeldung angezeigt:

   ![VitalControl: Erfolgsmeldung Erstellung Datensicherung](../images/backup-done.png "Datensicherung abgeschlossen")

5. Die Datensicherung ist damit erstellt. Sie finden die erstellte Datei `backup.vcu` im Verzeichnis `backup` auf ihrem USB-Stick. Die Sicherungsdatei hat eine Dateigröße von ca. 1 MB.

   ![USB-Stick mit Datensicherungsdatei VitalControl](../images/backup-datei.png "Sicherungsdatei auf USB-Stick")

   {{% alert title="Hinweis" %}}
  Ist im Verzeichnis `backup` ihres USB-Stick bereits eine Datei `backup.vcu` vorhanden, so wird diese Datei umbenannt. Der neue Name der Datei setzt sich zusammen aus der führenden Zeichenkette `backup` und dem Datum und der Uhrzeit, an dem die Sicherungsdatei erstellt wurde (z. B. `backup_2023-07-17_12-50-37.vcb`). Die neu erstellte Datei trägt immer den Namen `backup.vcu`.
   {{% /alert %}}

6. Die erstellte Backup-Datei kann ggf. zur [Wiederherstellung](../restore) des gesicherten Datenbestands auf einem beliebigen VitalControl-Gerät genutzt werden.
