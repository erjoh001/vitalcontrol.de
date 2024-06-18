---
title: "Įrenginio programinės įrangos atnaujinimas"
linkTitle: Atnaujinti
weight: 4
description: >
  Atlikdami programinės įrangos atnaujinimą, galite atnaujinti savo VitalControl įrenginio programinę įrangą į naujausias galimas versijas.
---
Pirmiausia įsitikinkite, kad jūsų įrenginiui yra prieinama [naujesnė programinės įrangos versija](../versions/) ir, jei reikia, atnaujinkite įrenginio programinę įrangą pagal šias instrukcijas.

## Reikalingas priedas {#required-accessory}

Norėdami įdiegti atnaujinimą savo įrenginyje, jums reikės dvigubo USB atmintuko (2-in-1 USB stick) Type-C/USB 3.0 su USB C jungtimi ir USB A jungtimi. Toks dvigubas USB atmintukas yra pristatomas kartu su jūsų įrenginiu. Taip pat galite įsigyti tokį USB atmintuką iš įvairių tiekėjų.

![Dvigubas USB atmintukas (USB A / USB C)](/images/firmware/update/usb-dual-stick.svg "Dvigubas USB atmintukas")

## Pasiruošimas: atsisiųskite naujausią programinę įrangą {#preparation-download-latest-firmware}

1. Įdėkite savo USB atmintuką į kompiuterio USB jungtį. Tada sukurkite naują katalogą pavadinimu 'update' savo atmintuko šakniniame kataloge.

    ![Windows Explorer: USB atmintukas su katalogu 'update'](../images/create-folder-update.png "USB atmintukas: katalogas 'update'")

1. Atsisiųskite [programinės įrangos failą](/download/firmware.vcu) (failo pavadinimas: `firmware.vcu`) ir išsaugokite jį anksčiau sukurtame kataloge `update` savo USB atmintuke. Atnaujinimo failui reikia apie 2.5 MB vietos atmintuke.

    ![Windows Explorer: atmintukas su programinės įrangos failu 'firmware.vcu'](../images/save-firmware-file.png "Atmintukas su programinės įrangos failu")

1. Sukurkite [duomenų atsarginę kopiją][] savo įrenginyje.

    {{% alert title="Info" %}}
Duomenų atsarginė kopija yra rekomenduojama atsargumo priemonė. Visi esami gyvūnų ir įrenginio duomenys bus išsaugoti atnaujinant VitalControl įrenginio programinę įrangą.
    {{% /alert %}}

[data backup]: {{< relref "../backup/backup/" >}}

## Atlikite programinės įrangos atnaujinimą {#perform-firmware-update}

1. Atidarykite meniu punktą `{{<T "Device" >}}` pagrindiniame savo VitalControl įrenginio ekrane.


1. Iškvieskite submeniu `{{<T "Service" >}}`, pasirinkite meniu punktą `{{<T "FirmwareUpdate" >}}` ir patvirtinkite su `{{<T "Ok" >}}`. Dabar jūsų prašoma įdėti jau paruoštą USB atmintinę:

    ![VitalControl: meniu kelias programinės įrangos atnaujinimui](../images/firmware-update.png "Programinės įrangos atnaujinimas")

1. Įdėkite USB atmintinę (C jungtį) į jungtį, esančią įrenginio apačioje, ir patvirtinkite su `{{<T "Ok" >}}`.

    ![VitalControl: Įdėkite USB atmintinę](/images/firmware/update/plug-in-dual-usb-stick.svg "Įdėkite USB atmintinę")

    Įrenginys automatiškai atlieka atnaujinimą. Atnaujinimo metu ekrane rodoma atnaujinimo eiga. Po atnaujinimo įrenginys automatiškai persikrauna ir po persikrovimo rodo sėkmės pranešimą:

   ![VitalControl: Sėkmės pranešimas programinės įrangos atnaujinimas](../images/update-success.png "Sėkmės programinės įrangos atnaujinimas")

   Nauja programinė įranga dabar įdiegta jūsų įrenginyje.

