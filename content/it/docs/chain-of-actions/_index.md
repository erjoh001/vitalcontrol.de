---
title: "Catena di azioni: configurazione e utilizzo"
linkTitle: "Catena di azioni"
weight: 15
date: 2023-07-28T13:25:28+02:00
draft: false
slug: chain-of-actions
description: >
 Eseguire più azioni sugli animali in successione
categories: [Catena di azioni]
tags: [Catena di azioni, Azioni]
translationKey: action-chain
---
## Catena di azioni

La catena di azioni ti permette di eseguire automaticamente diverse azioni per un animale una dopo l'altra. Ad esempio, puoi selezionare le azioni `Misura temperatura` e `Valutazione`. Se poi esegui la catena di azioni, puoi prima misurare la temperatura del tuo animale e registrare immediatamente la valutazione subito dopo.

### Utilizzare la catena di azioni

1. Nella schermata principale del tuo dispositivo VitalControl, seleziona la voce di menu &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Catena di azioni" />&nbsp; `Catena di azioni` e premi il pulsante `OK`.

2. Scansiona un animale utilizzando il transponder oppure conferma con `OK` e usa i tasti freccia △ ▽ ◁ ▷ per inserire l'ID dell'animale desiderato.

3. La catena di azioni viene ora eseguita. Non appena tutte le azioni nella catena di azioni sono state eseguite, è possibile selezionare direttamente il prossimo animale.

{{< tabpane >}}
{{< tab header="Utilizzare la catena di azioni:" text=true disabled=true />}}
{{% tab header="Scansione transponder" text=true %}}
![VitalControl: Menu catena di azioni](images/chainofactions-scan.png "Catena di azioni")
{{% /tab %}}
{{% tab header="Selezione manuale dalla lista" text=true %}}
![VitalControl: Menu catena di azioni](images/chainofactions.png "Catena di azioni")
{{% /tab %}}
{{< /tabpane >}}

### Configurare la catena di azioni

1. Nella schermata principale del tuo dispositivo VitalControl, seleziona la voce di menu &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Catena di azioni" />&nbsp; `Catena di azioni` e premi il pulsante `OK`.

2. Usa il pulsante `F2` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Aktionskette" />&nbsp; (`impostazioni`).

3. Viene visualizzata una schermata sovrapposta. Usa i tasti freccia △ ▽ per scegliere tra le azioni elencate 1 - 4 (puoi eseguire fino a quattro azioni di seguito). Usa i tasti freccia ◁ ▷ per selezionare l'azione desiderata per ciascuna azione. Salva le impostazioni con il tasto `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Salva e torna indietro" />&nbsp;.


4. Se desideri resettare l'intera catena di azioni, seleziona l'opzione `Reset chain of actions` nel sottomenu utilizzando i tasti freccia △ ▽ e conferma con `OK`.

    ![VitalControl: Menu catena di azioni](images/setchainofactions.png "Imposta catena di azioni")

{{% alert title="Suggerimento" %}}
All'interno delle singole azioni hai le stesse opzioni di impostazione descritte nel capitolo [Azioni](../actions) per ciascuna azione individuale.
{{% /alert %}}

{{% alert title="Suggerimento" %}}
I simboli nella schermata iniziale della catena di azioni mostrano quali azioni hai impostato e in quale ordine.
{{% /alert %}}
