---
title: Tierbewertung durchführen
linkTitle: Bewertung
slug: tierbewertung
weight: 30
description: >
  Führen Sie eine Bewertung ihrer Tiere durch.
date: 2023-07-26
Kategorien: [Aktionen]
Tags: [Aktionen, Tierbewertung]
translationKey: actions/animal-rating
---
## Tierbewertung durchführen
Bei der Tierbewertung dokumentieren Sie den Zustand des individuellen Tieres. Der Zustand wird visuell ermittelt und mit Hilfe des Ampelsystems erfasst. In der einfachen Bewertung wird nur der Allgemeinzustand erfasst. In der erweiterten Bewertung erfassen Sie den Allgemeinzustand, Futteraufnahme, Kotbeschaffenheit und Atemwegserkrankungen. Den Bewertungsmodus können Sie entweder direkt in der Aktion <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Bewertung" /> `Bewertung` umstellen oder Sie legen diesen in den [Einstellungen](../../einstellungen/erfassung-tierdaten/#tierbewertung-einstellen) fest.

{{% alert title="Hinweis" %}}
Eine gelbe oder rote Bewertung führt dazu, dass VitalControl das Tier als auffällig einstuft und auf die Alarmliste setzt.
{{% /alert %}}

1.  Wählen Sie im Hauptbildschirm Ihres VitalControl-Geräts den Menüpunkt &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Aktionen" /> `Aktionen` und drücken Sie die Taste `OK`.

2. Scannen Sie entweder ein Tier mittels des Transponders ein oder wählen Sie ein Tier aus der Liste aus. Bestätigen Sie hierfür mit `OK` und wählen Sie mit den Pfeiltasten △ ▽ ein Tier aus. Bestätigen Sie mit `OK`.

3. Es öffnet sich ein Untermenü mit den Tieraktionen. Wählen Sie mit den Pfeiltasten ◁ ▷ die Aktion <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Bewertung" /> `Bewertung` aus und bestätigen Sie mit `OK`.

4. Es öffnet sich das Bewertungsmenü. Sollten Sie den Bewertungsmodus umschalten wollen verwenden Sie den &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Aktionskette" />&nbsp; `An/Aus` Button und die  Pfeiltasten ◁ ▷. Mit der Taste `F1` gelangen Sie zurück in das Bewertungsmenü.

5. Verwenden Sie die Pfeiltasten ◁ ▷ um einen Zustand auszuwählen und speichern Sie diesen mit der `F3` <img src="/icons/save.svg" width="25" align="bottom" alt="Speichern" /> Taste oder der Taste `OK`.

6. Nutzen Sie im erweiterten Modus die `F1` und `F3` Tasten um zwischen den Bewertungsparametern zu wechseln.

{{% alert title="Hinweis" %}}
Treffen Sie keine Auswahl über die Pfeiltasten ◁ ▷ sondern speichern direkt über die `F3` oder `OK` Taste, speichert VitalControl eine grüne Beurteilung ab.
{{% /alert %}}

### Bewertung einfach

{{< tabpane >}}
{{< tab header="Bewertung einfach:" text=true disabled=true />}}
{{% tab header="Transponderscan" text=true %}}
  ![VitalControl: Menüfolge Aktionen Bewertung](../bilder/bewertungeinfach-manuelle-auswahl.png "Einfache Bewertung durchführen")
{{% /tab %}}
{{% tab header="Manuelle Auswahl aus Liste" text=true %}}
  ![VitalControl: Menüfolge Aktionen Bewertung](../bilder/bewertungeinfach.png "Einfache Bewertung durchführen")
{{% /tab %}}
{{< /tabpane >}}

### Bewertung erweitert

{{< tabpane >}}
{{< tab header="Bewertung erweitert:" text=true disabled=true />}}
{{% tab header="Transponderscan" text=true %}}
   ![VitalControl: Menüfolge Aktionen Bewertung](../bilder/bewertungerweitert-transponder.png "Erweiterte Bewertung durchführen")
{{% /tab %}}
{{% tab header="Manuelle Auswahl aus Liste" text=true %}}
   ![VitalControl: Menüfolge Aktionen Bewertung](../bilder/bewertungerweitert.png "Erweiterte Bewertung durchführen")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Hinweis" %}}
Sollte diese Aktion nicht zur Verfügung stehen, so wurde die Aktion vermutlich deaktiviert! Aktivieren Sie die Aktion im [Einstellungsmenü zu den Aktionen](/docs/aktionen/einstellungen/). Alternativ wird auch das Zurücksetzen aller Aktionen diese Aktion wieder zum Vorschein bringen.
{{% /alert %}}
