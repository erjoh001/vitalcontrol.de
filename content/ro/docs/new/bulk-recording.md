---
title: "Înregistrarea în masă a unui grup de animale achiziționate"
linkTitle: "Înregistrare în masă"
date: 2023-07-28T13:25:28+02:00
weight: 15
draft: false
slug: bulk-recording
description: >
  Utilizați scannerul de coduri de bare pentru a înregistra o varietate de animale.
categories: [Înregistrare în masă]
tags: [Înregistrare în masă]
translationKey: new/bulk-recording
---
## Înregistrare în masă {#bulk-recording}

Cu ajutorul înregistrării în masă, puteți captura un număr mare de animale într-un timp scurt și le puteți salva pe dispozitivul dvs. Utilizați scannerul de coduri de bare pentru a scana codurile de bare pentru numărul plăcuței de identificare și data nașterii de pe pașapoartele bovinelor. Animalul este salvat automat și puteți scana imediat următorul pașaport. Pentru a efectua înregistrarea în masă a animalelor, procedați după cum urmează:

1. Conectați scannerul de coduri de bare la VitalControl folosind cablul.

2. Pe ecranul principal al dispozitivului dvs. VitalControl, selectați elementul de meniu <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="New animal" /> `{{<T "New" >}}` și apăsați butonul `{{<T "Ok" >}}`.

3. Se deschide un submeniu. Utilizați tastele săgeată ◁ ▷ △ ▽ pentru a selecta elementul de meniu <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" /> `{{<T "BulkRecording" >}}` și confirmați cu `{{<T "Ok" >}}`.

4. Se deschide un alt submeniu, care conține un câmp pentru numărul plăcuței de identificare a animalului și un alt câmp pentru data nașterii animalului. Mai întâi scanați codul de bare pentru numărul plăcuței de identificare. Marginea câmpului se schimbă din roșu în verde. Apoi scanați data nașterii. Marginea se schimbă temporar în verde înainte ca ambele margini să redevină roșii. Contorul de sub simbolul pașaportului <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Animal passports" title="Animal passports" /> din partea de sus a ecranului crește de la 0 la 1. Primul animal a fost salvat. Continuați și scanați celelalte pașapoarte ale bovinelor. După fiecare pașaport scanat, contorul de sub simbolul pașaportului <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Animal passports" title="Animal passports" /> crește cu unul. Contorul de sub simbolul turmei <img src="/icons/header/group.svg" width="35" align="bottom" alt="Animal group"  title="Animal group" /> de asemenea crește cu unul.

{{% alert title="Hint" %}}
Contorul de sub simbolul pașaportului <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Animal passports" title="Animal passports" /> arată câte pașapoarte ai scanat dintr-o dată fără a părăsi ecranul `{{<T "BulkRecording" >}}`. Contorul de sub simbolul turmei <img src="/icons/header/group.svg" width="35" align="bottom" alt="New animal" /> arată câte pașapoarte ai scanat în total. Acest contor nu se resetează la zero dacă părăsești ecranul `{{<T "BulkRecording" >}}`. Numărul este echivalent cu înregistrările tale din elementul de meniu ['Purchases'](../new-on-farm/purchased-animals/).
{{% /alert %}}

   ![VitalControl: Menu 'New - Bulk recording'](../images/bulk-recording.png "Bulk recording")

{{% alert title="Hint" %}}
Ai opțiuni suplimentare de setare în cadrul elementului de meniu `{{<T "BulkRecording" >}}`. Acestea sunt explicate mai jos. Ca pași pregătitori, accesează întotdeauna mai întâi elementul de meniu `{{<T "BulkRecording" >}}` și apoi continuă conform instrucțiunilor.
{{% /alert %}}

{{% alert title="Hint" %}}
Mesaje de eroare pot apărea în timpul procesului de scanare. În acest caz, scannerul de coduri de bare emite un sunet și scanarea ulterioară nu este posibilă. Confirmă mesajul de eroare corespunzător pe afișajul VitalControl și continuă scanarea.
{{% /alert %}}

### Data nașterii obligatorie {#birth-date-mandatory}

Cu această opțiune de setare poți determina dacă data nașterii trebuie specificată la crearea animalelor. Dacă dezactivezi această opțiune, trebuie doar să scanezi codul de bare pentru a salva un animal. Pentru aceste animale, însă, data curentă este stocată ca dată a nașterii! Această funcție este activată implicit. Pentru a o dezactiva, urmează pașii de mai jos:

1. Folosește butonul <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings menu" /> `On/Off` pentru a deschide meniul de setări.

2. Folosește tastele săgeată △ ▽ pentru a selecta opțiunea de setare `{{<T "BirthDateMandatory" >}}` și confirmă cu `{{<T "Ok" >}}`.

3. Cerculețul galben simbolizează că funcția este activată. Un cerculeț gri simbolizează că funcția este dezactivată.

4. Salvați setările și utilizați tasta `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" /> pentru a reveni la elementul de meniu <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" />&nbsp; `{{<T "BulkRecording" >}}`.

   ![VitalControl: Menu New Birth date mandatory](../images/birthdate.png "Birth date mandatory")

### Valori implicite {#default-values}

În cadrul meniului de setări `{{<T "DefaultValues" >}}` setați standardele care se aplică fiecărui animal pe care îl creați. Procesul de creare cu scannerul de coduri de bare rămâne neschimbat, așa cum este descris mai sus. Aveți opțiunea de a seta tipul de animale, sexul, rasa și locația. Pentru a seta `{{<T "DefaultValues" >}}`, procedați după cum urmează:

1. Utilizați butonul <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings menu" /> `On/Off` pentru a deschide meniul de setări.

2. Utilizați tastele săgeată △ ▽ pentru a selecta elementul de meniu `{{<T "DefaultValues" >}}` și confirmați cu `{{<T "Ok" >}}`.

3. Se deschide un submeniu cu diferite opțiuni de setare. Utilizați tastele săgeată △ ▽ pentru a selecta opțiunea de setare dorită. Utilizați tastele săgeată ◁ ▷ pentru a selecta setarea dorită.

4. Salvați setările și utilizați tasta `F1`&nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" /> pentru a reveni la elementul de meniu <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" />&nbsp; `{{<T "BulkRecording" >}}` .

   ![VitalControl: Menu New Default values](../images/defaultvalues.png "Default values")

### Valori înregistrate {#recorded-values}

În cadrul meniului de setări `{{<T "RecordedValues" >}}`, puteți specifica ce valori ar trebui capturate în plus față de numărul etichetei auriculare și data nașterii. Puteți alege între `{{<T "Breed" >}}`, `{{<T "Sex" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "CurrentWeight" >}}`, `{{<T "BirthWeight" >}}` și `{{<T "TypeAnimal" >}}`. De îndată ce setați cel puțin o valoare, procesul se schimbă în timpul scanării. Mai întâi scanați numărul etichetei auriculare și data nașterii. Apoi utilizați tastele direcționale △ ▽ pentru a selecta valorile care trebuie setate și setați valorile. Apoi salvați intrările dvs. cu tasta `F3`. Numai atunci este creat animalul! Pentru a seta valorile care trebuie înregistrate, procedați după cum urmează:


1. Utilizați butonul <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings menu" /> `On/Off` pentru a deschide meniul de setări.

2. Utilizați tastele săgeată △ ▽ pentru a selecta elementul de meniu `{{<T "RecordedValues" >}}` și confirmați cu `{{<T "Ok" >}}`.

3. Selectați valoarea dorită pentru a fi înregistrată cu tastele săgeată △ ▽ și confirmați cu `{{<T "Ok" >}}`. Apare un cerc galben. Dacă doriți să dezactivați valoarea pentru a fi înregistrată, confirmați din nou cu `{{<T "Ok" >}}`. Cercul galben dispare.

4. Salvați setările și utilizați tasta `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" /> pentru a reveni la elementul de meniu <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" />&nbsp; `{{<T "BulkRecording" >}}`.

5. Dacă doriți să dezactivați din nou toate valorile care trebuie înregistrate, selectați opțiunea de setare `{{<T "EnableAllResetOrder" >}}` în elementul de meniu `{{<T "RecordedValues" >}}` și confirmați cu `{{<T "Ok" >}}`.

   ![VitalControl: Menu New Record values](../images/recordvalues.png "Record values")
