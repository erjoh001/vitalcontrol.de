---
title: Structuur en inhoud van de geëxporteerde CSV-gegevensbestanden
linkTitle: Exporteer diergegevens
date: 2023-07-20
weight: 30
description: >
  Beschrijving van de structuur en inhoud van de vier gegevensbestanden die tijdens de export worden aangemaakt.
categorieën: [Data export]
tags: [exportbestanden, temperaturen, gewichten, beoordelingen]
slug: export-bestanden
translationKey: data-export/data-files
---
## Algemene informatie {#general-information}

Bij het exporteren van diergegevens, ongeacht of dit naar de [USB-stick][] of naar een lokale massaalopslagapparaat [op de PC][], worden in elk geval vier exportbestanden gegenereerd:

- [Diergegevens](#animal-data-animalscsv) `(animals.csv)`
- [Gegevens over lichaamstemperatuur](#body-temperature-data-temperaturescsv)`(temperatures.csv)`
- [Gewichtsgegevens](#weight-data-weightscsv) `(weights.csv)`
- [Beoordelingen van dieren](#animal-ratings-ratingscsv) `(ratings.csv)`

[USB-stick]: ../usb-drive/
[op de PC]: ../pc/

[Diergegevens]: #diergegevens-animalscsv
[Gegevens over lichaamstemperatuur]: #gegevens-over-lichaamstemperatuur-temperaturescsv
[Gewichtsgegevens]: #gewichtsgegevens-weightscsv
[Beoordelingen van dieren]: #beoordelingen-van-dieren-ratingscsv

Alle vier bestanden zijn leesbare [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) tekstbestanden. De bestanden zijn gecodeerd in `UTF-8` formaat, puntkomma's (`;`) worden gebruikt als kolomscheiders. De afzonderlijke gegevensvelden zijn *niet* omsloten door aanhalingstekens. Elke rij van de respectievelijke tabel vertegenwoordigt een diergegevensset of een meting of beoordeling uitgevoerd op een dier.

## Verdere verwerking van geëxporteerde gegevens {#further-processing-of-exported-data}	

U kunt elk van deze vier exportbestanden openen in een spreadsheetprogramma naar keuze (zoals [Microsoft Excel](https://products.office.com/excel) of [OpenOffice Calc](https://www.openoffice.org/)) en daar geavanceerde analyses van de gegevens uitvoeren. Als voorbeeld wordt hieronder de weergave van de tabel `animals.csv` in een spreadsheetprogramma getoond:

![Geëxporteerde diergegevens, geopend in een spreadsheetprogramma](../images/animals.png "Diergegevens geopend in spreadsheetprogramma")

## Beschrijving van gegevensbestanden {#description-of-data-files}

De volgende vier secties beschrijven elk van de geëxporteerde gegevensbestanden in detail:

### Diergegevens (`animals.csv`) {#animal-data-animalscsv}

- **Bestandsnaam** `animals.csv`
- **Beschrijving** Algemene diergegevens
- **Aantal kolommen** 6

Elke rij van de dierendatatabel vertegenwoordigt één dier opgeslagen op de VitalControl. Een voorbeeldige dierendatatabel ziet er dus als volgt uit:

{{% data-files/en %}}

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

### Lichaamstemperatuurgegevens (`temperatures.csv`) {#body-temperature-data-temperaturescsv}

- **Bestandsnaam** `temperatures.csv`
- **Beschrijving** Temperatuurwaarden, verkregen door het meten van de rectale lichaamstemperatuur van dieren.
- **Aantal kolommen** 5

Elke regel van de temperatuurdatatabel vertegenwoordigt een lichaamstemperatuurmeting uitgevoerd op een dier met VitalControl-apparaat. Een voorbeeldige temperatuurtabel ziet er dus als volgt uit:

{{% data-files/en_2 %}}

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

### Gewichtsgegevens (`weights.csv`) {#weight-data-weightscsv}

- **Bestandsnaam** `weights.csv`
- **Beschrijving** Gewichtswaarden verkregen door het wegen van dieren
- **Aantal kolommen** 5

Elke regel van de gewichtstabel vertegenwoordigt één weging van een dier met behulp van het VitalControl-apparaat voor het registreren van de gewichtswaarde. Een voorbeeldige gewichtstabel ziet er dus als volgt uit:

{{% data-files/en_3 %}}

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

### Dierbeoordelingen (`ratings.csv`) {#animal-ratings-ratingscsv}

- **Bestandsnaam** `ratings.csv`
- **Beschrijving** Dierbeoordelingen verkregen door visuele inspectie van de dieren
- **Aantal kolommen** 8

Elke rij van de tabel met dierbeoordelingen vertegenwoordigt de visuele beoordeling van een dierenevaluatie uitgevoerd met VitalControl. Een voorbeeldtabel met dierbeoordeling ziet er als volgt uit:

{{% data-files/en_4 %}}

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
