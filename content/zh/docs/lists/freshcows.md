---
title: "新鮮牛清單"
linkTitle: "新鮮牛清單"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: fresh-cows
description: >
  便於管理您的新鮮牛。
categories: [清單]
tags: [清單, 新鮮牛]
translationKey: lists/fresh-cows
---
### 新鮮牛清單 {#fresh-cows-list}

{{% alert title="說明" %}}
在管理新鮮牛時，建議在分娩後的幾天內每天檢查動物，這被認為是最佳實踐。新鮮牛清單有助於這種新鮮牛的管理，特別是在溫度記錄方面。對於每隻動物，會顯示控制期間所有天數的柱狀圖，控制期間的每一天都由一個垂直條表示。根據條的顏色（綠色、黃色或紅色），您可以看到該動物在那一天的溫度是正常、升高還是嚴重升高。
{{% /alert %}}

牛在分娩註冊後會立即被列入新鮮牛清單。它們會在該清單上保留一段時間，這段時間的長度（以天為單位）可以在[設定](../../settings/data-acquisition/#control-period-of-fresh-cows)中調整。
 以下操作可用於此清單：

- [完整操作選單](../alarm/#full-action-menu)
- [動物資料](../alarm/#animal-data)
- [測量溫度](../alarm/#take-temperature)
- [切換警報狀態](#toggle-alarm-status)
- [切換監控狀態](#toggle-watch-status)
- [隱藏已測量的牛](#hide-measured-cows)
- [搜尋動物](../alarm/#search-animal)
- [設置篩選器](../alarm/#set-filter)

{{% alert title="提示" %}}
某些操作與[警報清單](../alarm)中的操作方式相同。這裡不再解釋。請執行預備步驟並使用各自操作的鏈接來獲取指導。
{{% /alert %}}

### 預備步驟 {#preliminary-steps}

1. 在您的VitalControl設備主畫面中選擇 <img src="/icons/main/lists.svg" width="25" align="bottom" alt="Lists" /> `{{<T "Lists" >}}` 選單項目，然後按下 `{{<T "Ok" >}}` 按鈕。

2. 一個子選單會打開，顯示各種列表。選擇 `{{<T "FreshCows" >}}` 列表 <img src="/icons/lists/freshcows.svg" width="30" align="bottom" alt="Fresh-cows" />。確認選擇 `{{<T "Ok" >}}`。

3. 現在新鮮牛列表已打開。

   ![VitalControl Lists Fresh cows list](../images/firststeps4.png "Fresh cow list")

### 切換警報狀態 {#toggle-alarm-status}

1. 完成初步步驟。

2. 使用 `F3` 鍵 &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; 呼叫一個彈出選單，列出按下 `{{<T "Ok" >}}` 鍵時的可能操作。使用箭頭鍵 △ ▽ 突出顯示操作 `{{<T "ToggleAlarmStatus" >}}`，並按下中央 `{{<T "Ok" >}}` 按鈕或 `F3` 鍵 `{{<T "Ok" >}}` 選擇此選項。

3. 在新鮮牛列表中，使用箭頭鍵 △ ▽ 選擇所需的動物並確認 `{{<T "Ok" >}}`。或者，您可以搜尋動物。使用 `On/Off` 按鈕 <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> 並使用箭頭鍵 ◁ ▷ △ ▽ 選擇所需的數字。最後確認 `{{<T "Ok" >}}`。

4. 根據其初始狀態，動物現在已被添加或從警報列表中移除。

   ![VitalControl Lists Fresh cows list](../images/togglealarmstatus.png "Toggle alarm status")

### 切換監控狀態 {#toggle-watch-status}

1. 完成初步步驟。

2. 使用 `F3` 鍵 &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; 呼叫一個彈出選單，列出按下 `{{<T "Ok" >}}` 鍵時的可能操作。使用箭頭鍵 △ ▽ 突出顯示操作 `{{<T "ToggleWatchStatus" >}}`，並按下中央 `{{<T "Ok" >}}` 按鈕或 `F3` 鍵 `{{<T "Ok" >}}` 選擇此選項。

3. 在新鮮牛列表中，使用箭頭鍵 △ ▽ 選擇所需的動物並確認 `{{<T "Ok" >}}`。或者，您可以搜尋動物。使用 `On/Off` 按鈕 <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> 並使用箭頭鍵 ◁ ▷ △ ▽ 選擇所需的數字。最後確認 `{{<T "Ok" >}}`。

4. 根據動物的初始狀態，現在將動物添加或從觀察列表中移除。

   ![VitalControl 清單 新鮮牛隻清單](../images/togglewatchstatus.png "切換觀察狀態")

### 隱藏已測量的牛隻 {#hide-measured-cows}

如果啟用此功能，已進行溫度測量的動物將在乾奶牛清單中被隱藏。如果未啟用此功能，動物將保持在清單中可見。

1. 完成預備步驟。

2. 使用 `F3` 鍵 &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Actions" />&nbsp; 呼叫列出各種選項的彈出選單。使用箭頭鍵 △ ▽ 突出顯示選項 `{{<T "HideMeasuredCows" >}}`，並按下中央 `{{<T "Ok" >}}` 按鈕或 `F3` 鍵 `{{<T "Ok" >}}` 來切換此選項。

3. 在新鮮牛隻清單中，使用箭頭鍵 △ ▽ 選擇所需的動物並確認 `{{<T "Ok" >}}`。或者，您可以搜尋動物。使用 `On/Off` 按鈕 <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> 並使用箭頭鍵 ◁ ▷ △ ▽ 選擇所需的數字。最後確認 `{{<T "Ok" >}}`。

4. 現在功能 `{{<T "HideMeasuredCows" >}}` 已啟用。啟用狀態由勾選框顯示。

   ![VitalControl 清單 新鮮牛隻清單](../images/hidemeasuredcows.png "隱藏已測量的牛隻")
