---
title: Datautveksling mellom VitalControl og besetningsstyringsprogramvaren Herde
linkTitle: Datautveksling
date: 2023-08-04T12:22:12+02:00
draft: false
description: >
  Synkroniser dyrene lagret på VitalControl-enheten med dyr administrert av *Herde*-programvaren og overfør målte verdier registrert med VitalControl-enheten til *Herde*-programvaren.
weight: 20
categories: [Datautveksling, DSP Herde]
translationKey: DSPherde/data-exchange
---
Følg trinnene nedenfor for å synkronisere data mellom programvaren `Herde` og VitalControl-enheten:

### Koble VitalControl til PC {#connect-vitalcontrol-to-pc}

1. Koble VitalControl-enheten til datamaskinen eller laptopen din via den medfølgende USB-kabelen.

   ![Koble VitalControl til PC eller laptop](/images/synchronisation/connect-to-pc.svg "Koble VitalControl til PC")

1. Sørg for at VitalControl-enheten er slått på.

### Utfør datautveksling {#perform-data-exchange}

1. I programvaren `Herde`, utfør en full datautveksling. Avhengig av konfigurasjonen av brukergrensesnittet ditt, kan du utføre denne utvekslingen via menyvalget `Full datautveksling` i hovedmenyen (øverste nivå _Teknologi_), i sidemenyen eller i din tilpassede verktøykasse (horisontal eller vertikal).

   ![Programvare Herde: Utløser en full datautveksling](../screenshots/data-exchange.png "Herde: Utløser datautveksling")

1. Et pop-up-vindu åpnes, som viser de angitte teknologikoblingene i sidemenyen til venstre. Klikk på knappen merket `VitalControl` for å starte datautvekslingen:

   ![Programvare Herde, Starter datautveksling](../screenshots/start-transfer.png "Herde: Start datautveksling")

1. Ved første gangs datautveksling vises en advarsel som indikerer at det ennå ikke er registrert noen dyr på VitalControl-enheten. Bekreft denne meldingen med `Ja`. Datautvekslingen starter da.

   ![Programvare Herde, datautveksling: advarsel](../screenshots/warning.png "Datautveksling: advarsel")

1. Datautveksling er en to-trinns prosess: I første trinn <span style="font-size: 140%">➊</span> overføres dyredata fra programvaren `Herde` til VitalControl. I andre trinn <span style="font-size: 140%">➋</span> overføres måledata samlet med VitalControl til programvaren `Herde`. Antall importerte datasett (dyr, kalvinger, varsler og vekter) er oppført i pop-up-vinduet:

![Data exchange with software Herde: Course of actions](../screenshots/data-transfer.png "Data exchange: Course of actions")

1. Vellykket fullføring av datautveksling signaliseres via en pop-up med en suksessmelding.

   ![Software Herde: Success message data exchange](../screenshots/success-message.png "Herde: Success message data exchange")

    {{% alert title="Attention" %}}
Hvis mange dyr er registrert på VitalControl-enheten, kan datautvekslingen ta litt tid. Fremdriften av dataoverføringen kan sees på skjermen til enheten.

![VitalControl, data exchange: progress bar](../../vcsynchronizer/images/import-animals/data-transfer.png "VitalControl: progress bar data exchange")
    {{% /alert %}}
