---
title: Deregistrare animale
linkTitle: Deregistrare
slug: unregister
weight: 100
description: >
 Deregistrare un animale
date: 2023-07-26
categories: [Azioni]
tags: [Azioni, Deregistrare]
translationKey: actions/unregister
---
{{% alert title="Avviso" color="warning" %}}
Non appena elimini il record dei dati dell'animale, non sarà più disponibile per scopi di valutazione! Se deregistri un animale, ma vuoi ad esempio valutare nuovamente lo sviluppo dell'animale in seguito, devi conservare il record dei dati dell'animale!
{{% /alert %}}

## Deregistrare {#unregister}

L'azione `{{<T "Unregister" >}}` ti permette di deregistrare un animale non appena viene spostato. Per deregistrare un animale, procedi come segue:

1. Nella schermata principale del tuo dispositivo VitalControl, seleziona l'elemento del menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Azioni" /> `{{<T "Actions" >}}` e premi il pulsante `{{<T "Ok" >}}`.

2. Scansiona un animale utilizzando il transponder o seleziona un animale dall'elenco. Conferma con `{{<T "Ok" >}}` e seleziona un animale con i tasti freccia △ ▽. Conferma con `{{<T "Ok" >}}`.

3. Si apre un sottomenu con le azioni dell'animale. Usa i tasti freccia ◁ ▷ △ ▽ per selezionare l'azione &nbsp;<img src="/icons/actions/unregister.svg" width="33" align="bottom" alt="Deregistrare" /> `{{<T "Unregister" >}}` e conferma con `{{<T "Ok" >}}`.

4. Si apre un altro sottomenu in cui puoi salvare varie impostazioni. Usa i tasti freccia △ ▽ per selezionare l'opzione di impostazione desiderata. Usa i tasti freccia ◁ ▷ per selezionare l'impostazione desiderata.

5. Usa il tasto `F3` `{{<T "Unregister" >}}` per deregistrare l'animale con le impostazioni specificate.

{{< tabpane >}}
{{< tab header="Deregistrare:" text=true disabled=true />}}
{{% tab header="Scansione transponder" text=true %}}
![VitalControl: Menu Azione Deregistrare](../images/unregister-scan.png "Deregistrare un animale")
{{% /tab %}}
{{% tab header="Selezione manuale dall'elenco" text=true %}}
![VitalControl: Menu Azione Deregistrare](../images/unregister.png "Deregistrare un animale")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Suggerimento" %}}
Se questa azione non è disponibile, probabilmente l'azione è stata disattivata! Attiva l'azione nel menu [impostazioni azioni](../settings/). In alternativa, reimpostare tutte le azioni riporterà in alto quell'azione.
{{% /alert %}}


