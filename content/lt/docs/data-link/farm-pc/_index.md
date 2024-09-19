---
title: Gyvūnų ir matavimo duomenų eksportas į ūkio valdymo kompiuterį
linkTitle: Duomenų eksportas (PC)
date: 2023-07-19
weight: 15
description: >
 Eksportuokite gyvūnų duomenis ir matavimo reikšmes iš VitalControl įrenginio į kelis CVS failus
kategorijos: [Duomenų eksportas]
translationKey: farmPC
---
Norėdami eksportuoti duomenis iš VitalControl į masinės atminties įrenginį savo kompiuteryje, atlikite šiuos veiksmus:

### Prijunkite VitalControl prie kompiuterio {#connect-vitalcontrol-to-pc}

1. Prijunkite VitalControl įrenginį prie savo kompiuterio ar nešiojamojo kompiuterio naudodami pridedamą USB kabelį.

   ![Prijunkite VitalControl prie kompiuterio ar nešiojamojo kompiuterio](/images/synchronisation/connect-to-pc.svg "Prijunkite VitalControl prie kompiuterio")

1. Įsitikinkite, kad jūsų VitalControl įrenginys yra įjungtas.

### Atlikite duomenų eksportą {#perform-data-export}

1. Paspauskite Windows klavišą, kad atidarytumėte Pradžios meniu

1. *Tik Windows 11*: Spustelėkite mygtuką `Visos programos`

1. Savo įdiegtų programų sąraše slinkite žemyn iki raidės `U`. Ten turėtumėte rasti meniu įrašą `Urban VitalControl`. Jei reikia, išplėskite šį įrašą, kad būtų rodomi visi submeniu įrašai.

   {{% alert title="Dėmesio" %}}
Jei savo programų sąraše nerandate įrašo `Urban VitalControl`, gali tekti pirmiausia [įdiegti](../vcsynchronizer/installation/) programinę įrangą `VCSynchronizer` savo kompiuteryje.
   {{% /alert %}}

1. Spustelėkite meniu punktą `Duomenų eksportas (CVS)`.

   ![Windows Pradžios meniu, meniu įrašas Urban VitalControl (VCSynchronizer)](../vcsynchronizer/images/data-export/data-export.png "Windows pradžios meniu, VitalControl")

1. Prasideda eksporto procesas. Kai duomenų eksportas bus baigtas, atsidarys Explorer langas, kuriame bus rodomas vietinis duomenų katalogas su keturiais naujai sukurtais [eksporto failais](../../data-export/export-files/).

   ![Vietinis duomenų katalogas su eksporto failais](../../data-export/images/export-files.png "Eksporto failai, saugomi vietoje")

   {{% alert title="Pastaba" %}}
  Kiekvieną iš šių keturių [eksporto failų](../../data-export/export-files/) galite atidaryti pasirinktoje skaičiuoklės programoje (pvz., [Microsoft Excel](https://products.office.com/excel) arba [OpenOffice Calc](https://www.openoffice.org/)) ir atlikti išsamią duomenų analizę. Pavyzdžiui, žemiau parodytas lentelės `animals.csv` vaizdas skaičiuoklės programoje:


  ![Eksportuota gyvūnų duomenų lentelė atidaryta skaičiuoklės programoje](../../data-export/images/animals.png "Skaičiuoklės programa su gyvūnų duomenimis")
   {{% /alert %}}
