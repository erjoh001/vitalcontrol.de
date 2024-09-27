---
title: Втрата тварини
linkTitle: Втрата тварини
slug: animal-loss
weight: 110
description: >
 Реєстрація втрати тварини.
date: 2023-07-26
categories: [Actions]
tags: [Actions, animal-loss]
translationKey: actions/animal-loss
---

## Втрата тварини {#animal-loss}

Дія `{{<T "AnimalLoss" >}}` дозволяє зареєструвати втрату тварини. Щоб зареєструвати втрату тварини, виконайте наступні дії:

1. На головному екрані вашого пристрою VitalControl виберіть пункт меню &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` і натисніть кнопку `{{<T "Ok" >}}`.

2. Або відскануйте тварину за допомогою транспондера, або виберіть тварину зі списку. Підтвердіть за допомогою `{{<T "Ok" >}}` і виберіть тварину за допомогою клавіш зі стрілками △ ▽. Підтвердіть за допомогою `{{<T "Ok" >}}`.

3. Відкриється підменю з діями для тварини. Використовуйте клавіші зі стрілками ◁ ▷ △ ▽, щоб вибрати дію <img src="/icons/actions/animal-loss.svg" width="38" align="bottom" alt="Tierverlust" /> `{{<T "AnimalLoss" >}}` і підтвердіть за допомогою `{{<T "Ok" >}}`.

4. Відкриється інше підменю, в якому ви можете зберегти різні налаштування. Використовуйте клавіші зі стрілками △ ▽, щоб вибрати бажаний варіант налаштування. Використовуйте клавіші зі стрілками ◁ ▷, щоб вибрати бажане налаштування.

5. Використовуйте клавішу `F3`, щоб зняти тварину з обліку з вказаними налаштуваннями.

{{< tabpane >}}
{{< tab header="Animal loss:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Action Animal loss](../images/animalloss-scan.png "Register an animal loss")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Action Animal loss](../images/animalloss.png "Register an animal loss")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Підказка" %}}
Якщо ця дія недоступна, можливо, вона була деактивована! Активуйте дію в меню [налаштувань дій](../setting/). Альтернативно, скидання всіх дій поверне цю дію.
{{% /alert %}}
