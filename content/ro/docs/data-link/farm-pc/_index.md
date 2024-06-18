---
title: Exportul datelor despre animale și măsurători către PC-ul de gestionare a fermei
linkTitle: Export de date (PC)
date: 2023-07-19
weight: 15
description: >
 Exportul datelor despre animale și valorile măsurătorilor de pe dispozitivul VitalControl în mai multe fișiere CVS
categories: [Export de date]
translationKey: farmPC
---
Procedați după cum urmează pentru a exporta datele de pe VitalControl pe un dispozitiv de stocare în masă al PC-ului dvs.:

### Conectați VitalControl la PC {#connect-vitalcontrol-to-pc}

1. Conectați dispozitivul VitalControl la computerul sau laptopul dvs. prin cablul USB furnizat.

   ![Conectați VitalControl la PC sau laptop](/images/synchronisation/connect-to-pc.svg "Conectați VitalControl la PC")

1. Asigurați-vă că dispozitivul VitalControl este pornit.

### Efectuați exportul de date {#perform-data-export}

1. Apăsați tasta Windows pentru a deschide meniul Start

1. *Doar pentru Windows 11*: Faceți clic pe butonul `Toate aplicațiile`

1. În lista aplicațiilor instalate, derulați în jos până la litera `U`. Acolo ar trebui să găsiți o intrare de meniu `Urban VitalControl`. Dacă este necesar, extindeți această intrare pentru a afișa toate submeniurile.

   {{% alert title="Atenție" %}}
Dacă nu găsiți intrarea `Urban VitalControl` în lista aplicațiilor dvs., este posibil să trebuiască să [instalați](../vcsynchronizer/installation/) software-ul `VCSynchronizer` pe PC-ul dvs. mai întâi.
   {{% /alert %}}

1. Faceți clic pe elementul de meniu `Export de date (CVS)`.

   ![Meniul Start Windows, intrare de meniu pentru Urban VitalControl (VCSynchronizer)](../vcsynchronizer/images/data-export/data-export.png "Meniul Start Windows, VitalControl")

1. Procesul de export este pornit. Odată ce exportul de date este finalizat, se deschide o fereastră Explorer care afișează directorul local de date cu cele patru [fișiere de export](../../data-export/export-files/) nou create.

   ![Directorul local de date cu fișierele de export](../../data-export/images/export-files.png "Fișiere de export, stocate local")

   {{% alert title="Notă" %}}
  Puteți deschide fiecare dintre aceste patru [fișiere de export](../../data-export/export-files/) într-un program de calcul tabelar la alegerea dvs. (cum ar fi [Microsoft Excel](https://products.office.com/excel) sau [OpenOffice Calc](https://www.openoffice.org/)) și să efectuați analize avansate ale datelor acolo. Ca exemplu, mai jos este prezentată vizualizarea tabelului `animals.csv` într-un program de calcul tabelar:


  ![Tabel de date exportate despre animale deschis într-un software de calcul tabelar](../../data-export/images/animals.png "Software de calcul tabelar cu date despre animale")
   {{% /alert %}}
