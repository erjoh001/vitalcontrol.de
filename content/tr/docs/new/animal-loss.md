---
title: Bir hayvan kaybının kaydedilmesi
linkTitle: Hayvan kaybı
date: 2023-07-28T13:25:28+02:00
weight: 10
draft: false
slug: animal-loss
description: >
  VitalControl cihazını kullanarak bir hayvan kaybının nasıl kaydedileceği.
Kategoriler: [Animal-loss]
Etiketler: [Animal-loss]
translationKey: new/animal-loss
---
## Bir hayvan kaybını kaydetme {#record-the-loss-of-an-animal}

{{% alert title="İpucu" %}}
Bu menü öğesindeki hayvan kaybı fonksiyonu öncelikle ölü buzağı/kuzuları kaydetmek için kullanılır. Ayar seçenekleri buna göre uyarlanmıştır ve `{{<T "Actions" >}}` -> `{{<T "Unregister" >}}` veya `{{<T "AnimalLoss" >}}` menüsündeki ayar öğeleri ile aynı değildir.
{{% /alert %}}

Bir hayvan kaybını kaydetmek için şu adımları izleyin:

1. VitalControl cihazınızın ana ekranında, <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="Yeni hayvan" /> `{{<T "New" >}}` menü öğesini seçin ve `{{<T "Ok" >}}` düğmesine basın.

2. Bir alt menü açılır. Ok tuşlarını ◁ ▷ △ ▽ kullanarak <img src="/icons/main/stillbirth.svg" width="40" align="bottom" alt="Hayvan kaybı" /> `{{<T "AnimalLoss" >}}` menü öğesini seçin ve `{{<T "Ok" >}}` ile onaylayın.

3. Ya anne hayvanın transponderini tarayın ya da `{{<T "Ok" >}}` düğmesini kullanın. Ok tuşlarını ◁ ▷ △ ▽ kullanarak anne hayvanın kimliğini girin ve `{{<T "Ok" >}}` ile onaylayın.

4. Hayvanla ilgili bilgileri kaydedebileceğiniz başka bir alt menü açılır. İstediğiniz ayar öğesini seçmek için ok tuşlarını △ ▽ kullanın.

5. `{{<T "TypeAnimal" >}}`, `{{<T "Sex" >}}`, `{{<T "BirthWeight" >}}`, `{{<T "Breed" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "Multiples" >}}` ve `{{<T "CalvingEase" >}}` ayarları için istediğiniz ayarı seçmek üzere ok tuşlarını ◁ ▷ kullanın.

6. `{{<T "DateBirth" >}}` ayarı için istediğiniz ayar seçeneğini seçmek üzere ok tuşlarını △ ▽ kullanın ve `{{<T "Ok" >}}` ile onaylayın. İstediğiniz sayıları seçmek için ok tuşlarını △ ▽◁ ▷ kullanın. Son olarak, `{{<T "Ok" >}}` ile onaylayın.

7. Ayarları kaydedin ve yeni hayvanı `F3` tuşu &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Kaydet" />&nbsp; ile oluşturun.

{{% alert title="İpucu" %}}
Yeni hayvanlar oluşturma hakkında daha fazla bilgi ve ayar seçeneklerini [burada](../../settings/animal-registration/) bulabilirsiniz.
{{% /alert %}}

{{< tabpane >}}
{{< tab header="Hayvan kaybı:" text=true disabled=true />}}
{{% tab header="Transponder taraması" text=true %}}
![VitalControl: Menü yolu Yeni hayvan kaybı](../images/animalloss-scan.png "Bir hayvanın kaybını kaydet")
{{% /tab %}}
{{% tab header="Listeden manuel seçim" text=true %}}
![VitalControl: Menü yolu Yeni hayvan kaybı](../images/animalloss.png "Bir hayvanın kaybını kaydet")
{{% /tab %}}
{{< /tabpane >}}
