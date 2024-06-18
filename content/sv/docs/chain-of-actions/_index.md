---
title: "Kedja av åtgärder: installation och användning"
linkTitle: "Kedja av åtgärder"
weight: 15
date: 2023-07-28T13:25:28+02:00
draft: false
slug: chain-of-actions
description: >
 Utför flera djuråtgärder efter varandra
categories: [Kedja av åtgärder]
tags: [Kedja av åtgärder, Åtgärder]
translationKey: action-chain
---
## Kedja av åtgärder {#chain-of-actions}

Åtgärdskedjan låter dig automatiskt utföra flera åtgärder för ett djur en efter en. Till exempel kan du välja åtgärderna `{{<T "Temperature" >}}` och `{{<T "Rating" >}}`. Om du sedan utför åtgärdskedjan kan du först ta djurets temperatur och omedelbart därefter registrera betyget.

### Använd kedja av åtgärder {#use-chain-of-actions}

1. På huvudskärmen på din VitalControl-enhet, välj menyalternativet &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Kedja av åtgärder" />&nbsp; `{{<T "ActionChain" >}}` och tryck på knappen `{{<T "Ok" >}}`.

2. Antingen skanna ett djur med transpondern eller bekräfta med `{{<T "Ok" >}}` och använd piltangenterna △ ▽ ◁ ▷ för att ange önskat djur-ID.

3. Kedjan av åtgärder utförs nu. Så snart alla åtgärder i åtgärdskedjan har utförts kan nästa djur väljas direkt.

{{< tabpane >}}
{{< tab header="Använd kedja av åtgärder:" text=true disabled=true />}}
{{% tab header="Transponderskanning" text=true %}}
![VitalControl: Meny kedja av åtgärder](images/chainofactions-scan.png "Kedja av åtgärder")
{{% /tab %}}
{{% tab header="Manuell val från lista" text=true %}}
![VitalControl: Meny kedja av åtgärder](images/chainofactions.png "Kedja av åtgärder")
{{% /tab %}}
{{< /tabpane >}}

### Ställ in kedja av åtgärder {#set-chain-of-actions}

1. På huvudskärmen på din VitalControl-enhet, välj menyalternativet &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Kedja av åtgärder" />&nbsp; `{{<T "ActionChain" >}}` och tryck på knappen `{{<T "Ok" >}}`.

2. Använd knappen `F2` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Aktionskette" />&nbsp; (`{{<T "Settings" >}}`).

3. En överlagringsskärm dyker upp. Använd piltangenterna △ ▽ för att välja mellan de listade åtgärderna 1 - 4 (du kan utföra upp till fyra åtgärder i rad). Använd piltangenterna ◁ ▷ för att välja önskad åtgärd för respektive åtgärd. Spara inställningarna med `F1`-tangenten &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Spara och återvänd" />&nbsp;.

4. Om du vill återställa hela åtgärdskedjan, välj alternativet `{{<T "ResetActionChain" >}}` i undermenyn med hjälp av piltangenterna △ ▽ och bekräfta med `{{<T "Ok" >}}`.

    ![VitalControl: Menykedja av åtgärder](images/setchainofactions.png "Ställ in åtgärdskedja")

{{% alert title="Hint" %}}
Inom de enskilda åtgärderna har du samma inställningsalternativ som beskrivs i kapitlet [Åtgärder](../actions) för varje enskild åtgärd.
{{% /alert %}}

{{% alert title="Hint" %}}
Symbolerna på startskärmen för åtgärdskedjan visar vilka åtgärder du har ställt in och i vilken ordning.
{{% /alert %}}
