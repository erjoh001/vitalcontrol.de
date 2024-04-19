---
title: "RFID-skannaus: kantamatesti ja transponderien diagnostiikka"
linkTitle: RFID-skannaus
date: 2023-08-07T10:09:46+02:00
draft: false
categories: [Diagnostiikka, RFID-skannaus]
description: >
  Tarkista RFID-skannerisi kantama tai näytä lukuprotokolla ja tuntemattomien transponderien tallennetut numerot.
translationKey: diagnosis/rfid-scan
weight: 20
---

Käyttämällä valikkoa 'Kantamatesti' voit määrittää, pystyykö VitalControl-laite lukemaan käsillä olevat transponderit. Yhteensopivuuden tarkistamisen lisäksi voit myös kätevästi määrittää näiden transponderien käyttämän siirtoprotokollan ja näyttää transponderiin tallennetun numeron.

## Suorita kantamatesti

1. Avaa päävalikosta &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Laite" /> `Laite` -valikkokohta VitalControl-laitteellasi.

1. Kutsu alavalikko `Huolto`, valitse valikkokohta `Kantamatesti` ja vahvista `OK`. Nyt näytölle ilmestyy animoitu skannausrunko.

    ![VitalControl: Valikkopolku Kantamatesti RFID-skannerille](../images/rangetest.png "Kantamatesti RFID-skannerille")

1.  Lähesty transponderiasi hitaasti VitalControl-laitteen lukupään lähelle. Hyvän lukutuloksen saavuttamiseksi transponderin on oltava vaakasuorassa VitalControl-laitteen lukupäähän nähden.

    ![ VitalControl: lähesty transponderia oikein RFID-lukupäähän](/images/diagnosis/transponderscan.svg "Oikea transponderin skannaus")

1. Heti kun RFID-skanneri havaitsee transponderin, laite värähtää ja transponderikuvan taustaväri näytöllä vaihtuu vihreäksi:

   ![VitalControl: Kantamatesti: Transponderi havaittu](../images/transponder-detected.png "Transponderi havaittu")

1. Liikuta transponderia edestakaisin lukukentän rajalla useita kertoja. Näin voit määrittää käyttämiesi transponderien kanssa RFID-skannerin lukuetäisyyden.

## Transponderin tarkistus

Suorittamalla yllä kuvatun kantamatestin, voit saada tietoa myös eri alkuperää olevista transpondereista:

### Viralliset transponderikorvamerkit

1. Jos käytät eläimillesi transponderikorvamerkkejä, joille on koodattu virallisesti määrätty 15-numeroinen korvamerkin numero, näytölle tulee seuraavat tiedot, kun transponderi on luettu:

    - 15-numeroinen ID, joka on virallisesti määrätty eläimellesi kansallisesta eläintunnistuspalvelusta.
    - Maa, jossa yritys sijaitsee
    - Maa, jossa yritys sijaitsee (vain Saksan tilat)
    - Käytetty siirtoprotokolla (FDX tai HDX)
    <br>

    ![VitalControl: transponderikorvamerkin tarkistus](../images/transponder-official.png "Tietoja virallisesta transponderikorvamerkistä")

### Kolmannen osapuolen toimittajien transponderit

1. Jos käytät kolmansien osapuolien toimittajien, kuten Urbanin, transpondereita eläintesi elektroniseen tunnistamiseen, näytölle tulee seuraavat tiedot, kun transponderi on luettu:

    - Transponderiin koodattu ID, numeroiden määrä vaihtelee valmistajan mukaan
    - Transponderin valmistaja (jos tallennettu transponderiin)
    - Käytetty siirtoprotokolla (FDX tai HDX)
    <br>

    ![VitalControl: valmistajan transponderin tarkistus](../images/transponder-manufacturer.png "Tietoja valmistajan transponderista")
