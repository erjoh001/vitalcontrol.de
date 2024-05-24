---
title: "Scan RFID : test de portée et diagnostic des transpondeurs"
linkTitle: Scan RFID
date: 2023-08-07T10:09:46+02:00
draft: false
categories: [Diagnostic, Scan RFID]
description: >
  Vérifiez la portée de votre scanner RFID ou affichez le protocole de lecture et les numéros stockés sur des transpondeurs inconnus.
translationKey: diagnosis/rfid-scan
weight: 20
---

En utilisant le menu 'Test de portée', vous pouvez déterminer si l'appareil VitalControl peut lire les transpondeurs que vous avez en main. Outre la vérification de la compatibilité, vous pouvez également déterminer de manière pratique le protocole de transmission utilisé par ces transpondeurs et afficher le numéro stocké sur le transpondeur.

## Effectuer un test de portée {#perform-range-test}

1. Ouvrez l'élément de menu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Appareil" /> `Appareil` dans l'écran principal de votre appareil VitalControl.

1. Invoquez le sous-menu `Service`, sélectionnez l'élément de menu `Test de portée` et confirmez avec `OK`. Un écran de scan animé est maintenant affiché.

    ![VitalControl : Chemin du menu Test de portée du scanner RFID](../images/rangetest.png "Test de portée du scanner RFID")

1. Approchez lentement votre transpondeur de la tête de lecture de l'appareil VitalControl. Pour obtenir un bon résultat de lecture, le transpondeur doit être aligné horizontalement par rapport à la tête de lecture de l'appareil VitalControl.

    ![VitalControl : approche correcte du transpondeur à la tête de lecture RFID](/images/diagnosis/transponderscan.svg "Scan de transpondeur correct")

1. Dès que le scanner RFID détecte le transpondeur, une alarme par vibration est déclenchée et la couleur de fond de l'image du transpondeur affichée à l'écran passe au vert :

   ![VitalControl : Test de portée : Transpondeur détecté](../images/transponder-detected.png "Transpondeur détecté")

1. Déplacez le transpondeur plusieurs fois d'avant en arrière à la limite du champ de lecture. De cette manière, vous pouvez déterminer la portée de lecture du scanner RFID en combinaison avec les transpondeurs que vous utilisez.

## Vérification du transpondeur {#transponder-check}

En effectuant le test de portée décrit ci-dessus, vous pouvez également obtenir des informations sur les transpondeurs provenant de différentes origines :

### Balises auriculaires officielles à transpondeur {#official-transponder-ear-tags}
 
1. Si vous utilisez des balises auriculaires à transpondeur pour vos animaux, sur lesquelles le numéro de balise auriculaire de 15 chiffres officiellement attribué à l'animal est encodé, les informations suivantes sont affichées à l'écran une fois le transpondeur lu :

    - ID à 15 chiffres officiellement attribué à votre animal par votre service national d'identification des animaux.
    - Pays dans lequel l'entreprise est située
    - Pays dans lequel l'entreprise est située (exploitations allemandes uniquement)
    - Protocole de transmission utilisé (FDX ou HDX)
    <br>

    ![VitalControl : vérification de la balise auriculaire à transpondeur](../images/transponder-official.png "Info balise auriculaire à transpondeur officielle")

### Transpondeurs de fournisseurs tiers {#transponders-from-third-party-vendors}

1. Si vous utilisez des transpondeurs de fournisseurs tiers, tels qu'Urban, pour l'identification électronique de vos animaux, les informations suivantes seront affichées à l'écran une fois le transpondeur lu :

    - ID encodé sur le transpondeur, le nombre de chiffres varie selon le fabricant
    - Fabricant du transpondeur (si enregistré sur le transpondeur)
    - Protocole de transmission utilisé (FDX ou HDX)
    <br>

    ![VitalControl : vérification du transpondeur du fabricant](../images/transponder-manufacturer.png "Info transpondeur du fabricant")

