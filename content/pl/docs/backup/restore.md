---
title: "Przywracanie kopii zapasowej danych"
linkTitle: "Przywróć"
date: 2023-07-20
weight: 20
description: >
 Poprzez przywracanie danych, całość danych urządzenia VitalControl może zostać przywrócona na innym urządzeniu za pomocą pliku kopii zapasowej.
translationKey: restore
---
{{% usb-drive/en "Aby przywrócić kopię zapasową danych na urządzenie VitalControl," %}}

Na tym pendrive'ie musi istnieć katalog `backup`, który musi zawierać ważny **plik kopii zapasowej `backup.vcu`**.

![Pendrive z plikiem kopii zapasowej VitalControl](../images/backup-file.png "Pendrive z plikiem kopii zapasowej")

{{% alert title="Uwaga" %}}
W katalogu `backup` na twoim pendrive'ie możesz znaleźć kilka plików kopii zapasowej z rozszerzeniem `.vcu`. Urządzenie VitalControl zawsze przywraca dane z pliku o nazwie `backup.vcu`, który jest zawsze najnowszym plikiem. Jeśli chcesz przywrócić dane ze starszego pliku kopii zapasowej (który zawiera datę kopii zapasowej w nazwie pliku), musisz zmienić nazwę tego starszego pliku kopii zapasowej na `backup.vcu` przed wykonaniem przywracania danych!
{{% /alert %}}

## Przywracanie danych na urządzenie VitalControl {#data-restoration-to-vitalcontrol-device}

1. Otwórz pozycję menu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Urządzenie" /> `Urządzenie` na głównym ekranie urządzenia VitalControl, na które chcesz przywrócić dane.

2. Wywołaj podmenu `Zarządzanie danymi` i wybierz następnie pozycję podmenu `Kopia zapasowa danych`. Teraz wybierz pozycję menu `Przywróć kopię zapasową` i potwierdź `OK`. Teraz zostaniesz poproszony o włożenie pendrive'a:

   ![VitalControl: ścieżka menu przywracania danych](../images/restore.png "Przywracanie z pliku kopii zapasowej")

3. Włóż pendrive (wtyczka C) do złącza na dole urządzenia.

   ![VitalControl: włóż pendrive](/images/firmware/update/plug-in-dual-usb-stick.svg "Włóż pendrive")

4. Gdy urządzenie wykryje włożenie pendrive'a, pojawi się okno potwierdzenia. Potwierdź to okno popup `Tak`, aby rozpocząć przywracanie danych. Rozpakowywanie i przywracanie kopii zapasowej może potrwać minutę lub dłużej. Po zakończeniu przywracania danych wyświetli się komunikat o sukcesie:


   ![VitalControl: success message data restore](../images/restore-done.png "Success message data restore")

5. Dane kopii zapasowej zostały pomyślnie przywrócone na urządzenie VitalControl.
