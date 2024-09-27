---
title: Popis akcija
linkTitle: Popis akcija
weight: 30
date: 2023-07-28T13:25:28+02:00
draft: false
slug: actions
description: >
 Pogledajte svoj popis akcija.
categories: [Popisi]
tags: [Popisi, Akcija]
translationKey: lists/action
---
## Popis akcija {#action-list}

Unutar popisa akcija možete vidjeti životinje za koje nije poduzeta nikakva akcija šest sati. Dostupne su sljedeće opcije postavki:

- [Izmjerite temperaturu](../alarm/#take-temperature)
- [Ocijenite životinje](../alarm/#rate-animal)
- [Izvažite životinje](#weigh-animals)
- [Lanac akcija](#chain-of-action)
- [Povežite transponder](#link-transponder)
- [Sakrij nakon akcije](#hide-after-action)
- [Pretraži životinju](../alarm/#search-animal)
- [Postavite filter](../alarm/#set-filter)

{{% alert title="Savjet" %}}
Neke akcije treba provesti na isti način kao u [popisu alarma](../alarm). One ovdje nisu objašnjene. Provedite preliminarne korake i koristite poveznicu odgovarajuće akcije za dolazak do uputa.
{{% /alert %}}

### Preliminarni koraci {#preliminary-steps}

1. Odaberite stavku izbornika <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Lists" />  `{{<T "Lists" >}}` na glavnom ekranu vašeg VitalControl uređaja i pritisnite gumb `{{<T "Ok" >}}`.

2. Otvara se podizbornik u kojem su prikazane razne ikone popisa. Označite ikonu <img src="/icons/lists/actionlist.svg" width="30" align="bottom" alt="Action list" /> `{{<T "ActionList" >}}` i potvrdite s `{{<T "Ok" >}}`.

3. Popis akcija je sada otvoren.

   ![VitalControl Lists Action list](../images/firststeps3.png "Preliminary Steps")

### Izvažite životinje {#weigh-animals}

1. Dovršite preliminarne korake.

2. Koristite tipku `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; za pozivanje skočnog izbornika koji prikazuje moguće akcije pritiskom na tipku `{{<T "Ok" >}}`. Koristite tipke sa strelicama △ ▽ za označavanje akcije `{{<T "WeighAnimal" >}}` i odaberite ovu opciju pritiskom na središnju tipku `{{<T "Ok" >}}` ili tipku `F3` `{{<T "Ok" >}}`.

3. Unutar popisa akcija, koristite tipke sa strelicama △ ▽ za odabir željene životinje i potvrdite s `{{<T "Ok" >}}`. Alternativno, možete pretraživati životinju. Koristite tipku `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> i koristite tipke sa strelicama ◁ ▷ △ ▽ za odabir željenih znamenki. Na kraju potvrdite s `{{<T "Ok" >}}`.

4. Izbornik [vaganje životinja](../../actions/record-weight/) će se automatski otvoriti.

   ![VitalControl Lists Action list](../images/weightanimals.png "Vaganje životinja")

### Lanac akcija {#chain-of-action}

1. Dovršite preliminarne korake.

2. Koristite tipku `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; za pozivanje skočnog izbornika koji prikazuje moguće akcije kada pritisnete tipku `{{<T "Ok" >}}`. Koristite tipke sa strelicama △ ▽ za označavanje akcije `{{<T "ActionChain" >}}` i odaberite ovu opciju pritiskom na središnju tipku `{{<T "Ok" >}}` ili tipku `F3` `{{<T "Ok" >}}`.

3. Unutar popisa akcija, koristite tipke sa strelicama △ ▽ za odabir željene životinje i potvrdite s `{{<T "Ok" >}}`. Alternativno, možete pretraživati životinju. Koristite tipku `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> i koristite tipke sa strelicama ◁ ▷ △ ▽ za odabir željenih znamenki. Na kraju potvrdite s `{{<T "Ok" >}}`.

4. Funkcija [lanac akcija](../../chain-of-actions) će se automatski otvoriti.

   ![VitalControl Lists Action list](../images/chainofaction.png "Lanac akcija")

### Povezivanje transpondera {#link-transponder}

Ova funkcija se koristi za dodavanje transpondera u podatke o životinjama kojima još nije dodijeljen transponder.

1. Dovršite preliminarne korake.

2. Koristite tipku `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; za pozivanje skočnog izbornika koji prikazuje moguće akcije kada pritisnete tipku `{{<T "Ok" >}}`. Koristite tipke sa strelicama △ ▽ za označavanje akcije `{{<T "LinkTransponder" >}}` i odaberite ovu opciju pritiskom na središnju tipku `{{<T "Ok" >}}` ili tipku `F3` `{{<T "Ok" >}}`.


3. Unutar popisa akcija, koristite tipke sa strelicama △ ▽ za odabir željene životinje i potvrdite s `{{<T "Ok" >}}`. Alternativno, možete pretraživati životinju. Koristite gumb `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> i koristite tipke sa strelicama ◁ ▷ △ ▽ za odabir željenih znamenki. Na kraju potvrdite s `{{<T "Ok" >}}`.

4. Sada skenirajte transponder odgovarajuće životinje.

   ![VitalControl Lists Action list](../images/linktransponder.png "Link transponder")

### Sakrij nakon akcije {#hide-after-action}

Ako je ova funkcija aktivirana, životinje za koje je izvršena akcija bit će skrivene s popisa akcija. Ako je ova funkcija deaktivirana, obrađene životinje ostat će vidljive na popisu.

1. Dovršite preliminarne korake.

2. Koristite tipku `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Actions" />&nbsp; za pozivanje skočnog izbornika koji prikazuje razne opcije. Koristite tipke sa strelicama △ ▽ za označavanje opcije `{{<T "HideAfterAction" >}}` i prebacite ovu opciju pritiskom na središnji gumb `{{<T "Ok" >}}` ili tipku `F3` `{{<T "Ok" >}}`.

3. Funkcija `{{<T "HideAfterAction" >}}` je sada omogućena/onemogućena. Aktivacija je označena kvačicom unutar okvira.

   ![VitalControl Lists Action list](../images/hideafteraction.png "Hide after action")
