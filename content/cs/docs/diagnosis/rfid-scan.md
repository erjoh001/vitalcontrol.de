---
title: "RFID sken: test dosahu a diagnostika transpondérů"
linkTitle: RFID sken
date: 2023-08-07T10:09:46+02:00
draft: false
categories: [Diagnostika, RFID Sken]
description: >
  Zkontrolujte dosah vašeho RFID skeneru nebo zobrazte čtecí protokol a čísla uložená na neznámých transpondérech.
translationKey: diagnosis/rfid-scan
weight: 20
---

Pomocí menu 'Test dosahu' můžete zjistit, zda zařízení VitalControl dokáže číst transpondéry, které máte po ruce. Kromě kontroly kompatibility můžete také pohodlně určit přenosový protokol používaný těmito transpondéry a zobrazit číslo uložené na transpondéru.

## Proveďte test dosahu {#perform-range-test}

1. Otevřete položku menu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Zařízení" /> `{{<T "Device" >}}` na hlavní obrazovce vašeho zařízení VitalControl.

1. Vyvolejte podmenu `{{<T "Service" >}}`, vyberte položku menu `{{<T "RangeTest" >}}` a potvrďte `{{<T "Ok" >}}`. Nyní se zobrazí animovaná obrazovka skenování.

    ![VitalControl: Cesta menu Test dosahu RFID skeneru](../images/rangetest.png "Test dosahu RFID skeneru")

1.  Pomalu přibližte svůj transpondér k čtecí hlavě zařízení VitalControl. Pro dosažení dobrého výsledku čtení musí být transpondér zarovnán horizontálně s čtecí hlavou zařízení VitalControl.

    ![ VitalControl: správné přiblížení transpondéru k RFID čtecí hlavě](/images/diagnosis/transponderscan.svg "Správné skenování transpondéru")

1. Jakmile RFID skener detekuje transpondér, spustí se vibrační alarm a barva pozadí obrázku transpondéru zobrazeného na obrazovce se změní na zelenou:

   ![VitalControl: Test dosahu: Transpondér detekován](../images/transponder-detected.png "Transpondér detekován")

1. Pohybujte transpondérem několikrát tam a zpět na hranici čtecího pole. Tímto způsobem můžete určit čtecí dosah RFID skeneru v kombinaci s transpondéry, které používáte.

## Kontrola transpondéru {#transponder-check}

Provedením výše popsaného testu dosahu můžete také získat informace o transpondérech z různých zdrojů:

### Oficiální transpondérové ušní známky {#official-transponder-ear-tags}

1. Pokud používáte transpondérové ušní známky pro vaše zvířata, na kterých je zakódováno oficiálně přidělené 15místné číslo ušní známky zvířete, po přečtení transpondéru se na obrazovce zobrazí následující informace:

    - 15místné ID oficiálně přidělené vašemu zvířeti z vašeho národního systému identifikace zvířat.
    - Země, ve které se podnik nachází
    - Země, ve které se podnik nachází (pouze německé farmy)
    - Použitý přenosový protokol (FDX nebo HDX)
    <br>

    ![VitalControl: kontrola transpondérové ušní známky](../images/transponder-official.png "Info oficiální transpondérová ušní známka")

### Transpondéry od dodavatelů třetích stran {#transponders-from-third-party-vendors}

1. Pokud používáte transpondéry od dodavatelů třetích stran, jako je Urban, pro elektronickou identifikaci vašich zvířat, po přečtení transpondéru se na obrazovce zobrazí následující informace:

    - ID zakódované na transpondéru, počet číslic se liší v závislosti na výrobci
    - Výrobce transpondéru (pokud je uložen na transpondéru)
    - Použitý přenosový protokol (FDX nebo HDX)
    <br>

    ![VitalControl: kontrola transpondéru od výrobce](../images/transponder-manufacturer.png "Info transpondér od výrobce")
