---
title: "Obnovení zálohy dat"
linkTitle: "Obnovit"
date: 2023-07-20
weight: 20
description: >
 Prostřednictvím obnovení dat lze obnovit veškerá data zařízení VitalControl na jiném zařízení pomocí záložního souboru.
translationKey: restore
---
{{% usb-drive/cs "Aby bylo možné obnovit zálohu dat na zařízení VitalControl," %}}

Na tomto USB flash disku musí existovat adresář `backup`, který musí obsahovat platný **záložní soubor dat `backup.vcu`**.

![USB-flash disk se záložním souborem VitalControl](../images/backup-file.png "USB-flash disk se záložním souborem")

{{% alert title="Poznámka" %}}
V adresáři `backup` na vašem USB flash disku můžete najít několik záložních souborů s příponou `.vcu`. Zařízení VitalControl vždy obnovuje záložní data ze souboru s názvem `backup.vcu`, což je vždy nejnovější soubor. Pokud chcete obnovit data ze staršího záložního souboru (který obsahuje datum zálohy v názvu souboru), musíte tento starší záložní soubor přejmenovat na `backup.vcu` před provedením obnovení dat!
{{% /alert %}}

## Obnovení dat na zařízení VitalControl {#data-restoration-to-vitalcontrol-device}

1. Otevřete položku menu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Zařízení" /> `Zařízení` na hlavní obrazovce zařízení VitalControl, na které chcete data obnovit.

2. Vyvolejte podmenu `Správa dat` a poté vyberte položku podmenu `Záloha dat`. Nyní vyberte položku menu `Obnovit zálohu` a potvrďte `OK`. Nyní budete vyzváni k vložení USB flash disku:

   ![VitalControl: cesta menu obnovení dat](../images/restore.png "Obnovení ze záložního souboru")

3. Vložte USB flash disk (C konektor) do konektoru na spodní straně zařízení.

   ![VitalControl: vložení USB flash disku](/images/firmware/update/plug-in-dual-usb-stick.svg "Vložte USB flash disk")

4. Jakmile zařízení detekuje vložení USB disku, objeví se potvrzovací okno. Potvrďte toto vyskakovací okno `Ano` pro zahájení obnovení dat. Rozbalení a obnovení zálohy může trvat minutu nebo déle. Po dokončení obnovení dat se zobrazí zpráva o úspěchu:


   ![VitalControl: success message data restore](../images/restore-done.png "Success message data restore")

5. Záložní data byla úspěšně obnovena na zařízení VitalControl.
