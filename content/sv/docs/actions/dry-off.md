---
title: Torka av
linkTitle: Torka av
slug: dry-off
weight: 115
description: >
 Torka av en ko eller lägg till henne i listan över nykalvade kor
date: 2023-07-26
categories: [Torka av]
tags: [Torka av]
translationKey: actions/dry-cows
---

## Torka av {#dry-off}

{{% alert title="Tips" %}}
Beroende på kons initiala status kan du antingen torka av djuret och lägga till det i torklistan, eller så kan du markera djuret som en nykalvad ko och därmed lägga till det i listan över nykalvade kor. Skillnaden mellan funktionerna görs tydlig med ett plustecken eller ett minustecken.
{{% /alert %}}

### Torka av en ko {#dry-off-a-cow}

1. På huvudskärmen på din VitalControl-enhet, välj menyalternativet &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Åtgärder" /> `{{<T "Actions" >}}` och tryck på `{{<T "Ok" >}}` knappen.

2. Antingen skanna transpondern på djuret utan det nationella djur-ID:t eller välj djuret från listan. För att göra detta, bekräfta med `{{<T "Ok" >}}` och välj djur-ID:t med piltangenterna △ ▽. Bekräfta med `{{<T "Ok" >}}`.

3. En undermeny med djuråtgärder öppnas. Använd piltangenterna ◁ ▷ △ ▽ för att välja åtgärden <img src="/icons/actions/dryoff-plus.svg" width="35" align="bottom" alt="Torka av" /> `{{<T "DryOff" >}}` och bekräfta med `{{<T "Ok" >}}`.

4. Djuret markerades framgångsrikt som torrt.

{{< tabpane >}}
{{< tab header="Torka av en ko:" text=true disabled=true />}}
{{% tab header="Transponderskanning" text=true %}}
![VitalControl: Meny Åtgärder Torka av](../images/dryoff-scan.png "Torka av en ko")
{{% /tab %}}
{{% tab header="Manuellt val från lista" text=true %}}
![VitalControl: Meny Åtgärder Torka av](../images/dryoff.png "Torka av en ko")
{{% /tab %}}
{{< /tabpane >}}

### Markera som nykalvad {#mark-as-lactated}

1. På huvudskärmen på din VitalControl-enhet, välj menyalternativet &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Åtgärder" /> `{{<T "Actions" >}}` och tryck på `{{<T "Ok" >}}` knappen.

2. Antingen skanna transpondern på djuret utan det nationella djur-ID:t eller välj djuret från listan. För att göra detta, bekräfta med `{{<T "Ok" >}}` och välj djur-ID:t med piltangenterna △ ▽. Bekräfta med `{{<T "Ok" >}}`.


3. En undermeny med djuråtgärder öppnas. Använd piltangenterna ◁ ▷ △ ▽ för att välja åtgärden <img src="/icons/actions/dryoff-minus.svg" width="35" align="bottom" alt="Dry off" /> `{{<T "DryOff" >}}` och bekräfta med `{{<T "Ok" >}}`.

4. Djuret markerades framgångsrikt som lakterat.

{{< tabpane >}}
{{< tab header="Mark as lactated:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Actions Mark as lactated](../images/lactated-scan.png "Mark as lactated")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Actions Mark as lactated](../images/lactated.png "Mark as lactated")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Hint" %}}
Om denna åtgärd inte är tillgänglig har åtgärden förmodligen blivit avaktiverad! Aktivera åtgärden i menyn [åtgärdsinställningar](../setting). Alternativt kommer återställning av alla åtgärder att återställa denna åtgärd.
{{% /alert %}}
