---
title: "Alarm liste"
linkTitle: "Alarm liste"
weight: 10
date: 2023-07-28T13:25:28+02:00
draft: false
slug: alarm
description: >
  Sjekk ut alarm listen din.
categories: [Lister]
tags: [Lister, alarm]
translationKey: lists/alarm
---
## Alarm liste {#alarm-list}

På alarm listen finner du alle dyr som du enten manuelt har lagt til listen eller alle dyr som var i det gule eller røde området da temperaturen ble målt. Listen hjelper deg med å holde oversikt over alle påfallende dyr. I tillegg kan du for hvert dyr på listen gjøre følgende:

- [Full handlingsmeny](#full-action-menu)
- [Dyredata](#animal-data)
- [Ta temperatur](#take-temperature)
- [Vurder dyr](#rate-animal)
- [Fjern alarm](#clear-alarm)
- [Bytt overvåkingsstatus](#toggle-watch-status)
- [Søk dyr](#search-animal)
- [Sett filter](#set-filter)

Alarm listen er strukturert som følger:

   ![VitalControl Lister Alarm liste](../images/alarmstructure.png "Struktur av alarm listen")

|Symbol   | Beskrivelse
|-------  |----
| ![VitalControl Ikon Dyrehode](../images/kopf.png "Dyrehode") | Viser hvor mange dyr som er på listen
| ![VitalControl Ikon ID](../images/ID.png "ID") | Viser om det valgte dyret er en kalv eller en ku. Det kliniske termometeret viser om dyret var i den gule eller røde sonen ved siste måling. Dyrets ID vises under symbolet.
| ![VitalControl Ikon Vurdering](../images/auge.png "Ikon Vurdering") | Den siste registrerte vurderingen vises under symbolet med fargene til trafikksystemet
| &nbsp;<img src="/icons/actions/temperature.svg" width="12" align="bottom" alt="Kroppstemperatur" title="Kroppstemperatur" /> | Den siste registrerte febermålingen vises under symbolet med fargene til trafikksystemet
| &nbsp;<img src="/icons/actions/rating.svg" width="25" align="bottom" alt="Vurdering av dyr" title="Vurdering" /> |Sirkelmerket under symbolet viser at dyret er på overvåkningslisten

### Foreløpige trinn {#preliminary-steps}


1. Velg <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Lists" /> `{{<T "Lists" >}}` menyvalget på hovedskjermen til din VitalControl-enhet og trykk på `{{<T "Ok" >}}` knappen.

2. En undermeny åpnes der ulike listeikoner vises. Marker ikonet <img src="/icons/lists/alarmlist.svg" width="30" align="bottom" alt="Alarm" /> `{{<T "Alarm" >}}` og bekreft med `{{<T "Ok" >}}`.

3. Alarmlisten er nå åpen.

   ![VitalControl Lists Alarmlist](../images/firststeps.png "Preliminary Steps")

### Fullstendig handlingsmeny {#full-action-menu}

1. Fullfør de innledende trinnene.

2. Bruk `F3` tasten &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; for å åpne en popup-meny som viser de mulige handlingene når du trykker `{{<T "Ok" >}}` tasten. Bruk piltastene △ ▽ for å markere handlingen `{{<T "ActionMenu" >}}` og velg handlingen ved å trykke på den sentrale `{{<T "Ok" >}}` tasten eller `F3` tasten `{{<T "Ok" >}}`.

3. Innenfor alarmlisten, bruk piltastene △ ▽ for å velge ønsket dyr og bekreft med `{{<T "Ok" >}}`. Alternativt kan du søke etter et dyr. Bruk `På/Av` knappen <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> og bruk piltastene ◁ ▷ △ ▽ for å velge ønskede sifre. Til slutt bekreft med `{{<T "Ok" >}}`.

4. `{{<T "Actions" >}}` menyen vil åpnes automatisk. Håndtering av handlingene kan finnes [her](/no/docs/actions/).

   ![VitalControl Lists Alarmlist](../images/actionmenu.png "Action menu")

### Dyredata {#animal-data}

1. Fullfør de innledende trinnene.

2. Bruk `F3` tasten &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; for å åpne en popup-meny som viser de mulige handlingene når du trykker `{{<T "Ok" >}}` tasten. Bruk piltastene △ ▽ for å markere handlingen `{{<T "AnimalData" >}}` og velg handlingen ved å trykke på den sentrale `{{<T "Ok" >}}` tasten eller `F3` tasten `{{<T "Ok" >}}`.

3. Innenfor alarmlisten, bruk piltastene △ ▽ for å velge ønsket dyr og bekreft med `{{<T "Ok" >}}`. Alternativt kan du søke etter et dyr. Bruk `På/Av` knappen <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> og bruk piltastene ◁ ▷ △ ▽ for å velge ønskede sifre. Til slutt bekreft med `{{<T "Ok" >}}`.


4. Dyredataene vil nå bli vist.

   ![VitalControl Lister Alarmliste](../images/animaldata.png "Dyredata")

### Ta temperatur {#take-temperature}

1. Fullfør de innledende trinnene.

2. Bruk `F3`-tasten &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Åpne popup" />&nbsp; for å åpne en popup-meny som viser de mulige handlingene når du trykker på `{{<T "Ok" >}}`-tasten. Bruk piltastene △ ▽ for å markere handlingen `{{<T "TempTaking" >}}` og velg handlingen ved å trykke på den sentrale `{{<T "Ok" >}}`-tasten eller `F3`-tasten `{{<T "Ok" >}}`.

3. Innenfor alarmlisten, bruk piltastene △ ▽ for å velge ønsket dyr og bekreft med `{{<T "Ok" >}}`. Alternativt kan du søke etter et dyr. Bruk `På/Av`-knappen <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Søk" /> og bruk piltastene ◁ ▷ △ ▽ for å velge ønskede sifre. Til slutt bekreft med `{{<T "Ok" >}}`.

4. Funksjonen [Mål temperatur](/no/docs/actions/measure-temperature/#measure-fever) starter nå automatisk.

   ![VitalControl Lister Alarmliste](../images/temperature.png "Ta temperatur")

### Vurder dyr {#rate-animal}

1. Fullfør de innledende trinnene.

2. Bruk `F3`-tasten &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Åpne popup" />&nbsp; for å åpne en popup-meny som viser de mulige handlingene når du trykker på `{{<T "Ok" >}}`-tasten. Bruk piltastene △ ▽ for å markere handlingen `{{<T "RateAnimal" >}}` og velg handlingen ved å trykke på den sentrale `{{<T "Ok" >}}`-tasten eller `F3`-tasten `{{<T "Ok" >}}`.

3. Innenfor alarmlisten, bruk piltastene △ ▽ for å velge ønsket dyr og bekreft med `{{<T "Ok" >}}`. Alternativt kan du søke etter et dyr. Bruk `På/Av`-knappen <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Søk" /> og bruk piltastene ◁ ▷ △ ▽ for å velge ønskede sifre. Til slutt bekreft med `{{<T "Ok" >}}`.

4. Funksjonen [Vurder dyr](/no/docs/actions/rating/#rate-your-animals) starter nå automatisk.

![VitalControl Lists Alarmlist](../images/rateanimal.png "Rate animal")

### Fjern alarm {#clear-alarm}

1. Fullfør de innledende trinnene.

2. Bruk `F3`-tasten &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; for å åpne en popup-meny som viser de mulige handlingene når du trykker på `{{<T "Ok" >}}`-tasten. Bruk piltastene △ ▽ for å markere handlingen `{{<T "ClearAlarm" >}}` og velg handlingen ved å trykke på den sentrale `{{<T "Ok" >}}`-tasten eller `F3`-tasten `{{<T "Ok" >}}`.

3. Innenfor alarmlisten, bruk piltastene △ ▽ for å velge ønsket dyr og bekreft med `{{<T "Ok" >}}`. Alternativt kan du søke etter et dyr. Bruk `On/Off`-knappen <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> og bruk piltastene ◁ ▷ △ ▽ for å velge ønskede sifre. Til slutt bekreft med `{{<T "Ok" >}}`.

4. Dyret er nå fjernet fra alarmlisten.

   ![VitalControl Lists Alarmlist](../images/clearalarm.png "Clear alarm")

### Veksle overvåkingsstatus {#toggle-watch-status}

1. Fullfør de innledende trinnene.

2. Bruk `F3`-tasten &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; for å åpne en popup-meny som viser de mulige handlingene når du trykker på `{{<T "Ok" >}}`-tasten. Bruk piltastene △ ▽ for å markere handlingen `{{<T "ToggleWatchStatus" >}}` og velg handlingen ved å trykke på den sentrale `{{<T "Ok" >}}`-tasten eller `F3`-tasten `{{<T "Ok" >}}`.

3. Innenfor alarmlisten, bruk piltastene △ ▽ for å velge ønsket dyr og bekreft med `{{<T "Ok" >}}`. Alternativt kan du søke etter et dyr. Bruk `On/Off`-knappen <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> og bruk piltastene ◁ ▷ △ ▽ for å velge ønskede sifre. Til slutt bekreft med `{{<T "Ok" >}}`.

4. Dyret er nå lagt til eller fjernet fra overvåkingslisten avhengig av dets opprinnelige status.

   ![VitalControl Lists Alarmlist](../images/watchlist.png "Toggle watch status")

### Søk etter dyr {#search-animal}


1. Fullfør de innledende trinnene.

2. Bruk `F3`-tasten &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; for å åpne en popup-meny som viser ulike alternativer. Bruk piltastene △ ▽ for å markere funksjonen `{{<T "SearchAnimal" >}}` og aktiver søkefunksjonen ved å trykke på den sentrale `{{<T "Ok" >}}`-tasten eller `F3`-tasten `{{<T "Ok" >}}`.

3. Bruk piltastene △ ▽ ◁ ▷ for å velge ønsket dyre-ID. Alternativt kan du søke etter et dyr. Bruk `På/Av`-knappen <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> og bruk piltastene ◁ ▷ △ ▽ for å velge ønskede sifre. Bekreft til slutt med `{{<T "Ok" >}}`.

   ![VitalControl Lists Alarmlist](../images/searchanimal.png "Search animal")

### Sett filter {#set-filter}

1. Fullfør de innledende trinnene.

2. Bruk `F3`-tasten &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; for å åpne en popup-meny som viser ulike alternativer. Bruk piltastene △ ▽ for å markere funksjonen `{{<T "SetFilter" >}}` og aktiver filterfunksjonen ved å trykke på den sentrale `{{<T "Ok" >}}`-tasten eller `F3`-tasten `{{<T "Ok" >}}`.

3. Sett ønsket filter. Du kan finne ut hvordan du bruker filteret [her](../../filter/#applying-filters).

   ![VitalControl Lists Alarmlist](../images/setfilter.png "Set filter")

