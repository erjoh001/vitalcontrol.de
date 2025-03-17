---
title: "RFID 掃描：測試和診斷應答器的範圍"
linkTitle: RFID 掃描
date: 2023-08-07T10:09:46+02:00
draft: false
categories: [診斷, RFID 掃描]
description: >
  檢查您的 RFID 掃描器的範圍，或顯示讀取協議和未知應答器上儲存的數字。
translationKey: diagnosis/rfid-scan
weight: 20
---

使用「範圍測試」選單，您可以確定 VitalControl 裝置是否能讀取您手上的應答器。除了檢查相容性之外，您還可以方便地確定這些應答器使用的傳輸協議，並顯示應答器上儲存的數字。

## 執行範圍測試 {#perform-range-test}

1. 在您的 VitalControl 裝置主畫面中，打開選單項目 &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `{{<T "Device" >}}`。

1. 調出子選單 `{{<T "Service" >}}`，選擇選單項目 `{{<T "RangeTest" >}}` 並確認 `{{<T "Ok" >}}`。現在顯示一個動畫掃描畫面。

    ![VitalControl: Menu path Range test RFID scanner](../images/rangetest.png "範圍測試 RFID 掃描器")

1. 慢慢將您的應答器靠近 VitalControl 裝置的讀取頭。為了獲得良好的讀取結果，應答器必須水平對齊 VitalControl 裝置的讀取頭。

    ![ VitalControl: correctly approach transponder to RFID reading head](/images/diagnosis/transponderscan.svg "正確的應答器掃描")

1. 一旦 RFID 掃描器檢測到應答器，會觸發振動警報，並且螢幕上顯示的應答器圖像的背景顏色會變為綠色：

   ![VitalControl: Range test: Transponder detected](../images/transponder-detected.png "檢測到應答器")

1. 在讀取區域的邊界來回移動應答器數次。這樣，您可以確定 RFID 掃描器與您使用的應答器的讀取範圍。

## 應答器檢查 {#transponder-check}

執行上述的範圍測試，您也可以獲得來自不同來源的應答器資訊：

### 官方應答器耳標 {#official-transponder-ear-tags}

1. 如果您使用應答器耳標為您的動物進行標記，並且該耳標上編碼了官方分配的15位數耳標號碼，當應答器被讀取後，螢幕上會顯示以下資訊：

    - 您的動物從國家動物識別服務獲得的15位數官方ID。
    - 業務所在的國家
    - 業務所在的國家（僅限德國農場）
    - 使用的傳輸協議（FDX或HDX）
    <br>

    ![VitalControl: 檢查應答器耳標](../images/transponder-official.png "官方應答器耳標資訊")

### 第三方供應商的應答器 {#transponders-from-third-party-vendors}

1. 如果您使用來自第三方供應商（如Urban）的應答器進行動物的電子識別，當應答器被讀取後，螢幕上會顯示以下資訊：

    - 應答器上編碼的ID，數字位數因製造商而異
    - 應答器的製造商（如果儲存在應答器上）
    - 使用的傳輸協議（FDX或HDX）
    <br>

    ![VitalControl: 檢查製造商的應答器](../images/transponder-manufacturer.png "製造商應答器資訊")
