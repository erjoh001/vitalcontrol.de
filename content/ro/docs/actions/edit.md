---
title: Editare date animal
linkTitle: Editare
slug: edit
weight: 90
description: >
 Editare date ale animalului selectat.
date: 2023-07-26
categories: [Acțiuni]
tags: [Acțiuni, date animal, editare]
translationKey: actions/edit
---

## Editare date animal {#edit-animal-data}

Acțiunea <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Editare" /> `{{<T "Edit" >}}` îți permite să schimbi datele animalului selectat direct. Această funcție facilitează corectarea datelor animalului dacă, de exemplu, devine evident în timpul inspecției animalului că sexul a fost salvat incorect. Poți schimba următoarele date:

- Tipul animalului
- Sex
- Greutatea la naștere
- Rasă
- Locație
- ID național al animalului
- ID
- Multipli
- Data nașterii
- Ușurința fătării

Pentru a schimba datele animalului, urmează pașii de mai jos:

1. În ecranul principal al dispozitivului tău VitalControl, selectează elementul de meniu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Acțiuni" /> `{{<T "Actions" >}}` și apasă butonul `{{<T "Ok" >}}`.

2. Fie scanează un animal folosind transponderul, fie selectează un animal din listă. Confirmă cu `{{<T "Ok" >}}` și selectează un animal cu tastele săgeată △ ▽. Confirmă cu `{{<T "Ok" >}}`.

3. Se deschide un submeniu cu acțiunile pentru animal. Folosește tastele săgeată ◁ ▷ △ ▽ pentru a selecta acțiunea <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Editare" /> `{{<T "Edit" >}}` și confirmă cu `{{<T "Ok" >}}`.

4. Se deschide o listă cu datele animalului. Folosește tastele săgeată △ ▽ pentru a selecta opțiunea dorită de schimbare.

5. Pentru datele `{{<T "TypeAnimal" >}}`, `{{<T "Sex" >}}`, `{{<T "BirthWeight" >}}`, `{{<T "Breed" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "Multiples" >}}` și `{{<T "CalvingEase" >}}` folosește tastele săgeată ◁ ▷ pentru a face schimbarea dorită.

6. Pentru datele `{{<T "ID" >}}` și `{{<T "DateBirth" >}}` selectează-le cu tastele săgeată △ ▽ și confirmă cu `{{<T "Ok" >}}`. Folosește tastele săgeată △ ▽ pentru a selecta numărul corespunzător și tastele săgeată ◁ ▷ pentru a naviga în cadrul câmpurilor numerice.


7. Salvați modificarea cu tasta `F3`.

{{< tabpane >}}
{{< tab header="Edit animal data:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Action Edit animal data](../images/edit-scan.png "Edit animal data")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Action Edit animal data](../images/edit.png "Edit animal data")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Hint" %}}
Dacă această acțiune nu este disponibilă, probabil că a fost dezactivată! Activați acțiunea în meniul [setări acțiuni](../setting/). Alternativ, resetarea tuturor acțiunilor va readuce această acțiune.
{{% /alert %}}
