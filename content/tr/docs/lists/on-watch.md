---
title: "İzleme listesinde"
linkTitle: "İzleme listesinde"
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: on-watch
description: >
 İzleme listenizi kontrol edin.
categories: [Listeler]
tags: [Listeler, izleme]
translationKey: lists/on-watch
---
## İzleme listesinde {#on-watch-list}

İzleme listesinde, manuel olarak listeye eklediğiniz tüm hayvanları bulacaksınız. Liste, dikkat çekici olarak değerlendirdiğiniz hayvanları takip etmenize yardımcı olur. Ayrıca, listedeki her hayvan için aşağıdaki işlemleri yapabilirsiniz:

- [Tam eylem menüsü](../alarm/#full-action-menu)
- [Hayvan verileri](../alarm/#animal-data)
- [Sıcaklık ölç](../alarm/#take-temperature)
- [Hayvanı değerlendir](../alarm/#rate-animal)
- [İzleme listesinden kaldır](#remove-from-watch-list)
- [Alarm durumunu değiştir](#toggle-alarm-status)
- [Hayvanı ara](../alarm/#search-animal)
- [Filtre ayarla](../alarm/#set-filter)

{{% alert title="İpucu" %}}
Bazı işlemler [Alarm listesi](../alarm) ile aynı şekilde gerçekleştirilir. Bunlar burada açıklanmaz. Ön hazırlıkları yapın ve ilgili işlemin bağlantısını kullanarak talimatlara ulaşın.
{{% /alert %}}

Alarm listesi şu şekilde yapılandırılmıştır:

   ![VitalControl Listeler İzleme listesi](../images/onwatchstructure.png "İzleme listesinin yapısı")

|Sembol   | Açıklama
|---------|-----
| ![VitalControl Listeler İzleme listesi](../images/kopf.png "Sürü büyüklüğü sayacı") | Listede kaç hayvan olduğunu gösterir
| ![İnek simgesi](../images/kopf2.png "İnek başı") | Seçilen hayvanın buzağı mı yoksa inek mi olduğunu gösterir
| ![VitalControl Listeler İzleme listesi](../images/auge.png "Değerlendirme") | Son kaydedilen değerlendirme, trafik ışığı sistemi renkleriyle sembolün altında gösterilir
| &nbsp;<img src="/icons/actions/temperature.svg" width="12" align="bottom" alt="Vücut sıcaklığı" title="Vücut sıcaklığı" /> | Son kaydedilen ateş ölçümü, trafik ışığı sistemi renkleriyle sembolün altında gösterilir
| &nbsp;&nbsp;<img src="/icons/header/alarm.svg" width="8" align="bottom" alt="Alarmda hayvanı göster" title="Alarmda hayvan" /> | Sembolün altındaki bir daire işareti, hayvanın alarm listesinde olduğunu gösterir

### Ön Hazırlık Adımları {#preliminary-steps}

1. VitalControl cihazınızın ana ekranında <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Lists" /> `{{<T "Lists" >}}` menü öğesini seçin ve `{{<T "Ok" >}}` düğmesine basın.

2. Çeşitli listelerin görüntülendiği bir alt menü açılır. Listeyi seçin &nbsp;<img src="/icons/lists/onwatch.svg" width="28" align="bottom" alt="List 'On watch'" /> `{{<T "OnWatch" >}}`. `{{<T "Ok" >}}` ile onaylayın.

3. Liste `{{<T "OnWatch" >}}` şimdi açık.

   ![VitalControl Lists On watch list](../images/firststeps2.png "Preliminary Steps")

### İzleme listesinden kaldır {#remove-from-watch-list}

1. Ön hazırlık adımlarını tamamlayın.

2. `F3` tuşunu kullanarak &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; `{{<T "Ok" >}}` tuşuna basıldığında olası eylemleri listeleyen bir açılır menüyü çağırın. Ok tuşlarını △ ▽ kullanarak `{{<T "RemoveFromWatchList" >}}` eylemini vurgulayın ve bu seçeneği merkezi `{{<T "Ok" >}}` düğmesine veya `F3` tuşuna `{{<T "Ok" >}}` basarak seçin.

3. İzleme listesi içinde, ok tuşlarını △ ▽ kullanarak istenen hayvanı seçin ve `{{<T "Ok" >}}` ile onaylayın. Alternatif olarak, bir hayvan arayabilirsiniz. `On/Off` düğmesini kullanın <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ve istenen rakamları seçmek için ok tuşlarını ◁ ▷ △ ▽ kullanın. Son olarak `{{<T "Ok" >}}` ile onaylayın.

4. Hayvan şimdi izleme listesinden kaldırıldı.

   ![VitalControl Lists On watch list](../images/remove.png "Remove from watch list")

### Alarm durumunu değiştir {#toggle-alarm-status}

1. Ön hazırlık adımlarını tamamlayın.

2. `F3` tuşunu kullanarak &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; `{{<T "Ok" >}}` tuşuna basıldığında olası eylemleri listeleyen bir açılır menüyü çağırın. Ok tuşlarını △ ▽ kullanarak `{{<T "ToggleAlarmStatus" >}}` eylemini vurgulayın ve bu seçeneği merkezi `{{<T "Ok" >}}` düğmesine veya `F3` tuşuna `{{<T "Ok" >}}` basarak seçin.

3. İzleme listesinde, istenen hayvanı seçmek için ok tuşlarını △ ▽ kullanın ve `{{<T "Ok" >}}` ile onaylayın. Alternatif olarak, bir hayvan arayabilirsiniz. `Açık/Kapalı` düğmesini <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> kullanın ve istenen rakamları seçmek için ok tuşlarını ◁ ▷ △ ▽ kullanın. Son olarak `{{<T "Ok" >}}` ile onaylayın.

4. Hayvan, başlangıç durumuna bağlı olarak alarm listesine eklenir veya çıkarılır.

   ![VitalControl Listeleri Alarm durumunu değiştir](../images/alarmstatus.png "Alarm durumunu değiştir")
