---
title: Bir hayvan listesine filtre uygulama
linkTitle: Filtre
weight: 50
description: >
 Cihazda bulunan hayvanların yalnızca bir alt kümesini görüntülemek için bir hayvan listesine nasıl filtre uygulanacağı.
date: 2023-07-26
categories: [Filter]
tags: [Filter]
translationKey: filter
---
## Filtreleri uygulama {#applying-filters}

{{% alert title="NOTE" %}}
Filtre, VitalControl cihazının `{{<T "Herd" >}}`, `{{<T "Lists" >}}` ve `{{<T "Evaluation" >}}` menü öğeleri içinde filtre kriterlerini kullanarak bir seçim yapmanıza yardımcı olur. Bir filtre uyguladığınız anda, ekranın üst kısmında çeşitli filtre kriterleri için semboller görünür. Bu semboller, hangi filtre kriterlerinin etkinleştirildiğini ve hangilerinin etkinleştirildiğini anlamanıza yardımcı olur. Örneğin, `{{<T "Sex" >}}` filtresini erkek olarak ayarlarsanız, cihaz yalnızca erkek hayvanları kullanır. Örneğin, `{{<T "OnWatch" >}}` filtresini de etkinleştirirseniz, cihaz yalnızca gözlem listesinde olan erkek hayvanları kullanır.
{{% /alert %}}

Değerlendirmelerde bir filtre oluşturmak için şu adımları izleyin:

1. Üst menü öğesine ait alt menüde <img src="/icons/main/evaluation.svg" width="50" align="bottom" alt="Evaluation" /> `{{<T "Evaluation" >}}` `F3` tuşuna <img src="/icons/footer/filter.svg" width="25" align="bottom" alt="Filter" /> bir kez basın. Üst menü öğelerine ait alt menüde <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Lists" /> `{{<T "Lists" >}}` ve <img src="/icons/main/herd.svg" width="60" align="bottom" alt="Herd" /> `{{<T "Herd" >}}`, tuşa iki kez basmanız gerekir.

2. Tüm filtre seçeneklerini ayarlayabileceğiniz bir alt menü açılır. `{{<T "AnimalID" >}}`, `{{<T "Age" >}}`, `{{<T "Sex" >}}`, `{{<T "Transponder" >}}`, `{{<T "NationalAnimalID" >}}`, `{{<T "Fever" >}}`, `{{<T "OnWatch" >}}`, `{{<T "TypeAnimal" >}}` ve `{{<T "Alarm" >}}` ile filtreleyebilirsiniz.

3. `{{<T "TypeAnimal" >}}`, `{{<T "Sex" >}}`, `{{<T "Transponder" >}}` ve `{{<T "NationalAnimalID" >}}` filtreleri için ilgili alana gidin ve `{{<T "Ok" >}}` ile onaylayın. İstenilen ayarı belirtmek için ok tuşlarını ◁ ▷ kullanın. Seçilen ayarı uygulamak için `F3` tuşunu `{{<T "Apply" >}}` kullanın. Filtre değişikliklerinizi iptal etmek için `F1` tuşuna &nbsp;<img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Back" />&nbsp; basın.

![VitalControl: menu Evaluation Create filter](images/filter.png "Filtre oluştur")

4. `{{<T "AnimalID" >}}` ve `{{<T "Age" >}}` filtreleri için ilgili kriteri seçin ve `{{<T "Ok" >}}` ile onaylayın. Şimdi size bir alt ve üst limit gösterilecektir. Ok tuşlarını △ ▽ kullanarak istediğiniz limite gidin ve `{{<T "Ok" >}}` tuşuna iki kez basarak onaylayın. Şimdi ok tuşlarını ◁ ▷ ve ok tuşlarını △ ▽ kullanarak istediğiniz sayıyı ayarlayabilirsiniz. Tüm ayarlar doğru olduğunda, ayar modundan çıkmak ve seçilen filtreyi/filtreleri `F3` tuşu `{{<T "Apply" >}}` ile uygulamak için tekrar `{{<T "Ok" >}}` tuşuna basın. İsterseniz değişikliklerinizi iptal etmek için `F1` tuşunu &nbsp;<img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Geri" />&nbsp; kullanabilirsiniz.

![VitalControl: menu Evaluation Create filter](images/filter2.png "Filtre oluştur")

5. `{{<T "Fever" >}}`, `{{<T "OnWatch" >}}` ve `{{<T "Alarm" >}}` filtreleri için uygulamalarını devre dışı bırakma veya etkinleştirme olanağı vardır. Bunu yapmak için ilgili filtreyi seçin ve `{{<T "Ok" >}}` ile onaylayın. Filtre şimdi aktiftir. Filtreyi devre dışı bırakmak için tekrar `{{<T "Ok" >}}` ile onaylayın.

![VitalControl: menu Evaluation Create filter](images/filter3.png "Filtre oluştur")

6. Tüm filtreleri ayarladıktan sonra, tanımlanan filtreleri yerine koymak için `F3` tuşu `{{<T "Apply" >}}` kullanın veya filtre(ler)deki değişikliklerinizi iptal etmek için `F1` tuşuna <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Geri" /> basın.
