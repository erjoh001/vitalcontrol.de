---
title: Registrera vikt
linkTitle: Vikt
slug: record-weight
weight: 20
description: >
  Registrera vikten på dina djur.
date: 2023-07-26
categories: [Åtgärder]
tags: [Åtgärder, vikt]
translationKey: actions/weight
---

## Registrera vikt {#record-weight}
Använd &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Vägning" /> `{{<T "Weighing" >}}` åtgärden för att spara vikten på ditt djur individuellt. För att göra detta, väg dina djur eller uppskatta deras vikt och ange detta värde i VitalControl-enheten. Detta gör att du kan kontrollera viktutvecklingen hos dina djur och utvärdera dem individuellt.

{{% alert title="Tips" %}}
Om medelvikten avviker mycket i en riktning (för hög/för låg), bör värdet för den dagliga ökningen justeras.
{{% /alert %}}

1. På huvudskärmen på din VitalControl-enhet, välj menyalternativet &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Åtgärder" /> `{{<T "Actions" >}}` och tryck på `{{<T "Ok" >}}` knappen.

2. Antingen skanna ett djur med hjälp av transpondern eller välj ett djur från listan. Bekräfta med `{{<T "Ok" >}}` och välj ett djur med piltangenterna △ ▽. Bekräfta med `{{<T "Ok" >}}`.

3. En undermeny med djuråtgärder öppnas. Använd piltangenterna ◁ ▷ för att välja åtgärden &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Vägning" /> `{{<T "Weighing" >}}` och bekräfta med `{{<T "Ok" >}}`.

4. En meny öppnas med en viktangivelse. Öka eller minska denna med piltangenterna △ ▽ och spara resultatet med `F3` knappen <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Spara" /> eller med `{{<T "Ok" >}}` knappen.

{{< tabpane >}}
{{< tab header="Registrera vikt:" text=true disabled=true />}}
{{% tab header="Transponderskanning" text=true %}}
  ![VitalControl: Meny Åtgärd Vägning](../images/weighing-scan.png "Vägning")
{{% /tab %}}
{{% tab header="Manuellt val från lista" text=true %}}
  ![VitalControl: Meny Åtgärd Vägning](../images/weighing.png "Vägning")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Tips" %}}
Om denna åtgärd inte är tillgänglig har åtgärden förmodligen blivit inaktiverad! Aktivera åtgärden i menyn [åtgärdsinställningar](../setting/). Alternativt kan du återställa alla åtgärder för att få tillbaka den åtgärden.
{{% /alert %}}
