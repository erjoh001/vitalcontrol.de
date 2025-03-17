---
title: "更新您的設備韌體"
linkTitle: 更新
weight: 4
description: >
  通過執行韌體更新，可以將您的 VitalControl 設備的韌體更新到最新可用版本。
---
首先，確保您的設備有[更新的韌體版本](../versions/)可用，並根據以下說明更新設備的韌體（如有需要）。

## 所需配件 {#required-accessory}

要在您的設備上安裝更新，您需要一個雙接口 USB 隨身碟（2 合 1 USB 隨身碟）Type-C/USB 3.0，帶有 USB C 接口和 USB A 接口。此類雙接口 USB 隨身碟隨您的設備一起提供。您也可以從不同的供應商處購買此類 USB 隨身碟。

![雙接口 USB 隨身碟 (USB A / USB C)](/images/firmware/update/usb-dual-stick.svg "雙接口 USB 隨身碟")

## 準備：下載最新韌體 {#preparation-download-latest-firmware}

1. 將您的 USB 隨身碟插入電腦的 USB 接口。然後在隨身碟的根目錄中創建一個名為 'update' 的新目錄。

    ![Windows Explorer: USB 隨身碟，目錄 'update'](../images/create-folder-update.png "USB 隨身碟：目錄 'update'")

1. 下載[韌體文件](/download/firmware.vcu)（文件名：`firmware.vcu`），並將其存儲在您 USB 隨身碟中先前創建的 `update` 目錄中。更新文件需要約 2.5 MB 的存儲空間。

    ![Windows Explorer: 隨身碟，韌體文件 'firmware.vcu'](../images/save-firmware-file.png "隨身碟，韌體文件")

1. 在您的設備上創建[數據備份][]。

    {{% alert title="信息" %}}
數據備份是一種建議的預防措施。在更新 VitalControl 設備的韌體時，所有現有的動物和設備數據將被保留。
    {{% /alert %}}

[data backup]: {{< relref "../backup/backup/" >}}

## 執行韌體更新 {#perform-firmware-update}

1. 在您的 VitalControl 設備主屏幕中打開菜單項 `{{<T "Device" >}}`。

1. 呼叫子選單 `{{<T "Service" >}}`，選擇選單項目 `{{<T "FirmwareUpdate" >}}` 並確認 `{{<T "Ok" >}}`。現在系統會要求您插入已準備好的 USB 隨身碟：

    ![VitalControl: menu path firmware update](../images/firmware-update.png "Firmware update")

1. 將 USB 隨身碟（C 插頭）插入設備底部的連接器，並確認 `{{<T "Ok" >}}`。

    ![VitalControl: Insert USB flash drive](/images/firmware/update/plug-in-dual-usb-stick.svg "Insert USB flash drive")

    設備會自動執行更新。在更新過程中，顯示屏會告知您更新的進度。更新完成後，設備會自動重新啟動，並在重新啟動後顯示成功訊息：

   ![VitalControl: Success message firmware update](../images/update-success.png "Success firmware update")

   新的韌體現在已安裝在您的設備上。
