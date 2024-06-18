---
title: "Aktualizacja oprogramowania urządzenia"
linkTitle: Aktualizacja
weight: 4
description: >
  Przeprowadzając aktualizację oprogramowania, można zaktualizować oprogramowanie urządzenia VitalControl do najnowszych dostępnych wersji.
---
Najpierw upewnij się, że dla Twojego urządzenia dostępna jest [nowsza wersja oprogramowania](../versions/) i, jeśli to konieczne, zaktualizuj oprogramowanie urządzenia zgodnie z poniższymi instrukcjami.

## Wymagane akcesorium {#required-accessory}

Aby zainstalować aktualizację na swoim urządzeniu, potrzebujesz podwójnego pendrive'a USB (2-w-1 USB stick) Type-C/USB 3.0 z złączem USB C i złączem USB A. Taki podwójny pendrive USB jest dostarczany razem z Twoim urządzeniem. Możesz również zakupić taki pendrive USB od różnych dostawców.

![Podwójny pendrive USB (USB A / USB C)](/images/firmware/update/usb-dual-stick.svg "Podwójny pendrive USB")

## Przygotowanie: pobierz najnowsze oprogramowanie {#preparation-download-latest-firmware}

1. Włóż pendrive USB do złącza USB swojego komputera. Następnie utwórz nowy katalog o nazwie 'update' w katalogu głównym pendrive'a.

    ![Windows Explorer: Pendrive USB z katalogiem 'update'](../images/create-folder-update.png "Pendrive USB: katalog 'update'")

1. Pobierz [plik oprogramowania](/download/firmware.vcu) (nazwa pliku: `firmware.vcu`) i zapisz go w wcześniej utworzonym katalogu `update` na pendrive USB. Plik aktualizacji wymaga około 2,5 MB miejsca na pendrive.

    ![Windows Explorer: Pendrive z plikiem oprogramowania 'firmware.vcu'](../images/save-firmware-file.png "Pendrive z plikiem oprogramowania")

1. Utwórz [kopię zapasową danych][] na swoim urządzeniu.

    {{% alert title="Info" %}}
Kopia zapasowa danych jest zalecanym środkiem ostrożności. Wszystkie istniejące dane zwierząt i urządzeń zostaną zachowane podczas aktualizacji oprogramowania urządzenia VitalControl.
    {{% /alert %}}

[data backup]: {{< relref "../backup/backup/" >}}

## Przeprowadź aktualizację oprogramowania {#perform-firmware-update}

1. Otwórz pozycję menu `{{<T "Device" >}}` na głównym ekranie swojego urządzenia VitalControl.


1. Wywołaj podmenu `{{<T "Service" >}}`, wybierz element menu `{{<T "FirmwareUpdate" >}}` i potwierdź `{{<T "Ok" >}}`. Teraz zostaniesz poproszony o włożenie przygotowanego wcześniej pendrive'a USB:

    ![VitalControl: ścieżka menu aktualizacji oprogramowania](../images/firmware-update.png "Aktualizacja oprogramowania")

1. Włóż pendrive USB (wtyczka C) do złącza na dole urządzenia i potwierdź `{{<T "Ok" >}}`.

    ![VitalControl: Włóż pendrive USB](/images/firmware/update/plug-in-dual-usb-stick.svg "Włóż pendrive USB")

    Urządzenie automatycznie przeprowadza aktualizację. Podczas aktualizacji wyświetlacz informuje o postępie aktualizacji. Po zakończeniu aktualizacji urządzenie uruchamia się ponownie i wyświetla komunikat o sukcesie po ponownym uruchomieniu:

   ![VitalControl: Komunikat o sukcesie aktualizacji oprogramowania](../images/update-success.png "Sukces aktualizacji oprogramowania")

   Nowe oprogramowanie jest teraz zainstalowane na Twoim urządzeniu.

