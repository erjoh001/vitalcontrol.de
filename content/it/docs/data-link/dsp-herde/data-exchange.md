---
title: Scambio di dati tra VitalControl e software di gestione mandria Herde
linkTitle: Scambio di dati
date: 2023-08-04T12:22:12+02:00
draft: false
description: >
  Sincronizza gli animali memorizzati sul dispositivo VitalControl con gli animali gestiti dal software *Herde* e trasferisci i valori misurati registrati con il dispositivo VitalControl al software *Herde*.
weight: 20
categorie: [Scambio di dati, DSP Herde]
translationKey: DSPherde/data-exchange
---
Segui i passaggi seguenti per sincronizzare i dati tra il software `Herde` e il dispositivo VitalControl:

### Collegare VitalControl al PC

1. Collega il dispositivo VitalControl al tuo computer o laptop tramite il cavo USB fornito.

   ![Collega VitalControl al PC o laptop](/images/synchronisation/connect-to-pc.svg "Collega VitalControl al PC")

1. Assicurati che il tuo dispositivo VitalControl sia acceso.

### Eseguire lo scambio di dati

1. All'interno del software `Herde`, esegui uno scambio di dati completo. A seconda della configurazione della tua interfaccia utente, puoi richiamare questo scambio tramite la voce di menu `Scambio di dati completo` nel menu principale (voce di livello superiore _Tecnologia_), nel menu della barra laterale o nella tua toolbox personalizzata (orizzontale o verticale).

   ![Software Herde: Avvio di uno scambio di dati completo](../screenshots/data-exchange.png "Herde: Avvio scambio di dati")

1. Si apre un pop-up che elenca i collegamenti tecnologici stipulati nella barra laterale a sinistra. Clicca sul pulsante etichettato `VitalControl` per avviare lo scambio di dati:

   ![Software Herde, Avvio dello scambio di dati](../screenshots/start-transfer.png "Herde: Avvio scambio di dati")

1. Al primo scambio di dati appare un avviso che indica che non ci sono ancora animali registrati sul dispositivo VitalControl. Conferma questo avviso con `Sì`. Lo scambio di dati verrà avviato.

   ![Software Herde, scambio di dati: avviso](../screenshots/warning.png "Scambio di dati: avviso")

1. Lo scambio di dati è un processo in due fasi: nella prima fase <span style="font-size: 140%">➊</span> i dati degli animali vengono trasferiti dal software `Herde` al VitalControl. Nella seconda fase <span style="font-size: 140%">➋</span>, i dati di misurazione raccolti con il VitalControl vengono trasferiti nel software `Herde`. Il numero di set di dati importati (animali, parti, avvisi e pesi) è elencato nel pop-up:


   ![Scambio dati con il software Herde: Corso delle azioni](../screenshots/data-transfer.png "Scambio dati: Corso delle azioni")

1. Il completamento con successo dello scambio dati è segnalato tramite un pop-up con un messaggio di successo.

   ![Software Herde: Messaggio di successo scambio dati](../screenshots/success-message.png "Herde: Messaggio di successo scambio dati")

    {{% alert title="Attenzione" %}}
Se molti animali sono registrati sul dispositivo VitalControl, lo scambio dati potrebbe richiedere del tempo. Il progresso del trasferimento dati può essere visto sul display del dispositivo.

![VitalControl, scambio dati: barra di progresso](../../vcsynchronizer/images/import-animals/data-transfer.png "VitalControl: barra di progresso scambio dati")
    {{% /alert %}}
