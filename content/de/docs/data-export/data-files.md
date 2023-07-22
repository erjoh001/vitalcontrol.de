---
title: Struktur und Inhalt der exportieren CSV-Datendateien
linkTitle: Exportdateien
description: >
  Beschreibung der Struktur und des Inhalts der beim Export erzeugten vier Datendateien
date: 2023-07-20
weight: 30
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

Bei allen vier Dateien wird das [CSV](https://de.wikipedia.org/wiki/CSV_(Dateiformat))-Format verwendet, es handelt sich also um vom Menschen lesbare Textdateien. Die Dateien sind im Format `UTF-8` kodiert, als Spaltentrenner kommen Strichpunkt (`;`) zu Einsatz. Die einzelnen Datenfelder sind *nicht* in Hochkommata eingeschlossen. Jede Zeile der jeweiligen Tabelle repräsentiert ein Tier bzw. eine an einem Tier durchgeführte Messung.

## Weiterverarbeitung der Daten

Sie können jede dieser 4 [Exportdateien](../../data-export/data-files/) in einem Tabellenkalkulationsprogramm ihrer Wahl öffnen (wie etwa [Microsoft Excel](https://products.office.com/excel) oder [Openoffice Calc](https://www.openoffice.org/de/) öffnen und dort eine erweiterte Auswertungen der Daten durchführen. Beispielhaft ist unten die Ansicht der Tabelle `animals.csv` in einer Tabellenkalkulation wiedergegeben.

![Exportierte Tierdaten, geöffnet in Tabellenkalkulationsprogramm](/images/data-export/animals.png "Tabellenkalkulationsprogramm mit Tierdaten")

## Beschreibung der Datendateien

In den folgenden vier Abschnitten sind die einzelnen Tabellen jeweils detailliert beschrieben:

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

|Spalte| Spaltenname       | Beschreibung                        | Kommentare                                               |
|:-:|----------------------|-------------------------------------|----------------------------------------------------------|
| 1 | `National-ID-Animal` | Offizielle Tiernummer gemäß [VVO][] | 15 Stellen gemäß [ISO1174/85][], ggf. auch nicht erfasst |
| 2 | `Farm-ID-Animal`     | Stallnummer                         | 2- bis 6-stellig, oft zugleich auch Halsbandnummer       |
| 3 | `Transponder-ID`     | Transpondernummer                   |                                                          |
| 4 | `DateOfBirth`        | Geburtsdatum                        | Im Format Jahr-Monat-Tag: `JJJJ-MM-TT`                   |
| 5 | `Sex`                | Geschlecht                          | _Werte:_ `M`: männlich, `F`: weiblich, `?`: unbekannt    |
| 6 | `BirthWeight-Kg`     | Geburtsgewicht                      | in Kilogramm, ggf. nicht erfasst bzw. fehlend            |

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
National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg
276000312341001;1001;276000312341001;2023-07-03;F;
276000312341002;1002;276000312341002;2023-07-04;F;40.8
276000312341003;1003;276000312341003;2023-07-05;F;38.3
…
```

Die folgende Tabelle listet die einzelnen Spalten der Tabelle mit den Körpertemperaturwerten auf und beschreibt sie:

|Spalte| Spaltenname        | Beschreibung                            | Kommentare                                         |
|:-:|-----------------------|-----------------------------------------|----------------------------------------------------|
| 1 | `National-ID-Animal`  | 15stellige Nummer des gemessenen Tieres | gemäß [ISO1174/85][], ggf. auch nicht erfasst      |
| 2 | `Farm-ID-Animal`      | Stallnummer des gemessenen Tieres       | 2- bis 6-stellig, oft zugleich auch Halsbandnummer |
| 3 | `Date`                | Datum der Temperaturmessung             | Im Format Jahr-Monat-Tag: `JJJJ-MM-TT`             |
| 4 | `Time`                | Uhrzeit der Temperaturmessung           | Format: `HH-MM-SS` (`Stunde:Minute:Sekunde`)       |
| 5 | `Temperature-Celsius` | Gemessener Temperaturwert               | Einheit: Grad Celsius                              |

Ggf. können Sie auch die bereit gestellte Beispieldatei [animals.csv][] herunterladen.

[temperatures.csv]: /data-export/temperatures.csv

### Gewichtsdaten (`weights.csv`)

- **Dateiname:** `weights.csv`
- **Beschreibung:** Gewichtswerte, erhalten durch die Wägung von Tieren
- **Spaltenzahl:** 5

Jede Zeile der Temperaturdatentabelle repräsentiert jeweils eine mit dem VitalControl bei einem Tier durchgeführte Körpertemperaturmessung. Eine beispielhafte Temperaturtabelle hat damit folgendes Aussehen:

```csv
National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg
276000312341001;1001;276000312341001;2023-07-03;F;
276000312341002;1002;276000312341002;2023-07-04;F;40.8
276000312341003;1003;276000312341003;2023-07-05;F;38.3
…
```

Die folgende Tabelle listet die einzelnen Spalten der Tabelle mit den Körpertemperaturwerten auf und beschreibt sie:

|Spalte| Spaltenname        | Beschreibung                            | Kommentare                                         |
|:-:|-----------------------|-----------------------------------------|----------------------------------------------------|
| 1 | `National-ID-Animal`  | 15stellige Nummer des gewogenen Tieres  | gemäß [ISO1174/85][], ggf. auch nicht erfasst      |
| 2 | `Farm-ID-Animal`      | Stallnummer des gewogenen Tieres        | 2- bis 6-stellig, oft zugleich auch Halsbandnummer |
| 3 | `Date`                | Datum der Wägung                        | Im Format Jahr-Monat-Tag: `JJJJ-MM-TT`             |
| 4 | `Time`                | Uhrzeit der Wägung                      | Format: `HH-MM-SS` (`Stunde:Minute:Sekunde`)       |
| 5 | `Temperature-Celsius` | Gemessener Temperaturwert               | Einheit: Kilogramm                                 |

Ggf. können Sie auch die bereit gestellte Beispieldatei [weights.csv][] herunterladen.

[weights.csv]: /data-export/weights.csv

### Tierbewertungen (`ratings.csv`)

- **Dateiname:** `ratings.csv`
- **Beschreibung:** Tierbewertungen, erhalten bei der visuellen Inspektion von Tieren
- **Spaltenzahl:** 8

Jede Zeile der Temperaturdatentabelle repräsentiert jeweils eine mit dem VitalControl bei einem Tier durchgeführte Körpertemperaturmessung. Eine beispielhafte Temperaturtabelle hat damit folgendes Aussehen:

```csv
National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg
276000312341001;1001;276000312341001;2023-07-03;F;
276000312341002;1002;276000312341002;2023-07-04;F;40.8
276000312341003;1003;276000312341003;2023-07-05;F;38.3
…
```

Die folgende Tabelle listet die einzelnen Spalten der Tabelle mit den Tierbeurteilungen auf und beschreibt sie:

|Spalte| Spaltenname        | Beschreibung                             | Kommentare                                         |
|:-:|-----------------------|------------------------------------------|----------------------------------------------------|
| 1 | `National-ID-Animal`  | 15stellige Nummer des beurteilten Tieres | gemäß [ISO1174/85][], ggf. auch nicht erfasst      |
| 2 | `Farm-ID-Animal`      | Stallnummer des beurteilten Tieres       | 2- bis 6-stellig, oft zugleich auch Halsbandnummer |
| 3 | `Date`                | Datum der Beurteilung                    | Im Format Jahr-Monat-Tag: `JJJJ-MM-TT`             |
| 4 | `Time`                | Uhrzeit der Beurteilung                  | Format: `HH-MM-SS` (`Stunde:Minute:Sekunde`)       |
| 5 | `ScoreCondition`      | Beurteilung des Allgemeinzustands        | _Benotungen:_ `Red` (`Rot`), `Yellow` (`Gelb`), `Green` (`Grün`), `None` (`Keine`) |
| 6 | `ScoreFeedIntake`     | Beurteilung der Futteraufnahme           | _Benotungen:_ `Red` (`Rot`), `Yellow` (`Gelb`), `Green` (`Grün`), `None` (`Keine`) |
| 7 | `ScoreScours`         | Beurteilung Status `Durchfallerkrankung` | _Benotungen:_ `Red` (`Rot`), `Yellow` (`Gelb`), `Green` (`Grün`), `None` (`Keine`) |
| 8 | `ScoreRespiratory`    | Beurteilung Status `Atemwegserkrankung`  | _Benotungen:_ `Red` (`Rot`), `Yellow` (`Gelb`), `Green` (`Grün`), `None` (`Keine`) |

Ggf. können Sie auch die bereit gestellte Beispieldatei [ratings.csv][] herunterladen.

[ratings.csv]: /data-export/ratings.csv
