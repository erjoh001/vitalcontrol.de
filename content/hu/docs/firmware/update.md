---
title: "Az eszköz firmware frissítése"
linkTitle: Frissítés
weight: 4
description: >
  A firmware frissítés végrehajtásával a VitalControl eszköz firmware-je frissíthető a legújabb elérhető verziókra.
---
Először győződjön meg arról, hogy van-e [újabb firmware verzió](../versions/) az eszközéhez, és ha szükséges, frissítse az eszköz firmware-jét az alábbi utasítások szerint.

## Szükséges tartozék {#required-accessory}

A frissítés telepítéséhez az eszközön szüksége van egy kettős USB flash meghajtóra (2 az 1-ben USB stick) Type-C/USB 3.0-val, amely USB C és USB A csatlakozóval rendelkezik. Ilyen kettős USB flash meghajtót szállítanak az eszközzel együtt. Ilyen USB flash meghajtót különböző gyártóktól is vásárolhat.

![Kettős USB flash meghajtó (USB A / USB C)](/images/firmware/update/usb-dual-stick.svg "Kettős USB flash meghajtó")

## Előkészítés: legújabb firmware letöltése {#preparation-download-latest-firmware}

1. Helyezze be az USB flash meghajtót a számítógép USB csatlakozójába. Ezután hozzon létre egy új könyvtárat 'update' néven a flash meghajtó gyökérkönyvtárában.

    ![Windows Explorer: USB flash meghajtó 'update' könyvtárral](../images/create-folder-update.png "USB flash meghajtó: 'update' könyvtár")

1. Töltse le a [firmware fájlt](/download/firmware.vcu) (fájlnév: `firmware.vcu`) és tárolja a korábban létrehozott `update` könyvtárban az USB flash meghajtón. A frissítési fájl körülbelül 2,5 MB tárhelyet igényel a flash meghajtón.

    ![Windows Explorer: flash meghajtó 'firmware.vcu' firmware fájllal](../images/save-firmware-file.png "Flash meghajtó firmware fájllal")

1. Készítsen egy [adatmentést][] az eszközén.

    {{% alert title="Info" %}}
Az adatmentés egy ajánlott óvintézkedés. Az összes meglévő állat- és eszközadat megmarad a VitalControl eszköz firmware-jének frissítésekor.
    {{% /alert %}}

[data backup]: {{< relref "../backup/backup/" >}}

## Firmware frissítés végrehajtása {#perform-firmware-update}

1. Nyissa meg a `{{<T "Device" >}}` menüpontot a VitalControl eszköz főképernyőjén.

1. Hívja elő a `{{<T "Service" >}}` almenüt, válassza ki a `{{<T "FirmwareUpdate" >}}` menüpontot, és erősítse meg `{{<T "Ok" >}}` gombbal. Most kérni fogja, hogy helyezze be az előkészített USB flash meghajtót:

![VitalControl: menu path firmware update](../images/firmware-update.png "Firmware update")

1. Helyezze be az USB flash meghajtót (C csatlakozó) a készülék alján található csatlakozóba, és erősítse meg az `{{<T "Ok" >}}` gombbal.

    ![VitalControl: Insert USB flash drive](/images/firmware/update/plug-in-dual-usb-stick.svg "Insert USB flash drive")

    A készülék automatikusan végrehajtja a frissítést. A frissítés során a kijelző tájékoztat a frissítés előrehaladásáról. A frissítés befejezése után a készülék automatikusan újraindul, és az újraindítás után sikeres üzenetet jelenít meg:

   ![VitalControl: Success message firmware update](../images/update-success.png "Success firmware update")

   Az új firmware most már telepítve van a készülékén.
