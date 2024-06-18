---
title: "Alarm listesi"
linkTitle: "Alarm listesi"
weight: 10
date: 2023-07-28T13:25:28+02:00
draft: false
slug: alarm
description: >
  Alarm listenizi kontrol edin.
categories: [Lists]
tags: [Lists, alarm]
translationKey: lists/alarm
---
## Alarm listesi {#alarm-list}

Alarm listesinde, ya manuel olarak listeye eklediğiniz ya da sıcaklık ölçüldüğünde sarı veya kırmızı aralıkta olan tüm hayvanları bulacaksınız. Liste, tüm dikkat çekici hayvanların genel bir görünümünü korumanıza yardımcı olur. Ayrıca, listedeki her hayvan için aşağıdakileri yapabilirsiniz:

- [Tam eylem menüsü](#full-action-menu)
- [Hayvan verileri](#animal-data)
- [Sıcaklık ölç](#take-temperature)
- [Hayvanı değerlendir](#rate-animal)
- [Alarmı temizle](#clear-alarm)
- [İzleme durumunu değiştir](#toggle-watch-status)
- [Hayvanı ara](#search-animal)
- [Filtre ayarla](#set-filter)

Alarm listesi şu şekilde yapılandırılmıştır:

   ![VitalControl Listeleri Alarm listesi](../images/alarmstructure.png "Alarm listesinin yapısı")

|Sembol   | Açıklama
|-------  |----
| ![VitalControl İkon Hayvan başı](../images/kopf.png "Hayvan başı") | Listede kaç hayvan olduğunu gösterir
| ![VitalControl İkon ID](../images/ID.png "ID") | Seçilen hayvanın buzağı mı yoksa inek mi olduğunu gösterir. Klinik termometre, hayvanın son ölçümde sarı veya kırmızı bölgede olup olmadığını gösterir. Hayvan kimliği sembolün altında görüntülenir.
| ![VitalControl İkon Değerlendirme](../images/auge.png "İkon Değerlendirme") | Son kaydedilen değerlendirme, trafik ışığı sistemi renkleriyle sembolün altında gösterilir
| &nbsp;<img src="/icons/actions/temperature.svg" width="12" align="bottom" alt="Vücut sıcaklığı" title="Vücut sıcaklığı" /> | Son kaydedilen ateş ölçümü, trafik ışığı sistemi renkleriyle sembolün altında gösterilir
| &nbsp;<img src="/icons/actions/rating.svg" width="25" align="bottom" alt="Hayvanın değerlendirilmesi" title="Değerlendirme" /> | Sembolün altındaki daire işareti, hayvanın izleme listesinde olduğunu gösterir

### Ön Adımlar {#preliminary-steps}


1. VitalControl cihazınızın ana ekranında <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Lists" /> `{{<T "Lists" >}}` menü öğesini seçin ve `{{<T "Ok" >}}` düğmesine basın.

2. Çeşitli liste simgelerinin görüntülendiği bir alt menü açılır. <img src="/icons/lists/alarmlist.svg" width="30" align="bottom" alt="Alarm" /> `{{<T "Alarm" >}}` simgesini vurgulayın ve `{{<T "Ok" >}}` ile onaylayın.

3. Alarm listesi şimdi açık.

   ![VitalControl Lists Alarmlist](../images/firststeps.png "Ön Adımlar")

### Tam eylem menüsü {#full-action-menu}

1. Ön adımları tamamlayın.

2. `F3` tuşunu kullanarak &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; `{{<T "Ok" >}}` tuşuna basıldığında olası eylemleri listeleyen bir açılır menü çağırın. `{{<T "ActionMenu" >}}` eylemini vurgulamak için ok tuşlarını △ ▽ kullanın ve merkezi `{{<T "Ok" >}}` tuşuna veya `F3` tuşuna basarak eylemi seçin.

3. Alarm listesi içinde, istenen hayvanı seçmek için ok tuşlarını △ ▽ kullanın ve `{{<T "Ok" >}}` ile onaylayın. Alternatif olarak, bir hayvan arayabilirsiniz. `On/Off` düğmesini kullanın <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ve istenen rakamları seçmek için ok tuşlarını ◁ ▷ △ ▽ kullanın. Son olarak `{{<T "Ok" >}}` ile onaylayın.

4. `{{<T "Actions" >}}` menüsü otomatik olarak açılacaktır. Eylemlerin nasıl kullanılacağı [burada](/en/docs/actions/) bulunabilir.

   ![VitalControl Lists Alarmlist](../images/actionmenu.png "Eylem menüsü")

### Hayvan verileri {#animal-data}

1. Ön adımları tamamlayın.

2. `F3` tuşunu kullanarak &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; `{{<T "Ok" >}}` tuşuna basıldığında olası eylemleri listeleyen bir açılır menü çağırın. `{{<T "AnimalData" >}}` eylemini vurgulamak için ok tuşlarını △ ▽ kullanın ve merkezi `{{<T "Ok" >}}` tuşuna veya `F3` tuşuna basarak eylemi seçin.

3. Alarm listesi içinde, istenen hayvanı seçmek için ok tuşlarını △ ▽ kullanın ve `{{<T "Ok" >}}` ile onaylayın. Alternatif olarak, bir hayvan arayabilirsiniz. `On/Off` düğmesini kullanın <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ve istenen rakamları seçmek için ok tuşlarını ◁ ▷ △ ▽ kullanın. Son olarak `{{<T "Ok" >}}` ile onaylayın.

4. Hayvan verileri şimdi görüntülenecek.

   ![VitalControl Lists Alarmlist](../images/animaldata.png "Hayvan verileri")

### Sıcaklık ölçümü {#take-temperature}

1. Ön hazırlık adımlarını tamamlayın.

2. `{{<T "Ok" >}}` tuşuna basıldığında olası eylemleri listeleyen bir açılır menüyü çağırmak için `F3` tuşunu &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; kullanın. `{{<T "TempTaking" >}}` eylemini vurgulamak için ok tuşlarını △ ▽ kullanın ve merkezi `{{<T "Ok" >}}` tuşuna veya `F3` tuşuna `{{<T "Ok" >}}` basarak eylemi seçin.

3. Alarm listesi içinde, istenen hayvanı seçmek için ok tuşlarını △ ▽ kullanın ve `{{<T "Ok" >}}` ile onaylayın. Alternatif olarak, bir hayvan arayabilirsiniz. `On/Off` düğmesini <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> kullanın ve istenen rakamları seçmek için ok tuşlarını ◁ ▷ △ ▽ kullanın. Son olarak `{{<T "Ok" >}}` ile onaylayın.

4. [Sıcaklık ölçümü](/en/docs/actions/measure-temperature/#measure-fever) işlevi şimdi otomatik olarak başlatılacak.

   ![VitalControl Lists Alarmlist](../images/temperature.png "Sıcaklık ölçümü")

### Hayvanı değerlendirme {#rate-animal}

1. Ön hazırlık adımlarını tamamlayın.

2. `{{<T "Ok" >}}` tuşuna basıldığında olası eylemleri listeleyen bir açılır menüyü çağırmak için `F3` tuşunu &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; kullanın. `{{<T "RateAnimal" >}}` eylemini vurgulamak için ok tuşlarını △ ▽ kullanın ve merkezi `{{<T "Ok" >}}` tuşuna veya `F3` tuşuna `{{<T "Ok" >}}` basarak eylemi seçin.

3. Alarm listesi içinde, istenen hayvanı seçmek için ok tuşlarını △ ▽ kullanın ve `{{<T "Ok" >}}` ile onaylayın. Alternatif olarak, bir hayvan arayabilirsiniz. `On/Off` düğmesini <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> kullanın ve istenen rakamları seçmek için ok tuşlarını ◁ ▷ △ ▽ kullanın. Son olarak `{{<T "Ok" >}}` ile onaylayın.

4. [Hayvanı değerlendirme](/en/docs/actions/rating/#rate-your-animals) işlevi şimdi otomatik olarak başlatılacak.


   ![VitalControl Listeleri Alarm Listesi](../images/rateanimal.png "Hayvanı değerlendir")

### Alarmı temizle {#clear-alarm}

1. Ön hazırlık adımlarını tamamlayın.

2. `F3` tuşunu kullanarak &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Açılır menüyü aç" />&nbsp; `{{<T "Ok" >}}` tuşuna basıldığında olası eylemleri listeleyen bir açılır menüyü çağırın. `{{<T "ClearAlarm" >}}` eylemini vurgulamak için ok tuşlarını △ ▽ kullanın ve merkezi `{{<T "Ok" >}}` tuşuna veya `F3` tuşuna `{{<T "Ok" >}}` basarak eylemi seçin.

3. Alarm listesi içinde, istenen hayvanı seçmek için ok tuşlarını △ ▽ kullanın ve `{{<T "Ok" >}}` ile onaylayın. Alternatif olarak, bir hayvan arayabilirsiniz. `On/Off` düğmesini kullanın <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Ara" /> ve istenen rakamları seçmek için ok tuşlarını ◁ ▷ △ ▽ kullanın. Son olarak `{{<T "Ok" >}}` ile onaylayın.

4. Hayvan artık alarm listesinden çıkarılmıştır.

   ![VitalControl Listeleri Alarm Listesi](../images/clearalarm.png "Alarmı temizle")

### İzleme durumunu değiştir {#toggle-watch-status}

1. Ön hazırlık adımlarını tamamlayın.

2. `F3` tuşunu kullanarak &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Açılır menüyü aç" />&nbsp; `{{<T "Ok" >}}` tuşuna basıldığında olası eylemleri listeleyen bir açılır menüyü çağırın. `{{<T "ToggleWatchStatus" >}}` eylemini vurgulamak için ok tuşlarını △ ▽ kullanın ve merkezi `{{<T "Ok" >}}` tuşuna veya `F3` tuşuna `{{<T "Ok" >}}` basarak eylemi seçin.

3. Alarm listesi içinde, istenen hayvanı seçmek için ok tuşlarını △ ▽ kullanın ve `{{<T "Ok" >}}` ile onaylayın. Alternatif olarak, bir hayvan arayabilirsiniz. `On/Off` düğmesini kullanın <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Ara" /> ve istenen rakamları seçmek için ok tuşlarını ◁ ▷ △ ▽ kullanın. Son olarak `{{<T "Ok" >}}` ile onaylayın.

4. Hayvan, başlangıç durumuna bağlı olarak izleme listesine eklenir veya çıkarılır.

   ![VitalControl Listeleri Alarm Listesi](../images/watchlist.png "İzleme durumunu değiştir")

### Hayvan ara {#search-animal}


1. Ön hazırlık adımlarını tamamlayın.

2. Çeşitli seçenekleri listeleyen bir açılır menüyü çağırmak için `F3` tuşunu &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; kullanın. `{{<T "SearchAnimal" >}}` işlevini vurgulamak için ok tuşlarını △ ▽ kullanın ve arama işlevini merkezi `{{<T "Ok" >}}` tuşuna veya `F3` tuşuna `{{<T "Ok" >}}` basarak çağırın.

3. İstenilen hayvan kimliğini seçmek için ok tuşlarını △ ▽ ◁ ▷ kullanın. Alternatif olarak, bir hayvan arayabilirsiniz. `On/Off` düğmesini <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> kullanın ve istenilen rakamları seçmek için ok tuşlarını ◁ ▷ △ ▽ kullanın. Son olarak `{{<T "Ok" >}}` ile onaylayın.

   ![VitalControl Lists Alarmlist](../images/searchanimal.png "Hayvan ara")

### Filtre ayarla {#set-filter}

1. Ön hazırlık adımlarını tamamlayın.

2. Çeşitli seçenekleri listeleyen bir açılır menüyü çağırmak için `F3` tuşunu &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; kullanın. `{{<T "SetFilter" >}}` işlevini vurgulamak için ok tuşlarını △ ▽ kullanın ve filtre işlevini merkezi `{{<T "Ok" >}}` tuşuna veya `F3` tuşuna `{{<T "Ok" >}}` basarak çağırın.

3. İstenilen filtreyi ayarlayın. Filtreyi nasıl kullanacağınızı [buradan](../../filter/#applying-filters) bulabilirsiniz.

   ![VitalControl Lists Alarmlist](../images/setfilter.png "Filtre ayarla")

