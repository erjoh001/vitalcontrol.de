---
title: "Aktuelle Firmware-Versionen"
linkTitle: "Aktuelle Versionen"
date: 2023-07-18T12:31:38+02:00
draft: false
weight: 10
slug: versionen
description: >
  Zusammenstellung der aktuellen Firmware-Versionen für das VitalControl Gerät.
---

## Firmware-Versionen ihres Geräts ermitteln {#determine-firmware-versions-installed-on-your-device}

1. Öffnen Sie im Hauptbildschirm Ihres VitalControl-Geräts den Menüpunkt <img src="/icons/device.svg" width="25" align="bottom" alt="Device" /> `Gerät`.

2. Wechseln Sie ins Untermenü `Info`, wählen Sie dort den Eintrag `Software` und bestätigen Sie mit `OK`. Es öffnet sich ein Popup-Fenster, in dem die aktuell auf ihrem Gerät aufgespielten Software-Versionen angezeigt werden:

![VitalControl: Firmware-Versionen](../images/firmware-versions.png "Anzeige Firmwareversionen")

## Aktuelle Firmware-Versionen: {#latest-firmware-versions}

Die folgende Tabelle listet die aktuellen Firmware-Versionen auf:
|                 | GUI-Firmware  | Middleware  | Bootloader |
|-----------------|:-------------:|:-----------:|:----------:|
| **Version**     | {{% version/firmware component="gui" %}} | {{% version/firmware component="middleware" %}} | {{% version/firmware component="bootloader" %}} |
| **Datum**       | {{% version/firmware component="gui" info="date" dateFormat="de" %}} | {{% version/firmware component="middleware" info="date" dateFormat="de" %}} | {{% version/firmware component="bootloader" info="date" dateFormat="de" %}} |
| **Commit Hash** | {{% version/firmware component="gui" info="commitHash" %}} | {{% version/firmware component="middleware" info="commitHash" %}} |  {{% version/firmware component="bootloader" info="commitHash" %}} |
| **Commit №**    | {{% version/firmware component="gui" info="commitNo" %}} | {{% version/firmware component="middleware" info="commitNo" %}} | {{% version/firmware component="bootloader" info="commitNo" %}} |

{{% alert title="Tipp" %}}
Falls Sie auf ihrem Gerät neuere Funktionen vermissen oder mit Stabilitätsproblemen konfrontiert sind, [aktualisieren](../update/) Sie ggf. die auf ihrem Gerät aufgespielte Firmwareversion.
{{% /alert %}}
