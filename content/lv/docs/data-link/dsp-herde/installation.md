---
title: "Tehnoloģijas VitalControl iestatīšana:"
linkTitle: Iestatīšana
date: 2023-08-04T12:21:53+02:00
draft: false
description: >
  Definējiet sinhronizācijas parametrus datu apmaiņai starp programmatūru *Herde* un ierīci VitalControl.
weight: 10
categories: [DSP Herde]
translationKey: DSPherde/installation
---
Pirms pirmās [datu apmaiņas](../data-exchange/), tehnoloģijas savienojums ar ierīci VitalControl ir jāizveido un jāiestata vienreiz.

{{% alert title="Uzmanību" %}}
Pirms tehnoloģijas savienojuma iestatīšanas pārbaudiet, vai jūsu datorā ir instalēta programmatūra 'VCSynchronizer'; šī programmatūra ir obligāta datu apmaiņai. Lai to izdarītu, atveriet Windows sākuma izvēlni un meklējiet savu lietojumprogrammu sarakstā ierakstu ar nosaukumu 'Urban VitalControl'. Ja šādu ierakstu nevarat atrast, [instalējiet](../../vcsynchronizer/installation/) `VCSynchronizer` programmatūru savā datorā.
{{% /alert %}}

Lai iestatītu tehnoloģiju, rīkojieties šādi:

## Izveidot jaunu parametru kopu datu apmaiņai ar VitalControl ierīci {#create-new-parameter-set-for-data-exchange-with-vitalcontrol-device}

1. Programmatūrā `Herde` atveriet logu `Iestatījumi`. Atkarībā no jūsu lietotāja saskarnes konfigurācijas, šo logu varat atvērt, izmantojot izvēlnes vienumu `Organizācija` galvenajā izvēlnē (augstākā līmeņa vienums _Iestatījumi_), sānu izvēlnē vai jūsu pielāgotajā rīkjoslā (horizontālā vai vertikālā).

   ![Programmatūra Herde: iestatījumu izvēlnes izsaukšana](../screenshots/settings.png "Herde: izsaukt Iestatījumus")

1. Tiek atvērts uznirstošais logs `Iestatījumi`, kura kreisajā sānjoslā ir uzskaitītas daudzas iestatījumu kategorijas. Atveriet kategoriju `Serviss` <span style="font-size: 140%">➊</span> un izvēlieties apakškategoriju `Tehnoloģija` <span style="font-size: 140%">➋</span>.

1. Labās puses galvenās zonas galvenē tagad parādās nolaižamā izvēlne, kurā ir uzskaitītas visas definētās tehnoloģijas parametru kopas. Uzstādīto tehnoloģiju skaits ir parādīts pa labi. Noklikšķiniet uz pogas ![Programmatūra Herde: Izveidot jaunu tehnoloģijas parametru kopu](/icons/new.png "Herde: Izveidot Tehnoloģijas Savienojumu") `Izveidot jaunu tehnoloģijas parametru kopu` <span style="font-size: 140%">➌</span>.

![Programmatūra Herde: tehnoloģijas iestatījumu ekrāns](../screenshots/settings-technology.png "Herde: Tehnoloģijas iestatījumi")

1. Atveras vēl viens uznirstošais logs. Ievadiet `VitalControl` kā **Savienojuma nosaukumu** un `Urban VitalControl (Gen 2)` kā **Tehnoloģijas veidu** un pēc tam noklikšķiniet uz pogas `Apstiprināt`.

   ![Programmatūra Herde: Izveidot jaunu parametru kopu VitalControl ierīcei](../screenshots/new-technology.png "Izveidot jaunu tehnoloģiju: VitalControl").

   Tehnoloģijas `VitalControl` parametru kopa tagad ir izveidota un jākonfigurē nākamajos soļos.

## Konfigurācija: Pamatuzstādījumi {#configuration-basic-settings}

Sākotnēji tiek atlasīta cilne `Pamatuzstādījumi` parādītajā ekrānā, kā parādīts zemāk esošajā attēlā. Veiciet tur pielāgojumus kategorijās `Ārējā programma` <span style="font-size: 140%">➊</span>, `Dzīvnieku dati` <span style="font-size: 140%">➋</span>, `Atrašanās vietas` <span style="font-size: 140%">➌</span> un `Iziešana` <span style="font-size: 140%">➍</span> atbilstoši jūsu saimniecības specifiskajiem nosacījumiem.

![Programmatūra Herde: Pamatuzstādījumu konfigurācija](../screenshots/basic-settings.png "Tehnoloģija VitalControl: Pamatuzstādījumi").

### Kategorija `Ārējā programma` <span style="font-size: 140%">➊</span> {#category-external-program-}

Lai veiktu datu apmaiņu starp VitalControl un Herde Plus, ir nepieciešama pamata programmatūra [VitalControl Synchronizer](../../vcsynchronizer) kā ārējā palīgprogramma. Lai šī programma darbotos pareizi, ir jāveic daži pielāgojumi kategorijā `Ārējā programma` <span style="font-size: 140%">➊</span>.

- **Ierīces nosaukums datu apmaiņai**:  
  Pēc noklusējuma šis lauks ir tukšs. Tomēr ieteicams šeit ievadīt jūsu datora nosaukumu. Lai to izdarītu, nospiediet ikonu ![Herde Programmatūra: Izveidot jaunu tehnoloģijas savienojumu](/icons/arrow-down.png "Herde: Izveidot tehnoloģijas savienojumu") `Lejupejošā bulta` nolaižamā lauka labajā galā. Jūsu datora nosaukums tagad tiks noteikts un parādīts izvēlei nolaižamajā sarakstā. Kad lauks ir aizpildīts ar jūsu datora nosaukumu un šis iestatījums ir saglabāts, datu apmaiņu varēs veikt tikai no jūsu datora.

- **Izpildīt ceļā**:  
  Lūdzu, ievadiet `%LOCALAPPDATA%\Urban\VitalControl\Synchronizer` šajā ievades laukā. Šis ir absolūtais ceļš uz programmu `VitalControl Synchronizer` (vai precīzāk uz failu `vcsynchronizer.exe`). Ja šīs programmas mērķa direktorija tika mainīta [VCSynchronizer instalācijas laikā](../../vcsynchronizer/installation), lūdzu, ievadiet šeit izvēlēto mērķa direktoriju.

- **Programma HerdePlus 🡒 Tehnoloģija**:  
  Šis ievades lauks jāaizpilda ar vērtību `vc_imp.bat`. Atbilstoši nosauktais partijas fails nosaka darbību secību datu importēšanas laikā.

- **Tehnoloģija 🡒 Programma HerdePlus**:  
  Šis ievades lauks jāaizpilda ar vērtību `vc_exp.bat`. Atbilstoši nosauktais partijas fails nosaka darbību secību datu eksportēšanas laikā.

### Kategorija `Dzīvnieku dati` <span style="font-size: 140%">➋</span> {#category-animal-data-}

Papildu pielāgojumi jāveic kategorijā 'Dzīvnieku dati' <span style="font-size: 140%">➋</span>, lai datu apmaiņa pilnībā darbotos.

- **Dzīvnieka numurs**:  
  Šis iestatījums nosaka, kādu ID dzīvnieki saņem attēlošanai uz VitalControl ierīces:
  - Ja esat piešķīris īsos ID (`Kūts nr.`, 2 līdz 6 cipari) saviem dzīvniekiem, jums šeit jāizvēlas vērtība 'Kūts numurs': dzīvnieka attēlotais ID uz VitalControl atbildīs dzīvniekam piešķirtajam kūts numuram.
  - Ja jūs **ne**esat piešķīris īsos ID numurus saviem dzīvniekiem - tas ir izplatīts nobarošanas sektorā, piemēram, - tad jums šeit jāizvēlas vērtība `Auskara nr. (5 cipari)`. Dzīvnieka attēlotais ID uz VitalControl ierīces atbildīs pēdējiem 5 cipariem no ID, kas uzdrukāts uz dzīvnieka dzeltenās auskaru birkas.
  
<br>

- **Raidītāja nr.**:  
  Šis iestatījums nosaka numuru, kas tiek sagaidīts dzīvniekam RFID skenēšanas laikā:  
  - Ja jūs uzliekat saviem dzīvniekiem apkakli ar transponderu vai uzliekat ausu transponderu - piemēram, identifikācijai pie automātiskās barotavas -, jums šeit jāizvēlas vērtība 'Transponders'.
  - Ja jūsu dzīvnieki vai teļi nēsā elektroniskās auskaru birkas, kas kodētas ar oficiālo nacionālo 15 ciparu dzīvnieka identifikācijas numuru, kas kalpos dzīvnieka identifikācijai visā tā dzīves laikā, jums šeit jāizvēlas vērtība 'Auskara nr. (15 cipari)`.


<br>

- **Minimālais vecums pārsūtīšanai**:  
  Ja šajā ievades laukā tiek ievadīta vērtība `0`, **visi dzīvnieki** tiks pārsūtīti uz VitalControl ierīci, neatkarīgi no to vecuma. Vērtība, kas ir lielāka par `0`, nosaka minimālo vecumu (dienās), lai dzīvnieki tiktu pārsūtīti. Piemēram, ja uz ierīci jāpārsūta **tikai govis**, šeit kā minimālais vecums jāievada 600 dienas (= 20 mēneši).

### Kategorija `Atrašanās vietas` <span style="font-size: 140%">➌</span> {#category-locations-}

Izmantojiet šo kategoriju, lai izslēgtu dzīvniekus noteiktās atrašanās vietās no datu pārsūtīšanas uz ierīci. Lai to izdarītu, noņemiet atzīmi no atrašanās vietām, kurām **nevēlaties** pārsūtīt tur izvietotos dzīvniekus uz ierīci.

### Kategorija `Aiziešana` <span style="font-size: 140%">➍</span> {#category-leaving-}

Atzīmējiet opciju 'Aiziešana HERDEplus'. Tādā veidā jūs norādāt, ka dzīvnieki, kas pametuši ganāmpulku, tiek arī dzēsti no VitalControl ierīces sinhronizācijas laikā.
Arī atzīmējiet opciju 'Neeksistē krājumā'. Tādā veidā jūs norādāt, ka dzīvnieki uz VitalControl, kas nav zināmi `Herde` programmatūrai, tiek dzēsti no VitalControl sinhronizācijas laikā.

## Konfigurācija: Tehnoloģijai specifiski iestatījumi {#configuration-technology-specific-settings}

Nākamais solis ir noklikšķināt uz cilnes `Tehnoloģijai specifiski iestatījumi`, lai noteiktu datu apmaiņas apjomu. Ieteicams pārbaudīt visas tur uzskaitītās izvēles rūtiņas, izņemot izvēles rūtiņu `Saglabāt importēšanas failu pēc apstrādes`. Pēdējā izvēles rūtiņa ir paredzēta diagnostikas nolūkiem un jāizvēlas tikai pēc servisa personāla pieprasījuma.

- **Maksimālais vecums pārsūtīšanai**:  
  Ja šeit tiek ievadīta vērtība `0`, **visi dzīvnieki** tiks pārsūtīti uz VitalControl ierīci, neatkarīgi no to vecuma. Vērtība, kas ir lielāka par `0`, nosaka maksimālo vecumu (dienās), lai dzīvnieki tiktu pārsūtīti. Ja, piemēram, uz ierīci jāpārsūta **tikai teļi**, šeit kā maksimālais vecums jāievada 90 dienas (= 3 mēneši).

   ![Herde Software: Konfigurācijas Datu apmaiņa](../screenshots/technology-specific-settings.png "Datu apmaiņa: specifiski iestatījumi").

## Saglabāt datu apmaiņas iestatījumus {#save-data-exchange-settings}

Nospiediet taustiņu `Saglabāt (F2)` pēc tam, kad esat atbilstoši konfigurējis visus konfigurācijas parametrus. Parametru kopa datu apmaiņai ar VitalControl ierīci tagad ir saglabāta un gatava lietošanai.  
Veiciet [datu apmaiņu](../data-exchange/) tagad, lai pārbaudītu, vai noteiktie iestatījumi ir derīgi, lai jūs veiksmīgi varētu apmainīties ar datiem uz un no VitalControl ierīces.
