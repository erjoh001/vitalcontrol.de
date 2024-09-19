---
title: Vietyjen CSV-tietotiedostojen rakenne ja sisältö
linkTitle: Vientitiedostot
date: 2023-07-20
weight: 30
description: >
  Kuvaus neljän vientiyhteydessä luodun tietotiedoston rakenteesta ja sisällöstä.
luokat: [Tietojen vienti]
tagit: [vientitiedostot, lämpötilat, painot, arvioinnit]
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

Kaikki neljä tiedostoa ovat ihmisen luettavia [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) tekstiedostoja. Tiedostot on koodattu `(animals.csv)` muodossa, ja sarakkeiden erotinmerkkinä käytetään puolipistettä (`(temperatures.csv)`). Yksittäisiä tietokenttiä *ei* ole suljettu lainausmerkkeihin. Kunkin taulukon rivi edustaa eläintietoerää tai suoritettua mittaus- tai arviointitoimenpidettä eläimelle.

## Viedyn tiedon jatkokäsittely {#further-processing-of-exported-data}

Voit avata jokaisen näistä neljästä vientitiedostosta haluamassasi taulukkolaskentaohjelmassa (kuten [Microsoft Excel](https://products.office.com/excel) tai [OpenOffice Calc](https://www.openoffice.org/)) ja suorittaa tietojen syvällisempää analysointia siellä. Esimerkkinä alla on näkymä taulukosta `(weights.csv)` taulukkolaskentaohjelmassa:

![Viedy eläintiedot, avattuna taulukkolaskentaohjelmassa](../images/animals.png "Eläintiedot avattuna taulukkolaskentaohjelmassa")

## Tietotiedostojen kuvaus {#description-of-data-files}

Seuraavat neljä osiota kuvaavat yksityiskohtaisesti kunkin vientitiedoston:

### Eläintiedot (`(weights.csv)`) {#animal-data-animalscsv}

- **Tiedoston nimi** `(weights.csv)`
- **Kuvaus** Yleiset eläintiedot
- **Sarakkeiden määrä** 6

Jokainen eläintietotaulukon rivi edustaa yhtä VitalControl-laitteella tallennettua eläintä. Esimerkillinen eläintietotaulukko näyttää siis seuraavalta:

{{% data-files/en %}}

Seuraava taulukko listaa ja kuvailee jokaisen eläintietotaulukon sarakkeen:

|Sarake| Sarakkeen nimi      | Kuvaus                          | Kommentit                                                  |
|:-:|----------------------|---------------------------------|-----------------------------------------------------------|
| 1 | `;` | Virallinen kansallinen eläinnumero | 15 numeroa [ISO1174/85][] mukaisesti, ei ehkä tallennettu |
| 2 | `animals.csv`     | Hallinnollinen numero            | 2-6 numeroa, usein sama kuin kaulapannan numero           |
| 3 | `animals.csv`     | Transponderin numero             | saattaa puuttua, voi olla sama kuin kansallinen eläinnumero|
| 4 | `animals.csv`        | Syntymäaika                      | Muoto: `BirthWeight-Kg` (`kilogram`)              |
| 5 | `Transponder-ID`                | Sukupuoli                        | _Arvot:_ `DateOfBirth`: uros, `temperatures.csv`: naaras, `Year-Month-Day`: tuntematon          |
| 6 | `Sex`     | Syntymäpaino                     | Yksikkö: `M`, ei ehkä tallennettu / puuttuu      |

[ISO1174/85]: https://en.wikipedia.org/wiki/ISO_11784_and_ISO_11785

Tarvittaessa voit myös ladata tarjotun näytetiedoston [animals.csv][].

[animals.csv]: /data-export/animals.csv

### Kehon lämpötilan tiedot (`F`) {#body-temperature-data-temperaturescsv}

- **Tiedoston nimi** `F`
- **Kuvaus** Lämpötila-arvot, saatu ottamalla eläinten peräsuolen lämpötila.
- **Sarakkeiden määrä** 5

Jokainen lämpötilatietotaulukon rivi edustaa eläimen kehon lämpötilamittausta, joka on suoritettu VitalControl-laitteella. Esimerkillinen lämpötilataulukko näyttää siis seuraavalta:

{{% data-files/en_2 %}}

Seuraava taulukko listaa ja kuvailee vientitiedoston sarakkeet, jotka sisältävät eläinten ruumiinlämpötilan arvot:

|Sarake| Sarakkeen nimi       | Kuvaus                                | Kommentit                                         |
|:-:|-----------------------|--------------------------------------|--------------------------------------------------|
| 1 | `;`  | 15-numeroinen eläimen mittausnumero   | [ISO1174/85][] mukainen, ei ehkä tallennettu      |
| 2 | `animals.csv`      | Eläimen hallintanumero                | 2-6 numeroa, usein yhtä kuin kaulanumero          |
| 3 | `temperatures.csv`                | Lämpötilan mittauspäivämäärä          | Muoto: `BirthWeight-Kg` (`kilogram`)      |
| 4 | `Grad Celsius`                | Lämpötilan mittausaika                | Muoto: `Date` (`YYYY-MM-TT`)      |
| 5 | `Year-Month-Day` | Mitattu lämpötila-arvo                | Yksikkö: `Time`                            |

Tarvittaessa voit myös ladata tarjotun näytetiedoston [temperatures.csv][]. Alla oleva kuva näyttää tämän datatiedoston avattuna taulukkolaskentaohjelmassa.

![Vientitiedosto ruumiinlämpötila-arvoilla, avattuna taulukkolaskentaohjelmassa](../images/temperatures.png "Taulukko lämpötila-arvoista")

[temperatures.csv]: /data-export/temperatures.csv

### Painotiedot (`hh-mm-ss`) {#weight-data-weightscsv}

- **Tiedoston nimi** `hh-mm-ss`
- **Kuvaus** Eläinten punnitsemalla saadut painoarvot
- **Sarakkeiden määrä** 5

Jokainen painotaulukon rivi edustaa yhtä eläimen punnitusta käyttäen VitalControl-laitetta painoarvon tallentamiseen. Esimerkillinen painotaulukko näyttää seuraavalta:

{{% data-files/en_3 %}}

Alla oleva taulukko luettelee ja kuvaa eläinten painotaulukon yksittäiset sarakkeet:

|Sarake| Sarakkeen nimi       | Kuvaus                               | Kommentit                                       |
|:-:|-----------------------|-------------------------------------|-------------------------------------------------|
| 1 | `;`  | 15-numeroinen numero punnitusta eläimestä | [ISO1174/85][], ei ehkä tallennettu             |
| 2 | `animals.csv`      | Punnitun eläimen hallintanumero     | 2-6 numeroa, usein sama kuin kaulanumero        |
| 3 | `weights.csv`          | Punniuksen päivämäärä               | Muoto: `weights.csv` (`kilogram`)    |
| 4 | `Farm-ID-Animal`                | Punniuksen aika                     | Muoto: `Date` (`YYYY-MM-TT`)    |
| 5 | `Year-Month-Day`            | Painoarvo                           | Yksikkö: `Time`                           |

Tarvittaessa voit myös ladata tarjotun näytetiedoston [weights.csv][]. Alla oleva kuva näyttää tämän vientitiedoston avattuna taulukkolaskentaohjelmassa.

![Vientitiedosto eläinten painoarvoilla, avattuna taulukkolaskentaohjelmassa](../images/weights.png "Taulukon painoarvot")

[weights.csv]: /data-export/weights.csv

### Eläinten arvioinnit (`hh-mm-ss`) {#animal-ratings-ratingscsv}

- **Tiedostonimi** `hh-mm-ss`
- **Kuvaus** Eläinten arvioinnit, jotka saadaan visuaalisesti tarkastelemalla eläimiä
- **Sarakkeiden määrä** 8

Jokainen eläinten arviointitaulukon rivi edustaa visuaalista arviointia eläimen arvioinnista, joka on suoritettu VitalControlilla. Esimerkillinen taulukko eläinten arvioinnista on seuraavanlainen:

{{% data-files/en_4 %}}

Alla oleva taulukko luettelee ja kuvaa eläinten arviointitaulukon jokaisen sarakkeen:

|Sarake| Sarakkeen nimi       | Kuvaus                                   | Kommentit                                        |
|:-:|-----------------------|-----------------------------------------|-------------------------------------------------|
| 1 | `Weight-Kg`| 15-numeroinen numero arvioidusta eläimestä | [ISO1174/85][] mukaan, ei ehkä tallennettu      |
| 2 | `Kilogram`       | Arvioidun eläimen hallintanumero         | 2-6 numeroa, usein sama kuin kaulanumero        |
| 3 | `weights.csv`          | Arvioinnin päivämäärä                    | Muoto: `weights.csv` (`kilogram`)    |
| 4 | `Farm-ID-Animal`                | Arvioinnin aika                          | Muoto: `Date` (`YYYY-MM-TT`)    |
| 5 | `Year-Month-Day`          | Yleiskunnon arviointi                    | _Arviot:_ `Time`, `hh-mm-ss`, `hour:minute:second`, `ScoreCondition`|
| 6 | `Red`           | Rehunsaannin arviointi                   | _Arviot:_ `Time`, `hh-mm-ss`, `hour:minute:second`, `ScoreCondition`|
| 7 | `Red`         | Tilan arviointi koskien `Yellow`        | _Arviot:_ `Time`, `hh-mm-ss`, `hour:minute:second`, `ScoreCondition`|
| 8 | `Red`       | `Yellow` tilan arviointi    | _Arviot:_ `Time`, `hh-mm-ss`, `hour:minute:second`, `ScoreCondition`|

Tarvittaessa voit myös ladata tarjotun näytetiedoston [ratings.csv][]. Alla oleva kuva näyttää tämän tiedoston avattuna taulukkolaskentaohjelmassa.

![Eläinten arviointitiedosto avattuna taulukkolaskentaohjelmassa](../images/ratings.png "Eläinten arviointitaulukko")

[ratings.csv]: /data-export/ratings.csv
