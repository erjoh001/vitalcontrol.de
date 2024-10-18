---
title: Struktur og innhold i de eksporterte CSV-datafilene
linkTitle: Eksportfiler
date: 2023-07-20
weight: 30
description: >
  Beskrivelse av strukturen og innholdet i de fire datafilene som opprettes under eksporten.
categories: [Dataeksport]
tags: [eksportfiler, temperaturer, vekter, vurderinger]
slug: export-files
translationKey: data-export/data-files
---
## Generell informasjon {#general-information}

Ved eksport av dyredata, uavhengig av om det er til [USB-minnepinne][] eller til en lokal lagringsenhet [på PC-en][], genereres det fire eksportfiler i hvert tilfelle:

- [Dyredata][] `(animals.csv)`
- [Kroppstemperaturdata][] `(temperatures.csv)`
- [Vektdata][] `(weights.csv)`
- [Dyrevurderinger][] `(ratings.csv)`

[USB-minnepinne]: ../usb-drive/
[på PC-en]: ../pc/

[Dyredata]: #animal-data-animalscsv
[Kroppstemperaturdata]: #body-temperature-data-temperaturescsv
[Vektdata]: #weight-data-weightscsv
[Dyrevurderinger]: #animal-ratings-ratingscsv

Alle fire filene er menneskelesbare [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) tekstfiler. Filene er kodet i `UTF-8` format, semikolon (`;`) brukes som kolonneskillere. De enkelte datafeltene er *ikke* omsluttet av anførselstegn. Hver rad i den respektive tabellen representerer et dyredatasett eller en måling eller vurdering utført på et dyr.

## Videre behandling av eksporterte data {#further-processing-of-exported-data}

Du kan åpne hver av disse fire eksportfilene i et regneprogram etter eget valg (som [Microsoft Excel](https://products.office.com/excel) eller [OpenOffice Calc](https://www.openoffice.org/)) og utføre avansert analyse av dataene der. Som et eksempel vises visningen av tabellen `animals.csv` i et regneprogram nedenfor:

![Eksporterte dyredata, åpnet i et regneprogram](../images/animals.png "Dyredata åpnet i regneprogram")

## Beskrivelse av datafiler {#description-of-data-files}

De følgende fire seksjonene beskriver hver av de eksporterte datafilene i detalj:

### Dyredata (`animals.csv`) {#animal-data-animalscsv}

- **Filnavn** `animals.csv`
- **Beskrivelse** Generelle dyredata
- **Antall kolonner** 6

Hver rad i dyredatatabellen representerer ett dyr lagret på VitalControl. En eksemplarisk dyredatatabell har dermed følgende utseende:

{{% data-files/en %}}

Tabellen nedenfor viser og beskriver hver kolonne i dyredatatabellen:

|Kolonne| Kolonnenavn         | Beskrivelse                     | Kommentarer                                                |
|:-:|----------------------|---------------------------------|-----------------------------------------------------------|
| 1 | `National-ID-Animal` | Offisielt nasjonalt dyrenummer   | 15 sifre i henhold til [ISO1174/85][], kanskje ikke registrert |
| 2 | `Farm-ID-Animal`     | Forvaltningsnummer               | 2 til 6 sifre, ofte lik nummeret på halsbåndet            |
| 3 | `Transponder-ID`     | Transpondernr                    | kan mangle, kan være identisk med nasjonalt dyrenummer     |
| 4 | `DateOfBirth`        | Fødselsdato                      | Format: `YYYY-MM-TT` (`År-Måned-Dag`)                      |
| 5 | `Sex`                | Kjønn                            | _Verdier:_ `M`: hann, `F`: hunn, `?`: ukjent               |
| 6 | `BirthWeight-Kg`     | Fødselsvekt                      | Enhet: `kilogram`, kanskje ikke registrert / mangler       |

[ISO1174/85]: https://en.wikipedia.org/wiki/ISO_11784_and_ISO_11785

Om nødvendig kan du også laste ned den medfølgende eksempel filen [animals.csv][].

[animals.csv]: /data-export/animals.csv

### Kroppstemperaturdata (`temperatures.csv`) {#body-temperature-data-temperaturescsv}

- **Filnavn** `temperatures.csv`
- **Beskrivelse** Temperaturverdier, oppnådd ved å ta rektal kroppstemperatur av dyr.
- **Antall kolonner** 5

Hver linje i temperaturdatatabellen representerer en kroppstemperaturmåling utført på et dyr med VitalControl-enheten. En eksemplarisk temperaturtabell har dermed følgende utseende:

{{% data-files/en_2 %}}

a
Tabellen nedenfor viser og beskriver hver kolonne i eksportfilen som inneholder kroppstemperaturverdiene:

|Kolonne| Navn på kolonne     | Beskrivelse                          | Kommentarer                                      |
|:-:|-----------------------|--------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-sifret nummer på målt dyr          | i henhold til [ISO1174/85][], kanskje ikke registrert |
| 2 | `Farm-ID-Animal`      | Forvaltningsnummer på målt dyr        | 2- til 6 sifre, ofte lik halsbåndnummer          |
| 3 | `Date`                | Dato for temperaturmåling             | Format: `YYYY-MM-TT` (`År-Måned-Dag`)            |
| 4 | `Time`                | Tidspunkt for temperaturmåling        | Format: `hh-mm-ss` (`time:minutt:sekund`)        |
| 5 | `Temperature-Celsius` | Målt temperaturverdi                  | Enhet: `Grad Celsius`                            |

Hvis nødvendig, kan du også laste ned den medfølgende eksempel filen [temperatures.csv][]. Figuren nedenfor viser denne datafilen åpnet i et regnearkprogram.

![Eksportfil med kroppstemperaturverdier, åpnet i regnearkprogram](../images/temperatures.png "Tabell temperaturverdier")

[temperatures.csv]: /data-export/temperatures.csv

### Vektdata (`weights.csv`) {#weight-data-weightscsv}

- **Filnavn** `weights.csv`
- **Beskrivelse** Vektverdier oppnådd ved veiing av dyr
- **Antall kolonner** 5

Hver linje i vekttabellen representerer en veiing av et dyr ved bruk av VitalControl-enheten for å registrere vektverdien. En eksemplarisk vekttabell har dermed følgende utseende:

{{% data-files/en_3 %}}

Tabellen nedenfor viser og beskriver de enkelte kolonnene i tabellen som inneholder dyrevektene:

|Kolonne| Navn på kolonne     | Beskrivelse                         | Kommentarer                                      |
|:-:|-----------------------|-------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-sifret nummer på veid dyr         | i henhold til [ISO1174/85][], kanskje ikke registrert |
| 2 | `Farm-ID-Animal`      | Forvaltningsnummer på veid dyr       | 2- til 6 sifre, ofte lik halsbåndnummer          |
| 3 | `Date`                | Dato for veiing                      | Format: `YYYY-MM-TT` (`År-Måned-Dag`)            |
| 4 | `Time`                | Tidspunkt for veiing                 | Format: `hh-mm-ss` (`time:minutt:sekund`)        |
| 5 | `Weight-Kg`           | Vektverdi                            | Enhet: `Kilogram`                                |

Hvis nødvendig, kan du også laste ned den medfølgende eksempel filen [weights.csv][]. Figuren nedenfor viser denne eksportfilen åpnet i et regnearkprogram.

![Eksportfil med dyrevektsverdier, åpnet i regnearkprogram](../images/weights.png "Tabell vektverdier")

[weights.csv]: /data-export/weights.csv

### Dyrevurderinger (`ratings.csv`) {#animal-ratings-ratingscsv}

- **Filnavn** `ratings.csv`
- **Beskrivelse** Dyrevurderinger oppnådd ved visuell inspeksjon av dyrene
- **Antall kolonner** 8

Hver rad i dyrevurderingstabellen representerer den visuelle vurderingen av en dyreevaluering utført med VitalControl. En eksemplarisk tabell med dyrevurdering har følgende utseende:

{{% data-files/en_4 %}}

Tabellen nedenfor viser og beskriver hver kolonne i dyrevurderingstabellen:

|Kolonne| Navn på kolonne     | Beskrivelse                             | Kommentarer                                      |
|:-:|-----------------------|-----------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-sifret nummer på vurdert dyr          | i henhold til [ISO1174/85][], kanskje ikke registrert |
| 2 | `Farm-ID-Animal`      | Forvaltningsnummer på vurdert dyr        | 2- til 6 sifre, ofte lik halsbåndnummer          |
| 3 | `Date`                | Dato for vurdering                       | Format: `YYYY-MM-TT` (`År-Måned-Dag`)            |
| 4 | `Time`                | Tidspunkt for vurdering                  | Format: `hh-mm-ss` (`time:minutt:sekund`)        |
| 5 | `ScoreCondition`      | Vurdering av generell tilstand           | _Vurderinger:_ `Red`, `Yellow`, `Green`, `None`  |
| 6 | `ScoreFeedIntake`     | Vurdering av fôrinntak                   | _Vurderinger:_ `Red`, `Yellow`, `Green`, `None`  |
| 7 | `ScoreScours`         | Vurdering av status angående `Scours`    | _Vurderinger:_ `Red`, `Yellow`, `Green`, `None`  |
| 8 | `ScoreRespiratory`    | Vurdering av status `Respiratory diseases` | _Vurderinger:_ `Red`, `Yellow`, `Green`, `None`  |


Hvis nødvendig, kan du også laste ned den medfølgende eksempel-filen [ratings.csv][]. Figuren nedenfor viser denne filen åpnet i et regnearkprogram.

![Eksportfil med dyrevurderinger, åpnet i regnearkprogram](../images/ratings.png "Tabell dyrevurderinger")

[ratings.csv]: /data-export/ratings.csv
