---
title: "Seznam svežih krav"
linkTitle: "Seznam svežih krav"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: fresh-cows
description: >
  Olajšajte nadzor nad svojimi svežimi kravami.
categories: [Lists]
tags: [Lists, fresh cow]
translationKey: lists/fresh-cows
---
### Seznam svežih krav {#fresh-cows-list}

{{% alert title="Pojasnilo" %}}
Pri upravljanju svežih krav se šteje za najboljšo prakso, da se živali preverjajo vsak dan več dni po rojstvu. Seznam svežih krav podpira ta nadzor svežih krav, zlasti pri beleženju temperature. Za vsako žival je prikazan stolpični grafikon za vse dni nadzornega obdobja, vsak dan nadzornega obdobja je predstavljen z navpično vrstico. Glede na barvo vrstice (zelena, rumena ali rdeča) lahko vidite, ali je bila tistega dne za zadevno žival izmerjena normalna, povišana ali kritično povišana temperatura.
{{% /alert %}}

Krave so uvrščene na seznam svežih krav takoj po tem, ko je njihovo telitev registrirana. Na tem seznamu ostanejo določen čas, dolžino tega obdobja (v dneh) pa je mogoče prilagoditi v [nastavitvah](../../settings/data-acquisition/#control-period-of-fresh-cows).
 Naslednja dejanja so na voljo za ta seznam:

- [Celoten meni dejanj](../alarm/#full-action-menu)
- [Podatki o živali](../alarm/#animal-data)
- [Merjenje temperature](../alarm/#take-temperature)
- [Preklopi stanje alarma](#toggle-alarm-status)
- [Preklopi stanje nadzora](#toggle-watch-status)
- [Skrij izmerjene krave](#hide-measured-cows)
- [Iskanje živali](../alarm/#search-animal)
- [Nastavi filter](../alarm/#set-filter)

{{% alert title="Namig" %}}
Nekatera dejanja je treba izvesti na enak način kot na [seznamu alarmov](../alarm). Ta tukaj niso pojasnjena. Izvedite predhodne korake in uporabite povezavo ustreznega dejanja, da pridete do navodil.
{{% /alert %}}

### Predhodni koraki {#preliminary-steps}

1. Izberite <img src="/icons/main/lists.svg" width="25" align="bottom" alt="Lists" /> `{{<T "Lists" >}}` postavko menija na glavnem zaslonu vaše naprave VitalControl in pritisnite gumb `{{<T "Ok" >}}`.


2. Odpre se podmeni, v katerem so prikazani različni seznami. Izberite seznam `{{<T "FreshCows" >}}` <img src="/icons/lists/freshcows.svg" width="30" align="bottom" alt="Fresh-cows" />. Potrdite z `{{<T "Ok" >}}`.

3. Seznam svežih krav je zdaj odprt.

   ![VitalControl Lists Fresh cows list](../images/firststeps4.png "Fresh cow list")

### Preklop stanja alarma {#toggle-alarm-status}

1. Izvedite predhodne korake.

2. Uporabite tipko `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; za priklic pojavnega menija, ki navaja možna dejanja ob pritisku na tipko `{{<T "Ok" >}}`. Uporabite puščične tipke △ ▽ za označitev dejanja `{{<T "ToggleAlarmStatus" >}}` in izberite to možnost s pritiskom na osrednji gumb `{{<T "Ok" >}}` ali tipko `F3` `{{<T "Ok" >}}`.

3. V seznamu svežih krav uporabite puščične tipke △ ▽ za izbiro želenega živali in potrdite z `{{<T "Ok" >}}`. Lahko pa tudi poiščete žival. Uporabite gumb `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> in uporabite puščične tipke ◁ ▷ △ ▽ za izbiro želenih številk. Na koncu potrdite z `{{<T "Ok" >}}`.

4. Žival je zdaj dodana ali odstranjena s seznama opozoril, odvisno od njenega začetnega stanja.

   ![VitalControl Lists Fresh cows list](../images/togglealarmstatus.png "Toggle alarm status")

### Preklop stanja nadzora {#toggle-watch-status}

1. Izvedite predhodne korake.

2. Uporabite tipko `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; za priklic pojavnega menija, ki navaja možna dejanja ob pritisku na tipko `{{<T "Ok" >}}`. Uporabite puščične tipke △ ▽ za označitev dejanja `{{<T "ToggleWatchStatus" >}}` in izberite to možnost s pritiskom na osrednji gumb `{{<T "Ok" >}}` ali tipko `F3` `{{<T "Ok" >}}`.

3. V seznamu svežih krav uporabite puščične tipke △ ▽ za izbiro želenega živali in potrdite z `{{<T "Ok" >}}`. Lahko pa tudi poiščete žival. Uporabite gumb `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> in uporabite puščične tipke ◁ ▷ △ ▽ za izbiro želenih številk. Na koncu potrdite z `{{<T "Ok" >}}`.

4. Žival je zdaj dodana ali odstranjena s seznama za spremljanje, odvisno od njenega začetnega statusa.

   ![VitalControl Seznami Seznam svežih krav](../images/togglewatchstatus.png "Preklopi status spremljanja")

### Skrij izmerjene krave {#hide-measured-cows}

Če je ta funkcija aktivirana, so živali, za katere je bila izvedena meritev temperature, skrite na seznamu suhih krav. Če ta funkcija ni aktivirana, živali ostanejo vidne na seznamu.

1. Izvedite predhodne korake.

2. Uporabite tipko `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Dejanja" />&nbsp; za priklic pojavnega menija, ki navaja različne možnosti. Uporabite puščične tipke △ ▽ za označitev možnosti `{{<T "HideMeasuredCows" >}}` in preklopite to možnost s pritiskom na osrednji gumb `{{<T "Ok" >}}` ali tipko `F3` `{{<T "Ok" >}}`.

3. Znotraj seznama svežih krav uporabite puščične tipke △ ▽ za izbiro želene živali in potrdite z `{{<T "Ok" >}}`. Alternativno lahko iščete žival. Uporabite gumb `Vklop/Izklop` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Iskanje" /> in uporabite puščične tipke ◁ ▷ △ ▽ za izbiro želenih številk. Na koncu potrdite z `{{<T "Ok" >}}`.

4. Funkcija `{{<T "HideMeasuredCows" >}}` je zdaj aktivirana. Aktivacija je označena s kljukico v polju.

   ![VitalControl Seznami Seznam svežih krav](../images/hidemeasuredcows.png "Skrij izmerjene krave")
