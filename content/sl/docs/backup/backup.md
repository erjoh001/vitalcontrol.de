---
title: "Ustvarjanje varnostne kopije podatkov"
linkTitle: "Varnostna kopija"
date: 2023-07-20
weight: 20
description: >
  S pomočjo varnostne kopije podatkov se ustvari varnostna datoteka, ki vsebuje vse podatke, shranjene na napravi VitalControl.
categories: [Varnostna kopija podatkov]
tags: [varnostna datoteka, USB ključek]
translationKey: backup
---
{{% usb-drive/en "Za izvedbo varnostne kopije podatkov za vašo napravo," %}}

## Izvedite varnostno kopijo podatkov {#perform-data-backup}

1. Odprite meni &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="{{< T "Device" >}}" /> `{{< T "Device" >}}` na glavnem zaslonu vaše naprave VitalControl.

2. Izberite podmeni `{{< T "DataManagement" >}}` in nato izberite podmeni `{{< T "DataBackup" >}}`. Sedaj izberite meni `{{< T "CreateBackup" >}}` in potrdite z `OK`. Sedaj boste pozvani, da vstavite USB ključek:

   ![VitalControl: meni pot varnostna kopija podatkov](../images/backup.png "Izvedite varnostno kopijo podatkov")

3. Vstavite USB ključek (C priključek) v priključek na dnu naprave.

   <figure class="figure">
        <img src="/images/firmware/update/plug-in-dual-usb-stick.svg" class="border border-2 figure-img img-fluid rounded p-3" style="max-width: 500px; width: 100%;" align="bottom" alt="VitalControl: Vstavite USB ključ" title="Vstavite USB ključ" />
        <a name="AnschlussBarcodescanner" ><figcaption class="figure-caption fs-6">Slika 2: Vstavite USB ključek v VitalControl</figcaption></a>
   </figure>

4. Ko naprava zazna vstavitev USB ključka, se varnostna kopija podatkov samodejno začne. Zbiranje, stiskanje in zapisovanje varnostne kopije lahko traja minuto ali več. Ko je varnostna kopija končana, se prikaže sporočilo o uspehu:

   ![VitalControl: sporočilo o uspehu varnostne kopije](../images/backup-done.png "Uspešna varnostna kopija podatkov")

5. Varnostna kopija podatkov je sedaj ustvarjena. Ustvarjeno datoteko `backup.vcu` boste našli v imeniku `backup` na vašem USB ključku. Varnostna datoteka zahteva približno 1 MB prostora na ključku.

   ![USB ključek z varnostno datoteko VitalControl](../images/backup-file.png "USB ključek z varnostno datoteko")

   {{% alert title="Namig" %}}
  Če datoteka `backup.vcu` že obstaja v imeniku `backup` na vašem USB ključku, bo ta datoteka preimenovana. Novo ime datoteke je sestavljeno iz začetne nize `backup` in datuma ter časa, ko je bila varnostna datoteka ustvarjena (npr. `backup_2023-07-17_12-50-37.vcb`). Novo zapisana varnostna datoteka je vedno imenovana `backup.vcu`.
    {{% /alert %}}


6. Ustvarjeno varnostno kopijo lahko uporabite za [obnovitev](../restore) shranjenih podatkov na katero koli napravo VitalControl, če je to potrebno.
