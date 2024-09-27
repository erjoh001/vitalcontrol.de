---
title: "Ažuriranje firmvera vašeg uređaja"
linkTitle: Ažuriranje
weight: 4
description: >
  Ažuriranjem firmvera, firmver vašeg VitalControl uređaja može biti ažuriran na najnovije dostupne verzije.
---
Prvo, provjerite da li je dostupna [novija verzija firmvera](../versions/) za vaš uređaj i, ako je potrebno, ažurirajte firmver vašeg uređaja prema sljedećim uputama.

## Potrebni dodatak {#required-accessory}

Za instalaciju ažuriranja na vaš uređaj, potreban vam je dualni USB flash drive (2-u-1 USB stick) Tip-C/USB 3.0 sa USB C konektorom i USB A konektorom. Takav dualni USB flash drive se isporučuje zajedno sa vašim uređajem. Također možete kupiti takav USB flash drive od različitih dobavljača.

![Dualni USB flash drive (USB A / USB C)](/images/firmware/update/usb-dual-stick.svg "Dualni USB flash drive")

## Priprema: preuzimanje najnovijeg firmvera {#preparation-download-latest-firmware}

1. Umetnite vaš USB flash drive u USB konektor vašeg računara. Zatim kreirajte novi direktorij nazvan 'update' u root direktoriju vašeg flash drive-a.

    ![Windows Explorer: USB flash drive sa direktorijem 'update'](../images/create-folder-update.png "USB flash drive: direktorij 'update'")

1. Preuzmite [firmver datoteku](/download/firmware.vcu) (naziv datoteke: `firmware.vcu`) i pohranite je u prethodno kreirani direktorij `update` na vašem USB flash drive-u. Datoteka za ažuriranje zahtijeva približno 2.5 MB prostora za pohranu na flash drive-u.

    ![Windows Explorer: flash drive sa firmver datotekom 'firmware.vcu'](../images/save-firmware-file.png "Flash drive sa firmver datotekom")

1. Kreirajte [backup podataka][] na vašem uređaju.

    {{% alert title="Info" %}}
Backup podataka je preporučena mjera predostrožnosti. Svi postojeći podaci o životinjama i uređaju će biti sačuvani prilikom ažuriranja firmvera VitalControl uređaja.
    {{% /alert %}}

[data backup]: {{< relref "../backup/backup/" >}}

## Izvršite ažuriranje firmvera {#perform-firmware-update}

1. Otvorite stavku izbornika `{{<T "Device" >}}` na glavnom ekranu vašeg VitalControl uređaja.


1. Pozovite podmeni `{{<T "Service" >}}`, odaberite stavku menija `{{<T "FirmwareUpdate" >}}` i potvrdite sa `{{<T "Ok" >}}`. Sada će vam biti zatraženo da umetnete USB flash disk koji ste već pripremili:

    ![VitalControl: putanja menija za ažuriranje firmvera](../images/firmware-update.png "Ažuriranje firmvera")

1. Umetnite USB flash disk (C priključak) u konektor na dnu uređaja i potvrdite sa `{{<T "Ok" >}}`.

    ![VitalControl: Umetnite USB flash disk](/images/firmware/update/plug-in-dual-usb-stick.svg "Umetnite USB flash disk")

    Uređaj automatski izvodi ažuriranje. Tokom ažuriranja, displej vas informiše o napretku ažuriranja. Nakon što je ažuriranje završeno, uređaj se automatski ponovo pokreće i prikazuje poruku o uspehu nakon ponovnog pokretanja:

   ![VitalControl: Poruka o uspehu ažuriranja firmvera](../images/update-success.png "Uspešno ažuriranje firmvera")

   Novi firmver je sada instaliran na vašem uređaju.

