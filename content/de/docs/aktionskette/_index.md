---
title: "Aktionskette verwenden & einstellen"
linkTitle: "Aktionskette"
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: aktionskette
description: >
 Mehrere Aktionen automatisiert hintereinander ausführen
Kategorien: [Aktionskette]
Tags: [Aktionskette, Aktionen]
translationKey: action-chain
---
## Aktionskette {#chain-of-actions}

Die Aktionskette ermöglicht es Ihnen, mehrere Aktionen für ein Tier automatisch hintereinander durchzuführen. Sie können z.B. die Aktionen `Temperatur messen` und `Bewertung` auswählen. Führen Sie dann die Aktionskette aus, können Sie bei ihrem Tier zunächst das Fieber messen und direkt danach die Bewertung erfassen.

### Aktionskette verwenden {#use-chain-of-actions}

1. Wählen Sie im Hauptbildschirm Ihres VitalControl-Geräts den Menüpunkt &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Aktionskette" />&nbsp; `Aktionskette` und drücken Sie die Taste `OK`.

2. Scannen Sie entweder ein Tier mittels des Transponders ein oder bestätigen Sie mit `OK` und verwenden Sie die Pfeiltasten △ ▽ ◁ ▷ um die gewünschte Tier ID einzugeben.

3. Die Aktionskette wird nun ausgeführt. Sobald alle Aktionen der Aktionskette durchgeführt wurden, kann direkt das nächste Tier ausgewählt werden.

{{< tabpane >}}
{{< tab header="Aktionskette verwenden:" text=true disabled=true />}}
{{% tab header="Transponderscan" text=true %}}
![VitalControl: Menüfolge Aktionskette](bilder/aktionskette-transponderscan.png "Aktionskette")
{{% /tab %}}
{{% tab header="Manuelle Auswahl aus Liste" text=true %}}
![VitalControl: Menüfolge Aktionskette](bilder/aktionskette.png "Aktionskette")
{{% /tab %}}
{{< /tabpane >}}


### Aktionskette einstellen {#set-chain-of-actions}

1. Wählen Sie im Hauptbildschirm Ihres VitalControl-Geräts den Menüpunkt &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Aktionskette" />&nbsp; `Aktionskette` und drücken Sie die Taste `OK`.

2. Drücken Sie die `F2` Taste  &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Aktionskette" />&nbsp; (`Einstellungen`).

3. Es öffnet sich ein Untermenü. Verwenden Sie die Pfeiltasten △ ▽ um zwischen den Aktionsnummern zu wählen. Sie können bis zu vier Aktionen hintereinander ausführen. Verwenden Sie die Pfeiltasten ◁ ▷ um für die jeweilige Aktionsnummer die gewünschte Aktion auszuwählen. Speichern Sie die Einstellungen mit der `F1` Taste &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Speichern und zurück" />&nbsp;.

4. Wenn Sie die gesamte Aktionskette zurücksetzen möchten wählen Sie im Untermenü mit den Pfeiltasten △ ▽ die am Ende der Liste befindliche Option `Reset Aktionskette` und bestätigen Sie mit `OK`.

    ![VitalControl: Menüfolge Aktionskette](bilder/aktionsketteeinstellen.png "Aktionskette einstellen")

{{% alert title="Hinweis" %}}
Innerhalb der einzelnen Aktionen haben Sie dieselben Einstellungsmöglichkeiten wie in dem Kapitel [Aktionen](../aktionen) für jede einzelne Aktion beschrieben.
{{% /alert %}}

{{% alert title="Hinweis" %}}
Die Symbole im Startbildschirm der Aktionskette verdeutlichen welche Aktionen Sie in welcher Reihenfolge eingestellt haben.
{{% /alert %}}