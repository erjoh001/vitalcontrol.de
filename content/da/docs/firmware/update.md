---
title: "Firmwareopdatering af din enhed"
linkTitle: Opdatering
weight: 4
description: >
  Ved at udføre en firmwareopdatering kan firmwaren på din VitalControl-enhed opdateres til de nyeste tilgængelige versioner.
---
Sørg først for, at en [nyere firmwareversion](../versions/) er tilgængelig for din enhed, og opdater om nødvendigt firmwaren på din enhed i henhold til følgende instruktioner.

## Påkrævet tilbehør {#required-accessory}

For at installere opdateringen på din enhed skal du bruge et dual USB-flashdrev (2-i-1 USB-stick) Type-C/USB 3.0 med en USB C-stik og en USB A-stik. Et sådant dual USB-flashdrev leveres sammen med din enhed. Du kan også købe et sådant USB-flashdrev fra forskellige leverandører.

![Dual USB-flashdrev (USB A / USB C)](/images/firmware/update/usb-dual-stick.svg "Dual USB-flashdrev")

## Forberedelse: download nyeste firmware {#preparation-download-latest-firmware}

1. Indsæt dit USB-flashdrev i USB-stikket på din computer. Opret derefter en ny mappe med navnet 'update' i rodmappen på dit flashdrev.

    ![Windows Stifinder: USB-flashdrev med mappen 'update'](../images/create-folder-update.png "USB-flashdrev: mappe 'update'")

1. Download [firmwarefilen](/download/firmware.vcu) (filnavn: `firmware.vcu`) og gem den i den tidligere oprettede mappe `update` på dit USB-flashdrev. Opdateringsfilen kræver ca. 2,5 MB lagerplads på flashdrevet.

    ![Windows Stifinder: flashdrev med firmwarefilen 'firmware.vcu'](../images/save-firmware-file.png "Flashdrev med firmwarefil")

1. Opret en [databackup][] på din enhed.

    {{% alert title="Info" %}}
Databackup er en anbefalet forholdsregel. Alle eksisterende dyre- og enhedsdata vil blive bevaret ved opdatering af firmwaren på VitalControl-enheden.
    {{% /alert %}}

[data backup]: {{< relref "../backup/backup/" >}}

## Udfør firmwareopdatering {#perform-firmware-update}

1. Åbn menupunktet `{{<T "Device" >}}` på hovedskærmen på din VitalControl-enhed.


1. Åbn undermenuen `{{<T "Service" >}}`, vælg menupunktet `{{<T "FirmwareUpdate" >}}` og bekræft med `{{<T "Ok" >}}`. Du bliver nu bedt om at indsætte den USB-flashdrev, du allerede har forberedt:

    ![VitalControl: menuvej firmwareopdatering](../images/firmware-update.png "Firmwareopdatering")

1. Indsæt USB-flashdrevet (C-stik) i stikket i bunden af enheden og bekræft med `{{<T "Ok" >}}`.

    ![VitalControl: Indsæt USB-flashdrev](/images/firmware/update/plug-in-dual-usb-stick.svg "Indsæt USB-flashdrev")

    Enheden udfører opdateringen automatisk. Under opdateringen informerer displayet dig om opdateringens fremskridt. Efter opdateringen er fuldført, genstarter enheden automatisk og viser en succesmeddelelse efter genstarten:

   ![VitalControl: Succesmeddelelse firmwareopdatering](../images/update-success.png "Succes firmwareopdatering")

   Den nye firmware er nu installeret på din enhed.

