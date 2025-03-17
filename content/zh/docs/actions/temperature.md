---
title: 測量體溫
linkTitle: 體溫
slug: measure-temperature
weight: 10
description: >
  測量動物的發燒情況。
date: 2023-07-26
Categories: [Actions]
tags: [Actions, fever, temperature]
translationKey: actions/temperature
---

## 測量發燒 {#measure-fever}

使用體溫操作來測量動物的體溫。將測量探頭直肛插入到指定的測量深度（對於大型動物，整個長度插入至隆起處，對於小型反芻動物，約6厘米或2/3的測量探頭）。測量過程自動進行。測量過程完成後，設備會顯示測得的溫度。顏色編碼指示溫度是否在綠色、黃色或紅色範圍內。在進行測量體溫活動時，您有多種選擇：

- [保存結果](#save-result)以動物為單位記錄測量
- 將動物放入[觀察名單](#put-on-the-watch-list)。這樣可以更方便地檢查重複測量，因為您可以使用“觀察名單”調出這些動物，從而更容易找到顯眼的動物。
- 開啟和關閉[測量地點照明](#lighting-of-the-measurement-location-on-and-off)
- [重複測量](#repeat-the-measurement)
- [取消操作](#cancel-the-action)

{{% alert title="提示" %}}
如果溫度在黃色區域（“升高”）或紅色區域（“發燒”），VitalControl會自動將選定的動物放入警報名單。通過與其他數據的關聯，您可以持續監控個別動物的健康狀況。
{{% /alert %}}

### 預備步驟 {#preliminary-steps}

1. 在您的VitalControl設備主屏幕中，選擇菜單項&nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` 並按下 `{{<T "Ok" >}}` 按鈕。

2. 使用晶片掃描動物或從列表中選擇動物。按 `{{<T "Ok" >}}` 確認，並使用箭頭鍵 △ ▽ 選擇動物。按 `{{<T "Ok" >}}` 確認。

3. 動物動作的子選單會打開。動作 <img src="/icons/actions/temperature.svg" width="10" align="bottom" alt="Temperature" /> `{{<T "Temperature" >}}` 會自動選擇。確認請按 `{{<T "Ok" >}}`。

4. 現在進行測量。一旦測量完成，根據設定的閾值，溫度會以藍色、綠色、黃色或紅色顯示。

{{< tabpane >}}
{{< tab header="Preliminary steps:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Actions Preliminary steps](../images/firststeps-scan.png "Preliminary steps")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Actions Preliminary steps](../images/firststeps.png "Preliminary steps")
{{% /tab %}}
{{< /tabpane >}}

### 儲存結果 {#save-result}

1. 完成初步步驟。

2. 使用 `F3` 鍵 <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> 或確認請按 `{{<T "Ok" >}}` 來儲存結果。

    ![VitalControl: Menu Actions Save results](../images/saveresults.png "Save results")

### 加入觀察清單 {#put-on-the-watch-list}

1. 完成初步步驟。

2. 按下中間上方的 `On/Off` 按鈕 <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />。

3. 一個彈出選單會打開，您可以從選單項目中選擇 `{{<T "RepeatMeasurement" >}}`、`{{<T "AddToWatchList" >}}` 或 `{{<T "Flashlight" >}}`。使用箭頭鍵 △ ▽ 選擇 `{{<T "AddToWatchList" >}}`，然後按下中央的 `{{<T "Ok" >}}` 鍵或 `F3` 鍵 `{{<T "Ok" >}}`。

    ![VitalControl: Menu Actions Put on watch list](../images/watchlist.png "Put on watch list")

### 測量地點的照明開關 {#lighting-of-the-measurement-location-on-and-off}

1. 完成初步步驟。

2. 按下中間上方的 `On/Off` 按鈕 <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />。

3. 彈出選單會開啟，您可以從選單項目中選擇 `{{<T "RepeatMeasurement" >}}`、`{{<T "AddToWatchList" >}}` 或 `{{<T "Flashlight" >}}`。使用箭頭鍵 △ ▽ 選擇 `{{<T "Flashlight" >}}`，然後按下中央的 `{{<T "Ok" >}}` 鍵或 `F3` 鍵 `{{<T "Ok" >}}`。

    ![VitalControl: Menu Actions Flashlight on off](../images/light.png "Flashlight on off")

### 重複測量 {#repeat-the-measurement}

1. 完成初步步驟。

2. 按下中間上方的 `On/Off` 按鈕 <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />。

3. 彈出選單會開啟，您可以從選單項目中選擇 `{{<T "RepeatMeasurement" >}}`、`{{<T "AddToWatchList" >}}` 或 `{{<T "Flashlight" >}}`。使用箭頭鍵 △ ▽ 選擇 `{{<T "RepeatMeasurement" >}}`，然後按下中央的 `{{<T "Ok" >}}` 鍵或 `F3` 鍵 `{{<T "Ok" >}}`。

    ![VitalControl: Menu Actions Light on off](../images/repeat.png "Light on off")

### 取消操作 {#cancel-the-action}

1. 完成初步步驟。

2. 按下 `F1` <img src="/icons/footer/cancel.svg" width="25" align="bottom" alt="Cancel" /> 鍵以取消操作。

    ![VitalControl: Menu Actions Cancel the action](../images/saveresults.png "Cancel the action")

{{% alert title="提示" %}}
如果此操作不可用，可能是因為操作已被停用！在[action settings](../setting/)選單中啟用該操作。或者，重置所有操作將使該操作重新出現。
{{% /alert %}}
