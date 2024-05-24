---
title: Estructura y contenido de los archivos de datos CSV exportados
linkTitle: Archivos de exportación
date: 2023-07-20
weight: 30
description: >
  Descripción de la estructura y contenido de los cuatro archivos de datos creados durante la exportación.
categories: [Exportación de datos]
tags: [archivos de exportación, temperaturas, pesos, calificaciones]
slug: export-files
translationKey: data-export/data-files
---
## Información general {#general-information}

Al exportar datos de animales, ya sea al [pendrive USB][] o a un dispositivo de almacenamiento masivo local [en el PC][], se generan cuatro archivos de exportación en cada caso:

- [Datos de animales][] `(animals.csv)`
- [Datos de temperatura corporal][] `(temperatures.csv)`
- [Datos de peso][] `(weights.csv)`
- [Calificaciones de animales][] `(ratings.csv)`

[pendrive USB]: ../usb-drive/
[en el PC]: ../pc/

[Datos de animales]: #animal-data-animalscsv
[Datos de temperatura corporal]: #body-temperature-data-temperaturescsv
[Datos de peso]: #weight-data-weightscsv
[Calificaciones de animales]: #animal-ratings-ratingscsv

Los cuatro archivos son archivos de texto [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) legibles por humanos. Los archivos están codificados en formato `UTF-8`, se utilizan puntos y comas (`;`) como separadores de columnas. Los campos de datos individuales *no* están encerrados entre comillas. Cada fila de la respectiva tabla representa un conjunto de datos de un animal o una medición o evaluación realizada sobre un animal.

## Procesamiento adicional de datos exportados {#further-processing-of-exported-data}	

Puedes abrir cada uno de estos cuatro archivos de exportación en un programa de hoja de cálculo de tu elección (como [Microsoft Excel](https://products.office.com/excel) o [OpenOffice Calc](https://www.openoffice.org/)) y realizar un análisis avanzado de los datos allí. Como ejemplo, a continuación se muestra la vista de la tabla `animals.csv` en un programa de hoja de cálculo:

![Datos de animales exportados, abiertos en un programa de hoja de cálculo](../images/animals.png "Datos de animales abiertos en programa de hoja de cálculo")

## Descripción de los archivos de datos {#description-of-data-files}

Las siguientes cuatro secciones describen cada uno de los archivos de datos exportados en detalle:

### Datos de animales (`animals.csv`) {#animal-data-animalscsv}

- **Nombre del archivo** `animals.csv`
- **Descripción** Datos generales de animales
- **Número de columnas** 6

Cada fila de la tabla de datos de animales representa un animal almacenado en VitalControl. Por lo tanto, una tabla de datos de animales ejemplar tiene el siguiente aspecto:

```csv
National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg
276000312341001;1001;276000312341001;2023-07-03;F;
276000312341002;1002;276000312341002;2023-07-04;F;40.8
276000312341003;1003;276000312341003;2023-07-05;F;38.3
…
```

La siguiente tabla enumera y describe cada columna de la tabla de datos de animales:

|Columna| Nombre de la columna    | Descripción                       | Comentarios                                                  |
|:-:|----------------------|---------------------------------|-----------------------------------------------------------|
| 1 | `National-ID-Animal` | Número oficial nacional del animal | 15 dígitos según [ISO1174/85][], puede que no esté registrado |
| 2 | `Farm-ID-Animal`     | Número de gestión               | De 2 a 6 dígitos, a menudo igual al número en el collar           |
| 3 | `Transponder-ID`     | Número del transpondedor              | puede faltar, puede ser idéntico con el ID nacional del animal |
| 4 | `DateOfBirth`        | Fecha de nacimiento                   | Formato: `YYYY-MM-TT` (`Año-Mes-Día`)                   |
| 5 | `Sex`                | Sexo                             | _Valores:_ `M`: masculino, `F`: femenino, `?`: desconocido            |
| 6 | `BirthWeight-Kg`     | Peso al nacer                    | Unidad: `kilogramo`, puede que no esté registrado / faltante            |

[ISO1174/85]: https://en.wikipedia.org/wiki/ISO_11784_and_ISO_11785

Si es necesario, también puedes descargar el archivo de muestra proporcionado [animals.csv][].

[animals.csv]: /data-export/animals.csv

### Datos de temperatura corporal (`temperatures.csv`) {#body-temperature-data-temperaturescsv}

- **Nombre del archivo** `temperatures.csv`
- **Descripción** Valores de temperatura, obtenidos al tomar la temperatura corporal rectal de los animales.
- **Número de columnas** 5

Cada línea de la tabla de datos de temperatura representa una medición de temperatura corporal realizada en un animal con el dispositivo VitalControl. Por lo tanto, una tabla de temperatura ejemplar tiene el siguiente aspecto:

```csv
National-ID-Animal;Farm-ID-Animal;Date;Time;Temperature-Celsius
276000312341001;1001;276000312341001;2023-07-24;38.03
276000312341002;1002;276000312341002;2023-07-24;40.12
276000312341003;1003;276000312341003;2023-07-24;39.97
…
```

La siguiente tabla enumera y describe cada columna del archivo de exportación que contiene los valores de temperatura corporal:

|Columna| Nombre de la columna     | Descripción                          | Comentarios                                       |
|:-:|-----------------------|--------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`  | Número de 15 dígitos del animal medido| según [ISO1174/85][], puede no estar registrado  |
| 2 | `Farm-ID-Animal`      | Número de gestión del animal medido   | De 2 a 6 dígitos, a menudo igual al número de collar |
| 3 | `Fecha`               | Fecha de la medición de temperatura   | Formato: `AAAA-MM-DD` (`Año-Mes-Día`)            |
| 4 | `Hora`                | Hora de la medición de temperatura    | Formato: `hh-mm-ss` (`hora:minuto:segundo`)      |
| 5 | `Temperature-Celsius` | Valor de temperatura medido           | Unidad: `Grados Celsius`                         |

Si es necesario, también puedes descargar el archivo de muestra proporcionado [temperatures.csv][]. La figura a continuación muestra este archivo de datos abierto en un programa de hoja de cálculo.

![Archivo de exportación con valores de temperatura corporal, abierto en programa de hoja de cálculo](../images/temperatures.png "Tabla de valores de temperatura")

[temperatures.csv]: /data-export/temperatures.csv

### Datos de peso (`weights.csv`) {#weight-data-weightscsv}

- **Nombre del archivo** `weights.csv`
- **Descripción** Valores de peso obtenidos al pesar animales
- **Número de columnas** 5

Cada línea de la tabla de peso representa una pesada de un animal utilizando el dispositivo VitalControl para registrar el valor del peso. Por lo tanto, una tabla de peso ejemplar tiene el siguiente aspecto:

```csv
National-ID-Animal;Farm-ID-Animal;Date;Time;Weight-Kg
276000312341001;1001;276000312341001;2023-07-24;67.8
276000312341002;1002;276000312341002;2023-07-24;F;40.4
276000312341003;1003;276000312341003;2023-07-24;F;104.2
…
```

La siguiente tabla enumera y describe las columnas individuales de la tabla que contiene los pesos de los animales:

|Columna| Nombre de la columna     | Descripción                           | Comentarios                                      |
|:-:|-----------------------|-------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | Número de 15 dígitos del animal pesado   | según [ISO1174/85][], puede que no esté registrado |
| 2 | `Farm-ID-Animal`      | Número de manejo del animal pesado | De 2 a 6 dígitos, a menudo igual al número de collar    |
| 3 | `Fecha`                | Fecha del pesaje                    | Formato: `AAAA-MM-DD` (`Año-Mes-Día`)         |
| 4 | `Hora`                | Hora del pesaje                    | Formato: `hh-mm-ss` (`hora:minuto:segundo`)       |
| 5 | `Peso-Kg`           | Valor del peso                        | Unidad: `Kilogramo`                                |

Si es necesario, también puedes descargar el archivo de muestra proporcionado [weights.csv][]. La figura a continuación muestra este archivo de exportación abierto en un programa de hoja de cálculo.

![Archivo de exportación con valores de peso de animales, abierto en programa de hoja de cálculo](../images/weights.png "Valores de la tabla de peso")

[weights.csv]: /data-export/weights.csv

### Valoraciones de animales (`ratings.csv`) {#animal-ratings-ratingscsv}

- **Nombre del archivo** `ratings.csv`
- **Descripción** Valoraciones de animales obtenidas mediante inspección visual de los animales
- **Número de columnas** 8

Cada fila de la tabla de valoraciones de animales representa la valoración visual de una evaluación de un animal realizada con VitalControl. Una tabla ejemplar con valoración de animales tiene la siguiente apariencia:

```csv
National-ID-Animal;Farm-ID-Animal;Date;Time;ScoreCondition;ScoreFeedIntake;ScoreScours;ScoreRespiratory
276000312341001;1001;276000312341001;2023-07-24;Verde;Amarillo;Amarillo;Verde
276000312341002;1002;276000312341002;2023-07-24;Amarillo;Amarillo;Amarillo;Rojo
276000312341003;1003;276000312341003;2023-07-24;Verde;Ninguno;Ninguno;Ninguno
…
```

La siguiente tabla enumera y describe cada columna de la tabla de valoraciones de animales:

|Column| Nombre de columna     | Descripción                             | Comentarios                                        |
|:-:|-----------------------|-----------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | Número de 15 dígitos del animal evaluado| según [ISO1174/85][], puede que no esté registrado |
| 2 | `Farm-ID-Animal`      | Número de gestión del animal evaluado    | De 2 a 6 dígitos, a menudo igual al número de collar    |
| 3 | `Date`                | Fecha de evaluación                     | Formato: `YYYY-MM-TT` (`Año-Mes-Día`)         |
| 4 | `Time`                | Hora de evaluación                      | Formato: `hh-mm-ss` (`hora:minuto:segundo`)       |
| 5 | `ScoreCondition`      | Evaluación de la condición general      | _Calificaciones:_ `Rojo`, `Amarillo`, `Verde`, `Ninguno`     |
| 6 | `ScoreFeedIntake`     | Evaluación de la ingesta de alimento    | _Calificaciones:_ `Rojo`, `Amarillo`, `Verde`, `Ninguno`     |
| 7 | `ScoreScours`         | Evaluación del estado respecto a `Scours` | _Calificaciones:_ `Rojo`, `Amarillo`, `Verde`, `Ninguno`     |
| 8 | `ScoreRespiratory`    | Evaluación del estado de `Enfermedades respiratorias` | _Calificaciones:_ `Rojo`, `Amarillo`, `Verde`, `Ninguno`     |

Si es necesario, también puede descargar el archivo de muestra proporcionado [ratings.csv][]. La figura a continuación muestra este archivo abierto en un programa de hoja de cálculo.

![Archivo de exportación con evaluaciones de animales, abierto en programa de hoja de cálculo](../images/ratings.png "Tabla de evaluaciones de animales")

[ratings.csv]: /data-export/ratings.csv
