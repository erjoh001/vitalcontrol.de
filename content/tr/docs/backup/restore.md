---
title: "Veri yedeklemesini geri yükleme"
linkTitle: "Geri Yükle"
date: 2023-07-20
weight: 20
description: >
 Bir veri geri yükleme ile, bir VitalControl cihazının tüm verileri, bir yedekleme dosyası kullanılarak başka bir cihazda geri yüklenebilir.
translationKey: restore
---
{{% usb-drive/en "VitalControl cihazınıza veri yedeklemesini geri yüklemek için," %}}

Bu USB flash sürücüde, geçerli bir **veri yedekleme dosyası `backup.vcu`** içermesi gereken bir `backup` dizini bulunmalıdır.

![Yedekleme dosyası ile USB flash sürücü VitalControl](../images/backup-file.png "Yedekleme dosyası ile USB flash sürücü")

{{% alert title="Not" %}}
USB flash sürücünüzün `backup` dizininde, `.vcu` uzantılı birkaç yedekleme dosyası bulabilirsiniz. VitalControl cihazı her zaman `backup.vcu` adlı dosyadan yedek verileri geri yükler, bu dosya her zaman en yeni dosyadır. Daha eski bir yedekleme dosyasından veri geri yüklemek istiyorsanız (dosya adında yedekleme tarihi bulunan), bu eski yedekleme dosyasını veri geri yüklemeden önce `backup.vcu` olarak yeniden adlandırmanız gerekir!
{{% /alert %}}

## VitalControl cihazına veri geri yükleme {#data-restoration-to-vitalcontrol-device}

1. Verileri geri yüklemek istediğiniz VitalControl cihazının ana ekranında &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Cihaz" /> `Cihaz` menü öğesini açın.

2. `Veri yönetimi` alt menüsünü çağırın ve ardından `Veri yedekleme` alt menü öğesini seçin. Şimdi `Yedeklemeyi geri yükle` menü öğesini seçin ve `Tamam` ile onaylayın. Şimdi bir USB flash sürücü takmanız istenecektir:

   ![VitalControl: menü yolu veri geri yükleme](../images/restore.png "Yedekleme dosyasından geri yükleme")

3. USB flash sürücüyü (C fişi) cihazın altındaki konektöre takın.

   ![VitalControl: USB flash sürücüyü takın](/images/firmware/update/plug-in-dual-usb-stick.svg "USB flash sürücüyü takın")

4. Cihaz USB çubuğunun takıldığını algıladığında, bir onay penceresi belirir. Veri geri yüklemeyi başlatmak için bu açılır pencereyi `Evet` ile onaylayın. Yedeklemeyi açmak ve geri yüklemek bir dakika veya daha uzun sürebilir. Veri geri yükleme tamamlandığında, bir başarı mesajı görüntülenir:

![VitalControl: başarı mesajı veri geri yükleme](../images/restore-done.png "Başarı mesajı veri geri yükleme")

5. Yedek veriler başarıyla VitalControl cihazına geri yüklendi.
