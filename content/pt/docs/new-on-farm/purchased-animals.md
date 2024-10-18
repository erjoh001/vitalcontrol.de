---
title: Animais comprados
linkTitle: Animais comprados
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: purchased-animals
description: >
  Aqui você pode ver suas compras atuais e exportar os dados.
categories: [Novidade na fazenda]
tags: [Novidade na fazenda]
translationKey: new-on-farm/new-on-farm
---
## Animais comprados {#purchased-animals}

Nesta lista você encontrará todos os animais que você criou via registro em massa. Você pode exportar esta lista e assim registrar suas adições diretamente no programa de gerenciamento de rebanho DSP-Herde e no HI-Tier. Alternativamente, você pode excluir todos os avisos de compra.

{{% alert title="Dica" %}}
Para exportar dados, você precisa do stick UBS incluído. Conecte o stick USB com o adaptador USB-C ao seu dispositivo VitalControl antes de seguir as instruções.
{{% /alert %}}

1. Na tela principal do seu dispositivo VitalControl, selecione o item do menu <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Novidade na fazenda" /> `{{<T "NewOnFarm" >}}` e pressione o botão `{{<T "Ok" >}}`.

2. Um submenu será aberto no qual você pode escolher entre <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Novidade na fazenda, sem transponder" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Animais comprados" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Sem identificação nacional do animal" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Nascimentos" /> `{{<T "Births" >}}` e <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Sem transponder atribuído" /> `{{<T "NoTransponderAssigned" >}}`. Use as teclas de seta ◁ ▷ △ ▽ para selecionar o item do menu <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Animais comprados" /> `{{<T "PurchasedAnimals" >}}` e confirme com `{{<T "Ok" >}}`.

3. Uma lista será aberta com suas compras que você registrou através do item de menu de registro em massa.


4. Use a tecla `F2` `{{<T "CSVExport" >}}`.

5. A lista de mensagens CSV agora está salva no seu pen drive.

    ![VitalControl: Lista de animais comprados, exportação csv](../images/purchasedanimals.png "Animais comprados, exportação csv ")

## Opções: Excluir todos os avisos após a exportação {#options-delete-all-notices-after-export}

Com esta opção, você pode definir se todas as mensagens dentro da lista `{{<T "PurchasedAnimals" >}}` devem ser excluídas após a exportação do arquivo CSV. Use esta opção apenas se tiver certeza de que não precisará mais das mensagens!

1. Use a tecla `F3`. Um submenu será aberto.

2. Use as teclas de seta △ ▽ para selecionar o item de menu `{{<T "DeleteAllNoticesAfterExport" >}}` e confirme com `{{<T "Ok" >}}`.

3. A caixa agora está marcada com um tique. A opção está ativada. Confirme novamente com `{{<T "Ok" >}}` para desativar a opção.

    ![VitalControl: Lista de animais comprados, exportação csv](../images/delete-all.png "Excluir todos os avisos após a exportação")

## Chamadas de função direta {#direct-function-calls}

Além de criar o arquivo de exportação, você tem as seguintes opções:

- [Desvincular transponder](#unlink-transponder)
- [Limpar todos os avisos de compra](#clear-all-purchase-notices)
- [Excluir animal + aviso](#delete-animal--purchase-notice)
- [Limpar aviso de compra](#clear-notice-of-purchase)
- [Editar uma marca](#edit-data-of-purchased-animal)

{{% alert title="Dica" %}}
Sempre abra a lista `{{<T "PurchasedAnimals" >}}` primeiro, conforme descrito nas instruções acima.
{{% /alert %}}

### Desvincular transponder {#unlink-transponder}

Você pode usar esta função para remover o transponder de um animal.

1. Use a tecla `F3`. Um submenu será aberto.

2. Use as teclas de seta △ ▽ para selecionar o item de menu `{{<T "UnlinkTransponder" >}}` e confirme com `{{<T "Ok" >}}`.

3. O transponder foi desvinculado com sucesso.

    ![VitalControl: Lista de animais comprados, exportação csv](../images/unlink-transponder.png "Animais comprados, desvincular transponder")

### Limpar todos os avisos de compra {#clear-all-purchase-notices}

Com esta função, você pode excluir todos os animais da lista `{{<T "PurchasedAnimals" >}}` sem precisar criar um arquivo de exportação primeiro.

1. Use a tecla `F3`. Um submenu será aberto.

2. Use as teclas de seta △ ▽ para selecionar o item de menu `{{<T "ClearAllPurchaseNotices" >}}` e confirme com `{{<T "Ok" >}}`.

3. Os avisos de compra foram excluídos com sucesso.

    ![VitalControl: Lista de animais comprados, limpar avisos de compra](../images/clear.png "Limpar todos os avisos de compra")

### Excluir animal + aviso de compra {#delete-animal--purchase-notice}

Para excluir um animal e seu respectivo aviso de compra, proceda da seguinte forma:

1. Use as teclas de seta △ ▽ para selecionar o animal que você deseja excluir.

2. Use a tecla `F3`. Um submenu será aberto.

3. Use as teclas de seta △ ▽ para selecionar o item de menu `{{<T "UnregisterAnimalAndBirthNotice" >}}` e confirme com `{{<T "Ok" >}}`.

4. O animal e a mensagem de acesso foram excluídos com sucesso.

    ![VitalControl: Lista de animais comprados, excluir animal + aviso](../images/delete.png "Excluir animal + aviso")

### Limpar aviso de compra {#clear-notice-of-purchase}

Para excluir o aviso de compra de um animal da lista, proceda da seguinte forma:

1. Use as teclas de seta △ ▽ para selecionar o animal cujo aviso de compra você deseja excluir.

2. Use a tecla `F3`. Um submenu será aberto.

3. Use as teclas de seta △ ▽ para selecionar o item de menu `{{<T "ClearPurchaseNotice" >}}` e confirme com `{{<T "Ok" >}}`.

4. O aviso de compra do animal selecionado foi excluído com sucesso.

    ![VitalControl: Lista de animais comprados, limpar aviso de compra](../images/clearnotice.png "Limpar aviso de compra")

### Editar dados do animal comprado {#edit-data-of-purchased-animal}

Para editar os dados de um animal na lista de compras, proceda da seguinte forma:

1. Use as teclas de seta △ ▽ para selecionar o animal que você deseja editar.

2. Use o botão `{{<T "Ok" >}}`. Um submenu com os dados do animal será aberto. Você pode descobrir como editar esses dados [aqui](/pt/docs/actions/edit/#edit-animal-data).


    ![VitalControl: Lista de animais comprados, Editar dados do animal](../images/edit.png "Editar dados do animal comprado")
