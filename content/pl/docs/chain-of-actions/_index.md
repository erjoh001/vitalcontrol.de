---
title: "Łańcuch działań: konfiguracja i użycie"
linkTitle: "Łańcuch działań"
weight: 15
date: 2023-07-28T13:25:28+02:00
draft: false
slug: chain-of-actions
description: >
 Wykonaj kolejne działania na zwierzętach
categories: [Łańcuch działań]
tags: [Łańcuch działań, Działania]
translationKey: action-chain
---
## Łańcuch działań {#chain-of-actions}

Łańcuch działań pozwala automatycznie wykonać kilka działań na zwierzęciu jedno po drugim. Na przykład, możesz wybrać działania `{{<T "Temperature" >}}` i `{{<T "Rating" >}}`. Jeśli następnie wykonasz łańcuch działań, możesz najpierw zmierzyć temperaturę swojego zwierzęcia, a następnie natychmiast zanotować ocenę.

### Użyj łańcucha działań {#use-chain-of-actions}

1. Na głównym ekranie urządzenia VitalControl wybierz pozycję menu &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Chain of actions" />&nbsp; `{{<T "ActionChain" >}}` i naciśnij przycisk `{{<T "Ok" >}}`.

2. Zeskanuj zwierzę za pomocą transpondera lub potwierdź przyciskiem `{{<T "Ok" >}}` i użyj klawiszy strzałek △ ▽ ◁ ▷, aby wprowadzić żądany identyfikator zwierzęcia.

3. Łańcuch działań jest teraz wykonywany. Gdy wszystkie działania w łańcuchu działań zostaną wykonane, można bezpośrednio wybrać następne zwierzę.

{{< tabpane >}}
{{< tab header="Użyj łańcucha działań:" text=true disabled=true />}}
{{% tab header="Skanowanie transponderem" text=true %}}
![VitalControl: Menu chain of actions](images/chainofactions-scan.png "Chain of actions")
{{% /tab %}}
{{% tab header="Ręczny wybór z listy" text=true %}}
![VitalControl: Menu chain of actions](images/chainofactions.png "Chain of actions")
{{% /tab %}}
{{< /tabpane >}}

### Ustaw łańcuch działań {#set-chain-of-actions}

1. Na głównym ekranie urządzenia VitalControl wybierz pozycję menu &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Chain of actions" />&nbsp; `{{<T "ActionChain" >}}` i naciśnij przycisk `{{<T "Ok" >}}`.

2. Użyj przycisku `F2` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Aktionskette" />&nbsp; (`{{<T "Settings" >}}`).

3. Pojawi się ekran nakładki. Użyj klawiszy strzałek △ ▽, aby wybrać jedną z wymienionych akcji 1 - 4 (możesz wykonać do czterech akcji z rzędu). Użyj klawiszy strzałek ◁ ▷, aby wybrać żądaną akcję dla odpowiedniej akcji. Zapisz ustawienia klawiszem `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Zapisz i wróć" />&nbsp;.

4. Jeśli chcesz zresetować cały łańcuch akcji, wybierz opcję `{{<T "ResetActionChain" >}}` w podmenu za pomocą klawiszy strzałek △ ▽ i potwierdź klawiszem `{{<T "Ok" >}}`.

    ![VitalControl: Menu łańcucha akcji](images/setchainofactions.png "Ustaw łańcuch akcji")

{{% alert title="Wskazówka" %}}
W ramach poszczególnych akcji masz te same opcje ustawień, które opisano w rozdziale [Akcje](../actions) dla każdej indywidualnej akcji.
{{% /alert %}}

{{% alert title="Wskazówka" %}}
Symbole na ekranie startowym łańcucha akcji pokazują, które akcje ustawiłeś i w jakiej kolejności.
{{% /alert %}}
