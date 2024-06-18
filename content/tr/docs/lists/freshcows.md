---
title: "Taze inekler listesi"
linkTitle: "Taze inekler listesi"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: fresh-cows
description: >
  Taze ineklerinizi kontrol etmeyi kolaylaştırın.
categories: [Listeler]
tags: [Listeler, taze inek]
translationKey: lists/fresh-cows
---
### Taze inekler listesi {#fresh-cows-list}

{{% alert title="Açıklama" %}}
Taze inekleri yönetirken, doğumdan sonraki birkaç gün boyunca hayvanları günlük olarak kontrol etmek en iyi uygulama rutini olarak kabul edilir. Taze inekler listesi, özellikle sıcaklık kaydı açısından bu taze inek kontrolünü kolaylaştırır. Her hayvan için kontrol süresi boyunca her gün bir sütun grafiği gösterilir, kontrol süresinin her günü bir dikey çubukla temsil edilir. Çubuğun rengine (yeşil, sarı veya kırmızı) bağlı olarak, o gün için ilgili hayvanda normal, yükselmiş veya kritik derecede yükselmiş bir sıcaklık ölçülüp ölçülmediğini görebilirsiniz.
{{% /alert %}}

İnekler, doğumları kaydedildikten hemen sonra taze inekler listesine eklenir. Bu listede belirli bir süre kalırlar, bu sürenin uzunluğu (gün olarak) [ayarlar](../../settings/data-acquisition/#control-period-of-fresh-cows) bölümünde ayarlanabilir.
 Bu liste için aşağıdaki işlemler mevcuttur:

- [Tam işlem menüsü](../alarm/#full-action-menu)
- [Hayvan verileri](../alarm/#animal-data)
- [Sıcaklık ölç](../alarm/#take-temperature)
- [Alarm durumunu değiştir](#toggle-alarm-status)
- [İzleme durumunu değiştir](#toggle-watch-status)
- [Ölçülen inekleri gizle](#hide-measured-cows)
- [Hayvan ara](../alarm/#search-animal)
- [Filtre ayarla](../alarm/#set-filter)

{{% alert title="İpucu" %}}
Bazı işlemler [alarm listesi](../alarm) ile aynı şekilde gerçekleştirilir. Bunlar burada açıklanmaz. Ön adımları gerçekleştirin ve ilgili işlemin bağlantısını kullanarak talimatlara ulaşın.
{{% /alert %}}

### Ön Adımlar {#preliminary-steps}

1. VitalControl cihazınızın ana ekranında <img src="/icons/main/lists.svg" width="25" align="bottom" alt="Listeler" /> `{{<T "Lists" >}}` menü öğesini seçin ve `{{<T "Ok" >}}` düğmesine basın.

2. Çeşitli listelerin görüntülendiği bir alt menü açılır. `{{<T "FreshCows" >}}` listesini seçin <img src="/icons/lists/freshcows.svg" width="30" align="bottom" alt="Fresh-cows" />. `{{<T "Ok" >}}` ile onaylayın.

3. Taze inekler listesi şimdi açık.

   ![VitalControl Lists Fresh cows list](../images/firststeps4.png "Fresh cow list")

### Alarm durumunu değiştir {#toggle-alarm-status}

1. Ön hazırlık adımlarını tamamlayın.

2. `F3` tuşunu kullanın &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; ve `{{<T "Ok" >}}` tuşuna basıldığında yapılabilecek eylemleri listeleyen bir açılır menü çağırın. `{{<T "ToggleAlarmStatus" >}}` eylemini vurgulamak için ok tuşlarını △ ▽ kullanın ve bu seçeneği merkezi `{{<T "Ok" >}}` düğmesine veya `F3` tuşuna basarak seçin `{{<T "Ok" >}}`.

3. Taze inekler listesinde, istenen hayvanı seçmek için ok tuşlarını △ ▽ kullanın ve `{{<T "Ok" >}}` ile onaylayın. Alternatif olarak, bir hayvan arayabilirsiniz. `On/Off` düğmesini kullanın <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ve istenen rakamları seçmek için ok tuşlarını ◁ ▷ △ ▽ kullanın. Son olarak `{{<T "Ok" >}}` ile onaylayın.

4. Hayvan, başlangıç durumuna bağlı olarak uyarı listesine eklenir veya çıkarılır.

   ![VitalControl Lists Fresh cows list](../images/togglealarmstatus.png "Toggle alarm status")

### İzleme durumunu değiştir {#toggle-watch-status}

1. Ön hazırlık adımlarını tamamlayın.

2. `F3` tuşunu kullanın &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; ve `{{<T "Ok" >}}` tuşuna basıldığında yapılabilecek eylemleri listeleyen bir açılır menü çağırın. `{{<T "ToggleWatchStatus" >}}` eylemini vurgulamak için ok tuşlarını △ ▽ kullanın ve bu seçeneği merkezi `{{<T "Ok" >}}` düğmesine veya `F3` tuşuna basarak seçin `{{<T "Ok" >}}`.

3. Taze inekler listesinde, istenen hayvanı seçmek için ok tuşlarını △ ▽ kullanın ve `{{<T "Ok" >}}` ile onaylayın. Alternatif olarak, bir hayvan arayabilirsiniz. `On/Off` düğmesini kullanın <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ve istenen rakamları seçmek için ok tuşlarını ◁ ▷ △ ▽ kullanın. Son olarak `{{<T "Ok" >}}` ile onaylayın.

4. Hayvanın başlangıç durumuna bağlı olarak izleme listesine eklenir veya çıkarılır.

   ![VitalControl Listeleri Taze inekler listesi](../images/togglewatchstatus.png "İzleme durumunu değiştir")

### Ölçülen inekleri gizle {#hide-measured-cows}

Bu işlev etkinleştirilirse, sıcaklık ölçümü yapılmış hayvanlar kuru inek listesinde gizlenir. Bu işlev etkinleştirilmezse, hayvanlar listede görünmeye devam eder.

1. Ön hazırlık adımlarını tamamlayın.

2. `F3` tuşunu kullanarak &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Actions" />&nbsp; çeşitli seçenekleri listeleyen bir açılır menüyü çağırın. `{{<T "HideMeasuredCows" >}}` seçeneğini vurgulamak için ok tuşlarını △ ▽ kullanın ve bu seçeneği merkezi `{{<T "Ok" >}}` düğmesine veya `F3` tuşuna `{{<T "Ok" >}}` basarak değiştirin.

3. Taze inekler listesinde, istenen hayvanı seçmek için ok tuşlarını △ ▽ kullanın ve `{{<T "Ok" >}}` ile onaylayın. Alternatif olarak, bir hayvan arayabilirsiniz. `Açık/Kapalı` düğmesini kullanın <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ve istenen rakamları seçmek için ok tuşlarını ◁ ▷ △ ▽ kullanın. Son olarak `{{<T "Ok" >}}` ile onaylayın.

4. `{{<T "HideMeasuredCows" >}}` işlevi şimdi etkinleştirildi. Etkinleştirme, kutunun işaretlenmesiyle belirtilir.

   ![VitalControl Listeleri Taze inekler listesi](../images/hidemeasuredcows.png "Ölçülen inekleri gizle")
