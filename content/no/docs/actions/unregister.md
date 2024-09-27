---
title: Avregistrere dyr
linkTitle: Avregistrere
slug: unregister
weight: 100
description: >
 Avregistrere et dyr
date: 2023-07-26
categories: [Handlinger]
tags: [Handlinger, Avregistrere]
translationKey: actions/unregister
---
{{% alert title="Advarsel" color="warning" %}}
Så snart du sletter dyrets dataregistrering, er den ikke lenger tilgjengelig for evalueringsformål! Hvis du avregistrerer et dyr, men for eksempel vil evaluere dyrets utvikling igjen senere, må du beholde dyrets dataregistrering!
{{% /alert %}}

## Avregistrere {#unregister}

Handlingen `{{<T "Unregister" >}}` lar deg avregistrere et dyr så snart det er flyttet ut. For å avregistrere et dyr, gjør følgende:

1. På hovedskjermen til din VitalControl-enhet, velg menyvalget &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` og trykk på `{{<T "Ok" >}}`-knappen.

2. Enten skann et dyr ved hjelp av transponderen eller velg et dyr fra listen. Bekreft med `{{<T "Ok" >}}` og velg et dyr med piltastene △ ▽. Bekreft med `{{<T "Ok" >}}`.

3. En undermeny med dyrehandlinger åpnes. Bruk piltastene ◁ ▷ △ ▽ for å velge handlingen &nbsp;<img src="/icons/actions/unregister.svg" width="33" align="bottom" alt="Unregister" /> `{{<T "Unregister" >}}` og bekreft med `{{<T "Ok" >}}`.

4. En annen undermeny åpnes der du kan lagre ulike innstillinger. Bruk piltastene △ ▽ for å velge ønsket innstillingsalternativ. Bruk piltastene ◁ ▷ for å velge ønsket innstilling.

5. Bruk tasten `F3` `{{<T "Unregister" >}}` for å avregistrere dyret med de angitte innstillingene.

{{< tabpane >}}
{{< tab header="Avregistrere:" text=true disabled=true />}}
{{% tab header="Transponderskanning" text=true %}}
![VitalControl: Meny Handling Avregistrere](../images/unregister-scan.png "Avregistrere et dyr")
{{% /tab %}}
{{% tab header="Manuelt valg fra liste" text=true %}}
![VitalControl: Meny Handling Avregistrere](../images/unregister.png "Avregistrere et dyr")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Hint" %}}
Hvis denne handlingen ikke er tilgjengelig, har handlingen sannsynligvis blitt deaktivert! Aktiver handlingen i [handlingsinnstillingene](../setting/) menyen. Alternativt vil tilbakestilling av alle handlinger bringe den handlingen tilbake.
{{% /alert %}}
