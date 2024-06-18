---
title: "Firmwareuppdatering av din enhet"
linkTitle: Uppdatera
weight: 4
description: >
  Genom att utföra en firmwareuppdatering kan firmware på din VitalControl-enhet uppdateras till de senaste tillgängliga versionerna.
---
Först, se till att en [nyare firmwareversion](../versions/) är tillgänglig för din enhet och, om det behövs, uppdatera firmware på din enhet enligt följande instruktioner.

## Nödvändigt tillbehör {#required-accessory}

För att installera uppdateringen på din enhet behöver du ett dubbelt USB-minne (2-i-1 USB-sticka) Typ-C/USB 3.0 med en USB C-kontakt och en USB A-kontakt. Ett sådant dubbelt USB-minne levereras tillsammans med din enhet. Du kan också köpa ett sådant USB-minne från olika leverantörer.

![Dubbelt USB-minne (USB A / USB C)](/images/firmware/update/usb-dual-stick.svg "Dubbelt USB-minne")

## Förberedelse: ladda ner senaste firmware {#preparation-download-latest-firmware}

1. Sätt in ditt USB-minne i USB-kontakten på din dator. Skapa sedan en ny katalog med namnet 'update' i rotkatalogen på ditt USB-minne.

    ![Windows Explorer: USB-minne med katalogen 'update'](../images/create-folder-update.png "USB-minne: katalogen 'update'")

1. Ladda ner [firmwarefilen](/download/firmware.vcu) (filnamn: `firmware.vcu`) och spara den i den tidigare skapade katalogen `update` på ditt USB-minne. Uppdateringsfilen kräver cirka 2,5 MB lagringsutrymme på USB-minnet.

    ![Windows Explorer: USB-minne med firmwarefilen 'firmware.vcu'](../images/save-firmware-file.png "USB-minne med firmwarefil")

1. Skapa en [databackup][] på din enhet.

    {{% alert title="Info" %}}
Databackup är en rekommenderad försiktighetsåtgärd. All befintlig djur- och enhetsdata kommer att bevaras när du uppdaterar firmware på VitalControl-enheten.
    {{% /alert %}}

[data backup]: {{< relref "../backup/backup/" >}}

## Utför firmwareuppdatering {#perform-firmware-update}

1. Öppna menyalternativet `{{<T "Device" >}}` på huvudskärmen på din VitalControl-enhet.


1. Öppna undermenyn `{{<T "Service" >}}`, välj menyalternativet `{{<T "FirmwareUpdate" >}}` och bekräfta med `{{<T "Ok" >}}`. Du ombeds nu att sätta in USB-minnet som du redan har förberett:

    ![VitalControl: menyväg firmware-uppdatering](../images/firmware-update.png "Firmware-uppdatering")

1. Sätt in USB-minnet (C-kontakt) i anslutningen längst ner på enheten och bekräfta med `{{<T "Ok" >}}`.

    ![VitalControl: Sätt in USB-minne](/images/firmware/update/plug-in-dual-usb-stick.svg "Sätt in USB-minne")

    Enheten utför uppdateringen automatiskt. Under uppdateringen informerar displayen dig om uppdateringens framsteg. Efter att uppdateringen är klar startar enheten om automatiskt och visar ett framgångsmeddelande efter omstarten:

   ![VitalControl: Framgångsmeddelande firmware-uppdatering](../images/update-success.png "Framgång firmware-uppdatering")

   Den nya firmware är nu installerad på din enhet.

