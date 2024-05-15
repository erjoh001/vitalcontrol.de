---
title: "Andmete varundamine"
linkTitle: "Varundamine"
date: 2023-07-20
weight: 20
description: >
  Andmete varundamise teel luuakse varundusfail, mis sisaldab kõiki VitalControl seadmes talletatud andmeid.
categories: [Andmete varundamine]
tags: [varundusfail, USB mälupulk]
translationKey: backup
---
{{% usb-drive/et "Selleks, et teostada oma seadmele andmete varundamist," %}}

## Andmete varundamine

1. Avage peamenüüs &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Seade" /> `Seade`.

2. Valige alammenüü `Andmehaldus` ja seejärel alammenüüpunkt `Andmete varundamine`. Valige nüüd menüüpunkt `Loo varukoopia` ja kinnitage valikuga `OK`. Teilt küsitakse nüüd USB mälupulga sisestamist:

   ![VitalControl: menüütee andmete varundamiseks](../images/backup.png "Käivita andmete varundamine")

3. Sisestage USB mälupulk (C pistik) seadme alumisse pistikupessa.

   ![VitalControl: sisesta USB mälupulk](/images/firmware/update/plug-in-dual-usb-stick.svg "Sisesta USB mälupulk")

4. Kui seade on USB pulga sisestamise tuvastanud, algab andmete varundamine automaatselt. Andmete kogumine, kokkupressimine ja kirjutamine võib võtta minuti või kauem. Kui varundamine on lõppenud, kuvatakse edukateade:

   ![VitalControl: edukateade varundamise kohta](../images/backup-done.png "Edukas andmete varundamine")

5. Andmete varundamine on nüüd loodud. Loitud faili `backup.vcu` leiate oma USB mälupulga kaustast `backup`. Varundusfail vajab mälupulgal umbes 1 MB vaba ruumi.

   ![USB mälupulk varundusfailiga VitalControl](../images/backup-file.png "USB mälupulk varundusfailiga")

   {{% alert title="Vihje" %}}
  Kui kaustas `backup` on juba olemas fail `backup.vcu`, nimetatakse see fail ümber. Uue faili nimi koosneb eesliitest `backup` ja varundusfaili loomise kuupäevast ning kellaajast (nt `backup_2023-07-17_12-50-37.vcb`). Uus kirjutatud varundusfail nimetatakse alati `backup.vcu`.
    {{% /alert %}}

6. Loodud varukoopiafaili saab kasutada [taastamiseks](../restore), et vajadusel taastada salvestatud andmed mis tahes VitalControl seadmesse.
