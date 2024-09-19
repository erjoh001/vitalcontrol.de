---
title: "Tarkkailulistalla"
linkTitle: "Tarkkailulistalla"
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: on-watch
description: >
 Tarkista tarkkailulistasi.
luokat: [Listat]
tagit: [Listat, On Watch]
translationKey: lists/on-watch
---
## Tarkkailulistalla {#on-watch-list}

Tarkkailulistalta löydät kaikki eläimet, jotka olet manuaalisesti lisännyt listaan. Lista auttaa sinua pitämään yleiskatsauksen eläimistä, jotka olet arvioinut huomionarvoisiksi. Lisäksi voit tehdä seuraavat toimenpiteet kullekin listalla olevalle eläimelle:

- [Täysi toimintovalikko](../alarm/#full-action-menu)
- [Tietoa eläimistä](../alarm/#animal-data)
- [Mittaa lämpötila](../alarm/#take-temperature)
- [Arvioi eläin](../alarm/#rate-animal)
- [Poista eläin tarkkailulistalta](#remove-from-watch-list)
- [Vaihda hälytysken tila](#toggle-alarm-status)
- [Etsi eläin](../alarm/#search-animal)
- [Aseta suodatin](../alarm/#set-filter)

{{% alert title="Vihje" %}}
Jotkin toiminnot suoritetaan samalla tavalla kuin [Hälytyslistassa](../alarm). Niitä ei selitetä tässä. Suorita alustavat vaiheet ja käytä kyseisen toiminnon linkkiä päästäksesi ohjeisiin.
{{% /alert %}}

Hälytyslista on järjestetty seuraavasti:

   ![VitalControl Listat Tarkkailulistalla](../images/onwatchstructure.png "Tarkkailulistan rakenne")

|Symboli   | Kuvaus
|---------|-----
| ![VitalControl Listat Tarkkailulistalla](../images/kopf.png "Lauman koko laskuri") | Näyttää kuinka monta eläintä on listalla
| ![Lehmän ikoni](../images/kopf2.png "Lehmän pää") | Näyttää, onko valittu eläin vasikka vai lehmä
| ![VitalControl Listat Tarkkailulistalla](../images/auge.png "Arviointi") | Viimeksi kirjattu arviointi näkyy symbolin alla liikennevalojärjestelmän värien mukaisesti
| &nbsp;<img src="/icons/actions/temperature.svg" width="12" align="bottom" alt="Kehon lämpötila" title="Kehon lämpötila" /> | Viimeksi kirjattu kuumeen mittaus näkyy symbolin alla liikennevalojärjestelmän värien mukaisesti
| &nbsp;&nbsp;<img src="/icons/header/alarm.svg" width="8" align="bottom" alt="Näytä eläin hälytyksessä" title="Eläin hälytyksessä" /> | Ympyrämerkki symbolin alla osoittaa, että eläin on hälytyslistalla

### Alustavat vaiheet {#preliminary-steps}

1. Valitse päävalikosta <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Lists" /> `{{<T "Lists" >}}` -valikko VitalControl-laitteessasi ja paina `{{<T "Ok" >}}`-nappia.

2. Alavalikko avautuu, jossa näkyy erilaisia listoja. Valitse lista &nbsp;<img src="/icons/lists/onwatch.svg" width="28" align="bottom" alt="List 'On watch'" /> `{{<T "OnWatch" >}}`. Vahvista valinta `{{<T "Ok" >}}`-napilla.

3. Lista `{{<T "OnWatch" >}}` on nyt avoinna.

   ![VitalControl Lists On watch list](../images/firststeps2.png "Alustavat vaiheet")

### Poista eläin tarkkailulistalta {#remove-from-watch-list}

1. Suorita alustavat vaiheet.

2. Käytä `F3`-näppäintä &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; avataksesi ponnahdusvalikon, joka listaa mahdolliset toiminnot kun painat `{{<T "Ok" >}}`-näppäintä. Käytä nuolinäppäimiä △ ▽ korostaaksesi toiminnon `{{<T "RemoveFromWatchList" >}}` ja valitse tämä vaihtoehto painamalla keskimmäistä `{{<T "Ok" >}}`-nappia tai `F3`-näppäintä `{{<T "Ok" >}}`.

3. Tarkkailulistalla, käytä nuolinäppäimiä △ ▽ valitaksesi haluamasi eläimen ja vahvista `{{<T "Ok" >}}`-napilla. Vaihtoehtoisesti voit etsiä eläintä. Käytä `On/Off`-nappia <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ja käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi haluamasi numerot. Lopuksi vahvista `{{<T "Ok" >}}`-napilla.

4. Eläin on nyt poistettu tarkkailulistalta.

   ![VitalControl Lists On watch list](../images/remove.png "Poista eläin tarkkailulistalta")

### Vaihda hälytysken tila {#toggle-alarm-status}

1. Suorita alustavat vaiheet.

2. Käytä `F3`-näppäintä &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; avataksesi ponnahdusvalikon, joka listaa mahdolliset toiminnot kun painat `{{<T "Ok" >}}`-näppäintä. Käytä nuolinäppäimiä △ ▽ korostaaksesi toiminnon `{{<T "ToggleAlarmStatus" >}}` ja valitse tämä vaihtoehto painamalla keskimmäistä `{{<T "Ok" >}}`-nappia tai `F3`-näppäintä `{{<T "Ok" >}}`.

3. Tarkkailulistalla, käytä nuolinäppäimiä △ ▽ valitaksesi haluamasi eläimen ja vahvista `{{<T "Ok" >}}`-napilla. Vaihtoehtoisesti voit etsiä eläintä. Käytä `On/Off`-nappia <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ja käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi haluamasi numerot. Lopuksi vahvista `{{<T "Ok" >}}`-napilla.

4. Eläin lisätään tai poistetaan hälytyslistalta sen alkuperäisen tilan mukaan.

   ![VitalControl Lists Toggle alarm status](../images/alarmstatus.png "Vaihda hälytysken tila")
