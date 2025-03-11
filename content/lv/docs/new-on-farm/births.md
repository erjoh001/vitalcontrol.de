---
title: "Dzimšanas"
linkTitle: "Dzimšanas"
weight: 35
date: 2023-07-28T13:25:28+02:00
draft: false
slug: births
description: >
  Šeit jūs varat apskatīt savas dzimšanas un izveidot eksporta failu.
categories: [Dzimšanas]
tags: [Dzimšanas]
translationKey: new-on-farm/births
---
## Dzimšanas {#births}

Šajā sarakstā jūs varat apskatīt savas dzimšanas, rediģēt tās un izveidot eksporta failu reģistrācijai HI-Tier. Lai izveidotu eksporta failu, rīkojieties šādi:

{{% alert title="Padoms" %}}
Lai eksportētu datus, jums ir nepieciešams iekļautais UBS zibatmiņas disks. Pievienojiet USB zibatmiņas disku ar USB-C adapteri jūsu VitalControl ierīcei pirms instrukciju izpildes.
{{% /alert %}}

1. Jūsu VitalControl ierīces galvenajā ekrānā izvēlieties izvēlnes vienumu <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Jauns fermā" /> `{{<T "NewOnFarm" >}}` un nospiediet `{{<T "Ok" >}}` pogu.

2. Atveras apakšizvēlne, kurā varat izvēlēties starp <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Jauns fermā, bez transpondera" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Iegādātie dzīvnieki" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Nav nacionālā dzīvnieka ID" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Dzimšanas" /> `{{<T "Births" >}}` un <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Nav piešķirts transponders" /> `{{<T "NoTransponderAssigned" >}}`. Izmantojiet bulttaustiņus ◁ ▷ △ ▽, lai izvēlētos izvēlnes vienumu <img src="/icons/main/births.svg" width="40" align="bottom" alt="Dzimšanas" /> `{{<T "Births" >}}` un apstipriniet ar `{{<T "Ok" >}}`.

3. Atveras saraksts ar visām jūsu dzimšanām.

4. Izmantojiet `F3` taustiņu `{{<T "ExportListBirths" >}}`. Atveras apakšizvēlne.

5. Izmantojiet bulttaustiņus △ ▽, lai izvēlētos izvēlnes vienumu `{{<T "ExportListBirths" >}}` un apstipriniet ar `{{<T "Ok" >}}`.

6. Saraksts tagad ir saglabāts kā CSV fails jūsu USB zibatmiņas diskā. Visi dzīvnieki no `{{<T "Births" >}}` saraksta tiek dzēsti.

![VitalControl: Menu New on farm Births](../images/births.png "Births")

## Iestatījumu opcijas {#setting-options}

Papildus eksporta faila izveidei jums ir šādas iespējas:

- [Pārslēgties](#change-between-list-view-and-single-animal-view) starp saraksta skatu un viena dzīvnieka skatu
- [Notīrīt visus dzimšanas paziņojumus](../purchased-animals/#clear-all-purchase-notices)
- [Dzēst dzīvnieku + paziņojumus](../purchased-animals/#delete-animal--purchase-notice)
- [Notīrīt dzimšanas paziņojumu](../purchased-animals/#clear-notice-of-purchase)
- [Rediģēt](#edit-data-of-birth-notice) paziņojumu

{{% alert title="Padoms" %}}
Dažas darbības ir identiskas darbībām `{{<T "PurchasedAnimals" >}}` sarakstā. Sekojiet saitēm uz soli pa solim instrukcijām. Vienmēr vispirms atveriet `{{<T "Births" >}}` sarakstu, kā aprakstīts iepriekšējās instrukcijās.
{{% /alert %}}

### Pārslēgties starp saraksta skatu un viena dzīvnieka skatu {#change-between-list-view-and-single-animal-view}

1. Izmantojiet <img src="/icons/gear.svg" width="25" align="bottom" alt="Gear" /> `On /Off` pogu.

2. Izmantojiet bulttaustiņus ◁ ▷, lai izvēlētos starp `{{<T "ListView" >}}` un `{{<T "SingleAnimalView" >}}`.

3. Saglabājiet savu iestatījumu ar `F1` taustiņu &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;. Saraksta skatā izmantojiet bulttaustiņus ◁ ▷, lai pārslēgtos starp dzīvniekiem.

![VitalControl: Menu New on farm Births](../images/change.png "Change between list view and single animal view")

### Rediģēt dzimšanas paziņojuma datus {#edit-data-of-birth-notice}

{{% alert title="Padoms" %}}
Dzīvnieka datu rediģēšana ir iespējama tikai saraksta skatā!
{{% /alert %}}

1. Izmantojiet bulttaustiņus △ ▽, lai izvēlētos dzīvnieku, kuru vēlaties rediģēt, un apstipriniet ar `{{<T "Ok" >}}`.

2. Atveras apakšizvēlne, kurā varat pielāgot dažādus iestatījumus. Lai iegūtu soli pa solim instrukcijas, noklikšķiniet [šeit](/en/docs/new/calving/#register-a-calving).

![VitalControl: Menu New on farm Births](../images/edit2.png "Edit a birth notice")
