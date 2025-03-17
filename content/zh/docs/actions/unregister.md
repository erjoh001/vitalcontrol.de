---
title: 取消註冊動物
linkTitle: 取消註冊
slug: unregister
weight: 100
description: >
 取消註冊動物
date: 2023-07-26
categories: [Actions]
tags: [Actions, Unregister]
translationKey: actions/unregister
---
{{% alert title="警告" color="warning" %}}
一旦您刪除動物數據記錄，它將不再可用於評估目的！如果您取消註冊動物，但之後想再次評估動物的發展，您必須保留動物數據記錄！
{{% /alert %}}

## 取消註冊 {#unregister}

動作 `{{<T "Unregister" >}}` 允許您在動物移出後立即取消註冊。要取消註冊動物，請按以下步驟進行：

1. 在您的 VitalControl 設備主屏幕上，選擇菜單項 &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` 並按下 `{{<T "Ok" >}}` 按鈕。

2. 可以使用晶片掃描動物或從列表中選擇動物。確認後按 `{{<T "Ok" >}}` 並使用箭頭鍵 △ ▽ 選擇動物。確認後按 `{{<T "Ok" >}}`。

3. 動物動作的子菜單將打開。使用箭頭鍵 ◁ ▷ △ ▽ 選擇動作 &nbsp;<img src="/icons/actions/unregister.svg" width="33" align="bottom" alt="Unregister" /> `{{<T "Unregister" >}}` 並按 `{{<T "Ok" >}}` 確認。

4. 另一個子菜單將打開，您可以在其中保存各種設置。使用箭頭鍵 △ ▽ 選擇所需的設置選項。使用箭頭鍵 ◁ ▷ 選擇所需的設置。

5. 使用鍵 `F3` `{{<T "Unregister" >}}` 以指定的設置取消註冊動物。

{{< tabpane >}}
{{< tab header="取消註冊：" text=true disabled=true />}}
{{% tab header="晶片掃描" text=true %}}
![VitalControl: 菜單動作取消註冊](../images/unregister-scan.png "取消註冊動物")
{{% /tab %}}
{{% tab header="從列表中手動選擇" text=true %}}
![VitalControl: 菜單動作取消註冊](../images/unregister.png "取消註冊動物")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="提示" %}}
如果此操作不可用，可能是該操作已被停用！請在[操作設定](../setting/)選單中啟用該操作。或者，重置所有操作將使該操作重新啟用。
{{% /alert %}}
