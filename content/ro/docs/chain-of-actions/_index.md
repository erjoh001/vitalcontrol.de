---
title: "Lanț de acțiuni: configurare și utilizare"
linkTitle: "Lanț de acțiuni"
weight: 15
date: 2023-07-28T13:25:28+02:00
draft: false
slug: chain-of-actions
description: >
 Efectuați mai multe acțiuni pentru animale consecutiv
categories: [Lanț de acțiuni]
tags: [Lanț de acțiuni, Acțiuni]
translationKey: action-chain
---
## Lanț de acțiuni {#chain-of-actions}

Lanțul de acțiuni vă permite să efectuați automat mai multe acțiuni pentru un animal una după alta. De exemplu, puteți selecta acțiunile `{{<T "Temperature" >}}` și `{{<T "Rating" >}}`. Dacă apoi efectuați lanțul de acțiuni, puteți lua mai întâi temperatura animalului și înregistra evaluarea imediat după aceea.

### Utilizați lanțul de acțiuni {#use-chain-of-actions}

1. Pe ecranul principal al dispozitivului dvs. VitalControl, selectați elementul de meniu &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Chain of actions" />&nbsp; `{{<T "ActionChain" >}}` și apăsați butonul `{{<T "Ok" >}}`.

2. Fie scanați un animal folosind transponderul, fie confirmați cu `{{<T "Ok" >}}` și utilizați tastele săgeți △ ▽ ◁ ▷ pentru a introduce ID-ul animalului dorit.

3. Lanțul de acțiuni este acum executat. De îndată ce toate acțiunile din lanțul de acțiuni au fost efectuate, următorul animal poate fi selectat direct.

{{< tabpane >}}
{{< tab header="Utilizați lanțul de acțiuni:" text=true disabled=true />}}
{{% tab header="Scanare transponder" text=true %}}
![VitalControl: Meniu lanț de acțiuni](images/chainofactions-scan.png "Lanț de acțiuni")
{{% /tab %}}
{{% tab header="Selecție manuală din listă" text=true %}}
![VitalControl: Meniu lanț de acțiuni](images/chainofactions.png "Lanț de acțiuni")
{{% /tab %}}
{{< /tabpane >}}

### Configurați lanțul de acțiuni {#set-chain-of-actions}

1. Pe ecranul principal al dispozitivului dvs. VitalControl, selectați elementul de meniu &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Chain of actions" />&nbsp; `{{<T "ActionChain" >}}` și apăsați butonul `{{<T "Ok" >}}`.

2. Utilizați butonul `F2` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Aktionskette" />&nbsp; (`{{<T "Settings" >}}`).


3. Apare un ecran suprapus. Folosește tastele săgeată △ ▽ pentru a alege între acțiunile listate 1 - 4 (poți efectua până la patru acțiuni consecutiv). Folosește tastele săgeată ◁ ▷ pentru a selecta acțiunea dorită pentru acțiunea respectivă. Salvează setările cu tasta `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.

4. Dacă dorești să resetezi întreaga secvență de acțiuni, selectează opțiunea `{{<T "ResetActionChain" >}}` în submeniu folosind tastele săgeată △ ▽ și confirmă cu `{{<T "Ok" >}}`.

    ![VitalControl: Lanț de acțiuni din meniu](images/setchainofactions.png "Set chain of actions")

{{% alert title="Hint" %}}
În cadrul acțiunilor individuale ai aceleași opțiuni de setare descrise în capitolul [Acțiuni](../actions) pentru fiecare acțiune individuală.
{{% /alert %}}

{{% alert title="Hint" %}}
Simbolurile din ecranul de start al lanțului de acțiuni arată ce acțiuni ai setat și în ce ordine.
{{% /alert %}}
