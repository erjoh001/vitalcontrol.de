---
title: Eylem listesi
linkTitle: Eylem listesi
weight: 30
date: 2023-07-28T13:25:28+02:00
draft: false
slug: actions
description: >
 Eylem listenizi kontrol edin.
categories: [Listeler]
tags: [Listeler, Eylem]
translationKey: lists/action
---
## Eylem listesi {#action-list}

Eylem listesinde, altı saat boyunca hiçbir işlem yapılmamış hayvanları görebilirsiniz. Ayrıca aşağıdaki ayar seçenekleri de mevcuttur:

- [Sıcaklık ölç](../alarm/#take-temperature)
- [Hayvanları değerlendir](../alarm/#rate-animal)
- [Hayvanları tart](#weigh-animals)
- [Eylem zinciri](#chain-of-action)
- [Transponder bağla](#link-transponder)
- [Eylemden sonra gizle](#hide-after-action)
- [Hayvan ara](../alarm/#search-animal)
- [Filtre ayarla](../alarm/#set-filter)

{{% alert title="İpucu" %}}
Bazı eylemler [alarm listesi](../alarm) ile aynı şekilde gerçekleştirilir. Bunlar burada açıklanmaz. Ön adımları gerçekleştirin ve talimatlara ulaşmak için ilgili eylemin bağlantısını kullanın.
{{% /alert %}}

### Ön Adımlar {#preliminary-steps}

1. VitalControl cihazınızın ana ekranında <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Listeler" />  `{{<T "Lists" >}}` menü öğesini seçin ve `{{<T "Ok" >}}` düğmesine basın.

2. Çeşitli liste simgelerinin görüntülendiği bir alt menü açılır. <img src="/icons/lists/actionlist.svg" width="30" align="bottom" alt="Eylem listesi" /> `{{<T "ActionList" >}}` simgesini vurgulayın ve `{{<T "Ok" >}}` ile onaylayın.

3. Eylem listesi şimdi açık.

   ![VitalControl Listeler Eylem listesi](../images/firststeps3.png "Ön Adımlar")

### Hayvanları tart {#weigh-animals}

1. Ön adımları tamamlayın.

2. `{{<T "Ok" >}}` tuşuna basıldığında olası eylemleri listeleyen bir açılır menüyü çağırmak için `F3` tuşunu &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Açılır menüyü aç" />&nbsp; kullanın. Ok tuşlarını △ ▽ kullanarak `{{<T "WeighAnimal" >}}` eylemini vurgulayın ve bu seçeneği merkezi `{{<T "Ok" >}}` düğmesine veya `F3` tuşuna `{{<T "Ok" >}}` basarak seçin.


3. Eylem listesinde, istenen hayvanı seçmek için ok tuşlarını △ ▽ kullanın ve `{{<T "Ok" >}}` ile onaylayın. Alternatif olarak, bir hayvan arayabilirsiniz. `Açık/Kapalı` düğmesini <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> kullanın ve istenen rakamları seçmek için ok tuşlarını ◁ ▷ △ ▽ kullanın. Son olarak `{{<T "Ok" >}}` ile onaylayın.

4. [Hayvanları tart](../../actions/record-weight/) menüsü otomatik olarak açılacaktır.

   ![VitalControl Lists Action list](../images/weightanimals.png "Hayvanları tart")

### Eylem zinciri {#chain-of-action}

1. Ön hazırlık adımlarını tamamlayın.

2. `{{<T "Ok" >}}` tuşuna basıldığında olası eylemleri listeleyen bir açılır menüyü çağırmak için `F3` tuşunu &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; kullanın. `{{<T "ActionChain" >}}` eylemini vurgulamak için ok tuşlarını △ ▽ kullanın ve bu seçeneği merkezi `{{<T "Ok" >}}` düğmesine veya `F3` tuşuna basarak seçin.

3. Eylem listesinde, istenen hayvanı seçmek için ok tuşlarını △ ▽ kullanın ve `{{<T "Ok" >}}` ile onaylayın. Alternatif olarak, bir hayvan arayabilirsiniz. `Açık/Kapalı` düğmesini <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> kullanın ve istenen rakamları seçmek için ok tuşlarını ◁ ▷ △ ▽ kullanın. Son olarak `{{<T "Ok" >}}` ile onaylayın.

4. [Eylem zinciri](../../chain-of-actions) işlevi otomatik olarak açılacaktır.

   ![VitalControl Lists Action list](../images/chainofaction.png "Eylem zinciri")

### Transponder bağla {#link-transponder}

Bu işlev, henüz bir transponder atanmamış hayvanların veri kaydına bir transponder eklemek için kullanılır.

1. Ön hazırlık adımlarını tamamlayın.

2. `{{<T "Ok" >}}` tuşuna basıldığında olası eylemleri listeleyen bir açılır menüyü çağırmak için `F3` tuşunu &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; kullanın. `{{<T "LinkTransponder" >}}` eylemini vurgulamak için ok tuşlarını △ ▽ kullanın ve bu seçeneği merkezi `{{<T "Ok" >}}` düğmesine veya `F3` tuşuna basarak seçin.


3. Eylem listesi içinde, istenen hayvanı seçmek için ok tuşlarını △ ▽ kullanın ve `{{<T "Ok" >}}` ile onaylayın. Alternatif olarak, bir hayvan arayabilirsiniz. `Açık/Kapalı` düğmesini <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> kullanın ve istenen rakamları seçmek için ok tuşlarını ◁ ▷ △ ▽ kullanın. Son olarak `{{<T "Ok" >}}` ile onaylayın.

4. Şimdi ilgili hayvanın transponder'ını tarayın.

   ![VitalControl Lists Action list](../images/linktransponder.png "Link transponder")

### Eylemden sonra gizle {#hide-after-action}

Bu işlev etkinleştirilirse, bir eylem gerçekleştirilen hayvanlar eylem listesinden gizlenecektir. Bu işlev devre dışı bırakılırsa, işlenen hayvanlar listede görünmeye devam edecektir.

1. Ön hazırlıkları tamamlayın.

2. Çeşitli seçenekleri listeleyen bir açılır menüyü çağırmak için `F3` tuşunu &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Actions" />&nbsp; kullanın. `{{<T "HideAfterAction" >}}` seçeneğini vurgulamak için ok tuşlarını △ ▽ kullanın ve bu seçeneği merkezi `{{<T "Ok" >}}` düğmesine veya `F3` tuşuna `{{<T "Ok" >}}` basarak değiştirin.

3. `{{<T "HideAfterAction" >}}` işlevi şimdi etkinleştirildi/devre dışı bırakıldı. Etkinleştirme, kutunun içindeki bir onay işareti ile gösterilir.

   ![VitalControl Lists Action list](../images/hideafteraction.png "Hide after action")
