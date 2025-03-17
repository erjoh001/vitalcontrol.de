---
title: 警報
linkTitle: 警報
slug: alarm
weight: 60
description: >
 將動物加入或移除警報清單。
date: 2023-07-26
categories: [動作]
tags: [動作, 警報]
translationKey: actions/alarm
---

## 警示 {#alert}

使用 `{{<T "Alarm" >}}` 動作可以將動物加入或移除警報清單。警報清單幫助您更快速、輕鬆地找到顯眼的動物，使您的日常檢查更為簡便。要應用 `{{<T "Alarm" >}}` 動作，請按以下步驟進行：

1. 在您的 VitalControl 設備主畫面中，選擇選單項目 `{{<T "Actions" >}}` &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> 並按下 `{{<T "Ok" >}}` 按鈕。

2. 使用晶片掃描動物或從清單中選擇動物。按 `{{<T "Ok" >}}` 確認，並使用箭頭鍵 △ ▽ 選擇動物。按 `{{<T "Ok" >}}` 確認。

3. 動物動作的子選單將打開。使用箭頭鍵 ◁ ▷ △ ▽ 選擇 &nbsp;<img src="/icons/actions/alarm.svg" width="35" align="bottom" alt="Add alarm" /> `{{<T "Alarm" >}}` 動作並按 `{{<T "Ok" >}}` 確認。

4. 將出現通知，表示動物已成功加入警報清單，並且標題中的動物顯示會改變。符號 &nbsp;<img src="/icons/header/animal-in-alarm.svg" width="32" align="bottom" alt="Animal in alarm" /> 表示該動物在警報清單中。

5. 您可以再次應用 &nbsp;<img src="/icons/actions/alarm-minus.svg" width="35" align="bottom" alt="Remove alarm" /> `{{<T "Alarm" >}}` 動作將動物從警報清單中移除。使用 `{{<T "Alarm" >}}` 動作將動物加入或移除警報清單時，會顯示一個小的 + 或 - 符號。

{{< tabpane >}}
{{< tab header="警示：" text=true disabled=true />}}
{{% tab header="晶片掃描" text=true %}}
![VitalControl: Menu Actions Alarm](../images/alarm-scan.png "Alarm")
{{% /tab %}}
{{% tab header="從清單中手動選擇" text=true %}}
![VitalControl: Menu Actions Alarm](../images/alarm.png "Alarm")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="提示" %}}
如果此操作不可用，可能是因為該操作已被停用！請在[操作設定](../setting/)選單中啟用該操作。或者，重置所有操作將使該操作重新啟用。
{{% /alert %}}
