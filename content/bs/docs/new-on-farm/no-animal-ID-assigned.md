---
title: "Nije dodijeljen nacionalni ID životinje"
linkTitle: "Nije dodijeljen nacionalni ID životinje"
weight: 30
date: 2023-07-28T13:25:28+02:00
draft: false
slug: no-national-animal-ID-assigned
description: >
 Ovdje možete vidjeti sve životinje kojima još nije dodijeljen nacionalni ID životinje i dodijeliti im nacionalni ID životinje.
categories: [Novo na farmi]
tags: [Novo na farmi]
translationKey: new-on-farm/no-animal-ID-assigned
---
## Nije dodijeljen nacionalni ID životinje {#no-national-animal-id-assigned}

Na ovoj listi ćete pronaći sve životinje kojima još nije dodijeljen ID životinje. Možete dodijeliti ID životinje životinjama na ovoj listi.

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku izbornika <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Novo na farmi" /> `{{<T "NewOnFarm" >}}` i pritisnite dugme `{{<T "Ok" >}}`.

2. Otvara se podizbornik u kojem možete birati između <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Novo na farmi, bez transpondera" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Kupljene životinje" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Nema nacionalnog ID-a životinje" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Rođenja" /> `{{<T "Births" >}}` i <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Nije dodijeljen transponder" /> `{{<T "NoTransponderAssigned" >}}`. Koristite tipke sa strelicama ◁ ▷ △ ▽ za odabir stavke izbornika <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Nema nacionalnog ID-a životinje" /> `{{<T "NoAnimalIDAssigned" >}}` i potvrdite sa `{{<T "Ok" >}}`.

3. Otvara se lista sa vašim životinjama kojima još nije dodijeljen nacionalni ID životinje.

4. Koristite tipke sa strelicama △ ▽ za odabir željene životinje i potvrdite sa `{{<T "Ok" >}}`. Alternativno, možete pretraživati životinju. Da biste to učinili, pritisnite srednje dugme `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Pretraga" /> i koristite tipke sa strelicama ◁ ▷ △ ▽ za odabir željenih cifara. Na kraju potvrdite sa `{{<T "Ok" >}}`.


5. Otvori se podmeni u kojem možete urediti sve podatke za životinju. Stavka menija `{{<T "NationalAnimalID" >}}` je automatski odabrana.

6. Potvrdite sa `{{<T "Ok" >}}` ili pritisnite dugme `On/Off`. Koristite strelice ◁ ▷ △ ▽ da postavite željeni nacionalni ID životinje. Na kraju potvrdite sa `{{<T "Ok" >}}`.

7. Sačuvajte postavku sa tasterom `F3` <img src="/icons/footer/save.svg" width="24" align="bottom" alt="Save" />&nbsp;. Životinja je uspješno dobila nacionalni ID i uklonjena je sa liste.

{{% alert title="Hint" %}}
Pod [posljednje radnje na OK](#last-action-on-ok) možete postaviti da li želite unijeti broj ušne markice ručno ili skeniranjem. Odaberite primjer ekrana prema vašoj postavci. 
{{% /alert %}}

{{< tabpane >}}
{{< tab header="Dodijeli nacionalni ID životinje:" text=true disabled=true />}}
{{% tab header="Poveži ID (ručno)" text=true %}}
![VitalControl: Meni Novi Nema dodijeljen nacionalni ID životinje](../images/noanimalID.png "Poveži ID (ručno)")
{{% /tab %}}
{{% tab header="Poveži ID (RFID sken)" text=true %}}
![VitalControl: Meni Novi Nema dodijeljen nacionalni ID životinje](../images/noanimalID-scan.png "Poveži ID (RFID sken)")
{{% /tab %}}
{{< /tabpane >}}        

## Posljednja radnja na OK {#last-action-on-ok}

Možete koristiti dodatne radnje da postavite koje radnje želite izvršiti prije dodjele nacionalnog ID-a životinje. Možete birati između mjerenja temperature, procjene životinje i vaganja životinje. Odgovarajuća radnja se direktno sprema za životinju kojoj naknadno dodijelite ID. Postupite na sljedeći način:

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku menija <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="New on farm" /> `{{<T "NewOnFarm" >}}` i pritisnite dugme `{{<T "Ok" >}}`.

2. Otvori se podmeni u kojem možete birati između <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="New on farm, no transponder" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Purchased animals" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="No national animal ID" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Births" /> `{{<T "Births" >}}` i <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="No transponder assigned" /> `{{<T "NoTransponderAssigned" >}}`. Koristite strelice ◁ ▷ △ ▽ da odaberete stavku menija <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="No national animal ID" /> `{{<T "NoAnimalIDAssigned" >}}` i potvrdite sa `{{<T "Ok" >}}`.


3. Otvara se lista sa vašim životinjama kojima još nije dodijeljen nacionalni ID životinje.

4. Koristite tipku `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Call popup" />&nbsp; . Otvara se podmeni u kojem imate razne opcije postavki. Koristite strelice △ ▽ za navigaciju do stavke menija `{{<T "LinkAnimalIDManual" >}}` ili `{{<T "LinkAnimalIDScan" >}}`. Potvrdite sa `{{<T "Ok" >}}`. Postavka koju ste odabrali sada je aktivna.

    ![Lista kupljenih životinja, nije dodijeljen nacionalni ID životinje](../images/link.png "Nije dodijeljen nacionalni ID životinje, Link")

{{% alert title="Upozorenje" color="warning" %}}
Možete koristiti dodjelu broja ušne markice skeniranjem samo ako koristite elektronske ušne markice!
{{% /alert %}}

## Prethodne dodatne radnje {#previous-additional-actions}

Možete koristiti prethodne dodatne radnje da postavite koje radnje želite izvršiti prije dodjele broja ušne markice. Možete birati između mjerenja temperature, procjene životinje i vaganja životinje. Odabrana radnja se direktno sprema za životinju kojoj kasnije dodijelite broj. Postupite na sljedeći način:

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku menija <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="New on farm" /> `{{<T "NewOnFarm" >}}` i pritisnite tipku `{{<T "Ok" >}}`.

2. Otvara se podmeni u kojem možete birati između <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="New on farm, no transponder" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Purchased animals" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="No national animal ID" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Births" /> `{{<T "Births" >}}` i <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="No transponder assigned" /> `{{<T "NoTransponderAssigned" >}}`. Koristite strelice ◁ ▷ △ ▽ za odabir stavke menija <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="No national animal ID" /> `{{<T "NoAnimalIDAssigned" >}}` i potvrdite sa `{{<T "Ok" >}}`.

3. Otvara se lista sa vašim životinjama kojima još nije dodijeljen nacionalni ID životinje.

4. Koristite tipku `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Pozovi popup" />&nbsp; da pozovete popup. Koristite tipke sa strelicama △ ▽ da se krećete do stavke `{{<T "PreviousAdditionalActions" >}}`.

5. Koristite tipke sa strelicama △ ▽ da birate između `{{<T "TempTaking" >}}`, `{{<T "RateAnimal" >}}` i `{{<T "WeighAnimal" >}}`. Potvrdite sa `{{<T "Ok" >}}` da aktivirate checkbox. Pojavit će se kvačica unutar checkboxa da potvrdi da je akcija aktivirana. Ponovo potvrdite sa `{{<T "Ok" >}}` da deaktivirate akciju. Možete aktivirati bilo koji broj akcija istovremeno.

    ![Lista kupljenih životinja, nije dodijeljen nacionalni ID životinje](../images/aidditional-actions.png "Nije dodijeljen nacionalni ID životinje, Link")

## Dalje stavke menija {#further-menu-items}

Također imate opciju da birate između `{{<T "SearchAnimal" >}}` i `{{<T "SetFilter" >}}` u popup-u. Koristite tipke sa strelicama △ ▽ da se krećete do odgovarajuće stavke menija i potvrdite sa `{{<T "Ok" >}}`. Informacije za `{{<T "SetFilter" >}}` [ovdje](/bs/docs/filter/) i za `{{<T "SearchAnimal" >}}` postupite kao u `{{<T "NoAnimalIDAssigned" >}}` koraku 4.
