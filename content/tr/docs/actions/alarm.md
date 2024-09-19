---
title: Alarm
linkTitle: Alarm
slug: alarm
weight: 60
description: >
 Hayvanları alarm listesine ekleyin ve çıkarın.
date: 2023-07-26
Kategoriler: [Actions]
Etiketler: [Actions, Alarm]
translationKey: actions/alarm
---

## Uyarı {#alert}

`{{<T "Alarm" >}}` eylemi ile hayvanları alarm listesine ekleyebilir veya listeden çıkarabilirsiniz. Alarm listesi, dikkat çekici hayvanları daha hızlı ve kolay bir şekilde bulmanıza yardımcı olur, bu da günlük rutin kontrollerinizi kolaylaştırır. `{{<T "Alarm" >}}` eylemini uygulamak için şu adımları izleyin:

1. VitalControl cihazınızın ana ekranında, `{{<T "Actions" >}}` menü öğesini seçin &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> ve `{{<T "Ok" >}}` düğmesine basın.

2. Ya transponder kullanarak bir hayvanı tarayın ya da listeden bir hayvan seçin. `{{<T "Ok" >}}` ile onaylayın ve ok tuşları △ ▽ ile bir hayvan seçin. `{{<T "Ok" >}}` ile onaylayın.

3. Hayvan eylemleri ile bir alt menü açılır. Ok tuşlarını ◁ ▷ △ ▽ kullanarak &nbsp;<img src="/icons/actions/alarm.svg" width="35" align="bottom" alt="Add alarm" /> `{{<T "Alarm" >}}` eylemini seçin ve `{{<T "Ok" >}}` ile onaylayın.

4. Hayvanın başarıyla alarm listesine eklendiğine dair bir bildirim görünür ve başlıktaki hayvanın görüntüsü değişir. Bu hayvanın alarm listesinde olduğunu belirten simge &nbsp;<img src="/icons/header/animal-in-alarm.svg" width="32" align="bottom" alt="Animal in alarm" /> gösterilir.

5. Hayvanı alarm listesinden çıkarmak için tekrar &nbsp;<img src="/icons/actions/alarm-minus.svg" width="35" align="bottom" alt="Remove alarm" /> `{{<T "Alarm" >}}` eylemini uygulayabilirsiniz. `{{<T "Alarm" >}}` eylemini kullanarak hayvanı alarm listesine ekleyip çıkardığınızı küçük bir + veya - işareti ile gösterilir.

{{< tabpane >}}
{{< tab header="Alert:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Actions Alarm](../images/alarm-scan.png "Alarm")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Actions Alarm](../images/alarm.png "Alarm")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="İpucu" %}}
Bu eylem mevcut değilse, muhtemelen devre dışı bırakılmıştır! Eylemi [eylem ayarları](../setting/) menüsünde etkinleştirin. Alternatif olarak, tüm eylemleri sıfırlamak bu eylemi geri getirecektir.
{{% /alert %}}
