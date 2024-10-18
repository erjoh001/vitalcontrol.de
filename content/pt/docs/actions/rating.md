---
title: Avaliação
linkTitle: Avaliação
slug: rating
weight: 30
description: >
 Avalie seus animais.
date: 2023-07-26
categories: [Ações]
tags: [Ações, Avaliação]
translationKey: actions/animal-rating
---

## Avalie seus animais {#rate-your-animals}

Ao avaliar o animal, você documenta a condição do animal individual. A condição é determinada visualmente e registrada com a ajuda do sistema de semáforo. Na avaliação básica, apenas a condição geral é registrada. Na avaliação estendida, você registra a condição geral, ingestão de alimentos, consistência das fezes e doenças respiratórias. Você pode alterar o modo de avaliação diretamente na ação <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` ou pode defini-lo nas [configurações](../../settings/data-acquisition/#mode-of-animal-rating).

{{% alert title="Dica" %}}
Uma avaliação amarela ou vermelha significa que o VitalControl classifica o animal como conspícuo e o coloca na lista de alarmes.
{{% /alert %}}

1. Na tela principal do seu dispositivo VitalControl, selecione o item do menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` e pressione o botão `{{<T "Ok" >}}`.

2. Escaneie um animal usando o transponder ou selecione um animal da lista. Confirme com `{{<T "Ok" >}}` e selecione um animal com as teclas de seta △ ▽. Confirme com `{{<T "Ok" >}}`.

3. Um submenu com as ações do animal será aberto. Use as teclas de seta ◁ ▷ para selecionar a ação <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` e confirme com `{{<T "Ok" >}}`.

4. O menu de avaliação será aberto. Se você quiser mudar o modo de avaliação, use o botão `On/Off` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Chain-of-actions" />&nbsp; e as teclas de seta ◁ ▷. Com a tecla `F1` <img src="/icons/footer/exit.svg" width="24" align="bottom" alt="Back" />&nbsp; você volta ao menu de avaliação.

5. Use as teclas de seta ◁ ▷ △ ▽ para selecionar um estado e salvá-lo com a tecla `F3` <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> ou a tecla `{{<T "Ok" >}}`.

6. No modo avançado, use as teclas `F1` e `F3` para alternar entre os parâmetros de avaliação.

{{% alert title="Dica" %}}
Se você não fizer uma seleção usando as teclas de seta ◁ ▷ mas salvar diretamente usando a tecla `F3` ou `{{<T "Ok" >}}`, o VitalControl salva uma avaliação neutra, representada por uma cor cinza.
{{% /alert %}}

### Avaliação básica {#basic-rating}

{{< tabpane >}}
{{< tab header="Avaliação básica:" text=true disabled=true />}}
{{% tab header="Varredura de transponder" text=true %}}
![VitalControl: Menu Ações Avaliação](../images/basicrating-scan.png "Avaliação básica")
{{% /tab %}}
{{% tab header="Seleção manual da lista" text=true %}}
![VitalControl: Menu Ações Avaliação](../images/basicrating.png "Avaliação básica")
{{% /tab %}}
{{< /tabpane >}}

### Avaliação estendida {#extended-rating}

{{< tabpane >}}
{{< tab header="Avaliação básica:" text=true disabled=true />}}
{{% tab header="Varredura de transponder" text=true %}}
![VitalControl: Menu Ações Avaliação](../images/extendedrating-scan.png "Avaliação estendida")
{{% /tab %}}
{{% tab header="Seleção manual da lista" text=true %}}
![VitalControl: Menu Ações Avaliação](../images/extendedrating.png "Avaliação estendida")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Dica" %}}
Se esta ação não estiver disponível, provavelmente a ação foi desativada! Ative a ação no menu [configurações de ação](../setting/). Alternativamente, redefinir todas as ações trará essa ação de volta.
{{% /alert %}}
