---
title: "Массовая регистрация группы купленных животных"
linkTitle: "Массовая запись"
date: 2023-07-28T13:25:28+02:00
weight: 15
draft: false
slug: bulk-recording
description: >
  Используйте сканер штрих-кодов для записи различных животных.
categories: [Массовая запись]
tags: [Массовая запись]
translationKey: new/bulk-recording
---
## Массовая запись

С помощью массовой регистрации вы можете за короткое время зафиксировать большое количество животных и сохранить их в вашем устройстве. Используйте сканер штрих-кодов для сканирования штрих-кодов номера ушной метки и даты рождения в паспортах скота. Животное сохраняется автоматически, и вы можете сразу же сканировать следующий паспорт. Для проведения массовой регистрации животных поступите следующим образом:

1. Подключите сканер штрих-кодов к VitalControl с помощью кабеля.

2. На главном экране вашего устройства VitalControl выберите пункт меню <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="Новое животное" /> `Новое` и нажмите кнопку `OK`.

3. Откроется подменю. Используйте клавиши со стрелками ◁ ▷ △ ▽ для выбора пункта меню <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Массовая запись" /> `Массовая запись` и подтвердите нажатием `OK`.

4. Откроется другое подменю, которое содержит одно поле для номера ушной метки животного и другое поле для даты рождения животного. Сначала отсканируйте штрих-код номера ушной метки. Граница поля изменится с красного на зеленый. Затем отсканируйте дату рождения. Граница кратковременно станет зеленой, прежде чем обе границы снова станут красными. Счетчик под символом паспорта <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Паспорта животных" title="Паспорта животных" /> в верхней части экрана увеличивается с 0 до 1. Первое животное сохранено. Продолжайте и сканируйте другие паспорта скота. После каждого отсканированного паспорта счетчик под символом паспорта <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Паспорта животных" title="Паспорта животных" /> увеличивается на один. Счетчик под символом стада <img src="/icons/header/group.svg" width="35" align="bottom" alt="Группа животных"  title="Группа животных" /> также увеличивается на один.

{{% alert title="Подсказка" %}}
Счетчик под символом паспорта <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Animal passports" title="Animal passports" /> показывает, сколько паспортов вы отсканировали за один раз, не выходя из экрана `Массовая запись`. Счетчик под символом стада <img src="/icons/header/group.svg" width="35" align="bottom" alt="New animal" /> показывает, сколько паспортов вы отсканировали в общем. Этот счетчик не обнуляется, если вы выйдете из экрана `Массовая запись`. Число эквивалентно вашим записям в пункте меню ['Покупки'](../new-on-farm/purchased-animals/).
{{% /alert %}}

   ![VitalControl: Меню 'Новое - Массовая запись'](../images/bulk-recording.png "Массовая запись")

{{% alert title="Подсказка" %}}
В пункте меню `Массовая запись` у вас есть дополнительные настройки. Они описаны ниже. В качестве подготовительных шагов всегда сначала переходите в пункт меню `Массовая запись`, а затем действуйте согласно инструкциям.
{{% /alert %}}

{{% alert title="Подсказка" %}}
В процессе сканирования могут появляться сообщения об ошибках. В этом случае сканер штрих-кодов издает звук, и дальнейшее сканирование невозможно. Подтвердите соответствующее сообщение об ошибке на дисплее VitalControl и продолжайте сканирование.
{{% /alert %}}

### Указание даты рождения обязательно

С помощью этой настройки вы можете определить, должна ли указываться дата рождения при создании животных. Если вы деактивируете эту опцию, вам нужно будет только отсканировать штрих-код, чтобы сохранить животное. Однако для этих животных в качестве даты рождения будет сохранена текущая дата! Эта функция активирована по умолчанию. Чтобы деактивировать ее, выполните следующие действия:

1. Используйте кнопку <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings menu" /> `Вкл/Выкл` для открытия меню настроек.

2. Используйте стрелки △ ▽ для выбора опции настройки `Указание даты рождения обязательно` и подтвердите нажатием `OK`.

3. Желтый круг символизирует активацию функции. Серый круг символизирует деактивацию функции.

4. Сохраните настройки и используйте клавишу `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" /> для возврата в пункт меню <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" />&nbsp; `Массовая запись`.

![VitalControl: Меню Новая обязательная дата рождения](../images/birthdate.png "Обязательная дата рождения")

### Значения по умолчанию

В меню настроек `Значения по умолчанию` вы устанавливаете стандарты, которые применяются к каждому создаваемому вами животному. Процесс создания с использованием сканера штрих-кодов остается неизменным, как описано выше. У вас есть возможность установить тип скота, пол, породу и местонахождение. Чтобы установить `Значения по умолчанию`, выполните следующие действия:

1. Используйте кнопку <img src="/icons/gear.svg" width="25" align="bottom" alt="Меню настроек" /> `Вкл/Выкл` для открытия меню настроек.

2. Используйте стрелки △ ▽ для выбора пункта меню `Значения по умолчанию` и подтвердите нажатием `ОК`.

3. Откроется подменю с различными опциями настроек. Используйте стрелки △ ▽ для выбора желаемой опции настройки. Используйте стрелки ◁ ▷ для выбора желаемой настройки.

4. Сохраните настройки и используйте клавишу `F1`&nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Сохранить и вернуться" /> для возврата к пункту меню <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Массовая запись" />&nbsp; `Массовая запись`.

   ![VitalControl: Меню Новые значения по умолчанию](../images/defaultvalues.png "Значения по умолчанию")

### Записываемые значения

В меню настроек `Записываемые значения` вы можете указать, какие значения должны быть зафиксированы в дополнение к номеру бирки и дате рождения. Вы можете выбрать из `Порода`, `Пол`, `Местонахождение`, `Текущий вес`, `Вес при рождении` и `Тип животного`. Как только вы установите хотя бы одно значение, процесс изменится во время сканирования. Сначала сканируйте номер бирки и дату рождения. Затем используйте направляющие клавиши △ ▽ для выбора значений, которые нужно установить, и установите значения. Затем сохраните ваши записи с помощью клавиши `F3`. Только после этого животное создается! Чтобы установить значения для записи, выполните следующие действия:

1. Используйте кнопку <img src="/icons/gear.svg" width="25" align="bottom" alt="Меню настроек" /> `Вкл/Выкл` для открытия меню настроек.

2. Используйте стрелки △ ▽ для выбора пункта меню `записываемые значения` и подтвердите нажатием `ОК`.

3. Выберите желаемое значение для записи с помощью стрелок △ ▽ и подтвердите нажатием `OK`. Появится желтый круг. Если вы хотите деактивировать значение для записи, подтвердите снова нажатием `OK`. Желтый круг исчезнет.

4. Сохраните настройки и используйте клавишу `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" /> для возврата к пункту меню <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" />&nbsp; `Массовая запись`.

5. Если вы хотите снова деактивировать все значения для записи, выберите опцию настройки `Включить все + сбросить порядок` в пункте меню `Записанные значения` и подтвердите нажатием `OK`.

   ![VitalControl: Меню Новые значения записи](../images/recordvalues.png "Запись значений")