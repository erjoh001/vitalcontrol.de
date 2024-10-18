---
title: "Lista de vacas frescas"
linkTitle: "Lista de vacas frescas"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: fresh-cows
description: >
  Facilite o controle de suas vacas frescas.
categories: [Listas]
tags: [Listas, vaca fresca]
translationKey: lists/fresh-cows
---
### Lista de vacas frescas {#fresh-cows-list}

{{% alert title="Explicação" %}}
Ao gerenciar vacas frescas, verificar os animais diariamente por vários dias após o nascimento é considerado uma rotina de melhores práticas. A lista de vacas frescas facilita esse controle, especialmente em termos de registro de temperatura. Para cada animal, é mostrado um gráfico de colunas ao longo de todos os dias do período de controle, cada dia do período de controle é representado por uma barra vertical. Dependendo da cor da barra (verde, amarelo ou vermelho), você pode ver se uma temperatura normal, elevada ou criticamente elevada foi medida naquele dia para o respectivo animal.
{{% /alert %}}

As vacas são colocadas na lista de vacas frescas imediatamente após o registro do parto. Elas permanecem nessa lista por um certo período de tempo, a duração desse período (em dias) pode ser ajustada nas [configurações](../../settings/data-acquisition/#control-period-of-fresh-cows).
 As seguintes ações estão disponíveis para esta lista:

- [Menu de ações completo](../alarm/#full-action-menu)
- [Dados do animal](../alarm/#animal-data)
- [Medir temperatura](../alarm/#take-temperature)
- [Alternar status de alarme](#toggle-alarm-status)
- [Alternar status de observação](#toggle-watch-status)
- [Ocultar vacas medidas](#hide-measured-cows)
- [Buscar animal](../alarm/#search-animal)
- [Definir filtro](../alarm/#set-filter)

{{% alert title="Dica" %}}
Algumas ações devem ser realizadas da mesma forma que na [lista de alarmes](../alarm). Estas não são explicadas aqui. Realize as etapas preliminares e use o link da respectiva ação para acessar as instruções.
{{% /alert %}}

### Etapas Preliminares {#preliminary-steps}

1. Selecione o item de menu <img src="/icons/main/lists.svg" width="25" align="bottom" alt="Listas" /> `{{<T "Lists" >}}` na tela principal do seu dispositivo VitalControl e pressione o botão `{{<T "Ok" >}}`.

2. Um submenu é aberto no qual várias listas são exibidas. Selecione a lista `{{<T "FreshCows" >}}` <img src="/icons/lists/freshcows.svg" width="30" align="bottom" alt="Fresh-cows" />. Confirme com `{{<T "Ok" >}}`.

3. A lista de vacas frescas está agora aberta.

   ![VitalControl Lists Fresh cows list](../images/firststeps4.png "Fresh cow list")

### Alternar status do alarme {#toggle-alarm-status}

1. Complete as etapas preliminares.

2. Use a tecla `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; para invocar um menu popup que lista as ações possíveis ao pressionar a tecla `{{<T "Ok" >}}`. Use as teclas de seta △ ▽ para destacar a ação `{{<T "ToggleAlarmStatus" >}}` e selecione esta opção pressionando o botão central `{{<T "Ok" >}}` ou a tecla `F3` `{{<T "Ok" >}}`.

3. Dentro da lista de vacas frescas, use as teclas de seta △ ▽ para selecionar o animal desejado e confirme com `{{<T "Ok" >}}`. Alternativamente, você pode procurar por um animal. Use o botão `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> e use as teclas de seta ◁ ▷ △ ▽ para selecionar os dígitos desejados. Finalmente, confirme com `{{<T "Ok" >}}`.

4. O animal agora é adicionado ou removido da lista de alertas, dependendo de seu status inicial.

   ![VitalControl Lists Fresh cows list](../images/togglealarmstatus.png "Toggle alarm status")

### Alternar status de vigilância {#toggle-watch-status}

1. Complete as etapas preliminares.

2. Use a tecla `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; para invocar um menu popup que lista as ações possíveis ao pressionar a tecla `{{<T "Ok" >}}`. Use as teclas de seta △ ▽ para destacar a ação `{{<T "ToggleWatchStatus" >}}` e selecione esta opção pressionando o botão central `{{<T "Ok" >}}` ou a tecla `F3` `{{<T "Ok" >}}`.

3. Dentro da lista de vacas frescas, use as teclas de seta △ ▽ para selecionar o animal desejado e confirme com `{{<T "Ok" >}}`. Alternativamente, você pode procurar por um animal. Use o botão `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> e use as teclas de seta ◁ ▷ △ ▽ para selecionar os dígitos desejados. Finalmente, confirme com `{{<T "Ok" >}}`.

4. O animal agora é adicionado ou removido da lista de observação dependendo de seu status inicial.

   ![VitalControl Lists Fresh cows list](../images/togglewatchstatus.png "Alternar status de observação")

### Ocultar vacas medidas {#hide-measured-cows}

Se esta função estiver ativada, os animais para os quais uma medição de temperatura foi realizada são ocultados na lista de vacas secas. Se esta função não estiver ativada, os animais permanecem visíveis na lista.

1. Complete os passos preliminares.

2. Use a tecla `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Actions" />&nbsp; para invocar um menu popup que lista várias opções. Use as teclas de seta △ ▽ para destacar a opção `{{<T "HideMeasuredCows" >}}` e alterne esta opção pressionando o botão central `{{<T "Ok" >}}` ou a tecla `F3` `{{<T "Ok" >}}`.

3. Dentro da lista de vacas frescas, use as teclas de seta △ ▽ para selecionar o animal desejado e confirme com `{{<T "Ok" >}}`. Alternativamente, você pode procurar por um animal. Use o botão `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> e use as teclas de seta ◁ ▷ △ ▽ para selecionar os dígitos desejados. Finalmente, confirme com `{{<T "Ok" >}}`.

4. A função `{{<T "HideMeasuredCows" >}}` agora está ativada. A ativação é indicada pela marcação da caixa.

   ![VitalControl Lists Fresh cows list](../images/hidemeasuredcows.png "Ocultar vacas medidas")
