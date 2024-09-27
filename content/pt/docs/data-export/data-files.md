---
title: Estrutura e conteúdo dos arquivos de dados CSV exportados
linkTitle: Arquivos de exportação
date: 2023-07-20
weight: 30
description: >
  Descrição da estrutura e conteúdo dos quatro arquivos de dados criados durante a exportação.
categories: [Exportação de dados]
tags: [arquivos de exportação, temperaturas, pesos, avaliações]
slug: export-files
translationKey: data-export/data-files
---
## Informações gerais {#general-information}

Ao exportar dados de animais, seja para o [pendrive USB][] ou para um dispositivo de armazenamento em massa local [no PC][], quatro arquivos de exportação são gerados em cada caso:

- [Dados dos animais][] `(animals.csv)`
- [Dados de temperatura corporal][] `(temperatures.csv)`
- [Dados de peso][] `(weights.csv)`
- [Avaliações dos animais][] `(ratings.csv)`

[USB flash drive]: ../usb-drive/
[on the PC]: ../pc/

[Animal data]: #animal-data-animalscsv
[Body temperature data]: #body-temperature-data-temperaturescsv
[Weight data]: #weight-data-weightscsv
[Animal ratings]: #animal-ratings-ratingscsv

Todos os quatro arquivos são arquivos de texto [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) legíveis por humanos. Os arquivos são codificados no formato `UTF-8`, pontos e vírgulas (`;`) são usados como separadores de coluna. Os campos de dados individuais *não* são delimitados por aspas. Cada linha da respectiva tabela representa um conjunto de dados de um animal ou uma medição ou avaliação realizada em um animal.

## Processamento adicional dos dados exportados {#further-processing-of-exported-data}

Você pode abrir cada um desses quatro arquivos de exportação em um programa de planilha de sua escolha (como [Microsoft Excel](https://products.office.com/excel) ou [OpenOffice Calc](https://www.openoffice.org/)) e realizar análises avançadas dos dados lá. Como exemplo, a visualização da tabela `animals.csv` em um programa de planilha é mostrada abaixo:

![Dados de animais exportados, abertos em um programa de planilha](../images/animals.png "Dados de animais abertos em programa de planilha")

## Descrição dos arquivos de dados {#description-of-data-files}

As quatro seções a seguir descrevem cada um dos arquivos de dados exportados em detalhes:

### Dados dos animais (`animals.csv`) {#animal-data-animalscsv}

- **Nome do arquivo** `animals.csv`
- **Descrição** Dados gerais dos animais
- **Número de colunas** 6

Cada linha da tabela de dados dos animais representa um animal armazenado no VitalControl. Uma tabela de dados de animais exemplares tem a seguinte aparência:

{{% data-files/en %}}

A tabela a seguir lista e descreve cada coluna da tabela de dados dos animais:

|Coluna| Nome da coluna     | Descrição                       | Comentários                                                |
|:-:|----------------------|---------------------------------|------------------------------------------------------------|
| 1 | `National-ID-Animal` | Número oficial nacional do animal | 15 dígitos de acordo com [ISO1174/85][], pode não estar registrado |
| 2 | `Farm-ID-Animal`     | Número de manejo                | 2 a 6 dígitos, frequentemente igual ao número na coleira   |
| 3 | `Transponder-ID`     | Número do transponder           | pode estar ausente, pode ser idêntico ao ID nacional do animal |
| 4 | `DateOfBirth`        | Data de nascimento              | Formato: `YYYY-MM-TT` (`Ano-Mês-Dia`)                      |
| 5 | `Sex`                | Sexo                            | _Valores:_ `M`: macho, `F`: fêmea, `?`: desconhecido       |
| 6 | `BirthWeight-Kg`     | Peso ao nascer                  | Unidade: `quilograma`, pode não estar registrado / ausente |

[ISO1174/85]: https://en.wikipedia.org/wiki/ISO_11784_and_ISO_11785

Se necessário, você também pode baixar o arquivo de exemplo fornecido [animals.csv][].

[animals.csv]: /data-export/animals.csv

### Dados de temperatura corporal (`temperatures.csv`) {#body-temperature-data-temperaturescsv}

- **Nome do arquivo** `temperatures.csv`
- **Descrição** Valores de temperatura, obtidos pela medição da temperatura corporal retal dos animais.
- **Número de colunas** 5

Cada linha da tabela de dados de temperatura representa uma medição de temperatura corporal realizada em um animal com o dispositivo VitalControl. Uma tabela de temperatura exemplar tem a seguinte aparência:


{{% data-files/en_2 %}}

a
A tabela a seguir lista e descreve cada coluna do arquivo de exportação contendo os valores de temperatura corporal:

|Coluna| Nome da coluna      | Descrição                           | Comentários                                      |
|:-:|-----------------------|--------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`  | Número de 15 dígitos do animal medido| de acordo com [ISO1174/85][], pode não ser registrado |
| 2 | `Farm-ID-Animal`      | Número de gestão do animal medido    | 2 a 6 dígitos, muitas vezes igual ao número da coleira |
| 3 | `Date`                | Data da medição de temperatura       | Formato: `YYYY-MM-TT` (`Ano-Mês-Dia`)            |
| 4 | `Time`                | Hora da medição de temperatura       | Formato: `hh-mm-ss` (`hora:minuto:segundo`)      |
| 5 | `Temperature-Celsius` | Valor da temperatura medida          | Unidade: `Graus Celsius`                         |

Se necessário, você também pode baixar o arquivo de exemplo fornecido [temperatures.csv][]. A figura abaixo mostra este arquivo de dados aberto em um programa de planilha.

![Arquivo de exportação com valores de temperatura corporal, aberto em programa de planilha](../images/temperatures.png "Tabela de valores de temperatura")

[temperatures.csv]: /data-export/temperatures.csv

### Dados de peso (`weights.csv`) {#weight-data-weightscsv}

- **Nome do arquivo** `weights.csv`
- **Descrição** Valores de peso obtidos pela pesagem dos animais
- **Número de colunas** 5

Cada linha da tabela de peso representa uma pesagem de um animal usando o dispositivo VitalControl para registrar o valor do peso. Uma tabela de peso exemplar tem a seguinte aparência:

{{% data-files/en_3 %}}

A tabela a seguir lista e descreve as colunas individuais da tabela contendo os pesos dos animais:

|Coluna| Nome da coluna      | Descrição                           | Comentários                                      |
|:-:|-----------------------|--------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`  | Número de 15 dígitos do animal pesado| de acordo com [ISO1174/85][], pode não ser registrado |
| 2 | `Farm-ID-Animal`      | Número de gestão do animal pesado    | 2 a 6 dígitos, muitas vezes igual ao número da coleira |
| 3 | `Date`                | Data da pesagem                      | Formato: `YYYY-MM-TT` (`Ano-Mês-Dia`)            |
| 4 | `Time`                | Hora da pesagem                      | Formato: `hh-mm-ss` (`hora:minuto:segundo`)      |
| 5 | `Weight-Kg`           | Valor do peso                        | Unidade: `Quilograma`                            |



Se necessário, você também pode baixar o arquivo de exemplo fornecido [weights.csv][]. A figura abaixo mostra este arquivo de exportação aberto em um programa de planilha.

![Arquivo de exportação com valores de peso de animais, aberto em programa de planilha](../images/weights.png "Valores de peso da tabela")

[weights.csv]: /data-export/weights.csv

### Avaliações de animais (`ratings.csv`) {#animal-ratings-ratingscsv}

- **Nome do arquivo** `ratings.csv`
- **Descrição** Avaliações de animais obtidas por inspeção visual dos animais
- **Número de colunas** 8

Cada linha da tabela de avaliações de animais representa a avaliação visual de um animal realizada com o VitalControl. Uma tabela exemplar com avaliação de animais tem a seguinte aparência:

{{% data-files/en_4 %}}

A tabela a seguir lista e descreve cada coluna da tabela de avaliações de animais:

|Coluna| Nome da coluna     | Descrição                               | Comentários                                     |
|:-:|-----------------------|-----------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | Número de 15 dígitos do animal avaliado  | de acordo com [ISO1174/85][], pode não ser registrado |
| 2 | `Farm-ID-Animal`      | Número de manejo do animal avaliado     | 2 a 6 dígitos, muitas vezes igual ao número da coleira |
| 3 | `Date`                | Data da avaliação                       | Formato: `YYYY-MM-TT` (`Ano-Mês-Dia`)           |
| 4 | `Time`                | Hora da avaliação                       | Formato: `hh-mm-ss` (`hora:minuto:segundo`)     |
| 5 | `ScoreCondition`      | Avaliação da condição geral             | _Avaliações:_ `Red`, `Yellow`, `Green`, `None`  |
| 6 | `ScoreFeedIntake`     | Avaliação da ingestão de alimentos      | _Avaliações:_ `Red`, `Yellow`, `Green`, `None`  |
| 7 | `ScoreScours`         | Avaliação do status em relação a `Scours`| _Avaliações:_ `Red`, `Yellow`, `Green`, `None`  |
| 8 | `ScoreRespiratory`    | Avaliação do status `Doenças respiratórias` | _Avaliações:_ `Red`, `Yellow`, `Green`, `None`  |



Se necessário, você também pode baixar o arquivo de exemplo fornecido [ratings.csv][]. A figura abaixo mostra este arquivo aberto em um programa de planilha.

![Arquivo de exportação com classificações de animais, aberto em um programa de planilha](../images/ratings.png "Classificações de animais na tabela")

[ratings.csv]: /data-export/ratings.csv
