---
title: Registrar peso
linkTitle: Peso
slug: record-weight
weight: 20
description: >
  Registre o peso dos seus animais.
date: 2023-07-26
categories: [Ações]
tags: [Ações, peso]
translationKey: actions/weight
---

## Registrar peso {#record-weight}
Use a ação &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Pesagem" /> `{{<T "Weighing" >}}` para salvar o peso do seu animal individualmente. Para fazer isso, pese seus animais ou estime seu peso e insira esse valor no dispositivo VitalControl. Isso permite verificar o desenvolvimento do peso dos seus animais e avaliá-los individualmente.

{{% alert title="Dica" %}}
Se o peso médio desviar muito em uma direção (muito alto/muito baixo), o valor para o aumento diário deve ser ajustado.
{{% /alert %}}

1. Na tela principal do seu dispositivo VitalControl, selecione o item do menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Ações" /> `{{<T "Actions" >}}` e pressione o botão `{{<T "Ok" >}}`.

2. Escaneie um animal usando o transponder ou selecione um animal da lista. Confirme com `{{<T "Ok" >}}` e selecione um animal com as teclas de seta △ ▽. Confirme com `{{<T "Ok" >}}`.

3. Um submenu com as ações do animal será aberto. Use as teclas de seta ◁ ▷ para selecionar a ação &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Pesagem" /> `{{<T "Weighing" >}}` e confirme com `{{<T "Ok" >}}`.

4. Um menu com uma especificação de peso será aberto. Aumente ou diminua isso com as teclas de seta △ ▽ e salve o resultado com a tecla `F3` <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Salvar" /> ou com a tecla `{{<T "Ok" >}}`.

{{< tabpane >}}
{{< tab header="Registrar peso:" text=true disabled=true />}}
{{% tab header="Escaneamento de transponder" text=true %}}
  ![VitalControl: Menu Ação Pesagem](../images/weighing-scan.png "Pesagem")
{{% /tab %}}
{{% tab header="Seleção manual da lista" text=true %}}
  ![VitalControl: Menu Ação Pesagem](../images/weighing.png "Pesagem")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Dica" %}}
Se esta ação não estiver disponível, provavelmente foi desativada! Ative a ação no menu de [configurações de ação](../setting/). Alternativamente, redefinir todas as ações trará essa ação de volta.
{{% /alert %}}
