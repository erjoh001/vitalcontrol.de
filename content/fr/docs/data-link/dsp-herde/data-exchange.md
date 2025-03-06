---
title: Échange de données entre VitalControl et le logiciel de gestion de troupeau Herde
linkTitle: Échange de données
date: 2023-08-04T12:22:12+02:00
draft: false
description: >
  Synchronisez les animaux stockés sur l'appareil VitalControl avec les animaux gérés par le logiciel *Herde* et transférez les valeurs mesurées enregistrées avec l'appareil VitalControl vers le logiciel *Herde*.
weight: 20
catégories: [Échange de données, DSP Herde]
translationKey: DSPherde/data-exchange
---
Suivez les étapes ci-dessous pour synchroniser les données entre le logiciel `Herde` et l'appareil VitalControl :

### Connectez VitalControl au PC

1. Connectez l'appareil VitalControl à votre ordinateur ou laptop via le câble USB fourni.

   ![Connectez VitalControl au PC ou laptop](/images/synchronisation/connect-to-pc.svg "Connectez VitalControl au PC")

1. Assurez-vous que votre appareil VitalControl est allumé.

### Réalisez l'échange de données

1. Dans le logiciel `Herde`, effectuez un échange complet de données. Selon la configuration de votre interface utilisateur, vous pouvez invoquer cet échange via l'élément de menu `Échange complet de données` dans le menu principal (élément de niveau supérieur _Technologie_), dans le menu latéral ou dans votre boîte à outils personnalisée (horizontale ou verticale).

   ![Logiciel Herde : Déclenchement d'un échange complet de données](../screenshots/data-exchange.png "Herde : Déclenchement de l'échange de données")

1. Une fenêtre pop-up s'ouvre, listant les couplages technologiques stipulés dans le menu latéral à gauche. Cliquez sur le bouton étiqueté `VitalControl` pour démarrer l'échange de données :

   ![Logiciel Herde, démarrage de l'échange de données](../screenshots/start-transfer.png "Herde : Démarrage de l'échange de données")

1. Lors du premier échange de données, un avertissement apparaît, indiquant qu'il n'y a pas encore d'animaux enregistrés sur l'appareil VitalControl. Accusez réception de cet avis avec `Oui`. L'échange de données est alors commencé.

   ![Logiciel Herde, échange de données : avertissement](../screenshots/warning.png "Échange de données : avertissement")

1. L'échange de données est un processus en deux étapes : Dans la première étape <span style="font-size: 140%">➊</span> les données des animaux sont transférées du logiciel `Herde` vers le VitalControl. Dans la deuxième étape <span style="font-size: 140%">➋</span>, les données de mesure collectées avec le VitalControl sont transférées dans le logiciel `Herde`. Le nombre de jeux de données importés (animaux, vêlages, alertes et poids) est listé dans la fenêtre pop-up :

![Échange de données avec le logiciel Herde : Déroulement des actions](../screenshots/data-transfer.png "Échange de données : Déroulement des actions")

1. La réussite de l'échange de données est signalée par une pop-up avec un message de succès.

   ![Logiciel Herde : Message de succès de l'échange de données](../screenshots/success-message.png "Herde : Message de succès de l'échange de données")

    {{% alert title="Attention" %}}
Si de nombreux animaux sont enregistrés sur l'appareil VitalControl, l'échange de données peut prendre un certain temps. La progression du transfert de données peut être observée sur l'écran de l'appareil.

![VitalControl, échange de données : barre de progression](../../vcsynchronizer/images/import-animals/data-transfer.png "VitalControl : barre de progression de l'échange de données")
    {{% /alert %}}
