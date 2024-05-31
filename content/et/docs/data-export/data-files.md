---
title: Eksporditud CSV-andmefailide struktuur ja sisu
linkTitle: Ekspordifailid
date: 2023-07-20
weight: 30
description: >
  Kirjeldus nelja ekspordi käigus loodud andmefaili struktuuri ja sisu kohta.
categories: [Andmete eksport]
tags: [ekspordifailid, temperatuurid, kaalud, hinnangud]
slug: export-files
translationKey: data-export/data-files
---
## Üldine teave {#general-information}

Loomaandmete eksportimisel, olenemata kas [USB mälupulgale][] või kohalikule massmäluseadmele [arvutis][], genereeritakse igal juhul neli ekspordifaili:

- [Looma andmed][] `(animals.csv)`
- [Kehatemperatuuri andmed][] `(temperatures.csv)`
- [Kaalude andmed][] `(weights.csv)`
- [Looma hinnangud][] `(ratings.csv)`

[USB mälupulk]: ../usb-drive/
[arvutis]: ../pc/

[Looma andmed]: #animal-data-animalscsv
[Kehatemperatuuri andmed]: #body-temperature-data-temperaturescsv
[Kaalude andmed]: #weight-data-weightscsv
[Looma hinnangud]: #animal-ratings-ratingscsv

Kõik neli faili on inimloetavad [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) tekstifailid. Failid on kodeeritud `UTF-8` formaadis, veergude eraldajatena kasutatakse semikoolone (`;`). Üksikud andmeväljad ei ole jutumärkides. Iga vastava tabeli rida esindab looma andmekomplekti või loomale tehtud mõõtmist või hinnangut.

## Eksporditud andmete edasine töötlemine {#further-processing-of-exported-data}	

Iga nelja ekspordifaili saab avada teie valitud tabelarvutusprogrammis (näiteks [Microsoft Excel](https://products.office.com/excel) või [OpenOffice Calc](https://www.openoffice.org/)) ja seal andmete edasijõudnud analüüsi teostada. Näiteks on allpool näidatud tabeli `animals.csv` vaade tabelarvutusprogrammis:

![Eksporditud loomaandmed, avatud tabelarvutusprogrammis](../images/animals.png "Loomaandmed avatud tabelarvutusprogrammis")

## Andmefailide kirjeldus {#description-of-data-files}

Järgmised neli jaotist kirjeldavad üksikasjalikult iga eksporditud andmefaili:

### Looma andmed (`animals.csv`) {#animal-data-animalscsv}

- **Faili nimi** `animals.csv`
- **Kirjeldus** Üldised loomaandmed
- **Veergude arv** 6

Iga loomaandmete tabeli rida esindab ühte VitalControl'is salvestatud looma. Näidiskujul loomaandmete tabel näeb välja järgmiselt:

{{% data-files/en %}}

Järgnev tabel loetleb ja kirjeldab iga loomaandmete tabeli veergu:

|Veerg| Veeru nimi           | Kirjeldus                        | Kommentaarid                                               |
|:-:|----------------------|---------------------------------|-----------------------------------------------------------|
| 1 | `National-ID-Animal` | Ametlik riiklik loomanumber      | 15 numbrit vastavalt [ISO1174/85][], võib olla märkimata  |
| 2 | `Farm-ID-Animal`     | Majandamisnumber                 | 2 kuni 6 numbrit, tihti võrdne kaelarihmal oleva numbriga |
| 3 | `Transponder-ID`     | Transponderi number              | võib puududa, võib olla identne riikliku loomanumbriga    |
| 4 | `DateOfBirth`        | Sünnikuupäev                     | Formaat: `YYYY-MM-TT` (`Year-Month-Day`)                  |
| 5 | `Sex`                | Sugu                             | _Väärtused:_ `M`: isane, `F`: emane, `?`: teadmata        |
| 6 | `BirthWeight-Kg`     | Sünnikaal                        | Ühik: `kilogram`, võib olla märkimata / puuduv           |

[ISO1174/85]: https://en.wikipedia.org/wiki/ISO_11784_and_ISO_11785

Vajadusel saate alla laadida ka pakutud näidisfaili [animals.csv][].

[animals.csv]: /data-export/animals.csv

### Kehatemperatuuri andmed (`temperatures.csv`) {#body-temperature-data-temperaturescsv}

- **Faili nimi** `temperatures.csv`
- **Kirjeldus** Temperatuuri väärtused, saadud loomade rektaalse kehatemperatuuri mõõtmisel.
- **Veergude arv** 5

Iga temperatuuriandmete tabeli rida esindab VitalControl seadmega teostatud looma kehatemperatuuri mõõtmist. Näidiskujul temperatuuritabel näeb välja järgmiselt:

{{% data-files/en_2 %}}

Järgnev tabel loetleb ja kirjeldab iga veeru eksportfailis, mis sisaldab kehatemperatuuri väärtusi:

|Veeru| Veeru nimi           | Kirjeldus                            | Kommentaarid                                      |
|:-:|-----------------------|--------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-kohaline number mõõdetud loomale  | vastavalt [ISO1174/85][], võib olla salvestamata  |
| 2 | `Farm-ID-Animal`      | Mõõdetud looma haldusnumber          | 2 kuni 6 numbrit, tihti võrdne kaelarihma numbriga|
| 3 | `Date`                | Temperatuuri mõõtmise kuupäev        | Formaat: `YYYY-MM-TT` (`Year-Month-Day`)         |
| 4 | `Time`                | Temperatuuri mõõtmise aeg            | Formaat: `hh-mm-ss` (`hour:minute:second`)        |
| 5 | `Temperature-Celsius` | Mõõdetud temperatuuri väärtus        | Ühik: `Grad Celsius`                           |

Vajadusel saate alla laadida ka pakutud näidisfaili [temperatures.csv][]. Allpool olev joonis näitab seda andmefaili avatuna tabelarvutusprogrammis.

![Eksportfail kehatemperatuuri väärtustega, avatud tabelarvutusprogrammis](../images/temperatures.png "Tabeli temperatuuri väärtused")

[temperatures.csv]: /data-export/temperatures.csv

### Kaalu andmed (`weights.csv`) {#weight-data-weightscsv}

- **Faili nimi** `weights.csv`
- **Kirjeldus** Loomade kaalumisel saadud kaalu väärtused
- **Veerude arv** 5

Iga kaalutabeli rida esindab ühte looma kaalumist VitalControl seadmega kaalu väärtuse salvestamiseks. Näidiskaalutabel näeb seega välja järgmine:

{{% data-files/en_3 %}}

Järgnev tabel loetleb ja kirjeldab loomade kaalude tabeli üksikuid veerge:

|Veerg| Veeru nimi           | Kirjeldus                           | Kommentaarid                                    |
|:-:|-----------------------|-------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`     | 15-kohaline number kaalutud loomale | vastavalt [ISO1174/85][], võib olla salvestamata|
| 2 | `Farm-ID-Animal`       | Kaalutud looma haldusnumber         | 2 kuni 6 numbrit, tihti võrdne kaelarihma numbriga |
| 3 | `Date`             | Kaalumise kuupäev                   | Formaat: `YYYY-MM-TT` (`Year-Month-Day`)        |
| 4 | `Time`                 | Kaalumise aeg                       | Formaat: `hh-mm-ss` (`hour:minute:second`)       |
| 5 | `Weight-Kg`             | Kaalu väärtus                       | Ühik: `Kilogram`                               |

Vajadusel saate alla laadida ka pakutud näidisfaili [weights.csv][]. Allpool olev joonis näitab seda eksportfaili avatuna tabelarvutusprogrammis.

![Eksportfail loomade kaaluväärtustega, avatud tabelarvutusprogrammis](../images/weights.png "Tabeli kaaluväärtused")

[weights.csv]: /data-export/weights.csv

### Loomade hinnangud (`ratings.csv`) {#animal-ratings-ratingscsv}

- **Faili nimi** `ratings.csv`
- **Kirjeldus** Loomade hinnangud, mis saadud loomi visuaalselt hinnates
- **Veergude arv** 8

Iga loomade hinnangute tabeli rida esindab visuaalset hinnangut looma hindamisel VitalControliga. Näidistabel looma hinnanguga on järgmine:

{{% data-files/en_4 %}}

Järgnev tabel loetleb ja kirjeldab iga loomade hinnangute tabeli veergu:

|Veerg| Veeru nimi           | Kirjeldus                               | Kommentaarid                                      |
|:-:|-----------------------|-----------------------------------------|---------------------------------------------------|
| 1 | `National-ID-Animal`     | 15-kohaline number hinnatud loomale     | vastavalt [ISO1174/85][], võib olla salvestamata  |
| 2 | `Farm-ID-Animal`       | Hinnatud looma haldusnumber             | 2 kuni 6 numbrit, tihti võrdne kaelarihma numbriga|
| 3 | `Date`             | Hinnangu kuupäev                        | Formaat: `YYYY-MM-TT` (`Year-Month-Day`)          |
| 4 | `Time`                 | Hinnangu aeg                            | Formaat: `hh-mm-ss` (`hour:minute:second`)         |
| 5 | `ScoreCondition`   | Üldseisundi hinnang                     | _Hinnangud:_ `Red`, `Yellow`, `Green`, `None` |
| 6 | `ScoreFeedIntake`     | Söödavõtu hinnang                       | _Hinnangud:_ `Red`, `Yellow`, `Green`, `None` |
| 7 | `ScoreScours` | Kõhulahtisuse seisundi hinnang          | _Hinnangud:_ `Red`, `Yellow`, `Green`, `None` |
| 8 | `None` | Hingamisteede haiguste seisundi hinnang | _Hinnangud:_ `Red`, `Yellow`, `Green`, `None` |

Vajadusel saate alla laadida ka pakutud näidisfaili [ratings.csv][]. Allpool olev joonis näitab seda faili avatuna tabelarvutusprogrammis.

![Ekspordifail loomade hinnangutega, avatud tabelarvutusprogrammis](../images/ratings.png "Tabel loomade hinnangud")

[ratings.csv]: /data-export/ratings.csv
