---
title: Alarm
linkTitle: Alarm
slug: alarm
weight: 60
description: >
 Tilføj og fjern dyr fra alarmlisten.
date: 2023-07-26
kategorier: [Actions]
tags: [Actions, Alarm]
translationKey: actions/alarm
---

## Alarm {#alert}

Med handlingen `{{<T "Alarm" >}}` kan du sætte dyr på alarmlisten eller fjerne dem fra den. Alarmlisten hjælper dig med at finde iøjnefaldende dyr hurtigere og nemmere, hvilket gør dine daglige rutinetjek lettere. For at anvende `{{<T "Alarm" >}}` handlingen, skal du gøre følgende:

1. På hovedskærmen på din VitalControl-enhed skal du vælge menupunktet `{{<T "Actions" >}}` &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> og trykke på `{{<T "Ok" >}}` knappen.

2. Enten scan et dyr ved hjælp af transponderen eller vælg et dyr fra listen. Bekræft med `{{<T "Ok" >}}` og vælg et dyr med piletasterne △ ▽. Bekræft med `{{<T "Ok" >}}`.

3. En undermenu med dyrehandlinger åbnes. Brug piletasterne ◁ ▷ △ ▽ til at vælge &nbsp;<img src="/icons/actions/alarm.svg" width="35" align="bottom" alt="Add alarm" /> `{{<T "Alarm" >}}` handlingen og bekræft med `{{<T "Ok" >}}`.

4. En meddelelse vises om, at dyret blev succesfuldt tilføjet til alarmlisten, og visningen for dyret i headeren ændres. Symbolet &nbsp;<img src="/icons/header/animal-in-alarm.svg" width="32" align="bottom" alt="Animal in alarm" /> indikerer, at dette dyr er på alarmlisten.

5. Du kan fjerne dyret fra alarmlisten igen ved at anvende &nbsp;<img src="/icons/actions/alarm-minus.svg" width="35" align="bottom" alt="Remove alarm" /> `{{<T "Alarm" >}}` handlingen igen. Om du tilføjer eller fjerner dyret fra alarmlisten ved at bruge `{{<T "Alarm" >}}` handlingen, indikeres med et lille + eller - tegn.

{{< tabpane >}}
{{< tab header="Alert:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Actions Alarm](../images/alarm-scan.png "Alarm")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Actions Alarm](../images/alarm.png "Alarm")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Tip" %}}
Hvis denne handling ikke er tilgængelig, er handlingen sandsynligvis blevet deaktiveret! Aktivér handlingen i [handlingsindstillinger](../setting/) menuen. Alternativt vil nulstilling af alle handlinger bringe denne handling tilbage.
{{% /alert %}}
