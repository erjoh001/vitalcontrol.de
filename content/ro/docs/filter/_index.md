---
title: Aplicarea unui filtru pe o listă de animale
linkTitle: Filtru
weight: 50
description: >
 Cum să aplici un filtru pe o listă de animale pentru a afișa doar un subset al animalelor prezente pe dispozitiv.
date: 2023-07-26
categories: [Filter]
tags: [Filter]
translationKey: filter
---
## Aplicarea filtrelor {#applying-filters}

{{% alert title="NOTE" %}}
Filtrul te ajută să efectuezi o selecție folosind criterii de filtrare în cadrul elementelor de meniu `{{<T "Herd" >}}`, `{{<T "Lists" >}}` și `{{<T "Evaluation" >}}` ale dispozitivului VitalControl. De îndată ce aplici un filtru, simboluri pentru diferitele criterii de filtrare apar în partea de sus a ecranului. Aceste simboluri sunt folosite pentru a te ajuta să afli dacă și care criterii de filtrare sunt activate. De exemplu, dacă setezi filtrul `{{<T "Sex" >}}` pe masculin, dispozitivul va folosi doar animale masculine. De exemplu, dacă activezi și filtrul `{{<T "OnWatch" >}}`, dispozitivul va folosi doar animale masculine care sunt pe lista de observație.
{{% /alert %}}

Pentru a crea un filtru în evaluări, procedează după cum urmează:

1. În submeniul aparținând elementului de meniu de sus <img src="/icons/main/evaluation.svg" width="50" align="bottom" alt="Evaluation" /> `{{<T "Evaluation" >}}` apasă tasta `F3` <img src="/icons/footer/filter.svg" width="25" align="bottom" alt="Filter" /> o dată. În submeniul aparținând elementelor de meniu de sus <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Lists" /> `{{<T "Lists" >}}` și <img src="/icons/main/herd.svg" width="60" align="bottom" alt="Herd" /> `{{<T "Herd" >}}`, trebuie să apeși tasta de două ori.

2. Se deschide un submeniu în care poți seta toate opțiunile de filtrare. Poți filtra după `{{<T "AnimalID" >}}`, `{{<T "Age" >}}`, `{{<T "Sex" >}}`, `{{<T "Transponder" >}}`, `{{<T "NationalAnimalID" >}}`, `{{<T "Fever" >}}`, `{{<T "OnWatch" >}}`, `{{<T "TypeAnimal" >}}` și `{{<T "Alarm" >}}`.

3. Pentru filtrele `{{<T "TypeAnimal" >}}`, `{{<T "Sex" >}}`, `{{<T "Transponder" >}}` și `{{<T "NationalAnimalID" >}}` navighează la zona corespunzătoare și confirmă cu `{{<T "Ok" >}}`. Folosește tastele săgeată ◁ ▷ pentru a specifica setarea dorită. Folosește tasta `F3` `{{<T "Apply" >}}` pentru a pune în aplicare setarea selectată. Pentru a renunța la modificările filtrului, apasă tasta `F1` &nbsp;<img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Back" />&nbsp;.

![VitalControl: menu Evaluation Create filter](images/filter.png "Create filter")

4. Pentru filtrele `{{<T "AnimalID" >}}` și `{{<T "Age" >}}` selectați criteriul corespunzător și confirmați cu `{{<T "Ok" >}}`. Acum vi se va arăta o limită inferioară și una superioară. Navigați la limita dorită folosind tastele săgeată △ ▽ și confirmați apăsând `{{<T "Ok" >}}` de două ori. Acum puteți seta numărul dorit folosind tastele săgeată ◁ ▷ și tastele săgeată △ ▽. Odată ce toate setările sunt corecte, apăsați din nou `{{<T "Ok" >}}` pentru a părăsi modul de setare și aplicați filtrul(ele) selectat(e) cu tasta `F3` `{{<T "Apply" >}}`. Folosind tasta `F1` &nbsp;<img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Back" />&nbsp;, puteți renunța la modificările dvs. dacă doriți.

![VitalControl: menu Evaluation Create filter](images/filter2.png "Create filter")

5. Pentru filtrele `{{<T "Fever" >}}`, `{{<T "OnWatch" >}}` și `{{<T "Alarm" >}}` există posibilitatea de a dezactiva sau activa aplicarea lor. Pentru a face acest lucru, selectați filtrul corespunzător și confirmați cu `{{<T "Ok" >}}`. Filtrul este acum activ. Confirmați din nou cu `{{<T "Ok" >}}` pentru a dezactiva filtrul.

![VitalControl: menu Evaluation Create filter](images/filter3.png "Create filter")

6. Odată ce ați setat toate filtrele, folosiți tasta `F3` `{{<T "Apply" >}}` pentru a pune în aplicare filtrele definite sau apăsați tasta `F1` <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Back" /> pentru a renunța la modificările aduse filtrului(lor).
