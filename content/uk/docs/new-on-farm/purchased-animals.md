---
title: Придбані тварини
linkTitle: Придбані тварини
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: purchased-animals
description: >
  Тут ви можете переглянути ваші поточні покупки та експортувати дані.
categories: [Новинки на фермі]
tags: [Новинки на фермі]
translationKey: new-on-farm/new-on-farm
---
## Придбані тварини {#purchased-animals}

У цьому списку ви знайдете всіх тварин, яких ви створили через масовий запис. Ви можете експортувати цей список і таким чином зареєструвати свої додавання безпосередньо в програмі управління стадом DSP-Herde та в HI-Tier. Альтернативно, ви можете видалити всі повідомлення про покупку.

{{% alert title="Підказка" %}}
Для експорту даних вам потрібен включений UBS-накопичувач. Підключіть USB-накопичувач з адаптером USB-C до вашого пристрою VitalControl перед тим, як слідувати інструкціям.
{{% /alert %}}

1. На головному екрані вашого пристрою VitalControl виберіть пункт меню <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Новинки на фермі" /> `{{<T "NewOnFarm" >}}` і натисніть кнопку `{{<T "Ok" >}}`.

2. Відкриється підменю, в якому ви можете вибрати між <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Новинки на фермі, без транспондера" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Придбані тварини" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Без національного ідентифікатора тварини" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Народження" /> `{{<T "Births" >}}` та <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Без транспондера" /> `{{<T "NoTransponderAssigned" >}}`. Використовуйте клавіші зі стрілками ◁ ▷ △ ▽ для вибору пункту меню <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Придбані тварини" /> `{{<T "PurchasedAnimals" >}}` і підтвердіть натисканням `{{<T "Ok" >}}`.

3. Відкриється список ваших покупок, які ви зареєстрували через пункт меню масового запису.


4. Використовуйте клавішу `F2` `{{<T "CSVExport" >}}`.

5. Список повідомлень CSV тепер збережено на вашій USB флешці.

    ![VitalControl: Список придбаних тварин, експорт csv](../images/purchasedanimals.png "Придбані тварини, експорт csv ")

## Опції: Видалити всі повідомлення після експорту {#options-delete-all-notices-after-export}

З цією опцією ви можете встановити, чи слід видаляти всі повідомлення зі списку `{{<T "PurchasedAnimals" >}}` після експорту CSV файлу. Використовуйте цю опцію лише якщо ви впевнені, що більше не потребуєте повідомлень!

1. Використовуйте клавішу `F3`. Відкриється підменю.

2. Використовуйте клавіші зі стрілками △ ▽ для вибору пункту меню `{{<T "DeleteAllNoticesAfterExport" >}}` і підтвердіть натисканням `{{<T "Ok" >}}`.

3. Поле тепер позначено галочкою. Опція активована. Підтвердіть ще раз натисканням `{{<T "Ok" >}}`, щоб деактивувати опцію.

    ![VitalControl: Список придбаних тварин, експорт csv](../images/delete-all.png "Видалити всі повідомлення після експорту")    

## Прямі виклики функцій {#direct-function-calls}

Окрім створення експортного файлу, у вас є наступні опції:

- [Від'єднати транспондер](#unlink-transponder)
- [Очистити всі повідомлення про покупку](#clear-all-purchase-notices)
- [Видалити тварину + повідомлення](#delete-animal--purchase-notice)
- [Очистити повідомлення про покупку](#clear-notice-of-purchase)
- [Редагувати мітку](#edit-data-of-purchased-animal)

{{% alert title="Підказка" %}}
Завжди спочатку відкривайте список `{{<T "PurchasedAnimals" >}}`, як описано в інструкціях вище.
{{% /alert %}}

### Від'єднати транспондер {#unlink-transponder}

Ви можете використовувати цю функцію для видалення транспондера з тварини.

1. Використовуйте клавішу `F3`. Відкриється підменю.

2. Використовуйте клавіші зі стрілками △ ▽ для вибору пункту меню `{{<T "UnlinkTransponder" >}}` і підтвердіть натисканням `{{<T "Ok" >}}`.

3. Транспондер успішно від'єднано.

    ![VitalControl: Список придбаних тварин, експорт csv](../images/unlink-transponder.png "Придбані тварини, від'єднати транспондер")

### Очистити всі повідомлення про покупку {#clear-all-purchase-notices}


За допомогою цієї функції ви можете видалити всіх тварин зі списку `{{<T "PurchasedAnimals" >}}` без необхідності спочатку створювати експортний файл.

1. Використовуйте клавішу `F3`. Відкриється підменю.

2. Використовуйте клавіші зі стрілками △ ▽, щоб вибрати пункт меню `{{<T "ClearAllPurchaseNotices" >}}` і підтвердити за допомогою `{{<T "Ok" >}}`.

3. Повідомлення про покупку успішно видалено.

    ![VitalControl: Список придбаних тварин, очистити повідомлення про покупку](../images/clear.png "Очистити всі повідомлення про покупку")

### Видалити тварину + повідомлення про покупку {#delete-animal--purchase-notice}

Щоб видалити тварину та відповідне повідомлення про покупку, виконайте наступні дії:

1. Використовуйте клавіші зі стрілками △ ▽, щоб вибрати тварину, яку ви хочете видалити.

2. Використовуйте клавішу `F3`. Відкриється підменю.

3. Використовуйте клавіші зі стрілками △ ▽, щоб вибрати пункт меню `{{<T "UnregisterAnimalAndBirthNotice" >}}` і підтвердити за допомогою `{{<T "Ok" >}}`.

4. Тварину та повідомлення про доступ успішно видалено.

    ![VitalControl: Список придбаних тварин, видалити тварину + повідомлення](../images/delete.png "Видалити тварину + повідомлення")

### Очистити повідомлення про покупку {#clear-notice-of-purchase}

Щоб видалити повідомлення про покупку тварини зі списку, виконайте наступні дії:

1. Використовуйте клавіші зі стрілками △ ▽, щоб вибрати тварину, повідомлення про покупку якої ви хочете видалити.

2. Використовуйте клавішу `F3`. Відкриється підменю.

3. Використовуйте клавіші зі стрілками △ ▽, щоб вибрати пункт меню `{{<T "ClearPurchaseNotice" >}}` і підтвердити за допомогою `{{<T "Ok" >}}`.

4. Повідомлення про покупку вибраної тварини успішно видалено.

    ![VitalControl: Список придбаних тварин, очистити повідомлення про покупку](../images/clearnotice.png "Очистити повідомлення про покупку")

### Редагувати дані придбаної тварини {#edit-data-of-purchased-animal}

Щоб редагувати дані тварини у списку покупок, виконайте наступні дії:

1. Використовуйте клавіші зі стрілками △ ▽, щоб вибрати тварину, яку ви хочете редагувати.

2. Використовуйте кнопку `{{<T "Ok" >}}`. Відкриється підменю з даними тварини. Ви можете дізнатися, як редагувати ці дані [тут](/uk/docs/actions/edit/#edit-animal-data).

![VitalControl: Список придбаних тварин, Редагувати дані тварини](../images/edit.png "Редагувати дані придбаної тварини")
