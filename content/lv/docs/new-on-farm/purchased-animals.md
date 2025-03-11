---
title: Iegādātie dzīvnieki
linkTitle: Iegādātie dzīvnieki
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: purchased-animals
description: >
  Šeit jūs varat apskatīt savus pašreizējos pirkumus un eksportēt datus.
categories: [Jaunumi fermā]
tags: [Jaunumi fermā]
translationKey: new-on-farm/new-on-farm
---
## Iegādātie dzīvnieki {#purchased-animals}

Šajā sarakstā jūs atradīsiet visus dzīvniekus, kurus esat izveidojis, izmantojot masveida ierakstīšanu. Jūs varat eksportēt šo sarakstu un tādējādi reģistrēt savus papildinājumus tieši ganāmpulka pārvaldības programmā DSP-Herde un HI-Tier. Alternatīvi, jūs varat dzēst visus pirkuma paziņojumus.

{{% alert title="Padoms" %}}
Lai eksportētu datus, jums ir nepieciešams iekļautais UBS zibatmiņas disks. Pievienojiet UBS zibatmiņas disku ar USB-C adapteri savam VitalControl ierīcei pirms instrukciju izpildes.
{{% /alert %}}

1. Savā VitalControl ierīces galvenajā ekrānā izvēlieties izvēlnes vienumu <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Jaunumi fermā" /> `{{<T "NewOnFarm" >}}` un nospiediet `{{<T "Ok" >}}` pogu.

2. Atveras apakšizvēlne, kurā varat izvēlēties starp <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Jaunumi fermā, bez transpondera" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Iegādātie dzīvnieki" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Nav nacionālā dzīvnieka ID" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Dzimšanas" /> `{{<T "Births" >}}` un <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Nav piešķirts transponders" /> `{{<T "NoTransponderAssigned" >}}`. Izmantojiet bulttaustiņus ◁ ▷ △ ▽, lai izvēlētos izvēlnes vienumu <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Iegādātie dzīvnieki" /> `{{<T "PurchasedAnimals" >}}` un apstipriniet ar `{{<T "Ok" >}}`.

3. Atveras saraksts ar jūsu pirkumiem, kurus esat reģistrējis, izmantojot masveida ierakstīšanas izvēlnes vienumu.

4. Izmantojiet taustiņu `F2` `{{<T "CSVExport" >}}`.

5. CSV ziņojumu saraksts tagad ir saglabāts jūsu USB zibatmiņā.

   ![VitalControl: Iegādāto dzīvnieku saraksts, csv eksports](../images/purchasedanimals.png "Iegādātie dzīvnieki, csv eksports")

## Opcijas: Dzēst visus paziņojumus pēc eksporta {#options-delete-all-notices-after-export}

Ar šo opciju jūs varat iestatīt, vai visi ziņojumi `{{<T "PurchasedAnimals" >}}` sarakstā būtu jādzēš pēc CSV faila eksportēšanas. Izmantojiet šo opciju tikai tad, ja esat pārliecināts, ka jums vairs nav nepieciešami ziņojumi!

1. Izmantojiet taustiņu `F3`. Atveras apakšizvēlne.

2. Izmantojiet bultiņu taustiņus △ ▽, lai izvēlētos izvēlnes vienumu `{{<T "DeleteAllNoticesAfterExport" >}}` un apstipriniet ar `{{<T "Ok" >}}`.

3. Lodziņš tagad ir atzīmēts ar ķeksīti. Opcija ir aktivizēta. Apstipriniet vēlreiz ar `{{<T "Ok" >}}`, lai deaktivizētu opciju.

   ![VitalControl: Iegādāto dzīvnieku saraksts, csv eksports](../images/delete-all.png "Dzēst visus paziņojumus pēc eksporta")

## Tiešās funkciju izsaukšanas {#direct-function-calls}

Papildus eksporta faila izveidei jums ir šādas iespējas:

- [Atvienot transponderu](#unlink-transponder)
- [Notīrīt visus iegādes paziņojumus](#clear-all-purchase-notices)
- [Dzēst dzīvnieku + paziņojumu](#delete-animal--purchase-notice)
- [Notīrīt iegādes paziņojumu](#clear-notice-of-purchase)
- [Rediģēt marķējumu](#edit-data-of-purchased-animal)

{{% alert title="Padoms" %}}
Vienmēr vispirms atveriet `{{<T "PurchasedAnimals" >}}` sarakstu, kā aprakstīts iepriekšējās instrukcijās.
{{% /alert %}}

### Atvienot transponderu {#unlink-transponder}

Jūs varat izmantot šo funkciju, lai noņemtu transponderu no dzīvnieka.

1. Izmantojiet taustiņu `F3`. Atveras apakšizvēlne.

2. Izmantojiet bultiņu taustiņus △ ▽, lai izvēlētos izvēlnes vienumu `{{<T "UnlinkTransponder" >}}` un apstipriniet ar `{{<T "Ok" >}}`.

3. Transponders ir veiksmīgi atvienots.

   ![VitalControl: Iegādāto dzīvnieku saraksts, csv eksports](../images/unlink-transponder.png "Iegādātie dzīvnieki, atvienot transponderu")

### Notīrīt visus iegādes paziņojumus {#clear-all-purchase-notices}

Ar šo funkciju jūs varat izdzēst visus dzīvniekus no `{{<T "PurchasedAnimals" >}}` saraksta, neveidojot vispirms eksporta failu.

1. Izmantojiet taustiņu `F3`. Atveras apakšizvēlne.

2. Izmantojiet bulttaustiņus △ ▽, lai atlasītu izvēlnes vienumu `{{<T "ClearAllPurchaseNotices" >}}` un apstipriniet ar `{{<T "Ok" >}}`.

3. Pirkuma paziņojumi ir veiksmīgi izdzēsti.

   ![VitalControl: Iegādāto dzīvnieku saraksts, dzēst pirkuma paziņojumus](../images/clear.png "Dzēst visus pirkuma paziņojumus")

### Dzēst dzīvnieku + pirkuma paziņojumu {#delete-animal--purchase-notice}

Lai dzēstu dzīvnieku un tā atbilstošo pirkuma paziņojumu, rīkojieties šādi:

1. Izmantojiet bulttaustiņus △ ▽, lai atlasītu dzīvnieku, kuru vēlaties dzēst.

2. Izmantojiet taustiņu `F3`. Atveras apakšizvēlne.

3. Izmantojiet bulttaustiņus △ ▽, lai atlasītu izvēlnes vienumu `{{<T "UnregisterAnimalAndBirthNotice" >}}` un apstipriniet ar `{{<T "Ok" >}}`.

4. Dzīvnieks un piekļuves ziņojums ir veiksmīgi izdzēsti.

   ![VitalControl: Iegādāto dzīvnieku saraksts, dzēst dzīvnieku + paziņojumu](../images/delete.png "Dzēst dzīvnieku + paziņojumu")

### Dzēst pirkuma paziņojumu {#clear-notice-of-purchase}

Lai dzēstu dzīvnieka pirkuma paziņojumu no saraksta, rīkojieties šādi:

1. Izmantojiet bulttaustiņus △ ▽, lai atlasītu dzīvnieku, kura pirkuma paziņojumu vēlaties dzēst.

2. Izmantojiet taustiņu `F3`. Atveras apakšizvēlne.

3. Izmantojiet bulttaustiņus △ ▽, lai atlasītu izvēlnes vienumu `{{<T "ClearPurchaseNotice" >}}` un apstipriniet ar `{{<T "Ok" >}}`.

4. Atlasītā dzīvnieka pirkuma paziņojums ir veiksmīgi izdzēsts.

   ![VitalControl: Iegādāto dzīvnieku saraksts, dzēst pirkuma paziņojumu](../images/clearnotice.png "Dzēst pirkuma paziņojumu")

### Rediģēt iegādātā dzīvnieka datus {#edit-data-of-purchased-animal}

Lai rediģētu dzīvnieka datus pirkumu sarakstā, rīkojieties šādi:

1. Izmantojiet bulttaustiņus △ ▽, lai atlasītu dzīvnieku, kuru vēlaties rediģēt.

2. Izmantojiet pogu `{{<T "Ok" >}}`. Atveras apakšizvēlne ar dzīvnieka datiem. Kā rediģēt šos datus, varat uzzināt [šeit](/en/docs/actions/edit/#edit-animal-data).


    ![VitalControl: Iegādāto dzīvnieku saraksts, Rediģēt dzīvnieka datus](../images/edit.png "Rediģēt iegādātā dzīvnieka datus")

