---
title: "Datu rezerves kopijas izveide"
linkTitle: "Rezerves kopija"
date: 2023-07-20
weight: 20
description: >
  Izmantojot datu rezerves kopiju, tiek izveidots rezerves fails, kas satur visus datus, kas saglabāti VitalControl ierīcē.
categories: [Datu rezerves kopija]
tags: [rezerves fails, USB zibatmiņa]
translationKey: backup
---
{{% usb-drive/lv "Lai veiktu ierīces datu rezerves kopiju," %}}


## Veikt datu rezerves kopiju {#perform-data-backup}

1. Atveriet izvēlnes vienumu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="{{< T "Device" >}}" /> `{{< T "Device" >}}` jūsu VitalControl ierīces galvenajā ekrānā.

2. Izsauciet apakšizvēlni `{{< T "DataManagement" >}}` un pēc tam izvēlieties apakšizvēlnes vienumu `{{< T "DataBackup" >}}`. Tagad izvēlieties izvēlnes vienumu `{{< T "CreateBackup" >}}` un apstipriniet ar `OK`. Jums tiks lūgts ievietot USB zibatmiņu:

   ![VitalControl: izvēlnes ceļš datu rezerves kopijai](../images/backup.png "Izsaukt datu rezerves kopiju")

3. Ievietojiet USB zibatmiņu (C spraudnis) ierīces apakšējā savienotājā.

   ![VitalControl: ievietot USB zibatmiņu](/images/firmware/update/plug-in-dual-usb-stick.svg "Ievietot USB zibatmiņu")

4. Kad ierīce konstatē USB zibatmiņas ievietošanu, datu rezerves kopija tiek automātiski sākta. Datu savākšana, saspiešana un rakstīšana var aizņemt minūti vai ilgāk. Kad rezerves kopija ir pabeigta, tiek parādīts veiksmīgas darbības ziņojums:

   <figure class="figure">
        <img src="/images/firmware/update/plug-in-dual-usb-stick.svg" class="border border-2 figure-img img-fluid rounded p-3" style="max-width: 500px; width: 100%;" align="bottom" alt="VitalControl: Ievietojiet USB zibatmiņu" title="Ievietojiet USB zibatmiņu" />
        <a name="AnschlussBarcodescanner" ><figcaption class="figure-caption fs-6">2. attēls. Ievietojiet USB zibatmiņu programmā VitalControl</figcaption></a>
   </figure>

5. Datu rezerves kopija ir izveidota. Jūs atradīsiet izveidoto failu `backup.vcu` direktorijā `backup` uz jūsu USB zibatmiņas. Rezerves fails aizņem aptuveni 1 MB atmiņas vietas zibatmiņā.

   ![USB zibatmiņa ar rezerves failu VitalControl](../images/backup-file.png "USB zibatmiņa ar rezerves failu")

   {{% alert title="Padoms" %}}
  Ja fails `backup.vcu` jau pastāv jūsu USB zibatmiņas `backup` direktorijā, šis fails tiks pārdēvēts. Jaunais faila nosaukums sastāv no sākuma virknes `backup` un datuma un laika, kad rezerves fails tika izveidots (piemēram, `backup_2023-07-17_12-50-37.vcb`). Jaunizveidotais rezerves fails vienmēr tiek nosaukts `backup.vcu`.
    {{% /alert %}}

6. Izveidoto rezerves kopijas failu var izmantot, lai [atjaunotu](../restore) saglabātos datus jebkurā VitalControl ierīcē, ja nepieciešams.
