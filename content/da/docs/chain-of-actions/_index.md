---
title: "Kæde af handlinger: opsætning og brug"
linkTitle: "Kæde af handlinger"
weight: 15
date: 2023-07-28T13:25:28+02:00
draft: false
slug: chain-of-actions
description: >
 Udfør flere dyrehandlinger efter hinanden
kategorier: [Kæde af handlinger]
tags: [Kæde af handlinger, Handlinger]
translationKey: action-chain
---
## Kæde af handlinger {#chain-of-actions}

Handlingskæden giver dig mulighed for automatisk at udføre flere handlinger for et dyr efter hinanden. For eksempel kan du vælge handlingerne `{{<T "Temperature" >}}` og `{{<T "Rating" >}}`. Hvis du derefter udfører handlingskæden, kan du først tage dyrets temperatur og derefter registrere vurderingen umiddelbart efter.

### Brug kæde af handlinger {#use-chain-of-actions}

1. På hovedskærmen på din VitalControl-enhed skal du vælge menupunktet &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Chain of actions" />&nbsp; `{{<T "ActionChain" >}}` og trykke på `{{<T "Ok" >}}` knappen.

2. Enten scan et dyr ved hjælp af transponderen eller bekræft med `{{<T "Ok" >}}` og brug piletasterne △ ▽ ◁ ▷ til at indtaste det ønskede dyre-ID.

3. Handlingskæden udføres nu. Så snart alle handlinger i handlingskæden er udført, kan det næste dyr vælges direkte.

{{< tabpane >}}
{{< tab header="Brug kæde af handlinger:" text=true disabled=true />}}
{{% tab header="Transponderscanning" text=true %}}
![VitalControl: Menu kæde af handlinger](images/chainofactions-scan.png "Kæde af handlinger")
{{% /tab %}}
{{% tab header="Manuel valg fra liste" text=true %}}
![VitalControl: Menu kæde af handlinger](images/chainofactions.png "Kæde af handlinger")
{{% /tab %}}
{{< /tabpane >}}

### Indstil kæde af handlinger {#set-chain-of-actions}

1. På hovedskærmen på din VitalControl-enhed skal du vælge menupunktet &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Chain of actions" />&nbsp; `{{<T "ActionChain" >}}` og trykke på `{{<T "Ok" >}}` knappen.

2. Brug knappen `F2` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Aktionskette" />&nbsp; (`{{<T "Settings" >}}`).


3. En overliggende skærm dukker op. Brug piletasterne △ ▽ til at vælge mellem de listede handlinger 1 - 4 (du kan udføre op til fire handlinger i træk). Brug piletasterne ◁ ▷ til at vælge den ønskede handling for den respektive handling. Gem indstillingerne med `F1`-tasten &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Gem og vend tilbage" />&nbsp;.

4. Hvis du vil nulstille hele handlingskæden, skal du vælge muligheden `{{<T "ResetActionChain" >}}` i undermenuen ved hjælp af piletasterne △ ▽ og bekræfte med `{{<T "Ok" >}}`.

    ![VitalControl: Menu handlingskæde](images/setchainofactions.png "Indstil handlingskæde")

{{% alert title="Hint" %}}
Inden for de enkelte handlinger har du de samme indstillingsmuligheder som beskrevet i kapitlet [Handlinger](../actions) for hver enkelt handling.
{{% /alert %}}

{{% alert title="Hint" %}}
Symbolerne på startskærmen for handlingskæden viser, hvilke handlinger du har indstillet, og i hvilken rækkefølge.
{{% /alert %}}

