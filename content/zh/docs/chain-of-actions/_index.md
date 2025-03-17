---
title: "動作鏈：設定和使用"
linkTitle: "動作鏈"
weight: 15
date: 2023-07-28T13:25:28+02:00
draft: false
slug: chain-of-actions
description: >
  連續執行多個動物動作
categories: [動作鏈]
tags: [動作鏈, 動作]
translationKey: action-chain
---
## 動作鏈 {#chain-of-actions}

動作鏈允許您自動為動物連續執行多個動作。例如，您可以選擇動作 `{{<T "Temperature" >}}` 和 `{{<T "Rating" >}}`。如果您接著執行動作鏈，您可以先測量動物的體溫，然後立即記錄評分。

### 使用動作鏈 {#use-chain-of-actions}

1. 在您的 VitalControl 設備主畫面上，選擇菜單項 &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Chain of actions" />&nbsp; `{{<T "ActionChain" >}}` 並按下 `{{<T "Ok" >}}` 按鈕。

2. 使用晶片掃描動物或按 `{{<T "Ok" >}}` 並使用方向鍵 △ ▽ ◁ ▷ 輸入所需的動物 ID。

3. 現在動作鏈已經執行。當動作鏈中的所有動作都完成後，可以直接選擇下一個動物。

{{< tabpane >}}
{{< tab header="使用動作鏈：" text=true disabled=true />}}
{{% tab header="晶片掃描" text=true %}}
![VitalControl: Menu chain of actions](images/chainofactions-scan.png "Chain of actions")
{{% /tab %}}
{{% tab header="從列表中手動選擇" text=true %}}
![VitalControl: Menu chain of actions](images/chainofactions.png "Chain of actions")
{{% /tab %}}
{{< /tabpane >}}

### 設定動作鏈 {#set-chain-of-actions}

1. 在您的 VitalControl 設備主畫面上，選擇菜單項 &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Chain of actions" />&nbsp; `{{<T "ActionChain" >}}` 並按下 `{{<T "Ok" >}}` 按鈕。

2. 使用按鈕 `F2` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Aktionskette" />&nbsp; (`{{<T "Settings" >}}`)。

3. 會彈出一個覆蓋畫面。使用箭頭鍵 △ ▽ 在列出的動作 1 - 4 之間選擇（您可以連續執行最多四個動作）。使用箭頭鍵 ◁ ▷ 為各個動作選擇所需的動作。使用 `F1` 鍵保存設置 &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;。

4. 如果您想重置整個動作鏈，請在子菜單中使用箭頭鍵 △ ▽ 選擇選項 `{{<T "ResetActionChain" >}}` 並確認 `{{<T "Ok" >}}`。

   ![VitalControl: Menu chain of actions](images/setchainofactions.png "Set chain of actions")

{{% alert title="Hint" %}}
在各個動作中，您擁有與章節 [Actions](../actions) 中描述的每個單獨動作相同的設置選項。
{{% /alert %}}

{{% alert title="Hint" %}}
動作鏈開始畫面中的符號顯示您已設置的動作及其順序。
{{% /alert %}}
