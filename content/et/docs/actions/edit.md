---
title: Muuda looma andmeid
linkTitle: Muuda
slug: edit
weight: 90
description: >
 Vali loom ja muuda tema andmeid.
date: 2023-07-26
categories: [Tegevused]
tags: [Tegevused, looma andmed, muuda]
translationKey: actions/edit
---

## Muuda looma andmeid {#edit-animal-data}

Tegevus <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Muuda" /> `{{<T "Edit" >}}` võimaldab muuta valitud looma andmeid otse. See funktsioon lihtsustab looma andmete parandamist, näiteks kui loomakontrolli käigus selgub, et sugu on valesti salvestatud. Saad muuta järgmisi andmeid:

- Looma liik
- Sugu
- Sünnikaal
- Tõug
- Asukoht
- Riiklik looma ID
- ID
- Mitmikud
- Sünnikuupäev
- Poegimise lihtsus

Looma andmete muutmiseks toimi järgmiselt:

1. Oma VitalControl seadme põhiekraanil vali menüüpunkt  &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Tegevused" /> `{{<T "Actions" >}}` ja vajuta `{{<T "Ok" >}}` nuppu.

2. Skaneeri loom transponderiga või vali loom nimekirjast. Kinnita `{{<T "Ok" >}}`-ga ja vali loom nooleklahvidega △ ▽. Kinnita `{{<T "Ok" >}}`-ga.

3. Avaneb alammenüü loomategevustega. Kasuta nooleklahve ◁ ▷ △ ▽, et valida tegevus <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Muuda" /> `{{<T "Edit" >}}` ja kinnita `{{<T "Ok" >}}`-ga.

4. Avaneb looma andmete loend. Kasuta nooleklahve △ ▽, et valida soovitud muudatus.

5. Andmete `{{<T "TypeAnimal" >}}`, `{{<T "Sex" >}}`, `{{<T "BirthWeight" >}}`, `{{<T "Breed" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "Multiples" >}}` ja `{{<T "CalvingEase" >}}` puhul kasuta nooleklahve ◁ ▷ soovitud muudatuse tegemiseks.

6. Andmete `{{<T "ID" >}}` ja `{{<T "DateBirth" >}}` puhul vali need nooleklahvidega △ ▽ ja kinnita `{{<T "Ok" >}}`-ga. Kasuta nooleklahve △ ▽ vastava numbri valimiseks ja nooleklahve ◁ ▷ numbri väljades navigeerimiseks.

7. Salvesta muudatus klahviga `F3`.

{{< tabpane >}}
{{< tab header="Muuda looma andmeid:" text=true disabled=true />}}
{{% tab header="Transponderi skaneerimine" text=true %}}
![VitalControl: Menüü Tegevus Muuda looma andmeid](../images/edit-scan.png "Muuda looma andmeid")
{{% /tab %}}
{{% tab header="Käsitsi valik nimekirjast" text=true %}}
![VitalControl: Menüü Tegevus Muuda looma andmeid](../images/edit.png "Muuda looma andmeid")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Vihje" %}}
Kui see toiming pole saadaval, on toiming tõenäoliselt deaktiveeritud! Aktiveeri toiming [toimingute seadistuste](../setting/) menüüs. Alternatiivina kõigi toimingute lähtestamine toob selle toimingu tagasi.
{{% /alert %}}
