---
title: Vietyjen CSV-tietotiedostojen rakenne ja sisältö
linkTitle: Vientitiedostot
date: 2023-07-20
weight: 30
description: >
  Kuvaus neljän vientiyhteydessä luodun tietotiedoston rakenteesta ja sisällöstä.
categories: [Tietojen vienti]
tags: [vientitiedostot, lämpötilat, painot, arvioinnit]
slug: export-files
translationKey: data-export/data-files
---
## Yleistä tietoa {#general-information}

Eläintietojen viennissä, riippumatta siitä viedäänkö tiedot [USB-muistitikulle][] tai paikalliselle massamuistilaitteelle [tietokoneella][], luodaan neljä vientitiedostoa:

- [Eläintiedot](#animal-data-animalscsv)
- [Kehon lämpötilatiedot](#body-temperature-data-temperaturescsv)
- [Painotiedot](#weight-data-weightscsv)
- [Eläinten arvioinnit](#animal-ratings-ratingscsv)

[USB-muistitikku]: ../usb-drive/
[tietokoneella]: ../pc/

[Eläintiedot]: #animal-data-animalscsv
[Kehon lämpötilatiedot]: #body-temperature-data-temperaturescsv
[Painotiedot]: #weight-data-weightscsv
[Eläinten arvioinnit]: #animal-ratings-ratingscsv

Kaikki neljä tiedostoa ovat ihmisen luettavia [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) tekstiedostoja. Tiedostot on koodattu `UTF-8` muodossa, ja sarakkeiden erotinmerkkinä käytetään puolipistettä (`;`). Yksittäisiä tietokenttiä *ei* ole suljettu lainausmerkkeihin. Kunkin taulukon rivi edustaa eläintietoerää tai suoritettua mittaus- tai arviointitoimenpidettä eläimelle.

## Viedyn tiedon jatkokäsittely {#further-processing-of-exported-data}

Voit avata jokaisen näistä neljästä vientitiedostosta haluamassasi taulukkolaskentaohjelmassa (kuten [Microsoft Excel](https://products.office.com/excel) tai [OpenOffice Calc](https://www.openoffice.org/)) ja suorittaa tietojen syvällisempää analysointia siellä. Esimerkkinä alla on näkymä taulukosta `animals.csv` taulukkolaskentaohjelmassa:

![Viedy eläintiedot, avattuna taulukkolaskentaohjelmassa](../images/animals.png "Eläintiedot avattuna taulukkolaskentaohjelmassa")

## Tietotiedostojen kuvaus {#description-of-data-files}

Seuraavat neljä osiota kuvaavat yksityiskohtaisesti kunkin vientitiedoston:

### Eläintiedot (`animals.csv`) {#animal-data-animalscsv}

- **Tiedoston nimi** `animals.csv`
- **Kuvaus** Yleiset eläintiedot
- **Sarakkeiden määrä** 6

Jokainen eläintietotaulukon rivi edustaa yhtä VitalControl-laitteella tallennettua eläintä. Esimerkillinen eläintietotaulukko näyttää siis seuraavalta:

```csv
National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg
276000312341001;1001;276000312341001;2023-07-03;F;
276000312341002;1002;276000312341002;2023-07-04;F;40.8
276000312341003;1003;276000312341003;2023-07-05;F;38.3
…
```

Seuraava taulukko listaa ja kuvailee jokaisen eläintietotaulukon sarakkeen:

|Sarake| Sarakkeen nimi      | Kuvaus                          | Kommentit                                                  |
|:-:|----------------------|---------------------------------|-----------------------------------------------------------|
| 1 | `National-ID-Animal` | Virallinen kansallinen eläinnumero | 15 numeroa [ISO1174/85][] mukaisesti, ei ehkä tallennettu |
| 2 | `Farm-ID-Animal`     | Hallinnollinen numero            | 2-6 numeroa, usein sama kuin kaulapannan numero           |
| 3 | `Transponder-ID`     | Transponderin numero             | saattaa puuttua, voi olla sama kuin kansallinen eläinnumero|
| 4 | `DateOfBirth`        | Syntymäaika                      | Muoto: `YYYY-MM-TT` (`Vuosi-Kuukausi-Päivä`)              |
| 5 | `Sex`                | Sukupuoli                        | _Arvot:_ `M`: uros, `F`: naaras, `?`: tuntematon          |
| 6 | `BirthWeight-Kg`     | Syntymäpaino                     | Yksikkö: `kilogramma`, ei ehkä tallennettu / puuttuu      |

[ISO1174/85]: https://en.wikipedia.org/wiki/ISO_11784_and_ISO_11785

Tarvittaessa voit myös ladata tarjotun näytetiedoston [animals.csv][].

[animals.csv]: /data-export/animals.csv

### Kehon lämpötilan tiedot (`temperatures.csv`) {#body-temperature-data-temperaturescsv}

- **Tiedoston nimi** `temperatures.csv`
- **Kuvaus** Lämpötila-arvot, saatu ottamalla eläinten peräsuolen lämpötila.
- **Sarakkeiden määrä** 5

Jokainen lämpötilatietotaulukon rivi edustaa eläimen kehon lämpötilamittausta, joka on suoritettu VitalControl-laitteella. Esimerkillinen lämpötilataulukko näyttää siis seuraavalta:

```csv
National-ID-Animal;Farm-ID-Animal;Date;Time;Temperature-Celsius
276000312341001;1001;276000312341001;2023-07-24;38.03
276000312341002;1002;276000312341002;2023-07-24;40.12
276000312341003;1003;276000312341003;2023-07-24;39.97
…
```

Seuraava taulukko listaa ja kuvailee vientitiedoston sarakkeet, jotka sisältävät eläinten ruumiinlämpötilan arvot:

|Sarake| Sarakkeen nimi       | Kuvaus                                | Kommentit                                         |
|:-:|-----------------------|--------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-numeroinen eläimen mittausnumero   | [ISO1174/85][] mukainen, ei ehkä tallennettu      |
| 2 | `Farm-ID-Animal`      | Eläimen hallintanumero                | 2-6 numeroa, usein yhtä kuin kaulanumero          |
| 3 | `Date`                | Lämpötilan mittauspäivämäärä          | Muoto: `YYYY-MM-TT` (`Vuosi-Kuukausi-Päivä`)      |
| 4 | `Time`                | Lämpötilan mittausaika                | Muoto: `hh-mm-ss` (`tunti:minuutti:sekunti`)      |
| 5 | `Temperature-Celsius` | Mitattu lämpötila-arvo                | Yksikkö: `Celsiusaste`                            |

Tarvittaessa voit myös ladata tarjotun näytetiedoston [temperatures.csv][]. Alla oleva kuva näyttää tämän datatiedoston avattuna taulukkolaskentaohjelmassa.

![Vientitiedosto ruumiinlämpötila-arvoilla, avattuna taulukkolaskentaohjelmassa](../images/temperatures.png "Taulukko lämpötila-arvoista")

[temperatures.csv]: /data-export/temperatures.csv

### Painotiedot (`weights.csv`) {#weight-data-weightscsv}

- **Tiedoston nimi** `weights.csv`
- **Kuvaus** Eläinten punnitsemalla saadut painoarvot
- **Sarakkeiden määrä** 5

Jokainen painotaulukon rivi edustaa yhtä eläimen punnitusta käyttäen VitalControl-laitetta painoarvon tallentamiseen. Esimerkillinen painotaulukko näyttää seuraavalta:

```csv
National-ID-Animal;Farm-ID-Animal;Date;Time;Weight-Kg
276000312341001;1001;276000312341001;2023-07-24;67.8
276000312341002;1002;276000312341002;2023-07-24;F;40.4
276000312341003;1003;276000312341003;2023-07-24;F;104.2
…
```

Alla oleva taulukko luettelee ja kuvaa eläinten painotaulukon yksittäiset sarakkeet:

|Sarake| Sarakkeen nimi       | Kuvaus                               | Kommentit                                       |
|:-:|-----------------------|-------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-numeroinen numero punnitusta eläimestä | [ISO1174/85][], ei ehkä tallennettu             |
| 2 | `Farm-ID-Animal`      | Punnitun eläimen hallintanumero     | 2-6 numeroa, usein sama kuin kaulanumero        |
| 3 | `Päivämäärä`          | Punniuksen päivämäärä               | Muoto: `VVVV-KK-PP` (`Vuosi-Kuukausi-Päivä`)    |
| 4 | `Aika`                | Punniuksen aika                     | Muoto: `tt-mm-ss` (`tunti:minuutti:sekunti`)    |
| 5 | `Paino-Kg`            | Painoarvo                           | Yksikkö: `Kilogramma`                           |

Tarvittaessa voit myös ladata tarjotun näytetiedoston [weights.csv][]. Alla oleva kuva näyttää tämän vientitiedoston avattuna taulukkolaskentaohjelmassa.

![Vientitiedosto eläinten painoarvoilla, avattuna taulukkolaskentaohjelmassa](../images/weights.png "Taulukon painoarvot")

[weights.csv]: /data-export/weights.csv

### Eläinten arvioinnit (`ratings.csv`) {#animal-ratings-ratingscsv}

- **Tiedostonimi** `ratings.csv`
- **Kuvaus** Eläinten arvioinnit, jotka saadaan visuaalisesti tarkastelemalla eläimiä
- **Sarakkeiden määrä** 8

Jokainen eläinten arviointitaulukon rivi edustaa visuaalista arviointia eläimen arvioinnista, joka on suoritettu VitalControlilla. Esimerkillinen taulukko eläinten arvioinnista on seuraavanlainen:

```csv
National-ID-Animal;Farm-ID-Animal;Date;Time;ScoreCondition;ScoreFeedIntake;ScoreScours;ScoreRespiratory
276000312341001;1001;276000312341001;2023-07-24;Green;Yellow;Yellow;Green
276000312341002;1002;276000312341002;2023-07-24;Yellow;Yellow;Yellow;Red
276000312341003;1003;276000312341003;2023-07-24;Green;None;None;None
…
```

Alla oleva taulukko luettelee ja kuvaa eläinten arviointitaulukon jokaisen sarakkeen:

|Sarake| Sarakkeen nimi       | Kuvaus                                   | Kommentit                                        |
|:-:|-----------------------|-----------------------------------------|-------------------------------------------------|
| 1 | `Kansallinen-ID-Eläin`| 15-numeroinen numero arvioidusta eläimestä | [ISO1174/85][] mukaan, ei ehkä tallennettu      |
| 2 | `Tila-ID-Eläin`       | Arvioidun eläimen hallintanumero         | 2-6 numeroa, usein sama kuin kaulanumero        |
| 3 | `Päivämäärä`          | Arvioinnin päivämäärä                    | Muoto: `VVVV-KK-PP` (`Vuosi-Kuukausi-Päivä`)    |
| 4 | `Aika`                | Arvioinnin aika                          | Muoto: `tt-mm-ss` (`tunti:minuutti:sekunti`)    |
| 5 | `Kuntoarvio`          | Yleiskunnon arviointi                    | _Arviot:_ `Punainen`, `Keltainen`, `Vihreä`, `Ei`|
| 6 | `Rehuarvio`           | Rehunsaannin arviointi                   | _Arviot:_ `Punainen`, `Keltainen`, `Vihreä`, `Ei`|
| 7 | `Ripuliarvio`         | Tilan arviointi koskien `Ripulia`        | _Arviot:_ `Punainen`, `Keltainen`, `Vihreä`, `Ei`|
| 8 | `Hengitysarvio`       | `Hengityssairauksien` tilan arviointi    | _Arviot:_ `Punainen`, `Keltainen`, `Vihreä`, `Ei`|

Tarvittaessa voit myös ladata tarjotun näytetiedoston [ratings.csv][]. Alla oleva kuva näyttää tämän tiedoston avattuna taulukkolaskentaohjelmassa.

![Eläinten arviointitiedosto avattuna taulukkolaskentaohjelmassa](../images/ratings.png "Eläinten arviointitaulukko")

[ratings.csv]: /data-export/ratings.csv
