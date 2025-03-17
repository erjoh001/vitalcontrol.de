---
title: "資料獲取"
linkTitle: "資料獲取"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: data-acquisition
description: >
 儲存動物數據收集的相關設置
categories: [settings]
tags: [settings, data acquisition]
translationKey: settings/data-acquisition
maphilight: true
---
## 概述 {#overview}

以下圖形列出了有關動物數據記錄的可用設置：

<img src="../images/animaldataacquisition.png" alt="動物數據獲取" title="動物數據獲取" usemap="#workmap-overview" class="maphilight" />

<map name="workmap-overview">
  <area shape="rect" coords="3,40,239,80" alt="重量記錄" title="子菜單：重量記錄設置&#10;滑鼠點擊：打開文檔" href="#settings-weight-recording">
  <area shape="rect" coords="3,80,239,160" alt="動物評分模式" title="設置動物評分模式&#10;滑鼠點擊：打開文檔" href="#mode-of-animal-rating">
  <area shape="rect" coords="3,160,239,240" alt="新鮮奶牛控制期長度" title="設置新鮮奶牛的控制期長度&#10;滑鼠點擊：打開文檔" href="#control-period-of-fresh-cows">

  <area shape="rect" coords="2,282,125,318" alt="返回" title="返回上一級" href="/en/docs/settings/">
</map>

{{% alert title="提示" %}}
將滑鼠指針移到下圖中的符號上，並稍作停留。會出現一個工具提示，提供有關相應設置的信息。如果您點擊其中一行，將被轉到相應設置的描述。
{{% /alert %}}

## 設置 *重量記錄* {#settings-weight-recording}

以下圖形列出了有關動物重量記錄的可用設置：

<img src="../images/weightrecording.png" alt="重量記錄設置子菜單項" title="重量記錄設置" usemap="#workmap-weight" class="maphilight" />

<map name="workmap-weight">
  <area shape="rect" coords="1,40,230,199" alt="每日增重評估閾值" title="設置每日增重評估的閾值&#10;滑鼠點擊：打開文檔" href="#assessment-of-daily-weight-gain-threshold-values">
  <area shape="rect" coords="1,200,230,280" alt="出生體重" title="設置註冊新動物時建議的出生體重&#10;滑鼠點擊：打開文檔" href="#birth-weight">
  <area shape="rect" coords="1,280,230,360" alt="平均每日增重" title="設置估算動物體重時使用的平均每日增重&#10;滑鼠點擊：打開文檔" href="#average-daily-weight-gain">
  <area shape="rect" coords="1,360,230,440" alt="重量記錄精度" title="設置重量記錄的精度&#10;滑鼠點擊：打開文檔" href="#precision-of-weight-recording">
</map>

### 每日體重增加評估：臨界值 {#assessment-of-daily-weight-gain-threshold-values}

{{% alert title="提示" %}}
紅色區域顯示「體重增加過低的危險」區域。黃色區域顯示「體重增加不理想」區域。
{{% /alert %}}

為了調整每日體重增加評估的臨界值，請按以下步驟操作：

1. 在您的 VitalControl 設備主畫面中，選擇選單項目 <img src="/icons/gear.svg" width="25" align="bottom" alt="設定" /> `{{<T "Settings" >}}` 並按下 `{{<T "Ok" >}}` 按鈕。

2. 一個子選單會打開，顯示各種設定。使用箭頭鍵 △ ▽ 選擇 `{{<T "DataAcquisition" >}}`。按下 `{{<T "Ok" >}}` 確認。

3. 另一個子選單會打開，您可以使用箭頭鍵 △ ▽ 在 `{{<T "WeightRecording" >}}`、`{{<T "RatingAnimals" >}}` 和 `{{<T "ControlPeriodFreshCows" >}}` 的設定欄位之間切換。選擇 `{{<T "WeightRecording" >}}` 並按下 `{{<T "Ok" >}}` 確認。

4. `{{<T "DailyWeightGain" >}}` 偏好設定欄位會自動選擇。使用箭頭鍵 ◁ ▷ 選擇所需的動物種類。按下 `{{<T "Ok" >}}` 確認。或者，您可以使用鉛筆圖示和 <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="編輯" /> `F3` 鍵直接跳到編輯紅色和黃色區域。

5. 使用箭頭鍵 △ ▽ 選擇紅色和黃色區域中所需的「大於」或「等於」g/天的增加量。使用 `F2`/`F3` 🡄 🡆 或箭頭鍵 ◁ ▷ 在紅色和黃色區域之間選擇。

6. 一旦您設置了所需的「大於」或「等於」g/天的增加量，使用 `F1` 鍵 <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="退出" /> 或按下 `{{<T "Ok" >}}` 確認以跳回 `{{<T "DailyWeightGain" >}}`。

    ![VitalControl: menu settings daily weight gain](../images/dailyweightgain.png "每日體重增加")

### 出生體重 {#birth-weight}

設備使用此處設定的出生體重作為創建新動物時的預設值。為了能夠更快地選擇新生動物的個別出生體重，您可能需要為您的農場調整此預設值。要調整 `{{<T "BirthWeight" >}}` 的值，請按以下步驟操作：

1. 在您的 VitalControl 設備主畫面中，選擇選單項目 <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` 並按下 `{{<T "Ok" >}}` 按鈕。

2. 會開啟一個子選單，顯示各種設定。使用箭頭鍵 △ ▽ 選擇 `{{<T "DataAcquisition" >}}`。按下 `{{<T "Ok" >}}` 確認。

3. 另一個子選單會開啟，您可以使用箭頭鍵 △ ▽ 在 `{{<T "WeightRecording" >}}`、`{{<T "RatingAnimals" >}}` 和 `{{<T "ControlPeriodFreshCows" >}}` 的設定欄位之間切換。選擇 `{{<T "WeightRecording" >}}` 並按下 `{{<T "Ok" >}}` 確認。

4. 使用箭頭鍵 △ ▽ 選擇設定欄位 `{{<T "BirthWeight" >}}`，並使用箭頭鍵 ◁ ▷ 設定所需的出生體重。設備現在會將此處定義的出生體重作為創建新動物時的標準。新生動物的個別出生體重可以更快地選擇。

    ![VitalControl: menu settings birth weight](../images/birthweight.png "出生體重")

{{% alert title="警告" color="warning" %}}
標準出生體重僅為近似值，必須在創建新動物時個別調整。
如果您不想進行此調整或自動創建動物 [在背景中](../animal-registration/#auto-registration)，則在創建新動物時不應查詢或保存出生體重。這可以在 [動物註冊](../animal-registration/#set-recorded-weights) 的設定中定義。
{{% /alert %}}

{{% alert title="預設值出生體重：" %}}

| 新動物種類                    | 羊羔          | 小牛          |
|-------------------------------|---------------|---------------| 
| 預設值 *出生體重*：          | 4 公斤        | 40 公斤       |
| 值範圍：                     | 1.0 至 99 公斤| 1.0 至 99 公斤|
{{% /alert %}}

### 平均每日體重增長 {#average-daily-weight-gain}

{{% alert title="說明" %}}
在 [稱重](../../actions/record-weight/) 動物時，定義的每日增長用於計算動物稱重時的建議體重值。如果對大多數待稱重動物的建議體重值過低或過高，您應該分別向下或向上調整定義的值，以縮短使用箭頭鍵調整體重值所需的時間。
{{% /alert %}}

要設定用於計算動物近似體重的 `{{<T "AverageDailyWeightGain" >}}`，請按以下步驟進行。

1. 在您的 VitalControl 設備主畫面中，選擇選單項目 <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` 並按下 `{{<T "Ok" >}}` 按鈕。

2. 會開啟一個子選單，顯示各種設定。使用箭頭鍵 △ ▽ 選擇 `{{<T "DataAcquisition" >}}`。按 `{{<T "Ok" >}}` 確認。

3. 另一個子選單會開啟，您可以使用箭頭鍵 △ ▽ 在 `{{<T "WeightRecording" >}}`、`{{<T "RatingAnimals" >}}` 和 `{{<T "ControlPeriodFreshCows" >}}` 的設定欄位之間切換。選擇 `{{<T "WeightRecording" >}}` 並按 `{{<T "Ok" >}}` 確認。

4. 使用箭頭鍵 △ ▽ 選擇設定欄位 `{{<T "AverageDailyWeightGain" >}}`。使用箭頭鍵 ◁ ▷ 設定所需的每日平均增重 g/天。設備現在將使用此處定義的每日平均增重作為動物預期每日增重的標準。

    ![VitalControl: menu settings average daily weight gain](../images/averagedailyweightgain.png "Average daily weight gain")

### 體重記錄的精確度 {#precision-of-weight-recording}

{{% alert title="說明" %}}
根據使用情境和動物種類（*羊羔*、*小牛*、*奶牛*），對於要記錄的體重值的解析度（*10 g*、*100 g* 或 *1 kg* 的精確度）有不同的要求。為了滿足這些要求，需要使用 *最大精確度* 設定。
{{% /alert %}}

下表顯示了根據體重範圍和 *最大精確度* 設定的體重記錄精確度：

| 設定 *最大精確度*:                         |  10 g | 100 g | 1 kg |
|--------------------------------------------|-------|-------|------|
| *0 到 9.9 kg* 範圍內的精確度:             | 10 g  | 100 g | 1 kg |
| *10 到 49.9 kg* 範圍內的精確度:           | 100 g | 100 g | 1 kg |
| *50 到 99.9 kg* 範圍內的精確度:           | 500 g | 500 g | 1 kg |
| *≥ 100 kg* 的精確度:                      | 1 kg  | 1 kg  | 1 kg |

要在您的設備上設定記錄動物體重的最大精度，請按以下步驟操作：

1. 在您的 VitalControl 設備主畫面中，選擇菜單項目 <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` 並按下 `{{<T "Ok" >}}` 按鈕。

2. 將會打開一個子菜單，顯示各種設定。使用方向鍵 △ ▽ 選擇 `{{<T "DataAcquisition" >}}`。按 `{{<T "Ok" >}}` 確認。

3. 另一個子菜單將會打開，您可以使用方向鍵 △ ▽ 在 `{{<T "WeightRecording" >}}`、`{{<T "RatingAnimals" >}}` 和 `{{<T "ControlPeriodFreshCows" >}}` 的設定欄位之間切換。選擇 `{{<T "WeightRecording" >}}` 並按 `{{<T "Ok" >}}` 確認。

4. 使用方向鍵 △ ▽ 選擇設定欄位 `{{<T "MaximumPrecision" >}}`。使用方向鍵 ◁ ▷ 設定所需的最大精度。設備上的體重記錄精度現在遵循所規定的設定。

    ![VitalControl: menu path settings maximum precision weight recording](../images/precisionweightrecording.png "規定體重記錄的最大精度。")

<br>
按下 `F1` 鍵 &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp; 保存設定並返回頂層菜單 `{{<T "DataAcquisition" >}}`。

## 動物評價模式 {#mode-of-animal-rating}

{{% alert title="說明" %}}
在簡單模式中，動物評價時僅查詢一般狀況（綠色/黃色/紅色）。在擴展評價中，查詢4個評價類別：一般狀況、飼料消耗、腹瀉和呼吸道疾病。
{{% /alert %}}

要在您的設備上設定 `{{<T "RatingAnimals" >}}`，請按以下步驟操作。

1. 在您的 VitalControl 設備主畫面中，選擇菜單項目 <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` 並按下 `{{<T "Ok" >}}` 按鈕。

2. 將會打開一個子菜單，顯示各種設定。使用方向鍵 △ ▽ 選擇 `{{<T "DataAcquisition" >}}`。按 `{{<T "Ok" >}}` 確認。

3. 另一個子選單會打開，您可以使用方向鍵 △ ▽ 在 `{{<T "WeightRecording" >}}`、`{{<T "RatingAnimals" >}}` 和 `{{<T "ControlPeriodFreshCows" >}}` 的設定欄位之間切換。選擇 `{{<T "RatingAnimals" >}}` 並按 `{{<T "Ok" >}}` 確認。

4. 使用 ◁ ▷ 方向鍵設定動物的期望評分。

   ![VitalControl: menu settings average rating of animals](../images/raitingofanimals.png "Rating of animals")

## 控制新鮮牛的控制期 {#control-period-of-fresh-cows}

{{% alert title="說明" %}}
在管理新鮮牛時，建議在出生後的幾天內每天檢查動物，包括測量牠們的體溫。這段控制期的長度因農場而異。因此，可以在 VitalControl 設定中將控制期的長度設置為 3 到 14 天之間的值。設定的新鮮牛控制期值決定了在[新鮮牛列表](../../lists/fresh-cows/)中顯示的每隻動物的柱狀圖的列數。
{{% /alert %}}

要設定新鮮牛的控制期長度，請按以下步驟進行：

1. 在您的 VitalControl 設備的主畫面中，選擇菜單項目 <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` 並按 `{{<T "Ok" >}}` 按鈕。

2. 一個子選單會打開，顯示各種設定。使用方向鍵 △ ▽ 選擇 `{{<T "DataAcquisition" >}}`。按 `{{<T "Ok" >}}` 確認。

3. 另一個子選單會打開，您可以使用方向鍵 △ ▽ 在 `{{<T "WeightRecording" >}}`、`{{<T "RatingAnimals" >}}` 和 `{{<T "ControlPeriodFreshCows" >}}` 的設定欄位之間切換。選擇 `{{<T "ControlPeriodFreshCows" >}}` 並按 `{{<T "Ok" >}}` 確認。

4. 使用 ◁ ▷ 方向鍵設定產後控制期的期望天數。

   ![VitalControl: menu settings control period fresh cows](../images/controlperiodfreshcows.png "Control period fresh cows")

<br>

儲存設定並返回頂端選單 <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}`，按下 `F1` 鍵 &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;。
