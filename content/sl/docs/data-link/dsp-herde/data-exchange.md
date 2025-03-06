---
title: Izmenjava podatkov med VitalControl in programsko opremo za upravljanje črede Herde
linkTitle: Izmenjava podatkov
date: 2023-08-04T12:22:12+02:00
draft: false
description: >
  Sinhronizirajte živali, shranjene na napravi VitalControl, z živalmi, ki jih upravlja programska oprema *Herde*, in prenesite izmerjene vrednosti, zabeležene z napravo VitalControl, v programsko opremo *Herde*.
weight: 20
categories: [Izmenjava podatkov, DSP Herde]
translationKey: DSPherde/data-exchange
---
Sledite spodnjim korakom za sinhronizacijo podatkov med programsko opremo `Herde` in napravo VitalControl:

### Povežite VitalControl z računalnikom {#connect-vitalcontrol-to-pc}

1. Povežite napravo VitalControl z vašim računalnikom ali prenosnikom preko priloženega USB kabla.

   ![Povežite VitalControl z računalnikom ali prenosnikom](/images/synchronisation/connect-to-pc.svg "Povežite VitalControl z računalnikom")

1. Prepričajte se, da je vaša naprava VitalControl vklopljena.

### Izvedite izmenjavo podatkov {#perform-data-exchange}

1. V programski opremi `Herde` izvedite popolno izmenjavo podatkov. Glede na konfiguracijo vašega uporabniškega vmesnika lahko to izmenjavo sprožite preko menijske postavke `Popolna izmenjava podatkov` v glavnem meniju (najvišja raven postavke _Tehnologija_), v stranskem meniju ali v vaši prilagojeni orodni vrstici (horizontalno ali vertikalno).

   ![Programska oprema Herde: Sprožitev popolne izmenjave podatkov](../screenshots/data-exchange.png "Herde: Sprožitev izmenjave podatkov")

1. Odpre se pojavno okno, ki na levi strani navaja določene tehnološke povezave. Kliknite na gumb z oznako `VitalControl`, da začnete izmenjavo podatkov:

   ![Programska oprema Herde, Začetek izmenjave podatkov](../screenshots/start-transfer.png "Herde: Začetek izmenjave podatkov")

1. Pri prvi izmenjavi podatkov se pojavi opozorilo, ki nakazuje, da na napravi VitalControl še ni registriranih živali. To obvestilo potrdite z `Da`. Nato se začne izmenjava podatkov.

   ![Programska oprema Herde, izmenjava podatkov: opozorilo](../screenshots/warning.png "Izmenjava podatkov: opozorilo")

1. Izmenjava podatkov je dvostopenjski proces: V prvem koraku <span style="font-size: 140%">➊</span> se podatki o živalih prenesejo iz programske opreme `Herde` na VitalControl. V drugem koraku <span style="font-size: 140%">➋</span> se merilni podatki, zbrani z VitalControl, prenesejo v programsko opremo `Herde`. Število uvoženih podatkovnih nizov (živali, telitve, opozorila in teže) je navedeno v pojavnem oknu:

![Izmenjava podatkov s programsko opremo Herde: Potek dejanj](../screenshots/data-transfer.png "Izmenjava podatkov: Potek dejanj")

1. Uspešno dokončanje izmenjave podatkov je označeno s pojavno okno s sporočilom o uspehu.

   ![Programska oprema Herde: Sporočilo o uspehu izmenjave podatkov](../screenshots/success-message.png "Herde: Sporočilo o uspehu izmenjave podatkov")

    {{% alert title="Pozor" %}}
Če je na napravi VitalControl registriranih veliko živali, lahko izmenjava podatkov traja nekaj časa. Napredek prenosa podatkov je mogoče videti na zaslonu naprave.

![VitalControl, izmenjava podatkov: vrstica napredka](../../vcsynchronizer/images/import-animals/data-transfer.png "VitalControl: vrstica napredka izmenjave podatkov")
    {{% /alert %}}
