---
title: Editar dados do animal
linkTitle: Editar
slug: edit
weight: 90
description: >
 Editar dados do animal selecionado.
date: 2023-07-26
categories: [Ações]
tags: [Ações, dados do animal, editar]
translationKey: actions/edit
---

## Editar dados do animal {#edit-animal-data}

A ação <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `{{<T "Edit" >}}` permite alterar os dados do animal selecionado diretamente. Esta função facilita a correção dos dados do animal se, por exemplo, durante a inspeção do animal, ficar evidente que o sexo foi salvo incorretamente. Você pode alterar os seguintes dados:

- Tipo de animal
- Sexo
- Peso ao nascer
- Raça
- Localização
- ID nacional do animal
- ID
- Múltiplos
- Data de nascimento
- Facilidade de parto

Para alterar os dados do animal, proceda da seguinte forma:

1. Na tela principal do seu dispositivo VitalControl, selecione o item do menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` e pressione o botão `{{<T "Ok" >}}`.

2. Escaneie um animal usando o transponder ou selecione um animal da lista. Confirme com `{{<T "Ok" >}}` e selecione um animal com as teclas de seta △ ▽. Confirme com `{{<T "Ok" >}}`.

3. Um submenu com as ações do animal será aberto. Use as teclas de seta ◁ ▷ △ ▽ para selecionar a ação <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `{{<T "Edit" >}}` e confirme com `{{<T "Ok" >}}`.

4. Uma lista com os dados do animal será aberta. Use as teclas de seta △ ▽ para selecionar a opção de alteração desejada.

5. Para os dados `{{<T "TypeAnimal" >}}`, `{{<T "Sex" >}}`, `{{<T "BirthWeight" >}}`, `{{<T "Breed" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "Multiples" >}}` e `{{<T "CalvingEase" >}}` use as teclas de seta ◁ ▷ para fazer a alteração desejada.

6. Para os dados `{{<T "ID" >}}` e `{{<T "DateBirth" >}}` selecione-os com as teclas de seta △ ▽ e confirme com `{{<T "Ok" >}}`. Use as teclas de seta △ ▽ para selecionar o número correspondente e as teclas de seta ◁ ▷ para navegar dentro dos campos numéricos.

7. Salve a alteração com a tecla `F3`.

{{< tabpane >}}
{{< tab header="Edit animal data:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Action Edit animal data](../images/edit-scan.png "Edit animal data")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Action Edit animal data](../images/edit.png "Edit animal data")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Hint" %}}
Se esta ação não estiver disponível, provavelmente foi desativada! Ative a ação no menu de [configurações de ação](../setting/). Alternativamente, redefinir todas as ações trará essa ação de volta.
{{% /alert %}}
