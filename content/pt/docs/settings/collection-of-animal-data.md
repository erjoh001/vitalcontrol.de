---
title: "Aquisição de dados"
linkTitle: "Aquisição de dados"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: data-acquisition
description: >
 Armazenando configurações relevantes para a coleta de dados de animais
categories: [settings]
tags: [settings, data acquisition]
translationKey: settings/data-acquisition
maphilight: true
---
## Visão geral {#overview}

O gráfico a seguir lista as configurações disponíveis relacionadas à gravação de dados de animais:

<img src="../images/animaldataacquisition.png" alt="Aquisição de dados de animais" title="Aquisição de dados de animais" usemap="#workmap-overview" class="maphilight" />

<map name="workmap-overview">
  <area shape="rect" coords="3,40,239,80" alt="Registro de peso" title="Submenu: Configurações para registro de peso&#10;Clique do mouse: abrir documentação" href="#settings-weight-recording">
  <area shape="rect" coords="3,80,239,160" alt="Modo de avaliação de animais" title="Definir o modo de avaliação de animais&#10;Clique do mouse: abrir documentação" href="#mode-of-animal-rating">
  <area shape="rect" coords="3,160,239,240" alt="Período de controle de vacas frescas" title="Definir o período de controle para vacas frescas&#10;Clique do mouse: abrir documentação" href="#control-period-of-fresh-cows">

  <area shape="rect" coords="2,282,125,318" alt="Voltar" title="Voltar um nível" href="/pt/docs/settings/">
</map>

{{% alert title="Dica" %}}
Mova o ponteiro do mouse sobre um símbolo no gráfico abaixo e deixe-o descansar por um momento. Um tooltip aparecerá, apresentando informações sobre a respectiva configuração. Se você clicar em uma das linhas, será encaminhado para uma descrição da respectiva configuração.
{{% /alert %}}

## Configurações *Registro de peso* {#settings-weight-recording}

O gráfico a seguir lista as configurações disponíveis relacionadas ao registro de peso dos animais:

<img src="../images/weightrecording.png" alt="Itens do submenu configurações para registro de peso" title="Configurações de registro de peso" usemap="#workmap-weight" class="maphilight" />

<map name="workmap-weight">
  <area shape="rect" coords="1,40,230,199" alt="Valores limite avaliação ganho de peso diário" title="Definir os valores limite para a avaliação do ganho de peso diário&#10;Clique do mouse: abrir documentação" href="#assessment-of-daily-weight-gain-threshold-values">
  <area shape="rect" coords="1,200,230,280" alt="Peso ao nascer" title="Definir o peso ao nascer proposto ao registrar um novo animal&#10;Clique do mouse: abrir documentação" href="#birth-weight">
  <area shape="rect" coords="1,280,230,360" alt="Ganho de peso diário médio" title="Definir o ganho de peso diário médio usado ao estimar o peso dos animais&#10;Clique do mouse: abrir documentação" href="#average-daily-weight-gain">
  <area shape="rect" coords="1,360,230,440" alt="Precisão do registro de peso" title="Definir a precisão do registro de peso&#10;Clique do mouse: abrir documentação" href="#precision-of-weight-recording">
</map>

### Avaliação do ganho de peso diário: Valores de limiar {#assessment-of-daily-weight-gain-threshold-values}

{{% alert title="Dica" %}}
O campo vermelho mostra a área de "ganho de peso crítico muito baixo". O campo amarelo mostra a área de "ganho de peso subótimo".
{{% /alert %}}

Para ajustar os valores de limiar para a avaliação do ganho de peso diário, proceda da seguinte forma:

1. Na tela principal do seu dispositivo VitalControl, selecione o item do menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Configurações" /> `{{<T "Settings" >}}` e pressione o botão `{{<T "Ok" >}}`.

2. Um submenu será aberto no qual várias configurações são exibidas. Use as teclas de seta △ ▽ para selecionar `{{<T "DataAcquisition" >}}`. Confirme com `{{<T "Ok" >}}`.

3. Outro submenu será aberto no qual você pode usar as teclas de seta △ ▽ para alternar entre os campos de configuração para `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` e `{{<T "ControlPeriodFreshCows" >}}`. Selecione `{{<T "WeightRecording" >}}` e confirme com `{{<T "Ok" >}}`.

4. O campo de preferência `{{<T "DailyWeightGain" >}}` é automaticamente selecionado. Use as teclas de seta ◁ ▷ para selecionar a espécie animal desejada. Confirme com `{{<T "Ok" >}}`. Alternativamente, você pode usar o ícone de lápis com a tecla <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Editar" /> `F3` para ir diretamente para a edição das áreas vermelha e amarela.

5. Use as teclas de seta △ ▽ para selecionar o aumento desejado "maior que" ou "igual a" g/dia na área vermelha e amarela. Use as teclas `F2`/`F3` 🡄 🡆 ou as teclas de seta ◁ ▷ para selecionar entre as áreas vermelha e amarela.

6. Depois de definir o aumento desejado "maior que" ou "igual a" g/dia, use a tecla `F1` <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Sair" /> ou confirme com `{{<T "Ok" >}}` para voltar para `{{<T "DailyWeightGain" >}}`.

    ![VitalControl: configurações do menu ganho de peso diário](../images/dailyweightgain.png "Ganho de peso diário")

### Peso ao nascer {#birth-weight}

O dispositivo usa o peso ao nascer armazenado aqui nas configurações como valor padrão ao criar novos animais. Para poder selecionar o peso ao nascer individual de um animal recém-nascido mais rapidamente, pode ser necessário ajustar esse valor padrão para sua fazenda. Para ajustar o valor para o `{{<T "BirthWeight" >}}`, proceda da seguinte forma:

1. Na tela principal do seu dispositivo VitalControl, selecione o item do menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` e pressione o botão `{{<T "Ok" >}}`.

2. Um submenu será aberto no qual várias configurações são exibidas. Use as teclas de seta △ ▽ para selecionar `{{<T "DataAcquisition" >}}`. Confirme com `{{<T "Ok" >}}`.

3. Outro submenu será aberto no qual você pode usar as teclas de seta △ ▽ para alternar entre os campos de configuração para `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` e `{{<T "ControlPeriodFreshCows" >}}`. Selecione `{{<T "WeightRecording" >}}` e confirme com `{{<T "Ok" >}}`.

4. Use as teclas de seta △ ▽ para selecionar o campo de configuração `{{<T "BirthWeight" >}}` e use as teclas de seta ◁ ▷ para definir o peso de nascimento desejado. O dispositivo agora usa o peso de nascimento definido aqui como padrão ao criar novos animais. O peso de nascimento individual de um animal recém-nascido pode então ser selecionado mais rapidamente.

    ![VitalControl: menu settings birth weight](../images/birthweight.png "Birth weight")

{{% alert title="Aviso" color="warning" %}}
O peso de nascimento padrão é apenas um valor aproximado, que deve ser ajustado individualmente ao criar um novo animal.
Se você não quiser fazer esse ajuste ou se criar animais automaticamente [em segundo plano](../animal-registration/#auto-registration), nenhum peso de nascimento deve ser consultado ou salvo ao criar um novo animal. O peso de nascimento não deve ser consultado ou salvo ao criar um novo animal. Isso pode ser definido nas configurações para [registro de animais](../animal-registration/#set-recorded-weights).
{{% /alert %}}

{{% alert title="Valores padrão dos pesos de nascimento:" %}}

| Tipo de novo animal           |  Cordeiro      | Bezerro       |
|-------------------------------|----------------|---------------| 
| Valor padrão *peso de nascimento*: | 4 kg           | 40 kg         |
| Faixa de valores:             | 1,0 a 99 kg    | 1,0 a 99 kg   |
{{% /alert %}}

### Ganho médio de peso diário {#average-daily-weight-gain}

{{% alert title="Explicação" %}}
Ao [pesar](../../actions/record-weight/) um animal, o aumento diário definido é usado para o cálculo do valor de peso sugerido durante a pesagem do animal. Se o valor de peso sugerido for muito baixo ou muito alto para a maioria dos animais a serem pesados, você deve ajustar o valor definido para baixo ou para cima, respectivamente, para reduzir o tempo necessário para ajustar o valor do peso com as teclas de seta.
{{% /alert %}}

Para definir o `{{<T "AverageDailyWeightGain" >}}` usado no cálculo do peso aproximado de um animal, proceda da seguinte forma.

1. Na tela principal do seu dispositivo VitalControl, selecione o item do menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` e pressione o botão `{{<T "Ok" >}}`.

2. Um submenu será aberto no qual várias configurações são exibidas. Use as teclas de seta △ ▽ para selecionar `{{<T "DataAcquisition" >}}`. Confirme com `{{<T "Ok" >}}`.

3. Outro submenu será aberto no qual você pode usar as teclas de seta △ ▽ para alternar entre os campos de configuração para `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` e `{{<T "ControlPeriodFreshCows" >}}`. Selecione `{{<T "WeightRecording" >}}` e confirme com `{{<T "Ok" >}}`.

4. Use as teclas de seta △ ▽ para selecionar o campo de configuração `{{<T "AverageDailyWeightGain" >}}`. Use as teclas de seta ◁ ▷ para definir o aumento diário médio desejado g/dia. O dispositivo agora usa o ganho diário médio definido aqui como padrão para o ganho diário esperado dos animais.

    ![VitalControl: menu settings average daily weight gain](../images/averagedailyweightgain.png "Average daily weight gain")

### Precisão da gravação de peso {#precision-of-weight-recording}

{{% alert title="Explanation" %}}
Dependendo do caso de uso e da espécie animal (*cordeiro*, *bezerro*, *vaca*), existem diferentes requisitos em relação à resolução do valor do peso a ser registrado (precisão de *10 g*, *100 g* ou *1 kg*). Para atender a esses requisitos, é necessário usar a configuração de *Máxima precisão*.
{{% /alert %}}

A tabela abaixo mostra a precisão da gravação de peso dependendo da faixa de peso e da configuração estipulada para *Máxima precisão*:

| Configuração *Máxima precisão*:            |  10 g | 100 g | 1 kg |
|--------------------------------------------|-------|-------|------|
| Precisão na faixa de *0 a 9,9 kg*:         | 10 g  | 100 g | 1 kg |
| Precisão na faixa de *10 a 49,9 kg*:       | 100 g | 100 g | 1 kg |
| Precisão na faixa de *50 a 99,9 kg*:       | 500 g | 500 g | 1 kg |
| Precisão para valores *≥ 100 kg*:          | 1 kg  | 1 kg  | 1 kg |

Para definir a precisão máxima ao registrar pesos de animais com seu dispositivo, proceda da seguinte forma:

1. Na tela principal do seu dispositivo VitalControl, selecione o item do menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` e pressione o botão `{{<T "Ok" >}}`.

2. Um submenu será aberto no qual várias configurações são exibidas. Use as teclas de seta △ ▽ para selecionar `{{<T "DataAcquisition" >}}`. Confirme com `{{<T "Ok" >}}`.

3. Outro submenu será aberto no qual você pode usar as teclas de seta △ ▽ para alternar entre os campos de configuração para `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` e `{{<T "ControlPeriodFreshCows" >}}`. Selecione `{{<T "WeightRecording" >}}` e confirme com `{{<T "Ok" >}}`.

4. Use as teclas de seta △ ▽ para selecionar o campo de configuração `{{<T "MaximumPrecision" >}}`. Use as teclas de seta ◁ ▷ para definir a precisão máxima desejada. A precisão do registro de peso no dispositivo agora segue a configuração estipulada.

    ![VitalControl: caminho do menu configurações precisão máxima registro de peso](../images/precisionweightrecording.png "Estipular precisão máxima do registro de peso.")

<br>
Salve as configurações e retorne ao menu principal `{{<T "DataAcquisition" >}}` pressionando a tecla `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.

## Modo de avaliação de animais {#mode-of-animal-rating}

{{% alert title="Explicação" %}}
No modo simples, apenas a condição geral é consultada durante a avaliação do animal (verde/amarelo/vermelho). Na avaliação estendida, 4 categorias de avaliação são consultadas: condição geral, consumo de ração, diarreia e doença respiratória.
{{% /alert %}}

Para definir o `{{<T "RatingAnimals" >}}` no seu dispositivo, proceda da seguinte forma.

1. Na tela principal do seu dispositivo VitalControl, selecione o item do menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` e pressione o botão `{{<T "Ok" >}}`.

2. Um submenu será aberto no qual várias configurações são exibidas. Use as teclas de seta △ ▽ para selecionar `{{<T "DataAcquisition" >}}`. Confirme com `{{<T "Ok" >}}`.

3. Outro submenu é aberto no qual você pode usar as teclas de seta △ ▽ para alternar entre os campos de configuração para `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` e `{{<T "ControlPeriodFreshCows" >}}`. Selecione `{{<T "RatingAnimals" >}}` e confirme com `{{<T "Ok" >}}`.

4. Use as teclas de seta ◁ ▷ para definir a classificação desejada dos animais.

    ![VitalControl: menu de configurações classificação média dos animais](../images/raitingofanimals.png "Classificação dos animais")

## Período de controle de vacas recém-paridas {#control-period-of-fresh-cows}

{{% alert title="Explicação" %}}
Ao gerenciar vacas recém-paridas, verificar os animais diariamente por vários dias após o parto, incluindo a medição da temperatura, é considerado uma prática recomendada. A duração desse período de controle varia consideravelmente de fazenda para fazenda. Por essa razão, a duração do período de controle pode ser definida para um valor entre 3 e 14 dias nas configurações do VitalControl. O valor definido para o período de controle de vacas recém-paridas determina o número de colunas do gráfico de colunas exibido para cada animal na [lista de vacas recém-paridas](../../lists/fresh-cows/).
{{% /alert %}}

Para definir a duração do período de controle para suas vacas recém-paridas, proceda da seguinte forma:

1. Na tela principal do seu dispositivo VitalControl, selecione o item do menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Configurações" /> `{{<T "Settings" >}}` e pressione o botão `{{<T "Ok" >}}`.

2. Um submenu é aberto no qual várias configurações são exibidas. Use as teclas de seta △ ▽ para selecionar `{{<T "DataAcquisition" >}}`. Confirme com `{{<T "Ok" >}}`.

3. Outro submenu é aberto no qual você pode usar as teclas de seta △ ▽ para alternar entre os campos de configuração para `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` e `{{<T "ControlPeriodFreshCows" >}}`. Selecione `{{<T "ControlPeriodFreshCows" >}}` e confirme com `{{<T "Ok" >}}`.

4. Use as teclas de seta ◁ ▷ para definir a duração desejada do período de controle em dias pós-parto.

    ![VitalControl: menu de configurações período de controle vacas recém-paridas](../images/controlperiodfreshcows.png "Período de controle vacas recém-paridas")

<br>

Salve as configurações e retorne ao menu principal <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` pressionando a tecla `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.
