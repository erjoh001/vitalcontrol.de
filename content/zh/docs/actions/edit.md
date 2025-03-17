---
title: 編輯動物資料
linkTitle: 編輯
slug: edit
weight: 90
description: >
 編輯所選動物的資料。
date: 2023-07-26
categories: [Actions]
tags: [Actions, animal data, edit]
translationKey: actions/edit
---

## 編輯動物資料 {#edit-animal-data}

操作 <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `{{<T "Edit" >}}` 允許您直接更改所選動物的資料。此功能使得在動物檢查中發現性別保存錯誤時更容易糾正動物資料。您可以更改以下資料：

- 動物類型
- 性別
- 出生體重
- 品種
- 所在地
- 國家動物ID
- ID
- 多胎
- 出生日期
- 分娩難易度

要更改動物資料，請按以下步驟進行：

1. 在您的VitalControl設備主畫面中，選擇菜單項 &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` 並按下 `{{<T "Ok" >}}` 按鈕。

2. 可以使用晶片掃描動物或從列表中選擇動物。確認後按 `{{<T "Ok" >}}` 並使用箭頭鍵 △ ▽ 選擇動物。確認後按 `{{<T "Ok" >}}`。

3. 動物操作的子菜單將打開。使用箭頭鍵 ◁ ▷ △ ▽ 選擇操作 <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `{{<T "Edit" >}}` 並按 `{{<T "Ok" >}}` 確認。

4. 動物資料列表將打開。使用箭頭鍵 △ ▽ 選擇所需的更改選項。

5. 對於資料 `{{<T "TypeAnimal" >}}`、`{{<T "Sex" >}}`、`{{<T "BirthWeight" >}}`、`{{<T "Breed" >}}`、`{{<T "Whereabouts" >}}`、`{{<T "Multiples" >}}` 和 `{{<T "CalvingEase" >}}` 使用箭頭鍵 ◁ ▷ 進行所需更改。

6. 對於資料 `{{<T "ID" >}}` 和 `{{<T "DateBirth" >}}` 使用箭頭鍵 △ ▽ 選擇並按 `{{<T "Ok" >}}` 確認。使用箭頭鍵 △ ▽ 選擇相應的數字，並使用箭頭鍵 ◁ ▷ 在數字欄位內導航。

7. 使用 `F3` 鍵儲存變更。

{{< tabpane >}}
{{< tab header="編輯動物資料：" text=true disabled=true />}}
{{% tab header="晶片掃描" text=true %}}
![VitalControl: 菜單操作 編輯動物資料](../images/edit-scan.png "編輯動物資料")
{{% /tab %}}
{{% tab header="從列表中手動選擇" text=true %}}
![VitalControl: 菜單操作 編輯動物資料](../images/edit.png "編輯動物資料")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="提示" %}}
如果此操作不可用，可能是因為該操作已被停用！請在[操作設定](../setting/)菜單中啟用該操作。或者，重置所有操作將使該操作重新出現。
{{% /alert %}}
