---
title: "Popis svježih krava"
linkTitle: "Popis svježih krava"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: fresh-cows
description: >
  Olakšajte kontrolu svojih svježih krava.
categories: [Popisi]
tags: [Popisi, svježa krava]
translationKey: lists/fresh-cows
---
### Popis svježih krava {#fresh-cows-list}

{{% alert title="Objašnjenje" %}}
Kada upravljate svježim kravama, provjera životinja svakodnevno nekoliko dana nakon rođenja smatra se najboljom praksom. Popis svježih krava podržava ovu kontrolu svježih krava, posebno u smislu bilježenja temperature. Za svaku životinju prikazan je stupčasti grafikon za sve dane kontrolnog razdoblja, svaki dan kontrolnog razdoblja predstavljen je vertikalnom trakom. Ovisno o boji trake (zelena, žuta ili crvena), možete vidjeti je li tog dana za dotičnu životinju izmjerena normalna, povišena ili kritično povišena temperatura.
{{% /alert %}}

Krave se stavljaju na popis svježih krava odmah nakon što je njihovo teljenje registrirano. Ostaju na tom popisu određeno razdoblje, duljina tog razdoblja (u danima) može se prilagoditi u [postavkama](../../settings/data-acquisition/#control-period-of-fresh-cows).
 Sljedeće radnje su dostupne za ovaj popis:

- [Cijeli izbornik radnji](../alarm/#full-action-menu)
- [Podaci o životinji](../alarm/#animal-data)
- [Izmjerite temperaturu](../alarm/#take-temperature)
- [Prebacite status alarma](#toggle-alarm-status)
- [Prebacite status praćenja](#toggle-watch-status)
- [Sakrij izmjerene krave](#hide-measured-cows)
- [Pretraži životinju](../alarm/#search-animal)
- [Postavi filter](../alarm/#set-filter)

{{% alert title="Savjet" %}}
Neke radnje treba provesti na isti način kao na [popisu alarma](../alarm). One ovdje nisu objašnjene. Provedite preliminarne korake i koristite poveznicu dotične radnje kako biste došli do uputa.
{{% /alert %}}

### Preliminarni koraci {#preliminary-steps}

1. Odaberite <img src="/icons/main/lists.svg" width="25" align="bottom" alt="Popisi" /> `{{<T "Lists" >}}` stavku izbornika na glavnom ekranu vašeg VitalControl uređaja i pritisnite `{{<T "Ok" >}}` gumb.

2. Otvorit će se podizbornik u kojem su prikazani razni popisi. Odaberite popis `{{<T "FreshCows" >}}` <img src="/icons/lists/freshcows.svg" width="30" align="bottom" alt="Fresh-cows" />. Potvrdite s `{{<T "Ok" >}}`.

3. Popis svježih krava je sada otvoren.

   ![VitalControl Lists Fresh cows list](../images/firststeps4.png "Fresh cow list")

### Prebacivanje statusa alarma {#toggle-alarm-status}

1. Dovršite preliminarne korake.

2. Koristite tipku `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; za otvaranje skočnog izbornika koji prikazuje moguće radnje pritiskom na tipku `{{<T "Ok" >}}`. Koristite tipke sa strelicama △ ▽ za označavanje radnje `{{<T "ToggleAlarmStatus" >}}` i odaberite ovu opciju pritiskom na središnju tipku `{{<T "Ok" >}}` ili tipku `F3` `{{<T "Ok" >}}`.

3. Unutar popisa svježih krava koristite tipke sa strelicama △ ▽ za odabir željene životinje i potvrdite s `{{<T "Ok" >}}`. Alternativno, možete pretraživati životinju. Koristite tipku `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> i koristite tipke sa strelicama ◁ ▷ △ ▽ za odabir željenih znamenki. Na kraju potvrdite s `{{<T "Ok" >}}`.

4. Životinja je sada dodana ili uklonjena s popisa upozorenja ovisno o njenom početnom statusu.

   ![VitalControl Lists Fresh cows list](../images/togglealarmstatus.png "Toggle alarm status")

### Prebacivanje statusa nadzora {#toggle-watch-status}

1. Dovršite preliminarne korake.

2. Koristite tipku `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; za otvaranje skočnog izbornika koji prikazuje moguće radnje pritiskom na tipku `{{<T "Ok" >}}`. Koristite tipke sa strelicama △ ▽ za označavanje radnje `{{<T "ToggleWatchStatus" >}}` i odaberite ovu opciju pritiskom na središnju tipku `{{<T "Ok" >}}` ili tipku `F3` `{{<T "Ok" >}}`.

3. Unutar popisa svježih krava koristite tipke sa strelicama △ ▽ za odabir željene životinje i potvrdite s `{{<T "Ok" >}}`. Alternativno, možete pretraživati životinju. Koristite tipku `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> i koristite tipke sa strelicama ◁ ▷ △ ▽ za odabir željenih znamenki. Na kraju potvrdite s `{{<T "Ok" >}}`.

4. Životinja je sada dodana ili uklonjena s popisa za praćenje ovisno o njenom početnom statusu.

   ![VitalControl Lists Fresh cows list](../images/togglewatchstatus.png "Toggle watch status")

### Sakrij izmjerene krave {#hide-measured-cows}

Ako je ova funkcija aktivirana, životinje za koje je izvršeno mjerenje temperature su skrivene na popisu suhih krava. Ako ova funkcija nije aktivirana, životinje ostaju vidljive na popisu.

1. Dovršite preliminarne korake.

2. Koristite tipku `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Actions" />&nbsp; za pozivanje skočnog izbornika koji prikazuje razne opcije. Koristite tipke sa strelicama △ ▽ za označavanje opcije `{{<T "HideMeasuredCows" >}}` i prebacite ovu opciju pritiskom na središnju tipku `{{<T "Ok" >}}` ili tipku `F3` `{{<T "Ok" >}}`.

3. Unutar popisa svježih krava, koristite tipke sa strelicama △ ▽ za odabir željene životinje i potvrdite s `{{<T "Ok" >}}`. Alternativno, možete pretraživati životinju. Koristite tipku `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> i koristite tipke sa strelicama ◁ ▷ △ ▽ za odabir željenih znamenki. Na kraju potvrdite s `{{<T "Ok" >}}`.

4. Funkcija `{{<T "HideMeasuredCows" >}}` je sada aktivirana. Aktivacija je označena kvačicom u kutiji.

   ![VitalControl Lists Fresh cows list](../images/hidemeasuredcows.png "Hide measured cows")
