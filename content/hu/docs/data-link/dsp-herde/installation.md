---
title: "A Technology VitalControl beállítása:"
linkTitle: Beállítás
date: 2023-08-04T12:21:53+02:00
draft: false
description: >
  Határozza meg az adatok szinkronizálási paramétereit a *Herde* szoftver és a VitalControl eszköz közötti adatcsere érdekében.
weight: 10
categories: [DSP Herde]
translationKey: DSPherde/installation
---
Az első [adatcsere](../data-exchange/) előtt létre kell hozni és be kell állítani a technológiai kapcsolatot a VitalControl eszközzel.

{{% alert title="Figyelem" %}}
A technológiai kapcsolat beállítása előtt ellenőrizze, hogy a 'VCSynchronizer' szoftver telepítve van-e a számítógépén; ez a szoftver kötelező az adatcseréhez. Ehhez nyissa meg a Windows Start menüt, és keresse meg az alkalmazások listájában az 'Urban VitalControl' nevű bejegyzést. Ha nem talál ilyen bejegyzést, [telepítse](../../vcsynchronizer/installation/) a `VCSynchronizer` szoftvert a számítógépére.
{{% /alert %}}

A technológia beállításához kövesse az alábbi lépéseket:

## Új paraméterkészlet létrehozása a VitalControl eszközzel történő adatcseréhez

1. A `Herde` szoftverben nyissa meg a `Beállítások` ablakot. A felhasználói felület konfigurációjától függően ezt az ablakot a főmenü `Szervezet` menüpontján keresztül (felső szintű elem _Beállítások_), az oldalsáv menüben vagy az egyéni eszköztárában (vízszintes vagy függőleges) nyithatja meg.

   ![Software Herde: a beállítások menü megnyitása](../screenshots/settings.png "Herde: Beállítások megnyitása")

1. Megnyílik egy felugró ablak `Beállítások`, amelynek bal oldali sávjában számos beállítási kategória található. Nyissa meg a `Szolgáltatás` ➊ kategóriát, és válassza a `Technológia` ➋ alkategóriát.

1. A jobb oldali fő terület fejlécében most megjelenik egy legördülő menü, amelyben az összes meghatározott technológiai paraméterkészlet szerepel. A beállított technológiák száma jobbra látható. Kattintson a ![Software Herde: Új technológiai paraméterkészlet létrehozása](/icons/new.png "Herde: Technológiai kapcsolat létrehozása") `Új technológiai paraméterkészlet létrehozása` ➌ gombra.

   ![Software Herde: technológiai beállítások képernyője](../screenshots/settings-technology.png "Herde: Technológiai beállítások")


1. Egy másik felugró ablak nyílik meg. Írja be a `VitalControl` nevet a **Kapcsolat neve** mezőbe és az `Urban VitalControl (Gen 2)` nevet a **Technológia típusa** mezőbe, majd kattintson az `Elfogadás` gombra.

   ![Software Herde: Új paraméterkészlet létrehozása a VitalControl eszközhöz](../screenshots/new-technology.png "Új technológia létrehozása: VitalControl").

   A `VitalControl` technológia paraméterkészlete most létrejött, és a következő lépésekben kell konfigurálni.

## Konfiguráció: Alapbeállítások

Kezdetben az `Alapbeállítások` fül van kiválasztva a megjelenített képernyőn, ahogy az alábbi ábrán látható. Végezze el a beállításokat az `Külső program` ➊, `Állat adatok` ➋, `Helyszínek` ➌ és `Kilépés` ➍ kategóriákban a farm-specifikus feltételeknek megfelelően.

   ![Software Herde: Alapbeállítások konfigurálása](../screenshots/basic-settings.png "Technológia VitalControl: Alapbeállítások").
   
### `Külső program` ➊ kategória

A VitalControl és a Herde Plus közötti adatcsere végrehajtásához alapvető szoftverre van szükség, amely a [VitalControl Synchronizer](../../vcsynchronizer) külső segédprogramként működik. A program helyes működéséhez néhány beállítást kell elvégezni a `Külső program` ➊ kategóriában.

- **Eszköz neve az adatcseréhez**:  
  Alapértelmezés szerint ez a mező üres. Azonban ajánlott megadni a számítógép nevét itt. Ehhez nyomja meg az ikont ![Herde Software: Új technológiai kapcsolat létrehozása](/icons/arrow-down.png "Herde: Technológiai kapcsolat létrehozása") `Le nyíl` a legördülő mező jobb végén. A számítógép neve most meghatározásra kerül és megjelenik a legördülő listában kiválasztásra. Miután a mező a számítógép nevével van kitöltve és ez a beállítás el van mentve, az adatcsere csak az Ön számítógépéről indítható el ezentúl.

- **Végrehajtás útvonala**:
  Kérjük, írja be `%LOCALAPPDATA%\Urban\VitalControl\Synchronizer` ebbe a beviteli mezőbe. Ez a `VitalControl Synchronizer` program (pontosabban a `vcsynchronizer.exe` fájl) abszolút útvonala. Ha a program célkönyvtára megváltozott a [VCSynchronizer telepítése](../../vcsynchronizer/installation) során, kérjük, adja meg itt a kiválasztott célkönyvtárat.


- **Program HerdePlus 🡒 Technológia**:  
  Ezt a mezőt a `vc_imp.bat` értékkel kell kitölteni. Az azonos nevű batch fájl meghatározza az adatimportálás során végrehajtandó műveletek sorrendjét.

- **Technológia 🡒 Program HerdePlus**:  
  Ezt a mezőt a `vc_exp.bat` értékkel kell kitölteni. Az azonos nevű batch fájl meghatározza az adatexportálás során végrehajtandó műveletek sorrendjét.

### Kategória `Állatadatok` ➋

További beállításokat kell elvégezni az 'Állatadatok' ➋ kategóriában, hogy az adatcsere teljes mértékben működőképes legyen.

- **Állatszám**:  
  Ez a beállítás határozza meg, hogy az állatok milyen azonosítót kapnak a VitalControl eszközön való megjelenítéshez:
  - Ha rövid azonosítókat (`Istálló szám`, 2-6 számjegy) rendelt az állataihoz, itt az 'Istálló szám' értéket kell kiválasztania: az állat VitalControl-on megjelenített azonosítója ekkor az állathoz rendelt istálló számnak fog megfelelni.
  - Ha **nem** rendelt rövid azonosítókat az állataihoz - ez például a hizlalási szektorban gyakori -, akkor itt a `Fülszám (5 számjegy)` értéket kell kiválasztania. Az állat VitalControl eszközön megjelenített azonosítója ekkor az állat sárga fülcímkéjén nyomtatott azonosító utolsó 5 számjegyének fog megfelelni.
  
<br>

- **Adó szám**:  
  Ez a beállítás határozza meg, hogy az állat milyen számot kap az RFID szkennelés során:  
  - Ha nyakörvet transzponderrel vagy fül transzpondert helyez az állataira - például az automata etetőnél történő azonosításhoz -, itt a 'Transzponder' értéket kell kiválasztania.
  - Ha az állatai vagy borjai elektronikus fülcímkéket viselnek, amelyek az állat hivatalos, nemzeti 15 számjegyű azonosítószámával vannak kódolva, amely az állat egész életén át szolgál az azonosításra, itt a 'Fülszám (15 számjegy)` értéket kell kiválasztania.

<br>

- **Minimális átadási kor**:  
  Ha `0` értéket ad meg ebben a mezőben, **minden állat** átkerül a VitalControl eszközre, életkoruktól függetlenül. A `0`-nál nagyobb érték meghatározza az átadandó állatok minimális életkorát (napokban). Például, ha **csak teheneket** szeretne átadni az eszközre, itt 600 napos (= 20 hónap) értéket kell megadnia minimális életkorként.

### Kategória `Helyszínek` ➌

Használja ezt a kategóriát, hogy kizárja az állatokat bizonyos helyszíneken az eszközre történő adatátvitelből. Ehhez távolítsa el a pipát azon helyszínek mellől, ahonnan **nem** szeretné az ott tartott állatokat az eszközre átvinni.

### Kategória `Távozás` ➍

Itt jelölje be a 'Távozás a HERDEplus-ban' opciót. Ezzel meghatározza, hogy a nyájból távozott állatok is törlődjenek a VitalControl eszközről a szinkronizálás során.
Jelölje be a 'Nem létezik a készletben' opciót is. Ezzel meghatározza, hogy a VitalControl-on lévő, de a `Herde` szoftver által nem ismert állatok törlődjenek a VitalControl-ról a szinkronizálás során.

## Konfiguráció: Technológia-specifikus beállítások

Ezután kattintson a `Technológia-specifikus beállítások` fülre, hogy meghatározza az adatcsere terjedelmét. Ajánlott az ott felsorolt összes jelölőnégyzetet bejelölni, kivéve a `Import fájl mentése feldolgozás után` jelölőnégyzetet. Ez utóbbi jelölőnégyzet diagnosztikai célokra szolgál, és csak akkor kell kiválasztani, ha a szervizszemélyzet kéri.

- **Maximális kor az átvitelhez**:  
  Ha itt `0` értéket ad meg, **minden állat** átkerül a VitalControl eszközre, életkoruktól függetlenül. A `0`-nál nagyobb érték meghatározza az átvitelre kerülő állatok maximális életkorát (napokban). Ha például **csak borjak** kerülnek át az eszközre, akkor itt 90 napos (= 3 hónap) maximális életkort kell megadni.

   ![Herde Software: Konfiguráció Adatcsere](../screenshots/technology-specific-settings.png "Adatcsere: specifikus beállítások").

## Adatcsere beállítások mentése

Nyomja meg a `Mentés (F2)` gombot, miután megfelelően beállította az összes konfigurációs paramétert. Az adatcsere paraméterkészlete a VitalControl eszközre most elmentésre került és használatra kész.  
Hajtsa végre a [adatcserét](../data-exchange/) most, hogy ellenőrizze, érvényesek-e a meghatározott beállítások, így sikeresen cserélhet adatokat a VitalControl eszközzel.
