---
title: "Řetězec akcí: nastavení a použití"
linkTitle: "Řetězec akcí"
weight: 15
date: 2023-07-28T13:25:28+02:00
draft: false
slug: chain-of-actions
description: >
 Provádění více akcí zvířete po sobě
kategorie: [Řetězec akcí]
štítky: [Řetězec akcí, Akce]
translationKey: action-chain
---
## Řetězec akcí {#chain-of-actions}

Řetězec akcí vám umožňuje automaticky provádět několik akcí pro zvíře jednu po druhé. Například můžete vybrat akce `{{<T "Temperature" >}}` a `{{<T "Rating" >}}`. Pokud poté provedete řetězec akcí, můžete nejprve změřit teplotu svého zvířete a ihned poté zaznamenat hodnocení.

### Použití řetězce akcí {#use-chain-of-actions}

1. Na hlavní obrazovce vašeho zařízení VitalControl vyberte položku menu &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Řetězec akcí" />&nbsp; `{{<T "ActionChain" >}}` a stiskněte tlačítko `{{<T "Ok" >}}`.

2. Buď naskenujte zvíře pomocí transpondéru, nebo potvrďte tlačítkem `{{<T "Ok" >}}` a pomocí šipek △ ▽ ◁ ▷ zadejte požadované ID zvířete.

3. Nyní je řetězec akcí proveden. Jakmile jsou všechny akce v řetězci akcí provedeny, lze přímo vybrat další zvíře.

{{< tabpane >}}
{{< tab header="Použití řetězce akcí:" text=true disabled=true />}}
{{% tab header="Skenování transpondéru" text=true %}}
![VitalControl: Menu řetězce akcí](images/chainofactions-scan.png "Řetězec akcí")
{{% /tab %}}
{{% tab header="Ruční výběr ze seznamu" text=true %}}
![VitalControl: Menu řetězce akcí](images/chainofactions.png "Řetězec akcí")
{{% /tab %}}
{{< /tabpane >}}

### Nastavení řetězce akcí {#set-chain-of-actions}

1. Na hlavní obrazovce vašeho zařízení VitalControl vyberte položku menu &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Řetězec akcí" />&nbsp; `{{<T "ActionChain" >}}` a stiskněte tlačítko `{{<T "Ok" >}}`.

2. Použijte tlačítko `F2` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Aktionskette" />&nbsp; (`{{<T "Settings" >}}`).

3. Objeví se překryvná obrazovka. Pomocí šipek △ ▽ vyberte mezi uvedenými akcemi 1 - 4 (můžete provést až čtyři akce za sebou). Pomocí šipek ◁ ▷ vyberte požadovanou akci pro příslušnou akci. Nastavení uložte tlačítkem `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Uložit a vrátit se" />&nbsp;.


4. Pokud chcete resetovat celý řetězec akcí, vyberte možnost `{{<T "ResetActionChain" >}}` v podmenu pomocí šipek △ ▽ a potvrďte `{{<T "Ok" >}}`.

    ![VitalControl: Menu řetězec akcí](images/setchainofactions.png "Nastavit řetězec akcí")

{{% alert title="Hint" %}}
V rámci jednotlivých akcí máte stejné možnosti nastavení, jak je popsáno v kapitole [Akce](../actions) pro každou jednotlivou akci.
{{% /alert %}}

{{% alert title="Hint" %}}
Symboly na úvodní obrazovce řetězce akcí ukazují, které akce jste nastavili a v jakém pořadí.
{{% /alert %}}
