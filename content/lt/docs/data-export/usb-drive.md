---
title: Duomenų eksportavimas į USB atmintinę
linkTitle: Į USB atmintinę
date: 2023-07-20
weight: 10
description: >
  Eksportuokite CVS duomenų failus, kuriuose yra gyvūnų duomenys ir matavimo vertės, saugomos VitalControl įrenginyje, į USB atmintinę.
categories: [Duomenų eksportavimas]
tags: [CSV failai, USB atmintinė]
translationKey: data-export/usb-drive
---
{{% usb-drive/en "Norėdami atlikti įrenginio duomenų eksportavimą," %}}

## Atlikite duomenų eksportavimą {#perform-data-export}

1. Atidarykite meniu punktą &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Įrenginys" /> `{{<T "Device" >}}` pagrindiniame VitalControl įrenginio ekrane.

2. Pasirinkite submeniu `{{<T "DataManagement" >}}`, pasirinkite meniu punktą `{{<T "AnimalData" >}}` ir patvirtinkite su `{{<T "Ok" >}}`.

3. Atsidarys kitas submeniu. Pasirinkite meniu punktą `{{<T "ExportAnimalData" >}}` ir patvirtinkite su `{{<T "Ok" >}}`.

4. Dabar jūsų bus paprašyta įdėti USB atmintinę:

   ![VitalControl: Meniu kelias duomenų eksportavimui](../images/data-export.png "Iškvieskite duomenų eksportavimą")

5. Įdėkite USB atmintinę (C jungtis) į jungtį įrenginio apačioje.

   ![VitalControl: įdėkite USB atmintinę](/images/firmware/update/plug-in-dual-usb-stick.svg "Įdėkite USB atmintinę")

6. Kai įrenginys aptiks USB atmintinės įdėjimą, duomenų eksportavimas automatiškai prasidės. Atsarginės duomenų rašymas gali užtrukti kelias sekundes. Kai duomenų eksportavimas bus baigtas, bus rodoma sėkmės žinutė:

   ![VitalControl: sėkmės žinutė duomenų eksportavimui](../images/success-data-export.png "Sėkmingas duomenų eksportavimas")

7. Duomenų eksportavimas baigtas. Jūs rasite keturis sukurtus [eksportavimo failus](../export-files/) kataloge `export-csv` savo USB atmintinėje.

   ![USB atmintinė su eksportavimo failais VitalControl](../images/export-files.png "Eksportavimo failai USB atmintinėje")

   {{% alert title="Pastabos" %}}
  - Kad išvengtumėte atsitiktinio eksportavimo failų perrašymo, kiekvieno eksportavimo failo pavadinime visada yra data ir laikas, kada failas buvo sukurtas. Būtinai naudokite naujausią eksportavimo failų versiją, jei eksportavote gyvūnų duomenis kelis kartus.
  - Eksportavimo failų dydis priklauso nuo gyvūnų skaičiaus VitalControl ir nuo atliktų matavimų skaičiaus. Paprastai eksportavimo failai užima tik kelis kB atminties vietos USB atmintinėje.
   {{% /alert %}}

Panašu, kad neįklijavote jokio turinio. Prašome įklijuoti Markdown tekstą, kurį norite išversti į lietuvių kalbą.
