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
## Syntymät {#births}

Tässä luettelossa voit tarkastella syntyneitä, muokata niitä ja luoda vientitiedoston rekisteröitäväksi HI-Tier-järjestelmään. Vientitiedoston luomiseksi toimi seuraavasti:

{{% alert title="Vinkki" %}}
Tietojen viemiseen tarvitset mukana tulevan UBS-tikun. Yhdistä USB-tikku USB-C-sovittimella VitalControl-laitteeseesi ennen ohjeiden seuraamista.
{{% /alert %}}

1. VitalControl-laitteesi päävalikossa valitse valikkokohta <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Uusi tilalla" /> `{{<T "NewOnFarm" >}}` ja paina `{{<T "Ok" >}}`-nappia.

2. Alavalikko avautuu, jossa voit valita kohteiden <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Uusi tilalla, ei transponderia" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Ostettuja eläimet" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Ei eläintunnusta" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Syntymät" /> `{{<T "Births" >}}` ja <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Ei Transponderia" /> `{{<T "NoTransponderAssigned" >}}` välillä. Käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi valikkokohdan <img src="/icons/main/births.svg" width="40" align="bottom" alt="Syntymät" /> `{{<T "Births" >}}` ja vahvista painamalla `{{<T "Ok" >}}`.

3. Avautuu lista kaikista syntymistäsi.

4. Käytä `F3`-näppäintä `{{<T "ExportListBirths" >}}`. Alavalikko avautuu.

5. Käytä nuolinäppäimiä △ ▽ valitaksesi valikkokohdan `{{<T "ExportListBirths" >}}` ja vahvista painamalla `{{<T "Ok" >}}`.

6. Lista tallennetaan nyt CSV-tiedostona USB-tikullesi. Kaikki `{{<T "Births" >}}`-listan eläimet poistetaan.

    ![VitalControl: Valikko Uusi tilalla Syntymät](../images/births.png "Syntymät")

## Asetusten määrittäminen {#setting-options}

Lisäksi vientitiedoston luomiseen, sinulla on seuraavat vaihtoehdot:

- [Vaihda](#change-between-list-view-and-single-animal-view) listanäkymän ja yksittäisen eläinnäkymän välillä
- [Tyhjennä kaikki syntymäilmoitukset](../purchased-animals/#clear-all-purchase-notices)
- [Poista eläin + ilmoitukset](../purchased-animals/#delete-animal--purchase-notice)
- [Tyhjennä ostoilmoitus](../purchased-animals/#clear-notice-of-purchase)
- [Muokkaa](#edit-data-of-birth-notice) ilmoitusta

{{% alert title="Vinkki" %}}
Jotkut toiminnot ovat identtisiä `{{<T "PurchasedAnimals" >}}` -listan toimintoihin. Seuraa linkkejä vaiheittaisiin ohjeisiin. Avaa aina ensin `{{<T "Births" >}}`-lista kuten yllä olevissa ohjeissa on kuvattu.
{{% /alert %}}

### Vaihda listanäkymä ja yksittäisen eläinnäkymän välillä {#change-between-list-view-and-single-animal-view}

1. Käytä <img src="/icons/gear.svg" width="25" align="bottom" alt="Vaihde" /> `On /Off` -painiketta.

2. Käytä nuolinäppäimiä ◁ ▷ valitaksesi `{{<T "ListView" >}}` ja `{{<T "SingleAnimalView" >}}` välillä.

3. Tallenna asetuksesi `F1`-näppäimellä &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Tallenna ja palaa" />&nbsp;. Listanäkymässä käytä nuolinäppäimiä ◁ ▷ vaihtaaksesi eläinten välillä.

    ![VitalControl: Menu New on farm Births](../images/change.png "Vaihda listanäkymän ja yksittäisen eläinnäkymän välillä")

### Muokkaa syntymäilmoituksen tietoja {#edit-data-of-birth-notice}

{{% alert title="Vinkki" %}}
Eläintietojen muokkaaminen on mahdollista vain listanäkymässä!
{{% /alert %}}

1. Käytä nuolinäppäimiä △ ▽ valitaksesi muokattavan eläimen ja vahvista `{{<T "Ok" >}}`.

2. Alivalikko avautuu, jossa voit säätää erilaisia asetuksia. Vaiheittaisiin ohjeisiin pääset klikkaamalla [tästä](/fi/docs/new/calving/).

    ![VitalControl: Menu New on farm Births](../images/edit2.png "Muokkaa syntymäilmoitusta")
