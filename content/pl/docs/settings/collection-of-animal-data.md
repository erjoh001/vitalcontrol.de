---
title: "Pozyskiwanie danych"
linkTitle: "Pozyskiwanie danych"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: data-acquisition
description: >
 Przechowywanie odpowiednich ustawień do zbierania danych o zwierzętach
categories: [settings]
tags: [settings, data acquisition]
translationKey: settings/data-acquisition
maphilight: true
---
## Przegląd {#overview}

Poniższa grafika przedstawia dostępne ustawienia dotyczące rejestrowania danych o zwierzętach:

<img src="../images/animaldataacquisition.png" alt="Pozyskiwanie danych o zwierzętach" title="Pozyskiwanie danych o zwierzętach" usemap="#workmap-overview" class="maphilight" />

<map name="workmap-overview">
  <area shape="rect" coords="3,40,239,80" alt="Rejestrowanie wagi" title="Podmenu: Ustawienia rejestrowania wagi&#10;Kliknięcie myszą: otwórz dokumentację" href="#settings-weight-recording">
  <area shape="rect" coords="3,80,239,160" alt="Tryb oceny zwierząt" title="Ustaw tryb oceny zwierząt&#10;Kliknięcie myszą: otwórz dokumentację" href="#mode-of-animal-rating">
  <area shape="rect" coords="3,160,239,240" alt="Okres kontrolny świeżych krów" title="Ustaw długość okresu kontrolnego dla świeżych krów&#10;Kliknięcie myszą: otwórz dokumentację" href="#control-period-of-fresh-cows">

  <area shape="rect" coords="2,282,125,318" alt="Wstecz" title="Cofnij się o jeden poziom" href="/en/docs/settings/">
</map>

{{% alert title="Wskazówka" %}}
Przesuń wskaźnik myszy nad symbol na poniższej grafice i pozostaw go na chwilę. Pojawi się podpowiedź, prezentująca informacje o odpowiednim ustawieniu. Jeśli klikniesz na jedną z linii, zostaniesz przekierowany do opisu odpowiedniego ustawienia.
{{% /alert %}}

## Ustawienia *Rejestrowanie wagi* {#settings-weight-recording}

Poniższa grafika przedstawia dostępne ustawienia dotyczące rejestrowania wagi zwierząt:

<img src="../images/weightrecording.png" alt="Elementy podmenu ustawień rejestrowania wagi" title="Ustawienia rejestrowania wagi" usemap="#workmap-weight" class="maphilight" />

<map name="workmap-weight">
  <area shape="rect" coords="1,40,230,199" alt="Wartości progowe oceny dziennego przyrostu wagi" title="Ustaw wartości progowe oceny dziennego przyrostu wagi&#10;Kliknięcie myszą: otwórz dokumentację" href="#assessment-of-daily-weight-gain-threshold-values">
  <area shape="rect" coords="1,200,230,280" alt="Waga urodzeniowa" title="Ustaw proponowaną wagę urodzeniową przy rejestracji nowego zwierzęcia&#10;Kliknięcie myszą: otwórz dokumentację" href="#birth-weight">
  <area shape="rect" coords="1,280,230,360" alt="Średni dzienny przyrost wagi" title="Ustaw średni dzienny przyrost wagi używany przy szacowaniu wagi zwierząt&#10;Kliknięcie myszą: otwórz dokumentację" href="#average-daily-weight-gain">
  <area shape="rect" coords="1,360,230,440" alt="Precyzja rejestrowania wagi" title="Ustaw precyzję rejestrowania wagi&#10;Kliknięcie myszą: otwórz dokumentację" href="#precision-of-weight-recording">
</map>

### Ocena dziennego przyrostu masy ciała: Wartości progowe {#assessment-of-daily-weight-gain-threshold-values}

{{% alert title="Wskazówka" %}}
Czerwone pole pokazuje obszar "krytycznie zbyt niskiego przyrostu masy ciała". Żółte pole pokazuje obszar "suboptymalnego przyrostu masy ciała".
{{% /alert %}}

Aby dostosować wartości progowe do oceny dziennego przyrostu masy ciała, postępuj w następujący sposób:

1. Na głównym ekranie urządzenia VitalControl wybierz pozycję menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` i naciśnij przycisk `{{<T "Ok" >}}`.

2. Otworzy się podmenu, w którym wyświetlane są różne ustawienia. Użyj klawiszy strzałek △ ▽, aby wybrać `{{<T "DataAcquisition" >}}`. Potwierdź przyciskiem `{{<T "Ok" >}}`.

3. Otworzy się kolejne podmenu, w którym możesz użyć klawiszy strzałek △ ▽, aby przełączać się między polami ustawień `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` i `{{<T "ControlPeriodFreshCows" >}}`. Wybierz `{{<T "WeightRecording" >}}` i potwierdź przyciskiem `{{<T "Ok" >}}`.

4. Pole preferencji `{{<T "DailyWeightGain" >}}` zostanie automatycznie wybrane. Użyj klawiszy strzałek ◁ ▷, aby wybrać pożądany gatunek zwierzęcia. Potwierdź przyciskiem `{{<T "Ok" >}}`. Alternatywnie, możesz użyć ikony ołówka z klawiszem <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `F3`, aby przejść bezpośrednio do edycji czerwonych i żółtych obszarów.

5. Użyj klawiszy strzałek △ ▽, aby wybrać pożądany przyrost "większy niż" lub "równy" g/dzień w czerwonym i żółtym obszarze. Użyj klawiszy `F2`/`F3` 🡄 🡆 lub klawiszy strzałek ◁ ▷, aby przełączać się między czerwonym i żółtym obszarem.

6. Po ustawieniu pożądanego przyrostu "większego niż" lub "równego" g/dzień, użyj klawisza `F1` <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Exit" /> lub potwierdź przyciskiem `{{<T "Ok" >}}`, aby wrócić do `{{<T "DailyWeightGain" >}}`.

    ![VitalControl: menu ustawienia dziennego przyrostu masy ciała](../images/dailyweightgain.png "Dzienne przyrosty masy ciała")

### Masa urodzeniowa {#birth-weight}

Urządzenie używa masy urodzeniowej zapisanej tutaj w ustawieniach jako wartości domyślnej przy tworzeniu nowych zwierząt. Aby móc szybciej wybrać indywidualną masę urodzeniową nowo narodzonego zwierzęcia, może być konieczne dostosowanie tej wartości domyślnej dla Twojej farmy. Aby dostosować wartość dla `{{<T "BirthWeight" >}}`, postępuj w następujący sposób:

1. Na głównym ekranie urządzenia VitalControl wybierz pozycję menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` i naciśnij przycisk `{{<T "Ok" >}}`.

2. Otworzy się submenu, w którym wyświetlane są różne ustawienia. Użyj klawiszy strzałek △ ▽, aby wybrać `{{<T "DataAcquisition" >}}`. Potwierdź przyciskiem `{{<T "Ok" >}}`.

3. Otworzy się kolejne submenu, w którym możesz użyć klawiszy strzałek △ ▽, aby przełączać się między polami ustawień dla `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` i `{{<T "ControlPeriodFreshCows" >}}`. Wybierz `{{<T "WeightRecording" >}}` i potwierdź przyciskiem `{{<T "Ok" >}}`.

4. Użyj klawiszy strzałek △ ▽, aby wybrać pole ustawień `{{<T "BirthWeight" >}}` i użyj klawiszy strzałek ◁ ▷, aby ustawić pożądaną wagę urodzeniową. Urządzenie teraz używa zdefiniowanej tutaj wagi urodzeniowej jako standardowej przy tworzeniu nowych zwierząt. Indywidualna waga urodzeniowa nowo narodzonego zwierzęcia może być wtedy szybciej wybrana.

    ![VitalControl: menu ustawienia waga urodzeniowa](../images/birthweight.png "Waga urodzeniowa")

{{% alert title="Ostrzeżenie" color="warning" %}}
Standardowa waga urodzeniowa jest tylko wartością przybliżoną, która musi być indywidualnie dostosowana przy tworzeniu nowego zwierzęcia.
Jeśli nie chcesz dokonywać tej regulacji lub jeśli tworzysz zwierzęta automatycznie [w tle](../animal-registration/#auto-registration), waga urodzeniowa nie powinna być zapytana ani zapisana przy tworzeniu nowego zwierzęcia. Waga urodzeniowa nie powinna być zapytana ani zapisana przy tworzeniu nowego zwierzęcia. Można to zdefiniować w ustawieniach dla [rejestracji zwierząt](../animal-registration/#set-recorded-weights).
{{% /alert %}}

{{% alert title="Domyślne wartości wag urodzeniowych:" %}}

| Rodzaj nowego zwierzęcia      |  Jagnię        | Cielę         |
|-------------------------------|----------------|---------------| 
| Domyślna wartość *waga urodzeniowa*: | 4 kg           | 40 kg         |
| Zakres wartości :             | 1,0 do 99 kg   | 1,0 do 99 kg  |
{{% /alert %}}

### Średni dzienny przyrost wagi {#average-daily-weight-gain}

{{% alert title="Wyjaśnienie" %}}
Podczas [ważenia](../../actions/record-weight/) zwierzęcia, zdefiniowany dzienny przyrost jest używany do obliczenia sugerowanej wartości wagi podczas ważenia zwierzęcia. Jeśli sugerowana wartość wagi jest zbyt niska lub zbyt wysoka dla większości ważonych zwierząt, powinieneś dostosować zdefiniowaną wartość w dół lub w górę, odpowiednio, aby skrócić czas potrzebny na dostosowanie wartości wagi za pomocą klawiszy strzałek.
{{% /alert %}}

Aby ustawić `{{<T "AverageDailyWeightGain" >}}` używany w obliczeniach przybliżonej wagi zwierzęcia, postępuj w następujący sposób.

1. Na głównym ekranie urządzenia VitalControl wybierz pozycję menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` i naciśnij przycisk `{{<T "Ok" >}}`.

2. Otworzy się submenu, w którym wyświetlane są różne ustawienia. Użyj klawiszy strzałek △ ▽, aby wybrać `{{<T "DataAcquisition" >}}`. Potwierdź przyciskiem `{{<T "Ok" >}}`.

3. Otworzy się kolejne submenu, w którym możesz użyć klawiszy strzałek △ ▽, aby przełączać się między polami ustawień `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` i `{{<T "ControlPeriodFreshCows" >}}`. Wybierz `{{<T "WeightRecording" >}}` i potwierdź przyciskiem `{{<T "Ok" >}}`.

4. Użyj klawiszy strzałek △ ▽, aby wybrać pole ustawień `{{<T "AverageDailyWeightGain" >}}`. Użyj klawiszy strzałek ◁ ▷, aby ustawić pożądany średni dzienny przyrost g/dzień. Urządzenie teraz używa zdefiniowanego tutaj średniego dziennego przyrostu jako standardu dla oczekiwanego dziennego przyrostu zwierząt.

    ![VitalControl: menu settings average daily weight gain](../images/averagedailyweightgain.png "Średni dzienny przyrost wagi")

### Precyzja rejestrowania wagi {#precision-of-weight-recording}

{{% alert title="Explanation" %}}
W zależności od przypadku użycia i gatunku zwierzęcia (*jagnię*, *cielę*, *krowa*), istnieją różne wymagania dotyczące rozdzielczości wartości wagi, która ma być rejestrowana (dokładność *10 g*, *100 g* lub *1 kg*). Aby spełnić te wymagania, należy skorzystać z ustawienia *Maksymalna dokładność*.
{{% /alert %}}

Poniższa tabela pokazuje precyzję rejestrowania wagi w zależności od zakresu wagowego i ustawienia określonego dla *Maksymalna dokładność*:

| Ustawienie *Maksymalna precyzja*:          |  10 g | 100 g | 1 kg |
|--------------------------------------------|-------|-------|------|
| Precyzja w zakresie *0 do 9,9 kg*:         | 10 g  | 100 g | 1 kg |
| Precyzja w zakresie *10 do 49,9 kg*:       | 100 g | 100 g | 1 kg |
| Precyzja w zakresie *50 do 99,9 kg*:       | 500 g | 500 g | 1 kg |
| Precyzja dla wartości *≥ 100 kg*:          | 1 kg  | 1 kg  | 1 kg |

Aby ustawić maksymalną dokładność podczas rejestrowania wag zwierząt za pomocą urządzenia, postępuj w następujący sposób:

1. Na głównym ekranie urządzenia VitalControl wybierz pozycję menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` i naciśnij przycisk `{{<T "Ok" >}}`.

2. Otworzy się submenu, w którym wyświetlane są różne ustawienia. Użyj klawiszy strzałek △ ▽, aby wybrać `{{<T "DataAcquisition" >}}`. Potwierdź, naciskając `{{<T "Ok" >}}`.

3. Otworzy się kolejne submenu, w którym możesz użyć klawiszy strzałek △ ▽, aby przełączać się między polami ustawień `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` i `{{<T "ControlPeriodFreshCows" >}}`. Wybierz `{{<T "WeightRecording" >}}` i potwierdź, naciskając `{{<T "Ok" >}}`.

4. Użyj klawiszy strzałek △ ▽, aby wybrać pole ustawień `{{<T "MaximumPrecision" >}}`. Użyj klawiszy strzałek ◁ ▷, aby ustawić żądaną maksymalną precyzję. Dokładność rejestrowania wagi na urządzeniu będzie teraz zgodna z ustalonym ustawieniem.

    ![VitalControl: menu path settings maximum precision weight recording](../images/precisionweightrecording.png "Ustal maksymalną precyzję rejestrowania wagi.")

<br>
Zapisz ustawienia i wróć do głównego menu `{{<T "DataAcquisition" >}}`, naciskając klawisz `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.

## Tryb oceny zwierząt {#mode-of-animal-rating}

{{% alert title="Explanation" %}}
W trybie prostym podczas oceny zwierząt zapytuje się tylko o ogólny stan (zielony/żółty/czerwony). W rozszerzonej ocenie zapytuje się o 4 kategorie oceny: ogólny stan, spożycie paszy, biegunkę i choroby układu oddechowego.
{{% /alert %}}

Aby ustawić `{{<T "RatingAnimals" >}}` na swoim urządzeniu, postępuj w następujący sposób.

1. Na głównym ekranie urządzenia VitalControl wybierz pozycję menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` i naciśnij przycisk `{{<T "Ok" >}}`.

2. Otworzy się submenu, w którym wyświetlane są różne ustawienia. Użyj klawiszy strzałek △ ▽, aby wybrać `{{<T "DataAcquisition" >}}`. Potwierdź, naciskając `{{<T "Ok" >}}`.

3. Kolejne menu otwiera się, w którym możesz użyć klawiszy strzałek △ ▽, aby przełączać się między polami ustawień dla `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` i `{{<T "ControlPeriodFreshCows" >}}`. Wybierz `{{<T "RatingAnimals" >}}` i potwierdź przyciskiem `{{<T "Ok" >}}`.

4. Użyj klawiszy strzałek ◁ ▷, aby ustawić pożądaną ocenę zwierząt.

    ![VitalControl: menu ustawień średnia ocena zwierząt](../images/raitingofanimals.png "Ocena zwierząt")

## Okres kontroli świeżych krów {#control-period-of-fresh-cows}

{{% alert title="Wyjaśnienie" %}}
Podczas zarządzania świeżymi krowami, codzienne sprawdzanie zwierząt przez kilka dni po porodzie, w tym mierzenie ich temperatury, jest uważane za najlepszą praktykę. Czas trwania tego okresu kontroli znacznie różni się w zależności od gospodarstwa. Z tego powodu długość okresu kontroli można ustawić na wartość od 3 do 14 dni w ustawieniach VitalControl. Ustawiona wartość okresu kontroli świeżych krów określa liczbę kolumn wykresu kolumnowego wyświetlanego dla każdego zwierzęcia na [liście świeżych krów](../../lists/fresh-cows/).
{{% /alert %}}

Aby ustawić długość okresu kontroli dla swoich świeżych krów, postępuj w następujący sposób:

1. Na głównym ekranie urządzenia VitalControl wybierz pozycję menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Ustawienia" /> `{{<T "Settings" >}}` i naciśnij przycisk `{{<T "Ok" >}}`.

2. Otwiera się podmenu, w którym wyświetlane są różne ustawienia. Użyj klawiszy strzałek △ ▽, aby wybrać `{{<T "DataAcquisition" >}}`. Potwierdź przyciskiem `{{<T "Ok" >}}`.

3. Kolejne menu otwiera się, w którym możesz użyć klawiszy strzałek △ ▽, aby przełączać się między polami ustawień dla `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` i `{{<T "ControlPeriodFreshCows" >}}`. Wybierz `{{<T "ControlPeriodFreshCows" >}}` i potwierdź przyciskiem `{{<T "Ok" >}}`.

4. Użyj klawiszy strzałek ◁ ▷, aby ustawić pożądaną długość okresu kontroli w dniach po porodzie.

    ![VitalControl: menu ustawień okres kontroli świeżych krów](../images/controlperiodfreshcows.png "Okres kontroli świeżych krów")

<br>

Zapisz ustawienia i wróć do menu głównego <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` naciskając klawisz `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.
