---
title: Structuur en inhoud van de geëxporteerde CSV-gegevensbestanden
linkTitle: Exporteer diergegevens
date: 2023-07-20
weight: 30
description: >
  Beschrijving van de structuur en inhoud van de vier gegevensbestanden die tijdens de export worden aangemaakt.
categories: [Data export]
tags: [exportbestanden, temperaturen, gewichten, beoordelingen]
slug: export-bestanden
translationKey: data-export/data-files
---
## Algemene informatie

Bij het exporteren van diergegevens, ongeacht of dit naar de [USB-stick][] of naar een lokale massaalopslagapparaat [op de PC][], worden in elk geval vier exportbestanden gegenereerd:

- [Diergegevens][] `(animals.csv)`
- [Gegevens over lichaamstemperatuur][] `(temperatures.csv)`
- [Gewichtsgegevens][] `(weights.csv)`
- [Beoordelingen van dieren][] `(ratings.csv)`

[USB-stick]: ../usb-drive/
[op de PC]: ../pc/

[Diergegevens]: #diergegevens-animalscsv
[Gegevens over lichaamstemperatuur]: #gegevens-over-lichaamstemperatuur-temperaturescsv
[Gewichtsgegevens]: #gewichtsgegevens-weightscsv
[Beoordelingen van dieren]: #beoordelingen-van-dieren-ratingscsv

Alle vier bestanden zijn leesbare [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) tekstbestanden. De bestanden zijn gecodeerd in `UTF-8` formaat, puntkomma's (`;`) worden gebruikt als kolomscheiders. De afzonderlijke gegevensvelden zijn *niet* omsloten door aanhalingstekens. Elke rij van de respectievelijke tabel vertegenwoordigt een diergegevensset of een meting of beoordeling uitgevoerd op een dier.

## Verdere verwerking van geëxporteerde gegevens

U kunt elk van deze vier exportbestanden openen in een spreadsheetprogramma naar keuze (zoals [Microsoft Excel](https://products.office.com/excel) of [OpenOffice Calc](https://www.openoffice.org/)) en daar geavanceerde analyses van de gegevens uitvoeren. Als voorbeeld wordt hieronder de weergave van de tabel `animals.csv` in een spreadsheetprogramma getoond:

![Geëxporteerde diergegevens, geopend in een spreadsheetprogramma](../images/animals.png "Diergegevens geopend in spreadsheetprogramma")

## Beschrijving van gegevensbestanden

De volgende vier secties beschrijven elk van de geëxporteerde gegevensbestanden in detail:

### Diergegevens (`animals.csv`)

- **Bestandsnaam** `animals.csv`
- **Beschrijving** Algemene diergegevens
- **Aantal kolommen** 6

Elke rij van de dierendatatabel vertegenwoordigt één dier opgeslagen op de VitalControl. Een voorbeeldige dierendatatabel ziet er dus als volgt uit:

```csv
National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg
276000312341001;1001;276000312341001;2023-07-03;F;
276000312341002;1002;276000312341002;2023-07-04;F;40.8
276000312341003;1003;276000312341003;2023-07-05;F;38.3
…
```

De volgende tabel lijst en beschrijft elke kolom van de dierendatatabel:

|Kolom| Naam van kolom       | Beschrijving                      | Opmerkingen                                                |
|:-:|----------------------|---------------------------------|-----------------------------------------------------------|
| 1 | `National-ID-Animal` | Officieel nationaal dier nummer | 15 cijfers volgens [ISO1174/85][], mogelijk niet geregistreerd |
| 2 | `Farm-ID-Animal`     | Beheernummer                     | 2 tot 6 cijfers, vaak gelijk aan nummer op halsband       |
| 3 | `Transponder-ID`     | Transpondernummer                | kan ontbreken, kan identiek zijn met nationaal dier ID    |
| 4 | `DateOfBirth`        | Geboortedatum                    | Formaat: `YYYY-MM-TT` (`Jaar-Maand-Dag`)                  |
| 5 | `Sex`                | Geslacht                         | _Waarden:_ `M`: mannelijk, `F`: vrouwelijk, `?`: onbekend |
| 6 | `BirthWeight-Kg`     | Geboortegewicht                  | Eenheid: `kilogram`, mogelijk niet geregistreerd / ontbrekend |

[ISO1174/85]: https://en.wikipedia.org/wiki/ISO_11784_and_ISO_11785

Indien nodig, kunt u ook het voorbeeldbestand [animals.csv][] downloaden.

[animals.csv]: /data-export/animals.csv

### Lichaamstemperatuurgegevens (`temperatures.csv`)

- **Bestandsnaam** `temperatures.csv`
- **Beschrijving** Temperatuurwaarden, verkregen door het meten van de rectale lichaamstemperatuur van dieren.
- **Aantal kolommen** 5

Elke regel van de temperatuurdatatabel vertegenwoordigt een lichaamstemperatuurmeting uitgevoerd op een dier met VitalControl-apparaat. Een voorbeeldige temperatuurtabel ziet er dus als volgt uit:

```csv
National-ID-Animal;Farm-ID-Animal;Datum;Tijd;Temperatuur-Celsius
276000312341001;1001;276000312341001;2023-07-24;38.03
276000312341002;1002;276000312341002;2023-07-24;40.12
276000312341003;1003;276000312341003;2023-07-24;39.97
…
```

De volgende tabel geeft een lijst en beschrijving van elke kolom in het exportbestand met de lichaamstemperatuurwaarden:

|Kolom| Naam van kolom       | Beschrijving                            | Opmerkingen                                       |
|:-:|-----------------------|-----------------------------------------|---------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-cijferig nummer van gemeten dier     | volgens [ISO1174/85][], mogelijk niet geregistreerd |
| 2 | `Farm-ID-Animal`      | Beheernummer van gemeten dier           | 2 tot 6 cijfers, vaak gelijk aan halsbandnummer   |
| 3 | `Datum`               | Datum van temperatuurmeting             | Formaat: `JJJJ-MM-DD` (`Jaar-Maand-Dag`)          |
| 4 | `Tijd`                | Tijd van temperatuurmeting              | Formaat: `uu-mm-ss` (`uur:minuut:seconde`)        |
| 5 | `Temperatuur-Celsius` | Gemeten temperatuurwaarde               | Eenheid: `Grad Celsius`                           |

Indien nodig, kunt u ook het voorbeeldbestand [temperatures.csv][] downloaden. De afbeelding hieronder toont dit gegevensbestand geopend in een spreadsheetprogramma.

![Exportbestand met lichaamstemperatuurwaarden, geopend in spreadsheetprogramma](../images/temperatures.png "Tabel temperatuurwaarden")

[temperatures.csv]: /data-export/temperatures.csv

### Gewichtsgegevens (`weights.csv`)

- **Bestandsnaam** `weights.csv`
- **Beschrijving** Gewichtswaarden verkregen door het wegen van dieren
- **Aantal kolommen** 5

Elke regel van de gewichtstabel vertegenwoordigt één weging van een dier met behulp van het VitalControl-apparaat voor het registreren van de gewichtswaarde. Een voorbeeldige gewichtstabel ziet er dus als volgt uit:

```csv
National-ID-Animal;Farm-ID-Animal;Datum;Tijd;Gewicht-Kg
276000312341001;1001;276000312341001;2023-07-24;67.8
276000312341002;1002;276000312341002;2023-07-24;F;40.4
276000312341003;1003;276000312341003;2023-07-24;F;104.2
…
```

De volgende tabel geeft een lijst en beschrijving van de individuele kolommen van de tabel met de gewichten van dieren:

|Kolom| Naam van kolom       | Beschrijving                           | Opmerkingen                                      |
|:-:|-----------------------|-----------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-cijferig nummer van gewogen dier     | volgens [ISO1174/85][], mogelijk niet geregistreerd |
| 2 | `Farm-ID-Animal`      | Beheernummer van gewogen dier           | 2 tot 6 cijfers, vaak gelijk aan halsbandnummer    |
| 3 | `Datum`               | Datum van wegen                         | Formaat: `YYYY-MM-DD` (`Jaar-Maand-Dag`)         |
| 4 | `Tijd`                | Tijd van wegen                          | Formaat: `hh-mm-ss` (`uur:minuut:seconde`)       |
| 5 | `Gewicht-Kg`          | Gewichtswaarde                          | Eenheid: `Kilogram`                              |

Indien nodig, kunt u ook het voorbeeldbestand [weights.csv][] downloaden. De afbeelding hieronder toont dit exportbestand geopend in een spreadsheetprogramma.

![Exportbestand met gewichtswaarden van dieren, geopend in spreadsheetprogramma](../images/weights.png "Tabel gewichtswaarden")

[weights.csv]: /data-export/weights.csv

### Dierbeoordelingen (`ratings.csv`)

- **Bestandsnaam** `ratings.csv`
- **Beschrijving** Dierbeoordelingen verkregen door visuele inspectie van de dieren
- **Aantal kolommen** 8

Elke rij van de tabel met dierbeoordelingen vertegenwoordigt de visuele beoordeling van een dierenevaluatie uitgevoerd met VitalControl. Een voorbeeldtabel met dierbeoordeling ziet er als volgt uit:

```csv
National-ID-Animal;Farm-ID-Animal;Date;Time;ScoreCondition;ScoreFeedIntake;ScoreScours;ScoreRespiratory
276000312341001;1001;276000312341001;2023-07-24;Green;Yellow;Yellow;Green
276000312341002;1002;276000312341002;2023-07-24;Yellow;Yellow;Yellow;Red
276000312341003;1003;276000312341003;2023-07-24;Green;None;None;None
…
```

De volgende tabel geeft een lijst en beschrijving van elke kolom van de tabel met dierbeoordelingen:

|Kolom| Naam van de kolom     | Beschrijving                             | Opmerkingen                                        |
|:-:|-----------------------|-----------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-cijferig nummer van beoordeeld dier  | volgens [ISO1174/85][], mogelijk niet geregistreerd |
| 2 | `Farm-ID-Animal`      | Beheernummer van beoordeeld dier        | 2 tot 6 cijfers, vaak gelijk aan halsbandnummer    |
| 3 | `Datum`               | Datum van beoordeling                   | Formaat: `YYYY-MM-TT` (`Jaar-Maand-Dag`)         |
| 4 | `Tijd`                | Tijd van beoordeling                    | Formaat: `hh-mm-ss` (`uur:minuut:seconde`)       |
| 5 | `ScoreCondition`      | Beoordeling van algemene conditie       | _Beoordelingen:_ `Rood`, `Geel`, `Groen`, `Geen`     |
| 6 | `ScoreFeedIntake`     | Beoordeling van voeropname              | _Beoordelingen:_ `Rood`, `Geel`, `Groen`, `Geen`     |
| 7 | `ScoreScours`         | Beoordeling van status betreffende `Scours` | _Beoordelingen:_ `Rood`, `Geel`, `Groen`, `Geen`     |
| 8 | `ScoreRespiratory`    | Beoordeling van status `Ademhalingsziekten` | _Beoordelingen:_ `Rood`, `Geel`, `Groen`, `Geen`     |

Indien nodig, kunt u ook het verstrekte voorbeeldbestand [ratings.csv][] downloaden. De onderstaande afbeelding toont dit bestand geopend in een spreadsheetprogramma.

![Exportbestand met dierbeoordelingen, geopend in spreadsheetprogramma](../images/ratings.png "Tabel dierbeoordelingen")

[ratings.csv]: /data-export/ratings.csv
