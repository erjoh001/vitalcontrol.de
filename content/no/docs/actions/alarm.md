---
title: Alarm
linkTitle: Alarm
slug: alarm
weight: 60
description: >
 Legg til og fjern dyr fra alarmlisten.
date: 2023-07-26
categories: [Handlinger]
tags: [Handlinger, Alarm]
translationKey: actions/alarm
---

## Varsel {#alert}

Med handlingen `{{<T "Alarm" >}}` kan du legge dyr til alarmlisten eller fjerne dem fra den. Alarmlisten hjelper deg med å finne påfallende dyr raskere og enklere, noe som gjør dine daglige rutinekontroller enklere. For å bruke handlingen `{{<T "Alarm" >}}`, gjør følgende:

1. På hovedskjermen på din VitalControl-enhet, velg menyvalget `{{<T "Actions" >}}` &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Handlinger" /> og trykk på `{{<T "Ok" >}}`-knappen.

2. Enten skann et dyr ved hjelp av transponderen eller velg et dyr fra listen. Bekreft med `{{<T "Ok" >}}` og velg et dyr med piltastene △ ▽. Bekreft med `{{<T "Ok" >}}`.

3. En undermeny med dyrehandlinger åpnes. Bruk piltastene ◁ ▷ △ ▽ for å velge &nbsp;<img src="/icons/actions/alarm.svg" width="35" align="bottom" alt="Legg til alarm" /> handlingen `{{<T "Alarm" >}}` og bekreft med `{{<T "Ok" >}}`.

4. En melding vises om at dyret ble lagt til alarmlisten, og visningen for dyret i overskriften endres. Symbolet &nbsp;<img src="/icons/header/animal-in-alarm.svg" width="32" align="bottom" alt="Dyr i alarm" /> indikerer at dette dyret er på alarmlisten.

5. Du kan fjerne dyret fra alarmlisten igjen ved å bruke &nbsp;<img src="/icons/actions/alarm-minus.svg" width="35" align="bottom" alt="Fjern alarm" /> handlingen `{{<T "Alarm" >}}` igjen. Om du legger til eller fjerner dyret fra alarmlisten ved å bruke handlingen `{{<T "Alarm" >}}` indikeres med et lite + eller - tegn.

{{< tabpane >}}
{{< tab header="Alert:" text=true disabled=true />}}
{{% tab header="Transponderskanning" text=true %}}
![VitalControl: Meny Handlinger Alarm](../images/alarm-scan.png "Alarm")
{{% /tab %}}
{{% tab header="Manuelt valg fra liste" text=true %}}
![VitalControl: Meny Handlinger Alarm](../images/alarm.png "Alarm")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Hint" %}}
Hvis denne handlingen ikke er tilgjengelig, har handlingen sannsynligvis blitt deaktivert! Aktiver handlingen i [handlingsinnstillingene](../setting/) menyen. Alternativt vil tilbakestilling av alle handlinger bringe den handlingen tilbake.
{{% /alert %}}
