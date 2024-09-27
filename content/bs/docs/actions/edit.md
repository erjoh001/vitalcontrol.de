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

Akcija <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `{{<T "Edit" >}}` omogućava vam da direktno promijenite podatke odabrane životinje. Ova funkcija olakšava ispravljanje podataka o životinji ako, na primjer, postane očigledno tokom inspekcije životinje da je spol pogrešno sačuvan. Možete promijeniti sljedeće podatke:

- Vrsta životinje
- Spol
- Težina pri rođenju
- Pasmina
- Lokacija
- Nacionalni ID životinje
- ID
- Višestruki porodi
- Datum rođenja
- Lakoća telenja

Da biste promijenili podatke o životinji, postupite na sljedeći način:

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku iz menija &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` i pritisnite dugme `{{<T "Ok" >}}`.

2. Ili skenirajte životinju pomoću transpondera ili odaberite životinju sa liste. Potvrdite sa `{{<T "Ok" >}}` i odaberite životinju sa strelicama △ ▽. Potvrdite sa `{{<T "Ok" >}}`.

3. Otvara se podmeni sa akcijama za životinju. Koristite strelice ◁ ▷ △ ▽ da odaberete akciju <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `{{<T "Edit" >}}` i potvrdite sa `{{<T "Ok" >}}`.

4. Otvara se lista sa podacima o životinji. Koristite strelice △ ▽ da odaberete željenu opciju za promjenu.

5. Za podatke `{{<T "TypeAnimal" >}}`, `{{<T "Sex" >}}`, `{{<T "BirthWeight" >}}`, `{{<T "Breed" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "Multiples" >}}` i `{{<T "CalvingEase" >}}` koristite strelice ◁ ▷ da izvršite željenu promjenu.

6. Za podatke `{{<T "ID" >}}` i `{{<T "DateBirth" >}}` odaberite ih sa strelicama △ ▽ i potvrdite sa `{{<T "Ok" >}}`. Koristite strelice △ ▽ da odaberete odgovarajući broj i strelice ◁ ▷ da se krećete unutar polja za broj.

7. Sačuvajte promjenu sa `F3` tipkom.

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
Ako ova akcija nije dostupna, vjerovatno je deaktivirana! Aktivirajte akciju u [postavkama akcije](../setting/) meniju. Alternativno, resetovanje svih akcija će vratiti tu akciju.
{{% /alert %}}
