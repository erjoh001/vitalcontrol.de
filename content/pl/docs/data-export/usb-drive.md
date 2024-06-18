---
title: Eksport danych na pendrive USB
linkTitle: Na pendrive USB
date: 2023-07-20
weight: 10
description: >
  Eksportuj pliki danych CVS zawierające dane zwierząt i wartości pomiarowe przechowywane na urządzeniu VitalControl na pendrive USB.
categories: [Eksport danych]
tags: [Pliki CSV, Pendrive USB]
translationKey: data-export/usb-drive
---
{{% usb-drive/en "Aby wykonać eksport danych z urządzenia," %}}

## Wykonaj eksport danych {#perform-data-export}

1. Otwórz pozycję menu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Urządzenie" /> `{{<T "Device" >}}` na głównym ekranie urządzenia VitalControl.

2. Wywołaj podmenu `{{<T "DataManagement" >}}`, wybierz pozycję menu `{{<T "AnimalData" >}}` i potwierdź `{{<T "Ok" >}}`.

3. Otworzy się kolejne podmenu. Wybierz pozycję menu `{{<T "ExportAnimalData" >}}` i potwierdź `{{<T "Ok" >}}`.

4. Teraz zostaniesz poproszony o włożenie pendrive USB:

   ![VitalControl: Ścieżka menu eksportu danych](../images/data-export.png "Wywołaj eksport danych")

5. Włóż pendrive USB (wtyczka C) do złącza na dole urządzenia.

   ![VitalControl: włóż pendrive USB](/images/firmware/update/plug-in-dual-usb-stick.svg "Włóż pendrive USB")

6. Gdy urządzenie wykryje włożenie pendrive'a, eksport danych rozpocznie się automatycznie. Zapisanie danych kopii zapasowej może potrwać kilka sekund. Po zakończeniu eksportu danych wyświetli się komunikat o sukcesie:

   ![VitalControl: komunikat o sukcesie eksportu danych](../images/success-data-export.png "Sukces eksportu danych")

7. Eksport danych jest teraz zakończony. Znajdziesz cztery utworzone [pliki eksportu](../export-files/) w katalogu `export-csv` na swoim pendrive USB.

   ![Pendrive USB z plikami eksportu VitalControl](../images/export-files.png "Pliki eksportu na pendrive USB")

   {{% alert title="Uwagi" %}}
  - Aby zapobiec przypadkowemu nadpisaniu plików eksportu, nazwa każdego pliku eksportu zawsze zawiera datę i godzinę jego utworzenia. Upewnij się, że używasz najnowszej wersji plików eksportu, jeśli eksportowałeś dane zwierząt wielokrotnie.
  - Rozmiar plików eksportu zależy od liczby zwierząt na VitalControl i liczby wykonanych pomiarów. Zazwyczaj pliki eksportu zajmują tylko kilka kB miejsca na pendrive USB.
   {{% /alert %}}

Proszę wprowadzić treść Markdown do przetłumaczenia.
