---
title: Structura și conținutul fișierelor de date CSV exportate
linkTitle: Fișiere de export
date: 2023-07-20
weight: 30
description: >
  Descrierea structurii și conținutului celor patru fișiere de date create în timpul exportului.
categorii: [Export de date]
etichete: [fișiere de export, temperaturi, greutăți, evaluări]
slug: export-files
translationKey: data-export/data-files
---
## Informații generale {#general-information}

Când se exportă datele despre animale, indiferent dacă se face pe [unitatea flash USB][] sau pe un dispozitiv de stocare local [pe PC][], se generează patru fișiere de export în fiecare caz:

- [Date despre animale][] `(animals.csv)`
- [Date despre temperatura corpului][] `(temperatures.csv)`
- [Date despre greutate][] `(weights.csv)`
- [Evaluări ale animalelor][] `(ratings.csv)`

[unitatea flash USB]: ../usb-drive/
[pe PC]: ../pc/

[Date despre animale]: #animal-data-animalscsv
[Date despre temperatura corpului]: #body-temperature-data-temperaturescsv
[Date despre greutate]: #weight-data-weightscsv
[Evaluări ale animalelor]: #animal-ratings-ratingscsv

Toate cele patru fișiere sunt fișiere text [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) lizibile de către oameni. Fișierele sunt codificate în format `UTF-8`, punctele și virgulele (`;`) sunt folosite ca separatori de coloane. Câmpurile individuale de date *nu* sunt încadrate în ghilimele. Fiecare rând al tabelului respectiv reprezintă un set de date despre un animal sau o măsurare sau evaluare efectuată asupra unui animal.

## Procesarea ulterioară a datelor exportate {#further-processing-of-exported-data}

Puteți deschide fiecare dintre aceste patru fișiere de export într-un program de calcul tabelar la alegerea dvs. (cum ar fi [Microsoft Excel](https://products.office.com/excel) sau [OpenOffice Calc](https://www.openoffice.org/)) și efectuați analize avansate ale datelor acolo. Ca exemplu, vizualizarea tabelului `animals.csv` într-un program de calcul tabelar este prezentată mai jos:

![Date despre animale exportate, deschise într-un program de calcul tabelar](../images/animals.png "Date despre animale deschise în program de calcul tabelar")

## Descrierea fișierelor de date {#description-of-data-files}

Următoarele patru secțiuni descriu în detaliu fiecare dintre fișierele de date exportate:

### Date despre animale (`animals.csv`) {#animal-data-animalscsv}

- **Nume fișier** `animals.csv`
- **Descriere** Date generale despre animale
- **Număr de coloane** 6

Fiecare rând al tabelului de date despre animale reprezintă un animal stocat pe VitalControl. Un tabel de date despre animale exemplu are astfel următoarea apariție:

{{% data-files/en %}}

Următorul tabel listează și descrie fiecare coloană a tabelului de date despre animale:

|Coloană| Numele coloanei    | Descriere                     | Comentarii                                                  |
|:-:|----------------------|---------------------------------|-------------------------------------------------------------|
| 1 | `National-ID-Animal` | Număr național oficial al animalului | 15 cifre conform [ISO1174/85][], poate să nu fie înregistrat |
| 2 | `Farm-ID-Animal`     | Număr de gestionare               | 2 până la 6 cifre, adesea egal cu numărul de pe zgardă       |
| 3 | `Transponder-ID`     | Număr transponder              | poate lipsi, poate fi identic cu ID-ul național al animalului |
| 4 | `DateOfBirth`        | Data nașterii                   | Format: `YYYY-MM-TT` (`An-Lună-Zi`)                         |
| 5 | `Sex`                | Sex                             | _Valori:_ `M`: mascul, `F`: femelă, `?`: necunoscut          |
| 6 | `BirthWeight-Kg`     | Greutatea la naștere            | Unitate: `kilogram`, poate să nu fie înregistrată / lipsă    |

[ISO1174/85]: https://en.wikipedia.org/wiki/ISO_11784_and_ISO_11785

Dacă este necesar, puteți descărca și fișierul de exemplu furnizat [animals.csv][].

[animals.csv]: /data-export/animals.csv

### Date despre temperatura corpului (`temperatures.csv`) {#body-temperature-data-temperaturescsv}

- **Nume fișier** `temperatures.csv`
- **Descriere** Valori ale temperaturii, obținute prin măsurarea temperaturii rectale a animalelor.
- **Număr de coloane** 5

Fiecare rând al tabelului de date despre temperatură reprezintă o măsurare a temperaturii corpului efectuată pe un animal cu dispozitivul VitalControl. Un tabel de temperatură exemplu are astfel următoarea apariție:

{{% data-files/en_2 %}}

a
Următorul tabel listează și descrie fiecare coloană a fișierului de export care conține valorile temperaturii corpului:

|Coloană| Numele coloanei     | Descriere                          | Comentarii                                       |
|:-:|-----------------------|--------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`  | Număr de 15 cifre al animalului măsurat | conform [ISO1174/85][], poate să nu fie înregistrat |
| 2 | `Farm-ID-Animal`      | Număr de gestionare al animalului măsurat | 2 până la 6 cifre, adesea egal cu numărul zgărzii |
| 3 | `Date`                | Data măsurării temperaturii          | Format: `YYYY-MM-TT` (`An-Lună-Zi`)              |
| 4 | `Time`                | Ora măsurării temperaturii           | Format: `hh-mm-ss` (`oră:minut:secundă`)         |
| 5 | `Temperature-Celsius` | Valoarea temperaturii măsurate       | Unitate: `Grade Celsius`                         |

Dacă este necesar, puteți descărca și fișierul de exemplu furnizat [temperatures.csv][]. Figura de mai jos arată acest fișier de date deschis într-un program de calcul tabelar.

![Fișier de export cu valorile temperaturii corpului, deschis în programul de calcul tabelar](../images/temperatures.png "Tabel valori temperatură")

[temperatures.csv]: /data-export/temperatures.csv

### Date despre greutate (`weights.csv`) {#weight-data-weightscsv}

- **Numele fișierului** `weights.csv`
- **Descriere** Valori ale greutății obținute prin cântărirea animalelor
- **Număr de coloane** 5

Fiecare linie a tabelului de greutate reprezintă o cântărire a unui animal folosind dispozitivul VitalControl pentru înregistrarea valorii greutății. Un tabel de greutate exemplu are astfel următorul aspect:

{{% data-files/en_3 %}}

Următorul tabel listează și descrie coloanele individuale ale tabelului care conține greutățile animalelor:

|Coloană| Numele coloanei     | Descriere                         | Comentarii                                       |
|:-:|-----------------------|-------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | Număr de 15 cifre al animalului cântărit | conform [ISO1174/85][], poate să nu fie înregistrat |
| 2 | `Farm-ID-Animal`      | Număr de gestionare al animalului cântărit | 2 până la 6 cifre, adesea egal cu numărul zgărzii |
| 3 | `Date`                | Data cântăririi                    | Format: `YYYY-MM-TT` (`An-Lună-Zi`)              |
| 4 | `Time`                | Ora cântăririi                     | Format: `hh-mm-ss` (`oră:minut:secundă`)         |
| 5 | `Weight-Kg`           | Valoarea greutății                 | Unitate: `Kilogram`                              |


Dacă este necesar, puteți descărca și fișierul de exemplu furnizat [weights.csv][]. Figura de mai jos arată acest fișier de export deschis într-un program de calcul tabelar.

![Fișier de export cu valorile greutății animalelor, deschis într-un program de calcul tabelar](../images/weights.png "Valorile greutății tabelului")

[weights.csv]: /data-export/weights.csv

### Evaluările animalelor (`ratings.csv`) {#animal-ratings-ratingscsv}

- **Numele fișierului** `ratings.csv`
- **Descriere** Evaluările animalelor obținute prin inspectarea vizuală a animalelor
- **Numărul de coloane** 8

Fiecare rând al tabelului de evaluări ale animalelor reprezintă evaluarea vizuală a unei evaluări a unui animal efectuată cu VitalControl. Un tabel exemplar cu evaluarea animalelor are următorul aspect:

{{% data-files/en_4 %}}

Tabelul următor listează și descrie fiecare coloană a tabelului de evaluări ale animalelor:

|Coloană| Numele coloanei     | Descriere                             | Comentarii                                      |
|:-:|-----------------------|-----------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | Număr de 15 cifre al animalului evaluat | conform [ISO1174/85][], poate să nu fie înregistrat |
| 2 | `Farm-ID-Animal`      | Numărul de gestionare al animalului evaluat | 2- până la 6 cifre, adesea egal cu numărul zgărzii |
| 3 | `Date`                | Data evaluării                          | Format: `YYYY-MM-TT` (`An-Lună-Zi`)             |
| 4 | `Time`                | Ora evaluării                           | Format: `hh-mm-ss` (`oră:minut:secundă`)        |
| 5 | `ScoreCondition`      | Evaluarea condiției generale            | _Evaluări:_ `Roșu`, `Galben`, `Verde`, `Niciuna`|
| 6 | `ScoreFeedIntake`     | Evaluarea consumului de hrană           | _Evaluări:_ `Roșu`, `Galben`, `Verde`, `Niciuna`|
| 7 | `ScoreScours`         | Evaluarea stării privind `Scours`       | _Evaluări:_ `Roșu`, `Galben`, `Verde`, `Niciuna`|
| 8 | `ScoreRespiratory`    | Evaluarea stării `Bolilor respiratorii` | _Evaluări:_ `Roșu`, `Galben`, `Verde`, `Niciuna`|


Dacă este necesar, puteți descărca și fișierul de exemplu furnizat [ratings.csv][]. Figura de mai jos arată acest fișier deschis într-un program de calcul tabelar.

![Fișier de export cu evaluări ale animalelor, deschis într-un program de calcul tabelar](../images/ratings.png "Evaluări tabelare ale animalelor")

[ratings.csv]: /data-export/ratings.csv

