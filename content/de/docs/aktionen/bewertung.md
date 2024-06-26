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
## Tierbewertung durchführen {#rate-your-animals}
Bei der Tierbewertung dokumentieren Sie den Zustand des individuellen Tieres. Der Zustand wird visuell ermittelt und mit Hilfe des Ampelsystems erfasst. In der einfachen Bewertung wird nur der Allgemeinzustand erfasst. In der erweiterten Bewertung erfassen Sie den Allgemeinzustand, Futteraufnahme, Kotbeschaffenheit und Atemwegserkrankungen. Den Bewertungsmodus können Sie entweder direkt in der Aktion <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Bewertung" /> `Bewertung` umstellen oder Sie legen diesen in den [Einstellungen](../../einstellungen/erfassung-tierdaten/#mode-of-animal-rating) fest.

{{% alert title="Hinweis" %}}
Eine gelbe oder rote Bewertung führt dazu, dass VitalControl das Tier als auffällig einstuft und auf die Alarmliste setzt.
{{% /alert %}}

1.  Wählen Sie im Hauptbildschirm Ihres VitalControl-Geräts den Menüpunkt &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Aktionen" /> `Aktionen` und drücken Sie die Taste `OK`.

2. Scannen Sie entweder ein Tier mittels des Transponders ein oder wählen Sie ein Tier aus der Liste aus. Bestätigen Sie hierfür mit `OK` und wählen Sie mit den Pfeiltasten △ ▽ ein Tier aus. Bestätigen Sie mit `OK`.

3. Es öffnet sich ein Untermenü mit den Tieraktionen. Wählen Sie mit den Pfeiltasten ◁ ▷ die Aktion <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Bewertung" /> `Bewertung` aus und bestätigen Sie mit `OK`.

4. Es öffnet sich das Bewertungsmenü. Sollten Sie den Bewertungsmodus umschalten wollen drücken Sie die `An/Aus` Taste &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Aktionskette" />&nbsp; und nutzen anschließend die  Pfeiltasten ◁ ▷ zur Modusauswahl. Mit der Taste `F1` <img src="/icons/footer/exit.svg" width="24" align="bottom" alt="Zurück" />&nbsp; gelangen Sie zurück in das Bewertungsmenü.

5. Verwenden Sie die Pfeiltasten ◁ ▷ um einen Zustand auszuwählen und speichern Sie diesen mit der `F3` Taste <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Speichern" /> oder der Taste `OK`.

6. Nutzen Sie im erweiterten Modus die `F1` und `F3` Tasten um zwischen den Bewertungsparametern zu wechseln.

{{% alert title="Hinweis" %}}
Treffen Sie keine Auswahl über die Pfeiltasten ◁ ▷ sondern speichern direkt über die `F3` oder `OK` Taste, speichert VitalControl eine neutrale Beurteilung ab, gekennzeichnet durch eine graue Farbe.
{{% /alert %}}

### Bewertung einfach {#basic-rating}

{{< tabpane >}}
{{< tab header="Bewertung einfach:" text=true disabled=true />}}
{{% tab header="Transponderscan" text=true %}}
  ![VitalControl: Menüfolge Aktionen Bewertung](../bilder/bewertungeinfach-manuelle-auswahl.png "Einfache Bewertung durchführen")
{{% /tab %}}
{{% tab header="Manuelle Auswahl aus Liste" text=true %}}
  ![VitalControl: Menüfolge Aktionen Bewertung](../bilder/bewertungeinfach.png "Einfache Bewertung durchführen")
{{% /tab %}}
{{< /tabpane >}}

### Bewertung erweitert {#extended-rating}

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
Sollte diese Aktion nicht zur Verfügung stehen, so wurde die Aktion vermutlich deaktiviert! Aktivieren Sie die Aktion im [Einstellungsmenü zu den Aktionen](/docs/aktionen/einstellung/). Alternativ wird auch das Zurücksetzen aller Aktionen diese Aktion wieder zum Vorschein bringen.
{{% /alert %}}
