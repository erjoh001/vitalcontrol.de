---
title: Відписати тварину
linkTitle: Відписати
slug: unregister
weight: 100
description: >
 Відписати тварину
date: 2023-07-26
categories: [Actions]
tags: [Actions, Unregister]
translationKey: actions/unregister
---
{{% alert title="Warning" color="warning" %}}
Як тільки ви видалите запис даних про тварину, він більше не буде доступний для оцінки! Якщо ви відписуєте тварину, але хочете, наприклад, знову оцінити розвиток тварини, ви повинні зберегти запис даних про тварину!
{{% /alert %}}

## Відписати {#unregister}

Дія `{{<T "Unregister" >}}` дозволяє вам відписати тварину, як тільки вона буде переміщена. Щоб відписати тварину, виконайте наступні дії:

1. На головному екрані вашого пристрою VitalControl виберіть пункт меню &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` і натисніть кнопку `{{<T "Ok" >}}`.

2. Або скануйте тварину за допомогою транспондера, або виберіть тварину зі списку. Підтвердіть `{{<T "Ok" >}}` і виберіть тварину за допомогою клавіш зі стрілками △ ▽. Підтвердіть `{{<T "Ok" >}}`.

3. Відкриється підменю з діями для тварини. Використовуйте клавіші зі стрілками ◁ ▷ △ ▽, щоб вибрати дію &nbsp;<img src="/icons/actions/unregister.svg" width="33" align="bottom" alt="Unregister" /> `{{<T "Unregister" >}}` і підтвердіть `{{<T "Ok" >}}`.

4. Відкриється інше підменю, в якому ви можете зберегти різні налаштування. Використовуйте клавіші зі стрілками △ ▽, щоб вибрати бажаний варіант налаштування. Використовуйте клавіші зі стрілками ◁ ▷, щоб вибрати бажане налаштування.

5. Використовуйте клавішу `F3` `{{<T "Unregister" >}}`, щоб відписати тварину з вказаними налаштуваннями.

{{< tabpane >}}
{{< tab header="Unregister:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Action Unregister](../images/unregister-scan.png "Unregister an animal")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Action Unregister](../images/unregister.png "Unregister an animal")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Підказка" %}}
Якщо ця дія недоступна, ймовірно, її було деактивовано! Активуйте дію в меню [налаштувань дій](../setting/). Альтернативно, скидання всіх дій поверне цю дію.
{{% /alert %}}
