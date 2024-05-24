---
title: Esportazione dei dati su chiavetta USB
linkTitle: Su chiavetta USB
date: 2023-07-20
weight: 10
description: >
  Esporta i file di dati CVS contenenti i dati degli animali e i valori di misurazione memorizzati sul dispositivo VitalControl su una chiavetta USB.
categories: [Esportazione dei dati]
tags: [File CSV, Chiavetta USB]
translationKey: data-export/usb-drive
---
{{% usb-drive/it "Per eseguire un'esportazione dei dati del dispositivo," %}}

## Eseguire l'esportazione dei dati {#perform-data-export}	

1. Apri l'elemento del menu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Dispositivo" /> `Dispositivo` nella schermata principale del tuo dispositivo VitalControl.

2. Richiama il sottomenu `Gestione dati`, seleziona l'elemento del menu `Dati animali` e conferma con `OK`.

3. Si apre un altro sottomenu. Seleziona l'elemento del menu `Esporta dati animali (csv)` e conferma con `OK`.

4. Ora ti viene chiesto di inserire una chiavetta USB:

   ![VitalControl: Percorso del menu esportazione dati](../images/data-export.png "Richiama esportazione dati")

5. Inserisci la chiavetta USB (plug C) nel connettore situato nella parte inferiore del dispositivo.

   ![VitalControl: inserisci chiavetta USB](/images/firmware/update/plug-in-dual-usb-stick.svg "Inserisci chiavetta USB")

6. Una volta che il dispositivo ha rilevato l'inserimento della chiavetta USB, l'esportazione dei dati viene avviata automaticamente. La scrittura dei dati di backup può richiedere alcuni secondi. Quando l'esportazione dei dati è terminata, viene visualizzato un messaggio di successo:

   ![VitalControl: messaggio di successo esportazione dati](../images/success-data-export.png "Successo esportazione dati")

7. L'esportazione dei dati è ora completa. Troverai i quattro [file di esportazione](../export-files/) creati all'interno della directory `export-csv` sulla tua chiavetta USB.

   ![Chiavetta USB con file di esportazione VitalControl](../images/export-files.png "File di esportazione su chiavetta USB")

   {{% alert title="Note" %}}
  - Per evitare la sovrascrittura accidentale dei file di esportazione, il nome di ciascun file di esportazione include sempre la data e l'ora in cui il file è stato creato. Assicurati di utilizzare l'ultima versione dei file di esportazione se hai esportato i dati degli animali più volte.
  - La dimensione dei file di esportazione dipende dal numero di animali sul VitalControl e dal numero di misurazioni effettuate. In generale, i file di esportazione occupano solo pochi kB di spazio di archiviazione sulla chiavetta USB.
   {{% /alert %}}
