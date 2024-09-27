---
title: "Ny på gården, ingen transponder"
linkTitle: "Ny på gården, ingen transponder"
weight: 15
date: 2023-07-28T13:25:28+02:00
draft: false
slug: new-no-transponder
description: >
  Her tildeler du en transponder til nye dyr uten transponder.
categories: [Ny på gården, transponder]
tags: [Ny på gården, transponder]
translationKey: new-on-farm/new-on-farm, no transponder
---
### Ny på gården, ingen transponder {#new-on-farm-no-transponder}

I denne listen finner du alle nyopprettede dyr med en maksimal alder på X dager som ennå ikke har blitt tildelt en transponder. Du kan sette maksimal alder [her](/no/docs/settings/animal-registration/#set-default-values). Når du har samlet en transponder fra disse dyrene, kan du søke etter den tilsvarende dyre-IDen i listen og skanne den tilhørende transponderen. Transponderen blir da automatisk tildelt dyret og dyret blir slettet fra listen. For å tildele en transponder, gjør følgende:

1. På hovedskjermen til din VitalControl-enhet, velg menyelementet <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Ny på gården" /> `{{<T "NewOnFarm" >}}` og trykk på `{{<T "Ok" >}}` knappen.

2. En undermeny åpnes der du kan velge mellom <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Ny på gården, ingen transponder" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Kjøpte dyr" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Ingen nasjonal dyre-ID" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Fødsler" /> `{{<T "Births" >}}` og <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Ingen transponder tildelt" /> `{{<T "NoTransponderAssigned" >}}`. Bruk piltastene ◁ ▷ △ ▽ for å velge menyelementet <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Ny på gården, ingen transponder" /> `{{<T "NewOnFarmNoTransponder" >}}` og bekreft med `{{<T "Ok" >}}`.

3. En liste åpnes med alle dyr som er nyopprettet, men som ennå ikke har fått tildelt en transponder. Bruk piltastene △ ▽ for å velge ønsket dyr og bekreft med `{{<T "Ok" >}}`. Alternativt kan du søke etter et dyr. Bruk `På/Av`-knappen <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> og bruk piltastene ◁ ▷ △ ▽ for å velge ønskede sifre. Til slutt bekreft med `{{<T "Ok" >}}`.

4. Nå skanner du dyrets transponder.

5. En transponder har blitt vellykket lagt til dyret.

{{< tabpane >}}
{{< tab header="Ny på gården, ingen transponder:" text=true disabled=true />}}
{{% tab header="Transponderskanning" text=true %}}
![VitalControl: Meny Ny på gården, ingen transponder](../images/notransponder-scan.png "Ny på gården, ingen transponder")
{{% /tab %}}
{{% tab header="Manuelt valg fra liste" text=true %}}
![VitalControl: Meny Ny på gården, ingen transponder](../images/notransponder.png "Ny på gården, ingen transponder")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Hint" %}}
Så snart du har tildelt alle dyrene, har du muligheten til å bli omdirigert til menypunktet `{{<T "PurchasedAnimals" >}}` via `{{<T "Ok" >}}`-knappen. Der kan du opprette en CSV-fil for tilgangsrapporten i HI-Tier eller HERDE-Mast. <br/>
<br/>
![VitalControl: Meny Ny på gården, ingen transponder](../images/redirect.png "Omdirigering")
{{% /alert %}}

## Tidligere tilleggsaksjoner {#previous-additional-actions}

Du kan bruke de tidligere tilleggsaksjonene til å angi hvilke handlinger du vil utføre før du tildeler transponderen. Du kan velge mellom å måle temperaturen, vurdere dyret og veie dyret. Den respektive handlingen lagres direkte for dyret som du deretter tildeler. Fortsett som følger:

1. På hovedskjermen til din VitalControl-enhet, velg menypunktet <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="New on farm" /> `{{<T "NewOnFarm" >}}` og trykk på `{{<T "Ok" >}}`-knappen.

2. En undermeny åpnes der du kan velge mellom <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="New on farm, no transponder" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Purchased animals" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="No national animal ID" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Births" /> `{{<T "Births" >}}` og <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="No transponder assigned" /> `{{<T "NoTransponderAssigned" >}}`. Bruk piltastene ◁ ▷ △ ▽ for å velge menypunktet <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="New on farm, no transponder" /> `{{<T "NewOnFarmNoTransponder" >}}` og bekreft med `{{<T "Ok" >}}`.

3. Bruk `{{<T "Ok" >}}`-tasten &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Aufruf Popup" />&nbsp; for å åpne en popup. Bruk piltastene △ ▽ for å navigere til `F3`-elementet.

4. Bruk pilknappene △ ▽ for å velge mellom `{{<T "PreviousAdditionalActions" >}}`, `{{<T "TempTaking" >}}` og `{{<T "RateAnimal" >}}`. Bekreft med `{{<T "Ok" >}}` for å aktivere avkrysningsboksen. En hake vises i avkrysningsboksen for å bekrefte at handlingen er aktivert. Bekreft igjen med `{{<T "Ok" >}}` for å deaktivere handlingen. Du kan aktivere et hvilket som helst antall handlinger samtidig.

{{% alert title="Hint" %}}
Menyelementet `{{<T "Ok" >}}` informerer deg om at tildeling av en transponder alltid vil være den siste handlingen som utføres så snart du bekrefter et dyrevalg med `{{<T "Ok" >}}` i menyelementet `{{<T "Ok" >}}`.
{{% /alert %}}

![VitalControl: Meny Ny på gården, ingen transponder](../images/actions.png "Ytterligere handlinger")

## Ytterligere menyelementer {#further-menu-items}

Du har også muligheten til å velge mellom `{{<T "NewOnFarmNoTransponder" >}}`, `{{<T "Settings" >}}` og `{{<T "SetFilter" >}}` i popup-vinduet. Bruk pilknappene △ ▽ for å navigere til det respektive menyelementet og bekreft med `{{<T "Ok" >}}`. Informasjonen for menyelementet `{{<T "NewOnFarmNoTransponder" >}}` finner du [her](/no/docs/settings/animal-registration/#set-default-values), for `{{<T "SetFilter" >}}` [her](/no/docs/filter/) og for `{{<T "Settings" >}}` fortsett som i `{{<T "Ok" >}}` trinn 3.
