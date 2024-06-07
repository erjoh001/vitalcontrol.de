---
title: "Születések"
linkTitle: "Születések"
weight: 35
date: 2023-07-28T13:25:28+02:00
draft: false
slug: births
description: >
  Itt megtekintheti a születéseket és létrehozhat egy export fájlt.
categories: [Születések]
tags: [Születések]
translationKey: new-on-farm/births
---
## Születések {#births}

Ebben a listában megtekintheti a születéseket, szerkesztheti őket és létrehozhat egy export fájlt a HI-Tier rendszerbe való regisztrációhoz. Az export fájl létrehozásához kövesse az alábbi lépéseket:

{{% alert title="Tipp" %}}
Az adatok exportálásához szüksége van a mellékelt UBS stickre. Csatlakoztassa az USB stick-et az USB-C adapterrel a VitalControl készülékéhez, mielőtt követné az utasításokat.
{{% /alert %}}

1. A VitalControl készülék főképernyőjén válassza ki a <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Új a farmon" /> `{{<T "NewOnFarm" >}}` menüpontot és nyomja meg az `{{<T "Ok" >}}` gombot.

2. Egy almenü nyílik meg, ahol választhat a <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Új a farmon, transzponder nélkül" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Vásárolt állatok" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Nincs nemzeti állatazonosító" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Születések" /> `{{<T "Births" >}}` és <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Nincs transzponder" /> `{{<T "NoTransponderAssigned" >}}` között. Használja a nyílbillentyűket ◁ ▷ △ ▽ a <img src="/icons/main/births.svg" width="40" align="bottom" alt="Születések" /> `{{<T "Births" >}}` menüpont kiválasztásához és erősítse meg az `{{<T "Ok" >}}` gombbal.

3. Megnyílik a születések listája.

4. Használja az `F3` gombot `{{<T "ExportListBirths" >}}`. Egy almenü nyílik meg.

5. Használja a nyílbillentyűket △ ▽ az `{{<T "ExportListBirths" >}}` menüpont kiválasztásához és erősítse meg az `{{<T "Ok" >}}` gombbal.

6. A lista most CSV fájlként kerül mentésre az USB stick-re. Az összes állat a `{{<T "Births" >}}` listából törlődik.

    ![VitalControl: Menü Új a farmon Születések](../images/births.png "Születések")

## Beállítási lehetőségek {#setting-options}
 
Az export fájl létrehozása mellett a következő lehetőségek állnak rendelkezésre:

- [Váltás](#change-between-list-view-and-single-animal-view) a lista nézet és az egyedi állat nézet között
- [Minden születési értesítés törlése](../purchased-animals/#clear-all-purchase-notices)
- [Állat + értesítések törlése](../purchased-animals/#delete-animal--purchase-notice)
- [Születési értesítés törlése](../purchased-animals/#clear-notice-of-purchase)
- [Értesítés szerkesztése](#edit-data-of-birth-notice)

{{% alert title="Tipp" %}}
Néhány művelet megegyezik a `{{<T "PurchasedAnimals" >}}` listában található műveletekkel. Kövesse a lépésről lépésre szóló utasításokat a linkeken. Mindig nyissa meg először a `{{<T "Births" >}}` listát, ahogy az a fenti utasításokban szerepel.
{{% /alert %}}

### Váltás a lista nézet és az egyedi állat nézet között {#change-between-list-view-and-single-animal-view}

1. Használja a <img src="/icons/gear.svg" width="25" align="bottom" alt="Gear" /> `On /Off` gombot.

2. Használja a nyílbillentyűket ◁ ▷ a `{{<T "ListView" >}}` és az `{{<T "SingleAnimalView" >}}` közötti választáshoz.

3. Mentse a beállítást az `F1` gombbal &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Mentés és visszatérés" />&nbsp;. A lista nézetben használja a nyílbillentyűket ◁ ▷ az állatok közötti váltáshoz.

    ![VitalControl: Menü Új a farmon Születések](../images/change.png "Váltás a lista nézet és az egyedi állat nézet között")

### Születési értesítés adatainak szerkesztése {#edit-data-of-birth-notice}

{{% alert title="Tipp" %}}
Az állat adatainak szerkesztése csak a lista nézetben lehetséges!
{{% /alert %}}

1. Használja a nyílbillentyűket △ ▽ a szerkeszteni kívánt állat kiválasztásához, majd erősítse meg `{{<T "Ok" >}}`-val.

2. Egy almenü nyílik meg, ahol különböző beállításokat módosíthat. Lépésről lépésre szóló utasításokért kattintson [ide](/hu/docs/new/calving/#register-a-calving).

    ![VitalControl: Menü Új a farmon Születések](../images/edit2.png "Születési értesítés szerkesztése")
    
