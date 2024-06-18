---
title: Alarm
linkTitle: Alarm
slug: alarm
weight: 60
description: >
 Dodaj i usuń zwierzęta z listy alarmowej.
date: 2023-07-26
categories: [Actions]
tags: [Actions, Alarm]
translationKey: actions/alarm
---

## Alarm {#alert}

Za pomocą akcji `{{<T "Alarm" >}}` możesz dodać zwierzęta do listy alarmowej lub je z niej usunąć. Lista alarmowa pomaga szybciej i łatwiej znaleźć podejrzane zwierzęta, co ułatwia codzienne kontrole. Aby zastosować akcję `{{<T "Alarm" >}}`, postępuj w następujący sposób:

1. Na głównym ekranie urządzenia VitalControl wybierz pozycję menu `{{<T "Actions" >}}` &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> i naciśnij przycisk `{{<T "Ok" >}}`.

2. Zeskanuj zwierzę za pomocą transpondera lub wybierz zwierzę z listy. Potwierdź przyciskiem `{{<T "Ok" >}}` i wybierz zwierzę za pomocą klawiszy strzałek △ ▽. Potwierdź przyciskiem `{{<T "Ok" >}}`.

3. Otworzy się submenu z akcjami dla zwierząt. Użyj klawiszy strzałek ◁ ▷ △ ▽, aby wybrać &nbsp;<img src="/icons/actions/alarm.svg" width="35" align="bottom" alt="Add alarm" /> akcję `{{<T "Alarm" >}}` i potwierdź przyciskiem `{{<T "Ok" >}}`.

4. Pojawi się powiadomienie, że zwierzę zostało pomyślnie dodane do listy alarmowej, a wyświetlacz dla zwierzęcia w nagłówku zmieni się. Symbol &nbsp;<img src="/icons/header/animal-in-alarm.svg" width="32" align="bottom" alt="Animal in alarm" /> wskazuje, że to zwierzę znajduje się na liście alarmowej.

5. Możesz ponownie usunąć zwierzę z listy alarmowej, stosując ponownie &nbsp;<img src="/icons/actions/alarm-minus.svg" width="35" align="bottom" alt="Remove alarm" /> akcję `{{<T "Alarm" >}}`. Czy dodajesz, czy usuwasz zwierzę z listy alarmowej za pomocą akcji `{{<T "Alarm" >}}`, jest wskazywane małym znakiem + lub -.

{{< tabpane >}}
{{< tab header="Alert:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Actions Alarm](../images/alarm-scan.png "Alarm")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Actions Alarm](../images/alarm.png "Alarm")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Wskazówka" %}}
Jeśli ta akcja nie jest dostępna, prawdopodobnie została dezaktywowana! Aktywuj akcję w menu [ustawienia akcji](../setting/). Alternatywnie, zresetowanie wszystkich akcji przywróci tę akcję.
{{% /alert %}}
