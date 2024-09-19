---
title: Măsoară temperatura
linkTitle: Temperatură
slug: measure-temperature
weight: 10
description: >
  Măsoară febra la animalele tale.
date: 2023-07-26
categorii: [Acțiuni]
etichete: [Acțiuni, febră, temperatură]
translationKey: actions/temperature
---

## Măsoară febra {#measure-fever}

Folosește acțiunea de măsurare a temperaturii pentru a măsura temperatura animalelor tale. Introduceți vârful de măsurare rectal la adâncimea specificată de măsurare (pentru animalele mari, întreaga lungime până la umflătură, pentru rumegătoarele mici aproximativ 6 cm sau 2/3 din vârful de măsurare). Procesul de măsurare se desfășoară automat. De îndată ce procesul de măsurare este complet, dispozitivul afișează temperatura măsurată. Codarea culorilor indică dacă temperatura este în intervalul verde, galben sau roșu. Aveți o serie de opțiuni în timpul campaniei de măsurare a temperaturii:

- [Salvați rezultatul](#save-result) pentru a documenta măsurarea specifică animalului
- Puneți animalul pe [Lista de Supraveghere](#put-on-the-watch-list). Acest lucru vă facilitează verificarea repetițiilor, deoarece puteți apela aceste animale folosind 'lista de observație' și astfel găsiți mai ușor animalele suspecte.
- Porniți și opriți [Iluminarea Locului de Măsurare](#lighting-of-the-measurement-location-on-and-off)
- [Repetați măsurarea](#repeat-the-measurement)
- [Anulați Acțiunea](#cancel-the-action)

{{% alert title="Sugestie" %}}
Dacă temperatura este în zona galbenă ("ridicată") sau zona roșie ("febră"), VitalControl pune automat animalul selectat pe lista de alarmă. Prin corelarea cu alte date, puteți monitoriza continuu sănătatea animalului individual.
{{% /alert %}}

### Pași preliminari {#preliminary-steps}

1. În ecranul principal al dispozitivului tău VitalControl, selectează elementul de meniu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Acțiuni" /> `{{<T "Actions" >}}` și apasă butonul `{{<T "Ok" >}}`.

2. Fie scanează un animal folosind transponderul, fie selectează un animal din listă. Confirmă cu `{{<T "Ok" >}}` și selectează un animal cu tastele săgeată △ ▽. Confirmă cu `{{<T "Ok" >}}`.

3. Se deschide un submeniu cu acțiunile animalului. Acțiunea <img src="/icons/actions/temperature.svg" width="10" align="bottom" alt="Temperature" /> `{{<T "Temperature" >}}` este selectată automat. Confirmă cu `{{<T "Ok" >}}`.

4. Acum efectuează măsurarea. De îndată ce măsurarea este completă, temperatura este evidențiată în albastru, verde, galben sau roșu, în funcție de pragul setat.

{{< tabpane >}}
{{< tab header="Preliminary steps:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Actions Preliminary steps](../images/firststeps-scan.png "Preliminary steps")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Actions Preliminary steps](../images/firststeps.png "Preliminary steps")
{{% /tab %}}
{{< /tabpane >}}

### Salvează rezultatul {#save-result}

1. Completează pașii preliminari.

2. Folosește tasta `F3` <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> sau confirmă cu `{{<T "Ok" >}}` pentru a salva rezultatul.

    ![VitalControl: Menu Actions Save results](../images/saveresults.png "Save results")

### Pune pe lista de urmărire {#put-on-the-watch-list}

1. Completează pașii preliminari.

2. Apasă butonul superior mijlociu `On/Off` <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.

3. Se deschide un meniu popup în care poți selecta din elementele de meniu `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` sau `{{<T "Flashlight" >}}`. Folosește tastele săgeată △ ▽ pentru a selecta `{{<T "AddToWatchList" >}}` și apasă tasta centrală `{{<T "Ok" >}}` sau tasta `F3` `{{<T "Ok" >}}`.

    ![VitalControl: Menu Actions Put on watch list](../images/watchlist.png "Put on watch list")

### Iluminarea locației de măsurare pornit și oprit {#lighting-of-the-measurement-location-on-and-off}

1. Completează pașii preliminari.

2. Apasă butonul superior mijlociu `On/Off` <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.


3. Se deschide un meniu popup în care poți selecta din elementele de meniu `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` sau `{{<T "Flashlight" >}}`. Folosește tastele săgeată △ ▽ pentru a selecta `{{<T "Flashlight" >}}` și apasă tasta centrală `{{<T "Ok" >}}` sau tasta `F3` `{{<T "Ok" >}}`.

    ![VitalControl: Menu Actions Flashlight on off](../images/light.png "Flashlight on off")

### Repetă măsurătoarea {#repeat-the-measurement}

1. Completează pașii preliminari.

2. Apasă butonul de sus din mijloc `On/Off` <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.

3. Se deschide un meniu popup în care poți selecta din elementele de meniu `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` sau `{{<T "Flashlight" >}}`. Folosește tastele săgeată △ ▽ pentru a selecta `{{<T "RepeatMeasurement" >}}` și apasă tasta centrală `{{<T "Ok" >}}` sau tasta `F3` `{{<T "Ok" >}}`.

    ![VitalControl: Menu Actions Light on off](../images/repeat.png "Light on off")

### Anulează acțiunea {#cancel-the-action}

1. Completează pașii preliminari.

2. Apasă tasta `F1` <img src="/icons/footer/cancel.svg" width="25" align="bottom" alt="Cancel" /> pentru a anula acțiunea.

    ![VitalControl: Menu Actions Cancel the action](../images/saveresults.png "Cancel the action")

{{% alert title="Hint" %}}
Dacă această acțiune nu este disponibilă, probabil acțiunea a fost dezactivată! Activează acțiunea în meniul [setări acțiuni](../setting/). Alternativ, resetarea tuturor acțiunilor va readuce acea acțiune.
{{% /alert %}}
