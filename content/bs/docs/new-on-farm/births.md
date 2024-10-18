---
title: "Rođenja"
linkTitle: "Rođenja"
weight: 35
date: 2023-07-28T13:25:28+02:00
draft: false
slug: births
description: >
  Ovdje možete vidjeti svoja rođenja i kreirati izvoznu datoteku.
categories: [Rođenja]
tags: [Rođenja]
translationKey: new-on-farm/births
---
## Rođenja {#births}

Na ovoj listi možete pregledati svoja rođenja, urediti ih i kreirati izvoznu datoteku za registraciju u HI-Tier. Da biste kreirali izvoznu datoteku, postupite na sljedeći način:

{{% alert title="Savjet" %}}
Za izvoz podataka potreban vam je priloženi UBS stick. Povežite USB stick s USB-C adapterom na vaš VitalControl uređaj prije nego što slijedite upute.
{{% /alert %}}

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku izbornika <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="New on farm" /> `{{<T "NewOnFarm" >}}` i pritisnite dugme `{{<T "Ok" >}}`.

2. Otvara se podizbornik u kojem možete birati između <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="New on farm, no transponder" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Purchased animals" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="No national animal ID" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Births" /> `{{<T "Births" >}}` i <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="No transponder assigned" /> `{{<T "NoTransponderAssigned" >}}`. Koristite tipke sa strelicama ◁ ▷ △ ▽ da biste odabrali stavku izbornika <img src="/icons/main/births.svg" width="40" align="bottom" alt="Births" /> `{{<T "Births" >}}` i potvrdite s `{{<T "Ok" >}}`.

3. Otvara se lista sa svim vašim rođenjima.

4. Koristite tipku `F3` `{{<T "ExportListBirths" >}}`. Otvara se podizbornik.

5. Koristite tipke sa strelicama △ ▽ da biste odabrali stavku izbornika `{{<T "ExportListBirths" >}}` i potvrdite s `{{<T "Ok" >}}`.

6. Lista je sada sačuvana kao CSV datoteka na vašem USB sticku. Svi životinje s liste `{{<T "Births" >}}` su izbrisane.

![VitalControl: Menu New on farm Births](../images/births.png "Births")

## Postavljanje opcija {#setting-options}

Pored kreiranja izvozne datoteke, imate sljedeće opcije:

- [Promjena](#change-between-list-view-and-single-animal-view) između prikaza liste i prikaza pojedinačne životinje
- [Brisanje svih obavijesti o rođenju](../purchased-animals/#clear-all-purchase-notices)
- [Brisanje životinje + obavijesti](../purchased-animals/#delete-animal--purchase-notice)
- [Brisanje obavijesti o rođenju](../purchased-animals/#clear-notice-of-purchase)
- [Uređivanje](#edit-data-of-birth-notice) obavijesti

{{% alert title="Savjet" %}}
Neke radnje su identične radnjama u listi `{{<T "PurchasedAnimals" >}}`. Slijedite linkove za detaljna uputstva. Uvijek prvo otvorite listu `{{<T "Births" >}}` kako je opisano u gore navedenim uputstvima.
{{% /alert %}}

### Promjena između prikaza liste i prikaza pojedinačne životinje {#change-between-list-view-and-single-animal-view}

1. Koristite <img src="/icons/gear.svg" width="25" align="bottom" alt="Gear" /> dugme `On /Off`.

2. Koristite strelice ◁ ▷ za izbor između `{{<T "ListView" >}}` i `{{<T "SingleAnimalView" >}}`.

3. Sačuvajte postavku sa `F1` tipkom &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;. Unutar prikaza liste, koristite strelice ◁ ▷ za prebacivanje između životinja.

    ![VitalControl: Menu New on farm Births](../images/change.png "Promjena između prikaza liste i prikaza pojedinačne životinje")

### Uređivanje podataka o obavijesti o rođenju {#edit-data-of-birth-notice}

{{% alert title="Savjet" %}}
Uređivanje podataka o životinji moguće je samo u prikazu liste!
{{% /alert %}}

1. Koristite strelice △ ▽ za izbor životinje koju želite urediti i potvrdite sa `{{<T "Ok" >}}`.

2. Otvara se podmeni u kojem možete prilagoditi razne postavke. Za detaljna uputstva kliknite [ovdje](/bs/docs/new/calving/#register-a-calving).

    ![VitalControl: Menu New on farm Births](../images/edit2.png "Uređivanje obavijesti o rođenju")

