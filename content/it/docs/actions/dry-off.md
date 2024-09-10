---
title: Asciugare
linkTitle: Asciugare
slug: dry-off
weight: 115
description: >
 Asciugare una mucca o aggiungerla alla lista delle mucche fresche
date: 2023-07-26
categorie: [Asciugare]
etichette: [Asciugare]
translationKey: actions/dry-cows
---

## Asciugare {#dry-off}

{{% alert title="Suggerimento" %}}
A seconda dello stato iniziale della mucca, puoi asciugare l'animale e aggiungerlo alla lista degli asciutti, oppure puoi segnare l'animale come una nuova lattante e quindi aggiungerlo alla lista delle nuove lattanti. La distinzione tra le funzioni è resa chiara da un simbolo più o un simbolo meno.
{{% /alert %}}

### Asciugare una mucca {#dry-off-a-cow}

1. Nella schermata principale del tuo dispositivo VitalControl, seleziona la voce di menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Azioni" /> `{{<T "Actions" >}}` e premi il pulsante `{{<T "Ok" >}}`.

2. Scansiona il transponder dell'animale senza l'ID nazionale dell'animale oppure seleziona l'animale dalla lista. Per fare ciò, conferma con `{{<T "Ok" >}}` e seleziona l'ID dell'animale utilizzando i tasti freccia △ ▽. Conferma con `{{<T "Ok" >}}`.

3. Si apre un sottomenu con le azioni dell'animale. Usa i tasti freccia ◁ ▷ △ ▽ per selezionare l'azione <img src="/icons/actions/dryoff-plus.svg" width="35" align="bottom" alt="Asciugare" /> `{{<T "DryOff" >}}` e conferma con `{{<T "Ok" >}}`.

4. L'animale è stato segnato con successo come asciutto.

{{< tabpane >}}
{{< tab header="Asciugare una mucca:" text=true disabled=true />}}
{{% tab header="Scansione del transponder" text=true %}}
![VitalControl: Menu Azioni Asciugare](../images/dryoff-scan.png "Asciugare una mucca")
{{% /tab %}}
{{% tab header="Selezione manuale dalla lista" text=true %}}
![VitalControl: Menu Azioni Asciugare](../images/dryoff.png "Asciugare una mucca")
{{% /tab %}}
{{< /tabpane >}}

### Segnare come lattante {#mark-as-lactated}

1. Nella schermata principale del tuo dispositivo VitalControl, seleziona la voce di menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Azioni" /> `{{<T "Actions" >}}` e premi il pulsante `{{<T "Ok" >}}`.

2. Scansiona il transponder dell'animale senza l'ID nazionale dell'animale oppure seleziona l'animale dalla lista. Per fare ciò, conferma con `{{<T "Ok" >}}` e seleziona l'ID dell'animale utilizzando i tasti freccia △ ▽. Conferma con `{{<T "Ok" >}}`.


3. Si apre un sottomenu con le azioni dell'animale. Usa i tasti freccia ◁ ▷ △ ▽ per selezionare l'azione <img src="/icons/actions/dryoff-minus.svg" width="35" align="bottom" alt="Asciugare" /> `{{<T "DryOff" >}}` e conferma con `{{<T "Ok" >}}`.

4. L'animale è stato segnato con successo come lattato.

{{< tabpane >}}
{{< tab header="Segna come lattato:" text=true disabled=true />}}
{{% tab header="Scansione del transponder" text=true %}}
![VitalControl: Menu Azioni Segna come lattato](../images/lactated-scan.png "Segna come lattato")
{{% /tab %}}
{{% tab header="Selezione manuale dalla lista" text=true %}}
![VitalControl: Menu Azioni Segna come lattato](../images/lactated.png "Segna come lattato")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Suggerimento" %}}
Se questa azione non è disponibile, probabilmente è stata disattivata! Attiva l'azione nel menu [impostazioni azioni](../settings/). In alternativa, reimpostare tutte le azioni riporterà in alto quell'azione.
{{% /alert %}}
