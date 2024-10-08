---
title: Modifier les données de l'animal
linkTitle: Modifier
slug: edit
weight: 90
description: >
 Modifier les données de l'animal sélectionné.
date: 2023-07-26
catégories: [Actions]
étiquettes: [Actions, données animales, modifier]
translationKey: actions/edit
---

## Modifier les données de l'animal {#edit-animal-data}

L'action <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Modifier" /> `{{<T "Edit" >}}` vous permet de changer les données de l'animal sélectionné directement. Cette fonction facilite la correction des données de l'animal si, par exemple, il s'avère lors de l'inspection de l'animal que le sexe a été enregistré incorrectement. Vous pouvez modifier les données suivantes :

- Type d'animal
- Sexe
- Poids à la naissance
- Race
- Lieu de résidence
- ID national de l'animal
- ID
- Multiples
- Date de naissance
- Facilité de vêlage

Pour modifier les données de l'animal, procédez comme suit :

1. Dans l'écran principal de votre appareil VitalControl, sélectionnez l'élément de menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` et appuyez sur le bouton `{{<T "Ok" >}}`.

2. Soit scannez un animal à l'aide du transpondeur, soit sélectionnez un animal dans la liste. Confirmez avec `{{<T "Ok" >}}` et sélectionnez un animal avec les touches fléchées △ ▽. Confirmez avec `{{<T "Ok" >}}`.

3. Un sous-menu avec les actions pour l'animal s'ouvre. Utilisez les touches fléchées ◁ ▷ △ ▽ pour sélectionner l'action <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Modifier" /> `{{<T "Edit" >}}` et confirmez avec `{{<T "Ok" >}}`.

4. Une liste avec les données de l'animal s'ouvre. Utilisez les touches fléchées △ ▽ pour sélectionner l'option de changement désirée.

5. Pour les données `{{<T "TypeAnimal" >}}`, `{{<T "Sex" >}}`, `{{<T "BirthWeight" >}}`, `{{<T "Breed" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "Multiples" >}}` et `{{<T "CalvingEase" >}}` utilisez les touches fléchées ◁ ▷ pour effectuer le changement désiré.

6. Pour les données `{{<T "ID" >}}` et `{{<T "DateBirth" >}}` sélectionnez-les avec les touches fléchées △ ▽ et confirmez avec `{{<T "Ok" >}}`. Utilisez les touches fléchées △ ▽ pour sélectionner le numéro correspondant et les touches fléchées ◁ ▷ pour naviguer dans les champs de numéros.

7. Enregistrez le changement avec la touche `F3`.

{{< tabpane >}}
{{< tab header="Modifier les données de l'animal :" text=true disabled=true />}}
{{% tab header="Scan du transpondeur" text=true %}}
![VitalControl: Menu Action Modifier les données de l'animal](../images/edit-scan.png "Modifier les données de l'animal")
{{% /tab %}}
{{% tab header="Sélection manuelle dans la liste" text=true %}}
![VitalControl: Menu Action Modifier les données de l'animal](../images/edit.png "Modifier les données de l'animal")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Astuce" %}}
Si cette action n'est pas disponible, l'action a probablement été désactivée ! Activez l'action dans le menu [paramètres des actions](../setting/). Alternativement, réinitialiser toutes les actions permettra de retrouver cette action.
{{% /alert %}}
