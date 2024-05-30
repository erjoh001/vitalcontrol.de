---
title: Export dat na USB flash disk
linkTitle: Na USB flash disk
date: 2023-07-20
weight: 10
description: >
  Exportujte soubory CVS obsahující data o zvířatech a hodnoty měření uložené na zařízení VitalControl na USB flash disk.
categories: [Export dat]
tags: [CSV soubory, USB flash disk]
translationKey: data-export/usb-drive
---
{{% usb-drive/cs "Pro provedení exportu dat vašeho zařízení," %}}

## Proveďte export dat {#perform-data-export}	

1. Otevřete položku menu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Zařízení" /> `{{<T "Device" >}}` na hlavní obrazovce vašeho zařízení VitalControl.

2. Vyvolejte podmenu `{{<T "DataManagement" >}}`, vyberte položku menu `{{<T "AnimalData" >}}` a potvrďte `{{<T "Ok" >}}`.

3. Otevře se další podmenu. Vyberte položku menu `{{<T "ExportAnimalData" >}}` a potvrďte `{{<T "Ok" >}}`.

4. Nyní budete vyzváni k vložení USB flash disku:

   ![VitalControl: Cesta menu export dat](../images/data-export.png "Vyvolejte export dat")

5. Vložte USB flash disk (C konektor) do konektoru na spodní straně zařízení.

   ![VitalControl: vložte USB flash disk](/images/firmware/update/plug-in-dual-usb-stick.svg "Vložte USB flash disk")

6. Jakmile zařízení detekuje vložení USB disku, export dat se automaticky spustí. Zápis záložních dat může trvat několik sekund. Po dokončení exportu dat se zobrazí zpráva o úspěchu:

   ![VitalControl: zpráva o úspěchu export dat](../images/success-data-export.png "Úspěšný export dat")

7. Export dat je nyní dokončen. Čtyři vytvořené [exportní soubory](../export-files/) naleznete ve složce `export-csv` na vašem USB flash disku.

   ![USB flash disk s exportními soubory VitalControl](../images/export-files.png "Exportní soubory na USB flash disku")

   {{% alert title="Poznámky" %}}
  - Aby se zabránilo náhodnému přepsání exportních souborů, název každého exportního souboru vždy obsahuje datum a čas vytvoření souboru. Ujistěte se, že používáte nejnovější verzi exportních souborů, pokud jste exportovali data o zvířatech několikrát.
  - Velikost exportních souborů závisí na počtu zvířat na VitalControl a na počtu provedených měření. Obecně exportní soubory zabírají pouze několik kB úložného prostoru na USB disku.
   {{% /alert %}}
