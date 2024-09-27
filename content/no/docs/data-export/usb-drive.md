---
title: Dataeksport til USB-flashdrive
linkTitle: Til USB-flashdrive
date: 2023-07-20
weight: 10
description: >
  Eksporter CVS-datafiler som inneholder dyredata og måleverdier lagret på VitalControl-enheten til en USB-flashdrive.
categories: [Dataeksport]
tags: [CSV-filer, USB-flashdrive]
translationKey: data-export/usb-drive
---
{{% usb-drive/en "For å utføre en eksport av enhetsdataene dine," %}}

## Utfør dataeksport {#perform-data-export}

1. Åpne menyelementet &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `{{<T "Device" >}}` på hovedskjermen til din VitalControl-enhet.

2. Åpne undermenyen `{{<T "DataManagement" >}}`, velg menyelementet `{{<T "AnimalData" >}}` og bekreft med `{{<T "Ok" >}}`.

3. En annen undermeny åpnes. Velg menyelementet `{{<T "ExportAnimalData" >}}` og bekreft med `{{<T "Ok" >}}`.

4. Du blir nå bedt om å sette inn en USB-flashdrive:

   ![VitalControl: Menyvei dataeksport](../images/data-export.png "Utfør dataeksport")

5. Sett inn USB-flashdriven (C-plugg) i kontakten nederst på enheten.

   ![VitalControl: sett inn USB-flashdrive](/images/firmware/update/plug-in-dual-usb-stick.svg "Sett inn USB-flashdrive")

6. Når enheten har oppdaget innsettingen av USB-pinnen, starter dataeksporten automatisk. Skriving av sikkerhetskopidataene kan ta noen sekunder. Når dataeksporten er ferdig, vises en suksessmelding:

   ![VitalControl: suksessmelding dataeksport](../images/success-data-export.png "Suksess dataeksport")

7. Dataeksporten er nå fullført. Du finner de fire opprettede [eksportfilene](../export-files/) inne i katalogen `export-csv` på din USB-flashdrive.

   ![USB-flashdrive med eksportfiler VitalControl](../images/export-files.png "Eksportfiler på USB-flashdrive")

   {{% alert title="Notes" %}}
  - For å forhindre utilsiktet overskriving av eksportfiler, inkluderer filnavnet til hver eksportfil alltid dato og klokkeslett da filen ble opprettet. Sørg for å bruke den nyeste versjonen av eksportfilene hvis du har eksportert dyredata flere ganger.
  - Filstørrelsen på eksportfilene avhenger av antall dyr på VitalControl og antall utførte målinger. Generelt opptar eksportfilene bare noen få kB lagringsplass på USB-pinnen.
   {{% /alert %}}

Det ser ut som du ikke har limt inn noe innhold. Vennligst lim inn Markdown-innholdet du vil ha oversatt, så skal jeg hjelpe deg med oversettelsen.
