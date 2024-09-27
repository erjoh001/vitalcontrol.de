---
title: Записати вагу
linkTitle: Вага
slug: record-weight
weight: 20
description: >
  Записуйте вагу ваших тварин.
date: 2023-07-26
categories: [Actions]
tags: [Actions, weight]
translationKey: actions/weight
---

## Записати вагу {#record-weight}
Використовуйте &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Weighing" /> `{{<T "Weighing" >}}` дію, щоб зберегти вагу вашої тварини індивідуально. Для цього зважте ваших тварин або оцініть їх вагу і введіть це значення в пристрій VitalControl. Це дозволяє перевіряти розвиток ваги ваших тварин і оцінювати їх індивідуально.

{{% alert title="Підказка" %}}
Якщо середня вага дуже сильно відхиляється в один бік (занадто висока/занадто низька), значення для щоденного приросту слід скоригувати.
{{% /alert %}}

1. На головному екрані вашого пристрою VitalControl виберіть пункт меню &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` і натисніть кнопку `{{<T "Ok" >}}`.

2. Або відскануйте тварину за допомогою транспондера, або виберіть тварину зі списку. Підтвердіть `{{<T "Ok" >}}` і виберіть тварину за допомогою клавіш зі стрілками △ ▽. Підтвердіть `{{<T "Ok" >}}`.

3. Відкриється підменю з діями для тварини. Використовуйте клавіші зі стрілками ◁ ▷, щоб вибрати дію &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Weighing" /> `{{<T "Weighing" >}}` і підтвердіть `{{<T "Ok" >}}`.

4. Відкриється меню з вказівкою ваги. Збільшуйте або зменшуйте її за допомогою клавіш зі стрілками △ ▽ і збережіть результат за допомогою клавіші `F3` <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> або за допомогою клавіші `{{<T "Ok" >}}`.

{{< tabpane >}}
{{< tab header="Записати вагу:" text=true disabled=true />}}
{{% tab header="Сканування транспондера" text=true %}}
  ![VitalControl: Menu Action Weighing](../images/weighing-scan.png "Weighing")
{{% /tab %}}
{{% tab header="Ручний вибір зі списку" text=true %}}
  ![VitalControl: Menu Action Weighing](../images/weighing.png "Weighing")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Підказка" %}}
Якщо ця дія недоступна, ймовірно, вона була деактивована! Активуйте дію в меню [налаштувань дій](../setting/). Альтернативно, скидання всіх дій поверне цю дію.
{{% /alert %}}
