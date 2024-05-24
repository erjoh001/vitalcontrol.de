---
title: "Seadme püsivara uuendamine"
linkTitle: Uuenda
weight: 4
description: >
  Püsivara uuendamise teel saab teie VitalControl seadme püsivara uuendada viimaste saadaolevate versioonidega.
---
Esmalt veenduge, et teie seadme jaoks on saadaval [uuem püsivara versioon](../versions/) ja vajadusel uuendage oma seadme püsivara järgmiste juhiste kohaselt.

## Nõutav tarvik {#required-accessory}

Seadmele uuenduse paigaldamiseks on vajalik kahepoolne USB mälupulk (2-in-1 USB mälupulk) tüüp-C/USB 3.0 USB C ja USB A pistikutega. Selline kahepoolne USB mälupulk on teie seadmega kaasas. Võite sellise USB mälupulga osta ka erinevatelt müüjatelt.

![Kahepoolne USB mälupulk (USB A / USB C)](/images/firmware/update/usb-dual-stick.svg "Kahepoolne USB mälupulk")

## Ettevalmistus: laadi alla viimane püsivara {#preparation-download-latest-firmware}

1. Sisesta oma USB mälupulk arvuti USB pistikusse. Seejärel loo oma mälupulga juurkataloogi uus kaust nimega 'update'.

    ![Windows Explorer: USB mälupulk kaustaga 'update'](../images/create-folder-update.png "USB mälupulk: kaust 'update'")

1. Laadi alla [püsivara fail](/download/firmware.vcu) (faili nimi: `firmware.vcu`) ja salvesta see oma USB mälupulga äsja loodud kausta `update`. Uuendusfail nõuab mälupulgal umbes 2,5 MB vaba ruumi.

    ![Windows Explorer: mälupulk püsivara failiga 'firmware.vcu'](../images/save-firmware-file.png "Mälupulk püsivara failiga")

1. Loo oma seadmes [andmete varukoopia][].

    {{% alert title="Info" %}}
Andmete varukoopia on soovitatav ettevaatusabinõu. Kõik olemasolevad looma- ja seadmeandmed säilivad, kui uuendate VitalControl seadme püsivara.
    {{% /alert %}}

[andmete varukoopia]: {{< relref "../backup/backup/" >}}

## Viige läbi püsivara uuendus {#perform-firmware-update}

1. Avage oma VitalControl seadme põhiekraanil menüüpunkt `Seade`.

1. Kutsuge esile alammenüü `Teenindus`, valige menüüpunkt `Püsivara uuendus` ja kinnitage valikuga `OK`. Nüüd palutakse teil sisestada juba ettevalmistatud USB mälupulk:

![VitalControl: menüü tee tarkvarauuenduseni](../images/firmware-update.png "Tarkvarauuendus")

1. Sisesta USB mälupulk (C pistik) seadme alumises otsas olevasse ühenduspesasse ja kinnita valikuga `OK`.

    ![VitalControl: Sisesta USB mälupulk](/images/firmware/update/plug-in-dual-usb-stick.svg "Sisesta USB mälupulk")

    Seade viib uuenduse automaatselt läbi. Uuenduse ajal kuvab ekraan teavet uuenduse kulgemise kohta. Pärast uuenduse lõppu taaskäivitub seade automaatselt ja kuvab taaskäivituse järel edukate uuenduste teate:

   ![VitalControl: Eduka tarkvarauuenduse teade](../images/update-success.png "Edukas tarkvarauuendus")

   Uus tarkvara on nüüd teie seadmesse paigaldatud.
