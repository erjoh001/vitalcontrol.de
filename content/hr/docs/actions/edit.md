---
title: Uredi podatke o životinji
linkTitle: Uredi
slug: edit
weight: 90
description: >
 Uredi podatke odabrane životinje.
date: 2023-07-26
categories: [Akcije]
tags: [Akcije, podaci o životinjama, uredi]
translationKey: actions/edit
---

## Uredi podatke o životinji {#edit-animal-data}

Akcija <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `{{<T "Edit" >}}` omogućuje vam da izravno promijenite podatke odabrane životinje. Ova funkcija olakšava ispravljanje podataka o životinji ako, na primjer, tijekom pregleda životinje postane očito da je spol pogrešno spremljen. Možete promijeniti sljedeće podatke:

- Vrsta životinje
- Spol
- Porodna težina
- Pasmina
- Lokacija
- Nacionalni ID životinje
- ID
- Višestruki porodi
- Datum rođenja
- Lakoća teljenja

Da biste promijenili podatke o životinji, postupite na sljedeći način:

1. Na glavnom ekranu vašeg VitalControl uređaja odaberite stavku izbornika &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` i pritisnite gumb `{{<T "Ok" >}}`.

2. Ili skenirajte životinju pomoću transpondera ili odaberite životinju s popisa. Potvrdite s `{{<T "Ok" >}}` i odaberite životinju pomoću tipki sa strelicama △ ▽. Potvrdite s `{{<T "Ok" >}}`.

3. Otvara se podizbornik s akcijama za životinje. Pomoću tipki sa strelicama ◁ ▷ △ ▽ odaberite akciju <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `{{<T "Edit" >}}` i potvrdite s `{{<T "Ok" >}}`.

4. Otvara se popis s podacima o životinji. Pomoću tipki sa strelicama △ ▽ odaberite željenu opciju za promjenu.

5. Za podatke `{{<T "TypeAnimal" >}}`, `{{<T "Sex" >}}`, `{{<T "BirthWeight" >}}`, `{{<T "Breed" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "Multiples" >}}` i `{{<T "CalvingEase" >}}` koristite tipke sa strelicama ◁ ▷ za željenu promjenu.

6. Za podatke `{{<T "ID" >}}` i `{{<T "DateBirth" >}}` odaberite ih pomoću tipki sa strelicama △ ▽ i potvrdite s `{{<T "Ok" >}}`. Koristite tipke sa strelicama △ ▽ za odabir odgovarajućeg broja i tipke sa strelicama ◁ ▷ za navigaciju unutar polja s brojevima.

7. Spremite promjenu s tipkom `F3`.

{{< tabpane >}}
{{< tab header="Edit animal data:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Action Edit animal data](../images/edit-scan.png "Edit animal data")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Action Edit animal data](../images/edit.png "Edit animal data")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Hint" %}}
Ako ova akcija nije dostupna, vjerojatno je deaktivirana! Aktivirajte akciju u izborniku [postavke akcije](../setting/). Alternativno, resetiranje svih akcija će vratiti tu akciju.
{{% /alert %}}
