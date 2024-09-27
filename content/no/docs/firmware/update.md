---
title: "Firmwareoppdatering av enheten din"
linkTitle: Oppdatering
weight: 4
description: >
  Ved å utføre en firmwareoppdatering kan firmwaren til din VitalControl-enhet oppdateres til de nyeste tilgjengelige versjonene.
---
Først, sørg for at en [nyere firmwareversjon](../versions/) er tilgjengelig for enheten din og, om nødvendig, oppdater firmwaren til enheten din i henhold til følgende instruksjoner.

## Nødvendig tilbehør {#required-accessory}

For å installere oppdateringen på enheten din, trenger du en dobbel USB-minnepinne (2-i-1 USB-pinne) Type-C/USB 3.0 med en USB C-kontakt og en USB A-kontakt. En slik dobbel USB-minnepinne leveres sammen med enheten din. Du kan også kjøpe en slik USB-minnepinne fra forskjellige leverandører.

![Dobbel USB-minnepinne (USB A / USB C)](/images/firmware/update/usb-dual-stick.svg "Dobbel USB-minnepinne")

## Forberedelse: last ned nyeste firmware {#preparation-download-latest-firmware}

1. Sett inn USB-minnepinnen i USB-kontakten på datamaskinen din. Opprett deretter en ny katalog med navnet 'update' i rotkatalogen på minnepinnen.

    ![Windows Utforsker: USB-minnepinne med katalogen 'update'](../images/create-folder-update.png "USB-minnepinne: katalog 'update'")

1. Last ned [firmwarefilen](/download/firmware.vcu) (filnavn: `firmware.vcu`) og lagre den i den tidligere opprettede katalogen `update` på USB-minnepinnen din. Oppdateringsfilen krever ca. 2,5 MB lagringsplass på minnepinnen.

    ![Windows Utforsker: minnepinne med firmwarefilen 'firmware.vcu'](../images/save-firmware-file.png "Minnepinne med firmwarefil")

1. Opprett en [databackup][] på enheten din.

    {{% alert title="Info" %}}
Databackup er et anbefalt forholdsregel. Alle eksisterende dyre- og enhetsdata vil bli bevart når du oppdaterer firmwaren til VitalControl-enheten.
    {{% /alert %}}

[data backup]: {{< relref "../backup/backup/" >}}

## Utfør firmwareoppdatering {#perform-firmware-update}

1. Åpne menyvalget `{{<T "Device" >}}` på hovedskjermen til din VitalControl-enhet.

1. Åpne undermenyen `{{<T "Service" >}}`, velg menyelementet `{{<T "FirmwareUpdate" >}}` og bekreft med `{{<T "Ok" >}}`. Du blir nå bedt om å sette inn USB-flashstasjonen du allerede har forberedt:

    ![VitalControl: menyvei firmware-oppdatering](../images/firmware-update.png "Firmware-oppdatering")

1. Sett inn USB-flashstasjonen (C-plugg) i kontakten nederst på enheten og bekreft med `{{<T "Ok" >}}`.

    ![VitalControl: Sett inn USB-flashstasjon](/images/firmware/update/plug-in-dual-usb-stick.svg "Sett inn USB-flashstasjon")

    Enheten utfører oppdateringen automatisk. Under oppdateringen informerer skjermen deg om fremdriften av oppdateringen. Etter at oppdateringen er fullført, starter enheten automatisk på nytt og viser en suksessmelding etter omstarten:

   ![VitalControl: Suksessmelding firmware-oppdatering](../images/update-success.png "Suksess firmware-oppdatering")

   Den nye fastvaren er nå installert på enheten din.

