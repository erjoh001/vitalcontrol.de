---
title: "Configurazione di Technology VitalControl:"
linkTitle: Configurazione
date: 2023-08-04T12:21:53+02:00
draft: false
description: >
  Definire i parametri di sincronizzazione per lo scambio di dati tra il software *Herde* e il dispositivo VitalControl.
weight: 10
categorie: [DSP Herde]
translationKey: DSPherde/installation
---
Prima del primo [scambio di dati](../data-exchange/), è necessario creare e configurare una volta il collegamento tecnologico al dispositivo VitalControl.

{{% alert title="Attenzione" %}}
Prima di configurare il collegamento tecnologico, verificare se il software 'VCSynchronizer' è installato sul PC; questo software è obbligatorio per lo scambio di dati. Per farlo, aprire il menu Start di Windows e cercare nell'elenco delle applicazioni una voce denominata 'Urban VitalControl'. Se non si trova tale voce, [installare](../../vcsynchronizer/installation/) il software `VCSynchronizer` sul PC.
{{% /alert %}}

Per configurare la tecnologia, procedere come segue:

## Creare un nuovo set di parametri per lo scambio di dati con il dispositivo VitalControl

1. All'interno del software `Herde`, aprire la finestra `Impostazioni`. A seconda della configurazione dell'interfaccia utente, è possibile aprire questa finestra tramite la voce di menu `Organizzazione` nel menu principale (voce di primo livello _Impostazioni_), nel menu della barra laterale o nella propria toolbox personalizzata (orizzontale o verticale).

   ![Software Herde: invocazione del menu impostazioni](../screenshots/settings.png "Herde: invocare Impostazioni")

1. Si apre una finestra pop-up `Impostazioni`, nella cui barra laterale sinistra sono elencate numerose categorie di impostazioni. Aprire la categoria `Servizio` ➊ e selezionare la sottocategoria `Tecnologia` ➋.

1. Nell'intestazione dell'area principale a destra, appare ora un menu a discesa in cui sono elencati tutti i set di parametri tecnologici definiti. A destra viene mostrato il numero di tecnologie configurate. Fare clic sul pulsante ![Software Herde: Creare un nuovo set di parametri tecnologici](/icons/new.png "Herde: Creare Collegamento Tecnologico") `Creare un nuovo set di parametri tecnologici` ➌.

   ![Software Herde: schermata delle impostazioni per la tecnologia](../screenshots/settings-technology.png "Herde: Impostazioni per la Tecnologia")


1. Si apre un'altra finestra pop-up. Inserisci `VitalControl` come **Nome della connessione** e `Urban VitalControl (Gen 2)` come **Tipo di Tecnologia** e poi clicca sul pulsante `Accetta`.

   ![Software Herde: Crea nuovo set di parametri per dispositivo VitalControl](../screenshots/new-technology.png "Crea nuova tecnologia: VitalControl").

   Il set di parametri per la tecnologia `VitalControl` è ora creato e deve essere configurato nei passaggi successivi.

## Configurazione: Impostazioni di base

Inizialmente, la scheda `Impostazioni di base` è selezionata nella schermata visualizzata, come mostrato nella figura sottostante. Effettua le regolazioni nelle categorie `Programma esterno` ➊, `Dati animali` ➋, `Località` ➌ e `Uscita` ➍ in base alle condizioni specifiche della tua azienda agricola.

   ![Software Herde: Configurazione delle impostazioni di base](../screenshots/basic-settings.png "Tecnologia VitalControl: Impostazioni di base").
   
### Categoria `Programma esterno` ➊

Per eseguire lo scambio di dati tra VitalControl e Herde Plus, è necessario il software di base [VitalControl Synchronizer](../../vcsynchronizer) come programma di supporto esterno. Per il corretto funzionamento di questo programma, devono essere effettuate alcune regolazioni nella categoria `Programma esterno` ➊.

- **Nome del dispositivo per lo scambio di dati**:  
  Per impostazione predefinita, questo campo è vuoto. Tuttavia, è consigliabile inserire qui il nome del tuo computer. Per farlo, premi l'icona ![Herde Software: Crea nuova accoppiamento tecnologico](/icons/arrow-down.png "Herde: Crea accoppiamento tecnologico") `Freccia giù` all'estremità destra del campo a discesa. Il nome del tuo computer verrà ora determinato e visualizzato per la selezione all'interno della lista a discesa. Una volta che il campo è riempito con il nome del tuo computer e questa impostazione è memorizzata, lo scambio di dati potrà essere avviato solo dal tuo computer d'ora in poi.

- **Esegui nel percorso**:
  Inserisci `%LOCALAPPDATA%\Urban\VitalControl\Synchronizer` in questo campo di input. Questo è il percorso assoluto del programma `VitalControl Synchronizer` (o più specificamente del file `vcsynchronizer.exe`). Se la directory di destinazione per questo programma è stata modificata durante l'[installazione del VCSynchronizer](../../vcsynchronizer/installation), inserisci qui la directory di destinazione selezionata.


- **Program HerdePlus 🡒 Tecnologia**:  
  Questo campo di input deve essere compilato con il valore `vc_imp.bat`. Il file batch corrispondente specifica la sequenza delle operazioni durante l'importazione dei dati.

- **Tecnologia 🡒 Program HerdePlus**:  
  Questo campo di input deve essere compilato con il valore `vc_exp.bat`. Il file batch corrispondente specifica la sequenza delle operazioni durante l'esportazione dei dati.

### Categoria `Dati Animali` ➋

Ulteriori regolazioni devono essere effettuate nella categoria 'Dati animali' ➋ per rendere completamente funzionale lo scambio di dati.

- **Numero animale**:  
  Questa impostazione determina quale ID ricevono gli animali per la visualizzazione sul dispositivo VitalControl:
  - Se hai assegnato ID brevi (`Numero stalla`, da 2 a 6 cifre) ai tuoi animali, dovresti selezionare il valore 'Numero stalla' qui: l'ID visualizzato di un animale sul VitalControl corrisponderà quindi al numero di stalla assegnato all'animale.
  - Se **non** hai assegnato numeri ID brevi ai tuoi animali - questo è comune nel settore dell'ingrasso, per esempio - allora dovresti selezionare il valore `Numero tag (5 cifre)` qui. L'ID visualizzato di un animale sul dispositivo VitalControl corrisponderà quindi alle ultime 5 cifre dell'ID stampato sul tag giallo dell'orecchio dell'animale.
  
<br>

- **Numero trasmettitore**:  
  Questa impostazione determina il numero previsto per un animale durante la scansione RFID:  
  - Se metti un collare con un transponder sui tuoi animali o metti un transponder auricolare sui tuoi animali - per esempio per l'identificazione al mangiatoio automatico -, dovresti selezionare il valore 'Transponder' qui.
  - Se i tuoi animali o vitelli portano tag auricolari elettronici codificati con il numero di identificazione nazionale ufficiale a 15 cifre del tuo animale che servirà per l'identificazione dell'animale per tutta la sua vita, dovresti selezionare il valore 'Numero tag (15 cifre)` qui.

<br>

- **Età minima per il trasferimento**:  
  Se `0` è inserito come valore per questo campo di input, **tutti gli animali** saranno trasferiti al dispositivo VitalControl, indipendentemente dalla loro età. Un valore maggiore di `0` definisce l'età minima (in giorni) per gli animali da trasferire. Per esempio, se **solo le mucche** devono essere trasferite al dispositivo, un valore di 600 giorni (= 20 mesi) deve essere inserito qui come età minima.

### Categoria `Luoghi` ➌

Usa questa categoria per escludere gli animali in determinati luoghi dal trasferimento dei dati al dispositivo. Per farlo, rimuovi il segno di spunta dai luoghi per i quali **non** vuoi trasferire gli animali ospitati lì al dispositivo.

### Categoria `Uscita` ➍

Spunta l'opzione 'Uscita in HERDEplus' qui. In questo modo specifichi che gli animali che hanno lasciato il gregge vengono anche eliminati dal dispositivo VitalControl durante la sincronizzazione.
Spunta anche l'opzione 'Non esiste in magazzino'. In questo modo specifichi che gli animali sul VitalControl che non sono conosciuti dal software `Herde` vengono eliminati dal VitalControl durante la sincronizzazione.

## Configurazione: Impostazioni specifiche della tecnologia

Successivamente, fai clic sulla scheda `Impostazioni specifiche della tecnologia` per determinare l'ambito dello scambio di dati. Si consiglia di selezionare tutte le caselle di controllo elencate tranne la casella di controllo `Salva file di importazione dopo l'elaborazione`. Quest'ultima casella di controllo è destinata a scopi diagnostici e dovrebbe essere selezionata solo se richiesto dal personale di servizio.

- **Età massima per il trasferimento**:  
  Se qui viene inserito il valore `0`, **tutti gli animali** saranno trasferiti al dispositivo VitalControl, indipendentemente dalla loro età. Un valore maggiore di `0` definisce l'età massima (in giorni) per gli animali da trasferire. Se, ad esempio, **solo i vitelli** devono essere trasferiti al dispositivo, qui deve essere inserito un valore di 90 giorni (= 3 mesi) come età massima.

   ![Software Herde: Configurazione Scambio dati](../screenshots/technology-specific-settings.png "Scambio dati: impostazioni specifiche").

## Salva impostazioni di scambio dati

Premi il tasto `Salva (F2)` dopo aver configurato correttamente tutti i parametri di configurazione. Il set di parametri per lo scambio di dati con il dispositivo VitalControl è ora salvato e pronto per l'uso.  
Esegui ora uno [scambio di dati](../data-exchange/) per verificare se le impostazioni stabilite sono valide in modo da poter scambiare con successo i dati da e verso il dispositivo VitalControl.
