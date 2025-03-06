---
title: VitalControl ve sürü yönetim yazılımı Herde arasında veri alışverişi
linkTitle: Veri alışverişi
date: 2023-08-04T12:22:12+02:00
draft: false
description: >
  VitalControl cihazında depolanan hayvanları *Herde* yazılımı ile yönetilen hayvanlarla senkronize edin ve VitalControl cihazı ile kaydedilen ölçüm değerlerini *Herde* yazılımına aktarın.
weight: 20
Kategoriler: [Veri alışverişi, DSP Herde]
translationKey: DSPherde/data-exchange
---
Aşağıdaki adımları izleyerek `Herde` yazılımı ile VitalControl cihazı arasında veri senkronizasyonu yapın:

### VitalControl'ü PC'ye Bağlayın {#connect-vitalcontrol-to-pc}

1. VitalControl cihazını, verilen USB kablosu ile bilgisayarınıza veya dizüstü bilgisayarınıza bağlayın.

   ![VitalControl'ü PC'ye veya dizüstü bilgisayara bağlayın](/images/synchronisation/connect-to-pc.svg "VitalControl'ü PC'ye bağlayın")

1. VitalControl cihazınızın açık olduğundan emin olun.

### Veri alışverişini gerçekleştirin {#perform-data-exchange}

1. `Herde` yazılımı içinde tam bir veri alışverişi gerçekleştirin. Kullanıcı arayüzünüzün yapılandırmasına bağlı olarak, bu alışverişi ana menüdeki `Tam veri alışverişi` menü öğesi (üst düzey öğe _Teknoloji_), yan menüde veya özelleştirilmiş araç kutunuzda (yatay veya dikey) aracılığıyla başlatabilirsiniz.

   ![Herde Yazılımı: Tam veri alışverişini tetikleme](../screenshots/data-exchange.png "Herde: Veri alışverişini tetikleme")

1. Bir açılır pencere açılır ve sol taraftaki kenar çubuğunda belirtilen teknoloji bağlantılarını listeler. Veri alışverişini başlatmak için `VitalControl` etiketli düğmeye tıklayın:

   ![Herde Yazılımı, Veri alışverişini başlatma](../screenshots/start-transfer.png "Herde: Veri alışverişini başlatma")

1. İlk veri alışverişinde, VitalControl cihazında henüz kayıtlı hayvan olmadığını belirten bir uyarı görünür. Bu bildirimi `Evet` ile onaylayın. Ardından veri alışverişi başlatılır.

   ![Herde Yazılımı, veri alışverişi: uyarı](../screenshots/warning.png "Veri alışverişi: uyarı")

1. Veri alışverişi iki aşamalı bir süreçtir: İlk adımda <span style="font-size: 140%">➊</span> hayvan verileri `Herde` yazılımından VitalControl'e aktarılır. İkinci adımda <span style="font-size: 140%">➋</span>, VitalControl ile toplanan ölçüm verileri `Herde` yazılımına aktarılır. İçe aktarılan veri setlerinin (hayvanlar, doğumlar, uyarılar ve ağırlıklar) sayısı açılır pencerede listelenir:

![Yazılım Herde ile veri alışverişi: İşlem adımları](../screenshots/data-transfer.png "Veri alışverişi: İşlem adımları")

1. Veri alışverişinin başarılı bir şekilde tamamlandığı, başarı mesajı içeren bir pop-up ile bildirilir.

   ![Yazılım Herde: Veri alışverişi başarı mesajı](../screenshots/success-message.png "Herde: Veri alışverişi başarı mesajı")

    {{% alert title="Dikkat" %}}
Eğer VitalControl cihazında birçok hayvan kayıtlıysa, veri alışverişi biraz zaman alabilir. Veri transferinin ilerlemesi cihazın ekranında görülebilir.

![VitalControl, veri alışverişi: ilerleme çubuğu](../../vcsynchronizer/images/import-animals/data-transfer.png "VitalControl: veri alışverişi ilerleme çubuğu")
    {{% /alert %}}
