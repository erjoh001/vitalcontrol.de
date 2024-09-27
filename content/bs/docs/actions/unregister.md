---
title: Odjavi životinju
linkTitle: Odjavi
slug: unregister
weight: 100
description: >
 Odjavi životinju
date: 2023-07-26
categories: [Akcije]
tags: [Akcije, Odjavi]
translationKey: actions/unregister
---
{{% alert title="Upozorenje" color="warning" %}}
Čim izbrišete podatke o životinji, oni više nisu dostupni za evaluaciju! Ako odjavite životinju, ali želite, na primjer, ponovo evaluirati razvoj životinje kasnije, morate zadržati podatke o životinji!
{{% /alert %}}

## Odjavi {#unregister}

Akcija `{{<T "Unregister" >}}` vam omogućava da odjavite životinju čim se premjesti. Da biste odjavili životinju, postupite na sljedeći način:

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku iz menija &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Akcije" /> `{{<T "Actions" >}}` i pritisnite dugme `{{<T "Ok" >}}`.

2. Ili skenirajte životinju pomoću transpondera ili odaberite životinju sa liste. Potvrdite sa `{{<T "Ok" >}}` i odaberite životinju sa strelicama △ ▽. Potvrdite sa `{{<T "Ok" >}}`.

3. Otvara se podmeni sa akcijama za životinju. Koristite strelice ◁ ▷ △ ▽ da odaberete akciju &nbsp;<img src="/icons/actions/unregister.svg" width="33" align="bottom" alt="Odjavi" /> `{{<T "Unregister" >}}` i potvrdite sa `{{<T "Ok" >}}`.

4. Otvara se drugi podmeni u kojem možete sačuvati različite postavke. Koristite strelice △ ▽ da odaberete željenu opciju postavki. Koristite strelice ◁ ▷ da odaberete željenu postavku.

5. Koristite dugme `F3` `{{<T "Unregister" >}}` da odjavite životinju sa specificiranim postavkama.

{{< tabpane >}}
{{< tab header="Odjavi:" text=true disabled=true />}}
{{% tab header="Skeniranje transpondera" text=true %}}
![VitalControl: Meni Akcija Odjavi](../images/unregister-scan.png "Odjavi životinju")
{{% /tab %}}
{{% tab header="Ručno odabiranje sa liste" text=true %}}
![VitalControl: Meni Akcija Odjavi](../images/unregister.png "Odjavi životinju")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Savjet" %}}
Ako ova akcija nije dostupna, vjerovatno je deaktivirana! Aktivirajte akciju u meniju [postavke akcije](../setting/). Alternativno, resetovanje svih akcija će vratiti tu akciju.
{{% /alert %}}
