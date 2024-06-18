---
title: Sprawdzanie komponentów sprzętowych urządzenia VitalControl
linkTitle: Sprzęt
date: 2023-08-07T10:09:46+02:00
draft: false
translationKey: diagnosis/hardware
description: >
  Sprawdź komponenty sprzętowe swojego urządzenia VitalControl, szczególnie jeśli podejrzewasz usterkę sprzętową.
categories: [Diagnoza, Sprzęt]
weight: 10
---
Jeśli na Twoim urządzeniu występuje usterka, najpierw powinieneś przeprowadzić kontrolę sprzętu, aby sprawdzić, czy którykolwiek z komponentów sprzętowych jest uszkodzony.

## Sprawdź sprzęt swojego urządzenia {#check-the-hardware-of-your-device}

1. Otwórz pozycję menu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `{{<T "Device" >}}` na głównym ekranie swojego urządzenia VitalControl.

1. Wejdź do podmenu `{{<T "Service" >}}`, wybierz pozycję menu `{{<T "CheckDeviceDrivers" >}}` i potwierdź `{{<T "Ok" >}}`.

Urządzenie teraz wyświetli wszystkie komponenty sprzętowe urządzenia wraz z ich statusami. Idealnie, wszystkie wymienione komponenty powinny mieć zieloną kropkę po prawej stronie; sygnalizuje to działający komponent. Jeśli dla komponentu wyświetlana jest czerwona kropka, oznacza to, że dany komponent jest uszkodzony. W takim przypadku urządzenie musi zostać zwrócone do producenta w celu serwisu.

   ![VitalControl: Ścieżka menu Sprawdzenie komponentów sprzętowych](../images/device-check.png "Sprawdzenie sprzętu")

{{% alert title="UWAGA" %}}
Jeśli status wszystkich komponentów jest wyświetlany jako nienaruszony (zielone kropki), a urządzenie nadal nie działa prawidłowo, może to być usterka oprogramowania. W takim przypadku skontaktuj się z lokalnym dealerem lub [infolinią serwisową](https://www.urbanonline.de/en/contact) producenta.
{{% /alert %}}
