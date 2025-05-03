---
title: "Datu rezerves kopijas atjaunošana"
linkTitle: "Atjaunot"
date: 2023-07-20
weight: 20
description: >
 Izmantojot datu atjaunošanu, visa VitalControl ierīces datu kopija var tikt atjaunota citā ierīcē, izmantojot rezerves kopijas failu.
translationKey: restore
---
{{% usb-drive/lv "Lai atjaunotu datu rezerves kopiju uz jūsu VitalControl ierīci," %}}

Šajā USB zibatmiņā jābūt direktorijai `backup`, kurā jābūt derīgam **datu rezerves kopijas failam `backup.vcu`**.

![USB zibatmiņa ar rezerves kopijas failu VitalControl](../images/backup-file.png "USB zibatmiņa ar rezerves kopijas failu")

{{% alert title="Piezīme" %}}
Jūsu USB zibatmiņas direktorijā `backup` var atrasties vairāki rezerves kopijas faili ar paplašinājumu `.vcu`. VitalControl ierīce vienmēr atjauno rezerves datus no faila ar nosaukumu `backup.vcu`, kas vienmēr ir jaunākais fails. Ja vēlaties atjaunot datus no vecāka rezerves kopijas faila (kurā faila nosaukumā ir norādīts rezerves kopijas datums), jums ir jāpārdēvē šis vecākais rezerves kopijas fails uz `backup.vcu` pirms datu atjaunošanas veikšanas!
{{% /alert %}}

## Datu atjaunošana uz VitalControl ierīci {#data-restoration-to-vitalcontrol-device}

1. Atveriet izvēlnes vienumu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Ierīce" /> `Ierīce` VitalControl ierīces galvenajā ekrānā, uz kuru vēlaties atjaunot datus.

2. Izsauciet apakšizvēlni `Datu pārvaldība` un pēc tam izvēlieties apakšizvēlnes vienumu `Datu rezerves kopija`. Tagad izvēlieties izvēlnes vienumu `Atjaunot rezerves kopiju` un apstipriniet ar `OK`. Jums tiks lūgts ievietot USB zibatmiņu:

   ![VitalControl: izvēlnes ceļš datu atjaunošanai](../images/restore.png "Atjaunošana no rezerves kopijas faila")

3. Ievietojiet USB zibatmiņu (C spraudni) savienotājā ierīces apakšā.

   ![VitalControl: ievietojiet USB zibatmiņu](/images/firmware/update/plug-in-dual-usb-stick.svg "Ievietojiet USB zibatmiņu")

4. Kad ierīce konstatē USB zibatmiņas ievietošanu, parādās apstiprinājuma logs. Apstipriniet šo uznirstošo logu ar `Jā`, lai sāktu datu atjaunošanu. Rezerves kopijas dekompresēšana un atjaunošana var aizņemt minūti vai ilgāk. Kad datu atjaunošana ir pabeigta, tiek parādīts veiksmīgas atjaunošanas ziņojums:


   ![VitalControl: success message data restore](../images/restore-done.png "Success message data restore")

5. Datu dublējums veiksmīgi atjaunots uz VitalControl ierīci.
