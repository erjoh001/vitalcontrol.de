---
title: Vásárolt állatok
linkTitle: Vásárolt állatok
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: purchased-animals
description: >
  Itt megtekintheti aktuális vásárlásait és exportálhatja az adatokat.
kategóriák: [Új a farmon]
címkék: [Új a farmon]
translationKey: new-on-farm/new-on-farm
---
## Vásárolt állatok {#purchased-animals}

Ebben a listában megtalálja az összes állatot, amelyet tömeges rögzítés útján hozott létre. Ezt a listát exportálhatja, és így közvetlenül regisztrálhatja a kiegészítéseket a DSP-Herde állománykezelő programban és a HI-Tier-ben. Alternatív megoldásként törölheti az összes vásárlási értesítést.

{{% alert title="Tipp" %}}
Az adatok exportálásához szüksége van a mellékelt UBS stickre. Csatlakoztassa az USB sticket az USB-C adapterrel a VitalControl készülékéhez, mielőtt követné az utasításokat.
{{% /alert %}}

1. A VitalControl készülék főképernyőjén válassza ki a <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Új a farmon" /> `{{<T "NewOnFarm" >}}` menüpontot, és nyomja meg az `{{<T "Ok" >}}` gombot.

2. Egy almenü nyílik meg, ahol választhat a következők közül: <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Új a farmon, transzponder nélkül" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Vásárolt állatok" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Nincs nemzeti állatazonosító" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Születések" /> `{{<T "Births" >}}` és <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Nincs transzponder" /> `{{<T "NoTransponderAssigned" >}}`. Használja a nyílbillentyűket ◁ ▷ △ ▽ a <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Vásárolt állatok" /> `{{<T "PurchasedAnimals" >}}` menüpont kiválasztásához, és erősítse meg az `{{<T "Ok" >}}` gombbal.

3. Megnyílik egy lista azokról a vásárlásokról, amelyeket a tömeges rögzítés menüpontban regisztrált.

4. Használja az `F2` gombot `{{<T "CSVExport" >}}`.

5. A CSV üzenetlista most elmentésre kerül az USB stickre.

![VitalControl: List of purchased animals, csv export](../images/purchasedanimals.png "Purchased animals, csv export ")

## Opciók: Minden értesítés törlése exportálás után {#options-delete-all-notices-after-export}

Ezzel az opcióval beállíthatja, hogy a `{{<T "PurchasedAnimals" >}}` listában lévő összes üzenet törlődjön-e a CSV fájl exportálása után. Csak akkor használja ezt az opciót, ha biztos benne, hogy már nincs szüksége az üzenetekre!

1. Használja az `F3` billentyűt. Megnyílik egy almenü.

2. Használja a nyílbillentyűket △ ▽ a `{{<T "DeleteAllNoticesAfterExport" >}}` menüpont kiválasztásához, és erősítse meg `{{<T "Ok" >}}`-val.

3. A négyzet most egy pipával van megjelölve. Az opció aktiválva van. Erősítse meg újra `{{<T "Ok" >}}`-val az opció deaktiválásához.

    ![VitalControl: List of purchased animals, csv export](../images/delete-all.png "Minden értesítés törlése exportálás után")    

## Közvetlen funkcióhívások {#direct-function-calls}

Az export fájl létrehozása mellett a következő lehetőségek állnak rendelkezésre:

- [Transzponder leválasztása](#unlink-transponder)
- [Minden vásárlási értesítés törlése](#clear-all-purchase-notices)
- [Állat + értesítés törlése](#delete-animal--purchase-notice)
- [Vásárlási értesítés törlése](#clear-notice-of-purchase)
- [Jelölés szerkesztése](#edit-data-of-purchased-animal)

{{% alert title="Tipp" %}}
Mindig először nyissa meg a `{{<T "PurchasedAnimals" >}}` listát a fent leírtak szerint.
{{% /alert %}}

### Transzponder leválasztása {#unlink-transponder}

Ezzel a funkcióval eltávolíthatja a transzpondert egy állatról.

1. Használja az `F3` billentyűt. Megnyílik egy almenü.

2. Használja a nyílbillentyűket △ ▽ a `{{<T "UnlinkTransponder" >}}` menüpont kiválasztásához, és erősítse meg `{{<T "Ok" >}}`-val.

3. A transzponder sikeresen leválasztva.

    ![VitalControl: List of purchased animals, csv export](../images/unlink-transponder.png "Vásárolt állatok, transzponder leválasztása")

### Minden vásárlási értesítés törlése {#clear-all-purchase-notices}

Ezzel a funkcióval törölheti az összes állatot a `{{<T "PurchasedAnimals" >}}` listából anélkül, hogy először export fájlt kellene létrehoznia.

1. Használja az `F3` billentyűt. Megnyílik egy almenü.

2. Használja a nyílbillentyűket △ ▽ a `{{<T "ClearAllPurchaseNotices" >}}` menüpont kiválasztásához, és erősítse meg `{{<T "Ok" >}}`-val.

3. A vásárlási értesítések sikeresen törölve.

![VitalControl: List of purchased animals, clear purchase notices](../images/clear.png "Clear all purchase notices ")

### Állat + vásárlási értesítés törlése {#delete-animal--purchase-notice}

Az állat és a hozzá tartozó vásárlási értesítés törléséhez kövesse az alábbi lépéseket:

1. Használja a △ ▽ nyílbillentyűket a törölni kívánt állat kiválasztásához.

2. Használja az `F3` billentyűt. Egy almenü nyílik meg.

3. Használja a △ ▽ nyílbillentyűket a `{{<T "UnregisterAnimalAndBirthNotice" >}}` menüpont kiválasztásához, majd erősítse meg az `{{<T "Ok" >}}` gombbal.

4. Az állat és a hozzá tartozó értesítés sikeresen törölve lett.

![VitalControl: List of purchased animals, dele animal + notice](../images/delete.png "Delete animal + notice")

### Vásárlási értesítés törlése {#clear-notice-of-purchase}

Az állat vásárlási értesítésének törléséhez a listából kövesse az alábbi lépéseket:

1. Használja a △ ▽ nyílbillentyűket annak az állatnak a kiválasztásához, amelynek vásárlási értesítését törölni szeretné.

2. Használja az `F3` billentyűt. Egy almenü nyílik meg.

3. Használja a △ ▽ nyílbillentyűket a `{{<T "ClearPurchaseNotice" >}}` menüpont kiválasztásához, majd erősítse meg az `{{<T "Ok" >}}` gombbal.

4. A kiválasztott állat vásárlási értesítése sikeresen törölve lett.

![VitalControl: List of purchased animals, clear notice of purchase](../images/clearnotice.png "Clear notice of purchase")

### Vásárolt állat adatainak szerkesztése {#edit-data-of-purchased-animal}

Az állat adatainak szerkesztéséhez a vásárlási listában kövesse az alábbi lépéseket:

1. Használja a △ ▽ nyílbillentyűket a szerkeszteni kívánt állat kiválasztásához.

2. Használja az `{{<T "Ok" >}}` gombot. Egy almenü nyílik meg az állat adataival. Az adatok szerkesztésének módját [itt](/hu/docs/actions/edit/#edit-animal-data) találja.

![VitalControl: List of purchased animals, Edit animal data](../images/edit.png "Edit data of purchased animal")
