---
title: Rediger dyredata
linkTitle: Rediger
slug: edit
weight: 90
description: >
 Rediger dataene til det valgte dyret.
date: 2023-07-26
categories: [Handlinger]
tags: [Handlinger, dyredata, rediger]
translationKey: actions/edit
---

## Rediger dyredata {#edit-animal-data}

Handlingen <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `{{<T "Edit" >}}` lar deg endre dyredataene til det valgte dyret direkte. Denne funksjonen gjør det enklere å korrigere dyredataene hvis det for eksempel blir klart under dyreinspeksjonen at kjønnet har blitt lagret feil. Du kan endre følgende data:

- Type dyr
- Kjønn
- Fødselsvekt
- Rase
- Oppholdssted
- Nasjonal dyre-ID
- ID
- Flerlinger
- Fødselsdato
- Kalvingsvansker

For å endre dyredataene, gjør følgende:

1. På hovedskjermen til din VitalControl-enhet, velg menyelementet &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` og trykk på `{{<T "Ok" >}}`-knappen.

2. Enten skann et dyr ved hjelp av transponderen eller velg et dyr fra listen. Bekreft med `{{<T "Ok" >}}` og velg et dyr med piltastene △ ▽. Bekreft med `{{<T "Ok" >}}`.

3. En undermeny med dyrehandlinger åpnes. Bruk piltastene ◁ ▷ △ ▽ for å velge handlingen <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `{{<T "Edit" >}}` og bekreft med `{{<T "Ok" >}}`.

4. En liste med dyredata åpnes. Bruk piltastene △ ▽ for å velge ønsket endringsalternativ.

5. For dataene `{{<T "TypeAnimal" >}}`, `{{<T "Sex" >}}`, `{{<T "BirthWeight" >}}`, `{{<T "Breed" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "Multiples" >}}` og `{{<T "CalvingEase" >}}` bruk piltastene ◁ ▷ for å gjøre ønsket endring.

6. For dataene `{{<T "ID" >}}` og `{{<T "DateBirth" >}}` velg dem med piltastene △ ▽ og bekreft med `{{<T "Ok" >}}`. Bruk piltastene △ ▽ for å velge det tilsvarende nummeret og piltastene ◁ ▷ for å navigere innenfor nummerfeltene.

7. Lagre endringen med `F3`-tasten.

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
Hvis denne handlingen ikke er tilgjengelig, har handlingen sannsynligvis blitt deaktivert! Aktiver handlingen i [handlingsinnstillingene](../setting/) menyen. Alternativt vil tilbakestilling av alle handlinger bringe handlingen tilbake.
{{% /alert %}}
