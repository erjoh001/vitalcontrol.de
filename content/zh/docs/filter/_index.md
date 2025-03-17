---
title: 在動物列表上應用篩選器
linkTitle: 篩選器
weight: 50
description: >
 如何在動物列表上應用篩選器，以便僅顯示設備上存在的動物子集。
date: 2023-07-26
categories: [篩選器]
tags: [篩選器]
translationKey: filter
---
## 應用篩選器 {#applying-filters}

{{% alert title="注意" %}}
篩選器幫助您在 VitalControl 設備的選單項目 `{{<T "Herd" >}}`、`{{<T "Lists" >}}` 和 `{{<T "Evaluation" >}}` 中使用篩選條件進行選擇。當您應用篩選器時，各種篩選條件的符號會出現在螢幕頂部。這些符號用於幫助您了解是否以及哪些篩選條件被啟用。例如，如果您將 `{{<T "Sex" >}}` 篩選器設置為男性，設備將僅使用男性動物。例如，如果您還啟用了 `{{<T "OnWatch" >}}` 篩選器，設備將僅使用在觀察列表上的男性動物。
{{% /alert %}}

要在評估中創建篩選器，請按以下步驟進行：

1. 在頂部選單項目 <img src="/icons/main/evaluation.svg" width="50" align="bottom" alt="Evaluation" /> `{{<T "Evaluation" >}}` 所屬的子選單中，按一次 `F3` 鍵 <img src="/icons/footer/filter.svg" width="25" align="bottom" alt="Filter" />。在頂部選單項目 <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Lists" /> `{{<T "Lists" >}}` 和 <img src="/icons/main/herd.svg" width="60" align="bottom" alt="Herd" /> `{{<T "Herd" >}}` 所屬的子選單中，您需要按兩次鍵。

2. 會打開一個子選單，您可以在其中設置所有篩選選項。您可以按 `{{<T "AnimalID" >}}`、`{{<T "Age" >}}`、`{{<T "Sex" >}}`、`{{<T "Transponder" >}}`、`{{<T "NationalAnimalID" >}}`、`{{<T "Fever" >}}`、`{{<T "OnWatch" >}}`、`{{<T "TypeAnimal" >}}` 和 `{{<T "Alarm" >}}` 進行篩選。

3. 對於 `{{<T "TypeAnimal" >}}`、`{{<T "Sex" >}}`、`{{<T "Transponder" >}}` 和 `{{<T "NationalAnimalID" >}}` 篩選器，導航到相應區域並確認 `{{<T "Ok" >}}`。使用箭頭鍵 ◁ ▷ 指定所需設置。使用 `F3` 鍵 `{{<T "Apply" >}}` 來放置所選設置。要放棄篩選更改，請按 `F1` 鍵 &nbsp;<img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Back" />&nbsp;。


   ![VitalControl: menu Evaluation Create filter](images/filter.png "Create filter")

4. 對於篩選條件 `{{<T "AnimalID" >}}` 和 `{{<T "Age" >}}`，選擇相應的標準並確認 `{{<T "Ok" >}}`。現在會顯示上下限。使用箭頭鍵 △ ▽ 導航至所需的限制，並按兩次 `{{<T "Ok" >}}` 確認。現在可以使用箭頭鍵 ◁ ▷ 和箭頭鍵 △ ▽ 設定所需的數字。所有設定正確後，再次按 `{{<T "Ok" >}}` 離開設定模式，並使用 `F3` 鍵 `{{<T "Apply" >}}` 套用選擇的篩選條件。使用 `F1` 鍵 &nbsp;<img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Back" />&nbsp;，可以放棄更改。

   ![VitalControl: menu Evaluation Create filter](images/filter2.png "Create filter")

5. 對於篩選條件 `{{<T "Fever" >}}`、`{{<T "OnWatch" >}}` 和 `{{<T "Alarm" >}}`，可以選擇禁用或啟用其應用。為此，選擇相應的篩選條件並確認 `{{<T "Ok" >}}`。篩選條件現在已啟用。再次確認 `{{<T "Ok" >}}` 以停用篩選條件。

   ![VitalControl: menu Evaluation Create filter](images/filter3.png "Create filter")

6. 設定所有篩選條件後，使用 `F3` 鍵 `{{<T "Apply" >}}` 套用已定義的篩選條件，或按 `F1` 鍵 <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Back" /> 放棄對篩選條件的更改。
