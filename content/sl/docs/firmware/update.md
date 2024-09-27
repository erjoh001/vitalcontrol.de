---
title: "Posodobitev vdelane programske opreme vaše naprave"
linkTitle: Update
weight: 4
description: >
  Z izvajanjem posodobitve vdelane programske opreme lahko posodobite vdelano programsko opremo vaše naprave VitalControl na najnovejše razpoložljive različice.
---
Najprej se prepričajte, da je za vašo napravo na voljo [novejša različica vdelane programske opreme](../versions/) in po potrebi posodobite vdelano programsko opremo vaše naprave v skladu z naslednjimi navodili.

## Potrebni dodatki {#required-accessory}

Za namestitev posodobitve na vašo napravo potrebujete dvojni USB ključek (2-v-1 USB ključek) Tip-C/USB 3.0 z USB C priključkom in USB A priključkom. Takšen dvojni USB ključek je priložen vaši napravi. Takšen USB ključek lahko kupite tudi pri različnih prodajalcih.

![Dvojni USB ključek (USB A / USB C)](/images/firmware/update/usb-dual-stick.svg "Dvojni USB ključek")

## Priprava: prenos najnovejše vdelane programske opreme {#preparation-download-latest-firmware}

1. Vstavite svoj USB ključek v USB priključek vašega računalnika. Nato ustvarite novo mapo z imenom 'update' v korenski mapi vašega ključka.

    ![Windows Explorer: USB ključek z mapo 'update'](../images/create-folder-update.png "USB ključek: mapa 'update'")

1. Prenesite [datoteko vdelane programske opreme](/download/firmware.vcu) (ime datoteke: `firmware.vcu`) in jo shranite v prej ustvarjeno mapo `update` na vašem USB ključku. Datoteka za posodobitev zahteva približno 2,5 MB prostora na ključku.

    ![Windows Explorer: ključek z datoteko vdelane programske opreme 'firmware.vcu'](../images/save-firmware-file.png "Ključek z datoteko vdelane programske opreme")

1. Ustvarite [varnostno kopijo podatkov][] na vaši napravi.

    {{% alert title="Info" %}}
Varnostna kopija podatkov je priporočljiv previdnostni ukrep. Vsi obstoječi podatki o živalih in napravi bodo ohranjeni pri posodobitvi vdelane programske opreme naprave VitalControl.
    {{% /alert %}}

[data backup]: {{< relref "../backup/backup/" >}}

## Izvedba posodobitve vdelane programske opreme {#perform-firmware-update}

1. Odprite meni `{{<T "Device" >}}` na glavnem zaslonu vaše naprave VitalControl.


1. Odprite podmeni `{{<T "Service" >}}`, izberite možnost `{{<T "FirmwareUpdate" >}}` in potrdite z `{{<T "Ok" >}}`. Zdaj boste pozvani, da vstavite USB ključek, ki ste ga že pripravili:

    ![VitalControl: menu path firmware update](../images/firmware-update.png "Firmware update")

1. Vstavite USB ključek (C priključek) v priključek na dnu naprave in potrdite z `{{<T "Ok" >}}`.

    ![VitalControl: Insert USB flash drive](/images/firmware/update/plug-in-dual-usb-stick.svg "Insert USB flash drive")

    Naprava bo samodejno izvedla posodobitev. Med posodobitvijo vas bo zaslon obveščal o napredku posodobitve. Po končani posodobitvi se bo naprava samodejno ponovno zagnala in po ponovnem zagonu prikazala sporočilo o uspehu:

   ![VitalControl: Success message firmware update](../images/update-success.png "Success firmware update")

   Nova programska oprema je zdaj nameščena na vaši napravi.

