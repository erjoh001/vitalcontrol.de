---
title: "Scansione RFID: test di portata e diagnosi dei transponder"
linkTitle: RFID scan
date: 2023-08-07T10:09:46+02:00
draft: false
categorie: [Diagnosi, Scansione RFID]
description: >
  Controlla la portata del tuo scanner RFID o mostra il protocollo di lettura e i numeri memorizzati su transponder sconosciuti.
translationKey: diagnosis/rfid-scan
weight: 20
---

Utilizzando il menu 'Test di portata' è possibile determinare se il dispositivo VitalControl può leggere i transponder che hai a disposizione. Oltre a verificare la compatibilità, puoi anche determinare comodamente il protocollo di trasmissione utilizzato da questi transponder e visualizzare il numero memorizzato sul transponder.

## Eseguire il test di portata {#perform-range-test}

1. Apri l'elemento del menu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Dispositivo" /> `{{<T "Device" >}}` nella schermata principale del tuo dispositivo VitalControl.

1. Richiama il sottomenu `{{<T "Service" >}}`, seleziona l'elemento del menu `{{<T "RangeTest" >}}` e conferma con `{{<T "Ok" >}}`. Ora viene visualizzata una schermata di scansione animata.

    ![VitalControl: Percorso del menu Test di portata scanner RFID](../images/rangetest.png "Test di portata scanner RFID")

1. Avvicina lentamente il tuo transponder alla testa di lettura del dispositivo VitalControl. Per ottenere un buon risultato di lettura, il transponder deve essere allineato orizzontalmente alla testa di lettura del dispositivo VitalControl.

    ![VitalControl: avvicinare correttamente il transponder alla testa di lettura RFID](/images/diagnosis/transponderscan.svg "Scansione corretta del transponder")

1. Non appena lo scanner RFID rileva il transponder, viene attivato un allarme a vibrazione e il colore di sfondo dell'immagine del transponder visualizzata sullo schermo cambia in verde:

   ![VitalControl: Test di portata: Transponder rilevato](../images/transponder-detected.png "Transponder rilevato")

1. Muovi il transponder avanti e indietro più volte al confine del campo di lettura. In questo modo, puoi determinare la portata di lettura dello scanner RFID in combinazione con i transponder che stai utilizzando.

## Controllo del transponder {#transponder-check}

Eseguendo il test di portata descritto sopra, puoi ottenere informazioni anche sui transponder di diversa origine:

### Transponder ufficiali {#official-transponder-ear-tags}

1. Se utilizzi transponder ufficiali per i tuoi animali, sui quali è codificato il numero ufficiale di 15 cifre assegnato all'animale, le seguenti informazioni verranno visualizzate sullo schermo una volta letto il transponder:

    - ID di 15 cifre ufficialmente assegnato al tuo animale dal servizio nazionale di identificazione degli animali.
    - Paese in cui si trova l'azienda
    - Paese in cui si trova l'azienda (solo per le aziende tedesche)
    - Protocollo di trasmissione utilizzato (FDX o HDX)
    <br>

    ![VitalControl: verifica del transponder ufficiale](../images/transponder-official.png "Info transponder ufficiale")

### Transponder di fornitori terzi {#transponders-from-third-party-vendors}

1. Se utilizzi transponder di fornitori terzi, come Urban, per l'identificazione elettronica dei tuoi animali, le seguenti informazioni verranno visualizzate sullo schermo una volta letto il transponder:

    - ID codificato sul transponder, il numero di cifre varia a seconda del produttore
    - Produttore del transponder (se memorizzato sul transponder)
    - Protocollo di trasmissione utilizzato (FDX o HDX)
    <br>

    ![VitalControl: verifica del transponder del produttore](../images/transponder-manufacturer.png "Info transponder del produttore")
