---
title: Kupljene životinje
linkTitle: Kupljene životinje
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: purchased-animals
description: >
  Ovdje možete pregledati svoje trenutne kupovine i izvesti podatke.
categories: [Novo na farmi]
tags: [Novo na farmi]
translationKey: new-on-farm/new-on-farm
---
## Kupljene životinje {#purchased-animals}

Na ovoj listi ćete pronaći sve životinje koje ste kreirali putem grupnog unosa. Možete izvesti ovu listu i tako direktno registrovati svoje dodatke u program za upravljanje stadom DSP-Herde i u HI-Tier. Alternativno, možete izbrisati sve obavijesti o kupovini.

{{% alert title="Savjet" %}}
Za izvoz podataka potreban vam je priloženi UBS stick. Povežite USB stick sa USB-C adapterom na vaš VitalControl uređaj prije nego što slijedite upute.
{{% /alert %}}

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku izbornika <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Novo na farmi" /> `{{<T "NewOnFarm" >}}` i pritisnite dugme `{{<T "Ok" >}}`.

2. Otvara se podizbornik u kojem možete birati između <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Novo na farmi, bez transpondera" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Kupljene životinje" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Bez nacionalnog ID broja životinje" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Rođenja" /> `{{<T "Births" >}}` i <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Bez dodijeljenog transpondera" /> `{{<T "NoTransponderAssigned" >}}`. Koristite tipke sa strelicama ◁ ▷ △ ▽ da odaberete stavku izbornika <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Kupljene životinje" /> `{{<T "PurchasedAnimals" >}}` i potvrdite sa `{{<T "Ok" >}}`.

3. Otvara se lista sa vašim kupovinama koje ste registrovali putem stavke izbornika za grupni unos.


4. Koristite tipku `F2` `{{<T "CSVExport" >}}`.

5. Lista poruka u CSV formatu je sada sačuvana na vašem USB sticku.

    ![VitalControl: Lista kupljenih životinja, csv izvoz](../images/purchasedanimals.png "Kupljene životinje, csv izvoz ")

## Opcije: Izbriši sve obavijesti nakon izvoza {#options-delete-all-notices-after-export}

Sa ovom opcijom, možete postaviti da li sve poruke unutar `{{<T "PurchasedAnimals" >}}` liste trebaju biti izbrisane nakon što je CSV fajl izvezen. Koristite ovu opciju samo ako ste sigurni da vam poruke više nisu potrebne!

1. Koristite tipku `F3`. Otvara se podmeni.

2. Koristite strelice △ ▽ da odaberete stavku menija `{{<T "DeleteAllNoticesAfterExport" >}}` i potvrdite sa `{{<T "Ok" >}}`.

3. Polje je sada označeno kvačicom. Opcija je aktivirana. Ponovo potvrdite sa `{{<T "Ok" >}}` da deaktivirate opciju.

    ![VitalControl: Lista kupljenih životinja, csv izvoz](../images/delete-all.png "Izbriši sve obavijesti nakon izvoza")    

## Direktni pozivi funkcija {#direct-function-calls}

Pored kreiranja izvoznih fajlova, imate sljedeće opcije:

- [Odveži transponder](#unlink-transponder)
- [Obriši sve obavijesti o kupovini](#clear-all-purchase-notices)
- [Izbriši životinju + obavijest](#delete-animal--purchase-notice)
- [Obriši obavijest o kupovini](#clear-notice-of-purchase)
- [Uredi oznaku](#edit-data-of-purchased-animal)

{{% alert title="Savjet" %}}
Uvijek prvo otvorite `{{<T "PurchasedAnimals" >}}` listu kao što je opisano u gore navedenim uputama.
{{% /alert %}}

### Odveži transponder {#unlink-transponder}

Možete koristiti ovu funkciju da uklonite transponder sa životinje.

1. Koristite tipku `F3`. Otvara se podmeni.

2. Koristite strelice △ ▽ da odaberete stavku menija `{{<T "UnlinkTransponder" >}}` i potvrdite sa `{{<T "Ok" >}}`.

3. Transponder je uspješno odvezan.

    ![VitalControl: Lista kupljenih životinja, csv izvoz](../images/unlink-transponder.png "Kupljene životinje, odveži transponder")

### Obriši sve obavijesti o kupovini {#clear-all-purchase-notices}

Uz ovu funkciju možete izbrisati sve životinje sa liste `{{<T "PurchasedAnimals" >}}` bez potrebe za kreiranjem izvozne datoteke.

1. Koristite tipku `F3`. Otvara se podmeni.

2. Koristite strelice △ ▽ za odabir stavke menija `{{<T "ClearAllPurchaseNotices" >}}` i potvrdite sa `{{<T "Ok" >}}`.

3. Obavijesti o kupovini su uspješno izbrisane.

    ![VitalControl: Lista kupljenih životinja, brisanje obavijesti o kupovini](../images/clear.png "Brisanje svih obavijesti o kupovini")

### Brisanje životinje + obavijest o kupovini {#delete-animal--purchase-notice}

Da biste izbrisali životinju i odgovarajuću obavijest o kupovini, postupite na sljedeći način:

1. Koristite strelice △ ▽ za odabir životinje koju želite izbrisati.

2. Koristite tipku `F3`. Otvara se podmeni.

3. Koristite strelice △ ▽ za odabir stavke menija `{{<T "UnregisterAnimalAndBirthNotice" >}}` i potvrdite sa `{{<T "Ok" >}}`.

4. Životinja i obavijest o pristupu su uspješno izbrisani.

    ![VitalControl: Lista kupljenih životinja, brisanje životinje + obavijest](../images/delete.png "Brisanje životinje + obavijest")

### Brisanje obavijesti o kupovini {#clear-notice-of-purchase}

Da biste izbrisali obavijest o kupovini životinje sa liste, postupite na sljedeći način:

1. Koristite strelice △ ▽ za odabir životinje čiju obavijest o kupovini želite izbrisati.

2. Koristite tipku `F3`. Otvara se podmeni.

3. Koristite strelice △ ▽ za odabir stavke menija `{{<T "ClearPurchaseNotice" >}}` i potvrdite sa `{{<T "Ok" >}}`.

4. Obavijest o kupovini odabrane životinje je uspješno izbrisana.

    ![VitalControl: Lista kupljenih životinja, brisanje obavijesti o kupovini](../images/clearnotice.png "Brisanje obavijesti o kupovini")

### Uređivanje podataka o kupljenoj životinji {#edit-data-of-purchased-animal}

Da biste uredili podatke o životinji na listi kupovina, postupite na sljedeći način:

1. Koristite strelice △ ▽ za odabir životinje koju želite urediti.

2. Koristite dugme `{{<T "Ok" >}}`. Otvara se podmeni sa podacima o životinji. Kako urediti ove podatke možete saznati [ovdje](/bs/docs/actions/edit/#edit-animal-data).

![VitalControl: Lista kupljenih životinja, Uredi podatke o životinji](../images/edit.png "Uredi podatke o kupljenoj životinji")
