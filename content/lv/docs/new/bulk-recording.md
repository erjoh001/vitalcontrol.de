---
title: "Masveida reģistrācija iegādāto dzīvnieku grupai"
linkTitle: "Masveida ierakstīšana"
date: 2023-07-28T13:25:28+02:00
weight: 15
draft: false
slug: bulk-recording
description: >
  Izmantojiet svītrkodu skeneri, lai reģistrētu dažādus dzīvniekus.
categories: [Masveida ierakstīšana]
tags: [Masveida ierakstīšana]
translationKey: new/bulk-recording
---
## Masveida ierakstīšana {#bulk-recording}

Ar masveida reģistrācijas palīdzību jūs varat ātri reģistrēt lielu skaitu dzīvnieku un saglabāt tos savā ierīcē. Izmantojiet svītrkodu skeneri, lai skenētu ausu birku numurus un dzimšanas datumu liellopu pasēs. Dzīvnieks tiek automātiski saglabāts, un jūs varat uzreiz skenēt nākamo pasi. Lai veiktu dzīvnieku masveida reģistrāciju, rīkojieties šādi:

1. Pievienojiet svītrkodu skeneri VitalControl, izmantojot kabeli.

2. Jūsu VitalControl ierīces galvenajā ekrānā izvēlieties izvēlnes vienumu <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="Jauns dzīvnieks" /> `{{<T "New" >}}` un nospiediet `{{<T "Ok" >}}` pogu.

3. Atveras apakšizvēlne. Izmantojiet bultiņu taustiņus ◁ ▷ △ ▽, lai izvēlētos izvēlnes vienumu <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Masveida ierakstīšana" /> `{{<T "BulkRecording" >}}` un apstipriniet ar `{{<T "Ok" >}}`.

4. Atveras cita apakšizvēlne, kurā ir viens lauks dzīvnieka ausu birkas numuram un otrs lauks dzīvnieka dzimšanas datumam. Vispirms skenējiet ausu birkas numura svītrkodu. Lauka robeža mainās no sarkanas uz zaļu. Pēc tam skenējiet dzimšanas datumu. Robeža īslaicīgi kļūst zaļa, pirms abas robežas atkal kļūst sarkanas. Skaitītājs zem pases simbola <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Dzīvnieku pases" title="Dzīvnieku pases" /> ekrāna augšdaļā palielinās no 0 līdz 1. Pirmais dzīvnieks ir saglabāts. Turpiniet un skenējiet citas liellopu pases. Pēc katras skenētās pases skaitītājs zem pases simbola <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Dzīvnieku pases" title="Dzīvnieku pases" /> palielinās par vienu. Skaitītājs zem ganāmpulka simbola <img src="/icons/header/group.svg" width="35" align="bottom" alt="Dzīvnieku grupa" title="Dzīvnieku grupa" /> arī palielinās par vienu. 

{{% alert title="Padoms" %}}
Skaitītājs zem pases simbola <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Dzīvnieku pases" title="Dzīvnieku pases" /> parāda, cik daudz reižu esat skenējis pases vienā reizē, neizejot no `{{<T "BulkRecording" >}}` ekrāna. Skaitītājs zem ganāmpulka simbola <img src="/icons/header/group.svg" width="35" align="bottom" alt="Jauns dzīvnieks" /> parāda, cik kopā esat skenējis pases. Šis skaitītājs neatgriežas uz nulli, ja izejat no `{{<T "BulkRecording" >}}` ekrāna. Skaitlis atbilst jūsu ierakstiem izvēlnes vienumā ['Iepirkumi'](../new-on-farm/purchased-animals/).
{{% /alert %}}

![VitalControl: Izvēlne 'Jauns - Masveida ierakstīšana'](../images/bulk-recording.png "Masveida ierakstīšana")

{{% alert title="Padoms" %}}
Jums ir papildu iestatījumu iespējas izvēlnes vienumā `{{<T "BulkRecording" >}}`. Tās ir izskaidrotas zemāk. Kā sagatavošanās soļus vienmēr vispirms piekļūstiet izvēlnes vienumam `{{<T "BulkRecording" >}}` un pēc tam turpiniet saskaņā ar instrukcijām.
{{% /alert %}}

{{% alert title="Padoms" %}}
Skenēšanas procesā var parādīties kļūdu ziņojumi. Šajā gadījumā svītrkodu skeneris izdos skaņu un turpmāka skenēšana nebūs iespējama. Apstipriniet atbilstošo kļūdas ziņojumu uz VitalControl displeja un turpiniet skenēšanu.
{{% /alert %}}

### Dzimšanas datums obligāts {#birth-date-mandatory}

Ar šo iestatījumu opciju jūs varat noteikt, vai dzimšanas datums ir jānorāda, veidojot dzīvniekus. Ja deaktivizējat šo opciju, jums tikai jānoskenē svītrkods, lai saglabātu dzīvnieku. Tomēr šiem dzīvniekiem kā dzimšanas datums tiks saglabāts pašreizējais datums! Šī funkcija ir iespējota pēc noklusējuma. Lai to deaktivizētu, rīkojieties šādi:

1. Izmantojiet <img src="/icons/gear.svg" width="25" align="bottom" alt="Iestatījumu izvēlne" /> `Ieslēgt/Izslēgt` pogu, lai atvērtu iestatījumu izvēlni.

2. Izmantojiet bultiņu taustiņus △ ▽, lai izvēlētos iestatījumu opciju `{{<T "BirthDateMandatory" >}}` un apstipriniet ar `{{<T "Ok" >}}`.

3. Dzeltens aplis simbolizē, ka funkcija ir aktivizēta. Pelēks aplis simbolizē, ka funkcija ir deaktivizēta.

4. Saglabājiet iestatījumus un izmantojiet taustiņu `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Saglabāt un atgriezties" /> lai atgrieztos izvēlnes vienumā <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Masveida ierakstīšana" />&nbsp; `{{<T "BulkRecording" >}}`.

   ![VitalControl: Izvēlne Jauns Dzimšanas datums obligāts](../images/birthdate.png "Dzimšanas datums obligāts")

### Noklusējuma vērtības {#default-values}

Izvēlnē `{{<T "DefaultValues" >}}` jūs iestatāt standartus, kas attiecas uz katru dzīvnieku, ko izveidojat. Izveides process ar svītrkodu skeneri paliek nemainīgs, kā aprakstīts iepriekš. Jums ir iespēja iestatīt lopu veidu, dzimumu, šķirni un atrašanās vietu. Lai iestatītu `{{<T "DefaultValues" >}}`, rīkojieties šādi:

1. Izmantojiet <img src="/icons/gear.svg" width="25" align="bottom" alt="Iestatījumu izvēlne" /> `On/Off` pogu, lai atvērtu iestatījumu izvēlni.

2. Izmantojiet bultiņu taustiņus △ ▽, lai atlasītu izvēlnes vienumu `{{<T "DefaultValues" >}}` un apstipriniet ar `{{<T "Ok" >}}`.

3. Atveras apakšizvēlne ar dažādām iestatījumu iespējām. Izmantojiet bultiņu taustiņus △ ▽, lai atlasītu vēlamo iestatījumu iespēju. Izmantojiet bultiņu taustiņus ◁ ▷, lai atlasītu vēlamo iestatījumu.

4. Saglabājiet iestatījumus un izmantojiet taustiņu `F1`&nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Saglabāt un atgriezties" /> lai atgrieztos izvēlnes vienumā <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Masveida ierakstīšana" />&nbsp; `{{<T "BulkRecording" >}}` .

   ![VitalControl: Izvēlne Jaunas Noklusējuma vērtības](../images/defaultvalues.png "Noklusējuma vērtības")

### Ierakstītās vērtības {#recorded-values}

Izvēlnē `{{<T "RecordedValues" >}}` jūs varat norādīt, kuras vērtības jāuzņem papildus ausu birkas numuram un dzimšanas datumam. Jūs varat izvēlēties starp `{{<T "Breed" >}}`, `{{<T "Sex" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "CurrentWeight" >}}`, `{{<T "BirthWeight" >}}` un `{{<T "TypeAnimal" >}}`. Tiklīdz jūs iestatāt vismaz vienu vērtību, process mainās skenēšanas laikā. Vispirms noskenējiet ausu birkas numuru un dzimšanas datumu. Tad izmantojiet virziena taustiņus △ ▽, lai atlasītu iestatāmās vērtības un iestatītu vērtības. Tad saglabājiet savus ierakstus ar taustiņu `F3`. Tikai tad dzīvnieks tiek izveidots! Lai iestatītu ierakstāmās vērtības, rīkojieties šādi:

1. Izmantojiet <img src="/icons/gear.svg" width="25" align="bottom" alt="Iestatījumu izvēlne" /> `On/Off` pogu, lai atvērtu iestatījumu izvēlni.

2. Izmantojiet bulttaustiņus △ ▽, lai izvēlētos izvēlnes vienumu `{{<T "RecordedValues" >}}` un apstipriniet ar `{{<T "Ok" >}}`.

3. Izvēlieties vēlamo vērtību, kuru ierakstīt, izmantojot bulttaustiņus △ ▽, un apstipriniet ar `{{<T "Ok" >}}`. Parādās dzeltens aplis. Ja vēlaties deaktivizēt vērtību, kuru ierakstīt, apstipriniet vēlreiz ar `{{<T "Ok" >}}`. Dzeltens aplis pazūd.

4. Saglabājiet iestatījumus un izmantojiet `F1` taustiņu &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Saglabāt un atgriezties" /> lai atgrieztos izvēlnes vienumā <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Masveida ierakstīšana" />&nbsp; `{{<T "BulkRecording" >}}`.

5. Ja vēlaties atkal deaktivizēt visas vērtības, kuras ierakstīt, izvēlieties iestatījumu opciju `{{<T "EnableAllResetOrder" >}}` izvēlnes vienumā `{{<T "RecordedValues" >}}` un apstipriniet ar `{{<T "Ok" >}}`.

   ![VitalControl: Izvēlne Jaunas ieraksta vērtības](../images/recordvalues.png "Ieraksta vērtības")
