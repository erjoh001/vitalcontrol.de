---
title: "Lanac akcija: postavljanje i korištenje"
linkTitle: "Lanac akcija"
weight: 15
date: 2023-07-28T13:25:28+02:00
draft: false
slug: chain-of-actions
description: >
 Izvršite više akcija za životinje uzastopno
categories: [Lanac akcija]
tags: [Lanac akcija, Akcije]
translationKey: action-chain
---
## Lanac akcija {#chain-of-actions}

Lanac akcija omogućuje vam automatsko izvršavanje nekoliko akcija za životinju jednu za drugom. Na primjer, možete odabrati akcije `{{<T "Temperature" >}}` i `{{<T "Rating" >}}`. Ako zatim izvršite lanac akcija, možete prvo izmjeriti temperaturu svoje životinje i odmah nakon toga zabilježiti ocjenu.

### Korištenje lanca akcija {#use-chain-of-actions}

1. Na glavnom ekranu vašeg VitalControl uređaja odaberite stavku izbornika &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Chain of actions" />&nbsp; `{{<T "ActionChain" >}}` i pritisnite gumb `{{<T "Ok" >}}`.

2. Ili skenirajte životinju pomoću transpondera ili potvrdite s `{{<T "Ok" >}}` i koristite tipke sa strelicama △ ▽ ◁ ▷ za unos željenog ID-a životinje.

3. Lanac akcija se sada izvršava. Čim se sve akcije u lancu akcija izvrše, može se izravno odabrati sljedeća životinja.

{{< tabpane >}}
{{< tab header="Korištenje lanca akcija:" text=true disabled=true />}}
{{% tab header="Skeniranje transponderom" text=true %}}
![VitalControl: Izbornik lanac akcija](images/chainofactions-scan.png "Lanac akcija")
{{% /tab %}}
{{% tab header="Ručno odabiranje s popisa" text=true %}}
![VitalControl: Izbornik lanac akcija](images/chainofactions.png "Lanac akcija")
{{% /tab %}}
{{< /tabpane >}}

### Postavljanje lanca akcija {#set-chain-of-actions}

1. Na glavnom ekranu vašeg VitalControl uređaja odaberite stavku izbornika &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Chain of actions" />&nbsp; `{{<T "ActionChain" >}}` i pritisnite gumb `{{<T "Ok" >}}`.

2. Koristite gumb `F2` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Aktionskette" />&nbsp; (`{{<T "Settings" >}}`).


3. Pojavit će se zaslonski preklopnik. Koristite tipke sa strelicama △ ▽ za odabir između navedenih radnji 1 - 4 (možete izvesti do četiri radnje zaredom). Koristite tipke sa strelicama ◁ ▷ za odabir željene radnje za odgovarajuću radnju. Spremite postavke s tipkom `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Spremi i vrati se" />&nbsp;.

4. Ako želite resetirati cijeli lanac radnji, odaberite opciju `{{<T "ResetActionChain" >}}` u podizborniku koristeći tipke sa strelicama △ ▽ i potvrdite s `{{<T "Ok" >}}`.

    ![VitalControl: Izbornik lanca radnji](images/setchainofactions.png "Postavi lanac radnji")

{{% alert title="Hint" %}}
Unutar pojedinačnih radnji imate iste opcije postavki kao što je opisano u poglavlju [Radnje](../actions) za svaku pojedinačnu radnju.
{{% /alert %}}

{{% alert title="Hint" %}}
Simboli na početnom zaslonu lanca radnji pokazuju koje ste radnje postavili i kojim redoslijedom.
{{% /alert %}}
