---
title: "批量登記購買動物群"
linkTitle: "批量記錄"
date: 2023-07-28T13:25:28+02:00
weight: 15
draft: false
slug: bulk-recording
description: >
  使用條碼掃描器記錄各種動物。
categories: [批量記錄]
tags: [批量記錄]
translationKey: new/bulk-recording
---
## 批量記錄 {#bulk-recording}

透過批量登記，您可以在短時間內捕捉大量動物並將其保存到您的設備中。使用條碼掃描器掃描牛護照上的耳標號碼和出生日期條碼。動物會自動保存，您可以立即掃描下一本護照。要進行動物的批量登記，請按以下步驟操作：

1. 使用電纜將條碼掃描器連接到 VitalControl。

2. 在您的 VitalControl 設備主屏幕上，選擇菜單項 <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="New animal" /> `{{<T "New" >}}` 並按下 `{{<T "Ok" >}}` 按鈕。

3. 子菜單打開。使用箭頭鍵 ◁ ▷ △ ▽ 選擇菜單項 <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" /> `{{<T "BulkRecording" >}}` 並確認 `{{<T "Ok" >}}`。

4. 另一個子菜單打開，其中包含一個動物耳標號碼的欄位和一個動物出生日期的欄位。首先掃描耳標號碼的條碼。欄位的邊框從紅色變為綠色。然後掃描出生日期。邊框會短暫變綠，然後兩個邊框再次變紅。屏幕頂部護照符號 <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Animal passports" title="Animal passports" /> 下方的計數器從 0 增加到 1。第一隻動物已保存。繼續掃描其他牛護照。每掃描一本護照，護照符號 <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Animal passports" title="Animal passports" /> 下方的計數器增加一個。群組符號 <img src="/icons/header/group.svg" width="35" align="bottom" alt="Animal group"  title="Animal group" /> 下方的計數器也增加一個。

{{% alert title="提示" %}}
護照符號下方的計數器 <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Animal passports" title="Animal passports" /> 顯示您在不離開 `{{<T "BulkRecording" >}}` 畫面時一次掃描了多少通行證。群體符號下方的計數器 <img src="/icons/header/group.svg" width="35" align="bottom" alt="New animal" /> 顯示您總共掃描了多少護照。即使您離開 `{{<T "BulkRecording" >}}` 畫面，這個計數器也不會重置為零。這個數字相當於您在菜單項目['購買'](../new-on-farm/purchased-animals/)中的條目。
{{% /alert %}}

![VitalControl: 菜單 '新建 - 批量記錄'](../images/bulk-recording.png "批量記錄")

{{% alert title="提示" %}}
在 `{{<T "BulkRecording" >}}` 菜單項目中，您有更多的設置選項。這些選項在下面進行了解釋。作為準備步驟，請始終先訪問菜單項目 `{{<T "BulkRecording" >}}`，然後按照說明進行操作。
{{% /alert %}}

{{% alert title="提示" %}}
在掃描過程中可能會出現錯誤信息。在這種情況下，條碼掃描器會發出聲音，並且無法繼續掃描。請在 VitalControl 顯示屏上確認相應的錯誤信息，然後繼續掃描。
{{% /alert %}}

### 出生日期必填 {#birth-date-mandatory}

通過此設置選項，您可以確定在創建動物時是否必須指定出生日期。如果您停用此選項，則只需掃描條碼即可保存動物。然而，對於這些動物，當前日期將被存儲為出生日期！此功能默認為啟用狀態。要停用它，請執行以下操作：

1. 使用 <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings menu" /> `開/關` 按鈕打開設置菜單。

2. 使用箭頭鍵 △ ▽ 選擇設置選項 `{{<T "BirthDateMandatory" >}}` 並用 `{{<T "Ok" >}}` 確認。

3. 黃色圓圈表示功能已啟用。灰色圓圈表示功能已停用。

4. 儲存設定並使用 `F1` 鍵 &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="儲存並返回" /> 返回到選單項目 <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="批量記錄" />&nbsp; `{{<T "BulkRecording" >}}`。

   ![VitalControl: 菜單 新出生日期必填](../images/birthdate.png "出生日期必填")

### 預設值 {#default-values}

在 `{{<T "DefaultValues" >}}` 設定選單中，您可以設定適用於每個您創建的動物的標準。使用條碼掃描器創建的過程如上所述保持不變。您可以選擇設定牲畜類型、性別、品種和所在地。要設定 `{{<T "DefaultValues" >}}`，請按以下步驟進行：

1. 使用 <img src="/icons/gear.svg" width="25" align="bottom" alt="設定選單" /> `開/關` 按鈕打開設定選單。

2. 使用箭頭鍵 △ ▽ 選擇選單項目 `{{<T "DefaultValues" >}}` 並確認 `{{<T "Ok" >}}`。

3. 一個子選單會打開，提供不同的設定選項。使用箭頭鍵 △ ▽ 選擇所需的設定選項。使用箭頭鍵 ◁ ▷ 選擇所需的設定。

4. 儲存設定並使用 `F1` 鍵&nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="儲存並返回" /> 返回到選單項目 <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="批量記錄" />&nbsp; `{{<T "BulkRecording" >}}` 。

   ![VitalControl: 菜單 新預設值](../images/defaultvalues.png "預設值")

### 記錄的值 {#recorded-values}

在 `{{<T "RecordedValues" >}}` 設定選單中，您可以指定除了耳標號碼和出生日期之外還應捕獲哪些值。您可以選擇 `{{<T "Breed" >}}`、`{{<T "Sex" >}}`、`{{<T "Whereabouts" >}}`、`{{<T "CurrentWeight" >}}`、`{{<T "BirthWeight" >}}` 和 `{{<T "TypeAnimal" >}}`。一旦您設定了至少一個值，掃描過程會發生變化。首先掃描耳標號碼和出生日期。然後使用方向鍵 △ ▽ 選擇要設定的值並設定這些值。然後使用 `F3` 鍵保存您的輸入。只有這樣，動物才會被創建！要設定要記錄的值，請按以下步驟進行：

1. 使用 <img src="/icons/gear.svg" width="25" align="bottom" alt="設定選單" /> `開/關` 按鈕開啟設定選單。

2. 使用方向鍵 △ ▽ 選擇選單項目 `{{<T "RecordedValues" >}}` 並按 `{{<T "Ok" >}}` 確認。

3. 使用方向鍵 △ ▽ 選擇要記錄的值並按 `{{<T "Ok" >}}` 確認。會出現一個黃色圓圈。如果要停用要記錄的值，再次按 `{{<T "Ok" >}}` 確認。黃色圓圈會消失。

4. 儲存設定並使用 `F1` 鍵 &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="儲存並返回" /> 返回選單項目 <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="批量記錄" />&nbsp; `{{<T "BulkRecording" >}}`。

5. 如果您想再次停用所有要記錄的值，請在選單項目 `{{<T "RecordedValues" >}}` 中選擇 `{{<T "EnableAllResetOrder" >}}` 設定選項並按 `{{<T "Ok" >}}` 確認。

   ![VitalControl: Menu New Record values](../images/recordvalues.png "記錄值")
