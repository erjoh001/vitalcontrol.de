---
title: "Megfigyelési lista"
linkTitle: "Megfigyelési lista"
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: on-watch
description: >
 Nézze meg a megfigyelési listáját.
categories: [Lists]
tags: [Lists, megfigyelés alatt]
translationKey: lists/on-watch
---
## Megfigyelési lista {#on-watch-list}

A megfigyelési listán megtalálja az összes állatot, amelyet manuálisan hozzáadott a listához. A lista segít áttekinteni azokat az állatokat, amelyeket feltűnőnek értékelt. Továbbá, minden állat esetében a listán a következőket teheti:

- [Teljes műveleti menü](../alarm/#full-action-menu)
- [Állat adatai](../alarm/#animal-data)
- [Hőmérséklet mérése](../alarm/#take-temperature)
- [Állat értékelése](../alarm/#rate-animal)
- [Eltávolítás a megfigyelési listáról](#remove-from-watch-list)
- [Riasztási állapot váltása](#toggle-alarm-status)
- [Állat keresése](../alarm/#search-animal)
- [Szűrő beállítása](../alarm/#set-filter)

{{% alert title="Tipp" %}}
Néhány műveletet ugyanúgy kell végrehajtani, mint a [Riasztási listán](../alarm). Ezek itt nincsenek részletezve. Végezze el az előzetes lépéseket, és használja az adott művelet linkjét az utasítások eléréséhez.
{{% /alert %}}

A riasztási lista a következőképpen van felépítve:

   ![VitalControl Lists Megfigyelési lista](../images/onwatchstructure.png "A Megfigyelési lista felépítése")

|Szimbólum   | Leírás
|---------|-----
| ![VitalControl Lists Megfigyelési lista](../images/kopf.png "Állomány méretének számlálója") | Megmutatja, hány állat van a listán
| ![Tehén ikon](../images/kopf2.png "Tehén feje") | Megmutatja, hogy a kiválasztott állat borjú vagy tehén
| ![VitalControl Lists Megfigyelési lista](../images/auge.png "Értékelés") | Az utolsó rögzített értékelés a szimbólum alatt látható a közlekedési lámpa rendszer színeivel
| &nbsp;<img src="/icons/actions/temperature.svg" width="12" align="bottom" alt="Testhőmérséklet" title="Testhőmérséklet" /> | Az utolsó rögzített lázmérés a szimbólum alatt látható a közlekedési lámpa rendszer színeivel
| &nbsp;&nbsp;<img src="/icons/header/alarm.svg" width="8" align="bottom" alt="Állat riasztáson" title="Állat riasztáson" /> | Egy kör jelölés a szimbólum alatt jelzi, hogy az állat a riasztási listán van

### Előzetes lépések {#preliminary-steps}

1. Válassza ki a <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Lists" /> `{{<T "Lists" >}}` menüpontot a VitalControl készülék főképernyőjén, és nyomja meg az `{{<T "Ok" >}}` gombot.

2. Megnyílik egy almenü, amelyben különböző listák jelennek meg. Válassza ki a &nbsp;<img src="/icons/lists/onwatch.svg" width="28" align="bottom" alt="List 'On watch'" /> `{{<T "OnWatch" >}}` listát. Erősítse meg az `{{<T "Ok" >}}` gombbal.

3. A `{{<T "OnWatch" >}}` lista most megnyílik.

   ![VitalControl Lists On watch list](../images/firststeps2.png "Előzetes lépések")

### Eltávolítás a megfigyelési listáról {#remove-from-watch-list}

1. Végezze el az előzetes lépéseket.

2. Használja az `F3` gombot &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; egy felugró menü megnyitásához, amely felsorolja az `{{<T "Ok" >}}` gomb megnyomásakor elérhető műveleteket. Használja a △ ▽ nyílgombokat a `{{<T "RemoveFromWatchList" >}}` művelet kiemeléséhez, és válassza ezt az opciót a középső `{{<T "Ok" >}}` gomb vagy az `F3` gomb `{{<T "Ok" >}}` megnyomásával.

3. A megfigyelési listán belül használja a △ ▽ nyílgombokat a kívánt állat kiválasztásához, és erősítse meg az `{{<T "Ok" >}}` gombbal. Alternatív megoldásként kereshet egy állatot. Használja a `On/Off` gombot <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" />, és használja a ◁ ▷ △ ▽ nyílgombokat a kívánt számjegyek kiválasztásához. Végül erősítse meg az `{{<T "Ok" >}}` gombbal.

4. Az állat most eltávolításra került a megfigyelési listáról.

   ![VitalControl Lists On watch list](../images/remove.png "Eltávolítás a megfigyelési listáról")

### Riasztási állapot váltása {#toggle-alarm-status}

1. Végezze el az előzetes lépéseket.

2. Használja az `F3` gombot &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; egy felugró menü megnyitásához, amely felsorolja az `{{<T "Ok" >}}` gomb megnyomásakor elérhető műveleteket. Használja a △ ▽ nyílgombokat a `{{<T "ToggleAlarmStatus" >}}` művelet kiemeléséhez, és válassza ezt az opciót a középső `{{<T "Ok" >}}` gomb vagy az `F3` gomb `{{<T "Ok" >}}` megnyomásával.

3. A megfigyelési listán belül használja a △ ▽ nyílgombokat a kívánt állat kiválasztásához, és erősítse meg az `{{<T "Ok" >}}` gombbal. Alternatív megoldásként kereshet egy állatot. Használja a `On/Off` gombot <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" />, és használja a ◁ ▷ △ ▽ nyílgombokat a kívánt számjegyek kiválasztásához. Végül erősítse meg az `{{<T "Ok" >}}` gombbal.


4. Az állat most hozzáadódik vagy eltávolításra kerül a riasztási listáról az eredeti állapotától függően.

   ![VitalControl Lists Riasztási állapot váltása](../images/alarmstatus.png "Riasztási állapot váltása")
