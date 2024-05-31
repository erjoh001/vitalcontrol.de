---
title: Loomade nimekirja filtreerimine
linkTitle: Filter
weight: 50
description: >
 Kuidas rakendada loomade nimekirjale filtrit, et kuvada ainult seadmes olevate loomade alamhulk.
date: 2023-07-26
categories: [Filter]
tags: [Filter]
translationKey: filter
---
## Filtreerimine {#applying-filters}

{{% alert title="MÄRKUS" %}}
Filter aitab teil menüüpunktides `{{<T "Herd" >}}`, `{{<T "Lists" >}}` ja `{{<T "Evaluation" >}}` VitalControl seadmes filtreerimiskriteeriumide abil valikut teostada. Niipea kui rakendate filtrit, ilmuvad ekraani ülaossa erinevate filtreerimiskriteeriumide sümbolid. Need sümbolid aitavad teil teada saada, kas ja millised filtreerimiskriteeriumid on aktiveeritud. Näiteks, kui seadistate `{{<T "Sex" >}}` filtri meessoost, kasutab seade ainult isaseid loomi. Näiteks, kui aktiveerite ka `{{<T "OnWatch" >}}` filtri, kasutab seade ainult jälgimisnimekirjas olevaid isaseid loomi.
{{% /alert %}}

Filtri loomiseks hindamistes toimige järgmiselt:

1. Alammenüüs, mis kuulub peamenüü punkti <img src="/icons/main/evaluation.svg" width="50" align="bottom" alt="Hindamine" /> `{{<T "Evaluation" >}}` alla, vajutage klahvi `F3` <img src="/icons/footer/filter.svg" width="25" align="bottom" alt="Filter" /> üks kord. Peamenüü punktide <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Nimekirjad" /> `{{<T "Lists" >}}` ja <img src="/icons/main/herd.svg" width="60" align="bottom" alt="Kari" /> `{{<T "Herd" >}}` alammenüüs peate klahvi vajutama kaks korda.

2. Avaneb alammenüü, kus saate seada kõik filtri valikud. Saate filtreerida `{{<T "AnimalID" >}}`, `{{<T "Age" >}}`, `{{<T "Sex" >}}`, `{{<T "Transponder" >}}`, `{{<T "NationalAnimalID" >}}`, `{{<T "Fever" >}}`, `{{<T "OnWatch" >}}`, `{{<T "TypeAnimal" >}}` ja `{{<T "Alarm" >}}` järgi.

3. Filtreerimiseks `{{<T "TypeAnimal" >}}`, `{{<T "Sex" >}}`, `{{<T "Transponder" >}}` ja `{{<T "NationalAnimalID" >}}` liikuge vastavasse piirkonda ja kinnitage `{{<T "Ok" >}}`-ga. Kasutage soovitud seadistuse määramiseks nooleklahve ◁ ▷. Valitud seadistuse rakendamiseks kasutage klahvi `F3` `{{<T "Apply" >}}`. Filtri muudatuste tühistamiseks vajutage klahvi `F1` &nbsp;<img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Tagasi" />&nbsp;.

![VitalControl: menüü Hindamine Loo filter](images/filter.png "Loo filter")

4. Filtreerimiseks `{{<T "AnimalID" >}}` ja `{{<T "Age" >}}` valige vastav kriteerium ja kinnitage `{{<T "Ok" >}}`-ga. Nüüd kuvatakse teile alumine ja ülemine piir. Liikuge soovitud piirini nooleklahvidega △ ▽ ja kinnitage vajutades `{{<T "Ok" >}}` kaks korda. Nüüd saate soovitud numbri seada nooleklahvidega ◁ ▷ ja nooleklahvidega △ ▽. Kui kõik seaded on õiged, vajutage uuesti `{{<T "Ok" >}}`, et lahkuda seadistusrežiimist ja rakendada valitud filter (filtrid) klahviga `F3` `{{<T "Apply" >}}`. Klahviga `F1` &nbsp;<img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Tagasi" />&nbsp;, saate soovi korral muudatused tühistada.

![VitalControl: menüü Hindamine Loo filter](images/filter2.png "Loo filter")

5. Filtreerimiseks `{{<T "Fever" >}}`, `{{<T "OnWatch" >}}` ja `{{<T "Alarm" >}}` on võimalik nende rakendamine keelata või lubada. Selleks valige vastav filter ja kinnitage `{{<T "Ok" >}}`-ga. Filter on nüüd aktiivne. Kinnitage uuesti `{{<T "Ok" >}}`-ga, et filter deaktiveerida.

![VitalControl: menüü Hindamine Loo filter](images/filter3.png "Loo filter")

6. Kui olete kõik filtrid seadnud, kasutage määratletud filtrite rakendamiseks klahvi `F3` `{{<T "Apply" >}}` või vajutage filtrite muudatuste tühistamiseks klahvi `F1` <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Tagasi" />.
