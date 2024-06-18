---
title: Hayvan ve ölçüm verilerinin çiftlik yönetim bilgisayarına aktarılması
linkTitle: Veri aktarımı (PC)
date: 2023-07-19
weight: 15
description: >
 VitalControl cihazından hayvan verilerini ve ölçüm değerlerini çeşitli CVS dosyalarına aktarın
categories: [Veri aktarımı]
translationKey: farmPC
---
VitalControl'dan bilgisayarınızın bir kütle depolama cihazına veri aktarmak için aşağıdaki adımları izleyin:

### VitalControl'ü PC'ye Bağlayın {#connect-vitalcontrol-to-pc}

1. VitalControl cihazını, verilen USB kablosu ile bilgisayarınıza veya dizüstü bilgisayarınıza bağlayın.

   ![VitalControl'ü PC'ye veya dizüstü bilgisayara bağlayın](/images/synchronisation/connect-to-pc.svg "VitalControl'ü PC'ye bağlayın")

1. VitalControl cihazınızın açık olduğundan emin olun.

### Veri aktarımını gerçekleştirin {#perform-data-export}

1. Başlat menüsünü açmak için Windows tuşuna basın

1. *Sadece Windows 11*: `Tüm Uygulamalar` düğmesine tıklayın

1. Yüklü uygulamalar listenizde `U` harfine kadar aşağı kaydırın. Orada `Urban VitalControl` menü girişini bulmalısınız. Gerekirse, tüm alt menü girişlerinin görüntülenmesi için bu girişi genişletin.

   {{% alert title="Dikkat" %}}
Eğer uygulamalar listenizde `Urban VitalControl` girişini bulamazsanız, önce bilgisayarınıza `VCSynchronizer` yazılımını [yüklemeniz](../vcsynchronizer/installation/) gerekebilir.
   {{% /alert %}}

1. `Veri aktarımı (CVS)` menü öğesine tıklayın.

   ![Windows Başlat menüsü, Urban VitalControl (VCSynchronizer) menü girişi](../vcsynchronizer/images/data-export/data-export.png "Windows başlat menüsü, VitalControl")

1. Aktarım işlemi başlatılır. Veri aktarımı tamamlandığında, dört yeni oluşturulmuş [aktarım dosyasını](../../data-export/export-files/) içeren yerel veri dizinini gösteren bir Explorer penceresi açılır.

   ![Aktarım dosyaları ile yerel veri dizini](../../data-export/images/export-files.png "Aktarım dosyaları, yerel olarak saklanmış")

   {{% alert title="Not" %}}
  Bu dört [aktarım dosyasının](../../data-export/export-files/) her birini seçtiğiniz bir hesap tablosu programında (örneğin [Microsoft Excel](https://products.office.com/excel) veya [OpenOffice Calc](https://www.openoffice.org/)) açabilir ve verilerin ileri düzey analizini gerçekleştirebilirsiniz. Örnek olarak, bir hesap tablosu programında `animals.csv` tablosunun görünümü aşağıda gösterilmiştir:


  ![Bir elektronik tablo yazılımında açılmış dışa aktarılmış hayvan veri tablosu](../../data-export/images/animals.png "Hayvan verileri ile elektronik tablo yazılımı")
   {{% /alert %}}
