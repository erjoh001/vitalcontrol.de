---
title: Struktura a obsah exportovaných CSV datových souborů
linkTitle: Exportní soubory
date: 2023-07-20
weight: 30
description: >
  Popis struktury a obsahu čtyř datových souborů vytvořených během exportu.
categories: [Export dat]
tags: [exportní soubory, teploty, hmotnosti, hodnocení]
slug: export-files
translationKey: data-export/data-files
---
## Obecné informace {#general-information}

Při exportu dat o zvířatech, ať už na [USB flash disk][] nebo na místní úložné zařízení [na PC][], jsou v každém případě generovány čtyři exportní soubory:

- [Data o zvířatech][] `(animals.csv)`
- [Data o tělesné teplotě][] `(temperatures.csv)`
- [Data o hmotnosti][] `(weights.csv)`
- [Hodnocení zvířat][] `(ratings.csv)`

[USB flash disk]: ../usb-drive/
[na PC]: ../pc/

[Data o zvířatech]: #animal-data-animalscsv
[Data o tělesné teplotě]: #body-temperature-data-temperaturescsv
[Data o hmotnosti]: #weight-data-weightscsv
[Hodnocení zvířat]: #animal-ratings-ratingscsv

Všechny čtyři soubory jsou čitelné pro člověka jako textové soubory ve formátu [CSV](https://en.wikipedia.org/wiki/Comma-separated_values). Soubory jsou kódovány ve formátu `UTF-8`, jako oddělovače sloupců jsou použity středníky (`;`). Jednotlivá datová pole nejsou uzavřena v uvozovkách. Každý řádek příslušné tabulky představuje datový záznam o zvířeti nebo měření či hodnocení provedené na zvířeti.

## Další zpracování exportovaných dat {#further-processing-of-exported-data}	

Každý z těchto čtyř exportních souborů můžete otevřít v tabulkovém programu dle vašeho výběru (například [Microsoft Excel](https://products.office.com/excel) nebo [OpenOffice Calc](https://www.openoffice.org/)) a provádět tam pokročilou analýzu dat. Jako příklad je níže uveden pohled na tabulku `animals.csv` v tabulkovém programu:

![Exportovaná data o zvířatech, otevřená v tabulkovém programu](../images/animals.png "Data o zvířatech otevřená v tabulkovém programu")

## Popis datových souborů {#description-of-data-files}

Následující čtyři sekce podrobně popisují každý z exportovaných datových souborů:

### Data o zvířatech (`animals.csv`) {#animal-data-animalscsv}

- **Název souboru** `animals.csv`
- **Popis** Obecná data o zvířatech
- **Počet sloupců** 6

Každý řádek tabulky dat o zvířatech představuje jedno zvíře uložené na VitalControl. Ukázková tabulka dat o zvířatech má tedy následující vzhled:

```csv
National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg
276000312341001;1001;276000312341001;2023-07-03;F;
276000312341002;1002;276000312341002;2023-07-04;F;40.8
276000312341003;1003;276000312341003;2023-07-05;F;38.3
…
```

Následující tabulka uvádí a popisuje jednotlivé sloupce tabulky dat o zvířatech:

|Sloupec| Název sloupce         | Popis                              | Komentáře                                                  |
|:-:|--------------------------|------------------------------------|------------------------------------------------------------|
| 1 | `National-ID-Animal`     | Oficiální národní číslo zvířete    | 15 číslic podle [ISO1174/85][], může být nezaznamenáno     |
| 2 | `Farm-ID-Animal`         | Správní číslo                      | 2 až 6 číslic, často shodné s číslem na obojku             |
| 3 | `Transponder-ID`         | Číslo transpondéru                 | může chybět, může být shodné s národním číslem zvířete     |
| 4 | `DateOfBirth`            | Datum narození                     | Formát: `YYYY-MM-TT` (`Rok-Měsíc-Den`)                     |
| 5 | `Sex`                    | Pohlaví                            | _Hodnoty:_ `M`: samec, `F`: samice, `?`: neznámé           |
| 6 | `BirthWeight-Kg`         | Porodní hmotnost                   | Jednotka: `kilogram`, může být nezaznamenáno / chybí       |

[ISO1174/85]: https://en.wikipedia.org/wiki/ISO_11784_and_ISO_11785

Pokud je potřeba, můžete si také stáhnout poskytnutý vzorový soubor [animals.csv][].

[animals.csv]: /data-export/animals.csv

### Data tělesné teploty (`temperatures.csv`) {#body-temperature-data-temperaturescsv}

- **Název souboru** `temperatures.csv`
- **Popis** Hodnoty teploty, získané měřením rektální tělesné teploty zvířat.
- **Počet sloupců** 5

Každý řádek tabulky dat o teplotě představuje měření tělesné teploty provedené na zvířeti pomocí zařízení VitalControl. Ukázková tabulka teplot má tedy následující vzhled:

```csv
National-ID-Animal;Farm-ID-Animal;Date;Time;Temperature-Celsius
276000312341001;1001;276000312341001;2023-07-24;38.03
276000312341002;1002;276000312341002;2023-07-24;40.12
276000312341003;1003;276000312341003;2023-07-24;39.97
…
```

Následující tabulka uvádí a popisuje každý sloupec exportního souboru obsahujícího hodnoty tělesné teploty:

|Sloupec| Název sloupce       | Popis                                | Komentáře                                        |
|:-:|-----------------------|--------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`  | 15místné číslo měřeného zvířete       | podle [ISO1174/85][], možná není zaznamenáno     |
| 2 | `Farm-ID-Animal`      | Správní číslo měřeného zvířete        | 2 až 6 číslic, často shodné s číslem obojku      |
| 3 | `Date`                | Datum měření teploty                  | Formát: `YYYY-MM-TT` (`Rok-Měsíc-Den`)           |
| 4 | `Time`                | Uhrzeit der Temperaturmessung         | Formát: `hh-mm-ss` (`hodina:minuta:vteřina`)     |
| 5 | `Temperature-Celsius` | Naměřená hodnota teploty              | Jednotka: `Stupeň Celsia`                        |

Pokud je to potřeba, můžete si také stáhnout poskytnutý vzorový soubor [temperatures.csv][]. Obrázek níže ukazuje tento datový soubor otevřený v tabulkovém programu.

![Exportní soubor s hodnotami tělesné teploty, otevřený v tabulkovém programu](../images/temperatures.png "Tabulka hodnot teploty")

[temperatures.csv]: /data-export/temperatures.csv

### Údaje o hmotnosti (`weights.csv`) {#weight-data-weightscsv}

- **Název souboru** `weights.csv`
- **Popis** Hodnoty hmotnosti získané vážením zvířat
- **Počet sloupců** 5

Každý řádek tabulky hmotnosti představuje jedno vážení zvířete pomocí zařízení VitalControl pro zaznamenávání hodnoty hmotnosti. Ukázková tabulka hmotnosti má tedy následující vzhled:

```csv
National-ID-Animal;Farm-ID-Animal;Date;Time;Weight-Kg
276000312341001;1001;276000312341001;2023-07-24;67.8
276000312341002;1002;276000312341002;2023-07-24;F;40.4
276000312341003;1003;276000312341003;2023-07-24;F;104.2
…
```

Následující tabulka uvádí a popisuje jednotlivé sloupce tabulky obsahující hmotnosti zvířat:

|Sloupec| Název sloupce      | Popis                               | Komentáře                                       |
|:-:|-----------------------|-------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | 15místné číslo váženého zvířete      | podle [ISO1174/85][], možná není zaznamenáno    |
| 2 | `Farm-ID-Animal`      | Správní číslo váženého zvířete       | 2 až 6 číslic, často shodné s číslem obojku     |
| 3 | `Date`                | Datum vážení                        | Formát: `YYYY-MM-TT` (`Rok-Měsíc-Den`)          |
| 4 | `Time`                | Čas vážení                          | Formát: `hh-mm-ss` (`hodina:minuta:vteřina`)    |
| 5 | `Weight-Kg`           | Hodnota hmotnosti                   | Jednotka: `Kilogram`                            |

Pokud je to potřeba, můžete si také stáhnout poskytnutý vzorový soubor [weights.csv][]. Následující obrázek ukazuje tento exportní soubor otevřený v tabulkovém programu.

![Exportní soubor s hodnotami hmotnosti zvířat, otevřený v tabulkovém programu](../images/weights.png "Tabulka hodnot hmotnosti")

[weights.csv]: /data-export/weights.csv

### Hodnocení zvířat (`ratings.csv`) {#animal-ratings-ratingscsv}

- **Název souboru** `ratings.csv`
- **Popis** Hodnocení zvířat získané vizuální kontrolou zvířat
- **Počet sloupců** 8

Každý řádek tabulky hodnocení zvířat představuje vizuální hodnocení zvířete provedené pomocí VitalControl. Ukázková tabulka s hodnocením zvířat má následující vzhled:

```csv
National-ID-Animal;Farm-ID-Animal;Date;Time;ScoreCondition;ScoreFeedIntake;ScoreScours;ScoreRespiratory
276000312341001;1001;276000312341001;2023-07-24;Green;Yellow;Yellow;Green
276000312341002;1002;276000312341002;2023-07-24;Yellow;Yellow;Yellow;Red
276000312341003;1003;276000312341003;2023-07-24;Green;None;None;None
…
```

Následující tabulka uvádí a popisuje jednotlivé sloupce tabulky hodnocení zvířat:


|Sloupec| Název sloupce      | Popis                                   | Komentáře                                       |
|:-:|-----------------------|-----------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | 15místné číslo hodnoceného zvířete      | podle [ISO1174/85][], možná nezaznamenáno       |
| 2 | `Farm-ID-Animal`      | Správní číslo hodnoceného zvířete       | 2 až 6 číslic, často shodné s číslem obojku     |
| 3 | `Date`                | Datum hodnocení                         | Formát: `YYYY-MM-TT` (`Rok-Měsíc-Den`)          |
| 4 | `Time`                | Čas hodnocení                           | Formát: `hh-mm-ss` (`hodina:minuta:vteřina`)    |
| 5 | `ScoreCondition`      | Hodnocení celkového stavu               | _Hodnocení:_ `Červená`, `Žlutá`, `Zelená`, `Žádná` |
| 6 | `ScoreFeedIntake`     | Hodnocení příjmu krmiva                 | _Hodnocení:_ `Červená`, `Žlutá`, `Zelená`, `Žádná` |
| 7 | `ScoreScours`         | Hodnocení stavu týkajícího se `Průjmu`  | _Hodnocení:_ `Červená`, `Žlutá`, `Zelená`, `Žádná` |
| 8 | `ScoreRespiratory`    | Hodnocení stavu `Respiračních onemocnění` | _Hodnocení:_ `Červená`, `Žlutá`, `Zelená`, `Žádná` |

Pokud je to nutné, můžete si také stáhnout poskytnutý vzorový soubor [ratings.csv][]. Obrázek níže ukazuje tento soubor otevřený v tabulkovém programu.

![Exportní soubor s hodnocením zvířat, otevřený v tabulkovém programu](../images/ratings.png "Tabulka hodnocení zvířat")

[ratings.csv]: /data-export/ratings.csv
