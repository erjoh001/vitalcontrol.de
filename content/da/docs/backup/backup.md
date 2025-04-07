---
title: "Oprettelse af en databackup"
linkTitle: "Backup"
date: 2023-07-20
weight: 20
description: >
  Ved hjælp af en databackup oprettes en backupfil, som indeholder alle data, der er gemt på VitalControl-enheden.
kategorier: [Databackup]
tags: [backupfil, USB-flashdrev]
translationKey: backup
---
{{% usb-drive/en "For at udføre en databackup for din enhed," %}}

## Udfør databackup {#perform-data-backup}

1. Åbn menuen &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="{{< T "Device" >}}" /> `{{< T "Device" >}}` på hovedskærmen af din VitalControl-enhed.

2. Vælg undermenuen `{{< T "DataManagement" >}}` og vælg derefter undermenuen `{{< T "DataBackup" >}}`. Vælg nu menuen `{{< T "CreateBackup" >}}` og bekræft med `OK`. Du bliver nu bedt om at indsætte et USB-flashdrev:

   ![VitalControl: menu path data backup](../images/backup.png "Invoke data backup")

3. Indsæt USB-flashdrevet (C-stik) i stikket i bunden af enheden.

   <figure class="figure">
        <img src="/images/firmware/update/plug-in-dual-usb-stick.svg" class="border border-2 figure-img img-fluid rounded p-3" style="max-width: 500px; width: 100%;" align="bottom" alt="VitalControl: Indsæt USB-nøgle" title="Indsæt USB-nøgle" />
        <a name="AnschlussBarcodescanner" ><figcaption class="figure-caption fs-6">Figur 2: Indsættelse af USB-stik i VitalControl</figcaption></a>
   </figure>

4. Når enheden har registreret indsættelsen af USB-stikket, starter databackuppen automatisk. Indsamling, komprimering og skrivning af backupdataene kan tage et minut eller længere. Når backupen er færdig, vises en succesmeddelelse:

   ![VitalControl: success message backup](../images/backup-done.png "Success data backup")

5. Databackuppen er nu oprettet. Du finder den oprettede fil `backup.vcu` i mappen `backup` på dit USB-flashdrev. Backupfilen kræver ca. 1 MB lagerplads på flashdrevet.

   ![USB flash drive with backup file VitalControl](../images/backup-file.png "USB flash drive with backup file")

   {{% alert title="Hint" %}}
  Hvis en fil `backup.vcu` allerede findes i mappen `backup` på dit USB-flashdrev, vil denne fil blive omdøbt. Det nye navn på filen består af den indledende streng `backup` og datoen og tidspunktet, hvor backupfilen blev oprettet (f.eks. `backup_2023-07-17_12-50-37.vcb`). Den nyoprettede backupfil hedder altid `backup.vcu`.
    {{% /alert %}}


6. Den oprettede sikkerhedskopifil kan bruges til at [gendanne](../restore) de lagrede data til enhver VitalControl-enhed, hvis det er nødvendigt.
