---
title: "Список свіжих корів"
linkTitle: "Список свіжих корів"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: fresh-cows
description: >
  Полегшення контролю ваших свіжих корів.
categories: [Lists]
tags: [Lists, fresh cow]
translationKey: lists/fresh-cows
---
### Список свіжих корів {#fresh-cows-list}

{{% alert title="Пояснення" %}}
При управлінні свіжими коровами, щоденна перевірка тварин протягом кількох днів після народження вважається найкращою практикою. Список свіжих корів підтримує цей контроль, особливо в частині запису температури. Для кожної тварини показується стовпчаста діаграма за всі дні контрольного періоду, кожен день контрольного періоду представлений вертикальною смугою. Залежно від кольору смуги (зелений, жовтий або червоний), ви можете побачити, чи була виміряна нормальна, підвищена або критично підвищена температура в цей день для відповідної тварини.
{{% /alert %}}

Корови додаються до списку свіжих корів відразу після реєстрації їх отелення. Вони залишаються в цьому списку протягом певного періоду часу, тривалість цього періоду (в днях) можна налаштувати в [налаштуваннях](../../settings/data-acquisition/#control-period-of-fresh-cows).
 Наступні дії доступні для цього списку:

- [Повне меню дій](../alarm/#full-action-menu)
- [Дані тварини](../alarm/#animal-data)
- [Виміряти температуру](../alarm/#take-temperature)
- [Перемкнути статус тривоги](#toggle-alarm-status)
- [Перемкнути статус спостереження](#toggle-watch-status)
- [Приховати виміряних корів](#hide-measured-cows)
- [Пошук тварини](../alarm/#search-animal)
- [Встановити фільтр](../alarm/#set-filter)

{{% alert title="Підказка" %}}
Деякі дії виконуються так само, як і в [списку тривог](../alarm). Вони тут не пояснюються. Виконайте попередні кроки та використовуйте посилання відповідної дії, щоб перейти до інструкцій.
{{% /alert %}}

### Попередні кроки {#preliminary-steps}

1. Виберіть пункт меню <img src="/icons/main/lists.svg" width="25" align="bottom" alt="Lists" /> `{{<T "Lists" >}}` на головному екрані вашого пристрою VitalControl і натисніть кнопку `{{<T "Ok" >}}`.


2. Відкриється підменю, в якому відображаються різні списки. Виберіть список `{{<T "FreshCows" >}}` <img src="/icons/lists/freshcows.svg" width="30" align="bottom" alt="Fresh-cows" />. Підтвердіть, натиснувши `{{<T "Ok" >}}`.

3. Список свіжих корів тепер відкритий.

   ![VitalControl Lists Fresh cows list](../images/firststeps4.png "Fresh cow list")

### Перемикання статусу тривоги {#toggle-alarm-status}

1. Виконайте попередні кроки.

2. Використовуйте клавішу `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; для виклику спливаючого меню, яке відображає можливі дії при натисканні клавіші `{{<T "Ok" >}}`. Використовуйте клавіші зі стрілками △ ▽ для виділення дії `{{<T "ToggleAlarmStatus" >}}` і виберіть цю опцію, натиснувши центральну кнопку `{{<T "Ok" >}}` або клавішу `F3` `{{<T "Ok" >}}`.

3. У списку свіжих корів використовуйте клавіші зі стрілками △ ▽ для вибору потрібної тварини та підтвердіть, натиснувши `{{<T "Ok" >}}`. Альтернативно, ви можете шукати тварину. Використовуйте кнопку `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> і використовуйте клавіші зі стрілками ◁ ▷ △ ▽ для вибору потрібних цифр. Нарешті, підтвердіть, натиснувши `{{<T "Ok" >}}`.

4. Тварина тепер додана або видалена зі списку тривог залежно від її початкового статусу.

   ![VitalControl Lists Fresh cows list](../images/togglealarmstatus.png "Toggle alarm status")

### Перемикання статусу спостереження {#toggle-watch-status}

1. Виконайте попередні кроки.

2. Використовуйте клавішу `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; для виклику спливаючого меню, яке відображає можливі дії при натисканні клавіші `{{<T "Ok" >}}`. Використовуйте клавіші зі стрілками △ ▽ для виділення дії `{{<T "ToggleWatchStatus" >}}` і виберіть цю опцію, натиснувши центральну кнопку `{{<T "Ok" >}}` або клавішу `F3` `{{<T "Ok" >}}`.

3. У списку свіжих корів використовуйте клавіші зі стрілками △ ▽ для вибору потрібної тварини та підтвердіть, натиснувши `{{<T "Ok" >}}`. Альтернативно, ви можете шукати тварину. Використовуйте кнопку `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> і використовуйте клавіші зі стрілками ◁ ▷ △ ▽ для вибору потрібних цифр. Нарешті, підтвердіть, натиснувши `{{<T "Ok" >}}`.


4. Тварина тепер додана або видалена зі списку спостереження залежно від її початкового статусу.

   ![VitalControl Lists Fresh cows list](../images/togglewatchstatus.png "Toggle watch status")

### Приховати виміряних корів {#hide-measured-cows}

Якщо ця функція активована, тварини, для яких було проведено вимірювання температури, приховані у списку сухостійних корів. Якщо ця функція не активована, тварини залишаються видимими у списку.

1. Виконайте попередні кроки.

2. Використовуйте клавішу `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Actions" />&nbsp; для виклику спливаючого меню, яке містить різні опції. Використовуйте клавіші зі стрілками △ ▽ для виділення опції `{{<T "HideMeasuredCows" >}}` та перемикайте цю опцію, натискаючи центральну кнопку `{{<T "Ok" >}}` або клавішу `F3` `{{<T "Ok" >}}`.

3. У списку свіжих корів використовуйте клавіші зі стрілками △ ▽ для вибору бажаної тварини та підтвердіть вибір натисканням `{{<T "Ok" >}}`. Альтернативно, ви можете шукати тварину. Використовуйте кнопку `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> та використовуйте клавіші зі стрілками ◁ ▷ △ ▽ для вибору бажаних цифр. Нарешті, підтвердіть вибір натисканням `{{<T "Ok" >}}`.

4. Функція `{{<T "HideMeasuredCows" >}}` тепер активована. Активація вказується позначкою у полі.

   ![VitalControl Lists Fresh cows list](../images/hidemeasuredcows.png "Hide measured cows")
