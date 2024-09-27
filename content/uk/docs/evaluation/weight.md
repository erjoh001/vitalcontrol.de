---
title: Оцінка ваги
linkTitle: Оцінка ваги
slug: weight
weight: 10
description: >
 Оцініть ваші збережені дані в розділі Вага.
date: 2023-07-26
categories: [Evaluation]
tags: [Evaluation, weight]
translationKey: evaluation/weight
maphilight: true
---
{{% alert title="Hint" %}}
У налаштуваннях за замовчуванням всі тварини, збережені на VitalControl, включені в оцінку. Використовуючи [фільтр](../../filter/), ви можете обмежити оцінку до підмножини тварин на вашому пристрої, наприклад, тільки до самців або до тварин до певного максимального віку.
{{% /alert %}}

{{% alert title="Hint" %}}
Якщо ви натиснете на пункт меню, ви будете перенаправлені до опису відповідної функції.
{{% /alert %}}

<img src="../images/imagemap.png" alt="VitalControl Evaluation" title="Weight" usemap="#workmap" class="maphilight" />

<map name="workmap">
   <area shape="rect" coords="3,40,116,160" alt="Сьогоднішнє зважування" title="Оцініть вагові значення ваших тварин, записані за допомогою VitalControl на поточний день&#10;Клацання миші: до документації" href="/uk/docs/evaluation/weight/#todays-weighings">
   <area shape="rect" coords="116,40,238,160" alt="Вага при народженні" title="Оцініть ваші збережені ваги при народженні&#10;Клацання миші: до документації" href="/uk/docs/evaluation/weight/#birth-weights">
   <area shape="rect" coords="3,160,116,279" alt="Розвиток ваги" title="Оцініть розвиток ваги ваших тварин&#10;Клацання миші: до документації" href="/uk/docs/evaluation/weight/#weight-development">

   <area shape="rect" coords="150,282,238,319" alt="Фільтр" title="Встановити фільтр&#10;Клацання миші: до документації" href="/uk/docs/filter">
   <area shape="rect" coords="2,282,95,319" alt="Назад" title="Повернутися на один рівень назад&#10;Клацання миші: до документації" href="/uk/docs/evaluation/">
</map>

## Сьогоднішнє зважування {#todays-weighings}
У цій оцінці ви можете побачити наступну інформацію, пов'язану зі зважуванням за останні 6 годин:
- Середня вага тварини
- Середній щоденний приріст з моменту народження
- Середнє щоденне збільшення з моменту останнього зважування
- Подвоєння ваги при народженні після X днів

Для виконання оцінки виконайте наступні дії:

1. На головному екрані вашого пристрою виділіть іконку &nbsp;<img src="/icons/main/evaluation.svg" width="50" align="bottom" alt="Evaluate" />&nbsp; `{{<T "Evaluation" >}}`. Підтвердіть, натиснувши `{{<T "Ok" >}}`.

2. Відкриється інше підменю, в якому ви можете використовувати клавіші зі стрілками △ ▽ ◁ ▷ для вибору між пунктами меню `{{<T "Weight" >}}`, `{{<T "Temperature" >}}`, `{{<T "Rating" >}}` та `{{<T "Mortality" >}}`. Виберіть &nbsp;<img src="/icons/evaluation/weight.svg" width="40" align="bottom" alt="Weight" />&nbsp; `{{<T "Weight" >}}` і підтвердіть, натиснувши `{{<T "Ok" >}}`.

3. Тепер з'являться опції оцінки для розділу Вага. Виберіть опцію оцінки &nbsp;<img src="/icons/evaluation/weighingtoday.svg" width="50" align="bottom" alt="Today's weighing" />&nbsp; `{{<T "WeighingToday" >}}` і підтвердіть, натиснувши `{{<T "Ok" >}}`. Пристрій почне обчислювати змінні успіху.

4. Після завершення обчислення ви можете переглянути вищезгадані змінні успіху. Використовуйте клавіші зі стрілками △ ▽ для навігації по відображеному меню.

   ![VitalControl: menu Evaluation Today's weighings](../images/todaysweighings.png "Evaluate Today's weighings")

## Вага при народженні {#birth-weights}
У цій оцінці ви можете переглянути наступну інформацію:
- Середня вага при народженні
- Класи ваги

Для виконання оцінки виконайте наступні дії:

1. На головному екрані вашого пристрою виділіть іконку &nbsp;<img src="/icons/main/evaluation.svg" width="50" align="bottom" alt="Evaluate" />&nbsp; `{{<T "Evaluation" >}}`. Підтвердіть, натиснувши `{{<T "Ok" >}}`.

2. Відкриється інше підменю, в якому ви можете використовувати клавіші зі стрілками △ ▽ ◁ ▷ для вибору між пунктами меню `{{<T "Weight" >}}`, `{{<T "Temperature" >}}`, `{{<T "Rating" >}}` та `{{<T "Mortality" >}}`. Виберіть &nbsp;<img src="/icons/evaluation/weight.svg" width="40" align="bottom" alt="Weight" />&nbsp; `{{<T "Weight" >}}` і підтвердіть, натиснувши `{{<T "Ok" >}}`.

3. Тепер з'являться опції оцінки для розділу Вага. Виберіть &nbsp;<img src="/icons/evaluation/birthweights.svg" width="60" align="bottom" alt="Birth weights" />&nbsp; `{{<T "BirthWeights" >}}` і підтвердіть, натиснувши `{{<T "Ok" >}}`. Пристрій почне обчислювати змінні успіху.


4. Коли обчислення завершено, ви можете переглянути вищезгадані змінні успіху. Використовуйте клавіші зі стрілками △ ▽ для навігації по відображеному меню.

   ![VitalControl: меню Оцінка Вага при народженні](../images/birthweights.png "Оцінка Вага при народженні")

## Розвиток ваги {#weight-development}

У цій оцінці ви можете побачити наступну інформацію, пов'язану з усіма зважуваннями:
- Середня вага тварини
- Середній щоденний приріст ваги з моменту народження
- Середній щоденний приріст ваги з моменту останнього зважування
- Подвоєння ваги при народженні

Щоб виконати оцінку, виконайте наступні дії:

1. На головному екрані вашого пристрою виділіть значок &nbsp;<img src="/icons/main/evaluation.svg" width="50" align="bottom" alt="Evaluate" />&nbsp; `{{<T "Evaluation" >}}`. Підтвердіть за допомогою `{{<T "Ok" >}}`.

2. Відкриється інше підменю, в якому ви можете використовувати клавіші зі стрілками △ ▽ ◁ ▷ для вибору між пунктами меню `{{<T "Weight" >}}`, `{{<T "Temperature" >}}`, `{{<T "Rating" >}}` та `{{<T "Mortality" >}}`. Виберіть &nbsp;<img src="/icons/evaluation/weight.svg" width="40" align="bottom" alt="Weight" />&nbsp; `{{<T "Weight" >}}` і підтвердіть за допомогою `{{<T "Ok" >}}`.

3. Тепер з'являться параметри оцінки для розділу ваги. Виберіть &nbsp;<img src="/icons/evaluation/weightdevelopment.svg" width="55" align="bottom" alt="Weight development" />&nbsp; `{{<T "WeightDevelopment" >}}` і підтвердіть за допомогою `{{<T "Ok" >}}`. Пристрій тепер починає обчислювати змінні успіху.

4. Коли обчислення завершено, ви можете переглянути вищезгадані змінні успіху. Використовуйте клавіші зі стрілками △ ▽ для навігації по відображеному меню.

   ![VitalControl: меню Оцінка Розвиток ваги](../images/weightdevelopment.png "Оцінка Розвиток ваги")
