---
title: Kontrollera hårdvarukomponenterna på din VitalControl-enhet
linkTitle: Hårdvara
date: 2023-08-07T10:09:46+02:00
draft: false
translationKey: diagnosis/hardware
description: >
  Kontrollera hårdvarukomponenterna på din VitalControl-enhet, särskilt om du misstänker ett hårdvarufel.
categories: [Diagnos, Hårdvara]
weight: 10
---
Om det finns ett fel på din enhet bör du först utföra en hårdvarukontroll för att klargöra om någon av hårdvarukomponenterna är defekt.

## Kontrollera enhetens hårdvara {#check-the-hardware-of-your-device}

1. Öppna menyalternativet &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `{{<T "Device" >}}` på huvudskärmen på din VitalControl-enhet.

1. Öppna undermenyn `{{<T "Service" >}}`, välj menyalternativet `{{<T "CheckDeviceDrivers" >}}` och bekräfta med `{{<T "Ok" >}}`.

Enheten listar nu alla hårdvarukomponenter i enheten, tillsammans med deras status. Idealiskt sett bör alla listade komponenter visa en grön prick längst till höger; detta signalerar en fungerande komponent. Om en röd prick visas för en komponent, indikerar detta att den motsvarande komponenten är defekt. I detta fall måste enheten returneras till tillverkaren för service.

   ![VitalControl: Menyväg Kontroll av hårdvarukomponenter](../images/device-check.png "Hårdvarukontroll")

{{% alert title="NOTERA" %}}
Om statusen för alla komponenter visas som intakta (gröna prickar) och det fortfarande finns ett fel på enheten, kan det vara ett programvarufel. Kontakta i så fall din lokala återförsäljare eller tillverkarens [service hotline](https://www.urbanonline.de/en/contact).
{{% /alert %}}
