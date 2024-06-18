---
title: "Scanare RFID: test de rază și diagnosticare a transponderelor"
linkTitle: RFID scan
date: 2023-08-07T10:09:46+02:00
draft: false
categories: [Diagnosis, RFID Scan]
description: >
  Verificați raza de acțiune a scannerului RFID sau afișați protocolul de citire și numerele stocate pe transpondere necunoscute.
translationKey: diagnosis/rfid-scan
weight: 20
---

Folosind meniul 'Test de rază', puteți determina dacă dispozitivul VitalControl poate citi transponderele pe care le aveți la îndemână. Pe lângă verificarea compatibilității, puteți determina convenabil protocolul de transmisie utilizat de aceste transpondere și afișa numărul stocat pe transponder.

## Efectuați testul de rază {#perform-range-test}

1. Deschideți elementul de meniu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `{{<T "Device" >}}` în ecranul principal al dispozitivului VitalControl.

1. Accesați submeniul `{{<T "Service" >}}`, selectați elementul de meniu `{{<T "RangeTest" >}}` și confirmați cu `{{<T "Ok" >}}`. Acum este afișat un ecran de scanare animat.

    ![VitalControl: Calea meniului Test de rază scanner RFID](../images/rangetest.png "Test de rază scanner RFID")

1.  Apropiați încet transponderul de capul de citire al dispozitivului VitalControl. Pentru a obține un rezultat bun de citire, transponderul trebuie să fie aliniat orizontal cu capul de citire al dispozitivului VitalControl.

    ![ VitalControl: apropiați corect transponderul de capul de citire RFID](/images/diagnosis/transponderscan.svg "Scanare corectă a transponderului")

1. De îndată ce scannerul RFID detectează transponderul, se declanșează o alarmă prin vibrație și culoarea de fundal a imaginii transponderului afișată pe ecran se schimbă în verde:

   ![VitalControl: Test de rază: Transponder detectat](../images/transponder-detected.png "Transponder detectat")

1. Mutați transponderul înainte și înapoi de mai multe ori la marginea câmpului de citire. În acest fel, puteți determina raza de citire a scannerului RFID în combinație cu transponderele pe care le utilizați.

## Verificare transponder {#transponder-check}

Realizând testul de rază descris mai sus, puteți obține informații despre transpondere de diferite origini:

### Etichete oficiale de transpondere {#official-transponder-ear-tags}

1. Dacă utilizați etichete de transpondere pentru animalele dvs., pe care este codificat numărul oficial de 15 cifre al animalului, următoarele informații vor fi afișate pe ecran odată ce transponderul a fost citit:

    - ID-ul oficial de 15 cifre atribuit animalului dvs. de către serviciul național de identificare a animalelor.
    - Țara în care se află afacerea
    - Țara în care se află afacerea (doar pentru fermele germane)
    - Protocolul de transmisie utilizat (FDX sau HDX)
    <br>

    ![VitalControl: verificare etichetă oficială de transponder](../images/transponder-official.png "Info etichetă oficială de transponder")

### Transpondere de la furnizori terți {#transponders-from-third-party-vendors}

1. Dacă utilizați transpondere de la furnizori terți, cum ar fi Urban, pentru identificarea electronică a animalelor dvs., următoarele informații vor fi afișate pe ecran odată ce transponderul a fost citit:

    - ID-ul codificat pe transponder, numărul de cifre variază în funcție de producător
    - Producătorul transponderului (dacă este stocat pe transponder)
    - Protocolul de transmisie utilizat (FDX sau HDX)
    <br>

    ![VitalControl: verificare transponder de la producător](../images/transponder-manufacturer.png "Info transponder de la producător")
