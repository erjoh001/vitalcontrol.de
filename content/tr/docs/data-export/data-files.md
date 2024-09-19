---
title: Dışa aktarılan CSV veri dosyalarının yapısı ve içeriği
linkTitle: Dışa aktarma dosyaları
date: 2023-07-20
weight: 30
description: >
  Dışa aktarma sırasında oluşturulan dört veri dosyasının yapısının ve içeriğinin açıklaması.
Kategoriler: [Veri dışa aktarma]
Etiketler: [dışa aktarma dosyaları, sıcaklıklar, ağırlıklar, derecelendirmeler]
slug: export-files
translationKey: data-export/data-files
---
## Genel bilgiler {#general-information}

Hayvan verilerini dışa aktarırken, [USB flash sürücü][] veya [PC'deki yerel kütle depolama cihazına][] olsun, her durumda dört dışa aktarma dosyası oluşturulur:

- [Hayvan verileri][] `(animals.csv)`
- [Vücut sıcaklığı verileri][] `(temperatures.csv)`
- [Ağırlık verileri][] `(weights.csv)`
- [Hayvan derecelendirmeleri][] `(ratings.csv)`

[USB flash sürücü]: ../usb-drive/
[PC'deki yerel kütle depolama cihazına]: ../pc/

[Hayvan verileri]: #animal-data-animalscsv
[Vücut sıcaklığı verileri]: #body-temperature-data-temperaturescsv
[Ağırlık verileri]: #weight-data-weightscsv
[Hayvan derecelendirmeleri]: #animal-ratings-ratingscsv

Tüm dört dosya insan tarafından okunabilir [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) metin dosyalarıdır. Dosyalar `UTF-8` formatında kodlanmıştır, sütun ayırıcı olarak noktalı virgül (`;`) kullanılır. Bireysel veri alanları tırnak işaretleri içinde *değildir*. İlgili tablonun her satırı bir hayvan veri setini veya bir hayvan üzerinde gerçekleştirilen bir ölçüm veya değerlendirmeyi temsil eder.

## Dışa aktarılan verilerin daha fazla işlenmesi {#further-processing-of-exported-data}

Bu dört dışa aktarma dosyasının her birini seçtiğiniz bir elektronik tablo programında (örneğin [Microsoft Excel](https://products.office.com/excel) veya [OpenOffice Calc](https://www.openoffice.org/)) açabilir ve verilerin ileri düzey analizini orada gerçekleştirebilirsiniz. Örnek olarak, bir elektronik tablo programında `animals.csv` tablosunun görünümü aşağıda gösterilmiştir:

![Dışa aktarılan hayvan verileri, bir elektronik tablo programında açılmış](../images/animals.png "Elektronik tablo programında açılmış hayvan verileri")

## Veri dosyalarının açıklaması {#description-of-data-files}

Aşağıdaki dört bölüm, dışa aktarılan her bir veri dosyasını ayrıntılı olarak açıklamaktadır:

### Hayvan verileri (`animals.csv`) {#animal-data-animalscsv}

- **Dosya adı** `animals.csv`
- **Açıklama** Genel hayvan verileri
- **Sütun sayısı** 6

Hayvan veri tablosunun her satırı, VitalControl'de saklanan bir hayvanı temsil eder. Örnek bir hayvan veri tablosu şu şekilde görünür:

{{% data-files/en %}}

Aşağıdaki tablo, hayvan veri tablosunun her sütununu listeler ve açıklar:

|Sütun| Sütun adı           | Açıklama                        | Yorumlar                                                  |
|:-:|----------------------|---------------------------------|-----------------------------------------------------------|
| 1 | `National-ID-Animal` | Resmi ulusal hayvan numarası    | [ISO1174/85][]'e göre 15 haneli, kaydedilmemiş olabilir   |
| 2 | `Farm-ID-Animal`     | Yönetim numarası                | 2 ila 6 haneli, genellikle tasma numarasıyla aynıdır      |
| 3 | `Transponder-ID`     | Transponder numarası            | eksik olabilir, ulusal hayvan kimliği ile aynı olabilir   |
| 4 | `DateOfBirth`        | Doğum tarihi                    | Format: `YYYY-MM-TT` (`Yıl-Ay-Gün`)                       |
| 5 | `Sex`                | Cinsiyet                        | _Değerler:_ `M`: erkek, `F`: dişi, `?`: bilinmiyor        |
| 6 | `BirthWeight-Kg`     | Doğum ağırlığı                  | Birim: `kilogram`, kaydedilmemiş / eksik olabilir         |

[ISO1174/85]: https://en.wikipedia.org/wiki/ISO_11784_and_ISO_11785

Gerekirse, sağlanan örnek dosyayı da indirebilirsiniz [animals.csv][].

[animals.csv]: /data-export/animals.csv

### Vücut sıcaklığı verileri (`temperatures.csv`) {#body-temperature-data-temperaturescsv}

- **Dosya adı** `temperatures.csv`
- **Açıklama** Hayvanların rektal vücut sıcaklığının alınmasıyla elde edilen sıcaklık değerleri.
- **Sütun sayısı** 5

Sıcaklık veri tablosunun her satırı, VitalControl cihazı ile bir hayvan üzerinde gerçekleştirilen bir vücut sıcaklığı ölçümünü temsil eder. Örnek bir sıcaklık tablosu şu şekilde görünür:

{{% data-files/en_2 %}}

a
Aşağıdaki tablo, vücut sıcaklığı değerlerini içeren dışa aktarma dosyasının her sütununu listeler ve açıklar:

|Sütun| Sütun adı           | Açıklama                             | Yorumlar                                         |
|:-:|-----------------------|--------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`  | Ölçülen hayvanın 15 haneli numarası  | [ISO1174/85][]'e göre, kaydedilmemiş olabilir    |
| 2 | `Farm-ID-Animal`      | Ölçülen hayvanın yönetim numarası    | 2 ila 6 haneli, genellikle tasma numarasına eşit |
| 3 | `Date`                | Sıcaklık ölçüm tarihi                | Format: `YYYY-MM-TT` (`Yıl-Ay-Gün`)              |
| 4 | `Time`                | Sıcaklık ölçüm saati                 | Format: `hh-mm-ss` (`saat:dakika:saniye`)        |
| 5 | `Temperature-Celsius` | Ölçülen sıcaklık değeri              | Birim: `Derece Celsius`                          |

Gerekirse, sağlanan örnek dosyayı [temperatures.csv][] de indirebilirsiniz. Aşağıdaki şekil, bu veri dosyasının bir hesap tablosu programında açılmış halini göstermektedir.

![Vücut sıcaklığı değerleri içeren dışa aktarma dosyası, hesap tablosu programında açılmış](../images/temperatures.png "Tablo sıcaklık değerleri")

[temperatures.csv]: /data-export/temperatures.csv

### Ağırlık verileri (`weights.csv`) {#weight-data-weightscsv}

- **Dosya adı** `weights.csv`
- **Açıklama** Hayvanların tartılmasıyla elde edilen ağırlık değerleri
- **Sütun sayısı** 5

Ağırlık tablosunun her satırı, hayvanın ağırlık değerini kaydetmek için VitalControl cihazı kullanılarak yapılan bir tartımı temsil eder. Örnek bir ağırlık tablosu şu şekilde görünür:

{{% data-files/en_3 %}}

Aşağıdaki tablo, hayvan ağırlıklarını içeren tablonun bireysel sütunlarını listeler ve açıklar:

|Sütun| Sütun adı           | Açıklama                             | Yorumlar                                         |
|:-:|-----------------------|--------------------------------------|--------------------------------------------------|
| 1 | `National-ID-Animal`  | Tartılan hayvanın 15 haneli numarası | [ISO1174/85][]'e göre, kaydedilmemiş olabilir    |
| 2 | `Farm-ID-Animal`      | Tartılan hayvanın yönetim numarası   | 2 ila 6 haneli, genellikle tasma numarasına eşit |
| 3 | `Date`                | Tartım tarihi                        | Format: `YYYY-MM-TT` (`Yıl-Ay-Gün`)              |
| 4 | `Time`                | Tartım saati                         | Format: `hh-mm-ss` (`saat:dakika:saniye`)        |
| 5 | `Weight-Kg`           | Ağırlık değeri                       | Birim: `Kilogram`                                |


Gerekirse, sağlanan örnek dosyayı [weights.csv][] indirebilirsiniz. Aşağıdaki şekil, bu dışa aktarma dosyasının bir hesap tablosu programında açılmış halini göstermektedir.

![Hayvan ağırlık değerleri içeren dışa aktarma dosyası, hesap tablosu programında açılmış](../images/weights.png "Tablo ağırlık değerleri")

[weights.csv]: /data-export/weights.csv

### Hayvan değerlendirmeleri (`ratings.csv`) {#animal-ratings-ratingscsv}

- **Dosya adı** `ratings.csv`
- **Açıklama** Hayvanların görsel olarak incelenmesiyle elde edilen hayvan değerlendirmeleri
- **Kolon sayısı** 8

Hayvan değerlendirme tablosunun her satırı, VitalControl ile gerçekleştirilen bir hayvan değerlendirmesinin görsel değerlendirmesini temsil eder. Örnek bir hayvan değerlendirme tablosu şu şekilde görünmektedir:

{{% data-files/en_4 %}}

Aşağıdaki tablo, hayvan değerlendirme tablosunun her bir sütununu listeler ve açıklar:

|Kolon| Sütun adı           | Açıklama                                 | Yorumlar                                        |
|:-:|-----------------------|-----------------------------------------|-------------------------------------------------|
| 1 | `National-ID-Animal`  | Değerlendirilen hayvanın 15 haneli numarası | [ISO1174/85][]'e göre, kaydedilmemiş olabilir   |
| 2 | `Farm-ID-Animal`      | Değerlendirilen hayvanın yönetim numarası | 2 ila 6 haneli, genellikle yaka numarasına eşit |
| 3 | `Date`                | Değerlendirme tarihi                     | Format: `YYYY-MM-TT` (`Yıl-Ay-Gün`)             |
| 4 | `Time`                | Değerlendirme saati                      | Format: `hh-mm-ss` (`saat:dakika:saniye`)       |
| 5 | `ScoreCondition`      | Genel durum değerlendirmesi              | _Değerlendirmeler:_ `Kırmızı`, `Sarı`, `Yeşil`, `Yok` |
| 6 | `ScoreFeedIntake`     | Yem alımı değerlendirmesi                | _Değerlendirmeler:_ `Kırmızı`, `Sarı`, `Yeşil`, `Yok` |
| 7 | `ScoreScours`         | `Scours` durumu değerlendirmesi          | _Değerlendirmeler:_ `Kırmızı`, `Sarı`, `Yeşil`, `Yok` |
| 8 | `ScoreRespiratory`    | `Solunum hastalıkları` durumu değerlendirmesi | _Değerlendirmeler:_ `Kırmızı`, `Sarı`, `Yeşil`, `Yok` |

Gerekirse, sağlanan örnek dosyayı da indirebilirsiniz [ratings.csv][]. Aşağıdaki şekil, bu dosyanın bir hesap tablosu programında açılmış halini göstermektedir.

![Hayvan değerlendirmeleri ile dışa aktarma dosyası, hesap tablosu programında açılmış](../images/ratings.png "Tablo hayvan değerlendirmeleri")

[ratings.csv]: /data-export/ratings.csv
