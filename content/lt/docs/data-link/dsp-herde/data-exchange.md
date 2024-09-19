---
title: Duomenų mainai tarp VitalControl ir bandos valdymo programinės įrangos Herde
linkTitle: Duomenų mainai
date: 2023-08-04T12:22:12+02:00
draft: false
description: >
  Sinchronizuokite gyvūnus, saugomus VitalControl įrenginyje, su gyvūnais, valdomais *Herde* programine įranga, ir perduokite matavimo duomenis, užfiksuotus VitalControl įrenginyje, į *Herde* programinę įrangą.
weight: 20
kategorijos: [Duomenų mainai, DSP Herde]
translationKey: DSPherde/data-exchange
---
Vykdykite toliau nurodytus veiksmus, kad sinchronizuotumėte duomenis tarp `Herde` programinės įrangos ir VitalControl įrenginio:

### Prijunkite VitalControl prie kompiuterio {#connect-vitalcontrol-to-pc}

1. Prijunkite VitalControl įrenginį prie savo kompiuterio ar nešiojamojo kompiuterio per pateiktą USB kabelį.

   ![Prijunkite VitalControl prie kompiuterio ar nešiojamojo kompiuterio](/images/synchronisation/connect-to-pc.svg "Prijunkite VitalControl prie kompiuterio")

1. Įsitikinkite, kad jūsų VitalControl įrenginys yra įjungtas.

### Atlikite duomenų mainus {#perform-data-exchange}

1. `Herde` programinėje įrangoje atlikite pilnus duomenų mainus. Priklausomai nuo jūsų vartotojo sąsajos konfigūracijos, šiuos mainus galite inicijuoti per meniu punktą `Pilni duomenų mainai` pagrindiniame meniu (aukščiausio lygio punktas _Technologija_), šoniniame meniu arba jūsų pritaikytoje įrankių juostoje (horizontaliai arba vertikaliai).

   ![Programinė įranga Herde: Pilnų duomenų mainų inicijavimas](../screenshots/data-exchange.png "Herde: Duomenų mainų inicijavimas")

1. Atsidaro iššokantis langas, kuriame kairėje šoninėje juostoje išvardytos nustatytos technologijų sąsajos. Spustelėkite mygtuką, pažymėtą `VitalControl`, kad pradėtumėte duomenų mainus:

   ![Programinė įranga Herde, Duomenų mainų pradžia](../screenshots/start-transfer.png "Herde: Duomenų mainų pradžia")

1. Pirmą kartą atliekant duomenų mainus pasirodo įspėjimas, nurodantis, kad VitalControl įrenginyje dar nėra užregistruotų gyvūnų. Patvirtinkite šį pranešimą su `Taip`. Tada pradedami duomenų mainai.

   ![Programinė įranga Herde, duomenų mainai: įspėjimas](../screenshots/warning.png "Duomenų mainai: įspėjimas")

1. Duomenų mainai yra dviejų etapų procesas: Pirmajame etape ➊ gyvūnų duomenys perduodami iš `Herde` programinės įrangos į VitalControl. Antrajame etape ➋, matavimo duomenys, surinkti su VitalControl, perduodami į `Herde` programinę įrangą. Importuotų duomenų rinkinių skaičius (gyvūnai, veršiavimai, įspėjimai ir svoriai) nurodomas iššokančiame lange:

![Duomenų mainai su programine įranga Herde: Veiksmų eiga](../screenshots/data-transfer.png "Duomenų mainai: Veiksmų eiga")

1. Sėkmingas duomenų mainų užbaigimas signalizuojamas iššokančiuoju langu su sėkmės pranešimu.

   ![Programinė įranga Herde: Sėkmės pranešimas duomenų mainai](../screenshots/success-message.png "Herde: Sėkmės pranešimas duomenų mainai")

    {{% alert title="Dėmesio" %}}
Jei VitalControl įrenginyje yra užregistruota daug gyvūnų, duomenų mainai gali užtrukti. Duomenų perdavimo eigą galima matyti įrenginio ekrane.

![VitalControl, duomenų mainai: progreso juosta](../../vcsynchronizer/images/import-animals/data-transfer.png "VitalControl: progreso juosta duomenų mainai")
    {{% /alert %}}
