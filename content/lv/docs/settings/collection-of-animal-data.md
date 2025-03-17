---
title: "Datu iegūšana"
linkTitle: "Datu iegūšana"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: data-acquisition
description: >
 Dzīvnieku datu vākšanas atbilstošo iestatījumu glabāšana
categories: [iestatījumi]
tags: [iestatījumi, datu iegūšana]
translationKey: settings/data-acquisition
maphilight: true
---
## Pārskats {#overview}

Šajā grafikā ir uzskaitīti pieejamie iestatījumi attiecībā uz dzīvnieku datu ierakstīšanu:

<img src="../images/animaldataacquisition.png" alt="Dzīvnieku datu iegūšana" title="Dzīvnieku datu iegūšana" usemap="#workmap-overview" class="maphilight" />

<map name="workmap-overview">
  <area shape="rect" coords="3,40,239,80" alt="Svara ierakstīšana" title="Apakšizvēlne: Iestatījumi svara ierakstīšanai&#10;Peles klikšķis: atvērt dokumentāciju" href="#settings-weight-recording">
  <area shape="rect" coords="3,80,239,160" alt="Dzīvnieku vērtēšanas režīms" title="Iestatīt dzīvnieku vērtēšanas režīmu&#10;Peles klikšķis: atvērt dokumentāciju" href="#mode-of-animal-rating">
  <area shape="rect" coords="3,160,239,240" alt="Svaigu govju kontroles perioda garums" title="Iestatīt svaigu govju kontroles perioda garumu&#10;Peles klikšķis: atvērt dokumentāciju" href="#control-period-of-fresh-cows">

  <area shape="rect" coords="2,282,125,318" alt="Atpakaļ" title="Atgriezties vienu līmeni atpakaļ" href="/lv/docs/settings/">
</map>

{{% alert title="Padoms" %}}
Pārvietojiet peles rādītāju virs simbola zemāk esošajā grafikā un ļaujiet tam uz brīdi palikt. Parādīsies uznirstošais padoms, kas sniegs informāciju par attiecīgo iestatījumu. Ja noklikšķināsiet uz kādas no līnijām, jūs tiksiet novirzīts uz attiecīgā iestatījuma aprakstu.
{{% /alert %}}

## Iestatījumi *Svara ierakstīšana* {#settings-weight-recording}

Šajā grafikā ir uzskaitīti pieejamie iestatījumi attiecībā uz dzīvnieku svara ierakstīšanu:

<img src="../images/weightrecording.png" alt="Apakšizvēlnes vienumi svara ierakstīšanas iestatījumiem" title="Svara ierakstīšanas iestatījumi" usemap="#workmap-weight" class="maphilight" />

<map name="workmap-weight">
  <area shape="rect" coords="1,40,230,199" alt="Ikdienas svara pieauguma novērtēšanas sliekšņa vērtības" title="Iestatīt ikdienas svara pieauguma novērtēšanas sliekšņa vērtības&#10;Peles klikšķis: atvērt dokumentāciju" href="#assessment-of-daily-weight-gain-threshold-values">
  <area shape="rect" coords="1,200,230,280" alt="Dzimšanas svars" title="Iestatīt ieteikto dzimšanas svaru, reģistrējot jaunu dzīvnieku&#10;Peles klikšķis: atvērt dokumentāciju" href="#birth-weight">
  <area shape="rect" coords="1,280,230,360" alt="Vidējais ikdienas svara pieaugums" title="Iestatīt vidējo ikdienas svara pieaugumu, ko izmanto dzīvnieku svara novērtēšanā&#10;Peles klikšķis: atvērt dokumentāciju" href="#average-daily-weight-gain">
  <area shape="rect" coords="1,360,230,440" alt="Svara ierakstīšanas precizitāte" title="Iestatīt svara ierakstīšanas precizitāti&#10;Peles klikšķis: atvērt dokumentāciju" href="#precision-of-weight-recording">
</map>

### Dienas svara pieauguma novērtējums: Sliekšņa vērtības {#assessment-of-daily-weight-gain-threshold-values}

{{% alert title="Padoms" %}}
Sarkanā lauka zona norāda uz "kritiski zemu svara pieaugumu". Dzeltenā lauka zona norāda uz "neoptimālu svara pieaugumu".
{{% /alert %}}

Lai pielāgotu sliekšņa vērtības dienas svara pieauguma novērtēšanai, rīkojieties šādi:

1. Jūsu VitalControl ierīces galvenajā ekrānā izvēlieties izvēlnes vienumu <img src="/icons/gear.svg" width="25" align="bottom" alt="Iestatījumi" /> `{{<T "Settings" >}}` un nospiediet `{{<T "Ok" >}}` pogu.

2. Atvērsies apakšizvēlne, kurā tiek parādīti dažādi iestatījumi. Izmantojiet bultiņu taustiņus △ ▽, lai izvēlētos `{{<T "DataAcquisition" >}}`. Apstipriniet ar `{{<T "Ok" >}}`.

3. Atvērsies cita apakšizvēlne, kurā varat izmantot bultiņu taustiņus △ ▽, lai pārslēgtos starp iestatījumu laukiem `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` un `{{<T "ControlPeriodFreshCows" >}}`. Izvēlieties `{{<T "WeightRecording" >}}` un apstipriniet ar `{{<T "Ok" >}}`.

4. `{{<T "DailyWeightGain" >}}` preferences lauks tiek automātiski izvēlēts. Izmantojiet bultiņu taustiņus ◁ ▷, lai izvēlētos vēlamo dzīvnieku sugu. Apstipriniet ar `{{<T "Ok" >}}`. Alternatīvi, jūs varat izmantot zīmuļa ikonu ar <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Rediģēt" /> `F3` taustiņu, lai tieši pārietu uz sarkanās un dzeltenās zonas rediģēšanu.

5. Izmantojiet bultiņu taustiņus △ ▽, lai izvēlētos vēlamo "lielāks par" vai "vienāds ar" g/dienā pieaugumu sarkanajā un dzeltenajā zonā. Izmantojiet taustiņus `F2`/`F3` 🡄 🡆 vai bultiņu taustiņus ◁ ▷, lai izvēlētos starp sarkano un dzelteno zonu.

6. Kad esat iestatījis vēlamo "lielāks par" vai "vienāds ar" g/dienā pieaugumu, izmantojiet `F1` taustiņu <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Iziet" /> vai apstipriniet ar `{{<T "Ok" >}}`, lai atgrieztos pie `{{<T "DailyWeightGain" >}}`.

    ![VitalControl: izvēlnes iestatījumi dienas svara pieaugumam](../images/dailyweightgain.png "Dienas svara pieaugums")

### Dzimšanas svars {#birth-weight}

Ierīce izmanto šeit iestatījumos saglabāto dzimšanas svaru kā noklusējuma vērtību, veidojot jaunus dzīvniekus. Lai ātrāk varētu izvēlēties individuālo tikko dzimuša dzīvnieka dzimšanas svaru, jums var būt nepieciešams pielāgot šo noklusējuma vērtību jūsu saimniecībai. Lai pielāgotu vērtību `{{<T "BirthWeight" >}}`, rīkojieties šādi:

1. Galvenajā ekrānā savā VitalControl ierīcē izvēlieties izvēlnes vienumu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` un nospiediet pogu `{{<T "Ok" >}}`.

2. Atveras apakšizvēlne, kurā tiek parādīti dažādi iestatījumi. Izmantojiet bultiņu taustiņus △ ▽, lai izvēlētos `{{<T "DataAcquisition" >}}`. Apstipriniet ar `{{<T "Ok" >}}`.

3. Atveras cita apakšizvēlne, kurā varat izmantot bultiņu taustiņus △ ▽, lai pārslēgtos starp iestatījumu laukiem `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` un `{{<T "ControlPeriodFreshCows" >}}`. Izvēlieties `{{<T "WeightRecording" >}}` un apstipriniet ar `{{<T "Ok" >}}`.

4. Izmantojiet bultiņu taustiņus △ ▽, lai izvēlētos iestatījumu lauku `{{<T "BirthWeight" >}}` un izmantojiet bultiņu taustiņus ◁ ▷, lai iestatītu vēlamo dzimšanas svaru. Ierīce tagad izmanto šeit definēto dzimšanas svaru kā standartu, veidojot jaunus dzīvniekus. Jaundzimuša dzīvnieka individuālo dzimšanas svaru varēs izvēlēties ātrāk.

    ![VitalControl: menu settings birth weight](../images/birthweight.png "Dzimšanas svars")

{{% alert title="Brīdinājums" color="warning" %}}
Standarta dzimšanas svars ir tikai aptuvena vērtība, kas jāpielāgo individuāli, veidojot jaunu dzīvnieku.
Ja nevēlaties veikt šo pielāgošanu vai ja automātiski veidojat dzīvniekus [fonā](../animal-registration/#auto-registration), dzimšanas svars netiks vaicāts vai saglabāts, veidojot jaunu dzīvnieku. dzimšanas svars netiks vaicāts vai saglabāts, veidojot jaunu dzīvnieku. To var definēt iestatījumos [dzīvnieku reģistrācijai](../animal-registration/#set-recorded-weights).
{{% /alert %}}

{{% alert title="Noklusējuma vērtības dzimšanas svariem:" %}}

| Jauna dzīvnieka veids         |  Jērs          | Teļš          |
|-------------------------------|----------------|---------------| 
| Noklusējuma vērtība *dzimšanas svars*: | 4 kg           | 40 kg         |
| Vērtību diapazons :           | 1,0 līdz 99 kg | 1,0 līdz 99 kg |
{{% /alert %}}

### Vidējais dienas svara pieaugums {#average-daily-weight-gain}

{{% alert title="Paskaidrojums" %}}
Kad [sverat](../../actions/record-weight/) dzīvnieku, definētais dienas pieaugums tiek izmantots, lai aprēķinātu ieteikto svara vērtību dzīvnieka svēršanas laikā. Ja ieteiktā svara vērtība ir pārāk zema vai pārāk augsta lielākajai daļai svērto dzīvnieku, jums vajadzētu pielāgot definēto vērtību uz leju vai uz augšu, attiecīgi, lai saīsinātu laiku, kas nepieciešams svara vērtības pielāgošanai ar bultiņu taustiņiem.
{{% /alert %}}

Lai iestatītu `{{<T "AverageDailyWeightGain" >}}`, ko izmanto dzīvnieka aptuvenā svara aprēķināšanai, rīkojieties šādi.

1. Jūsu VitalControl ierīces galvenajā ekrānā izvēlieties izvēlnes vienumu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` un nospiediet pogu `{{<T "Ok" >}}`.

2. Atveras apakšizvēlne, kurā tiek parādīti dažādi iestatījumi. Izmantojiet bultiņu taustiņus △ ▽, lai izvēlētos `{{<T "DataAcquisition" >}}`. Apstipriniet ar `{{<T "Ok" >}}`.

3. Atveras cita apakšizvēlne, kurā varat izmantot bultiņu taustiņus △ ▽, lai pārslēgtos starp iestatījumu laukiem `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` un `{{<T "ControlPeriodFreshCows" >}}`. Izvēlieties `{{<T "WeightRecording" >}}` un apstipriniet ar `{{<T "Ok" >}}`.

4. Izmantojiet bultiņu taustiņus △ ▽, lai izvēlētos iestatījumu lauku `{{<T "AverageDailyWeightGain" >}}`. Izmantojiet bultiņu taustiņus ◁ ▷, lai iestatītu vēlamo vidējo dienas pieaugumu g/dienā. Ierīce tagad izmanto šeit definēto vidējo dienas pieaugumu kā standartu dzīvnieku sagaidāmajam dienas pieaugumam.

    ![VitalControl: izvēlnes iestatījumi vidējais dienas svara pieaugums](../images/averagedailyweightgain.png "Vidējais dienas svara pieaugums")

### Svara ierakstīšanas precizitāte {#precision-of-weight-recording}

{{% alert title="Paskaidrojums" %}}
Atkarībā no lietošanas gadījuma un dzīvnieku sugas (*jērs*, *teļš*, *govs*), ir dažādas prasības attiecībā uz ierakstāmā svara vērtības izšķirtspēju (precizitāte *10 g*, *100 g* vai *1 kg*). Lai izpildītu šīs prasības, ir jāizmanto iestatījums *Maksimālā precizitāte*.
{{% /alert %}}

Zemāk esošajā tabulā ir parādīta svara ierakstīšanas precizitāte atkarībā no svara diapazona un iestatījuma, kas noteikts *Maksimālajai precizitātei*:

| Iestatījums *Maksimālā precizitāte*:       |  10 g | 100 g | 1 kg |
|--------------------------------------------|-------|-------|------|
| Precizitāte diapazonā *0 līdz 9,9 kg*:     | 10 g  | 100 g | 1 kg |
| Precizitāte diapazonā *10 līdz 49,9 kg*:   | 100 g | 100 g | 1 kg |
| Precizitāte diapazonā *50 līdz 99,9 kg*:   | 500 g | 500 g | 1 kg |
| Precizitāte vērtībām *≥ 100 kg*:           | 1 kg  | 1 kg  | 1 kg |

Lai iestatītu maksimālo precizitāti, reģistrējot dzīvnieku svaru ar savu ierīci, rīkojieties šādi:

1. Jūsu VitalControl ierīces galvenajā ekrānā izvēlieties izvēlnes vienumu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` un nospiediet pogu `{{<T "Ok" >}}`.

2. Atveras apakšizvēlne, kurā tiek parādīti dažādi iestatījumi. Izmantojiet bultiņu taustiņus △ ▽, lai izvēlētos `{{<T "DataAcquisition" >}}`. Apstipriniet ar `{{<T "Ok" >}}`.

3. Atveras cita apakšizvēlne, kurā varat izmantot bultiņu taustiņus △ ▽, lai pārslēgtos starp iestatījumu laukiem `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` un `{{<T "ControlPeriodFreshCows" >}}`. Izvēlieties `{{<T "WeightRecording" >}}` un apstipriniet ar `{{<T "Ok" >}}`.

4. Izmantojiet bultiņu taustiņus △ ▽, lai izvēlētos iestatījumu lauku `{{<T "MaximumPrecision" >}}`. Izmantojiet bultiņu taustiņus ◁ ▷, lai iestatītu vēlamo maksimālo precizitāti. Ierīces svara reģistrēšanas precizitāte tagad atbilst noteiktajam iestatījumam.

   ![VitalControl: menu path settings maximum precision weight recording](../images/precisionweightrecording.png "Stipulate maximum precision of weight recording.")

<br>
Saglabājiet iestatījumus un atgriezieties augšējā izvēlnē `{{<T "DataAcquisition" >}}`, nospiežot taustiņu `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.

## Dzīvnieku vērtēšanas režīms {#mode-of-animal-rating}

{{% alert title="Explanation" %}}
Vienkāršajā režīmā dzīvnieku vērtēšanas laikā tiek jautāts tikai par vispārējo stāvokli (zaļš/dzeltens/sarkans). Paplašinātajā vērtēšanā tiek jautātas 4 vērtēšanas kategorijas: vispārējais stāvoklis, barības patēriņš, caureja un elpošanas slimība.
{{% /alert %}}

Lai iestatītu `{{<T "RatingAnimals" >}}` uz jūsu ierīces, rīkojieties šādi.

1. Jūsu VitalControl ierīces galvenajā ekrānā izvēlieties izvēlnes vienumu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` un nospiediet pogu `{{<T "Ok" >}}`.

2. Atveras apakšizvēlne, kurā tiek parādīti dažādi iestatījumi. Izmantojiet bultiņu taustiņus △ ▽, lai izvēlētos `{{<T "DataAcquisition" >}}`. Apstipriniet ar `{{<T "Ok" >}}`.

3. Atveras vēl viena apakšizvēlne, kurā varat izmantot bultiņu taustiņus △ ▽, lai pārslēgtos starp iestatījumu laukiem `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` un `{{<T "ControlPeriodFreshCows" >}}`. Izvēlieties `{{<T "RatingAnimals" >}}` un apstipriniet ar `{{<T "Ok" >}}`.

4. Izmantojiet bultiņu taustiņus ◁ ▷, lai iestatītu vēlamo dzīvnieku vērtējumu.

   ![VitalControl: izvēlnes iestatījumi dzīvnieku vidējais vērtējums](../images/raitingofanimals.png "Dzīvnieku vērtējums")

## Svaigu govju kontroles periods {#control-period-of-fresh-cows}

{{% alert title="Paskaidrojums" %}}
Pārvaldot svaigas govis, tiek uzskatīts, ka labākā prakse ir vairākas dienas pēc dzemdībām katru dienu pārbaudīt dzīvniekus, ieskaitot to temperatūras mērīšanu. Šī kontroles perioda ilgums dažādās saimniecībās ievērojami atšķiras. Šī iemesla dēļ VitalControl iestatījumos kontroles perioda ilgumu var iestatīt uz vērtību no 3 līdz 14 dienām. Iestatītā svaigu govju kontroles perioda vērtība nosaka kolonnu skaitu, kas tiek attēlots katram dzīvniekam [svaigu govju sarakstā](../../lists/fresh-cows/).
{{% /alert %}}

Lai iestatītu svaigu govju kontroles perioda ilgumu, rīkojieties šādi:

1. Jūsu VitalControl ierīces galvenajā ekrānā izvēlieties izvēlnes vienumu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` un nospiediet `{{<T "Ok" >}}` pogu.

2. Atveras apakšizvēlne, kurā tiek parādīti dažādi iestatījumi. Izmantojiet bultiņu taustiņus △ ▽, lai izvēlētos `{{<T "DataAcquisition" >}}`. Apstipriniet ar `{{<T "Ok" >}}`.

3. Atveras vēl viena apakšizvēlne, kurā varat izmantot bultiņu taustiņus △ ▽, lai pārslēgtos starp iestatījumu laukiem `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` un `{{<T "ControlPeriodFreshCows" >}}`. Izvēlieties `{{<T "ControlPeriodFreshCows" >}}` un apstipriniet ar `{{<T "Ok" >}}`.

4. Izmantojiet bultiņu taustiņus ◁ ▷, lai iestatītu vēlamo kontroles perioda ilgumu dienās pēc dzemdībām.

   ![VitalControl: izvēlnes iestatījumi svaigu govju kontroles periods](../images/controlperiodfreshcows.png "Svaigu govju kontroles periods")

<br>

Saglabājiet iestatījumus un atgriezieties galvenajā izvēlnē <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}`, nospiežot taustiņu `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.
