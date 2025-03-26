---
title: 匯出 CSV 資料檔案的結構和內容
linkTitle: 匯出檔案
date: 2023-07-20
weight: 30
description: >
  描述匯出過程中建立的四個資料檔案的結構和內容。
categories: [資料匯出]
tags: [匯出檔案, 溫度, 重量, 評分]
slug: export-files
translationKey: data-export/data-files
---
## 一般資訊 {#general-information}

當匯出動物資料時，無論是到 [USB 隨身碟][] 還是到 [PC 上的本地大容量儲存裝置][]，每次都會生成四個匯出檔案：

- [動物資料][] `(animals.csv)`
- [體溫資料][] `(temperatures.csv)`
- [重量資料][] `(weights.csv)`
- [動物評分][] `(ratings.csv)`

[USB 隨身碟]: ../usb-drive/
[PC 上的本地大容量儲存裝置]: ../pc/

[動物資料]: #animal-data-animalscsv
[體溫資料]: #body-temperature-data-temperaturescsv
[重量資料]: #weight-data-weightscsv
[動物評分]: #animal-ratings-ratingscsv

所有四個檔案都是人類可讀的 [CSV](https://zh.wikipedia.org/wiki/Comma-separated_values) 文本檔案。檔案以 `UTF-8` 格式編碼，使用分號 (`;`) 作為欄位分隔符。各個資料欄位*不*用引號括起。各表格的每一行代表一個動物資料集或對動物進行的測量或評估。

## 匯出資料的進一步處理 {#further-processing-of-exported-data}

您可以在您選擇的試算表程式中打開這四個匯出檔案中的每一個（例如 [Microsoft Excel](https://products.office.com/excel) 或 [OpenOffice Calc](https://www.openoffice.org/)），並在那裡進行進階的資料分析。以下顯示了在試算表程式中查看 `animals.csv` 表格的範例：

![匯出的動物資料，在試算表程式中打開](../images/animals.png "在試算表程式中打開的動物資料")

## 資料檔案描述 {#description-of-data-files}

以下四個部分詳細描述了每個匯出的資料檔案：

### 動物資料 (`animals.csv`) {#animal-data-animalscsv}

- **檔案名稱** `animals.csv`
- **描述** 一般動物資料
- **欄位數量** 6

動物資料表的每一行代表在 VitalControl 上儲存的一隻動物。範例動物資料表如下所示：

{{% data-files/en %}}

下表列出並描述了動物資料表的每個欄位：

|欄位| 欄位名稱             | 描述                           | 備註                                                      |
|:-:|----------------------|---------------------------------|-----------------------------------------------------------|
| 1 | `National-ID-Animal` | 官方國家動物編號               | 根據 [ISO1174/85][] 15 位數字，可能未記錄                  |
| 2 | `Farm-ID-Animal`     | 管理編號                       | 2 到 6 位數字，通常與項圈上的編號相同                     |
| 3 | `Transponder-ID`     | 傳輸器編號                     | 可能缺失，可能與國家動物編號相同                          |
| 4 | `DateOfBirth`        | 出生日期                       | 格式：`YYYY-MM-TT` (`年-月-日`)                           |
| 5 | `Sex`                | 性別                           | _值:_ `M`: 男性, `F`: 女性, `?`: 未知                     |
| 6 | `BirthWeight-Kg`     | 出生體重                       | 單位：`公斤`，可能未記錄 / 缺失                           |

[ISO1174/85]: https://zh.wikipedia.org/wiki/ISO_11784_and_ISO_11785

如有需要，您也可以下載提供的範例檔案 [animals.csv][]。

[animals.csv]: /data-export/animals.csv

### 體溫資料 (`temperatures.csv`) {#body-temperature-data-temperaturescsv}

- **檔案名稱** `temperatures.csv`
- **描述** 溫度值，通過測量動物的直腸體溫獲得。
- **欄位數量** 5

體溫資料表的每一行代表使用 VitalControl 設備對動物進行的體溫測量。範例體溫表如下所示：

{{% data-files/en_2 %}}

a
下表列出了包含體溫值的匯出檔案中每個欄位的名稱和描述：

|欄位| 欄位名稱              | 描述                                  | 備註                                               |
|:-:|-----------------------|--------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`  | 測量動物的15位數字編號                | 根據 [ISO1174/85][]，可能未記錄                   |
| 2 | `Farm-ID-Animal`      | 測量動物的管理編號                    | 2到6位數字，通常等於項圈號碼                     |
| 3 | `Date`                | 體溫測量日期                          | 格式：`YYYY-MM-TT` (`年-月-日`)                   |
| 4 | `Time`                | 體溫測量時間                          | 格式：`hh-mm-ss` (`時:分:秒`)                     |
| 5 | `Temperature-Celsius` | 測量的溫度值                          | 單位：`攝氏度`                                    |

如有需要，您也可以下載提供的範例檔案 [temperatures.csv][]。下圖顯示了在試算表程式中打開的此數據檔案。

![在試算表程式中打開的包含體溫值的匯出檔案](../images/temperatures.png "表格體溫值")

[temperatures.csv]: /data-export/temperatures.csv

### 體重數據 (`weights.csv`) {#weight-data-weightscsv}

- **檔案名稱** `weights.csv`
- **描述** 透過稱重動物獲得的體重值
- **欄位數量** 5

體重表的每一行代表使用 VitalControl 設備記錄體重值的一次動物稱重。範例體重表如下所示：

{{% data-files/en_3 %}}

下表列出了包含動物體重的表格中各個欄位的名稱和描述：

|欄位| 欄位名稱              | 描述                                  | 備註                                               |
|:-:|-----------------------|--------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`  | 稱重動物的15位數字編號                | 根據 [ISO1174/85][]，可能未記錄                   |
| 2 | `Farm-ID-Animal`      | 稱重動物的管理編號                    | 2到6位數字，通常等於項圈號碼                     |
| 3 | `Date`                | 稱重日期                              | 格式：`YYYY-MM-TT` (`年-月-日`)                   |
| 4 | `Time`                | 稱重時間                              | 格式：`hh-mm-ss` (`時:分:秒`)                     |
| 5 | `Weight-Kg`           | 體重值                                | 單位：`公斤`                                      |

如果需要，您也可以下載提供的範例檔案 [weights.csv][]。下圖顯示了在試算表程式中開啟的匯出檔案。

![在試算表程式中開啟的動物重量值匯出檔案](../images/weights.png "表格重量值")

[weights.csv]: /data-export/weights.csv

### 動物評分 (`ratings.csv`) {#animal-ratings-ratingscsv}

- **檔案名稱** `ratings.csv`
- **描述** 通過目視檢查動物獲得的動物評分
- **欄位數量** 8

動物評分表的每一行代表使用 VitalControl 進行的動物評估的目視評分。具有動物評分的示例表格如下所示：

{{% data-files/en_4 %}}

下表列出了動物評分表的每一欄並描述其內容：

|欄位| 欄位名稱             | 描述                                     | 備註                                              |
|:-:|-----------------------|-----------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | 評分動物的15位數字編號                  | 根據 [ISO1174/85][]，可能未記錄                  |
| 2 | `Farm-ID-Animal`      | 評分動物的管理編號                      | 2到6位數字，通常等於項圈號碼                    |
| 3 | `Date`                | 評分日期                                | 格式：`YYYY-MM-TT`（`年-月-日`）                |
| 4 | `Time`                | 評分時間                                | 格式：`hh-mm-ss`（`時:分:秒`）                  |
| 5 | `ScoreCondition`      | 一般狀況評分                            | _評分:_ `Red`、`Yellow`、`Green`、`None`       |
| 6 | `ScoreFeedIntake`     | 飼料攝取評分                            | _評分:_ `Red`、`Yellow`、`Green`、`None`       |
| 7 | `ScoreScours`         | 關於 `Scours` 狀態的評分                | _評分:_ `Red`、`Yellow`、`Green`、`None`       |
| 8 | `ScoreRespiratory`    | `Respiratory diseases` 狀態的評分       | _評分:_ `Red`、`Yellow`、`Green`、`None`       |

如果需要，您也可以下載提供的範例檔案 [ratings.csv][]。下圖顯示了在試算表程式中開啟的此檔案。

![在試算表程式中開啟的動物評分匯出檔案](../images/ratings.png "動物評分表")

[ratings.csv]: /data-export/ratings.csv
