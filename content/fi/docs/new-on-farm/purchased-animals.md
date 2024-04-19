---
title: Ostetut eläimet
linkTitle: Ostetut eläimet
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: purchased-animals
description: >
  Täältä voit tarkastella nykyisiä ostoksiasi ja viedä tiedot.
categories: [Uutta tilalla]
tags: [Uutta tilalla]
translationKey: new-on-farm/new-on-farm
---
## Ostetut eläimet

Tässä luettelossa löydät kaikki eläimet, jotka olet luonut joukkotallennuksen kautta. Voit viedä tämän luettelon ja siten rekisteröidä lisäyksesi suoraan karjanhallintaohjelmaan DSP-Herde ja HI-Tier. Vaihtoehtoisesti voit poistaa kaikki ostoilmoitukset.

{{% alert title="Vihje" %}}
Tietojen viemiseen tarvitset mukana tulevan UBS-tikun. Yhdistä USB-tikku USB-C-sovittimella VitalControl-laitteeseesi ennen ohjeiden noudattamista.
{{% /alert %}}

1. VitalControl-laitteesi päävalikossa valitse valikkokohta <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Uutta tilalla" /> `Uutta tilalla` ja paina `OK`-painiketta.

2. Avautuu alivalikko, jossa voit valita välillä <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Uutta tilalla, ei lähetintä" /> `Uutta tilalla, ei lähetintä`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Ostetut eläimet" /> `Ostetut eläimet`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Ei kansallista eläintunnusta" /> `Ei kansallista eläintunnusta`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Syntymät" /> `Syntymät` ja <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Ei lähetintä" /> `Ei lähetintä`. Käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi valikkokohdan <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Ostetut eläimet" /> `ostetut eläimet` ja vahvista `OK`.

3. Avautuu luettelo ostoksistasi, jotka olet rekisteröinyt joukkotallennusvalikon kautta.

4. Käytä `F2`-näppäintä `CSV-vienti`.

5. CSV-viestilista tallennetaan nyt USB-tikullesi.

![VitalControl: Ostettujen eläinten lista, csv-vienti](../images/purchasedanimals.png "Ostetut eläimet, csv-vienti")

## Vaihtoehdot: Poista kaikki ilmoitukset viennin jälkeen

Tällä vaihtoehdolla voit asettaa, poistetaanko kaikki viestit `Ostetut eläimet` -listalta CSV-tiedoston viennin jälkeen. Käytä tätä vaihtoehtoa vain, jos olet varma, että et enää tarvitse viestejä!

1. Käytä `F3`-näppäintä. Alivalikko avautuu.

2. Käytä nuolinäppäimiä △ ▽ valitaksesi valikkokohdan `Poista kaikki ilmoitukset viennin jälkeen` ja vahvista `OK`:lla.

3. Ruutu on nyt merkitty rastilla. Vaihtoehto on aktivoitu. Vahvista uudelleen 'OK':lla poistaaksesi vaihtoehdon.

    ![VitalControl: Ostettujen eläinten lista, csv-vienti](../images/delete-all.png "Poista kaikki ilmoitukset viennin jälkeen")    

## Suorat toimintokutsut

Lisäksi vientitiedoston luomisen lisäksi sinulla on seuraavat vaihtoehdot:

- [Irrota lähetin](#unlink-transponder)
- [Tyhjennä kaikki ostettujen ilmoitukset](#clear-all-purchase-notices)
- [Poista eläin + ilmoitus](#delete-animal--purchase-notice)
- [Tyhjennä ostoilmoitus](#clear-notice-of-purchase)
- [Muokkaa merkintää](#edit-data-of-purchased-animal)

{{% alert title="Vinkki" %}}
Avaa aina ensin `ostetut eläimet` -lista kuten yllä olevissa ohjeissa on kuvattu.
{{% /alert %}}

### Irrota lähetin

Voit käyttää tätä toimintoa poistaaksesi lähettimen eläimestä.

1. Käytä `F3`-näppäintä. Alivalikko avautuu.

2. Käytä nuolinäppäimiä △ ▽ valitaksesi valikkokohdan `irrota lähetin` ja vahvista `OK`:lla.

3. Lähetin on onnistuneesti irrotettu.

    ![VitalControl: Ostettujen eläinten lista, csv-vienti](../images/unlink-transponder.png "Ostetut eläimet, irrota lähetin")

### Tyhjennä kaikki ostoilmoitukset

Tällä toiminnolla voit poistaa kaikki eläimet `Ostetut eläimet` -listalta luomatta ensin vientitiedostoa.

1. Käytä `F3`-näppäintä. Alivalikko avautuu.

2. Käytä nuolinäppäimiä △ ▽ valitaksesi valikkokohdan `Tyhjennä kaikki ostoilmoitukset` ja vahvista `OK`:lla.

3. Ostoilmoitukset on onnistuneesti poistettu.

![VitalControl: Lista ostetuista eläimistä, tyhjennä ostohuomautukset](../images/clear.png "Tyhjennä kaikki ostohuomautukset")

### Poista eläin + ostohuomautus

Eläimen ja siihen liittyvän ostohuomautuksen poistaminen tapahtuu seuraavasti:

1. Käytä nuolinäppäimiä △ ▽ valitaksesi poistettavan eläimen.

2. Paina `F3`-näppäintä. Alivalikko avautuu.

3. Käytä nuolinäppäimiä △ ▽ valitaksesi valikkokohdan `Poista eläin + huomautus` ja vahvista `OK`.

4. Eläin ja pääsyviesti on poistettu onnistuneesti.

![VitalControl: Lista ostetuista eläimistä, poista eläin + huomautus](../images/delete.png "Poista eläin + huomautus")

### Tyhjennä ostohuomautus

Eläimen ostohuomautuksen poistaminen listalta tapahtuu seuraavasti:

1. Käytä nuolinäppäimiä △ ▽ valitaksesi eläimen, jonka ostohuomautuksen haluat poistaa.

2. Paina `F3`-näppäintä. Alivalikko avautuu.

3. Käytä nuolinäppäimiä △ ▽ valitaksesi valikkokohdan `Tyhjennä ostohuomautus` ja vahvista `OK`.

4. Valitun eläimen ostohuomautus on poistettu onnistuneesti.

![VitalControl: Lista ostetuista eläimistä, tyhjennä ostohuomautus](../images/clearnotice.png "Tyhjennä ostohuomautus")

### Muokkaa ostetun eläimen tietoja

Ostoslistan eläimen tietojen muokkaaminen tapahtuu seuraavasti:

1. Käytä nuolinäppäimiä △ ▽ valitaksesi muokattavan eläimen.

2. Paina `OK`-painiketta. Alivalikko eläimen tiedoilla avautuu. Tietojen muokkaamisesta voit lukea [täältä](/fi/docs/actions/edit/#edit-animal-data).

![VitalControl: Lista ostetuista eläimistä, Muokkaa eläimen tietoja](../images/edit.png "Muokkaa ostetun eläimen tietoja")
