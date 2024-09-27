---
title: Alarme
linkTitle: Alarme
slug: alarm
weight: 60
description: >
 Adicionar e remover animais da lista de alarme.
date: 2023-07-26
categories: [Ações]
tags: [Ações, Alarme]
translationKey: actions/alarm
---

## Alerta {#alert}

Com a ação `{{<T "Alarm" >}}` você coloca animais na lista de alarme ou os remove dela. A lista de alarme ajuda você a encontrar animais conspícuos mais rápida e facilmente, facilitando suas verificações diárias de rotina. Para aplicar a ação `{{<T "Alarm" >}}`, proceda da seguinte forma:

1. Na tela principal do seu dispositivo VitalControl, selecione o item de menu `{{<T "Actions" >}}` &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> e pressione o botão `{{<T "Ok" >}}`.

2. Escaneie um animal usando o transponder ou selecione um animal da lista. Confirme com `{{<T "Ok" >}}` e selecione um animal com as teclas de seta △ ▽. Confirme com `{{<T "Ok" >}}`.

3. Um submenu com as ações do animal será aberto. Use as teclas de seta ◁ ▷ △ ▽ para selecionar a ação &nbsp;<img src="/icons/actions/alarm.svg" width="35" align="bottom" alt="Add alarm" /> `{{<T "Alarm" >}}` e confirme com `{{<T "Ok" >}}`.

4. Uma notificação aparecerá informando que o animal foi adicionado com sucesso à lista de alarme e a exibição do animal no cabeçalho mudará. O símbolo &nbsp;<img src="/icons/header/animal-in-alarm.svg" width="32" align="bottom" alt="Animal in alarm" /> indica que este animal está na lista de alarme.

5. Você pode remover o animal da lista de alarme novamente aplicando a ação &nbsp;<img src="/icons/actions/alarm-minus.svg" width="35" align="bottom" alt="Remove alarm" /> `{{<T "Alarm" >}}` novamente. Se você adiciona ou remove o animal da lista de alarme usando a ação `{{<T "Alarm" >}}` é indicado com um pequeno sinal de + ou -.

{{< tabpane >}}
{{< tab header="Alert:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Actions Alarm](../images/alarm-scan.png "Alarm")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Actions Alarm](../images/alarm.png "Alarm")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Dica" %}}
Se esta ação não estiver disponível, provavelmente foi desativada! Ative a ação no menu de [configurações de ação](../setting/). Alternativamente, redefinir todas as ações trará essa ação de volta.
{{% /alert %}}
