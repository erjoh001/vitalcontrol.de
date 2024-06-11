---
title: "Data acquisition"
linkTitle: "Data acquisition"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: data-acquisition
description: >
 Storing relevant settings for animal data collection
categories: [settings]
tags: [settings, data acquisition]
translationKey: settings/data-acquisition
maphilight: true
---
## Overview {#overview}

The following graphic lists the available settings concerning the recording of animal data:

<img src="../images/animaldataacquisition.png" alt="Acquisition of animal data" title="Acquisition of animal data" usemap="#workmap-overview" class="maphilight" />

<map name="workmap-overview">
  <area shape="rect" coords="3,40,239,80" alt="Weight recording" title="Submenu: Settings for weight recording&#10;Mouse click: open documentation" href="#settings-weight-recording">
  <area shape="rect" coords="3,80,239,160" alt="Mode of animal rating" title="Set the mode of animal rating&#10;Mouse click: open documentation" href="#mode-of-animal-rating">
  <area shape="rect" coords="3,160,239,240" alt="Length control period fresh cows" title="Set the length of the control period for fresh cows&#10;Mouse click: open documentation" href="#control-period-of-fresh-cows">

  <area shape="rect" coords="2,282,125,318" alt="Back" title="Jump back one level" href="/en/docs/settings/">
</map>

{{% alert title="Hint" %}}
Move the mouse pointer over a symbol in the graphic below and let it rest for a moment. A tooltip appears, presenting information about the respective setting. If you click on one of the lines, you will be forwarded to a description of the respective setting.
{{% /alert %}}

## Settings *Weight recording* {#settings-weight-recording}

The following graphic lists the available settings concerning the weight recording of animals:

<img src="../images/weightrecording.png" alt="Submenu items settings for weight recording" title="Settings weight recording" usemap="#workmap-weight" class="maphilight" />

<map name="workmap-weight">
  <area shape="rect" coords="1,40,230,199" alt="Threshold values assessment daily weight gain" title="Set the threshold values for the assessment of the daily weight gain&#10;Mouse click: open documentation" href="#assessment-of-daily-weight-gain-threshold-values">
  <area shape="rect" coords="1,200,230,280" alt="Birth weight" title="Set the set birth weight proposed when registering a new animal&#10;Mouse click: open documentation" href="#birth-weight">
  <area shape="rect" coords="1,280,230,360" alt="Average daily weight gain" title="Set the average daily weight gain used when estimating the weight of animals&#10;Mouse click: open documentation" href="#average-daily-weight-gain">
  <area shape="rect" coords="1,360,230,440" alt="Precision weight recording" title="Set the precision of weight recording&#10;Mouse click: open documentation" href="#precision-of-weight-recording">
</map>

### Assessment of daily weight gain: Threshold values {#assessment-of-daily-weight-gain-threshold-values}

{{% alert title="Hint" %}}
The red field shows the "critical too low weight gain" area. The yellow field shows the "suboptimal weight gain" area.
{{% /alert %}}

In order to adjust the threshold values for the assessment of the daily weight gain, proceed as follows:

1. In the main screen of your VitalControl device, select the menu item <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` and press the `{{<T "Ok" >}}` button.

2. A submenu opens in which various settings are displayed. Use the arrow keys △ ▽ to select `{{<T "DataAcquisition" >}}`. Confirm with `{{<T "Ok" >}}`.

3. Another submenu opens in which you can use the arrow keys △ ▽ to switch between the setting fields for `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` and `{{<T "ControlPeriodFreshCows" >}}`. Select `{{<T "WeightRecording" >}}`and confirm with `{{<T "Ok" >}}`.

4. The `{{<T "DailyWeightGain" >}}` preference field is automatically selected. Use the arrow keys ◁ ▷ to select the desired animal species. Confirm with `{{<T "Ok" >}}`. Alternatively, you can use the pencil icon with the <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `F3` key to jump directly to editing the red and yellow areas.

5. Use the arrow keys △ ▽ to select the desired "greater than" or "equal to" g/day increase in the red and yellow area. Use the keys `F2`/`F3` 🡄 🡆 or the arrow keys ◁ ▷ to select between the red and yellow areas.

6. Once you have set the desired "greater than" or "equal to" g/day increase, use the `F1` key <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Exit" /> or confirm with `{{<T "Ok" >}}` to jump back to `{{<T "DailyWeightGain" >}}`.

    ![VitalControl: menu settings daily weight gain](../images/dailyweightgain.png "Daily weight gain")

### Birth weight {#birth-weight}

The device uses the birth weight stored here in the settings as the default value when creating new animals. In order to be able to select the individual birth weight of a newly born animal more quickly, you may need to adjust this default value for your farm. To adjust the value for the `{{<T "BirthWeight" >}}`, proceed as follows:

1. In the main screen of your VitalControl device, select the menu item <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` and press the `{{<T "Ok" >}}` button.

2. A submenu opens in which various settings are displayed. Use the arrow keys △ ▽ to select `{{<T "DataAcquisition" >}}`. Confirm with `{{<T "Ok" >}}`.

3. Another submenu opens in which you can use the arrow keys △ ▽ to switch between the setting fields for `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` and `{{<T "ControlPeriodFreshCows" >}}`. Select `{{<T "WeightRecording" >}}`and confirm with `{{<T "Ok" >}}`.

4. Use the arrow keys △ ▽ to select the setting field `{{<T "BirthWeight" >}}` and use the arrow keys ◁ ▷ to set the desired birth weight. The device now uses the birth weight defined here as the standard when creating new animals. The individual birth weight of a newborn animal can then be selected more quickly.

    ![VitalControl: menu settings birth weight](../images/birthweight.png "Birth weight")

{{% alert title="Warning" color="warning" %}}
The standard birth weight is only an approximate value, which must be individually adjusted when creating a new animal.
If you do not want to make this adjustment or if you create animals automatically [in the background](../animal-registration/#auto-registration), no birth weight should be queried or saved when creating a new animal. birth weight should not be queried or saved when creating a new animal. This can be defined in the settings for [registration of animals](../animal-registration/#set-recorded-weights).
{{% /alert %}}

{{% alert title="Default values birth weights:" %}}

| Kind of new animal            |  Lamb          | Calf          |
|-------------------------------|----------------|---------------| 
| Default value *birth weight*: | 4 kg           | 40 kg         |
| Value range :                 | 1,0 bis 99 kg  | 1,0 bis 99 kg |
{{% /alert %}}

### Average daily weight gain {#average-daily-weight-gain}

{{% alert title="Explanation" %}}
When [weighing](../../actions/record-weight/) an animal, the defined daily increase is used for the calculation of the suggested weight value during animal weighing. If the suggested weight value is too low or too high for the majority of the animals to be weighed, you should adjust the defined value downwards or upwards, respectively, to shorten the time needed for adjusting the weight value with the arrow keys.
{{% /alert %}}

To set the `{{<T "AverageDailyWeightGain" >}}` used in the calculation of the approximate weight of an animal proceed as follows.

1. In the main screen of your VitalControl device, select the menu item <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` and press the `{{<T "Ok" >}}` button.

2. A submenu opens in which various settings are displayed. Use the arrow keys △ ▽ to select `{{<T "DataAcquisition" >}}`. Confirm with `{{<T "Ok" >}}`.

3. Another submenu opens in which you can use the arrow keys △ ▽ to switch between the setting fields for `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` and `{{<T "ControlPeriodFreshCows" >}}`. Select `{{<T "WeightRecording" >}}`and confirm with `{{<T "Ok" >}}`.

4. Use the arrow keys △ ▽ to select the setting field `{{<T "AverageDailyWeightGain" >}}`. Use the arrow keys ◁ ▷ to set the desired average daily increase g/day. The device now uses the average daily gain defined here as the standard for the expected daily gain of the animals.

    ![VitalControl: menu settings average daily weight gain](../images/averagedailyweightgain.png "Average daily weight gain")

### Precision of weight recording {#precision-of-weight-recording}

{{% alert title="Explanation" %}}
Depending on the use case and animal species (*lamb*, *calf*, *cow*), there are different requirements regarding the resolution of the weight value to be recorded (accuracy of *10 g*, *100 g* or *1 kg*). To meet these requirements one is required to make use of the *Maximum accuracy* setting.
{{% /alert %}}

The table below shows the precision of weight recording depending on the weight range and the setting stipulated for *Maximum accuracy*:

| Setting *Maximum precision*:               |  10 g | 100 g | 1 kg |
|--------------------------------------------|-------|-------|------|
| Precision in the range of *0 to 9,9 kg*:   | 10 g  | 100 g | 1 kg |
| Precision in the range of *10 to 49,9 kg*: | 100 g | 100 g | 1 kg |
| Precision in the range of *50 to 99,9 kg*: | 500 g | 500 g | 1 kg |
| Precision for values *≥ 100 kg*:           | 1 kg  | 1 kg  | 1 kg |

To set the maximum accuracy when recording animal weights with your device, proceed as follows:

1. In the main screen of your VitalControl device, select the menu item <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` and press the `{{<T "Ok" >}}` button..

2. A submenu opens in which various settings are displayed. Use the arrow keys △ ▽ to select `{{<T "DataAcquisition" >}}`. Confirm with `{{<T "Ok" >}}`.

3. Another submenu opens in which you can use the arrow keys △ ▽ to switch between the setting fields for `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` and `{{<T "ControlPeriodFreshCows" >}}`. Select `{{<T "WeightRecording" >}}`and confirm with `{{<T "Ok" >}}`.

4. Use the arrow keys △ ▽ to select the setting field `{{<T "MaximumPrecision" >}}`. Use the arrow keys ◁ ▷ to set the desired maximum precision. Precision of weight recording on the device now follows the stipulated setting.

    ![VitalControl: menu path settings maximum precision weight recording](../images/precisionweightrecording.png "Stipulate maximum precision of weight recording.")

<br>
Save the settings and return to the top menu `{{<T "DataAcquisition" >}}` by pressing the `F1` key &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.

## Mode of animal rating {#mode-of-animal-rating}

{{% alert title="Explanation" %}}
In the simple mode, only the general condition is queried during the animal evaluation (green/yellow/red). In the extended evaluation, 4 evaluation categories are queried: general condition, feed consumption, diarrhea and respiratory disease.
{{% /alert %}}

To set the `{{<T "RatingAnimals" >}}` on your device proceed as follows.

1. In the main screen of your VitalControl device, select the menu item <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` and press the `{{<T "Ok" >}}` button.

2. A submenu opens in which various settings are displayed. Use the arrow keys △ ▽ to select `{{<T "DataAcquisition" >}}`. Confirm with `{{<T "Ok" >}}`.

3. Another submenu opens in which you can use the arrow keys △ ▽ to switch between the setting fields for `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` and `{{<T "ControlPeriodFreshCows" >}}`. Select `{{<T "RatingAnimals" >}}`and confirm with `{{<T "Ok" >}}`.

4. Use the ◁ ▷ arrow keys to set the desired rating of animals.

    ![VitalControl: menu settings average rating of animals](../images/raitingofanimals.png "Rating of animals")

## Control period of fresh cows {#control-period-of-fresh-cows}

{{% alert title="Explanation" %}}
When managing fresh cows, checking the animals daily for several days after birth, including taking their temperature is considered a best practices routine. The duration of this control period varies considerably from farm to farm. For this reason, the length of the control period can be set to a value between 3 and 14 days in the VitalControl settings. The set value for the control period of fresh cows determines the number of columns of the column chart displayed for each animal in the [fresh cow list](../../lists/fresh-cows/).
{{% /alert %}}

To set the length of the Control period for your fresh cows proceed as follows:

1. In the main screen of your VitalControl device, select the menu item <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` and press the `{{<T "Ok" >}}` button.

2. A submenu opens in which various settings are displayed. Use the arrow keys △ ▽ to select `{{<T "DataAcquisition" >}}`. Confirm with `{{<T "Ok" >}}`.

3.  Another submenu opens in which you can use the arrow keys △ ▽ to switch between the setting fields for `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` and `{{<T "ControlPeriodFreshCows" >}}`. Select `{{<T "ControlPeriodFreshCows" >}}`and confirm with `{{<T "Ok" >}}`.

4. Use the ◁ ▷ arrow keys to set the desired duration of the control period in days post partum.

    ![VitalControl: menu settings control period fresh cows](../images/controlperiodfreshcows.png "Control period fresh cows")

<br>

Save the settings and return to the top menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` by pressing the `F1` key &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.
