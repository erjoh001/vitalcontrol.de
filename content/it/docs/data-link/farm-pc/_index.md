---
title: Esportazione di dati sugli animali e misurazioni al PC di gestione della fattoria
linkTitle: Esportazione dati (PC)
date: 2023-07-19
weight: 15
description: >
 Esporta i dati sugli animali e i valori di misurazione dal dispositivo VitalControl in diversi file CVS
categorie: [Esportazione dati]
translationKey: farmPC
---
Procedi come segue per esportare i dati da VitalControl a un dispositivo di archiviazione di massa del tuo PC:

### Collegare VitalControl al PC

1. Collega il dispositivo VitalControl al tuo computer o laptop tramite il cavo USB fornito.

   ![Collega VitalControl al PC o laptop](/images/synchronisation/connect-to-pc.svg "Collega VitalControl al PC")

1. Assicurati che il tuo dispositivo VitalControl sia acceso.

### Eseguire l'esportazione dei dati

1. Premi il tasto Windows per aprire il menu Start

1. *Solo Windows 11*: Clicca sul pulsante `Tutte le app`

1. Nell'elenco delle applicazioni installate, scorri verso il basso fino alla lettera `U`. Lì dovresti trovare una voce di menu `Urban VitalControl`. Se necessario, espandi questa voce in modo che vengano visualizzate tutte le voci di sottomenu.

   {{% alert title="Attenzione" %}}
Se non riesci a trovare la voce `Urban VitalControl` nell'elenco delle applicazioni, potrebbe essere necessario [installare](../vcsynchronizer/installation/) prima il software `VCSynchronizer` sul tuo PC.
   {{% /alert %}}

1. Clicca sulla voce di menu `Esportazione dati (CVS)`.

   ![Menu Start di Windows, voce di menu per Urban VitalControl (VCSynchronizer)](../vcsynchronizer/images/data-export/data-export.png "Menu Start di Windows, VitalControl")

1. Il processo di esportazione viene avviato. Una volta terminata l'esportazione dei dati, si apre una finestra di Esplora risorse che visualizza la directory locale dei dati con i quattro [file di esportazione](../../data-export/export-files/) appena creati.

   ![Directory locale dei dati con file di esportazione](../../data-export/images/export-files.png "File di esportazione, memorizzati localmente")

   {{% alert title="Nota" %}}
  Puoi aprire ciascuno di questi quattro [file di esportazione](../../data-export/export-files/) in un programma di fogli di calcolo a tua scelta (come [Microsoft Excel](https://products.office.com/excel) o [OpenOffice Calc](https://www.openoffice.org/)) e eseguire analisi avanzate dei dati lì. Come esempio, di seguito è mostrata la visualizzazione della tabella `animals.csv` in un programma di fogli di calcolo:


  ![Tabella dei dati sugli animali esportata aperta in un software di fogli di calcolo](../../data-export/images/animals.png "Software di fogli di calcolo con dati sugli animali")
   {{% /alert %}}
