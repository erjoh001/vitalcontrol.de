---
title: "Cadeia de ações: configuração e uso"
linkTitle: "Cadeia de ações"
weight: 15
date: 2023-07-28T13:25:28+02:00
draft: false
slug: chain-of-actions
description: >
 Realizar várias ações de animais subsequentemente
categories: [Cadeia de ações]
tags: [Cadeia de ações, Ações]
translationKey: action-chain
---
## Cadeia de ações {#chain-of-actions}

A cadeia de ações permite que você realize automaticamente várias ações para um animal uma após a outra. Por exemplo, você pode selecionar as ações `{{<T "Temperature" >}}` e `{{<T "Rating" >}}`. Se você então realizar a cadeia de ações, você pode medir a temperatura do seu animal primeiro e registrar a avaliação imediatamente depois.

### Usar cadeia de ações {#use-chain-of-actions}

1. Na tela principal do seu dispositivo VitalControl, selecione o item do menu &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Chain of actions" />&nbsp; `{{<T "ActionChain" >}}` e pressione o botão `{{<T "Ok" >}}`.

2. Ou escaneie um animal usando o transponder ou confirme com `{{<T "Ok" >}}` e use as teclas de seta △ ▽ ◁ ▷ para inserir o ID do animal desejado.

3. A cadeia de ações agora é executada. Assim que todas as ações na cadeia de ações forem realizadas, o próximo animal pode ser selecionado diretamente.

{{< tabpane >}}
{{< tab header="Usar cadeia de ações:" text=true disabled=true />}}
{{% tab header="Escaneamento de transponder" text=true %}}
![VitalControl: Menu cadeia de ações](images/chainofactions-scan.png "Cadeia de ações")
{{% /tab %}}
{{% tab header="Seleção manual da lista" text=true %}}
![VitalControl: Menu cadeia de ações](images/chainofactions.png "Cadeia de ações")
{{% /tab %}}
{{< /tabpane >}}

### Configurar cadeia de ações {#set-chain-of-actions}

1. Na tela principal do seu dispositivo VitalControl, selecione o item do menu &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Chain of actions" />&nbsp; `{{<T "ActionChain" >}}` e pressione o botão `{{<T "Ok" >}}`.

2. Use o botão `F2` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Aktionskette" />&nbsp; (`{{<T "Settings" >}}`).


3. Uma tela de sobreposição aparece. Use as teclas de seta △ ▽ para escolher entre as ações listadas de 1 a 4 (você pode realizar até quatro ações consecutivas). Use as teclas de seta ◁ ▷ para selecionar a ação desejada para a respectiva ação. Salve as configurações com a tecla `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Salvar e retornar" />&nbsp;.

4. Se você quiser redefinir toda a cadeia de ações, selecione a opção `{{<T "ResetActionChain" >}}` no submenu usando as teclas de seta △ ▽ e confirme com `{{<T "Ok" >}}`.

    ![VitalControl: Menu cadeia de ações](images/setchainofactions.png "Definir cadeia de ações")

{{% alert title="Hint" %}}
Dentro das ações individuais, você tem as mesmas opções de configuração descritas no capítulo [Ações](../actions) para cada ação individual.
{{% /alert %}}

{{% alert title="Hint" %}}
Os símbolos na tela inicial da cadeia de ações mostram quais ações você configurou e em que ordem.
{{% /alert %}}
