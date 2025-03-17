---
title: 購買的動物
linkTitle: 購買的動物
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: purchased-animals
description: >
  在這裡您可以查看當前的購買情況並匯出數據。
categories: [農場新功能]
tags: [農場新功能]
translationKey: new-on-farm/new-on-farm
---
## 購買的動物 {#purchased-animals}

在此列表中，您將找到通過批量記錄創建的所有動物。您可以匯出此列表，從而直接在牧群管理程序 DSP-Herde 和 HI-Tier 中註冊您的新增動物。或者，您可以刪除所有購買通知。

{{% alert title="提示" %}}
要匯出數據，您需要隨附的 UBS 隨身碟。在按照說明操作之前，將 USB 隨身碟通過 USB-C 轉接器連接到您的 VitalControl 設備。
{{% /alert %}}

1. 在您的 VitalControl 設備主屏幕中，選擇菜單項 <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="New on farm" /> `{{<T "NewOnFarm" >}}` 並按下 `{{<T "Ok" >}}` 按鈕。

2.  將打開一個子菜單，您可以在其中選擇 <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="New on farm, no transponder" /> `{{<T "NewOnFarmNoTransponder" >}}`、<img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Purchased animals" /> `{{<T "PurchasedAnimals" >}}`、<img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="No national animal ID" /> `{{<T "NoAnimalIDAssigned" >}}`、<img src="/icons/main/births.svg" width="40" align="bottom" alt="Births" /> `{{<T "Births" >}}` 和 <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="No transponder assigned" /> `{{<T "NoTransponderAssigned" >}}`。使用箭頭鍵 ◁ ▷ △ ▽ 選擇菜單項 <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Purchased animals" /> `{{<T "PurchasedAnimals" >}}` 並確認 `{{<T "Ok" >}}`。

3. 將打開一個列表，其中包含您通過批量記錄菜單項註冊的購買項目。

4. 使用 `F2` 鍵 `{{<T "CSVExport" >}}`。

5. CSV 訊息列表現在已儲存在您的 USB 隨身碟上。

    ![VitalControl: 購買動物列表，csv 匯出](../images/purchasedanimals.png "購買動物，csv 匯出")

## 選項：匯出後刪除所有通知 {#options-delete-all-notices-after-export}

使用此選項，您可以設定在 CSV 檔案匯出後是否刪除 `{{<T "PurchasedAnimals" >}}` 列表中的所有訊息。只有在您確定不再需要這些訊息時才使用此選項！

1. 使用 `F3` 鍵。將開啟一個子選單。

2. 使用箭頭鍵 △ ▽ 選擇選單項目 `{{<T "DeleteAllNoticesAfterExport" >}}` 並用 `{{<T "Ok" >}}` 確認。

3. 現在方框已被標記為勾選。選項已啟用。再次用 `{{<T "Ok" >}}` 確認以停用該選項。

    ![VitalControl: 購買動物列表，csv 匯出](../images/delete-all.png "匯出後刪除所有通知")

## 直接功能呼叫 {#direct-function-calls}

除了創建匯出檔案外，您還有以下選項：

- [取消連結晶片](#unlink-transponder)
- [清除所有購買通知](#clear-all-purchase-notices)
- [刪除動物 + 通知](#delete-animal--purchase-notice)
- [清除購買通知](#clear-notice-of-purchase)
- [編輯標記](#edit-data-of-purchased-animal)

{{% alert title="提示" %}}
請先按照上述說明打開 `{{<T "PurchasedAnimals" >}}` 列表。
{{% /alert %}}

### 取消連結晶片 {#unlink-transponder}

您可以使用此功能從動物中移除晶片。

1. 使用 `F3` 鍵。將開啟一個子選單。

2. 使用箭頭鍵 △ ▽ 選擇選單項目 `{{<T "UnlinkTransponder" >}}` 並用 `{{<T "Ok" >}}` 確認。

3. 晶片已成功取消連結。

    ![VitalControl: 購買動物列表，csv 匯出](../images/unlink-transponder.png "購買動物，取消連結晶片")

### 清除所有購買通知 {#clear-all-purchase-notices}

透過此功能，您可以從 `{{<T "PurchasedAnimals" >}}` 清單中刪除所有動物，而無需先建立匯出檔案。

1. 使用 `F3` 鍵。會開啟一個子選單。

2. 使用方向鍵 △ ▽ 選擇選單項目 `{{<T "ClearAllPurchaseNotices" >}}`，並按 `{{<T "Ok" >}}` 確認。

3. 購買通知已成功刪除。

    ![VitalControl: 購買動物清單，清除購買通知](../images/clear.png "清除所有購買通知")

### 刪除動物 + 購買通知 {#delete-animal--purchase-notice}

要刪除動物及其相應的購買通知，請按以下步驟操作：

1. 使用方向鍵 △ ▽ 選擇您要刪除的動物。

2. 使用 `F3` 鍵。會開啟一個子選單。

3. 使用方向鍵 △ ▽ 選擇選單項目 `{{<T "UnregisterAnimalAndBirthNotice" >}}`，並按 `{{<T "Ok" >}}` 確認。

4. 動物及其訪問訊息已成功刪除。

    ![VitalControl: 購買動物清單，刪除動物 + 通知](../images/delete.png "刪除動物 + 通知")

### 清除購買通知 {#clear-notice-of-purchase}

要從清單中刪除動物的購買通知，請按以下步驟操作：

1. 使用方向鍵 △ ▽ 選擇您要刪除購買通知的動物。

2. 使用 `F3` 鍵。會開啟一個子選單。

3. 使用方向鍵 △ ▽ 選擇選單項目 `{{<T "ClearPurchaseNotice" >}}`，並按 `{{<T "Ok" >}}` 確認。

4. 所選動物的購買通知已成功刪除。

    ![VitalControl: 購買動物清單，清除購買通知](../images/clearnotice.png "清除購買通知")

### 編輯購買動物的資料 {#edit-data-of-purchased-animal}

要編輯購買清單中動物的資料，請按以下步驟操作：

1. 使用方向鍵 △ ▽ 選擇您要編輯的動物。

2. 使用 `{{<T "Ok" >}}` 按鈕。會開啟一個包含動物資料的子選單。您可以在[這裡](/en/docs/actions/edit/#edit-animal-data)找到如何編輯這些資料。

    ![VitalControl：購買動物列表，編輯動物資料](../images/edit.png "編輯購買動物的資料")
