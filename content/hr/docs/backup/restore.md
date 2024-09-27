---
title: "Vraćanje sigurnosne kopije podataka"
linkTitle: "Vraćanje"
date: 2023-07-20
weight: 20
description: >
 Putem vraćanja podataka, svi podaci uređaja VitalControl mogu se vratiti na drugi uređaj koristeći sigurnosnu kopiju.
translationKey: restore
---
{{% usb-drive/en "Kako biste vratili sigurnosnu kopiju podataka na vaš VitalControl uređaj," %}}

Na ovom USB flash pogonu mora postojati direktorij `backup`, koji mora sadržavati valjanu **sigurnosnu kopiju datoteke `backup.vcu`**.

![USB-flash pogon sa sigurnosnom kopijom VitalControl](../images/backup-file.png "USB-flash pogon sa sigurnosnom kopijom")

{{% alert title="Napomena" %}}
Unutar direktorija `backup` na vašem USB flash pogonu, možete pronaći nekoliko sigurnosnih kopija s ekstenzijom `.vcu`. Uređaj VitalControl uvijek vraća podatke iz datoteke nazvane `backup.vcu`, koja je uvijek najnovija datoteka. Ako želite vratiti podatke iz starije sigurnosne kopije (koja sadrži datum sigurnosne kopije u nazivu datoteke), morate preimenovati tu stariju sigurnosnu kopiju u `backup.vcu` prije nego što izvršite vraćanje podataka!
{{% /alert %}}

## Vraćanje podataka na uređaj VitalControl {#data-restoration-to-vitalcontrol-device}

1. Otvorite stavku izbornika &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Uređaj" /> `Uređaj` na glavnom ekranu uređaja VitalControl na koji želite vratiti podatke.

2. Pozovite podizbornik `Upravljanje podacima` i zatim odaberite stavku podizbornika `Sigurnosna kopija podataka`. Sada odaberite stavku izbornika `Vrati sigurnosnu kopiju` i potvrdite s `OK`. Sada će se od vas tražiti da umetnete USB flash pogon:

   ![VitalControl: putanja izbornika vraćanje podataka](../images/restore.png "Vraćanje iz sigurnosne kopije")

3. Umetnite USB flash pogon (C priključak) u konektor na dnu uređaja.

   ![VitalControl: umetnite USB flash pogon](/images/firmware/update/plug-in-dual-usb-stick.svg "Umetnite USB flash pogon")

4. Kada uređaj detektira umetanje USB sticka, pojavit će se prozor za potvrdu. Potvrdite ovaj popup s `Da` kako biste započeli vraćanje podataka. Decompressing i vraćanje sigurnosne kopije može potrajati minutu ili duže. Kada je vraćanje podataka završeno, prikazat će se poruka o uspjehu:


   ![VitalControl: success message data restore](../images/restore-done.png "Success message data restore")

5. Podaci sigurnosne kopije uspješno su vraćeni na uređaj VitalControl.
