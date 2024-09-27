---
title: Експорт даних на USB флеш-накопичувач
linkTitle: На USB флеш-накопичувач
date: 2023-07-20
weight: 10
description: >
  Експорт файлів даних CVS, що містять дані про тварин та значення вимірювань, збережені на пристрої VitalControl, на USB флеш-накопичувач.
categories: [Експорт даних]
tags: [CSV файли, USB флеш-накопичувач]
translationKey: data-export/usb-drive
---
{{% usb-drive/en "In order to perform an export of your device data," %}}

## Виконання експорту даних {#perform-data-export}

1. Відкрийте пункт меню &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `{{<T "Device" >}}` на головному екрані вашого пристрою VitalControl.

2. Викличте підменю `{{<T "DataManagement" >}}`, виберіть пункт меню `{{<T "AnimalData" >}}` і підтвердіть, натиснувши `{{<T "Ok" >}}`.

3. Відкриється інше підменю. Виберіть пункт меню `{{<T "ExportAnimalData" >}}` і підтвердіть, натиснувши `{{<T "Ok" >}}`.

4. Тепер вам буде запропоновано вставити USB флеш-накопичувач:

   ![VitalControl: Menu path data export](../images/data-export.png "Invoke data export")

5. Вставте USB флеш-накопичувач (роз'єм C) у роз'єм внизу пристрою.

   ![VitalControl: insert USB flash drive](/images/firmware/update/plug-in-dual-usb-stick.svg "Insert USB flash drive")

6. Після того, як пристрій виявить вставлення USB флеш-накопичувача, експорт даних автоматично розпочнеться. Запис резервних даних може зайняти кілька секунд. Коли експорт даних завершиться, буде відображено повідомлення про успіх:

   ![VitalControl: success message data export](../images/success-data-export.png "Success data export")

7. Експорт даних завершено. Ви знайдете чотири створені [експортні файли](../export-files/) у каталозі `export-csv` на вашому USB флеш-накопичувачі.

   ![USB flash drive with export files VitalControl](../images/export-files.png "Export files on USB flash drive")

   {{% alert title="Notes" %}}
  - Щоб запобігти випадковому перезапису експортних файлів, ім'я кожного експортного файлу завжди включає дату та час створення файлу. Обов'язково використовуйте останню версію експортних файлів, якщо ви експортували дані про тварин кілька разів.
  - Розмір експортних файлів залежить від кількості тварин на VitalControl та кількості виконаних вимірювань. Загалом, експортні файли займають лише кілька кБ місця на USB флеш-накопичувачі.
   {{% /alert %}}

Будь ласка, вставте вміст Markdown, який ви хочете перекласти.
