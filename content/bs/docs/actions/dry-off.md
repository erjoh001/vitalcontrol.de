---
title: Sušenje
linkTitle: Sušenje
slug: dry-off
weight: 115
description: >
 Osušite kravu ili je dodajte na listu svježih krava
date: 2023-07-26
categories: [Sušenje]
tags: [Sušenje]
translationKey: actions/dry-cows
---

## Sušenje {#dry-off}

{{% alert title="Savjet" %}}
Ovisno o početnom statusu krave, možete ili osušiti životinju i dodati je na listu za sušenje, ili možete označiti životinju kao svježu muzaru i tako je dodati na listu svježih muzara. Razlika između funkcija je jasno označena plus simbolom ili minus simbolom.
{{% /alert %}}

### Osušite kravu {#dry-off-a-cow}

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku izbornika &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` i pritisnite dugme `{{<T "Ok" >}}`.

2. Ili skenirajte transponder životinje bez nacionalnog ID-a životinje ili odaberite životinju s liste. Da biste to učinili, potvrdite s `{{<T "Ok" >}}` i odaberite ID životinje koristeći strelice △ ▽. Potvrdite s `{{<T "Ok" >}}`.

3. Otvara se podizbornik s radnjama za životinje. Koristite strelice ◁ ▷ △ ▽ da odaberete radnju <img src="/icons/actions/dryoff-plus.svg" width="35" align="bottom" alt="Dry off" /> `{{<T "DryOff" >}}` i potvrdite s `{{<T "Ok" >}}`.

4. Životinja je uspješno označena kao suha.

{{< tabpane >}}
{{< tab header="Osušite kravu:" text=true disabled=true />}}
{{% tab header="Skeniranje transpondera" text=true %}}
![VitalControl: Menu Actions Dry off](../images/dryoff-scan.png "Osušite kravu")
{{% /tab %}}
{{% tab header="Ručno odabiranje s liste" text=true %}}
![VitalControl: Menu Actions Dry off](../images/dryoff.png "Osušite kravu")
{{% /tab %}}
{{< /tabpane >}}

### Označite kao muzaru {#mark-as-lactated}

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku izbornika &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` i pritisnite dugme `{{<T "Ok" >}}`.

2. Ili skenirajte transponder životinje bez nacionalnog ID-a životinje ili odaberite životinju s liste. Da biste to učinili, potvrdite s `{{<T "Ok" >}}` i odaberite ID životinje koristeći strelice △ ▽. Potvrdite s `{{<T "Ok" >}}`.

3. Otvara se podmeni sa radnjama za životinje. Koristite strelice ◁ ▷ △ ▽ da odaberete radnju <img src="/icons/actions/dryoff-minus.svg" width="35" align="bottom" alt="Dry off" /> `{{<T "DryOff" >}}` i potvrdite sa `{{<T "Ok" >}}`.

4. Životinja je uspješno označena kao laktirana.

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
Ako ova radnja nije dostupna, vjerovatno je radnja deaktivirana! Aktivirajte radnju u meniju [postavke radnji](../setting). Alternativno, resetovanje svih radnji će vratiti tu radnju.
{{% /alert %}}
