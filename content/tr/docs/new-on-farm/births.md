---
title: "Doğumlar"
linkTitle: "Doğumlar"
weight: 35
date: 2023-07-28T13:25:28+02:00
draft: false
slug: births
description: >
  Burada doğumlarınızı görebilir ve bir dışa aktarma dosyası oluşturabilirsiniz.
categories: [Doğumlar]
tags: [Doğumlar]
translationKey: new-on-farm/births
---
## Doğumlar {#births}

Bu listede doğumlarınızı görüntüleyebilir, düzenleyebilir ve HI-Tier'e kaydetmek için bir dışa aktarma dosyası oluşturabilirsiniz. Bir dışa aktarma dosyası oluşturmak için şu adımları izleyin:

{{% alert title="İpucu" %}}
Verileri dışa aktarmak için dahil edilen UBS çubuğuna ihtiyacınız var. Talimatları takip etmeden önce USB çubuğunu USB-C adaptörü ile VitalControl cihazınıza bağlayın.
{{% /alert %}}

1. VitalControl cihazınızın ana ekranında, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Çiftlikte yeni" /> `{{<T "NewOnFarm" >}}` menü öğesini seçin ve `{{<T "Ok" >}}` düğmesine basın.

2. Bir alt menü açılır ve burada <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Çiftlikte yeni, transponder yok" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Satın alınan hayvanlar" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Ulusal hayvan kimliği yok" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Doğumlar" /> `{{<T "Births" >}}` ve <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Transponder atanmamış" /> `{{<T "NoTransponderAssigned" >}}` arasında seçim yapabilirsiniz. Menü öğesini seçmek için ok tuşlarını ◁ ▷ △ ▽ kullanın <img src="/icons/main/births.svg" width="40" align="bottom" alt="Doğumlar" /> `{{<T "Births" >}}` ve `{{<T "Ok" >}}` ile onaylayın.

3. Tüm doğumlarınızın listesi açılır.

4. `F3` tuşunu kullanın `{{<T "ExportListBirths" >}}`. Bir alt menü açılır.

5. Menü öğesini seçmek için ok tuşlarını △ ▽ kullanın `{{<T "ExportListBirths" >}}` ve `{{<T "Ok" >}}` ile onaylayın.

6. Liste artık USB çubuğunuzda bir CSV dosyası olarak kaydedilir. `{{<T "Births" >}}` listesindeki tüm hayvanlar silinir.

![VitalControl: Menü Yeni çiftlikte Doğumlar](../images/births.png "Doğumlar")

## Ayar seçenekleri {#setting-options}

İhracat dosyasını oluşturmanın yanı sıra, aşağıdaki seçeneklere sahipsiniz:

- Liste görünümü ve tek hayvan görünümü arasında [Geçiş yap](#change-between-list-view-and-single-animal-view)
- Tüm doğum bildirimlerini [Temizle](../purchased-animals/#clear-all-purchase-notices)
- Hayvan + bildirimleri [Sil](../purchased-animals/#delete-animal--purchase-notice)
- Doğum bildirimini [Temizle](../purchased-animals/#clear-notice-of-purchase)
- Bir bildirimi [Düzenle](#edit-data-of-birth-notice)

{{% alert title="İpucu" %}}
Bazı işlemler `{{<T "PurchasedAnimals" >}}` listesindeki işlemlerle aynıdır. Adım adım talimatlar için bağlantıları takip edin. Yukarıda açıklandığı gibi her zaman önce `{{<T "Births" >}}` listesini açın.
{{% /alert %}}

### Liste görünümü ve tek hayvan görünümü arasında geçiş yapma {#change-between-list-view-and-single-animal-view}

1. <img src="/icons/gear.svg" width="25" align="bottom" alt="Dişli" /> `Açık / Kapalı` düğmesini kullanın.

2. `{{<T "ListView" >}}` ve `{{<T "SingleAnimalView" >}}` arasında seçim yapmak için ok tuşlarını ◁ ▷ kullanın.

3. Ayarınızı `F1` tuşu ile kaydedin &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Kaydet ve geri dön" />&nbsp;. Liste görünümünde, hayvanlar arasında geçiş yapmak için ok tuşlarını ◁ ▷ kullanın.

    ![VitalControl: Menü Yeni çiftlikte Doğumlar](../images/change.png "Liste görünümü ve tek hayvan görünümü arasında geçiş yapma")

### Doğum bildirimi verilerini düzenleme {#edit-data-of-birth-notice}

{{% alert title="İpucu" %}}
Hayvan verilerini düzenlemek sadece liste görünümünde mümkündür!
{{% /alert %}}

1. Düzenlemek istediğiniz hayvanı seçmek için ok tuşlarını △ ▽ kullanın ve `{{<T "Ok" >}}` ile onaylayın.

2. Çeşitli ayarları yapabileceğiniz bir alt menü açılır. Adım adım talimatlar için [buraya](/en/docs/new/calving/#register-a-calving) tıklayın.

    ![VitalControl: Menü Yeni çiftlikte Doğumlar](../images/edit2.png "Bir doğum bildirimini düzenle")
