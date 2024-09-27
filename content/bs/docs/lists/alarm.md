---
title: "Lista alarma"
linkTitle: "Lista alarma"
weight: 10
date: 2023-07-28T13:25:28+02:00
draft: false
slug: alarm
description: >
  Provjerite svoju listu alarma.
categories: [Liste]
tags: [Liste, alarm]
translationKey: lists/alarm
---
## Lista alarma {#alarm-list}

Na listi alarma ćete pronaći sve životinje koje ste ručno dodali na listu ili sve životinje koje su bile u žutom ili crvenom rasponu kada je izmjerena temperatura. Lista vam pomaže da zadržite pregled nad svim upadljivim životinjama. Također, za svaku životinju na listi, možete uraditi sljedeće:

- [Kompletan meni akcija](#full-action-menu)
- [Podaci o životinji](#animal-data)
- [Izmjerite temperaturu](#take-temperature)
- [Ocijenite životinju](#rate-animal)
- [Očistite alarm](#clear-alarm)
- [Prebacite status praćenja](#toggle-watch-status)
- [Pretražite životinju](#search-animal)
- [Postavite filter](#set-filter)

Lista alarma je strukturirana na sljedeći način:

   ![VitalControl Liste Lista alarma](../images/alarmstructure.png "Struktura liste alarma")

|Simbol   | Opis
|-------  |----
| ![VitalControl Ikona Glava životinje](../images/kopf.png "Glava životinje") | Prikazuje koliko životinja je na listi
| ![VitalControl Ikona ID](../images/ID.png "ID") | Prikazuje da li je odabrana životinja tele ili krava. Klinički termometar pokazuje da li je životinja bila u žutoj ili crvenoj zoni pri posljednjem mjerenju. ID životinje je prikazan ispod simbola.
| ![VitalControl Ikona Ocjena](../images/auge.png "Ikona Ocjena") | Posljednja zabilježena ocjena je prikazana ispod simbola sa bojama sistema semafora
| &nbsp;<img src="/icons/actions/temperature.svg" width="12" align="bottom" alt="Tjelesna temperatura" title="Tjelesna temperatura" /> | Posljednje zabilježeno mjerenje temperature je prikazano ispod simbola sa bojama sistema semafora
| &nbsp;<img src="/icons/actions/rating.svg" width="25" align="bottom" alt="Ocjena životinje" title="Ocjena" /> |Oznaka kruga ispod simbola pokazuje da je životinja na listi za praćenje

### Preliminarni koraci {#preliminary-steps}


1. Odaberite stavku menija <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Lists" /> `{{<T "Lists" >}}` na glavnom ekranu vašeg VitalControl uređaja i pritisnite dugme `{{<T "Ok" >}}`.

2. Otvara se podmeni u kojem su prikazane razne ikone lista. Označite ikonu <img src="/icons/lists/alarmlist.svg" width="30" align="bottom" alt="Alarm" /> `{{<T "Alarm" >}}` i potvrdite sa `{{<T "Ok" >}}`.

3. Lista alarma je sada otvorena.

   ![VitalControl Lists Alarmlist](../images/firststeps.png "Preliminary Steps")

### Potpuni meni akcija {#full-action-menu}

1. Završite preliminarne korake.

2. Koristite taster `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; da biste pozvali popup meni koji prikazuje moguće akcije kada pritisnete taster `{{<T "Ok" >}}`. Koristite tastere sa strelicama △ ▽ da označite akciju `{{<T "ActionMenu" >}}` i odaberite akciju pritiskom na centralni taster `{{<T "Ok" >}}` ili taster `F3` `{{<T "Ok" >}}`.

3. Unutar liste alarma, koristite tastere sa strelicama △ ▽ da odaberete željenu životinju i potvrdite sa `{{<T "Ok" >}}`. Alternativno, možete pretražiti životinju. Koristite dugme `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> i koristite tastere sa strelicama ◁ ▷ △ ▽ da odaberete željene cifre. Na kraju potvrdite sa `{{<T "Ok" >}}`.

4. Meni `{{<T "Actions" >}}` će se automatski otvoriti. Rukovanje akcijama možete pronaći [ovdje](/bs/docs/actions/).

   ![VitalControl Lists Alarmlist](../images/actionmenu.png "Action menu")

### Podaci o životinji {#animal-data}

1. Završite preliminarne korake.

2. Koristite taster `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; da biste pozvali popup meni koji prikazuje moguće akcije kada pritisnete taster `{{<T "Ok" >}}`. Koristite tastere sa strelicama △ ▽ da označite akciju `{{<T "AnimalData" >}}` i odaberite akciju pritiskom na centralni taster `{{<T "Ok" >}}` ili taster `F3` `{{<T "Ok" >}}`.

3. Unutar liste alarma, koristite tastere sa strelicama △ ▽ da odaberete željenu životinju i potvrdite sa `{{<T "Ok" >}}`. Alternativno, možete pretražiti životinju. Koristite dugme `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> i koristite tastere sa strelicama ◁ ▷ △ ▽ da odaberete željene cifre. Na kraju potvrdite sa `{{<T "Ok" >}}`.


4. Podaci o životinji će sada biti prikazani.

   ![VitalControl Lists Alarmlist](../images/animaldata.png "Podaci o životinji")

### Mjerenje temperature {#take-temperature}

1. Završite preliminarne korake.

2. Koristite `F3` tipku &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; da biste otvorili popup meni koji prikazuje moguće akcije kada pritisnete `{{<T "Ok" >}}` tipku. Koristite strelice △ ▽ da označite akciju `{{<T "TempTaking" >}}` i odaberite akciju pritiskom na centralnu `{{<T "Ok" >}}` tipku ili `F3` tipku `{{<T "Ok" >}}`.

3. Unutar liste alarma, koristite strelice △ ▽ da odaberete željenu životinju i potvrdite sa `{{<T "Ok" >}}`. Alternativno, možete pretražiti životinju. Koristite `On/Off` dugme <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> i koristite strelice ◁ ▷ △ ▽ da odaberete željene cifre. Na kraju potvrdite sa `{{<T "Ok" >}}`.

4. Funkcija [Mjerenje temperature](/bs/docs/actions/measure-temperature/#measure-fever) sada se automatski pokreće.

   ![VitalControl Lists Alarmlist](../images/temperature.png "Mjerenje temperature")

### Ocjenjivanje životinje {#rate-animal}

1. Završite preliminarne korake.

2. Koristite `F3` tipku &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; da biste otvorili popup meni koji prikazuje moguće akcije kada pritisnete `{{<T "Ok" >}}` tipku. Koristite strelice △ ▽ da označite akciju `{{<T "RateAnimal" >}}` i odaberite akciju pritiskom na centralnu `{{<T "Ok" >}}` tipku ili `F3` tipku `{{<T "Ok" >}}`.

3. Unutar liste alarma, koristite strelice △ ▽ da odaberete željenu životinju i potvrdite sa `{{<T "Ok" >}}`. Alternativno, možete pretražiti životinju. Koristite `On/Off` dugme <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> i koristite strelice ◁ ▷ △ ▽ da odaberete željene cifre. Na kraju potvrdite sa `{{<T "Ok" >}}`.

4. Funkcija [Ocjenjivanje životinje](/bs/docs/actions/rating/#rate-your-animals) sada se automatski pokreće.

![VitalControl Lists Alarmlist](../images/rateanimal.png "Ocijeni životinju")

### Očisti alarm {#clear-alarm}

1. Završite preliminarne korake.

2. Koristite `F3` tipku &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; da biste pozvali popup meni koji prikazuje moguće akcije kada pritisnete `{{<T "Ok" >}}` tipku. Koristite strelice △ ▽ da označite akciju `{{<T "ClearAlarm" >}}` i odaberite akciju pritiskom na centralnu `{{<T "Ok" >}}` tipku ili `F3` tipku `{{<T "Ok" >}}`.

3. Unutar liste alarma, koristite strelice △ ▽ da odaberete željenu životinju i potvrdite sa `{{<T "Ok" >}}`. Alternativno, možete pretražiti životinju. Koristite `On/Off` dugme <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> i koristite strelice ◁ ▷ △ ▽ da odaberete željene cifre. Na kraju potvrdite sa `{{<T "Ok" >}}`.

4. Životinja je sada uklonjena sa liste alarma.

![VitalControl Lists Alarmlist](../images/clearalarm.png "Očisti alarm")

### Prebaci status nadzora {#toggle-watch-status}

1. Završite preliminarne korake.

2. Koristite `F3` tipku &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; da biste pozvali popup meni koji prikazuje moguće akcije kada pritisnete `{{<T "Ok" >}}` tipku. Koristite strelice △ ▽ da označite akciju `{{<T "ToggleWatchStatus" >}}` i odaberite akciju pritiskom na centralnu `{{<T "Ok" >}}` tipku ili `F3` tipku `{{<T "Ok" >}}`.

3. Unutar liste alarma, koristite strelice △ ▽ da odaberete željenu životinju i potvrdite sa `{{<T "Ok" >}}`. Alternativno, možete pretražiti životinju. Koristite `On/Off` dugme <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> i koristite strelice ◁ ▷ △ ▽ da odaberete željene cifre. Na kraju potvrdite sa `{{<T "Ok" >}}`.

4. Životinja je sada dodana ili uklonjena sa liste nadzora u zavisnosti od njenog početnog statusa.

![VitalControl Lists Alarmlist](../images/watchlist.png "Prebaci status nadzora")

### Pretraži životinju {#search-animal}


1. Završite preliminarne korake.

2. Koristite `F3` tipku &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; da biste otvorili popup meni koji prikazuje razne opcije. Koristite strelice △ ▽ da označite funkciju `{{<T "SearchAnimal" >}}` i pokrenite funkciju pretrage pritiskom na centralnu `{{<T "Ok" >}}` tipku ili `F3` tipku `{{<T "Ok" >}}`.

3. Koristite strelice △ ▽ ◁ ▷ da odaberete željeni ID životinje. Alternativno, možete pretražiti životinju. Koristite `On/Off` dugme <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> i koristite strelice ◁ ▷ △ ▽ da odaberete željene cifre. Na kraju potvrdite sa `{{<T "Ok" >}}`.

   ![VitalControl Lists Alarmlist](../images/searchanimal.png "Search animal")

### Postavite filter {#set-filter}

1. Završite preliminarne korake.

2. Koristite `F3` tipku &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; da biste otvorili popup meni koji prikazuje razne opcije. Koristite strelice △ ▽ da označite funkciju `{{<T "SetFilter" >}}` i pokrenite funkciju filtera pritiskom na centralnu `{{<T "Ok" >}}` tipku ili `F3` tipku `{{<T "Ok" >}}`.

3. Postavite željeni filter. Kako koristiti filter možete pronaći [ovdje](../../filter/#applying-filters).

   ![VitalControl Lists Alarmlist](../images/setfilter.png "Set filter")

