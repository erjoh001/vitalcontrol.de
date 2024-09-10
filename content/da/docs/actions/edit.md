---
title: Rediger dyredata
linkTitle: Rediger
slug: edit
weight: 90
description: >
 Rediger data for det valgte dyr.
date: 2023-07-26
kategorier: [Handlinger]
tags: [Handlinger, dyredata, rediger]
translationKey: actions/edit
---

## Rediger dyredata {#edit-animal-data}

Handlingen <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `{{<T "Edit" >}}` giver dig mulighed for at ændre dyredata for det valgte dyr direkte. Denne funktion gør det lettere at rette dyredata, hvis det for eksempel viser sig under dyreinspektionen, at kønnet er blevet gemt forkert. Du kan ændre følgende data:

- Dyretype
- Køn
- Fødselsvægt
- Race
- Opholdssted
- Nationalt dyre-ID
- ID
- Flerfødsler
- Fødselsdato
- Kælvningslethed

For at ændre dyredata, skal du gøre følgende:

1. På hovedskærmen på din VitalControl-enhed, vælg menupunktet &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` og tryk på `{{<T "Ok" >}}` knappen.

2. Enten scan et dyr ved hjælp af transponderen eller vælg et dyr fra listen. Bekræft med `{{<T "Ok" >}}` og vælg et dyr med piletasterne △ ▽. Bekræft med `{{<T "Ok" >}}`.

3. En undermenu med dyrehandlinger åbnes. Brug piletasterne ◁ ▷ △ ▽ til at vælge handlingen <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `{{<T "Edit" >}}` og bekræft med `{{<T "Ok" >}}`.

4. En liste med dyredata åbnes. Brug piletasterne △ ▽ til at vælge den ønskede ændringsmulighed.

5. For dataene `{{<T "TypeAnimal" >}}`, `{{<T "Sex" >}}`, `{{<T "BirthWeight" >}}`, `{{<T "Breed" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "Multiples" >}}` og `{{<T "CalvingEase" >}}` brug piletasterne ◁ ▷ til at foretage den ønskede ændring.

6. For dataene `{{<T "ID" >}}` og `{{<T "DateBirth" >}}` vælg dem med piletasterne △ ▽ og bekræft med `{{<T "Ok" >}}`. Brug piletasterne △ ▽ til at vælge det tilsvarende nummer og piletasterne ◁ ▷ til at navigere inden for nummerfelterne.


7. Gem ændringen med `F3`-tasten.

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
Hvis denne handling ikke er tilgængelig, er handlingen sandsynligvis blevet deaktiveret! Aktivér handlingen i [handlingsindstillinger](../setting/) menuen. Alternativt vil nulstilling af alle handlinger bringe denne handling tilbage.
{{% /alert %}}
