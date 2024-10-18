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

Korištenjem izbornika 'Test dometa' možete utvrditi može li uređaj VitalControl čitati transpondere koje imate pri ruci. Osim provjere kompatibilnosti, možete također jednostavno odrediti prijenosni protokol koji koriste ovi transponderi i prikazati broj pohranjen na transponderu.

## Izvođenje testa dometa {#perform-range-test}

1. Otvorite stavku izbornika &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Uređaj" /> `{{<T "Device" >}}` na glavnom ekranu vašeg uređaja VitalControl.

1. Pozovite podizbornik `{{<T "Service" >}}`, odaberite stavku izbornika `{{<T "RangeTest" >}}` i potvrdite s `{{<T "Ok" >}}`. Sada se prikazuje animirani ekran skeniranja.

    ![VitalControl: Putanja izbornika Test dometa RFID skenera](../images/rangetest.png "Test dometa RFID skenera")

1.  Polako približite svoj transponder čitaču uređaja VitalControl. Da biste postigli dobar rezultat čitanja, transponder mora biti vodoravno poravnat s čitačem uređaja VitalControl.

    ![ VitalControl: ispravno približavanje transpondera RFID čitaču](/images/diagnosis/transponderscan.svg "Ispravno skeniranje transpondera")

1. Čim RFID skener detektira transponder, aktivira se vibracijski alarm i boja pozadine slike transpondera prikazane na ekranu mijenja se u zelenu:

   ![VitalControl: Test dometa: Transponder detektiran](../images/transponder-detected.png "Transponder detektiran")

1. Pomaknite transponder naprijed-nazad nekoliko puta na granici čitajućeg polja. Na ovaj način možete odrediti domet čitanja RFID skenera u kombinaciji s transponderima koje koristite.

## Provjera transpondera {#transponder-check}

Izvođenjem gore opisanog testa dometa, možete dobiti informacije o transponderima različitog podrijetla:

### Službene transponder ušne markice {#official-transponder-ear-tags}

1. Ako koristite transponder ušne markice za svoje životinje, na kojima je kodiran službeno dodijeljeni 15-znamenkasti broj ušne markice životinje, sljedeće informacije će se prikazati na ekranu nakon što je transponder očitan:

    - 15-znamenkasti ID službeno dodijeljen vašoj životinji od strane vaše nacionalne službe za identifikaciju životinja.
    - Država u kojoj se nalazi poslovanje
    - Država u kojoj se nalazi poslovanje (samo njemačke farme)
    - Korišteni prijenosni protokol (FDX ili HDX)
    <br>

    ![VitalControl: provjera transponder ušne markice](../images/transponder-official.png "Info službene transponder ušne markice")

### Transponderi od trećih dobavljača {#transponders-from-third-party-vendors}

1. Ako koristite transpondere od trećih dobavljača, kao što je Urban, za elektroničku identifikaciju svojih životinja, sljedeće informacije će se prikazati na ekranu nakon što je transponder očitan:

    - ID kodiran na transponderu, broj znamenki varira ovisno o proizvođaču
    - Proizvođač transpondera (ako je pohranjen na transponderu)
    - Korišteni prijenosni protokol (FDX ili HDX)
    <br>

    ![VitalControl: provjera transpondera od proizvođača](../images/transponder-manufacturer.png "Info transponder od proizvođača")
