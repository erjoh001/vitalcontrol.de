---
title: Registrer vekt
linkTitle: Vekt
slug: record-weight
weight: 20
description: >
  Registrer vekten til dyrene dine.
date: 2023-07-26
categories: [Handlinger]
tags: [Handlinger, vekt]
translationKey: actions/weight
---

## Registrer vekt {#record-weight}
Bruk &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Veiing" /> `{{<T "Weighing" >}}` handlingen for å lagre vekten til dyret ditt individuelt. For å gjøre dette, vei dyrene dine eller estimer vekten deres og skriv inn denne verdien i VitalControl-enheten. Dette lar deg sjekke vektutviklingen til dyrene dine og evaluere dem individuelt.

{{% alert title="Hint" %}}
Hvis gjennomsnittsvekten avviker veldig sterkt i en retning (for høy/for lav), bør verdien for den daglige økningen justeres.
{{% /alert %}}

1. På hovedskjermen til VitalControl-enheten din, velg menyvalget &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Handlinger" /> `{{<T "Actions" >}}` og trykk på `{{<T "Ok" >}}` knappen.

2. Enten skann et dyr ved hjelp av transponderen eller velg et dyr fra listen. Bekreft med `{{<T "Ok" >}}` og velg et dyr med piltastene △ ▽. Bekreft med `{{<T "Ok" >}}`.

3. En undermeny med dyrehandlinger åpnes. Bruk piltastene ◁ ▷ for å velge handlingen &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Veiing" /> `{{<T "Weighing" >}}` og bekreft med `{{<T "Ok" >}}`.

4. En meny åpnes med en vektspesifikasjon. Øk eller reduser denne med piltastene △ ▽ og lagre resultatet med `F3` tasten <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Lagre" /> eller med `{{<T "Ok" >}}` tasten.

{{< tabpane >}}
{{< tab header="Registrer vekt:" text=true disabled=true />}}
{{% tab header="Transponderskanning" text=true %}}
  ![VitalControl: Meny Handling Veiing](../images/weighing-scan.png "Veiing")
{{% /tab %}}
{{% tab header="Manuelt valg fra liste" text=true %}}
  ![VitalControl: Meny Handling Veiing](../images/weighing.png "Veiing")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Hint" %}}
Hvis denne handlingen ikke er tilgjengelig, har handlingen sannsynligvis blitt deaktivert! Aktiver handlingen i [handlingsinnstillingene](../setting/) menyen. Alternativt vil tilbakestilling av alle handlinger bringe den handlingen tilbake.
{{% /alert %}}
