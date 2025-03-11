---
title: Datu apmaiņa starp VitalControl un ganāmpulka pārvaldības programmatūru Herde
linkTitle: Datu apmaiņa
date: 2023-08-04T12:22:12+02:00
draft: false
description: >
  Sinhronizējiet dzīvniekus, kas saglabāti VitalControl ierīcē, ar dzīvniekiem, kurus pārvalda *Herde* programmatūra, un pārsūtiet mērījumu vērtības, kas ierakstītas ar VitalControl ierīci, uz *Herde* programmatūru.
weight: 20
categories: [Datu apmaiņa, DSP Herde]
translationKey: DSPherde/data-exchange
---
Izpildiet tālāk norādītās darbības, lai sinhronizētu datus starp programmatūru `Herde` un VitalControl ierīci:

### Pievienojiet VitalControl datoram {#connect-vitalcontrol-to-pc}

1. Pievienojiet VitalControl ierīci savam datoram vai klēpjdatoram, izmantojot piegādāto USB kabeli.

   ![Pievienojiet VitalControl datoram vai klēpjdatoram](/images/synchronisation/connect-to-pc.svg "Pievienojiet VitalControl datoram")

1. Pārliecinieties, ka jūsu VitalControl ierīce ir ieslēgta.

### Veiciet datu apmaiņu {#perform-data-exchange}

1. Programmatūrā `Herde` veiciet pilnu datu apmaiņu. Atkarībā no jūsu lietotāja saskarnes konfigurācijas, šo apmaiņu varat izsaukt, izmantojot izvēlnes vienumu `Pilna datu apmaiņa` galvenajā izvēlnē (augšējā līmeņa vienums _Tehnoloģija_), sānu izvēlnē vai jūsu pielāgotajā rīkjoslā (horizontālā vai vertikālā).

   ![Programmatūra Herde: Pilnas datu apmaiņas izsaukšana](../screenshots/data-exchange.png "Herde: Datu apmaiņas izsaukšana")

1. Atveras uznirstošais logs, kurā sānu joslā pa kreisi ir uzskaitītas noteiktās tehnoloģiju savienojumi. Noklikšķiniet uz pogas ar uzrakstu `VitalControl`, lai sāktu datu apmaiņu:

   ![Programmatūra Herde, Datu apmaiņas sākšana](../screenshots/start-transfer.png "Herde: Datu apmaiņas sākšana")

1. Pirmās datu apmaiņas laikā parādās brīdinājums, norādot, ka VitalControl ierīcē vēl nav reģistrētu dzīvnieku. Apstipriniet šo paziņojumu ar `Jā`. Tad tiek sākta datu apmaiņa.

   ![Programmatūra Herde, datu apmaiņa: brīdinājums](../screenshots/warning.png "Datu apmaiņa: brīdinājums")

1. Datu apmaiņa ir divpakāpju process: pirmajā solī <span style="font-size: 140%">➊</span> dzīvnieku dati tiek pārsūtīti no programmatūras `Herde` uz VitalControl. Otrajā solī <span style="font-size: 140%">➋</span> mērījumu dati, kas savākti ar VitalControl, tiek pārsūtīti uz programmatūru `Herde`. Importēto datu kopu skaits (dzīvnieki, dzemdības, brīdinājumi un svari) ir uzskaitīts uznirstošajā logā:

![Datu apmaiņa ar programmatūru Herde: Darbību gaita](../screenshots/data-transfer.png "Datu apmaiņa: Darbību gaita")

1. Veiksmīga datu apmaiņas pabeigšana tiek norādīta ar uznirstošo logu, kurā ir veiksmīga ziņa.

   ![Programmatūra Herde: Veiksmīga ziņa datu apmaiņai](../screenshots/success-message.png "Herde: Veiksmīga ziņa datu apmaiņai")

    {{% alert title="Uzmanību" %}}
Ja uz VitalControl ierīces ir reģistrēti daudzi dzīvnieki, datu apmaiņa var aizņemt kādu laiku. Datu pārsūtīšanas gaitu var redzēt ierīces displejā.

![VitalControl, datu apmaiņa: progresa josla](../../vcsynchronizer/images/import-animals/data-transfer.png "VitalControl: progresa josla datu apmaiņai")
    {{% /alert %}}
