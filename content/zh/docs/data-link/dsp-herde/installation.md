---
title: "技術 VitalControl 的設定："
linkTitle: 設定
date: 2023-08-04T12:21:53+02:00
draft: false
description: >
  定義軟體 *Herde* 與 VitalControl 裝置之間資料交換的同步參數。
weight: 10
categories: [DSP Herde]
translationKey: DSPherde/installation
---
在第一次[資料交換](../data-exchange/)之前，必須建立並設定與 VitalControl 裝置的技術連接。

{{% alert title="注意" %}}
在設定技術連接之前，請檢查您的電腦上是否安裝了 'VCSynchronizer' 軟體；此軟體是資料交換所必需的。為此，打開 Windows 開始選單，並在應用程式列表中搜尋名為 'Urban VitalControl' 的項目。如果找不到此項目，請在您的電腦上[安裝](../../vcsynchronizer/installation/) `VCSynchronizer` 軟體。
{{% /alert %}}

要設定技術，請按以下步驟進行：

## 為與 VitalControl 裝置的資料交換創建新的參數集 {#create-new-parameter-set-for-data-exchange-with-vitalcontrol-device}

1. 在 `Herde` 軟體中，打開 `設定` 視窗。根據您的使用者介面配置，您可以透過主選單中的 `組織` 項目（頂層項目 _設定_）、側邊欄選單或自訂工具箱（水平或垂直）打開此視窗。

   ![軟體 Herde：調用設定選單](../screenshots/settings.png "Herde：調用設定")

1. 一個彈出視窗 `設定` 會打開，左側邊欄列出了許多設定類別。打開類別 `服務` <span style="font-size: 140%">➊</span> 並選擇子類別 `技術` <span style="font-size: 140%">➋</span>。

1. 在右側主區域的標題中，現在會出現一個下拉選單，其中列出了所有已定義的技術參數集。已設定的技術數量顯示在右側。點擊按鈕 ![軟體 Herde：創建新的技術參數集](/icons/new.png "Herde：創建技術連接") `創建新的技術參數集` <span style="font-size: 140%">➌</span>。

![Software Herde: settings screen for technology](../screenshots/settings-technology.png "Herde: 設定技術")

1. 另一個彈出視窗會開啟。輸入 `VitalControl` 作為**連接名稱**，並選擇 `Urban VitalControl (Gen 2)` 作為**技術類型**，然後點擊 `接受` 按鈕。

   ![Software Herde: Create new parameter set for VitalControl device](../screenshots/new-technology.png "創建新技術：VitalControl")。

   現在已創建技術 `VitalControl` 的參數集，必須在接下來的步驟中進行配置。

## 配置：基本設定 {#configuration-basic-settings}

最初，顯示的畫面中選擇了 `基本設定` 標籤，如下圖所示。根據您的農場特定條件，在 `外部程式` <span style="font-size: 140%">➊</span>、`動物資料` <span style="font-size: 140%">➋</span>、`位置` <span style="font-size: 140%">➌</span> 和 `離開` <span style="font-size: 140%">➍</span> 類別中進行調整。

   ![Software Herde: Configuration of basic settings](../screenshots/basic-settings.png "技術 VitalControl：基本設定")。

### 類別 `外部程式` <span style="font-size: 140%">➊</span> {#category-external-program-}

為了在 VitalControl 和 Herde Plus 之間進行數據交換，需要基本軟體 [VitalControl Synchronizer](../../vcsynchronizer) 作為外部輔助程式。為了使此程式正確運行，需要在 `外部程式` <span style="font-size: 140%">➊</span> 類別中進行一些調整。

- **數據交換的設備名稱**：  
  默認情況下，此欄位為空。然而，建議在此輸入您的電腦名稱。為此，請按下拉欄位右端的圖標 ![Herde Software: Create new technology coupling](/icons/arrow-down.png "Herde: 創建技術耦合") `向下箭頭`。您的電腦名稱現在將被確定並顯示在下拉列表中供選擇。一旦此欄位填入您的電腦名稱並儲存此設定，從現在起只能從您的電腦觸發數據交換。

- **執行路徑**：  
  請在此輸入 `%LOCALAPPDATA%\Urban\VitalControl\Synchronizer`。這是程式 `VitalControl Synchronizer` 的絕對路徑（更具體地說，是指向 `vcsynchronizer.exe` 的路徑）。如果在 [安裝 VCSynchronizer](../../vcsynchronizer/installation) 時更改了此程式的目標目錄，請在此輸入選定的目標目錄。

- **程式 HerdePlus 🡒 技術**：  
  此輸入欄位需要填入 `vc_imp.bat`。相應命名的批次檔案指定了資料匯入過程中的操作順序。

- **技術 🡒 程式 HerdePlus**：  
  此輸入欄位需要填入 `vc_exp.bat`。相應命名的批次檔案指定了資料匯出過程中的操作順序。

### 類別 `動物資料` <span style="font-size: 140%">➋</span> {#category-animal-data-}

為了使資料交換完全運作，還需要在類別 '動物資料' <span style="font-size: 140%">➋</span> 中進行進一步調整。

- **動物編號**：  
  此設定決定動物在 VitalControl 裝置上顯示的 ID：
  - 如果您已為動物分配了短 ID（`Barn no.`，2 到 6 位數），應在此選擇 'Barn number'：動物在 VitalControl 上顯示的 ID 將對應於分配給動物的圈舍號。
  - 如果您**未**為動物分配短 ID 號碼——例如在育肥部門中很常見——那麼應在此選擇 `Tag no. (5 digits)`。動物在 VitalControl 裝置上顯示的 ID 將對應於動物黃色耳標上印刷的 ID 的最後 5 位數。

<br>

- **發射器編號**：  
  此設定決定在 RFID 掃描時動物預期的編號：  
  - 如果您在動物上佩戴了帶有轉發器的項圈或耳轉發器——例如用於自動飼料機的識別——應在此選擇 'Transponder'。
  - 如果您的動物或小牛佩戴了編碼為官方國家 15 位數識別號碼的電子耳標，該號碼將用於動物整個生命週期的識別，應在此選擇 'Tag no. (15 digits)`。

<br>

- **轉移的最低年齡**：  
  如果在此輸入欄位中輸入 `0` 作為值，**所有動物**都會被轉移到 VitalControl 設備，不論其年齡。大於 `0` 的值定義了要轉移的動物的最低年齡（以天為單位）。例如，如果**僅限牛**要被轉移到設備，這裡必須輸入 600 天（= 20 個月）作為最低年齡。

### 類別 `位置` <span style="font-size: 140%">➌</span> {#category-locations-}

使用此類別來排除某些位置的動物從數據轉移到設備。為此，請取消勾選您**不想**將其飼養的動物轉移到設備的那些位置。

### 類別 `離開` <span style="font-size: 140%">➍</span> {#category-leaving-}

在此勾選「HERDEplus 中的離開」選項。這樣您可以指定在同步過程中，離開群體的動物也會從 VitalControl 設備中刪除。
同時勾選「庫存中不存在」選項。這樣您可以指定在同步過程中，VitalControl 上不被 `Herde` 軟體識別的動物會從 VitalControl 中刪除。

## 配置：技術特定設置 {#configuration-technology-specific-settings}

接下來，點擊 `技術特定設置` 標籤以確定數據交換的範圍。建議勾選那裡列出的所有選項框，除了 `處理後保存導入文件` 的選項框。後者選項框是為診斷目的而設，應僅在服務人員要求時選擇。

- **轉移的最高年齡**：  
  如果在此輸入 `0` 作為值，**所有動物**都會被轉移到 VitalControl 設備，不論其年齡。大於 `0` 的值定義了要轉移的動物的最高年齡（以天為單位）。例如，如果**僅限小牛**要被轉移到設備，這裡必須輸入 90 天（= 3 個月）作為最高年齡。

   ![Herde 軟體：配置數據交換](../screenshots/technology-specific-settings.png "數據交換：特定設置")。


## 儲存資料交換設定 {#save-data-exchange-settings}

在適當配置所有設定參數後，按下 `儲存 (F2)` 鍵。資料交換至 VitalControl 裝置的參數集現在已儲存並可供使用。  
現在執行[資料交換](../data-exchange/)以檢查所規定的設定是否有效，以便您能夠成功地與 VitalControl 裝置進行資料交換。
