---
title: "RFID nuskaitymas: diapazono testas ir transponderių diagnostika"
linkTitle: RFID nuskaitymas
date: 2023-08-07T10:09:46+02:00
draft: false
categories: [Diagnostika, RFID nuskaitymas]
description: >
  Patikrinkite savo RFID skaitytuvo diapazoną arba parodykite nuskaitymo protokolą ir nežinomų transponderių saugomus numerius.
translationKey: diagnosis/rfid-scan
weight: 20
---

Naudodami meniu 'Diapazono testas' galite nustatyti, ar VitalControl įrenginys gali nuskaityti jūsų turimus transponderius. Be suderinamumo patikrinimo, taip pat galite patogiai nustatyti šių transponderių naudojamą perdavimo protokolą ir parodyti transponderyje saugomą numerį.

## Atlikite diapazono testą {#perform-range-test}

1. Atidarykite meniu punktą &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Įrenginys" /> `{{<T "Device" >}}` pagrindiniame VitalControl įrenginio ekrane.

1. Iškvieskite submeniu `{{<T "Service" >}}`, pasirinkite meniu punktą `{{<T "RangeTest" >}}` ir patvirtinkite su `{{<T "Ok" >}}`. Dabar rodomas animuotas nuskaitymo ekranas.

    ![VitalControl: Meniu kelias Diapazono testas RFID skaitytuvas](../images/rangetest.png "Diapazono testas RFID skaitytuvas")

1.  Lėtai priartinkite savo transponderį prie VitalControl įrenginio nuskaitymo galvutės. Norint pasiekti gerą nuskaitymo rezultatą, transponderis turi būti horizontaliai suderintas su VitalControl įrenginio nuskaitymo galvute.

    ![ VitalControl: teisingai priartinkite transponderį prie RFID nuskaitymo galvutės](/images/diagnosis/transponderscan.svg "Teisingas transponderio nuskaitymas")

1. Kai tik RFID skaitytuvas aptinka transponderį, suveikia vibracijos signalas ir ekrane rodomo transponderio vaizdo fono spalva pasikeičia į žalią:

   ![VitalControl: Diapazono testas: Transponderis aptiktas](../images/transponder-detected.png "Transponderis aptiktas")

1. Perkelkite transponderį pirmyn ir atgal kelis kartus nuskaitymo lauko ribose. Tokiu būdu galite nustatyti RFID skaitytuvo nuskaitymo diapazoną kartu su naudojamais transponderiais.

## Transponderio patikrinimas {#transponder-check}

Atlikdami aukščiau aprašytą diapazono testą, galite gauti informaciją apie skirtingos kilmės transponderius:

### Oficialios transponderio ausų žymės {#official-transponder-ear-tags}

1. Jei naudojate transponderio ausų žymes savo gyvūnams, ant kurių yra užkoduotas oficialiai priskirtas 15 skaitmenų ausų žymės numeris, ekrane bus rodoma ši informacija, kai transponderis bus nuskaitytas:

    - 15 skaitmenų ID, oficialiai priskirtas jūsų gyvūnui iš jūsų nacionalinės gyvūnų identifikavimo tarnybos.
    - Šalis, kurioje yra verslas
    - Šalis, kurioje yra verslas (tik Vokietijos ūkiai)
    - Naudojamas perdavimo protokolas (FDX arba HDX)
    <br>

    ![VitalControl: transponderio ausų žymės patikrinimas](../images/transponder-official.png "Info official transponder ear tag")

### Trečiųjų šalių tiekėjų transponderiai {#transponders-from-third-party-vendors}

1. Jei naudojate trečiųjų šalių tiekėjų, tokių kaip Urban, transponderius savo gyvūnų elektroninei identifikacijai, ekrane bus rodoma ši informacija, kai transponderis bus nuskaitytas:

    - Transponderyje užkoduotas ID, skaitmenų skaičius priklauso nuo gamintojo
    - Transponderio gamintojas (jei saugoma transponderyje)
    - Naudojamas perdavimo protokolas (FDX arba HDX)
    <br>

    ![VitalControl: transponderio iš gamintojo patikrinimas](../images/transponder-manufacturer.png "Info transponder from manufacturer")
