---
title: "Novo na fazenda, sem transponder"
linkTitle: "Novo na fazenda, sem transponder"
weight: 15
date: 2023-07-28T13:25:28+02:00
draft: false
slug: new-no-transponder
description: >
  Aqui você atribui um transponder a novos animais sem transponder.
categories: [Novo na fazenda, transponder]
tags: [Novo na fazenda, transponder]
translationKey: new-on-farm/new-on-farm, no transponder
---
### Novo na fazenda, sem transponder {#new-on-farm-no-transponder}

Nesta lista, você encontrará todos os animais recém-criados com idade máxima de X dias que ainda não foram atribuídos a um transponder. Você pode definir a idade máxima [aqui](/pt/docs/settings/animal-registration/#set-default-values). Uma vez que você tenha coletado um transponder desses animais, você pode procurar pelo ID do animal correspondente na lista e escanear o transponder associado. O transponder é então automaticamente atribuído ao animal e o animal é removido da lista. Para atribuir um transponder, proceda da seguinte forma:

1. Na tela principal do seu dispositivo VitalControl, selecione o item do menu <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Novo na fazenda" /> `{{<T "NewOnFarm" >}}` e pressione o botão `{{<T "Ok" >}}`.

2. Um submenu será aberto no qual você pode escolher entre <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Novo na fazenda, sem transponder" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Animais comprados" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Sem ID nacional do animal" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Nascimentos" /> `{{<T "Births" >}}` e <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Sem transponder atribuído" /> `{{<T "NoTransponderAssigned" >}}`. Use as teclas de seta ◁ ▷ △ ▽ para selecionar o item do menu <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Novo na fazenda, sem transponder" /> `{{<T "NewOnFarmNoTransponder" >}}` e confirme com `{{<T "Ok" >}}`.

3. Uma lista é aberta com todos os animais que foram recém-criados, mas aos quais ainda não foi atribuído um transponder. Use as teclas de seta △ ▽ para selecionar o animal desejado e confirme com `{{<T "Ok" >}}`. Alternativamente, você pode procurar um animal. Use o botão `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> e use as teclas de seta ◁ ▷ △ ▽ para selecionar os dígitos desejados. Finalmente, confirme com `{{<T "Ok" >}}`.

4. Agora escaneie o transponder do animal.

5. Um transponder foi adicionado com sucesso ao animal.

{{< tabpane >}}
{{< tab header="Novo na fazenda, sem transponder:" text=true disabled=true />}}
{{% tab header="Escanear transponder" text=true %}}
![VitalControl: Menu Novo na fazenda, sem transponder](../images/notransponder-scan.png "Novo na fazenda, sem transponder")
{{% /tab %}}
{{% tab header="Seleção manual da lista" text=true %}}
![VitalControl: Menu Novo na fazenda, sem transponder](../images/notransponder.png "Novo na fazenda, sem transponder")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Dica" %}}
Assim que você tiver atribuído todos os animais, você tem a opção de ser redirecionado para o item de menu `{{<T "PurchasedAnimals" >}}` através do botão `{{<T "Ok" >}}`. Lá você pode criar um arquivo CSV para o relatório de acesso no HI-Tier ou HERDE-Mast. <br/>
<br/>
![VitalControl: Menu Novo na fazenda, sem transponder](../images/redirect.png "Redirecionar")
{{% /alert %}}

## Ações adicionais anteriores {#previous-additional-actions}

Você pode usar as ações adicionais anteriores para definir quais ações deseja realizar antes de atribuir o transponder. Você pode escolher entre medir a temperatura, avaliar o animal e pesar o animal. A respectiva ação é salva diretamente para o animal que você atribuir posteriormente. Proceda da seguinte forma:

1. Na tela principal do seu dispositivo VitalControl, selecione o item de menu <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Novo na fazenda" /> `{{<T "NewOnFarm" >}}` e pressione o botão `{{<T "Ok" >}}`.

2. Um submenu é aberto no qual você pode escolher entre <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Novo na fazenda, sem transponder" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Animais comprados" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Sem ID nacional do animal" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Nascimentos" /> `{{<T "Births" >}}` e <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Sem transponder atribuído" /> `{{<T "NoTransponderAssigned" >}}`. Use as teclas de seta ◁ ▷ △ ▽ para selecionar o item de menu <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Novo na fazenda, sem transponder" /> `{{<T "NewOnFarmNoTransponder" >}}` e confirme com `{{<T "Ok" >}}`.

3. Use a tecla `{{<T "Ok" >}}` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Aufruf Popup" />&nbsp; para chamar um popup. Use as teclas de seta △ ▽ para navegar até o item `F3`.

4. Use os botões de seta △ ▽ para escolher entre `{{<T "PreviousAdditionalActions" >}}`, `{{<T "TempTaking" >}}` e `{{<T "RateAnimal" >}}`. Confirme com `{{<T "Ok" >}}` para ativar a caixa de seleção. Um tique aparece dentro da caixa de seleção para confirmar que a ação está ativada. Confirme novamente com `{{<T "Ok" >}}` para desativar a ação. Você pode ativar qualquer número de ações ao mesmo tempo.

{{% alert title="Dica" %}}
O item do menu `{{<T "Ok" >}}` informa que a atribuição de um transponder será sempre a última ação a ser realizada assim que você confirmar uma seleção de animal com `{{<T "Ok" >}}` no item do menu `{{<T "Ok" >}}`.
{{% /alert %}}

![VitalControl: Menu Novo na fazenda, sem transponder](../images/actions.png "Ações adicionais")

## Outros itens do menu {#further-menu-items}

Você também tem a opção de selecionar entre `{{<T "NewOnFarmNoTransponder" >}}`, `{{<T "Settings" >}}` e `{{<T "SetFilter" >}}` no pop-up. Use os botões de seta △ ▽ para navegar até o respectivo item do menu e confirme com `{{<T "Ok" >}}`. As informações para o item do menu `{{<T "NewOnFarmNoTransponder" >}}` podem ser encontradas [aqui](/pt/docs/settings/animal-registration/#set-default-values), para `{{<T "SetFilter" >}}` [aqui](/pt/docs/filter/) e para `{{<T "Settings" >}}` proceda como no passo 3 de `{{<T "Ok" >}}`.
