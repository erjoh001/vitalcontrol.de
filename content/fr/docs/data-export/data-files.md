---
title: Structure et contenu des fichiers de données CSV exportés
linkTitle: Fichiers exportés
date: 2023-07-20
weight: 30
description: >
  Description de la structure et du contenu des quatre fichiers de données créés lors de l'exportation.
categories: [Exportation de données]
tags: [fichiers d'exportation, températures, poids, évaluations]
slug: export-files
translationKey: data-export/data-files
---
## Informations générales

Lors de l'exportation des données animales, que ce soit vers la [clé USB][] ou vers un dispositif de stockage de masse local [sur le PC][], quatre fichiers d'exportation sont générés dans chaque cas :

- [Données animales](#données-animales-animalscsv) `(animals.csv)`
- [Données de température corporelle](#données-de-température-corporelle-temperaturescsv) `(temperatures.csv)`
- [Données de poids](#données-de-poids-weightscsv) `(weights.csv)`
- [Évaluations des animaux](#évaluations-des-animaux-ratingscsv) `(ratings.csv)`

[clé USB]: ../usb-drive/
[sur le PC]: ../pc/

[Données animales]: #donnees-animales-animalscsv
[Données de température corporelle]: #donnees-de-temperature-corporelle-temperaturescsv
[Données de poids]: #donnees-de-poids-weightscsv
[Évaluations des animaux]: #evaluations-des-animaux-ratingscsv

Les quatre fichiers sont des fichiers texte [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) lisibles par l'homme. Les fichiers sont encodés en format `UTF-8`, les points-virgules (`;`) sont utilisés comme séparateurs de colonnes. Les champs de données individuels ne sont *pas* encadrés par des guillemets. Chaque ligne du tableau respectif représente un ensemble de données animales ou une mesure ou évaluation effectuée sur un animal.

## Traitement ultérieur des données exportées

Vous pouvez ouvrir chacun de ces quatre fichiers d'exportation dans un programme de tableur de votre choix (tel que [Microsoft Excel](https://products.office.com/excel) ou [OpenOffice Calc](https://www.openoffice.org/)) et y effectuer une analyse avancée des données. À titre d'exemple, la vue du tableau `animals.csv` dans un programme de tableur est illustrée ci-dessous :

![Données animales exportées, ouvertes dans un programme de tableur](../images/animals.png "Données animales ouvertes dans un programme de tableur")

## Description des fichiers de données

Les quatre sections suivantes décrivent chacun des fichiers de données exportés en détail :

### Données animales (`animals.csv`)

- **Nom du fichier** `animals.csv`
- **Description** Données générales sur les animaux
- **Nombre de colonnes** 6

Chaque ligne du tableau de données des animaux représente un animal stocké sur le VitalControl. Un tableau de données des animaux exemplaire a donc l'apparence suivante :

```csv
National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg
276000312341001;1001;276000312341001;2023-07-03;F;
276000312341002;1002;276000312341002;2023-07-04;F;40.8
276000312341003;1003;276000312341003;2023-07-05;F;38.3
…
```

Le tableau suivant liste et décrit chaque colonne du tableau de données des animaux :

|Colonne| Nom de la colonne    | Description                     | Commentaires                                               |
|:-:|----------------------|---------------------------------|-----------------------------------------------------------|
| 1 | `National-ID-Animal` | Numéro officiel national de l'animal | 15 chiffres selon [ISO1174/85][], peut ne pas être enregistré |
| 2 | `Farm-ID-Animal`     | Numéro de gestion               | 2 à 6 chiffres, souvent égal au numéro sur le collier     |
| 3 | `Transponder-ID`     | Numéro de transpondeur          | peut manquer, peut être identique à l'ID national de l'animal |
| 4 | `DateOfBirth`        | Date de naissance               | Format : `YYYY-MM-TT` (`Année-Mois-Jour`)                 |
| 5 | `Sex`                | Sexe                            | _Valeurs :_ `M` : mâle, `F` : femelle, `?` : inconnu      |
| 6 | `BirthWeight-Kg`     | Poids à la naissance            | Unité : `kilogramme`, peut ne pas être enregistré / manquant |

[ISO1174/85]: https://en.wikipedia.org/wiki/ISO_11784_and_ISO_11785

Si nécessaire, vous pouvez également télécharger le fichier d'exemple fourni [animals.csv][].

[animals.csv]: /data-export/animals.csv

### Données de température corporelle (`temperatures.csv`)

- **Nom du fichier** `temperatures.csv`
- **Description** Valeurs de température, obtenues en prenant la température corporelle rectale des animaux.
- **Nombre de colonnes** 5

Chaque ligne du tableau de données de température représente une mesure de température corporelle effectuée sur un animal avec l'appareil VitalControl. Un tableau de température exemplaire a donc l'apparence suivante :

```csv
National-ID-Animal;Farm-ID-Animal;Date;Time;Temperature-Celsius
276000312341001;1001;276000312341001;2023-07-24;38.03
276000312341002;1002;276000312341002;2023-07-24;40.12
276000312341003;1003;276000312341003;2023-07-24;39.97
…
```

Le tableau suivant liste et décrit chaque colonne du fichier d'exportation contenant les valeurs de température corporelle :

|Colonne| Nom de la colonne     | Description                          | Commentaires                                         |
|:-:|-----------------------|--------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`  | Numéro à 15 chiffres de l'animal mesuré   | selon [ISO1174/85][], peut ne pas être enregistré  |
| 2 | `Farm-ID-Animal`      | Numéro de gestion de l'animal mesuré | 2 à 6 chiffres, souvent égal au numéro de collier     |
| 3 | `Date`                | Date de la mesure de température      | Format : `AAAA-MM-JJ` (`Année-Mois-Jour`)          |
| 4 | `Time`                | Heure de la mesure de température        | Format : `hh-mm-ss` (`heure:minute:seconde`)        |
| 5 | `Temperature-Celsius` | Valeur de température mesurée           | Unité : `Degrés Celsius`                             |

Si nécessaire, vous pouvez également télécharger le fichier d'exemple fourni [temperatures.csv][]. La figure ci-dessous montre ce fichier de données ouvert dans un programme de tableur.

![Fichier d'exportation avec les valeurs de température corporelle, ouvert dans un programme de tableur](../images/temperatures.png "Valeurs de température de table")

[temperatures.csv]: /data-export/temperatures.csv

### Données de poids (`weights.csv`)

- **Nom du fichier** `weights.csv`
- **Description** Valeurs de poids obtenues en pesant les animaux
- **Nombre de colonnes** 5

Chaque ligne du tableau de poids représente une pesée d'un animal utilisant l'appareil VitalControl pour enregistrer la valeur du poids. Un tableau de poids exemplaire a donc l'apparence suivante :

```csv
National-ID-Animal;Farm-ID-Animal;Date;Time;Weight-Kg
276000312341001;1001;276000312341001;2023-07-24;67.8
276000312341002;1002;276000312341002;2023-07-24;F;40.4
276000312341003;1003;276000312341003;2023-07-24;F;104.2
…
```

Le tableau suivant liste et décrit les colonnes individuelles du tableau contenant les poids des animaux :

|Colonne| Nom de la colonne     | Description                         | Commentaires                                        |
|:-:|-----------------------|-------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | Numéro à 15 chiffres de l'animal pesé   | selon [ISO1174/85][], peut ne pas être enregistré |
| 2 | `Farm-ID-Animal`      | Numéro de gestion de l'animal pesé | 2 à 6 chiffres, souvent égal au numéro de collier    |
| 3 | `Date`                | Date de la pesée                    | Format : `AAAA-MM-JJ` (`Année-Mois-Jour`)         |
| 4 | `Time`                | Heure de la pesée                    | Format : `hh-mm-ss` (`heure:minute:seconde`)       |
| 5 | `Weight-Kg`           | Valeur du poids                        | Unité : `Kilogramme`                                |

Si nécessaire, vous pouvez également télécharger le fichier d'exemple fourni [weights.csv][]. La figure ci-dessous montre ce fichier d'exportation ouvert dans un programme de tableur.

![Fichier d'exportation avec les valeurs de poids des animaux, ouvert dans un programme de tableur](../images/weights.png "Valeurs de poids de table")

[weights.csv]: /data-export/weights.csv

### Évaluations des animaux (`ratings.csv`)

- **Nom du fichier** `ratings.csv`
- **Description** Évaluations des animaux obtenues par inspection visuelle des animaux
- **Nombre de colonnes** 8

Chaque ligne du tableau des évaluations des animaux représente l'évaluation visuelle d'une évaluation d'animal effectuée avec VitalControl. Un tableau exemplaire avec évaluation des animaux a l'apparence suivante :

```csv
National-ID-Animal;Farm-ID-Animal;Date;Time;ScoreCondition;ScoreFeedIntake;ScoreScours;ScoreRespiratory
276000312341001;1001;276000312341001;2023-07-24;Green;Yellow;Yellow;Green
276000312341002;1002;276000312341002;2023-07-24;Yellow;Yellow;Yellow;Red
276000312341003;1003;276000312341003;2023-07-24;Green;None;None;None
…
```

Le tableau suivant liste et décrit chaque colonne du tableau des évaluations des animaux :

|Colonne| Nom de la colonne     | Description                               | Commentaires                                        |
|:-:|-----------------------|-------------------------------------------|-----------------------------------------------------|
| 1 | `National-ID-Animal`  | Numéro à 15 chiffres de l'animal évalué   | selon [ISO1174/85][], peut ne pas être enregistré   |
| 2 | `Farm-ID-Animal`      | Numéro de gestion de l'animal évalué      | 2 à 6 chiffres, souvent égal au numéro de collier   |
| 3 | `Date`                | Date de l'évaluation                      | Format : `AAAA-MM-JJ` (`Année-Mois-Jour`)           |
| 4 | `Time`                | Heure de l'évaluation                     | Format : `hh-mm-ss` (`heure:minute:seconde`)        |
| 5 | `ScoreCondition`      | Évaluation de l'état général              | _Évaluations :_ `Rouge`, `Jaune`, `Vert`, `Aucun`   |
| 6 | `ScoreFeedIntake`     | Évaluation de la prise alimentaire        | _Évaluations :_ `Rouge`, `Jaune`, `Vert`, `Aucun`   |
| 7 | `ScoreScours`         | Évaluation de l'état concernant `Scours`  | _Évaluations :_ `Rouge`, `Jaune`, `Vert`, `Aucun`   |
| 8 | `ScoreRespiratory`    | Évaluation de l'état des `Maladies respiratoires` | _Évaluations :_ `Rouge`, `Jaune`, `Vert`, `Aucun` |

Si nécessaire, vous pouvez également télécharger le fichier d'exemple fourni [ratings.csv][]. L'image ci-dessous montre ce fichier ouvert dans un programme de tableur.

![Fichier d'exportation avec évaluations d'animaux, ouvert dans un programme de tableur](../images/ratings.png "Tableau des évaluations d'animaux")

[ratings.csv]: /data-export/ratings.csv
