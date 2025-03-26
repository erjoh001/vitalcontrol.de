```markdown
---
title: "還原資料備份"
linkTitle: "還原"
date: 2023-07-20
weight: 20
description: >
 透過資料還原，可以使用備份檔案將 VitalControl 裝置的全部資料還原到不同的裝置上。
translationKey: restore
---
{{% usb-drive/zh "為了將資料備份還原到您的 VitalControl 裝置上，" %}}

在此 USB 隨身碟上，必須存在一個目錄 `backup`，其中必須包含一個有效的 **資料備份檔案 `backup.vcu`**。

![USB 隨身碟與 VitalControl 備份檔案](../images/backup-file.png "USB 隨身碟與備份檔案")

{{% alert title="注意" %}}
在您的 USB 隨身碟的 `backup` 目錄中，您可能會找到多個擴展名為 `.vcu` 的備份檔案。VitalControl 裝置總是從名為 `backup.vcu` 的檔案中還原備份資料，這通常是最新的檔案。如果您想從較舊的備份檔案（檔案名中包含備份日期）中還原資料，您必須在執行資料還原之前將此較舊的備份檔案重新命名為 `backup.vcu`！
{{% /alert %}}

## 資料還原到 VitalControl 裝置 {#data-restoration-to-vitalcontrol-device}

1. 在您要還原資料的 VitalControl 裝置主畫面中，打開選單項目 &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `裝置`。

2. 調用子選單 `資料管理`，然後選擇子選單項目 `資料備份`。現在選擇選單項目 `還原備份` 並確認 `OK`。系統現在要求您插入 USB 隨身碟：

   ![VitalControl: 選單路徑資料還原](../images/restore.png "從備份檔案還原")

3. 將 USB 隨身碟（C 插頭）插入裝置底部的連接器。

   ![VitalControl: 插入 USB 隨身碟](/images/firmware/update/plug-in-dual-usb-stick.svg "插入 USB 隨身碟")

4. 一旦裝置檢測到 USB 隨身碟的插入，將出現確認窗口。確認此彈出窗口 `是` 以開始資料還原。解壓縮和還原備份可能需要一分鐘或更長時間。當資料還原完成時，將顯示成功訊息：
```

   ![VitalControl: 成功訊息資料還原](../images/restore-done.png "成功訊息資料還原")

5. 備份資料已成功還原至 VitalControl 裝置。
