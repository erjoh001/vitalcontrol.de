---
title: "Cihazınızın yazılım güncellemesi"
linkTitle: Güncelle
weight: 4
description: >
  Bir yazılım güncellemesi gerçekleştirerek, VitalControl cihazınızın yazılımını mevcut en son sürümlere güncelleyebilirsiniz.
---
Öncelikle, cihazınız için [daha yeni bir yazılım sürümünün](../versions/) mevcut olduğundan emin olun ve gerekirse aşağıdaki talimatlara göre cihazınızın yazılımını güncelleyin.

## Gerekli aksesuar {#required-accessory}

Cihazınıza güncellemeyi yüklemek için, USB C konektörü ve USB A konektörü olan çift USB flash sürücü (2'si 1 arada USB bellek) Tip-C/USB 3.0 gereklidir. Böyle bir çift USB flash sürücü cihazınızla birlikte teslim edilir. Ayrıca, farklı satıcılardan böyle bir USB flash sürücü satın alabilirsiniz.

![Çift USB flash sürücü (USB A / USB C)](/images/firmware/update/usb-dual-stick.svg "Çift USB flash sürücü")

## Hazırlık: en son yazılımı indirin {#preparation-download-latest-firmware}

1. USB flash sürücünüzü bilgisayarınızın USB konektörüne takın. Ardından, flash sürücünüzün kök dizininde 'update' adlı yeni bir dizin oluşturun.

    ![Windows Gezgini: 'update' dizini ile USB flash sürücü](../images/create-folder-update.png "USB flash sürücü: 'update' dizini")

1. [Yazılım dosyasını](/download/firmware.vcu) (dosya adı: `firmware.vcu`) indirin ve daha önce oluşturduğunuz `update` dizinine kaydedin. Güncelleme dosyası, flash sürücüde yaklaşık 2.5 MB depolama alanı gerektirir.

    ![Windows Gezgini: 'firmware.vcu' yazılım dosyası ile flash sürücü](../images/save-firmware-file.png "Yazılım dosyası ile flash sürücü")

1. Cihazınızda bir [veri yedeklemesi][] oluşturun.

    {{% alert title="Bilgi" %}}
Veri yedeklemesi önerilen bir önlemdir. VitalControl cihazının yazılımını güncellerken tüm mevcut hayvan ve cihaz verileri korunacaktır.
    {{% /alert %}}

[data backup]: {{< relref "../backup/backup/" >}}

## Yazılım güncellemesini gerçekleştirin {#perform-firmware-update}

1. VitalControl cihazınızın ana ekranında `{{<T "Device" >}}` menü öğesini açın.


1. Alt menüyü `{{<T "Service" >}}` çağırın, menü öğesini `{{<T "FirmwareUpdate" >}}` seçin ve `{{<T "Ok" >}}` ile onaylayın. Şimdi hazırladığınız USB flash sürücüyü takmanız istenecektir:

    ![VitalControl: menü yolu yazılım güncellemesi](../images/firmware-update.png "Yazılım güncellemesi")

1. USB flash sürücüyü (C fişi) cihazın altındaki bağlantı noktasına takın ve `{{<T "Ok" >}}` ile onaylayın.

    ![VitalControl: USB flash sürücüyü takın](/images/firmware/update/plug-in-dual-usb-stick.svg "USB flash sürücüyü takın")

    Cihaz güncellemeyi otomatik olarak gerçekleştirir. Güncelleme sırasında, ekran size güncellemenin ilerleyişi hakkında bilgi verir. Güncelleme tamamlandıktan sonra, cihaz otomatik olarak yeniden başlar ve yeniden başlatmanın ardından bir başarı mesajı görüntüler:

   ![VitalControl: Başarı mesajı yazılım güncellemesi](../images/update-success.png "Başarı yazılım güncellemesi")

   Yeni yazılım artık cihazınıza yüklendi.
