---
title: Exportation des données d'animaux et de mesures vers le PC de gestion de la ferme
linkTitle: Exportation des données (PC)
date: 2023-07-19
weight: 15
description: >
 Exportez les données des animaux et les valeurs de mesure depuis l'appareil VitalControl vers plusieurs fichiers CVS
categories: [Exportation des données]
translationKey: farmPC
---
Procédez comme suit pour exporter les données de VitalControl vers un dispositif de stockage de masse de votre PC :

### Connectez VitalControl au PC

1. Connectez l'appareil VitalControl à votre ordinateur ou laptop via le câble USB fourni.

   ![Connectez VitalControl au PC ou laptop](/images/synchronisation/connect-to-pc.svg "Connectez VitalControl au PC")

1. Assurez-vous que votre appareil VitalControl est allumé.

### Réalisez l'exportation des données

1. Appuyez sur la touche Windows pour ouvrir le menu Démarrer

1. *Uniquement Windows 11* : Cliquez sur le bouton `Toutes les applications`

1. Dans la liste de vos applications installées, descendez jusqu'à la lettre `U`. Vous devriez y trouver une entrée de menu `Urban VitalControl`. Si nécessaire, développez cette entrée pour que toutes les sous-entrées de menu soient affichées.

   {{% alert title="Attention" %}}
Si vous ne trouvez pas l'entrée `Urban VitalControl` dans votre liste d'applications, vous devrez peut-être [installer](../vcsynchronizer/installation/) d'abord le logiciel `VCSynchronizer` sur votre PC.
   {{% /alert %}}

1. Cliquez sur l'élément de menu `Exportation des données (CVS)`.

   ![Menu Démarrer Windows, entrée de menu pour Urban VitalControl (VCSynchronizer)](../vcsynchronizer/images/data-export/data-export.png "Menu démarrer Windows, VitalControl")

1. Le processus d'exportation est lancé. Une fois l'exportation terminée, une fenêtre de l'Explorateur s'ouvre affichant le répertoire de données local avec les quatre [fichiers d'exportation](../../data-export/export-files/) nouvellement créés.

   ![Répertoire de données local avec les fichiers d'exportation](../../data-export/images/export-files.png "Fichiers d'exportation, stockés localement")

   {{% alert title="Note" %}}
  Vous pouvez ouvrir chacun de ces quatre [fichiers d'exportation](../../data-export/export-files/) dans un programme de tableur de votre choix (tel que [Microsoft Excel](https://products.office.com/excel) ou [OpenOffice Calc](https://www.openoffice.org/)) et y effectuer une analyse approfondie des données. À titre d'exemple, la vue du tableau `animals.csv` dans un programme de tableur est montrée ci-dessous :

![Tableau des données animales exportées ouvert dans un logiciel de tableur](../../data-export/images/animals.png "Logiciel de tableur avec données animales")
{{% /alert %}}
