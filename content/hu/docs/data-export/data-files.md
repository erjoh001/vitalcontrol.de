---
title: Az exportált CSV adatfájlok szerkezete és tartalma
linkTitle: Export fájlok
date: 2023-07-20
weight: 30
description: >
  Az export során létrehozott négy adatfájl szerkezetének és tartalmának leírása.
kategóriák: [Adat exportálás]
címkék: [export fájlok, hőmérsékletek, súlyok, értékelések]
slug: export-files
translationKey: data-export/data-files
---
## Általános információk {#general-information}

Az állati adatok exportálásakor, függetlenül attól, hogy [USB flash meghajtóra][] vagy a [PC-n lévő helyi tömegtároló eszközre][] történik, minden esetben négy export fájl jön létre:

- [Állati adatok][] `(animals.csv)`
- [Testhőmérséklet adatok][] `(temperatures.csv)`
- [Súly adatok][] `(weights.csv)`
- [Állati értékelések][] `(ratings.csv)`

[USB flash meghajtóra]: ../usb-drive/
[PC-n lévő helyi tömegtároló eszközre]: ../pc/

[Állati adatok]: #animal-data-animalscsv
[Testhőmérséklet adatok]: #body-temperature-data-temperaturescsv
[Súly adatok]: #weight-data-weightscsv
[Állati értékelések]: #animal-ratings-ratingscsv

Mind a négy fájl ember által olvasható [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) szövegfájl. A fájlok `UTF-8` formátumban vannak kódolva, pontosvesszők (`;`) szolgálnak oszlopelválasztóként. Az egyes adatmezők *nincsenek* idézőjelek közé zárva. Az adott táblázat minden sora egy állati adatállományt vagy egy állaton végzett mérést vagy értékelést képvisel.

## Az exportált adatok további feldolgozása {#further-processing-of-exported-data}
 
Ezeket a négy export fájlt megnyithatja egy tetszőleges táblázatkezelő programban (például [Microsoft Excel](https://products.office.com/excel) vagy [OpenOffice Calc](https://www.openoffice.org/)), és ott végezhet fejlett elemzéseket az adatokon. Példaként az `animals.csv` táblázat nézete egy táblázatkezelő programban az alábbiakban látható:

![Exportált állati adatok, megnyitva egy táblázatkezelő programban](../images/animals.png "Állati adatok megnyitva táblázatkezelő programban")

## Adatfájlok leírása {#description-of-data-files}

A következő négy szakasz részletesen leírja az egyes exportált adatfájlokat:

### Állati adatok (`animals.csv`) {#animal-data-animalscsv}

- **Fájlnév** `animals.csv`
- **Leírás** Általános állati adatok
- **Oszlopok száma** 6

Az állatadatok táblázatának minden sora egy állatot képvisel, amely a VitalControl-on van tárolva. Egy példa állatadatok táblázat így néz ki:

{{% data-files/en %}}

Az alábbi táblázat felsorolja és leírja az állatadatok táblázatának minden oszlopát:

|Oszlop| Oszlop neve         | Leírás                          | Megjegyzések                                               |
|:-:|----------------------|---------------------------------|-----------------------------------------------------------|
| 1 | `National-ID-Animal` | Hivatalos nemzeti állatszám      | 15 számjegy az [ISO1174/85][] szerint, lehet, hogy nincs rögzítve |
| 2 | `Farm-ID-Animal`     | Gazdasági szám                   | 2-6 számjegy, gyakran megegyezik a nyakörv számával        |
| 3 | `Transponder-ID`     | Transzponder szám                | hiányozhat, lehet, hogy megegyezik a nemzeti állatszámmal  |
| 4 | `DateOfBirth`        | Születési dátum                  | Formátum: `YYYY-MM-TT` (`Year-Month-Day`)                    |
| 5 | `Sex`                | Nem                             | _Értékek:_ `M`: hím, `F`: nőstény, `?`: ismeretlen         |
| 6 | `BirthWeight-Kg`     | Születési súly                   | Egység: `kilogram`, lehet, hogy nincs rögzítve / hiányzik |

[ISO1174/85]: https://en.wikipedia.org/wiki/ISO_11784_and_ISO_11785

Szükség esetén letöltheti a mellékelt minta fájlt is [animals.csv][].

[animals.csv]: /data-export/animals.csv

### Testhőmérséklet adatok (`temperatures.csv`) {#body-temperature-data-temperaturescsv}

- **Fájlnév** `temperatures.csv`
- **Leírás** Hőmérsékleti értékek, amelyeket az állatok rektális testhőmérsékletének mérésével nyertek.
- **Oszlopok száma** 5

A hőmérséklet adatok táblázatának minden sora egy testhőmérséklet mérést képvisel, amelyet egy állaton végeztek a VitalControl eszközzel. Egy példa hőmérséklet táblázat így néz ki:

{{% data-files/en_2 %}}

Az alábbi táblázat felsorolja és leírja az export fájl minden oszlopát, amely a testhőmérséklet értékeit tartalmazza:

|Oszlop| Oszlop neve         | Leírás                              | Megjegyzések                                     |
|:-:|-----------------------|--------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`  | Mért állat 15 jegyű száma            | az [ISO1174/85][] szerint, esetleg nem rögzített |
| 2 | `Farm-ID-Animal`      | Mért állat kezelési száma            | 2-6 számjegy, gyakran azonos a nyakörv számával  |
| 3 | `Date`                | A hőmérséklet mérésének dátuma       | Formátum: `YYYY-MM-TT` (`Year-Month-Day`)          |
| 4 | `Time`                | A hőmérséklet mérésének időpontja    | Formátum: `hh-mm-ss` (`hour:minute:second`)      |
| 5 | `Temperature-Celsius` | Mért hőmérséklet értéke              | Egység: `Grad Celsius`                            |

Szükség esetén letöltheti a megadott mintafájlt is [temperatures.csv][]. Az alábbi ábra ezt az adatfájlt mutatja megnyitva egy táblázatkezelő programban.

![Export fájl testhőmérséklet értékekkel, megnyitva táblázatkezelő programban](../images/temperatures.png "Táblázat hőmérséklet értékek")

[temperatures.csv]: /data-export/temperatures.csv

### Súly adatok (`weights.csv`) {#weight-data-weightscsv}

- **Fájlnév** `weights.csv`
- **Leírás** Állatok mérésével nyert súlyértékek
- **Oszlopok száma** 5

A súlytábla minden sora egy állat mérését képviseli a VitalControl eszközzel a súlyérték rögzítéséhez. Egy példaszerű súlytábla tehát a következőképpen néz ki:

{{% data-files/en_3 %}}

Az alábbi táblázat felsorolja és leírja az állatok súlyát tartalmazó táblázat egyes oszlopait:

|Oszlop| Oszlop neve        | Leírás                              | Megjegyzések                                    |
|:-:|-----------------------|-------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | A lemért állat 15 számjegyű azonosítója | az [ISO1174/85][] szerint, esetleg nincs rögzítve |
| 2 | `Farm-ID-Animal`      | A lemért állat kezelési száma       | 2-6 számjegy, gyakran megegyezik a nyakörv számával |
| 3 | `Date`                | A mérés dátuma                      | Formátum: `YYYY-MM-TT` (`Year-Month-Day`)         |
| 4 | `Time`                | A mérés ideje                       | Formátum: `hh-mm-ss` (`hour:minute:second`)     |
| 5 | `Weight-Kg`           | Súlyérték                           | Egység: `Kilogram`                             |

Szükség esetén letöltheti a mellékelt mintafájlt is [weights.csv][]. Az alábbi ábra ezt az exportfájlt mutatja egy táblázatkezelő programban megnyitva.

![Export fájl állatsúly értékekkel, táblázatkezelő programban megnyitva](../images/weights.png "Táblázat súlyértékek")

[weights.csv]: /data-export/weights.csv

### Állatértékelések (`ratings.csv`) {#animal-ratings-ratingscsv}

- **Fájlnév** `ratings.csv`
- **Leírás** Az állatok vizuális ellenőrzésével nyert állatértékelések
- **Oszlopok száma** 8

Az állatértékelések táblázatának minden sora egy állat VitalControl-lal végzett vizuális értékelését képviseli. Egy példa az állatértékelési táblázatra a következőképpen néz ki:

{{% data-files/en_4 %}}

Az alábbi táblázat felsorolja és leírja az állatértékelési táblázat egyes oszlopait:


|Oszlop| Oszlop neve        | Leírás                                  | Megjegyzések                                   |
|:-:|-----------------------|-----------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | Értékelt állat 15 számjegyű azonosítója | az [ISO1174/85][] szerint, lehet, hogy nincs rögzítve |
| 2 | `Farm-ID-Animal`      | Értékelt állat kezelési száma           | 2-6 számjegy, gyakran megegyezik a nyakörv számával |
| 3 | `Date`                | Értékelés dátuma                        | Formátum: `YYYY-MM-TT` (`Year-Month-Day`)         |
| 4 | `Time`                | Értékelés ideje                         | Formátum: `hh-mm-ss` (`hour:minute:second`)     |
| 5 | `ScoreCondition`      | Általános állapot értékelése            | _Értékelések:_ `Red`, `Yellow`, `Green`, `None` |
| 6 | `ScoreFeedIntake`     | Takarmányfelvétel értékelése            | _Értékelések:_ `Red`, `Yellow`, `Green`, `None` |
| 7 | `ScoreScours`         | `Scours` állapotának értékelése       | _Értékelések:_ `Red`, `Yellow`, `Green`, `None` |
| 8 | `ScoreRespiratory`    | `Respiratory diseases` állapotának értékelése | _Értékelések:_ `Red`, `Yellow`, `Green`, `None` |

Ha szükséges, letöltheti a mellékelt mintafájlt is [ratings.csv][]. Az alábbi ábra ezt a fájlt mutatja egy táblázatkezelő programban megnyitva.

![Állatok értékelésének export fájlja, táblázatkezelő programban megnyitva](../images/ratings.png "Állatok értékelésének táblázata")

[ratings.csv]: /data-export/ratings.csv
