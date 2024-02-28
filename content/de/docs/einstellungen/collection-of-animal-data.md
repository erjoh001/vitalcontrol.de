---
title: "Einstellungen zur Tierdatenerfassung"
linkTitle: "Tierdatenerfassung"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: erfassung-tierdaten
description: >
 Hier hinterlegen Sie relevante Einstellungen für die Tierdatenerfassung.
Kategorien: [Einstellungen]
Tags: [Einstellungen, Einheiten]
translationKey: settings/data-acquisition
maphilight: true
---
## Verfügbare Einstellungen

Die nachfolgende Grafik listet die verfügbaren Einstellungen auf:

<img src="../bilder/tierdatenerfassung.png" alt="Tierdatenerfassung" title="Tierdatenerfassung" usemap="#workmap" class="maphilight" />

<map name="workmap">
  <area shape="rect" coords="3,40,237,80" alt="Gewichtserfassung" title="Untermenü: Einstellungen zur Gewichtserfassung&#10;Mausklick: zur Dokumentation" href="#einstellungen-zur-gewichtserfassung">
  <area shape="rect" coords="3,80,237,160" alt="Modus Tierbewertung" title="Stellen Sie den Modus der Tierbewertung ein&#10;Mausklick: zur Dokumentation" href="#modus-der-tierbewertung">
  <area shape="rect" coords="3,160,237,240" alt="Länge Kontrollperiode Frischmelker" title="Legen Sie die Länge der Kontrollperiode für Frischmelker fest&#10;Mausklick: zur Dokumentation" href="#kontrollperiode-frischmelker">
</map>

{{% alert title="Hinweis" %}}
Bewegen Sie den Mauszeiger über eine Zeile in der obigen Grafik und lassen ihn kurz ruhen. Im einem Tooltip werden ihnen jetzt Infos zur jeweiligen Einstellung präsentiert. Klicken Sie auf eine der Zeilen, so werden Sie zu einer Beschreibung der jeweiligen Einstellung weitergeleitet.
{{% /alert %}}

## Einstellungen zur Gewichtserfassung

### Bewertung der täglichen Zunahmen: Schwellenwerte

{{% alert title="Hinweis" %}}
Das rote Feld zeigt den Bereich "kritische zu niedrige Gewichtszunahme". Das gelbe Feld zeigt den Bereich "suboptimale Gewichtszunahme".
{{% /alert %}}

Um die Schwellenwerte für die Bewertung der täglichen Zunahme anzupassen gehen Sie wie folgt vor:

1. Wählen Sie im Hauptbildschirm Ihres VitalControl-Geräts den Menüpunkt <img src="/icons/gear.svg" width="25" align="bottom" alt="Einstellungen" /> `Einstellungen` und drücken Sie die Taste `OK`.

2. Es öffnet sich ein Untermenü in dem verschiedene Einstellungen angezeigt werden. Nutzen Sie die Pfeiltasten △ ▽  um `Tierdatenerfassung` auszuwählen. Bestätigen Sie mit `OK`.

3. Es öffnet sich ein weiteres Untermenü in dem in dem verschiedene Einstellungen angezeigt werden. Nutzen Sie die Pfeiltasten △ ▽ um zwischen den Einstellungsfeldern `Gewichtserfassung`, `Tierbewertung`, und `Kontrolle Frischmelker für` auswählen können. Wählen Sie `Gewichtserfassung` und bestätigen Sie mit `OK`.

4. Das Einstellungsfeld `Tägliche Zunahmen` ist automatisch ausgewählt. Nutzen Sie die Pfeiltasten ◁ ▷ um die gewünschte Tierart auszuwählen. Bestätigen Sie mit `OK`. Alternativ können Sie das Stiftsymbol mit der Taste <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Bearbeiten" /> `F3` verwenden um direkt zur Bearbeitung des roten und gelben Bereiches zu springen.

5. Nutzen Sie die Pfeiltasten △ ▽ um im roten und gelben Bereich die gewünschte "größer gleich" g/Tag Zunahme auszuwählen. Nutzen Sie die Tasten `F2`/`F3` 🡄 🡆 oder die Pfeiltasten ◁ ▷ um zwischen dem roten und dem gelben Bereich zu wählen.

6. Sobald Sie die gewünschte "größer gleich" g/Tag Zunahme festgelegt haben, nutzen Sie die `F1` Taste <img src="/icons/footer/exit.svg" width="24" align="bottom" alt="Zurück" />&nbsp; oder bestätigen Sie mit `OK` um zurück auf `Tägliche Zunahmen` zu springen.

    ![VitalControl: Menüfolge Einstellung Schwellenwerte tägliche Zunahme](../bilder/schwellenwertebewertungzunahmen.png "Schwellenwerte tägliche Zunahmen")

### Geburtsgewicht
{{% alert title="Warnung" color="warning" %}}
Beim Standard-Geburtsgewicht handelt es sich nur um einen Näherungswert, welcher beim Neu-Anlegen eines Tieres individuell angepasst werden muss.
Wenn Sie diese Anpassung nicht vornehmen wollen oder wenn Sie Tiere automatisch im Hintergrund anlegen, sollte beim Neuanlegen eines Tieres kein Geburtsgewicht abgefragt bzw. abgespeichert werden. Dies kann in den Einstellungen zum „Tiere neu anlegen“ vereinbart werden.
{{% /alert %}}

Um das `Geburtsgewicht` auf ihrem Gerät festzulegen gehen Sie wie folgt vor:

1. Wählen Sie im Hauptbildschirm Ihres VitalControl-Geräts den Menüpunkt <img src="/icons/gear.svg" width="25" align="bottom" alt="Einstellungen" /> `Einstellungen` und drücken Sie die Taste `OK`.

2. Es öffnet sich ein Untermenü in dem verschiedene Einstellungen angezeigt werden. Nutzen Sie die Pfeiltasten △ ▽  um `Tierdatenerfassung` auszuwählen. Bestätigen Sie mit `OK`.

3. Es öffnet sich ein weiteres Untermenü in dem in dem verschiedene Einstellungen angezeigt werden. Nutzen Sie die Pfeiltasten △ ▽ um zwischen den Einstellungsfeldern `Gewichtserfassung`, `Tierbewertung`, und `Kontrolle Frischmelker für` auswählen können. Wählen Sie `Gewichtserfassung` und bestätigen Sie mit `OK`.

4. Nutzen Sie die Pfeiltasten △ ▽ um das Einstellungsfeld `Geburtsgewicht` auszuwählen und nutzen Sie die Pfeiltasten ◁ ▷ um das gewünschte Geburtsgewicht einzustellen. Das Gerät verwendet das hier definierte Geburtsgewicht nun als Standard beim Anlegen neuer Tiere. Das individuelle Geburtsgewicht eines neu geborenen Tieres lässt sich dann schneller auswählen.

    ![VitalControl: Menüfolge Einstellung Tierdaten Geburtsgewicht](../bilder/geburtsgewicht.png "Geburtsgewicht einstellen")

### Mittlere tägliche Zunahme

{{% alert title="Hinweis" %}}
Die definierte tägliche Zunahme wird bei der Tierwiegung für die Berechnung des vorgeschlagenen Gewichtswert verwendet. Sollte der vorgeschlagene Gewichtswert bei der Mehrzahl der zu wiegenden Tiere zu niedrig oder zu hoch sein, sollten Sie den definierten Wert nach unten bzw. nach oben anpassen, um die manuelle Einstellung des Gewichtswerts mit den Pfeiltasten abzukürzen.
{{% /alert %}}

Um die `Mittlere tägliche Zunahme` auf ihrem Gerät festzulegen gehen Sie wie folgt vor:

1. Wählen Sie im Hauptbildschirm Ihres VitalControl-Geräts den Menüpunkt <img src="/icons/gear.svg" width="25" align="bottom" alt="Einstellungen" /> `Einstellungen` und drücken Sie die Taste `OK`.

2. Es öffnet sich ein Untermenü in dem verschiedene Einstellungen angezeigt werden. Nutzen Sie die Pfeiltasten △ ▽  um `Tierdatenerfassung` auszuwählen. Bestätigen Sie mit `OK`.

3. Es öffnet sich ein weiteres Untermenü in dem in dem verschiedene Einstellungen angezeigt werden. Nutzen Sie die Pfeiltasten △ ▽ um zwischen den Einstellungsfeldern `Gewichtserfassung`, `Tierbewertung`, und `Kontrolle Frischmelker für` auswählen können. Wählen Sie `Gewichtserfassung` und bestätigen Sie mit `OK`.

4. Nutzen Sie die Pfeiltasten △ ▽ um das Einstellungsfeld `Mittlere tägliche Zunahme` auszuwählen. Nutzen Sie die Pfeiltasten ◁ ▷ um die gewünschte Mittlere tägliche Zunahme g/Tag einzustellen. Das Gerät verwendet jetzt die hier definierte durchschnittliche tägliche Zunahme als Standard für die erwartete tägliche Zunahme der Tiere.

    ![VitalControl: Menüfolge Einstellung Tierdaten Mittlere tägliche Zunahme](../bilder/mittleretaeglichezunahme.png "Mittlere tägliche Zunahme einstellen")

### Genauigkeit der Gewichtserfassung

<br>
Speichern Sie die Einstellungen und gelangen Sie mittels der `F1` Taste &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Speichern und zurück" /> zurück in das Obermenü `Tierdatenerfassung`.

## Modus der Tierbewertung

{{% alert title="Hinweis" %}}
Bei der Tierbewertung können Sie zwischen zwei verschiedenen Modi wählen: Im **einfachen Modus** wird bei der Tierbewertung lediglich der Allgemeinzustand abgefragt (grün/gelb/rot). Bei der **erweiterten Bewertung** werden vier Bewertungskategorien abgefragt: Allgemeinzustand, Futterverzehr, Durchfall und Atemwegserkrankung.
{{% /alert %}}

Um den Modus der Tierbewertung auf ihrem Gerät festzulegen gehen Sie wie folgt vor:

1. Wählen Sie im Hauptbildschirm Ihres VitalControl-Geräts den Menüpunkt <img src="/icons/gear.svg" width="25" align="bottom" alt="Einstellungen" /> `Einstellungen` und drücken Sie die Taste `OK`.

2. Es öffnet sich ein Untermenü in dem verschiedene Einstellungen angezeigt werden. Nutzen Sie die Pfeiltasten  △ ▽  um `Tierdatenerfassung` auszuwählen. Bestätigen Sie mit `OK`.

3. Es öffnet sich ein weiteres Untermenü in dem in dem verschiedene Einstellungen angezeigt werden. Nutzen Sie die Pfeiltasten △ ▽ um zwischen den Einstellungsfeldern `Gewichtserfassung`, `Tierbewertung`, und `Kontrolle Frischmelker für` auswählen können. Wählen Sie `Tierbewertung`.

4. Nutzen Sie die Pfeiltasten ◁ ▷ um die gewünschte Tierbewertung einzustellen.

    ![VitalControl: Menüfolge Einstellung Tierbewertung](../bilder/tierbewertung.png "Tierbewertung einstellen")

## Kontrollperiode Frischmelker

{{% alert title="Hinweis" %}}
Der eingestellte Wert für den Zeitraum der Frischmelkerkontolle wird in der Frischmelkerliste (Listen > Frischmelker) bei der grafischen Darstellung der Temperaturwerte verwendet. Jeder Tag innerhalb des Zeitraums wird dort durch ein Rechteck repräsentiert. Je nach Farbe des Rechtecks (grün, gelb oder rot) ist ersichtlich, ob für das jeweilige Tier an diesem Tag eine normale, eine erhöhte oder kritisch erhöhte Temperatur gemessen wurde.
{{% /alert %}}

Um die Länge der Kontrollperiode der Frischmelker auf ihrem Gerät festzulegen gehen Sie wie folgt vor:

1. Wählen Sie im Hauptbildschirm Ihres VitalControl-Geräts den Menüpunkt <img src="/icons/gear.svg" width="25" align="bottom" alt="Einstellungen" /> `Einstellungen` und drücken Sie die Taste `OK`.

2. Es öffnet sich ein Untermenü in dem verschiedene Einstellungen angezeigt werden. Nutzen Sie die Pfeiltasten  △ ▽  um `Tierdatenerfassung` auszuwählen. Bestätigen Sie mit `OK`.

3. Es öffnet sich ein weiteres Untermenü in dem in dem verschiedene Einstellungen angezeigt werden. Nutzen Sie die Pfeiltasten △ ▽ um zwischen den Einstellungsfeldern `Gewichtserfassung`, `Tierbewertung`, und `Kontrolle Frischmelker für` auswählen können. Wählen Sie `Kontrolle Frischmelker für`.

4. Nutzen Sie die Pfeiltasten ◁ ▷ um die gewünschte Kontrolldauer in Tagen post partum einzustellen.

    ![VitalControl: Menüfolge Einstellung Kontrolle Frischmelker](../bilder/kontrollefrischmelker.png "Kontrollefrischmelker einstellen")

<br>
Speichern Sie die Einstellungen und gelangen Sie mittels der `F1` Taste &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Speichern und Zurück" /> zurück in das Obermenü <img src="/icons/gear.svg" width="25" align="bottom" alt="Einstellungen" /> `Einstellungen`.
