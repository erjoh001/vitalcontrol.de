---
title: Eksport danych zwierząt i pomiarów do komputera zarządzającego farmą
linkTitle: Eksport danych (PC)
date: 2023-07-19
weight: 15
description: >
 Eksportuj dane zwierząt i wartości pomiarów z urządzenia VitalControl do kilku plików CVS
kategorie: [Eksport danych]
translationKey: farmPC
---
Postępuj zgodnie z poniższymi krokami, aby wyeksportować dane z VitalControl do urządzenia pamięci masowej w Twoim komputerze:

### Podłącz VitalControl do komputera {#connect-vitalcontrol-to-pc}

1. Podłącz urządzenie VitalControl do komputera lub laptopa za pomocą dołączonego kabla USB.

   ![Podłącz VitalControl do komputera lub laptopa](/images/synchronisation/connect-to-pc.svg "Podłącz VitalControl do komputera")

1. Upewnij się, że urządzenie VitalControl jest włączone.

### Wykonaj eksport danych {#perform-data-export}

1. Naciśnij klawisz Windows, aby otworzyć menu Start

1. *Tylko Windows 11*: Kliknij przycisk `Wszystkie aplikacje`

1. Na liście zainstalowanych aplikacji przewiń do litery `U`. Tam powinieneś znaleźć wpis menu `Urban VitalControl`. W razie potrzeby rozwiń ten wpis, aby wyświetlić wszystkie podmenu.

   {{% alert title="Uwaga" %}}
Jeśli nie możesz znaleźć wpisu `Urban VitalControl` na liście aplikacji, może być konieczne [zainstalowanie](../vcsynchronizer/installation/) oprogramowania `VCSynchronizer` na Twoim komputerze.
   {{% /alert %}}

1. Kliknij na pozycję menu `Eksport danych (CVS)`.

   ![Menu Start systemu Windows, wpis menu dla Urban VitalControl (VCSynchronizer)](../vcsynchronizer/images/data-export/data-export.png "Menu Start systemu Windows, VitalControl")

1. Proces eksportu zostanie uruchomiony. Po zakończeniu eksportu danych otworzy się okno Eksploratora, które wyświetli lokalny katalog danych z czterema nowo utworzonymi [plikami eksportu](../../data-export/export-files/).

   ![Lokalny katalog danych z plikami eksportu](../../data-export/images/export-files.png "Pliki eksportu, lokalnie przechowywane")

   {{% alert title="Uwaga" %}}
  Możesz otworzyć każdy z tych czterech [plików eksportu](../../data-export/export-files/) w programie arkusza kalkulacyjnego według własnego wyboru (takim jak [Microsoft Excel](https://products.office.com/excel) lub [OpenOffice Calc](https://www.openoffice.org/)) i przeprowadzić zaawansowaną analizę danych. Jako przykład poniżej przedstawiono widok tabeli `animals.csv` w programie arkusza kalkulacyjnego:


  ![Eksportowana tabela danych zwierząt otwarta w oprogramowaniu arkusza kalkulacyjnego](../../data-export/images/animals.png "Oprogramowanie arkusza kalkulacyjnego z danymi zwierząt")
   {{% /alert %}}
