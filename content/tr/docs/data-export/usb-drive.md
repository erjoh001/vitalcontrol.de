---
title: Verilerin USB flash sürücüye aktarılması
linkTitle: USB flash sürücüye
date: 2023-07-20
weight: 10
description: >
  VitalControl cihazında depolanan hayvan verilerini ve ölçüm değerlerini içeren CVS veri dosyalarını bir USB flash sürücüye aktarın.
categories: [Veri aktarımı]
tags: [CSV dosyaları, USB flash sürücü]
translationKey: data-export/usb-drive
---
{{% usb-drive/en "Cihaz verilerinizi aktarmak için," %}}

## Veri aktarımını gerçekleştirin {#perform-data-export}

1. VitalControl cihazınızın ana ekranında &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Cihaz" /> `{{<T "Device" >}}` menü öğesini açın.

2. Alt menüyü `{{<T "DataManagement" >}}` çağırın, `{{<T "AnimalData" >}}` menü öğesini seçin ve `{{<T "Ok" >}}` ile onaylayın.

3. Başka bir alt menü açılır. `{{<T "ExportAnimalData" >}}` menü öğesini seçin ve `{{<T "Ok" >}}` ile onaylayın.

4. Şimdi bir USB flash sürücü takmanız istenecektir:

   ![VitalControl: Menü yolu veri aktarımı](../images/data-export.png "Veri aktarımını çağır")

5. USB flash sürücüyü (C fişi) cihazın altındaki bağlantı noktasına takın.

   ![VitalControl: USB flash sürücüyü takın](/images/firmware/update/plug-in-dual-usb-stick.svg "USB flash sürücüyü takın")

6. Cihaz USB sürücünün takıldığını algıladığında, veri aktarımı otomatik olarak başlar. Yedekleme verilerini yazmak birkaç saniye sürebilir. Veri aktarımı tamamlandığında, bir başarı mesajı görüntülenir:

   ![VitalControl: başarı mesajı veri aktarımı](../images/success-data-export.png "Başarı veri aktarımı")

7. Veri aktarımı şimdi tamamlandı. USB flash sürücünüzdeki `export-csv` dizininde oluşturulan dört [aktarım dosyasını](../export-files/) bulacaksınız.

   ![USB flash sürücüdeki aktarım dosyaları VitalControl](../images/export-files.png "USB flash sürücüdeki aktarım dosyaları")

   {{% alert title="Notlar" %}}
  - Aktarım dosyalarının yanlışlıkla üzerine yazılmasını önlemek için, her aktarım dosyasının dosya adı, dosyanın oluşturulduğu tarih ve saati içerir. Hayvan verilerini birden fazla kez aktardıysanız, en son sürümü kullandığınızdan emin olun.
  - Aktarım dosyalarının boyutu, VitalControl üzerindeki hayvan sayısına ve yapılan ölçümlerin sayısına bağlıdır. Genel olarak, aktarım dosyaları USB sürücüde sadece birkaç kB depolama alanı kaplar.
   {{% /alert %}}

Lütfen çevirilecek Markdown içeriğini buraya yapıştırın.
