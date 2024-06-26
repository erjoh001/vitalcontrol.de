---
title: "Восстановление резервной копии данных"
linkTitle: "Восстановить"
date: 2023-07-20
weight: 20
description: >
 С помощью восстановления данных можно полностью восстановить все данные устройства VitalControl на другом устройстве с использованием файла резервной копии.
translationKey: restore
---
{{% usb-drive/ru "Для того чтобы восстановить резервную копию данных на вашем устройстве VitalControl," %}}

На этой USB флешке должна быть папка `backup`, которая должна содержать действительный **файл резервной копии данных `backup.vcu`**.

![USB-флешка с файлом резервной копии VitalControl](../images/backup-file.png "USB-флешка с файлом резервной копии")

{{% alert title="Примечание" %}}
В папке `backup` вашей USB флешки может находиться несколько файлов резервных копий с расширением `.vcu`. Устройство VitalControl всегда восстанавливает данные из файла с именем `backup.vcu`, который является самым новым файлом. Если вы хотите восстановить данные из более старого файла резервной копии (в имени которого указана дата резервной копии), вам необходимо переименовать этот старый файл резервной копии в `backup.vcu` перед выполнением восстановления данных!
{{% /alert %}}

## Восстановление данных на устройство VitalControl {#data-restoration-to-vitalcontrol-device}

1. Откройте пункт меню &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Устройство" /> `Устройство` на главном экране устройства VitalControl, на которое вы хотите восстановить данные.

2. Вызовите подменю `Управление данными` и выберите пункт подменю `Резервное копирование данных`. Затем выберите пункт меню `Восстановить резервную копию` и подтвердите нажатием `OK`. Вам будет предложено вставить USB флешку:

   ![VitalControl: путь меню восстановления данных](../images/restore.png "Восстановление из файла резервной копии")

3. Вставьте USB флешку (разъем типа C) в разъем на нижней части устройства.

   ![VitalControl: вставка USB флешки](/images/firmware/update/plug-in-dual-usb-stick.svg "Вставка USB флешки")

4. Как только устройство обнаружит вставку USB флешки, появится окно подтверждения. Подтвердите это всплывающее окно, нажав `Да`, чтобы начать восстановление данных. Распаковка и восстановление резервной копии может занять минуту или дольше. Когда восстановление данных будет завершено, на экране появится сообщение об успешном завершении:

![VitalControl: сообщение об успешном восстановлении данных](../images/restore-done.png "Сообщение об успешном восстановлении данных")

5. Данные успешно восстановлены на устройстве VitalControl.
