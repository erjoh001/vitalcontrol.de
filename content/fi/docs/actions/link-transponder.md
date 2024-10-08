---
title: Linkitä transponderi
linkTitle: Linkitä transponderi
slug: link-transponder
weight: 102
description: >
  Aseta lähetin eläimelle
date: 2023-07-26
luokat: [Lähetin]
tagit: [Lähetin]
translationKey: actions/transponder
---
{{% alert title="Varoitus" color="warning" %}}
Tämä Toiminnat ei ole oletusarvoisesti käytössä! Aktivoi tämä kuten on kuvattu [Toiminnatasetuksissa](../setting/).
{{% /alert %}}

## Linkitä transponderi {#link-transponder}

Tällä toiminnolla voit asettaa lähettimen eläimelle, jolle ei vielä ole määritetty lähetintä.

1. VitalControl-laitteesi päävalikossa valitse valikkokohta &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Toiminnot" /> `{{<T "Actions" >}}` ja paina `{{<T "Ok" >}}`-nappia.

2. Valitse haluamasi eläin listalta. Tee tämä vahvistamalla `{{<T "Ok" >}}` ja valitsemalla eläimen ID nuolinäppäimillä △ ▽. Vahvista `{{<T "Ok" >}}`.

3. Alivalikko eläimen toiminnoille avautuu. Käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi toiminnon &nbsp;<img src="/icons/actions/link-transponder.svg" width="35" align="bottom" alt="Linkitä transponderi" /> `{{<T "LinkTransponder" >}}` ja vahvista `{{<T "Ok" >}}`.

4. Skannaa nyt lähetin, jonka haluat asettaa eläimelle.

5. Lähetin onnistuneesti asetettu eläimelle.

{{< tabpane >}}
{{< tab header="Linkitä transponderi:" text=true disabled=true />}}
{{% tab header="Lähettimen skannaus" text=true %}}
![VitalControl: Valikko Toiminnat Linkitä transponderi](../images/linktransponder-scan.png "Linkitä transponderi")
{{% /tab %}}
{{% tab header="Manuaalinen valinta listalta" text=true %}}
![VitalControl: Valikko Toiminnat Linkitä transponderi](../images/linktransponder.png "Linkitä transponderi")
{{% /tab %}}
{{< /tabpane >}}
