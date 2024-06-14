---
title: Struktur og indhold af de eksporterede CSV-datafiler
linkTitle: Eksportfiler
date: 2023-07-20
weight: 30
description: >
  Beskrivelse af strukturen og indholdet af de fire datafiler, der oprettes under eksporten.
categories: [Dataeksport]
tags: [eksportfiler, temperaturer, vægte, vurderinger]
slug: export-files
translationKey: data-export/data-files
---
## Generel information {#general-information}

Når dyredata eksporteres, uanset om det er til [USB-flashdrev][] eller til en lokal massehukommelsesenhed [på PC'en][], genereres der fire eksportfiler i hvert tilfælde:

- [Dyredata][] `(animals.csv)`
- [Kropstemperaturdata][] `(temperatures.csv)`
- [Vægtdata][] `(weights.csv)`
- [Dyrevurderinger][] `(ratings.csv)`

[USB-flashdrev]: ../usb-drive/
[på PC'en]: ../pc/

[Dyredata]: #animal-data-animalscsv
[Kropstemperaturdata]: #body-temperature-data-temperaturescsv
[Vægtdata]: #weight-data-weightscsv
[Dyrevurderinger]: #animal-ratings-ratingscsv

Alle fire filer er menneskelæselige [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) tekstfiler. Filernes kodning er i `UTF-8` format, semikolon (`;`) bruges som kolonneadskillere. De enkelte datafelter er *ikke* indrammet i anførselstegn. Hver række i den respektive tabel repræsenterer et dyredatasæt eller en måling eller vurdering udført på et dyr.

## Videre behandling af eksporterede data {#further-processing-of-exported-data}

Du kan åbne hver af disse fire eksportfiler i et regnearksprogram efter eget valg (såsom [Microsoft Excel](https://products.office.com/excel) eller [OpenOffice Calc](https://www.openoffice.org/)) og udføre avanceret analyse af dataene der. Som et eksempel er visningen af tabellen `animals.csv` i et regnearksprogram vist nedenfor:

![Eksporterede dyredata, åbnet i et regnearksprogram](../images/animals.png "Dyredata åbnet i regnearksprogram")

## Beskrivelse af datafiler {#description-of-data-files}

De følgende fire afsnit beskriver hver af de eksporterede datafiler i detaljer:

### Dyredata (`animals.csv`) {#animal-data-animalscsv}

- **Filnavn** `animals.csv`
- **Beskrivelse** Generelle dyredata
- **Antal kolonner** 6

Hver række i dyredatatabellen repræsenterer et dyr lagret på VitalControl. En eksemplarisk dyredatatabel har således følgende udseende:

{{% data-files/en %}}

Følgende tabel lister og beskriver hver kolonne i dyredatatabellen:

|Kolonne| Kolonnenavn         | Beskrivelse                     | Kommentarer                                                |
|:-:|----------------------|---------------------------------|-----------------------------------------------------------|
| 1 | `National-ID-Animal` | Officielt nationalt dyrenummer  | 15 cifre i henhold til [ISO1174/85][], måske ikke registreret |
| 2 | `Farm-ID-Animal`     | Administrationsnummer           | 2- til 6 cifre, ofte lig med nummeret på halsbåndet        |
| 3 | `Transponder-ID`     | Transpondernummer               | kan mangle, kan være identisk med nationalt dyrenummer     |
| 4 | `DateOfBirth`        | Fødselsdato                     | Format: `YYYY-MM-TT` (`År-Måned-Dag`)                      |
| 5 | `Sex`                | Køn                             | _Værdier:_ `M`: han, `F`: hun, `?`: ukendt                 |
| 6 | `BirthWeight-Kg`     | Fødselsvægt                     | Enhed: `kilogram`, måske ikke registreret / mangler        |

[ISO1174/85]: https://en.wikipedia.org/wiki/ISO_11784_and_ISO_11785

Hvis nødvendigt, kan du også downloade den medfølgende prøvefil [animals.csv][].

[animals.csv]: /data-export/animals.csv

### Kropstemperaturdata (`temperatures.csv`) {#body-temperature-data-temperaturescsv}

- **Filnavn** `temperatures.csv`
- **Beskrivelse** Temperaturværdier, opnået ved at tage den rektale kropstemperatur af dyr.
- **Antal kolonner** 5

Hver linje i kropstemperaturdatatabellen repræsenterer en kropstemperaturmåling udført på et dyr med VitalControl-enheden. En eksemplarisk temperaturtabel har således følgende udseende:

{{% data-files/en_2 %}}

a
Følgende tabel viser og beskriver hver kolonne i eksportfilen, der indeholder kropstemperaturværdierne:

|Kolonne| Kolonnenavn         | Beskrivelse                         | Kommentarer                                      |
|:-:|-----------------------|--------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-cifret nummer på det målte dyr    | ifølge [ISO1174/85][], måske ikke registreret    |
| 2 | `Farm-ID-Animal`      | Administrationsnummer på det målte dyr | 2- til 6 cifre, ofte lig med halsbåndsnummer     |
| 3 | `Date`                | Dato for temperaturmåling            | Format: `YYYY-MM-TT` (`År-Måned-Dag`)            |
| 4 | `Time`                | Tidspunkt for temperaturmåling       | Format: `hh-mm-ss` (`time:minut:sekund`)         |
| 5 | `Temperature-Celsius` | Målt temperaturværdi                 | Enhed: `Grad Celsius`                            |

Hvis nødvendigt, kan du også downloade den medfølgende prøvefil [temperatures.csv][]. Figuren nedenfor viser denne datafil åbnet i et regnearksprogram.

![Eksportfil med kropstemperaturværdier, åbnet i regnearksprogram](../images/temperatures.png "Tabel temperaturværdier")

[temperatures.csv]: /data-export/temperatures.csv

### Vægtdatasæt (`weights.csv`) {#weight-data-weightscsv}

- **Filnavn** `weights.csv`
- **Beskrivelse** Vægtværdier opnået ved vejning af dyr
- **Antal kolonner** 5

Hver linje i vægttabellen repræsenterer en vejning af et dyr ved hjælp af VitalControl-enheden til registrering af vægtværdien. En eksemplarisk vægttabel har således følgende udseende:

{{% data-files/en_3 %}}

Følgende tabel viser og beskriver de enkelte kolonner i tabellen, der indeholder dyrenes vægte:

|Kolonne| Kolonnenavn         | Beskrivelse                        | Kommentarer                                      |
|:-:|-----------------------|-------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-cifret nummer på det vejede dyr  | ifølge [ISO1174/85][], måske ikke registreret    |
| 2 | `Farm-ID-Animal`      | Administrationsnummer på det vejede dyr | 2- til 6 cifre, ofte lig med halsbåndsnummer     |
| 3 | `Date`                | Dato for vejning                    | Format: `YYYY-MM-TT` (`År-Måned-Dag`)            |
| 4 | `Time`                | Tidspunkt for vejning               | Format: `hh-mm-ss` (`time:minut:sekund`)         |
| 5 | `Weight-Kg`           | Vægtværdi                           | Enhed: `Kilogram`                                |

Hvis nødvendigt, kan du også downloade den medfølgende prøvefil [weights.csv][]. Figuren nedenfor viser denne eksportfil åbnet i et regnearksprogram.

![Eksportfil med dyrevægtsværdier, åbnet i regnearksprogram](../images/weights.png "Tabelvægtværdier")

[weights.csv]: /data-export/weights.csv

### Dyrevurderinger (`ratings.csv`) {#animal-ratings-ratingscsv}

- **Filnavn** `ratings.csv`
- **Beskrivelse** Dyrevurderinger opnået ved visuel inspektion af dyrene
- **Antal kolonner** 8

Hver række i dyrevurderingstabellen repræsenterer den visuelle vurdering af en dyreevaluering udført med VitalControl. En eksemplarisk tabel med dyrevurdering har følgende udseende:

{{% data-files/en_4 %}}

Følgende tabel viser og beskriver hver kolonne i dyrevurderingstabellen:

|Kolonne| Kolonnenavn        | Beskrivelse                             | Kommentarer                                      |
|:-:|-----------------------|-----------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-cifret nummer på vurderet dyr        | ifølge [ISO1174/85][], måske ikke registreret   |
| 2 | `Farm-ID-Animal`      | Administrationsnummer på vurderet dyr   | 2- til 6 cifre, ofte lig halsbåndsnummer        |
| 3 | `Date`                | Dato for vurdering                      | Format: `YYYY-MM-TT` (`År-Måned-Dag`)           |
| 4 | `Time`                | Tidspunkt for vurdering                 | Format: `hh-mm-ss` (`time:minut:sekund`)        |
| 5 | `ScoreCondition`      | Vurdering af generel tilstand           | _Vurderinger:_ `Rød`, `Gul`, `Grøn`, `Ingen`    |
| 6 | `ScoreFeedIntake`     | Vurdering af foderindtag                | _Vurderinger:_ `Rød`, `Gul`, `Grøn`, `Ingen`    |
| 7 | `ScoreScours`         | Vurdering af status vedrørende `Diarré` | _Vurderinger:_ `Rød`, `Gul`, `Grøn`, `Ingen`    |
| 8 | `ScoreRespiratory`    | Vurdering af status `Luftvejssygdomme`  | _Vurderinger:_ `Rød`, `Gul`, `Grøn`, `Ingen`    |


Hvis nødvendigt, kan du også downloade den medfølgende prøvefil [ratings.csv][]. Figuren nedenfor viser denne fil åbnet i et regnearksprogram.

![Eksportfil med dyrebedømmelser, åbnet i regnearksprogram](../images/ratings.png "Tabel dyrebedømmelser")

[ratings.csv]: /data-export/ratings.csv
