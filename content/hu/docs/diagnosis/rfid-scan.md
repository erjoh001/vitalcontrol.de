---
title: "RFID szkennelés: hatótávolság teszt és transzponderek diagnosztikája"
linkTitle: RFID szkennelés
date: 2023-08-07T10:09:46+02:00
draft: false
kategóriák: [Diagnosztika, RFID Szkennelés]
description: >
  Ellenőrizze RFID szkennerének hatótávolságát, vagy mutassa meg az olvasási protokollt és az ismeretlen transzpondereken tárolt számokat.
translationKey: diagnosis/rfid-scan
weight: 20
---

A 'Hatótávolság teszt' menü használatával meghatározhatja, hogy a VitalControl eszköz képes-e olvasni az Ön által használt transzpondereket. Az kompatibilitás ellenőrzése mellett kényelmesen meghatározhatja a transzponderek által használt átviteli protokollt, és megjelenítheti a transzponderen tárolt számot is.

## Hatótávolság teszt végrehajtása {#perform-range-test}

1. Nyissa meg a &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `{{<T "Device" >}}` menüpontot a VitalControl eszköz főképernyőjén.

1. Hívja elő a `{{<T "Service" >}}` almenüt, válassza ki a `{{<T "RangeTest" >}}` menüpontot, és erősítse meg `{{<T "Ok" >}}` gombbal. Most egy animált szkennelési képernyő jelenik meg.

    ![VitalControl: Menüútvonal Hatótávolság teszt RFID szkenner](../images/rangetest.png "Hatótávolság teszt RFID szkenner")

1.  Lassan közelítse a transzpondert a VitalControl eszköz olvasófejéhez. A jó olvasási eredmény elérése érdekében a transzpondert vízszintesen kell igazítani a VitalControl eszköz olvasófejéhez.

    ![ VitalControl: helyes transzponder közelítés az RFID olvasófejhez](/images/diagnosis/transponderscan.svg "Helyes transzponder szkennelés")

1. Amint az RFID szkenner érzékeli a transzpondert, rezgésriasztás indul el, és a képernyőn megjelenő transzponder képének háttérszíne zöldre változik:

   ![VitalControl: Hatótávolság teszt: Transzponder érzékelve](../images/transponder-detected.png "Transzponder érzékelve")

1. Mozgassa a transzpondert többször oda-vissza az olvasási mező határán. Így meghatározhatja az RFID szkenner olvasási hatótávolságát az Ön által használt transzponderekkel kombinálva.

## Transzponder ellenőrzés {#transponder-check}

A fent leírt hatótávolság teszt végrehajtásával információkat szerezhet különböző eredetű transzponderekről is:

### Hivatalos transzponder fülcímkék {#official-transponder-ear-tags}

1. Ha transzponder fülcímkéket használ az állataihoz, amelyeken az állat hivatalosan kijelölt 15 jegyű fülcímke száma van kódolva, a következő információk jelennek meg a képernyőn, miután a transzpondert beolvasták:

    - Az állatának a nemzeti állatazonosító szolgálat által hivatalosan kijelölt 15 jegyű azonosítója.
    - Az ország, ahol a vállalkozás található
    - Az ország, ahol a vállalkozás található (csak német gazdaságok esetében)
    - Használt átviteli protokoll (FDX vagy HDX)
    <br>

    ![VitalControl: transzponder fülcímke ellenőrzése](../images/transponder-official.png "Info hivatalos transzponder fülcímke")

### Harmadik fél által gyártott transzponderek {#transponders-from-third-party-vendors}

1. Ha harmadik fél által gyártott transzpondereket használ, például Urban, az állatai elektronikus azonosítására, a következő információk jelennek meg a képernyőn, miután a transzpondert beolvasták:

    - A transzponderre kódolt azonosító, a számjegyek száma a gyártótól függően változik
    - A transzponder gyártója (ha a transzponderen tárolva van)
    - Használt átviteli protokoll (FDX vagy HDX)
    <br>

    ![VitalControl: transzponder gyártó ellenőrzése](../images/transponder-manufacturer.png "Info transzponder gyártótól")

