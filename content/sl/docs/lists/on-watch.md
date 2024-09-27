---
title: "Na seznamu opazovanja"
linkTitle: "Na seznamu opazovanja"
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: on-watch
description: >
 Preverite svoj seznam opazovanja.
categories: [Seznami]
tags: [Seznami, na opazovanju]
translationKey: lists/on-watch
---
## Na seznamu opazovanja {#on-watch-list}

Na seznamu opazovanja boste našli vse živali, ki ste jih ročno dodali na seznam. Seznam vam pomaga ohraniti pregled nad živalmi, ki ste jih ocenili kot sumljive. Prav tako lahko za vsako žival na seznamu naredite naslednje:

- [Celoten meni dejanj](../alarm/#full-action-menu)
- [Podatki o živali](../alarm/#animal-data)
- [Merjenje temperature](../alarm/#take-temperature)
- [Ocenite žival](../alarm/#rate-animal)
- [Odstranite s seznama opazovanja](#remove-from-watch-list)
- [Preklopite stanje alarma](#toggle-alarm-status)
- [Iskanje živali](../alarm/#search-animal)
- [Nastavite filter](../alarm/#set-filter)

{{% alert title="Namig" %}}
Nekatera dejanja je treba izvesti na enak način kot na [Seznamu alarmov](../alarm). Ta niso tukaj pojasnjena. Izvedite predhodne korake in uporabite povezavo ustreznega dejanja, da pridete do navodil.
{{% /alert %}}

Seznam alarmov je strukturiran na naslednji način:

   ![VitalControl Seznami Na seznamu opazovanja](../images/onwatchstructure.png "Struktura seznama opazovanja")

|Simbol   | Opis
|---------|-----
| ![VitalControl Seznami Na seznamu opazovanja](../images/kopf.png "Število živali v čredi") | Prikazuje, koliko živali je na seznamu
| ![Ikona za kravo](../images/kopf2.png "Glava krave") | Prikazuje, ali je izbrana žival tele ali krava
| ![VitalControl Seznami Na seznamu opazovanja](../images/auge.png "Ocena") | Zadnja zabeležena ocena je prikazana pod simbolom z barvami semaforja
| &nbsp;<img src="/icons/actions/temperature.svg" width="12" align="bottom" alt="Telesna temperatura" title="Telesna temperatura" /> | Zadnje zabeleženo merjenje vročine je prikazano pod simbolom z barvami semaforja
| &nbsp;&nbsp;<img src="/icons/header/alarm.svg" width="8" align="bottom" alt="Prikaz živali na alarmu" title="Žival na alarmu" /> | Krog pod simbolom označuje, da je žival na seznamu alarmov

### Predhodni koraki {#preliminary-steps}

1. Izberite <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Lists" /> `{{<T "Lists" >}}` meni na glavnem zaslonu vaše naprave VitalControl in pritisnite gumb `{{<T "Ok" >}}`.

2. Odpre se podmeni, v katerem so prikazani različni seznami. Izberite seznam &nbsp;<img src="/icons/lists/onwatch.svg" width="28" align="bottom" alt="List 'On watch'" /> `{{<T "OnWatch" >}}`. Potrdite z `{{<T "Ok" >}}`.

3. Seznam `{{<T "OnWatch" >}}` je zdaj odprt.

   ![VitalControl Lists On watch list](../images/firststeps2.png "Preliminary Steps")

### Odstrani s seznama za spremljanje {#remove-from-watch-list}

1. Izvedite predhodne korake.

2. Uporabite tipko `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; za priklic pojavnega menija, ki prikazuje možna dejanja ob pritisku na tipko `{{<T "Ok" >}}`. Uporabite puščične tipke △ ▽ za označitev dejanja `{{<T "RemoveFromWatchList" >}}` in izberite to možnost s pritiskom na osrednji gumb `{{<T "Ok" >}}` ali tipko `F3` `{{<T "Ok" >}}`.

3. Znotraj seznama za spremljanje uporabite puščične tipke △ ▽ za izbiro želenega živali in potrdite z `{{<T "Ok" >}}`. Alternativno lahko poiščete žival. Uporabite gumb `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> in uporabite puščične tipke ◁ ▷ △ ▽ za izbiro želenih številk. Na koncu potrdite z `{{<T "Ok" >}}`.

4. Žival je zdaj odstranjena s seznama za spremljanje.

   ![VitalControl Lists On watch list](../images/remove.png "Remove from watch list")

### Preklopi stanje alarma {#toggle-alarm-status}

1. Izvedite predhodne korake.

2. Uporabite tipko `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; za priklic pojavnega menija, ki prikazuje možna dejanja ob pritisku na tipko `{{<T "Ok" >}}`. Uporabite puščične tipke △ ▽ za označitev dejanja `{{<T "ToggleAlarmStatus" >}}` in izberite to možnost s pritiskom na osrednji gumb `{{<T "Ok" >}}` ali tipko `F3` `{{<T "Ok" >}}`.

3. Znotraj seznama za opazovanje uporabite puščične tipke △ ▽ za izbiro želenega živalskega in potrdite z `{{<T "Ok" >}}`. Alternativno lahko iščete žival. Uporabite gumb `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> in uporabite puščične tipke ◁ ▷ △ ▽ za izbiro želenih številk. Na koncu potrdite z `{{<T "Ok" >}}`.

4. Žival je zdaj dodana ali odstranjena s seznama alarmov, odvisno od njenega začetnega stanja.

   ![VitalControl Lists Toggle alarm status](../images/alarmstatus.png "Toggle alarm status")
