---
title: Cancelar registro de animal
linkTitle: Cancelar registro
slug: unregister
weight: 100
description: >
 Cancelar o registro de um animal
date: 2023-07-26
categories: [Ações]
tags: [Ações, Cancelar registro]
translationKey: actions/unregister
---
{{% alert title="Aviso" color="warning" %}}
Assim que você excluir o registro de dados do animal, ele não estará mais disponível para fins de avaliação! Se você cancelar o registro de um animal, mas quiser, por exemplo, avaliar o desenvolvimento do animal novamente depois, você deve manter o registro de dados do animal!
{{% /alert %}}

## Cancelar registro {#unregister}

A ação `{{<T "Unregister" >}}` permite cancelar o registro de um animal assim que ele for movido. Para cancelar o registro de um animal, proceda da seguinte forma:

1. Na tela principal do seu dispositivo VitalControl, selecione o item de menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` e pressione o botão `{{<T "Ok" >}}`.

2. Escaneie um animal usando o transponder ou selecione um animal da lista. Confirme com `{{<T "Ok" >}}` e selecione um animal com as teclas de seta △ ▽. Confirme com `{{<T "Ok" >}}`.

3. Um submenu com as ações do animal será aberto. Use as teclas de seta ◁ ▷ △ ▽ para selecionar a ação &nbsp;<img src="/icons/actions/unregister.svg" width="33" align="bottom" alt="Unregister" /> `{{<T "Unregister" >}}` e confirme com `{{<T "Ok" >}}`.

4. Outro submenu será aberto, no qual você pode salvar várias configurações. Use as teclas de seta △ ▽ para selecionar a opção de configuração desejada. Use as teclas de seta ◁ ▷ para selecionar a configuração desejada.

5. Use a tecla `F3` `{{<T "Unregister" >}}` para cancelar o registro do animal com as configurações especificadas.

{{< tabpane >}}
{{< tab header="Unregister:" text=true disabled=true />}}
{{% tab header="Escanear transponder" text=true %}}
![VitalControl: Menu Ação Cancelar Registro](../images/unregister-scan.png "Cancelar o registro de um animal")
{{% /tab %}}
{{% tab header="Seleção manual da lista" text=true %}}
![VitalControl: Menu Ação Cancelar Registro](../images/unregister.png "Cancelar o registro de um animal")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Dica" %}}
Se esta ação não estiver disponível, provavelmente a ação foi desativada! Ative a ação no menu de [configurações de ação](../setting/). Alternativamente, redefinir todas as ações trará essa ação de volta.
{{% /alert %}}
