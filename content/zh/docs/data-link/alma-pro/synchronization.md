---
title: VitalControl 與 Alma Pro 之間的資料同步
linkTitle: 同步
date: 2023-08-04T12:32:41+02:00
draft: false
description: >
  將儲存在 VitalControl 裝置上的動物與自動飼料機上註冊的動物同步，並將使用 VitalControl 裝置記錄的測量值傳輸到飼料機，以便於評估和更好的可視化。
weight: 20
categories: [資料交換, Alma Pro]
translationKey: alma-pro/synchronization
---
<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

要在 Alma Pro 自動飼料機和 VitalControl 裝置之間進行同步，請按以下步驟操作：

## 打開 USB 埠

1. 使用小螺絲起子鬆開 USB 埠蓋上的鎖定螺絲，然後將其向下折：

    <figure class="figure" style="margin-top: 10px;">
        <a name="open-usb-slot"><img src="/images/synchronisation/open-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom"     alt="Open USB port" title="Open USB port" /></a>
        <figcaption class="figure-caption fs-6">圖 1：打開 USB 埠</figcaption>
    </figure>

## 連接 VitalControl

2. 按下 VitalControl 裝置頂部中央的 `開/關` 按鈕 &nbsp;<img src="/icons/footer/on-off.svg" width="18" align="bottom" alt="On/Off button" /> 開啟裝置。

2. 使用隨附的 USB 線纜將 VitalControl 裝置的 USB-C 插座 <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Digit 1" /> 連接到觸控螢幕的 USB-A 插座 <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Digit 2" />。

    <figure class="figure" style="margin-top: 10px;">
        <a name="connect-vc-ap"><img src="/images/synchronisation/connect-vitalcontrol-alma_pro.svg" width="1024" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Connect VitalControl to Alma Pro" title="Connection VitalControl Alma Pro" /></a>
        <figcaption class="figure-caption fs-6">圖 2：將 VitalControl 連接到 Alma Pro</figcaption>
    </figure>

### 開始同步

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">注意</span><br>
        要開始同步 VitalControl 裝置，您必須以 <span style="font-family: monospace; font-size: 90%;">Site Manager</span> 使用者角色登入機器。否則，<a href="#synchronize-vc-ap" >同步選單</a>中的 <span style="font-family: monospace; font-size: 90%;">Synchronize</span> 按鈕將被禁用。
    </div>
</div>

4. 在觸控終端的左側邊欄中，點擊從上數第二個按鈕 <img src="/icons/feeder.svg" width="25" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> `Feeder` <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Digit 1" title="Digit 1" />。如果您在主選單中看不到側邊欄，請按下按鈕 &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> &nbsp;<span style="font-family: monospace; font-size: 90%;">Feeder</span> 以開啟 Feeder 選單。

1. 在觸控螢幕終端機的右側邊欄中，連接的餵食器符號下方，現在顯示 `VitalControl` 裝置的符號 <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Digit 2 in circle" title="Digit 2" /> <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl device" title="VitalControl"/>。點擊此符號。

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">注意</span><br>
            如果右側邊欄中 <span style="font-family: monospace; font-size: 90%;">VitalControl</span> 裝置的符號 <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl device" title="VitalControl"/> <span style="font-weight: bold;">未</span> 顯示，則表示該裝置在設定中仍被停用。在這種情況下，請按照一次性<a href="../configuration" >啟用</a>裝置的說明進行操作。
        </div>
    </div>

1. 現在將出現同步畫面。點擊底部中間的按鈕 <img src="/digits/3_negative_circled.svg" width="25" align="middle" alt="circled number 3" title="number 3" /> `同步`，以開始與 VitalControl 裝置的同步。

    <figure class="figure" style="margin-top: 10px;">
        <a name="synchronize-vc-ap"><img src="../images/synchronize-vitalcontrol-alma-pro.png" width="1024" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Synchronization VitalControl with Alma Pro" title="Synchronization VitalControl - Alma Pro" /></a>
        <figcaption class="figure-caption fs-6">圖 3：VitalControl 與 Alma Pro 自動餵食器的同步</figcaption>
    </figure>

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">注意</span><br>
            如果需要轉移的動物很多，則同步可能需要一些時間。您可以在VitalControl設備的顯示屏上查看同步進度。<br>
            <figure class="figure" style="margin-top: 25px;">
            <a name="close-usb-slot-mandatory"><img src="../../vcsynchronizer/images/import-animals/data-transfer.png" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="同步VitalControl Alma Pro，進度指示器" title="同步進度" /></a>
                <figcaption class="figure-caption fs-6">圖4：同步VitalControl Alma Pro，進度指示器</figcaption>
            </figure>
        </div>
    </div>

## 關閉USB端口

7. 成功同步後，從觸摸屏上的USB端口拔下USB線纜。將端口的保護蓋折回並用小螺絲刀擰緊鎖緊螺絲以固定。

    <figure class="figure" style="margin-top: 10px;">
        <a name="close-usb-slot"><img src="/images/synchronisation/close-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="關閉USB端口" title="關閉USB端口" /></a>
        <figcaption class="figure-caption fs-6">圖5：再次關閉USB端口</figcaption>
    </figure>

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">注意</span><br>
            確保每次同步後關閉USB端口的蓋子，以防止濕氣進入端口並保護端口免受您畜舍中腐蝕性空氣的影響！<br>
            <figure class="figure" style="margin-top: 25px;">
                <a name="close-usb-slot-mandatory"><img src="/images/synchronisation/info-close-usb-mandatory.svg" width="840" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="必須關閉USB端口" title="必須關閉USB端口" /></a>
                <figcaption class="figure-caption fs-6">圖6：必須關閉USB端口</figcaption>
            </figure>
        </div>
    </div>

请粘贴您需要翻译的Markdown内容。
