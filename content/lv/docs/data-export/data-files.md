---
title: Eksportēto CSV datu failu struktūra un saturs
linkTitle: Eksporta faili
date: 2023-07-20
weight: 30
description: >
  Apraksts par četru datu failu struktūru un saturu, kas tiek izveidoti eksportēšanas laikā.
categories: [Datu eksports]
tags: [eksporta faili, temperatūras, svari, vērtējumi]
slug: export-files
translationKey: data-export/data-files
---
## Vispārīga informācija {#general-information}

Eksportējot dzīvnieku datus, neatkarīgi no tā, vai uz [USB zibatmiņu][] vai uz vietējo masveida glabāšanas ierīci [datorā][], katrā gadījumā tiek ģenerēti četri eksporta faili:

- [Dzīvnieku dati][] `(animals.csv)`
- [Ķermeņa temperatūras dati][] `(temperatures.csv)`
- [Svara dati][] `(weights.csv)`
- [Dzīvnieku vērtējumi][] `(ratings.csv)`

[USB zibatmiņu]: ../usb-drive/
[datorā]: ../pc/

[Dzīvnieku dati]: #animal-data-animalscsv
[Ķermeņa temperatūras dati]: #body-temperature-data-temperaturescsv
[Svara dati]: #weight-data-weightscsv
[Dzīvnieku vērtējumi]: #animal-ratings-ratingscsv

Visi četri faili ir cilvēkiem lasāmi [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) teksta faili. Faili ir kodēti `UTF-8` formātā, kā kolonnu atdalītāji tiek izmantoti semikoli (`;`). Atsevišķi datu lauki *nav* ietverti pēdiņās. Katra attiecīgās tabulas rinda pārstāv dzīvnieka datu kopu vai mērījumu vai novērtējumu, kas veikts dzīvniekam.

## Eksportēto datu tālāka apstrāde {#further-processing-of-exported-data}

Jūs varat atvērt katru no šiem četriem eksporta failiem izvēlētajā izklājlapu programmā (piemēram, [Microsoft Excel](https://products.office.com/excel) vai [OpenOffice Calc](https://www.openoffice.org/)) un veikt tur padziļinātu datu analīzi. Kā piemērs, zemāk ir parādīts tabulas `animals.csv` skats izklājlapu programmā:

![Eksportētie dzīvnieku dati, atvērti izklājlapu programmā](../images/animals.png "Dzīvnieku dati atvērti izklājlapu programmā")

## Datu failu apraksts {#description-of-data-files}

Turpmākajās četrās sadaļās ir detalizēti aprakstīts katrs no eksportētajiem datu failiem:

### Dzīvnieku dati (`animals.csv`) {#animal-data-animalscsv}

- **Faila nosaukums** `animals.csv`
- **Apraksts** Vispārīgi dzīvnieku dati
- **Kolonnu skaits** 6

Katrs dzīvnieku datu tabulas ieraksts attēlo vienu dzīvnieku, kas saglabāts VitalControl. Piemēra dzīvnieku datu tabula izskatās šādi:

{{% data-files/en %}}

Šajā tabulā ir uzskaitītas un aprakstītas katras dzīvnieku datu tabulas kolonnas:

|Kolonna| Kolonnas nosaukums | Apraksts                        | Komentāri                                                  |
|:-:|----------------------|---------------------------------|-----------------------------------------------------------|
| 1 | `National-ID-Animal` | Oficiālais nacionālais dzīvnieka numurs | 15 cipari saskaņā ar [ISO1174/85][], iespējams, nav ierakstīts |
| 2 | `Farm-ID-Animal`     | Vadības numurs                  | 2 līdz 6 cipari, bieži vien vienāds ar numuru uz apkakles |
| 3 | `Transponder-ID`     | Transpondera numurs             | var nebūt, var būt identisks ar nacionālo dzīvnieka ID    |
| 4 | `DateOfBirth`        | Dzimšanas datums                | Formāts: `YYYY-MM-TT` (`Gads-Mēnesis-Diena`)              |
| 5 | `Sex`                | Dzimums                         | _Vērtības:_ `M`: vīrietis, `F`: sieviete, `?`: nezināms   |
| 6 | `BirthWeight-Kg`     | Dzimšanas svars                 | Vienība: `kilograms`, iespējams, nav ierakstīts / trūkst  |

[ISO1174/85]: https://en.wikipedia.org/wiki/ISO_11784_and_ISO_11785

Ja nepieciešams, varat arī lejupielādēt nodrošināto parauga failu [animals.csv][].

[animals.csv]: /data-export/animals.csv

### Ķermeņa temperatūras dati (`temperatures.csv`) {#body-temperature-data-temperaturescsv}

- **Faila nosaukums** `temperatures.csv`
- **Apraksts** Temperatūras vērtības, iegūtas, mērot dzīvnieku taisnās zarnas ķermeņa temperatūru.
- **Kolonnu skaits** 5

Katrs temperatūras datu tabulas ieraksts attēlo ķermeņa temperatūras mērījumu, kas veikts dzīvniekam ar VitalControl ierīci. Piemēra temperatūras tabula izskatās šādi:

a
Šajā tabulā ir uzskaitītas un aprakstītas katras eksporta faila kolonnas, kas satur ķermeņa temperatūras vērtības:

|Kolonna| Kolonnas nosaukums | Apraksts                             | Komentāri                                        |
|:-:|-----------------------|--------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`  | 15 ciparu izmērītā dzīvnieka numurs  | saskaņā ar [ISO1174/85][], iespējams, nav ierakstīts |
| 2 | `Farm-ID-Animal`      | Izmērītā dzīvnieka pārvaldības numurs | 2 līdz 6 cipari, bieži vien vienāds ar apkakles numuru |
| 3 | `Date`                | Temperatūras mērījuma datums         | Formāts: `YYYY-MM-TT` (`Gads-Mēnesis-Diena`)     |
| 4 | `Time`                | Temperatūras mērījuma laiks          | Formāts: `hh-mm-ss` (`stunda:minūte:sekunde`)    |
| 5 | `Temperature-Celsius` | Izmērītā temperatūras vērtība        | Vienība: `Grādi pēc Celsija`                     |

Ja nepieciešams, jūs varat arī lejupielādēt nodrošināto parauga failu [temperatures.csv][]. Zemāk redzamajā attēlā ir parādīts šis datu fails, atvērts izklājlapu programmā.

![Eksporta fails ar ķermeņa temperatūras vērtībām, atvērts izklājlapu programmā](../images/temperatures.png "Tabula ar temperatūras vērtībām")

[temperatures.csv]: /data-export/temperatures.csv

### Svara dati (`weights.csv`) {#weight-data-weightscsv}

- **Faila nosaukums** `weights.csv`
- **Apraksts** Svara vērtības, kas iegūtas, nosverot dzīvniekus
- **Kolonnu skaits** 5

Katra svara tabulas rinda attēlo vienu dzīvnieka svēršanu, izmantojot VitalControl ierīci svara vērtības reģistrēšanai. Piemēra svara tabula izskatās šādi:

Šajā tabulā ir uzskaitītas un aprakstītas atsevišķas tabulas kolonnas, kas satur dzīvnieku svarus:

|Kolonna| Kolonnas nosaukums | Apraksts                            | Komentāri                                       |
|:-:|-----------------------|-------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | 15 ciparu nosvērtā dzīvnieka numurs | saskaņā ar [ISO1174/85][], iespējams, nav ierakstīts |
| 2 | `Farm-ID-Animal`      | Nosvērtā dzīvnieka pārvaldības numurs | 2 līdz 6 cipari, bieži vien vienāds ar apkakles numuru |
| 3 | `Date`                | Svēršanas datums                    | Formāts: `YYYY-MM-TT` (`Gads-Mēnesis-Diena`)    |
| 4 | `Time`                | Svēršanas laiks                     | Formāts: `hh-mm-ss` (`stunda:minūte:sekunde`)   |
| 5 | `Weight-Kg`           | Svara vērtība                       | Vienība: `Kilograms`                            |

Ja nepieciešams, jūs varat arī lejupielādēt nodrošināto parauga failu [weights.csv][]. Zemāk redzamais attēls parāda šo eksporta failu, atvērtu izklājlapu programmā.

![Eksporta fails ar dzīvnieku svara vērtībām, atvērts izklājlapu programmā](../images/weights.png "Tabulas svara vērtības")

[weights.csv]: /data-export/weights.csv

### Dzīvnieku vērtējumi (`ratings.csv`) {#animal-ratings-ratingscsv}

- **Faila nosaukums** `ratings.csv`
- **Apraksts** Dzīvnieku vērtējumi, kas iegūti, vizuāli pārbaudot dzīvniekus
- **Kolonnu skaits** 8

Katra dzīvnieku vērtējumu tabulas rinda pārstāv vizuālo vērtējumu dzīvnieku novērtējumam, kas veikts ar VitalControl. Piemēra tabula ar dzīvnieku vērtējumu izskatās šādi:

{{% data-files/en_4 %}}

Šajā tabulā ir uzskaitītas un aprakstītas katras dzīvnieku vērtējumu tabulas kolonnas:

|Kolonna| Kolonnas nosaukums | Apraksts | Komentāri |
|:-:|-----------------------|-----------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-ciparu novērtētā dzīvnieka numurs    | saskaņā ar [ISO1174/85][], iespējams, nav ierakstīts |
| 2 | `Farm-ID-Animal`      | Novērtētā dzīvnieka pārvaldības numurs  | 2 līdz 6 cipari, bieži vien vienāds ar apkakles numuru |
| 3 | `Date`                | Vērtējuma datums                        | Formāts: `YYYY-MM-TT` (`Gads-Mēnesis-Diena`)    |
| 4 | `Time`                | Vērtējuma laiks                         | Formāts: `hh-mm-ss` (`stunda:minūte:sekunde`)   |
| 5 | `ScoreCondition`      | Vispārējā stāvokļa vērtējums            | _Vērtējumi:_ `Red`, `Yellow`, `Green`, `None`   |
| 6 | `ScoreFeedIntake`     | Barības uzņemšanas vērtējums            | _Vērtējumi:_ `Red`, `Yellow`, `Green`, `None`   |
| 7 | `ScoreScours`         | Stāvokļa vērtējums attiecībā uz `Scours`| _Vērtējumi:_ `Red`, `Yellow`, `Green`, `None`   |
| 8 | `ScoreRespiratory`    | Stāvokļa vērtējums `Respiratory diseases` | _Vērtējumi:_ `Red`, `Yellow`, `Green`, `None`   |

Ja nepieciešams, jūs varat arī lejupielādēt nodrošināto parauga failu [ratings.csv][]. Zemāk redzamajā attēlā šis fails ir atvērts izklājlapu programmā.

![Eksportēt failu ar dzīvnieku vērtējumiem, atvērts izklājlapu programmā](../images/ratings.png "Tabula dzīvnieku vērtējumi")

[ratings.csv]: /data-export/ratings.csv
