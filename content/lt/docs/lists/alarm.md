---
title: "Pavojaus sąrašas"
linkTitle: "Pavojaus sąrašas"
weight: 10
date: 2023-07-28T13:25:28+02:00
draft: false
slug: alarm
description: >
  Patikrinkite savo pavojaus sąrašą.
categories: [Sąrašai]
tags: [Sąrašai, pavojaus]
translationKey: lists/alarm
---
## Pavojaus sąrašas {#alarm-list}

Pavojaus sąraše rasite visus gyvūnus, kuriuos arba rankiniu būdu pridėjote į sąrašą, arba visus gyvūnus, kurie buvo geltonoje arba raudonoje zonoje, kai buvo matuojama temperatūra. Sąrašas padeda jums išlaikyti visų pastebimų gyvūnų apžvalgą. Taip pat, kiekvienam sąraše esančiam gyvūnui galite atlikti šiuos veiksmus:

- [Pilnas veiksmų meniu](#full-action-menu)
- [Gyvūno duomenys](#animal-data)
- [Matuoti temperatūrą](#take-temperature)
- [Įvertinti gyvūną](#rate-animal)
- [Išvalyti pavojaus signalą](#clear-alarm)
- [Perjungti stebėjimo būseną](#toggle-watch-status)
- [Ieškoti gyvūno](#search-animal)
- [Nustatyti filtrą](#set-filter)

Pavojaus sąrašas yra struktūrizuotas taip:

   ![VitalControl Sąrašai Pavojaus sąrašas](../images/alarmstructure.png "Pavojaus sąrašo struktūra")

|Simbolis   | Aprašymas
|-------  |----
| ![VitalControl Piktograma Gyvūno galva](../images/kopf.png "Gyvūno galva") | Rodo, kiek gyvūnų yra sąraše
| ![VitalControl Piktograma ID](../images/ID.png "ID") | Rodo, ar pasirinktas gyvūnas yra veršelis ar karvė. Klinikinis termometras rodo, ar gyvūnas buvo geltonoje ar raudonoje zonoje per paskutinį matavimą. Gyvūno ID rodomas po simboliu.
| ![VitalControl Piktograma Įvertinimas](../images/auge.png "Piktograma Įvertinimas") | Paskutinis užregistruotas įvertinimas rodomas po simboliu su šviesoforo sistemos spalvomis
| &nbsp;<img src="/icons/actions/temperature.svg" width="12" align="bottom" alt="Kūno temperatūra" title="Kūno temperatūra" /> | Paskutinis užregistruotas karščiavimo matavimas rodomas po simboliu su šviesoforo sistemos spalvomis
| &nbsp;<img src="/icons/actions/rating.svg" width="25" align="bottom" alt="Gyvūno įvertinimas" title="Gyvūno įvertinimas" /> | Apskritimo žymė po simboliu rodo, kad gyvūnas yra stebėjimo sąraše

### Parengiamieji žingsniai {#preliminary-steps}


1. Pasirinkite <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Lists" /> `{{<T "Lists" >}}` meniu punktą pagrindiniame VitalControl įrenginio ekrane ir paspauskite `{{<T "Ok" >}}` mygtuką.

2. Atsidarys submeniu, kuriame bus rodomos įvairios sąrašų piktogramos. Pažymėkite piktogramą <img src="/icons/lists/alarmlist.svg" width="30" align="bottom" alt="Alarm" /> `{{<T "Alarm" >}}` ir patvirtinkite su `{{<T "Ok" >}}`.

3. Dabar atidarytas aliarmų sąrašas.

   ![VitalControl Lists Alarmlist](../images/firststeps.png "Preliminary Steps")

### Pilnas veiksmų meniu {#full-action-menu}

1. Užbaikite preliminarius veiksmus.

2. Naudokite `F3` klavišą &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; norėdami iškviesti iššokantį meniu, kuriame išvardytos galimos veiksmo parinktys paspaudus `{{<T "Ok" >}}` klavišą. Naudokite rodyklių klavišus △ ▽ norėdami pažymėti veiksmą `{{<T "ActionMenu" >}}` ir pasirinkite veiksmą paspausdami centrinį `{{<T "Ok" >}}` klavišą arba `F3` klavišą `{{<T "Ok" >}}`.

3. Aliarmų sąraše naudokite rodyklių klavišus △ ▽ norėdami pasirinkti norimą gyvūną ir patvirtinkite su `{{<T "Ok" >}}`. Alternatyviai, galite ieškoti gyvūno. Naudokite `On/Off` mygtuką <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ir naudokite rodyklių klavišus ◁ ▷ △ ▽ norėdami pasirinkti norimus skaitmenis. Galiausiai patvirtinkite su `{{<T "Ok" >}}`.

4. `{{<T "Actions" >}}` meniu atsidarys automatiškai. Veiksmų valdymą galite rasti [čia](/en/docs/actions/).

   ![VitalControl Lists Alarmlist](../images/actionmenu.png "Action menu")

### Gyvūno duomenys {#animal-data}

1. Užbaikite preliminarius veiksmus.

2. Naudokite `F3` klavišą &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; norėdami iškviesti iššokantį meniu, kuriame išvardytos galimos veiksmo parinktys paspaudus `{{<T "Ok" >}}` klavišą. Naudokite rodyklių klavišus △ ▽ norėdami pažymėti veiksmą `{{<T "AnimalData" >}}` ir pasirinkite veiksmą paspausdami centrinį `{{<T "Ok" >}}` klavišą arba `F3` klavišą `{{<T "Ok" >}}`.

3. Aliarmų sąraše naudokite rodyklių klavišus △ ▽ norėdami pasirinkti norimą gyvūną ir patvirtinkite su `{{<T "Ok" >}}`. Alternatyviai, galite ieškoti gyvūno. Naudokite `On/Off` mygtuką <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ir naudokite rodyklių klavišus ◁ ▷ △ ▽ norėdami pasirinkti norimus skaitmenis. Galiausiai patvirtinkite su `{{<T "Ok" >}}`.


4. Dabar bus rodomi gyvūnų duomenys.

   ![VitalControl Sąrašai Alarmlist](../images/animaldata.png "Gyvūnų duomenys")

### Matuoti temperatūrą {#take-temperature}

1. Atlikite parengiamuosius veiksmus.

2. Naudokite `F3` klavišą &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Atidaryti iššokantįjį meniu" />&nbsp; norėdami iškviesti iššokantįjį meniu, kuriame pateikiami galimi veiksmai paspaudus `{{<T "Ok" >}}` klavišą. Naudokite rodyklių klavišus △ ▽ norėdami paryškinti veiksmą `{{<T "TempTaking" >}}` ir pasirinkite veiksmą paspausdami centrinį `{{<T "Ok" >}}` klavišą arba `F3` klavišą `{{<T "Ok" >}}`.

3. Signalų sąraše naudokite rodyklių klavišus △ ▽ norėdami pasirinkti norimą gyvūną ir patvirtinkite su `{{<T "Ok" >}}`. Arba galite ieškoti gyvūno. Naudokite `Įjungti/Išjungti` mygtuką <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Ieškoti" /> ir naudokite rodyklių klavišus ◁ ▷ △ ▽ norėdami pasirinkti norimus skaitmenis. Galiausiai patvirtinkite su `{{<T "Ok" >}}`.

4. Funkcija [Matuoti temperatūrą](/en/docs/actions/measure-temperature/#measure-fever) dabar pradedama automatiškai.

   ![VitalControl Sąrašai Alarmlist](../images/temperature.png "Matuoti temperatūrą")

### Vertinti gyvūną {#rate-animal}

1. Atlikite parengiamuosius veiksmus.

2. Naudokite `F3` klavišą &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Atidaryti iššokantįjį meniu" />&nbsp; norėdami iškviesti iššokantįjį meniu, kuriame pateikiami galimi veiksmai paspaudus `{{<T "Ok" >}}` klavišą. Naudokite rodyklių klavišus △ ▽ norėdami paryškinti veiksmą `{{<T "RateAnimal" >}}` ir pasirinkite veiksmą paspausdami centrinį `{{<T "Ok" >}}` klavišą arba `F3` klavišą `{{<T "Ok" >}}`.

3. Signalų sąraše naudokite rodyklių klavišus △ ▽ norėdami pasirinkti norimą gyvūną ir patvirtinkite su `{{<T "Ok" >}}`. Arba galite ieškoti gyvūno. Naudokite `Įjungti/Išjungti` mygtuką <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Ieškoti" /> ir naudokite rodyklių klavišus ◁ ▷ △ ▽ norėdami pasirinkti norimus skaitmenis. Galiausiai patvirtinkite su `{{<T "Ok" >}}`.

4. Funkcija [Vertinti gyvūną](/en/docs/actions/rating/#rate-your-animals) dabar pradedama automatiškai.

![VitalControl Lists Alarmlist](../images/rateanimal.png "Įvertinti gyvūną")

### Išvalyti aliarmą {#clear-alarm}

1. Atlikite preliminarius veiksmus.

2. Naudokite `F3` klavišą &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Atidaryti iššokantį meniu" />&nbsp; norėdami iškviesti iššokantį meniu, kuriame pateikiami galimi veiksmai paspaudus `{{<T "Ok" >}}` klavišą. Naudokite rodyklių klavišus △ ▽, kad paryškintumėte veiksmą `{{<T "ClearAlarm" >}}` ir pasirinkite veiksmą paspausdami centrinį `{{<T "Ok" >}}` klavišą arba `F3` klavišą `{{<T "Ok" >}}`.

3. Aliarmų sąraše naudokite rodyklių klavišus △ ▽, kad pasirinktumėte norimą gyvūną ir patvirtinkite su `{{<T "Ok" >}}`. Arba galite ieškoti gyvūno. Naudokite `Įjungti/Išjungti` mygtuką <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Ieškoti" /> ir naudokite rodyklių klavišus ◁ ▷ △ ▽, kad pasirinktumėte norimus skaitmenis. Galiausiai patvirtinkite su `{{<T "Ok" >}}`.

4. Gyvūnas dabar pašalintas iš aliarmų sąrašo.

![VitalControl Lists Alarmlist](../images/clearalarm.png "Išvalyti aliarmą")

### Perjungti stebėjimo būseną {#toggle-watch-status}

1. Atlikite preliminarius veiksmus.

2. Naudokite `F3` klavišą &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Atidaryti iššokantį meniu" />&nbsp; norėdami iškviesti iššokantį meniu, kuriame pateikiami galimi veiksmai paspaudus `{{<T "Ok" >}}` klavišą. Naudokite rodyklių klavišus △ ▽, kad paryškintumėte veiksmą `{{<T "ToggleWatchStatus" >}}` ir pasirinkite veiksmą paspausdami centrinį `{{<T "Ok" >}}` klavišą arba `F3` klavišą `{{<T "Ok" >}}`.

3. Aliarmų sąraše naudokite rodyklių klavišus △ ▽, kad pasirinktumėte norimą gyvūną ir patvirtinkite su `{{<T "Ok" >}}`. Arba galite ieškoti gyvūno. Naudokite `Įjungti/Išjungti` mygtuką <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Ieškoti" /> ir naudokite rodyklių klavišus ◁ ▷ △ ▽, kad pasirinktumėte norimus skaitmenis. Galiausiai patvirtinkite su `{{<T "Ok" >}}`.

4. Gyvūnas dabar pridėtas arba pašalintas iš stebėjimo sąrašo, priklausomai nuo pradinės būsenos.

![VitalControl Lists Alarmlist](../images/watchlist.png "Perjungti stebėjimo būseną")

### Ieškoti gyvūno {#search-animal}


1. Atlikite preliminarius veiksmus.

2. Naudokite `F3` klavišą &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; norėdami iškviesti iššokantįjį meniu, kuriame pateikiamos įvairios parinktys. Naudokite rodyklių klavišus △ ▽, kad paryškintumėte funkciją `{{<T "SearchAnimal" >}}` ir iškvieskite paieškos funkciją paspausdami centrinį `{{<T "Ok" >}}` klavišą arba `F3` klavišą `{{<T "Ok" >}}`.

3. Naudokite rodyklių klavišus △ ▽ ◁ ▷, kad pasirinktumėte norimą gyvūno ID. Arba galite ieškoti gyvūno. Naudokite `On/Off` mygtuką <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ir naudokite rodyklių klavišus ◁ ▷ △ ▽, kad pasirinktumėte norimus skaitmenis. Galiausiai patvirtinkite su `{{<T "Ok" >}}`.

   ![VitalControl Lists Alarmlist](../images/searchanimal.png "Ieškoti gyvūno")

### Nustatyti filtrą {#set-filter}

1. Atlikite preliminarius veiksmus.

2. Naudokite `F3` klavišą &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; norėdami iškviesti iššokantįjį meniu, kuriame pateikiamos įvairios parinktys. Naudokite rodyklių klavišus △ ▽, kad paryškintumėte funkciją `{{<T "SetFilter" >}}` ir iškvieskite filtro funkciją paspausdami centrinį `{{<T "Ok" >}}` klavišą arba `F3` klavišą `{{<T "Ok" >}}`.

3. Nustatykite norimą filtrą. Kaip naudoti filtrą galite rasti [čia](../../filter/#applying-filters).

   ![VitalControl Lists Alarmlist](../images/setfilter.png "Nustatyti filtrą")
