---
title: 記錄體重
linkTitle: 體重
slug: record-weight
weight: 20
description: >
  記錄您的動物體重。
date: 2023-07-26
categories: [動作]
tags: [動作, 體重]
translationKey: actions/weight
---

## 記錄體重 {#record-weight}
使用 &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Weighing" /> `{{<T "Weighing" >}}` 動作來單獨保存您的動物體重。為此，稱量您的動物或估計其體重，然後將此值輸入到 VitalControl 設備中。這樣可以檢查您的動物的體重發展並單獨評估它們。

{{% alert title="提示" %}}
如果平均體重在某一方向上偏差很大（過高/過低），則應調整每日增長值。
{{% /alert %}}

1. 在您的 VitalControl 設備主畫面中，選擇菜單項 &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` 並按下 `{{<T "Ok" >}}` 按鈕。

2. 使用晶片掃描動物或從列表中選擇動物。用 `{{<T "Ok" >}}` 確認並使用箭頭鍵 △ ▽ 選擇動物。用 `{{<T "Ok" >}}` 確認。

3. 動物動作的子菜單將打開。使用箭頭鍵 ◁ ▷ 選擇動作 &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Weighing" /> `{{<T "Weighing" >}}` 並用 `{{<T "Ok" >}}` 確認。

4. 一個帶有重量規格的菜單將打開。使用箭頭鍵 △ ▽ 增加或減少此值，並使用 `F3` 鍵 <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> 或 `{{<T "Ok" >}}` 鍵保存結果。

{{< tabpane >}}
{{< tab header="記錄體重：" text=true disabled=true />}}
{{% tab header="晶片掃描" text=true %}}
  ![VitalControl: 菜單動作稱重](../images/weighing-scan.png "稱重")
{{% /tab %}}
{{% tab header="從列表中手動選擇" text=true %}}
  ![VitalControl: 菜單動作稱重](../images/weighing.png "稱重")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="提示" %}}
如果此操作無法使用，可能是因為該操作已被停用！請在[操作設定](../setting/)選單中啟用該操作。或者，重置所有操作將使該操作重新啟用。
{{% /alert %}}
