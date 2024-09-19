---
title: Kurutma
linkTitle: Kurutma
slug: dry-off
weight: 115
description: >
 Bir ineği kurutun veya onu taze inekler listesine ekleyin
date: 2023-07-26
Kategoriler: [Kurutma]
Etiketler: [Kurutma]
translationKey: actions/dry-cows
---

## Kurutma {#dry-off}

{{% alert title="İpucu" %}}
İneğin başlangıç durumuna bağlı olarak, hayvanı kurutabilir ve kurutma listesine ekleyebilir veya hayvanı taze sağımcı olarak işaretleyip taze sağımcı listesine ekleyebilirsiniz. İşlevler arasındaki ayrım, bir artı sembolü veya bir eksi sembolü ile belirginleştirilmiştir.
{{% /alert %}}

### Bir ineği kurutma {#dry-off-a-cow}

1. VitalControl cihazınızın ana ekranında, menü öğesini seçin &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` ve `{{<T "Ok" >}}` düğmesine basın.

2. Ulusal hayvan kimliği olmayan hayvanın transponderini tarayın veya listeden hayvanı seçin. Bunu yapmak için `{{<T "Ok" >}}` ile onaylayın ve ok tuşlarını kullanarak hayvan kimliğini seçin △ ▽. `{{<T "Ok" >}}` ile onaylayın.

3. Hayvan eylemleri ile ilgili bir alt menü açılır. Ok tuşlarını kullanarak eylemi seçin ◁ ▷ △ ▽ <img src="/icons/actions/dryoff-plus.svg" width="35" align="bottom" alt="Dry off" /> `{{<T "DryOff" >}}` ve `{{<T "Ok" >}}` ile onaylayın.

4. Hayvan başarıyla kurutulmuş olarak işaretlendi.

{{< tabpane >}}
{{< tab header="Bir ineği kurutma:" text=true disabled=true />}}
{{% tab header="Transponder taraması" text=true %}}
![VitalControl: Menü Eylemleri Kurutma](../images/dryoff-scan.png "Bir ineği kurutma")
{{% /tab %}}
{{% tab header="Listeden manuel seçim" text=true %}}
![VitalControl: Menü Eylemleri Kurutma](../images/dryoff.png "Bir ineği kurutma")
{{% /tab %}}
{{< /tabpane >}}

### Sağılmış olarak işaretle {#mark-as-lactated}

1. VitalControl cihazınızın ana ekranında, menü öğesini seçin &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` ve `{{<T "Ok" >}}` düğmesine basın.

2. Ulusal hayvan kimliği olmayan hayvanın transponderini tarayın veya listeden hayvanı seçin. Bunu yapmak için `{{<T "Ok" >}}` ile onaylayın ve ok tuşlarını kullanarak hayvan kimliğini seçin △ ▽. `{{<T "Ok" >}}` ile onaylayın.

3. Bir alt menüde hayvan eylemleri açılır. Eylemi seçmek için ok tuşlarını ◁ ▷ △ ▽ kullanın <img src="/icons/actions/dryoff-minus.svg" width="35" align="bottom" alt="Dry off" /> `{{<T "DryOff" >}}` ve `{{<T "Ok" >}}` ile onaylayın.

4. Hayvan başarıyla laktasyon olarak işaretlendi.

{{< tabpane >}}
{{< tab header="Laktasyon olarak işaretle:" text=true disabled=true />}}
{{% tab header="Transponder taraması" text=true %}}
![VitalControl: Menü Eylemleri Laktasyon olarak işaretle](../images/lactated-scan.png "Laktasyon olarak işaretle")
{{% /tab %}}
{{% tab header="Listeden manuel seçim" text=true %}}
![VitalControl: Menü Eylemleri Laktasyon olarak işaretle](../images/lactated.png "Laktasyon olarak işaretle")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="İpucu" %}}
Bu eylem mevcut değilse, eylem muhtemelen devre dışı bırakılmıştır! Eylemi [eylem ayarları](../setting) menüsünde etkinleştirin. Alternatif olarak, tüm eylemleri sıfırlamak bu eylemi geri getirecektir.
{{% /alert %}}
