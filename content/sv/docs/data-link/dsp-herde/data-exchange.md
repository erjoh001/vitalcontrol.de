---
title: Datautbyte mellan VitalControl och djurhanteringsprogramvaran Herde
linkTitle: Datautbyte
date: 2023-08-04T12:22:12+02:00
draft: false
description: >
  Synkronisera djuren som lagras på VitalControl-enheten med djur som hanteras av *Herde*-programvaran och överför mätvärden som registrerats med VitalControl-enheten till *Herde*-programvaran.
weight: 20
Kategorier: [Datautbyte, DSP Herde]
translationKey: DSPherde/data-exchange
---
Följ stegen nedan för att synkronisera data mellan programvaran `Herde` och VitalControl-enheten:

### Anslut VitalControl till PC {#connect-vitalcontrol-to-pc}

1. Anslut VitalControl-enheten till din dator eller laptop via den medföljande USB-kabeln.

   ![Anslut VitalControl till PC eller laptop](/images/synchronisation/connect-to-pc.svg "Anslut VitalControl till PC")

1. Se till att din VitalControl-enhet är påslagen.

### Utför datautbyte {#perform-data-exchange}

1. Inom programvaran `Herde`, utför ett fullständigt datautbyte. Beroende på konfigurationen av ditt användargränssnitt kan du starta detta utbyte via menyalternativet `Fullständigt datautbyte` i huvudmenyn (översta nivån _Teknologi_), i sidomenyn eller i din anpassade verktygslåda (horisontell eller vertikal).

   ![Programvara Herde: Starta ett fullständigt datautbyte](../screenshots/data-exchange.png "Herde: Starta datautbyte")

1. En pop-up öppnas som listar de stipulerade teknologikopplingarna i sidomenyn till vänster. Klicka på knappen märkt `VitalControl` för att starta datautbytet:

   ![Programvara Herde, Starta datautbyte](../screenshots/start-transfer.png "Herde: Starta datautbyte")

1. Vid första datautbytet visas en varning som indikerar att det ännu inte finns några djur registrerade på VitalControl-enheten. Bekräfta detta meddelande med `Ja`. Datautbytet startas då.

   ![Programvara Herde, datautbyte: varning](../screenshots/warning.png "Datautbyte: varning")

1. Datautbyte är en tvåstegsprocess: I det första steget <span style="font-size: 140%">➊</span> överförs djurdata från programvaran `Herde` till VitalControl. I det andra steget <span style="font-size: 140%">➋</span> överförs mätdata som samlats in med VitalControl till programvaran `Herde`. Antalet importerade dataset (djur, kalvningar, varningar och vikter) listas i pop-upen:

![Data exchange with software Herde: Course of actions](../screenshots/data-transfer.png "Data exchange: Course of actions")

1. Lyckad slutförande av datautbyte signaleras via en pop-up med ett framgångsmeddelande.

   ![Software Herde: Success message data exchange](../screenshots/success-message.png "Herde: Success message data exchange")

    {{% alert title="Attention" %}}
Om många djur är registrerade på VitalControl-enheten kan datautbytet ta lite tid. Framstegen för dataöverföringen kan ses på enhetens display.

![VitalControl, data exchange: progress bar](../../vcsynchronizer/images/import-animals/data-transfer.png "VitalControl: progress bar data exchange")
    {{% /alert %}}
