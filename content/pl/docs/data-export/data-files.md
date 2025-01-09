---
title: Struktura i zawartość eksportowanych plików danych CSV
linkTitle: Pliki eksportu
date: 2023-07-20
weight: 30
description: >
  Opis struktury i zawartości czterech plików danych tworzonych podczas eksportu.
kategorie: [Eksport danych]
tagi: [pliki eksportu, temperatury, wagi, oceny]
slug: export-files
translationKey: data-export/data-files
---
## Informacje ogólne {#general-information}

Podczas eksportowania danych zwierząt, niezależnie od tego, czy na [dysk USB][] czy na lokalne urządzenie pamięci masowej [na PC][], w każdym przypadku generowane są cztery pliki eksportu:

- [Dane zwierząt][] `(animals.csv)`
- [Dane temperatury ciała][] `(temperatures.csv)`
- [Dane wagi][] `(weights.csv)`
- [Oceny zwierząt][] `(ratings.csv)`

[Dysk USB]: ../usb-drive/
[na PC]: ../pc/

[Dane zwierząt]: #animal-data-animalscsv
[Dane temperatury ciała]: #body-temperature-data-temperaturescsv
[Dane wagi]: #weight-data-weightscsv
[Oceny zwierząt]: #animal-ratings-ratingscsv

Wszystkie cztery pliki są czytelnymi dla człowieka plikami tekstowymi [CSV](https://en.wikipedia.org/wiki/Comma-separated_values). Pliki są kodowane w formacie `UTF-8`, a jako separatorów kolumn używa się średników (`;`). Poszczególne pola danych *nie* są zamknięte w cudzysłowach. Każdy wiersz odpowiedniej tabeli reprezentuje zestaw danych zwierzęcia lub pomiar lub ocenę przeprowadzoną na zwierzęciu.

## Dalsze przetwarzanie eksportowanych danych {#further-processing-of-exported-data}

Każdy z tych czterech plików eksportu można otworzyć w wybranym programie arkusza kalkulacyjnego (takim jak [Microsoft Excel](https://products.office.com/excel) lub [OpenOffice Calc](https://www.openoffice.org/)) i tam przeprowadzić zaawansowaną analizę danych. Przykładowo, poniżej przedstawiono widok tabeli `animals.csv` w programie arkusza kalkulacyjnego:

![Eksportowane dane zwierząt, otwarte w programie arkusza kalkulacyjnego](../images/animals.png "Dane zwierząt otwarte w programie arkusza kalkulacyjnego")

## Opis plików danych {#description-of-data-files}

Poniższe cztery sekcje szczegółowo opisują każdy z eksportowanych plików danych:

### Dane zwierząt (`animals.csv`) {#animal-data-animalscsv}

- **Nazwa pliku** `animals.csv`
- **Opis** Ogólne dane o zwierzętach
- **Liczba kolumn** 6

Każdy wiersz tabeli danych zwierząt reprezentuje jedno zwierzę przechowywane w VitalControl. Przykładowa tabela danych zwierząt ma zatem następujący wygląd:

{{% data-files/en %}}

Poniższa tabela wymienia i opisuje każdą kolumnę tabeli danych zwierząt:

|Kolumna| Nazwa kolumny       | Opis                           | Uwagi                                                      |
|:-:|------------------------|---------------------------------|------------------------------------------------------------|
| 1 | `National-ID-Animal`   | Oficjalny krajowy numer zwierzęcia | 15 cyfr zgodnie z [ISO1174/85][], może nie być zarejestrowany |
| 2 | `Farm-ID-Animal`       | Numer zarządzania               | 2 do 6 cyfr, często równe numerowi na obroży               |
| 3 | `Transponder-ID`       | Numer transpondera              | może brakować, może być identyczny z krajowym numerem zwierzęcia |
| 4 | `DateOfBirth`          | Data urodzenia                  | Format: `YYYY-MM-TT` (`Rok-Miesiąc-Dzień`)                 |
| 5 | `Sex`                  | Płeć                            | _Wartości:_ `M`: męski, `F`: żeński, `?`: nieznany         |
| 6 | `BirthWeight-Kg`       | Waga urodzeniowa                | Jednostka: `kilogram`, może nie być zarejestrowana / brakująca |

[ISO1174/85]: https://en.wikipedia.org/wiki/ISO_11784_and_ISO_11785

Jeśli to konieczne, możesz również pobrać dostarczony plik przykładowy [animals.csv][].

[animals.csv]: /data-export/animals.csv

### Dane temperatury ciała (`temperatures.csv`) {#body-temperature-data-temperaturescsv}

- **Nazwa pliku** `temperatures.csv`
- **Opis** Wartości temperatury, uzyskane przez pomiar temperatury ciała zwierząt w odbycie.
- **Liczba kolumn** 5

Każdy wiersz tabeli danych temperatury reprezentuje pomiar temperatury ciała wykonany na zwierzęciu za pomocą urządzenia VitalControl. Przykładowa tabela temperatur ma zatem następujący wygląd:

{{% data-files/en_2 %}}

Poniższa tabela wymienia i opisuje każdą kolumnę pliku eksportu zawierającego wartości temperatury ciała:

|Kolumna| Nazwa kolumny       | Opis                                | Uwagi                                             |
|:-:|-----------------------|--------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-cyfrowy numer mierzonego zwierzęcia | zgodnie z [ISO1174/85][], może nie być zapisany  |
| 2 | `Farm-ID-Animal`      | Numer zarządzania mierzonego zwierzęcia | 2- do 6 cyfr, często równy numerowi obroży       |
| 3 | `Date`                | Data pomiaru temperatury             | Format: `YYYY-MM-TT` (`Rok-Miesiąc-Dzień`)       |
| 4 | `Time`                | Czas pomiaru temperatury             | Format: `hh-mm-ss` (`godzina:minuta:sekunda`)    |
| 5 | `Temperature-Celsius` | Mierzona wartość temperatury         | Jednostka: `Stopnie Celsjusza`                   |

Jeśli to konieczne, możesz również pobrać dostarczony plik przykładowy [temperatures.csv][]. Poniższa ilustracja pokazuje ten plik danych otwarty w programie arkusza kalkulacyjnego.

![Plik eksportu z wartościami temperatury ciała, otwarty w programie arkusza kalkulacyjnego](../images/temperatures.png "Tabela wartości temperatury")

[temperatures.csv]: /data-export/temperatures.csv

### Dane wagowe (`weights.csv`) {#weight-data-weightscsv}

- **Nazwa pliku** `weights.csv`
- **Opis** Wartości wagowe uzyskane przez ważenie zwierząt
- **Liczba kolumn** 5

Każdy wiersz tabeli wagowej reprezentuje jedno ważenie zwierzęcia za pomocą urządzenia VitalControl do rejestrowania wartości wagi. Przykładowa tabela wagowa ma więc następujący wygląd:

{{% data-files/en_3 %}}

Poniższa tabela wymienia i opisuje poszczególne kolumny tabeli zawierającej wagi zwierząt:

|Kolumna| Nazwa kolumny       | Opis                                | Uwagi                                             |
|:-:|-----------------------|--------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-cyfrowy numer ważonego zwierzęcia | zgodnie z [ISO1174/85][], może nie być zapisany  |
| 2 | `Farm-ID-Animal`      | Numer zarządzania ważonego zwierzęcia | 2- do 6 cyfr, często równy numerowi obroży       |
| 3 | `Date`                | Data ważenia                        | Format: `YYYY-MM-TT` (`Rok-Miesiąc-Dzień`)       |
| 4 | `Time`                | Czas ważenia                        | Format: `hh-mm-ss` (`godzina:minuta:sekunda`)    |
| 5 | `Weight-Kg`           | Wartość wagi                        | Jednostka: `Kilogram`                            |

Jeśli to konieczne, możesz również pobrać dostarczony przykładowy plik [weights.csv][]. Poniższa ilustracja pokazuje ten plik eksportu otwarty w programie arkusza kalkulacyjnego.

![Plik eksportu z wartościami wagi zwierząt, otwarty w programie arkusza kalkulacyjnego](../images/weights.png "Wartości tabeli wagi")

[weights.csv]: /data-export/weights.csv

### Oceny zwierząt (`ratings.csv`) {#animal-ratings-ratingscsv}

- **Nazwa pliku** `ratings.csv`
- **Opis** Oceny zwierząt uzyskane poprzez wizualną inspekcję zwierząt
- **Liczba kolumn** 8

Każdy wiersz tabeli ocen zwierząt reprezentuje wizualną ocenę przeprowadzoną za pomocą VitalControl. Przykładowa tabela z oceną zwierząt ma następujący wygląd:

{{% data-files/en_4 %}}

Poniższa tabela wymienia i opisuje każdą kolumnę tabeli ocen zwierząt:

|Kolumna| Nazwa kolumny      | Opis                                    | Uwagi                                           |
|:-:|-----------------------|-----------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-cyfrowy numer ocenianego zwierzęcia  | zgodnie z [ISO1174/85][], może nie być zapisany |
| 2 | `Farm-ID-Animal`      | Numer zarządzania ocenianego zwierzęcia | 2- do 6 cyfr, często równy numerowi obroży      |
| 3 | `Date`                | Data oceny                              | Format: `YYYY-MM-TT` (`Rok-Miesiąc-Dzień`)      |
| 4 | `Time`                | Czas oceny                              | Format: `hh-mm-ss` (`godzina:minuta:sekunda`)   |
| 5 | `ScoreCondition`      | Ocena ogólnego stanu                    | _Oceny:_ `Red`, `Yellow`, `Green`, `None`       |
| 6 | `ScoreFeedIntake`     | Ocena spożycia paszy                    | _Oceny:_ `Red`, `Yellow`, `Green`, `None`       |
| 7 | `ScoreScours`         | Ocena stanu dotyczącego `Scours`        | _Oceny:_ `Red`, `Yellow`, `Green`, `None`       |
| 8 | `ScoreRespiratory`    | Ocena stanu `Choroby układu oddechowego`| _Oceny:_ `Red`, `Yellow`, `Green`, `None`       |

Jeśli to konieczne, możesz również pobrać dostarczony przykładowy plik [ratings.csv][]. Poniższa ilustracja pokazuje ten plik otwarty w programie arkusza kalkulacyjnego.

![Eksportuj plik z ocenami zwierząt, otwarty w programie arkusza kalkulacyjnego](../images/ratings.png "Tabela ocen zwierząt")

[ratings.csv]: /data-export/ratings.csv
