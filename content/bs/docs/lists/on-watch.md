---
title: "Na listi za praćenje"
linkTitle: "Na listi za praćenje"
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: on-watch
description: >
 Pogledajte svoju listu za praćenje.
categories: [Liste]
tags: [Liste, na praćenju]
translationKey: lists/on-watch
---
## Na listi za praćenje {#on-watch-list}

Na listi za praćenje ćete pronaći sve životinje koje ste ručno dodali na listu. Lista vam pomaže da zadržite pregled nad životinjama koje ste ocijenili kao sumnjive. Također, za svaku životinju na listi možete uraditi sljedeće:

- [Kompletan meni akcija](../alarm/#full-action-menu)
- [Podaci o životinji](../alarm/#animal-data)
- [Mjerenje temperature](../alarm/#take-temperature)
- [Ocijenite životinju](../alarm/#rate-animal)
- [Uklonite sa liste za praćenje](#remove-from-watch-list)
- [Prebacite status alarma](#toggle-alarm-status)
- [Pretražite životinju](../alarm/#search-animal)
- [Postavite filter](../alarm/#set-filter)

{{% alert title="Savjet" %}}
Neke akcije se izvode na isti način kao i na [Listi alarma](../alarm). Ove akcije nisu ovdje objašnjene. Izvršite preliminarne korake i koristite link odgovarajuće akcije da biste došli do uputstava.
{{% /alert %}}

Lista alarma je strukturirana na sljedeći način:

   ![VitalControl Liste Na listi za praćenje](../images/onwatchstructure.png "Struktura liste za praćenje")

|Simbol   | Opis
|---------|-----
| ![VitalControl Liste Na listi za praćenje](../images/kopf.png "Brojač veličine stada") | Prikazuje koliko je životinja na listi
| ![Ikona za kravu](../images/kopf2.png "Glava krave") | Prikazuje da li je odabrana životinja tele ili krava
| ![VitalControl Liste Na listi za praćenje](../images/auge.png "Ocjena") | Posljednja zabilježena ocjena prikazana je ispod simbola sa bojama sistema semafora
| &nbsp;<img src="/icons/actions/temperature.svg" width="12" align="bottom" alt="Tjelesna temperatura" title="Tjelesna temperatura" /> | Posljednje zabilježeno mjerenje temperature prikazano je ispod simbola sa bojama sistema semafora
| &nbsp;&nbsp;<img src="/icons/header/alarm.svg" width="8" align="bottom" alt="Prikaz životinje na alarmu" title="Životinja na alarmu" /> | Oznaka kruga ispod simbola označava da je životinja na listi alarma

### Preliminarni koraci {#preliminary-steps}

1. Odaberite <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Lists" /> `{{<T "Lists" >}}` stavku izbornika na glavnom ekranu vašeg VitalControl uređaja i pritisnite dugme `{{<T "Ok" >}}`.

2. Otvara se podizbornik u kojem su prikazane razne liste. Odaberite listu &nbsp;<img src="/icons/lists/onwatch.svg" width="28" align="bottom" alt="List 'On watch'" /> `{{<T "OnWatch" >}}`. Potvrdite sa `{{<T "Ok" >}}`.

3. Lista `{{<T "OnWatch" >}}` je sada otvorena.

   ![VitalControl Lists On watch list](../images/firststeps2.png "Preliminary Steps")

### Uklanjanje sa liste praćenja {#remove-from-watch-list}

1. Završite preliminarne korake.

2. Koristite tipku `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; da biste pozvali popup meni koji prikazuje moguće akcije kada pritisnete tipku `{{<T "Ok" >}}`. Koristite strelice △ ▽ da označite akciju `{{<T "RemoveFromWatchList" >}}` i odaberite ovu opciju pritiskom na centralno dugme `{{<T "Ok" >}}` ili tipku `F3` `{{<T "Ok" >}}`.

3. Unutar liste praćenja, koristite strelice △ ▽ da odaberete željenu životinju i potvrdite sa `{{<T "Ok" >}}`. Alternativno, možete pretražiti životinju. Koristite dugme `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> i koristite strelice ◁ ▷ △ ▽ da odaberete željene cifre. Na kraju potvrdite sa `{{<T "Ok" >}}`.

4. Životinja je sada uklonjena sa liste praćenja.

   ![VitalControl Lists On watch list](../images/remove.png "Remove from watch list")

### Prebacivanje statusa alarma {#toggle-alarm-status}

1. Završite preliminarne korake.

2. Koristite tipku `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; da biste pozvali popup meni koji prikazuje moguće akcije kada pritisnete tipku `{{<T "Ok" >}}`. Koristite strelice △ ▽ da označite akciju `{{<T "ToggleAlarmStatus" >}}` i odaberite ovu opciju pritiskom na centralno dugme `{{<T "Ok" >}}` ili tipku `F3` `{{<T "Ok" >}}`.

3. Unutar liste za praćenje, koristite strelice △ ▽ da odaberete željenu životinju i potvrdite sa `{{<T "Ok" >}}`. Alternativno, možete pretražiti životinju. Koristite dugme `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> i koristite strelice ◁ ▷ △ ▽ da odaberete željene cifre. Na kraju potvrdite sa `{{<T "Ok" >}}`.

4. Životinja je sada dodana ili uklonjena sa liste alarma u zavisnosti od njenog početnog statusa.

   ![VitalControl Lists Toggle alarm status](../images/alarmstatus.png "Toggle alarm status")
