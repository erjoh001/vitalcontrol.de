---
title: Osetettuja eläimiä
linkTitle: Osetettuja eläimiä
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
## Osetettuja eläimiä {#purchased-animals}

Tässä luettelossa löydät kaikki eläimet, jotka olet luonut joukkotallennuksen kautta. Voit viedä tämän luettelon ja siten rekisteröidä lisäyksesi suoraan karjanhallintaohjelmaan DSP-Herde ja HI-Tier. Vaihtoehtoisesti voit poistaa kaikki ostoilmoitukset.

{{% alert title="Vihje" %}}
Tietojen viemiseen tarvitset mukana tulevan UBS-tikun. Yhdistä USB-tikku USB-C-sovittimella VitalControl-laitteeseesi ennen ohjeiden noudattamista.
{{% /alert %}}

1. VitalControl-laitteesi päävalikossa valitse valikkokohta <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Uutta tilalla" /> `{{<T "NewOnFarm" >}}` ja paina `{{<T "Ok" >}}`-painiketta.

2. Avautuu alivalikko, jossa voit valita välillä <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Uutta tilalla, ei transponderia" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Osetettuja eläimiä" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Ei eläintunnusta" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Syntymät" /> `{{<T "Births" >}}` ja <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Ei transponderia" /> `{{<T "NoTransponderAssigned" >}}`. Käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi valikkokohdan <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Osetettuja eläimiä" /> `{{<T "PurchasedAnimals" >}}` ja vahvista `{{<T "Ok" >}}`.

3. Avautuu luettelo ostoksistasi, jotka olet rekisteröinyt joukkotallennusvalikon kautta.

4. Käytä `F2`-näppäintä `{{<T "CSVExport" >}}`.

5. CSV-viestilista tallennetaan nyt USB-tikullesi.

![VitalControl: Ostettujen eläinten lista, csv-vienti](../images/purchasedanimals.png "Osetettuja eläimiä, csv-vienti")

## Vaihtoehdot: Poista kaikki ilmoitukset viennin jälkeen {#options-delete-all-notices-after-export}

Tällä vaihtoehdolla voit asettaa, poistetaanko kaikki viestit `{{<T "PurchasedAnimals" >}}` -listalta CSV-tiedoston viennin jälkeen. Käytä tätä vaihtoehtoa vain, jos olet varma, että et enää tarvitse viestejä!

1. Käytä `F3`-näppäintä. Alivalikko avautuu.

2. Käytä nuolinäppäimiä △ ▽ valitaksesi valikkokohdan `{{<T "DeleteAllNoticesAfterExport" >}}` ja vahvista `{{<T "Ok" >}}`:lla.

3. Ruutu on nyt merkitty rastilla. Vaihtoehto on aktivoitu. Vahvista uudelleen `{{<T "Ok" >}}`:lla poistaaksesi vaihtoehdon.

    ![VitalControl: Ostettujen eläinten lista, csv-vienti](../images/delete-all.png "Poista kaikki ilmoitukset viennin jälkeen")    

## Suorat toimintokutsut {#direct-function-calls}

Lisäksi vientitiedoston luomisen lisäksi sinulla on seuraavat vaihtoehdot:

- [Poista transponderin linkitvs](#unlink-transponder)
- [Tyhjennä kaikki ostoilmoitukset](#clear-all-purchase-notices)
- [Poista eläin + ilmoitus](#delete-animal--purchase-notice)
- [Tyhjennä ostoilmoitus](#clear-notice-of-purchase)
- [Muokkaa merkintää](#edit-data-of-purchased-animal)

{{% alert title="Vinkki" %}}
Avaa aina ensin `{{<T "PurchasedAnimals" >}}` -lista kuten yllä olevissa ohjeissa on kuvattu.
{{% /alert %}}

### Poista transponderin linkitvs {#unlink-transponder}

Voit käyttää tätä toimintoa poistaaksesi lähettimen eläimestä.

1. Käytä `F3`-näppäintä. Alivalikko avautuu.

2. Käytä nuolinäppäimiä △ ▽ valitaksesi valikkokohdan `{{<T "UnlinkTransponder" >}}` ja vahvista `{{<T "Ok" >}}`:lla.

3. Lähetin on onnistuneesti irrotettu.

    ![VitalControl: Ostettujen eläinten lista, csv-vienti](../images/unlink-transponder.png "Osetettuja eläimiä, Poista transponderin linkitvs")

### Tyhjennä kaikki ostoilmoitukset {#clear-all-purchase-notices}

Tällä toiminnolla voit poistaa kaikki eläimet `{{<T "PurchasedAnimals" >}}` -listalta luomatta ensin vientitiedostoa.

1. Käytä `F3`-näppäintä. Alivalikko avautuu.

2. Käytä nuolinäppäimiä △ ▽ valitaksesi valikkokohdan `{{<T "ClearAllPurchaseNotices" >}}` ja vahvista `{{<T "Ok" >}}`:lla.

3. Ostoilmoitukset on onnistuneesti poistettu.

![VitalControl: Lista ostetuista eläimistä, tyhjennä ostohuomautukset](../images/clear.png "Tyhjennä kaikki ostohuomautukset")

### Poista eläin + ilmoituks {#delete-animal--purchase-notice}

Eläimen ja siihen liittyvän ostohuomautuksen poistaminen tapahtuu seuraavasti:

1. Käytä nuolinäppäimiä △ ▽ valitaksesi poistettavan eläimen.

2. Paina `F3`-näppäintä. Alivalikko avautuu.

3. Käytä nuolinäppäimiä △ ▽ valitaksesi valikkokohdan `{{<T "UnregisterAnimalAndBirthNotice" >}}` ja vahvista `{{<T "Ok" >}}`.

4. Eläin ja pääsyviesti on poistettu onnistuneesti.

![VitalControl: Lista ostetuista eläimistä, poista eläin + huomautus](../images/delete.png "Poista eläin + huomautus")

### Tyhjennä ostoilmoitus {#clear-notice-of-purchase}

Eläimen ostohuomautuksen poistaminen listalta tapahtuu seuraavasti:

1. Käytä nuolinäppäimiä △ ▽ valitaksesi eläimen, jonka ostohuomautuksen haluat poistaa.

2. Paina `F3`-näppäintä. Alivalikko avautuu.

3. Käytä nuolinäppäimiä △ ▽ valitaksesi valikkokohdan `{{<T "ClearPurchaseNotice" >}}` ja vahvista `{{<T "Ok" >}}`.

4. Valitun eläimen ostohuomautus on poistettu onnistuneesti.

![VitalControl: Lista ostetuista eläimistä, tyhjennä ostohuomautus](../images/clearnotice.png "Tyhjennä ostoilmoitus")

### Muokkaa ostetun eläimen tietoja {#edit-data-of-purchased-animal}

Ostoslistan eläimen tietojen muokkaaminen tapahtuu seuraavasti:

1. Käytä nuolinäppäimiä △ ▽ valitaksesi muokattavan eläimen.

2. Paina `{{<T "Ok" >}}`-painiketta. Alivalikko eläimen tiedoilla avautuu. Tietojen muokkaamisesta voit lukea [täältä](/fi/docs/actions/edit/).

![VitalControl: Lista ostetuista eläimistä, Muokkaa eläimen tietoja](../images/edit.png "Muokkaa ostetun eläimen tietoja")
