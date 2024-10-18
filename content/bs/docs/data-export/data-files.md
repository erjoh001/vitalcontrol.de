---
title: Struktura i sadržaj izvezenih CSV datoteka
linkTitle: Izvozne datoteke
date: 2023-07-20
weight: 30
description: >
  Opis strukture i sadržaja četiri datoteke koje se kreiraju tokom izvoza.
categories: [Izvoz podataka]
tags: [izvozne datoteke, temperature, težine, ocjene]
slug: export-files
translationKey: data-export/data-files
---
## Opće informacije {#general-information}

Prilikom izvoza podataka o životinjama, bez obzira da li na [USB flash drive][] ili na lokalni uređaj za masovno skladištenje [na PC-u][], u svakom slučaju se generiraju četiri izvozne datoteke:

- [Podaci o životinjama][] `(animals.csv)`
- [Podaci o tjelesnoj temperaturi][] `(temperatures.csv)`
- [Podaci o težini][] `(weights.csv)`
- [Ocjene životinja][] `(ratings.csv)`

[USB flash drive]: ../usb-drive/
[na PC-u]: ../pc/

[Podaci o životinjama]: #animal-data-animalscsv
[Podaci o tjelesnoj temperaturi]: #body-temperature-data-temperaturescsv
[Podaci o težini]: #weight-data-weightscsv
[Ocjene životinja]: #animal-ratings-ratingscsv

Sve četiri datoteke su čitljive [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) tekstualne datoteke. Datoteke su kodirane u `UTF-8` formatu, tačke-zarezi (`;`) se koriste kao separator kolona. Pojedinačna polja podataka *nisu* obuhvaćena navodnicima. Svaki red odgovarajuće tabele predstavlja skup podataka o životinji ili mjerenje ili procjenu izvršenu na životinji.

## Dalja obrada izvezenih podataka {#further-processing-of-exported-data}

Možete otvoriti svaku od ovih četiri izvoznih datoteka u programu za proračunske tablice po vašem izboru (kao što su [Microsoft Excel](https://products.office.com/excel) ili [OpenOffice Calc](https://www.openoffice.org/)) i tamo izvršiti naprednu analizu podataka. Kao primjer, prikazan je pogled tabele `animals.csv` u programu za proračunske tablice:

![Izvezeni podaci o životinjama, otvoreni u programu za proračunske tablice](../images/animals.png "Podaci o životinjama otvoreni u programu za proračunske tablice")

## Opis datoteka podataka {#description-of-data-files}

Sljedeća četiri odjeljka detaljno opisuju svaku od izvezenih datoteka podataka:

### Podaci o životinjama (`animals.csv`) {#animal-data-animalscsv}

- **Naziv datoteke** `animals.csv`
- **Opis** Opći podaci o životinjama
- **Broj kolona** 6

Svaki red u tabeli podataka o životinjama predstavlja jednu životinju pohranjenu na VitalControl. Primjerna tabela podataka o životinjama ima sljedeći izgled:

{{% data-files/en %}}

Sljedeća tabela navodi i opisuje svaku kolonu tabele podataka o životinjama:

|Kolona| Naziv kolone       | Opis                            | Komentari                                                  |
|:-:|----------------------|---------------------------------|-----------------------------------------------------------|
| 1 | `National-ID-Animal` | Službeni nacionalni broj životinje | 15 cifara prema [ISO1174/85][], možda nije zabilježeno    |
| 2 | `Farm-ID-Animal`     | Broj za upravljanje              | 2 do 6 cifara, često jednak broju na ogrlici              |
| 3 | `Transponder-ID`     | Broj transpondera                | može nedostajati, može biti identičan nacionalnom ID-u životinje |
| 4 | `DateOfBirth`        | Datum rođenja                    | Format: `YYYY-MM-TT` (`Godina-Mjesec-Dan`)                |
| 5 | `Sex`                | Spol                             | _Vrijednosti:_ `M`: muški, `F`: ženski, `?`: nepoznato    |
| 6 | `BirthWeight-Kg`     | Težina pri rođenju               | Jedinica: `kilogram`, možda nije zabilježeno / nedostaje  |

[ISO1174/85]: https://en.wikipedia.org/wiki/ISO_11784_and_ISO_11785

Ako je potrebno, možete preuzeti i primjer datoteke [animals.csv][].

[animals.csv]: /data-export/animals.csv

### Podaci o tjelesnoj temperaturi (`temperatures.csv`) {#body-temperature-data-temperaturescsv}

- **Naziv datoteke** `temperatures.csv`
- **Opis** Vrijednosti temperature, dobivene mjerenjem rektalne tjelesne temperature životinja.
- **Broj kolona** 5

Svaki red u tabeli podataka o temperaturi predstavlja mjerenje tjelesne temperature provedeno na životinji pomoću uređaja VitalControl. Primjerna tabela temperature ima sljedeći izgled:

{{% data-files/en_2 %}}

a
Sljedeća tabela navodi i opisuje svaku kolonu izvozne datoteke koja sadrži vrijednosti tjelesne temperature:

|Kolona| Naziv kolone        | Opis                                | Komentari                                        |
|:-:|-----------------------|--------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-cifreni broj izmjerene životinje  | prema [ISO1174/85][], možda nije zabilježeno     |
| 2 | `Farm-ID-Animal`      | Upravljački broj izmjerene životinje | 2 do 6 cifara, često jednak broju ogrlice       |
| 3 | `Date`                | Datum mjerenja temperature           | Format: `YYYY-MM-TT` (`Godina-Mjesec-Dan`)       |
| 4 | `Time`                | Vrijeme mjerenja temperature         | Format: `hh-mm-ss` (`sat:minuta:sekunda`)        |
| 5 | `Temperature-Celsius` | Izmjerena vrijednost temperature     | Jedinica: `Stepeni Celzijusa`                    |

Ako je potrebno, možete preuzeti i pruženi uzorak datoteke [temperatures.csv][]. Slika ispod prikazuje ovu datoteku otvorenu u programu za proračunske tablice.

![Izvozna datoteka s vrijednostima tjelesne temperature, otvorena u programu za proračunske tablice](../images/temperatures.png "Tabela vrijednosti temperature")

[temperatures.csv]: /data-export/temperatures.csv

### Podaci o težini (`weights.csv`) {#weight-data-weightscsv}

- **Naziv datoteke** `weights.csv`
- **Opis** Vrijednosti težine dobivene vaganjem životinja
- **Broj kolona** 5

Svaka linija tabele težine predstavlja jedno vaganje životinje pomoću uređaja VitalControl za bilježenje vrijednosti težine. Primjerna tabela težine ima sljedeći izgled:

{{% data-files/en_3 %}}

Sljedeća tabela navodi i opisuje pojedinačne kolone tabele koja sadrži težine životinja:

|Kolona| Naziv kolone        | Opis                                | Komentari                                        |
|:-:|-----------------------|--------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-cifreni broj vagane životinje     | prema [ISO1174/85][], možda nije zabilježeno     |
| 2 | `Farm-ID-Animal`      | Upravljački broj vagane životinje    | 2 do 6 cifara, često jednak broju ogrlice       |
| 3 | `Date`                | Datum vaganja                        | Format: `YYYY-MM-TT` (`Godina-Mjesec-Dan`)       |
| 4 | `Time`                | Vrijeme vaganja                      | Format: `hh-mm-ss` (`sat:minuta:sekunda`)        |
| 5 | `Weight-Kg`           | Vrijednost težine                    | Jedinica: `Kilogram`                             |

Ako je potrebno, možete preuzeti i priloženi uzorak datoteke [weights.csv][]. Slika ispod prikazuje ovu izvoznu datoteku otvorenu u programu za proračunske tablice.

![Izvozna datoteka s vrijednostima težine životinja, otvorena u programu za proračunske tablice](../images/weights.png "Vrijednosti težine u tablici")

[weights.csv]: /data-export/weights.csv

### Ocjene životinja (`ratings.csv`) {#animal-ratings-ratingscsv}

- **Naziv datoteke** `ratings.csv`
- **Opis** Ocjene životinja dobivene vizualnim pregledom životinja
- **Broj kolona** 8

Svaki redak tablice ocjena životinja predstavlja vizualnu ocjenu procjene životinje izvedene pomoću VitalControl-a. Primjer tablice s ocjenama životinja izgleda ovako:

{{% data-files/en_4 %}}

Sljedeća tablica navodi i opisuje svaku kolonu tablice ocjena životinja:

|Kolona| Naziv kolone        | Opis                                    | Komentari                                       |
|:-:|-----------------------|-----------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-cifreni broj ocijenjene životinje    | prema [ISO1174/85][], možda nije zabilježeno    |
| 2 | `Farm-ID-Animal`      | Broj za upravljanje ocijenjenom životinjom | 2 do 6 cifara, često jednak broju ogrlice      |
| 3 | `Date`                | Datum ocjene                            | Format: `YYYY-MM-TT` (`Godina-Mjesec-Dan`)      |
| 4 | `Time`                | Vrijeme ocjene                          | Format: `hh-mm-ss` (`sat:minuta:sekunda`)       |
| 5 | `ScoreCondition`      | Ocjena općeg stanja                     | _Ocjene:_ `Crvena`, `Žuta`, `Zelena`, `Nema`    |
| 6 | `ScoreFeedIntake`     | Ocjena unosa hrane                      | _Ocjene:_ `Crvena`, `Žuta`, `Zelena`, `Nema`    |
| 7 | `ScoreScours`         | Ocjena statusa u vezi s `Proljevom`     | _Ocjene:_ `Crvena`, `Žuta`, `Zelena`, `Nema`    |
| 8 | `ScoreRespiratory`    | Ocjena statusa `Respiratornih bolesti`  | _Ocjene:_ `Crvena`, `Žuta`, `Zelena`, `Nema`    |

Ako je potrebno, možete također preuzeti priloženi uzorak datoteke [ratings.csv][]. Slika ispod prikazuje ovu datoteku otvorenu u programu za proračunske tablice.

![Izvoz datoteke s ocjenama životinja, otvoren u programu za proračunske tablice](../images/ratings.png "Tabela ocjena životinja")

[ratings.csv]: /data-export/ratings.csv
