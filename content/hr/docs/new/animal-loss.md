---
title: Registracija gubitka životinje
linkTitle: Gubitak životinje
date: 2023-07-28T13:25:28+02:00
weight: 10
draft: false
slug: animal-loss
description: >
  Kako registrirati gubitak životinje pomoću uređaja VitalControl.
categories: [Gubitak životinje]
tags: [Gubitak životinje]
translationKey: new/animal-loss
---
## Zabilježite gubitak životinje {#record-the-loss-of-an-animal}

{{% alert title="Savjet" %}}
Funkcija gubitka životinje u ovoj stavci izbornika prvenstveno se koristi za bilježenje mrtvorođenih teladi/janjadi. Opcije postavki su prilagođene u skladu s tim i nisu identične stavkama postavki u izborniku `{{<T "Actions" >}}` -> `{{<T "Unregister" >}}` ili `{{<T "AnimalLoss" >}}`.
{{% /alert %}}

Da biste zabilježili gubitak životinje, postupite na sljedeći način:

1. Na glavnom zaslonu vašeg uređaja VitalControl odaberite stavku izbornika <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="Nova životinja" /> `{{<T "New" >}}` i pritisnite gumb `{{<T "Ok" >}}`.

2. Otvorit će se podizbornik. Pomoću tipki sa strelicama ◁ ▷ △ ▽ odaberite stavku izbornika <img src="/icons/main/stillbirth.svg" width="40" align="bottom" alt="Gubitak životinje" /> `{{<T "AnimalLoss" >}}` i potvrdite s `{{<T "Ok" >}}`.

3. Ili skenirajte transponder majke životinje ili koristite gumb `{{<T "Ok" >}}`. Unesite ID majke životinje pomoću tipki sa strelicama ◁ ▷ △ ▽ i potvrdite s `{{<T "Ok" >}}`.

4. Otvorit će se još jedan podizbornik u kojem možete spremiti informacije o životinji. Pomoću tipki sa strelicama △ ▽ odaberite željenu stavku postavki.

5. Za postavke `{{<T "TypeAnimal" >}}`,`{{<T "Sex" >}}` ,`{{<T "BirthWeight" >}}`, `{{<T "Breed" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "Multiples" >}}` i `{{<T "CalvingEase" >}}`, koristite tipke sa strelicama ◁ ▷ za odabir željene postavke.

6. Za postavku `{{<T "DateBirth" >}}` koristite tipke sa strelicama △ ▽ za odabir željene opcije postavki i potvrdite s `{{<T "Ok" >}}`. Koristite tipke sa strelicama △ ▽◁ ▷ za odabir željenih brojeva. Na kraju, potvrdite s `{{<T "Ok" >}}`.

7. Spremite postavke i kreirajte novu životinju pomoću tipke `F3` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Spremi" />&nbsp;.

{{% alert title="Savjet" %}}
Dodatne informacije i opcije postavki za stvaranje novih životinja možete pronaći [ovdje](../../settings/animal-registration/).
{{% /alert %}}

{{< tabpane >}}
{{< tab header="Gubitak životinje:" text=true disabled=true />}}
{{% tab header="Skeniranje transpondera" text=true %}}
![VitalControl: Putanja izbornika Novi gubitak životinje](../images/animalloss-scan.png "Evidentirajte gubitak životinje")
{{% /tab %}}
{{% tab header="Ručno odabiranje s popisa" text=true %}}
![VitalControl: Putanja izbornika Novi gubitak životinje](../images/animalloss.png "Evidentirajte gubitak životinje")
{{% /tab %}}
{{< /tabpane >}}
