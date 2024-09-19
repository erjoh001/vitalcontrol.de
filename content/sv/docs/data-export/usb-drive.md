---
title: Dataexport till USB-minne
linkTitle: Till USB-minne
date: 2023-07-20
weight: 10
description: >
  Exportera CVS-datafiler som innehåller djurdata och mätvärden lagrade på VitalControl-enheten till ett USB-minne.
Kategorier: [Dataexport]
Taggar: [CSV-filer, USB-minne]
translationKey: data-export/usb-drive
---
{{% usb-drive/en "För att utföra en export av dina enhetsdata," %}}

## Utför dataexport {#perform-data-export}

1. Öppna menyalternativet &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `{{<T "Device" >}}` på huvudskärmen på din VitalControl-enhet.

2. Gå till undermenyn `{{<T "DataManagement" >}}`, välj menyalternativet `{{<T "AnimalData" >}}` och bekräfta med `{{<T "Ok" >}}`.

3. En annan undermeny öppnas. Välj menyalternativet `{{<T "ExportAnimalData" >}}` och bekräfta med `{{<T "Ok" >}}`.

4. Du uppmanas nu att sätta in ett USB-minne:

   ![VitalControl: Menyväg dataexport](../images/data-export.png "Starta dataexport")

5. Sätt in USB-minnet (C-kontakt) i kontakten längst ner på enheten.

   ![VitalControl: sätt in USB-minne](/images/firmware/update/plug-in-dual-usb-stick.svg "Sätt in USB-minne")

6. När enheten har upptäckt att USB-minnet har satts in, startas dataexporten automatiskt. Skrivningen av säkerhetskopieringsdata kan ta några sekunder. När dataexporten är klar visas ett meddelande om framgång:

   ![VitalControl: framgångsmeddelande dataexport](../images/success-data-export.png "Framgång dataexport")

7. Dataexporten är nu klar. Du hittar de fyra skapade [exportfilerna](../export-files/) i katalogen `export-csv` på ditt USB-minne.

   ![USB-minne med exportfiler VitalControl](../images/export-files.png "Exportfiler på USB-minne")

   {{% alert title="Notes" %}}
  - För att förhindra oavsiktlig överskrivning av exportfiler, inkluderar filnamnet för varje exportfil alltid datum och tid när filen skapades. Se till att använda den senaste versionen av exportfilerna om du har exporterat djurdata flera gånger.
  - Filstorleken på exportfilerna beror på antalet djur på VitalControl och på antalet utförda mätningar. Generellt sett tar exportfilerna bara upp några kB lagringsutrymme på USB-minnet.
   {{% /alert %}}

Det verkar som att du inte har klistrat in något innehåll. Vänligen klistra in Markdown-innehållet som du vill översätta till svenska.
