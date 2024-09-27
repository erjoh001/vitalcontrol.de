---
title: Ağırlığı değerlendir
linkTitle: Ağırlığı değerlendir
slug: weight
weight: 10
description: >
 Ağırlık bölümünde depolanan verilerinizi değerlendirin.
date: 2023-07-26
Kategoriler: [Değerlendirme]
Etiketler: [Değerlendirme, ağırlık]
translationKey: evaluation/weight
maphilight: true
---
{{% alert title="İpucu" %}}
Varsayılan ayarda, VitalControl'de depolanan tüm hayvanlar değerlendirmeye dahil edilir. Bir [filtre](../../filter/) kullanarak, cihazınızdaki hayvanların bir alt kümesine, örneğin sadece erkek hayvanlara veya belirli bir maksimum yaşa kadar olan hayvanlara değerlendirmeyi sınırlayabilirsiniz.
{{% /alert %}}

{{% alert title="İpucu" %}}
Bir menü öğesine tıklarsanız, ilgili işlevin açıklamasına yönlendirilirsiniz.
{{% /alert %}}

<img src="../images/imagemap.png" alt="VitalControl Değerlendirme" title="Ağırlık" usemap="#workmap" class="maphilight" />

<map name="workmap">
   <area shape="rect" coords="3,40,116,160" alt="Bugünün tartımları" title="VitalControl ile kaydedilen hayvanlarınızın bugünkü ağırlık değerlerini değerlendirin&#10;Fare tıklaması: belgeler" href="/tr/docs/evaluation/weight/#todays-weighings">
   <area shape="rect" coords="116,40,238,160" alt="Doğum ağırlıkları" title="Depolanan doğum ağırlıklarınızı değerlendirin&#10;Fare tıklaması: belgeler" href="/tr/docs/evaluation/weight/#birth-weights">
   <area shape="rect" coords="3,160,116,279" alt="Ağırlık gelişimi" title="Hayvanlarınızın ağırlık gelişimini değerlendirin&#10;Fare tıklaması: belgeler" href="/tr/docs/evaluation/weight/#weight-development">

   <area shape="rect" coords="150,282,238,319" alt="Filtre" title="Bir filtre ayarlayın&#10;Fare tıklaması: belgeler" href="/tr/docs/filter">
   <area shape="rect" coords="2,282,95,319" alt="Geri" title="Bir seviye geri git&#10;Fare tıklaması: belgeler" href="/tr/docs/evaluation/">
</map>

## Bugünün tartımları {#todays-weighings}
Bu değerlendirmede son 6 saate ait tartımlarla ilgili aşağıdaki bilgileri görebilirsiniz:
- Ortalama hayvan ağırlığı
- Doğumdan bu yana ortalama günlük kazanç
- Son tartımdan bu yana ortalama günlük artış
- Doğum ağırlığının X gün sonra iki katına çıkması

Değerlendirmeyi gerçekleştirmek için aşağıdaki adımları izleyin:

1. Cihazınızın ana ekranında &nbsp;<img src="/icons/main/evaluation.svg" width="50" align="bottom" alt="Evaluate" />&nbsp; `{{<T "Evaluation" >}}` simgesini vurgulayın. `{{<T "Ok" >}}` ile onaylayın.

2. Başka bir alt menü açılır ve burada ok tuşlarını △ ▽ ◁ ▷ kullanarak `{{<T "Weight" >}}`, `{{<T "Temperature" >}}`, `{{<T "Rating" >}}` ve `{{<T "Mortality" >}}` menü öğeleri arasında seçim yapabilirsiniz. &nbsp;<img src="/icons/evaluation/weight.svg" width="40" align="bottom" alt="Weight" />&nbsp; `{{<T "Weight" >}}` öğesini seçin ve `{{<T "Ok" >}}` ile onaylayın.

3. Şimdi Ağırlık bölümüne ait değerlendirme seçenekleri görünür. Değerlendirme seçeneğini seçin &nbsp;<img src="/icons/evaluation/weighingtoday.svg" width="50" align="bottom" alt="Today's weighing" />&nbsp; `{{<T "WeighingToday" >}}` ve `{{<T "Ok" >}}` ile onaylayın. Cihaz şimdi başarı değişkenlerini hesaplamaya başlar.

4. Hesaplama tamamlandığında, yukarıda belirtilen başarı değişkenlerini görüntüleyebilirsiniz. Görüntülenen menüde gezinmek için ok tuşlarını △ ▽ kullanın.

   ![VitalControl: menu Evaluation Today's weighings](../images/todaysweighings.png "Evaluate Today's weighings")

## Doğum ağırlıkları {#birth-weights}
Bu değerlendirmede aşağıdaki bilgileri görüntüleyebilirsiniz:
- Ortalama doğum ağırlığı
- Ağırlık sınıfları

Değerlendirmeyi gerçekleştirmek için aşağıdaki adımları izleyin:

1. Cihazınızın ana ekranında &nbsp;<img src="/icons/main/evaluation.svg" width="50" align="bottom" alt="Evaluate" />&nbsp; `{{<T "Evaluation" >}}` simgesini vurgulayın. `{{<T "Ok" >}}` ile onaylayın.

2. Başka bir alt menü açılır ve burada ok tuşlarını △ ▽ ◁ ▷ kullanarak `{{<T "Weight" >}}`, `{{<T "Temperature" >}}`, `{{<T "Rating" >}}` ve `{{<T "Mortality" >}}` menü öğeleri arasında seçim yapabilirsiniz. &nbsp;<img src="/icons/evaluation/weight.svg" width="40" align="bottom" alt="Weight" />&nbsp; `{{<T "Weight" >}}` öğesini seçin ve `{{<T "Ok" >}}` ile onaylayın.

3. Şimdi ağırlık bölümüne ait değerlendirme seçenekleri görünür. &nbsp;<img src="/icons/evaluation/birthweights.svg" width="60" align="bottom" alt="Birth weights" />&nbsp; `{{<T "BirthWeights" >}}` öğesini seçin ve `{{<T "Ok" >}}` ile onaylayın. Cihaz şimdi başarı değişkenlerini hesaplamaya başlar.


4. Hesaplama tamamlandığında, yukarıda belirtilen başarı değişkenlerini görüntüleyebilirsiniz. Görüntülenen menüde gezinmek için ok tuşlarını △ ▽ kullanın.

   ![VitalControl: menu Evaluation Birth weights](../images/birthweights.png "Doğum ağırlıklarını değerlendir")

## Ağırlık gelişimi {#weight-development}

Bu değerlendirmede tüm tartımlarla ilgili aşağıdaki bilgileri görebilirsiniz:
- Ortalama hayvan ağırlığı
- Doğumdan bu yana günlük ortalama ağırlık artışı
- Son tartımdan bu yana günlük ortalama ağırlık artışı
- Doğum ağırlığının iki katına çıkması

Değerlendirmeyi gerçekleştirmek için şu adımları izleyin:

1. Cihazınızın ana ekranında &nbsp;<img src="/icons/main/evaluation.svg" width="50" align="bottom" alt="Evaluate" />&nbsp; `{{<T "Evaluation" >}}` simgesini vurgulayın. `{{<T "Ok" >}}` ile onaylayın.

2. Başka bir alt menü açılır ve ok tuşlarını △ ▽ ◁ ▷ kullanarak `{{<T "Weight" >}}`, `{{<T "Temperature" >}}`, `{{<T "Rating" >}}` ve `{{<T "Mortality" >}}` menü öğeleri arasında seçim yapabilirsiniz. &nbsp;<img src="/icons/evaluation/weight.svg" width="40" align="bottom" alt="Weight" />&nbsp; `{{<T "Weight" >}}` öğesini seçin ve `{{<T "Ok" >}}` ile onaylayın.

3. Şimdi ağırlık bölümü için değerlendirme seçenekleri görünür. &nbsp;<img src="/icons/evaluation/weightdevelopment.svg" width="55" align="bottom" alt="Weight development" />&nbsp; `{{<T "WeightDevelopment" >}}` öğesini seçin ve `{{<T "Ok" >}}` ile onaylayın. Cihaz şimdi başarı değişkenlerini hesaplamaya başlar.

4. Hesaplama tamamlandığında, yukarıda belirtilen başarı değişkenlerini görüntüleyebilirsiniz. Görüntülenen menüde gezinmek için ok tuşlarını △ ▽ kullanın.

   ![VitalControl: menu Evaluation Weight development](../images/weightdevelopment.png "Ağırlık gelişimini değerlendir")

