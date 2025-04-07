---
title: "Opprette en sikkerhetskopi av data"
linkTitle: "Sikkerhetskopi"
date: 2023-07-20
weight: 20
description: >
  Ved hjelp av en sikkerhetskopi av data opprettes en sikkerhetskopifil som inneholder alle dataene lagret på VitalControl-enheten.
categories: [Data backup]
tags: [backup file, USB flash drive]
translationKey: backup
---
{{% usb-drive/en "For å utføre en sikkerhetskopi av data for enheten din," %}}

## Utfør sikkerhetskopi av data {#perform-data-backup}

1. Åpne menyvalget &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="{{< T "Device" >}}" /> `{{< T "Device" >}}` på hovedskjermen til din VitalControl-enhet.

2. Gå til undermenyen `{{< T "DataManagement" >}}` og velg deretter undermenyvalget `{{< T "DataBackup" >}}`. Velg nå menyvalget `{{< T "CreateBackup" >}}` og bekreft med `OK`. Du blir nå bedt om å sette inn en USB-minnepinne:

   ![VitalControl: menyvei for sikkerhetskopi av data](../images/backup.png "Utfør sikkerhetskopi av data")

3. Sett inn USB-minnepinnen (C-plugg) i kontakten nederst på enheten.

   <figure class="figure">
        <img src="/images/firmware/update/plug-in-dual-usb-stick.svg" class="border border-2 figure-img img-fluid rounded p-3" style="max-width: 500px; width: 100%;" align="bottom" alt="VitalControl: Sett inn USB-pinne" title="Sett inn USB-pinne" />
        <a name="AnschlussBarcodescanner" ><figcaption class="figure-caption fs-6">Figur 2: Sett inn USB-pinne i VitalControl</figcaption></a>
   </figure>

4. Når enheten har oppdaget innsetting av USB-pinnen, starter sikkerhetskopieringen automatisk. Innsamling, komprimering og skriving av sikkerhetskopidataene kan ta et minutt eller lengre. Når sikkerhetskopien er ferdig, vises en suksessmelding:

   ![VitalControl: suksessmelding sikkerhetskopi](../images/backup-done.png "Suksess sikkerhetskopi av data")

5. Sikkerhetskopien er nå opprettet. Du finner den opprettede filen `backup.vcu` i katalogen `backup` på USB-minnepinnen din. Sikkerhetskopifilen krever ca. 1 MB lagringsplass på minnepinnen.

   ![USB-minnepinne med sikkerhetskopifil VitalControl](../images/backup-file.png "USB-minnepinne med sikkerhetskopifil")

   {{% alert title="Hint" %}}
  Hvis en fil `backup.vcu` allerede finnes i `backup`-katalogen på USB-minnepinnen din, vil denne filen bli omdøpt. Det nye navnet på filen består av den ledende strengen `backup` og datoen og klokkeslettet da sikkerhetskopifilen ble opprettet (f.eks. `backup_2023-07-17_12-50-37.vcb`). Den nylig skrevne sikkerhetskopifilen heter alltid `backup.vcu`.
    {{% /alert %}}


6. Den opprettede sikkerhetskopifilen kan brukes til å [gjenopprette](../restore) de lagrede dataene til en hvilken som helst VitalControl-enhet om nødvendig.
