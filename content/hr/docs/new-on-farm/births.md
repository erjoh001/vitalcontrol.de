---
title: "Porodi"
linkTitle: "Porodi"
weight: 35
date: 2023-07-28T13:25:28+02:00
draft: false
slug: births
description: >
  Ovdje možete vidjeti svoje porode i kreirati izvoznu datoteku.
categories: [Porodi]
tags: [Porodi]
translationKey: new-on-farm/births
---
## Porodi {#births}

Na ovom popisu možete pregledati svoje porode, urediti ih i kreirati izvoznu datoteku za registraciju u HI-Tier. Da biste kreirali izvoznu datoteku, postupite na sljedeći način:

{{% alert title="Savjet" %}}
Za izvoz podataka potreban vam je priloženi UBS stick. Spojite USB stick s USB-C adapterom na svoj VitalControl uređaj prije nego što slijedite upute.
{{% /alert %}}

1. Na glavnom ekranu vašeg VitalControl uređaja odaberite stavku izbornika <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Novo na farmi" /> `{{<T "NewOnFarm" >}}` i pritisnite gumb `{{<T "Ok" >}}`.

2. Otvara se podizbornik u kojem možete birati između <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Novo na farmi, bez transpondera" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Kupljene životinje" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Bez nacionalnog ID-a životinje" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Porodi" /> `{{<T "Births" >}}` i <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Bez dodijeljenog transpondera" /> `{{<T "NoTransponderAssigned" >}}`. Koristite tipke sa strelicama ◁ ▷ △ ▽ za odabir stavke izbornika <img src="/icons/main/births.svg" width="40" align="bottom" alt="Porodi" /> `{{<T "Births" >}}` i potvrdite s `{{<T "Ok" >}}`.

3. Otvara se popis sa svim vašim porodima.

4. Koristite tipku `F3` `{{<T "ExportListBirths" >}}`. Otvara se podizbornik.

5. Koristite tipke sa strelicama △ ▽ za odabir stavke izbornika `{{<T "ExportListBirths" >}}` i potvrdite s `{{<T "Ok" >}}`.

6. Popis je sada spremljen kao CSV datoteka na vašem USB sticku. Sve životinje s popisa `{{<T "Births" >}}` su izbrisane.

![VitalControl: Menu New on farm Births](../images/births.png "Births")

## Postavljanje opcija {#setting-options}

Osim stvaranja izvozne datoteke, imate sljedeće opcije:

- [Promjena](#change-between-list-view-and-single-animal-view) između prikaza popisa i prikaza pojedinačne životinje
- [Brisanje svih obavijesti o rođenju](../purchased-animals/#clear-all-purchase-notices)
- [Brisanje životinje + obavijesti](../purchased-animals/#delete-animal--purchase-notice)
- [Brisanje obavijesti o rođenju](../purchased-animals/#clear-notice-of-purchase)
- [Uređivanje](#edit-data-of-birth-notice) obavijesti

{{% alert title="Savjet" %}}
Neke radnje su identične radnjama na popisu `{{<T "PurchasedAnimals" >}}`. Slijedite poveznice za detaljne upute. Uvijek prvo otvorite popis `{{<T "Births" >}}` kako je opisano u gornjim uputama.
{{% /alert %}}

### Promjena između prikaza popisa i prikaza pojedinačne životinje {#change-between-list-view-and-single-animal-view}

1. Koristite <img src="/icons/gear.svg" width="25" align="bottom" alt="Gear" /> gumb `On /Off`.

2. Koristite tipke sa strelicama ◁ ▷ za odabir između `{{<T "ListView" >}}` i `{{<T "SingleAnimalView" >}}`.

3. Spremite svoju postavku s tipkom `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;. Unutar prikaza popisa koristite tipke sa strelicama ◁ ▷ za prebacivanje između životinja.

    ![VitalControl: Menu New on farm Births](../images/change.png "Promjena između prikaza popisa i prikaza pojedinačne životinje")

### Uređivanje podataka o obavijesti o rođenju {#edit-data-of-birth-notice}

{{% alert title="Savjet" %}}
Uređivanje podataka o životinji moguće je samo u prikazu popisa!
{{% /alert %}}

1. Koristite tipke sa strelicama △ ▽ za odabir životinje koju želite urediti i potvrdite s `{{<T "Ok" >}}`.

2. Otvara se podizbornik u kojem možete prilagoditi razne postavke. Za detaljne upute kliknite [ovdje](/hr/docs/new/calving/#register-a-calving).

    ![VitalControl: Menu New on farm Births](../images/edit2.png "Uređivanje obavijesti o rođenju")
