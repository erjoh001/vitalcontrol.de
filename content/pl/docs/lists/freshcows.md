---
title: "Lista świeżych krów"
linkTitle: "Lista świeżych krów"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: fresh-cows
description: >
  Ułatw kontrolę swoich świeżych krów.
categories: [Lists]
tags: [Lists, fresh cow]
translationKey: lists/fresh-cows
---
### Lista świeżych krów {#fresh-cows-list}

{{% alert title="Wyjaśnienie" %}}
Podczas zarządzania świeżymi krowami, codzienne sprawdzanie zwierząt przez kilka dni po porodzie jest uważane za najlepszą praktykę. Lista świeżych krów wspiera tę kontrolę, szczególnie w zakresie rejestrowania temperatury. Dla każdego zwierzęcia wyświetlany jest wykres słupkowy obejmujący wszystkie dni okresu kontrolnego, każdy dzień okresu kontrolnego jest reprezentowany przez pionowy słupek. W zależności od koloru słupka (zielony, żółty lub czerwony), można zobaczyć, czy w danym dniu dla danego zwierzęcia zmierzono normalną, podwyższoną lub krytycznie podwyższoną temperaturę.
{{% /alert %}}

Krowy są umieszczane na liście świeżych krów natychmiast po zarejestrowaniu ich porodu. Pozostają na tej liście przez określony czas, długość tego okresu (w dniach) można dostosować w [ustawieniach](../../settings/data-acquisition/#control-period-of-fresh-cows).
 Dostępne są następujące działania dla tej listy:

- [Pełne menu akcji](../alarm/#full-action-menu)
- [Dane zwierzęcia](../alarm/#animal-data)
- [Zmierz temperaturę](../alarm/#take-temperature)
- [Przełącz status alarmu](#toggle-alarm-status)
- [Przełącz status obserwacji](#toggle-watch-status)
- [Ukryj zmierzone krowy](#hide-measured-cows)
- [Wyszukaj zwierzę](../alarm/#search-animal)
- [Ustaw filtr](../alarm/#set-filter)

{{% alert title="Wskazówka" %}}
Niektóre działania należy wykonać w taki sam sposób jak na [liście alarmów](../alarm). Nie są one tutaj wyjaśnione. Wykonaj wstępne kroki i użyj linku odpowiedniego działania, aby przejść do instrukcji.
{{% /alert %}}

### Wstępne kroki {#preliminary-steps}

1. Wybierz element menu <img src="/icons/main/lists.svg" width="25" align="bottom" alt="Lists" /> `{{<T "Lists" >}}` na głównym ekranie urządzenia VitalControl i naciśnij przycisk `{{<T "Ok" >}}`.

2. Otworzy się submenu, w którym wyświetlane są różne listy. Wybierz listę `{{<T "FreshCows" >}}` <img src="/icons/lists/freshcows.svg" width="30" align="bottom" alt="Fresh-cows" />. Potwierdź za pomocą `{{<T "Ok" >}}`.

3. Lista świeżych krów jest teraz otwarta.

   ![VitalControl Lists Fresh cows list](../images/firststeps4.png "Fresh cow list")

### Przełącz status alarmu {#toggle-alarm-status}

1. Wykonaj kroki wstępne.

2. Użyj klawisza `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; aby wywołać menu podręczne, które wyświetla możliwe akcje po naciśnięciu klawisza `{{<T "Ok" >}}`. Użyj klawiszy strzałek △ ▽, aby podświetlić akcję `{{<T "ToggleAlarmStatus" >}}` i wybierz tę opcję, naciskając środkowy przycisk `{{<T "Ok" >}}` lub klawisz `F3` `{{<T "Ok" >}}`.

3. Na liście świeżych krów użyj klawiszy strzałek △ ▽, aby wybrać żądane zwierzę i potwierdź za pomocą `{{<T "Ok" >}}`. Alternatywnie możesz wyszukać zwierzę. Użyj przycisku `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> i użyj klawiszy strzałek ◁ ▷ △ ▽, aby wybrać żądane cyfry. Na koniec potwierdź za pomocą `{{<T "Ok" >}}`.

4. Zwierzę jest teraz dodane lub usunięte z listy alarmowej w zależności od jego początkowego statusu.

   ![VitalControl Lists Fresh cows list](../images/togglealarmstatus.png "Toggle alarm status")

### Przełącz status obserwacji {#toggle-watch-status}

1. Wykonaj kroki wstępne.

2. Użyj klawisza `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; aby wywołać menu podręczne, które wyświetla możliwe akcje po naciśnięciu klawisza `{{<T "Ok" >}}`. Użyj klawiszy strzałek △ ▽, aby podświetlić akcję `{{<T "ToggleWatchStatus" >}}` i wybierz tę opcję, naciskając środkowy przycisk `{{<T "Ok" >}}` lub klawisz `F3` `{{<T "Ok" >}}`.

3. Na liście świeżych krów użyj klawiszy strzałek △ ▽, aby wybrać żądane zwierzę i potwierdź za pomocą `{{<T "Ok" >}}`. Alternatywnie możesz wyszukać zwierzę. Użyj przycisku `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> i użyj klawiszy strzałek ◁ ▷ △ ▽, aby wybrać żądane cyfry. Na koniec potwierdź za pomocą `{{<T "Ok" >}}`.

4. Zwierzę jest teraz dodane lub usunięte z listy obserwacyjnej w zależności od jego początkowego statusu.

   ![VitalControl Lists Fresh cows list](../images/togglewatchstatus.png "Przełącz status obserwacji")

### Ukryj zmierzone krowy {#hide-measured-cows}

Jeśli ta funkcja jest aktywowana, zwierzęta, dla których przeprowadzono pomiar temperatury, są ukrywane na liście krów zasuszonych. Jeśli ta funkcja nie jest aktywowana, zwierzęta pozostają widoczne na liście.

1. Wykonaj kroki wstępne.

2. Użyj klawisza `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Actions" />&nbsp; aby wywołać menu podręczne, które wyświetla różne opcje. Użyj klawiszy strzałek △ ▽, aby podświetlić opcję `{{<T "HideMeasuredCows" >}}` i przełącz tę opcję, naciskając środkowy przycisk `{{<T "Ok" >}}` lub klawisz `F3` `{{<T "Ok" >}}`.

3. W obrębie listy świeżych krów użyj klawiszy strzałek △ ▽, aby wybrać żądane zwierzę i potwierdź `{{<T "Ok" >}}`. Alternatywnie, możesz wyszukać zwierzę. Użyj przycisku `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> i użyj klawiszy strzałek ◁ ▷ △ ▽, aby wybrać żądane cyfry. Na koniec potwierdź `{{<T "Ok" >}}`.

4. Funkcja `{{<T "HideMeasuredCows" >}}` jest teraz aktywowana. Aktywacja jest wskazywana przez zaznaczenie pola.

   ![VitalControl Lists Fresh cows list](../images/hidemeasuredcows.png "Ukryj zmierzone krowy")
