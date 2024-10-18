---
title: Odjaviti životinju
linkTitle: Odjava
slug: unregister
weight: 100
description: >
 Odjaviti životinju
date: 2023-07-26
categories: [Akcije]
tags: [Akcije, Odjava]
translationKey: actions/unregister
---
{{% alert title="Upozorenje" color="warning" %}}
Čim izbrišete zapis o podacima životinje, on više nije dostupan za svrhe evaluacije! Ako odjavite životinju, ali želite, na primjer, ponovno procijeniti razvoj životinje, morate zadržati zapis o podacima životinje!
{{% /alert %}}

## Odjava {#unregister}

Akcija `{{<T "Unregister" >}}` omogućuje vam odjavu životinje čim se premjesti. Da biste odjavili životinju, postupite na sljedeći način:

1. Na glavnom ekranu vašeg VitalControl uređaja odaberite stavku izbornika &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` i pritisnite gumb `{{<T "Ok" >}}`.

2. Ili skenirajte životinju pomoću transpondera ili odaberite životinju s popisa. Potvrdite s `{{<T "Ok" >}}` i odaberite životinju pomoću tipki sa strelicama △ ▽. Potvrdite s `{{<T "Ok" >}}`.

3. Otvara se podizbornik s akcijama za životinje. Koristite tipke sa strelicama ◁ ▷ △ ▽ za odabir akcije &nbsp;<img src="/icons/actions/unregister.svg" width="33" align="bottom" alt="Unregister" /> `{{<T "Unregister" >}}` i potvrdite s `{{<T "Ok" >}}`.

4. Otvara se drugi podizbornik u kojem možete spremiti različite postavke. Koristite tipke sa strelicama △ ▽ za odabir željene opcije postavki. Koristite tipke sa strelicama ◁ ▷ za odabir željene postavke.

5. Koristite tipku `F3` `{{<T "Unregister" >}}` za odjavu životinje s navedenim postavkama.

{{< tabpane >}}
{{< tab header="Odjava:" text=true disabled=true />}}
{{% tab header="Skeniranje transpondera" text=true %}}
![VitalControl: Izbornik Akcija Odjava](../images/unregister-scan.png "Odjaviti životinju")
{{% /tab %}}
{{% tab header="Ručno odabiranje s popisa" text=true %}}
![VitalControl: Izbornik Akcija Odjava](../images/unregister.png "Odjaviti životinju")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Savjet" %}}
Ako ova radnja nije dostupna, vjerojatno je deaktivirana! Aktivirajte radnju u izborniku [postavke radnji](../setting/). Alternativno, resetiranje svih radnji će ponovno omogućiti tu radnju.
{{% /alert %}}
