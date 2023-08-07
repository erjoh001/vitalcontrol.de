---
title: Structure and content of the exported CSV data files
linkTitle: Export files
date: 2023-07-20
weight: 30
description: >
  Description of the structure and content of the four data files created during the export.
categories: [Data export]
tags: [export files, temperatures, weights, ratings]  
---
## General information

When exporting animal data, regardless of whether to the [USB flash drive][] or to a local mass storage device [on the PC][], four export files are generated in each case:

- [Animal data](#tierdaten-animalscsv) `(animals.csv)`
- [Body temperature data][] `(temperatures.csv)`
- [Weight data][] `(weights.csv)`
- [Animal ratings][] `(ratings.csv)`

[USB flash drive]: ../usb-drive/
[on the PC]: ../pc/

[Animal data]: #animal-data-animalscsv
[Body temperature data]: #body-temperature-data-temperaturescsv
[Weight data]: #weight-data-weightscsv
[Animal ratings]: #animal-ratings-ratingscsv

All four files are human readable [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) text files. The files are encoded in `UTF-8` format, semicolons (`;`) are used as column separators. The individual data fields are *not* enclosed in quotation marks. Each row of the respective table represents an animal data set or a measurement or assessment performed on an animal.

## Further processing of exported data

You can open each of these four export files in a spreadsheet program of your choice (such as [Microsoft Excel](https://products.office.com/excel) or [OpenOffice Calc](https://www.openoffice.org/)) and perform advanced analysis of the data there. As an example, the view of the table `animals.csv` in a spreadsheet program is shown below:

![Exported animal data, opened in a spreadsheet program](../images/animals.png "Animal data opened in spreadsheet program")

## Description of data files

The following four sections describe each of the exported data files in detail:

### Animal data (`animals.csv`)

- **File name** `animals.csv`
- **Description** General animal data
- **Number of columns** 6

Each row of the animal data table represents one animal stored on the VitalControl. An exemplary animal data table thus has the following appearance:

```csv
National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg
276000312341001;1001;276000312341001;2023-07-03;F;
276000312341002;1002;276000312341002;2023-07-04;F;40.8
276000312341003;1003;276000312341003;2023-07-05;F;38.3
…
```

The following table lists and describes each column of the animal data table:

|Column| Name of column    | Description                     | Comments                                                  |
|:-:|----------------------|---------------------------------|-----------------------------------------------------------|
| 1 | `National-ID-Animal` | Official national animal number | 15 digits according to [ISO1174/85][], maybe not recorded |
| 2 | `Farm-ID-Animal`     | Management number               | 2- to 6 digits, often equal to number at collar           |
| 3 | `Transponder-ID`     | Transponder number              | may be missing , may be identical with national animal ID |
| 4 | `DateOfBirth`        | Date of birth                   | Format: `YYYY-MM-TT` (`Year-Month-Day`)                   |
| 5 | `Sex`                | Sex                             | _Values:_ `M`: male, `F`: female, `?`: unknown            |
| 6 | `BirthWeight-Kg`     | Birth weight                    | Unit: `kilogram`, maybe not recorded / missing                 |

[ISO1174/85]: https://en.wikipedia.org/wiki/ISO_11784_and_ISO_11785

If needed, you can also download the provided sample file [animals.csv][].

[animals.csv]: /data-export/animals.csv

### Body temperature data (`temperatures.csv`)

- **File name** `temperatures.csv`
- **Description** Temperature values, obtained by taking the rectal body temperature of animals.
- **Number of columns** 5

Each line of the temperature data table represents a body temperature measurement performed on an animal with VitalControl device. An exemplary temperature table thus has the following appearance:

```csv
National-ID-Animal;Farm-ID-Animal;Date;Time;Temperature-Celsius
276000312341001;1001;276000312341001;2023-07-24;38.03
276000312341002;1002;276000312341002;2023-07-24;40.12
276000312341003;1003;276000312341003;2023-07-24;39.97
…
```

The following table lists and describes each column of the export file containing the body temperature values:

|Column| Name of column     | Description                          | Comments                                         |
|:-:|-----------------------|--------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-digit number of measured animal   | according to [ISO1174/85][], maybe not recorded  |
| 2 | `Farm-ID-Animal`      | Management number of measured animal | 2- to 6 digits, often equal to collar number     |
| 3 | `Date`                | Date of temperature measurement      | Format: `YYYY-MM-TT` (`Year-Month-Day`)          |
| 4 | `Time`                | Uhrzeit der Temperaturmessung        | Format: `hh-mm-ss` (`hour:minute:second`)        |
| 5 | `Temperature-Celsius` | Measured temperature value           | Unit: `Grad Celsius`                             |

If needed, you can also download the provided sample file [temperatures.csv][]. The figure below shows this data file opened in a spreadsheet program.

![Export file with body temperature values, opened in spreadsheet program](../images/temperatures.png "Table temperature values")

[temperatures.csv]: /data-export/temperatures.csv

### Weight data (`weights.csv`)

- **File name** `weights.csv`
- **Description** Weight values obtained by weighing animals
- **Number of columns** 5

Each line of the weight table represents one weighing of an animal using the VitalControl device for recording the weight value. An exemplary weight table thus has the following appearance:

```csv
National-ID-Animal;Farm-ID-Animal;Date;Time;Weight-Kg
276000312341001;1001;276000312341001;2023-07-24;67.8
276000312341002;1002;276000312341002;2023-07-24;F;40.4
276000312341003;1003;276000312341003;2023-07-24;F;104.2
…
```

The following table lists and describes the individual columns of the table containing the animal weights:

|Column| Name of column     | Description                         | Comments                                        |
|:-:|-----------------------|-------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-digit number of weighed animal   | according to [ISO1174/85][], maybe not recorded |
| 2 | `Farm-ID-Animal`      | Management number of weighed animal | 2- to 6 digits, often equal to collar number    |
| 3 | `Date`                | Date of weighing                    | Format: `YYYY-MM-TT` (`Year-Month-Day`)         |
| 4 | `Time`                | Time of weighing                    | Format: `hh-mm-ss` (`hour:minute:second`)       |
| 5 | `Weight-Kg`           | Weight value                        | Unit: `Kilogram`                                |

If needed, you can also download the provided sample file [weights.csv][]. The figure below shows this export file opened in a spreadsheet program.

![Export file with animal weight values, opened in spreadsheet program](../images/weights.png "Table weight values")

[weights.csv]: /data-export/weights.csv

### Animal ratings (`ratings.csv`)

- **File name** `ratings.csv`
- **Description** Animal ratings obtained by visually inspecting the animals
- **Number of columns** 8

Each row of the animal ratings table represents the visual rating of an an animal evaluation performed with VitalControl. An exemplary table with animal rating has the following appearance:

```csv
National-ID-Animal;Farm-ID-Animal;Date;Time;ScoreCondition;ScoreFeedIntake;ScoreScours;ScoreRespiratory
276000312341001;1001;276000312341001;2023-07-24;Green;Yellow;Yellow;Green
276000312341002;1002;276000312341002;2023-07-24;Yellow;Yellow;Yellow;Red
276000312341003;1003;276000312341003;2023-07-24;Green;None;None;None
…
```

The following table lists and describes each column of the animal ratings table:

|Column| Name of column     | Description                             | Comments                                        |
|:-:|-----------------------|-----------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | 15-digit number of rated animal         | according to [ISO1174/85][], maybe not recorded |
| 2 | `Farm-ID-Animal`      | Management number of rated animal       | 2- to 6 digits, often equal to collar number    |
| 3 | `Date`                | Date of rating                          | Format: `YYYY-MM-TT` (`Year-Month-Day`)         |
| 4 | `Time`                | Time of rating                          | Format: `hh-mm-ss` (`hour:minute:second`)       |
| 5 | `ScoreCondition`      | Rating of general condition             | _Ratings:_ `Red`, `Yellow`, `Green`, `None`     |
| 6 | `ScoreFeedIntake`     | Rating of feed intake                   | _Ratings:_ `Red`, `Yellow`, `Green`, `None`     |
| 7 | `ScoreScours`         | Rating of status concerning `Scours`    | _Ratings:_ `Red`, `Yellow`, `Green`, `None`     |
| 8 | `ScoreRespiratory`    | Rating of status `Respiratory diseases` | _Ratings:_ `Red`, `Yellow`, `Green`, `None`     |

If necessary, you can also download the provided sample file [ratings.csv][]. The figure below shows this file opened in a spreadsheet program.

![Export file with animal ratings, opened in spreadsheet program](../images/ratings.png "Table animal ratings")

[ratings.csv]: /data-export/ratings.csv
