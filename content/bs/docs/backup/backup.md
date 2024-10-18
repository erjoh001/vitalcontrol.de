---
title: "Kreiranje sigurnosne kopije podataka"
linkTitle: "Sigurnosna kopija"
date: 2023-07-20
weight: 20
description: >
  Pomoću sigurnosne kopije podataka kreira se datoteka sigurnosne kopije koja sadrži sve podatke pohranjene na uređaju VitalControl.
categories: [Sigurnosna kopija podataka]
tags: [datoteka sigurnosne kopije, USB flash drive]
translationKey: backup
---
{{% usb-drive/en "Da biste izvršili sigurnosnu kopiju podataka za vaš uređaj," %}}

## Izvršite sigurnosnu kopiju podataka {#perform-data-backup}

1. Otvorite stavku izbornika &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="{{< T "Device" >}}" /> `{{< T "Device" >}}` na glavnom ekranu vašeg uređaja VitalControl.

2. Pozovite podizbornik `{{< T "DataManagement" >}}` i zatim odaberite stavku podizbornika `{{< T "DataBackup" >}}`. Sada odaberite stavku izbornika `{{< T "CreateBackup" >}}` i potvrdite s `OK`. Sada će vam biti zatraženo da umetnete USB flash drive:

   ![VitalControl: putanja izbornika sigurnosna kopija podataka](../images/backup.png "Pozovite sigurnosnu kopiju podataka")

3. Umetnite USB flash drive (C priključak) u konektor na dnu uređaja.

   ![VitalControl: umetnite USB flash drive](/images/firmware/update/plug-in-dual-usb-stick.svg "Umetnite USB flash drive")

4. Kada uređaj detektuje umetanje USB sticka, sigurnosna kopija podataka automatski započinje. Prikupljanje, kompresija i pisanje podataka sigurnosne kopije može potrajati minutu ili duže. Kada je sigurnosna kopija završena, prikazuje se poruka o uspjehu:

   ![VitalControl: poruka o uspjehu sigurnosne kopije](../images/backup-done.png "Uspješna sigurnosna kopija podataka")

5. Sigurnosna kopija podataka je sada kreirana. Pronaći ćete kreiranu datoteku `backup.vcu` u direktoriju `backup` na vašem USB flash driveu. Datoteka sigurnosne kopije zahtijeva približno 1 MB prostora za pohranu na flash driveu.

   ![USB flash drive sa datotekom sigurnosne kopije VitalControl](../images/backup-file.png "USB flash drive sa datotekom sigurnosne kopije")

   {{% alert title="Savjet" %}}
  Ako datoteka `backup.vcu` već postoji u direktoriju `backup` na vašem USB flash driveu, ova datoteka će biti preimenovana. Novi naziv datoteke sastoji se od vodećeg niza `backup` i datuma i vremena kada je datoteka sigurnosne kopije kreirana (npr. `backup_2023-07-17_12-50-37.vcb`). Novo napisana datoteka sigurnosne kopije uvijek se naziva `backup.vcu`.
    {{% /alert %}}


6. Kreirana rezervna datoteka može se koristiti za [obnavljanje](../restore) pohranjenih podataka na bilo koji VitalControl uređaj ako je potrebno.
