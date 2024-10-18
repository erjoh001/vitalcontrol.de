---
title: Rating
linkTitle: Rating
slug: rating
weight: 30
description: >
 Vurder dyrene dine.
date: 2023-07-26
categories: [Actions]
tags: [Actions, Rating]
translationKey: actions/animal-rating
---

## Vurder dyrene dine {#rate-your-animals}

Når du vurderer dyret, dokumenterer du tilstanden til det enkelte dyret. Tilstanden bestemmes visuelt og registreres ved hjelp av trafikklyssystemet. I grunnvurderingen registreres kun den generelle tilstanden. I den utvidede evalueringen registrerer du den generelle tilstanden, fôrinntak, konsistens av avføring og luftveissykdommer. Du kan enten endre vurderingsmodus direkte i <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` handlingen eller du kan definere det i [innstillingene](../../settings/data-acquisition/#mode-of-animal-rating).

{{% alert title="Hint" %}}
En gul eller rød evaluering betyr at VitalControl klassifiserer dyret som iøynefallende og setter det på alarmlisten.
{{% /alert %}}

1. På hovedskjermen til din VitalControl-enhet, velg menyelementet &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` og trykk på `{{<T "Ok" >}}` knappen.

2. Enten skann et dyr ved hjelp av transponderen eller velg et dyr fra listen. Bekreft med `{{<T "Ok" >}}` og velg et dyr med piltastene △ ▽. Bekreft med `{{<T "Ok" >}}`.

3. En undermeny med dyrehandlinger åpnes. Bruk piltastene ◁ ▷ for å velge handlingen <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` og bekreft med `{{<T "Ok" >}}`.

4. Vurderingsmenyen åpnes. Hvis du vil bytte vurderingsmodus, bruk `On/Off` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Chain-of-actions" />&nbsp; knappen og piltastene ◁ ▷. Med `F1` tasten <img src="/icons/footer/exit.svg" width="24" align="bottom" alt="Back" />&nbsp; kommer du tilbake til evalueringsmenyen.

5. Bruk piltastene ◁ ▷ △ ▽ for å velge en tilstand og lagre den med `F3` tasten <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> eller `{{<T "Ok" >}}` tasten.


6. I avansert modus, bruk `F1` og `F3` tastene for å bytte mellom vurderingsparametrene.

{{% alert title="Hint" %}}
Hvis du ikke gjør et valg ved hjelp av piltastene ◁ ▷ men lagrer direkte ved hjelp av `F3` eller `{{<T "Ok" >}}` tasten, lagrer VitalControl en nøytral vurdering, representert ved en grå farge.
{{% /alert %}}

### Grunnleggende vurdering {#basic-rating}

{{< tabpane >}}
{{< tab header="Basic rating:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Meny Handlinger Vurdering](../images/basicrating-scan.png "Grunnleggende vurdering")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Meny Handlinger Vurdering](../images/basicrating.png "Grunnleggende vurdering")
{{% /tab %}}
{{< /tabpane >}}

### Utvidet vurdering {#extended-rating}

{{< tabpane >}}
{{< tab header="Basic rating:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Meny Handlinger Vurdering](../images/extendedrating-scan.png "Utvidet vurdering")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Meny Handlinger Vurdering](../images/extendedrating.png "Utvidet vurdering")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Hint" %}}
Hvis denne handlingen ikke er tilgjengelig, har handlingen sannsynligvis blitt deaktivert! Aktiver handlingen i [handlingsinnstillinger](../setting/) menyen. Alternativt vil tilbakestilling av alle handlinger bringe den handlingen tilbake.
{{% /alert %}}
