---
title: "Tegevuste ahel: seadistamine ja kasutamine"
linkTitle: "Tegevuste ahel"
weight: 15
date: 2023-07-28T13:25:28+02:00
draft: false
slug: chain-of-actions
description: >
 Mitme loomategevuse järjestikune sooritamine
categories: [Tegevuste ahel]
tags: [Tegevuste ahel, Tegevused]
translationKey: action-chain
---
## Tegevuste ahel

Tegevuste ahel võimaldab automaatselt sooritada mitmeid tegevusi looma jaoks üksteise järel. Näiteks võite valida tegevused `Temperatuuri mõõtmine` ja `Hinnang`. Kui te seejärel tegevuste ahelat rakendate, saate esmalt mõõta oma looma temperatuuri ja kohe seejärel salvestada hinnangu.

### Tegevuste ahela kasutamine

1. Oma VitalControl seadme põhiekraanil valige menüüpunkt &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Tegevuste ahel" />&nbsp; `Tegevuste ahel` ja vajutage `OK` nuppu.

2. Skaneerige loom transponderi abil või kinnitage valik `OK`-ga ja kasutage nooleklahve △ ▽ ◁ ▷ soovitud looma ID sisestamiseks.

3. Tegevuste ahel viiakse nüüd täide. Niipea kui kõik tegevuste ahelas olevad tegevused on sooritatud, saab kohe valida järgmise looma.

{{< tabpane >}}
{{< tab header="Tegevuste ahela kasutamine:" text=true disabled=true />}}
{{% tab header="Transponderi skaneerimine" text=true %}}
![VitalControl: Menüü tegevuste ahel](images/chainofactions-scan.png "Tegevuste ahel")
{{% /tab %}}
{{% tab header="Käsitsi valik nimekirjast" text=true %}}
![VitalControl: Menüü tegevuste ahel](images/chainofactions.png "Tegevuste ahel")
{{% /tab %}}
{{< /tabpane >}}

### Tegevuste ahela seadistamine

1. Oma VitalControl seadme põhiekraanil valige menüüpunkt &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Tegevuste ahel" />&nbsp; `Tegevuste ahel` ja vajutage `OK` nuppu.

2. Kasutage nuppu `F2` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Tegevuste ahel" />&nbsp; (`seaded`).

3. Ilmub ülekatte ekraan. Kasutage nooleklahve △ ▽ loetletud tegevuste 1 - 4 vahel valimiseks (saate järjest sooritada kuni neli tegevust). Kasutage nooleklahve ◁ ▷ soovitud tegevuse valimiseks vastava tegevuse jaoks. Salvestage seaded klahviga `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Salvesta ja naase" />&nbsp;.

4. Kui soovite kogu tegevuste ahela lähtestada, valige alammenüüst suvand `Reset chain of actions`, kasutades nooleklahve △ ▽ ja kinnitage valikuga `OK`.

    ![VitalControl: Menüü tegevuste ahel](images/setchainofactions.png "Seadista tegevuste ahel")

{{% alert title="Vihje" %}}
Üksikute tegevuste puhul on teil samad seadistamisvõimalused nagu peatükis [Tegevused](../actions) kirjeldatud iga üksiku tegevuse jaoks.
{{% /alert %}}

{{% alert title="Vihje" %}}
Tegevuste ahela avakuva sümbolid näitavad, millised tegevused olete seadistanud ja millises järjekorras.
{{% /alert %}}
