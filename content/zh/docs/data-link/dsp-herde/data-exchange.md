```markdown
---
title: VitalControl 與牧場管理軟體 Herde 之間的數據交換
linkTitle: 數據交換
date: 2023-08-04T12:22:12+02:00
draft: false
description: >
  將 VitalControl 設備上儲存的動物與 *Herde* 軟體管理的動物同步，並將使用 VitalControl 設備記錄的測量值傳輸到 *Herde* 軟體。
weight: 20
categories: [數據交換, DSP Herde]
translationKey: DSPherde/data-exchange
---
按照以下步驟同步軟體 `Herde` 與 VitalControl 設備之間的數據：

### 將 VitalControl 連接到電腦 {#connect-vitalcontrol-to-pc}

1. 通過隨附的 USB 線纜將 VitalControl 設備連接到您的電腦或筆記型電腦。

   ![將 VitalControl 連接到電腦或筆記型電腦](/images/synchronisation/connect-to-pc.svg "將 VitalControl 連接到電腦")

1. 確保您的 VitalControl 設備已開啟。

### 執行數據交換 {#perform-data-exchange}

1. 在軟體 `Herde` 中，執行完整的數據交換。根據您的用戶介面配置，您可以通過主選單中的 `完整數據交換` 選項（頂層項目 _技術_）、側邊欄選單或自定義工具箱（水平或垂直）調用此交換。

   ![軟體 Herde：觸發完整數據交換](../screenshots/data-exchange.png "Herde：觸發數據交換")

1. 彈出窗口會打開，左側側邊欄列出規定的技術耦合。點擊標有 `VitalControl` 的按鈕以開始數據交換：

   ![軟體 Herde，開始數據交換](../screenshots/start-transfer.png "Herde：開始數據交換")

1. 第一次數據交換時會出現警告，指示 VitalControl 設備上尚未註冊任何動物。確認此通知為 `是`。然後開始數據交換。

   ![軟體 Herde，數據交換：警告](../screenshots/warning.png "數據交換：警告")

1. 數據交換是一個兩步驟的過程：在第一步 <span style="font-size: 140%">➊</span> 中，動物數據從軟體 `Herde` 傳輸到 VitalControl。在第二步 <span style="font-size: 140%">➋</span> 中，使用 VitalControl 收集的測量數據被傳輸到軟體 `Herde`。導入的數據集（動物、分娩、警報和重量）的數量列在彈出窗口中：
```


   ![與軟體 Herde 的資料交換：操作過程](../screenshots/data-transfer.png "資料交換：操作過程")

1. 資料交換成功完成後，會透過彈出視窗顯示成功訊息。

   ![軟體 Herde：資料交換成功訊息](../screenshots/success-message.png "Herde：資料交換成功訊息")

    {{% alert title="注意" %}}
如果 VitalControl 裝置上註冊了許多動物，資料交換可能需要一些時間。資料傳輸的進度可以在裝置的顯示屏上看到。

![VitalControl，資料交換：進度條](../../vcsynchronizer/images/import-animals/data-transfer.png "VitalControl：資料交換進度條")
    {{% /alert %}}
