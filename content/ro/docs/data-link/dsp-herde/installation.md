---
title: "Configurarea VitalControl Technology:"
linkTitle: Configurare
date: 2023-08-04T12:21:53+02:00
draft: false
description: >
  Definirea parametrilor de sincronizare pentru schimbul de date între software-ul *Herde* și dispozitivul VitalControl.
weight: 10
categories: [DSP Herde]
translationKey: DSPherde/installation
---
Înainte de primul [schimb de date](../data-exchange/), cuplarea tehnologiei la dispozitivul VitalControl trebuie creată și configurată o singură dată.

{{% alert title="Atenție" %}}
Înainte de a configura cuplarea tehnologiei, verificați dacă software-ul 'VCSynchronizer' este instalat pe PC-ul dvs.; acest software este obligatoriu pentru schimbul de date. Pentru a face acest lucru, deschideți meniul Start din Windows și căutați în lista aplicațiilor dvs. o intrare numită 'Urban VitalControl'. Dacă nu găsiți o astfel de intrare, [instalați](../../vcsynchronizer/installation/) software-ul `VCSynchronizer` pe PC-ul dvs.
{{% /alert %}}

Pentru a configura tehnologia, procedați după cum urmează:

## Creați un nou set de parametri pentru schimbul de date cu dispozitivul VitalControl {#create-new-parameter-set-for-data-exchange-with-vitalcontrol-device}

1. În cadrul software-ului `Herde`, deschideți fereastra `Setări`. În funcție de configurația interfeței dvs. de utilizator, puteți deschide această fereastră prin intermediul elementului de meniu `Organizație` din meniul principal (elementul de nivel superior _Setări_), în meniul din bara laterală sau în trusa dvs. personalizată de instrumente (orizontală sau verticală).

   ![Software Herde: invocarea meniului de setări](../screenshots/settings.png "Herde: invocare Setări")

1. Se deschide o fereastră pop-up `Setări`, în a cărei bara laterală din stânga sunt listate numeroase categorii de setări. Deschideți categoria `Serviciu` ➊ și selectați subcategoria `Tehnologie` ➋.

1. În antetul zonei principale din dreapta, apare acum un dropdown în care sunt listate toate seturile de parametri de tehnologie definite. Numărul de tehnologii configurate este afișat în dreapta. Faceți clic pe butonul ![Software Herde: Creați un nou set de parametri de tehnologie](/icons/new.png "Herde: Creare Cuplare Tehnologie") `Creați un nou set de parametri de tehnologie` ➌.

![Software Herde: settings screen for technology](../screenshots/settings-technology.png "Herde: Settings for Technology")

1. Se deschide o altă fereastră pop-up. Introduceți `VitalControl` ca **Nume al conexiunii** și `Urban VitalControl (Gen 2)` ca **Tip de Tehnologie** și apoi faceți clic pe butonul `Accept`.

   ![Software Herde: Create new parameter set for VitalControl device](../screenshots/new-technology.png "Create new technology: VitalControl").

   Setul de parametri pentru tehnologia `VitalControl` este acum creat și trebuie configurat în pașii următori.

## Configurare: Setări de bază {#configuration-basic-settings}

Inițial, fila `Setări de bază` este selectată în ecranul afișat, așa cum este prezentat în figura de mai jos. Faceți ajustări acolo în categoriile `Program extern` ➊, `Date despre animale` ➋, `Locații` ➌ și `Părăsire` ➍ în funcție de condițiile specifice fermei dvs.

   ![Software Herde: Configuration of basic settings](../screenshots/basic-settings.png "Technology VitalControl: Basic settings").
   
### Categoria `Program extern` ➊ {#category-external-program-}

Pentru a efectua schimbul de date între VitalControl și Herde Plus, este necesar software-ul de bază [VitalControl Synchronizer](../../vcsynchronizer) ca program ajutător extern. Pentru funcționarea corectă a acestui program, trebuie făcute unele ajustări în categoria `Program extern` ➊.

- **Nume dispozitiv pentru schimbul de date**:  
  În mod implicit, acest câmp este gol. Cu toate acestea, se recomandă să introduceți aici numele computerului dvs. Pentru a face acest lucru, apăsați pe pictograma ![Herde Software: Create new technology coupling](/icons/arrow-down.png "Herde: Create technology coupling") `Săgeată în jos` la capătul drept al câmpului drop-down. Numele computerului dvs. va fi acum determinat și afișat pentru selecție în lista drop-down. Odată ce câmpul este completat cu numele computerului dvs. și această setare este salvată, schimbul de date poate fi declanșat doar de pe computerul dvs. de acum înainte.

- **Executați în calea**:
  Vă rugăm să introduceți `%LOCALAPPDATA%\Urban\VitalControl\Synchronizer` în acest câmp de intrare. Aceasta este calea absolută către programul `VitalControl Synchronizer` (sau mai specific către fișierul `vcsynchronizer.exe`). Dacă directorul țintă pentru acest program a fost schimbat în timpul [instalării VCSynchronizer](../../vcsynchronizer/installation), vă rugăm să introduceți aici directorul țintă selectat.


- **Program HerdePlus 🡒 Technology**:  
  Acest câmp de intrare trebuie completat cu valoarea `vc_imp.bat`. Fișierul batch corespunzător specifică secvența de operațiuni în timpul importului de date.

- **Technology 🡒 Program HerdePlus**:  
  Acest câmp de intrare trebuie completat cu valoarea `vc_exp.bat`. Fișierul batch corespunzător specifică secvența de operațiuni în timpul exportului de date.

### Category `Animal Data` ➋ {#category-animal-data-}

Trebuie făcute ajustări suplimentare în categoria 'Date despre animale' ➋ pentru a face schimbul de date complet funcțional.

- **Număr animal**:  
  Această setare determină ce ID primesc animalele pentru afișare pe dispozitivul VitalControl:
  - Dacă ați atribuit ID-uri scurte (`Nr. grajd`, 2 până la 6 cifre) animalelor dvs., ar trebui să selectați valoarea 'Număr grajd' aici: ID-ul afișat al unui animal pe VitalControl va corespunde cu numărul de grajd atribuit animalului.
  - Dacă **nu** ați atribuit numere de ID scurte animalelor dvs. - acest lucru este comun în sectorul de îngrășare, de exemplu - atunci ar trebui să selectați valoarea `Nr. crotalie (5 cifre)` aici. ID-ul afișat al unui animal pe dispozitivul VitalControl va corespunde cu ultimele 5 cifre ale ID-ului imprimat pe crotalia galbenă a animalului.
  
<br>

- **Număr transmițător**:  
  Această setare determină numărul așteptat pentru un animal în timpul scanării RFID:  
  - Dacă puneți un guler cu un transponder pe animalele dvs. sau puneți un transponder pe urechea animalelor dvs. - de exemplu pentru identificare la hrănitorul automat -, ar trebui să selectați valoarea 'Transponder' aici.
  - Dacă animalele sau vițeii dvs. poartă crotalii electronice codificate cu numărul oficial de identificare național de 15 cifre al animalului dvs., care va servi pentru identificarea animalului pe tot parcursul vieții sale, ar trebui să selectați valoarea 'Nr. crotalie (15 cifre)` aici.

<br>

- **Vârsta minimă pentru transfer**:  
  Dacă `0` este introdus ca valoare pentru acest câmp de intrare, **toate animalele** vor fi transferate pe dispozitivul VitalControl, indiferent de vârsta lor. O valoare mai mare decât `0` definește vârsta minimă (în zile) pentru animalele care urmează să fie transferate. De exemplu, dacă **doar vacile** urmează să fie transferate pe dispozitiv, trebuie introdusă aici o valoare de 600 de zile (= 20 de luni) ca vârstă minimă.

### Categoria `Locații` ➌ {#category-locations-}

Utilizați această categorie pentru a exclude animalele din anumite locații de la transferul de date către dispozitiv. Pentru a face acest lucru, eliminați bifa de la locația/locațiile pentru care **nu** doriți să transferați animalele găzduite acolo către dispozitiv.

### Categoria `Părăsire` ➍ {#category-leaving-}

Bifați opțiunea 'Părăsire în HERDEplus' aici. În acest fel, specificați că animalele care au părăsit turma sunt, de asemenea, șterse de pe dispozitivul VitalControl în timpul sincronizării.
De asemenea, bifați opțiunea 'Nu există în stoc'. În acest fel, specificați că animalele de pe VitalControl care nu sunt cunoscute de software-ul `Herde` sunt șterse de pe VitalControl în timpul sincronizării.

## Configurare: Setări specifice tehnologiei {#configuration-technology-specific-settings}

Apoi, faceți clic pe fila `Setări specifice tehnologiei` pentru a determina domeniul de aplicare al schimbului de date. Se recomandă să bifați toate casetele de selectare enumerate acolo, cu excepția casetei de selectare `Salvați fișierul de import după procesare`. Această casetă de selectare este destinată scopurilor de diagnosticare și ar trebui selectată doar dacă este solicitată de personalul de service.

- **Vârsta maximă pentru transfer**:  
  Dacă se introduce `0` ca valoare aici, **toate animalele** vor fi transferate pe dispozitivul VitalControl, indiferent de vârsta lor. O valoare mai mare decât `0` definește vârsta maximă (în zile) pentru animalele care urmează să fie transferate. Dacă, de exemplu, **doar vițeii** urmează să fie transferați pe dispozitiv, trebuie introdusă aici o valoare de 90 de zile (= 3 luni) ca vârstă maximă.

   ![Software Herde: Configurare Schimb de date](../screenshots/technology-specific-settings.png "Schimb de date: setări specifice").

## Salvați setările de schimb de date {#save-data-exchange-settings}

Apăsați tasta `Salvați (F2)` după ce ați configurat corespunzător toți parametrii de configurare. Setul de parametri pentru schimbul de date către dispozitivul VitalControl este acum salvat și gata de utilizare.  
Efectuați acum un [schimb de date](../data-exchange/) pentru a verifica dacă setările stipulate sunt valide, astfel încât să puteți schimba cu succes datele către și de la dispozitivul VitalControl.


