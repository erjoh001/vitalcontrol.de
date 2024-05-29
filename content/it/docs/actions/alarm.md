---
title: Allarme
linkTitle: Allarme
slug: alarm
weight: 60
description: >
 Aggiungi e rimuovi animali dalla lista di allarme.
date: 2023-07-26
categories: [Azioni]
tags: [Azioni, Allarme]
translationKey: actions/alarm
---

## Allerta {#alert}

Con l'azione `{{<T "Alarm" >}}` puoi mettere gli animali nella lista di allarme o rimuoverli da essa. La lista di allarme ti aiuta a trovare animali sospetti più rapidamente e facilmente, rendendo più semplici i controlli di routine quotidiani. Per applicare l'azione `{{<T "Alarm" >}}`, procedi come segue:

1. Nella schermata principale del tuo dispositivo VitalControl, seleziona la voce di menu `{{<T "Actions" >}}` &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Azioni" /> e premi il pulsante `{{<T "Ok" >}}`.

2. Scansiona un animale utilizzando il transponder o seleziona un animale dalla lista. Conferma con `{{<T "Ok" >}}` e seleziona un animale con i tasti freccia △ ▽. Conferma con `{{<T "Ok" >}}`.

3. Si apre un sottomenu con le azioni per l'animale. Usa i tasti freccia ◁ ▷ △ ▽ per selezionare l'azione &nbsp;<img src="/icons/actions/alarm.svg" width="35" align="bottom" alt="Aggiungi allarme" /> `{{<T "Alarm" >}}` e conferma con `{{<T "Ok" >}}`.

4. Appare una notifica che l'animale è stato aggiunto con successo alla lista di allarme e la visualizzazione dell'animale nell'intestazione cambia. Il simbolo &nbsp;<img src="/icons/header/animal-in-alarm.svg" width="32" align="bottom" alt="Animale in allarme" /> indica che questo animale è nella lista di allarme.

5. Puoi rimuovere l'animale dalla lista di allarme applicando nuovamente l'azione &nbsp;<img src="/icons/actions/alarm-minus.svg" width="35" align="bottom" alt="Rimuovi allarme" /> `{{<T "Alarm" >}}`. Se aggiungi o rimuovi l'animale dalla lista di allarme utilizzando l'azione `{{<T "Alarm" >}}`, ciò è indicato con un piccolo segno + o -.

{{< tabpane >}}
{{< tab header="Allerta:" text=true disabled=true />}}
{{% tab header="Scansione transponder" text=true %}}
![VitalControl: Menu Azioni Allarme](../images/alarm-scan.png "Allarme")
{{% /tab %}}
{{% tab header="Selezione manuale dalla lista" text=true %}}
![VitalControl: Menu Azioni Allarme](../images/alarm.png "Allarme")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Suggerimento" %}}
Se questa azione non è disponibile, probabilmente è stata disattivata! Attiva l'azione nel menu [impostazioni azioni](../settings/). In alternativa, reimpostare tutte le azioni riporterà in primo piano quell'azione.
{{% /alert %}}


