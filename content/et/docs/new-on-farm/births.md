---
title: "Sünnid"
linkTitle: "Sünnid"
weight: 35
date: 2023-07-28T13:25:28+02:00
draft: false
slug: births
description: >
  Siin saate vaadata oma sünniregistreid ja luua ekspordifaili.
categories: [Sünnid]
tags: [Sünnid]
translationKey: new-on-farm/births
---
## Sünnid {#births}
 
Selles nimekirjas saate vaadata oma sünniregistreid, neid muuta ja luua ekspordifaili registreerimiseks HI-Tieris. Ekspordifaili loomiseks toimige järgmiselt:

{{% alert title="Vihje" %}}
Andmete eksportimiseks on vajalik kaasasolev UBS mälupulk. Ühendage USB mälupulk USB-C adapteri abil oma VitalControl seadmega enne juhiste järgimist.
{{% /alert %}}

1. Oma VitalControl seadme põhiekraanil valige menüüpunkt <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Uus farmis" /> `{{<T "NewOnFarm" >}}` ja vajutage `{{<T "Ok" >}}` nuppu.

2. Avaneb alammenüü, kus saate valida vahel <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Uus farmis, transponderita" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Ostetud loomad" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Riiklikku looma ID pole" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Sünnid" /> `{{<T "Births" >}}` ja <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Transponderit pole määratud" /> `{{<T "NoTransponderAssigned" >}}`. Kasutage menüüpunkti <img src="/icons/main/births.svg" width="40" align="bottom" alt="Sünnid" /> `{{<T "Births" >}}` valimiseks nooleklahve ◁ ▷ △ ▽ ja kinnitage `{{<T "Ok" >}}`-ga.

3. Avaneb nimekiri kõigist teie sünniregistritest.

4. Kasutage `F3` klahvi `{{<T "ExportListBirths" >}}`. Avaneb alammenüü.

5. Kasutage menüüpunkti `{{<T "ExportListBirths" >}}` valimiseks nooleklahve △ ▽ ja kinnitage `{{<T "Ok" >}}`-ga.

6. Nimekiri salvestatakse nüüd CSV-failina teie USB mälupulgale. Kõik loomad `{{<T "Births" >}}` nimekirjast kustutatakse.

    ![VitalControl: Menüü Uus farmis Sünnid](../images/births.png "Sünnid")

## Valikute seadistamine {#setting-options}

Lisaks ekspordifaili loomisele on teil järgmised valikud:

- [Muuda](#change-between-list-view-and-single-animal-view) loendi vaate ja üksiku looma vaate vahel
- [Tühista kõik sünniteated](../purchased-animals/#clear-all-purchase-notices)
- [Kustuta loom + teated](../purchased-animals/#delete-animal--purchase-notice)
- [Tühista ostuteade](../purchased-animals/#clear-notice-of-purchase)
- [Muuda](#edit-data-of-birth-notice) teadet

{{% alert title="Vihje" %}}
Mõned toimingud on identilised `{{<T "PurchasedAnimals" >}}` loendis olevate toimingutega. Järgige linke samm-sammult juhistele. Avage alati esmalt `{{<T "Births" >}}` loend, nagu juhistes kirjeldatud.
{{% /alert %}}

### Muuda loendi vaadet ja üksiku looma vaadet {#change-between-list-view-and-single-animal-view}

1. Kasutage <img src="/icons/gear.svg" width="25" align="bottom" alt="Hammasratas" /> `On /Off` nuppu.

2. Kasutage nooleklahve ◁ ▷, et valida `{{<T "ListView" >}}` ja `{{<T "SingleAnimalView" >}}`.

3. Salvestage oma seadistus `F1` klahviga &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Salvesta ja naase" />&nbsp;. Loendi vaates kasutage loomade vahel lülitumiseks nooleklahve ◁ ▷.

    ![VitalControl: Menüü Uus farmis Sünnid](../images/change.png "Muuda loendi vaadet ja üksiku looma vaadet")

### Muuda sünniteate andmeid {#edit-data-of-birth-notice}

{{% alert title="Vihje" %}}
Looma andmeid on võimalik muuta ainult loendi vaates!
{{% /alert %}}

1. Kasutage nooleklahve △ ▽ valitud looma valimiseks ja kinnitage `{{<T "Ok" >}}`-ga.

2. Avaneb alammenüü, kus saate erinevaid seadeid kohandada. Samm-sammuliste juhiste jaoks klõpsake [siin](/et/docs/new/calving/#register-a-calving).

    ![VitalControl: Menüü Uus farmis Sünnid](../images/edit2.png "Muuda sünniteadet")

