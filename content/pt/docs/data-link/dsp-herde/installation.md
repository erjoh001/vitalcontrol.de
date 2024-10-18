---
title: "Configuração da Tecnologia VitalControl:"
linkTitle: Configuração
date: 2023-08-04T12:21:53+02:00
draft: false
description: >
  Defina os parâmetros de sincronização para a troca de dados entre o software *Herde* e o dispositivo VitalControl.
weight: 10
categories: [DSP Herde]
translationKey: DSPherde/installation
---
Antes da primeira [troca de dados](../data-exchange/), o acoplamento da tecnologia ao dispositivo VitalControl deve ser criado e configurado uma vez.

{{% alert title="Atenção" %}}
Antes de configurar o acoplamento da tecnologia, verifique se o software 'VCSynchronizer' está instalado no seu PC; este software é obrigatório para a troca de dados. Para fazer isso, abra o menu Iniciar do Windows e procure na lista de suas aplicações uma entrada chamada 'Urban VitalControl'. Se você não encontrar essa entrada, [instale](../../vcsynchronizer/installation/) o software `VCSynchronizer` no seu PC.
{{% /alert %}}

Para configurar a tecnologia, proceda da seguinte forma:

## Criar novo conjunto de parâmetros para troca de dados com o dispositivo VitalControl {#create-new-parameter-set-for-data-exchange-with-vitalcontrol-device}

1. Dentro do software `Herde`, abra a janela `Configurações`. Dependendo da configuração da sua interface de usuário, você pode abrir esta janela através do item de menu `Organização` no menu principal (item de nível superior _Configurações_), no menu da barra lateral ou na sua caixa de ferramentas personalizada (horizontal ou vertical).

   ![Software Herde: invocação do menu de configurações](../screenshots/settings.png "Herde: invocar Configurações")

1. Uma janela pop-up `Configurações` será aberta, na qual numerosas categorias de configuração são listadas na barra lateral esquerda. Abra a categoria `Serviço` ➊ e selecione a subcategoria `Tecnologia` ➋.

1. No cabeçalho da área principal à direita, agora aparece um dropdown no qual todos os conjuntos de parâmetros de tecnologia definidos são listados. O número de tecnologias configuradas é mostrado à direita. Clique no botão ![Software Herde: Criar novo conjunto de parâmetros de tecnologia](/icons/new.png "Herde: Criar Acoplamento de Tecnologia") `Criar novo conjunto de parâmetros de tecnologia` ➌.

![Software Herde: tela de configurações para tecnologia](../screenshots/settings-technology.png "Herde: Configurações para Tecnologia")

1. Outra janela pop-up será aberta. Insira `VitalControl` como **Nome da conexão** e `Urban VitalControl (Gen 2)` como **Tipo de Tecnologia** e clique no botão `Aceitar`.

   ![Software Herde: Criar novo conjunto de parâmetros para dispositivo VitalControl](../screenshots/new-technology.png "Criar nova tecnologia: VitalControl").

   O conjunto de parâmetros para a tecnologia `VitalControl` agora está criado e deve ser configurado nos próximos passos.

## Configuração: Configurações básicas {#configuration-basic-settings}

Inicialmente, a aba `Configurações básicas` é selecionada na tela exibida, como mostrado na figura abaixo. Faça ajustes nas categorias `Programa externo` ➊, `Dados do animal` ➋, `Localizações` ➌ e `Saída` ➍ de acordo com as condições específicas da sua fazenda.

   ![Software Herde: Configuração de configurações básicas](../screenshots/basic-settings.png "Tecnologia VitalControl: Configurações básicas").
   
### Categoria `Programa externo` ➊ {#category-external-program-}

Para realizar a troca de dados entre VitalControl e Herde Plus, o software básico [VitalControl Synchronizer](../../vcsynchronizer) é necessário como programa auxiliar externo. Para o funcionamento correto deste programa, alguns ajustes devem ser feitos na categoria `Programa externo` ➊.

- **Nome do dispositivo para troca de dados**:  
  Por padrão, este campo está vazio. No entanto, é recomendável inserir o nome do seu computador aqui. Para fazer isso, pressione o ícone ![Herde Software: Criar nova acoplamento de tecnologia](/icons/arrow-down.png "Herde: Criar acoplamento de tecnologia") `Seta para baixo` no final direito do campo suspenso. O nome do seu computador será determinado e exibido para seleção na lista suspensa. Uma vez que o campo esteja preenchido com o nome do seu computador e esta configuração esteja armazenada, a troca de dados só poderá ser acionada a partir do seu computador a partir de agora.

- **Executar no caminho**:
  Por favor, insira `%LOCALAPPDATA%\Urban\VitalControl\Synchronizer` neste campo de entrada. Este é o caminho absoluto para o programa `VitalControl Synchronizer` (ou mais especificamente para o arquivo `vcsynchronizer.exe`). Se o diretório de destino para este programa foi alterado durante a [instalação do VCSynchronizer](../../vcsynchronizer/installation), por favor, insira o diretório de destino selecionado aqui.


- **Program HerdePlus 🡒 Tecnologia**:  
  Este campo de entrada deve ser preenchido com o valor `vc_imp.bat`. O arquivo batch correspondente especifica a sequência de operações durante a importação de dados.

- **Tecnologia 🡒 Programa HerdePlus**:  
  Este campo de entrada deve ser preenchido com o valor `vc_exp.bat`. O arquivo batch correspondente especifica a sequência de operações durante a exportação de dados.

### Categoria `Dados do Animal` ➋ {#category-animal-data-}

Outros ajustes devem ser feitos na categoria 'Dados do animal' ➋ para que a troca de dados funcione completamente.

- **Número do animal**:  
  Esta configuração determina qual ID os animais recebem para exibição no dispositivo VitalControl:
  - Se você atribuiu IDs curtos (`Número do curral`, 2 a 6 dígitos) aos seus animais, você deve selecionar o valor 'Número do curral' aqui: o ID exibido de um animal no VitalControl corresponderá ao número do curral atribuído ao animal.
  - Se você **não** atribuiu números de ID curtos aos seus animais - isso é comum no setor de engorda, por exemplo - então você deve selecionar o valor `Número da etiqueta (5 dígitos)` aqui. O ID exibido de um animal no dispositivo VitalControl corresponderá aos últimos 5 dígitos do ID impresso na etiqueta amarela da orelha do animal.
  
<br>

- **Número do transmissor**:  
  Esta configuração determina o número esperado para um animal durante a leitura RFID:  
  - Se você colocar um colar com um transponder nos seus animais ou colocar um transponder na orelha dos seus animais - por exemplo, para identificação no alimentador automático -, você deve selecionar o valor 'Transponder' aqui.
  - Se seus animais ou bezerros carregam etiquetas eletrônicas na orelha codificadas com o número de identificação nacional oficial de 15 dígitos do seu animal, que servirá para a identificação do animal durante toda a sua vida, você deve selecionar o valor 'Número da etiqueta (15 dígitos)` aqui.

<br>

- **Idade mínima para transferência**:  
  Se `0` for inserido como valor para este campo de entrada, **todos os animais** serão transferidos para o dispositivo VitalControl, independentemente da idade. Um valor maior que `0` define a idade mínima (em dias) para os animais serem transferidos. Por exemplo, se **apenas vacas** devem ser transferidas para o dispositivo, um valor de 600 dias (= 20 meses) deve ser inserido aqui como a idade mínima.

### Categoria `Locais` ➌ {#category-locations-}

Use esta categoria para excluir animais em determinados locais da transferência de dados para o dispositivo. Para fazer isso, remova a marca de seleção dos locais para os quais você **não** deseja transferir os animais alojados lá para o dispositivo.

### Categoria `Saindo` ➍ {#category-leaving-}

Marque a opção 'Saindo no HERDEplus' aqui. Desta forma, você especifica que os animais que saíram do rebanho também são excluídos do dispositivo VitalControl durante a sincronização.
Também marque a opção 'Não existe no estoque'. Desta forma, você especifica que os animais no VitalControl que não são conhecidos pelo software `Herde` são excluídos do VitalControl durante a sincronização.

## Configuração: Configurações específicas da tecnologia {#configuration-technology-specific-settings}

Em seguida, clique na guia `Configurações específicas da tecnologia` para determinar o escopo da troca de dados. Recomenda-se marcar todas as caixas de seleção listadas lá, exceto a caixa de seleção `Salvar arquivo de importação após o processamento`. Esta última caixa de seleção é destinada a fins de diagnóstico e deve ser selecionada apenas se solicitado pelo pessoal de serviço.

- **Idade máxima para transferência**:  
  Se `0` for inserido aqui como valor, **todos os animais** serão transferidos para o dispositivo VitalControl, independentemente da idade. Um valor maior que `0` define a idade máxima (em dias) para os animais a serem transferidos. Se, por exemplo, **apenas bezerros** devem ser transferidos para o dispositivo, um valor de 90 dias (= 3 meses) deve ser inserido aqui como a idade máxima.

   ![Herde Software: Configuração Troca de dados](../screenshots/technology-specific-settings.png "Troca de dados: configurações específicas").

## Salvar configurações de troca de dados {#save-data-exchange-settings}

Pressione a tecla `Salvar (F2)` depois de configurar todos os parâmetros de configuração adequadamente. O conjunto de parâmetros para troca de dados com o dispositivo VitalControl agora está salvo e pronto para uso.  
Realize uma [troca de dados](../data-exchange/) agora para verificar se as configurações estipuladas são válidas para que você possa trocar dados com sucesso para e do dispositivo VitalControl.


