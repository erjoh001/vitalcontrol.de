---
title: "Restaurarea unui backup de date"
linkTitle: "Restaurare"
date: 2023-07-20
weight: 20
description: >
 Printr-o restaurare de date, toate datele unui dispozitiv VitalControl pot fi restaurate pe un alt dispozitiv folosind un fișier de backup.
translationKey: restore
---
{{% usb-drive/en "Pentru a restaura un backup de date pe dispozitivul VitalControl," %}}

Pe acest stick USB, trebuie să existe un director `backup`, care trebuie să conțină un **fișier de backup valid `backup.vcu`**.

![Stick USB cu fișier de backup VitalControl](../images/backup-file.png "Stick USB cu fișier de backup")

{{% alert title="Notă" %}}
În directorul `backup` al stick-ului USB, puteți găsi mai multe fișiere de backup cu extensia `.vcu`. Dispozitivul VitalControl restaurează întotdeauna datele de backup din fișierul numit `backup.vcu`, care este întotdeauna cel mai nou fișier. Dacă doriți să restaurați date dintr-un fișier de backup mai vechi (care conține data backup-ului în numele fișierului), trebuie să redenumiți acest fișier de backup mai vechi în `backup.vcu` înainte de a efectua restaurarea datelor!
{{% /alert %}}

## Restaurarea datelor pe dispozitivul VitalControl {#data-restoration-to-vitalcontrol-device}

1. Deschideți elementul de meniu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `Dispozitiv` în ecranul principal al dispozitivului VitalControl pe care doriți să restaurați datele.

2. Accesați submeniul `Gestionare date` și selectați apoi elementul de submeniu `Backup de date`. Acum selectați elementul de meniu `Restaurare backup` și confirmați cu `OK`. Vi se va cere acum să introduceți un stick USB:

   ![VitalControl: cale meniu restaurare date](../images/restore.png "Restaurare din fișier de backup")

3. Introduceți stick-ul USB (conector C) în conectorul de la baza dispozitivului.

   ![VitalControl: introduceți stick-ul USB](/images/firmware/update/plug-in-dual-usb-stick.svg "Introduceți stick-ul USB")

4. Odată ce dispozitivul a detectat introducerea stick-ului USB, apare o fereastră de confirmare. Confirmați acest popup cu `Da` pentru a începe restaurarea datelor. Decompresarea și restaurarea backup-ului poate dura un minut sau mai mult. Când restaurarea datelor este completă, apare un mesaj de succes:

![VitalControl: success message data restore](../images/restore-done.png "Success message data restore")

5. Datele de backup au fost restaurate cu succes pe dispozitivul VitalControl.
