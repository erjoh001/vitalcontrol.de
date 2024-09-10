---
title: Struttura e contenuto dei file di dati CSV esportati
linkTitle: File di esportazione
date: 2023-07-20
weight: 30
description: >
  Descrizione della struttura e del contenuto dei quattro file di dati creati durante l'esportazione.
categorie: [Esportazione dati]
etichette: [file di esportazione, temperature, pesi, valutazioni]
slug: export-files
translationKey: data-export/data-files
---
## Informazioni generali {#general-information}

Quando si esportano i dati degli animali, indipendentemente dal fatto che sia su [chiavetta USB][] o su un dispositivo di archiviazione di massa locale [sul PC][], vengono generati quattro file di esportazione in ogni caso:

- [Dati degli animali][] `(animals.csv)`
- [Dati della temperatura corporea][] `(temperatures.csv)`
- [Dati del peso][] `(weights.csv)`
- [Valutazioni degli animali][] `(ratings.csv)`

[USB flash drive]: ../usb-drive/
[on the PC]: ../pc/

[Dati degli animali]: #animal-data-animalscsv
[Dati della temperatura corporea]: #body-temperature-data-temperaturescsv
[Dati del peso]: #weight-data-weightscsv
[Valutazioni degli animali]: #animal-ratings-ratingscsv

Tutti e quattro i file sono file di testo [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) leggibili dall'uomo. I file sono codificati in formato `UTF-8`, i punti e virgola (`;`) sono usati come separatori di colonna. I singoli campi di dati *non* sono racchiusi tra virgolette. Ogni riga della rispettiva tabella rappresenta un set di dati di un animale o una misurazione o valutazione eseguita su un animale.

## Ulteriore elaborazione dei dati esportati {#further-processing-of-exported-data}

È possibile aprire ciascuno di questi quattro file di esportazione in un programma di fogli di calcolo a scelta (come [Microsoft Excel](https://products.office.com/excel) o [OpenOffice Calc](https://www.openoffice.org/)) e eseguire analisi avanzate dei dati lì. Ad esempio, la visualizzazione della tabella `animals.csv` in un programma di fogli di calcolo è mostrata di seguito:

![Dati degli animali esportati, aperti in un programma di fogli di calcolo](../images/animals.png "Dati degli animali aperti in un programma di fogli di calcolo")

## Descrizione dei file di dati {#description-of-data-files}

Le seguenti quattro sezioni descrivono ciascuno dei file di dati esportati in dettaglio:

### Dati degli animali (`animals.csv`) {#animal-data-animalscsv}

- **Nome del file** `animals.csv`
- **Descrizione** Dati generali degli animali
- **Numero di colonne** 6


Ogni riga della tabella dei dati degli animali rappresenta un animale memorizzato su VitalControl. Una tabella di dati degli animali esemplare ha quindi il seguente aspetto:

{{% data-files/en %}}

La seguente tabella elenca e descrive ciascuna colonna della tabella dei dati degli animali:

|Colonna| Nome della colonna | Descrizione                     | Commenti                                                  |
|:-:|----------------------|---------------------------------|-----------------------------------------------------------|
| 1 | `National-ID-Animal` | Numero ufficiale nazionale dell'animale | 15 cifre secondo [ISO1174/85][], potrebbe non essere registrato |
| 2 | `Farm-ID-Animal`     | Numero di gestione               | Da 2 a 6 cifre, spesso uguale al numero sul collare       |
| 3 | `Transponder-ID`     | Numero del transponder           | potrebbe mancare, potrebbe essere identico al numero nazionale dell'animale |
| 4 | `DateOfBirth`        | Data di nascita                  | Formato: `YYYY-MM-TT` (`Year-Month-Day`)                |
| 5 | `Sex`                | Sesso                            | _Valori:_ `M`: maschio, `F`: femmina, `?`: sconosciuto    |
| 6 | `BirthWeight-Kg`     | Peso alla nascita                | Unità: `kilogram`, potrebbe non essere registrato / mancante |

[ISO1174/85]: https://en.wikipedia.org/wiki/ISO_11784_and_ISO_11785

Se necessario, è possibile scaricare anche il file di esempio fornito [animals.csv][].

[animals.csv]: /data-export/animals.csv

### Dati della temperatura corporea (`temperatures.csv`) {#body-temperature-data-temperaturescsv}

- **Nome del file** `temperatures.csv`
- **Descrizione** Valori di temperatura, ottenuti misurando la temperatura corporea rettale degli animali.
- **Numero di colonne** 5

Ogni riga della tabella dei dati della temperatura rappresenta una misurazione della temperatura corporea effettuata su un animale con il dispositivo VitalControl. Una tabella di temperatura esemplare ha quindi il seguente aspetto:

{{% data-files/en_2 %}}

La seguente tabella elenca e descrive ciascuna colonna del file di esportazione contenente i valori della temperatura corporea:

|Colonna| Nome della colonna | Descrizione                          | Commenti                                         |
|:-:|-----------------------|--------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`  | Numero a 15 cifre dell'animale misurato | secondo [ISO1174/85][], potrebbe non essere registrato |
| 2 | `Farm-ID-Animal`      | Numero di gestione dell'animale misurato | Da 2 a 6 cifre, spesso uguale al numero del collare |
| 3 | `Date`                | Data della misurazione della temperatura | Formato: `YYYY-MM-TT` (`Year-Month-Day`)       |
| 4 | `Time`                | Uhrzeit der Temperaturmessung        | Formato: `hh-mm-ss` (`hour:minute:second`)       |
| 5 | `Temperature-Celsius` | Valore della temperatura misurata    | Unità: `Grad Celsius`                           |

Se necessario, puoi anche scaricare il file di esempio fornito [temperatures.csv][]. La figura seguente mostra questo file di dati aperto in un programma di fogli di calcolo.

![File di esportazione con valori di temperatura corporea, aperto in un programma di fogli di calcolo](../images/temperatures.png "Tabella valori di temperatura")

[temperatures.csv]: /data-export/temperatures.csv

### Dati di peso (`weights.csv`) {#weight-data-weightscsv}

- **Nome del file** `weights.csv`
- **Descrizione** Valori di peso ottenuti pesando gli animali
- **Numero di colonne** 5

Ogni riga della tabella del peso rappresenta una pesatura di un animale utilizzando il dispositivo VitalControl per registrare il valore del peso. Una tabella del peso esemplare ha quindi il seguente aspetto:

{{% data-files/en_3 %}}

La seguente tabella elenca e descrive le singole colonne della tabella contenente i pesi degli animali:

|Colonna| Nome della colonna | Descrizione                         | Commenti                                        |
|:-:|-----------------------|-------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | Numero a 15 cifre dell'animale pesato | secondo [ISO1174/85][], potrebbe non essere registrato |
| 2 | `Farm-ID-Animal`      | Numero di gestione dell'animale pesato | Da 2 a 6 cifre, spesso uguale al numero del collare |
| 3 | `Date`                | Data della pesatura                 | Formato: `YYYY-MM-TT` (`Year-Month-Day`)      |
| 4 | `Time`                | Ora della pesatura                  | Formato: `hh-mm-ss` (`hour:minute:second`)      |
| 5 | `Weight-Kg`           | Valore del peso                     | Unità: `Kilogram`                             |

Se necessario, è possibile scaricare anche il file di esempio fornito [weights.csv][]. La figura seguente mostra questo file di esportazione aperto in un programma di fogli di calcolo.

![File di esportazione con i valori del peso degli animali, aperto in un programma di fogli di calcolo](../images/weights.png "Valori della tabella dei pesi")

[weights.csv]: /data-export/weights.csv

### Valutazioni degli animali (`ratings.csv`) {#animal-ratings-ratingscsv}

- **Nome del file** `ratings.csv`
- **Descrizione** Valutazioni degli animali ottenute ispezionando visivamente gli animali
- **Numero di colonne** 8

Ogni riga della tabella delle valutazioni degli animali rappresenta la valutazione visiva di una valutazione animale eseguita con VitalControl. Una tabella esemplare con la valutazione degli animali ha il seguente aspetto:

{{% data-files/en_4 %}}

La seguente tabella elenca e descrive ciascuna colonna della tabella delle valutazioni degli animali:


|Colonna| Nome della colonna | Descrizione                             | Commenti                                        |
|:-:|-----------------------|-----------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | Numero a 15 cifre dell'animale valutato | secondo [ISO1174/85][], potrebbe non essere registrato |
| 2 | `Farm-ID-Animal`      | Numero di gestione dell'animale valutato| Da 2 a 6 cifre, spesso uguale al numero del collare |
| 3 | `Date`                | Data della valutazione                  | Formato: `YYYY-MM-TT` (`Year-Month-Day`)      |
| 4 | `Time`                | Ora della valutazione                   | Formato: `hh-mm-ss` (`hour:minute:second`)      |
| 5 | `ScoreCondition`      | Valutazione della condizione generale   | _Valutazioni:_ `Red`, `Yellow`, `Green`, `None` |
| 6 | `ScoreFeedIntake`     | Valutazione dell'assunzione di cibo     | _Valutazioni:_ `Red`, `Yellow`, `Green`, `None` |
| 7 | `ScoreScours`         | Valutazione dello stato riguardante `Scours` | _Valutazioni:_ `Red`, `Yellow`, `Green`, `None` |
| 8 | `ScoreRespiratory`    | Valutazione dello stato `Respiratory diseases` | _Valutazioni:_ `Red`, `Yellow`, `Green`, `None` |

Se necessario, puoi anche scaricare il file di esempio fornito [ratings.csv][]. La figura sotto mostra questo file aperto in un programma di fogli di calcolo.

![File di esportazione con valutazioni degli animali, aperto in un programma di fogli di calcolo](../images/ratings.png "Tabella valutazioni animali")

[ratings.csv]: /data-export/ratings.csv

