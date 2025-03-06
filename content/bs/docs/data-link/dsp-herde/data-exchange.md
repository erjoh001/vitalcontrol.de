---
title: Razmjena podataka između VitalControl i softvera za upravljanje stadom Herde
linkTitle: Razmjena podataka
date: 2023-08-04T12:22:12+02:00
draft: false
description: >
  Sinhronizujte životinje pohranjene na uređaju VitalControl sa životinjama kojima upravlja softver *Herde* i prenesite izmjerene vrijednosti zabilježene uređajem VitalControl u softver *Herde*.
weight: 20
categories: [Razmjena podataka, DSP Herde]
translationKey: DSPherde/data-exchange
---
Slijedite korake ispod za sinhronizaciju podataka između softvera `Herde` i uređaja VitalControl:

### Povežite VitalControl sa računarom {#connect-vitalcontrol-to-pc}

1. Povežite uređaj VitalControl sa vašim računarom ili laptopom putem priloženog USB kabla.

   ![Povežite VitalControl sa računarom ili laptopom](/images/synchronisation/connect-to-pc.svg "Povežite VitalControl sa računarom")

1. Uvjerite se da je vaš uređaj VitalControl uključen.

### Izvršite razmjenu podataka {#perform-data-exchange}

1. Unutar softvera `Herde`, izvršite potpunu razmjenu podataka. Ovisno o konfiguraciji vašeg korisničkog interfejsa, ovu razmjenu možete pokrenuti putem stavke menija `Full data exchange` u glavnom meniju (najviši nivo stavke _Technology_), u meniju sa strane ili u vašem prilagođenom alatu (horizontalno ili vertikalno).

   ![Softver Herde: Pokretanje potpune razmjene podataka](../screenshots/data-exchange.png "Herde: Pokretanje razmjene podataka")

1. Otvara se pop-up, navodeći propisane tehnološke spojeve u bočnoj traci s lijeve strane. Kliknite na dugme označeno `VitalControl` kako biste započeli razmjenu podataka:

   ![Softver Herde, Pokretanje razmjene podataka](../screenshots/start-transfer.png "Herde: Pokretanje razmjene podataka")

1. Prilikom prve razmjene podataka pojavljuje se upozorenje koje ukazuje da još uvijek nema registriranih životinja na uređaju VitalControl. Potvrdite ovu obavijest sa `Yes`. Razmjena podataka tada počinje.

   ![Softver Herde, razmjena podataka: upozorenje](../screenshots/warning.png "Razmjena podataka: upozorenje")

1. Razmjena podataka je proces u dva koraka: U prvom koraku <span style="font-size: 140%">➊</span> podaci o životinjama se prenose iz softvera `Herde` na VitalControl. U drugom koraku <span style="font-size: 140%">➋</span>, podaci o mjerenju prikupljeni uređajem VitalControl prenose se u softver `Herde`. Broj uvezenih setova podataka (životinje, teljenja, upozorenja i težine) naveden je u pop-upu:

![Razmjena podataka sa softverom Herde: Tok radnji](../screenshots/data-transfer.png "Razmjena podataka: Tok radnji")

1. Uspješan završetak razmjene podataka signalizira se putem pop-up prozora sa porukom o uspjehu.

   ![Softver Herde: Poruka o uspjehu razmjene podataka](../screenshots/success-message.png "Herde: Poruka o uspjehu razmjene podataka")

    {{% alert title="Pažnja" %}}
Ako je na uređaju VitalControl registrovano mnogo životinja, razmjena podataka može potrajati. Napredak prijenosa podataka može se vidjeti na ekranu uređaja.

![VitalControl, razmjena podataka: traka napretka](../../vcsynchronizer/images/import-animals/data-transfer.png "VitalControl: traka napretka razmjene podataka")
    {{% /alert %}}
