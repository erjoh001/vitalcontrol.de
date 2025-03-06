---
title: Dataudveksling mellem VitalControl og besætningsstyringssoftware Herde
linkTitle: Dataudveksling
date: 2023-08-04T12:22:12+02:00
draft: false
description: >
  Synkroniser dyrene gemt på VitalControl-enheden med dyr administreret af *Herde* software og overfør målte værdier registreret med VitalControl-enheden til *Herde* software.
weight: 20
kategorier: [Dataudveksling, DSP Herde]
translationKey: DSPherde/data-exchange
---
Følg nedenstående trin for at synkronisere data mellem softwaren `Herde` og VitalControl-enheden:

### Tilslut VitalControl til PC {#connect-vitalcontrol-to-pc}

1. Tilslut VitalControl-enheden til din computer eller laptop via det medfølgende USB-kabel.

   ![Tilslut VitalControl til PC eller laptop](/images/synchronisation/connect-to-pc.svg "Tilslut VitalControl til PC")

1. Sørg for, at din VitalControl-enhed er tændt.

### Udfør dataudveksling {#perform-data-exchange}

1. Inden for softwaren `Herde`, udfør en fuld dataudveksling. Afhængigt af konfigurationen af din brugergrænseflade kan du udføre denne udveksling via menupunktet `Fuld dataudveksling` i hovedmenuen (øverste niveau _Teknologi_), i sidemenuen eller i din tilpassede værktøjskasse (vandret eller lodret).

   ![Software Herde: Udløsning af en fuld dataudveksling](../screenshots/data-exchange.png "Herde: Udløsning af dataudveksling")

1. Der åbnes en pop-up, der viser de foreskrevne teknologikoblinger i sidemenuen til venstre. Klik på knappen mærket `VitalControl` for at starte dataudvekslingen:

   ![Software Herde, Start dataudveksling](../screenshots/start-transfer.png "Herde: Start dataudveksling")

1. Ved første dataudveksling vises en advarsel, der indikerer, at der endnu ikke er registreret nogen dyr på VitalControl-enheden. Bekræft denne meddelelse med `Ja`. Dataudvekslingen starter derefter.

   ![Software Herde, dataudveksling: advarsel](../screenshots/warning.png "Dataudveksling: advarsel")

1. Dataudveksling er en to-trins proces: I første trin <span style="font-size: 140%">➊</span> overføres dyredata fra softwaren `Herde` til VitalControl. I andet trin <span style="font-size: 140%">➋</span> overføres måledata indsamlet med VitalControl til softwaren `Herde`. Antallet af importerede datasæt (dyr, kælvninger, advarsler og vægte) er angivet i pop-up'en:

![Data exchange with software Herde: Course of actions](../screenshots/data-transfer.png "Data exchange: Course of actions")

1. Vellykket gennemførelse af dataudveksling signaleres via en pop-up med en succesmeddelelse.

   ![Software Herde: Success message data exchange](../screenshots/success-message.png "Herde: Success message data exchange")

    {{% alert title="Attention" %}}
Hvis mange dyr er registreret på VitalControl-enheden, kan dataudvekslingen tage noget tid. Fremskridtet for dataoverførslen kan ses på enhedens display.

![VitalControl, data exchange: progress bar](../../vcsynchronizer/images/import-animals/data-transfer.png "VitalControl: progress bar data exchange")
    {{% /alert %}}
