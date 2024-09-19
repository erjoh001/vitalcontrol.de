---
title: Įvertinimas
linkTitle: Įvertinimas
slug: rating
weight: 30
description: >
 Įvertinkite savo gyvūnus.
date: 2023-07-26
kategorijos: [Veiksmai]
Žymos: [Veiksmai, Įvertinimas]
translationKey: actions/animal-rating
---

## Įvertinkite savo gyvūnus {#rate-your-animals}

Vertindami gyvūną, dokumentuojate individualaus gyvūno būklę. Būklė nustatoma vizualiai ir užfiksuojama naudojant šviesoforo sistemą. Pagrindiniame vertinime užfiksuojama tik bendra būklė. Išplėstiniame vertinime užfiksuojate bendrą būklę, pašaro suvartojimą, išmatų konsistenciją ir kvėpavimo ligas. Galite tiesiogiai pakeisti vertinimo režimą <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` veiksme arba galite jį nustatyti [nustatymuose](../../settings/data-acquisition/#mode-of-animal-rating).

{{% alert title="Patarimas" %}}
Geltonas arba raudonas vertinimas reiškia, kad VitalControl klasifikuoja gyvūną kaip pastebimą ir įtraukia jį į pavojaus sąrašą.
{{% /alert %}}

1. Pagrindiniame savo VitalControl įrenginio ekrane pasirinkite meniu punktą &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` ir paspauskite `{{<T "Ok" >}}` mygtuką.

2. Nuskaitykite gyvūną naudodami transponderį arba pasirinkite gyvūną iš sąrašo. Patvirtinkite su `{{<T "Ok" >}}` ir pasirinkite gyvūną su rodyklių klavišais △ ▽. Patvirtinkite su `{{<T "Ok" >}}`.

3. Atsidarys gyvūno veiksmų submeniu. Naudokite rodyklių klavišus ◁ ▷, kad pasirinktumėte veiksmą <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` ir patvirtinkite su `{{<T "Ok" >}}`.

4. Atsidarys vertinimo meniu. Jei norite pakeisti vertinimo režimą, naudokite `On/Off` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Chain-of-actions" />&nbsp; mygtuką ir rodyklių klavišus ◁ ▷. Su `F1` klavišu <img src="/icons/footer/exit.svg" width="24" align="bottom" alt="Back" />&nbsp; grįšite į vertinimo meniu.

5. Naudokite rodyklių klavišus ◁ ▷ △ ▽, kad pasirinktumėte būklę ir išsaugokite ją su `F3` klavišu <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> arba `{{<T "Ok" >}}` klavišu.

6. Išplėstiniame režime naudokite `F1` ir `F3` klavišus, kad perjungtumėte vertinimo parametrus.

{{% alert title="Patarimas" %}}
Jei nepasirinksite naudodami rodyklių klavišus ◁ ▷, bet išsaugosite tiesiogiai naudodami `F3` arba `{{<T "Ok" >}}` klavišą, VitalControl išsaugos neutralų vertinimą, kuris bus pažymėtas pilka spalva.
{{% /alert %}}

### Pagrindinis vertinimas {#basic-rating}

{{< tabpane >}}
{{< tab header="Pagrindinis vertinimas:" text=true disabled=true />}}
{{% tab header="Transponderio nuskaitymas" text=true %}}
![VitalControl: Meniu Veiksmai Vertinimas](../images/basicrating-scan.png "Pagrindinis vertinimas")
{{% /tab %}}
{{% tab header="Rankinis pasirinkimas iš sąrašo" text=true %}}
![VitalControl: Meniu Veiksmai Vertinimas](../images/basicrating.png "Pagrindinis vertinimas")
{{% /tab %}}
{{< /tabpane >}}

### Išplėstinis vertinimas {#extended-rating}

{{< tabpane >}}
{{< tab header="Pagrindinis vertinimas:" text=true disabled=true />}}
{{% tab header="Transponderio nuskaitymas" text=true %}}
![VitalControl: Meniu Veiksmai Vertinimas](../images/extendedrating-scan.png "Išplėstinis vertinimas")
{{% /tab %}}
{{% tab header="Rankinis pasirinkimas iš sąrašo" text=true %}}
![VitalControl: Meniu Veiksmai Vertinimas](../images/extendedrating.png "Išplėstinis vertinimas")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Patarimas" %}}
Jei šis veiksmas nėra prieinamas, veiksmas tikriausiai buvo išjungtas! Aktyvuokite veiksmą [veiksmų nustatymų](../setting/) meniu. Arba, atstatant visus veiksmus, šis veiksmas vėl bus prieinamas.
{{% /alert %}}
