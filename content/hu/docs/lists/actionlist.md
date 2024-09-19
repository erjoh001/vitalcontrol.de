---
title: Akciólista
linkTitle: Akciólista
weight: 30
date: 2023-07-28T13:25:28+02:00
draft: false
slug: actions
description: >
 Nézze meg az akciólistáját.
kategóriák: [Lists]
címkék: [Lists, Action]
translationKey: lists/action
---
## Akciólista {#action-list}

Az akciólistában láthatja azokat az állatokat, amelyekkel hat órán belül nem történt semmilyen akció. A következő beállítási lehetőségek is elérhetők:

- [Hőmérséklet mérése](../alarm/#take-temperature)
- [Állatok értékelése](../alarm/#rate-animal)
- [Állatok mérlegelése](#weigh-animals)
- [Akciólánc](#chain-of-action)
- [Transzponder összekapcsolása](#link-transponder)
- [Elrejtés akció után](#hide-after-action)
- [Állat keresése](../alarm/#search-animal)
- [Szűrő beállítása](../alarm/#set-filter)

{{% alert title="Tipp" %}}
Néhány akciót ugyanúgy kell végrehajtani, mint az [riasztási listában](../alarm). Ezek itt nincsenek részletezve. Végezze el az előzetes lépéseket, és használja a megfelelő akció linkjét az utasítások eléréséhez.
{{% /alert %}}

### Előzetes lépések {#preliminary-steps}

1. Válassza ki a <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Lists" />  `{{<T "Lists" >}}` menüpontot a VitalControl készülék főképernyőjén, és nyomja meg az `{{<T "Ok" >}}` gombot.

2. Egy almenü nyílik meg, amelyben különböző listaikonok jelennek meg. Jelölje ki az <img src="/icons/lists/actionlist.svg" width="30" align="bottom" alt="Action list" /> `{{<T "ActionList" >}}` ikont, és erősítse meg az `{{<T "Ok" >}}` gombbal.

3. Az akciólista most megnyílik.

   ![VitalControl Lists Action list](../images/firststeps3.png "Előzetes lépések")

### Állatok mérlegelése {#weigh-animals}

1. Végezze el az előzetes lépéseket.

2. Használja az `F3` gombot &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; egy felugró menü megjelenítéséhez, amely felsorolja a lehetséges akciókat az `{{<T "Ok" >}}` gomb megnyomásakor. Használja a nyílgombokat △ ▽ az `{{<T "WeighAnimal" >}}` akció kijelöléséhez, és válassza ezt az opciót a központi `{{<T "Ok" >}}` gomb vagy az `F3` gomb `{{<T "Ok" >}}` megnyomásával.

3. Az akciólistában használja a nyílgombokat △ ▽ a kívánt állat kiválasztásához, és erősítse meg az `{{<T "Ok" >}}` gombbal. Alternatívaként kereshet egy állatot. Használja a `On/Off` gombot <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" />, és használja a nyílgombokat ◁ ▷ △ ▽ a kívánt számjegyek kiválasztásához. Végül erősítse meg az `{{<T "Ok" >}}` gombbal.


4. A [weigh animals](../../actions/record-weight/) menü automatikusan megnyílik.

   ![VitalControl Lists Action list](../images/weightanimals.png "Weigh animals")

### Akciólánc {#chain-of-action}

1. Végezze el az előzetes lépéseket.

2. Használja az `F3` billentyűt &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; egy felugró menü megjelenítéséhez, amely felsorolja a lehetséges műveleteket az `{{<T "Ok" >}}` gomb megnyomásakor. Használja a nyílbillentyűket △ ▽ az `{{<T "ActionChain" >}}` művelet kiemeléséhez, és válassza ezt az opciót a középső `{{<T "Ok" >}}` gomb vagy az `F3` `{{<T "Ok" >}}` billentyű megnyomásával.

3. Az akciólistában használja a nyílbillentyűket △ ▽ a kívánt állat kiválasztásához, és erősítse meg `{{<T "Ok" >}}`-val. Alternatívaként kereshet egy állatot. Használja a `On/Off` gombot <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> és használja a nyílbillentyűket ◁ ▷ △ ▽ a kívánt számjegyek kiválasztásához. Végül erősítse meg `{{<T "Ok" >}}`-val.

4. Az [akciólánc](../../chain-of-actions) funkció automatikusan megnyílik.

   ![VitalControl Lists Action list](../images/chainofaction.png "Chain of action")

### Transzponder összekapcsolása {#link-transponder}

Ez a funkció arra szolgál, hogy transzpondert adjon hozzá azoknak az állatoknak az adatlapjához, amelyekhez még nem rendeltek transzpondert.

1. Végezze el az előzetes lépéseket.

2. Használja az `F3` billentyűt &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; egy felugró menü megjelenítéséhez, amely felsorolja a lehetséges műveleteket az `{{<T "Ok" >}}` gomb megnyomásakor. Használja a nyílbillentyűket △ ▽ a `{{<T "LinkTransponder" >}}` művelet kiemeléséhez, és válassza ezt az opciót a középső `{{<T "Ok" >}}` gomb vagy az `F3` `{{<T "Ok" >}}` billentyű megnyomásával.

3. Az akciólistában használja a nyílbillentyűket △ ▽ a kívánt állat kiválasztásához, és erősítse meg `{{<T "Ok" >}}`-val. Alternatívaként kereshet egy állatot. Használja a `On/Off` gombot <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> és használja a nyílbillentyűket ◁ ▷ △ ▽ a kívánt számjegyek kiválasztásához. Végül erősítse meg `{{<T "Ok" >}}`-val.

4. Most olvassa be a megfelelő állat transzponderét.

   ![VitalControl Lists Action list](../images/linktransponder.png "Link transponder")

### Elrejtés művelet után {#hide-after-action}

Ha ez a funkció aktiválva van, a művelet végrehajtása után az állatok el lesznek rejtve a műveleti listából. Ha ez a funkció deaktiválva van, a feldolgozott állatok továbbra is láthatóak maradnak a listában.

1. Végezze el az előzetes lépéseket.

2. Használja az `F3` billentyűt &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Actions" />&nbsp; egy felugró menü megjelenítéséhez, amely különböző opciókat listáz. Használja a nyílbillentyűket △ ▽ az `{{<T "HideAfterAction" >}}` opció kiemeléséhez, és kapcsolja be/ki ezt az opciót a központi `{{<T "Ok" >}}` gomb vagy az `F3` `{{<T "Ok" >}}` billentyű megnyomásával.

3. Az `{{<T "HideAfterAction" >}}` funkció most be van kapcsolva/kikapcsolva. Az aktiválást egy pipa jelzi a négyzetben.

   ![VitalControl Lists Action list](../images/hideafteraction.png "Elrejtés művelet után")
