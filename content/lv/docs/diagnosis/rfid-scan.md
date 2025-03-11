---
title: "RFID skenēšana: diapazona tests un transponderu diagnostika"
linkTitle: RFID skenēšana
date: 2023-08-07T10:09:46+02:00
draft: false
categories: [Diagnostika, RFID skenēšana]
description: >
  Pārbaudiet sava RFID skenera diapazonu vai parādiet lasīšanas protokolu un numurus, kas saglabāti uz nezināmiem transponderiem.
translationKey: diagnosis/rfid-scan
weight: 20
---

Izmantojot izvēlni 'Diapazona tests', jūs varat noteikt, vai VitalControl ierīce var nolasīt transponderus, kas jums ir pie rokas. Papildus saderības pārbaudei, jūs varat arī ērti noteikt šo transponderu izmantoto pārraides protokolu un parādīt numuru, kas saglabāts uz transpondera.

## Veikt diapazona testu {#perform-range-test}

1. Atveriet izvēlnes vienumu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Ierīce" /> `{{<T "Device" >}}` jūsu VitalControl ierīces galvenajā ekrānā.

1. Izsauciet apakšizvēlni `{{<T "Service" >}}`, izvēlieties izvēlnes vienumu `{{<T "RangeTest" >}}` un apstipriniet ar `{{<T "Ok" >}}`. Tagad tiek parādīts animēts skenēšanas ekrāns.

    ![VitalControl: Izvēlnes ceļš Diapazona tests RFID skenerim](../images/rangetest.png "Diapazona tests RFID skenerim")

1. Lēnām pietuviniet savu transponderu VitalControl ierīces lasīšanas galvai. Lai sasniegtu labu lasīšanas rezultātu, transponderam jābūt horizontāli izlīdzinātam ar VitalControl ierīces lasīšanas galvu.

    ![ VitalControl: pareizi pietuviniet transponderu RFID lasīšanas galvai](/images/diagnosis/transponderscan.svg "Pareiza transpondera skenēšana")

1. Tiklīdz RFID skeneris atklāj transponderu, tiek aktivizēts vibrācijas trauksmes signāls un transpondera attēla fona krāsa ekrānā mainās uz zaļu:

   ![VitalControl: Diapazona tests: Transponders atklāts](../images/transponder-detected.png "Transponders atklāts")

1. Pārvietojiet transponderu vairākas reizes uz priekšu un atpakaļ lasīšanas lauka robežās. Tādā veidā jūs varat noteikt RFID skenera lasīšanas diapazonu kombinācijā ar transponderiem, kurus izmantojat.

## Transpondera pārbaude {#transponder-check}

Veicot iepriekš aprakstīto diapazona testu, jūs varat iegūt informāciju arī par dažādas izcelsmes transponderiem:

### Oficiālās transponderu ausu birkas {#official-transponder-ear-tags}

1. Ja jūs izmantojat transponderu ausu birkas saviem dzīvniekiem, uz kurām ir kodēts oficiāli piešķirtais 15 ciparu ausu birkas numurs, ekrānā tiks parādīta šāda informācija, tiklīdz transponders ir nolasīts:

    - 15 ciparu ID, kas oficiāli piešķirts jūsu dzīvniekam no jūsu nacionālā dzīvnieku identifikācijas dienesta.
    - Valsts, kurā atrodas uzņēmums
    - Valsts, kurā atrodas uzņēmums (tikai Vācijas saimniecībām)
    - Pārraides protokols, kas izmantots (FDX vai HDX)
    <br>

    ![VitalControl: transpondera ausu birkas pārbaude](../images/transponder-official.png "Info official transponder ear tag")

### Transponderi no trešo pušu piegādātājiem {#transponders-from-third-party-vendors}

1. Ja jūs izmantojat transponderus no trešo pušu piegādātājiem, piemēram, Urban, jūsu dzīvnieku elektroniskai identifikācijai, ekrānā tiks parādīta šāda informācija, tiklīdz transponders ir nolasīts:

    - ID, kas kodēts transponderā, ciparu skaits mainās atkarībā no ražotāja
    - Transpondera ražotājs (ja tas ir saglabāts transponderā)
    - Pārraides protokols, kas izmantots (FDX vai HDX)
    <br>

    ![VitalControl: transpondera pārbaude no ražotāja](../images/transponder-manufacturer.png "Info transponder from manufacturer")
