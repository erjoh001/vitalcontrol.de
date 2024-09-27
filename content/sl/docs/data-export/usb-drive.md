---
title: Izvoz podatkov na USB ključek
linkTitle: Na USB ključek
date: 2023-07-20
weight: 10
description: >
  Izvoz CSV podatkovnih datotek, ki vsebujejo podatke o živalih in merilne vrednosti, shranjene na napravi VitalControl, na USB ključek.
categories: [Izvoz podatkov]
tags: [CSV datoteke, USB ključek]
translationKey: data-export/usb-drive
---
{{% usb-drive/en "Za izvedbo izvoza podatkov vaše naprave," %}}

## Izvedba izvoza podatkov {#perform-data-export}

1. Odprite meni &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Naprava" /> `{{<T "Device" >}}` na glavnem zaslonu vaše naprave VitalControl.

2. Izberite podmeni `{{<T "DataManagement" >}}`, izberite meni `{{<T "AnimalData" >}}` in potrdite z `{{<T "Ok" >}}`.

3. Odpre se nov podmeni. Izberite meni `{{<T "ExportAnimalData" >}}` in potrdite z `{{<T "Ok" >}}`.

4. Zdaj boste pozvani, da vstavite USB ključek:

   ![VitalControl: Pot izvoza podatkov v meniju](../images/data-export.png "Izvedba izvoza podatkov")

5. Vstavite USB ključek (C priključek) v priključek na dnu naprave.

   ![VitalControl: vstavite USB ključek](/images/firmware/update/plug-in-dual-usb-stick.svg "Vstavite USB ključek")

6. Ko naprava zazna vstavljanje USB ključka, se izvoz podatkov samodejno začne. Pisanje varnostnih kopij lahko traja nekaj sekund. Ko je izvoz podatkov končan, se prikaže sporočilo o uspehu:

   ![VitalControl: sporočilo o uspešnem izvozu podatkov](../images/success-data-export.png "Uspešen izvoz podatkov")

7. Izvoz podatkov je zdaj končan. Štiri ustvarjene [izvozne datoteke](../export-files/) boste našli v imeniku `export-csv` na vašem USB ključku.

   ![USB ključek z izvoznimi datotekami VitalControl](../images/export-files.png "Izvozne datoteke na USB ključku")

   {{% alert title="Opombe" %}}
  - Da preprečite nenamerno prepisovanje izvoznih datotek, ime vsake izvozne datoteke vedno vključuje datum in čas, ko je bila datoteka ustvarjena. Prepričajte se, da uporabljate najnovejšo različico izvoznih datotek, če ste večkrat izvozili podatke o živalih.
  - Velikost izvoznih datotek je odvisna od števila živali na napravi VitalControl in števila izvedenih meritev. Na splošno izvozne datoteke zasedejo le nekaj kB prostora na USB ključku.
   {{% /alert %}}

Prosim, prilepite vsebino Markdown, ki jo želite prevesti.
