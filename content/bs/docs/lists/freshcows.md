---
title: "Lista svježih krava"
linkTitle: "Lista svježih krava"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: fresh-cows
description: >
  Olakšajte kontrolu vaših svježih krava.
categories: [Lists]
tags: [Lists, fresh cow]
translationKey: lists/fresh-cows
---
### Lista svježih krava {#fresh-cows-list}

{{% alert title="Objašnjenje" %}}
Kada upravljate svježim kravama, smatra se najboljom praksom svakodnevno provjeravati životinje nekoliko dana nakon rođenja. Lista svježih krava podržava ovu kontrolu svježih krava, posebno u smislu bilježenja temperature. Za svaku životinju prikazan je stupčasti grafikon za sve dane kontrolnog perioda, svaki dan kontrolnog perioda predstavljen je vertikalnom trakom. Ovisno o boji trake (zelena, žuta ili crvena), možete vidjeti da li je tog dana za dotičnu životinju izmjerena normalna, povišena ili kritično povišena temperatura.
{{% /alert %}}

Krave se stavljaju na listu svježih krava odmah nakon što je njihovo teljenje registrirano. Ostaju na toj listi određeni period vremena, dužina ovog perioda (u danima) može se prilagoditi u [postavkama](../../settings/data-acquisition/#control-period-of-fresh-cows).
 Sljedeće akcije su dostupne za ovu listu:

- [Kompletan meni akcija](../alarm/#full-action-menu)
- [Podaci o životinji](../alarm/#animal-data)
- [Mjerenje temperature](../alarm/#take-temperature)
- [Prebacivanje statusa alarma](#toggle-alarm-status)
- [Prebacivanje statusa nadzora](#toggle-watch-status)
- [Skrivanje izmjerenih krava](#hide-measured-cows)
- [Pretraga životinje](../alarm/#search-animal)
- [Postavljanje filtera](../alarm/#set-filter)

{{% alert title="Savjet" %}}
Neke akcije se provode na isti način kao na [listi alarma](../alarm). Ovdje nisu objašnjene. Provedite preliminarne korake i koristite link odgovarajuće akcije da biste došli do uputa.
{{% /alert %}}

### Preliminarni koraci {#preliminary-steps}

1. Odaberite <img src="/icons/main/lists.svg" width="25" align="bottom" alt="Lists" /> `{{<T "Lists" >}}` stavku menija na glavnom ekranu vašeg VitalControl uređaja i pritisnite `{{<T "Ok" >}}` dugme.

2. Otvara se podmeni u kojem se prikazuju razne liste. Odaberite listu `{{<T "FreshCows" >}}` <img src="/icons/lists/freshcows.svg" width="30" align="bottom" alt="Fresh-cows" />. Potvrdite sa `{{<T "Ok" >}}`.

3. Lista svježih krava je sada otvorena.

   ![VitalControl Lists Fresh cows list](../images/firststeps4.png "Fresh cow list")

### Prebacivanje statusa alarma {#toggle-alarm-status}

1. Završite preliminarne korake.

2. Koristite tipku `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; da biste pozvali popup meni koji prikazuje moguće akcije kada pritisnete tipku `{{<T "Ok" >}}`. Koristite strelice △ ▽ da označite akciju `{{<T "ToggleAlarmStatus" >}}` i odaberite ovu opciju pritiskom na centralno dugme `{{<T "Ok" >}}` ili tipku `F3` `{{<T "Ok" >}}`.

3. Unutar liste svježih krava, koristite strelice △ ▽ da odaberete željenu životinju i potvrdite sa `{{<T "Ok" >}}`. Alternativno, možete pretraživati životinju. Koristite dugme `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> i koristite strelice ◁ ▷ △ ▽ da odaberete željene cifre. Na kraju potvrdite sa `{{<T "Ok" >}}`.

4. Životinja je sada dodana ili uklonjena sa liste alarma, zavisno o njenom početnom statusu.

   ![VitalControl Lists Fresh cows list](../images/togglealarmstatus.png "Toggle alarm status")

### Prebacivanje statusa nadzora {#toggle-watch-status}

1. Završite preliminarne korake.

2. Koristite tipku `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; da biste pozvali popup meni koji prikazuje moguće akcije kada pritisnete tipku `{{<T "Ok" >}}`. Koristite strelice △ ▽ da označite akciju `{{<T "ToggleWatchStatus" >}}` i odaberite ovu opciju pritiskom na centralno dugme `{{<T "Ok" >}}` ili tipku `F3` `{{<T "Ok" >}}`.

3. Unutar liste svježih krava, koristite strelice △ ▽ da odaberete željenu životinju i potvrdite sa `{{<T "Ok" >}}`. Alternativno, možete pretraživati životinju. Koristite dugme `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> i koristite strelice ◁ ▷ △ ▽ da odaberete željene cifre. Na kraju potvrdite sa `{{<T "Ok" >}}`.


4. Životinja je sada dodana ili uklonjena sa liste za praćenje, ovisno o njenom početnom statusu.

   ![VitalControl Liste Lista svježih krava](../images/togglewatchstatus.png "Prebaci status praćenja")

### Sakrij izmjerene krave {#hide-measured-cows}

Ako je ova funkcija aktivirana, životinje za koje je izvršeno mjerenje temperature su skrivene na listi suhih krava. Ako ova funkcija nije aktivirana, životinje ostaju vidljive na listi.

1. Završite preliminarne korake.

2. Koristite `F3` tipku &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Akcije" />&nbsp; da pozovete popup meni koji prikazuje razne opcije. Koristite strelice △ ▽ da označite opciju `{{<T "HideMeasuredCows" >}}` i prebacite ovu opciju pritiskom na centralno dugme `{{<T "Ok" >}}` ili `F3` tipku `{{<T "Ok" >}}`.

3. Unutar liste svježih krava, koristite strelice △ ▽ da odaberete željenu životinju i potvrdite sa `{{<T "Ok" >}}`. Alternativno, možete pretražiti životinju. Koristite dugme `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Pretraga" /> i koristite strelice ◁ ▷ △ ▽ da odaberete željene cifre. Na kraju potvrdite sa `{{<T "Ok" >}}`.

4. Funkcija `{{<T "HideMeasuredCows" >}}` je sada aktivirana. Aktivacija je označena kvačicom u kutiji.

   ![VitalControl Liste Lista svježih krava](../images/hidemeasuredcows.png "Sakrij izmjerene krave")
