---
title: "Rojstva"
linkTitle: "Rojstva"
weight: 35
date: 2023-07-28T13:25:28+02:00
draft: false
slug: births
description: >
  Tukaj lahko vidite svoja rojstva in ustvarite izvozno datoteko.
categories: [Rojstva]
tags: [Rojstva]
translationKey: new-on-farm/births
---
## Rojstva {#births}

Na tem seznamu lahko pregledate svoja rojstva, jih urejate in ustvarite izvozno datoteko za registracijo v HI-Tier. Za ustvarjanje izvozne datoteke sledite naslednjim korakom:

{{% alert title="Namig" %}}
Za izvoz podatkov potrebujete priložen USB ključek. Preden sledite navodilom, povežite USB ključek z USB-C adapterjem na vašo napravo VitalControl.
{{% /alert %}}

1. Na glavnem zaslonu vaše naprave VitalControl izberite meni <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Novo na kmetiji" /> `{{<T "NewOnFarm" >}}` in pritisnite gumb `{{<T "Ok" >}}`.

2. Odpre se podmeni, v katerem lahko izbirate med <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Novo na kmetiji, brez transponderja" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Kupljene živali" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Brez nacionalne ID številke živali" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Rojstva" /> `{{<T "Births" >}}` in <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Brez dodeljenega transponderja" /> `{{<T "NoTransponderAssigned" >}}`. Uporabite puščične tipke ◁ ▷ △ ▽ za izbiro menija <img src="/icons/main/births.svg" width="40" align="bottom" alt="Rojstva" /> `{{<T "Births" >}}` in potrdite z `{{<T "Ok" >}}`.

3. Odpre se seznam vseh vaših rojstev.

4. Uporabite tipko `F3` `{{<T "ExportListBirths" >}}`. Odpre se podmeni.

5. Uporabite puščične tipke △ ▽ za izbiro menija `{{<T "ExportListBirths" >}}` in potrdite z `{{<T "Ok" >}}`.

6. Seznam je zdaj shranjen kot CSV datoteka na vašem USB ključku. Vse živali s seznama `{{<T "Births" >}}` so izbrisane.

![VitalControl: Menu New on farm Births](../images/births.png "Births")

## Nastavitev možnosti {#setting-options}

Poleg ustvarjanja izvozne datoteke imate naslednje možnosti:

- [Spremeni](#change-between-list-view-and-single-animal-view) med pogledom seznama in pogledom posamezne živali
- [Počisti vsa obvestila o rojstvu](../purchased-animals/#clear-all-purchase-notices)
- [Izbriši žival + obvestila](../purchased-animals/#delete-animal--purchase-notice)
- [Počisti obvestilo o rojstvu](../purchased-animals/#clear-notice-of-purchase)
- [Uredi](#edit-data-of-birth-notice) obvestilo

{{% alert title="Namig" %}}
Nekatera dejanja so enaka dejanjem na seznamu `{{<T "PurchasedAnimals" >}}`. Sledite povezavam za navodila po korakih. Vedno najprej odprite seznam `{{<T "Births" >}}`, kot je opisano v zgornjih navodilih.
{{% /alert %}}

### Spremeni med pogledom seznama in pogledom posamezne živali {#change-between-list-view-and-single-animal-view}

1. Uporabite <img src="/icons/gear.svg" width="25" align="bottom" alt="Gear" /> gumb `On /Off`.

2. Uporabite puščične tipke ◁ ▷ za izbiro med `{{<T "ListView" >}}` in `{{<T "SingleAnimalView" >}}`.

3. Shranite svojo nastavitev s tipko `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;. V pogledu seznama uporabite puščične tipke ◁ ▷ za preklapljanje med živalmi.

    ![VitalControl: Menu New on farm Births](../images/change.png "Spremeni med pogledom seznama in pogledom posamezne živali")

### Uredi podatke obvestila o rojstvu {#edit-data-of-birth-notice}

{{% alert title="Namig" %}}
Urejanje podatkov o živalih je mogoče le v pogledu seznama!
{{% /alert %}}

1. Uporabite puščične tipke △ ▽ za izbiro živali, ki jo želite urediti, in potrdite z `{{<T "Ok" >}}`.

2. Odpre se podmeni, v katerem lahko prilagodite različne nastavitve. Za navodila po korakih kliknite [tukaj](/sl/docs/new/calving/#register-a-calving).

    ![VitalControl: Menu New on farm Births](../images/edit2.png "Uredi obvestilo o rojstvu")
