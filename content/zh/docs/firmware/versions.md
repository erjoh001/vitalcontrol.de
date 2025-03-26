---
title: "最新韌體版本"
linkTitle: "最新版本"
date: 2023-07-18T12:47:29+02:00
draft: false
weight: 10
description: >
 VitalControl 裝置目前的韌體版本列表。
---

## 確定裝置上安裝的韌體版本 {#determine-firmware-versions-installed-on-your-device}

1. 在您的 VitalControl 裝置主畫面中，打開選單項目 <img src="/icons/device.svg" width="25" align="bottom" alt="Device" /> `{{<T "Device" >}}`。

2. 調出子選單 `{{<T "Info" >}}`，選擇選單項目 `{{<T "Software" >}}` 並確認 `{{<T "Ok" >}}`。將會彈出一個窗口，列出目前安裝在您裝置上的軟體版本：

![VitalControl: determine firmware versions](../images/firmware-versions.png "顯示韌體版本")

## 最新韌體版本：{#latest-firmware-versions}

下表列出了目前的韌體版本：

|                 | GUI-韌體  | 中介軟體  | 開機載入程式 |
|-----------------|:-------------:|:-----------:|:----------:|
| **版本**     | {{% version/firmware component="gui" %}} | {{% version/firmware component="middleware" %}} | {{% version/firmware component="bootloader" %}} |
| **日期**       | {{% version/firmware component="gui" info="date" %}}  | {{% version/firmware component="middleware" info="date" %}} | {{% version/firmware component="bootloader" info="date" %}} |
| **提交哈希** | {{% version/firmware component="gui" info="commitHash" %}} | {{% version/firmware component="middleware" info="commitHash" %}} |  {{% version/firmware component="bootloader" info="commitHash" %}} |
| **提交號碼**    | {{% version/firmware component="gui" info="commitNo" %}} | {{% version/firmware component="middleware" info="commitNo" %}} | {{% version/firmware component="bootloader" info="commitNo" %}}|

{{% alert title="提示" %}}
如果您在裝置上缺少較新的功能或遇到穩定性問題，建議您將裝置上的韌體更新到最新發布的版本。
{{% /alert %}}
