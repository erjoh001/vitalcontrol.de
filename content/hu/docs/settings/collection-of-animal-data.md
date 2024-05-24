---
title: "Adatgyűjtés"
linkTitle: "Adatgyűjtés"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: data-acquisition
description: >
 Az állati adatgyűjtéshez szükséges beállítások tárolása
categories: [settings]
tags: [settings, data acquisition]
translationKey: settings/data-acquisition
maphilight: true
---
## Áttekintés {#overview}

Az alábbi grafika felsorolja az állati adatok rögzítésével kapcsolatos elérhető beállításokat:

<img src="../images/animaldataacquisition.png" alt="Állati adatok gyűjtése" title="Állati adatok gyűjtése" usemap="#workmap-overview" class="maphilight" />

<map name="workmap-overview">
  <area shape="rect" coords="3,40,239,80" alt="Súlyrögzítés" title="Almenü: Súlyrögzítés beállításai&#10;Egérkattintás: dokumentáció megnyitása" href="#settings-weight-recording">
  <area shape="rect" coords="3,80,239,160" alt="Állatok értékelési módja" title="Állatok értékelési módjának beállítása&#10;Egérkattintás: dokumentáció megnyitása" href="#mode-of-animal-rating">
  <area shape="rect" coords="3,160,239,240" alt="Friss tehenek ellenőrzési időszaka" title="Friss tehenek ellenőrzési időszakának beállítása&#10;Egérkattintás: dokumentáció megnyitása" href="#control-period-of-fresh-cows">

  <area shape="rect" coords="2,282,125,318" alt="Vissza" title="Egy szinttel visszalépés" href="/hu/docs/settings/">
</map>

{{% alert title="Tipp" %}}
Mozgassa az egérmutatót az alábbi grafikon egy szimbóluma fölé, és hagyja ott egy pillanatra. Egy tooltip jelenik meg, amely információkat nyújt az adott beállításról. Ha rákattint az egyik sorra, az adott beállítás leírásához lesz irányítva.
{{% /alert %}}

## Beállítások *Súlyrögzítés* {#settings-weight-recording}

Az alábbi grafika felsorolja az állatok súlyrögzítésével kapcsolatos elérhető beállításokat:

<img src="../images/weightrecording.png" alt="Almenü elemek súlyrögzítés beállításaihoz" title="Súlyrögzítés beállításai" usemap="#workmap-weight" class="maphilight" />

<map name="workmap-weight">
  <area shape="rect" coords="1,40,230,199" alt="Napi súlygyarapodás küszöbértékei" title="Napi súlygyarapodás értékelésének küszöbértékeinek beállítása&#10;Egérkattintás: dokumentáció megnyitása" href="#assessment-of-daily-weight-gain-threshold-values">
  <area shape="rect" coords="1,200,230,280" alt="Születési súly" title="Új állat regisztrálásakor javasolt születési súly beállítása&#10;Egérkattintás: dokumentáció megnyitása" href="#birth-weight">
  <area shape="rect" coords="1,280,230,360" alt="Átlagos napi súlygyarapodás" title="Átlagos napi súlygyarapodás beállítása az állatok súlyának becsléséhez&#10;Egérkattintás: dokumentáció megnyitása" href="#average-daily-weight-gain">
  <area shape="rect" coords="1,360,230,440" alt="Súlyrögzítés pontossága" title="Súlyrögzítés pontosságának beállítása&#10;Egérkattintás: dokumentáció megnyitása" href="#precision-of-weight-recording">
</map>

### Napi súlygyarapodás értékelése: Küszöbértékek {#assessment-of-daily-weight-gain-threshold-values}

{{% alert title="Tipp" %}}
A piros mező a "kritikusan alacsony súlygyarapodás" területét mutatja. A sárga mező a "szuboptimális súlygyarapodás" területét mutatja.
{{% /alert %}}

A napi súlygyarapodás értékeléséhez szükséges küszöbértékek beállításához kövesse az alábbi lépéseket:

1. A VitalControl készülék főképernyőjén válassza ki a <img src="/icons/gear.svg" width="25" align="bottom" alt="Beállítások" /> `Beállítások` menüpontot, és nyomja meg az `OK` gombot.

2. Megnyílik egy almenü, amelyben különböző beállítások jelennek meg. Használja a △ ▽ nyílgombokat a `Adatgyűjtés` kiválasztásához. Erősítse meg `OK` gombbal.

3. Egy másik almenü nyílik meg, amelyben a △ ▽ nyílgombokkal válthat a `Súlyfelvétel`, `Állatok értékelése` és `Friss tehenek ellenőrzési időszaka` beállítási mezők között. Válassza a `Súlyfelvétel` lehetőséget, és erősítse meg `OK` gombbal.

4. Az `Napi súlygyarapodás` beállítási mező automatikusan kiválasztásra kerül. Használja a ◁ ▷ nyílgombokat a kívánt állatfaj kiválasztásához. Erősítse meg `OK` gombbal. Alternatívaként használhatja a ceruza ikont a <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Szerkesztés" /> `F3` gombbal, hogy közvetlenül a piros és sárga területek szerkesztéséhez ugorjon.

5. Használja a △ ▽ nyílgombokat a kívánt "nagyobb mint" vagy "egyenlő" g/nap növekedés kiválasztásához a piros és sárga területen. Használja az `F2`/`F3` 🡄 🡆 gombokat vagy a ◁ ▷ nyílgombokat a piros és sárga területek közötti váltáshoz.

6. Miután beállította a kívánt "nagyobb mint" vagy "egyenlő" g/nap növekedést, használja az `F1` gombot <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Kilépés" /> vagy erősítse meg `OK` gombbal, hogy visszatérjen az `Napi súlygyarapodás` mezőbe.

    ![VitalControl: napi súlygyarapodás beállítások menü](../images/dailyweightgain.png "Napi súlygyarapodás")

### Születési súly {#birth-weight}

A készülék a beállításokban tárolt születési súlyt használja alapértelmezett értékként új állatok létrehozásakor. Annak érdekében, hogy az újonnan született állat egyedi születési súlyát gyorsabban ki lehessen választani, szükség lehet az alapértelmezett érték beállítására a gazdaság számára. A `születési súly` értékének beállításához kövesse az alábbi lépéseket:


1. A VitalControl készülék főképernyőjén válassza ki a <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `Beállítások` menüpontot, és nyomja meg az `OK` gombot.

2. Egy almenü nyílik meg, amelyben különböző beállítások jelennek meg. Használja a △ ▽ nyílgombokat a `Adatgyűjtés` kiválasztásához. Erősítse meg az `OK` gombbal.

3. Egy másik almenü nyílik meg, amelyben a △ ▽ nyílgombokkal válthat a `Súlyfelvétel`, `Állat értékelése` és `Friss tehenek ellenőrzési időszaka` beállítási mezők között. Válassza a `Súlyfelvétel` lehetőséget, és erősítse meg az `OK` gombbal.

4. Használja a △ ▽ nyílgombokat a `Születési súly` beállítási mező kiválasztásához, és használja a ◁ ▷ nyílgombokat a kívánt születési súly beállításához. A készülék mostantól az itt meghatározott születési súlyt használja alapértelmezettként új állatok létrehozásakor. Az újszülött állat egyedi születési súlya ezután gyorsabban kiválasztható.

    ![VitalControl: menü beállítások születési súly](../images/birthweight.png "Születési súly")

{{% alert title="Figyelmeztetés" color="warning" %}}
Az alapértelmezett születési súly csak egy hozzávetőleges érték, amelyet egyedileg kell beállítani új állat létrehozásakor.
Ha nem kívánja ezt a beállítást elvégezni, vagy ha automatikusan hoz létre állatokat [a háttérben](../animal-registration/#auto-registration), akkor új állat létrehozásakor nem kell születési súlyt lekérdezni vagy menteni. Ez meghatározható az [állatok regisztrációjának](../animal-registration/#set-recorded-weights) beállításaiban.
{{% /alert %}}

{{% alert title="Alapértelmezett születési súlyok:" %}}

| Új állat típusa               | Bárány         | Borjú         |
|-------------------------------|----------------|---------------| 
| Alapértelmezett érték *születési súly*: | 4 kg           | 40 kg         |
| Értéktartomány :              | 1,0 és 99 kg között  | 1,0 és 99 kg között |
{{% /alert %}}

### Átlagos napi súlygyarapodás {#average-daily-weight-gain}

{{% alert title="Magyarázat" %}}
Amikor egy állatot [lemér](../../actions/record-weight/), a meghatározott napi növekedést használják a javasolt súlyérték kiszámításához az állat mérlegelése során. Ha a javasolt súlyérték túl alacsony vagy túl magas a mérlegelendő állatok többségéhez képest, akkor a meghatározott értéket lefelé vagy felfelé kell módosítania, hogy lerövidítse a súlyérték nyílgombokkal történő beállításához szükséges időt.
{{% /alert %}}


Az állat hozzávetőleges súlyának kiszámításához használt `napi átlagos súlygyarapodás` beállításához kövesse az alábbi lépéseket.

1. A VitalControl készülék főképernyőjén válassza ki a <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `Beállítások` menüpontot, és nyomja meg az `OK` gombot.

2. Megnyílik egy almenü, amelyben különböző beállítások jelennek meg. Használja a △ ▽ nyílgombokat a `Adatgyűjtés` kiválasztásához. Erősítse meg az `OK` gombbal.

3. Egy másik almenü nyílik meg, amelyben a △ ▽ nyílgombokkal válthat a `Súlyfelvétel`, `Állat értékelése` és `Friss tehenek ellenőrzési időszaka` beállítási mezők között. Válassza a `Súlyfelvétel` lehetőséget, és erősítse meg az `OK` gombbal.

4. Használja a △ ▽ nyílgombokat az `Átlagos napi súlygyarapodás` beállítási mező kiválasztásához. Használja a ◁ ▷ nyílgombokat a kívánt napi átlagos növekedés g/nap beállításához. A készülék mostantól az itt meghatározott napi átlagos gyarapodást használja az állatok várható napi gyarapodásának alapértelmezett értékeként.

    ![VitalControl: menü beállítások átlagos napi súlygyarapodás](../images/averagedailyweightgain.png "Átlagos napi súlygyarapodás")

### Súlyfelvétel pontossága {#precision-of-weight-recording}

{{% alert title="Magyarázat" %}}
Az alkalmazási esettől és az állatfajtól függően (*bárány*, *borjú*, *tehén*) különböző követelmények vannak a rögzítendő súlyérték felbontásával kapcsolatban (*10 g*, *100 g* vagy *1 kg* pontosság). Ezen követelmények teljesítéséhez szükséges a *Maximális pontosság* beállítás használata.
{{% /alert %}}

Az alábbi táblázat bemutatja a súlyfelvétel pontosságát a súlytartomány és a *Maximális pontosság* beállítás függvényében:

| Beállítás *Maximális pontosság*:           |  10 g | 100 g | 1 kg |
|--------------------------------------------|-------|-------|------|
| Pontosság *0 és 9,9 kg* között:            | 10 g  | 100 g | 1 kg |
| Pontosság *10 és 49,9 kg* között:          | 100 g | 100 g | 1 kg |
| Pontosság *50 és 99,9 kg* között:          | 500 g | 500 g | 1 kg |
| Pontosság *≥ 100 kg* értékeknél:           | 1 kg  | 1 kg  | 1 kg |

Az állatok súlyának rögzítésekor a maximális pontosság beállításához kövesse az alábbi lépéseket:


1. A VitalControl készülék főképernyőjén válassza ki a <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `Beállítások` menüpontot, és nyomja meg az `OK` gombot.

2. Megnyílik egy almenü, amelyben különböző beállítások jelennek meg. Használja a △ ▽ nyílgombokat a `Adatgyűjtés` kiválasztásához. Erősítse meg az `OK` gombbal.

3. Egy másik almenü nyílik meg, amelyben a △ ▽ nyílgombokkal válthat a `Súlyfelvétel`, `Állat értékelése` és `Friss tehenek ellenőrzési időszaka` beállítási mezők között. Válassza a `Súlyfelvétel` lehetőséget, és erősítse meg az `OK` gombbal.

4. Használja a △ ▽ nyílgombokat a `Maximális pontosság` beállítási mező kiválasztásához. Használja a ◁ ▷ nyílgombokat a kívánt maximális pontosság beállításához. A készülék súlyfelvételének pontossága mostantól a megadott beállítást követi.

    ![VitalControl: menüútvonal beállítások maximális pontosság súlyfelvétel](../images/precisionweightrecording.png "A súlyfelvétel maximális pontosságának megadása.")

<br>
Mentse a beállításokat, és térjen vissza az `Adatgyűjtés` főmenübe az `F1` gomb megnyomásával &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Mentés és visszatérés" />&nbsp;.

## Állatértékelési mód {#mode-of-animal-rating}

{{% alert title="Magyarázat" %}}
Egyszerű módban az állatértékelés során csak az általános állapotot kérdezik le (zöld/sárga/piros). A kiterjesztett értékelés során 4 értékelési kategóriát kérdeznek le: általános állapot, takarmányfogyasztás, hasmenés és légzőszervi betegség.
{{% /alert %}}

Az `Állatok értékelése` beállításához a készülékén járjon el az alábbiak szerint.

1. A VitalControl készülék főképernyőjén válassza ki a <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `Beállítások` menüpontot, és nyomja meg az `OK` gombot.

2. Megnyílik egy almenü, amelyben különböző beállítások jelennek meg. Használja a △ ▽ nyílgombokat az `Adatgyűjtés` kiválasztásához. Erősítse meg az `OK` gombbal.

3. Egy másik almenü nyílik meg, amelyben a △ ▽ nyílgombokkal válthat a `Súlyfelvétel`, `Állat értékelése` és `Friss tehenek ellenőrzési időszaka` beállítási mezők között. Válassza az `Állat értékelése` lehetőséget, és erősítse meg az `OK` gombbal.


4. Használja a ◁ ▷ nyílgombokat az állatok kívánt értékelésének beállításához.

    ![VitalControl: menü beállítások állatok értékelése](../images/raitingofanimals.png "Állatok értékelése")

## Friss tehenek ellenőrzési időszaka {#control-period-of-fresh-cows}

{{% alert title="Magyarázat" %}}
A friss tehenek kezelésekor a legjobb gyakorlatok közé tartozik az állatok napi ellenőrzése több napon keresztül a születés után, beleértve a hőmérsékletük mérését is. Az ellenőrzési időszak hossza farmonként jelentősen eltérhet. Emiatt az ellenőrzési időszak hossza a VitalControl beállításokban 3 és 14 nap között állítható be. A friss tehenek ellenőrzési időszakára beállított érték határozza meg az oszlopdiagram oszlopainak számát, amely minden állat esetében megjelenik a [friss tehén lista](../../lists/fresh-cows/) alatt.
{{% /alert %}}

Az ellenőrzési időszak hosszának beállításához a friss teheneid számára kövesd az alábbi lépéseket:

1. A VitalControl készülék főképernyőjén válaszd ki a <img src="/icons/gear.svg" width="25" align="bottom" alt="Beállítások" /> `Beállítások` menüpontot, és nyomd meg az `OK` gombot.

2. Egy almenü nyílik meg, amelyben különböző beállítások jelennek meg. Használd a △ ▽ nyílgombokat a `Adatgyűjtés` kiválasztásához. Erősítsd meg az `OK` gombbal.

3. Egy másik almenü nyílik meg, amelyben a △ ▽ nyílgombokkal válthatsz a `Súlyfelvétel`, `Állatok értékelése` és `Friss tehenek ellenőrzési időszaka` beállítási mezők között. Válaszd a `Friss tehenek ellenőrzési időszaka` lehetőséget, és erősítsd meg az `OK` gombbal.

4. Használd a ◁ ▷ nyílgombokat az ellenőrzési időszak kívánt hosszának beállításához a szülés utáni napokban.

    ![VitalControl: menü beállítások friss tehenek ellenőrzési időszaka](../images/controlperiodfreshcows.png "Friss tehenek ellenőrzési időszaka")

<br>

Mentsd el a beállításokat, és térj vissza a főmenübe <img src="/icons/gear.svg" width="25" align="bottom" alt="Beállítások" /> `Beállítások` az `F1` gomb megnyomásával &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Mentés és visszatérés" />&nbsp;.
