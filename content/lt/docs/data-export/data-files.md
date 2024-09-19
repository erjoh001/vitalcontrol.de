---
title: Eksportuotų CSV duomenų failų struktūra ir turinys
linkTitle: Eksporto failai
date: 2023-07-20
weight: 30
description: >
  Keturių duomenų failų, sukurtų eksporto metu, struktūros ir turinio aprašymas.
kategorijos: [Duomenų eksportas]
Žymos: [eksporto failai, temperatūros, svoriai, įvertinimai]
slug: export-files
translationKey: data-export/data-files
---
## Bendroji informacija {#general-information}

Eksportuojant gyvūnų duomenis, nesvarbu, ar į [USB atmintinę][], ar į vietinį masinio saugojimo įrenginį [kompiuteryje][], kiekvienu atveju sukuriami keturi eksporto failai:

- [Gyvūnų duomenys][] `(animals.csv)`
- [Kūno temperatūros duomenys][] `(temperatures.csv)`
- [Svorio duomenys][] `(weights.csv)`
- [Gyvūnų įvertinimai][] `(ratings.csv)`

[USB atmintinė]: ../usb-drive/
[kompiuteryje]: ../pc/

[Gyvūnų duomenys]: #animal-data-animalscsv
[Kūno temperatūros duomenys]: #body-temperature-data-temperaturescsv
[Svorio duomenys]: #weight-data-weightscsv
[Gyvūnų įvertinimai]: #animal-ratings-ratingscsv

Visi keturi failai yra žmogui skaitomi [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) teksto failai. Failai yra koduoti `UTF-8` formatu, stulpelių atskyrimui naudojami kabliataškiai (`;`). Atskirų duomenų laukų *ne* apgaubia kabutės. Kiekviena atitinkamos lentelės eilutė atspindi gyvūno duomenų rinkinį arba matavimą ar vertinimą, atliktą gyvūnui.

## Eksportuotų duomenų tolesnis apdorojimas {#further-processing-of-exported-data}

Kiekvieną iš šių keturių eksporto failų galite atidaryti pasirinktoje skaičiuoklės programoje (pvz., [Microsoft Excel](https://products.office.com/excel) arba [OpenOffice Calc](https://www.openoffice.org/)) ir ten atlikti išsamią duomenų analizę. Pavyzdžiui, žemiau parodytas `animals.csv` lentelės vaizdas skaičiuoklės programoje:

![Eksportuoti gyvūnų duomenys, atidaryti skaičiuoklės programoje](../images/animals.png "Gyvūnų duomenys atidaryti skaičiuoklės programoje")

## Duomenų failų aprašymas {#description-of-data-files}

Toliau pateiktuose keturiuose skyriuose išsamiai aprašomi kiekvienas eksportuotas duomenų failas:

### Gyvūnų duomenys (`animals.csv`) {#animal-data-animalscsv}

- **Failo pavadinimas** `animals.csv`
- **Aprašymas** Bendri gyvūnų duomenys
- **Stulpelių skaičius** 6

Kiekviena gyvūnų duomenų lentelės eilutė atspindi vieną gyvūną, saugomą VitalControl. Pavyzdinė gyvūnų duomenų lentelė atrodo taip:

{{% data-files/en %}}

Toliau pateiktoje lentelėje išvardyti ir aprašyti kiekvienas gyvūnų duomenų lentelės stulpelis:

|Stulpelis| Stulpelio pavadinimas | Aprašymas                      | Komentarai                                                  |
|:-:|-----------------------------|--------------------------------|-------------------------------------------------------------|
| 1 | `National-ID-Animal`        | Oficiali nacionalinė gyvūno numeracija | 15 skaitmenų pagal [ISO1174/85][], gali būti neužfiksuota |
| 2 | `Farm-ID-Animal`            | Valdymo numeris                | 2-6 skaitmenys, dažnai sutampa su numeriu ant antkaklio     |
| 3 | `Transponder-ID`            | Transponderio numeris          | gali būti trūkstamas, gali sutapti su nacionaliniu gyvūno ID|
| 4 | `DateOfBirth`               | Gimimo data                    | Formatas: `YYYY-MM-TT` (`Metai-Mėnuo-Diena`)                |
| 5 | `Sex`                       | Lytis                          | _Reikšmės:_ `M`: patinas, `F`: patelė, `?`: nežinoma        |
| 6 | `BirthWeight-Kg`            | Gimimo svoris                  | Vienetas: `kilogramas`, gali būti neužfiksuotas / trūkstamas|

[ISO1174/85]: https://en.wikipedia.org/wiki/ISO_11784_and_ISO_11785

Jei reikia, galite atsisiųsti pateiktą pavyzdinį failą [animals.csv][].

[animals.csv]: /data-export/animals.csv

### Kūno temperatūros duomenys (`temperatures.csv`) {#body-temperature-data-temperaturescsv}

- **Failo pavadinimas** `temperatures.csv`
- **Aprašymas** Temperatūros reikšmės, gautos matuojant gyvūnų tiesiosios žarnos kūno temperatūrą.
- **Stulpelių skaičius** 5

Kiekviena temperatūros duomenų lentelės eilutė atspindi kūno temperatūros matavimą, atliktą gyvūnui su VitalControl įrenginiu. Pavyzdinė temperatūros lentelė atrodo taip:

{{% data-files/en_2 %}}

a
Šioje lentelėje išvardytos ir aprašytos kiekvienos eksporto failo, kuriame yra kūno temperatūros vertės, stulpeliai:

|Stulpelis| Stulpelio pavadinimas | Aprašymas                          | Komentarai                                       |
|:-:|-----------------------------|------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`        | 15 skaitmenų matuojamo gyvūno numeris | pagal [ISO1174/85][], galbūt neįrašytas          |
| 2 | `Farm-ID-Animal`            | Matuojamo gyvūno valdymo numeris   | 2-6 skaitmenys, dažnai lygus antkaklio numeriui  |
| 3 | `Date`                      | Temperatūros matavimo data         | Formatas: `YYYY-MM-TT` (`Metai-Mėnuo-Diena`)     |
| 4 | `Time`                      | Temperatūros matavimo laikas       | Formatas: `hh-mm-ss` (`valanda:minutė:sekundė`) |
| 5 | `Temperature-Celsius`       | Išmatuota temperatūros vertė       | Vienetas: `Celsijaus laipsniai`                  |

Jei reikia, taip pat galite atsisiųsti pateiktą pavyzdinį failą [temperatures.csv][]. Žemiau pateiktoje figūroje parodytas šis duomenų failas, atidarytas skaičiuoklės programoje.

![Eksporto failas su kūno temperatūros vertėmis, atidarytas skaičiuoklės programoje](../images/temperatures.png "Lentelės temperatūros vertės")

[temperatures.csv]: /data-export/temperatures.csv

### Svorio duomenys (`weights.csv`) {#weight-data-weightscsv}

- **Failo pavadinimas** `weights.csv`
- **Aprašymas** Svorio vertės, gautos sveriant gyvūnus
- **Stulpelių skaičius** 5

Kiekviena svorio lentelės eilutė atspindi vieną gyvūno svėrimą naudojant VitalControl įrenginį svorio vertei įrašyti. Pavyzdinė svorio lentelė atrodo taip:

{{% data-files/en_3 %}}

Šioje lentelėje išvardytos ir aprašytos atskirų stulpelių, kuriuose yra gyvūnų svoriai, stulpeliai:

|Stulpelis| Stulpelio pavadinimas | Aprašymas                         | Komentarai                                       |
|:-:|-----------------------------|-----------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`        | 15 skaitmenų sveriamo gyvūno numeris | pagal [ISO1174/85][], galbūt neįrašytas          |
| 2 | `Farm-ID-Animal`            | Sveriamo gyvūno valdymo numeris   | 2-6 skaitmenys, dažnai lygus antkaklio numeriui  |
| 3 | `Date`                      | Svėrimo data                      | Formatas: `YYYY-MM-TT` (`Metai-Mėnuo-Diena`)     |
| 4 | `Time`                      | Svėrimo laikas                    | Formatas: `hh-mm-ss` (`valanda:minutė:sekundė`) |
| 5 | `Weight-Kg`                 | Svorio vertė                      | Vienetas: `Kilogramas`                           |

Jei reikia, galite taip pat atsisiųsti pateiktą pavyzdinį failą [weights.csv][]. Žemiau pateikta figūra rodo šį eksporto failą, atidarytą skaičiuoklės programoje.

![Eksporto failas su gyvūnų svorio reikšmėmis, atidarytas skaičiuoklės programoje](../images/weights.png "Lentelės svorio reikšmės")

[weights.csv]: /data-export/weights.csv

### Gyvūnų vertinimai (`ratings.csv`) {#animal-ratings-ratingscsv}

- **Failo pavadinimas** `ratings.csv`
- **Aprašymas** Gyvūnų vertinimai, gauti vizualiai tikrinant gyvūnus
- **Stulpelių skaičius** 8

Kiekviena gyvūnų vertinimo lentelės eilutė atspindi vizualinį gyvūno vertinimą, atliktą naudojant VitalControl. Pavyzdinė gyvūnų vertinimo lentelė atrodo taip:

{{% data-files/en_4 %}}

Toliau pateiktoje lentelėje išvardyti ir aprašyti kiekvienas gyvūnų vertinimo lentelės stulpelis:

|Stulpelis| Stulpelio pavadinimas | Aprašymas                             | Komentarai                                      |
|:-:|-----------------------------|---------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`        | 15 skaitmenų vertinamo gyvūno numeris | pagal [ISO1174/85][], gali būti neužregistruotas|
| 2 | `Farm-ID-Animal`            | Vertinamo gyvūno valdymo numeris      | 2-6 skaitmenys, dažnai sutampa su antkaklio numeriu |
| 3 | `Date`                      | Vertinimo data                        | Formatas: `YYYY-MM-TT` (`Metai-Mėnuo-Diena`)    |
| 4 | `Time`                      | Vertinimo laikas                      | Formatas: `hh-mm-ss` (`valanda:minutė:sekundė`)|
| 5 | `ScoreCondition`            | Bendros būklės vertinimas             | _Vertinimai:_ `Raudona`, `Geltona`, `Žalia`, `Nėra` |
| 6 | `ScoreFeedIntake`           | Pašaro suvartojimo vertinimas         | _Vertinimai:_ `Raudona`, `Geltona`, `Žalia`, `Nėra` |
| 7 | `ScoreScours`               | Būklės vertinimas dėl `Viduriavimo`   | _Vertinimai:_ `Raudona`, `Geltona`, `Žalia`, `Nėra` |
| 8 | `ScoreRespiratory`          | Būklės vertinimas dėl `Kvėpavimo ligų`| _Vertinimai:_ `Raudona`, `Geltona`, `Žalia`, `Nėra` |

Jei reikia, taip pat galite atsisiųsti pateiktą pavyzdinį failą [ratings.csv][]. Žemiau pateiktoje figūroje parodytas šis failas, atidarytas skaičiuoklės programoje.

![Eksportuotas failas su gyvūnų įvertinimais, atidarytas skaičiuoklės programoje](../images/ratings.png "Lentelė su gyvūnų įvertinimais")

[ratings.csv]: /data-export/ratings.csv
