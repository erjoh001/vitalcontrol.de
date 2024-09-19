---
title: Redigera djurdata
linkTitle: Redigera
slug: edit
weight: 90
description: >
 Redigera data för det valda djuret.
date: 2023-07-26
Kategorier: [Åtgärder]
Taggar: [Åtgärder, djurdata, redigera]
translationKey: actions/edit
---

## Redigera djurdata {#edit-animal-data}

Åtgärden <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `{{<T "Edit" >}}` låter dig ändra djurdata för det valda djuret direkt. Denna funktion gör det enklare att korrigera djurdata om det till exempel visar sig under djurinspektionen att könet har sparats felaktigt. Du kan ändra följande data:

- Typ av djur
- Kön
- Födelsevikt
- Ras
- Vistelseort
- Nationellt djur-ID
- ID
- Flerfödslar
- Födelsedatum
- Kalvningslätthet

För att ändra djurdata, gör följande:

1. På huvudskärmen på din VitalControl-enhet, välj menyalternativet &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` och tryck på knappen `{{<T "Ok" >}}`.

2. Antingen skanna ett djur med transpondern eller välj ett djur från listan. Bekräfta med `{{<T "Ok" >}}` och välj ett djur med piltangenterna △ ▽. Bekräfta med `{{<T "Ok" >}}`.

3. En undermeny med djuråtgärder öppnas. Använd piltangenterna ◁ ▷ △ ▽ för att välja åtgärden <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `{{<T "Edit" >}}` och bekräfta med `{{<T "Ok" >}}`.

4. En lista med djurdata öppnas. Använd piltangenterna △ ▽ för att välja önskat ändringsalternativ.

5. För data `{{<T "TypeAnimal" >}}`, `{{<T "Sex" >}}`, `{{<T "BirthWeight" >}}`, `{{<T "Breed" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "Multiples" >}}` och `{{<T "CalvingEase" >}}` använd piltangenterna ◁ ▷ för att göra önskad ändring.

6. För data `{{<T "ID" >}}` och `{{<T "DateBirth" >}}` välj dem med piltangenterna △ ▽ och bekräfta med `{{<T "Ok" >}}`. Använd piltangenterna △ ▽ för att välja motsvarande nummer och piltangenterna ◁ ▷ för att navigera inom nummerfälten.


7. Spara ändringen med `F3`-tangenten.

{{< tabpane >}}
{{< tab header="Edit animal data:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Action Edit animal data](../images/edit-scan.png "Edit animal data")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Action Edit animal data](../images/edit.png "Edit animal data")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Hint" %}}
Om denna åtgärd inte är tillgänglig har åtgärden förmodligen inaktiverats! Aktivera åtgärden i menyn [action settings](../setting/). Alternativt kommer återställning av alla åtgärder att återställa denna åtgärd.
{{% /alert %}}
