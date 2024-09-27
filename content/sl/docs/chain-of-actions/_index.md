---
title: "Veriga dejanj: nastavitev in uporaba"
linkTitle: "Veriga dejanj"
weight: 15
date: 2023-07-28T13:25:28+02:00
draft: false
slug: chain-of-actions
description: >
 Izvajanje več živalskih dejanj zaporedoma
categories: [Chain of actions]
tags: [Chain of actions, Actions]
translationKey: action-chain
---
## Veriga dejanj {#chain-of-actions}

Veriga dejanj vam omogoča, da samodejno izvedete več dejanj za žival eno za drugim. Na primer, lahko izberete dejanja `{{<T "Temperature" >}}` in `{{<T "Rating" >}}`. Če nato izvedete verigo dejanj, lahko najprej izmerite temperaturo svoje živali in takoj zatem zabeležite oceno.

### Uporaba verige dejanj {#use-chain-of-actions}

1. Na glavnem zaslonu vaše naprave VitalControl izberite meni &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Chain of actions" />&nbsp; `{{<T "ActionChain" >}}` in pritisnite gumb `{{<T "Ok" >}}`.

2. Bodisi skenirajte žival z uporabo transponderja ali potrdite z `{{<T "Ok" >}}` in uporabite smerne tipke △ ▽ ◁ ▷ za vnos želene ID živali.

3. Veriga dejanj se zdaj izvaja. Takoj ko so vsa dejanja v verigi dejanj izvedena, lahko neposredno izberete naslednjo žival.

{{< tabpane >}}
{{< tab header="Uporaba verige dejanj:" text=true disabled=true />}}
{{% tab header="Skeniranje transponderja" text=true %}}
![VitalControl: Meni veriga dejanj](images/chainofactions-scan.png "Chain of actions")
{{% /tab %}}
{{% tab header="Ročna izbira iz seznama" text=true %}}
![VitalControl: Meni veriga dejanj](images/chainofactions.png "Chain of actions")
{{% /tab %}}
{{< /tabpane >}}

### Nastavitev verige dejanj {#set-chain-of-actions}

1. Na glavnem zaslonu vaše naprave VitalControl izberite meni &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Chain of actions" />&nbsp; `{{<T "ActionChain" >}}` in pritisnite gumb `{{<T "Ok" >}}`.

2. Uporabite gumb `F2` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Aktionskette" />&nbsp; (`{{<T "Settings" >}}`).

3. Pojavi se prekrivni zaslon. Uporabite puščične tipke △ ▽ za izbiro med navedenimi dejanji 1 - 4 (lahko izvedete do štiri dejanja zapored). Uporabite puščične tipke ◁ ▷ za izbiro želenega dejanja za posamezno dejanje. Shranite nastavitve s tipko `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Shrani in se vrni" />&nbsp;.

4. Če želite ponastaviti celotno verigo dejanj, izberite možnost `{{<T "ResetActionChain" >}}` v podmeniju z uporabo puščičnih tipk △ ▽ in potrdite z `{{<T "Ok" >}}`.

    ![VitalControl: Meni verige dejanj](images/setchainofactions.png "Nastavi verigo dejanj")

{{% alert title="Hint" %}}
Znotraj posameznih dejanj imate enake možnosti nastavitve, kot so opisane v poglavju [Dejanja](../actions) za vsako posamezno dejanje.
{{% /alert %}}

{{% alert title="Hint" %}}
Simboli na začetnem zaslonu verige dejanj prikazujejo, katera dejanja ste nastavili in v kakšnem vrstnem redu.
{{% /alert %}}
