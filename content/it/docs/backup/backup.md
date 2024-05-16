---
title: "Creazione di un backup dei dati"
linkTitle: "Backup"
date: 2023-07-20
weight: 20
description: >
  Tramite un backup dei dati, viene creato un file di backup che contiene tutti i dati memorizzati sul dispositivo VitalControl.
categories: [Backup dei dati]
tags: [file di backup, chiavetta USB]
translationKey: backup
---
{{% usb-drive/it "Per eseguire un backup dei dati del tuo dispositivo," %}}

## Eseguire il backup dei dati

1. Apri l'elemento di menu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Dispositivo" /> `Dispositivo` nella schermata principale del tuo dispositivo VitalControl.

2. Richiama il sottomenu `Gestione dei dati` e seleziona successivamente l'elemento del sottomenu `Backup dei dati`. Ora seleziona l'elemento di menu `Crea backup` e conferma con `OK`. Ti verrà chiesto di inserire una chiavetta USB:

   ![VitalControl: percorso del menu backup dei dati](../images/backup.png "Richiama backup dei dati")

3. Inserisci la chiavetta USB (plug C) nel connettore situato nella parte inferiore del dispositivo.

   ![VitalControl: inserisci chiavetta USB](/images/firmware/update/plug-in-dual-usb-stick.svg "Inserisci chiavetta USB")

4. Una volta che il dispositivo ha rilevato l'inserimento della chiavetta USB, il backup dei dati viene avviato automaticamente. La raccolta, compressione e scrittura dei dati di backup può richiedere un minuto o più. Quando il backup è completato, viene visualizzato un messaggio di successo:

   ![VitalControl: messaggio di successo backup](../images/backup-done.png "Backup dei dati riuscito")

5. Il backup dei dati è ora creato. Troverai il file creato `backup.vcu` nella directory `backup` sulla tua chiavetta USB. Il file di backup richiede circa 1 MB di spazio di archiviazione sulla chiavetta.

   ![Chiavetta USB con file di backup VitalControl](../images/backup-file.png "Chiavetta USB con file di backup")

   {{% alert title="Suggerimento" %}}
  Se un file `backup.vcu` esiste già nella directory `backup` della tua chiavetta USB, questo file verrà rinominato. Il nuovo nome del file è composto dalla stringa iniziale `backup` e dalla data e ora in cui il file di backup è stato creato (es. `backup_2023-07-17_12-50-37.vcb`). Il nuovo file di backup scritto è sempre denominato `backup.vcu`.
    {{% /alert %}}


6. Il file di backup creato può essere utilizzato per [ripristinare](../restore) i dati memorizzati su qualsiasi dispositivo VitalControl, se necessario.
