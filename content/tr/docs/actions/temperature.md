---
title: Sıcaklığı ölç
linkTitle: Sıcaklık
slug: measure-temperature
weight: 10
description: >
  Hayvanlarınızda ateşi ölçün.
date: 2023-07-26
Categories: [Actions]
tags: [Actions, fever, temperature]
translationKey: actions/temperature
---

## Ateşi ölç {#measure-fever}

Hayvanlarınızın sıcaklığını ölçmek için sıcaklık eylemini kullanın. Ölçüm ucunu belirtilen ölçüm derinliğine kadar rektal olarak yerleştirin (büyük hayvanlar için tüm uzunluğu şişkinliğe kadar, küçük ruminantlar için yaklaşık 6 cm veya ölçüm ucunun 2/3'ü kadar). Ölçüm işlemi otomatik olarak gerçekleşir. Ölçüm işlemi tamamlandığında, cihaz ölçülen sıcaklığı gösterir. Renk kodlaması, sıcaklığın yeşil, sarı veya kırmızı aralıkta olup olmadığını gösterir. Sıcaklık ölçme kampanyası sırasında bir dizi seçeneğiniz vardır:

- Ölçümü hayvana özgü olarak belgelemek için [Sonucu kaydet](#save-result)
- Hayvanı [İzleme Listesine ekleyin](#put-on-the-watch-list). Bu, tekrarları kontrol etmenizi kolaylaştırır, çünkü bu hayvanları 'gözlem listesi'ni kullanarak çağırabilir ve böylece dikkat çeken hayvanları daha kolay bulabilirsiniz.
- [Ölçüm Yeri Aydınlatmasını](#lighting-of-the-measurement-location-on-and-off) açıp kapatın
- [Ölçümü tekrarlayın](#repeat-the-measurement)
- [Eylemi iptal edin](#cancel-the-action)

{{% alert title="İpucu" %}}
Sıcaklık sarı alanda ("yükselmiş") veya kırmızı alanda ("ateş") ise, VitalControl seçilen hayvanı otomatik olarak alarm listesine ekler. Diğer verilerle ilişkilendirerek, bireysel hayvanın sağlığını sürekli olarak izleyebilirsiniz.
{{% /alert %}}

### Ön hazırlıklar {#preliminary-steps}

1. VitalControl cihazınızın ana ekranında, menü öğesini seçin &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` ve `{{<T "Ok" >}}` düğmesine basın.

2. Ya bir hayvanı transponder kullanarak tarayın ya da listeden bir hayvan seçin. `{{<T "Ok" >}}` ile onaylayın ve ok tuşları △ ▽ ile bir hayvan seçin. `{{<T "Ok" >}}` ile onaylayın.

3. Bir alt menüde hayvan eylemleri açılır. <img src="/icons/actions/temperature.svg" width="10" align="bottom" alt="Temperature" /> `{{<T "Temperature" >}}` eylemi otomatik olarak seçilir. `{{<T "Ok" >}}` ile onaylayın.

4. Şimdi ölçümü gerçekleştirin. Ölçüm tamamlandığında, belirlenen eşik değerine bağlı olarak sıcaklık mavi, yeşil, sarı veya kırmızı renkte vurgulanır.

{{< tabpane >}}
{{< tab header="Ön adımlar:" text=true disabled=true />}}
{{% tab header="Transponder taraması" text=true %}}
![VitalControl: Menü Eylemleri Ön adımlar](../images/firststeps-scan.png "Ön adımlar")
{{% /tab %}}
{{% tab header="Listeden manuel seçim" text=true %}}
![VitalControl: Menü Eylemleri Ön adımlar](../images/firststeps.png "Ön adımlar")
{{% /tab %}}
{{< /tabpane >}}

### Sonucu kaydet {#save-result}

1. Ön adımları tamamlayın.

2. Sonucu kaydetmek için `F3` tuşunu kullanın <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> veya `{{<T "Ok" >}}` ile onaylayın.

    ![VitalControl: Menü Eylemleri Sonuçları kaydet](../images/saveresults.png "Sonuçları kaydet")

### İzleme listesine ekle {#put-on-the-watch-list}

1. Ön adımları tamamlayın.

2. Orta üst `Aç/Kapa` düğmesine basın <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.

3. Bir açılır menü açılır ve menü öğelerinden `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` veya `{{<T "Flashlight" >}}` seçebilirsiniz. `{{<T "AddToWatchList" >}}` seçmek için ok tuşlarını △ ▽ kullanın ve merkezi `{{<T "Ok" >}}` tuşuna veya `F3` tuşuna `{{<T "Ok" >}}` basın.

    ![VitalControl: Menü Eylemleri İzleme listesine ekle](../images/watchlist.png "İzleme listesine ekle")

### Ölçüm yerinin aydınlatmasını açma ve kapama {#lighting-of-the-measurement-location-on-and-off}

1. Ön adımları tamamlayın.

2. Orta üst `Aç/Kapa` düğmesine basın <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.

3. Bir açılır menü açılır ve menü öğelerinden `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` veya `{{<T "Flashlight" >}}` seçebilirsiniz. `{{<T "Flashlight" >}}` seçeneğini seçmek için ok tuşlarını △ ▽ kullanın ve orta `{{<T "Ok" >}}` tuşuna veya `F3` tuşuna `{{<T "Ok" >}}` basın.

    ![VitalControl: Menü Eylemleri El Feneri aç kapat](../images/light.png "El Feneri aç kapat")

### Ölçümü tekrarlayın {#repeat-the-measurement}

1. Ön hazırlık adımlarını tamamlayın.

2. Orta üst `Aç/Kapat` düğmesine basın <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Açılır menüyü aç" />.

3. Bir açılır menü açılır ve menü öğelerinden `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` veya `{{<T "Flashlight" >}}` seçebilirsiniz. `{{<T "RepeatMeasurement" >}}` seçeneğini seçmek için ok tuşlarını △ ▽ kullanın ve orta `{{<T "Ok" >}}` tuşuna veya `F3` tuşuna `{{<T "Ok" >}}` basın.

    ![VitalControl: Menü Eylemleri Işık aç kapat](../images/repeat.png "Işık aç kapat")

### Eylemi iptal et {#cancel-the-action}

1. Ön hazırlık adımlarını tamamlayın.

2. Eylemi iptal etmek için `F1` <img src="/icons/footer/cancel.svg" width="25" align="bottom" alt="İptal" /> tuşuna basın.

    ![VitalControl: Menü Eylemleri Eylemi iptal et](../images/saveresults.png "Eylemi iptal et")

{{% alert title="İpucu" %}}
Bu eylem mevcut değilse, eylem muhtemelen devre dışı bırakılmıştır! Eylemi [eylem ayarları](../setting/) menüsünde etkinleştirin. Alternatif olarak, tüm eylemleri sıfırlamak bu eylemi geri getirecektir.
{{% /alert %}}
