---
title: "Обновление прошивки вашего устройства"
linkTitle: Обновление
weight: 4
description: >
  Выполнив обновление прошивки, вы можете обновить прошивку вашего устройства VitalControl до последних доступных версий.
---
Сначала убедитесь, что для вашего устройства доступна [новая версия прошивки](../versions/) и, если необходимо, обновите прошивку вашего устройства согласно следующим инструкциям.

## Необходимый аксессуар {#required-accessory}

Для установки обновления на ваше устройство вам понадобится двойной USB-флеш-накопитель (2-в-1 USB-накопитель) типа C/USB 3.0 с разъемами USB C и USB A. Такой двойной USB-флеш-накопитель поставляется вместе с вашим устройством. Также вы можете приобрести такой USB-флеш-накопитель у разных продавцов.

![Двойной USB-флеш-накопитель (USB A / USB C)](/images/firmware/update/usb-dual-stick.svg "Двойной USB-флеш-накопитель")

## Подготовка: загрузка последней прошивки {#preparation-download-latest-firmware}

1. Вставьте ваш USB-флеш-накопитель в USB-разъем вашего компьютера. Затем создайте новую папку с именем 'update' в корневом каталоге вашего флеш-накопителя.

    ![Проводник Windows: USB-флеш-накопитель с папкой 'update'](../images/create-folder-update.png "USB-флеш-накопитель: папка 'update'")

1. Загрузите [файл прошивки](/download/firmware.vcu) (имя файла: `firmware.vcu`) и сохраните его в только что созданной папке `update` на вашем USB-флеш-накопителе. Файл обновления требует примерно 2,5 МБ свободного места на флеш-накопителе.

    ![Проводник Windows: флеш-накопитель с файлом прошивки 'firmware.vcu'](../images/save-firmware-file.png "Флеш-накопитель с файлом прошивки")

1. Создайте [резервную копию данных][] на вашем устройстве.

    {{% alert title="Информация" %}}
Резервное копирование данных является рекомендуемой мерой предосторожности. Все существующие данные о животных и устройстве будут сохранены при обновлении прошивки устройства VitalControl.
    {{% /alert %}}

[резервная копия данных]: {{< relref "../backup/backup/" >}}

## Выполнение обновления прошивки {#perform-firmware-update}

1. Откройте пункт меню `{{<T "Device" >}}` на главном экране вашего устройства VitalControl.

1. Вызовите подменю `{{<T "Service" >}}`, выберите пункт меню `{{<T "FirmwareUpdate" >}}` и подтвердите нажатием `{{<T "Ok" >}}`. Теперь вас попросят вставить подготовленный USB-флеш-накопитель:

![VitalControl: путь к меню обновления прошивки](../images/firmware-update.png "Обновление прошивки")

1. Вставьте USB-флешку (разъем типа C) в разъем в нижней части устройства и подтвердите действие кнопкой `{{<T "Ok" >}}`.

    ![VitalControl: Вставка USB-флешки](/images/firmware/update/plug-in-dual-usb-stick.svg "Вставка USB-флешки")

    Устройство автоматически выполняет обновление. Во время обновления на дисплее отображается информация о ходе обновления. После завершения обновления устройство автоматически перезагружается и после перезагрузки на экране появляется сообщение об успешном обновлении:

   ![VitalControl: Сообщение об успешном обновлении прошивки](../images/update-success.png "Успешное обновление прошивки")

   Новая прошивка теперь установлена на вашем устройстве.
