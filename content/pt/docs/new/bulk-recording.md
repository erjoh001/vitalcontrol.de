---
title: "Registro em massa de um grupo de animais comprados"
linkTitle: "Registro em massa"
date: 2023-07-28T13:25:28+02:00
weight: 15
draft: false
slug: bulk-recording
description: >
  Use o scanner de código de barras para registrar uma variedade de animais.
categories: [Bulk-recording]
tags: [Bulk-recording]
translationKey: new/bulk-recording
---
## Registro em massa {#bulk-recording}

Com a ajuda do registro em massa, você pode capturar um grande número de animais em pouco tempo e salvá-los em seu dispositivo. Use o scanner de código de barras para escanear os códigos de barras do número da etiqueta auricular e da data de nascimento nos passaportes do gado. O animal é salvo automaticamente e você pode escanear o próximo passaporte imediatamente. Para realizar o registro em massa de animais, proceda da seguinte forma:

1. Conecte o scanner de código de barras ao VitalControl usando o cabo.

2. Na tela principal do seu dispositivo VitalControl, selecione o item do menu <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="Novo animal" /> `{{<T "New" >}}` e pressione o botão `{{<T "Ok" >}}`.

3. Um submenu é aberto. Use as teclas de seta ◁ ▷ △ ▽ para selecionar o item do menu <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Registro em massa" /> `{{<T "BulkRecording" >}}` e confirme com `{{<T "Ok" >}}`.

4. Outro submenu é aberto, contendo um campo para o número da etiqueta auricular do animal e outro campo para a data de nascimento do animal. Primeiro, escaneie o código de barras do número da etiqueta auricular. A borda do campo muda de vermelho para verde. Em seguida, escaneie a data de nascimento. A borda fica brevemente verde antes que ambas as bordas apareçam vermelhas novamente. O contador abaixo do símbolo do passaporte <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Passaportes de animais" title="Passaportes de animais" /> no topo da tela é aumentado de 0 para 1. O primeiro animal foi salvo. Continue e escaneie os outros passaportes do gado. Após cada passaporte escaneado, o contador abaixo do símbolo do passaporte <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Passaportes de animais" title="Passaportes de animais" /> aumenta em um. O contador abaixo do símbolo do rebanho <img src="/icons/header/group.svg" width="35" align="bottom" alt="Grupo de animais"  title="Grupo de animais" /> também aumenta em um.

{{% alert title="Dica" %}}
O contador abaixo do símbolo do passaporte <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Passaportes de animais" title="Passaportes de animais" /> mostra quantos passes você escaneou de uma vez sem sair da tela `{{<T "BulkRecording" >}}`. O contador abaixo do símbolo do rebanho <img src="/icons/header/group.svg" width="35" align="bottom" alt="Novo animal" /> mostra quantos passaportes você escaneou no total. Este contador não é zerado se você sair da tela `{{<T "BulkRecording" >}}`. O número é equivalente às suas entradas no item de menu ['Compras'](../new-on-farm/purchased-animals/).
{{% /alert %}}

   ![VitalControl: Menu 'Novo - Registro em massa'](../images/bulk-recording.png "Registro em massa")

{{% alert title="Dica" %}}
Você tem mais opções de configuração dentro do item de menu `{{<T "BulkRecording" >}}`. Estas são explicadas abaixo. Como etapas preparatórias, sempre acesse primeiro o item de menu `{{<T "BulkRecording" >}}` e depois prossiga conforme as instruções.
{{% /alert %}}

{{% alert title="Dica" %}}
Mensagens de erro podem aparecer durante o processo de escaneamento. Nesse caso, o scanner de código de barras emite um som e o escaneamento adicional não é possível. Reconheça a mensagem de erro correspondente na tela do VitalControl e continue escaneando.
{{% /alert %}}

### Data de nascimento obrigatória {#birth-date-mandatory}

Com esta opção de configuração, você pode determinar se a data de nascimento deve ser especificada ao criar os animais. Se você desativar esta opção, você só precisa escanear o código de barras para salvar um animal. Para esses animais, no entanto, a data atual é então armazenada como a data de nascimento! Este recurso está ativado por padrão. Para desativá-lo, faça o seguinte:

1. Use o botão <img src="/icons/gear.svg" width="25" align="bottom" alt="Menu de configurações" /> `On/Off` para abrir o menu de configurações.

2. Use as teclas de seta △ ▽ para selecionar a opção de configuração `{{<T "BirthDateMandatory" >}}` e confirme com `{{<T "Ok" >}}`.

3. O círculo amarelo simboliza que a função está ativada. Um círculo cinza simboliza que a função está desativada.

4. Salve as configurações e use a tecla `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" /> para retornar ao item do menu <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" />&nbsp; `{{<T "BulkRecording" >}}`.

   ![VitalControl: Menu Nova Data de Nascimento Obrigatória](../images/birthdate.png "Data de Nascimento Obrigatória")

### Valores padrão {#default-values}

Dentro do menu de configurações `{{<T "DefaultValues" >}}`, você define padrões que se aplicam a cada animal que você cria. O processo de criação com o leitor de código de barras permanece inalterado, conforme descrito acima. Você tem a opção de definir o tipo de gado, gênero, raça e localização. Para definir os `{{<T "DefaultValues" >}}`, proceda da seguinte forma:

1. Use o botão <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings menu" /> `On/Off` para abrir o menu de configurações.

2. Use as teclas de seta △ ▽ para selecionar o item do menu `{{<T "DefaultValues" >}}` e confirme com `{{<T "Ok" >}}`.

3. Um submenu será aberto com as diferentes opções de configuração. Use as teclas de seta △ ▽ para selecionar a opção de configuração desejada. Use as teclas de seta ◁ ▷ para selecionar a configuração desejada.

4. Salve as configurações e use a tecla `F1`&nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" /> para retornar ao item do menu <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" />&nbsp; `{{<T "BulkRecording" >}}`.

   ![VitalControl: Menu Novos Valores Padrão](../images/defaultvalues.png "Valores Padrão")

### Valores registrados {#recorded-values}

Dentro do menu de configurações `{{<T "RecordedValues" >}}`, você pode especificar quais valores devem ser capturados além do número da etiqueta auricular e da data de nascimento. Você pode escolher entre `{{<T "Breed" >}}`, `{{<T "Sex" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "CurrentWeight" >}}`, `{{<T "BirthWeight" >}}` e `{{<T "TypeAnimal" >}}`. Assim que você definir pelo menos um valor, o processo muda durante a digitalização. Primeiro, digitalize o número da etiqueta auricular e a data de nascimento. Em seguida, use as teclas de direção △ ▽ para selecionar os valores a serem definidos e defina os valores. Em seguida, salve suas entradas com a tecla `F3`. Só então o animal é criado! Para definir os valores a serem registrados, proceda da seguinte forma:


1. Use o <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings menu" /> botão `On/Off` para abrir o menu de configurações.

2. Use as teclas de seta △ ▽ para selecionar o item do menu `{{<T "RecordedValues" >}}` e confirme com `{{<T "Ok" >}}`.

3. Selecione o valor desejado a ser registrado com as teclas de seta △ ▽ e confirme com `{{<T "Ok" >}}`. Um círculo amarelo aparece. Se você quiser desativar o valor a ser registrado, confirme novamente com `{{<T "Ok" >}}`. O círculo amarelo desaparece.

4. Salve as configurações e use a tecla `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" /> para retornar ao item do menu <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" />&nbsp; `{{<T "BulkRecording" >}}`.

5. Se você gostaria de desativar todos os valores a serem registrados novamente, selecione a opção de configuração `{{<T "EnableAllResetOrder" >}}` no item do menu `{{<T "RecordedValues" >}}` e confirme com `{{<T "Ok" >}}`.

   ![VitalControl: Menu New Record values](../images/recordvalues.png "Record values")
