---
title: Uredi podatke o živali
linkTitle: Uredi
slug: edit
weight: 90
description: >
 Uredi podatke izbrane živali.
date: 2023-07-26
categories: [Dejanja]
tags: [Dejanja, podatki o živali, uredi]
translationKey: actions/edit
---

## Uredi podatke o živali {#edit-animal-data}

Dejanje <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `{{<T "Edit" >}}` vam omogoča, da neposredno spremenite podatke o izbrani živali. Ta funkcija olajša popravljanje podatkov o živali, če se na primer med pregledom živali izkaže, da je bil spol napačno shranjen. Spremenite lahko naslednje podatke:

- Vrsta živali
- Spol
- Porodna teža
- Pasma
- Lokacija
- Nacionalna ID živali
- ID
- Večkratniki
- Datum rojstva
- Enostavnost telitve

Za spremembo podatkov o živali sledite naslednjim korakom:

1. Na glavnem zaslonu vaše naprave VitalControl izberite meni &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` in pritisnite gumb `{{<T "Ok" >}}`.

2. Ali skenirajte žival s transponderjem ali izberite žival s seznama. Potrdite z `{{<T "Ok" >}}` in izberite žival s puščičnimi tipkami △ ▽. Potrdite z `{{<T "Ok" >}}`.

3. Odpre se podmeni z dejanji za živali. S puščičnimi tipkami ◁ ▷ △ ▽ izberite dejanje <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `{{<T "Edit" >}}` in potrdite z `{{<T "Ok" >}}`.

4. Odpre se seznam s podatki o živali. S puščičnimi tipkami △ ▽ izberite želeno možnost spremembe.

5. Za podatke `{{<T "TypeAnimal" >}}`, `{{<T "Sex" >}}`, `{{<T "BirthWeight" >}}`, `{{<T "Breed" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "Multiples" >}}` in `{{<T "CalvingEase" >}}` uporabite puščične tipke ◁ ▷ za izvedbo želene spremembe.

6. Za podatke `{{<T "ID" >}}` in `{{<T "DateBirth" >}}` jih izberite s puščičnimi tipkami △ ▽ in potrdite z `{{<T "Ok" >}}`. Uporabite puščične tipke △ ▽ za izbiro ustrezne številke in puščične tipke ◁ ▷ za navigacijo znotraj številskih polj.

7. Shranite spremembo s tipko `F3`.

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
Če ta akcija ni na voljo, je verjetno bila deaktivirana! Aktivirajte akcijo v meniju [nastavitve akcij](../setting/). Alternativno, ponastavitev vseh akcij bo ponovno omogočila to akcijo.
{{% /alert %}}
