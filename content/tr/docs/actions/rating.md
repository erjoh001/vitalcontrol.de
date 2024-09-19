---
title: Derecelendirme
linkTitle: Derecelendirme
slug: rating
weight: 30
description: >
 Hayvanlarınızı derecelendirin.
date: 2023-07-26
Kategoriler: [Actions]
Etiketler: [Actions, Rating]
translationKey: actions/animal-rating
---

## Hayvanlarınızı derecelendirin {#rate-your-animals}

Hayvanı derecelendirirken, bireysel hayvanın durumunu belgelersiniz. Durum görsel olarak belirlenir ve trafik ışığı sistemi yardımıyla kaydedilir. Temel değerlendirmede sadece genel durum kaydedilir. Genişletilmiş değerlendirmede genel durumu, yem alımını, dışkı tutarlılığını ve solunum hastalıklarını kaydedersiniz. Derecelendirme modunu doğrudan <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` eyleminde değiştirebilir veya [ayarlar](../../settings/data-acquisition/#mode-of-animal-rating) bölümünde tanımlayabilirsiniz.

{{% alert title="İpucu" %}}
Sarı veya kırmızı bir değerlendirme, VitalControl'ün hayvanı dikkat çekici olarak sınıflandırdığı ve alarm listesine koyduğu anlamına gelir.
{{% /alert %}}

1. VitalControl cihazınızın ana ekranında, menü öğesini seçin &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` ve `{{<T "Ok" >}}` düğmesine basın.

2. Ya transponder kullanarak bir hayvanı tarayın ya da listeden bir hayvan seçin. `{{<T "Ok" >}}` ile onaylayın ve ok tuşları △ ▽ ile bir hayvan seçin. `{{<T "Ok" >}}` ile onaylayın.

3. Hayvan eylemleri ile bir alt menü açılır. Ok tuşlarını ◁ ▷ kullanarak <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` eylemini seçin ve `{{<T "Ok" >}}` ile onaylayın.

4. Derecelendirme menüsü açılır. Derecelendirme modunu değiştirmek istiyorsanız, `On/Off` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Chain-of-actions" />&nbsp; düğmesini ve ok tuşlarını ◁ ▷ kullanın. `F1` tuşu <img src="/icons/footer/exit.svg" width="24" align="bottom" alt="Back" />&nbsp; ile değerlendirme menüsüne geri dönersiniz.

5. Bir durumu seçmek için ok tuşlarını ◁ ▷ △ ▽ kullanın ve `F3` tuşu <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> veya `{{<T "Ok" >}}` tuşu ile kaydedin.

6. Gelişmiş modda, derecelendirme parametreleri arasında geçiş yapmak için `F1` ve `F3` tuşlarını kullanın.

{{% alert title="İpucu" %}}
Ok tuşlarını ◁ ▷ kullanarak bir seçim yapmazsanız ancak doğrudan `F3` veya `{{<T "Ok" >}}` tuşunu kullanarak kaydederseniz, VitalControl gri renkle temsil edilen nötr bir değerlendirme kaydeder.
{{% /alert %}}

### Temel derecelendirme {#basic-rating}

{{< tabpane >}}
{{< tab header="Temel derecelendirme:" text=true disabled=true />}}
{{% tab header="Transponder taraması" text=true %}}
![VitalControl: Menü Eylemleri Derecelendirme](../images/basicrating-scan.png "Temel derecelendirme")
{{% /tab %}}
{{% tab header="Listeden manuel seçim" text=true %}}
![VitalControl: Menü Eylemleri Derecelendirme](../images/basicrating.png "Temel derecelendirme")
{{% /tab %}}
{{< /tabpane >}}

### Genişletilmiş Derecelendirme {#extended-rating}

{{< tabpane >}}
{{< tab header="Temel derecelendirme:" text=true disabled=true />}}
{{% tab header="Transponder taraması" text=true %}}
![VitalControl: Menü Eylemleri Derecelendirme](../images/extendedrating-scan.png "Genişletilmiş derecelendirme")
{{% /tab %}}
{{% tab header="Listeden manuel seçim" text=true %}}
![VitalControl: Menü Eylemleri Derecelendirme](../images/extendedrating.png "Genişletilmiş derecelendirme")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="İpucu" %}}
Bu eylem mevcut değilse, eylem muhtemelen devre dışı bırakılmıştır! Eylemi [eylem ayarları](../setting/) menüsünde etkinleştirin. Alternatif olarak, tüm eylemleri sıfırlamak bu eylemi geri getirecektir.
{{% /alert %}}
