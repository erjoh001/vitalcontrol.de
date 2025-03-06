---
title: Razmjena podataka između VitalControl i softvera za upravljanje stadom Herde
linkTitle: Razmjena podataka
date: 2023-08-04T12:22:12+02:00
draft: false
description: >
  Sinkronizirajte životinje pohranjene na uređaju VitalControl sa životinjama kojima upravlja softver *Herde* i prenesite izmjerene vrijednosti zabilježene uređajem VitalControl u softver *Herde*.
weight: 20
categories: [Razmjena podataka, DSP Herde]
translationKey: DSPherde/data-exchange
---
Slijedite korake u nastavku kako biste sinkronizirali podatke između softvera `Herde` i uređaja VitalControl:

### Povežite VitalControl s računalom {#connect-vitalcontrol-to-pc}

1. Povežite uređaj VitalControl s računalom ili prijenosnim računalom putem priloženog USB kabela.

   ![Povežite VitalControl s računalom ili prijenosnim računalom](/images/synchronisation/connect-to-pc.svg "Povežite VitalControl s računalom")

1. Provjerite je li vaš uređaj VitalControl uključen.

### Izvršite razmjenu podataka {#perform-data-exchange}

1. Unutar softvera `Herde`, izvršite potpunu razmjenu podataka. Ovisno o konfiguraciji vašeg korisničkog sučelja, ovu razmjenu možete pokrenuti putem stavke izbornika `Full data exchange` u glavnom izborniku (najviša razina stavke _Technology_), u bočnom izborniku ili u vašem prilagođenom alatu (horizontalno ili vertikalno).

   ![Softver Herde: Pokretanje potpune razmjene podataka](../screenshots/data-exchange.png "Herde: Pokretanje razmjene podataka")

1. Otvara se skočni prozor koji prikazuje propisane tehnološke spojeve u bočnom izborniku s lijeve strane. Kliknite na gumb označen `VitalControl` kako biste započeli razmjenu podataka:

   ![Softver Herde, Pokretanje razmjene podataka](../screenshots/start-transfer.png "Herde: Pokretanje razmjene podataka")

1. Prilikom prve razmjene podataka pojavljuje se upozorenje koje ukazuje da na uređaju VitalControl još nisu registrirane životinje. Potvrdite ovu obavijest s `Yes`. Tada započinje razmjena podataka.

   ![Softver Herde, razmjena podataka: upozorenje](../screenshots/warning.png "Razmjena podataka: upozorenje")

1. Razmjena podataka je proces u dva koraka: U prvom koraku <span style="font-size: 140%">➊</span> podaci o životinjama prenose se iz softvera `Herde` na VitalControl. U drugom koraku <span style="font-size: 140%">➋</span>, podaci o mjerenjima prikupljeni uređajem VitalControl prenose se u softver `Herde`. Broj uvezenih skupova podataka (životinje, teljenja, upozorenja i težine) naveden je u skočnom prozoru:

![Razmjena podataka sa softverom Herde: Tijek radnji](../screenshots/data-transfer.png "Razmjena podataka: Tijek radnji")

1. Uspješan završetak razmjene podataka signalizira se putem skočnog prozora s porukom o uspjehu.

   ![Softver Herde: Poruka o uspjehu razmjene podataka](../screenshots/success-message.png "Herde: Poruka o uspjehu razmjene podataka")

    {{% alert title="Pažnja" %}}
Ako je na uređaju VitalControl registrirano mnogo životinja, razmjena podataka može potrajati. Napredak prijenosa podataka može se vidjeti na zaslonu uređaja.

![VitalControl, razmjena podataka: traka napretka](../../vcsynchronizer/images/import-animals/data-transfer.png "VitalControl: traka napretka razmjene podataka")
    {{% /alert %}}
