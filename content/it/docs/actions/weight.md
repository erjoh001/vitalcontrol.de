---
title: Registra peso
linkTitle: Peso
slug: record-weight
weight: 20
description: >
  Registra il peso dei tuoi animali.
date: 2023-07-26
categorie: [Azioni]
etichette: [Azioni, peso]
translationKey: actions/weight
---

## Registra peso {#record-weight}
Usa l'azione &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Pesatura" /> `{{<T "Weighing" >}}` per salvare il peso del tuo animale individualmente. Per fare questo, pesa i tuoi animali o stima il loro peso e inserisci questo valore nel dispositivo VitalControl. Questo ti permette di controllare lo sviluppo del peso dei tuoi animali e valutarli individualmente.

{{% alert title="Suggerimento" %}}
Se il peso medio devia molto in una direzione (troppo alto/troppo basso), il valore per l'aumento giornaliero dovrebbe essere aggiustato.
{{% /alert %}}

1. Nella schermata principale del tuo dispositivo VitalControl, seleziona l'elemento del menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Azioni" /> `{{<T "Actions" >}}` e premi il pulsante `{{<T "Ok" >}}`.

2. Scansiona un animale usando il transponder o seleziona un animale dalla lista. Conferma con `{{<T "Ok" >}}` e seleziona un animale con i tasti freccia △ ▽. Conferma con `{{<T "Ok" >}}`.

3. Si apre un sottomenu con le azioni dell'animale. Usa i tasti freccia ◁ ▷ per selezionare l'azione &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Pesatura" /> `{{<T "Weighing" >}}` e conferma con `{{<T "Ok" >}}`.

4. Si apre un menu con una specifica del peso. Aumenta o diminuisci questo con i tasti freccia △ ▽ e salva il risultato con il tasto `F3` <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Salva" /> o con il tasto `{{<T "Ok" >}}`.

{{< tabpane >}}
{{< tab header="Registra peso:" text=true disabled=true />}}
{{% tab header="Scansione transponder" text=true %}}
  ![VitalControl: Menu Azione Pesatura](../images/weighing-scan.png "Pesatura")
{{% /tab %}}
{{% tab header="Selezione manuale dalla lista" text=true %}}
  ![VitalControl: Menu Azione Pesatura](../images/weighing.png "Pesatura")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Suggerimento" %}}
Se questa azione non è disponibile, probabilmente l'azione è stata disattivata! Attiva l'azione nel menu [impostazioni azioni](../settings/). In alternativa, resettare tutte le azioni riporterà in alto quell'azione.
{{% /alert %}}


