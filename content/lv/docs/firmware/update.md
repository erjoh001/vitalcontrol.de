---
title: "Jūsu ierīces programmaparatūras atjaunināšana"
linkTitle: Atjaunināt
weight: 4
description: >
  Veicot programmaparatūras atjaunināšanu, jūsu VitalControl ierīces programmaparatūru var atjaunināt uz jaunākajām pieejamajām versijām.
---
Vispirms pārliecinieties, ka jūsu ierīcei ir pieejama [jaunāka programmaparatūras versija](../versions/) un, ja nepieciešams, atjauniniet ierīces programmaparatūru saskaņā ar šiem norādījumiem.

## Nepieciešamais piederums {#required-accessory}

Lai instalētu atjauninājumu jūsu ierīcē, jums ir nepieciešams divējāds USB zibatmiņas disks (2-in-1 USB stick) Type-C/USB 3.0 ar USB C savienotāju un USB A savienotāju. Šāds divējāds USB zibatmiņas disks tiek piegādāts kopā ar jūsu ierīci. Jūs varat arī iegādāties šādu USB zibatmiņas disku no dažādiem piegādātājiem.

![Divējāds USB zibatmiņas disks (USB A / USB C)](/images/firmware/update/usb-dual-stick.svg "Divējāds USB zibatmiņas disks")

## Sagatavošanās: lejupielādējiet jaunāko programmaparatūru {#preparation-download-latest-firmware}

1. Ievietojiet savu USB zibatmiņas disku datora USB savienotājā. Pēc tam izveidojiet jaunu direktoriju ar nosaukumu 'update' jūsu zibatmiņas diska saknes direktorijā.

    ![Windows Explorer: USB zibatmiņas disks ar direktoriju 'update'](../images/create-folder-update.png "USB zibatmiņas disks: direktorijs 'update'")

1. Lejupielādējiet [programmaparatūras failu](/download/firmware.vcu) (faila nosaukums: `firmware.vcu`) un saglabājiet to iepriekš izveidotajā direktorijā `update` jūsu USB zibatmiņas diskā. Atjauninājuma failam ir nepieciešama aptuveni 2.5 MB liela atmiņas vieta zibatmiņas diskā.

    ![Windows Explorer: zibatmiņas disks ar programmaparatūras failu 'firmware.vcu'](../images/save-firmware-file.png "Zibatmiņas disks ar programmaparatūras failu")

1. Izveidojiet [datu rezerves kopiju][] jūsu ierīcē.

    {{% alert title="Info" %}}
Datu rezerves kopija ir ieteicams piesardzības pasākums. Visi esošie dzīvnieku un ierīces dati tiks saglabāti, atjauninot VitalControl ierīces programmaparatūru.
    {{% /alert %}}

[datu rezerves kopiju]: {{< relref "../backup/backup/" >}}

## Veiciet programmaparatūras atjaunināšanu {#perform-firmware-update}

1. Atveriet izvēlnes vienumu `{{<T "Device" >}}` jūsu VitalControl ierīces galvenajā ekrānā.


1. Atveriet apakšizvēlni `{{<T "Service" >}}`, izvēlieties izvēlnes vienumu `{{<T "FirmwareUpdate" >}}` un apstipriniet ar `{{<T "Ok" >}}`. Tagad jums tiek lūgts ievietot jau sagatavoto USB zibatmiņu:

    ![VitalControl: menu path firmware update](../images/firmware-update.png "Firmware update")

1. Ievietojiet USB zibatmiņu (C spraudni) ierīces apakšējā savienotājā un apstipriniet ar `{{<T "Ok" >}}`.

    ![VitalControl: Insert USB flash drive](/images/firmware/update/plug-in-dual-usb-stick.svg "Insert USB flash drive")

    Ierīce automātiski veic atjauninājumu. Atjauninājuma laikā displejs informē par atjauninājuma gaitu. Pēc atjauninājuma pabeigšanas ierīce automātiski restartējas un pēc restartēšanas parāda veiksmīgu ziņojumu:

   ![VitalControl: Success message firmware update](../images/update-success.png "Success firmware update")

   Jaunā programmaparatūra tagad ir instalēta jūsu ierīcē.
