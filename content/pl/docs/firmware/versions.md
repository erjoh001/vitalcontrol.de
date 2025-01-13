---
title: "Najnowsze wersje oprogramowania"
linkTitle: "Najnowsze wersje"
date: 2023-07-18T12:47:29+02:00
draft: false
weight: 10
description: >
 Lista aktualnych wersji oprogramowania dla urządzenia VitalControl.
---

## Określenie wersji oprogramowania zainstalowanych na urządzeniu {#determine-firmware-versions-installed-on-your-device}

1. Otwórz pozycję menu <img src="/icons/device.svg" width="25" align="bottom" alt="Device" /> `{{<T "Device" >}}` na głównym ekranie urządzenia VitalControl.

2. Wejdź do podmenu `{{<T "Info" >}}`, wybierz pozycję menu `{{<T "Software" >}}` i potwierdź `{{<T "Ok" >}}`. Otworzy się okno pop-up, które wyświetli aktualnie zainstalowane wersje oprogramowania na Twoim urządzeniu:

![VitalControl: określenie wersji oprogramowania](../images/firmware-versions.png "Wyświetlanie wersji oprogramowania")

## Najnowsze wersje oprogramowania: {#latest-firmware-versions}

Poniższa tabela przedstawia aktualne wersje oprogramowania:

|                 | GUI-Firmware  | Middleware  | Bootloader |
|-----------------|:-------------:|:-----------:|:----------:|
| **Wersja**     | {{% version/firmware component="gui" %}} | {{% version/firmware component="middleware" %}} | {{% version/firmware component="bootloader" %}} |
| **Data**       | {{% version/firmware component="gui-date" %}} | {{% version/firmware component="middelware-date" %}} | {{% version/firmware component="bootloader-date" %}} |
| **Commit Hash** | {{% version/firmware component="gui-commitHash" %}} | {{% version/firmware component="middelware-commitHash" %}} |  {{% version/firmware component="bootloader-commitHash" %}} |
| **Commit №**    | {{% version/firmware component="gui-commitNo" %}} | {{% version/firmware component="middelware-commitNo" %}} | {{% version/firmware component="bootloader-commitNo" %}}|

{{% alert title="Wskazówka" %}}
Jeśli brakuje Ci nowszych funkcji na Twoim urządzeniu lub napotykasz problemy ze stabilnością, zaleca się [zaktualizowanie](../update/) oprogramowania na urządzeniu do najnowszej wersji.
{{% /alert %}}
