---
title: "Crearea unui backup de date"
linkTitle: "Backup"
date: 2023-07-20
weight: 20
description: >
  Prin intermediul unui backup de date, se creează un fișier de backup care conține toate datele stocate pe dispozitivul VitalControl.
categories: [Backup de date]
tags: [fișier de backup, unitate flash USB]
translationKey: backup
---
{{% usb-drive/ro "Pentru a efectua un backup de date pentru dispozitivul dvs.," %}}

## Efectuați backup de date {#perform-data-backup}

1. Deschideți elementul de meniu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="{{< T "Device" >}}" /> `{{< T "Device" >}}` în ecranul principal al dispozitivului dvs. VitalControl.

2. Accesați submeniul `{{< T "DataManagement" >}}` și selectați apoi elementul de submeniu `{{< T "DataBackup" >}}`. Acum selectați elementul de meniu `{{< T "CreateBackup" >}}` și confirmați cu `OK`. Vi se va cere să introduceți o unitate flash USB:

   ![VitalControl: cale meniu backup de date](../images/backup.png "Accesați backup de date")

3. Introduceți unitatea flash USB (conector C) în conectorul de la baza dispozitivului.

   ![VitalControl: introduceți unitatea flash USB](/images/firmware/update/plug-in-dual-usb-stick.svg "Introduceți unitatea flash USB")

4. Odată ce dispozitivul a detectat introducerea stick-ului USB, backup-ul de date va începe automat. Colectarea, comprimarea și scrierea datelor de backup poate dura un minut sau mai mult. Când backup-ul este finalizat, va fi afișat un mesaj de succes:

   ![VitalControl: mesaj de succes backup](../images/backup-done.png "Succes backup de date")

5. Backup-ul de date este acum creat. Veți găsi fișierul creat `backup.vcu` în directorul `backup` de pe unitatea dvs. flash USB. Fișierul de backup necesită aproximativ 1 MB de spațiu de stocare pe unitatea flash.

   ![Unitate flash USB cu fișier de backup VitalControl](../images/backup-file.png "Unitate flash USB cu fișier de backup")

   {{% alert title="Sfat" %}}
  Dacă un fișier `backup.vcu` există deja în directorul `backup` de pe unitatea dvs. flash USB, acest fișier va fi redenumit. Noul nume al fișierului este compus din șirul `backup` și data și ora la care a fost creat fișierul de backup (de exemplu, `backup_2023-07-17_12-50-37.vcb`). Fișierul de backup nou scris va fi întotdeauna numit `backup.vcu`.
    {{% /alert %}}


6. Fișierul de backup creat poate fi folosit pentru a [restaura](../restore) datele stocate pe orice dispozitiv VitalControl, dacă este necesar.
