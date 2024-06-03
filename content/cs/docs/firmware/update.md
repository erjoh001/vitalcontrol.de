---
title: "Aktualizace firmwaru vašeho zařízení"
linkTitle: Aktualizace
weight: 4
description: >
  Prováděním aktualizace firmwaru lze aktualizovat firmware vašeho zařízení VitalControl na nejnovější dostupné verze.
---
Nejprve se ujistěte, že je pro vaše zařízení k dispozici [novější verze firmwaru](../versions/) a v případě potřeby aktualizujte firmware vašeho zařízení podle následujících pokynů.

## Požadované příslušenství {#required-accessory}

Pro instalaci aktualizace na vašem zařízení potřebujete duální USB flash disk (2-v-1 USB stick) Type-C/USB 3.0 s USB C konektorem a USB A konektorem. Takový duální USB flash disk je dodáván spolu s vaším zařízením. Můžete si také zakoupit takový USB flash disk od různých dodavatelů.

![Duální USB flash disk (USB A / USB C)](/images/firmware/update/usb-dual-stick.svg "Duální USB flash disk")

## Příprava: stažení nejnovějšího firmwaru {#preparation-download-latest-firmware}

1. Vložte svůj USB flash disk do USB konektoru vašeho počítače. Poté vytvořte nový adresář s názvem 'update' v kořenovém adresáři vašeho flash disku.

    ![Průzkumník Windows: USB flash disk s adresářem 'update'](../images/create-folder-update.png "USB flash disk: adresář 'update'")

1. Stáhněte [soubor firmwaru](/download/firmware.vcu) (název souboru: `firmware.vcu`) a uložte jej do dříve vytvořeného adresáře `update` na vašem USB flash disku. Aktualizační soubor vyžaduje přibližně 2,5 MB úložného prostoru na flash disku.

    ![Průzkumník Windows: flash disk se souborem firmwaru 'firmware.vcu'](../images/save-firmware-file.png "Flash disk se souborem firmwaru")

1. Vytvořte [zálohu dat][] na vašem zařízení.

    {{% alert title="Info" %}}
Záloha dat je doporučené preventivní opatření. Všechna stávající data o zvířatech a zařízení budou při aktualizaci firmwaru zařízení VitalControl zachována.
    {{% /alert %}}

[data backup]: {{< relref "../backup/backup/" >}}

## Provedení aktualizace firmwaru {#perform-firmware-update}

1. Otevřete položku menu `{{<T "Device" >}}` na hlavní obrazovce vašeho zařízení VitalControl.

1. Vyvolejte podmenu `{{<T "Service" >}}`, vyberte položku menu `{{<T "FirmwareUpdate" >}}` a potvrďte stisknutím `{{<T "Ok" >}}`. Nyní budete vyzváni k vložení již připraveného USB flash disku:

![VitalControl: menu path firmware update](../images/firmware-update.png "Aktualizace firmwaru")

1. Vložte USB flash disk (konektor C) do konektoru na spodní straně zařízení a potvrďte stisknutím `{{<T "Ok" >}}`.

    ![VitalControl: Insert USB flash drive](/images/firmware/update/plug-in-dual-usb-stick.svg "Vložte USB flash disk")

    Zařízení provede aktualizaci automaticky. Během aktualizace vás displej informuje o průběhu aktualizace. Po dokončení aktualizace se zařízení automaticky restartuje a po restartu zobrazí zprávu o úspěchu:

   ![VitalControl: Success message firmware update](../images/update-success.png "Úspěšná aktualizace firmwaru")

   Nový firmware je nyní nainstalován na vašem zařízení.
