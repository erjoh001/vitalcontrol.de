---
title: 將資料匯出至 USB 隨身碟
linkTitle: 至 USB 隨身碟
date: 2023-07-20
weight: 10
description: >
  將包含動物資料和測量值的 CVS 資料檔案從 VitalControl 裝置匯出至 USB 隨身碟。
categories: [資料匯出]
tags: [CSV 檔案, USB 隨身碟]
translationKey: data-export/usb-drive
---
{{% usb-drive/zh "若要匯出您的裝置資料、" %}}

## 執行資料匯出 {#perform-data-export}

1. 在您的 VitalControl 裝置主畫面中，打開選單項目 &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `{{<T "Device" >}}`。

2. 呼叫子選單 `{{<T "DataManagement" >}}`，選擇選單項目 `{{<T "AnimalData" >}}` 並確認 `{{<T "Ok" >}}`。

3. 另一個子選單會打開。選擇選單項目 `{{<T "ExportAnimalData" >}}` 並確認 `{{<T "Ok" >}}`。

4. 現在系統會要求您插入 USB 隨身碟：

   ![VitalControl: Menu path data export](../images/data-export.png "Invoke data export")

5. 將 USB 隨身碟（C 插頭）插入裝置底部的連接器。

   ![VitalControl: insert USB flash drive](/images/firmware/update/plug-in-dual-usb-stick.svg "Insert USB flash drive")

6. 一旦裝置偵測到 USB 隨身碟的插入，資料匯出會自動開始。寫入備份資料可能需要幾秒鐘。當資料匯出完成時，會顯示成功訊息：

   ![VitalControl: success message data export](../images/success-data-export.png "Success data export")

7. 資料匯出現已完成。您會在 USB 隨身碟的 `export-csv` 目錄中找到四個已建立的[匯出檔案](../export-files/)。

   ![USB flash drive with export files VitalControl](../images/export-files.png "Export files on USB flash drive")

   {{% alert title="Notes" %}}
  - 為防止匯出檔案被意外覆蓋，每個匯出檔案的檔名中都包含檔案建立的日期和時間。如果您多次匯出動物資料，請務必使用匯出檔案的最新版本。
  - 匯出檔案的大小取決於 VitalControl 上的動物數量和執行的測量次數。一般來說，匯出檔案只佔用 USB 隨身碟上幾 kB 的儲存空間。
   {{% /alert %}}
