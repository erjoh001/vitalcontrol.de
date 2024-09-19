---
title: Satın Alınan Hayvanlar
linkTitle: Satın Alınan Hayvanlar
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: purchased-animals
description: >
  Burada mevcut satın alımlarınızı görüntüleyebilir ve verileri dışa aktarabilirsiniz.
Kategoriler: [Çiftlikte Yeni]
Etiketler: [Çiftlikte Yeni]
translationKey: new-on-farm/new-on-farm
---
## Satın Alınan Hayvanlar {#purchased-animals}

Bu listede toplu kayıt yoluyla oluşturduğunuz tüm hayvanları bulacaksınız. Bu listeyi dışa aktarabilir ve böylece eklemelerinizi doğrudan sürü yönetim programı DSP-Herde ve HI-Tier'e kaydedebilirsiniz. Alternatif olarak, tüm satın alma bildirimlerini silebilirsiniz.

{{% alert title="İpucu" %}}
Veri dışa aktarmak için dahil edilen UBS çubuğuna ihtiyacınız var. Talimatları takip etmeden önce USB çubuğunu USB-C adaptörü ile VitalControl cihazınıza bağlayın.
{{% /alert %}}

1. VitalControl cihazınızın ana ekranında, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Çiftlikte Yeni" /> `{{<T "NewOnFarm" >}}` menü öğesini seçin ve `{{<T "Ok" >}}` düğmesine basın.

2. Bir alt menü açılır ve burada <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Çiftlikte Yeni, transponder yok" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Satın Alınan Hayvanlar" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Ulusal hayvan kimliği yok" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Doğumlar" /> `{{<T "Births" >}}` ve <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Transponder atanmamış" /> `{{<T "NoTransponderAssigned" >}}` arasında seçim yapabilirsiniz. Menü öğesini seçmek için ok tuşlarını ◁ ▷ △ ▽ kullanın <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Satın Alınan Hayvanlar" /> `{{<T "PurchasedAnimals" >}}` ve `{{<T "Ok" >}}` ile onaylayın.

3. Toplu kayıt menü öğesi aracılığıyla kaydettiğiniz satın alımlarınızın bir listesi açılır.


4. `{{<T "CSVExport" >}}` için `F2` tuşunu kullanın.

5. CSV mesaj listesi artık USB belleğinize kaydedildi.

    ![VitalControl: Satın alınan hayvanların listesi, csv dışa aktarma](../images/purchasedanimals.png "Satın alınan hayvanlar, csv dışa aktarma")

## Seçenekler: Dışa aktarmadan sonra tüm bildirimleri sil {#options-delete-all-notices-after-export}

Bu seçenekle, CSV dosyası dışa aktarıldıktan sonra `{{<T "PurchasedAnimals" >}}` listesindeki tüm mesajların silinip silinmeyeceğini ayarlayabilirsiniz. Bu seçeneği yalnızca mesajlara artık ihtiyacınız olmadığından emin olduğunuzda kullanın!

1. `F3` tuşunu kullanın. Bir alt menü açılır.

2. `{{<T "DeleteAllNoticesAfterExport" >}}` menü öğesini seçmek için ok tuşlarını △ ▽ kullanın ve `{{<T "Ok" >}}` ile onaylayın.

3. Kutu artık bir işaretle işaretlenmiştir. Seçenek etkinleştirildi. Seçeneği devre dışı bırakmak için tekrar `{{<T "Ok" >}}` ile onaylayın.

    ![VitalControl: Satın alınan hayvanların listesi, csv dışa aktarma](../images/delete-all.png "Dışa aktarmadan sonra tüm bildirimleri sil")

## Doğrudan fonksiyon çağrıları {#direct-function-calls}

Dışa aktarma dosyasını oluşturmanın yanı sıra, aşağıdaki seçeneklere sahipsiniz:

- [Transponder bağlantısını kaldır](#unlink-transponder)
- [Tüm satın alma bildirimlerini temizle](#clear-all-purchase-notices)
- [Hayvan + bildirimi sil](#delete-animal--purchase-notice)
- [Satın alma bildirimini temizle](#clear-notice-of-purchase)
- [Bir işareti düzenle](#edit-data-of-purchased-animal)

{{% alert title="İpucu" %}}
Yukarıdaki talimatlarda açıklandığı gibi her zaman önce `{{<T "PurchasedAnimals" >}}` listesini açın.
{{% /alert %}}

### Transponder bağlantısını kaldır {#unlink-transponder}

Bu işlevi bir hayvandan transponder'ı kaldırmak için kullanabilirsiniz.

1. `F3` tuşunu kullanın. Bir alt menü açılır.

2. `{{<T "UnlinkTransponder" >}}` menü öğesini seçmek için ok tuşlarını △ ▽ kullanın ve `{{<T "Ok" >}}` ile onaylayın.

3. Transponder başarıyla kaldırıldı.

    ![VitalControl: Satın alınan hayvanların listesi, csv dışa aktarma](../images/unlink-transponder.png "Satın alınan hayvanlar, transponder bağlantısını kaldır")

### Tüm satın alma bildirimlerini temizle {#clear-all-purchase-notices}

Bu işlevle, önce bir dışa aktarma dosyası oluşturmanıza gerek kalmadan `{{<T "PurchasedAnimals" >}}` listesindeki tüm hayvanları silebilirsiniz.

1. `F3` tuşunu kullanın. Bir alt menü açılır.

2. `{{<T "ClearAllPurchaseNotices" >}}` menü öğesini seçmek için ok tuşlarını △ ▽ kullanın ve `{{<T "Ok" >}}` ile onaylayın.

3. Satın alma bildirimleri başarıyla silindi.

    ![VitalControl: Satın alınan hayvanların listesi, satın alma bildirimlerini temizle](../images/clear.png "Tüm satın alma bildirimlerini temizle")

### Hayvan + satın alma bildirimini sil {#delete-animal--purchase-notice}

Bir hayvanı ve ilgili satın alma bildirimini silmek için şu adımları izleyin:

1. Silmek istediğiniz hayvanı seçmek için ok tuşlarını △ ▽ kullanın.

2. `F3` tuşunu kullanın. Bir alt menü açılır.

3. `{{<T "UnregisterAnimalAndBirthNotice" >}}` menü öğesini seçmek için ok tuşlarını △ ▽ kullanın ve `{{<T "Ok" >}}` ile onaylayın.

4. Hayvan ve erişim mesajı başarıyla silindi.

    ![VitalControl: Satın alınan hayvanların listesi, hayvan + bildirimi sil](../images/delete.png "Hayvan + bildirimi sil")

### Satın alma bildirimini temizle {#clear-notice-of-purchase}

Bir hayvanın satın alma bildirimini listeden silmek için şu adımları izleyin:

1. Satın alma bildirimini silmek istediğiniz hayvanı seçmek için ok tuşlarını △ ▽ kullanın.

2. `F3` tuşunu kullanın. Bir alt menü açılır.

3. `{{<T "ClearPurchaseNotice" >}}` menü öğesini seçmek için ok tuşlarını △ ▽ kullanın ve `{{<T "Ok" >}}` ile onaylayın.

4. Seçilen hayvanın satın alma bildirimi başarıyla silindi.

    ![VitalControl: Satın alınan hayvanların listesi, satın alma bildirimini temizle](../images/clearnotice.png "Satın alma bildirimini temizle")

### Satın alınan hayvanın verilerini düzenle {#edit-data-of-purchased-animal}

Satın alma listesindeki bir hayvanın verilerini düzenlemek için şu adımları izleyin:

1. Düzenlemek istediğiniz hayvanı seçmek için ok tuşlarını △ ▽ kullanın.

2. `{{<T "Ok" >}}` düğmesini kullanın. Hayvan verileriyle ilgili bir alt menü açılır. Bunları nasıl düzenleyeceğinizi [buradan](/en/docs/actions/edit/#edit-animal-data) öğrenebilirsiniz.

    ![VitalControl: Satın alınan hayvanların listesi, Hayvan verilerini düzenle](../images/edit.png "Satın alınan hayvanın verilerini düzenle")
