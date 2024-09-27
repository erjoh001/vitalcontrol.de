---
title: Secagem
linkTitle: Secagem
slug: dry-off
weight: 115
description: >
 Secar uma vaca ou adicioná-la à lista de vacas frescas
date: 2023-07-26
categories: [Secagem]
tags: [Secagem]
translationKey: actions/dry-cows
---

## Secagem {#dry-off}

{{% alert title="Dica" %}}
Dependendo do status inicial da vaca, você pode secar o animal e adicioná-lo à lista de secagem, ou pode marcar o animal como uma vaca fresca e, assim, adicioná-lo à lista de vacas frescas. A distinção entre as funções é feita por um símbolo de mais ou um símbolo de menos.
{{% /alert %}}

### Secar uma vaca {#dry-off-a-cow}

1. Na tela principal do seu dispositivo VitalControl, selecione o item do menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Ações" /> `{{<T "Actions" >}}` e pressione o botão `{{<T "Ok" >}}`.

2. Escaneie o transponder do animal sem o ID nacional do animal ou selecione o animal da lista. Para fazer isso, confirme com `{{<T "Ok" >}}` e selecione o ID do animal usando as teclas de seta △ ▽. Confirme com `{{<T "Ok" >}}`.

3. Um submenu com as ações do animal será aberto. Use as teclas de seta ◁ ▷ △ ▽ para selecionar a ação <img src="/icons/actions/dryoff-plus.svg" width="35" align="bottom" alt="Secar" /> `{{<T "DryOff" >}}` e confirme com `{{<T "Ok" >}}`.

4. O animal foi marcado como seco com sucesso.

{{< tabpane >}}
{{< tab header="Secar uma vaca:" text=true disabled=true />}}
{{% tab header="Escaneamento do transponder" text=true %}}
![VitalControl: Menu Ações Secar](../images/dryoff-scan.png "Secar uma vaca")
{{% /tab %}}
{{% tab header="Seleção manual da lista" text=true %}}
![VitalControl: Menu Ações Secar](../images/dryoff.png "Secar uma vaca")
{{% /tab %}}
{{< /tabpane >}}

### Marcar como lactante {#mark-as-lactated}

1. Na tela principal do seu dispositivo VitalControl, selecione o item do menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Ações" /> `{{<T "Actions" >}}` e pressione o botão `{{<T "Ok" >}}`.

2. Escaneie o transponder do animal sem o ID nacional do animal ou selecione o animal da lista. Para fazer isso, confirme com `{{<T "Ok" >}}` e selecione o ID do animal usando as teclas de seta △ ▽. Confirme com `{{<T "Ok" >}}`.

3. Um submenu com as ações do animal será aberto. Use as teclas de seta ◁ ▷ △ ▽ para selecionar a ação <img src="/icons/actions/dryoff-minus.svg" width="35" align="bottom" alt="Dry off" /> `{{<T "DryOff" >}}` e confirme com `{{<T "Ok" >}}`.

4. O animal foi marcado com sucesso como lactado.

{{< tabpane >}}
{{< tab header="Mark as lactated:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Ações Marcar como lactado](../images/lactated-scan.png "Marcar como lactado")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Ações Marcar como lactado](../images/lactated.png "Marcar como lactado")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Hint" %}}
Se esta ação não estiver disponível, provavelmente a ação foi desativada! Ative a ação no menu de [configurações de ação](../setting). Alternativamente, redefinir todas as ações trará essa ação de volta.
{{% /alert %}}
