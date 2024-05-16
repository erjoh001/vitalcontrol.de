---
title: "Ripristino di un backup dei dati"
linkTitle: "Ripristina"
date: 2023-07-20
weight: 20
description: >
 Tramite un ripristino dei dati, l'intero set di dati di un dispositivo VitalControl può essere ripristinato su un altro dispositivo utilizzando un file di backup.
translationKey: restore
---
{{% usb-drive/it "Per ripristinare un backup dei dati sul tuo dispositivo VitalControl," %}}

Su questa chiavetta USB deve esistere una directory `backup`, che deve contenere un valido **file di backup dei dati `backup.vcu`**.

![Chiavetta USB con file di backup VitalControl](../images/backup-file.png "Chiavetta USB con file di backup")

{{% alert title="Nota" %}}
All'interno della directory `backup` della tua chiavetta USB, potresti trovare diversi file di backup con estensione `.vcu`. Il dispositivo VitalControl ripristina sempre i dati di backup dal file denominato `backup.vcu`, che è sempre il file più recente. Se desideri ripristinare i dati da un file di backup più vecchio (che contiene la data del backup nel nome del file), devi rinominare questo file di backup più vecchio in `backup.vcu` prima di eseguire il ripristino dei dati!
{{% /alert %}}

## Ripristino dei dati sul dispositivo VitalControl

1. Apri la voce di menu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Dispositivo" /> `Dispositivo` nella schermata principale del dispositivo VitalControl su cui desideri ripristinare i dati.

2. Accedi al sottomenu `Gestione dati` e seleziona successivamente la voce di sottomenu `Backup dei dati`. Ora seleziona la voce di menu `Ripristina backup` e conferma con `OK`. Ti verrà chiesto di inserire una chiavetta USB:

   ![VitalControl: percorso del menu ripristino dati](../images/restore.png "Ripristino dal file di backup")

3. Inserisci la chiavetta USB (connettore C) nel connettore situato nella parte inferiore del dispositivo.

   ![VitalControl: inserisci la chiavetta USB](/images/firmware/update/plug-in-dual-usb-stick.svg "Inserisci la chiavetta USB")

4. Una volta che il dispositivo ha rilevato l'inserimento della chiavetta USB, appare una finestra di conferma. Conferma questo popup con `Sì` per avviare il ripristino dei dati. La decompressione e il ripristino del backup possono richiedere un minuto o più. Quando il ripristino dei dati è completo, viene visualizzato un messaggio di successo:

![VitalControl: success message data restore](../images/restore-done.png "Success message data restore")

5. I dati di backup sono stati ripristinati con successo sul dispositivo VitalControl.
