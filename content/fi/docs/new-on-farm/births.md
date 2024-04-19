---
title: "Syntymät"
linkTitle: "Syntymät"
weight: 35
date: 2023-07-28T13:25:28+02:00
draft: false
slug: births
description: >
  Täältä voit tarkastella syntyneitä ja luoda vientitiedoston.
categories: [Syntymät]
tags: [Syntymät]
translationKey: new-on-farm/births
---
## Syntymät

Tässä luettelossa voit tarkastella syntyneitä, muokata niitä ja luoda vientitiedoston rekisteröitäväksi HI-Tier-järjestelmään. Vientitiedoston luomiseksi toimi seuraavasti:

{{% alert title="Vinkki" %}}
Tietojen viemiseen tarvitset mukana tulevan UBS-tikun. Yhdistä USB-tikku USB-C-sovittimella VitalControl-laitteeseesi ennen ohjeiden seuraamista.
{{% /alert %}}

1. VitalControl-laitteesi päävalikossa valitse valikkokohta <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Uusi tilalla" /> `Uusi tilalla` ja paina `OK`-nappia.

2. Alavalikko avautuu, jossa voit valita kohteiden <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Uusi tilalla, ei lähetintä" /> `Uusi tilalla, ei lähetintä`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Ostetut eläimet" /> `Ostetut eläimet`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Ei kansallista eläin-ID:tä" /> `Ei kansallista eläin-ID:tä`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Syntymät" /> `Syntymät` ja <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Ei lähetintä" /> `Ei lähetintä` välillä. Käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi valikkokohdan <img src="/icons/main/births.svg" width="40" align="bottom" alt="Syntymät" /> `Syntymät` ja vahvista painamalla `OK`.

3. Avautuu lista kaikista syntymistäsi.

4. Käytä `F3`-näppäintä `Vie syntymälista`. Alavalikko avautuu.

5. Käytä nuolinäppäimiä △ ▽ valitaksesi valikkokohdan `Vie syntymien csv-lista` ja vahvista painamalla `OK`.

6. Lista tallennetaan nyt CSV-tiedostona USB-tikullesi. Kaikki `Syntymät`-listan eläimet poistetaan.

    ![VitalControl: Valikko Uusi tilalla Syntymät](../images/births.png "Syntymät")

## Asetusten määrittäminen

Lisäksi vientitiedoston luomiseen, sinulla on seuraavat vaihtoehdot:

- [Vaihda](#change-between-list-view-and-single-animal-view) listanäkymän ja yksittäisen eläinnäkymän välillä
- [Tyhjennä kaikki syntymäilmoitukset](../purchased-animals/#clear-all-purchase-notices)
- [Poista eläin + ilmoitukset](../purchased-animals/#delete-animal--purchase-notice)
- [Tyhjennä ostoilmoitus](../purchased-animals/#clear-notice-of-purchase)
- [Muokkaa](#edit-data-of-birth-notice) ilmoitusta

{{% alert title="Vinkki" %}}
Jotkut toiminnot ovat identtisiä `Ostetut eläimet` -listan toimintoihin. Seuraa linkkejä vaiheittaisiin ohjeisiin. Avaa aina ensin `Syntymät`-lista kuten yllä olevissa ohjeissa on kuvattu.
{{% /alert %}}

### Vaihda listanäkymän ja yksittäisen eläinnäkymän välillä

1. Käytä <img src="/icons/gear.svg" width="25" align="bottom" alt="Vaihde" /> `Päälle/Pois` -painiketta.

2. Käytä nuolinäppäimiä ◁ ▷ valitaksesi `listanäkymän` ja `eläinnäkymän` välillä.

3. Tallenna asetuksesi `F1`-näppäimellä &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Tallenna ja palaa" />&nbsp;. Listanäkymässä käytä nuolinäppäimiä ◁ ▷ vaihtaaksesi eläinten välillä.

    ![VitalControl: Menu New on farm Births](../images/change.png "Vaihda listanäkymän ja yksittäisen eläinnäkymän välillä")

### Muokkaa syntymäilmoituksen tietoja

{{% alert title="Vinkki" %}}
Eläintietojen muokkaaminen on mahdollista vain listanäkymässä!
{{% /alert %}}

1. Käytä nuolinäppäimiä △ ▽ valitaksesi muokattavan eläimen ja vahvista `OK`.

2. Alivalikko avautuu, jossa voit säätää erilaisia asetuksia. Vaiheittaisiin ohjeisiin pääset klikkaamalla [tästä](/fi/docs/new/calving/#register-a-calving).

    ![VitalControl: Menu New on farm Births](../images/edit2.png "Muokkaa syntymäilmoitusta")
