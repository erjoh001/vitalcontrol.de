---
title: "Återställa en datakopia"
linkTitle: "Återställ"
date: 2023-07-20
weight: 20
description: >
 Via en dataåterställning kan hela datan från en VitalControl-enhet återställas på en annan enhet med hjälp av en säkerhetskopieringsfil.
translationKey: restore
---
{{% usb-drive/en "För att återställa en datakopia till din VitalControl-enhet," %}}

På detta USB-minne måste en katalog `backup` finnas, som måste innehålla en giltig **datakopieringsfil `backup.vcu`**.

![USB-minne med säkerhetskopieringsfil VitalControl](../images/backup-file.png "USB-minne med säkerhetskopieringsfil")

{{% alert title="Notera" %}}
Inuti katalogen `backup` på ditt USB-minne kan du hitta flera säkerhetskopieringsfiler med ändelsen `.vcu`. VitalControl-enheten återställer alltid säkerhetskopieringsdata från filen som heter `backup.vcu`, som alltid är den nyaste filen. Om du vill återställa data från en äldre säkerhetskopieringsfil (som innehåller säkerhetskopieringsdatumet i filnamnet), måste du byta namn på denna äldre säkerhetskopieringsfil till `backup.vcu` innan du utför dataåterställningen!
{{% /alert %}}

## Dataåterställning till VitalControl-enhet {#data-restoration-to-vitalcontrol-device}

1. Öppna menyalternativet &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Enhet" /> `Enhet` på huvudskärmen på den VitalControl-enhet som du vill återställa datan till.

2. Gå till undermenyn `Datamanagement` och välj sedan undermenyalternativet `Datakopia`. Välj nu menyalternativet `Återställ kopia` och bekräfta med `OK`. Du ombeds nu att sätta in ett USB-minne:

   ![VitalControl: menystig dataåterställning](../images/restore.png "Återställa från säkerhetskopieringsfil")

3. Sätt in USB-minnet (C-kontakt) i kontakten längst ner på enheten.

   ![VitalControl: sätt in USB-minne](/images/firmware/update/plug-in-dual-usb-stick.svg "Sätt in USB-minne")

4. När enheten har upptäckt att USB-minnet har satts in, visas ett bekräftelsefönster. Bekräfta denna popup med `Ja` för att starta dataåterställningen. Att dekomprimera och återställa säkerhetskopian kan ta en minut eller längre. När dataåterställningen är klar visas ett meddelande om framgång:


   ![VitalControl: success message data restore](../images/restore-done.png "Success message data restore")

5. Säkerhetskopierade data har framgångsrikt återställts till VitalControl-enheten.
