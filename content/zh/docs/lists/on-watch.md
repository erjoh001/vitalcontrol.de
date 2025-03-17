---
title: "監控清單"
linkTitle: "監控清單"
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: on-watch
description: >
 查看您的監控清單。
categories: [清單]
tags: [清單, 監控]
translationKey: lists/on-watch
---
## 監控清單 {#on-watch-list}

在監控清單中，您會找到所有手動添加到清單中的動物。此清單可幫助您掌握您評為顯眼的動物概況。此外，對於清單中的每個動物，您可以執行以下操作：

- [完整操作選單](../alarm/#full-action-menu)
- [動物資料](../alarm/#animal-data)
- [測量體溫](../alarm/#take-temperature)
- [評價動物](../alarm/#rate-animal)
- [從監控清單中移除](#remove-from-watch-list)
- [切換警報狀態](#toggle-alarm-status)
- [搜尋動物](../alarm/#search-animal)
- [設置篩選器](../alarm/#set-filter)

{{% alert title="提示" %}}
某些操作與在[警報清單](../alarm)中執行的方式相同。這些操作不在此處說明。請執行預備步驟並使用各自操作的鏈接以獲取指導。
{{% /alert %}}

警報清單的結構如下：

   ![VitalControl Lists On watch list](../images/onwatchstructure.png "監控清單的結構")

|符號   | 描述
|---------|-----
| ![VitalControl Lists On-watch list](../images/kopf.png "計數群體大小") | 顯示清單中有多少動物
| ![Icon for cow](../images/kopf2.png "牛頭") | 顯示所選動物是小牛還是母牛
| ![VitalControl Lists On-watch list](../images/auge.png "評分") | 最後記錄的評分顯示在符號下方，並使用交通信號燈系統的顏色
| &nbsp;<img src="/icons/actions/temperature.svg" width="12" align="bottom" alt="體溫" title="體溫" /> | 最後記錄的發燒測量顯示在符號下方，並使用交通信號燈系統的顏色
| &nbsp;&nbsp;<img src="/icons/header/alarm.svg" width="8" align="bottom" alt="顯示動物警報" title="動物警報" /> | 符號下方的圓圈標記表示該動物在警報清單中


### 初步步驟 {#preliminary-steps}

1. 在您的 VitalControl 設備主畫面中選擇 <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Lists" /> `{{<T "Lists" >}}` 菜單項目，然後按下 `{{<T "Ok" >}}` 按鈕。

2. 會打開一個子菜單，顯示各種列表。選擇列表 &nbsp;<img src="/icons/lists/onwatch.svg" width="28" align="bottom" alt="List 'On watch'" /> `{{<T "OnWatch" >}}`。按 `{{<T "Ok" >}}` 確認。

3. 現在列表 `{{<T "OnWatch" >}}` 已打開。

   ![VitalControl Lists On watch list](../images/firststeps2.png "Preliminary Steps")

### 從監控列表中移除 {#remove-from-watch-list}

1. 完成初步步驟。

2. 使用 `F3` 鍵 &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; 調出一個彈出菜單，列出按下 `{{<T "Ok" >}}` 鍵時的可能操作。使用方向鍵 △ ▽ 突出顯示操作 `{{<T "RemoveFromWatchList" >}}`，然後按下中央 `{{<T "Ok" >}}` 按鈕或 `F3` 鍵 `{{<T "Ok" >}}` 選擇此選項。

3. 在監控列表中，使用方向鍵 △ ▽ 選擇所需的動物並按 `{{<T "Ok" >}}` 確認。或者，您可以搜尋動物。使用 `On/Off` 按鈕 <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> 並使用方向鍵 ◁ ▷ △ ▽ 選擇所需的數字。最後按 `{{<T "Ok" >}}` 確認。

4. 該動物現在已從監控列表中移除。

   ![VitalControl Lists On watch list](../images/remove.png "Remove from watch list")

### 切換警報狀態 {#toggle-alarm-status}

1. 完成初步步驟。

2. 使用 `F3` 鍵 &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; 調出一個彈出菜單，列出按下 `{{<T "Ok" >}}` 鍵時的可能操作。使用方向鍵 △ ▽ 突出顯示操作 `{{<T "ToggleAlarmStatus" >}}`，然後按下中央 `{{<T "Ok" >}}` 按鈕或 `F3` 鍵 `{{<T "Ok" >}}` 選擇此選項。

3. 在觀察清單中，使用方向鍵 △ ▽ 選擇所需的動物，並按 `{{<T "Ok" >}}` 確認。或者，您可以搜尋動物。使用 `On/Off` 按鈕 <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> 並使用方向鍵 ◁ ▷ △ ▽ 選擇所需的數字。最後按 `{{<T "Ok" >}}` 確認。

4. 根據動物的初始狀態，該動物現在已被添加或從警報清單中移除。

   ![VitalControl Lists 切換警報狀態](../images/alarmstatus.png "切換警報狀態")
