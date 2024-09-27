---
title: Struktura in vsebina izvoženih CSV podatkovnih datotek
linkTitle: Izvozne datoteke
date: 2023-07-20
weight: 30
description: >
  Opis strukture in vsebine štirih podatkovnih datotek, ustvarjenih med izvozom.
categories: [Izvoz podatkov]
tags: [izvozne datoteke, temperature, teže, ocene]
slug: export-files
translationKey: data-export/data-files
---
## Splošne informacije {#general-information}

Pri izvozu podatkov o živalih, ne glede na to, ali na [USB ključek][] ali na lokalno masovno shrambo [na računalniku][], se v vsakem primeru ustvarijo štiri izvozne datoteke:

- [Podatki o živalih][] `(animals.csv)`
- [Podatki o telesni temperaturi][] `(temperatures.csv)`
- [Podatki o teži][] `(weights.csv)`
- [Ocene živali][] `(ratings.csv)`

[USB ključek]: ../usb-drive/
[na računalniku]: ../pc/

[Podatki o živalih]: #animal-data-animalscsv
[Podatki o telesni temperaturi]: #body-temperature-data-temperaturescsv
[Podatki o teži]: #weight-data-weightscsv
[Ocene živali]: #animal-ratings-ratingscsv

Vse štiri datoteke so berljive [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) besedilne datoteke. Datoteke so kodirane v formatu `UTF-8`, podpičja (`;`) se uporabljajo kot ločila stolpcev. Posamezna podatkovna polja *niso* zaprta v narekovaje. Vsaka vrstica ustrezne tabele predstavlja podatkovni niz o živali ali meritev ali oceno, izvedeno na živali.

## Nadaljnja obdelava izvoženih podatkov {#further-processing-of-exported-data}

Vsako od teh štirih izvoznih datotek lahko odprete v programu za preglednice po vaši izbiri (kot sta [Microsoft Excel](https://products.office.com/excel) ali [OpenOffice Calc](https://www.openoffice.org/)) in tam izvedete napredno analizo podatkov. Kot primer je spodaj prikazan pogled tabele `animals.csv` v programu za preglednice:

![Izvoženi podatki o živalih, odprti v programu za preglednice](../images/animals.png "Podatki o živalih odprti v programu za preglednice")

## Opis podatkovnih datotek {#description-of-data-files}

Naslednji štirje odseki podrobno opisujejo vsako od izvoženih podatkovnih datotek:

### Podatki o živalih (`animals.csv`) {#animal-data-animalscsv}

- **Ime datoteke** `animals.csv`
- **Opis** Splošni podatki o živalih
- **Število stolpcev** 6

Vsaka vrstica tabele podatkov o živalih predstavlja eno žival, shranjeno na VitalControl. Primerna tabela podatkov o živalih ima naslednji videz:

{{% data-files/en %}}

Naslednja tabela navaja in opisuje vsak stolpec tabele podatkov o živalih:

| Stolpec | Ime stolpca         | Opis                              | Komentarji                                                |
|:-:|----------------------|---------------------------------|-----------------------------------------------------------|
| 1 | `National-ID-Animal` | Uradna nacionalna številka živali | 15 mest po [ISO1174/85][], morda ni zabeleženo            |
| 2 | `Farm-ID-Animal`     | Upravljalna številka              | 2 do 6 mest, pogosto enako številki na ovratnici          |
| 3 | `Transponder-ID`     | Številka transponderja            | lahko manjka, lahko enaka nacionalni številki živali      |
| 4 | `DateOfBirth`        | Datum rojstva                     | Format: `YYYY-MM-TT` (`Leto-Mesec-Dan`)                   |
| 5 | `Sex`                | Spol                              | _Vrednosti:_ `M`: moški, `F`: ženski, `?`: neznano        |
| 6 | `BirthWeight-Kg`     | Porodna teža                      | Enota: `kilogram`, morda ni zabeleženo / manjka           |

[ISO1174/85]: https://en.wikipedia.org/wiki/ISO_11784_and_ISO_11785

Po potrebi lahko prenesete tudi priloženo vzorčno datoteko [animals.csv][].

[animals.csv]: /data-export/animals.csv

### Podatki o telesni temperaturi (`temperatures.csv`) {#body-temperature-data-temperaturescsv}

- **Ime datoteke** `temperatures.csv`
- **Opis** Vrednosti temperature, pridobljene z merjenjem rektalne telesne temperature živali.
- **Število stolpcev** 5

Vsaka vrstica tabele podatkov o temperaturi predstavlja merjenje telesne temperature, izvedeno na živali z napravo VitalControl. Primerna tabela temperature ima naslednji videz:

{{% data-files/en_2 %}}

a
Naslednja tabela navaja in opisuje vsak stolpec izvozne datoteke, ki vsebuje vrednosti telesne temperature:

| Stolpec | Ime stolpca          | Opis                                 | Komentarji                                      |
|:-:|-----------------------|--------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-mestna številka merjene živali     | v skladu z [ISO1174/85][], morda ni zabeleženo  |
| 2 | `Farm-ID-Animal`      | Upravljalna številka merjene živali   | 2- do 6 mest, pogosto enako številki ovratnika  |
| 3 | `Date`                | Datum merjenja temperature            | Format: `YYYY-MM-TT` (`Leto-Mesec-Dan`)         |
| 4 | `Time`                | Čas merjenja temperature              | Format: `hh-mm-ss` (`ura:minuta:sekunda`)       |
| 5 | `Temperature-Celsius` | Izmerjena vrednost temperature        | Enota: `Stopinje Celzija`                       |

Po potrebi lahko prenesete tudi priloženo vzorčno datoteko [temperatures.csv][]. Spodnja slika prikazuje to podatkovno datoteko, odprto v pregledničnem programu.

![Izvozna datoteka z vrednostmi telesne temperature, odprta v pregledničnem programu](../images/temperatures.png "Tabela vrednosti temperature")

[temperatures.csv]: /data-export/temperatures.csv

### Podatki o teži (`weights.csv`) {#weight-data-weightscsv}

- **Ime datoteke** `weights.csv`
- **Opis** Vrednosti teže, pridobljene z tehtanjem živali
- **Število stolpcev** 5

Vsaka vrstica tabele teže predstavlja eno tehtanje živali z uporabo naprave VitalControl za beleženje vrednosti teže. Primerna tabela teže ima torej naslednji videz:

{{% data-files/en_3 %}}

Naslednja tabela navaja in opisuje posamezne stolpce tabele, ki vsebuje težo živali:

| Stolpec | Ime stolpca          | Opis                                | Komentarji                                      |
|:-:|-----------------------|-------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-mestna številka tehtane živali    | v skladu z [ISO1174/85][], morda ni zabeleženo |
| 2 | `Farm-ID-Animal`      | Upravljalna številka tehtane živali  | 2- do 6 mest, pogosto enako številki ovratnika |
| 3 | `Date`                | Datum tehtanja                       | Format: `YYYY-MM-TT` (`Leto-Mesec-Dan`)        |
| 4 | `Time`                | Čas tehtanja                         | Format: `hh-mm-ss` (`ura:minuta:sekunda`)      |
| 5 | `Weight-Kg`           | Vrednost teže                        | Enota: `Kilogram`                              |

Če je potrebno, lahko prenesete tudi priloženo vzorčno datoteko [weights.csv][]. Spodnja slika prikazuje to izvozno datoteko, odprto v pregledničnem programu.

![Izvozna datoteka z vrednostmi teže živali, odprta v pregledničnem programu](../images/weights.png "Vrednosti teže v tabeli")

[weights.csv]: /data-export/weights.csv

### Ocene živali (`ratings.csv`) {#animal-ratings-ratingscsv}

- **Ime datoteke** `ratings.csv`
- **Opis** Ocene živali, pridobljene z vizualnim pregledom živali
- **Število stolpcev** 8

Vsaka vrstica tabele ocen živali predstavlja vizualno oceno ocenjevanja živali, izvedenega z VitalControl. Primer tabele z oceno živali ima naslednji videz:

{{% data-files/en_4 %}}

Naslednja tabela navaja in opisuje vsak stolpec tabele ocen živali:

| Stolpec | Ime stolpca           | Opis                                     | Komentarji                                      |
|:-:|-----------------------|-----------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-mestna številka ocenjene živali       | v skladu z [ISO1174/85][], morda ni zabeležena  |
| 2 | `Farm-ID-Animal`      | Upravljalna številka ocenjene živali     | 2- do 6-mestna, pogosto enaka številki ovratnika|
| 3 | `Date`                | Datum ocene                              | Format: `YYYY-MM-TT` (`Leto-Mesec-Dan`)         |
| 4 | `Time`                | Čas ocene                                | Format: `hh-mm-ss` (`ura:minuta:sekunda`)       |
| 5 | `ScoreCondition`      | Ocena splošnega stanja                   | _Ocene:_ `Rdeča`, `Rumena`, `Zelena`, `Brez`    |
| 6 | `ScoreFeedIntake`     | Ocena vnosa hrane                        | _Ocene:_ `Rdeča`, `Rumena`, `Zelena`, `Brez`    |
| 7 | `ScoreScours`         | Ocena stanja glede `Driske`              | _Ocene:_ `Rdeča`, `Rumena`, `Zelena`, `Brez`    |
| 8 | `ScoreRespiratory`    | Ocena stanja `Respiratornih bolezni`     | _Ocene:_ `Rdeča`, `Rumena`, `Zelena`, `Brez`    |

Če je potrebno, lahko prenesete tudi priloženo vzorčno datoteko [ratings.csv][]. Spodnja slika prikazuje to datoteko, odprto v pregledniškem programu.

![Izvoz datoteke z ocenami živali, odprte v pregledniškem programu](../images/ratings.png "Tabela ocen živali")

[ratings.csv]: /data-export/ratings.csv
