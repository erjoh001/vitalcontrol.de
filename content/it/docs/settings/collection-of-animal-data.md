---
title: "Acquisizione dati"
linkTitle: "Acquisizione dati"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: data-acquisition
description: >
 Conservazione delle impostazioni rilevanti per la raccolta dei dati sugli animali
categories: [settings]
tags: [settings, data acquisition]
translationKey: settings/data-acquisition
maphilight: true
---
## Panoramica {#overview}

Il seguente grafico elenca le impostazioni disponibili riguardanti la registrazione dei dati sugli animali:

<img src="../images/animaldataacquisition.png" alt="Acquisizione dei dati sugli animali" title="Acquisizione dei dati sugli animali" usemap="#workmap-overview" class="maphilight" />

<map name="workmap-overview">
  <area shape="rect" coords="3,40,239,80" alt="Registrazione del peso" title="Sottomenu: Impostazioni per la registrazione del peso&#10;Clic del mouse: apri la documentazione" href="#settings-weight-recording">
  <area shape="rect" coords="3,80,239,160" alt="Modalità di valutazione degli animali" title="Imposta la modalità di valutazione degli animali&#10;Clic del mouse: apri la documentazione" href="#mode-of-animal-rating">
  <area shape="rect" coords="3,160,239,240" alt="Periodo di controllo delle vacche fresche" title="Imposta la durata del periodo di controllo per le vacche fresche&#10;Clic del mouse: apri la documentazione" href="#control-period-of-fresh-cows">

  <area shape="rect" coords="2,282,125,318" alt="Indietro" title="Torna indietro di un livello" href="/it/docs/settings/">
</map>

{{% alert title="Suggerimento" %}}
Sposta il puntatore del mouse su un simbolo nel grafico sottostante e lascialo fermo per un momento. Apparirà un tooltip che presenta informazioni sull'impostazione rispettiva. Se clicchi su una delle linee, verrai reindirizzato a una descrizione dell'impostazione rispettiva.
{{% /alert %}}

## Impostazioni *Registrazione del peso* {#settings-weight-recording} 

Il seguente grafico elenca le impostazioni disponibili riguardanti la registrazione del peso degli animali:

<img src="../images/weightrecording.png" alt="Voci del sottomenu impostazioni per la registrazione del peso" title="Impostazioni registrazione del peso" usemap="#workmap-weight" class="maphilight" />

<map name="workmap-weight">
  <area shape="rect" coords="1,40,230,199" alt="Valori soglia valutazione aumento di peso giornaliero" title="Imposta i valori soglia per la valutazione dell'aumento di peso giornaliero&#10;Clic del mouse: apri la documentazione" href="#assessment-of-daily-weight-gain-threshold-values">
  <area shape="rect" coords="1,200,230,280" alt="Peso alla nascita" title="Imposta il peso alla nascita proposto durante la registrazione di un nuovo animale&#10;Clic del mouse: apri la documentazione" href="#birth-weight">
  <area shape="rect" coords="1,280,230,360" alt="Aumento di peso giornaliero medio" title="Imposta l'aumento di peso giornaliero medio utilizzato per stimare il peso degli animali&#10;Clic del mouse: apri la documentazione" href="#average-daily-weight-gain">
  <area shape="rect" coords="1,360,230,440" alt="Precisione della registrazione del peso" title="Imposta la precisione della registrazione del peso&#10;Clic del mouse: apri la documentazione" href="#precision-of-weight-recording">
</map>


### Valutazione dell'aumento di peso giornaliero: Valori soglia {#assessment-of-daily-weight-gain-threshold-values}

{{% alert title="Suggerimento" %}}
Il campo rosso mostra l'area "aumento di peso troppo basso critico". Il campo giallo mostra l'area "aumento di peso subottimale".
{{% /alert %}}

Per regolare i valori soglia per la valutazione dell'aumento di peso giornaliero, procedere come segue:

1. Nella schermata principale del tuo dispositivo VitalControl, seleziona la voce di menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Impostazioni" /> `{{<T "Settings" >}}` e premi il pulsante `{{<T "Ok" >}}`.

2. Si apre un sottomenu in cui vengono visualizzate varie impostazioni. Utilizza i tasti freccia △ ▽ per selezionare `{{<T "DataAcquisition" >}}`. Conferma con `{{<T "Ok" >}}`.

3. Si apre un altro sottomenu in cui puoi utilizzare i tasti freccia △ ▽ per passare tra i campi di impostazione per `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` e `{{<T "ControlPeriodFreshCows" >}}`. Seleziona `{{<T "WeightRecording" >}}` e conferma con `{{<T "Ok" >}}`.

4. Il campo di preferenza `{{<T "DailyWeightGain" >}}` viene selezionato automaticamente. Utilizza i tasti freccia ◁ ▷ per selezionare la specie animale desiderata. Conferma con `{{<T "Ok" >}}`. In alternativa, puoi utilizzare l'icona della matita con il tasto <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Modifica" /> `F3` per passare direttamente alla modifica delle aree rosse e gialle.

5. Utilizza i tasti freccia △ ▽ per selezionare l'aumento desiderato "maggiore di" o "uguale a" g/giorno nell'area rossa e gialla. Utilizza i tasti `F2`/`F3` 🡄 🡆 o i tasti freccia ◁ ▷ per selezionare tra le aree rosse e gialle.

6. Una volta impostato l'aumento desiderato "maggiore di" o "uguale a" g/giorno, utilizza il tasto `F1` <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Esci" /> o conferma con `{{<T "Ok" >}}` per tornare a `{{<T "DailyWeightGain" >}}`.

    ![VitalControl: impostazioni menu aumento di peso giornaliero](../images/dailyweightgain.png "Aumento di peso giornaliero")

### Peso alla nascita {#birth-weight}

Il dispositivo utilizza il peso alla nascita memorizzato qui nelle impostazioni come valore predefinito quando si creano nuovi animali. Per poter selezionare più rapidamente il peso alla nascita individuale di un animale appena nato, potrebbe essere necessario regolare questo valore predefinito per la tua azienda agricola. Per regolare il valore per il `{{<T "BirthWeight" >}}`, procedere come segue:


1. Nella schermata principale del tuo dispositivo VitalControl, seleziona l'elemento del menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Impostazioni" /> `{{<T "Settings" >}}` e premi il pulsante `{{<T "Ok" >}}`.

2. Si apre un sottomenu in cui vengono visualizzate varie impostazioni. Usa i tasti freccia △ ▽ per selezionare `{{<T "DataAcquisition" >}}`. Conferma con `{{<T "Ok" >}}`.

3. Si apre un altro sottomenu in cui puoi usare i tasti freccia △ ▽ per passare tra i campi di impostazione per `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` e `{{<T "ControlPeriodFreshCows" >}}`. Seleziona `{{<T "WeightRecording" >}}` e conferma con `{{<T "Ok" >}}`.

4. Usa i tasti freccia △ ▽ per selezionare il campo di impostazione `{{<T "BirthWeight" >}}` e usa i tasti freccia ◁ ▷ per impostare il peso alla nascita desiderato. Il dispositivo ora utilizza il peso alla nascita definito qui come standard quando si creano nuovi animali. Il peso alla nascita individuale di un animale neonato può quindi essere selezionato più rapidamente.

    ![VitalControl: impostazioni del menu peso alla nascita](../images/birthweight.png "Peso alla nascita")

{{% alert title="Avvertenza" color="warning" %}}
Il peso alla nascita standard è solo un valore approssimativo, che deve essere regolato individualmente quando si crea un nuovo animale.
Se non si desidera effettuare questa regolazione o se si creano animali automaticamente [in background](../animal-registration/#auto-registration), non dovrebbe essere richiesto o salvato alcun peso alla nascita quando si crea un nuovo animale. Questo può essere definito nelle impostazioni per [registrazione degli animali](../animal-registration/#set-recorded-weights).
{{% /alert %}}

{{% alert title="Valori predefiniti peso alla nascita:" %}}

| Tipo di nuovo animale         |  Agnello       | Vitello       |
|-------------------------------|----------------|---------------| 
| Valore predefinito *peso alla nascita*: | 4 kg           | 40 kg         |
| Intervallo di valori :        | 1,0 a 99 kg    | 1,0 a 99 kg   |
{{% /alert %}}

### Aumento medio del peso giornaliero {#average-daily-weight-gain}

{{% alert title="Spiegazione" %}}
Quando [si pesa](../../actions/record-weight/) un animale, l'aumento giornaliero definito viene utilizzato per il calcolo del valore del peso suggerito durante la pesatura dell'animale. Se il valore del peso suggerito è troppo basso o troppo alto per la maggior parte degli animali da pesare, dovresti regolare il valore definito verso il basso o verso l'alto, rispettivamente, per ridurre il tempo necessario per regolare il valore del peso con i tasti freccia.
{{% /alert %}}

Per impostare il `{{<T "AverageDailyWeightGain" >}}` utilizzato nel calcolo del peso approssimativo di un animale, procedi come segue.

1. Nella schermata principale del tuo dispositivo VitalControl, seleziona la voce di menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` e premi il pulsante `{{<T "Ok" >}}`.

2. Si apre un sottomenu in cui vengono visualizzate varie impostazioni. Usa i tasti freccia △ ▽ per selezionare `{{<T "DataAcquisition" >}}`. Conferma con `{{<T "Ok" >}}`.

3. Si apre un altro sottomenu in cui puoi usare i tasti freccia △ ▽ per passare tra i campi di impostazione per `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` e `{{<T "ControlPeriodFreshCows" >}}`. Seleziona `{{<T "WeightRecording" >}}` e conferma con `{{<T "Ok" >}}`.

4. Usa i tasti freccia △ ▽ per selezionare il campo di impostazione `{{<T "AverageDailyWeightGain" >}}`. Usa i tasti freccia ◁ ▷ per impostare l'aumento medio giornaliero desiderato g/giorno. Il dispositivo ora utilizza il guadagno medio giornaliero definito qui come standard per il guadagno giornaliero previsto degli animali.

    ![VitalControl: impostazioni del menu guadagno medio giornaliero di peso](../images/averagedailyweightgain.png "Guadagno medio giornaliero di peso")

### Precisione della registrazione del peso {#precision-of-weight-recording}

{{% alert title="Spiegazione" %}}
A seconda del caso d'uso e della specie animale (*agnello*, *vitello*, *mucca*), ci sono diversi requisiti riguardanti la risoluzione del valore del peso da registrare (precisione di *10 g*, *100 g* o *1 kg*). Per soddisfare questi requisiti è necessario utilizzare l'impostazione *Massima precisione*.
{{% /alert %}}

La tabella seguente mostra la precisione della registrazione del peso a seconda dell'intervallo di peso e dell'impostazione stabilita per *Massima precisione*:

| Impostazione *Massima precisione*:         |  10 g | 100 g | 1 kg |
|--------------------------------------------|-------|-------|------|
| Precisione nell'intervallo di *0 a 9,9 kg*:| 10 g  | 100 g | 1 kg |
| Precisione nell'intervallo di *10 a 49,9 kg*: | 100 g | 100 g | 1 kg |
| Precisione nell'intervallo di *50 a 99,9 kg*: | 500 g | 500 g | 1 kg |
| Precisione per valori *≥ 100 kg*:          | 1 kg  | 1 kg  | 1 kg |

Per impostare la massima precisione durante la registrazione dei pesi degli animali con il tuo dispositivo, procedi come segue:


1. Nella schermata principale del tuo dispositivo VitalControl, seleziona la voce di menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` e premi il pulsante `{{<T "Ok" >}}`.

2. Si apre un sottomenu in cui vengono visualizzate varie impostazioni. Usa i tasti freccia △ ▽ per selezionare `{{<T "DataAcquisition" >}}`. Conferma con `{{<T "Ok" >}}`.

3. Si apre un altro sottomenu in cui puoi usare i tasti freccia △ ▽ per passare tra i campi di impostazione per `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` e `{{<T "ControlPeriodFreshCows" >}}`. Seleziona `{{<T "WeightRecording" >}}` e conferma con `{{<T "Ok" >}}`.

4. Usa i tasti freccia △ ▽ per selezionare il campo di impostazione `{{<T "MaximumPrecision" >}}`. Usa i tasti freccia ◁ ▷ per impostare la precisione massima desiderata. La precisione della registrazione del peso sul dispositivo ora segue l'impostazione stabilita.

    ![VitalControl: percorso menu impostazioni precisione massima registrazione peso](../images/precisionweightrecording.png "Stabilire la precisione massima della registrazione del peso.")

<br>
Salva le impostazioni e torna al menu principale `{{<T "DataAcquisition" >}}` premendo il tasto `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Salva e torna" />&nbsp;.

## Modalità di valutazione degli animali {#mode-of-animal-rating}

{{% alert title="Spiegazione" %}}
Nella modalità semplice, durante la valutazione degli animali viene richiesta solo la condizione generale (verde/giallo/rosso). Nella valutazione estesa, vengono richieste 4 categorie di valutazione: condizione generale, consumo di mangime, diarrea e malattia respiratoria.
{{% /alert %}}

Per impostare la `{{<T "RatingAnimals" >}}` sul tuo dispositivo procedi come segue.

1. Nella schermata principale del tuo dispositivo VitalControl, seleziona la voce di menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` e premi il pulsante `{{<T "Ok" >}}`.

2. Si apre un sottomenu in cui vengono visualizzate varie impostazioni. Usa i tasti freccia △ ▽ per selezionare `{{<T "DataAcquisition" >}}`. Conferma con `{{<T "Ok" >}}`.

3. Si apre un altro sottomenu in cui puoi usare i tasti freccia △ ▽ per passare tra i campi di impostazione per `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` e `{{<T "ControlPeriodFreshCows" >}}`. Seleziona `{{<T "RatingAnimals" >}}` e conferma con `{{<T "Ok" >}}`.

4. Usa i tasti freccia ◁ ▷ per impostare la valutazione desiderata degli animali.

    ![VitalControl: impostazioni del menu valutazione media degli animali](../images/raitingofanimals.png "Valutazione degli animali")

## Periodo di controllo delle vacche fresche {#control-period-of-fresh-cows}

{{% alert title="Spiegazione" %}}
Quando si gestiscono le vacche fresche, controllare quotidianamente gli animali per diversi giorni dopo la nascita, inclusa la misurazione della temperatura, è considerata una pratica ottimale. La durata di questo periodo di controllo varia notevolmente da azienda a azienda. Per questo motivo, la durata del periodo di controllo può essere impostata su un valore compreso tra 3 e 14 giorni nelle impostazioni di VitalControl. Il valore impostato per il periodo di controllo delle vacche fresche determina il numero di colonne del grafico a colonne visualizzato per ogni animale nella [lista delle vacche fresche](../../lists/fresh-cows/).
{{% /alert %}}

Per impostare la durata del periodo di controllo per le tue vacche fresche, procedi come segue:

1. Nella schermata principale del tuo dispositivo VitalControl, seleziona la voce di menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Impostazioni" /> `{{<T "Settings" >}}` e premi il pulsante `{{<T "Ok" >}}`.

2. Si apre un sottomenu in cui vengono visualizzate varie impostazioni. Usa i tasti freccia △ ▽ per selezionare `{{<T "DataAcquisition" >}}`. Conferma con `{{<T "Ok" >}}`.

3. Si apre un altro sottomenu in cui puoi usare i tasti freccia △ ▽ per passare tra i campi di impostazione per `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` e `{{<T "ControlPeriodFreshCows" >}}`. Seleziona `{{<T "ControlPeriodFreshCows" >}}` e conferma con `{{<T "Ok" >}}`.

4. Usa i tasti freccia ◁ ▷ per impostare la durata desiderata del periodo di controllo in giorni post partum.

    ![VitalControl: impostazioni del menu periodo di controllo vacche fresche](../images/controlperiodfreshcows.png "Periodo di controllo vacche fresche")

<br>

Salva le impostazioni e torna al menu principale <img src="/icons/gear.svg" width="25" align="bottom" alt="Impostazioni" /> `{{<T "Settings" >}}` premendo il tasto `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Salva e torna" />&nbsp;.
