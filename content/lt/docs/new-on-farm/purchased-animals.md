---
title: Įsigyti gyvūnai
linkTitle: Įsigyti gyvūnai
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: purchased-animals
description: >
  Čia galite peržiūrėti savo dabartinius pirkimus ir eksportuoti duomenis.
categories: [Nauja ūkyje]
tags: [Nauja ūkyje]
translationKey: new-on-farm/new-on-farm
---
## Įsigyti gyvūnai {#purchased-animals}

Šiame sąraše rasite visus gyvūnus, kuriuos sukūrėte per masinį įrašymą. Galite eksportuoti šį sąrašą ir taip tiesiogiai užregistruoti savo papildymus bandos valdymo programoje DSP-Herde ir HI-Tier. Arba galite ištrinti visus pirkimo pranešimus.

{{% alert title="Patarimas" %}}
Norėdami eksportuoti duomenis, jums reikia pridėto UBS atmintuko. Prijunkite USB atmintuką su USB-C adapteriu prie savo VitalControl įrenginio prieš sekdami instrukcijas.
{{% /alert %}}

1. Pagrindiniame savo VitalControl įrenginio ekrane pasirinkite meniu punktą <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Nauja ūkyje" /> `{{<T "NewOnFarm" >}}` ir paspauskite mygtuką `{{<T "Ok" >}}`.

2. Atsidaro submeniu, kuriame galite pasirinkti tarp <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Nauja ūkyje, be transponderio" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Įsigyti gyvūnai" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Be nacionalinio gyvūno ID" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Gimimai" /> `{{<T "Births" >}}` ir <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Be priskirto transponderio" /> `{{<T "NoTransponderAssigned" >}}`. Naudokite rodyklių klavišus ◁ ▷ △ ▽, kad pasirinktumėte meniu punktą <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Įsigyti gyvūnai" /> `{{<T "PurchasedAnimals" >}}` ir patvirtinkite su `{{<T "Ok" >}}`.

3. Atsidaro sąrašas su jūsų pirkimais, kuriuos užregistravote per masinio įrašymo meniu punktą.


4. Naudokite `F2` klavišą `{{<T "CSVExport" >}}`.

5. CSV pranešimų sąrašas dabar išsaugotas jūsų USB atmintinėje.

    ![VitalControl: Įsigytų gyvūnų sąrašas, csv eksportas](../images/purchasedanimals.png "Įsigyti gyvūnai, csv eksportas")

## Parinktys: Ištrinti visus pranešimus po eksporto {#options-delete-all-notices-after-export}

Naudodami šią parinktį galite nustatyti, ar visi pranešimai `{{<T "PurchasedAnimals" >}}` sąraše turėtų būti ištrinti po CSV failo eksporto. Naudokite šią parinktį tik tuo atveju, jei esate tikri, kad jums nebereikia pranešimų!

1. Naudokite `F3` klavišą. Atsidaro submeniu.

2. Naudokite rodyklių klavišus △ ▽, kad pasirinktumėte meniu punktą `{{<T "DeleteAllNoticesAfterExport" >}}` ir patvirtinkite su `{{<T "Ok" >}}`.

3. Dėžutė dabar pažymėta varnele. Parinktis aktyvuota. Dar kartą patvirtinkite su `{{<T "Ok" >}}`, kad išjungtumėte parinktį.

    ![VitalControl: Įsigytų gyvūnų sąrašas, csv eksportas](../images/delete-all.png "Ištrinti visus pranešimus po eksporto")

## Tiesioginiai funkcijų iškvietimai {#direct-function-calls}

Be eksporto failo kūrimo, turite šias parinktis:

- [Atsieti transponderį](#unlink-transponder)
- [Išvalyti visus įsigijimo pranešimus](#clear-all-purchase-notices)
- [Ištrinti gyvūną + pranešimą](#delete-animal--purchase-notice)
- [Išvalyti įsigijimo pranešimą](#clear-notice-of-purchase)
- [Redaguoti žymę](#edit-data-of-purchased-animal)

{{% alert title="Patarimas" %}}
Visada pirmiausia atidarykite `{{<T "PurchasedAnimals" >}}` sąrašą, kaip aprašyta aukščiau pateiktose instrukcijose.
{{% /alert %}}

### Atsieti transponderį {#unlink-transponder}

Naudodami šią funkciją galite pašalinti transponderį iš gyvūno.

1. Naudokite `F3` klavišą. Atsidaro submeniu.

2. Naudokite rodyklių klavišus △ ▽, kad pasirinktumėte meniu punktą `{{<T "UnlinkTransponder" >}}` ir patvirtinkite su `{{<T "Ok" >}}`.

3. Transponderis sėkmingai atjungtas.

    ![VitalControl: Įsigytų gyvūnų sąrašas, csv eksportas](../images/unlink-transponder.png "Įsigyti gyvūnai, atjungti transponderį")

### Išvalyti visus įsigijimo pranešimus {#clear-all-purchase-notices}

Su šia funkcija galite ištrinti visus gyvūnus iš `{{<T "PurchasedAnimals" >}}` sąrašo, nereikėdami pirmiausia sukurti eksporto failo.

1. Naudokite `F3` klavišą. Atsidaro submeniu.

2. Naudokite rodyklių klavišus △ ▽, kad pasirinktumėte meniu punktą `{{<T "ClearAllPurchaseNotices" >}}` ir patvirtinkite su `{{<T "Ok" >}}`.

3. Pirkimo pranešimai buvo sėkmingai ištrinti.

    ![VitalControl: Įsigytų gyvūnų sąrašas, išvalyti pirkimo pranešimus](../images/clear.png "Išvalyti visus pirkimo pranešimus")

### Ištrinti gyvūną + pirkimo pranešimą {#delete-animal--purchase-notice}

Norėdami ištrinti gyvūną ir atitinkamą pirkimo pranešimą, atlikite šiuos veiksmus:

1. Naudokite rodyklių klavišus △ ▽, kad pasirinktumėte gyvūną, kurį norite ištrinti.

2. Naudokite `F3` klavišą. Atsidaro submeniu.

3. Naudokite rodyklių klavišus △ ▽, kad pasirinktumėte meniu punktą `{{<T "UnregisterAnimalAndBirthNotice" >}}` ir patvirtinkite su `{{<T "Ok" >}}`.

4. Gyvūnas ir prieigos pranešimas buvo sėkmingai ištrinti.

    ![VitalControl: Įsigytų gyvūnų sąrašas, ištrinti gyvūną + pranešimą](../images/delete.png "Ištrinti gyvūną + pranešimą")

### Išvalyti pirkimo pranešimą {#clear-notice-of-purchase}

Norėdami ištrinti gyvūno pirkimo pranešimą iš sąrašo, atlikite šiuos veiksmus:

1. Naudokite rodyklių klavišus △ ▽, kad pasirinktumėte gyvūną, kurio pirkimo pranešimą norite ištrinti.

2. Naudokite `F3` klavišą. Atsidaro submeniu.

3. Naudokite rodyklių klavišus △ ▽, kad pasirinktumėte meniu punktą `{{<T "ClearPurchaseNotice" >}}` ir patvirtinkite su `{{<T "Ok" >}}`.

4. Pasirinkto gyvūno pirkimo pranešimas buvo sėkmingai ištrintas.

    ![VitalControl: Įsigytų gyvūnų sąrašas, išvalyti pirkimo pranešimą](../images/clearnotice.png "Išvalyti pirkimo pranešimą")

### Redaguoti įsigyto gyvūno duomenis {#edit-data-of-purchased-animal}

Norėdami redaguoti gyvūno duomenis pirkimų sąraše, atlikite šiuos veiksmus:

1. Naudokite rodyklių klavišus △ ▽, kad pasirinktumėte gyvūną, kurį norite redaguoti.

2. Naudokite `{{<T "Ok" >}}` mygtuką. Atsidaro submeniu su gyvūno duomenimis. Kaip redaguoti šiuos duomenis, galite sužinoti [čia](/en/docs/actions/edit/#edit-animal-data).

    ![VitalControl: Įsigytų gyvūnų sąrašas, Redaguoti gyvūno duomenis](../images/edit.png "Redaguoti įsigyto gyvūno duomenis")
