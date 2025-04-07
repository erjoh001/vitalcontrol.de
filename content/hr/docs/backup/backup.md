---
title: "Stvaranje sigurnosne kopije podataka"
linkTitle: "Sigurnosna kopija"
date: 2023-07-20
weight: 20
description: >
  Pomoću sigurnosne kopije podataka stvara se datoteka sigurnosne kopije koja sadrži sve podatke pohranjene na uređaju VitalControl.
categories: [Sigurnosna kopija podataka]
tags: [datoteka sigurnosne kopije, USB flash pogon]
translationKey: backup
---
{{% usb-drive/en "Kako biste izvršili sigurnosnu kopiju podataka za svoj uređaj," %}}

## Izvršite sigurnosnu kopiju podataka {#perform-data-backup}

1. Otvorite stavku izbornika &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="{{< T "Device" >}}" /> `{{< T "Device" >}}` na glavnom zaslonu vašeg VitalControl uređaja.

2. Pozovite podizbornik `{{< T "DataManagement" >}}` i zatim odaberite stavku podizbornika `{{< T "DataBackup" >}}`. Sada odaberite stavku izbornika `{{< T "CreateBackup" >}}` i potvrdite s `OK`. Sada će vam biti zatraženo da umetnete USB flash pogon:

   ![VitalControl: putanja izbornika sigurnosna kopija podataka](../images/backup.png "Pozovite sigurnosnu kopiju podataka")

3. Umetnite USB flash pogon (C priključak) u priključak na dnu uređaja.

   <figure class="figure">
        <img src="/images/firmware/update/plug-in-dual-usb-stick.svg" class="border border-2 figure-img img-fluid rounded p-3" style="max-width: 500px; width: 100%;" align="bottom" alt="VitalControl: Umetnite USB stick" title="Umetnite USB stick" />
        <a name="AnschlussBarcodescanner" ><figcaption class="figure-caption fs-6">Slika 2: Umetnite USB stick u VitalControl</figcaption></a>
   </figure>

4. Kada uređaj detektira umetanje USB sticka, sigurnosna kopija podataka automatski će započeti. Prikupljanje, komprimiranje i pisanje podataka sigurnosne kopije može potrajati minutu ili duže. Kada je sigurnosna kopija gotova, prikazat će se poruka o uspjehu:

   ![VitalControl: poruka o uspjehu sigurnosne kopije](../images/backup-done.png "Uspješna sigurnosna kopija podataka")

5. Sigurnosna kopija podataka je sada stvorena. Pronaći ćete stvorenu datoteku `backup.vcu` u direktoriju `backup` na vašem USB flash pogonu. Datoteka sigurnosne kopije zahtijeva približno 1 MB prostora za pohranu na flash pogonu.

   ![USB flash pogon s datotekom sigurnosne kopije VitalControl](../images/backup-file.png "USB flash pogon s datotekom sigurnosne kopije")

   {{% alert title="Savjet" %}}
  Ako datoteka `backup.vcu` već postoji u direktoriju `backup` na vašem USB flash pogonu, ta će datoteka biti preimenovana. Novi naziv datoteke sastoji se od vodećeg niza `backup` i datuma i vremena kada je datoteka sigurnosne kopije stvorena (npr. `backup_2023-07-17_12-50-37.vcb`). Novo napisana datoteka sigurnosne kopije uvijek se naziva `backup.vcu`.
    {{% /alert %}}


6. Stvorena sigurnosna kopija može se koristiti za [vraćanje](../restore) pohranjenih podataka na bilo koji VitalControl uređaj ako je potrebno.
