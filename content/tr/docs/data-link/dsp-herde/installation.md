---
title: "Technology VitalControl Kurulumu:"
linkTitle: Kurulum
date: 2023-08-04T12:21:53+02:00
draft: false
description: >
  *Herde* yazılımı ile VitalControl cihazı arasındaki veri alışverişi için senkronizasyon parametrelerini tanımlayın.
weight: 10
categories: [DSP Herde]
translationKey: DSPherde/installation
---
İlk [veri alışverişinden](../data-exchange/) önce, VitalControl cihazına teknoloji bağlantısı oluşturulmalı ve bir kez kurulmalıdır.

{{% alert title="Dikkat" %}}
Teknoloji bağlantısını kurmadan önce, PC'nizde 'VCSynchronizer' yazılımının yüklü olup olmadığını kontrol edin; bu yazılım veri alışverişi için zorunludur. Bunu yapmak için, Windows Başlat menüsünü açın ve uygulamalar listenizde 'Urban VitalControl' adlı bir giriş arayın. Böyle bir giriş bulamazsanız, `VCSynchronizer` yazılımını PC'nize [yükleyin](../../vcsynchronizer/installation/).
{{% /alert %}}

Teknolojiyi kurmak için şu adımları izleyin:

## VitalControl cihazı ile veri alışverişi için yeni parametre seti oluşturun {#create-new-parameter-set-for-data-exchange-with-vitalcontrol-device}

1. `Herde` yazılımı içinde, `Ayarlar` penceresini açın. Kullanıcı arayüzünüzün yapılandırmasına bağlı olarak, bu pencereyi ana menüdeki `Organizasyon` menü öğesi (üst düzey öğe _Ayarlar_), yan menüde veya özelleştirilmiş araç kutunuzda (yatay veya dikey) açabilirsiniz.

   ![Software Herde: ayarlar menüsünü çağırma](../screenshots/settings.png "Herde: Ayarları Çağır")

1. Sol kenar çubuğunda birçok ayar kategorisinin listelendiği bir açılır pencere `Ayarlar` açılır. `Servis` kategorisini ➊ açın ve `Teknoloji` alt kategorisini ➋ seçin.

1. Sağ ana alanın üst kısmında, tanımlanmış tüm teknoloji parametre setlerinin listelendiği bir açılır menü görünür. Kurulmuş teknolojilerin sayısı sağda gösterilir. ![Software Herde: Yeni teknoloji parametre seti oluştur](/icons/new.png "Herde: Teknoloji Bağlantısı Oluştur") `Yeni teknoloji parametre seti oluştur` ➌ düğmesine tıklayın.
 
![Software Herde: settings screen for technology](../screenshots/settings-technology.png "Herde: Settings for Technology")

1. Başka bir açılır pencere açılır. **Bağlantı adı** olarak `VitalControl` ve **Teknoloji Türü** olarak `Urban VitalControl (Gen 2)` girin ve ardından `Kabul et` düğmesine tıklayın.

   ![Software Herde: Create new parameter set for VitalControl device](../screenshots/new-technology.png "Create new technology: VitalControl").

   `VitalControl` teknolojisi için parametre seti şimdi oluşturuldu ve sonraki adımlarda yapılandırılmalıdır.

## Yapılandırma: Temel ayarlar {#configuration-basic-settings}

Başlangıçta, aşağıdaki şekilde gösterildiği gibi, görüntülenen ekranda `Temel ayarlar` sekmesi seçilir. Çiftliğinize özgü koşullara göre `Harici program` ➊, `Hayvan verileri` ➋, `Konumlar` ➌ ve `Çıkış` ➍ kategorilerinde ayarlamalar yapın.

   ![Software Herde: Configuration of basic settings](../screenshots/basic-settings.png "Technology VitalControl: Basic settings").
   
### Kategori `Harici program` ➊ {#category-external-program-}

VitalControl ve Herde Plus arasında veri alışverişi yapmak için, harici yardımcı program olarak temel yazılım [VitalControl Synchronizer](../../vcsynchronizer) gereklidir. Bu programın doğru çalışması için, `Harici program` ➊ kategorisinde bazı ayarlamalar yapılmalıdır.

- **Veri alışverişi için cihaz adı**:  
  Varsayılan olarak bu alan boştur. Ancak, buraya bilgisayarınızın adını girmeniz önerilir. Bunu yapmak için, açılır alanın sağ ucundaki ![Herde Software: Create new technology coupling](/icons/arrow-down.png "Herde: Create technology coupling") `Aşağı ok` simgesine basın. Bilgisayar adınız şimdi belirlenip açılır listede seçim için görüntülenecektir. Alan bilgisayar adınızla doldurulduktan ve bu ayar kaydedildikten sonra, veri alışverişi yalnızca bilgisayarınızdan tetiklenebilir.

- **Yol içinde çalıştır**:
  Lütfen bu giriş alanına `%LOCALAPPDATA%\Urban\VitalControl\Synchronizer` girin. Bu, `VitalControl Synchronizer` programının (daha spesifik olarak `vcsynchronizer.exe` dosyasının) mutlak yoludur. Bu programın hedef dizini [VCSynchronizer'ın kurulumu](../../vcsynchronizer/installation) sırasında değiştirilmişse, lütfen burada seçilen hedef dizini girin.


- **Program HerdePlus 🡒 Technology**:  
  Bu giriş alanı `vc_imp.bat` değeri ile doldurulmalıdır. Aynı isimdeki toplu iş dosyası, veri ithalatı sırasında işlemlerin sırasını belirtir.

- **Technology 🡒  Program HerdePlus**:  
  Bu giriş alanı `vc_exp.bat` değeri ile doldurulmalıdır. Aynı isimdeki toplu iş dosyası, veri ihracatı sırasında işlemlerin sırasını belirtir.

### Kategori `Hayvan Verileri` ➋ {#category-animal-data-}

Veri alışverişinin tam olarak işlevsel olabilmesi için 'Hayvan verileri' ➋ kategorisinde ek ayarlamalar yapılmalıdır.

- **Hayvan numarası**:  
  Bu ayar, hayvanların VitalControl cihazında hangi kimliği alacağını belirler:
  - Hayvanlarınıza kısa kimlikler (`Ahır no.`, 2 ila 6 haneli) atadıysanız, burada 'Ahır numarası' değerini seçmelisiniz: hayvanın VitalControl'de görüntülenen kimliği, hayvana atanan ahır numarasına karşılık gelecektir.
  - Hayvanlarınıza kısa kimlik numaraları **atamadıysanız** - bu durum örneğin besi sektöründe yaygındır - burada `Küpe no. (5 haneli)` değerini seçmelisiniz. Hayvanın VitalControl cihazında görüntülenen kimliği, hayvanın sarı kulak küpesinde basılı olan kimliğin son 5 hanesine karşılık gelecektir.
  
<br>

- **Verici no.**:  
  Bu ayar, bir hayvanın RFID taraması sırasında beklenen numarasını belirler:  
  - Hayvanlarınıza bir transponder ile tasma takıyorsanız veya hayvanlarınıza kulak transponderi takıyorsanız -örneğin otomatik yemlikte tanımlama için-, burada 'Transponder' değerini seçmelisiniz.
  - Hayvanlarınız veya buzağılarınız, hayvanınızın tüm yaşamı boyunca tanımlanması için kullanılacak resmi ulusal 15 haneli kimlik numarası ile kodlanmış elektronik kulak küpeleri taşıyorsa, burada 'Küpe no. (15 haneli)` değerini seçmelisiniz.

<br>

- **Transfer için minimum yaş**:  
  Bu giriş alanına `0` değeri girilirse, **tüm hayvanlar** yaşlarına bakılmaksızın VitalControl cihazına aktarılacaktır. `0`dan büyük bir değer, aktarılacak hayvanlar için minimum yaşı (gün olarak) tanımlar. Örneğin, **sadece ineklerin** cihaza aktarılması gerekiyorsa, burada minimum yaş olarak 600 gün (= 20 ay) girilmelidir.

### Kategori `Konumlar` ➌ {#category-locations-}

Bu kategoriyi, belirli konumlardaki hayvanları cihazınıza veri aktarımından hariç tutmak için kullanın. Bunu yapmak için, hayvanları cihazınıza **aktarmak istemediğiniz** konumların işaretini kaldırın.

### Kategori `Ayrılma` ➍ {#category-leaving-}

Burada 'HERDEplus'ta Ayrılma' seçeneğini işaretleyin. Bu şekilde, sürüden ayrılan hayvanların senkronizasyon sırasında VitalControl cihazından da silineceğini belirtmiş olursunuz.
Ayrıca 'Stokta mevcut değil' seçeneğini de işaretleyin. Bu şekilde, `Herde` yazılımında bilinmeyen hayvanların senkronizasyon sırasında VitalControl cihazından silineceğini belirtmiş olursunuz.

## Yapılandırma: Teknolojiye özgü ayarlar {#configuration-technology-specific-settings}

Sonraki adımda, veri değişiminin kapsamını belirlemek için `Teknolojiye özgü ayarlar` sekmesine tıklayın. Orada listelenen tüm onay kutularını işaretlemeniz önerilir, ancak `İşlemden sonra ithalat dosyasını kaydet` onay kutusu hariç. Bu son onay kutusu teşhis amaçlıdır ve yalnızca servis personeli tarafından talep edilirse seçilmelidir.

- **Aktarım için maksimum yaş**:  
  Buraya `0` değeri girilirse, yaşlarına bakılmaksızın **tüm hayvanlar** VitalControl cihazına aktarılır. `0`dan büyük bir değer, aktarılacak hayvanlar için maksimum yaşı (gün olarak) tanımlar. Örneğin, **sadece buzağıların** cihaza aktarılması isteniyorsa, buraya maksimum yaş olarak 90 gün (= 3 ay) girilmelidir.

   ![Herde Yazılımı: Yapılandırma Veri değişimi](../screenshots/technology-specific-settings.png "Veri değişimi: özel ayarlar").

## Veri değişim ayarlarını kaydet {#save-data-exchange-settings}

Tüm yapılandırma parametrelerini uygun şekilde yapılandırdıktan sonra `Kaydet (F2)` tuşuna basın. VitalControl cihazına veri değişimi için belirlenen parametre seti şimdi kaydedildi ve kullanıma hazır.  
Belirtilen ayarların geçerli olup olmadığını kontrol etmek için şimdi bir [veri değişimi](../data-exchange/) gerçekleştirin, böylece VitalControl cihazına veri alışverişini başarıyla gerçekleştirebilirsiniz.


