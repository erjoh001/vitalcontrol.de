---
title: Vincular ID do animal
linkTitle: Vincular ID do animal
slug: link-animal-id
weight: 115
description: >
 Atribuir um ID nacional de animal a um animal que não possui um ID nacional de animal
date: 2023-07-26
categories: [ID nacional de animal]
tags: [ID nacional de animal]
translationKey: actions/national-animal-id
---
{{% alert title="Aviso" color="warning" %}}
Esta ação não está habilitada por padrão! Ative isso conforme descrito em [configurações de ação](../setting/).
{{% /alert %}}

## Vincular ID do animal {#link-animal-id}

Para atribuir um ID nacional de animal a um animal que não possui um ID nacional de animal, proceda da seguinte forma:

1. Na tela principal do seu dispositivo VitalControl, selecione o item do menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Ações" /> `{{<T "Actions" >}}` e pressione o botão `{{<T "Ok" >}}`.

2. Escaneie o transponder do animal sem o ID nacional de animal ou selecione o animal da lista. Para fazer isso, confirme com `{{<T "Ok" >}}` e selecione o ID do animal usando as teclas de seta △ ▽. Confirme com `{{<T "Ok" >}}`.

3. Um submenu com as ações do animal será aberto. Use as teclas de seta ◁ ▷ △ ▽ para selecionar a ação &nbsp;<img src="/icons/actions/link-nais-id.svg" width="35" align="bottom" alt="Vincular ID do animal" /> `{{<T "LinkAnimalID" >}}` e confirme com `{{<T "Ok" >}}`.

4. Outro submenu será aberto com todas as opções de configuração para os dados do animal. A opção de configuração `{{<T "NationalAnimalID" >}}` é automaticamente selecionada. Confirme com `{{<T "Ok" >}}`.

5. Use as teclas de seta ◁ ▷ △ ▽ para definir o ID nacional do animal. Confirme novamente com `{{<T "Ok" >}}`.

6. Salve as configurações e volte ao menu principal &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Ações" /> `{{<T "Actions" >}}` usando a tecla `F3`.

{{< tabpane >}}
{{< tab header="Vincular ID do animal:" text=true disabled=true />}}
{{% tab header="Escaneamento de transponder" text=true %}}
![VitalControl: Menu Ação Vincular ID do animal](../images/linkanimalid-scan.png "Vincular ID do animal")
{{% /tab %}}
{{% tab header="Seleção manual da lista" text=true %}}
![VitalControl: Menu Ação Vincular ID do animal](../images/linkanimalid.png "Vincular ID do animal")
{{% /tab %}}
{{< /tabpane >}}

## Vincular ID do animal com a leitura da etiqueta eletrônica {#link-animal-id-with-electronic-ear-tag-scan}

Para atribuir um ID nacional a um animal que possui uma etiqueta eletrônica, proceda da seguinte forma:

1. Na tela principal do seu dispositivo VitalControl, selecione o item do menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` e pressione o botão `{{<T "Ok" >}}`.

2. Escaneie o transponder do animal sem o ID nacional ou selecione o animal da lista. Para fazer isso, confirme com `{{<T "Ok" >}}` e selecione o ID do animal usando as teclas de seta △ ▽. Confirme com `{{<T "Ok" >}}`.

3. Um submenu com as ações do animal será aberto. Use as teclas de seta ◁ ▷ △ ▽ para selecionar a ação &nbsp;<img src="/icons/actions/scan-nais-id.svg" width="35" align="bottom" alt="Link animal ID" />  `{{<T "LinkAnimalID" >}}` e confirme com `{{<T "Ok" >}}`.

4. Agora escaneie a etiqueta eletrônica.

5. O animal foi atribuído com sucesso a um ID nacional.

{{< tabpane >}}
{{< tab header="Vincular ID do animal com a leitura da etiqueta eletrônica:" text=true disabled=true />}}
{{% tab header="Leitura do transponder" text=true %}}
![VitalControl: Menu Ação Vincular ID do animal](../images/linkanimalidscan-scan.png "Vincular ID do animal")
{{% /tab %}}
{{% tab header="Seleção manual da lista" text=true %}}
![VitalControl: Menu Ação Vincular ID do animal](../images/linkanimalidscan.png "Vincular ID do animal")
{{% /tab %}}
{{< /tabpane >}}
