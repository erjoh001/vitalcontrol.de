---
title: "Friss tehenek listája"
linkTitle: "Friss tehenek listája"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: fresh-cows
description: >
  Könnyítse meg a friss tehenek ellenőrzését.
categories: [Lists]
tags: [Lists, fresh cow]
translationKey: lists/fresh-cows
---
### Friss tehenek listája

{{% alert title="Magyarázat" %}}
A friss tehenek kezelésekor a legjobb gyakorlatok közé tartozik az állatok napi ellenőrzése több napon keresztül a születés után. A friss tehenek listája támogatja ezt az ellenőrzést, különösen a hőmérséklet rögzítése szempontjából. Minden állat esetében egy oszlopdiagram látható az ellenőrzési időszak minden napjára, az ellenőrzési időszak minden napját egy függőleges oszlop képviseli. Az oszlop színétől függően (zöld, sárga vagy piros) látható, hogy az adott napon normál, emelkedett vagy kritikusan emelkedett hőmérsékletet mértek-e az adott állatnál.
{{% /alert %}}

A tehenek azonnal felkerülnek a friss tehenek listájára, miután az ellésüket regisztrálták. Egy bizonyos ideig maradnak ezen a listán, ennek az időszaknak a hossza (napokban) a [beállításokban](../../settings/data-acquisition/#control-period-of-fresh-cows) állítható be.
 A következő műveletek érhetők el ezen a listán:

- [Teljes műveleti menü](../alarm/#full-action-menu)
- [Állat adatai](../alarm/#animal-data)
- [Hőmérséklet mérése](../alarm/#take-temperature)
- [Riasztási állapot váltása](#toggle-alarm-status)
- [Figyelési állapot váltása](#toggle-watch-status)
- [Mért tehenek elrejtése](#hide-measured-cows)
- [Állat keresése](../alarm/#search-animal)
- [Szűrő beállítása](../alarm/#set-filter)

{{% alert title="Tipp" %}}
Néhány műveletet ugyanúgy kell végrehajtani, mint a [riasztási listában](../alarm). Ezek itt nincsenek részletezve. Végezze el az előzetes lépéseket, és használja az adott művelet linkjét az utasítások eléréséhez.
{{% /alert %}}

### Előzetes lépések

1. Válassza ki a <img src="/icons/main/lists.svg" width="25" align="bottom" alt="Lists" /> `Lists` menüpontot a VitalControl készülék főképernyőjén, és nyomja meg az `OK` gombot.


2. Megnyílik egy almenü, amelyben különböző listák jelennek meg. Válassza a `Friss tehenek` listát <img src="/icons/lists/freshcows.svg" width="30" align="bottom" alt="Fresh-cows" />. Erősítse meg az `OK` gombbal.

3. A friss tehenek listája most megnyílt.

   ![VitalControl Lists Fresh cows list](../images/firststeps4.png "Friss tehén lista")

### Riasztási állapot váltása

1. Végezze el az előzetes lépéseket.

2. Használja az `F3` gombot &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; egy felugró menü megjelenítéséhez, amely felsorolja a lehetséges műveleteket az `OK` gomb megnyomásakor. Használja a nyílbillentyűket △ ▽ a `Riasztási állapot váltása` művelet kiemeléséhez, és válassza ezt az opciót a középső `OK` gomb vagy az `F3` gomb `OK` megnyomásával.

3. A friss tehenek listájában használja a nyílbillentyűket △ ▽ a kívánt állat kiválasztásához, és erősítse meg az `OK` gombbal. Alternatívaként kereshet egy állatot. Használja a `Be/Ki` gombot <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> és használja a nyílbillentyűket ◁ ▷ △ ▽ a kívánt számjegyek kiválasztásához. Végül erősítse meg az `OK` gombbal.

4. Az állat most hozzáadódik vagy eltávolításra kerül a riasztási listáról az eredeti állapotától függően.

   ![VitalControl Lists Fresh cows list](../images/togglealarmstatus.png "Riasztási állapot váltása")

### Figyelési állapot váltása

1. Végezze el az előzetes lépéseket.

2. Használja az `F3` gombot &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; egy felugró menü megjelenítéséhez, amely felsorolja a lehetséges műveleteket az `OK` gomb megnyomásakor. Használja a nyílbillentyűket △ ▽ a `Figyelési állapot váltása` művelet kiemeléséhez, és válassza ezt az opciót a középső `OK` gomb vagy az `F3` gomb `OK` megnyomásával.

3. A friss tehenek listájában használja a nyílbillentyűket △ ▽ a kívánt állat kiválasztásához, és erősítse meg az `OK` gombbal. Alternatívaként kereshet egy állatot. Használja a `Be/Ki` gombot <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> és használja a nyílbillentyűket ◁ ▷ △ ▽ a kívánt számjegyek kiválasztásához. Végül erősítse meg az `OK` gombbal.

4. Az állat most hozzáadódik vagy eltávolításra kerül a figyelési listáról az eredeti állapotától függően.

![VitalControl Lists Fresh cows list](../images/togglewatchstatus.png "Toggle watch status")

### Mért tehenek elrejtése

Ha ez a funkció aktiválva van, a száraz tehén listán elrejtésre kerülnek azok az állatok, amelyeknél hőmérsékletmérést végeztek. Ha ez a funkció nincs aktiválva, az állatok láthatóak maradnak a listán.

1. Végezze el az előzetes lépéseket.

2. Használja az `F3` billentyűt &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Actions" />&nbsp; egy felugró menü megjelenítéséhez, amely különböző opciókat listáz. Használja a nyílbillentyűket △ ▽ az `Elrejtés mért tehenek` opció kiemeléséhez, és kapcsolja be ezt az opciót a középső `OK` gomb vagy az `F3` billentyű `OK` megnyomásával.

3. A friss tehenek listáján belül használja a nyílbillentyűket △ ▽ a kívánt állat kiválasztásához, és erősítse meg `OK`-val. Alternatívaként kereshet egy állatot. Használja a `Be/Ki` gombot <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> és használja a nyílbillentyűket ◁ ▷ △ ▽ a kívánt számjegyek kiválasztásához. Végül erősítse meg `OK`-val.

4. Az `elrejtés mért` funkció most aktiválva van. Az aktiválást a négyzet bejelölése jelzi.

![VitalControl Lists Fresh cows list](../images/hidemeasuredcows.png "Hide measured cows")
