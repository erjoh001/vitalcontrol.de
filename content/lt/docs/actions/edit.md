---
title: Redaguoti gyvūno duomenis
linkTitle: Redaguoti
slug: edit
weight: 90
description: >
 Redaguoti pasirinkto gyvūno duomenis.
date: 2023-07-26
kategorijos: [Veiksmai]
Žymos: [Veiksmai, gyvūno duomenys, redaguoti]
translationKey: actions/edit
---

## Redaguoti gyvūno duomenis {#edit-animal-data}

Veiksmas <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Redaguoti" /> `{{<T "Edit" >}}` leidžia tiesiogiai pakeisti pasirinkto gyvūno duomenis. Ši funkcija palengvina gyvūno duomenų taisymą, jei, pavyzdžiui, gyvūno patikrinimo metu paaiškėja, kad lytis buvo išsaugota neteisingai. Galite pakeisti šiuos duomenis:

- Gyvūno tipas
- Lytis
- Gimimo svoris
- Veislė
- Buvimo vieta
- Nacionalinis gyvūno ID
- ID
- Daugybiniai
- Gimimo data
- Veršiavimosi lengvumas

Norėdami pakeisti gyvūno duomenis, atlikite šiuos veiksmus:

1. Pagrindiniame savo VitalControl įrenginio ekrane pasirinkite meniu punktą &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Veiksmai" /> `{{<T "Actions" >}}` ir paspauskite mygtuką `{{<T "Ok" >}}`.

2. Nuskaitykite gyvūną naudodami transponderį arba pasirinkite gyvūną iš sąrašo. Patvirtinkite su `{{<T "Ok" >}}` ir pasirinkite gyvūną su rodyklių klavišais △ ▽. Patvirtinkite su `{{<T "Ok" >}}`.

3. Atsidarys submeniu su gyvūno veiksmais. Naudokite rodyklių klavišus ◁ ▷ △ ▽, kad pasirinktumėte veiksmą <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Redaguoti" /> `{{<T "Edit" >}}` ir patvirtinkite su `{{<T "Ok" >}}`.

4. Atsidarys sąrašas su gyvūno duomenimis. Naudokite rodyklių klavišus △ ▽, kad pasirinktumėte norimą keitimo parinktį.

5. Duomenims `{{<T "TypeAnimal" >}}`, `{{<T "Sex" >}}`, `{{<T "BirthWeight" >}}`, `{{<T "Breed" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "Multiples" >}}` ir `{{<T "CalvingEase" >}}` naudokite rodyklių klavišus ◁ ▷, kad atliktumėte norimą pakeitimą.

6. Duomenims `{{<T "ID" >}}` ir `{{<T "DateBirth" >}}` pasirinkite juos su rodyklių klavišais △ ▽ ir patvirtinkite su `{{<T "Ok" >}}`. Naudokite rodyklių klavišus △ ▽, kad pasirinktumėte atitinkamą skaičių, ir rodyklių klavišus ◁ ▷, kad naršytumėte skaičių laukuose.

7. Išsaugokite pakeitimą naudodami `F3` klavišą.

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
Jei ši veiksmo parinktis nėra prieinama, veiksmas tikriausiai buvo išjungtas! Įjunkite veiksmą [veiksmų nustatymų](../setting/) meniu. Arba, atstatant visus veiksmus, šis veiksmas vėl bus prieinamas.
{{% /alert %}}
