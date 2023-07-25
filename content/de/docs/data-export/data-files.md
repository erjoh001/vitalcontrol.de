---
title: Struktur und Inhalt der exportieren CSV-Datendateien
linkTitle: Exportdateien
description: >
  Beschreibung der Struktur und des Inhalts der beim Export erzeugten vier Datendateien
date: 2023-07-20
weight: 30
categories: [Datenexport]
tags: [Exportdateien, Temperaturwerte, Gewichtswerte, Tierbewertungen]  
---
## Allgemeines

Beim Export von Tierdaten, unabhängig ob auf den [USB-Stick][] oder auf einen [lokalen Datenträger am PC][], werden jeweils vier Exportdateien erzeugt:

- [Tierdaten](#tierdaten-animalscsv) `(animals.csv)`
- [Körpertemperaturdaten][] `(temperatures.csv)`
- [Gewichtsdaten][] `(weights.csv)`
- [Tierbewertungen][] `(ratings.csv)`

[USB-Stick]: ../usb-drive/
[lokalen Datenträger am PC]: ../pc/

[Tierdaten]: #tierdaten-animalscsv
[Körpertemperaturdaten]: #k%C3%B6rpertemperaturdaten-temperaturescsv
[Gewichtsdaten]: #gewichtsdaten-weightscsv
[Tierbewertungen]: #tierbewertungen-ratingscsv

Bei allen vier Dateien wird das [CSV](https://de.wikipedia.org/wiki/CSV_(Dateiformat))-Format verwendet, es handelt sich also um vom Menschen lesbare Textdateien. Die Dateien sind im Format `UTF-8` kodiert, als Spaltentrenner kommen Strichpunkt (`;`) zu Einsatz. Die einzelnen Datenfelder sind *nicht* in Hochkommata eingeschlossen. Jede Zeile der jeweiligen Tabelle repräsentiert ein Tier bzw. eine an einem Tier durchgeführte Messung oder Bewertung.

## Weiterverarbeitung der Daten

Sie können jede dieser 4 Exportdateien in einem Tabellenkalkulationsprogramm ihrer Wahl öffnen (wie etwa [Microsoft Excel](https://products.office.com/excel) oder [OpenOffice Calc](https://www.openoffice.org/de/)) und dort eine erweiterte Auswertungen der Daten durchführen. Beispielhaft ist unten die Ansicht der Tabelle `animals.csv` in einem Tabellenkalkulationsprogramm wiedergegeben.

![Exportierte Tierdaten, geöffnet in Tabellenkalkulationsprogramm](../images/tiere.png "Tabellenkalkulationsprogramm mit Tierdaten")

## Beschreibung der Datendateien

In den folgenden vier Abschnitten sind die einzelnen Datendateien jeweils detailliert beschrieben:

### Tierdaten (`animals.csv`)

- **Dateiname:** `animals.csv`
- **Beschreibung:** Allgemeine Tierdaten
- **Spaltenzahl:** 6

Jede Zeile der Tierdatentabelle repräsentiert jeweils ein auf dem VitalControl abgespeichertes Tier. Eine beispielhafte Tierdatentabelle hat damit folgendes Aussehen:

```csv
National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg
276000312341001;1001;276000312341001;2023-07-03;F;
276000312341002;1002;276000312341002;2023-07-04;F;40.8
276000312341003;1003;276000312341003;2023-07-05;F;38.3
…
```

Die folgende Tabelle listet die einzelnen Spalten der Tierdatentabelle auf und beschreibt sie:

|Spalte| Spaltenname       | Beschreibung                        | Kommentare                                                |
|:-:|----------------------|-------------------------------------|-----------------------------------------------------------|
| 1 | `National-ID-Animal` | Offizielle Tiernummer gemäß [VVO][] | 15 Stellen gemäß [ISO1174/85][], ggf. auch nicht erfasst  |
| 2 | `Farm-ID-Animal`     | Stallnummer                         | 2- bis 6-stellig, oft zugleich auch Halsbandnummer        |
| 3 | `Transponder-ID`     | Transpondernummer                   | ggf. auch leer, ggf. identisch mit 15stelliger Tiernummer |
| 4 | `DateOfBirth`        | Geburtsdatum                        | Format: `JJJJ-MM-TT` (`Jahr-Monat-Tag`)                   |
| 5 | `Sex`                | Geschlecht                          | _Werte:_ `M`: männlich, `F`: weiblich, `?`: unbekannt     |
| 6 | `BirthWeight-Kg`     | Geburtsgewicht                      | in Kilogramm, ggf. nicht erfasst bzw. fehlend             |

[VVO]: https://de.wikipedia.org/wiki/Viehverkehrsverordnung
[ISO1174/85]: https://en.wikipedia.org/wiki/ISO_11784_and_ISO_11785

Ggf. können Sie auch die bereit gestellte Beispieldatei [animals.csv][] herunterladen.

[animals.csv]: /data-export/animals.csv

### Körpertemperaturdaten (`temperatures.csv`)

- **Dateiname:** `temperatures.csv`
- **Beschreibung:** Körpertemperaturen, erhalten durch die Fiebermessung bei Tieren
- **Spaltenzahl:** 5

Jede Zeile der Temperaturdatentabelle repräsentiert jeweils eine mit dem VitalControl bei einem Tier durchgeführte Körpertemperaturmessung. Eine beispielhafte Temperaturtabelle hat damit folgendes Aussehen:

```csv
National-ID-Animal;Farm-ID-Animal;Date;Time;Temperature-Celsius
276000312341001;1001;276000312341001;2023-07-24;38.03
276000312341002;1002;276000312341002;2023-07-24;40.12
276000312341003;1003;276000312341003;2023-07-24;39.97
…
```

Die folgende Tabelle listet die einzelnen Spalten der Tabelle mit den Körpertemperaturwerten auf und beschreibt sie:

|Spalte| Spaltenname        | Beschreibung                            | Kommentare                                         |
|:-:|-----------------------|-----------------------------------------|----------------------------------------------------|
| 1 | `National-ID-Animal`  | 15stellige Nummer des gemessenen Tieres | gemäß [ISO1174/85][], ggf. auch nicht erfasst      |
| 2 | `Farm-ID-Animal`      | Stallnummer des gemessenen Tieres       | 2- bis 6-stellig, oft zugleich auch Halsbandnummer |
| 3 | `Date`                | Datum der Temperaturmessung             | Format: `JJJJ-MM-TT` (`Jahr-Monat-Tag`)            |
| 4 | `Time`                | Uhrzeit der Temperaturmessung           | Format: `HH-MM-SS` (`Stunde:Minute:Sekunde`)       |
| 5 | `Temperature-Celsius` | Gemessener Temperaturwert               | Einheit: `Grad Celsius`                              |

Ggf. können Sie auch die bereit gestellte Beispieldatei [temperatures.csv][] herunterladen. Untenstehende Abbildung zeigt diese Datei geöffnet in einem Tabellenkalkulationsprogramm.

![Datei mit Körpertemperaturwerten, geöffnet in Tabellenkalkulationsprogramm](../images/temperaturen.png "Tabelle Temperaturwerte")

[temperatures.csv]: /data-export/temperatures.csv

### Gewichtsdaten (`weights.csv`)

- **Dateiname:** `weights.csv`
- **Beschreibung:** Gewichtswerte, erhalten durch die Wägung von Tieren
- **Spaltenzahl:** 5

Jede Zeile der Gewichtstabelle repräsentiert jeweils eine Wägung eines Tiere, bei der der Gewichtswert mit dem VitalControl abgespeichert wurde. Eine beispielhafte Gewichtstabelle hat damit folgendes Aussehen:

```csv
National-ID-Animal;Farm-ID-Animal;Date;Time;Weight-Kg
276000312341001;1001;276000312341001;2023-07-24;67.8
276000312341002;1002;276000312341002;2023-07-24;F;40.4
276000312341003;1003;276000312341003;2023-07-24;F;104.2
…
```

Die folgende Tabelle listet die einzelnen Spalten der Gewichtstabelle auf und beschreibt sie:

|Spalte| Spaltenname        | Beschreibung                            | Kommentare                                         |
|:-:|-----------------------|-----------------------------------------|----------------------------------------------------|
| 1 | `National-ID-Animal`  | 15stellige Nummer des gewogenen Tieres  | gemäß [ISO1174/85][], ggf. auch nicht erfasst      |
| 2 | `Farm-ID-Animal`      | Stallnummer des gewogenen Tieres        | 2- bis 6-stellig, oft zugleich auch Halsbandnummer |
| 3 | `Date`                | Datum der Wägung                        | Format: `JJJJ-MM-TT` (`Jahr-Monat-Tag`)            |
| 4 | `Time`                | Uhrzeit der Wägung                      | Format: `HH-MM-SS` (`Stunde:Minute:Sekunde`)       |
| 5 | `Weight-Kg`           | Tiergewicht                             | Einheit: `Kilogramm`                               |

Ggf. können Sie auch die bereit gestellte Beispieldatei [weights.csv][] herunterladen. Untenstehende Abbildung zeigt diese Datei geöffnet in einem Tabellenkalkulationsprogramm.

![Datei mit Tiergewichten, geöffnet in Tabellenkalkulationsprogramm](../images/gewichte.png "Tabelle Gewichtswerte")

[weights.csv]: /data-export/weights.csv

### Tierbewertungen (`ratings.csv`)

- **Dateiname:** `ratings.csv`
- **Beschreibung:** Tierbewertungen, erhalten durch visuelle Inspektion von Tieren
- **Spaltenzahl:** 8

Jede Zeile der Tabelle mit den Tierbewertungen repräsentiert jeweils eine mit dem VitalControl bei einem Tier durchgeführte Bewertung. Eine beispielhafte Tabelle mit Tierbewertungen hat dabei folgendes Aussehen:

```csv
National-ID-Animal;Farm-ID-Animal;Date;Time;ScoreCondition;ScoreFeedIntake;ScoreScours;ScoreRespiratory
276000312341001;1001;276000312341001;2023-07-24;Green;Yellow;Yellow;Green
276000312341002;1002;276000312341002;2023-07-24;Yellow;Yellow;Yellow;Red
276000312341003;1003;276000312341003;2023-07-24;Green;None;None;None
…
```

Die folgende Tabelle listet die einzelnen Spalten der Tabelle mit den Tierbewertungen auf und beschreibt sie:

|Spalte| Spaltenname        | Beschreibung                             | Kommentare                                                                         |
|:-:|-----------------------|------------------------------------------|------------------------------------------------------------------------------------|
| 1 | `National-ID-Animal`  | 15stellige Nummer des bewerteten Tieres  | gemäß [ISO1174/85][], ggf. auch nicht erfasst                                      |
| 2 | `Farm-ID-Animal`      | Stallnummer des bewerteten Tieres        | 2- bis 6-stellig, oft zugleich auch Halsbandnummer                                 |
| 3 | `Date`                | Datum der Bewertung                      | Format: `JJJJ-MM-TT` (`Jahr-Monat-Tag`)                                            |
| 4 | `Time`                | Uhrzeit der Bewertung                    | Format: `HH-MM-SS` (`Stunde:Minute:Sekunde`)                                       |
| 5 | `ScoreCondition`      | Bewertung des Allgemeinzustands          | _Benotungen:_ `Red` (`Rot`), `Yellow` (`Gelb`), `Green` (`Grün`), `None` (`Keine`) |
| 6 | `ScoreFeedIntake`     | Bewertung der Futteraufnahme             | _Benotungen:_ `Red` (`Rot`), `Yellow` (`Gelb`), `Green` (`Grün`), `None` (`Keine`) |
| 7 | `ScoreScours`         | Bewertung Status `Durchfallerkrankung`   | _Benotungen:_ `Red` (`Rot`), `Yellow` (`Gelb`), `Green` (`Grün`), `None` (`Keine`) |
| 8 | `ScoreRespiratory`    | Bewertung Status `Atemwegserkrankung`    | _Benotungen:_ `Red` (`Rot`), `Yellow` (`Gelb`), `Green` (`Grün`), `None` (`Keine`) |

Ggf. können Sie auch die bereit gestellte Beispieldatei [ratings.csv][] herunterladen. Untenstehende Abbildung zeigt diese Datei geöffnet in einem Tabellenkalkulationsprogramm.

![Datei mit Tierbewertungen, geöffnet in Tabellenkalkulationsprogramm](../images/bewertungen.png "Tabelle Tierbewertungen")

[ratings.csv]: /data-export/ratings.csv
