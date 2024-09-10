---
title: Dataeksport til USB-flashdrev
linkTitle: Til USB-flashdrev
date: 2023-07-20
weight: 10
description: >
  Eksporter CVS-datafiler, der indeholder dyredata og måleværdier gemt på VitalControl-enheden, til et USB-flashdrev.
kategorier: [Dataeksport]
tags: [CSV-filer, USB-flashdrev]
translationKey: data-export/usb-drive
---
{{% usb-drive/en "For at udføre en eksport af dine enhedsdata," %}}

## Udfør dataeksport {#perform-data-export}

1. Åbn menupunktet &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Enhed" /> `{{<T "Device" >}}` på hovedskærmen af din VitalControl-enhed.

2. Vælg undermenuen `{{<T "DataManagement" >}}`, vælg menupunktet `{{<T "AnimalData" >}}` og bekræft med `{{<T "Ok" >}}`.

3. En anden undermenu åbnes. Vælg menupunktet `{{<T "ExportAnimalData" >}}` og bekræft med `{{<T "Ok" >}}`.

4. Du bliver nu bedt om at indsætte et USB-flashdrev:

   ![VitalControl: Menustien dataeksport](../images/data-export.png "Udfør dataeksport")

5. Indsæt USB-flashdrevet (C-stik) i stikket i bunden af enheden.

   ![VitalControl: indsæt USB-flashdrev](/images/firmware/update/plug-in-dual-usb-stick.svg "Indsæt USB-flashdrev")

6. Når enheden har registreret indsættelsen af USB-stikket, starter dataeksporten automatisk. Skrivning af backupdata kan tage et par sekunder. Når dataeksporten er færdig, vises en succesmeddelelse:

   ![VitalControl: succesmeddelelse dataeksport](../images/success-data-export.png "Succes dataeksport")

7. Dataeksporten er nu fuldført. Du vil finde de fire oprettede [eksportfiler](../export-files/) inde i mappen `export-csv` på dit USB-flashdrev.

   ![USB-flashdrev med eksportfiler VitalControl](../images/export-files.png "Eksportfiler på USB-flashdrev")

   {{% alert title="Noter" %}}
  - For at forhindre utilsigtet overskrivning af eksportfiler inkluderer filnavnet på hver eksportfil altid dato og klokkeslæt, hvor filen blev oprettet. Sørg for at bruge den nyeste version af eksportfilerne, hvis du har eksporteret dyredata flere gange.
  - Filstørrelsen på eksportfilerne afhænger af antallet af dyr på VitalControl og antallet af udførte målinger. Generelt optager eksportfilerne kun få kB lagerplads på USB-stikket.
   {{% /alert %}}

It looks like you haven't pasted any Markdown content yet. Please provide the text you want translated, and I'll handle the translation for you.
