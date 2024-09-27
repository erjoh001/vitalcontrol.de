---
title: Від'єднати транспондер
linkTitle: Від'єднати транспондер
slug: unlink-transponder
weight: 110
description: >
 Видалити зв'язок транспондера з твариною
date: 2023-07-26
categories: [Transponder]
tags: [Transponder]
translationKey: actions/transponder-unlink
---
{{% alert title="Попередження" color="warning" %}}
Ця дія не увімкнена за замовчуванням! Активуйте це, як описано в [налаштуваннях дій](../setting/).
{{% /alert %}}

## Від'єднати транспондер {#unlink-transponder}

За допомогою цієї дії ви можете від'єднати транспондер, який вже був призначений тварині, від цієї тварини.

1. На головному екрані вашого пристрою VitalControl виберіть пункт меню &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Дії" /> `{{<T "Actions" >}}` і натисніть кнопку `{{<T "Ok" >}}`.

2. Або скануйте тварину з потрібним транспондером, або виберіть тварину з транспондером зі списку. Для цього підтвердіть з `{{<T "Ok" >}}` і виберіть ID тварини за допомогою клавіш зі стрілками △ ▽. Підтвердіть з `{{<T "Ok" >}}`.

3. Відкриється підменю з діями для тварини. Використовуйте клавіші зі стрілками ◁ ▷ △ ▽, щоб вибрати дію &nbsp;<img src="/icons/actions/unlink-transponder.svg" width="45" align="bottom" alt="Від'єднати транспондер" /> `{{<T "UnlinkTransponder" >}}` і підтвердіть з `{{<T "Ok" >}}`.

4. Транспондер був успішно від'єднаний від тварини.

{{< tabpane >}}
{{< tab header="Від'єднати транспондер:" text=true disabled=true />}}
{{% tab header="Сканування транспондера" text=true %}}
![VitalControl: Меню Дія Від'єднати транспондер](../images/unlinktransponder-scan.png "Від'єднати транспондер")
{{% /tab %}}
{{% tab header="Ручний вибір зі списку" text=true %}}
![VitalControl: Меню Дія Від'єднати транспондер](../images/unlinktransponder.png "Від'єднати транспондер")
{{% /tab %}}
{{< /tabpane >}}
