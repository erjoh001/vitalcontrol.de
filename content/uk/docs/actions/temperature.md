---
title: Вимірювання температури
linkTitle: Температура
slug: measure-temperature
weight: 10
description: >
  Вимірювання температури у ваших тварин.
date: 2023-07-26
Categories: [Actions]
tags: [Actions, fever, temperature]
translationKey: actions/temperature
---

## Вимірювання температури {#measure-fever}

Використовуйте дію вимірювання температури для вимірювання температури ваших тварин. Вставте вимірювальний наконечник ректально до вказаної глибини вимірювання (для великих тварин всю довжину до виступу, для дрібних жуйних приблизно 6 см або 2/3 вимірювального наконечника). Процес вимірювання відбувається автоматично. Як тільки процес вимірювання завершено, пристрій відображає виміряну температуру. Колірне кодування вказує, чи знаходиться температура в зеленій, жовтій або червоній зоні. У вас є кілька варіантів під час кампанії "Вимірювання температури":

- [Зберегти результат](#save-result) для документування вимірювання конкретної тварини
- Додати тварину до [Списку спостереження](#put-on-the-watch-list). Це полегшує перевірку повторень, оскільки ви можете викликати цих тварин за допомогою "списку спостереження" і таким чином легше знайти помітних тварин.
- Увімкнути та вимкнути [Освітлення місця вимірювання](#lighting-of-the-measurement-location-on-and-off)
- [Повторити вимірювання](#repeat-the-measurement)
- [Скасувати дію](#cancel-the-action)

{{% alert title="Підказка" %}}
Якщо температура знаходиться в жовтій зоні ("підвищена") або червоній зоні ("лихоманка"), VitalControl автоматично додає вибрану тварину до списку тривоги. Корелюючи з іншими даними, ви можете постійно контролювати здоров'я окремої тварини.
{{% /alert %}}

### Попередні кроки {#preliminary-steps}

1. На головному екрані вашого пристрою VitalControl виберіть пункт меню &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` і натисніть кнопку `{{<T "Ok" >}}`.

2. Або скануйте тварину за допомогою транспондера, або виберіть тварину зі списку. Підтвердіть `{{<T "Ok" >}}` і виберіть тварину за допомогою клавіш зі стрілками △ ▽. Підтвердіть `{{<T "Ok" >}}`.


3. Відкривається підменю з діями тварини. Дія <img src="/icons/actions/temperature.svg" width="10" align="bottom" alt="Temperature" /> `{{<T "Temperature" >}}` автоматично вибирається. Підтвердьте за допомогою `{{<T "Ok" >}}`.

4. Тепер проведіть вимірювання. Як тільки вимірювання завершено, температура виділяється синім, зеленим, жовтим або червоним кольором, залежно від встановленого порогу.

{{< tabpane >}}
{{< tab header="Попередні кроки:" text=true disabled=true />}}
{{% tab header="Сканування транспондера" text=true %}}
![VitalControl: Menu Actions Preliminary steps](../images/firststeps-scan.png "Попередні кроки")
{{% /tab %}}
{{% tab header="Ручний вибір зі списку" text=true %}}
![VitalControl: Menu Actions Preliminary steps](../images/firststeps.png "Попередні кроки")
{{% /tab %}}
{{< /tabpane >}}

### Зберегти результат {#save-result}

1. Завершіть попередні кроки.

2. Використовуйте клавішу `F3` <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> або підтвердьте за допомогою `{{<T "Ok" >}}`, щоб зберегти результат.

    ![VitalControl: Menu Actions Save results](../images/saveresults.png "Зберегти результати")

### Додати до списку спостереження {#put-on-the-watch-list}

1. Завершіть попередні кроки.

2. Натисніть середню верхню кнопку `Увімк./Вимк.` <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.

3. Відкривається спливаюче меню, в якому ви можете вибрати з пунктів меню `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` або `{{<T "Flashlight" >}}`. Використовуйте клавіші зі стрілками △ ▽, щоб вибрати `{{<T "AddToWatchList" >}}` і натисніть центральну клавішу `{{<T "Ok" >}}` або клавішу `F3` `{{<T "Ok" >}}`.

    ![VitalControl: Menu Actions Put on watch list](../images/watchlist.png "Додати до списку спостереження")

### Увімкнення та вимкнення освітлення місця вимірювання {#lighting-of-the-measurement-location-on-and-off}

1. Завершіть попередні кроки.

2. Натисніть середню верхню кнопку `Увімк./Вимк.` <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.


3. Відкриється спливаюче меню, в якому ви можете вибрати з пунктів меню `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` або `{{<T "Flashlight" >}}`. Використовуйте клавіші зі стрілками △ ▽ для вибору `{{<T "Flashlight" >}}` і натисніть центральну клавішу `{{<T "Ok" >}}` або клавішу `F3` `{{<T "Ok" >}}`.

    ![VitalControl: Menu Actions Flashlight on off](../images/light.png "Flashlight on off")

### Повторити вимірювання {#repeat-the-measurement}

1. Виконайте попередні кроки.

2. Натисніть верхню середню кнопку `On/Off` <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.

3. Відкриється спливаюче меню, в якому ви можете вибрати з пунктів меню `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` або `{{<T "Flashlight" >}}`. Використовуйте клавіші зі стрілками △ ▽ для вибору `{{<T "RepeatMeasurement" >}}` і натисніть центральну клавішу `{{<T "Ok" >}}` або клавішу `F3` `{{<T "Ok" >}}`.

    ![VitalControl: Menu Actions Light on off](../images/repeat.png "Light on off")

### Скасувати дію {#cancel-the-action}

1. Виконайте попередні кроки.

2. Натисніть клавішу `F1` <img src="/icons/footer/cancel.svg" width="25" align="bottom" alt="Cancel" /> для скасування дії.

    ![VitalControl: Menu Actions Cancel the action](../images/saveresults.png "Cancel the action")

{{% alert title="Підказка" %}}
Якщо ця дія недоступна, можливо, вона була деактивована! Активуйте дію в меню [налаштувань дій](../setting/). Альтернативно, скидання всіх дій поверне цю дію.
{{% /alert %}}
