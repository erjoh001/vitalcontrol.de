---
title: Lázmérés
linkTitle: Hőmérséklet
slug: measure-temperature
weight: 10
description: >
  Mérje meg állatai lázát.
date: 2023-07-26
Categories: [Actions]
tags: [Actions, fever, temperature]
translationKey: actions/temperature
---

## Lázmérés {#measure-fever}
 
Használja a hőmérséklet akciót, hogy megmérje állatai hőmérsékletét. Helyezze a mérőhegyet rektálisan a megadott mérési mélységig (nagy állatoknál a teljes hosszúságig a dudorig, kis kérődzőknél kb. 6 cm vagy a mérőhegy 2/3-a). A mérési folyamat automatikusan zajlik. Amint a mérési folyamat befejeződik, a készülék kijelzi a mért hőmérsékletet. A színkódolás jelzi, hogy a hőmérséklet a zöld, sárga vagy piros tartományban van-e. Számos lehetőség áll rendelkezésére a Hőmérséklet mérés kampány során:

- [Eredmény mentése](#save-result) az állatspecifikus mérés dokumentálásához
- Az állat felvétele a [Megfigyelési listára](#put-on-the-watch-list). Ez megkönnyíti a megismétlések ellenőrzését, mivel az 'megfigyelési lista' használatával könnyebben megtalálhatja a feltűnő állatokat.
- A [Mérési hely megvilágításának](#lighting-of-the-measurement-location-on-and-off) be- és kikapcsolása
- A [Mérés megismétlése](#repeat-the-measurement)
- Az [Akció megszakítása](#cancel-the-action)

{{% alert title="Tipp" %}}
Ha a hőmérséklet a sárga tartományban ("emelkedett") vagy a piros tartományban ("láz") van, a VitalControl automatikusan felveszi a kiválasztott állatot a riasztási listára. Más adatokkal való korreláció révén folyamatosan nyomon követheti az egyes állatok egészségi állapotát.
{{% /alert %}}

### Előkészítő lépések

1. A VitalControl készülék főképernyőjén válassza ki a &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` menüpontot, és nyomja meg az `{{<T "Ok" >}}` gombot.

2. Vagy szkenneljen be egy állatot a transzponder segítségével, vagy válasszon egy állatot a listából. Erősítse meg az `{{<T "Ok" >}}` gombbal, és válasszon egy állatot a △ ▽ nyílgombokkal. Erősítse meg az `{{<T "Ok" >}}` gombbal.

3. Megnyílik egy almenü az állati akciókkal. Az <img src="/icons/actions/temperature.svg" width="10" align="bottom" alt="Temperature" /> `{{<T "Temperature" >}}` akció automatikusan ki van választva. Erősítse meg az `{{<T "Ok" >}}` gombbal.


4. Most végezze el a mérést. Amint a mérés befejeződött, a hőmérséklet kék, zöld, sárga vagy piros színnel lesz kiemelve, a beállított küszöbértéktől függően.

{{< tabpane >}}
{{< tab header="Előkészítő lépések:" text=true disabled=true />}}
{{% tab header="Transzponder szkennelés" text=true %}}
![VitalControl: Menü Műveletek Előkészítő lépések](../images/firststeps-scan.png "Előkészítő lépések")
{{% /tab %}}
{{% tab header="Kézi kiválasztás a listából" text=true %}}
![VitalControl: Menü Műveletek Előkészítő lépések](../images/firststeps.png "Előkészítő lépések")
{{% /tab %}}
{{< /tabpane >}}

### Eredmény mentése {#save-result}

1. Végezze el az előkészítő lépéseket.

2. Használja az `F3` billentyűt <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Mentés" /> vagy erősítse meg `{{<T "Ok" >}}`-val az eredmény mentéséhez.

    ![VitalControl: Menü Műveletek Eredmények mentése](../images/saveresults.png "Eredmények mentése")

### Felvétel a figyelőlistára {#put-on-the-watch-list}

1. Végezze el az előkészítő lépéseket.

2. Nyomja meg a középső felső `On/Off` gombot <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Felugró menü megnyitása" />.

3. Egy felugró menü nyílik meg, ahol kiválaszthatja a `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` vagy `{{<T "Flashlight" >}}` menüpontokat. Használja a △ ▽ nyílgombokat a `{{<T "AddToWatchList" >}}` kiválasztásához, majd nyomja meg a középső `{{<T "Ok" >}}` gombot vagy az `F3` gombot `{{<T "Ok" >}}`.

    ![VitalControl: Menü Műveletek Felvétel a figyelőlistára](../images/watchlist.png "Felvétel a figyelőlistára")

### A mérési hely megvilágítása be- és kikapcsolása {#lighting-of-the-measurement-location-on-and-off}

1. Végezze el az előkészítő lépéseket.

2. Nyomja meg a középső felső `On/Off` gombot <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Felugró menü megnyitása" />.

3. Egy felugró menü nyílik meg, ahol kiválaszthatja a `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` vagy `{{<T "Flashlight" >}}` menüpontokat. Használja a △ ▽ nyílgombokat a `{{<T "Flashlight" >}}` kiválasztásához, majd nyomja meg a középső `{{<T "Ok" >}}` gombot vagy az `F3` gombot `{{<T "Ok" >}}`.

    ![VitalControl: Menü Műveletek Zseblámpa be-ki](../images/light.png "Zseblámpa be-ki")

### A mérés megismétlése {#repeat-the-measurement}

1. Végezze el az előkészítő lépéseket.


2. Nyomja meg a középső felső `On/Off` gombot <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.

3. Megnyílik egy felugró menü, amelyben kiválaszthatja a `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` vagy `{{<T "Flashlight" >}}` menüpontokat. Használja a △ ▽ nyílgombokat a `{{<T "RepeatMeasurement" >}}` kiválasztásához, majd nyomja meg a középső `{{<T "Ok" >}}` gombot vagy az `F3` gombot `{{<T "Ok" >}}`.

    ![VitalControl: Menü műveletek Fény be/ki](../images/repeat.png "Fény be/ki")

### A művelet megszakítása {#cancel-the-action}

1. Végezze el az előkészítő lépéseket.

2. Nyomja meg az `F1` <img src="/icons/footer/cancel.svg" width="25" align="bottom" alt="Cancel" /> gombot a művelet megszakításához.

    ![VitalControl: Menü műveletek A művelet megszakítása](../images/saveresults.png "A művelet megszakítása")

{{% alert title="Tipp" %}}
Ha ez a művelet nem elérhető, valószínűleg deaktiválták! Aktiválja a műveletet az [akció beállítások](../setting/) menüben. Alternatív megoldásként az összes művelet visszaállítása visszahozza ezt a műveletet.
{{% /alert %}}
