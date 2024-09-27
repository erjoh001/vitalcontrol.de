---
title: "Novo na farmi, bez transpondera"
linkTitle: "Novo na farmi, bez transpondera"
weight: 15
date: 2023-07-28T13:25:28+02:00
draft: false
slug: new-no-transponder
description: >
  Ovdje dodjeljujete transponder novim životinjama bez transpondera.
categories: [Novo na farmi, transponder]
tags: [Novo na farmi, transponder]
translationKey: new-on-farm/new-on-farm, no transponder
---
### Novo na farmi, bez transpondera {#new-on-farm-no-transponder}

Na ovom popisu pronaći ćete sve novostvorene životinje s maksimalnom starošću od X dana kojima još nije dodijeljen transponder. Maksimalnu starost možete postaviti [ovdje](/hr/docs/settings/animal-registration/#set-default-values). Nakon što prikupite transponder od ovih životinja, možete potražiti odgovarajući ID životinje unutar popisa i skenirati pridruženi transponder. Transponder se tada automatski dodjeljuje životinji i životinja se briše s popisa. Da biste dodijelili transponder, postupite na sljedeći način:

1. Na glavnom ekranu vašeg VitalControl uređaja odaberite stavku izbornika <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Novo na farmi" /> `{{<T "NewOnFarm" >}}` i pritisnite gumb `{{<T "Ok" >}}`.

2. Otvara se podizbornik u kojem možete birati između <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Novo na farmi, bez transpondera" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Kupljene životinje" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Bez nacionalnog ID-a životinje" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Rođenja" /> `{{<T "Births" >}}` i <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Bez dodijeljenog transpondera" /> `{{<T "NoTransponderAssigned" >}}`. Koristite tipke sa strelicama ◁ ▷ △ ▽ za odabir stavke izbornika <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Novo na farmi, bez transpondera" /> `{{<T "NewOnFarmNoTransponder" >}}` i potvrdite s `{{<T "Ok" >}}`.

3. Otvara se popis sa svim životinjama koje su novostvorene, ali kojima još nije dodijeljen transponder. Koristite tipke sa strelicama △ ▽ za odabir željene životinje i potvrdite s `{{<T "Ok" >}}`. Alternativno, možete pretraživati životinju. Koristite gumb `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> i koristite tipke sa strelicama ◁ ▷ △ ▽ za odabir željenih znamenki. Na kraju potvrdite s `{{<T "Ok" >}}`.

4. Sada skenirajte transponder životinje.

5. Transponder je uspješno dodan životinji.

{{< tabpane >}}
{{< tab header="Novo na farmi, bez transpondera:" text=true disabled=true />}}
{{% tab header="Skeniranje transpondera" text=true %}}
![VitalControl: Izbornik Novo na farmi, bez transpondera](../images/notransponder-scan.png "Novo na farmi, bez transpondera")
{{% /tab %}}
{{% tab header="Ručno odabiranje s popisa" text=true %}}
![VitalControl: Izbornik Novo na farmi, bez transpondera](../images/notransponder.png "Novo na farmi, bez transpondera")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Savjet" %}}
Čim dodijelite sve životinje, imate mogućnost biti preusmjereni na stavku izbornika `{{<T "PurchasedAnimals" >}}` putem gumba `{{<T "Ok" >}}`. Tamo možete stvoriti CSV datoteku za izvješće o pristupu u HI-Tier ili HERDE-Mast. <br/>
<br/>
![VitalControl: Izbornik Novo na farmi, bez transpondera](../images/redirect.png "Preusmjeravanje")
{{% /alert %}}

## Prethodne dodatne radnje {#previous-additional-actions}

Možete koristiti prethodne dodatne radnje za postavljanje koje radnje želite izvršiti prije dodjeljivanja transpondera. Možete birati između mjerenja temperature, procjene životinje i vaganja životinje. Odabrana radnja se izravno sprema za životinju kojoj kasnije dodijelite transponder. Postupite na sljedeći način:

1. Na glavnom zaslonu vašeg VitalControl uređaja odaberite stavku izbornika <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="New on farm" /> `{{<T "NewOnFarm" >}}` i pritisnite gumb `{{<T "Ok" >}}`.

2. Otvara se podizbornik u kojem možete birati između <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="New on farm, no transponder" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Purchased animals" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="No national animal ID" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Births" /> `{{<T "Births" >}}` i <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="No transponder assigned" /> `{{<T "NoTransponderAssigned" >}}`. Koristite tipke sa strelicama ◁ ▷ △ ▽ za odabir stavke izbornika <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="New on farm, no transponder" /> `{{<T "NewOnFarmNoTransponder" >}}` i potvrdite s `{{<T "Ok" >}}`.


3. Koristite tipku `{{<T "Ok" >}}` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Aufruf Popup" />&nbsp; za otvaranje skočnog prozora. Koristite tipke sa strelicama △ ▽ za navigaciju do stavke `F3`.

4. Koristite tipke sa strelicama △ ▽ za odabir između `{{<T "PreviousAdditionalActions" >}}`, `{{<T "TempTaking" >}}` i `{{<T "RateAnimal" >}}`. Potvrdite s `{{<T "Ok" >}}` za aktiviranje potvrdnog okvira. Unutar potvrdnog okvira pojavit će se kvačica koja potvrđuje da je radnja aktivirana. Ponovno potvrdite s `{{<T "Ok" >}}` za deaktiviranje radnje. Možete aktivirati bilo koji broj radnji istovremeno.

{{% alert title="Savjet" %}}
Stavka izbornika `{{<T "Ok" >}}` vas informira da će dodjela transpondera uvijek biti posljednja radnja koja će se izvršiti čim potvrdite odabir životinje s `{{<T "Ok" >}}` u stavci izbornika `{{<T "Ok" >}}`.
{{% /alert %}}

![VitalControl: Izbornik Novo na farmi, bez transpondera](../images/actions.png "Dodatne radnje")

 ## Daljnje stavke izbornika {#further-menu-items}

Također imate mogućnost odabira između `{{<T "NewOnFarmNoTransponder" >}}`, `{{<T "Settings" >}}` i `{{<T "SetFilter" >}}` u skočnom prozoru. Koristite tipke sa strelicama △ ▽ za navigaciju do odgovarajuće stavke izbornika i potvrdite s `{{<T "Ok" >}}`. Informacije za stavku izbornika `{{<T "NewOnFarmNoTransponder" >}}` možete pronaći [ovdje](/hr/docs/settings/animal-registration/#set-default-values), za `{{<T "SetFilter" >}}` [ovdje](/hr/docs/filter/) i za `{{<T "Settings" >}}` postupite kao u `{{<T "Ok" >}}` koraku 3.
