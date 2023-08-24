---
title: Aktualisierung der Geräte-Firmware
linkTitle: Aktualisierung
weight: 20
description: >
  Mit einem Firmware-Update aktualisieren Sie die auf dem Gerät installierte Software.
kategorien: [Firmware]  
---
Vergewissern Sie sie zunächst, ob für ihr Gerät eine [neuere Firmware-Version](../versionen/) vorhanden ist, und aktualisieren Sie ggf. die Firmware Ihres Gerätes gemäß der folgenden Anleitung.

{{% usb-drive/de "Um das Update auf Ihr Gerät aufzuspielen" %}}

## Aktualisierung vorbereiten

1. Erstellen Sie mithilfe eines Computers im Wurzelverzeichnis des mitgelieferten Dual USB-Sticks ein neues Verzeichnis mit dem Namen `update`.

    ![Windows Explorer: USB-Stick mit Verzeichnis 'update'](../images/create-folder-update.png)

1. Laden Sie die [Firmware-Datei](/download/firmware.vcu) (Dateiname: `firmware.vcu`) herunter und speichern Sie die Datei auf dem USB-Stick im Verzeichnis `update`. Die Update-Datei benötigt ca. 2 MB Speicherplatz auf dem Stick.

    ![Windows Explorer: USB-Stick mit Firmware-Datei 'firmware.vcu'](../images/save-firmware-file.png)

1. Erstellen Sie ein [Datensicherung][] für ihr Gerät.

    {{% alert title="Info" %}}
Bei der Datensicherung handelt es sich um eine empfohlene Vorsichtsmaßnahme. Alle vorhandenen Tier- und Gerätedaten bleiben bei einer Aktualisierung der Firmware erhalten.
    {{% /alert %}}

[Datensicherung]: {{< relref "../backup/backup/" >}}

## Aktualisierung durchführen

1. Öffnen Sie im Hauptbildschirm Ihres VitalControl-Geräts das Menü `Gerät`.

1. Wechseln Sie ins Untermenü `Service`, wählen Sie dort den Eintrag `Aktualisierung Firmware` und bestätigen Sie mit `OK`. Das Gerät fordert Sie jetzt dazu auf, den USB-Stick einzustecken.

   ![VitalControl: Menüfolge Aktualisierung Firmware](../images/firmware-update.png)

1. Stecken Sie den USB-Stick (C-Stecker) in die Buchse im Handgriff des Geräts und bestätigen Sie mit `OK`.

   ![VitalControl: USB-Stick einstecken](/images/firmware/update/plug-in-dual-usb-stick.svg)

   Das Gerät führt das Update automatisch durch. Während des Updates informiert das Display über den Fortschritt der Aktualisierung. Nach Abschluss des Updates startet das Gerät automatisch neu und zeigt nach dem Neustart eine Erfolgsmeldung an:

   ![VitalControl: Erfolgsmeldung Aktualisierung Firmware](../images/update-success.png)

   Damit ist die neue Firmware eingespielt.
