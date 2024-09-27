---
title: "RFID skeniranje: test dometa i dijagnoza transpondera"
linkTitle: RFID skeniranje
date: 2023-08-07T10:09:46+02:00
draft: false
categories: [Dijagnoza, RFID Skeniranje]
description: >
  Provjerite domet vašeg RFID skenera ili prikažite protokol čitanja i brojeve pohranjene na nepoznatim transponderima.
translationKey: diagnosis/rfid-scan
weight: 20
---

Koristeći meni 'Test dometa' možete odrediti da li VitalControl uređaj može čitati transpondere koje imate pri ruci. Osim provjere kompatibilnosti, možete također jednostavno odrediti prijenosni protokol koji koriste ovi transponderi i prikazati broj pohranjen na transponderu.

## Izvođenje testa dometa {#perform-range-test}

1. Otvorite stavku menija &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `{{<T "Device" >}}` na glavnom ekranu vašeg VitalControl uređaja.

1. Pozovite podmeni `{{<T "Service" >}}`, odaberite stavku menija `{{<T "RangeTest" >}}` i potvrdite sa `{{<T "Ok" >}}`. Sada se prikazuje animirani ekran skeniranja.

    ![VitalControl: Putanja menija Test dometa RFID skenera](../images/rangetest.png "Test dometa RFID skenera")

1.  Polako približite vaš transponder čitaču VitalControl uređaja. Da biste postigli dobar rezultat čitanja, transponder mora biti horizontalno poravnat sa čitačem VitalControl uređaja.

    ![ VitalControl: pravilno približavanje transpondera RFID čitaču](/images/diagnosis/transponderscan.svg "Pravilno skeniranje transpondera")

1. Čim RFID skener detektuje transponder, aktivira se vibracioni alarm i boja pozadine slike transpondera prikazane na ekranu mijenja se u zelenu:

   ![VitalControl: Test dometa: Transponder detektovan](../images/transponder-detected.png "Transponder detektovan")

1. Pomjerajte transponder naprijed-nazad nekoliko puta na granici čitajućeg polja. Na ovaj način možete odrediti domet čitanja RFID skenera u kombinaciji sa transponderima koje koristite.

## Provjera transpondera {#transponder-check}


Izvođenjem gore opisanog testa dometa, možete dobiti informacije o transponderima iz različitih izvora:

### Službene transponder ušne markice {#official-transponder-ear-tags}

1. Ako koristite transponder ušne markice za vaše životinje, na kojima je kodiran službeno dodijeljeni 15-cifreni broj ušne markice životinje, sljedeće informacije će biti prikazane na ekranu nakon što je transponder pročitan:

    - 15-cifreni ID službeno dodijeljen vašoj životinji od strane vaše nacionalne službe za identifikaciju životinja.
    - Zemlja u kojoj se nalazi poslovanje
    - Zemlja u kojoj se nalazi poslovanje (samo njemačke farme)
    - Korišteni prijenosni protokol (FDX ili HDX)
    <br>

    ![VitalControl: provjera transponder ušne markice](../images/transponder-official.png "Info službeni transponder ušna markica")

### Transponderi od trećih dobavljača {#transponders-from-third-party-vendors}

1. Ako koristite transpondere od trećih dobavljača, kao što je Urban, za elektronsku identifikaciju vaših životinja, sljedeće informacije će biti prikazane na ekranu nakon što je transponder pročitan:

    - ID kodiran na transponderu, broj cifara varira ovisno o proizvođaču
    - Proizvođač transpondera (ako je pohranjeno na transponderu)
    - Korišteni prijenosni protokol (FDX ili HDX)
    <br>

    ![VitalControl: provjera transpondera od proizvođača](../images/transponder-manufacturer.png "Info transponder od proizvođača")

