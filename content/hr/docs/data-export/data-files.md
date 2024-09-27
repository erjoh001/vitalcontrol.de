---
title: Struktura i sadržaj izvezenih CSV datoteka
linkTitle: Izvozne datoteke
date: 2023-07-20
weight: 30
description: >
  Opis strukture i sadržaja četiri datoteke s podacima koje se kreiraju tijekom izvoza.
categories: [Izvoz podataka]
tags: [izvozne datoteke, temperature, težine, ocjene]
slug: export-files
translationKey: data-export/data-files
---
## Opće informacije {#general-information}

Prilikom izvoza podataka o životinjama, bez obzira na to je li na [USB flash pogon][] ili na lokalni uređaj za pohranu [na računalu][], u svakom se slučaju generiraju četiri izvozne datoteke:

- [Podaci o životinjama][] `(animals.csv)`
- [Podaci o tjelesnoj temperaturi][] `(temperatures.csv)`
- [Podaci o težini][] `(weights.csv)`
- [Ocjene životinja][] `(ratings.csv)`

[USB flash pogon]: ../usb-drive/
[na računalu]: ../pc/

[Podaci o životinjama]: #animal-data-animalscsv
[Podaci o tjelesnoj temperaturi]: #body-temperature-data-temperaturescsv
[Podaci o težini]: #weight-data-weightscsv
[Ocjene životinja]: #animal-ratings-ratingscsv

Sve četiri datoteke su čitljive [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) tekstualne datoteke. Datoteke su kodirane u `UTF-8` formatu, a točke sa zarezom (`;`) se koriste kao razdjelnici stupaca. Pojedinačna polja podataka *nisu* obuhvaćena navodnicima. Svaki redak odgovarajuće tablice predstavlja skup podataka o životinji ili mjerenje ili procjenu izvršenu na životinji.

## Daljnja obrada izvezenih podataka {#further-processing-of-exported-data}

Svaku od ovih četiri izvoznih datoteka možete otvoriti u programu za proračunske tablice po vašem izboru (kao što su [Microsoft Excel](https://products.office.com/excel) ili [OpenOffice Calc](https://www.openoffice.org/)) i tamo izvršiti naprednu analizu podataka. Kao primjer, prikazan je pogled tablice `animals.csv` u programu za proračunske tablice:

![Izvezeni podaci o životinjama, otvoreni u programu za proračunske tablice](../images/animals.png "Podaci o životinjama otvoreni u programu za proračunske tablice")

## Opis datoteka s podacima {#description-of-data-files}

Sljedeća četiri odjeljka detaljno opisuju svaku od izvezenih datoteka s podacima:

### Podaci o životinjama (`animals.csv`) {#animal-data-animalscsv}

- **Naziv datoteke** `animals.csv`
- **Opis** Opći podaci o životinjama
- **Broj stupaca** 6

Svaki redak tablice podataka o životinjama predstavlja jednu životinju pohranjenu na VitalControl. Primjer tablice podataka o životinjama izgleda ovako:

{{% data-files/en %}}

Sljedeća tablica navodi i opisuje svaki stupac tablice podataka o životinjama:

|Stupac| Naziv stupca       | Opis                           | Komentari                                                  |
|:-:|----------------------|---------------------------------|-----------------------------------------------------------|
| 1 | `National-ID-Animal` | Službeni nacionalni broj životinje | 15 znamenki prema [ISO1174/85][], možda nije zabilježeno |
| 2 | `Farm-ID-Animal`     | Broj upravljanja                | 2 do 6 znamenki, često jednak broju na ogrlici           |
| 3 | `Transponder-ID`     | Broj transpondera               | može nedostajati, može biti identičan s nacionalnim ID-om životinje |
| 4 | `DateOfBirth`        | Datum rođenja                   | Format: `YYYY-MM-TT` (`Godina-Mjesec-Dan`)                |
| 5 | `Sex`                | Spol                            | _Vrijednosti:_ `M`: muški, `F`: ženski, `?`: nepoznato    |
| 6 | `BirthWeight-Kg`     | Porodna težina                  | Jedinica: `kilogram`, možda nije zabilježeno / nedostaje  |

[ISO1174/85]: https://en.wikipedia.org/wiki/ISO_11784_and_ISO_11785

Ako je potrebno, možete preuzeti i priloženu primjer datoteku [animals.csv][].

[animals.csv]: /data-export/animals.csv

### Podaci o tjelesnoj temperaturi (`temperatures.csv`) {#body-temperature-data-temperaturescsv}

- **Naziv datoteke** `temperatures.csv`
- **Opis** Vrijednosti temperature, dobivene mjerenjem rektalne tjelesne temperature životinja.
- **Broj stupaca** 5

Svaki redak tablice podataka o temperaturi predstavlja mjerenje tjelesne temperature provedeno na životinji pomoću uređaja VitalControl. Primjer tablice temperature izgleda ovako:

{{% data-files/en_2 %}}

a
Sljedeća tablica navodi i opisuje svaki stupac izvozne datoteke koja sadrži vrijednosti tjelesne temperature:

|Stupac| Naziv stupca       | Opis                                | Komentari                                        |
|:-:|-----------------------|--------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-znamenkasti broj mjerenog životinje | prema [ISO1174/85][], možda nije zabilježeno     |
| 2 | `Farm-ID-Animal`      | Upravljački broj mjerenog životinje  | 2 do 6 znamenki, često jednak broju ogrlice     |
| 3 | `Date`                | Datum mjerenja temperature           | Format: `YYYY-MM-TT` (`Godina-Mjesec-Dan`)       |
| 4 | `Time`                | Vrijeme mjerenja temperature         | Format: `hh-mm-ss` (`sat:minuta:sekunda`)        |
| 5 | `Temperature-Celsius` | Izmjerena vrijednost temperature     | Jedinica: `Stupanj Celzijusa`                    |

Ako je potrebno, možete preuzeti i priloženu uzornu datoteku [temperatures.csv][]. Slika ispod prikazuje ovu datoteku podataka otvorenu u programu za proračunske tablice.

![Izvozna datoteka s vrijednostima tjelesne temperature, otvorena u programu za proračunske tablice](../images/temperatures.png "Tablica vrijednosti temperature")

[temperatures.csv]: /data-export/temperatures.csv

### Podaci o težini (`weights.csv`) {#weight-data-weightscsv}

- **Naziv datoteke** `weights.csv`
- **Opis** Vrijednosti težine dobivene vaganjem životinja
- **Broj stupaca** 5

Svaki redak tablice težine predstavlja jedno vaganje životinje pomoću uređaja VitalControl za bilježenje vrijednosti težine. Primjerna tablica težine stoga ima sljedeći izgled:

{{% data-files/en_3 %}}

Sljedeća tablica navodi i opisuje pojedinačne stupce tablice koja sadrži težine životinja:

|Stupac| Naziv stupca       | Opis                                | Komentari                                        |
|:-:|-----------------------|--------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-znamenkasti broj vagane životinje | prema [ISO1174/85][], možda nije zabilježeno     |
| 2 | `Farm-ID-Animal`      | Upravljački broj vagane životinje    | 2 do 6 znamenki, često jednak broju ogrlice     |
| 3 | `Date`                | Datum vaganja                        | Format: `YYYY-MM-TT` (`Godina-Mjesec-Dan`)       |
| 4 | `Time`                | Vrijeme vaganja                      | Format: `hh-mm-ss` (`sat:minuta:sekunda`)        |
| 5 | `Weight-Kg`           | Vrijednost težine                    | Jedinica: `Kilogram`                             |

Ako je potrebno, možete preuzeti i priloženu uzornu datoteku [weights.csv][]. Slika ispod prikazuje ovu izvoznu datoteku otvorenu u programu za proračunske tablice.

![Izvozna datoteka s vrijednostima težine životinja, otvorena u programu za proračunske tablice](../images/weights.png "Tablica vrijednosti težine")

[weights.csv]: /data-export/weights.csv

### Ocjene životinja (`ratings.csv`) {#animal-ratings-ratingscsv}

- **Naziv datoteke** `ratings.csv`
- **Opis** Ocjene životinja dobivene vizualnim pregledom životinja
- **Broj stupaca** 8

Svaki redak tablice ocjena životinja predstavlja vizualnu ocjenu procjene životinje izvedene pomoću VitalControl-a. Primjer tablice s ocjenama životinja izgleda ovako:

{{% data-files/en_4 %}}

Sljedeća tablica navodi i opisuje svaki stupac tablice ocjena životinja:

|Stupac| Naziv stupca        | Opis                                    | Komentari                                       |
|:-:|-----------------------|-----------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-znamenkasti broj ocijenjene životinje | prema [ISO1174/85][], možda nije zabilježeno    |
| 2 | `Farm-ID-Animal`      | Upravljački broj ocijenjene životinje    | 2 do 6 znamenki, često jednak broju ogrlice    |
| 3 | `Date`                | Datum ocjene                             | Format: `YYYY-MM-TT` (`Godina-Mjesec-Dan`)      |
| 4 | `Time`                | Vrijeme ocjene                           | Format: `hh-mm-ss` (`sat:minuta:sekunda`)       |
| 5 | `ScoreCondition`      | Ocjena općeg stanja                      | _Ocjene:_ `Crvena`, `Žuta`, `Zelena`, `Nema`    |
| 6 | `ScoreFeedIntake`     | Ocjena unosa hrane                       | _Ocjene:_ `Crvena`, `Žuta`, `Zelena`, `Nema`    |
| 7 | `ScoreScours`         | Ocjena statusa u vezi `Proljeva`         | _Ocjene:_ `Crvena`, `Žuta`, `Zelena`, `Nema`    |
| 8 | `ScoreRespiratory`    | Ocjena statusa `Respiratornih bolesti`   | _Ocjene:_ `Crvena`, `Žuta`, `Zelena`, `Nema`    |

Ako je potrebno, možete također preuzeti priloženu uzorku datoteku [ratings.csv][]. Slika ispod prikazuje ovu datoteku otvorenu u programu za proračunske tablice.

![Izvoz datoteke s ocjenama životinja, otvoren u programu za proračunske tablice](../images/ratings.png "Tablica ocjena životinja")

[ratings.csv]: /data-export/ratings.csv
