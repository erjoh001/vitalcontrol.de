---
title: 乾奶
linkTitle: 乾奶
slug: dry-off
weight: 115
description: >
 將奶牛乾奶或將其加入新鮮奶牛列表
date: 2023-07-26
categories: [乾奶]
tags: [乾奶]
translationKey: actions/dry-cows
---

## 乾奶 {#dry-off}

{{% alert title="提示" %}}
根據奶牛的初始狀態，您可以將動物乾奶並將其添加到乾奶列表中，或者將動物標記為新鮮奶牛，從而將其添加到新鮮奶牛列表中。功能之間的區別由加號或減號表示。
{{% /alert %}}

### 乾奶一頭牛 {#dry-off-a-cow}

1. 在您的 VitalControl 設備主畫面上，選擇菜單項 &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` 並按下 `{{<T "Ok" >}}` 按鈕。

2. 可以掃描沒有國家動物 ID 的動物的晶片，或從列表中選擇動物。為此，請按 `{{<T "Ok" >}}` 確認，然後使用箭頭鍵 △ ▽ 選擇動物 ID。按 `{{<T "Ok" >}}` 確認。

3. 動物操作的子菜單將打開。使用箭頭鍵 ◁ ▷ △ ▽ 選擇操作 <img src="/icons/actions/dryoff-plus.svg" width="35" align="bottom" alt="Dry off" /> `{{<T "DryOff" >}}` 並按 `{{<T "Ok" >}}` 確認。

4. 動物已成功標記為乾奶。

{{< tabpane >}}
{{< tab header="乾奶一頭牛：" text=true disabled=true />}}
{{% tab header="晶片掃描" text=true %}}
![VitalControl: Menu Actions Dry off](../images/dryoff-scan.png "乾奶一頭牛")
{{% /tab %}}
{{% tab header="從列表中手動選擇" text=true %}}
![VitalControl: Menu Actions Dry off](../images/dryoff.png "乾奶一頭牛")
{{% /tab %}}
{{< /tabpane >}}

### 標記為泌乳 {#mark-as-lactated}

1. 在您的 VitalControl 設備主畫面上，選擇菜單項 &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` 並按下 `{{<T "Ok" >}}` 按鈕。

2. 可以掃描沒有國家動物 ID 的動物的晶片，或從列表中選擇動物。為此，請按 `{{<T "Ok" >}}` 確認，然後使用箭頭鍵 △ ▽ 選擇動物 ID。按 `{{<T "Ok" >}}` 確認。


3. 會開啟一個包含動物動作的子選單。使用方向鍵 ◁ ▷ △ ▽ 選擇動作 <img src="/icons/actions/dryoff-minus.svg" width="35" align="bottom" alt="Dry off" /> `{{<T "DryOff" >}}` 並按 `{{<T "Ok" >}}` 確認。

4. 動物已成功標記為泌乳。

{{< tabpane >}}
{{< tab header="標記為泌乳：" text=true disabled=true />}}
{{% tab header="晶片掃描" text=true %}}
![VitalControl: Menu Actions Mark as lactated](../images/lactated-scan.png "標記為泌乳")
{{% /tab %}}
{{% tab header="從列表中手動選擇" text=true %}}
![VitalControl: Menu Actions Mark as lactated](../images/lactated.png "標記為泌乳")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="提示" %}}
如果此動作不可用，可能是該動作已被停用！在[動作設定](../setting)選單中啟用該動作。或者，重置所有動作將使該動作重新出現。
{{% /alert %}}
