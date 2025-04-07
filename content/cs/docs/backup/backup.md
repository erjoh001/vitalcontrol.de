---
title: "Vytvoření zálohy dat"
linkTitle: "Záloha"
date: 2023-07-20
weight: 20
description: >
  Pomocí zálohy dat se vytvoří záložní soubor, který obsahuje všechna data uložená na zařízení VitalControl.
kategorie: [Záloha dat]
štítky: [záložní soubor, USB flash disk]
translationKey: backup
---
{{% usb-drive/cs "Pro provedení zálohy dat pro vaše zařízení," %}}

## Proveďte zálohu dat {#perform-data-backup}

1. Otevřete položku menu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Zařízení" /> `Zařízení` na hlavní obrazovce vašeho zařízení VitalControl.

2. Vyvolejte podmenu `Správa dat` a poté vyberte položku podmenu `Záloha dat`. Nyní vyberte položku menu `Vytvořit zálohu` a potvrďte `OK`. Nyní budete vyzváni k vložení USB flash disku:

   ![VitalControl: cesta menu záloha dat](../images/backup.png "Vyvolejte zálohu dat")

3. Vložte USB flash disk (C konektor) do konektoru na spodní straně zařízení.

   <figure class="figure">
        <img src="/images/firmware/update/plug-in-dual-usb-stick.svg" class="border border-2 figure-img img-fluid rounded p-3" style="max-width: 500px; width: 100%;" align="bottom" alt="VitalControl: Vložení paměti USB" title="Vložení paměti USB" />
        <a name="AnschlussBarcodescanner" ><figcaption class="figure-caption fs-6">Obrázek 2: Vložení USB klíče do zařízení VitalControl</figcaption></a>
   </figure>

4. Jakmile zařízení detekuje vložení USB disku, záloha dat se automaticky spustí. Shromažďování, komprese a zápis záložních dat může trvat minutu nebo déle. Po dokončení zálohy se zobrazí zpráva o úspěchu:

   ![VitalControl: zpráva o úspěchu zálohy](../images/backup-done.png "Úspěšná záloha dat")

5. Záloha dat je nyní vytvořena. Vytvořený soubor `backup.vcu` naleznete v adresáři `backup` na vašem USB flash disku. Záložní soubor vyžaduje přibližně 1 MB úložného prostoru na flash disku.

   ![USB flash disk se záložním souborem VitalControl](../images/backup-file.png "USB flash disk se záložním souborem")

   {{% alert title="Tip" %}}
  Pokud již v adresáři `backup` na vašem USB flash disku existuje soubor `backup.vcu`, tento soubor bude přejmenován. Nový název souboru se skládá z předpony `backup` a data a času, kdy byl záložní soubor vytvořen (např. `backup_2023-07-17_12-50-37.vcb`). Nově vytvořený záložní soubor je vždy pojmenován `backup.vcu`.
    {{% /alert %}}


6. Vytvořený záložní soubor lze použít k [obnovení](../restore) uložených dat na jakékoli zařízení VitalControl, pokud je to potřeba.
