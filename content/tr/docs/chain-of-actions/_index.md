---
title: "Eylem Zinciri: Kurulum ve Kullanım"
linkTitle: "Eylem Zinciri"
weight: 15
date: 2023-07-28T13:25:28+02:00
draft: false
slug: chain-of-actions
description: >
 Birden fazla hayvan eylemini ardışık olarak gerçekleştirin
categories: [Eylem Zinciri]
tags: [Eylem Zinciri, Eylemler]
translationKey: action-chain
---
## Eylem Zinciri {#chain-of-actions}

Eylem zinciri, bir hayvan için birbiri ardına otomatik olarak birkaç eylemi gerçekleştirmenizi sağlar. Örneğin, `{{<T "Temperature" >}}` ve `{{<T "Rating" >}}` eylemlerini seçebilirsiniz. Daha sonra eylem zincirini gerçekleştirdiğinizde, önce hayvanınızın sıcaklığını ölçebilir ve hemen ardından derecelendirmeyi kaydedebilirsiniz.

### Eylem Zincirini Kullan {#use-chain-of-actions}

1. VitalControl cihazınızın ana ekranında, menü öğesini seçin &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Eylem Zinciri" />&nbsp; `{{<T "ActionChain" >}}` ve `{{<T "Ok" >}}` düğmesine basın.

2. Ya transponder kullanarak bir hayvanı tarayın ya da `{{<T "Ok" >}}` ile onaylayın ve istenen hayvan kimliğini girmek için ok tuşlarını △ ▽ ◁ ▷ kullanın.

3. Eylem zinciri şimdi yürütülüyor. Eylem zincirindeki tüm eylemler gerçekleştirildiğinde, doğrudan bir sonraki hayvan seçilebilir.

{{< tabpane >}}
{{< tab header="Eylem zincirini kullan:" text=true disabled=true />}}
{{% tab header="Transponder taraması" text=true %}}
![VitalControl: Menü eylem zinciri](images/chainofactions-scan.png "Eylem Zinciri")
{{% /tab %}}
{{% tab header="Listeden manuel seçim" text=true %}}
![VitalControl: Menü eylem zinciri](images/chainofactions.png "Eylem Zinciri")
{{% /tab %}}
{{< /tabpane >}}

### Eylem Zincirini Ayarla {#set-chain-of-actions}

1. VitalControl cihazınızın ana ekranında, menü öğesini seçin &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Eylem Zinciri" />&nbsp; `{{<T "ActionChain" >}}` ve `{{<T "Ok" >}}` düğmesine basın.

2. `F2` düğmesini kullanın &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Aktionskette" />&nbsp; (`{{<T "Settings" >}}`).

3. Bir kaplama ekranı açılır. Listelenen eylemler arasında seçim yapmak için ok tuşlarını △ ▽ kullanın 1 - 4 (ardışık olarak dört eyleme kadar gerçekleştirebilirsiniz). İlgili eylem için istenen eylemi seçmek için ok tuşlarını ◁ ▷ kullanın. Ayarları `F1` tuşu ile kaydedin &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Kaydet ve geri dön" />&nbsp;.

4. Tüm eylem zincirini sıfırlamak istiyorsanız, alt menüdeki `{{<T "ResetActionChain" >}}` seçeneğini ok tuşları △ ▽ kullanarak seçin ve `{{<T "Ok" >}}` ile onaylayın.

    ![VitalControl: Eylem zinciri menüsü](images/setchainofactions.png "Eylem zincirini ayarla")

{{% alert title="İpucu" %}}
Bireysel eylemler içinde, her bir eylem için [Eylemler](../actions) bölümünde açıklandığı gibi aynı ayar seçeneklerine sahipsiniz.
{{% /alert %}}

{{% alert title="İpucu" %}}
Eylem zincirinin başlangıç ekranındaki semboller, hangi eylemleri ayarladığınızı ve hangi sırayla olduğunu gösterir.
{{% /alert %}}
