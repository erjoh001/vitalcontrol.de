---
title: Animale achiziționate
linkTitle: Animale achiziționate
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: purchased-animals
description: >
  Aici puteți vizualiza achizițiile curente și exporta datele.
categorii: [Nou pe fermă]
etichete: [Nou pe fermă]
translationKey: new-on-farm/new-on-farm
---
## Animale achiziționate {#purchased-animals}

În această listă veți găsi toate animalele pe care le-ați creat prin înregistrare în masă. Puteți exporta această listă și astfel să înregistrați adăugările direct în programul de gestionare a turmei DSP-Herde și în HI-Tier. Alternativ, puteți șterge toate notificările de achiziție.

{{% alert title="Sfat" %}}
Pentru a exporta datele aveți nevoie de stick-ul UBS inclus. Conectați stick-ul USB cu adaptorul USB-C la dispozitivul VitalControl înainte de a urma instrucțiunile.
{{% /alert %}}

1. În ecranul principal al dispozitivului dvs. VitalControl, selectați elementul de meniu <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Nou pe fermă" /> `{{<T "NewOnFarm" >}}` și apăsați butonul `{{<T "Ok" >}}`.

2. Se deschide un submeniu în care puteți alege între <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Nou pe fermă, fără transponder" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Animale achiziționate" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Fără ID național al animalului" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Nașteri" /> `{{<T "Births" >}}` și <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Fără transponder atribuit" /> `{{<T "NoTransponderAssigned" >}}`. Utilizați tastele săgeată ◁ ▷ △ ▽ pentru a selecta elementul de meniu <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Animale achiziționate" /> `{{<T "PurchasedAnimals" >}}` și confirmați cu `{{<T "Ok" >}}`.

3. Se deschide o listă cu achizițiile dvs. pe care le-ați înregistrat prin intermediul elementului de meniu de înregistrare în masă.


4. Folosiți tasta `F2` `{{<T "CSVExport" >}}`.

5. Lista de mesaje CSV este acum salvată pe stick-ul USB.

    ![VitalControl: List of purchased animals, csv export](../images/purchasedanimals.png "Purchased animals, csv export ")

## Opțiuni: Șterge toate notificările după export {#options-delete-all-notices-after-export}

Cu această opțiune, puteți seta dacă toate mesajele din lista `{{<T "PurchasedAnimals" >}}` ar trebui să fie șterse după ce fișierul CSV a fost exportat. Utilizați această opțiune doar dacă sunteți sigur că nu mai aveți nevoie de mesaje!

1. Folosiți tasta `F3`. Se deschide un submeniu.

2. Folosiți tastele săgeată △ ▽ pentru a selecta elementul de meniu `{{<T "DeleteAllNoticesAfterExport" >}}` și confirmați cu `{{<T "Ok" >}}`.

3. Caseta este acum marcată cu o bifă. Opțiunea este activată. Confirmați din nou cu `{{<T "Ok" >}}` pentru a dezactiva opțiunea.

    ![VitalControl: List of purchased animals, csv export](../images/delete-all.png "Delete all notices after export")    

## Apeluri de funcții directe {#direct-function-calls}

În plus față de crearea fișierului de export, aveți următoarele opțiuni:

- [Dezlegare transponder](#unlink-transponder)
- [Șterge toate notificările de achiziție](#clear-all-purchase-notices)
- [Șterge animalul + notificare](#delete-animal--purchase-notice)
- [Șterge notificarea de achiziție](#clear-notice-of-purchase)
- [Editează o marcă](#edit-data-of-purchased-animal)

{{% alert title="Hint" %}}
Deschideți întotdeauna lista `{{<T "PurchasedAnimals" >}}` mai întâi, așa cum este descris în instrucțiunile de mai sus.
{{% /alert %}}

### Dezlegare transponder {#unlink-transponder}

Puteți folosi această funcție pentru a elimina transponderul de la un animal.

1. Folosiți tasta `F3`. Se deschide un submeniu.

2. Folosiți tastele săgeată △ ▽ pentru a selecta elementul de meniu `{{<T "UnlinkTransponder" >}}` și confirmați cu `{{<T "Ok" >}}`.

3. Transponderul a fost dezlegat cu succes.

    ![VitalControl: List of purchased animals, csv export](../images/unlink-transponder.png "Purchased animals, unlink transponder")

### Șterge toate notificările de achiziție {#clear-all-purchase-notices}

Cu această funcție, puteți șterge toate animalele din lista `{{<T "PurchasedAnimals" >}}` fără a fi nevoie să creați mai întâi un fișier de export.

1. Utilizați tasta `F3`. Se deschide un submeniu.

2. Utilizați tastele săgeată △ ▽ pentru a selecta elementul de meniu `{{<T "ClearAllPurchaseNotices" >}}` și confirmați cu `{{<T "Ok" >}}`.

3. Notificările de achiziție au fost șterse cu succes.

    ![VitalControl: Lista animalelor achiziționate, șterge notificările de achiziție](../images/clear.png "Șterge toate notificările de achiziție")

### Șterge animal + notificare de achiziție {#delete-animal--purchase-notice}

Pentru a șterge un animal și notificarea de achiziție corespunzătoare, procedați după cum urmează:

1. Utilizați tastele săgeată △ ▽ pentru a selecta animalul pe care doriți să-l ștergeți.

2. Utilizați tasta `F3`. Se deschide un submeniu.

3. Utilizați tastele săgeată △ ▽ pentru a selecta elementul de meniu `{{<T "UnregisterAnimalAndBirthNotice" >}}` și confirmați cu `{{<T "Ok" >}}`.

4. Animalul și mesajul de acces au fost șterse cu succes.

    ![VitalControl: Lista animalelor achiziționate, șterge animal + notificare](../images/delete.png "Șterge animal + notificare")

### Șterge notificarea de achiziție {#clear-notice-of-purchase}

Pentru a șterge notificarea de achiziție a unui animal din listă, procedați după cum urmează:

1. Utilizați tastele săgeată △ ▽ pentru a selecta animalul a cărui notificare de achiziție doriți să o ștergeți.

2. Utilizați tasta `F3`. Se deschide un submeniu.

3. Utilizați tastele săgeată △ ▽ pentru a selecta elementul de meniu `{{<T "ClearPurchaseNotice" >}}` și confirmați cu `{{<T "Ok" >}}`.

4. Notificarea de achiziție a animalului selectat a fost ștearsă cu succes.

    ![VitalControl: Lista animalelor achiziționate, șterge notificarea de achiziție](../images/clearnotice.png "Șterge notificarea de achiziție")

### Editează datele animalului achiziționat {#edit-data-of-purchased-animal}

Pentru a edita datele unui animal din lista de achiziții, procedați după cum urmează:

1. Utilizați tastele săgeată △ ▽ pentru a selecta animalul pe care doriți să-l editați.

2. Utilizați butonul `{{<T "Ok" >}}`. Se deschide un submeniu cu datele animalului. Puteți afla cum să editați aceste date [aici](/ro/docs/actions/edit/#edit-animal-data).


    ![VitalControl: Lista animalelor achiziționate, Editare date animal](../images/edit.png "Editare date ale animalului achiziționat")
