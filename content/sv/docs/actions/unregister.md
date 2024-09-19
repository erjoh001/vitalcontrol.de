---
title: Avregistrera djur
linkTitle: Avregistrera
slug: unregister
weight: 100
description: >
 Avregistrera ett djur
date: 2023-07-26
Kategorier: [Åtgärder]
Taggar: [Åtgärder, Avregistrera]
translationKey: actions/unregister
---
{{% alert title="Varning" color="warning" %}}
Så snart du raderar djurets dataregister är det inte längre tillgängligt för utvärderingsändamål! Om du avregistrerar ett djur men vill till exempel utvärdera djurets utveckling igen senare, måste du behålla djurets dataregister!
{{% /alert %}}

## Avregistrera {#unregister}

Åtgärden `{{<T "Unregister" >}}` låter dig avregistrera ett djur så snart det flyttas ut. För att avregistrera ett djur, gör följande:

1. På huvudskärmen på din VitalControl-enhet, välj menyalternativet &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Åtgärder" /> `{{<T "Actions" >}}` och tryck på knappen `{{<T "Ok" >}}`.

2. Antingen skanna ett djur med transpondern eller välj ett djur från listan. Bekräfta med `{{<T "Ok" >}}` och välj ett djur med piltangenterna △ ▽. Bekräfta med `{{<T "Ok" >}}`.

3. En undermeny med djuråtgärder öppnas. Använd piltangenterna ◁ ▷ △ ▽ för att välja åtgärden &nbsp;<img src="/icons/actions/unregister.svg" width="33" align="bottom" alt="Avregistrera" /> `{{<T "Unregister" >}}` och bekräfta med `{{<T "Ok" >}}`.

4. En annan undermeny öppnas där du kan spara olika inställningar. Använd piltangenterna △ ▽ för att välja önskat inställningsalternativ. Använd piltangenterna ◁ ▷ för att välja önskad inställning.

5. Använd tangenten `F3` `{{<T "Unregister" >}}` för att avregistrera djuret med de angivna inställningarna.

{{< tabpane >}}
{{< tab header="Avregistrera:" text=true disabled=true />}}
{{% tab header="Transponderskanning" text=true %}}
![VitalControl: Menyåtgärd Avregistrera](../images/unregister-scan.png "Avregistrera ett djur")
{{% /tab %}}
{{% tab header="Manuellt val från lista" text=true %}}
![VitalControl: Menyåtgärd Avregistrera](../images/unregister.png "Avregistrera ett djur")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Tips" %}}
Om denna åtgärd inte är tillgänglig har åtgärden förmodligen blivit avaktiverad! Aktivera åtgärden i menyn [åtgärdsinställningar](../setting/). Alternativt kan du återställa alla åtgärder för att få tillbaka den åtgärden.
{{% /alert %}}
