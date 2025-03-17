---
title: "建立資料備份"
linkTitle: "備份"
date: 2023-07-20
weight: 20
description: >
  通過資料備份，會創建一個備份檔案，其中包含存儲在 VitalControl 設備上的所有資料。
categories: [資料備份]
tags: [備份檔案, USB 隨身碟]
translationKey: backup
---
{{% usb-drive/en "為了對您的設備進行資料備份，" %}}

## 執行資料備份 {#perform-data-backup}

1. 在您的 VitalControl 設備主畫面中，打開選單項目 &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="{{< T "Device" >}}" /> `{{< T "Device" >}}`。

2. 調用子選單 `{{< T "DataManagement" >}}`，然後選擇子選單項目 `{{< T "DataBackup" >}}`。現在選擇選單項目 `{{< T "CreateBackup" >}}` 並確認 `OK`。系統會要求您插入 USB 隨身碟：

   ![VitalControl: menu path data backup](../images/backup.png "調用資料備份")

3. 將 USB 隨身碟（C 插頭）插入設備底部的連接器。

   ![VitalControl: insert USB flash drive](/images/firmware/update/plug-in-dual-usb-stick.svg "插入 USB 隨身碟")

4. 一旦設備檢測到 USB 隨身碟的插入，資料備份將自動開始。收集、壓縮和寫入備份資料可能需要一分鐘或更長時間。當備份完成時，會顯示成功訊息：

   ![VitalControl: success message backup](../images/backup-done.png "成功資料備份")

5. 資料備份現已創建。您會在 USB 隨身碟的 `backup` 目錄中找到創建的檔案 `backup.vcu`。備份檔案大約需要 1 MB 的儲存空間。

   ![USB flash drive with backup file VitalControl](../images/backup-file.png "USB 隨身碟與備份檔案")

   {{% alert title="提示" %}}
  如果您的 USB 隨身碟的 `backup` 目錄中已經存在檔案 `backup.vcu`，該檔案將被重新命名。新檔案名由前導字串 `backup` 和備份檔案創建的日期和時間組成（例如 `backup_2023-07-17_12-50-37.vcb`）。新寫入的備份檔案始終命名為 `backup.vcu`。
    {{% /alert %}}

6. 如果需要，創建的備份檔案可以用來將儲存的資料恢復到任何 VitalControl 設備。
