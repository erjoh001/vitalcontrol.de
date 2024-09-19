---
title: VitalControl cihazınızın donanım bileşenlerini kontrol etme
linkTitle: Donanım
date: 2023-08-07T10:09:46+02:00
draft: false
translationKey: diagnosis/hardware
description: >
  VitalControl cihazınızın donanım bileşenlerini kontrol edin, özellikle bir donanım arızası şüphesi varsa.
Kategoriler: [Teşhis, Donanım]
weight: 10
---
Cihazınızda bir arıza varsa, öncelikle herhangi bir donanım bileşeninin arızalı olup olmadığını netleştirmek için bir donanım kontrolü yapmalısınız.

## Cihazınızın donanımını kontrol edin {#check-the-hardware-of-your-device}

1. VitalControl cihazınızın ana ekranında &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Cihaz" /> `{{<T "Device" >}}` menü öğesini açın.

1. Alt menüyü `{{<T "Service" >}}` çağırın, `{{<T "CheckDeviceDrivers" >}}` menü öğesini seçin ve `{{<T "Ok" >}}` ile onaylayın.

Cihaz şimdi tüm donanım bileşenlerini ve durumlarını listeleyecektir. İdeal olarak, listelenen tüm bileşenlerin en sağında yeşil bir nokta gösterilmelidir; bu, çalışan bir bileşeni işaret eder. Bir bileşen için kırmızı bir nokta gösteriliyorsa, bu, ilgili bileşenin arızalı olduğunu gösterir. Bu durumda, cihaz servis için üreticiye geri gönderilmelidir.

   ![VitalControl: Donanım bileşenlerinin kontrolü menü yolu](../images/device-check.png "Donanım kontrolü")

{{% alert title="NOT" %}}
Tüm bileşenlerin durumu sağlam (yeşil noktalar) olarak gösteriliyorsa ve cihazda hala bir arıza varsa, bu bir yazılım hatası olabilir. Bu durumda, yerel bayinizle veya üreticinin [servis hattı](https://www.urbanonline.de/en/contact) ile iletişime geçin.
{{% /alert %}}
