---
title: "Seznam alarmov"
linkTitle: "Seznam alarmov"
weight: 10
date: 2023-07-28T13:25:28+02:00
draft: false
slug: alarm
description: >
  Preverite svoj seznam alarmov.
categories: [Seznami]
tags: [Seznami, alarm]
translationKey: lists/alarm
---
## Seznam alarmov {#alarm-list}

Na seznamu alarmov boste našli vse živali, ki ste jih ročno dodali na seznam ali vse živali, ki so bile v rumenem ali rdečem območju, ko je bila izmerjena temperatura. Seznam vam pomaga ohraniti pregled nad vsemi opaznimi živalmi. Prav tako lahko za vsako žival na seznamu naredite naslednje:

- [Celoten meni dejanj](#full-action-menu)
- [Podatki o živali](#animal-data)
- [Izmerite temperaturo](#take-temperature)
- [Ocenite žival](#rate-animal)
- [Počistite alarm](#clear-alarm)
- [Preklopite stanje opazovanja](#toggle-watch-status)
- [Poiščite žival](#search-animal)
- [Nastavite filter](#set-filter)

Seznam alarmov je strukturiran kot sledi:

   ![VitalControl Seznami Seznam alarmov](../images/alarmstructure.png "Struktura seznama alarmov")

|Simbol   | Opis
|-------  |----
| ![VitalControl Ikona Glava živali](../images/kopf.png "Glava živali") | Prikazuje, koliko živali je na seznamu
| ![VitalControl Ikona ID](../images/ID.png "ID") | Prikazuje, ali je izbrana žival teliček ali krava. Klinični termometer prikazuje, ali je bila žival ob zadnjem merjenju v rumenem ali rdečem območju. ID živali je prikazan pod simbolom.
| ![VitalControl Ikona Ocena](../images/auge.png "Ikona Ocena") | Zadnja zabeležena ocena je prikazana pod simbolom z barvami sistema semaforja
| &nbsp;<img src="/icons/actions/temperature.svg" width="12" align="bottom" alt="Telesna temperatura" title="Telesna temperatura" /> | Zadnje zabeleženo merjenje vročine je prikazano pod simbolom z barvami sistema semaforja
| &nbsp;<img src="/icons/actions/rating.svg" width="25" align="bottom" alt="Ocena živali" title="Ocena" /> |Oznaka kroga pod simbolom prikazuje, da je žival na seznamu opazovanja

### Predhodni koraki {#preliminary-steps}


1. Izberite <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Lists" /> `{{<T "Lists" >}}` meni na glavnem zaslonu vaše naprave VitalControl in pritisnite gumb `{{<T "Ok" >}}`.

2. Odpre se podmeni, v katerem so prikazane različne ikone seznamov. Označite ikono <img src="/icons/lists/alarmlist.svg" width="30" align="bottom" alt="Alarm" /> `{{<T "Alarm" >}}` in potrdite z `{{<T "Ok" >}}`.

3. Seznam alarmov je zdaj odprt.

   ![VitalControl Lists Alarmlist](../images/firststeps.png "Preliminary Steps")

### Celoten akcijski meni {#full-action-menu}

1. Dokončajte predhodne korake.

2. Uporabite tipko `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; za priklic pojavno menija, ki navaja možna dejanja ob pritisku tipke `{{<T "Ok" >}}`. Uporabite puščične tipke △ ▽ za označitev dejanja `{{<T "ActionMenu" >}}` in izberite dejanje s pritiskom na osrednjo tipko `{{<T "Ok" >}}` ali tipko `F3` `{{<T "Ok" >}}`.

3. V seznamu alarmov uporabite puščične tipke △ ▽ za izbiro želenega živali in potrdite z `{{<T "Ok" >}}`. Alternativno lahko iščete žival. Uporabite gumb `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> in uporabite puščične tipke ◁ ▷ △ ▽ za izbiro želenih številk. Na koncu potrdite z `{{<T "Ok" >}}`.

4. Meni `{{<T "Actions" >}}` se bo odprl samodejno. Ravnanje z dejanji najdete [tukaj](/sl/docs/actions/).

   ![VitalControl Lists Alarmlist](../images/actionmenu.png "Action menu")

### Podatki o živalih {#animal-data}

1. Dokončajte predhodne korake.

2. Uporabite tipko `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; za priklic pojavno menija, ki navaja možna dejanja ob pritisku tipke `{{<T "Ok" >}}`. Uporabite puščične tipke △ ▽ za označitev dejanja `{{<T "AnimalData" >}}` in izberite dejanje s pritiskom na osrednjo tipko `{{<T "Ok" >}}` ali tipko `F3` `{{<T "Ok" >}}`.

3. V seznamu alarmov uporabite puščične tipke △ ▽ za izbiro želenega živali in potrdite z `{{<T "Ok" >}}`. Alternativno lahko iščete žival. Uporabite gumb `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> in uporabite puščične tipke ◁ ▷ △ ▽ za izbiro želenih številk. Na koncu potrdite z `{{<T "Ok" >}}`.


4. Podatki o živalih bodo zdaj prikazani.

   ![VitalControl Lists Alarmlist](../images/animaldata.png "Podatki o živalih")

### Merjenje temperature {#take-temperature}

1. Izvedite predhodne korake.

2. Uporabite tipko `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Odpri pojavno okno" />&nbsp; za priklic pojavnega menija, ki navaja možna dejanja ob pritisku na tipko `{{<T "Ok" >}}`. Uporabite puščične tipke △ ▽ za označitev dejanja `{{<T "TempTaking" >}}` in izberite dejanje s pritiskom na osrednjo tipko `{{<T "Ok" >}}` ali tipko `F3` `{{<T "Ok" >}}`.

3. Znotraj seznama alarmov uporabite puščične tipke △ ▽ za izbiro želene živali in potrdite z `{{<T "Ok" >}}`. Alternativno lahko iščete žival. Uporabite gumb `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Iskanje" /> in uporabite puščične tipke ◁ ▷ △ ▽ za izbiro želenih številk. Na koncu potrdite z `{{<T "Ok" >}}`.

4. Funkcija [Merjenje temperature](/sl/docs/actions/measure-temperature/#measure-fever) se zdaj samodejno zažene.

   ![VitalControl Lists Alarmlist](../images/temperature.png "Merjenje temperature")

### Oceni žival {#rate-animal}

1. Izvedite predhodne korake.

2. Uporabite tipko `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Odpri pojavno okno" />&nbsp; za priklic pojavnega menija, ki navaja možna dejanja ob pritisku na tipko `{{<T "Ok" >}}`. Uporabite puščične tipke △ ▽ za označitev dejanja `{{<T "RateAnimal" >}}` in izberite dejanje s pritiskom na osrednjo tipko `{{<T "Ok" >}}` ali tipko `F3` `{{<T "Ok" >}}`.

3. Znotraj seznama alarmov uporabite puščične tipke △ ▽ za izbiro želene živali in potrdite z `{{<T "Ok" >}}`. Alternativno lahko iščete žival. Uporabite gumb `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Iskanje" /> in uporabite puščične tipke ◁ ▷ △ ▽ za izbiro želenih številk. Na koncu potrdite z `{{<T "Ok" >}}`.

4. Funkcija [Oceni žival](/sl/docs/actions/rating/#rate-your-animals) se zdaj samodejno zažene.

![VitalControl Lists Alarmlist](../images/rateanimal.png "Rate animal")

### Počisti alarm {#clear-alarm}

1. Dokončajte predhodne korake.

2. Uporabite tipko `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; za priklic pojavnega menija, ki navaja možna dejanja ob pritisku na tipko `{{<T "Ok" >}}`. Uporabite puščične tipke △ ▽ za označitev dejanja `{{<T "ClearAlarm" >}}` in izberite dejanje s pritiskom na osrednjo tipko `{{<T "Ok" >}}` ali tipko `F3` `{{<T "Ok" >}}`.

3. Znotraj seznama alarmov uporabite puščične tipke △ ▽ za izbiro želenega živali in potrdite z `{{<T "Ok" >}}`. Alternativno lahko iščete žival. Uporabite gumb `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> in uporabite puščične tipke ◁ ▷ △ ▽ za izbiro želenih številk. Na koncu potrdite z `{{<T "Ok" >}}`.

4. Žival je zdaj odstranjena s seznama alarmov.

![VitalControl Lists Alarmlist](../images/clearalarm.png "Clear alarm")

### Preklopi status opazovanja {#toggle-watch-status}

1. Dokončajte predhodne korake.

2. Uporabite tipko `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; za priklic pojavnega menija, ki navaja možna dejanja ob pritisku na tipko `{{<T "Ok" >}}`. Uporabite puščične tipke △ ▽ za označitev dejanja `{{<T "ToggleWatchStatus" >}}` in izberite dejanje s pritiskom na osrednjo tipko `{{<T "Ok" >}}` ali tipko `F3` `{{<T "Ok" >}}`.

3. Znotraj seznama alarmov uporabite puščične tipke △ ▽ za izbiro želenega živali in potrdite z `{{<T "Ok" >}}`. Alternativno lahko iščete žival. Uporabite gumb `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> in uporabite puščične tipke ◁ ▷ △ ▽ za izbiro želenih številk. Na koncu potrdite z `{{<T "Ok" >}}`.

4. Žival je zdaj dodana ali odstranjena s seznama opazovanja, odvisno od njenega začetnega statusa.

![VitalControl Lists Alarmlist](../images/watchlist.png "Toggle watch status")

### Išči žival {#search-animal}


1. Dokončajte začetne korake.

2. Uporabite tipko `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; za priklic pojavnega menija, ki navaja različne možnosti. Uporabite puščične tipke △ ▽ za označitev funkcije `{{<T "SearchAnimal" >}}` in prikličite iskalno funkcijo s pritiskom na osrednjo tipko `{{<T "Ok" >}}` ali tipko `F3` `{{<T "Ok" >}}`.

3. Uporabite puščične tipke △ ▽ ◁ ▷ za izbiro želene ID živali. Alternativno lahko iščete žival. Uporabite gumb `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> in uporabite puščične tipke ◁ ▷ △ ▽ za izbiro želenih številk. Na koncu potrdite z `{{<T "Ok" >}}`.

   ![VitalControl Lists Alarmlist](../images/searchanimal.png "Search animal")

### Nastavitev filtra {#set-filter}

1. Dokončajte začetne korake.

2. Uporabite tipko `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; za priklic pojavnega menija, ki navaja različne možnosti. Uporabite puščične tipke △ ▽ za označitev funkcije `{{<T "SetFilter" >}}` in prikličite funkcijo filtra s pritiskom na osrednjo tipko `{{<T "Ok" >}}` ali tipko `F3` `{{<T "Ok" >}}`.

3. Nastavite želeni filter. Kako uporabiti filter lahko najdete [tukaj](../../filter/#applying-filters).

   ![VitalControl Lists Alarmlist](../images/setfilter.png "Set filter")

