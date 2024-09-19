---
title: Ağırlık kaydet
linkTitle: Ağırlık
slug: record-weight
weight: 20
description: >
  Hayvanlarınızın ağırlığını kaydedin.
date: 2023-07-26
Kategoriler: [Actions]
Etiketler: [Actions, weight]
translationKey: actions/weight
---

## Ağırlık kaydet {#record-weight}
Hayvanınızın ağırlığını bireysel olarak kaydetmek için &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Weighing" /> `{{<T "Weighing" >}}` eylemini kullanın. Bunu yapmak için, hayvanlarınızı tartın veya ağırlıklarını tahmin edin ve bu değeri VitalControl cihazına girin. Bu, hayvanlarınızın ağırlık gelişimini kontrol etmenizi ve bireysel olarak değerlendirmenizi sağlar.

{{% alert title="İpucu" %}}
Ortalama ağırlık bir yönde çok fazla saparsa (çok yüksek/çok düşük), günlük artış değeri ayarlanmalıdır.
{{% /alert %}}

1. VitalControl cihazınızın ana ekranında, menü öğesini seçin &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` ve `{{<T "Ok" >}}` düğmesine basın.

2. Ya bir hayvanı transponder ile tarayın ya da listeden bir hayvan seçin. `{{<T "Ok" >}}` ile onaylayın ve ok tuşları △ ▽ ile bir hayvan seçin. `{{<T "Ok" >}}` ile onaylayın.

3. Hayvan eylemleri ile bir alt menü açılır. Ok tuşlarını ◁ ▷ kullanarak &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Weighing" /> `{{<T "Weighing" >}}` eylemini seçin ve `{{<T "Ok" >}}` ile onaylayın.

4. Bir ağırlık belirtimi ile bir menü açılır. Bunu ok tuşları △ ▽ ile artırın veya azaltın ve sonucu `F3` tuşu <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> veya `{{<T "Ok" >}}` tuşu ile kaydedin.

{{< tabpane >}}
{{< tab header="Ağırlık kaydet:" text=true disabled=true />}}
{{% tab header="Transponder tarama" text=true %}}
  ![VitalControl: Menü Eylem Tartma](../images/weighing-scan.png "Weighing")
{{% /tab %}}
{{% tab header="Listeden manuel seçim" text=true %}}
  ![VitalControl: Menü Eylem Tartma](../images/weighing.png "Weighing")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="İpucu" %}}
Bu eylem mevcut değilse, muhtemelen devre dışı bırakılmıştır! Eylemi [eylem ayarları](../setting/) menüsünde etkinleştirin. Alternatif olarak, tüm eylemleri sıfırlamak bu eylemi geri getirecektir.
{{% /alert %}}
