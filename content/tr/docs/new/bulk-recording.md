---
title: "Satın alınan hayvan grubunun toplu kaydı"
linkTitle: "Toplu kayıt"
date: 2023-07-28T13:25:28+02:00
weight: 15
draft: false
slug: bulk-recording
description: >
  Çeşitli hayvanları kaydetmek için barkod tarayıcıyı kullanın.
categories: [Toplu kayıt]
tags: [Toplu kayıt]
translationKey: new/bulk-recording
---
## Toplu kayıt {#bulk-recording}

Toplu kayıt yardımıyla kısa sürede çok sayıda hayvanı yakalayabilir ve cihazınıza kaydedebilirsiniz. Sığır pasaportlarındaki kulak küpe numarası ve doğum tarihi için barkodları taramak için barkod tarayıcıyı kullanın. Hayvan otomatik olarak kaydedilir ve hemen bir sonraki pasaportu tarayabilirsiniz. Hayvanların toplu kaydını gerçekleştirmek için şu adımları izleyin:

1. Barkod tarayıcıyı kablo kullanarak VitalControl'e bağlayın.

2. VitalControl cihazınızın ana ekranında, menü öğesini seçin <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="Yeni hayvan" /> `{{<T "New" >}}` ve `{{<T "Ok" >}}` düğmesine basın.

3. Bir alt menü açılır. Menü öğesini seçmek için ok tuşlarını kullanın ◁ ▷ △ ▽ <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Toplu kayıt" /> `{{<T "BulkRecording" >}}` ve `{{<T "Ok" >}}` ile onaylayın.

4. Başka bir alt menü açılır, bu menüde hayvanın kulak küpe numarası için bir alan ve hayvanın doğum tarihi için başka bir alan bulunur. İlk olarak kulak küpe numarası için barkodu tarayın. Alanın kenarlığı kırmızıdan yeşile döner. Ardından doğum tarihini tarayın. Kenarlık kısa bir süre yeşile döner ve ardından her iki kenarlık tekrar kırmızı görünür. Ekranın üst kısmındaki pasaport simgesinin altındaki sayaç <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Hayvan pasaportları" title="Hayvan pasaportları" /> 0'dan 1'e çıkar. İlk hayvan kaydedildi. Devam edin ve diğer sığır pasaportlarını tarayın. Her pasaport tarandıktan sonra, pasaport simgesinin altındaki sayaç <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Hayvan pasaportları" title="Hayvan pasaportları" /> bir artar. Sürü simgesinin altındaki sayaç <img src="/icons/header/group.svg" width="35" align="bottom" alt="Hayvan grubu"  title="Hayvan grubu" /> da bir artar.


{{% alert title="İpucu" %}}
Pasaport sembolünün altındaki sayaç <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Hayvan pasaportları" title="Hayvan pasaportları" />, `{{<T "BulkRecording" >}}` ekranından çıkmadan bir seferde kaç geçiş taradığınızı gösterir. Sürü sembolünün altındaki sayaç <img src="/icons/header/group.svg" width="35" align="bottom" alt="Yeni hayvan" /> toplamda kaç pasaport taradığınızı gösterir. Bu sayaç, `{{<T "BulkRecording" >}}` ekranından çıksanız bile sıfırlanmaz. Bu sayı, menü öğesindeki ['Satın Alımlar'](../new-on-farm/purchased-animals/) girişlerinize eşdeğerdir.
{{% /alert %}}

   ![VitalControl: Menü 'Yeni - Toplu kayıt'](../images/bulk-recording.png "Toplu kayıt")

{{% alert title="İpucu" %}}
`{{<T "BulkRecording" >}}` menü öğesi içinde daha fazla ayar seçeneğiniz var. Bunlar aşağıda açıklanmıştır. Hazırlık adımları olarak, her zaman önce `{{<T "BulkRecording" >}}` menü öğesine erişin ve ardından talimatlardaki gibi devam edin.
{{% /alert %}}

{{% alert title="İpucu" %}}
Tarama işlemi sırasında hata mesajları görünebilir. Bu durumda, barkod tarayıcı bir ses çıkarır ve taramaya devam edilemez. VitalControl ekranındaki ilgili hata mesajını onaylayın ve taramaya devam edin.
{{% /alert %}}

### Doğum tarihi zorunlu {#birth-date-mandatory}

Bu ayar seçeneği ile hayvanları oluştururken doğum tarihinin belirtilip belirtilmeyeceğini belirleyebilirsiniz. Bu seçeneği devre dışı bırakırsanız, bir hayvanı kaydetmek için yalnızca barkodu taramanız yeterlidir. Ancak, bu hayvanlar için mevcut tarih doğum tarihi olarak kaydedilir! Bu özellik varsayılan olarak etkindir. Devre dışı bırakmak için şu adımları izleyin:

1. Ayarlar menüsünü açmak için <img src="/icons/gear.svg" width="25" align="bottom" alt="Ayarlar menüsü" /> `Aç/Kapa` düğmesini kullanın.

2. Ayar seçeneği `{{<T "BirthDateMandatory" >}}` seçmek için ok tuşlarını △ ▽ kullanın ve `{{<T "Ok" >}}` ile onaylayın.

3. Sarı daire, işlevin etkin olduğunu simgeler. Gri daire, işlevin devre dışı olduğunu simgeler.


4. Ayarları kaydedin ve menü öğesine dönmek için `F1` tuşunu kullanın &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Kaydet ve geri dön" />&nbsp; `{{<T "BulkRecording" >}}`.

   ![VitalControl: Menü Yeni Doğum tarihi zorunlu](../images/birthdate.png "Doğum tarihi zorunlu")

### Varsayılan değerler {#default-values}

`{{<T "DefaultValues" >}}` ayarları menüsünde, oluşturduğunuz her hayvan için geçerli olan standartları belirlersiniz. Barkod tarayıcı ile oluşturma süreci yukarıda açıklandığı gibi değişmeden kalır. Hayvan türünü, cinsiyetini, ırkını ve bulunduğu yeri ayarlama seçeneğiniz vardır. `{{<T "DefaultValues" >}}` ayarlarını yapmak için şu adımları izleyin:

1. Ayarlar menüsünü açmak için <img src="/icons/gear.svg" width="25" align="bottom" alt="Ayarlar menüsü" /> `Aç/Kapa` düğmesini kullanın.

2. Menü öğesini seçmek için ok tuşlarını △ ▽ kullanın `{{<T "DefaultValues" >}}` ve `{{<T "Ok" >}}` ile onaylayın.

3. Farklı ayar seçenekleri ile bir alt menü açılır. İstenilen ayar seçeneğini seçmek için ok tuşlarını △ ▽ kullanın. İstenilen ayarı seçmek için ok tuşlarını ◁ ▷ kullanın.

4. Ayarları kaydedin ve menü öğesine dönmek için `F1` tuşunu kullanın&nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Kaydet ve geri dön" />&nbsp; `{{<T "BulkRecording" >}}` .

   ![VitalControl: Menü Yeni Varsayılan değerler](../images/defaultvalues.png "Varsayılan değerler")

### Kaydedilen değerler {#recorded-values}

`{{<T "RecordedValues" >}}` ayarları menüsünde, kulak küpe numarası ve doğum tarihine ek olarak hangi değerlerin kaydedilmesi gerektiğini belirleyebilirsiniz. `{{<T "Breed" >}}`, `{{<T "Sex" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "CurrentWeight" >}}`, `{{<T "BirthWeight" >}}` ve `{{<T "TypeAnimal" >}}` arasında seçim yapabilirsiniz. En az bir değer ayarladığınız anda, tarama sırasında süreç değişir. İlk olarak kulak küpe numarasını ve doğum tarihini tarayın. Ardından ayarlanacak değerleri seçmek için yön tuşlarını △ ▽ kullanın ve değerleri ayarlayın. Ardından girişlerinizi `F3` tuşu ile kaydedin. Ancak o zaman hayvan oluşturulur! Kaydedilecek değerleri ayarlamak için şu adımları izleyin:


1. Ayarlar menüsünü açmak için <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings menu" /> `Aç/Kapat` düğmesini kullanın.

2. Menü öğesini seçmek için ok tuşlarını △ ▽ kullanın `{{<T "RecordedValues" >}}` ve `{{<T "Ok" >}}` ile onaylayın.

3. Kaydedilecek istenen değeri ok tuşlarıyla △ ▽ seçin ve `{{<T "Ok" >}}` ile onaylayın. Sarı bir daire belirir. Kaydedilecek değeri devre dışı bırakmak istiyorsanız, tekrar `{{<T "Ok" >}}` ile onaylayın. Sarı daire kaybolur.

4. Ayarları kaydedin ve menü öğesine dönmek için `F1` tuşunu kullanın &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp; `{{<T "BulkRecording" >}}`.

5. Kaydedilecek tüm değerleri tekrar devre dışı bırakmak isterseniz, menü öğesinde `{{<T "RecordedValues" >}}` ayar seçeneğini seçin `{{<T "EnableAllResetOrder" >}}` ve `{{<T "Ok" >}}` ile onaylayın.

   ![VitalControl: Menü Yeni Kayıt değerleri](../images/recordvalues.png "Kayıt değerleri")
