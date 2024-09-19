---
title: "Skapa en databas säkerhetskopia"
linkTitle: "Säkerhetskopia"
date: 2023-07-20
weight: 20
description: >
  Genom en databas säkerhetskopia skapas en säkerhetskopieringsfil som innehåller all data som lagras på VitalControl-enheten.
Kategorier: [Databas säkerhetskopia]
Taggar: [säkerhetskopieringsfil, USB-minne]
translationKey: backup
---
{{% usb-drive/en "För att utföra en databas säkerhetskopia för din enhet," %}}

## Utför databas säkerhetskopia {#perform-data-backup}

1. Öppna menyalternativet &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="{{< T "Device" >}}" /> `{{< T "Device" >}}` på huvudskärmen på din VitalControl-enhet.

2. Gå till undermenyn `{{< T "DataManagement" >}}` och välj sedan undermenyalternativet `{{< T "DataBackup" >}}`. Välj nu menyalternativet `{{< T "CreateBackup" >}}` och bekräfta med `OK`. Du ombeds nu att sätta in ett USB-minne:

   ![VitalControl: menyväg databas säkerhetskopia](../images/backup.png "Anropa databas säkerhetskopia")

3. Sätt in USB-minnet (C-kontakt) i kontakten längst ner på enheten.

   ![VitalControl: sätt in USB-minne](/images/firmware/update/plug-in-dual-usb-stick.svg "Sätt in USB-minne")

4. När enheten har upptäckt att USB-minnet har satts in, startas databas säkerhetskopieringen automatiskt. Insamling, komprimering och skrivning av säkerhetskopieringsdata kan ta en minut eller längre. När säkerhetskopieringen är klar visas ett meddelande om framgång:

   ![VitalControl: framgångsmeddelande säkerhetskopia](../images/backup-done.png "Framgång databas säkerhetskopia")

5. Databas säkerhetskopieringen är nu skapad. Du hittar den skapade filen `backup.vcu` i katalogen `backup` på ditt USB-minne. Säkerhetskopieringsfilen kräver cirka 1 MB lagringsutrymme på USB-minnet.

   ![USB-minne med säkerhetskopieringsfil VitalControl](../images/backup-file.png "USB-minne med säkerhetskopieringsfil")

   {{% alert title="Tips" %}}
  Om en fil `backup.vcu` redan finns i katalogen `backup` på ditt USB-minne, kommer denna fil att byta namn. Det nya namnet på filen består av den inledande strängen `backup` och datum och tid då säkerhetskopieringsfilen skapades (t.ex. `backup_2023-07-17_12-50-37.vcb`). Den nyligen skrivna säkerhetskopieringsfilen heter alltid `backup.vcu`.
    {{% /alert %}}


6. Den skapade säkerhetskopian kan användas för att [återställa](../restore) de lagrade uppgifterna till vilken VitalControl-enhet som helst vid behov.
