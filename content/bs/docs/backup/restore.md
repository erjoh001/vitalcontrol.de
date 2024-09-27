---
title: "Vraćanje sigurnosne kopije podataka"
linkTitle: "Vraćanje"
date: 2023-07-20
weight: 20
description: >
 Putem vraćanja podataka, cijeli podaci uređaja VitalControl mogu se vratiti na drugi uređaj koristeći sigurnosnu kopiju.
translationKey: restore
---
{{% usb-drive/en "Kako biste vratili sigurnosnu kopiju podataka na vaš VitalControl uređaj," %}}

Na ovom USB flash disku mora postojati direktorij `backup`, koji mora sadržavati važeću **sigurnosnu kopiju datoteke `backup.vcu`**.

![USB-flash disk sa sigurnosnom kopijom VitalControl](../images/backup-file.png "USB-flash disk sa sigurnosnom kopijom")

{{% alert title="Napomena" %}}
Unutar direktorija `backup` na vašem USB flash disku, možete pronaći nekoliko sigurnosnih kopija datoteka s ekstenzijom `.vcu`. Uređaj VitalControl uvijek vraća podatke iz datoteke nazvane `backup.vcu`, koja je uvijek najnovija datoteka. Ako želite vratiti podatke iz starije sigurnosne kopije (koja sadrži datum sigurnosne kopije u nazivu datoteke), morate preimenovati tu stariju sigurnosnu kopiju u `backup.vcu` prije nego što izvršite vraćanje podataka!
{{% /alert %}}

## Vraćanje podataka na uređaj VitalControl {#data-restoration-to-vitalcontrol-device}

1. Otvorite stavku izbornika &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Uređaj" /> `Uređaj` na glavnom ekranu uređaja VitalControl na koji želite vratiti podatke.

2. Pozovite podizbornik `Upravljanje podacima` i zatim odaberite stavku podizbornika `Sigurnosna kopija podataka`. Sada odaberite stavku izbornika `Vraćanje sigurnosne kopije` i potvrdite s `OK`. Sada će vam biti zatraženo da umetnete USB flash disk:

   ![VitalControl: putanja izbornika vraćanje podataka](../images/restore.png "Vraćanje iz sigurnosne kopije")

3. Umetnite USB flash disk (C priključak) u konektor na dnu uređaja.

   ![VitalControl: umetnite USB flash disk](/images/firmware/update/plug-in-dual-usb-stick.svg "Umetnite USB flash disk")

4. Kada uređaj detektuje umetanje USB sticka, pojavljuje se prozor za potvrdu. Potvrdite ovaj popup s `Da` kako biste započeli vraćanje podataka. Decompressing i vraćanje sigurnosne kopije može potrajati minutu ili duže. Kada je vraćanje podataka završeno, prikazuje se poruka o uspjehu:

![VitalControl: success message data restore](../images/restore-done.png "Success message data restore")

5. Podaci sigurnosne kopije su uspješno vraćeni na uređaj VitalControl.
