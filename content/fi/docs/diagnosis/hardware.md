---
title: Tarkista VitalControl-laitteesi laitteistokomponentit
linkTitle: Laitteisto
date: 2023-08-07T10:09:46+02:00
draft: false
translationKey: diagnosis/hardware
description: >
  Tarkista VitalControl-laitteesi laitteistokomponentit, erityisesti jos epäilet laitteistovikaa.
luokat: [Diagnostiikka, Laitteisto]
weight: 10
---
Jos laitteessasi ilmenee toimintahäiriö, sinun tulisi ensin suorittaa laitteiston tarkistus selvittääksesi, onko jokin laitteiston komponenteista viallinen.

## Tarkista laitteesi laitteisto {#check-the-hardware-of-your-device}

1. Avaa valikkokohta &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Laite" /> `{{<T "Device" >}}` VitalControl-laitteesi päävalikosta.

1. Kutsu alavalikko `{{<T "Service" >}}`, valitse valikkokohta `{{<T "CheckDeviceDrivers" >}}` ja vahvista `{{<T "Ok" >}}`.

Laite listaa nyt kaikki laitteen laitteistokomponentit yhdessä niiden tilan kanssa. Ihanteellisesti kaikkien listattujen komponenttien tulisi näyttää vihreä piste oikealla puolella; tämä merkitsee toimivaa komponenttia. Jos komponentille näytetään punainen piste, tämä osoittaa, että kyseinen komponentti on viallinen. Tässä tapauksessa laite on palautettava valmistajalle huoltoon.

   ![VitalControl: Valikkopolku laitteiston komponenttien tarkistukseen](../images/device-check.png "Laitteiston tarkistus")

{{% alert title="HUOMAUTUS" %}}
Jos kaikkien komponenttien tila näytetään ehjänä (vihreät pisteet) ja laitteessa on silti toimintahäiriö, voi kyseessä olla ohjelmistovika. Tässä tapauksessa ota yhteyttä paikalliseen jälleenmyyjääsi tai valmistajan [huoltopuhelimeen](https://www.urbanonline.de/en/contact).
{{% /alert %}}
