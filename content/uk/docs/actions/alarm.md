---
title: Тривога
linkTitle: Тривога
slug: alarm
weight: 60
description: >
 Додавання та видалення тварин зі списку тривоги.
date: 2023-07-26
categories: [Дії]
tags: [Дії, Тривога]
translationKey: actions/alarm
---

## Тривога {#alert}

За допомогою дії `{{<T "Alarm" >}}` ви можете додавати тварин до списку тривоги або видаляти їх з нього. Список тривоги допомагає швидше і легше знаходити підозрілих тварин, що полегшує ваші щоденні перевірки. Щоб застосувати дію `{{<T "Alarm" >}}`, виконайте наступні дії:

1. На головному екрані вашого пристрою VitalControl виберіть пункт меню `{{<T "Actions" >}}` &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> і натисніть кнопку `{{<T "Ok" >}}`.

2. Або відскануйте тварину за допомогою транспондера, або виберіть тварину зі списку. Підтвердіть натисканням `{{<T "Ok" >}}` і виберіть тварину за допомогою клавіш зі стрілками △ ▽. Підтвердіть натисканням `{{<T "Ok" >}}`.

3. Відкриється підменю з діями для тварин. Використовуйте клавіші зі стрілками ◁ ▷ △ ▽, щоб вибрати &nbsp;<img src="/icons/actions/alarm.svg" width="35" align="bottom" alt="Add alarm" /> дію `{{<T "Alarm" >}}` і підтвердьте натисканням `{{<T "Ok" >}}`.

4. З'явиться повідомлення про те, що тварину успішно додано до списку тривоги, і відображення для тварини в заголовку зміниться. Символ &nbsp;<img src="/icons/header/animal-in-alarm.svg" width="32" align="bottom" alt="Animal in alarm" /> вказує на те, що ця тварина знаходиться у списку тривоги.

5. Ви можете знову видалити тварину зі списку тривоги, застосувавши дію &nbsp;<img src="/icons/actions/alarm-minus.svg" width="35" align="bottom" alt="Remove alarm" /> `{{<T "Alarm" >}}` ще раз. Чи додаєте ви тварину до списку тривоги, чи видаляєте її з нього за допомогою дії `{{<T "Alarm" >}}`, вказується маленьким знаком + або -.

{{< tabpane >}}
{{< tab header="Alert:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Actions Alarm](../images/alarm-scan.png "Alarm")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Actions Alarm](../images/alarm.png "Alarm")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Підказка" %}}
Якщо ця дія недоступна, ймовірно, її було деактивовано! Активуйте дію в меню [налаштувань дій](../setting/). Альтернативно, скидання всіх дій поверне цю дію.
{{% /alert %}}
