---
title: "Obnavljanje varnostne kopije podatkov"
linkTitle: "Obnovi"
date: 2023-07-20
weight: 20
description: >
 S pomočjo obnove podatkov lahko celotne podatke naprave VitalControl obnovite na drugo napravo z uporabo varnostne kopije.
translationKey: restore
---
{{% usb-drive/en "Za obnovitev varnostne kopije podatkov na vaši napravi VitalControl," %}}

Na tem USB ključku mora obstajati imenik `backup`, ki mora vsebovati veljavno **varnostno kopijo podatkov `backup.vcu`**.

![USB ključek z varnostno kopijo VitalControl](../images/backup-file.png "USB ključek z varnostno kopijo")

{{% alert title="Opomba" %}}
V imeniku `backup` na vašem USB ključku lahko najdete več varnostnih kopij z razširitvijo `.vcu`. Naprava VitalControl vedno obnovi podatke iz datoteke z imenom `backup.vcu`, ki je vedno najnovejša datoteka. Če želite obnoviti podatke iz starejše varnostne kopije (ki vsebuje datum varnostne kopije v imenu datoteke), morate to starejšo varnostno kopijo preimenovati v `backup.vcu` pred izvedbo obnove podatkov!
{{% /alert %}}

## Obnova podatkov na napravo VitalControl {#data-restoration-to-vitalcontrol-device}

1. Odprite postavko menija &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Naprava" /> `Naprava` na glavnem zaslonu naprave VitalControl, na katero želite obnoviti podatke.

2. Izberite podmeni `Upravljanje podatkov` in nato izberite podmeni `Varnostna kopija podatkov`. Sedaj izberite postavko menija `Obnovi varnostno kopijo` in potrdite z `OK`. Zdaj boste pozvani, da vstavite USB ključek:

   ![VitalControl: pot menija obnova podatkov](../images/restore.png "Obnova iz varnostne kopije")

3. Vstavite USB ključek (C priključek) v priključek na dnu naprave.

   ![VitalControl: vstavite USB ključek](/images/firmware/update/plug-in-dual-usb-stick.svg "Vstavite USB ključek")

4. Ko naprava zazna vstavitev USB ključka, se prikaže potrditveno okno. Potrdite to pojavno okno z `Da` za začetek obnove podatkov. Razpakiranje in obnova varnostne kopije lahko traja minuto ali več. Ko je obnova podatkov končana, se prikaže sporočilo o uspehu:


   ![VitalControl: success message data restore](../images/restore-done.png "Success message data restore")

5. Podatki varnostne kopije so bili uspešno obnovljeni na napravo VitalControl.
