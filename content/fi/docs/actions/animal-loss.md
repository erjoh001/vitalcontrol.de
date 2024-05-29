---
title: Eläinten menetys
linkTitle: Eläinten menetys
slug: animal-loss
weight: 110
description: >
 Rekisteröi Eläinten menetys.
date: 2023-07-26
categories: [Toiminnat]
tags: [Toiminnat, animal-loss]
translationKey: actions/animal-loss
---

## Eläinten menetys {#animal-loss}

Toiminto `{{<T "AnimalLoss" >}}` mahdollistaa eläimen menetyksen rekisteröinnin. Eläimen menetyksen rekisteröimiseksi toimi seuraavasti:

1. Valitse VitalControl-laitteesi päävalikosta kohta &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Toiminnat" /> `{{<T "Actions" >}}` ja paina `{{<T "Ok" >}}`-nappia.

2. Joko skannaa eläin käyttäen transponderia tai valitse eläin listalta. Vahvista `{{<T "Ok" >}}`:lla ja valitse eläin nuolinäppäimillä △ ▽. Vahvista `{{<T "Ok" >}}`:lla.

3. Alivalikko, jossa on eläimen Toiminnat, avautuu. Käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi toiminnon <img src="/icons/actions/animal-loss.svg" width="38" align="bottom" alt="Tierverlust" /> `{{<T "AnimalLoss" >}}` ja vahvista `{{<T "Ok" >}}`:lla.

4. Toinen alivalikko avautuu, jossa voit tallentaa erilaisia asetuksia. Käytä nuolinäppäimiä △ ▽ valitaksesi haluamasi asetusvaihtoehdon. Käytä nuolinäppäimiä ◁ ▷ valitaksesi haluamasi asetuksen.

5. Käytä `F3`-näppäintä poistaaksesi eläimen rekisteristä määritellyillä asetuksilla.

{{< tabpane >}}
{{< tab header="Eläinten menetys:" text=true disabled=true />}}
{{% tab header="Transponderin skannaus" text=true %}}
![VitalControl: Valikko Toiminto Eläinten menetys](../images/animalloss-scan.png "Rekisteröi Eläinten menetys")
{{% /tab %}}
{{% tab header="Manuaalinen valinta listalta" text=true %}}
![VitalControl: Valikko Toiminto Eläinten menetys](../images/animalloss.png "Rekisteröi Eläinten menetys")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Vihje" %}}
Jos tämä toiminto ei ole käytettävissä, toiminto on todennäköisesti poistettu käytöstä! Aktivoi toiminto [toimintoasetukset](../setting/) -valikossa. Vaihtoehtoisesti kaikkien toimintojen nollaaminen tuo kyseisen toiminnon takaisin.
{{% /alert %}}
