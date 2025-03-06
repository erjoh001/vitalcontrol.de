---
title: "Nastavitev tehnologije VitalControl:"
linkTitle: Nastavitev
date: 2023-08-04T12:21:53+02:00
draft: false
description: >
  Določite parametre sinhronizacije za izmenjavo podatkov med programsko opremo *Herde* in napravo VitalControl.
weight: 10
categories: [DSP Herde]
translationKey: DSPherde/installation
---
Pred prvo [izmenjavo podatkov](../data-exchange/) je treba enkrat ustvariti in nastaviti tehnološko povezavo z napravo VitalControl.

{{% alert title="Pozor" %}}
Pred nastavitvijo tehnološke povezave preverite, ali je na vašem računalniku nameščena programska oprema 'VCSynchronizer'; ta programska oprema je obvezna za izmenjavo podatkov. Če želite to narediti, odprite meni Start v sistemu Windows in v seznamu aplikacij poiščite vnos z imenom 'Urban VitalControl'. Če takšnega vnosa ne najdete, [namestite](../../vcsynchronizer/installation/) programsko opremo `VCSynchronizer` na vaš računalnik.
{{% /alert %}}

Za nastavitev tehnologije sledite naslednjim korakom:

## Ustvarite nov nabor parametrov za izmenjavo podatkov z napravo VitalControl {#create-new-parameter-set-for-data-exchange-with-vitalcontrol-device}

1. V programski opremi `Herde` odprite okno `Nastavitve`. Glede na konfiguracijo vašega uporabniškega vmesnika lahko to okno odprete prek menijske postavke `Organizacija` v glavnem meniju (najvišja raven postavke _Nastavitve_), v stranskem meniju ali v vaši prilagojeni orodni vrstici (vodoravni ali navpični).

   ![Programska oprema Herde: klic menija nastavitev](../screenshots/settings.png "Herde: klic nastavitev")

1. Odpre se pojavno okno `Nastavitve`, v čigar levi stranski vrstici je navedenih veliko kategorij nastavitev. Odprite kategorijo `Storitev` <span style="font-size: 140%">➊</span> in izberite podkategorijo `Tehnologija` <span style="font-size: 140%">➋</span>.

1. V glavi desnega glavnega območja se zdaj prikaže spustni seznam, v katerem so navedeni vsi določeni tehnološki nabori parametrov. Število nastavljenih tehnologij je prikazano na desni strani. Kliknite na gumb ![Programska oprema Herde: Ustvarite nov tehnološki nabor parametrov](/icons/new.png "Herde: Ustvarite tehnološko povezavo") `Ustvarite nov tehnološki nabor parametrov` <span style="font-size: 140%">➌</span>.


   ![Software Herde: zaslonski posnetek nastavitev za tehnologijo](../screenshots/settings-technology.png "Herde: Nastavitve za tehnologijo")

1. Odpre se novo pojavno okno. Vnesite `VitalControl` kot **Ime povezave** in `Urban VitalControl (Gen 2)` kot **Vrsta tehnologije** in nato kliknite gumb `Sprejmi`.

   ![Software Herde: Ustvari nov nabor parametrov za napravo VitalControl](../screenshots/new-technology.png "Ustvari novo tehnologijo: VitalControl").

   Nabor parametrov za tehnologijo `VitalControl` je zdaj ustvarjen in ga je treba konfigurirati v naslednjih korakih.

## Konfiguracija: Osnovne nastavitve {#configuration-basic-settings}

Na začetku je izbran zavihek `Osnovne nastavitve` na prikazanem zaslonu, kot je prikazano na spodnji sliki. Prilagodite nastavitve v kategorijah `Zunanji program` <span style="font-size: 140%">➊</span>, `Podatki o živalih` <span style="font-size: 140%">➋</span>, `Lokacije` <span style="font-size: 140%">➌</span> in `Odhod` <span style="font-size: 140%">➍</span> glede na specifične pogoje vaše kmetije.

   ![Software Herde: Konfiguracija osnovnih nastavitev](../screenshots/basic-settings.png "Tehnologija VitalControl: Osnovne nastavitve").
   
### Kategorija `Zunanji program` <span style="font-size: 140%">➊</span> {#category-external-program-}

Za izvajanje izmenjave podatkov med VitalControl in Herde Plus je potreben osnovni program [VitalControl Synchronizer](../../vcsynchronizer) kot zunanji pomožni program. Za pravilno delovanje tega programa je treba narediti nekaj prilagoditev v kategoriji `Zunanji program` <span style="font-size: 140%">➊</span>.

- **Ime naprave za izmenjavo podatkov**:  
  Privzeto je to polje prazno. Vendar je priporočljivo, da tukaj vnesete ime vašega računalnika. To storite tako, da pritisnete ikono ![Herde Software: Ustvari novo povezavo tehnologije](/icons/arrow-down.png "Herde: Ustvari povezavo tehnologije") `Puščica dol` na desnem koncu spustnega polja. Ime vašega računalnika bo zdaj določeno in prikazano za izbiro v spustnem seznamu. Ko je polje izpolnjeno z imenom vašega računalnika in je ta nastavitev shranjena, se lahko izmenjava podatkov sproži samo iz vašega računalnika.

- **Izvedi v poti**:
  V to vnosno polje vnesite `%LOCALAPPDATA%\Urban\VitalControl\Synchronizer`. To je absolutna pot do programa `VitalControl Synchronizer` (ali natančneje do datoteke `vcsynchronizer.exe`). Če je bila ciljna mapa za ta program spremenjena med [namestitvijo VCSynchronizer](../../vcsynchronizer/installation), vnesite tukaj izbrano ciljno mapo.


- **Program HerdePlus 🡒 Technology**:  
  To vnosno polje je treba izpolniti z vrednostjo `vc_imp.bat`. Ustrezno poimenovana paketna datoteka določa zaporedje operacij med uvozom podatkov.

- **Technology 🡒 Program HerdePlus**:  
  To vnosno polje je treba izpolniti z vrednostjo `vc_exp.bat`. Ustrezno poimenovana paketna datoteka določa zaporedje operacij med izvozom podatkov.

### Kategorija `Podatki o živalih` <span style="font-size: 140%">➋</span> {#category-animal-data-}

Dodatne prilagoditve je treba narediti v kategoriji 'Podatki o živalih' <span style="font-size: 140%">➋</span>, da bo izmenjava podatkov popolnoma funkcionalna.

- **Številka živali**:  
  Ta nastavitev določa, katero ID številko prejmejo živali za prikaz na napravi VitalControl:
  - Če ste svojim živalim dodelili kratke ID številke (`Št. hleva`, 2 do 6 mest), morate tukaj izbrati vrednost 'Številka hleva': prikazana ID številka živali na napravi VitalControl bo nato ustrezala številki hleva, dodeljeni živali.
  - Če svojim živalim **niste** dodelili kratkih ID številk - to je na primer običajno v sektorju pitanih živali - morate tukaj izbrati vrednost `Št. oznake (5 mest)`. Prikazana ID številka živali na napravi VitalControl bo nato ustrezala zadnjim 5 mestom ID številke, natisnjene na rumeni ušesni oznaki živali.
  
<br>

- **Številka oddajnika**:  
  Ta nastavitev določa številko, ki se pričakuje za žival med RFID skeniranjem:  
  - Če svojim živalim nadenete ovratnico s transponderjem ali jim nadenete ušesni transponder - na primer za identifikacijo pri avtomatskem hranilniku -, morate tukaj izbrati vrednost 'Transponder'.
  - Če vaše živali ali teleta nosijo elektronske ušesne oznake, kodirane z uradno nacionalno 15-mestno identifikacijsko številko vaše živali, ki bo služila za identifikacijo živali skozi celotno življenje, morate tukaj izbrati vrednost 'Št. oznake (15 mest)`.

<br>

- **Minimalna starost za prenos**:  
  Če je kot vrednost za to vnosno polje vnesena `0`, bodo **vse živali** prenesene na napravo VitalControl, ne glede na njihovo starost. Vrednost večja od `0` določa minimalno starost (v dneh) za živali, ki bodo prenesene. Na primer, če naj bodo na napravo prenesene **samo krave**, je treba tukaj vnesti vrednost 600 dni (= 20 mesecev) kot minimalno starost.

### Kategorija `Lokacije` <span style="font-size: 140%">➌</span> {#category-locations-}

Uporabite to kategorijo za izključitev živali na določenih lokacijah iz prenosa podatkov na napravo. Če želite to narediti, odstranite kljukico iz lokacije (lokacij), za katere **ne želite**, da se živali, ki so tam nastanjene, prenesejo na napravo.

### Kategorija `Odhod` <span style="font-size: 140%">➍</span> {#category-leaving-}

Označite možnost 'Odhod v HERDEplus' tukaj. Na ta način določite, da se živali, ki so zapustile čredo, med sinhronizacijo izbrišejo tudi iz naprave VitalControl.
Označite tudi možnost 'Ne obstaja na zalogi'. Na ta način določite, da se živali na napravi VitalControl, ki niso znane programski opremi `Herde`, med sinhronizacijo izbrišejo iz naprave VitalControl.

## Konfiguracija: Tehnološko specifične nastavitve {#configuration-technology-specific-settings}

Nato kliknite na zavihek `Tehnološko specifične nastavitve`, da določite obseg izmenjave podatkov. Priporočljivo je, da označite vse kljukice, ki so tam navedene, razen kljukice `Shrani uvoženo datoteko po obdelavi`. Slednja kljukica je namenjena diagnostičnim namenom in jo je treba izbrati le, če to zahteva servisno osebje.

- **Največja starost za prenos**:  
  Če je tukaj vnesena vrednost `0`, bodo na napravo VitalControl prenesene **vse živali**, ne glede na njihovo starost. Vrednost, večja od `0`, določa največjo starost (v dneh) za živali, ki bodo prenesene. Če naj se na primer na napravo prenesejo **samo teleta**, je treba tukaj vnesti vrednost 90 dni (= 3 mesece) kot največjo starost.

   ![Herde Software: Konfiguracija izmenjave podatkov](../screenshots/technology-specific-settings.png "Izmenjava podatkov: specifične nastavitve").

## Shranjevanje nastavitev izmenjave podatkov {#save-data-exchange-settings}

Pritisnite tipko `Shrani (F2)` po tem, ko ste ustrezno konfigurirali vse parametre konfiguracije. Nabor parametrov za izmenjavo podatkov na napravo VitalControl je zdaj shranjen in pripravljen za uporabo.  
Zdaj izvedite [izmenjavo podatkov](../data-exchange/), da preverite, ali so določene nastavitve veljavne, tako da lahko uspešno izmenjujete podatke na in iz naprave VitalControl.


