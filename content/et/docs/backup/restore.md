---
title: "Andmete varunduse taastamine"
linkTitle: "Taasta"
date: 2023-07-20
weight: 20
description: >
 Andmete taastamise teel saab VitalControl seadme kogu andmestiku taastada teisele seadmele, kasutades varundusfaili.
translationKey: restore
---
{{% usb-drive/et "Andmete varunduse taastamiseks teie VitalControl seadmesse," %}}

Sellel USB mälupulgal peab olema kaust `backup`, mis peab sisaldama kehtivat **andmete varundusfaili `backup.vcu`**.

![USB-mälupulk varundusfailiga VitalControl](../images/backup-file.png "USB-mälupulk varundusfailiga")

{{% alert title="Märkus" %}}
Teie USB mälupulga `backup` kaustas võib leiduda mitu varundusfaili laiendiga `.vcu`. VitalControl seade taastab alati andmed failist nimega `backup.vcu`, mis on alati uusim fail. Kui soovite taastada andmeid vanemast varundusfailist (mille failinimes on varunduse kuupäev), peate enne andmete taastamist nimetama selle vanema varundusfaili ümber `backup.vcu`-ks!
{{% /alert %}}

## Andmete taastamine VitalControl seadmesse {#data-restoration-to-vitalcontrol-device}

1. Avage peamenüüs &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Seade" /> `Seade` VitalControl seadmes, kuhu soovite andmed taastada.

2. Valige alammenüü `Andmehaldus` ja seejärel alammenüüpunkt `Andmete varundamine`. Nüüd valige menüüpunkt `Taasta varundus` ja kinnitage `OK`-ga. Teilt küsitakse nüüd USB mälupulga sisestamist:

   ![VitalControl: menüütee andmete taastamiseks](../images/restore.png "Taastamine varundusfailist")

3. Sisestage USB mälupulk (C pistik) seadme allosas olevasse pistikupessa.

   ![VitalControl: sisesta USB mälupulk](/images/firmware/update/plug-in-dual-usb-stick.svg "Ühenda USB mälupulk")

4. Kui seade on tuvastanud USB pulga sisestamise, ilmub kinnitusaken. Kinnitage see popup `Jah`-ga, et alustada andmete taastamist. Varunduse lahtipakkimine ja taastamine võib võtta minuti või kauem. Kui andmete taastamine on lõpetatud, kuvatakse edukateade:

   ![VitalControl: andmete taastamise õnnestumise teade](../images/restore-done.png "Andmete taastamise õnnestumise teade")

5. Varundatud andmed taastati edukalt VitalControl seadmesse.
