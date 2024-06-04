---
title: "Hälytyslista"
linkTitle: "Hälytyslista"
weight: 10
date: 2023-07-28T13:25:28+02:00
draft: false
slug: alarm
description: >
  Tutustu hälytyslistaasi.
categories: [Listat]
tags: [Listat, hälytys]
translationKey: lists/alarm
---
## Hälytyslista {#alarm-list}

Hälytyslistalta löydät kaikki eläimet, jotka olet joko manuaalisesti lisännyt listaan tai kaikki eläimet, jotka olivat keltaisella tai punaisella alueella lämpötilaa mitattaessa. Lista auttaa sinua pitämään yleiskatsauksen kaikista huomionarvoisista eläimistä. Lisäksi voit tehdä seuraavat toimenpiteet kullekin listalla olevalle eläimelle:

- [Täysi toimintovalikko](#full-action-menu)
- [Tietoa eläimistä](#animal-data)
- [Mittaa lämpötila](#take-temperature)
- [Arvioi eläin](#rate-animal)
- [Tyhjennä hälytys](#clear-alarm)
- [Vaihda seurantatila](#toggle-watch-status)
- [Etsi eläin](#search-animal)
- [Aseta suodatin](#set-filter)

Hälytyslista on järjestetty seuraavasti:

   ![VitalControl Listat Hälytyslista](../images/alarmstructure.png "Hälytyslistan rakenne")

|Symboli   | Kuvaus
|-------  |----
| ![VitalControl Ikoni Eläimen pää](../images/kopf.png "Eläimen pää") | Näyttää kuinka monta eläintä on listalla
| ![VitalControl Ikoni ID](../images/ID.png "ID") | Näyttää, onko valittu eläin vasikka vai lehmä. Kliininen lämpömittari näyttää, oliko eläin viime mittauksessa keltaisella tai punaisella alueella. Eläimen ID näkyy symbolin alla.
| ![VitalControl Ikoni Arvostelu](../images/auge.png "Ikoni Arvostelu") | Viimeksi kirjattu arvostelu näkyy symbolin alla liikennevalojärjestelmän väreillä
| &nbsp;<img src="/icons/actions/temperature.svg" width="12" align="bottom" alt="Kehon lämpötila" title="Kehon lämpötila" /> | Viimeksi kirjattu kuumeen mittaus näkyy symbolin alla liikennevalojärjestelmän väreillä
| &nbsp;<img src="/icons/actions/rating.svg" width="25" align="bottom" alt="Eläimen arvostelu" title="Arvostelu" /> |Ympyrämerkki symbolin alla osoittaa, että eläin on vahtilistalla

### Alustavat askeleet {#preliminary-steps}

1. Valitse <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Listat" /> `{{<T "Lists" >}}` -valikko päävalikosta VitalControl-laitteellasi ja paina `{{<T "Ok" >}}` -nappia.

2. Alivalikko avautuu, jossa näkyy erilaisia listakuvakkeita. Korosta kuvake <img src="/icons/lists/alarmlist.svg" width="30" align="bottom" alt="Alarm" /> `{{<T "Alarm" >}}` ja vahvista valinta painamalla `{{<T "Ok" >}}`.

3. Hälytyslista on nyt avoinna.

   ![VitalControl Lists Alarmlist](../images/firststeps.png "Alustavat askeleet")

### Täydellinen toimintovalikko {#full-action-menu}

1. Suorita alustavat askeleet.

2. Käytä `F3`-näppäintä &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Avaa ponnahdusikkuna" />&nbsp; avataksesi ponnahdusvalikon, joka listaa mahdolliset toiminnot painettaessa `{{<T "Ok" >}}`-näppäintä. Käytä nuolinäppäimiä △ ▽ korostaaksesi toiminnon `{{<T "ActionMenu" >}}` ja valitse toiminto painamalla keskimmäistä `{{<T "Ok" >}}`-näppäintä tai `F3`-näppäintä `{{<T "Ok" >}}`.

3. Hälytyslistassa käytä nuolinäppäimiä △ ▽ valitaksesi haluamasi eläin ja vahvista painamalla `{{<T "Ok" >}}`. Vaihtoehtoisesti voit etsiä eläintä. Käytä `On/Off`-painiketta <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Haku" /> ja käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi haluamasi numerot. Lopuksi vahvista painamalla `{{<T "Ok" >}}`.

4. `{{<T "Actions" >}}`-valikko avautuu automaattisesti. Toimintojen käsittely löytyy [täältä](/fi/docs/actions/).

   ![VitalControl Lists Alarmlist](../images/actionmenu.png "Toimintovalikko")

### Tieto eläimistä {#animal-data}

1. Suorita alustavat askeleet.

2. Käytä `F3`-näppäintä &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Avaa ponnahdusikkuna" />&nbsp; avataksesi ponnahdusvalikon, joka listaa mahdolliset toiminnot painettaessa `{{<T "Ok" >}}`-näppäintä. Käytä nuolinäppäimiä △ ▽ korostaaksesi toiminnon `{{<T "AnimalData" >}}` ja valitse toiminto painamalla keskimmäistä `{{<T "Ok" >}}`-näppäintä tai `F3`-näppäintä `{{<T "Ok" >}}`.

3. Hälytyslistassa käytä nuolinäppäimiä △ ▽ valitaksesi haluamasi eläin ja vahvista painamalla `{{<T "Ok" >}}`. Vaihtoehtoisesti voit etsiä eläintä. Käytä `On/Off`-painiketta <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Haku" /> ja käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi haluamasi numerot. Lopuksi vahvista painamalla `{{<T "Ok" >}}`.

4. Tieto eläimistä näytetään nyt.

   ![VitalControl Lists Alarmlist](../images/animaldata.png "Tieto eläimistä")

### Mittaa lämpötila {#take-temperature}

1. Suorita alustavat vaiheet.

2. Käytä `F3`-näppäintä &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Avaa ponnahdusikkuna" />&nbsp; avataksesi ponnahdusvalikon, joka listaa mahdolliset toiminnot painettaessa `{{<T "Ok" >}}`-näppäintä. Käytä nuolinäppäimiä △ ▽ korostaaksesi toiminnon `{{<T "TempTaking" >}}` ja valitse toiminto painamalla keskimmäistä `{{<T "Ok" >}}`-näppäintä tai `F3`-näppäintä `{{<T "Ok" >}}`.

3. Hälytyslistassa käytä nuolinäppäimiä △ ▽ valitaksesi haluamasi eläin ja vahvista `{{<T "Ok" >}}`:lla. Voit myös etsiä eläintä. Käytä `On/Off`-näppäintä <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Haku" /> ja käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi haluamasi numerot. Lopuksi vahvista `{{<T "Ok" >}}`:lla.

4. [Mittaa lämpötila](/fi/docs/actions/measure-temperature/#measure-fever) -toiminto käynnistyy nyt automaattisesti.

   ![VitalControl Lists Alarmlist](../images/temperature.png "Mittaa lämpötila")

### Arvioi eläin {#rate-animal}

1. Suorita alustavat vaiheet.

2. Käytä `F3`-näppäintä &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Avaa ponnahdusikkuna" />&nbsp; avataksesi ponnahdusvalikon, joka listaa mahdolliset toiminnot painettaessa `{{<T "Ok" >}}`-näppäintä. Käytä nuolinäppäimiä △ ▽ korostaaksesi toiminnon `{{<T "RateAnimal" >}}` ja valitse toiminto painamalla keskimmäistä `{{<T "Ok" >}}`-näppäintä tai `F3`-näppäintä `{{<T "Ok" >}}`.

3. Hälytyslistassa käytä nuolinäppäimiä △ ▽ valitaksesi haluamasi eläin ja vahvista `{{<T "Ok" >}}`:lla. Voit myös etsiä eläintä. Käytä `On/Off`-näppäintä <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Haku" /> ja käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi haluamasi numerot. Lopuksi vahvista `{{<T "Ok" >}}`:lla.

4. [Arvioi eläin](/fi/docs/actions/rating/#rate-your-animals) -toiminto käynnistyy nyt automaattisesti.

   ![VitalControl Lists Alarmlist](../images/rateanimal.png "Arvioi eläin")

### Tyhjennä hälytys {#clear-alarm}

1. Suorita alustavat vaiheet.

2. Käytä `F3`-näppäintä &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Avaa ponnahdusikkuna" />&nbsp; avataksesi ponnahdusvalikon, joka listaa mahdolliset toiminnot painettaessa `{{<T "Ok" >}}`-näppäintä. Käytä nuolinäppäimiä △ ▽ korostaaksesi toiminnon `{{<T "ClearAlarm" >}}` ja valitse toiminto painamalla keskimmäistä `{{<T "Ok" >}}`-näppäintä tai `F3`-näppäintä `{{<T "Ok" >}}`.

3. Valitse hälytyslistalta haluamasi eläin nuolinäppäimillä △ ▽ ja vahvista valinta `{{<T "Ok" >}}`-painikkeella. Voit myös etsiä eläintä. Käytä `On/Off`-painiketta <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ja valitse haluamasi numerot nuolinäppäimillä ◁ ▷ △ ▽. Lopuksi vahvista valinta `{{<T "Ok" >}}`-painikkeella.

4. Eläin on nyt poistettu hälytyslistalta.

   ![VitalControl Lists Alarmlist](../images/clearalarm.png "Poista hälytys")

### Vaihda suerantatila {#toggle-watch-status}

1. Suorita alustavat vaiheet.

2. Käytä `F3`-näppäintä &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; avataksesi ponnahdusvalikon, joka listaa mahdolliset toiminnot painettaessa `{{<T "Ok" >}}`-näppäintä. Käytä nuolinäppäimiä △ ▽ korostaaksesi toiminnon `{{<T "ToggleWatchStatus" >}}` ja valitse toiminto painamalla keskimmäistä `{{<T "Ok" >}}`-näppäintä tai `F3`-näppäintä `{{<T "Ok" >}}`.

3. Valitse hälytyslistalta haluamasi eläin nuolinäppäimillä △ ▽ ja vahvista valinta `{{<T "Ok" >}}`-painikkeella. Voit myös etsiä eläintä. Käytä `On/Off`-painiketta <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ja valitse haluamasi numerot nuolinäppäimillä ◁ ▷ △ ▽. Lopuksi vahvista valinta `{{<T "Ok" >}}`-painikkeella.

4. Eläin on nyt lisätty tai poistettu vahtilistalta riippuen sen alkuperäisestä tilasta.

   ![VitalControl Lists Alarmlist](../images/watchlist.png "Vaihda suerantatila")

### Etsi eläin {#search-animal}

1. Suorita alustavat vaiheet.

2. Käytä `F3`-näppäintä &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; avataksesi ponnahdusvalikon, joka listaa eri vaihtoehdot. Käytä nuolinäppäimiä △ ▽ korostaaksesi toiminnon `{{<T "SearchAnimal" >}}` ja käynnistä etsintätoiminto painamalla keskimmäistä `{{<T "Ok" >}}`-näppäintä tai `F3`-näppäintä `{{<T "Ok" >}}`.

3. Käytä nuolinäppäimiä △ ▽ ◁ ▷ valitaksesi haluamasi eläimen tunnuksen. Voit myös etsiä eläintä. Käytä `On/Off`-painiketta <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ja valitse haluamasi numerot nuolinäppäimillä ◁ ▷ △ ▽. Lopuksi vahvista valinta `{{<T "Ok" >}}`.

![VitalControl Lists Alarmlist](../images/searchanimal.png "Etsi eläin")

### Aseta suodatin {#set-filter}

1. Suorita alustavat vaiheet.

2. Käytä `F3` näppäintä &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Avaa ponnahdusikkuna" />&nbsp; avataksesi ponnahdusvalikon, joka listaa eri vaihtoehtoja. Käytä nuolinäppäimiä △ ▽ korostaaksesi toiminnon `{{<T "SetFilter" >}}` ja kutsu suodatintoiminto painamalla keskimmäistä `{{<T "Ok" >}}` näppäintä tai `F3` näppäintä `{{<T "Ok" >}}`.

3. Aseta haluamasi suodatin. Ohjeet suodattimen käyttöön löydät [täältä](../../filter/).

   ![VitalControl Lists Alarmlist](../images/setfilter.png "Aseta suodatin")
