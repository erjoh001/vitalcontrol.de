---
title: "Veri toplama"
linkTitle: "Veri toplama"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: data-acquisition
description: >
 Hayvan veri toplama için ilgili ayarların saklanması
Kategoriler: [settings]
Etiketler: [settings, data acquisition]
translationKey: settings/data-acquisition
maphilight: true
---
## Genel Bakış {#overview}

Aşağıdaki grafik, hayvan verilerinin kaydedilmesiyle ilgili mevcut ayarları listeler:

<img src="../images/animaldataacquisition.png" alt="Hayvan verilerinin toplanması" title="Hayvan verilerinin toplanması" usemap="#workmap-overview" class="maphilight" />

<map name="workmap-overview">
  <area shape="rect" coords="3,40,239,80" alt="Ağırlık kaydı" title="Alt menü: Ağırlık kaydı için ayarlar&#10;Fare tıklaması: belgeleri aç" href="#settings-weight-recording">
  <area shape="rect" coords="3,80,239,160" alt="Hayvan değerlendirme modu" title="Hayvan değerlendirme modunu ayarla&#10;Fare tıklaması: belgeleri aç" href="#mode-of-animal-rating">
  <area shape="rect" coords="3,160,239,240" alt="Taze inekler için kontrol süresi" title="Taze inekler için kontrol süresini ayarla&#10;Fare tıklaması: belgeleri aç" href="#control-period-of-fresh-cows">

  <area shape="rect" coords="2,282,125,318" alt="Geri" title="Bir seviye geri git" href="/tr/docs/settings/">
</map>

{{% alert title="İpucu" %}}
Aşağıdaki grafikte bir sembolün üzerine fare imlecini getirin ve bir an bekleyin. İlgili ayar hakkında bilgi veren bir araç ipucu belirir. Çizgilerden birine tıklarsanız, ilgili ayarın açıklamasına yönlendirilirsiniz.
{{% /alert %}}

## Ayarlar *Ağırlık kaydı* {#settings-weight-recording}

Aşağıdaki grafik, hayvanların ağırlık kaydıyla ilgili mevcut ayarları listeler:

<img src="../images/weightrecording.png" alt="Ağırlık kaydı için alt menü öğeleri ayarları" title="Ağırlık kaydı ayarları" usemap="#workmap-weight" class="maphilight" />

<map name="workmap-weight">
  <area shape="rect" coords="1,40,230,199" alt="Günlük ağırlık artışı değerlendirme eşik değerleri" title="Günlük ağırlık artışının değerlendirilmesi için eşik değerleri ayarla&#10;Fare tıklaması: belgeleri aç" href="#assessment-of-daily-weight-gain-threshold-values">
  <area shape="rect" coords="1,200,230,280" alt="Doğum ağırlığı" title="Yeni bir hayvan kaydedilirken önerilen doğum ağırlığını ayarla&#10;Fare tıklaması: belgeleri aç" href="#birth-weight">
  <area shape="rect" coords="1,280,230,360" alt="Ortalama günlük ağırlık artışı" title="Hayvanların ağırlığını tahmin ederken kullanılan ortalama günlük ağırlık artışını ayarla&#10;Fare tıklaması: belgeleri aç" href="#average-daily-weight-gain">
  <area shape="rect" coords="1,360,230,440" alt="Ağırlık kaydı hassasiyeti" title="Ağırlık kaydının hassasiyetini ayarla&#10;Fare tıklaması: belgeleri aç" href="#precision-of-weight-recording">
</map>

### Günlük ağırlık artışının değerlendirilmesi: Eşik değerler {#assessment-of-daily-weight-gain-threshold-values}

{{% alert title="İpucu" %}}
Kırmızı alan "kritik derecede düşük ağırlık artışı" alanını gösterir. Sarı alan "optimum olmayan ağırlık artışı" alanını gösterir.
{{% /alert %}}

Günlük ağırlık artışının değerlendirilmesi için eşik değerleri ayarlamak için şu adımları izleyin:

1. VitalControl cihazınızın ana ekranında, <img src="/icons/gear.svg" width="25" align="bottom" alt="Ayarlar" /> `{{<T "Settings" >}}` menü öğesini seçin ve `{{<T "Ok" >}}` düğmesine basın.

2. Çeşitli ayarların görüntülendiği bir alt menü açılır. Ok tuşlarını △ ▽ kullanarak `{{<T "DataAcquisition" >}}` öğesini seçin. `{{<T "Ok" >}}` ile onaylayın.

3. Başka bir alt menü açılır ve burada ok tuşlarını △ ▽ kullanarak `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` ve `{{<T "ControlPeriodFreshCows" >}}` ayar alanları arasında geçiş yapabilirsiniz. `{{<T "WeightRecording" >}}` öğesini seçin ve `{{<T "Ok" >}}` ile onaylayın.

4. `{{<T "DailyWeightGain" >}}` tercih alanı otomatik olarak seçilir. İstediğiniz hayvan türünü seçmek için ok tuşlarını ◁ ▷ kullanın. `{{<T "Ok" >}}` ile onaylayın. Alternatif olarak, kırmızı ve sarı alanları düzenlemek için doğrudan <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Düzenle" /> `F3` tuşu ile kalem simgesini kullanabilirsiniz.

5. Kırmızı ve sarı alanda istenen "büyük veya eşit" g/gün artışını seçmek için ok tuşlarını △ ▽ kullanın. Kırmızı ve sarı alanlar arasında seçim yapmak için `F2`/`F3` 🡄 🡆 tuşlarını veya ok tuşlarını ◁ ▷ kullanın.

6. İstediğiniz "büyük veya eşit" g/gün artışını ayarladıktan sonra, `F1` tuşunu <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Çıkış" /> kullanarak veya `{{<T "Ok" >}}` ile onaylayarak `{{<T "DailyWeightGain" >}}` alanına geri dönün.

    ![VitalControl: günlük ağırlık artışı menü ayarları](../images/dailyweightgain.png "Günlük ağırlık artışı")

### Doğum ağırlığı {#birth-weight}

Cihaz, yeni hayvanlar oluştururken burada ayarlarda saklanan doğum ağırlığını varsayılan değer olarak kullanır. Yeni doğan bir hayvanın bireysel doğum ağırlığını daha hızlı seçebilmek için, bu varsayılan değeri çiftliğiniz için ayarlamanız gerekebilir. `{{<T "BirthWeight" >}}` değerini ayarlamak için şu adımları izleyin:

1. VitalControl cihazınızın ana ekranında, <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` menü öğesini seçin ve `{{<T "Ok" >}}` düğmesine basın.

2. Çeşitli ayarların görüntülendiği bir alt menü açılır. `{{<T "DataAcquisition" >}}` öğesini seçmek için ok tuşlarını △ ▽ kullanın. `{{<T "Ok" >}}` ile onaylayın.

3. `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` ve `{{<T "ControlPeriodFreshCows" >}}` ayar alanları arasında geçiş yapmak için ok tuşlarını △ ▽ kullanabileceğiniz başka bir alt menü açılır. `{{<T "WeightRecording" >}}` öğesini seçin ve `{{<T "Ok" >}}` ile onaylayın.

4. `{{<T "BirthWeight" >}}` ayar alanını seçmek için ok tuşlarını △ ▽ kullanın ve istenen doğum ağırlığını ayarlamak için ok tuşlarını ◁ ▷ kullanın. Cihaz artık yeni hayvanlar oluştururken burada tanımlanan doğum ağırlığını standart olarak kullanır. Yeni doğan bir hayvanın bireysel doğum ağırlığı daha hızlı seçilebilir.

    ![VitalControl: menu settings birth weight](../images/birthweight.png "Doğum ağırlığı")

{{% alert title="Uyarı" color="warning" %}}
Standart doğum ağırlığı yalnızca yaklaşık bir değerdir ve yeni bir hayvan oluştururken bireysel olarak ayarlanmalıdır.
Bu ayarlamayı yapmak istemiyorsanız veya hayvanları otomatik olarak [arka planda](../animal-registration/#auto-registration) oluşturuyorsanız, yeni bir hayvan oluştururken doğum ağırlığı sorgulanmamalı veya kaydedilmemelidir. Bu, [hayvan kaydı](../animal-registration/#set-recorded-weights) ayarlarında tanımlanabilir.
{{% /alert %}}

{{% alert title="Varsayılan doğum ağırlıkları:" %}}

| Yeni hayvan türü              |  Kuzu          | Buzağı        |
|-------------------------------|----------------|---------------| 
| Varsayılan değer *doğum ağırlığı*: | 4 kg           | 40 kg         |
| Değer aralığı :               | 1,0 ile 99 kg  | 1,0 ile 99 kg |
{{% /alert %}}

### Ortalama günlük ağırlık artışı {#average-daily-weight-gain}

{{% alert title="Açıklama" %}}
Bir hayvanı [tartarken](../../actions/record-weight/), tanımlanan günlük artış, hayvan tartımı sırasında önerilen ağırlık değerinin hesaplanması için kullanılır. Önerilen ağırlık değeri, tartılacak hayvanların çoğunluğu için çok düşük veya çok yüksekse, ağırlık değerini ok tuşlarıyla ayarlamak için gereken süreyi kısaltmak amacıyla tanımlanan değeri aşağıya veya yukarıya doğru ayarlamalısınız.
{{% /alert %}}


Hayvanın yaklaşık ağırlığının hesaplanmasında kullanılan `{{<T "AverageDailyWeightGain" >}}` ayarlamak için aşağıdaki adımları izleyin.

1. VitalControl cihazınızın ana ekranında, <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` menü öğesini seçin ve `{{<T "Ok" >}}` düğmesine basın.

2. Çeşitli ayarların görüntülendiği bir alt menü açılır. `{{<T "DataAcquisition" >}}` seçmek için ok tuşlarını △ ▽ kullanın. `{{<T "Ok" >}}` ile onaylayın.

3. Başka bir alt menü açılır ve burada `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` ve `{{<T "ControlPeriodFreshCows" >}}` ayar alanları arasında geçiş yapmak için ok tuşlarını △ ▽ kullanabilirsiniz. `{{<T "WeightRecording" >}}` seçin ve `{{<T "Ok" >}}` ile onaylayın.

4. `{{<T "AverageDailyWeightGain" >}}` ayar alanını seçmek için ok tuşlarını △ ▽ kullanın. İstenilen günlük ortalama artışı g/gün olarak ayarlamak için ok tuşlarını ◁ ▷ kullanın. Cihaz artık burada tanımlanan günlük ortalama artışı, hayvanların beklenen günlük artışı için standart olarak kullanır.

    ![VitalControl: günlük ortalama ağırlık artışı menü ayarları](../images/averagedailyweightgain.png "Günlük ortalama ağırlık artışı")

### Ağırlık kaydının hassasiyeti {#precision-of-weight-recording}

{{% alert title="Açıklama" %}}
Kullanım durumuna ve hayvan türüne (*kuzu*, *buzağı*, *inek*) bağlı olarak, kaydedilecek ağırlık değerinin çözünürlüğü (*10 g*, *100 g* veya *1 kg* hassasiyeti) ile ilgili farklı gereksinimler vardır. Bu gereksinimleri karşılamak için *Maksimum hassasiyet* ayarının kullanılması gerekmektedir.
{{% /alert %}}

Aşağıdaki tablo, ağırlık aralığına ve *Maksimum hassasiyet* için belirlenen ayara bağlı olarak ağırlık kaydının hassasiyetini göstermektedir:

| Ayar *Maksimum hassasiyet*:                |  10 g | 100 g | 1 kg |
|--------------------------------------------|-------|-------|------|
| *0 ila 9,9 kg* aralığında hassasiyet:      | 10 g  | 100 g | 1 kg |
| *10 ila 49,9 kg* aralığında hassasiyet:    | 100 g | 100 g | 1 kg |
| *50 ila 99,9 kg* aralığında hassasiyet:    | 500 g | 500 g | 1 kg |
| *≥ 100 kg* değerleri için hassasiyet:      | 1 kg  | 1 kg  | 1 kg |

Hayvan ağırlıklarını cihazınızla kaydederken maksimum doğruluğu ayarlamak için aşağıdaki adımları izleyin:

1. VitalControl cihazınızın ana ekranında, <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` menü öğesini seçin ve `{{<T "Ok" >}}` düğmesine basın.

2. Çeşitli ayarların görüntülendiği bir alt menü açılır. `{{<T "DataAcquisition" >}}` öğesini seçmek için ok tuşlarını △ ▽ kullanın. `{{<T "Ok" >}}` ile onaylayın.

3. `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` ve `{{<T "ControlPeriodFreshCows" >}}` ayar alanları arasında geçiş yapmak için ok tuşlarını △ ▽ kullanabileceğiniz başka bir alt menü açılır. `{{<T "WeightRecording" >}}` öğesini seçin ve `{{<T "Ok" >}}` ile onaylayın.

4. `{{<T "MaximumPrecision" >}}` ayar alanını seçmek için ok tuşlarını △ ▽ kullanın. İstenilen maksimum doğruluğu ayarlamak için ok tuşlarını ◁ ▷ kullanın. Cihazdaki ağırlık kaydının doğruluğu artık belirlenen ayara göre olacaktır.

    ![VitalControl: menu path settings maximum precision weight recording](../images/precisionweightrecording.png "Ağırlık kaydının maksimum doğruluğunu belirleyin.")

<br>
Ayarları kaydedin ve `{{<T "DataAcquisition" >}}` üst menüsüne dönmek için `F1` tuşuna basın &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.

## Hayvan değerlendirme modu {#mode-of-animal-rating}

{{% alert title="Explanation" %}}
Basit modda, hayvan değerlendirmesi sırasında yalnızca genel durum sorgulanır (yeşil/sarı/kırmızı). Genişletilmiş değerlendirmede, 4 değerlendirme kategorisi sorgulanır: genel durum, yem tüketimi, ishal ve solunum hastalığı.
{{% /alert %}}

Cihazınızda `{{<T "RatingAnimals" >}}` ayarını yapmak için aşağıdaki adımları izleyin.

1. VitalControl cihazınızın ana ekranında, <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` menü öğesini seçin ve `{{<T "Ok" >}}` düğmesine basın.

2. Çeşitli ayarların görüntülendiği bir alt menü açılır. `{{<T "DataAcquisition" >}}` öğesini seçmek için ok tuşlarını △ ▽ kullanın. `{{<T "Ok" >}}` ile onaylayın.


3. Başka bir alt menü açılır ve burada `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` ve `{{<T "ControlPeriodFreshCows" >}}` ayar alanları arasında geçiş yapmak için ok tuşlarını △ ▽ kullanabilirsiniz. `{{<T "RatingAnimals" >}}` seçin ve `{{<T "Ok" >}}` ile onaylayın.

4. Hayvanların istenen derecelendirmesini ayarlamak için ◁ ▷ ok tuşlarını kullanın.

    ![VitalControl: hayvanların ortalama derecelendirme menü ayarları](../images/raitingofanimals.png "Hayvanların derecelendirilmesi")

## Taze ineklerin kontrol süresi {#control-period-of-fresh-cows}

{{% alert title="Açıklama" %}}
Taze inekleri yönetirken, doğumdan sonraki birkaç gün boyunca hayvanları günlük olarak kontrol etmek, sıcaklıklarını ölçmek de dahil olmak üzere en iyi uygulamalar rutinidir. Bu kontrol süresinin uzunluğu çiftlikten çiftliğe önemli ölçüde değişir. Bu nedenle, VitalControl ayarlarında kontrol süresinin uzunluğu 3 ile 14 gün arasında bir değere ayarlanabilir. Taze ineklerin kontrol süresi için ayarlanan değer, [taze inek listesi](../../lists/fresh-cows/)ndeki her hayvan için görüntülenen sütun grafiğinin sütun sayısını belirler.
{{% /alert %}}

Taze ineklerinizin kontrol süresinin uzunluğunu ayarlamak için şu adımları izleyin:

1. VitalControl cihazınızın ana ekranında, menü öğesini seçin <img src="/icons/gear.svg" width="25" align="bottom" alt="Ayarlar" /> `{{<T "Settings" >}}` ve `{{<T "Ok" >}}` düğmesine basın.

2. Çeşitli ayarların görüntülendiği bir alt menü açılır. `{{<T "DataAcquisition" >}}` seçmek için ok tuşlarını △ ▽ kullanın. `{{<T "Ok" >}}` ile onaylayın.

3. Başka bir alt menü açılır ve burada `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` ve `{{<T "ControlPeriodFreshCows" >}}` ayar alanları arasında geçiş yapmak için ok tuşlarını △ ▽ kullanabilirsiniz. `{{<T "ControlPeriodFreshCows" >}}` seçin ve `{{<T "Ok" >}}` ile onaylayın.

4. Doğum sonrası günlerde kontrol süresinin istenen uzunluğunu ayarlamak için ◁ ▷ ok tuşlarını kullanın.

    ![VitalControl: taze ineklerin kontrol süresi menü ayarları](../images/controlperiodfreshcows.png "Taze ineklerin kontrol süresi")

<br>

Ayarları kaydedin ve `F1` tuşuna basarak üst menüye dönün <img src="/icons/gear.svg" width="25" align="bottom" alt="Ayarlar" /> `{{<T "Settings" >}}` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Kaydet ve dön" />&nbsp;.
