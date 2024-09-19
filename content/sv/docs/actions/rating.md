---
title: Betyg
linkTitle: Betyg
slug: rating
weight: 30
description: >
 Betygsätt dina djur.
date: 2023-07-26
Kategorier: [Åtgärder]
Taggar: [Åtgärder, Betyg]
translationKey: actions/animal-rating
---

## Betygsätt dina djur {#rate-your-animals}

När du betygsätter djuret dokumenterar du det enskilda djurets tillstånd. Tillståndet bestäms visuellt och registreras med hjälp av trafikljussystemet. I grundbedömningen registreras endast det allmänna tillståndet. I den utökade utvärderingen registrerar du det allmänna tillståndet, foderintag, avföringens konsistens och andningssjukdomar. Du kan antingen ändra betygsläget direkt i <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` åtgärden eller så kan du definiera det i [inställningarna](../../settings/data-acquisition/#mode-of-animal-rating).

{{% alert title="Tips" %}}
En gul eller röd utvärdering innebär att VitalControl klassificerar djuret som iögonfallande och sätter det på larmlistan.
{{% /alert %}}

1. På huvudskärmen på din VitalControl-enhet, välj menyalternativet &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` och tryck på `{{<T "Ok" >}}` knappen.

2. Antingen skanna ett djur med hjälp av transpondern eller välj ett djur från listan. Bekräfta med `{{<T "Ok" >}}` och välj ett djur med piltangenterna △ ▽. Bekräfta med `{{<T "Ok" >}}`.

3. En undermeny med djuråtgärder öppnas. Använd piltangenterna ◁ ▷ för att välja åtgärden <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` och bekräfta med `{{<T "Ok" >}}`.

4. Betygsmenyn öppnas. Om du vill byta betygsläge, använd `On/Off` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Chain-of-actions" />&nbsp; knappen och piltangenterna ◁ ▷. Med `F1` knappen <img src="/icons/footer/exit.svg" width="24" align="bottom" alt="Back" />&nbsp; kommer du tillbaka till utvärderingsmenyn.

5. Använd piltangenterna ◁ ▷ △ ▽ för att välja ett tillstånd och spara det med `F3` knappen <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> eller `{{<T "Ok" >}}` knappen.


6. I avancerat läge, använd tangenterna `F1` och `F3` för att växla mellan betygsparametrarna.

{{% alert title="Tips" %}}
Om du inte gör ett val med piltangenterna ◁ ▷ men sparar direkt med `F3` eller `{{<T "Ok" >}}`-tangenten, sparar VitalControl en neutral bedömning, representerad av en grå färg.
{{% /alert %}}

### Grundläggande betyg {#basic-rating}

{{< tabpane >}}
{{< tab header="Grundläggande betyg:" text=true disabled=true />}}
{{% tab header="Transponderskanning" text=true %}}
![VitalControl: Menyåtgärder Betyg](../images/basicrating-scan.png "Grundläggande betyg")
{{% /tab %}}
{{% tab header="Manuellt val från lista" text=true %}}
![VitalControl: Menyåtgärder Betyg](../images/basicrating.png "Grundläggande betyg")
{{% /tab %}}
{{< /tabpane >}}

### Utökad betyg {#extended-rating}

{{< tabpane >}}
{{< tab header="Grundläggande betyg:" text=true disabled=true />}}
{{% tab header="Transponderskanning" text=true %}}
![VitalControl: Menyåtgärder Betyg](../images/extendedrating-scan.png "Utökad betyg")
{{% /tab %}}
{{% tab header="Manuellt val från lista" text=true %}}
![VitalControl: Menyåtgärder Betyg](../images/extendedrating.png "Utökad betyg")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Tips" %}}
Om denna åtgärd inte är tillgänglig har åtgärden förmodligen blivit avaktiverad! Aktivera åtgärden i menyn [åtgärdsinställningar](../setting/). Alternativt, återställ alla åtgärder för att få tillbaka den åtgärden.
{{% /alert %}}
