---
title: "Tuoreiden lehmien lista"
linkTitle: "Tuoreiden lehmien lista"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: fresh-cows
description: >
  Helpottaa tuoreiden lehmiesi hallintaa.
luokat: [Listat]
tagit: [Listat, tuore lehmä]
translationKey: lists/fresh-cows
---
### Tuoreiden lehmien lista {#fresh-cows-list}

{{% alert title="Selitys" %}}
Tuoreiden lehmien hallinnassa pidetään parhaana käytäntönä tarkistaa eläimet päivittäin usean päivän ajan synnytyksen jälkeen. Tuoreiden lehmien lista tukee tätä tuoreiden lehmien hallintaa, erityisesti lämpötilan kirjaamisen osalta. Jokaiselle eläimelle näytetään pylväskaavio kaikilta valvontajakson päiviltä, ja jokainen valvontajakson päivä esitetään pystypalkkina. Palkin värin (vihreä, keltainen tai punainen) perusteella näet, mitattiinko kyseisenä päivänä kyseiselle eläimelle normaali, kohonnut tai kriittisesti kohonnut lämpötila.
{{% /alert %}}

Lehmät lisätään tuoreiden lehmien listalle heti, kun niiden poikiminen on rekisteröity. Ne pysyvät listalla tietyn ajanjakson, jonka pituuden (päivinä) voi säätää [asetuksissa](../../settings/data-acquisition/#control-period-of-fresh-cows)).
Seuraavat toiminnot ovat käytettävissä tällä listalla:

- [Täysi toimintovalikko](../alarm/#full-action-menu)
- [Tietoa eläimistä](../alarm/#animal-data)
- [Mittaa lämpötila](../alarm/#take-temperature)
- [Vaihda hälytyksen tila](#toggle-alarm-status)
- [Vaihda seurantatila](#toggle-watch-status)
- [Piilota mitatut lehmät](#hide-measured-cows)
- [Etsi eläin](../alarm/#search-animal)
- [Aseta suodatin](../alarm/#set-filter)

{{% alert title="Vihje" %}}
Jotkut toiminnot suoritetaan samalla tavalla kuin [hälytyslistassa](../alarm). Niitä ei selitetä tässä. Suorita alustavat vaiheet ja käytä kyseisen toiminnon linkkiä ohjeiden saamiseksi.
{{% /alert %}}

### Alustavat vaiheet {#preliminary-steps}

1. Valitse <img src="/icons/main/lists.svg" width="25" align="bottom" alt="Listat" /> `{{<T "Lists" >}}` -valikkokohta VitalControl-laitteesi päävalikosta ja paina `{{<T "Ok" >}}` -painiketta.

2. Alivalikko avautuu, jossa näkyy erilaisia listoja. Valitse `{{<T "FreshCows" >}}` -lista <img src="/icons/lists/freshcows.svg" width="30" align="bottom" alt="Fresh-cows" />. Vahvista valinta painamalla `{{<T "Ok" >}}`.

3. Tunnutettavat lehmät -lista on nyt avoinna.

   ![VitalControl Lists Fresh cows list](../images/firststeps4.png "Tuore lehmälista")

### Vaihda hälytyksen tila {#toggle-alarm-status}

1. Suorita alustavat vaiheet.

2. Käytä `F3`-näppäintä &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; avataksesi ponnahdusvalikon, joka näyttää mahdolliset toiminnot painettaessa `{{<T "Ok" >}}`-näppäintä. Käytä nuolinäppäimiä △ ▽ korostaaksesi toiminnon `{{<T "ToggleAlarmStatus" >}}` ja valitse tämä vaihtoehto painamalla keskimmäistä `{{<T "Ok" >}}`-painiketta tai `F3`-näppäintä `{{<T "Ok" >}}`.

3. Tuoreiden lehmien listalla käytä nuolinäppäimiä △ ▽ valitaksesi haluamasi eläin ja vahvista valinta painamalla `{{<T "Ok" >}}`. Vaihtoehtoisesti voit etsiä eläintä. Käytä `On/Off`-painiketta <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ja käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi haluamasi numerot. Lopuksi vahvista valinta painamalla `{{<T "Ok" >}}`.

4. Eläin on nyt lisätty tai poistettu hälytyslistalta sen alkuperäisen tilan mukaan.

   ![VitalControl Lists Fresh cows list](../images/togglealarmstatus.png "Vaihda hälytyksen tila")

### Vaihda seurantatila {#toggle-watch-status}

1. Suorita alustavat vaiheet.

2. Käytä `F3`-näppäintä &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; avataksesi ponnahdusvalikon, joka näyttää mahdolliset toiminnot painettaessa `{{<T "Ok" >}}`-näppäintä. Käytä nuolinäppäimiä △ ▽ korostaaksesi toiminnon `{{<T "ToggleWatchStatus" >}}` ja valitse tämä vaihtoehto painamalla keskimmäistä `{{<T "Ok" >}}`-painiketta tai `F3`-näppäintä `{{<T "Ok" >}}`.

3. Tuoreiden lehmien listalla käytä nuolinäppäimiä △ ▽ valitaksesi haluamasi eläin ja vahvista valinta painamalla `{{<T "Ok" >}}`. Vaihtoehtoisesti voit etsiä eläintä. Käytä `On/Off`-painiketta <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ja käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi haluamasi numerot. Lopuksi vahvista valinta painamalla `{{<T "Ok" >}}`.

4. Eläin on nyt lisätty tai poistettu tarkkailulistalta sen alkuperäisen tilan mukaan.

![VitalControl Lists Fresh cows list](../images/togglewatchstatus.png "Toggle watch status")

### Piilota mitatut lehmät {#hide-measured-cows}

Jos tämä toiminto on aktivoitu, kuivalistalta piilotetaan ne eläimet, joille on suoritettu lämpötilamittaus. Jos toiminto ei ole aktivoitu, eläimet pysyvät näkyvillä listalla.

1. Suorita alustavat vaiheet.

2. Käytä `F3`-näppäintä &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Toiminnot" />&nbsp; avataksesi ponnahdusvalikon, joka listaa eri vaihtoehdot. Käytä nuolinäppäimiä △ ▽ korostaaksesi vaihtoehdon `{{<T "HideMeasuredCows" >}}` ja vaihda tämä asetus painamalla keskimmäistä `{{<T "Ok" >}}`-painiketta tai `F3`-näppäintä `{{<T "Ok" >}}`.

3. Tuoreiden lehmien listalla käytä nuolinäppäimiä △ ▽ valitaksesi haluamasi eläin ja vahvista `{{<T "Ok" >}}`:lla. Vaihtoehtoisesti voit etsiä eläintä. Käytä `On/Off`-painiketta <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Haku" /> ja käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi haluamasi numerot. Lopuksi vahvista `{{<T "Ok" >}}`:lla.

4. Toiminto `{{<T "HideMeasuredCows" >}}` on nyt aktivoitu. Aktivointi osoitetaan ruutua rastittamalla.

   ![VitalControl Lists Fresh cows list](../images/hidemeasuredcows.png "Piilota mitatut lehmät")
