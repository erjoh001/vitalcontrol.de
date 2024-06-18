---
title: Exportul datelor pe un stick USB
linkTitle: Pe un stick USB
date: 2023-07-20
weight: 10
description: >
  Exportați fișierele de date CVS care conțin date despre animale și valori de măsurare stocate pe dispozitivul VitalControl pe un stick USB.
categories: [Exportul datelor]
tags: [Fișiere CSV, Stick USB]
translationKey: data-export/usb-drive
---
{{% usb-drive/en "Pentru a efectua un export al datelor dispozitivului," %}}

## Efectuați exportul datelor {#perform-data-export}

1. Deschideți elementul de meniu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Dispozitiv" /> `{{<T "Device" >}}` în ecranul principal al dispozitivului dvs. VitalControl.

2. Accesați submeniul `{{<T "DataManagement" >}}`, selectați elementul de meniu `{{<T "AnimalData" >}}` și confirmați cu `{{<T "Ok" >}}`.

3. Se deschide un alt submeniu. Selectați elementul de meniu `{{<T "ExportAnimalData" >}}` și confirmați cu `{{<T "Ok" >}}`.

4. Acum vi se cere să introduceți un stick USB:

   ![VitalControl: Calea meniului pentru exportul datelor](../images/data-export.png "Invocați exportul datelor")

5. Introduceți stick-ul USB (conector C) în conectorul de la baza dispozitivului.

   ![VitalControl: introduceți stick-ul USB](/images/firmware/update/plug-in-dual-usb-stick.svg "Introduceți stick-ul USB")

6. Odată ce dispozitivul a detectat introducerea stick-ului USB, exportul datelor începe automat. Scrierea datelor de backup poate dura câteva secunde. Când exportul datelor s-a terminat, este afișat un mesaj de succes:

   ![VitalControl: mesaj de succes export date](../images/success-data-export.png "Succes export date")

7. Exportul datelor este acum complet. Veți găsi cele patru [fișiere de export](../export-files/) create în directorul `export-csv` de pe stick-ul USB.

   ![Stick USB cu fișiere de export VitalControl](../images/export-files.png "Fișiere de export pe stick-ul USB")

   {{% alert title="Notes" %}}
  - Pentru a preveni suprascrierea accidentală a fișierelor de export, numele fiecărui fișier de export include întotdeauna data și ora la care a fost creat fișierul. Asigurați-vă că utilizați cea mai recentă versiune a fișierelor de export dacă ați exportat date despre animale de mai multe ori.
  - Dimensiunea fișierelor de export depinde de numărul de animale de pe VitalControl și de numărul de măsurători efectuate. În general, fișierele de export ocupă doar câțiva kB de spațiu de stocare pe stick-ul USB.
   {{% /alert %}}

Te rog să introduci conținutul Markdown pe care dorești să-l traduc.
