---
title: "Ažuriranje firmvera vašeg uređaja"
linkTitle: Update
weight: 4
description: >
  Ažuriranjem firmvera, firmver vašeg VitalControl uređaja može se ažurirati na najnovije dostupne verzije.
---
Prvo, provjerite je li dostupna [novija verzija firmvera](../versions/) za vaš uređaj i, ako je potrebno, ažurirajte firmver vašeg uređaja prema sljedećim uputama.

## Potrebni pribor {#required-accessory}

Za instalaciju ažuriranja na vaš uređaj, potreban vam je dvostruki USB flash pogon (2-u-1 USB stick) Type-C/USB 3.0 s USB C konektorom i USB A konektorom. Takav dvostruki USB flash pogon isporučuje se zajedno s vašim uređajem. Također možete kupiti takav USB flash pogon od različitih dobavljača.

![Dvostruki USB flash pogon (USB A / USB C)](/images/firmware/update/usb-dual-stick.svg "Dvostruki USB flash pogon")

## Priprema: preuzimanje najnovijeg firmvera {#preparation-download-latest-firmware}

1. Umetnite svoj USB flash pogon u USB priključak vašeg računala. Zatim stvorite novi direktorij nazvan 'update' u korijenskom direktoriju vašeg flash pogona.

    ![Windows Explorer: USB flash pogon s direktorijem 'update'](../images/create-folder-update.png "USB flash pogon: direktorij 'update'")

1. Preuzmite [firmver datoteku](/download/firmware.vcu) (naziv datoteke: `firmware.vcu`) i pohranite je u prethodno stvoreni direktorij `update` na vašem USB flash pogonu. Datoteka za ažuriranje zahtijeva približno 2.5 MB prostora za pohranu na flash pogonu.

    ![Windows Explorer: flash pogon s firmver datotekom 'firmware.vcu'](../images/save-firmware-file.png "Flash pogon s firmver datotekom")

1. Stvorite [sigurnosnu kopiju podataka][] na svom uređaju.

    {{% alert title="Info" %}}
Sigurnosna kopija podataka je preporučena mjera opreza. Svi postojeći podaci o životinjama i uređaju bit će sačuvani prilikom ažuriranja firmvera VitalControl uređaja.
    {{% /alert %}}

[sigurnosna kopija podataka]: {{< relref "../backup/backup/" >}}

## Izvršite ažuriranje firmvera {#perform-firmware-update}

1. Otvorite stavku izbornika `{{<T "Device" >}}` na glavnom ekranu vašeg VitalControl uređaja.


1. Pozovite podizbornik `{{<T "Service" >}}`, odaberite stavku izbornika `{{<T "FirmwareUpdate" >}}` i potvrdite s `{{<T "Ok" >}}`. Sada će vas se tražiti da umetnete USB flash pogon koji ste već pripremili:

    ![VitalControl: putanja izbornika ažuriranje firmvera](../images/firmware-update.png "Ažuriranje firmvera")

1. Umetnite USB flash pogon (C priključak) u konektor na dnu uređaja i potvrdite s `{{<T "Ok" >}}`.

    ![VitalControl: Umetnite USB flash pogon](/images/firmware/update/plug-in-dual-usb-stick.svg "Umetnite USB flash pogon")

    Uređaj automatski izvodi ažuriranje. Tijekom ažuriranja, zaslon vas informira o napretku ažuriranja. Nakon što je ažuriranje završeno, uređaj se automatski ponovno pokreće i prikazuje poruku o uspjehu nakon ponovnog pokretanja:

   ![VitalControl: Poruka o uspjehu ažuriranja firmvera](../images/update-success.png "Uspješno ažuriranje firmvera")

   Novi firmver je sada instaliran na vašem uređaju.

