---
title: "Konfiguracja technologii VitalControl:"
linkTitle: Konfiguracja
date: 2023-08-04T12:21:53+02:00
draft: false
description: >
  Zdefiniuj parametry synchronizacji dla wymiany danych między oprogramowaniem *Herde* a urządzeniem VitalControl.
weight: 10
categories: [DSP Herde]
translationKey: DSPherde/installation
---
Przed pierwszą [wymianą danych](../data-exchange/), należy utworzyć i skonfigurować połączenie technologiczne z urządzeniem VitalControl.

{{% alert title="Uwaga" %}}
Przed skonfigurowaniem połączenia technologicznego sprawdź, czy na Twoim komputerze jest zainstalowane oprogramowanie 'VCSynchronizer'; jest ono niezbędne do wymiany danych. Aby to zrobić, otwórz menu Start systemu Windows i poszukaj w liście aplikacji wpisu o nazwie 'Urban VitalControl'. Jeśli nie możesz znaleźć takiego wpisu, [zainstaluj](../../vcsynchronizer/installation/) oprogramowanie `VCSynchronizer` na swoim komputerze.
{{% /alert %}}

Aby skonfigurować technologię, postępuj zgodnie z poniższymi krokami:

## Utwórz nowy zestaw parametrów do wymiany danych z urządzeniem VitalControl {#create-new-parameter-set-for-data-exchange-with-vitalcontrol-device}

1. W oprogramowaniu `Herde` otwórz okno `Ustawienia`. W zależności od konfiguracji interfejsu użytkownika, możesz otworzyć to okno poprzez element menu `Organizacja` w menu głównym (element najwyższego poziomu _Ustawienia_), w menu bocznym lub w dostosowanym pasku narzędzi (poziomym lub pionowym).

   ![Oprogramowanie Herde: wywołanie menu ustawień](../screenshots/settings.png "Herde: wywołaj Ustawienia")

1. Otworzy się okno pop-up `Ustawienia`, w którego lewym pasku bocznym znajduje się wiele kategorii ustawień. Otwórz kategorię `Serwis` ➊ i wybierz podkategorię `Technologia` ➋.

1. W nagłówku głównego obszaru po prawej stronie pojawi się teraz rozwijane menu, w którym wymienione są wszystkie zdefiniowane zestawy parametrów technologii. Po prawej stronie wyświetlana jest liczba skonfigurowanych technologii. Kliknij przycisk ![Oprogramowanie Herde: Utwórz nowy zestaw parametrów technologii](/icons/new.png "Herde: Utwórz połączenie technologiczne") `Utwórz nowy zestaw parametrów technologii` ➌.

![Software Herde: settings screen for technology](../screenshots/settings-technology.png "Herde: Settings for Technology")

1. Otworzy się kolejne okno. Wprowadź `VitalControl` jako **Nazwa połączenia** i `Urban VitalControl (Gen 2)` jako **Typ technologii**, a następnie kliknij przycisk `Akceptuj`.

   ![Software Herde: Create new parameter set for VitalControl device](../screenshots/new-technology.png "Create new technology: VitalControl").

   Zestaw parametrów dla technologii `VitalControl` jest teraz utworzony i musi zostać skonfigurowany w kolejnych krokach.

## Konfiguracja: Ustawienia podstawowe {#configuration-basic-settings}

Początkowo wybrana jest zakładka `Ustawienia podstawowe` na wyświetlonym ekranie, jak pokazano na poniższym rysunku. Dokonaj tam dostosowań w kategoriach `Program zewnętrzny` ➊, `Dane zwierząt` ➋, `Lokalizacje` ➌ i `Opuszczanie` ➍ zgodnie z warunkami specyficznymi dla Twojego gospodarstwa.

   ![Software Herde: Configuration of basic settings](../screenshots/basic-settings.png "Technology VitalControl: Basic settings").
   
### Kategoria `Program zewnętrzny` ➊ {#category-external-program-}

Aby przeprowadzić wymianę danych między VitalControl a Herde Plus, potrzebny jest podstawowy program [VitalControl Synchronizer](../../vcsynchronizer) jako zewnętrzny program pomocniczy. Dla prawidłowego działania tego programu, należy dokonać pewnych dostosowań w kategorii `Program zewnętrzny` ➊.

- **Nazwa urządzenia do wymiany danych**:  
  Domyślnie to pole jest puste. Zaleca się jednak wprowadzenie tutaj nazwy Twojego komputera. Aby to zrobić, naciśnij ikonę ![Herde Software: Create new technology coupling](/icons/arrow-down.png "Herde: Create technology coupling") `Strzałka w dół` na prawym końcu pola rozwijanego. Nazwa Twojego komputera zostanie teraz określona i wyświetlona do wyboru na liście rozwijanej. Gdy pole zostanie wypełnione nazwą Twojego komputera i to ustawienie zostanie zapisane, wymiana danych będzie mogła być uruchamiana tylko z Twojego komputera.

- **Wykonaj w ścieżce**:
  Proszę wprowadzić `%LOCALAPPDATA%\Urban\VitalControl\Synchronizer` do tego pola wejściowego. Jest to ścieżka bezwzględna do programu `VitalControl Synchronizer` (a dokładniej do pliku `vcsynchronizer.exe`). Jeśli katalog docelowy dla tego programu został zmieniony podczas [instalacji VCSynchronizer](../../vcsynchronizer/installation), proszę wprowadzić tutaj wybrany katalog docelowy.


- **Program HerdePlus 🡒 Technology**:  
  To pole wprowadzania musi być wypełnione wartością `vc_imp.bat`. Odpowiednio nazwany plik wsadowy określa kolejność operacji podczas importu danych.

- **Technology 🡒 Program HerdePlus**:  
  To pole wprowadzania musi być wypełnione wartością `vc_exp.bat`. Odpowiednio nazwany plik wsadowy określa kolejność operacji podczas eksportu danych.

### Kategoria `Dane zwierząt` ➋ {#category-animal-data-}

Dalsze dostosowania muszą zostać dokonane w kategorii 'Dane zwierząt' ➋, aby wymiana danych była w pełni funkcjonalna.

- **Numer zwierzęcia**:  
  To ustawienie określa, jakie ID otrzymują zwierzęta do wyświetlania na urządzeniu VitalControl:
  - Jeśli przypisałeś krótkie ID (`Numer stajni`, 2 do 6 cyfr) swoim zwierzętom, powinieneś wybrać tutaj wartość 'Numer stajni': wyświetlane ID zwierzęcia na VitalControl będzie wtedy odpowiadać numerowi stajni przypisanemu zwierzęciu.
  - Jeśli **nie** przypisałeś krótkich numerów ID swoim zwierzętom - co jest powszechne w sektorze tuczu, na przykład - powinieneś wybrać tutaj wartość `Numer kolczyka (5 cyfr)`. Wyświetlane ID zwierzęcia na urządzeniu VitalControl będzie wtedy odpowiadać ostatnim 5 cyfrom ID wydrukowanego na żółtym kolczyku zwierzęcia.
  
<br>

- **Numer nadajnika**:  
  To ustawienie określa numer oczekiwany dla zwierzęcia podczas skanowania RFID:  
  - Jeśli zakładasz obrożę z transponderem na swoje zwierzęta lub zakładasz transponder na ucho swoich zwierząt - na przykład do identyfikacji przy automatycznym karmniku - powinieneś wybrać tutaj wartość 'Transponder'.
  - Jeśli twoje zwierzęta lub cielęta noszą elektroniczne kolczyki zakodowane oficjalnym krajowym 15-cyfrowym numerem identyfikacyjnym zwierzęcia, który będzie służył do identyfikacji zwierzęcia przez całe jego życie, powinieneś wybrać tutaj wartość 'Numer kolczyka (15 cyfr)`.

<br>

- **Minimalny wiek do transferu**:  
  Jeśli jako wartość dla tego pola wprowadzania zostanie wprowadzone `0`, **wszystkie zwierzęta** zostaną przeniesione na urządzenie VitalControl, niezależnie od ich wieku. Wartość większa niż `0` definiuje minimalny wiek (w dniach) dla zwierząt do przeniesienia. Na przykład, jeśli **tylko krowy** mają być przeniesione na urządzenie, wartość 600 dni (= 20 miesięcy) musi zostać wprowadzona tutaj jako minimalny wiek.

### Kategoria `Lokalizacje` ➌ {#category-locations-}

Użyj tej kategorii, aby wykluczyć zwierzęta z określonych lokalizacji z transferu danych na urządzenie. Aby to zrobić, usuń zaznaczenie lokalizacji, dla których **nie** chcesz przenosić zwierząt tam przebywających na urządzenie.

### Kategoria `Opuszczanie` ➍ {#category-leaving-}

Zaznacz tutaj opcję 'Opuszczanie w HERDEplus'. W ten sposób określasz, że zwierzęta, które opuściły stado, są również usuwane z urządzenia VitalControl podczas synchronizacji.
Zaznacz również opcję 'Nie istnieje w magazynie'. W ten sposób określasz, że zwierzęta na VitalControl, które nie są znane oprogramowaniu `Herde`, są usuwane z VitalControl podczas synchronizacji.

## Konfiguracja: Ustawienia specyficzne dla technologii {#configuration-technology-specific-settings}

Następnie kliknij na zakładkę `Ustawienia specyficzne dla technologii`, aby określić zakres wymiany danych. Zaleca się zaznaczenie wszystkich pól wyboru tam wymienionych, z wyjątkiem pola wyboru `Zapisz plik importu po przetworzeniu`. To ostatnie pole wyboru jest przeznaczone do celów diagnostycznych i powinno być zaznaczone tylko na żądanie personelu serwisowego.

- **Maksymalny wiek do transferu**:  
  Jeśli jako wartość zostanie wprowadzone `0`, **wszystkie zwierzęta** zostaną przeniesione na urządzenie VitalControl, niezależnie od ich wieku. Wartość większa niż `0` definiuje maksymalny wiek (w dniach) dla zwierząt do przeniesienia. Jeśli na przykład **tylko cielęta** mają być przeniesione na urządzenie, należy tutaj wprowadzić wartość 90 dni (= 3 miesiące) jako maksymalny wiek.

   ![Oprogramowanie Herde: Konfiguracja wymiany danych](../screenshots/technology-specific-settings.png "Wymiana danych: ustawienia specyficzne").

## Zapisz ustawienia wymiany danych {#save-data-exchange-settings}

Naciśnij klawisz `Zapisz (F2)` po odpowiednim skonfigurowaniu wszystkich parametrów konfiguracji. Zestaw parametrów do wymiany danych z urządzeniem VitalControl jest teraz zapisany i gotowy do użycia.  
Wykonaj teraz [wymianę danych](../data-exchange/), aby sprawdzić, czy określone ustawienia są prawidłowe, abyś mógł pomyślnie wymieniać dane z urządzeniem VitalControl i z powrotem.


