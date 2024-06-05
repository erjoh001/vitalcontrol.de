---
title: "Egy csoport vásárolt állat tömeges regisztrációja"
linkTitle: "Tömeges rögzítés"
date: 2023-07-28T13:25:28+02:00
weight: 15
draft: false
slug: bulk-recording
description: >
  Használja a vonalkódolvasót különféle állatok rögzítéséhez.
categories: [Tömeges rögzítés]
tags: [Tömeges rögzítés]
translationKey: new/bulk-recording
---
## Tömeges rögzítés {#bulk-recording}

A tömeges regisztráció segítségével rövid idő alatt nagy számú állatot rögzíthet és menthet az eszközére. Használja a vonalkódolvasót a szarvasmarha útleveleken található fülcímke szám és születési dátum vonalkódjainak beolvasásához. Az állat automatikusan mentésre kerül, és azonnal beolvashatja a következő útlevelet. Az állatok tömeges regisztrációjának végrehajtásához kövesse az alábbi lépéseket:

1. Csatlakoztassa a vonalkódolvasót a VitalControlhoz a kábellel.

2. A VitalControl eszköz főképernyőjén válassza ki a <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="Új állat" /> `{{<T "New" >}}` menüpontot, és nyomja meg az `{{<T "Ok" >}}` gombot.

3. Egy almenü nyílik meg. Használja a ◁ ▷ △ ▽ nyílgombokat a <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Tömeges rögzítés" /> `{{<T "BulkRecording" >}}` menüpont kiválasztásához, és erősítse meg az `{{<T "Ok" >}}` gombbal.

4. Egy másik almenü nyílik meg, amely tartalmaz egy mezőt az állat fülcímke számához és egy másik mezőt az állat születési dátumához. Először olvassa be a fülcímke szám vonalkódját. A mező szegélye pirosról zöldre változik. Ezután olvassa be a születési dátumot. A szegély rövid időre zöldre vált, mielőtt mindkét szegély ismét pirosra váltana. A képernyő tetején található útlevél szimbólum <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Állat útlevelek" title="Állat útlevelek" /> alatti számláló 0-ról 1-re nő. Az első állat mentésre került. Folytassa és olvassa be a többi szarvasmarha útlevelet. Minden egyes beolvasott útlevél után a számláló az útlevél szimbólum <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Állat útlevelek" title="Állat útlevelek" /> alatt eggyel nő. A számláló a csorda szimbólum <img src="/icons/header/group.svg" width="35" align="bottom" alt="Állat csoport"  title="Állat csoport" /> alatt is eggyel nő.


{{% alert title="Tipp" %}}
Az útlevél szimbólum alatt található számláló <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Állatútlevelek" title="Állatútlevelek" /> azt mutatja, hogy hány útlevelet szkenneltél be egy menetben anélkül, hogy elhagytad volna a `{{<T "BulkRecording" >}}` képernyőt. A csorda szimbólum alatt található számláló <img src="/icons/header/group.svg" width="35" align="bottom" alt="Új állat" /> azt mutatja, hogy összesen hány útlevelet szkenneltél be. Ez a számláló nem áll vissza nullára, ha elhagyod a `{{<T "BulkRecording" >}}` képernyőt. A szám megegyezik a ['Vásárlások'](../new-on-farm/purchased-animals/) menüpontban található bejegyzéseiddel.
{{% /alert %}}

   ![VitalControl: Menü 'Új - Tömeges rögzítés'](../images/bulk-recording.png "Tömeges rögzítés")

{{% alert title="Tipp" %}}
További beállítási lehetőségek állnak rendelkezésedre a `{{<T "BulkRecording" >}}` menüpontban. Ezeket az alábbiakban ismertetjük. Előkészítő lépésként mindig először lépj be a `{{<T "BulkRecording" >}}` menüpontba, majd folytasd az utasítások szerint.
{{% /alert %}}

{{% alert title="Tipp" %}}
Hibajelzések jelenhetnek meg a szkennelési folyamat során. Ebben az esetben a vonalkódolvasó hangot ad ki, és a további szkennelés nem lehetséges. Ismerd el a megfelelő hibajelzést a VitalControl kijelzőjén, és folytasd a szkennelést.
{{% /alert %}}

### Születési dátum kötelező {#birth-date-mandatory}

Ezzel a beállítási lehetőséggel meghatározhatod, hogy az állatok létrehozásakor meg kell-e adni a születési dátumot. Ha kikapcsolod ezt az opciót, csak a vonalkódot kell beolvasnod az állat mentéséhez. Ezeknél az állatoknál azonban az aktuális dátum kerül tárolásra születési dátumként! Ez a funkció alapértelmezés szerint engedélyezve van. A kikapcsoláshoz kövesd az alábbi lépéseket:

1. Használd a <img src="/icons/gear.svg" width="25" align="bottom" alt="Beállítások menü" /> `On/Off` gombot a beállítások menü megnyitásához.

2. Használd a △ ▽ nyílgombokat a `{{<T "BirthDateMandatory" >}}` beállítási lehetőség kiválasztásához, és erősítsd meg az `{{<T "Ok" >}}` gombbal.

3. A sárga kör azt jelképezi, hogy a funkció aktiválva van. A szürke kör azt jelképezi, hogy a funkció deaktiválva van.

4. Mentsd el a beállításokat, és használd az `F1` gombot &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Mentés és visszatérés" /> a menüpontba való visszatéréshez <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Tömeges rögzítés" />&nbsp; `{{<T "BulkRecording" >}}`.

![VitalControl: Menu New Birth date mandatory](../images/birthdate.png "Születési dátum kötelező")

### Alapértelmezett értékek {#default-values}

Az `{{<T "DefaultValues" >}}` beállítási menüben olyan szabványokat állíthat be, amelyek minden létrehozott állatra vonatkoznak. A vonalkódolvasóval történő létrehozás folyamata változatlan marad, ahogy fentebb leírtuk. Lehetősége van beállítani az állat típusát, nemét, fajtáját és tartózkodási helyét. Az `{{<T "DefaultValues" >}}` beállításához kövesse az alábbi lépéseket:

1. Használja a <img src="/icons/gear.svg" width="25" align="bottom" alt="Beállítások menü" /> `On/Off` gombot a beállítások menü megnyitásához.

2. Használja a △ ▽ nyílgombokat az `{{<T "DefaultValues" >}}` menüpont kiválasztásához, majd erősítse meg az `{{<T "Ok" >}}` gombbal.

3. Egy almenü nyílik meg a különböző beállítási lehetőségekkel. Használja a △ ▽ nyílgombokat a kívánt beállítási lehetőség kiválasztásához. Használja a ◁ ▷ nyílgombokat a kívánt beállítás kiválasztásához.

4. Mentse a beállításokat, és használja az `F1` gombot&nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Mentés és visszatérés" /> a menüpontba való visszatéréshez <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Tömeges rögzítés" />&nbsp; `{{<T "BulkRecording" >}}` .

![VitalControl: Menu New Default values](../images/defaultvalues.png "Alapértelmezett értékek")

### Rögzített értékek {#recorded-values}

A `{{<T "RecordedValues" >}}` beállítási menüben megadhatja, hogy mely értékeket kell rögzíteni a fülcímke száma és a születési dátum mellett. Választhat a `{{<T "Breed" >}}`, `{{<T "Sex" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "CurrentWeight" >}}`, `{{<T "BirthWeight" >}}` és `{{<T "TypeAnimal" >}}` között. Amint legalább egy értéket beállít, a folyamat megváltozik a szkennelés során. Először szkennelje be a fülcímke számát és a születési dátumot. Ezután használja a △ ▽ iránygombokat a beállítandó értékek kiválasztásához és az értékek beállításához. Ezután mentse el a bejegyzéseit az `F3` gombbal. Csak ezután jön létre az állat! A rögzítendő értékek beállításához kövesse az alábbi lépéseket:

1. Használja a <img src="/icons/gear.svg" width="25" align="bottom" alt="Beállítások menü" /> `On/Off` gombot a beállítások menü megnyitásához.

2. Használja a △ ▽ nyílgombokat a `{{<T "RecordedValues" >}}` menüpont kiválasztásához, majd erősítse meg az `{{<T "Ok" >}}` gombbal.

3. Válassza ki a rögzítendő kívánt értéket a △ ▽ nyílbillentyűkkel, és erősítse meg az `{{<T "Ok" >}}` gombbal. Egy sárga kör jelenik meg. Ha szeretné deaktiválni a rögzítendő értéket, erősítse meg újra az `{{<T "Ok" >}}` gombbal. A sárga kör eltűnik.

4. Mentse a beállításokat, és használja az `F1` gombot &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Mentés és visszatérés" /> a menüpontba való visszatéréshez <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Tömeges rögzítés" />&nbsp; `{{<T "BulkRecording" >}}`.

5. Ha szeretné újra deaktiválni az összes rögzítendő értéket, válassza a `{{<T "EnableAllResetOrder" >}}` beállítási lehetőséget a `{{<T "RecordedValues" >}}` menüpontban, és erősítse meg az `{{<T "Ok" >}}` gombbal.

   ![VitalControl: Menü Új rögzített értékek](../images/recordvalues.png "Rögzített értékek")
