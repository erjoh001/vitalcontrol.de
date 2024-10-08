---
title: Animali acquistati
linkTitle: Animali acquistati
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: purchased-animals
description: >
  Qui puoi visualizzare i tuoi acquisti attuali ed esportare i dati.
categorie: [Nuovo in fattoria]
etichette: [Nuovo in fattoria]
translationKey: new-on-farm/new-on-farm
---
## Animali acquistati {#purchased-animals}

In questa lista troverai tutti gli animali che hai creato tramite registrazione di massa. Puoi esportare questa lista e quindi registrare le tue aggiunte direttamente nel programma di gestione della mandria DSP-Herde e in HI-Tier. In alternativa, puoi eliminare tutte le notifiche di acquisto.

{{% alert title="Suggerimento" %}}
Per esportare i dati è necessario il stick UBS incluso. Collega il stick USB con l'adattatore USB-C al tuo dispositivo VitalControl prima di seguire le istruzioni.
{{% /alert %}}

1. Nella schermata principale del tuo dispositivo VitalControl, seleziona la voce di menu <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Nuovo in fattoria" /> `{{<T "NewOnFarm" >}}` e premi il pulsante `{{<T "Ok" >}}`.

2.  Si apre un sottomenu in cui puoi scegliere tra <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Nuovo in fattoria, senza transponder" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Animali acquistati" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Nessun ID nazionale assegnato" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Nascite" /> `{{<T "Births" >}}` e <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Nessun transponder assegnato" /> `{{<T "NoTransponderAssigned" >}}`. Usa i tasti freccia ◁ ▷ △ ▽ per selezionare la voce di menu <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Animali acquistati" /> `{{<T "PurchasedAnimals" >}}` e conferma con `{{<T "Ok" >}}`.

3. Si apre una lista con i tuoi acquisti che hai registrato tramite la voce di menu registrazione di massa.

4. Usa il tasto `F2` `{{<T "CSVExport" >}}`.

5. La lista dei messaggi CSV è ora salvata sul tuo stick USB.

![VitalControl: List of purchased animals, csv export](../images/purchasedanimals.png "Purchased animals, csv export ")

## Opzioni: Elimina tutte le notifiche dopo l'esportazione {#options-delete-all-notices-after-export}

Con questa opzione, puoi impostare se tutti i messaggi all'interno della lista `{{<T "PurchasedAnimals" >}}` devono essere eliminati dopo che il file CSV è stato esportato. Usa questa opzione solo se sei sicuro di non aver più bisogno dei messaggi!

1. Usa il tasto `F3`. Si apre un sottomenu.

2. Usa i tasti freccia △ ▽ per selezionare la voce di menu `{{<T "DeleteAllNoticesAfterExport" >}}` e conferma con `{{<T "Ok" >}}`.

3. La casella è ora contrassegnata con un segno di spunta. L'opzione è attivata. Conferma di nuovo con `{{<T "Ok" >}}` per disattivare l'opzione.

    ![VitalControl: List of purchased animals, csv export](../images/delete-all.png "Delete all notices after export")    

## Chiamate di funzione dirette {#direct-function-calls}

Oltre a creare il file di esportazione, hai le seguenti opzioni:

- [Scollega transponder](#unlink-transponder)
- [Cancella tutte le notifiche di acquisto](#clear-all-purchase-notices)
- [Elimina animale + notifica](#delete-animal--purchase-notice)
- [Cancella notifica di acquisto](#clear-notice-of-purchase)
- [Modifica un marchio](#edit-data-of-purchased-animal)

{{% alert title="Suggerimento" %}}
Apri sempre prima la lista `{{<T "PurchasedAnimals" >}}` come descritto nelle istruzioni sopra.
{{% /alert %}}

### Scollega transponder {#unlink-transponder}

Puoi usare questa funzione per rimuovere il transponder da un animale.

1. Usa il tasto `F3`. Si apre un sottomenu.

2. Usa i tasti freccia △ ▽ per selezionare la voce di menu `{{<T "UnlinkTransponder" >}}` e conferma con `{{<T "Ok" >}}`.

3. Il transponder è stato scollegato con successo.

    ![VitalControl: List of purchased animals, csv export](../images/unlink-transponder.png "Purchased animals, unlink transponder")

### Cancella tutte le notifiche di acquisto {#clear-all-purchase-notices}

Con questa funzione puoi eliminare tutti gli animali dalla lista `{{<T "PurchasedAnimals" >}}` senza dover prima creare un file di esportazione.

1. Usa il tasto `F3`. Si apre un sottomenu.

2. Usa i tasti freccia △ ▽ per selezionare la voce di menu `{{<T "ClearAllPurchaseNotices" >}}` e conferma con `{{<T "Ok" >}}`.

3. Le notifiche di acquisto sono state eliminate con successo.

![VitalControl: Elenco degli animali acquistati, cancella avvisi di acquisto](../images/clear.png "Cancella tutti gli avvisi di acquisto")

### Elimina animale + avviso di acquisto {#delete-animal--purchase-notice}

Per eliminare un animale e il corrispondente avviso di acquisto, procedi come segue:

1. Usa i tasti freccia △ ▽ per selezionare l'animale che vuoi eliminare.

2. Usa il tasto `F3`. Si apre un sottomenu.

3. Usa i tasti freccia △ ▽ per selezionare la voce di menu `{{<T "UnregisterAnimalAndBirthNotice" >}}` e conferma con `{{<T "Ok" >}}`.

4. L'animale e il messaggio di accesso sono stati eliminati con successo.

![VitalControl: Elenco degli animali acquistati, elimina animale + avviso](../images/delete.png "Elimina animale + avviso")

### Cancella avviso di acquisto {#clear-notice-of-purchase}

Per eliminare l'avviso di acquisto di un animale dall'elenco, procedi come segue:

1. Usa i tasti freccia △ ▽ per selezionare l'animale di cui vuoi eliminare l'avviso di acquisto.

2. Usa il tasto `F3`. Si apre un sottomenu.

3. Usa i tasti freccia △ ▽ per selezionare la voce di menu `{{<T "ClearPurchaseNotice" >}}` e conferma con `{{<T "Ok" >}}`.

4. L'avviso di acquisto dell'animale selezionato è stato eliminato con successo.

![VitalControl: Elenco degli animali acquistati, cancella avviso di acquisto](../images/clearnotice.png "Cancella avviso di acquisto")

### Modifica dati dell'animale acquistato {#edit-data-of-purchased-animal}

Per modificare i dati di un animale nell'elenco degli acquisti, procedi come segue:

1. Usa i tasti freccia △ ▽ per selezionare l'animale che vuoi modificare.

2. Usa il pulsante `{{<T "Ok" >}}`. Si apre un sottomenu con i dati dell'animale. Puoi scoprire come modificarli [qui](/it/docs/actions/edit/#edit-animal-data).

![VitalControl: Elenco degli animali acquistati, modifica dati dell'animale](../images/edit.png "Modifica dati dell'animale acquistato")
