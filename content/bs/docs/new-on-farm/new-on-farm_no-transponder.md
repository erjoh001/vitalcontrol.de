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

Na ovoj listi ćete pronaći sve novokreirane životinje sa maksimalnom starošću od X dana koje još nisu dobile transponder. Maksimalnu starost možete postaviti [ovdje](/bs/docs/settings/animal-registration/#set-default-values). Kada prikupite transponder od ovih životinja, možete potražiti odgovarajući ID životinje unutar liste i skenirati povezani transponder. Transponder se tada automatski dodjeljuje životinji i životinja se briše sa liste. Da biste dodijelili transponder, postupite na sljedeći način:

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku izbornika <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Novo na farmi" /> `{{<T "NewOnFarm" >}}` i pritisnite dugme `{{<T "Ok" >}}`.

2. Otvara se podizbornik u kojem možete birati između <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Novo na farmi, bez transpondera" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Kupljene životinje" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Bez nacionalnog ID-a životinje" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Rođenja" /> `{{<T "Births" >}}` i <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Bez dodijeljenog transpondera" /> `{{<T "NoTransponderAssigned" >}}`. Koristite tipke sa strelicama ◁ ▷ △ ▽ da biste odabrali stavku izbornika <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Novo na farmi, bez transpondera" /> `{{<T "NewOnFarmNoTransponder" >}}` i potvrdite sa `{{<T "Ok" >}}`.

3. Otvara se lista sa svim životinjama koje su novokreirane, ali kojima još nije dodijeljen transponder. Koristite strelice △ ▽ za odabir željene životinje i potvrdite sa `{{<T "Ok" >}}`. Alternativno, možete pretraživati životinju. Koristite dugme `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> i koristite strelice ◁ ▷ △ ▽ za odabir željenih cifara. Na kraju potvrdite sa `{{<T "Ok" >}}`.

4. Sada skenirajte transponder životinje.

5. Transponder je uspješno dodan životinji.

{{< tabpane >}}
{{< tab header="New on farm, no transponder:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu New on farm, no transponder](../images/notransponder-scan.png "New on farm, no transponder")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu New on farm, no transponder](../images/notransponder.png "New on farm, no transponder")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Hint" %}}
Čim dodijelite sve životinje, imate mogućnost da budete preusmjereni na stavku menija `{{<T "PurchasedAnimals" >}}` putem dugmeta `{{<T "Ok" >}}`. Tamo možete kreirati CSV datoteku za izvještaj o pristupu u HI-Tier ili HERDE-Mast. <br/>
<br/>
![VitalControl: Menu New on farm, no transponder](../images/redirect.png "Redirect")
{{% /alert %}}

## Prethodne dodatne radnje {#previous-additional-actions}

Možete koristiti prethodne dodatne radnje da postavite koje radnje želite izvršiti prije dodjele transpondera. Možete birati između mjerenja temperature, procjene životinje i vaganja životinje. Odgovarajuća radnja se direktno sprema za životinju kojoj kasnije dodijelite transponder. Postupite na sljedeći način:

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku menija <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="New on farm" /> `{{<T "NewOnFarm" >}}` i pritisnite dugme `{{<T "Ok" >}}`.

2. Otvara se podmeni u kojem možete birati između <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="New on farm, no transponder" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Purchased animals" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="No national animal ID" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Births" /> `{{<T "Births" >}}` i <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="No transponder assigned" /> `{{<T "NoTransponderAssigned" >}}`. Koristite strelice ◁ ▷ △ ▽ za odabir stavke menija <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="New on farm, no transponder" /> `{{<T "NewOnFarmNoTransponder" >}}` i potvrdite sa `{{<T "Ok" >}}`.

3. Koristite tipku `{{<T "Ok" >}}` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Aufruf Popup" />&nbsp; za otvaranje popup prozora. Koristite strelice △ ▽ za navigaciju do stavke `F3`.

4. Koristite strelice △ ▽ za odabir između `{{<T "PreviousAdditionalActions" >}}`, `{{<T "TempTaking" >}}` i `{{<T "RateAnimal" >}}`. Potvrdite sa `{{<T "Ok" >}}` da aktivirate checkbox. Pojavit će se kvačica unutar checkboxa koja potvrđuje da je akcija aktivirana. Ponovno potvrdite sa `{{<T "Ok" >}}` da deaktivirate akciju. Možete aktivirati bilo koji broj akcija istovremeno.

{{% alert title="Hint" %}}
Stavka menija `{{<T "Ok" >}}` vas informira da će dodjeljivanje transpondera uvijek biti posljednja akcija koja će se izvršiti čim potvrdite odabir životinje sa `{{<T "Ok" >}}` u stavci menija `{{<T "Ok" >}}`.
{{% /alert %}}

![VitalControl: Meni Novi na farmi, bez transpondera](../images/actions.png "Dodatne akcije")

## Dalje stavke menija {#further-menu-items}

Također imate opciju odabira između `{{<T "NewOnFarmNoTransponder" >}}`, `{{<T "Settings" >}}` i `{{<T "SetFilter" >}}` u popup prozoru. Koristite strelice △ ▽ za navigaciju do odgovarajuće stavke menija i potvrdite sa `{{<T "Ok" >}}`. Informacije za stavku menija `{{<T "NewOnFarmNoTransponder" >}}` možete pronaći [ovdje](/bs/docs/settings/animal-registration/#set-default-values), za `{{<T "SetFilter" >}}` [ovdje](/bs/docs/filter/) i za `{{<T "Settings" >}}` postupite kao u `{{<T "Ok" >}}` koraku 3.
