---
title: Provjera hardverskih komponenti vašeg VitalControl uređaja
linkTitle: Hardver
date: 2023-08-07T10:09:46+02:00
draft: false
translationKey: diagnosis/hardware
description: >
  Provjerite hardverske komponente vašeg VitalControl uređaja, posebno ako sumnjate na hardverski kvar.
categories: [Dijagnoza, Hardver]
weight: 10
---
Ako postoji kvar na vašem uređaju, prvo biste trebali izvršiti provjeru hardvera kako biste utvrdili je li neka od hardverskih komponenti neispravna.

## Provjera hardvera vašeg uređaja {#check-the-hardware-of-your-device}

1. Otvorite stavku izbornika &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `{{<T "Device" >}}` na glavnom ekranu vašeg VitalControl uređaja.

1. Pozovite podizbornik `{{<T "Service" >}}`, odaberite stavku izbornika `{{<T "CheckDeviceDrivers" >}}` i potvrdite s `{{<T "Ok" >}}`.

Uređaj sada prikazuje sve hardverske komponente uređaja, zajedno s njihovim statusom. Idealno bi bilo da sve navedene komponente prikazuju zelenu tačku na krajnjoj desnoj strani; to signalizira funkcionalnu komponentu. Ako se za komponentu prikazuje crvena tačka, to znači da je odgovarajuća komponenta neispravna. U tom slučaju, uređaj se mora vratiti proizvođaču na servis.

   ![VitalControl: Putanja izbornika Provjera hardverskih komponenti](../images/device-check.png "Provjera hardvera")

{{% alert title="NAPOMENA" %}}
Ako je status svih komponenti prikazan kao ispravan (zelene tačke) i još uvijek postoji kvar na uređaju, moguće je da se radi o softverskom kvaru. U tom slučaju, kontaktirajte vašeg lokalnog distributera ili [servisnu liniju](https://www.urbanonline.de/en/contact) proizvođača.
{{% /alert %}}
