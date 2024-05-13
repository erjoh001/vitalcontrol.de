---
title: "Tehnoloogia VitalControl seadistamine:"
linkTitle: Seadistamine
date: 2023-08-04T12:21:53+02:00
draft: false
description: >
  Määrake andmevahetuse sünkroniseerimisparameetrid tarkvara *Herde* ja seadme VitalControl vahel.
weight: 10
categories: [DSP Herde]
translationKey: DSPherde/installation
---
Enne esimest [andmevahetust](../data-exchange/), tuleb tehnoloogia ühendus VitalControl seadmega luua ja seadistada.

{{% alert title="Tähelepanu" %}}
Enne tehnoloogia ühenduse seadistamist kontrollige, kas teie arvutisse on installitud 'VCSynchronizer' tarkvara; see tarkvara on andmevahetuseks hädavajalik. Selleks avage Windowsi Start-menüü ja otsige oma rakenduste loendist kirjet nimega 'Urban VitalControl'. Kui te sellist kirjet ei leia, [installige](../../vcsynchronizer/installation/) tarkvara `VCSynchronizer` oma arvutisse.
{{% /alert %}}

Tehnoloogia seadistamiseks toimige järgmiselt:

## Loo uus parameetrite komplekt andmevahetuseks VitalControl seadmega

1. Tarkvaras `Herde` avage `Seaded` aken. Sõltuvalt teie kasutajaliidese konfiguratsioonist saate selle akna avada peamenüüst (ülataseme üksus _Seaded_), külgribamenüüst või oma kohandatud tööriistakastist (horisontaalne või vertikaalne).

   ![Tarkvara Herde: seadete menüü kutsumine](../screenshots/settings.png "Herde: kutsu Seaded")

1. Avaneb hüpikaken `Seaded`, mille vasakus külgribas on loetletud arvukalt seadistuskategooriaid. Avage kategooria `Service` ➊ ja valige alamkategooria `Tehnoloogia` ➋.

1. Parempoolses põhialas ilmub nüüd rippmenüü, kus on loetletud kõik määratletud tehnoloogiaparameetrite komplektid. Seadistatud tehnoloogiate arv kuvatakse paremal. Klõpsake nupul ![Tarkvara Herde: loo uus tehnoloogiaparameetrite komplekt](/icons/new.png "Herde: Loo Tehnoloogia Ühendus") `Loo uus tehnoloogiaparameetrite komplekt` ➌.

   ![Tarkvara Herde: tehnoloogia seadete ekraan](../screenshots/settings-technology.png "Herde: Tehnoloogia Seaded")

1. Avaneb veel üks hüpikaken. Sisesta **Ühenduse nimi** kui `VitalControl` ja **Tehnoloogia tüüp** kui `Urban VitalControl (Gen 2)` ning seejärel klõpsa nuppu `Nõustu`.

   ![Tarkvara Herde: Loo uus parameetrite komplekt VitalControl seadmele](../screenshots/new-technology.png "Loo uus tehnoloogia: VitalControl").

   Parameetrite komplekt tehnoloogiale `VitalControl` on nüüd loodud ja tuleb järgmistes sammudes seadistada.

## Seadistamine: Põhiseaded

Algselt on ekraanil valitud vaheleht `Põhiseaded`, nagu allpool toodud joonisel näha. Tee seal kategooriates `Väline programm` ➊, `Looma andmed` ➋, `Asukohad` ➌ ja `Lahkumine` ➍ oma farmi-spetsiifilised kohandused.

   ![Tarkvara Herde: Põhiseadete konfigureerimine](../screenshots/basic-settings.png "Tehnoloogia VitalControl: Põhiseaded").
   
### Kategooria `Väline programm` ➊

Andmevahetuse teostamiseks VitalControli ja Herde Plus vahel on vajalik väline abiprogramm [VitalControl Sünkroniseerija](../../vcsynchronizer). Selle programmi õigeks toimimiseks tuleb teha mõned kohandused kategoorias `Väline programm` ➊.

- **Seadme nimi andmevahetuseks**:  
  Vaikimisi on see väli tühi. Siiski on soovitatav siia sisestada oma arvuti nimi. Selleks vajuta ikoonil ![Herde tarkvara: Loo uus tehnoloogia sidumine](/icons/arrow-down.png "Herde: Loo tehnoloogia sidumine") `Nool alla` rippmenüü välja paremas otsas. Nüüd määratakse ja kuvatakse teie arvuti nimi valikus rippmenüüs. Kui väli on täidetud teie arvuti nimega ja see seadistus on salvestatud, saab andmevahetust edaspidi käivitada ainult teie arvutist.

- **Käivita teekonnas**:
  Palun sisesta sellesse sisendvälja `%LOCALAPPDATA%\Urban\VitalControl\Synchronizer`. See on absoluutne tee programmini `VitalControl Synchronizer` (või täpsemalt failini `vcsynchronizer.exe`). Kui selle programmi sihtkataloog on [VCSynchronizeri installimisel](../../vcsynchronizer/installation) muudetud, sisesta siia valitud sihtkataloog.

- **Programm HerdePlus 🡒 Tehnoloogia**:  
  Selle sisestusvälja tuleb täita väärtusega `vc_imp.bat`. Vastavalt nimetatud partii fail määrab andmete importimise toimingute järjestuse.

- **Tehnoloogia 🡒 Programm HerdePlus**:  
  Selle sisestusvälja tuleb täita väärtusega `vc_exp.bat`. Vastavalt nimetatud partii fail määrab andmete eksportimise toimingute järjestuse.

### Kategooria `Loomade andmed` ➋

Kategoorias 'Loomade andmed' ➋ tuleb teha täiendavaid kohandusi, et andmevahetus toimiks täielikult.

- **Looma number**:  
  See seadistus määrab, millise ID loomad saavad VitalControl seadmel kuvamiseks:
  - Kui olete oma loomadele määranud lühikesed ID-d (`Lauda nr.`, 2 kuni 6 numbrit), peaksite siin valima väärtuse 'Lauda number': looma kuvatav ID VitalControl seadmel vastab siis loomale määratud lauda numbrile.
  - Kui te **ei ole** oma loomadele määranud lühikesi ID-numbreid - see on tavaline näiteks nuumsektoris -, siis peaksite siin valima väärtuse `Sildi nr. (5 numbrit)`. VitalControl seadmel kuvatav looma ID vastab siis looma kollase kõrvamärgi peale trükitud ID viimasele 5 numbrile.
  
<br>

- **Saateja nr.**:  
  See seadistus määrab, millist numbrit oodatakse loomalt RFID-skaneerimisel:  
  - Kui panete oma loomadele kaelarihma transponderiga või kõrvatransponderi - näiteks tuvastamiseks automaatsöötjas -, peaksite siin valima väärtuse 'Transponder'.
  - Kui teie loomad või vasikad kannavad elektroonilisi kõrvamärke, mis on kodeeritud ametliku riikliku 15-kohalise identifitseerimisnumbriga, mis kehtib looma kogu eluaja jooksul, peaksite siin valima väärtuse 'Sildi nr. (15 numbrit)`.

<br>

- **Minimaalne vanus ülekandmiseks**:  
  Kui selle sisestusvälja väärtuseks on sisestatud `0`, siis **kõik loomad** kantakse üle VitalControl seadmele, olenemata nende vanusest. Väärtus suurem kui `0` määrab loomade ülekandmiseks minimaalse vanuse (päevades). Näiteks, kui **ainult lehmad** tuleb seadmele üle kanda, tuleb siin minimaalse vanusena sisestada 600 päeva (= 20 kuud).

### Kategooria `Asukohad` ➌

Kasutage seda kategooriat, et välistada teatud asukohtades olevad loomad andmeedastusest seadmesse. Selleks eemaldage linnuke asukohta(de)st, kus te **ei soovi** seal paiknevaid loomi seadmesse üle kanda.

### Kategooria `Lahkumine` ➍

Märkige siin valik 'Lahkub HERDEplus'is'. Nii määrate, et karjast lahkunud loomad kustutatakse ka VitalControl seadmest sünkroniseerimise ajal.
Märkige ka valik 'Ei eksisteeri laos'. Nii määrate, et VitalControlis olevad, kuid `Herde` tarkvarale tundmatud loomad kustutatakse VitalControlist sünkroniseerimise käigus.

## Seadistus: Tehnoloogiaspetsiifilised seaded

Järgmisena klõpsake vahekaardil `Tehnoloogiaspetsiifilised seaded`, et määrata andmevahetuse ulatus. On soovitatav märkida kõik seal loetletud märkeruudud, välja arvatud märkeruut `Salvesta importfail pärast töötlemist`. Viimane märkeruut on mõeldud diagnostilistel eesmärkidel ja tuleks valida ainult teeninduspersonalilt nõutud korral.

- **Maksimaalne vanus ülekandmiseks**:  
  Kui siia sisestatakse väärtus `0`, siis **kõik loomad** kantakse üle VitalControl seadmesse, olenemata nende vanusest. Väärtus suurem kui `0` määrab loomade maksimaalse vanuse (päevades), mis üle kantakse. Kui näiteks tuleb üle kanda **ainult vasikad**, tuleb siia maksimaalse vanusena sisestada 90 päeva (= 3 kuud).

   ![Herde tarkvara: Seadistus Andmevahetus](../screenshots/technology-specific-settings.png "Andmevahetus: spetsiifilised seaded").

## Salvesta andmevahetuse seaded

Vajutage `Salvesta (F2)` klahvi pärast kõigi konfiguratsiooniparameetrite sobivaks seadistamist. Andmevahetuse parameetrite komplekt VitalControl seadme jaoks on nüüd salvestatud ja kasutusvalmis.  
Tehke nüüd [andmevahetus](../data-exchange/), et kontrollida, kas kehtestatud seaded on kehtivad, nii et saate edukalt andmeid VitalControl seadmega vahetada.
