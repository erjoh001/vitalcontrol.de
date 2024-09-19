---
title: Hayvan verilerini düzenle
linkTitle: Düzenle
slug: edit
weight: 90
description: >
 Seçilen hayvanın verilerini düzenleyin.
date: 2023-07-26
Kategoriler: [Actions]
Etiketler: [Actions, hayvan verileri, düzenle]
translationKey: actions/edit
---

## Hayvan verilerini düzenle {#edit-animal-data}

<img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `{{<T "Edit" >}}` eylemi, seçilen hayvanın verilerini doğrudan değiştirmenizi sağlar. Bu işlev, örneğin hayvan muayenesi sırasında cinsiyetin yanlış kaydedildiği ortaya çıkarsa hayvan verilerini düzeltmeyi kolaylaştırır. Aşağıdaki verileri değiştirebilirsiniz:

- Hayvan türü
- Cinsiyet
- Doğum ağırlığı
- Irk
- Bulunduğu yer
- Ulusal hayvan kimliği
- Kimlik
- Çoğul
- Doğum tarihi
- Doğum kolaylığı

Hayvan verilerini değiştirmek için şu adımları izleyin:

1. VitalControl cihazınızın ana ekranında, menü öğesini seçin &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` ve `{{<T "Ok" >}}` düğmesine basın.

2. Ya transponder kullanarak bir hayvanı tarayın ya da listeden bir hayvan seçin. `{{<T "Ok" >}}` ile onaylayın ve ok tuşları △ ▽ ile bir hayvan seçin. `{{<T "Ok" >}}` ile onaylayın.

3. Hayvan eylemleri ile bir alt menü açılır. Ok tuşlarını ◁ ▷ △ ▽ kullanarak <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `{{<T "Edit" >}}` eylemini seçin ve `{{<T "Ok" >}}` ile onaylayın.

4. Hayvan verileri ile bir liste açılır. İstenilen değişiklik seçeneğini seçmek için ok tuşlarını △ ▽ kullanın.

5. `{{<T "TypeAnimal" >}}`, `{{<T "Sex" >}}`, `{{<T "BirthWeight" >}}`, `{{<T "Breed" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "Multiples" >}}` ve `{{<T "CalvingEase" >}}` verileri için istenilen değişikliği yapmak için ok tuşlarını ◁ ▷ kullanın.

6. `{{<T "ID" >}}` ve `{{<T "DateBirth" >}}` verileri için, ok tuşları △ ▽ ile seçin ve `{{<T "Ok" >}}` ile onaylayın. İlgili numarayı seçmek için ok tuşlarını △ ▽ ve numara alanları içinde gezinmek için ok tuşlarını ◁ ▷ kullanın.

7. Değişikliği `F3` tuşu ile kaydedin.

{{< tabpane >}}
{{< tab header="Hayvan verilerini düzenle:" text=true disabled=true />}}
{{% tab header="Transponder taraması" text=true %}}
![VitalControl: Menü Eylemi Hayvan verilerini düzenle](../images/edit-scan.png "Hayvan verilerini düzenle")
{{% /tab %}}
{{% tab header="Listeden manuel seçim" text=true %}}
![VitalControl: Menü Eylemi Hayvan verilerini düzenle](../images/edit.png "Hayvan verilerini düzenle")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="İpucu" %}}
Bu eylem mevcut değilse, eylem muhtemelen devre dışı bırakılmıştır! Eylemi [eylem ayarları](../setting/) menüsünde etkinleştirin. Alternatif olarak, tüm eylemleri sıfırlamak bu eylemi geri getirecektir.
{{% /alert %}}
