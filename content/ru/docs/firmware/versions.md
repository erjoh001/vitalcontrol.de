---
title: "Последние версии прошивок"
linkTitle: "Последние версии"
date: 2023-07-18T12:47:29+02:00
draft: false
weight: 10
description: >
 Список текущих версий прошивок для устройства VitalControl.
---

## Определение установленных версий прошивок на вашем устройстве {#determine-firmware-versions-installed-on-your-device}

1. Откройте пункт меню <img src="/icons/device.svg" width="25" align="bottom" alt="Устройство" /> `{{<T "Device" >}}` на главном экране вашего устройства VitalControl.

2. Вызовите подменю `{{<T "Info" >}}`, выберите пункт меню `{{<T "Software" >}}` и подтвердите нажатием `{{<T "Ok" >}}`. Откроется всплывающее окно, в котором перечислены версии программного обеспечения, установленные на вашем устройстве:

![VitalControl: определение версий прошивок](../images/firmware-versions.png "Отображение версий прошивок")

## Последние версии прошивок: {#latest-firmware-versions}

В следующей таблице перечислены текущие версии прошивок:

|                 | GUI-Прошивка  | Промежуточное ПО  | Загрузчик |
|-----------------|:-------------:|:-----------:|:----------:|
| **Версия**     | {{% version/firmware component="gui" %}} | {{% version/firmware component="middleware" %}} | {{% version/firmware component="bootloader" %}} |
| **Дата**       | {{% version/firmware component="gui-date" %}} | {{% version/firmware component="middleware-date" %}} | {{% version/firmware component="bootloader-date" %}} |
| **Хеш коммита** | {{% version/firmware component="gui-commitHash" %}} | {{% version/firmware component="middleware-commitHash" %}} |  {{% version/firmware component="bootloader-commitHash" %}} |
| **№ коммита**    | {{% version/firmware component="gui-commitNo" %}} | {{% version/firmware component="middleware-commitNo" %}} | {{% version/firmware component="bootloader-commitNo" %}}|

{{% alert title="Совет" %}}
Если вы не обнаруживаете новых функций на вашем устройстве или сталкиваетесь с проблемами стабильности, рекомендуется [обновить](../update/) прошивку вашего устройства до последней выпущенной версии.
{{% /alert %}}
