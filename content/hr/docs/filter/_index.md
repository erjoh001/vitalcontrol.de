---
title: Primjena filtra na popis životinja
linkTitle: Filter
weight: 50
description: >
 Kako primijeniti filter na popis životinja kako bi se prikazao samo podskup životinja prisutnih na uređaju.
date: 2023-07-26
categories: [Filter]
tags: [Filter]
translationKey: filter
---
## Primjena filtara {#applying-filters}

{{% alert title="NOTE" %}}
Filter vam pomaže izvršiti odabir koristeći kriterije filtra unutar stavki izbornika `{{<T "Herd" >}}`, `{{<T "Lists" >}}` i `{{<T "Evaluation" >}}` uređaja VitalControl. Čim primijenite filter, simboli za različite kriterije filtra pojavljuju se na vrhu zaslona. Ovi simboli pomažu vam saznati jesu li i koji kriteriji filtra aktivirani. Na primjer, ako postavite filter `{{<T "Sex" >}}` na muški, uređaj će koristiti samo muške životinje. Na primjer, ako također aktivirate filter `{{<T "OnWatch" >}}`, uređaj će koristiti samo muške životinje koje su na popisu za promatranje.
{{% /alert %}}

Da biste stvorili filter u evaluacijama, postupite na sljedeći način:

1. U podizborniku koji pripada gornjoj stavci izbornika <img src="/icons/main/evaluation.svg" width="50" align="bottom" alt="Evaluation" /> `{{<T "Evaluation" >}}` pritisnite tipku `F3` <img src="/icons/footer/filter.svg" width="25" align="bottom" alt="Filter" /> jednom. Unutar podizbornika koji pripadaju gornjim stavkama izbornika <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Lists" /> `{{<T "Lists" >}}` i <img src="/icons/main/herd.svg" width="60" align="bottom" alt="Herd" /> `{{<T "Herd" >}}`, morate pritisnuti tipku dvaput.

2. Otvara se podizbornik u kojem možete postaviti sve opcije filtra. Možete filtrirati prema `{{<T "AnimalID" >}}`, `{{<T "Age" >}}`, `{{<T "Sex" >}}`, `{{<T "Transponder" >}}`, `{{<T "NationalAnimalID" >}}`, `{{<T "Fever" >}}`, `{{<T "OnWatch" >}}`, `{{<T "TypeAnimal" >}}` i `{{<T "Alarm" >}}`.

3. Za filtre `{{<T "TypeAnimal" >}}`, `{{<T "Sex" >}}`, `{{<T "Transponder" >}}` i `{{<T "NationalAnimalID" >}}` navigirajte do odgovarajućeg područja i potvrdite s `{{<T "Ok" >}}`. Koristite tipke sa strelicama ◁ ▷ za određivanje željene postavke. Koristite tipku `F3` `{{<T "Apply" >}}` za postavljanje odabrane postavke. Da biste odbacili promjene filtra, pritisnite tipku `F1` &nbsp;<img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Back" />&nbsp;.

![VitalControl: menu Evaluation Create filter](images/filter.png "Create filter")

4. Za filtre `{{<T "AnimalID" >}}` i `{{<T "Age" >}}` odaberite odgovarajući kriterij i potvrdite s `{{<T "Ok" >}}`. Sada će vam biti prikazana donja i gornja granica. Navigirajte do željene granice pomoću tipki sa strelicama △ ▽ i potvrdite pritiskom na `{{<T "Ok" >}}` dvaput. Sada možete postaviti željeni broj pomoću tipki sa strelicama ◁ ▷ i tipki sa strelicama △ ▽. Kada su sve postavke ispravne, pritisnite `{{<T "Ok" >}}` ponovno kako biste izašli iz načina postavljanja i primijenili odabrani(e) filter(e) s tipkom `F3` `{{<T "Apply" >}}`. Pomoću tipke `F1` &nbsp;<img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Back" />&nbsp;, možete odbaciti svoje promjene ako želite.

![VitalControl: menu Evaluation Create filter](images/filter2.png "Create filter")

5. Za filtre `{{<T "Fever" >}}`, `{{<T "OnWatch" >}}` i `{{<T "Alarm" >}}` postoji mogućnost onemogućavanja ili omogućavanja njihove primjene. Da biste to učinili, odaberite odgovarajući filter i potvrdite s `{{<T "Ok" >}}`. Filter je sada aktivan. Ponovno potvrdite s `{{<T "Ok" >}}` kako biste deaktivirali filter.

![VitalControl: menu Evaluation Create filter](images/filter3.png "Create filter")

6. Kada postavite sve filtre, koristite tipku `F3` `{{<T "Apply" >}}` kako biste primijenili definirane filtre ili pritisnite tipku `F1` <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Back" /> kako biste odbacili svoje promjene na filterima.
