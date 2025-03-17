---
title: 將動物和測量數據匯出到農場管理電腦
linkTitle: 數據匯出 (PC)
date: 2023-07-19
weight: 15
description: >
 將動物數據和測量值從 VitalControl 設備匯出到多個 CVS 文件
categories: [數據匯出]
translationKey: farmPC
---
按照以下步驟將數據從 VitalControl 匯出到您的電腦的存儲設備：

### 將 VitalControl 連接到電腦 {#connect-vitalcontrol-to-pc}

1. 使用隨附的 USB 線將 VitalControl 設備連接到您的電腦或筆記型電腦。

   ![將 VitalControl 連接到電腦或筆記型電腦](/images/synchronisation/connect-to-pc.svg "將 VitalControl 連接到電腦")

1. 確保您的 VitalControl 設備已開啟。

### 執行數據匯出 {#perform-data-export}

1. 按下 Windows 鍵以開啟開始選單

1. *僅限 Windows 11*: 點擊 `所有應用程式` 按鈕

1. 在已安裝的應用程式列表中，向下滾動至字母 `U`。您應該會找到一個選單項目 `Urban VitalControl`。如有必要，展開此項目以顯示所有子選單項目。

   {{% alert title="注意" %}}
如果您在應用程式列表中找不到 `Urban VitalControl` 項目，您可能需要先在電腦上[安裝](../vcsynchronizer/installation/) `VCSynchronizer` 軟體。
   {{% /alert %}}

1. 點擊選單項目 `數據匯出 (CVS)`。

   ![Windows 開始選單，Urban VitalControl (VCSynchronizer) 的選單項目](../vcsynchronizer/images/data-export/data-export.png "Windows 開始選單，VitalControl")

1. 匯出過程開始。一旦數據匯出完成，將會打開一個資源管理器視窗，顯示包含四個新創建的[匯出文件](../../data-export/export-files/)的本地數據目錄。

   ![包含匯出文件的本地數據目錄](../../data-export/images/export-files.png "匯出文件，本地存儲")

   {{% alert title="注意" %}}
  您可以在您選擇的試算表程式中打開這四個[匯出文件](../../data-export/export-files/)中的每一個（例如 [Microsoft Excel](https://products.office.com/excel) 或 [OpenOffice Calc](https://www.openoffice.org/)），並在那裡進行數據的高級分析。以下顯示的是在試算表程式中 `animals.csv` 表格的視圖：


  ![在試算表軟體中開啟的匯出動物資料表](../../data-export/images/animals.png "包含動物資料的試算表軟體")
   {{% /alert %}}
