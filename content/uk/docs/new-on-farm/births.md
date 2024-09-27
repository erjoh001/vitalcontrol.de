---
title: "Народження"
linkTitle: "Народження"
weight: 35
date: 2023-07-28T13:25:28+02:00
draft: false
slug: births
description: >
  Тут ви можете переглянути свої народження та створити експортний файл.
categories: [Народження]
tags: [Народження]
translationKey: new-on-farm/births
---
## Народження {#births}

У цьому списку ви можете переглядати свої народження, редагувати їх та створювати експортний файл для реєстрації в HI-Tier. Щоб створити експортний файл, виконайте наступні дії:

{{% alert title="Підказка" %}}
Для експорту даних вам потрібен включений UBS-накопичувач. Підключіть USB-накопичувач з адаптером USB-C до вашого пристрою VitalControl перед виконанням інструкцій.
{{% /alert %}}

1. На головному екрані вашого пристрою VitalControl виберіть пункт меню <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Новий на фермі" /> `{{<T "NewOnFarm" >}}` і натисніть кнопку `{{<T "Ok" >}}`.

2. Відкриється підменю, в якому ви можете вибрати між <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Новий на фермі, без транспондера" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Придбані тварини" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Без національного ідентифікатора тварини" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Народження" /> `{{<T "Births" >}}` і <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Без транспондера" /> `{{<T "NoTransponderAssigned" >}}`. Використовуйте клавіші зі стрілками ◁ ▷ △ ▽, щоб вибрати пункт меню <img src="/icons/main/births.svg" width="40" align="bottom" alt="Народження" /> `{{<T "Births" >}}` і підтвердьте натисканням `{{<T "Ok" >}}`.

3. Відкриється список всіх ваших народжень.

4. Використовуйте клавішу `F3` `{{<T "ExportListBirths" >}}`. Відкриється підменю.

5. Використовуйте клавіші зі стрілками △ ▽, щоб вибрати пункт меню `{{<T "ExportListBirths" >}}` і підтвердьте натисканням `{{<T "Ok" >}}`.

6. Список тепер збережено як файл CSV на вашому USB-накопичувачі. Всі тварини зі списку `{{<T "Births" >}}` видаляються.

![VitalControl: Menu New on farm Births](../images/births.png "Births")

## Налаштування параметрів {#setting-options}

На додаток до створення експортного файлу, у вас є наступні опції:

- [Змінити](#change-between-list-view-and-single-animal-view) між переглядом списку та переглядом окремої тварини
- [Очистити всі повідомлення про народження](../purchased-animals/#clear-all-purchase-notices)
- [Видалити тварину + повідомлення](../purchased-animals/#delete-animal--purchase-notice)
- [Очистити повідомлення про народження](../purchased-animals/#clear-notice-of-purchase)
- [Редагувати](#edit-data-of-birth-notice) повідомлення

{{% alert title="Підказка" %}}
Деякі дії ідентичні діям у списку `{{<T "PurchasedAnimals" >}}`. Слідуйте за посиланнями для покрокових інструкцій. Завжди спочатку відкривайте список `{{<T "Births" >}}`, як описано в інструкціях вище.
{{% /alert %}}

### Змінити між переглядом списку та переглядом окремої тварини {#change-between-list-view-and-single-animal-view}

1. Використовуйте кнопку <img src="/icons/gear.svg" width="25" align="bottom" alt="Gear" /> `On /Off`.

2. Використовуйте клавіші зі стрілками ◁ ▷ для вибору між `{{<T "ListView" >}}` та `{{<T "SingleAnimalView" >}}`.

3. Збережіть налаштування за допомогою клавіші `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;. У режимі перегляду списку використовуйте клавіші зі стрілками ◁ ▷ для перемикання між тваринами.

    ![VitalControl: Menu New on farm Births](../images/change.png "Change between list view and single animal view")

### Редагувати дані повідомлення про народження {#edit-data-of-birth-notice}

{{% alert title="Підказка" %}}
Редагування даних тварини можливе лише у режимі перегляду списку!
{{% /alert %}}

1. Використовуйте клавіші зі стрілками △ ▽ для вибору тварини, яку ви хочете редагувати, і підтвердіть за допомогою `{{<T "Ok" >}}`.

2. Відкриється підменю, в якому ви можете налаштувати різні параметри. Для покрокових інструкцій натисніть [тут](/uk/docs/new/calving/#register-a-calving).

    ![VitalControl: Menu New on farm Births](../images/edit2.png "Edit a birth notice")
