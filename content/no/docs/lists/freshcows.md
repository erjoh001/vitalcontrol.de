---
title: "Liste over nykalvede kyr"
linkTitle: "Liste over nykalvede kyr"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: fresh-cows
description: >
  Legg til rette for kontroll av dine nykalvede kyr.
categories: [Lister]
tags: [Lister, nykalvet ku]
translationKey: lists/fresh-cows
---
### Liste over nykalvede kyr {#fresh-cows-list}

{{% alert title="Forklaring" %}}
Når man håndterer nykalvede kyr, anses det som en beste praksis rutine å sjekke dyrene daglig i flere dager etter fødselen. Listen over nykalvede kyr støtter og letter denne kontrollen av nykalvede kyr, spesielt når det gjelder temperaturregistrering. For hvert dyr vises et stolpediagram over alle dager i kontrollperioden, hver dag i kontrollperioden er representert med en vertikal stolpe. Avhengig av fargen på stolpen (grønn, gul eller rød), kan du se om det ble målt en normal, forhøyet eller kritisk forhøyet temperatur den dagen for det respektive dyret.
{{% /alert %}}

Kyr settes på listen over nykalvede kyr umiddelbart etter at kalvingen deres er registrert. De forblir på den listen i en viss periode, lengden på denne perioden (i dager) kan justeres i [innstillingene](../../settings/data-acquisition/#control-period-of-fresh-cows).
 Følgende handlinger er tilgjengelige for denne listen:

- [Full handlingsmeny](../alarm/#full-action-menu)
- [Dyredata](../alarm/#animal-data)
- [Ta temperatur](../alarm/#take-temperature)
- [Veksle alarmstatus](#toggle-alarm-status)
- [Veksle overvåkingsstatus](#toggle-watch-status)
- [Skjul målte kyr](#hide-measured-cows)
- [Søk dyr](../alarm/#search-animal)
- [Sett filter](../alarm/#set-filter)

{{% alert title="Tips" %}}
Noen handlinger skal utføres på samme måte som i [alarmlisten](../alarm). Disse er ikke forklart her. Utfør de innledende trinnene og bruk lenken til den respektive handlingen for å komme til instruksjonene.
{{% /alert %}}

### Innledende Trinn {#preliminary-steps}

1. Velg <img src="/icons/main/lists.svg" width="25" align="bottom" alt="Lister" /> `{{<T "Lists" >}}` menyvalget på hovedskjermen til din VitalControl-enhet og trykk på `{{<T "Ok" >}}` knappen.

2. En undermeny åpnes der ulike lister vises. Velg `{{<T "FreshCows" >}}` listen <img src="/icons/lists/freshcows.svg" width="30" align="bottom" alt="Fresh-cows" />. Bekreft med `{{<T "Ok" >}}`.

3. Listen over ferske kyr er nå åpen.

   ![VitalControl Lists Fresh cows list](../images/firststeps4.png "Fresh cow list")

### Veksle alarmstatus {#toggle-alarm-status}

1. Fullfør de innledende trinnene.

2. Bruk `F3` tasten &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; for å åpne en popup-meny som viser de mulige handlingene når du trykker på `{{<T "Ok" >}}` tasten. Bruk piltastene △ ▽ for å markere handlingen `{{<T "ToggleAlarmStatus" >}}` og velg dette alternativet ved å trykke på den sentrale `{{<T "Ok" >}}` knappen eller `F3` tasten `{{<T "Ok" >}}`.

3. Innenfor listen over ferske kyr, bruk piltastene △ ▽ for å velge ønsket dyr og bekreft med `{{<T "Ok" >}}`. Alternativt kan du søke etter et dyr. Bruk `På/Av` knappen <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> og bruk piltastene ◁ ▷ △ ▽ for å velge ønskede sifre. Til slutt bekreft med `{{<T "Ok" >}}`.

4. Dyret er nå lagt til eller fjernet fra varslingslisten avhengig av dets opprinnelige status.

   ![VitalControl Lists Fresh cows list](../images/togglealarmstatus.png "Toggle alarm status")

### Veksle overvåkingsstatus {#toggle-watch-status}

1. Fullfør de innledende trinnene.

2. Bruk `F3` tasten &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; for å åpne en popup-meny som viser de mulige handlingene når du trykker på `{{<T "Ok" >}}` tasten. Bruk piltastene △ ▽ for å markere handlingen `{{<T "ToggleWatchStatus" >}}` og velg dette alternativet ved å trykke på den sentrale `{{<T "Ok" >}}` knappen eller `F3` tasten `{{<T "Ok" >}}`.

3. Innenfor listen over ferske kyr, bruk piltastene △ ▽ for å velge ønsket dyr og bekreft med `{{<T "Ok" >}}`. Alternativt kan du søke etter et dyr. Bruk `På/Av` knappen <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> og bruk piltastene ◁ ▷ △ ▽ for å velge ønskede sifre. Til slutt bekreft med `{{<T "Ok" >}}`.


4. Dyret er nå lagt til eller fjernet fra overvåkningslisten avhengig av dens opprinnelige status.

   ![VitalControl Lister Liste over ferske kyr](../images/togglewatchstatus.png "Bytt overvåkningsstatus")

### Skjul målte kyr {#hide-measured-cows}

Hvis denne funksjonen er aktivert, skjules dyrene som har fått målt temperatur på listen over sinte kyr. Hvis denne funksjonen ikke er aktivert, forblir dyrene synlige på listen.

1. Fullfør de innledende trinnene.

2. Bruk `F3`-tasten &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Handlinger" />&nbsp; for å åpne en popup-meny som viser ulike alternativer. Bruk piltastene △ ▽ for å markere alternativet `{{<T "HideMeasuredCows" >}}` og bytt dette alternativet ved å trykke på den sentrale `{{<T "Ok" >}}`-knappen eller `F3`-tasten `{{<T "Ok" >}}`.

3. Innenfor listen over ferske kyr, bruk piltastene △ ▽ for å velge ønsket dyr og bekreft med `{{<T "Ok" >}}`. Alternativt kan du søke etter et dyr. Bruk `På/Av`-knappen <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Søk" /> og bruk piltastene ◁ ▷ △ ▽ for å velge ønskede sifre. Til slutt bekreft med `{{<T "Ok" >}}`.

4. Funksjonen `{{<T "HideMeasuredCows" >}}` er nå aktivert. Aktivering indikeres ved å krysse av i boksen.

   ![VitalControl Lister Liste over ferske kyr](../images/hidemeasuredcows.png "Skjul målte kyr")
