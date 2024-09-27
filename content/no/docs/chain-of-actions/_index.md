---
title: "Kjede av handlinger: oppsett og bruk"
linkTitle: "Kjede av handlinger"
weight: 15
date: 2023-07-28T13:25:28+02:00
draft: false
slug: chain-of-actions
description: >
 Utfør flere dyrehandlinger etter hverandre
categories: [Kjede av handlinger]
tags: [Kjede av handlinger, Handlinger]
translationKey: action-chain
---
## Kjede av handlinger {#chain-of-actions}

Handlingskjeden lar deg automatisk utføre flere handlinger for et dyr etter hverandre. For eksempel kan du velge handlingene `{{<T "Temperature" >}}` og `{{<T "Rating" >}}`. Hvis du deretter utfører handlingskjeden, kan du først ta dyrets temperatur og deretter registrere vurderingen umiddelbart etterpå.

### Bruk kjede av handlinger {#use-chain-of-actions}

1. På hovedskjermen til din VitalControl-enhet, velg menyvalget &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Chain of actions" />&nbsp; `{{<T "ActionChain" >}}` og trykk på `{{<T "Ok" >}}`-knappen.

2. Enten skann et dyr ved hjelp av transponderen eller bekreft med `{{<T "Ok" >}}` og bruk piltastene △ ▽ ◁ ▷ for å angi ønsket dyre-ID.

3. Handlingskjeden utføres nå. Så snart alle handlingene i handlingskjeden er utført, kan neste dyr velges direkte.

{{< tabpane >}}
{{< tab header="Bruk kjede av handlinger:" text=true disabled=true />}}
{{% tab header="Transponderskanning" text=true %}}
![VitalControl: Meny kjede av handlinger](images/chainofactions-scan.png "Kjede av handlinger")
{{% /tab %}}
{{% tab header="Manuelt valg fra liste" text=true %}}
![VitalControl: Meny kjede av handlinger](images/chainofactions.png "Kjede av handlinger")
{{% /tab %}}
{{< /tabpane >}}

### Sett kjede av handlinger {#set-chain-of-actions}

1. På hovedskjermen til din VitalControl-enhet, velg menyvalget &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Chain of actions" />&nbsp; `{{<T "ActionChain" >}}` og trykk på `{{<T "Ok" >}}`-knappen.

2. Bruk knappen `F2` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Aktionskette" />&nbsp; (`{{<T "Settings" >}}`).


3. En overleggsskjerm dukker opp. Bruk piltastene △ ▽ for å velge mellom de oppførte handlingene 1 - 4 (du kan utføre opptil fire handlinger på rad). Bruk piltastene ◁ ▷ for å velge ønsket handling for den respektive handlingen. Lagre innstillingene med `F1`-tasten &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Lagre og gå tilbake" />&nbsp;.

4. Hvis du vil tilbakestille hele handlingskjeden, velg alternativet `{{<T "ResetActionChain" >}}` i undermenyen ved å bruke piltastene △ ▽ og bekreft med `{{<T "Ok" >}}`.

    ![VitalControl: Menykjede av handlinger](images/setchainofactions.png "Sett kjede av handlinger")

{{% alert title="Hint" %}}
Innenfor de enkelte handlingene har du de samme innstillingsmulighetene som beskrevet i kapittelet [Handlinger](../actions) for hver enkelt handling.
{{% /alert %}}

{{% alert title="Hint" %}}
Symbolene på startskjermen til handlingskjeden viser hvilke handlinger du har satt og i hvilken rekkefølge.
{{% /alert %}}
