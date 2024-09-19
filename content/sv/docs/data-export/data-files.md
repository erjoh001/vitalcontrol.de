---
title: Struktur och innehåll i de exporterade CSV-datafilerna
linkTitle: Exportfiler
date: 2023-07-20
weight: 30
description: >
  Beskrivning av strukturen och innehållet i de fyra datafilerna som skapas under exporten.
Kategorier: [Dataexport]
Taggar: [exportfiler, temperaturer, vikter, betyg]
slug: export-files
translationKey: data-export/data-files
---
## Allmän information {#general-information}

Vid export av djurdata, oavsett om det är till [USB-minne][] eller till en lokal masslagringsenhet [på PC][], genereras fyra exportfiler i varje fall:

- [Djurdatan][] `(animals.csv)`
- [Kroppstemperaturdata][] `(temperatures.csv)`
- [Viktdata][] `(weights.csv)`
- [Djurbetyg][] `(ratings.csv)`

[USB-minne]: ../usb-drive/
[på PC]: ../pc/

[Djurdatan]: #animal-data-animalscsv
[Kroppstemperaturdata]: #body-temperature-data-temperaturescsv
[Viktdata]: #weight-data-weightscsv
[Djurbetyg]: #animal-ratings-ratingscsv

Alla fyra filer är läsbara [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) textfiler. Filerna är kodade i `UTF-8` format, semikolon (`;`) används som kolumnavgränsare. De enskilda datafälten är *inte* inneslutna i citattecken. Varje rad i respektive tabell representerar en djurdatapost eller en mätning eller bedömning utförd på ett djur.

## Vidare bearbetning av exporterad data {#further-processing-of-exported-data}

Du kan öppna var och en av dessa fyra exportfiler i ett kalkylprogram efter eget val (såsom [Microsoft Excel](https://products.office.com/excel) eller [OpenOffice Calc](https://www.openoffice.org/)) och utföra avancerad analys av data där. Som ett exempel visas vyn av tabellen `animals.csv` i ett kalkylprogram nedan:

![Exporterad djurdata, öppnad i ett kalkylprogram](../images/animals.png "Djurdatan öppnad i kalkylprogram")

## Beskrivning av datafiler {#description-of-data-files}

Följande fyra avsnitt beskriver var och en av de exporterade datafilerna i detalj:

### Djurdata (`animals.csv`) {#animal-data-animalscsv}

- **Filnamn** `animals.csv`
- **Beskrivning** Allmän djurdata
- **Antal kolumner** 6

Varje rad i djurdatatabellen representerar ett djur lagrat på VitalControl. En exemplifierande djurdatatabell har således följande utseende:

{{% data-files/en %}}

Följande tabell listar och beskriver varje kolumn i djurdatatabellen:

|Kolumn| Namn på kolumn    | Beskrivning                     | Kommentarer                                               |
|:-:|----------------------|---------------------------------|-----------------------------------------------------------|
| 1 | `National-ID-Animal` | Officiellt nationellt djurnummer| 15 siffror enligt [ISO1174/85][], kanske inte registrerad  |
| 2 | `Farm-ID-Animal`     | Förvaltningsnummer              | 2 till 6 siffror, ofta samma som nummer på halsband       |
| 3 | `Transponder-ID`     | Transpondernnummer              | kan saknas, kan vara identisk med nationellt djurnummer    |
| 4 | `DateOfBirth`        | Födelsedatum                    | Format: `YYYY-MM-TT` (`År-Månad-Dag`)                     |
| 5 | `Sex`                | Kön                             | _Värden:_ `M`: hane, `F`: hona, `?`: okänd                |
| 6 | `BirthWeight-Kg`     | Födelsevikt                     | Enhet: `kilogram`, kanske inte registrerad / saknas       |

[ISO1174/85]: https://en.wikipedia.org/wiki/ISO_11784_and_ISO_11785

Vid behov kan du också ladda ner den tillhandahållna exempelfilen [animals.csv][].

[animals.csv]: /data-export/animals.csv

### Kroppstemperaturdata (`temperatures.csv`) {#body-temperature-data-temperaturescsv}

- **Filnamn** `temperatures.csv`
- **Beskrivning** Temperaturvärden, erhållna genom att ta rektal kroppstemperatur på djur.
- **Antal kolumner** 5

Varje rad i temperaturdatatabellen representerar en kroppstemperaturmätning utförd på ett djur med VitalControl-enheten. En exemplifierande temperaturtabell har således följande utseende:

{{% data-files/en_2 %}}

a
Följande tabell listar och beskriver varje kolumn i exportfilen som innehåller kroppstemperaturvärden:

|Kolumn| Namn på kolumn      | Beskrivning                          | Kommentarer                                      |
|:-:|-----------------------|--------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-siffrigt nummer på mätt djur      | enligt [ISO1174/85][], kanske inte registrerad   |
| 2 | `Farm-ID-Animal`      | Förvaltningsnummer på mätt djur      | 2- till 6 siffror, ofta lika med halsbandsnummer |
| 3 | `Date`                | Datum för temperaturmätning          | Format: `YYYY-MM-TT` (`År-Månad-Dag`)            |
| 4 | `Time`                | Tidpunkt för temperaturmätning       | Format: `hh-mm-ss` (`timme:minut:sekund`)        |
| 5 | `Temperature-Celsius` | Uppmätt temperaturvärde               | Enhet: `Grad Celsius`                            |

Vid behov kan du också ladda ner den medföljande exempelfilen [temperatures.csv][]. Figuren nedan visar denna datafil öppnad i ett kalkylprogram.

![Exportfil med kroppstemperaturvärden, öppnad i kalkylprogram](../images/temperatures.png "Tabell temperaturvärden")

[temperatures.csv]: /data-export/temperatures.csv

### Viktdata (`weights.csv`) {#weight-data-weightscsv}

- **Filnamn** `weights.csv`
- **Beskrivning** Viktvärden erhållna genom vägning av djur
- **Antal kolumner** 5

Varje rad i vikttabellen representerar en vägning av ett djur med hjälp av VitalControl-enheten för att registrera viktvärdet. En exemplifierande vikttabell har således följande utseende:

{{% data-files/en_3 %}}

Följande tabell listar och beskriver de enskilda kolumnerna i tabellen som innehåller djurvikterna:

|Kolumn| Namn på kolumn      | Beskrivning                         | Kommentarer                                      |
|:-:|-----------------------|-------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-siffrigt nummer på vägt djur     | enligt [ISO1174/85][], kanske inte registrerad  |
| 2 | `Farm-ID-Animal`      | Förvaltningsnummer på vägt djur     | 2- till 6 siffror, ofta lika med halsbandsnummer|
| 3 | `Date`                | Datum för vägning                   | Format: `YYYY-MM-TT` (`År-Månad-Dag`)           |
| 4 | `Time`                | Tidpunkt för vägning                | Format: `hh-mm-ss` (`timme:minut:sekund`)       |
| 5 | `Weight-Kg`           | Viktvärde                           | Enhet: `Kilogram`                               |


Om det behövs kan du också ladda ner den medföljande exempelfilen [weights.csv][]. Figuren nedan visar denna exportfil öppnad i ett kalkylprogram.

![Exportfil med djurviktsvärden, öppnad i kalkylprogram](../images/weights.png "Tabellviktsvärden")

[weights.csv]: /data-export/weights.csv

### Djurbedömningar (`ratings.csv`) {#animal-ratings-ratingscsv}

- **Filnamn** `ratings.csv`
- **Beskrivning** Djurbedömningar erhållna genom visuell inspektion av djuren
- **Antal kolumner** 8

Varje rad i djurbedömningstabellen representerar den visuella bedömningen av en djurutvärdering utförd med VitalControl. En exemplartabell med djurbedömning har följande utseende:

{{% data-files/en_4 %}}

Följande tabell listar och beskriver varje kolumn i djurbedömningstabellen:

|Kolumn| Kolumnnamn          | Beskrivning                             | Kommentarer                                     |
|:-:|-----------------------|-----------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-siffrigt nummer på bedömt djur       | enligt [ISO1174/85][], kanske inte registrerat  |
| 2 | `Farm-ID-Animal`      | Förvaltningsnummer på bedömt djur       | 2- till 6 siffror, ofta samma som halsbandsnummer |
| 3 | `Date`                | Bedömningsdatum                         | Format: `YYYY-MM-TT` (`År-Månad-Dag`)           |
| 4 | `Time`                | Bedömningstid                           | Format: `hh-mm-ss` (`timme:minut:sekund`)       |
| 5 | `ScoreCondition`      | Bedömning av allmänt tillstånd          | _Bedömningar:_ `Röd`, `Gul`, `Grön`, `Ingen`    |
| 6 | `ScoreFeedIntake`     | Bedömning av foderintag                 | _Bedömningar:_ `Röd`, `Gul`, `Grön`, `Ingen`    |
| 7 | `ScoreScours`         | Bedömning av status angående `Diarré`   | _Bedömningar:_ `Röd`, `Gul`, `Grön`, `Ingen`    |
| 8 | `ScoreRespiratory`    | Bedömning av status `Andningssjukdomar` | _Bedömningar:_ `Röd`, `Gul`, `Grön`, `Ingen`    |


Om det behövs kan du också ladda ner den medföljande exempel filen [ratings.csv][]. Figuren nedan visar denna fil öppnad i ett kalkylprogram.

![Exportera fil med djurbetyg, öppnad i kalkylprogram](../images/ratings.png "Tabell djurbetyg")

[ratings.csv]: /data-export/ratings.csv
