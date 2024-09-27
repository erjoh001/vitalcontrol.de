---
title: Primjena filtera na listu životinja
linkTitle: Filter
weight: 50
description: >
 Kako primijeniti filter na listu životinja kako bi se prikazao samo podskup životinja prisutnih na uređaju.
date: 2023-07-26
categories: [Filter]
tags: [Filter]
translationKey: filter
---
## Primjena filtera {#applying-filters}

{{% alert title="NOTE" %}}
Filter vam pomaže da izvršite selekciju koristeći kriterije filtera unutar stavki menija `{{<T "Herd" >}}`, `{{<T "Lists" >}}` i `{{<T "Evaluation" >}}` uređaja VitalControl. Čim primijenite filter, simboli za različite kriterije filtera pojavljuju se na vrhu ekrana. Ovi simboli vam pomažu da saznate da li su i koji kriteriji filtera aktivirani. Na primjer, ako postavite filter `{{<T "Sex" >}}` na muški, uređaj će koristiti samo muške životinje. Na primjer, ako također aktivirate filter `{{<T "OnWatch" >}}`, uređaj će koristiti samo muške životinje koje su na listi za posmatranje.
{{% /alert %}}

Da biste kreirali filter u evaluacijama, postupite na sljedeći način:

1. U podmeniju koji pripada gornjoj stavci menija <img src="/icons/main/evaluation.svg" width="50" align="bottom" alt="Evaluation" /> `{{<T "Evaluation" >}}` pritisnite tipku `F3` <img src="/icons/footer/filter.svg" width="25" align="bottom" alt="Filter" /> jednom. Unutar podmenija koji pripadaju gornjim stavkama menija <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Lists" /> `{{<T "Lists" >}}` i <img src="/icons/main/herd.svg" width="60" align="bottom" alt="Herd" /> `{{<T "Herd" >}}`, morate pritisnuti tipku dva puta.

2. Otvara se podmeni u kojem možete postaviti sve opcije filtera. Možete filtrirati po `{{<T "AnimalID" >}}`, `{{<T "Age" >}}`, `{{<T "Sex" >}}`, `{{<T "Transponder" >}}`, `{{<T "NationalAnimalID" >}}`, `{{<T "Fever" >}}`, `{{<T "OnWatch" >}}`, `{{<T "TypeAnimal" >}}` i `{{<T "Alarm" >}}`.

3. Za filtere `{{<T "TypeAnimal" >}}`, `{{<T "Sex" >}}`, `{{<T "Transponder" >}}` i `{{<T "NationalAnimalID" >}}` navigirajte do odgovarajućeg područja i potvrdite sa `{{<T "Ok" >}}`. Koristite tipke sa strelicama ◁ ▷ da biste odredili željenu postavku. Koristite tipku `F3` `{{<T "Apply" >}}` da biste postavili odabranu postavku. Da biste odbacili promjene filtera, pritisnite tipku `F1` &nbsp;<img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Back" />&nbsp;.

![VitalControl: menu Evaluation Create filter](images/filter.png "Create filter")

4. Za filtere `{{<T "AnimalID" >}}` i `{{<T "Age" >}}` odaberite odgovarajući kriterij i potvrdite sa `{{<T "Ok" >}}`. Sada će vam biti prikazana donja i gornja granica. Navigirajte do željene granice pomoću strelica △ ▽ i potvrdite pritiskom na `{{<T "Ok" >}}` dva puta. Sada možete postaviti željeni broj koristeći strelice ◁ ▷ i strelice △ ▽. Kada su sva podešavanja ispravna, pritisnite `{{<T "Ok" >}}` ponovo da napustite režim podešavanja i primijenite odabrani(e) filter(e) sa `F3` tipkom `{{<T "Apply" >}}`. Koristeći `F1` tipku &nbsp;<img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Back" />&nbsp;, možete odbaciti svoje promjene ako želite.

![VitalControl: menu Evaluation Create filter](images/filter2.png "Create filter")

5. Za filtere `{{<T "Fever" >}}`, `{{<T "OnWatch" >}}` i `{{<T "Alarm" >}}` postoji mogućnost da onemogućite ili omogućite njihovu primjenu. Da biste to učinili, odaberite odgovarajući filter i potvrdite sa `{{<T "Ok" >}}`. Filter je sada aktivan. Ponovo potvrdite sa `{{<T "Ok" >}}` da deaktivirate filter.

![VitalControl: menu Evaluation Create filter](images/filter3.png "Create filter")

6. Kada postavite sve filtere, koristite `F3` tipku `{{<T "Apply" >}}` da primijenite definirane filtere ili pritisnite `F1` tipku <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Back" /> da odbacite svoje promjene na filteru(ima).
