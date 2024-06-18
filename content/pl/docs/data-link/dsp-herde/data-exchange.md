---
title: Wymiana danych między VitalControl a oprogramowaniem zarządzania stadem Herde
linkTitle: Wymiana danych
date: 2023-08-04T12:22:12+02:00
draft: false
description: >
  Synchronizuj zwierzęta przechowywane na urządzeniu VitalControl ze zwierzętami zarządzanymi przez oprogramowanie *Herde* i przenoś zmierzone wartości zarejestrowane za pomocą urządzenia VitalControl do oprogramowania *Herde*.
weight: 20
categories: [Wymiana danych, DSP Herde]
translationKey: DSPherde/data-exchange
---
Postępuj zgodnie z poniższymi krokami, aby zsynchronizować dane między oprogramowaniem `Herde` a urządzeniem VitalControl:

### Podłącz VitalControl do komputera {#connect-vitalcontrol-to-pc}

1. Podłącz urządzenie VitalControl do komputera lub laptopa za pomocą dostarczonego kabla USB.

   ![Podłącz VitalControl do komputera lub laptopa](/images/synchronisation/connect-to-pc.svg "Podłącz VitalControl do komputera")

1. Upewnij się, że urządzenie VitalControl jest włączone.

### Wykonaj wymianę danych {#perform-data-exchange}

1. W oprogramowaniu `Herde` wykonaj pełną wymianę danych. W zależności od konfiguracji interfejsu użytkownika, możesz wywołać tę wymianę za pomocą pozycji menu `Pełna wymiana danych` w menu głównym (najwyższy poziom _Technologia_), w menu bocznym lub w dostosowanym pasku narzędzi (poziomym lub pionowym).

   ![Oprogramowanie Herde: Wywoływanie pełnej wymiany danych](../screenshots/data-exchange.png "Herde: Wywoływanie wymiany danych")

1. Otworzy się okno pop-up, w którym w bocznym pasku po lewej stronie wyświetlane są określone połączenia technologiczne. Kliknij przycisk oznaczony `VitalControl`, aby rozpocząć wymianę danych:

   ![Oprogramowanie Herde, Rozpoczynanie wymiany danych](../screenshots/start-transfer.png "Herde: Rozpocznij wymianę danych")

1. Przy pierwszej wymianie danych pojawi się ostrzeżenie, wskazujące, że na urządzeniu VitalControl nie ma jeszcze zarejestrowanych zwierząt. Potwierdź to powiadomienie przyciskiem `Tak`. Następnie rozpocznie się wymiana danych.

   ![Oprogramowanie Herde, wymiana danych: ostrzeżenie](../screenshots/warning.png "Wymiana danych: ostrzeżenie")

1. Wymiana danych jest procesem dwuetapowym: W pierwszym kroku ➊ dane zwierząt są przenoszone z oprogramowania `Herde` do VitalControl. W drugim kroku ➋, dane pomiarowe zebrane za pomocą VitalControl są przenoszone do oprogramowania `Herde`. Liczba zaimportowanych zestawów danych (zwierzęta, porody, alerty i wagi) jest wyświetlana w oknie pop-up:

![Wymiana danych z oprogramowaniem Herde: Przebieg działań](../screenshots/data-transfer.png "Wymiana danych: Przebieg działań")

1. Pomyślne zakończenie wymiany danych jest sygnalizowane poprzez wyskakujące okienko z komunikatem o sukcesie.

   ![Oprogramowanie Herde: Komunikat o sukcesie wymiany danych](../screenshots/success-message.png "Herde: Komunikat o sukcesie wymiany danych")

    {{% alert title="Uwaga" %}}
Jeśli na urządzeniu VitalControl zarejestrowanych jest wiele zwierząt, wymiana danych może zająć trochę czasu. Postęp transferu danych można zobaczyć na wyświetlaczu urządzenia.

![VitalControl, wymiana danych: pasek postępu](../../vcsynchronizer/images/import-animals/data-transfer.png "VitalControl: pasek postępu wymiany danych")
    {{% /alert %}}
