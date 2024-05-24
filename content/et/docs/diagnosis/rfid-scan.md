---
title: "RFID skaneerimine: ulatuse test ja transponderite diagnostika"
linkTitle: RFID skaneerimine
date: 2023-08-07T10:09:46+02:00
draft: false
categories: [Diagnostika, RFID skaneerimine]
description: >
  Kontrollige oma RFID-skanneri ulatust või näidake tundmatute transponderite lugemisprotokolli ja salvestatud numbreid.
translationKey: diagnosis/rfid-scan
weight: 20
---

Menüü 'Ulatuse test' abil saate kindlaks teha, kas VitalControl seade suudab lugeda teie käes olevaid transpondereid. Lisaks ühilduvuse kontrollimisele saate mugavalt kindlaks teha ka nende transponderite kasutatava edastusprotokolli ja kuvada transponderil salvestatud numbri.

## Ulatuse testi sooritamine {#perform-range-test}

1. Avage peamenüüs &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Seade" /> `Seade` oma VitalControl seadmes.

1. Kutsuge esile alammenüü `Teenindus`, valige menüüpunkt `Ulatuse test` ja kinnitage `OK`. Nüüd kuvatakse animeeritud skaneerimisekraan.

    ![VitalControl: Menüütee ulatuse test RFID skanner](../images/rangetest.png "RFID skanneri ulatuse test")

1.  Lähendage aeglaselt oma transponder VitalControl seadme lugemispeale. Hea lugemistulemuse saavutamiseks peab transponder olema horisontaalselt lugemispeaga joondatud.

    ![VitalControl: transponderi õige lähendamine RFID lugemispeale](/images/diagnosis/transponderscan.svg "Õige transponderi skaneerimine")

1. Niipea kui RFID skanner tuvastab transponderi, käivitub vibratsioonihäire ja ekraanil kuvatava transponderi pildi taustavärv muutub roheliseks:

   ![VitalControl: Ulatuse test: Transponder tuvastatud](../images/transponder-detected.png "Transponder tuvastatud")

1. Liigutage transponderit mitu korda edasi-tagasi lugemisvälja piiril. Nii saate kindlaks teha RFID skanneri lugemisulatuse koos kasutatavate transponderitega.

## Transponderi kontroll {#transponder-check}

Ülalkirjeldatud ulatuse testi sooritades saate teavet ka erineva päritoluga transponderite kohta:

### Ametlikud transponderiga kõrvamärgid {#official-transponder-ear-tags}

1. Kui kasutate oma loomadele transponderiga kõrvamärke, millele on kodeeritud looma ametlikult määratud 15-kohaline kõrvamärgi number, kuvatakse ekraanil järgmine teave pärast transponderi lugemist:

    - 15-kohaline ID, mis on ametlikult määratud teie loomale teie riiklikust loomade identifitseerimise teenusest.
    - Riik, kus ettevõte asub
    - Riik, kus ettevõte asub (ainult Saksamaa farmid)
    - Kasutatav edastusprotokoll (FDX või HDX)
    <br>

    ![VitalControl: transponderiga kõrvamärgi kontroll](../images/transponder-official.png "Info ametlik transponderiga kõrvamärk")

### Kolmandate osapoolte tarnijate transponderid {#transponders-from-third-party-vendors}

1. Kui kasutate oma loomade elektrooniliseks identifitseerimiseks kolmandate osapoolte tarnijate, nagu Urban, transpondereid, kuvatakse ekraanil järgmine teave pärast transponderi lugemist:

    - Transponderile kodeeritud ID, numbrite arv varieerub sõltuvalt tootjast
    - Transponderi tootja (kui see on transponderile salvestatud)
    - Kasutatav edastusprotokoll (FDX või HDX)
    <br>

    ![VitalControl: tootja transponderi kontroll](../images/transponder-manufacturer.png "Info tootja transponder")
