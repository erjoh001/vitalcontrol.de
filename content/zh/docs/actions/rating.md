---
title: 評分
linkTitle: 評分
slug: rating
weight: 30
description: >
 評估您的動物。
date: 2023-07-26
categories: [動作]
tags: [動作, 評分]
translationKey: actions/animal-rating
---

## 評估您的動物 {#rate-your-animals}

在評估動物時，您需要記錄個別動物的狀況。狀況是通過目視檢查並使用交通信號燈系統記錄的。在基本評估中，僅記錄一般狀況。在擴展評估中，您需要記錄一般狀況、飼料攝取、糞便的一致性和呼吸道疾病。您可以直接在 <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` 動作中更改評分模式，或者您可以在[設定](../../settings/data-acquisition/#mode-of-animal-rating)中定義它。

{{% alert title="提示" %}}
黃色或紅色評估意味著 VitalControl 將動物分類為顯著，並將其列入警報清單。
{{% /alert %}}

1. 在您的 VitalControl 設備主畫面中，選擇菜單項目 &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` 並按下 `{{<T "Ok" >}}` 按鈕。

2. 使用晶片掃描動物或從列表中選擇動物。按 `{{<T "Ok" >}}` 確認，並使用箭頭鍵 △ ▽ 選擇動物。按 `{{<T "Ok" >}}` 確認。

3. 動物動作的子菜單將打開。使用箭頭鍵 ◁ ▷ 選擇動作 <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` 並按 `{{<T "Ok" >}}` 確認。

4. 評分菜單將打開。如果您想切換評分模式，請使用 `On/Off` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Chain-of-actions" />&nbsp; 按鈕和箭頭鍵 ◁ ▷。使用 `F1` 鍵 <img src="/icons/footer/exit.svg" width="24" align="bottom" alt="Back" />&nbsp; 返回評估菜單。

5. 使用箭頭鍵 ◁ ▷ △ ▽ 選擇狀態，並使用 `F3` 鍵 <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> 或 `{{<T "Ok" >}}` 鍵保存。

6. 在進階模式中，使用 `F1` 和 `F3` 鍵在評分參數之間切換。

{{% alert title="提示" %}}
如果您沒有使用箭頭鍵 ◁ ▷ 進行選擇，而是直接使用 `F3` 或 `{{<T "Ok" >}}` 鍵保存，VitalControl 將保存一個中立評估，以灰色表示。
{{% /alert %}}

### 基本評分 {#basic-rating}

{{< tabpane >}}
{{< tab header="基本評分：" text=true disabled=true />}}
{{% tab header="轉發器掃描" text=true %}}
![VitalControl: 菜單操作評分](../images/basicrating-scan.png "基本評分")
{{% /tab %}}
{{% tab header="從列表中手動選擇" text=true %}}
![VitalControl: 菜單操作評分](../images/basicrating.png "基本評分")
{{% /tab %}}
{{< /tabpane >}}

### 擴展評分 {#extended-rating}

{{< tabpane >}}
{{< tab header="基本評分：" text=true disabled=true />}}
{{% tab header="轉發器掃描" text=true %}}
![VitalControl: 菜單操作評分](../images/extendedrating-scan.png "擴展評分")
{{% /tab %}}
{{% tab header="從列表中手動選擇" text=true %}}
![VitalControl: 菜單操作評分](../images/extendedrating.png "擴展評分")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="提示" %}}
如果此操作不可用，可能是該操作已被停用！在[操作設置](../setting/)菜單中啟用該操作。或者，重置所有操作將使該操作重新出現。
{{% /alert %}}
