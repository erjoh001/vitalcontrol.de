---
title: "Šviežių karvių sąrašas"
linkTitle: "Šviežių karvių sąrašas"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: fresh-cows
description: >
  Palengvinkite savo šviežių karvių kontrolę.
kategorijos: [Sąrašai]
Žymos: [Sąrašai, šviežia karvė]
translationKey: lists/fresh-cows
---
### Šviežių karvių sąrašas {#fresh-cows-list}

{{% alert title="Paaiškinimas" %}}
Kai valdomos šviežios karvės, laikoma geriausia praktika kasdien tikrinti gyvūnus kelias dienas po gimimo. Šviežių karvių sąrašas padeda palengvinti šią kontrolę, ypač temperatūros registravimo atžvilgiu. Kiekvienam gyvūnui pateikiama stulpelinė diagrama per visas kontrolės laikotarpio dienas, kiekviena kontrolės laikotarpio diena yra atstovaujama vertikaliu stulpeliu. Priklausomai nuo stulpelio spalvos (žalia, geltona arba raudona), galite matyti, ar tą dieną atitinkamam gyvūnui buvo išmatuota normali, padidėjusi ar kritiškai padidėjusi temperatūra.
{{% /alert %}}

Karvės įtraukiamos į šviežių karvių sąrašą iškart po jų veršiavimosi registravimo. Jos lieka šiame sąraše tam tikrą laikotarpį, kurio trukmė (dienomis) gali būti koreguojama [nustatymuose](../../settings/data-acquisition/#control-period-of-fresh-cows).
 Šiam sąrašui galimi šie veiksmai:

- [Pilnas veiksmų meniu](../alarm/#full-action-menu)
- [Gyvūno duomenys](../alarm/#animal-data)
- [Temperatūros matavimas](../alarm/#take-temperature)
- [Pavojaus būsenos perjungimas](#toggle-alarm-status)
- [Stebėjimo būsenos perjungimas](#toggle-watch-status)
- [Išmatuotų karvių slėpimas](#hide-measured-cows)
- [Gyvūno paieška](../alarm/#search-animal)
- [Filtro nustatymas](../alarm/#set-filter)

{{% alert title="Patarimas" %}}
Kai kurie veiksmai atliekami taip pat kaip ir [pavojaus sąraše](../alarm). Jie čia nepaaiškinami. Atlikite preliminarius veiksmus ir naudokite atitinkamo veiksmo nuorodą, kad gautumėte instrukcijas.
{{% /alert %}}

### Preliminarūs Veiksmai {#preliminary-steps}

1. Pasirinkite <img src="/icons/main/lists.svg" width="25" align="bottom" alt="Sąrašai" /> `{{<T "Lists" >}}` meniu punktą pagrindiniame jūsų VitalControl įrenginio ekrane ir paspauskite `{{<T "Ok" >}}` mygtuką.


2. Atsidaro submeniu, kuriame rodomi įvairūs sąrašai. Pasirinkite `{{<T "FreshCows" >}}` sąrašą <img src="/icons/lists/freshcows.svg" width="30" align="bottom" alt="Fresh-cows" />. Patvirtinkite su `{{<T "Ok" >}}`.

3. Dabar atidarytas šviežių karvių sąrašas.

   ![VitalControl Lists Fresh cows list](../images/firststeps4.png "Fresh cow list")

### Perjungti aliarmo būseną {#toggle-alarm-status}

1. Atlikite preliminarius veiksmus.

2. Naudokite `F3` klavišą &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; norėdami iškviesti iššokantįjį meniu, kuriame išvardytos galimos veiksmo parinktys paspaudus `{{<T "Ok" >}}` klavišą. Naudokite rodyklių klavišus △ ▽ norėdami paryškinti veiksmą `{{<T "ToggleAlarmStatus" >}}` ir pasirinkite šią parinktį paspausdami centrinį `{{<T "Ok" >}}` mygtuką arba `F3` klavišą `{{<T "Ok" >}}`.

3. Šviežių karvių sąraše naudokite rodyklių klavišus △ ▽ norėdami pasirinkti norimą gyvūną ir patvirtinkite su `{{<T "Ok" >}}`. Arba galite ieškoti gyvūno. Naudokite `On/Off` mygtuką <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ir naudokite rodyklių klavišus ◁ ▷ △ ▽ norėdami pasirinkti norimus skaitmenis. Galiausiai patvirtinkite su `{{<T "Ok" >}}`.

4. Gyvūnas dabar pridedamas arba pašalinamas iš aliarmo sąrašo, priklausomai nuo jo pradinės būsenos.

   ![VitalControl Lists Fresh cows list](../images/togglealarmstatus.png "Toggle alarm status")

### Perjungti stebėjimo būseną {#toggle-watch-status}

1. Atlikite preliminarius veiksmus.

2. Naudokite `F3` klavišą &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; norėdami iškviesti iššokantįjį meniu, kuriame išvardytos galimos veiksmo parinktys paspaudus `{{<T "Ok" >}}` klavišą. Naudokite rodyklių klavišus △ ▽ norėdami paryškinti veiksmą `{{<T "ToggleWatchStatus" >}}` ir pasirinkite šią parinktį paspausdami centrinį `{{<T "Ok" >}}` mygtuką arba `F3` klavišą `{{<T "Ok" >}}`.

3. Šviežių karvių sąraše naudokite rodyklių klavišus △ ▽ norėdami pasirinkti norimą gyvūną ir patvirtinkite su `{{<T "Ok" >}}`. Arba galite ieškoti gyvūno. Naudokite `On/Off` mygtuką <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ir naudokite rodyklių klavišus ◁ ▷ △ ▽ norėdami pasirinkti norimus skaitmenis. Galiausiai patvirtinkite su `{{<T "Ok" >}}`.


4. Gyvūnas dabar pridedamas arba pašalinamas iš stebimųjų sąrašo, priklausomai nuo jo pradinio statuso.

   ![VitalControl Sąrašai Šviežių karvių sąrašas](../images/togglewatchstatus.png "Perjungti stebėjimo statusą")

### Paslėpti išmatuotas karves {#hide-measured-cows}

Jei ši funkcija yra aktyvuota, gyvūnai, kuriems buvo atliktas temperatūros matavimas, yra paslėpti sausų karvių sąraše. Jei ši funkcija nėra aktyvuota, gyvūnai lieka matomi sąraše.

1. Atlikite preliminarius veiksmus.

2. Naudokite `F3` klavišą &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Veiksmai" />&nbsp; norėdami iškviesti iššokantįjį meniu, kuriame pateikiamos įvairios parinktys. Naudokite rodyklių klavišus △ ▽, kad paryškintumėte parinktį `{{<T "HideMeasuredCows" >}}` ir perjunkite šią parinktį paspausdami centrinį `{{<T "Ok" >}}` mygtuką arba `F3` klavišą `{{<T "Ok" >}}`.

3. Šviežių karvių sąraše naudokite rodyklių klavišus △ ▽, kad pasirinktumėte norimą gyvūną ir patvirtinkite su `{{<T "Ok" >}}`. Alternatyviai, galite ieškoti gyvūno. Naudokite `Įjungti/Išjungti` mygtuką <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Paieška" /> ir naudokite rodyklių klavišus ◁ ▷ △ ▽, kad pasirinktumėte norimus skaitmenis. Galiausiai patvirtinkite su `{{<T "Ok" >}}`.

4. Funkcija `{{<T "HideMeasuredCows" >}}` dabar yra aktyvuota. Aktyvavimas nurodomas pažymėjus langelį.

   ![VitalControl Sąrašai Šviežių karvių sąrašas](../images/hidemeasuredcows.png "Paslėpti išmatuotas karves")
