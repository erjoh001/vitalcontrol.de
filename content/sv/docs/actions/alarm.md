---
title: Alarm
linkTitle: Alarm
slug: alarm
weight: 60
description: >
 Lägg till och ta bort djur från larmlistan.
date: 2023-07-26
Kategorier: [Actions]
Taggar: [Actions, Alarm]
translationKey: actions/alarm
---

## Larm {#alert}

Med åtgärden `{{<T "Alarm" >}}` kan du lägga till djur på larmlistan eller ta bort dem från den. Larmlistan hjälper dig att snabbare och enklare hitta iögonfallande djur, vilket gör dina dagliga rutinkontroller enklare. För att använda åtgärden `{{<T "Alarm" >}}`, gör följande:

1. På huvudskärmen på din VitalControl-enhet, välj menyalternativet `{{<T "Actions" >}}` &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> och tryck på knappen `{{<T "Ok" >}}`.

2. Antingen skanna ett djur med transpondern eller välj ett djur från listan. Bekräfta med `{{<T "Ok" >}}` och välj ett djur med piltangenterna △ ▽. Bekräfta med `{{<T "Ok" >}}`.

3. En undermeny med djuråtgärder öppnas. Använd piltangenterna ◁ ▷ △ ▽ för att välja &nbsp;<img src="/icons/actions/alarm.svg" width="35" align="bottom" alt="Add alarm" /> åtgärden `{{<T "Alarm" >}}` och bekräfta med `{{<T "Ok" >}}`.

4. En notifikation visas att djuret framgångsrikt har lagts till på larmlistan och visningen för djuret i rubriken ändras. Symbolen &nbsp;<img src="/icons/header/animal-in-alarm.svg" width="32" align="bottom" alt="Animal in alarm" /> indikerar att detta djur är på larmlistan.

5. Du kan ta bort djuret från larmlistan igen genom att använda &nbsp;<img src="/icons/actions/alarm-minus.svg" width="35" align="bottom" alt="Remove alarm" /> åtgärden `{{<T "Alarm" >}}` igen. Om du lägger till eller tar bort djuret från larmlistan med åtgärden `{{<T "Alarm" >}}` indikeras med ett litet + eller - tecken.

{{< tabpane >}}
{{< tab header="Alert:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Actions Alarm](../images/alarm-scan.png "Alarm")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Actions Alarm](../images/alarm.png "Alarm")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Tips" %}}
Om denna åtgärd inte är tillgänglig har åtgärden förmodligen blivit avaktiverad! Aktivera åtgärden i menyn [åtgärdsinställningar](../setting/). Alternativt kan du återställa alla åtgärder för att få tillbaka den åtgärden.
{{% /alert %}}
