---
title: "Aggiornamento del firmware del tuo dispositivo"
linkTitle: Aggiornamento
weight: 4
description: >
  Eseguendo un aggiornamento del firmware, il firmware del tuo dispositivo VitalControl può essere aggiornato alle versioni più recenti disponibili.
---
Innanzitutto, assicurati che una [versione firmware più recente](../versions/) sia disponibile per il tuo dispositivo e, se necessario, aggiorna il firmware del tuo dispositivo seguendo le istruzioni seguenti.

## Accessorio richiesto {#required-accessory}

Per installare l'aggiornamento sul tuo dispositivo, hai bisogno di una chiavetta USB duale (2-in-1 USB stick) Type-C/USB 3.0 con un connettore USB C e un connettore USB A. Una tale chiavetta USB duale viene fornita insieme al tuo dispositivo. Puoi anche acquistare una tale chiavetta USB da diversi fornitori.

![Chiavetta USB duale (USB A / USB C)](/images/firmware/update/usb-dual-stick.svg "Chiavetta USB duale")

## Preparazione: scarica il firmware più recente {#preparation-download-latest-firmware}

1. Inserisci la tua chiavetta USB nel connettore USB del tuo computer. Quindi crea una nuova directory denominata 'update' nella directory principale della tua chiavetta USB.

    ![Esplora risorse di Windows: chiavetta USB con directory 'update'](../images/create-folder-update.png "Chiavetta USB: directory 'update'")

1. Scarica il [file del firmware](/download/firmware.vcu) (nome del file: `firmware.vcu`) e salvalo nella directory `update` precedentemente creata sulla tua chiavetta USB. Il file di aggiornamento richiede circa 2,5 MB di spazio di archiviazione sulla chiavetta USB.

    ![Esplora risorse di Windows: chiavetta USB con file del firmware 'firmware.vcu'](../images/save-firmware-file.png "Chiavetta USB con file del firmware")

1. Crea un [backup dei dati][] sul tuo dispositivo.

    {{% alert title="Info" %}}
Il backup dei dati è una misura precauzionale raccomandata. Tutti i dati degli animali e del dispositivo esistenti saranno preservati durante l'aggiornamento del firmware del dispositivo VitalControl.
    {{% /alert %}}

[backup dei dati]: {{< relref "../backup/backup/" >}}

## Eseguire l'aggiornamento del firmware {#perform-firmware-update}

1. Apri la voce di menu `Dispositivo` nella schermata principale del tuo dispositivo VitalControl.

1. Richiama il sottomenu `Servizio`, seleziona la voce di menu `Aggiornamento firmware` e conferma con `OK`. Ora ti verrà chiesto di inserire la chiavetta USB che hai già preparato:

![VitalControl: menu path firmware update](../images/firmware-update.png "Aggiornamento firmware")

1. Inserire l'unità flash USB (connettore C) nel connettore situato nella parte inferiore del dispositivo e confermare con `OK`.

    ![VitalControl: Insert USB flash drive](/images/firmware/update/plug-in-dual-usb-stick.svg "Inserire l'unità flash USB")

    Il dispositivo esegue l'aggiornamento automaticamente. Durante l'aggiornamento, il display informa sul progresso dell'aggiornamento. Dopo il completamento dell'aggiornamento, il dispositivo si riavvia automaticamente e visualizza un messaggio di successo dopo il riavvio:

   ![VitalControl: Success message firmware update](../images/update-success.png "Aggiornamento firmware riuscito")

   Il nuovo firmware è ora installato sul tuo dispositivo.
