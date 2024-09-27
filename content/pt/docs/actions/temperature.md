---
title: Medir temperatura
linkTitle: Temperatura
slug: measure-temperature
weight: 10
description: >
  Meça a febre em seus animais.
date: 2023-07-26
Categories: [Ações]
tags: [Ações, febre, temperatura]
translationKey: actions/temperature
---

## Medir febre {#measure-fever}

Use a ação de temperatura para medir a temperatura dos seus animais. Insira a ponta de medição retalmente até a profundidade de medição especificada (para grandes animais, todo o comprimento até a saliência, para pequenos ruminantes, aproximadamente 6 cm ou 2/3 da ponta de medição). O processo de medição ocorre automaticamente. Assim que o processo de medição estiver concluído, o dispositivo exibe a temperatura medida. A codificação por cores indica se a temperatura está na faixa verde, amarela ou vermelha. Você tem várias opções durante a campanha de Medir a temperatura:

- [Salvar o resultado](#save-result) para documentar a medição especificamente para o animal
- Colocar o animal na [Lista de Observação](#put-on-the-watch-list). Isso facilita a verificação das repetições, pois você pode chamar esses animais usando a 'lista de observação' e, assim, encontrar os animais notáveis mais facilmente.
- Ligar e desligar a [Iluminação do Local de Medição](#lighting-of-the-measurement-location-on-and-off)
- A [Repetir medição](#repeat-the-measurement)
- A [Cancelar Ação](#cancel-the-action)

{{% alert title="Dica" %}}
Se a temperatura estiver na área amarela ("elevada") ou na área vermelha ("febre"), o VitalControl coloca automaticamente o animal selecionado na lista de alarme. Correlacionando com outros dados, você pode monitorar continuamente a saúde do animal individual.
{{% /alert %}}

### Passos preliminares {#preliminary-steps}

1. Na tela principal do seu dispositivo VitalControl, selecione o item do menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` e pressione o botão `{{<T "Ok" >}}`.

2. Escaneie um animal usando o transponder ou selecione um animal da lista. Confirme com `{{<T "Ok" >}}` e selecione um animal com as teclas de seta △ ▽. Confirme com `{{<T "Ok" >}}`.

3. Um submenu com as ações do animal é aberto. A ação <img src="/icons/actions/temperature.svg" width="10" align="bottom" alt="Temperature" /> `{{<T "Temperature" >}}` é automaticamente selecionada. Confirme com `{{<T "Ok" >}}`.

4. Agora realize a medição. Assim que a medição for concluída, a temperatura será destacada em azul, verde, amarelo ou vermelho, dependendo do limite definido.

{{< tabpane >}}
{{< tab header="Preliminary steps:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Actions Preliminary steps](../images/firststeps-scan.png "Preliminary steps")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Actions Preliminary steps](../images/firststeps.png "Preliminary steps")
{{% /tab %}}
{{< /tabpane >}}

### Salvar resultado {#save-result}

1. Complete os passos preliminares.

2. Use a tecla `F3` <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> ou confirme com `{{<T "Ok" >}}` para salvar o resultado.

    ![VitalControl: Menu Actions Save results](../images/saveresults.png "Save results")

### Colocar na lista de observação {#put-on-the-watch-list}

1. Complete os passos preliminares.

2. Pressione o botão superior do meio `On/Off` <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.

3. Um menu popup é aberto no qual você pode selecionar entre os itens do menu `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` ou `{{<T "Flashlight" >}}`. Use as teclas de seta △ ▽ para selecionar `{{<T "AddToWatchList" >}}` e pressione a tecla central `{{<T "Ok" >}}` ou a tecla `F3` `{{<T "Ok" >}}`.

    ![VitalControl: Menu Actions Put on watch list](../images/watchlist.png "Put on watch list")

### Iluminação do local de medição ligar e desligar {#lighting-of-the-measurement-location-on-and-off}

1. Complete os passos preliminares.

2. Pressione o botão superior do meio `On/Off` <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.

3. Um menu pop-up é aberto no qual você pode selecionar entre os itens do menu `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` ou `{{<T "Flashlight" >}}`. Use as teclas de seta △ ▽ para selecionar `{{<T "Flashlight" >}}` e pressione a tecla central `{{<T "Ok" >}}` ou a tecla `F3` `{{<T "Ok" >}}`.

    ![VitalControl: Menu Actions Flashlight on off](../images/light.png "Flashlight on off")

### Repetir a medição {#repeat-the-measurement}

1. Complete os passos preliminares.

2. Pressione o botão superior do meio `On/Off` <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.

3. Um menu pop-up é aberto no qual você pode selecionar entre os itens do menu `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` ou `{{<T "Flashlight" >}}`. Use as teclas de seta △ ▽ para selecionar `{{<T "RepeatMeasurement" >}}` e pressione a tecla central `{{<T "Ok" >}}` ou a tecla `F3` `{{<T "Ok" >}}`.

    ![VitalControl: Menu Actions Light on off](../images/repeat.png "Light on off")

### Cancelar a ação {#cancel-the-action}

1. Complete os passos preliminares.

2. Pressione a tecla `F1` <img src="/icons/footer/cancel.svg" width="25" align="bottom" alt="Cancel" /> para cancelar a ação.

    ![VitalControl: Menu Actions Cancel the action](../images/saveresults.png "Cancel the action")

{{% alert title="Dica" %}}
Se esta ação não estiver disponível, provavelmente a ação foi desativada! Ative a ação no menu [configurações de ação](../setting/). Alternativamente, redefinir todas as ações trará essa ação de volta.
{{% /alert %}}
