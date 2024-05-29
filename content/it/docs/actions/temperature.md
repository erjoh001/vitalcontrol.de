---
title: Misurare la temperatura
linkTitle: Temperatura
slug: measure-temperature
weight: 10
description: >
  Misurare la febbre nei tuoi animali.
date: 2023-07-26
Categories: [Azioni]
tags: [Azioni, febbre, temperatura]
translationKey: actions/temperature
---

## Misurare la febbre {#measure-fever}

Usa l'azione temperatura per misurare la temperatura dei tuoi animali. Inserisci la punta di misurazione per via rettale alla profondità di misurazione specificata (per animali grandi l'intera lunghezza fino al rigonfiamento, per piccoli ruminanti circa 6 cm o 2/3 della punta di misurazione). Il processo di misurazione avviene automaticamente. Non appena il processo di misurazione è completato, il dispositivo visualizza la temperatura misurata. La codifica a colori indica se la temperatura è nella gamma verde, gialla o rossa. Hai diverse opzioni durante la campagna Prendere la temperatura:

- [Salva il risultato](#save-result) per documentare la misurazione specifica per l'animale
- Metti l'animale nella [Lista di osservazione](#put-on-the-watch-list). Questo ti facilita il controllo delle ripetizioni, poiché puoi richiamare questi animali utilizzando la 'lista di osservazione' e quindi trovare più facilmente gli animali evidenti.
- Accendi e spegni l'[Illuminazione del sito di misurazione](#lighting-of-the-measurement-location-on-and-off)
- La [Ripetizione della misurazione](#repeat-the-measurement)
- L'[Annullamento dell'azione](#cancel-the-action)

{{% alert title="Suggerimento" %}}
Se la temperatura è nell'area gialla ("elevata") o nell'area rossa ("febbre"), VitalControl mette automaticamente l'animale selezionato nella lista di allarme. Correlando con altri dati, puoi monitorare continuamente la salute del singolo animale.
{{% /alert %}}

### Passi preliminari 

1. Nella schermata principale del tuo dispositivo VitalControl, seleziona la voce di menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Azioni" /> `{{<T "Actions" >}}` e premi il pulsante `{{<T "Ok" >}}`.

2. Scansiona un animale utilizzando il transponder o seleziona un animale dall'elenco. Conferma con `{{<T "Ok" >}}` e seleziona un animale con i tasti freccia △ ▽. Conferma con `{{<T "Ok" >}}`.

3. Si apre un sottomenu con le azioni per l'animale. L'azione <img src="/icons/actions/temperature.svg" width="10" align="bottom" alt="Temperatura" /> `{{<T "Temperature" >}}` è selezionata automaticamente. Conferma con `{{<T "Ok" >}}`.


4. Ora esegui la misurazione. Non appena la misurazione è completata, la temperatura viene evidenziata in blu, verde, giallo o rosso, a seconda della soglia impostata.

{{< tabpane >}}
{{< tab header="Preliminary steps:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Azioni Passi preliminari](../images/firststeps-scan.png "Passi preliminari")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Azioni Passi preliminari](../images/firststeps.png "Passi preliminari")
{{% /tab %}}
{{< /tabpane >}}

### Salva risultato {#save-result}

1. Completa i passi preliminari.

2. Usa il tasto `F3` <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Salva" /> o conferma con `{{<T "Ok" >}}` per salvare il risultato.

    ![VitalControl: Menu Azioni Salva risultati](../images/saveresults.png "Salva risultati")

### Metti nella lista di controllo {#put-on-the-watch-list}

1. Completa i passi preliminari.

2. Premi il pulsante centrale superiore `On/Off` <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Apri popup" />.

3. Si apre un menu popup in cui puoi selezionare tra le voci di menu `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` o `{{<T "Flashlight" >}}`. Usa i tasti freccia △ ▽ per selezionare `{{<T "AddToWatchList" >}}` e premi il tasto centrale `{{<T "Ok" >}}` o il tasto `F3` `{{<T "Ok" >}}`.

    ![VitalControl: Menu Azioni Metti nella lista di controllo](../images/watchlist.png "Metti nella lista di controllo")

### Accensione e spegnimento dell'illuminazione del luogo di misurazione {#lighting-of-the-measurement-location-on-and-off}

1. Completa i passi preliminari.

2. Premi il pulsante centrale superiore `On/Off` <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Apri popup" />.

3. Si apre un menu popup in cui puoi selezionare tra le voci di menu `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` o `{{<T "Flashlight" >}}`. Usa i tasti freccia △ ▽ per selezionare `{{<T "Flashlight" >}}` e premi il tasto centrale `{{<T "Ok" >}}` o il tasto `F3` `{{<T "Ok" >}}`.

    ![VitalControl: Menu Azioni Torcia accesa spenta](../images/light.png "Torcia accesa spenta")

### Ripeti la misurazione {#repeat-the-measurement}

1. Completa i passi preliminari.


2. Premere il pulsante centrale superiore `On/Off` <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.

3. Si apre un menu a comparsa in cui è possibile selezionare dagli elementi del menu `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` o `{{<T "Flashlight" >}}`. Utilizzare i tasti freccia △ ▽ per selezionare `{{<T "RepeatMeasurement" >}}` e premere il tasto centrale `{{<T "Ok" >}}` o il tasto `F3` `{{<T "Ok" >}}`.

    ![VitalControl: Menu Azioni Luce accesa spenta](../images/repeat.png "Luce accesa spenta")

### Annulla l'azione {#cancel-the-action}

1. Completare i passaggi preliminari.

2. Premere il tasto `F1` <img src="/icons/footer/cancel.svg" width="25" align="bottom" alt="Cancel" /> per annullare l'azione.

    ![VitalControl: Menu Azioni Annulla l'azione](../images/saveresults.png "Annulla l'azione")

{{% alert title="Suggerimento" %}}
Se questa azione non è disponibile, probabilmente l'azione è stata disattivata! Attivare l'azione nel menu [impostazioni azione](../settings/). In alternativa, il ripristino di tutte le azioni riporterà in primo piano quell'azione.
{{% /alert %}}
