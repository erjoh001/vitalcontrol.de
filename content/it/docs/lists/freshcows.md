---
title: "Elenco delle vacche fresche"
linkTitle: "Elenco delle vacche fresche"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: fresh-cows
description: >
  Facilita il controllo delle tue vacche fresche.
categories: [Lists]
tags: [Lists, fresh cow]
translationKey: lists/fresh-cows
---
### Elenco delle vacche fresche {#fresh-cows-list}

{{% alert title="Spiegazione" %}}
Quando si gestiscono le vacche fresche, controllare gli animali quotidianamente per diversi giorni dopo la nascita è considerata una pratica ottimale. L'elenco delle vacche fresche supporta e facilita questo controllo, soprattutto in termini di registrazione della temperatura. Per ogni animale, viene mostrato un grafico a colonne per tutti i giorni del periodo di controllo, ogni giorno del periodo di controllo è rappresentato da una barra verticale. A seconda del colore della barra (verde, giallo o rosso), è possibile vedere se è stata misurata una temperatura normale, elevata o criticamente elevata in quel giorno per l'animale rispettivo.
{{% /alert %}}

Le vacche vengono inserite nell'elenco delle vacche fresche immediatamente dopo che il loro parto è stato registrato. Rimangono in quell'elenco per un certo periodo di tempo, la durata di questo periodo (in giorni) può essere regolata nelle [impostazioni](../../settings/data-acquisition/#control-period-of-fresh-cows)).
 Le seguenti azioni sono disponibili per questo elenco:

- [Menu azioni completo](../alarm/#full-action-menu)
- [Dati dell'animale](../alarm/#animal-data)
- [Misura la temperatura](../alarm/#take-temperature)
- [Attiva/disattiva stato di allarme](#toggle-alarm-status)
- [Attiva/disattiva stato di monitoraggio](#toggle-watch-status)
- [Nascondi vacche misurate](#hide-measured-cows)
- [Cerca animale](../alarm/#search-animal)
- [Imposta filtro](../alarm/#set-filter)

{{% alert title="Suggerimento" %}}
Alcune azioni devono essere eseguite nello stesso modo come nell'[elenco degli allarmi](../alarm). Queste non sono spiegate qui. Esegui i passaggi preliminari e utilizza il link dell'azione rispettiva per accedere alle istruzioni.
{{% /alert %}}

### Passaggi Preliminari {#preliminary-steps}

1. Seleziona l'elemento del menu <img src="/icons/main/lists.svg" width="25" align="bottom" alt="Lists" /> `{{<T "Lists" >}}` nella schermata principale del tuo dispositivo VitalControl e premi il pulsante `{{<T "Ok" >}}`.

2. Si apre un sottomenu in cui vengono visualizzati vari elenchi. Seleziona l'elenco `{{<T "FreshCows" >}}` <img src="/icons/lists/freshcows.svg" width="30" align="bottom" alt="Fresh-cows" />. Conferma con `{{<T "Ok" >}}`.

3. L'elenco delle mucche fresche è ora aperto.

   ![VitalControl Lists Fresh cows list](../images/firststeps4.png "Fresh cow list")

### Attivare/disattivare lo stato di allarme {#toggle-alarm-status}

1. Completa i passaggi preliminari.

2. Usa il tasto `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; per richiamare un menu popup che elenca le azioni possibili quando si preme il tasto `{{<T "Ok" >}}`. Usa i tasti freccia △ ▽ per evidenziare l'azione `{{<T "ToggleAlarmStatus" >}}` e seleziona questa opzione premendo il pulsante centrale `{{<T "Ok" >}}` o il tasto `F3` `{{<T "Ok" >}}`.

3. All'interno dell'elenco delle mucche fresche, usa i tasti freccia △ ▽ per selezionare l'animale desiderato e conferma con `{{<T "Ok" >}}`. In alternativa, puoi cercare un animale. Usa il pulsante `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> e usa i tasti freccia ◁ ▷ △ ▽ per selezionare le cifre desiderate. Infine, conferma con `{{<T "Ok" >}}`.

4. L'animale è ora aggiunto o rimosso dall'elenco degli allarmi a seconda del suo stato iniziale.

   ![VitalControl Lists Fresh cows list](../images/togglealarmstatus.png "Toggle alarm status")

### Attivare/disattivare lo stato di sorveglianza {#toggle-watch-status}

1. Completa i passaggi preliminari.

2. Usa il tasto `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; per richiamare un menu popup che elenca le azioni possibili quando si preme il tasto `{{<T "Ok" >}}`. Usa i tasti freccia △ ▽ per evidenziare l'azione `{{<T "ToggleWatchStatus" >}}` e seleziona questa opzione premendo il pulsante centrale `{{<T "Ok" >}}` o il tasto `F3` `{{<T "Ok" >}}`.

3. All'interno dell'elenco delle mucche fresche, usa i tasti freccia △ ▽ per selezionare l'animale desiderato e conferma con `{{<T "Ok" >}}`. In alternativa, puoi cercare un animale. Usa il pulsante `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> e usa i tasti freccia ◁ ▷ △ ▽ per selezionare le cifre desiderate. Infine, conferma con `{{<T "Ok" >}}`.

4. L'animale è ora aggiunto o rimosso dall'elenco di sorveglianza a seconda del suo stato iniziale.


   ![VitalControl Lists Fresh cows list](../images/togglewatchstatus.png "Toggle watch status")

### Nascondi vacche misurate {#hide-measured-cows}

Se questa funzione è attivata, gli animali per i quali è stata effettuata una misurazione della temperatura sono nascosti nella lista delle vacche asciutte. Se questa funzione non è attivata, gli animali rimangono visibili nella lista.

1. Completa i passaggi preliminari.

2. Usa il tasto `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Actions" />&nbsp; per richiamare un menu popup che elenca varie opzioni. Usa i tasti freccia △ ▽ per evidenziare l'opzione `{{<T "HideMeasuredCows" >}}` e attiva/disattiva questa opzione premendo il pulsante centrale `{{<T "Ok" >}}` o il tasto `F3` `{{<T "Ok" >}}`.

3. All'interno della lista delle vacche fresche, usa i tasti freccia △ ▽ per selezionare l'animale desiderato e conferma con `{{<T "Ok" >}}`. In alternativa, puoi cercare un animale. Usa il pulsante `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> e usa i tasti freccia ◁ ▷ △ ▽ per selezionare le cifre desiderate. Infine, conferma con `{{<T "Ok" >}}`.

4. La funzione `{{<T "HideMeasuredCows" >}}` è ora attivata. L'attivazione è indicata dalla spunta nella casella.

   ![VitalControl Lists Fresh cows list](../images/hidemeasuredcows.png "Hide measured cows")
