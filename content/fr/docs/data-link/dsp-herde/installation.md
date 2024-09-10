---
title: "Configuration de la technologie VitalControl :"
linkTitle: Configuration
date: 2023-08-04T12:21:53+02:00
draft: false
description: >
  Définir les paramètres de synchronisation pour l'échange de données entre le logiciel *Herde* et l'appareil VitalControl.
weight: 10
catégories: [DSP Herde]
translationKey: DSPherde/installation
---
Avant le premier [échange de données](../data-exchange/), le couplage technologique avec l'appareil VitalControl doit être créé et configuré une fois.

{{% alert title="Attention" %}}
Avant de configurer le couplage technologique, vérifiez si le logiciel 'VCSynchronizer' est installé sur votre PC ; ce logiciel est obligatoire pour l'échange de données. Pour ce faire, ouvrez le menu Démarrer de Windows et recherchez dans la liste de vos applications une entrée nommée 'Urban VitalControl'. Si vous ne trouvez pas une telle entrée, [installez](../../vcsynchronizer/installation/) le logiciel `VCSynchronizer` sur votre PC.
{{% /alert %}}

Pour configurer la technologie, procédez comme suit :

## Créer un nouveau jeu de paramètres pour l'échange de données avec l'appareil VitalControl

1. Dans le logiciel `Herde`, ouvrez la fenêtre `Paramètres`. Selon la configuration de votre interface utilisateur, vous pouvez ouvrir cette fenêtre via l'élément de menu `Organisation` dans le menu principal (élément de niveau supérieur _Paramètres_), dans le menu latéral ou dans votre boîte à outils personnalisée (horizontale ou verticale).

   ![Logiciel Herde : invocation du menu des paramètres](../screenshots/settings.png "Herde : invoquer les Paramètres")

1. Une fenêtre pop-up `Paramètres` s'ouvre, dans la barre latérale gauche de nombreuses catégories de paramètres sont listées. Ouvrez la catégorie `Service` ➊ et sélectionnez la sous-catégorie `Technologie` ➋.

1. Dans l'en-tête de la zone principale de droite, un menu déroulant apparaît maintenant dans lequel tous les ensembles de paramètres technologiques définis sont listés. Le nombre de technologies configurées est affiché à droite. Cliquez sur le bouton ![Logiciel Herde : Créer un nouvel ensemble de paramètres technologiques](/icons/new.png "Herde : Créer un Couplage Technologique") `Créer un nouvel ensemble de paramètres technologiques` ➌.

   ![Logiciel Herde : écran des paramètres pour la technologie](../screenshots/settings-technology.png "Herde : Paramètres pour la Technologie")

1. Une autre fenêtre pop-up s'ouvre. Entrez `VitalControl` comme **Nom de la connexion** et `Urban VitalControl (Gen 2)` comme **Type de Technologie** puis cliquez sur le bouton `Accepter`.

   ![Software Herde: Créer un nouveau jeu de paramètres pour l'appareil VitalControl](../screenshots/new-technology.png "Créer une nouvelle technologie : VitalControl").

   Le jeu de paramètres pour la technologie `VitalControl` est maintenant créé et doit être configuré dans les étapes suivantes.

## Configuration : Paramètres de base

Initialement, l'onglet `Paramètres de base` est sélectionné sur l'écran affiché, comme le montre la figure ci-dessous. Faites des ajustements dans les catégories `Programme externe` ➊, `Données animales` ➋, `Emplacements` ➌ et `Départ` ➍ selon les conditions spécifiques de votre ferme.

   ![Software Herde: Configuration des paramètres de base](../screenshots/basic-settings.png "Technologie VitalControl : Paramètres de base").
   
### Catégorie `Programme externe` ➊

Pour effectuer l'échange de données entre VitalControl et Herde Plus, le logiciel de base [VitalControl Synchronizer](../../vcsynchronizer) est nécessaire comme programme d'aide externe. Pour le bon fonctionnement de ce programme, certains ajustements doivent être effectués dans la catégorie `Programme externe` ➊.

- **Nom de l'appareil pour l'échange de données** :  
  Par défaut, ce champ est vide. Cependant, il est recommandé d'entrer le nom de votre ordinateur ici. Pour ce faire, appuyez sur l'icône ![Herde Software: Créer une nouvelle couplage technologique](/icons/arrow-down.png "Herde : Créer un couplage technologique") `Flèche vers le bas` à l'extrémité droite du champ déroulant. Le nom de votre ordinateur sera maintenant déterminé et affiché pour sélection dans la liste déroulante. Une fois le champ rempli avec le nom de votre ordinateur et ce paramètre enregistré, l'échange de données ne pourra plus être déclenché que depuis votre ordinateur à partir de maintenant.

- **Exécuter dans le chemin** :
  Veuillez entrer `%LOCALAPPDATA%\Urban\VitalControl\Synchronizer` dans ce champ de saisie. C'est le chemin absolu vers le programme `VitalControl Synchronizer` (ou plus précisément vers le fichier `vcsynchronizer.exe`). Si le répertoire cible pour ce programme a été modifié lors de [l'installation du VCSynchronizer](../../vcsynchronizer/installation), veuillez entrer ici le répertoire cible sélectionné.

- **Programme HerdePlus 🡒 Technologie** :  
  Ce champ doit être rempli avec la valeur `vc_imp.bat`. Le fichier batch correspondant nommé spécifie la séquence des opérations lors de l'importation des données.

- **Technologie 🡒 Programme HerdePlus** :  
  Ce champ doit être rempli avec la valeur `vc_exp.bat`. Le fichier batch correspondant nommé spécifie la séquence des opérations lors de l'exportation des données.

### Catégorie `Données sur les animaux` ➋

Des ajustements supplémentaires doivent être effectués dans la catégorie 'Données sur les animaux' ➋ pour que l'échange de données soit pleinement fonctionnel.

- **Numéro de l'animal** :  
  Ce paramètre détermine quel ID les animaux reçoivent pour l'affichage sur l'appareil VitalControl :
  - Si vous avez attribué des ID courts (`Numéro de l'étable`, de 2 à 6 chiffres) à vos animaux, vous devriez sélectionner la valeur 'Numéro de l'étable' ici : l'ID affiché d'un animal sur le VitalControl correspondra alors au numéro de l'étable attribué à l'animal.
  - Si vous n'avez **pas** attribué de numéros ID courts à vos animaux - ce qui est courant dans le secteur de l'engraissement, par exemple - alors vous devriez sélectionner la valeur `Numéro de l'étiquette (5 chiffres)` ici. L'ID affiché d'un animal sur l'appareil VitalControl correspondra alors aux 5 derniers chiffres de l'ID imprimé sur l'étiquette auriculaire jaune de l'animal.
  
<br>

- **Numéro de l'émetteur** :  
  Ce paramètre détermine le numéro attendu pour un animal lors du scan RFID :  
  - Si vous mettez un collier avec un transpondeur sur vos animaux ou placez un transpondeur auriculaire sur vos animaux -par exemple pour l'identification à la mangeoire automatique-, vous devriez sélectionner la valeur 'Transpondeur' ici.
  - Si vos animaux ou veaux portent des étiquettes auriculaires électroniques codées avec le numéro d'identification national officiel de 15 chiffres de votre animal qui servira à l'identification de l'animal tout au long de sa vie, vous devriez sélectionner la valeur 'Numéro de l'étiquette (15 chiffres)` ici.

<br>

- **Âge minimum pour le transfert** :  
  Si `0` est entré comme valeur pour ce champ, **tous les animaux** seront transférés sur l'appareil VitalControl, quel que soit leur âge. Une valeur supérieure à `0` définit l'âge minimum (en jours) pour que les animaux soient transférés. Par exemple, si **seules les vaches** doivent être transférées sur l'appareil, une valeur de 600 jours (= 20 mois) doit être entrée ici comme âge minimum.

### Catégorie `Emplacements` ➌

Utilisez cette catégorie pour exclure des animaux de certains emplacements du transfert de données vers l'appareil. Pour ce faire, retirez la coche des emplacements pour lesquels vous **ne souhaitez pas** transférer les animaux hébergés vers l'appareil.

### Catégorie `Départ` ➍

Cochez l'option 'Départ dans HERDEplus' ici. De cette manière, vous spécifiez que les animaux qui ont quitté le troupeau sont également supprimés de l'appareil VitalControl lors de la synchronisation.
Cochez également l'option 'N'existe pas en stock'. De cette façon, vous spécifiez que les animaux sur le VitalControl qui ne sont pas connus du logiciel `Herde` sont supprimés du VitalControl lors de la synchronisation.

## Configuration : Paramètres spécifiques à la technologie

Ensuite, cliquez sur l'onglet `Paramètres spécifiques à la technologie` pour déterminer l'étendue de l'échange de données. Il est recommandé de cocher toutes les cases à cocher listées là sauf pour la case à cocher `Sauvegarder le fichier d'importation après traitement`. Cette dernière case à cocher est destinée à des fins de diagnostic et ne doit être sélectionnée que si le personnel de service le demande.

- **Âge maximum pour le transfert** :  
  Si `0` est entré ici comme valeur, **tous les animaux** seront transférés vers l'appareil VitalControl, quel que soit leur âge. Une valeur supérieure à `0` définit l'âge maximum (en jours) pour les animaux à transférer. Si, par exemple, **seuls les veaux** doivent être transférés vers l'appareil, une valeur de 90 jours (= 3 mois) doit être entrée ici comme âge maximum.

   ![Logiciel Herde : Configuration Échange de données](../screenshots/technology-specific-settings.png "Échange de données : paramètres spécifiques").

## Sauvegarder les paramètres d'échange de données

Appuyez sur la touche `Sauvegarder (F2)` après avoir configuré tous les paramètres de configuration de manière appropriée. L'ensemble de paramètres pour l'échange de données vers l'appareil VitalControl est maintenant enregistré et prêt à l'emploi.  
Effectuez maintenant un [échange de données](../data-exchange/) pour vérifier si les paramètres stipulés sont valides afin que vous puissiez échanger des données avec succès vers et depuis l'appareil VitalControl.
