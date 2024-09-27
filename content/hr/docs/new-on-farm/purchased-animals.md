---
title: Kupljene životinje
linkTitle: Kupljene životinje
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: purchased-animals
description: >
  Ovdje možete vidjeti svoje trenutne kupnje i izvesti podatke.
categories: [Novo na farmi]
tags: [Novo na farmi]
translationKey: new-on-farm/new-on-farm
---
## Kupljene životinje {#purchased-animals}

Na ovom popisu ćete pronaći sve životinje koje ste kreirali putem grupnog unosa. Možete izvesti ovaj popis i tako registrirati svoje dodatke izravno u programu za upravljanje stadom DSP-Herde i u HI-Tier. Alternativno, možete izbrisati sve obavijesti o kupnji.

{{% alert title="Savjet" %}}
Za izvoz podataka potreban vam je priloženi UBS stick. Spojite USB stick s USB-C adapterom na svoj VitalControl uređaj prije nego što slijedite upute.
{{% /alert %}}

1. Na glavnom ekranu vašeg VitalControl uređaja odaberite stavku izbornika <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Novo na farmi" /> `{{<T "NewOnFarm" >}}` i pritisnite gumb `{{<T "Ok" >}}`.

2. Otvara se podizbornik u kojem možete birati između <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Novo na farmi, bez transpondera" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Kupljene životinje" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Bez nacionalnog ID broja životinje" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Rođenja" /> `{{<T "Births" >}}` i <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Bez dodijeljenog transpondera" /> `{{<T "NoTransponderAssigned" >}}`. Koristite tipke sa strelicama ◁ ▷ △ ▽ za odabir stavke izbornika <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Kupljene životinje" /> `{{<T "PurchasedAnimals" >}}` i potvrdite s `{{<T "Ok" >}}`.

3. Otvara se popis s vašim kupnjama koje ste registrirali putem stavke izbornika za grupni unos.


4. Koristite tipku `F2` `{{<T "CSVExport" >}}`.

5. Popis poruka u CSV formatu sada je spremljen na vaš USB stick.

    ![VitalControl: List of purchased animals, csv export](../images/purchasedanimals.png "Purchased animals, csv export ")

## Opcije: Izbriši sve obavijesti nakon izvoza {#options-delete-all-notices-after-export}

S ovom opcijom možete postaviti hoće li sve poruke unutar popisa `{{<T "PurchasedAnimals" >}}` biti izbrisane nakon što je CSV datoteka izvezena. Koristite ovu opciju samo ako ste sigurni da vam poruke više nisu potrebne!

1. Koristite tipku `F3`. Otvara se podizbornik.

2. Koristite tipke sa strelicama △ ▽ za odabir stavke izbornika `{{<T "DeleteAllNoticesAfterExport" >}}` i potvrdite s `{{<T "Ok" >}}`.

3. Kutija je sada označena kvačicom. Opcija je aktivirana. Ponovno potvrdite s `{{<T "Ok" >}}` za deaktivaciju opcije.

    ![VitalControl: List of purchased animals, csv export](../images/delete-all.png "Delete all notices after export")

## Izravni pozivi funkcija {#direct-function-calls}

Osim stvaranja izvozne datoteke, imate sljedeće opcije:

- [Odspoji transponder](#unlink-transponder)
- [Izbriši sve obavijesti o kupnji](#clear-all-purchase-notices)
- [Izbriši životinju + obavijest](#delete-animal--purchase-notice)
- [Izbriši obavijest o kupnji](#clear-notice-of-purchase)
- [Uredi oznaku](#edit-data-of-purchased-animal)

{{% alert title="Savjet" %}}
Uvijek prvo otvorite popis `{{<T "PurchasedAnimals" >}}` kako je opisano u gornjim uputama.
{{% /alert %}}

### Odspoji transponder {#unlink-transponder}

Ovu funkciju možete koristiti za uklanjanje transpondera s životinje.

1. Koristite tipku `F3`. Otvara se podizbornik.

2. Koristite tipke sa strelicama △ ▽ za odabir stavke izbornika `{{<T "UnlinkTransponder" >}}` i potvrdite s `{{<T "Ok" >}}`.

3. Transponder je uspješno odspojen.

    ![VitalControl: List of purchased animals, csv export](../images/unlink-transponder.png "Purchased animals, unlink transponder")

### Izbriši sve obavijesti o kupnji {#clear-all-purchase-notices}

S ovom funkcijom možete izbrisati sve životinje s popisa `{{<T "PurchasedAnimals" >}}` bez potrebe za stvaranjem izvozne datoteke.

1. Koristite tipku `F3`. Otvara se podizbornik.

2. Koristite tipke sa strelicama △ ▽ za odabir stavke izbornika `{{<T "ClearAllPurchaseNotices" >}}` i potvrdite s `{{<T "Ok" >}}`.

3. Obavijesti o kupnji su uspješno izbrisane.

    ![VitalControl: Popis kupljenih životinja, brisanje obavijesti o kupnji](../images/clear.png "Brisanje svih obavijesti o kupnji")

### Brisanje životinje + obavijesti o kupnji {#delete-animal--purchase-notice}

Za brisanje životinje i odgovarajuće obavijesti o kupnji, postupite na sljedeći način:

1. Koristite tipke sa strelicama △ ▽ za odabir životinje koju želite izbrisati.

2. Koristite tipku `F3`. Otvara se podizbornik.

3. Koristite tipke sa strelicama △ ▽ za odabir stavke izbornika `{{<T "UnregisterAnimalAndBirthNotice" >}}` i potvrdite s `{{<T "Ok" >}}`.

4. Životinja i pristupna poruka su uspješno izbrisani.

    ![VitalControl: Popis kupljenih životinja, brisanje životinje + obavijesti](../images/delete.png "Brisanje životinje + obavijesti")

### Brisanje obavijesti o kupnji {#clear-notice-of-purchase}

Za brisanje obavijesti o kupnji životinje s popisa, postupite na sljedeći način:

1. Koristite tipke sa strelicama △ ▽ za odabir životinje čiju obavijest o kupnji želite izbrisati.

2. Koristite tipku `F3`. Otvara se podizbornik.

3. Koristite tipke sa strelicama △ ▽ za odabir stavke izbornika `{{<T "ClearPurchaseNotice" >}}` i potvrdite s `{{<T "Ok" >}}`.

4. Obavijest o kupnji odabrane životinje je uspješno izbrisana.

    ![VitalControl: Popis kupljenih životinja, brisanje obavijesti o kupnji](../images/clearnotice.png "Brisanje obavijesti o kupnji")

### Uređivanje podataka o kupljenoj životinji {#edit-data-of-purchased-animal}

Za uređivanje podataka o životinji na popisu kupnji, postupite na sljedeći način:

1. Koristite tipke sa strelicama △ ▽ za odabir životinje koju želite urediti.

2. Koristite tipku `{{<T "Ok" >}}`. Otvara se podizbornik s podacima o životinji. Kako urediti te podatke možete saznati [ovdje](/hr/docs/actions/edit/#edit-animal-data).

![VitalControl: Popis kupljenih životinja, Uredi podatke o životinji](../images/edit.png "Uredi podatke o kupljenoj životinji")
