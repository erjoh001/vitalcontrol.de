---
title: "Рождения"
linkTitle: "Рождения"
weight: 35
date: 2023-07-28T13:25:28+02:00
draft: false
slug: births
description: >
  Здесь вы можете просмотреть ваши рождения и создать файл экспорта.
categories: [Рождения]
tags: [Рождения]
translationKey: new-on-farm/births
---
## Рождения {#births}

В этом списке вы можете просмотреть ваши рождения, редактировать их и создать файл экспорта для регистрации в HI-Tier. Для создания файла экспорта выполните следующие действия:

{{% alert title="Подсказка" %}}
Для экспорта данных вам понадобится включенная флешка USB. Подключите USB-флешку с адаптером USB-C к вашему устройству VitalControl перед выполнением инструкций.
{{% /alert %}}

1. На главном экране вашего устройства VitalControl выберите пункт меню <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Новое на ферме" /> `{{<T "NewOnFarm" >}}` и нажмите кнопку `{{<T "Ok" >}}`.

2. Откроется подменю, в котором вы можете выбрать между <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Новое на ферме, без транспондера" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Купленные животные" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Нет национального идентификационного номера животного" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Рождения" /> `{{<T "Births" >}}` и <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Транспондер не назначен" /> `{{<T "NoTransponderAssigned" >}}`. Используйте клавиши стрелок ◁ ▷ △ ▽ для выбора пункта меню <img src="/icons/main/births.svg" width="40" align="bottom" alt="Рождения" /> `{{<T "Births" >}}` и подтвердите нажатием `{{<T "Ok" >}}`.

3. Откроется список всех ваших рождений.

4. Используйте клавишу `F3` `{{<T "ExportListBirths" >}}`. Откроется подменю.

5. Используйте клавиши стрелок △ ▽ для выбора пункта меню `{{<T "ExportListBirths" >}}` и подтвердите нажатием `{{<T "Ok" >}}`.

6. Список теперь сохранен в виде файла CSV на вашей USB-флешке. Все животные из списка `{{<T "Births" >}}` удаляются.

    ![VitalControl: Меню Новое на ферме Рождения](../images/births.png "Рождения")

## Настройка параметров {#setting-options}

Помимо создания файла экспорта, у вас есть следующие опции:

- [Изменить](#change-between-list-view-and-single-animal-view) между списочным видом и видом одного животного
- [Очистить все уведомления о рождении](../purchased-animals/#clear-all-purchase-notices)
- [Удалить животное + уведомления](../purchased-animals/#delete-animal--purchase-notice)
- [Очистить уведомление о рождении](../purchased-animals/#clear-notice-of-purchase)
- [Редактировать](#edit-data-of-birth-notice) уведомление

{{% alert title="Подсказка" %}}
Некоторые действия идентичны действиям в списке `{{<T "PurchasedAnimals" >}}`. Следуйте ссылкам на пошаговые инструкции. Всегда сначала открывайте список `{{<T "Births" >}}`, как описано в инструкциях выше.
{{% /alert %}}

### Изменить между списочным видом и видом одного животного {#change-between-list-view-and-single-animal-view}

1. Используйте кнопку <img src="/icons/gear.svg" width="25" align="bottom" alt="Шестеренка" /> `On /Off`.

2. Используйте стрелки ◁ ▷ для выбора между `{{<T "ListView" >}}` и `{{<T "SingleAnimalView" >}}`.

3. Сохраните настройку клавишей `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Сохранить и выйти" />&nbsp;. В списочном виде используйте стрелки ◁ ▷ для переключения между животными.

    ![VitalControl: Меню Новые на ферме Рождения](../images/change.png "Изменить между списочным видом и видом одного животного")

### Редактировать данные уведомления о рождении {#edit-data-of-birth-notice}

{{% alert title="Подсказка" %}}
Редактирование данных животного возможно только в списочном виде!
{{% /alert %}}

1. Используйте стрелки △ ▽ для выбора животного, которое вы хотите отредактировать, и подтвердите с помощью `{{<T "Ok" >}}`.

2. Откроется подменю, в котором вы можете настроить различные параметры. Для пошаговых инструкций нажмите [здесь](/ru/docs/new/calving/).

    ![VitalControl: Меню Новые на ферме Рождения](../images/edit2.png "Редактировать уведомление о рождении")
