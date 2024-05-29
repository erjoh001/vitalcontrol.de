---
title: "Възстановяване на резервно копие на данни"
linkTitle: "Възстановяване"
date: 2023-07-20
weight: 20
description: >
 Чрез възстановяване на данни, цялата информация от устройство VitalControl може да бъде възстановена на друго устройство чрез файл за резервно копие.
translationKey: restore
---
{{% usb-drive/bg "За да възстановите резервно копие на данни на вашето устройство VitalControl," %}}

На този USB флаш диск трябва да съществува директория `backup`, която трябва да съдържа валиден **файл за резервно копие `backup.vcu`**.

![USB-флаш диск с резервен файл VitalControl](../images/backup-file.png "USB-флаш диск с резервен файл")

{{% alert title="Забележка" %}}
В директорията `backup` на вашия USB флаш диск може да намерите няколко резервни файла с разширение `.vcu`. Устройството VitalControl винаги възстановява данните от файла, наречен `backup.vcu`, който винаги е най-новият файл. Ако искате да възстановите данни от по-стар резервен файл (в който датата на резервното копие е в името на файла), трябва да преименувате този по-стар резервен файл на `backup.vcu` преди да извършите възстановяване на данните!
{{% /alert %}}

## Възстановяване на данни на устройство VitalControl {#data-restoration-to-vitalcontrol-device}

1. Отворете менюто &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Устройство" /> `Устройство` на главния екран на устройството VitalControl, на което искате да възстановите данните.

2. Извикайте подменюто `Управление на данни` и изберете след това подменюто `Резервно копие на данни`. Сега изберете менюто `Възстановяване на резервно копие` и потвърдете с `OK`. Ще ви бъде поискано да вмъкнете USB флаш диск:

   ![VitalControl: път на менюто за възстановяване на данни](../images/restore.png "Възстановяване от резервен файл")

3. Вмъкнете USB флаш диска (C конектор) в конектора в долната част на устройството.

   ![VitalControl: вмъкване на USB флаш диск](/images/firmware/update/plug-in-dual-usb-stick.svg "Включване на USB флаш диск")

4. След като устройството засече вмъкването на USB стика, ще се появи прозорец за потвърждение. Потвърдете този изскачащ прозорец с `Да`, за да започне възстановяването на данните. Разархивирането и възстановяването на резервното копие може да отнеме минута или повече. Когато възстановяването на данните приключи, ще бъде показано съобщение за успех:

![VitalControl: съобщение за успешно възстановяване на данни](../images/restore-done.png "Съобщение за успешно възстановяване на данни")

5. Резервните данни бяха успешно възстановени на устройството VitalControl.