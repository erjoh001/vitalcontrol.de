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

Lanac akcija vam omogućava da automatski izvršite nekoliko akcija za životinju jednu za drugom. Na primjer, možete odabrati akcije `{{<T "Temperature" >}}` i `{{<T "Rating" >}}`. Ako zatim izvršite lanac akcija, možete prvo izmjeriti temperaturu vaše životinje i odmah nakon toga zabilježiti ocjenu.

### Korištenje lanca akcija {#use-chain-of-actions}

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku izbornika &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Chain of actions" />&nbsp; `{{<T "ActionChain" >}}` i pritisnite dugme `{{<T "Ok" >}}`.

2. Ili skenirajte životinju pomoću transpondera ili potvrdite sa `{{<T "Ok" >}}` i koristite strelice △ ▽ ◁ ▷ za unos željenog ID-a životinje.

3. Lanac akcija se sada izvršava. Čim se sve akcije u lancu akcija izvrše, može se direktno odabrati sljedeća životinja.

{{< tabpane >}}
{{< tab header="Korištenje lanca akcija:" text=true disabled=true />}}
{{% tab header="Skeniranje transponderom" text=true %}}
![VitalControl: Menu chain of actions](images/chainofactions-scan.png "Chain of actions")
{{% /tab %}}
{{% tab header="Ručno odabiranje sa liste" text=true %}}
![VitalControl: Menu chain of actions](images/chainofactions.png "Chain of actions")
{{% /tab %}}
{{< /tabpane >}}

### Postavljanje lanca akcija {#set-chain-of-actions}

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku izbornika &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Chain of actions" />&nbsp; `{{<T "ActionChain" >}}` i pritisnite dugme `{{<T "Ok" >}}`.

2. Koristite dugme `F2` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Aktionskette" />&nbsp; (`{{<T "Settings" >}}`).

3. Pojavi se ekran za prekrivanje. Koristite strelice △ ▽ za odabir između navedenih akcija 1 - 4 (možete izvršiti do četiri akcije zaredom). Koristite strelice ◁ ▷ za odabir željene akcije za odgovarajuću akciju. Sačuvajte postavke sa `F1` tipkom &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Sačuvaj i vrati se" />&nbsp;.

4. Ako želite resetovati cijeli lanac akcija, odaberite opciju `{{<T "ResetActionChain" >}}` u podmeniju koristeći strelice △ ▽ i potvrdite sa `{{<T "Ok" >}}`.

    ![VitalControl: Meni lanac akcija](images/setchainofactions.png "Postavi lanac akcija")

{{% alert title="Hint" %}}
Unutar pojedinačnih akcija imate iste opcije postavki kao što je opisano u poglavlju [Akcije](../actions) za svaku pojedinačnu akciju.
{{% /alert %}}

{{% alert title="Hint" %}}
Simboli na početnom ekranu lanca akcija pokazuju koje ste akcije postavili i kojim redoslijedom.
{{% /alert %}}
