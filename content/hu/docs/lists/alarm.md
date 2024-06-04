---
title: "Riasztási lista"
linkTitle: "Riasztási lista"
weight: 10
date: 2023-07-28T13:25:28+02:00
draft: false
slug: alarm
description: >
  Nézze meg a riasztási listáját.
categories: [Lists]
tags: [Lists, alarm]
translationKey: lists/alarm
---
## Riasztási lista {#alarm-list}

A riasztási listán megtalálja az összes állatot, amelyet manuálisan hozzáadott a listához, vagy az összes állatot, amely a sárga vagy piros tartományban volt a hőmérséklet mérésekor. A lista segít áttekinteni az összes feltűnő állatot. Továbbá, minden állathoz a listán a következőket teheti:

- [Teljes műveleti menü](#full-action-menu)
- [Állat adatai](#animal-data)
- [Hőmérséklet mérése](#take-temperature)
- [Állat értékelése](#rate-animal)
- [Riasztás törlése](#clear-alarm)
- [Figyelési állapot váltása](#toggle-watch-status)
- [Állat keresése](#search-animal)
- [Szűrő beállítása](#set-filter)

A riasztási lista a következőképpen van felépítve:

   ![VitalControl Lists Alarm list](../images/alarmstructure.png "A riasztási lista felépítése")

|Szimbólum   | Leírás
|-------  |----
| ![VitalControl Icon Animal head](../images/kopf.png "Állatfej") | Megmutatja, hány állat van a listán
| ![VitalControl Icon ID](../images/ID.png "ID") | Megmutatja, hogy a kiválasztott állat borjú vagy tehén. A klinikai hőmérő megmutatja, hogy az állat az utolsó méréskor a sárga vagy piros zónában volt-e. Az állat azonosítója a szimbólum alatt jelenik meg.
| ![VitalControl Icon Rating](../images/auge.png "Ikon Értékelés") | Az utolsó rögzített értékelés a szimbólum alatt jelenik meg a közlekedési lámpa rendszer színeivel
| &nbsp;<img src="/icons/actions/temperature.svg" width="12" align="bottom" alt="Testhőmérséklet" title="Testhőmérséklet" /> | Az utolsó rögzített lázmérés a szimbólum alatt jelenik meg a közlekedési lámpa rendszer színeivel
| &nbsp;<img src="/icons/actions/rating.svg" width="25" align="bottom" alt="Állat értékelése" title="Értékelés" /> |A szimbólum alatti kör jelzi, hogy az állat a figyelési listán van

### Előkészítő lépések {#preliminary-steps}

1. Válassza ki a <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Listák" /> `{{<T "Lists" >}}` menüpontot a VitalControl készülék főképernyőjén, és nyomja meg az `{{<T "Ok" >}}` gombot.


2. Megnyílik egy almenü, amelyben különböző listaikonok jelennek meg. Jelölje ki az <img src="/icons/lists/alarmlist.svg" width="30" align="bottom" alt="Alarm" /> `{{<T "Alarm" >}}` ikont, és erősítse meg az `{{<T "Ok" >}}` gombbal.

3. A riasztási lista most megnyílt.

   ![VitalControl Lists Alarmlist](../images/firststeps.png "Előkészítő lépések")

### Teljes műveleti menü {#full-action-menu}

1. Végezze el az előkészítő lépéseket.

2. Használja az `F3` gombot &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; egy felugró menü megnyitásához, amely felsorolja a lehetséges műveleteket az `{{<T "Ok" >}}` gomb megnyomásakor. Használja a nyílgombokat △ ▽ a `{{<T "ActionMenu" >}}` művelet kijelöléséhez, és válassza ki a műveletet a középső `{{<T "Ok" >}}` gomb vagy az `F3` gomb `{{<T "Ok" >}}` megnyomásával.

3. A riasztási listában használja a nyílgombokat △ ▽ a kívánt állat kiválasztásához, és erősítse meg az `{{<T "Ok" >}}` gombbal. Alternatívaként kereshet egy állatot. Használja a `On/Off` gombot <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> és használja a nyílgombokat ◁ ▷ △ ▽ a kívánt számjegyek kiválasztásához. Végül erősítse meg az `{{<T "Ok" >}}` gombbal.

4. Az `{{<T "Actions" >}}` menü automatikusan megnyílik. A műveletek kezeléséről [itt](/hu/docs/actions/) található információ.

   ![VitalControl Lists Alarmlist](../images/actionmenu.png "Műveleti menü")

### Állat adatok {#animal-data}

1. Végezze el az előkészítő lépéseket.

2. Használja az `F3` gombot &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; egy felugró menü megnyitásához, amely felsorolja a lehetséges műveleteket az `{{<T "Ok" >}}` gomb megnyomásakor. Használja a nyílgombokat △ ▽ az `{{<T "AnimalData" >}}` művelet kijelöléséhez, és válassza ki a műveletet a középső `{{<T "Ok" >}}` gomb vagy az `F3` gomb `{{<T "Ok" >}}` megnyomásával.

3. A riasztási listában használja a nyílgombokat △ ▽ a kívánt állat kiválasztásához, és erősítse meg az `{{<T "Ok" >}}` gombbal. Alternatívaként kereshet egy állatot. Használja a `On/Off` gombot <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> és használja a nyílgombokat ◁ ▷ △ ▽ a kívánt számjegyek kiválasztásához. Végül erősítse meg az `{{<T "Ok" >}}` gombbal.

4. Az állat adatai most megjelennek.

   ![VitalControl Lists Alarmlist](../images/animaldata.png "Állat adatok")

### Hőmérséklet mérése {#take-temperature}

1. Végezze el az előzetes lépéseket.

2. Használja az `F3` billentyűt &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; egy felugró menü megjelenítéséhez, amely felsorolja az `{{<T "Ok" >}}` billentyű megnyomásakor elérhető műveleteket. Használja a nyílbillentyűket △ ▽ a `{{<T "TempTaking" >}}` művelet kiemeléséhez, és válassza ki a műveletet a középső `{{<T "Ok" >}}` billentyű vagy az `F3` billentyű `{{<T "Ok" >}}` megnyomásával.

3. A riasztási listában használja a nyílbillentyűket △ ▽ a kívánt állat kiválasztásához, és erősítse meg az `{{<T "Ok" >}}` gombbal. Alternatív megoldásként kereshet egy állatot. Használja a `On/Off` gombot <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> és használja a nyílbillentyűket ◁ ▷ △ ▽ a kívánt számjegyek kiválasztásához. Végül erősítse meg az `{{<T "Ok" >}}` gombbal.

4. A [Hőmérséklet mérése](/hu/docs/actions/measure-temperature/#measure-fever) funkció most automatikusan elindul.

   ![VitalControl Lists Alarmlist](../images/temperature.png "Hőmérséklet mérése")

### Állat értékelése {#rate-animal}

1. Végezze el az előzetes lépéseket.

2. Használja az `F3` billentyűt &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; egy felugró menü megjelenítéséhez, amely felsorolja az `{{<T "Ok" >}}` billentyű megnyomásakor elérhető műveleteket. Használja a nyílbillentyűket △ ▽ az `{{<T "RateAnimal" >}}` művelet kiemeléséhez, és válassza ki a műveletet a középső `{{<T "Ok" >}}` billentyű vagy az `F3` billentyű `{{<T "Ok" >}}` megnyomásával.

3. A riasztási listában használja a nyílbillentyűket △ ▽ a kívánt állat kiválasztásához, és erősítse meg az `{{<T "Ok" >}}` gombbal. Alternatív megoldásként kereshet egy állatot. Használja a `On/Off` gombot <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> és használja a nyílbillentyűket ◁ ▷ △ ▽ a kívánt számjegyek kiválasztásához. Végül erősítse meg az `{{<T "Ok" >}}` gombbal.

4. Az [Állat értékelése](/hu/docs/actions/rating/#rate-your-animals) funkció most automatikusan elindul.

   ![VitalControl Lists Alarmlist](../images/rateanimal.png "Állat értékelése")

### Riasztás törlése	{#clear-alarm}

1. Végezze el az előzetes lépéseket.

2. Használja az `F3` billentyűt &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; egy felugró menü megjelenítéséhez, amely felsorolja az `{{<T "Ok" >}}` billentyű megnyomásakor elérhető műveleteket. Használja a nyílbillentyűket △ ▽ a `{{<T "ClearAlarm" >}}` művelet kiemeléséhez, és válassza ki a műveletet a középső `{{<T "Ok" >}}` billentyű vagy az `F3` billentyű `{{<T "Ok" >}}` megnyomásával.


3. Az ébresztési listában használja a △ ▽ nyílbillentyűket a kívánt állat kiválasztásához, majd erősítse meg az `{{<T "Ok" >}}` gombbal. Alternatívaként kereshet egy állatot. Használja a `On/Off` gombot <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Keresés" /> és használja a ◁ ▷ △ ▽ nyílbillentyűket a kívánt számjegyek kiválasztásához. Végül erősítse meg az `{{<T "Ok" >}}` gombbal.

4. Az állat most eltávolításra került az ébresztési listából.

   ![VitalControl Lists Alarmlist](../images/clearalarm.png "Ébresztés törlése")

### Figyelési állapot váltása {#toggle-watch-status}

1. Végezze el az előzetes lépéseket.

2. Használja az `F3` gombot &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Felugró menü megnyitása" />&nbsp; egy felugró menü megjelenítéséhez, amely felsorolja a lehetséges műveleteket az `{{<T "Ok" >}}` gomb megnyomásakor. Használja a △ ▽ nyílbillentyűket a `{{<T "ToggleWatchStatus" >}}` művelet kiemeléséhez, majd válassza ki a műveletet a középső `{{<T "Ok" >}}` gomb vagy az `F3` gomb `{{<T "Ok" >}}` megnyomásával.

3. Az ébresztési listában használja a △ ▽ nyílbillentyűket a kívánt állat kiválasztásához, majd erősítse meg az `{{<T "Ok" >}}` gombbal. Alternatívaként kereshet egy állatot. Használja a `On/Off` gombot <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Keresés" /> és használja a ◁ ▷ △ ▽ nyílbillentyűket a kívánt számjegyek kiválasztásához. Végül erősítse meg az `{{<T "Ok" >}}` gombbal.

4. Az állat most hozzáadásra vagy eltávolításra került a figyelési listából az eredeti állapotától függően.

   ![VitalControl Lists Alarmlist](../images/watchlist.png "Figyelési állapot váltása")

### Állat keresése {#search-animal}

1. Végezze el az előzetes lépéseket.

2. Használja az `F3` gombot &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Felugró menü megnyitása" />&nbsp; egy felugró menü megjelenítéséhez, amely különböző opciókat sorol fel. Használja a △ ▽ nyílbillentyűket a `{{<T "SearchAnimal" >}}` funkció kiemeléséhez, majd indítsa el a keresési funkciót a középső `{{<T "Ok" >}}` gomb vagy az `F3` gomb `{{<T "Ok" >}}` megnyomásával.

3. Használja a △ ▽ ◁ ▷ nyílbillentyűket a kívánt állat azonosítójának kiválasztásához. Alternatívaként kereshet egy állatot. Használja a `On/Off` gombot <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Keresés" /> és használja a ◁ ▷ △ ▽ nyílbillentyűket a kívánt számjegyek kiválasztásához. Végül erősítse meg az `{{<T "Ok" >}}` gombbal.

![VitalControl Lists Alarmlist](../images/searchanimal.png "Állat keresése")

### Szűrő beállítása {#set-filter}

1. Végezze el az előzetes lépéseket.

2. Használja az `F3` billentyűt &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Felugró menü megnyitása" />&nbsp; egy felugró menü megjelenítéséhez, amely különböző opciókat sorol fel. Használja a nyílbillentyűket △ ▽ a `{{<T "SetFilter" >}}` funkció kiemeléséhez, és a szűrő funkció aktiválásához nyomja meg a középső `{{<T "Ok" >}}` gombot vagy az `F3` `{{<T "Ok" >}}` gombot.

3. Állítsa be a kívánt szűrőt. A szűrő használatáról [itt](../../filter/#applying-filters) talál információt.

   ![VitalControl Lists Alarmlist](../images/setfilter.png "Szűrő beállítása")
