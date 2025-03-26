---
title: "出生"
linkTitle: "出生"
weight: 35
date: 2023-07-28T13:25:28+02:00
draft: false
slug: births
description: >
  在這裡您可以查看您的出生記錄並創建匯出檔案。
categories: [出生]
tags: [出生]
translationKey: new-on-farm/births
---
## 出生 {#births}

在此列表中，您可以查看您的出生記錄、編輯它們並創建匯出檔案以在 HI-Tier 中註冊。要創建匯出檔案，請按以下步驟進行：

{{% alert title="提示" %}}
要匯出資料，您需要隨附的 UBS 隨身碟。在按照說明操作之前，請將 USB 隨身碟通過 USB-C 轉接器連接到您的 VitalControl 設備。
{{% /alert %}}

1. 在您的 VitalControl 設備的主畫面中，選擇菜單項 <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="New on farm" /> `{{<T "NewOnFarm" >}}` 並按下 `{{<T "Ok" >}}` 按鈕。

2. 將打開一個子菜單，您可以在其中選擇 <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="New on farm, no transponder" /> `{{<T "NewOnFarmNoTransponder" >}}`、<img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Purchased animals" /> `{{<T "PurchasedAnimals" >}}`、<img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="No national animal ID" /> `{{<T "NoAnimalIDAssigned" >}}`、<img src="/icons/main/births.svg" width="40" align="bottom" alt="Births" /> `{{<T "Births" >}}` 和 <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="No transponder assigned" /> `{{<T "NoTransponderAssigned" >}}`。使用箭頭鍵 ◁ ▷ △ ▽ 選擇菜單項 <img src="/icons/main/births.svg" width="40" align="bottom" alt="Births" /> `{{<T "Births" >}}` 並確認 `{{<T "Ok" >}}`。

3. 將打開一個包含您所有出生記錄的列表。

4. 使用 `F3` 鍵 `{{<T "ExportListBirths" >}}`。將打開一個子菜單。

5. 使用箭頭鍵 △ ▽ 選擇菜單項 `{{<T "ExportListBirths" >}}` 並確認 `{{<T "Ok" >}}`。

6. 現在列表已作為 CSV 檔案儲存在您的 USB 隨身碟上。`{{<T "Births" >}}` 列表中的所有動物都將被刪除。
```

![VitalControl: Menu New on farm Births](../images/births.png "Births")

## 設定選項 {#setting-options}

除了建立匯出檔案外，您還有以下選項：

- [切換](#change-between-list-view-and-single-animal-view) 列表檢視和單一動物檢視
- [清除所有出生通知](../purchased-animals/#clear-all-purchase-notices)
- [刪除動物 + 通知](../purchased-animals/#delete-animal--purchase-notice)
- [清除出生通知](../purchased-animals/#clear-notice-of-purchase)
- [編輯](#edit-data-of-birth-notice) 通知

{{% alert title="提示" %}}
某些操作與 `{{<T "PurchasedAnimals" >}}` 列表中的操作相同。請按照連結進行逐步操作說明。請務必先打開 `{{<T "Births" >}}` 列表，如上面的說明所述。
{{% /alert %}}

### 切換列表檢視和單一動物檢視 {#change-between-list-view-and-single-animal-view}

1. 使用 <img src="/icons/gear.svg" width="25" align="bottom" alt="Gear" /> `開 / 關` 按鈕。

2. 使用箭頭鍵 ◁ ▷ 選擇 `{{<T "ListView" >}}` 和 `{{<T "SingleAnimalView" >}}`。

3. 使用 `F1` 鍵儲存您的設定 &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;。在列表檢視中，使用箭頭鍵 ◁ ▷ 在動物之間切換。

![VitalControl: Menu New on farm Births](../images/change.png "Change between list view and single animal view")

### 編輯出生通知資料 {#edit-data-of-birth-notice}

{{% alert title="提示" %}}
只有在列表檢視中才能編輯動物資料！
{{% /alert %}}

1. 使用箭頭鍵 △ ▽ 選擇您要編輯的動物，並確認 `{{<T "Ok" >}}`。

2. 將開啟一個子選單，您可以在其中調整各種設定。點擊[這裡](/zh/docs/new/calving/#register-a-calving)查看逐步說明。

![VitalControl: Menu New on farm Births](../images/edit2.png "Edit a birth notice")
