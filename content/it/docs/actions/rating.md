---
title: Valutazione
linkTitle: Valutazione
slug: rating
weight: 30
description: >
 Valuta i tuoi animali.
date: 2023-07-26
categorie: [Azioni]
etichette: [Azioni, Valutazione]
translationKey: actions/animal-rating
---

## Valuta i tuoi animali {#rate-your-animals}

Quando valuti l'animale, documenti le condizioni dell'animale individuale. La condizione è determinata visivamente e registrata con l'aiuto del sistema a semaforo. Nella valutazione di base, viene registrata solo la condizione generale. Nella valutazione estesa, registri la condizione generale, l'assunzione di cibo, la consistenza delle feci e le malattie respiratorie. Puoi cambiare la modalità di valutazione direttamente nell'azione <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` oppure puoi definirla nelle [impostazioni](../../settings/data-acquisition/#mode-of-animal-rating).

{{% alert title="Suggerimento" %}}
Una valutazione gialla o rossa significa che VitalControl classifica l'animale come sospetto e lo inserisce nella lista degli allarmi.
{{% /alert %}}

1. Nella schermata principale del tuo dispositivo VitalControl, seleziona la voce di menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` e premi il pulsante `{{<T "Ok" >}}`.

2. Scansiona un animale utilizzando il transponder oppure seleziona un animale dall'elenco. Conferma con `{{<T "Ok" >}}` e seleziona un animale con i tasti freccia △ ▽. Conferma con `{{<T "Ok" >}}`.

3. Si apre un sottomenu con le azioni dell'animale. Usa i tasti freccia ◁ ▷ per selezionare l'azione <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` e conferma con `{{<T "Ok" >}}`.

4. Si apre il menu di valutazione. Se vuoi cambiare la modalità di valutazione, usa il pulsante `On/Off` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Chain-of-actions" />&nbsp; e i tasti freccia ◁ ▷. Con il tasto `F1` <img src="/icons/footer/exit.svg" width="24" align="bottom" alt="Back" />&nbsp; torni al menu di valutazione.

5. Usa i tasti freccia ◁ ▷ △ ▽ per selezionare uno stato e salvalo con il tasto `F3` <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> o il tasto `{{<T "Ok" >}}`.


6. In modalità avanzata, usa i tasti `F1` e `F3` per passare tra i parametri di valutazione.

{{% alert title="Suggerimento" %}}
Se non fai una selezione usando i tasti freccia ◁ ▷ ma salvi direttamente usando il tasto `F3` o `{{<T "Ok" >}}`, VitalControl salva una valutazione neutra, rappresentata da un colore grigio.
{{% /alert %}}

### Valutazione di base {#basic-rating}

{{< tabpane >}}
{{< tab header="Valutazione di base:" text=true disabled=true />}}
{{% tab header="Scansione transponder" text=true %}}
![VitalControl: Menu Azioni Valutazione](../images/basicrating-scan.png "Valutazione di base")
{{% /tab %}}
{{% tab header="Selezione manuale dalla lista" text=true %}}
![VitalControl: Menu Azioni Valutazione](../images/basicrating.png "Valutazione di base")
{{% /tab %}}
{{< /tabpane >}}

### Valutazione estesa {#extended-rating}

{{< tabpane >}}
{{< tab header="Valutazione di base:" text=true disabled=true />}}
{{% tab header="Scansione transponder" text=true %}}
![VitalControl: Menu Azioni Valutazione](../images/extendedrating-scan.png "Valutazione estesa")
{{% /tab %}}
{{% tab header="Selezione manuale dalla lista" text=true %}}
![VitalControl: Menu Azioni Valutazione](../images/extendedrating.png "Valutazione estesa")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Suggerimento" %}}
Se questa azione non è disponibile, probabilmente l'azione è stata disattivata! Attiva l'azione nel menu [impostazioni azioni](../settings/). In alternativa, reimpostare tutte le azioni riporterà in alto quell'azione.
{{% /alert %}}
