---
title: Hayvan Kaydını Sil
linkTitle: Kaydı Sil
slug: unregister
weight: 100
description: >
 Hayvan kaydını sil
date: 2023-07-26
categories: [Actions]
tags: [Actions, Unregister]
translationKey: actions/unregister
---
{{% alert title="Uyarı" color="warning" %}}
Hayvan veri kaydını sildiğiniz anda, değerlendirme amaçları için artık kullanılamaz! Bir hayvanın kaydını silerseniz, ancak örneğin hayvanın gelişimini daha sonra tekrar değerlendirmek isterseniz, hayvan veri kaydını saklamalısınız!
{{% /alert %}}

## Kaydı Sil {#unregister}

`{{<T "Unregister" >}}` işlemi, bir hayvanı taşındığı anda kaydını silmenizi sağlar. Bir hayvanın kaydını silmek için şu adımları izleyin:

1. VitalControl cihazınızın ana ekranında, &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` menü öğesini seçin ve `{{<T "Ok" >}}` düğmesine basın.

2. Ya bir hayvanı transponder ile tarayın ya da listeden bir hayvan seçin. `{{<T "Ok" >}}` ile onaylayın ve ok tuşları △ ▽ ile bir hayvan seçin. `{{<T "Ok" >}}` ile onaylayın.

3. Hayvan işlemleri ile ilgili bir alt menü açılır. Ok tuşları ◁ ▷ △ ▽ kullanarak &nbsp;<img src="/icons/actions/unregister.svg" width="33" align="bottom" alt="Unregister" /> `{{<T "Unregister" >}}` işlemini seçin ve `{{<T "Ok" >}}` ile onaylayın.

4. Çeşitli ayarları kaydedebileceğiniz başka bir alt menü açılır. İstenilen ayar seçeneğini seçmek için ok tuşlarını △ ▽ kullanın. İstenilen ayarı seçmek için ok tuşlarını ◁ ▷ kullanın.

5. Belirtilen ayarlarla hayvanın kaydını silmek için `F3` `{{<T "Unregister" >}}` tuşunu kullanın.

{{< tabpane >}}
{{< tab header="Kaydı Sil:" text=true disabled=true />}}
{{% tab header="Transponder taraması" text=true %}}
![VitalControl: Menü İşlemi Kaydı Sil](../images/unregister-scan.png "Bir hayvanın kaydını sil")
{{% /tab %}}
{{% tab header="Listeden manuel seçim" text=true %}}
![VitalControl: Menü İşlemi Kaydı Sil](../images/unregister.png "Bir hayvanın kaydını sil")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="İpucu" %}}
Bu eylem mevcut değilse, muhtemelen devre dışı bırakılmıştır! Eylemi [eylem ayarları](../setting/) menüsünde etkinleştirin. Alternatif olarak, tüm eylemleri sıfırlamak bu eylemi geri getirecektir.
{{% /alert %}}
