---
title: "Veri yedekleme oluşturma"
linkTitle: "Yedekleme"
date: 2023-07-20
weight: 20
description: >
  Bir veri yedeklemesi yoluyla, VitalControl cihazında depolanan tüm verileri içeren bir yedekleme dosyası oluşturulur.
categories: [Veri yedekleme]
tags: [yedekleme dosyası, USB flash sürücü]
translationKey: backup
---
{{% usb-drive/en "Cihazınız için veri yedeklemesi yapmak üzere," %}}

## Veri yedeklemesi yapma {#perform-data-backup}

1. VitalControl cihazınızın ana ekranında &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="{{< T "Device" >}}" /> `{{< T "Device" >}}` menü öğesini açın.

2. Alt menü `{{< T "DataManagement" >}}` öğesini çağırın ve ardından alt menü öğesi `{{< T "DataBackup" >}}` öğesini seçin. Şimdi `{{< T "CreateBackup" >}}` menü öğesini seçin ve `OK` ile onaylayın. Şimdi bir USB flash sürücü takmanız istenecektir:

   ![VitalControl: menü yolu veri yedekleme](../images/backup.png "Veri yedeklemeyi çağır")

3. USB flash sürücüyü (C fişi) cihazın altındaki konektöre takın.

   ![VitalControl: USB flash sürücü takın](/images/firmware/update/plug-in-dual-usb-stick.svg "USB flash sürücü takın")

4. Cihaz USB çubuğunun takıldığını algıladığında, veri yedeklemesi otomatik olarak başlar. Yedekleme verilerini toplama, sıkıştırma ve yazma işlemi bir dakika veya daha uzun sürebilir. Yedekleme tamamlandığında, bir başarı mesajı görüntülenir:

   ![VitalControl: başarı mesajı yedekleme](../images/backup-done.png "Başarılı veri yedekleme")

5. Veri yedeklemesi şimdi oluşturuldu. Oluşturulan `backup.vcu` dosyasını USB flash sürücünüzdeki `backup` dizininde bulacaksınız. Yedekleme dosyası flash sürücüde yaklaşık 1 MB depolama alanı gerektirir.

   ![Yedekleme dosyası ile USB flash sürücü VitalControl](../images/backup-file.png "Yedekleme dosyası ile USB flash sürücü")

   {{% alert title="İpucu" %}}
  USB flash sürücünüzün `backup` dizininde zaten bir `backup.vcu` dosyası varsa, bu dosya yeniden adlandırılacaktır. Dosyanın yeni adı, `backup` ön ekinden ve yedekleme dosyasının oluşturulduğu tarih ve saatten oluşur (örneğin `backup_2023-07-17_12-50-37.vcb`). Yeni yazılan yedekleme dosyasının adı her zaman `backup.vcu` olacaktır.
    {{% /alert %}}


6. Oluşturulan yedekleme dosyası, gerekirse saklanan verileri herhangi bir VitalControl cihazına [geri yüklemek](../restore) için kullanılabilir.
