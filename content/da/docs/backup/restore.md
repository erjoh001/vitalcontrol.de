---
title: "Gendannelse af en databackup"
linkTitle: "Gendan"
date: 2023-07-20
weight: 20
description: >
 Via en datagendannelse kan hele dataen fra en VitalControl-enhed gendannes på en anden enhed ved hjælp af en backupfil.
translationKey: restore
---
{{% usb-drive/en "For at gendanne en databackup til din VitalControl-enhed," %}}

På denne USB-flashdrev skal der eksistere en mappe `backup`, som skal indeholde en gyldig **databackupfil `backup.vcu`**.

![USB-flashdrev med backupfil VitalControl](../images/backup-file.png "USB-flashdrev med backupfil")

{{% alert title="Note" %}}
Inde i mappen `backup` på din USB-flashdrev kan du finde flere backupfiler med udvidelsen `.vcu`. VitalControl-enheden gendanner altid backupdata fra filen navngivet `backup.vcu`, som altid er den nyeste fil. Hvis du vil gendanne data fra en ældre backupfil (som indeholder backupdatoen i filnavnet), skal du omdøbe denne ældre backupfil til `backup.vcu` før du udfører datagendannelsen!
{{% /alert %}}

## Datagendannelse til VitalControl-enhed {#data-restoration-to-vitalcontrol-device}

1. Åbn menupunktet &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `Enhed` på hovedskærmen af VitalControl-enheden, som du vil gendanne data til.

2. Vælg undermenuen `Datastyring` og vælg derefter undermenupunktet `Databackup`. Vælg nu menupunktet `Gendan backup` og bekræft med `OK`. Du bliver nu bedt om at indsætte en USB-flashdrev:

   ![VitalControl: menustien datagendannelse](../images/restore.png "Gendannelse fra backupfil")

3. Indsæt USB-flashdrevet (C-stik) i stikket i bunden af enheden.

   ![VitalControl: indsæt USB-flashdrev](/images/firmware/update/plug-in-dual-usb-stick.svg "Indsæt USB-flashdrev")

4. Når enheden har registreret indsættelsen af USB-stikket, vises et bekræftelsesvindue. Bekræft denne popup med `Ja` for at starte datagendannelsen. Udpakning og gendannelse af backupen kan tage et minut eller længere. Når datagendannelsen er fuldført, vises en succesmeddelelse:

![VitalControl: succesbesked data gendannelse](../images/restore-done.png "Succesbesked data gendannelse")

5. Backupdata blev succesfuldt gendannet til VitalControl-enheden.
