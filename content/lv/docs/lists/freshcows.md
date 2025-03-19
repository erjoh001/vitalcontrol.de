---
title: "Svaigu govju saraksts"
linkTitle: "Svaigu govju saraksts"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: fresh-cows
description: >
  Atvieglojiet svaigu govju kontroli.
categories: [Saraksti]
tags: [Saraksti, svaiga govs]
translationKey: lists/fresh-cows
---
### Svaigu govju saraksts {#fresh-cows-list}

{{% alert title="Paskaidrojums" %}}
Pārvaldot svaigas govis, tiek uzskatīts, ka labākā prakse ir pārbaudīt dzīvniekus katru dienu vairākas dienas pēc dzimšanas. Svaigu govju saraksts atvieglo šo svaigu govju kontroli, īpaši temperatūras reģistrēšanas ziņā. Katram dzīvniekam tiek parādīts kolonnas diagramma par visām kontroles perioda dienām, katra kontroles perioda diena ir attēlota ar vertikālu joslu. Atkarībā no joslas krāsas (zaļa, dzeltena vai sarkana) jūs varat redzēt, vai attiecīgajā dienā attiecīgajam dzīvniekam tika mērīta normāla, paaugstināta vai kritiski paaugstināta temperatūra.
{{% /alert %}}

Govis tiek iekļautas svaigu govju sarakstā uzreiz pēc to dzemdību reģistrēšanas. Tās paliek šajā sarakstā noteiktu laika periodu, šī perioda garumu (dienās) var pielāgot [iestatījumos](../../settings/data-acquisition/#control-period-of-fresh-cows).
 Šim sarakstam ir pieejamas šādas darbības:

- [Pilna darbību izvēlne](../alarm/#full-action-menu)
- [Dzīvnieka dati](../alarm/#animal-data)
- [Mērīt temperatūru](../alarm/#take-temperature)
- [Pārslēgt trauksmes statusu](#toggle-alarm-status)
- [Pārslēgt uzraudzības statusu](#toggle-watch-status)
- [Slēpt izmērītās govis](#hide-measured-cows)
- [Meklēt dzīvnieku](../alarm/#search-animal)
- [Iestatīt filtru](../alarm/#set-filter)

{{% alert title="Padoms" %}}
Dažas darbības jāveic tāpat kā [trauksmes sarakstā](../alarm). Tās šeit netiek izskaidrotas. Veiciet sākotnējos soļus un izmantojiet attiecīgās darbības saiti, lai nokļūtu instrukcijās.
{{% /alert %}}

### Sākotnējie soļi {#preliminary-steps}

1. Izvēlieties <img src="/icons/main/lists.svg" width="25" align="bottom" alt="Saraksti" /> `{{<T "Lists" >}}` izvēlnes vienumu jūsu VitalControl ierīces galvenajā ekrānā un nospiediet `{{<T "Ok" >}}` pogu.

2. Atveras apakšizvēlne, kurā tiek parādīti dažādi saraksti. Izvēlieties `{{<T "FreshCows" >}}` sarakstu <img src="/icons/lists/freshcows.svg" width="30" align="bottom" alt="Fresh-cows" />. Apstipriniet ar `{{<T "Ok" >}}`.

3. Tagad ir atvērts svaigo govju saraksts.

   ![VitalControl Lists Fresh cows list](../images/firststeps4.png "Fresh cow list")

### Pārslēgt trauksmes statusu {#toggle-alarm-status}

1. Pabeidziet sākotnējos soļus.

2. Izmantojiet `F3` taustiņu &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp;, lai izsauktu uznirstošo izvēlni, kurā uzskaitītas iespējamās darbības, nospiežot `{{<T "Ok" >}}` taustiņu. Izmantojiet bultiņu taustiņus △ ▽, lai izceltu darbību `{{<T "ToggleAlarmStatus" >}}` un izvēlētos šo opciju, nospiežot centrālo `{{<T "Ok" >}}` pogu vai `F3` taustiņu `{{<T "Ok" >}}`.

3. Svaigo govju sarakstā izmantojiet bultiņu taustiņus △ ▽, lai izvēlētos vēlamo dzīvnieku un apstiprinātu ar `{{<T "Ok" >}}`. Alternatīvi, jūs varat meklēt dzīvnieku. Izmantojiet `On/Off` pogu <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> un izmantojiet bultiņu taustiņus ◁ ▷ △ ▽, lai izvēlētos vēlamo ciparu. Beidzot apstipriniet ar `{{<T "Ok" >}}`.

4. Dzīvnieks tagad tiek pievienots vai noņemts no trauksmes saraksta atkarībā no tā sākotnējā statusa.

   ![VitalControl Lists Fresh cows list](../images/togglealarmstatus.png "Toggle alarm status")

### Pārslēgt novērošanas statusu {#toggle-watch-status}

1. Pabeidziet sākotnējos soļus.

2. Izmantojiet `F3` taustiņu &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp;, lai izsauktu uznirstošo izvēlni, kurā uzskaitītas iespējamās darbības, nospiežot `{{<T "Ok" >}}` taustiņu. Izmantojiet bultiņu taustiņus △ ▽, lai izceltu darbību `{{<T "ToggleWatchStatus" >}}` un izvēlētos šo opciju, nospiežot centrālo `{{<T "Ok" >}}` pogu vai `F3` taustiņu `{{<T "Ok" >}}`.

3. Svaigo govju sarakstā izmantojiet bultiņu taustiņus △ ▽, lai izvēlētos vēlamo dzīvnieku un apstiprinātu ar `{{<T "Ok" >}}`. Alternatīvi, jūs varat meklēt dzīvnieku. Izmantojiet `On/Off` pogu <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> un izmantojiet bultiņu taustiņus ◁ ▷ △ ▽, lai izvēlētos vēlamo ciparu. Beidzot apstipriniet ar `{{<T "Ok" >}}`.

4. Dzīvnieks tagad tiek pievienots vai noņemts no novērošanas saraksta atkarībā no tā sākotnējā statusa.

   ![VitalControl Saraksti Svaigu govju saraksts](../images/togglewatchstatus.png "Pārslēgt novērošanas statusu")

### Paslēpt izmērītās govis {#hide-measured-cows}

Ja šī funkcija ir aktivizēta, dzīvnieki, kuriem ir veikts temperatūras mērījums, tiek paslēpti sausās govju sarakstā. Ja šī funkcija nav aktivizēta, dzīvnieki paliek redzami sarakstā.

1. Veiciet sākotnējos soļus.

2. Izmantojiet taustiņu `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Darbības" />&nbsp; lai izsauktu uznirstošo izvēlni, kas uzskaita dažādas iespējas. Izmantojiet bulttaustiņus △ ▽, lai izceltu opciju `{{<T "HideMeasuredCows" >}}` un pārslēgtu šo opciju, nospiežot centrālo `{{<T "Ok" >}}` pogu vai `F3` taustiņu `{{<T "Ok" >}}`.

3. Svaigu govju sarakstā izmantojiet bulttaustiņus △ ▽, lai izvēlētos vēlamo dzīvnieku un apstiprinātu ar `{{<T "Ok" >}}`. Alternatīvi, jūs varat meklēt dzīvnieku. Izmantojiet `On/Off` pogu <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Meklēt" /> un izmantojiet bulttaustiņus ◁ ▷ △ ▽, lai izvēlētos vēlamo ciparu. Beigās apstipriniet ar `{{<T "Ok" >}}`.

4. Funkcija `{{<T "HideMeasuredCows" >}}` tagad ir aktivizēta. Aktivizācija tiek norādīta, atzīmējot lodziņu.

   ![VitalControl Saraksti Svaigu govju saraksts](../images/hidemeasuredcows.png "Paslēpt izmērītās govis")
