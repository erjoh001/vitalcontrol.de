---
title: Paina paino
linkTitle: Paino
slug: record-weight
weight: 20
description: >
  Kirjaa eläintesi paino.
date: 2023-07-26
categories: [Toiminnot]
tags: [Toiminnot, paino]
translationKey: actions/weight
---

## Paina paino {#record-weight}
Käytä &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Punnitus" /> `{{<T "Weighing" >}}` toimintoa tallentaaksesi eläimesi painon yksilöllisesti. Tee tämä punnitsemalla eläimesi tai arvioimalla niiden paino ja syöttämällä tämä arvo VitalControl-laitteeseen. Tämä mahdollistaa eläintesi painokehityksen tarkistamisen ja arvioimisen yksilöllisesti.

{{% alert title="Vinkki" %}}
Jos keskimääräinen paino poikkeaa voimakkaasti suuntaan (liian korkea/liian matala), päivittäisen lisäyksen arvoa tulisi säätää.
{{% /alert %}}

1. Valitse VitalControl-laitteesi päävalikosta kohta &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Toiminnot" /> `{{<T "Actions" >}}` ja paina `{{<T "Ok" >}}`-nappia.

2. Joko skannaa eläin käyttäen transponderia tai valitse eläin listalta. Vahvista `{{<T "Ok" >}}`:lla ja valitse eläin nuolinäppäimillä △ ▽. Vahvista `{{<T "Ok" >}}`:lla.

3. Alivalikko eläintoiminnoille avautuu. Käytä nuolinäppäimiä ◁ ▷ valitaksesi toiminnon &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Punnitus" /> `{{<T "Weighing" >}}` ja vahvista `{{<T "Ok" >}}`:lla.

4. Valikko avautuu painomäärityksellä. Lisää tai vähennä tätä nuolinäppäimillä △ ▽ ja tallenna tulos `F3`-näppäimellä <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Tallenna" /> tai `{{<T "Ok" >}}`-näppäimellä.

{{< tabpane >}}
{{< tab header="Paina paino:" text=true disabled=true />}}
{{% tab header="Transponderin skannaus" text=true %}}
  ![VitalControl: Valikko Toiminto Punnitus](../images/weighing-scan.png "Punnitus")
{{% /tab %}}
{{% tab header="Manuaalinen valinta listalta" text=true %}}
  ![VitalControl: Valikko Toiminto Punnitus](../images/weighing.png "Punnitus")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Vinkki" %}}
Jos tämä toiminto ei ole käytettävissä, toiminto on todennäköisesti poistettu käytöstä! Aktivoi toiminto [toimintoasetukset](../setting/) -valikossa. Vaihtoehtoisesti kaikkien toimintojen nollaaminen tuo kyseisen toiminnon takaisin.
{{% /alert %}}
