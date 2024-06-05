---
title: "Registrazione di massa di un gruppo di animali acquistati"
linkTitle: "Registrazione di massa"
date: 2023-07-28T13:25:28+02:00
weight: 15
draft: false
slug: bulk-recording
description: >
  Utilizza lo scanner di codici a barre per registrare una varietà di animali.
categories: [Registrazione di massa]
tags: [Registrazione di massa]
translationKey: new/bulk-recording
---
## Registrazione di massa {#bulk-recording}

Con l'aiuto della registrazione di massa, puoi catturare un gran numero di animali in breve tempo e salvarli sul tuo dispositivo. Utilizza lo scanner di codici a barre per scansionare i codici a barre per il numero di marca auricolare e la data di nascita sui passaporti del bestiame. L'animale viene salvato automaticamente e puoi scansionare subito il passaporto successivo. Per eseguire la registrazione di massa degli animali, procedi come segue:

1. Collega lo scanner di codici a barre al VitalControl utilizzando il cavo.

2. Nella schermata principale del tuo dispositivo VitalControl, seleziona la voce di menu <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="Nuovo animale" /> `{{<T "New" >}}` e premi il pulsante `{{<T "Ok" >}}`.

3. Si apre un sottomenu. Utilizza i tasti freccia ◁ ▷ △ ▽ per selezionare la voce di menu <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Registrazione di massa" /> `{{<T "BulkRecording" >}}` e conferma con `{{<T "Ok" >}}`.

4. Si apre un altro sottomenu, che contiene un campo per il numero di marca auricolare dell'animale e un altro campo per la data di nascita dell'animale. Prima scansiona il codice a barre per il numero di marca auricolare. Il bordo del campo cambia da rosso a verde. Poi scansiona la data di nascita. Il bordo diventa brevemente verde prima che entrambi i bordi appaiano di nuovo rossi. Il contatore sotto il simbolo del passaporto <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Passaporti degli animali" title="Passaporti degli animali" /> nella parte superiore dello schermo aumenta da 0 a 1. Il primo animale è stato salvato. Continua e scansiona gli altri passaporti del bestiame. Dopo ogni passaporto scansionato, il contatore sotto il simbolo del passaporto <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Passaporti degli animali" title="Passaporti degli animali" /> aumenta di uno. Anche il contatore sotto il simbolo del gruppo <img src="/icons/header/group.svg" width="35" align="bottom" alt="Gruppo di animali" title="Gruppo di animali" /> aumenta di uno.

{{% alert title="Suggerimento" %}}
Il contatore sotto il simbolo del passaporto <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Passaporti animali" title="Passaporti animali" /> mostra quanti passaporti hai scansionato in una volta sola senza uscire dalla schermata `{{<T "BulkRecording" >}}`. Il contatore sotto il simbolo del gregge <img src="/icons/header/group.svg" width="35" align="bottom" alt="Nuovo animale" /> mostra quanti passaporti hai scansionato in totale. Questo contatore non si azzera se esci dalla schermata `{{<T "BulkRecording" >}}`. Il numero è equivalente alle tue voci nel menu ['Acquisti'](../new-on-farm/purchased-animals/).
{{% /alert %}}

   ![VitalControl: Menu 'Nuovo - Registrazione massiva'](../images/bulk-recording.png "Registrazione massiva")

{{% alert title="Suggerimento" %}}
Hai ulteriori opzioni di impostazione all'interno della voce di menu `{{<T "BulkRecording" >}}`. Queste sono spiegate di seguito. Come passaggi preparatori, accedi sempre prima alla voce di menu `{{<T "BulkRecording" >}}` e poi procedi come indicato nelle istruzioni.
{{% /alert %}}

{{% alert title="Suggerimento" %}}
Durante il processo di scansione possono apparire messaggi di errore. In questo caso, lo scanner di codici a barre emette un suono e ulteriori scansioni non sono possibili. Conferma il messaggio di errore corrispondente sul display di VitalControl e continua a scansionare.
{{% /alert %}}

### Data di nascita obbligatoria {#birth-date-mandatory}

Con questa opzione di impostazione puoi determinare se la data di nascita deve essere specificata quando si creano gli animali. Se disattivi questa opzione, devi solo scansionare il codice a barre per salvare un animale. Per questi animali, tuttavia, la data corrente viene memorizzata come data di nascita! Questa funzione è abilitata per impostazione predefinita. Per disattivarla, procedi come segue:

1. Usa il pulsante <img src="/icons/gear.svg" width="25" align="bottom" alt="Menu impostazioni" /> `On/Off` per aprire il menu delle impostazioni.

2. Usa i tasti freccia △ ▽ per selezionare l'opzione di impostazione `{{<T "BirthDateMandatory" >}}` e conferma con `{{<T "Ok" >}}`.

3. Il cerchio giallo simboleggia che la funzione è attivata. Un cerchio grigio simboleggia che la funzione è disattivata.

4. Salva le impostazioni e usa il tasto `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Salva e ritorna" /> per tornare alla voce di menu <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Registrazione massiva" />&nbsp; `{{<T "BulkRecording" >}}`.

![VitalControl: Menu New Birth date mandatory](../images/birthdate.png "Birth date mandatory")

### Valori predefiniti {#default-values}

All'interno del menu delle impostazioni `{{<T "DefaultValues" >}}` imposti gli standard che si applicano a ciascun animale che crei. Il processo di creazione con lo scanner di codici a barre rimane invariato come descritto sopra. Hai la possibilità di impostare il tipo di bestiame, il sesso, la razza e la posizione. Per impostare i `{{<T "DefaultValues" >}}`, procedi come segue:

1. Usa il pulsante <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings menu" /> `On/Off` per aprire il menu delle impostazioni.

2. Usa i tasti freccia △ ▽ per selezionare la voce di menu `{{<T "DefaultValues" >}}` e conferma con `{{<T "Ok" >}}`.

3. Si apre un sottomenu con le diverse opzioni di impostazione. Usa i tasti freccia △ ▽ per selezionare l'opzione di impostazione desiderata. Usa i tasti freccia ◁ ▷ per selezionare l'impostazione desiderata.

4. Salva le impostazioni e usa il tasto `F1`&nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" /> per tornare alla voce di menu <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" />&nbsp; `{{<T "BulkRecording" >}}`.

![VitalControl: Menu New Default values](../images/defaultvalues.png "Default values")

### Valori registrati {#recorded-values}

All'interno del menu delle impostazioni `{{<T "RecordedValues" >}}`, puoi specificare quali valori devono essere catturati oltre al numero di marca auricolare e alla data di nascita. Puoi scegliere tra `{{<T "Breed" >}}`, `{{<T "Sex" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "CurrentWeight" >}}`, `{{<T "BirthWeight" >}}` e `{{<T "TypeAnimal" >}}`. Non appena imposti almeno un valore, il processo cambia durante la scansione. Prima scansiona il numero di marca auricolare e la data di nascita. Poi usa i tasti direzionali △ ▽ per selezionare i valori da impostare e imposta i valori. Poi salva le tue voci con il tasto `F3`. Solo allora l'animale viene creato! Per impostare i valori da registrare, procedi come segue:

1. Usa il pulsante <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings menu" /> `On/Off` per aprire il menu delle impostazioni.

2. Usa i tasti freccia △ ▽ per selezionare la voce di menu `{{<T "RecordedValues" >}}` e conferma con `{{<T "Ok" >}}`.

3. Selezionare il valore desiderato da registrare con i tasti freccia △ ▽ e confermare con `{{<T "Ok" >}}`. Appare un cerchio giallo. Se si desidera disattivare il valore da registrare, confermare nuovamente con `{{<T "Ok" >}}`. Il cerchio giallo scompare.

4. Salvare le impostazioni e utilizzare il tasto `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Salva e torna" /> per tornare alla voce di menu <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Registrazione in blocco" />&nbsp; `{{<T "BulkRecording" >}}`.

5. Se si desidera disattivare nuovamente tutti i valori da registrare, selezionare l'opzione di impostazione `{{<T "EnableAllResetOrder" >}}` nella voce di menu `{{<T "RecordedValues" >}}` e confermare con `{{<T "Ok" >}}`.

   ![VitalControl: Menu Nuovi valori registrati](../images/recordvalues.png "Valori registrati")
