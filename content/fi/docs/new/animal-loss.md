---
title: Eläimen menetyksen rekisteröinti
linkTitle: Eläimen menetys
date: 2023-07-28T13:25:28+02:00
weight: 10
draft: false
slug: animal-loss
description: >
  Kuinka rekisteröidä eläimen menetys käyttäen VitalControl-laitetta.
categories: [Animal-loss]
tags: [Animal-loss]
translationKey: new/animal-loss
---
## Rekisteröi eläimen menetys {#record-the-loss-of-an-animal}
 
{{% alert title="Vihje" %}}
Tämän valikkokohdan eläimen menetystoimintoa käytetään pääasiassa kuolleiden vasikoiden/karitsojen kirjaamiseen. Asetusvaihtoehdot on mukautettu sen mukaisesti eivätkä ne ole identtisiä valikon `{{<T "Actions" >}}` -> `{{<T "Unregister" >}}` tai `{{<T "AnimalLoss" >}}` asetuskohtien kanssa.
{{% /alert %}}

Eläimen menetyksen kirjaamiseksi toimi seuraavasti:

1. Valitse VitalControl-laitteesi päävalikosta kohta <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="Uusi eläin" /> `{{<T "New" >}}` ja paina `{{<T "Ok" >}}`-nappia.

2. Alivalikko avautuu. Käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi valikkokohdan <img src="/icons/main/stillbirth.svg" width="40" align="bottom" alt="Eläimen menetys" /> `{{<T "AnimalLoss" >}}` ja vahvista `{{<T "Ok" >}}`-näppäimellä.

3. Skannaa joko emäeläimen transponderi tai käytä `{{<T "Ok" >}}`-nappia. Syötä emäeläimen tunnus käyttäen nuolinäppäimiä ◁ ▷ △ ▽ ja vahvista `{{<T "Ok" >}}`-näppäimellä.

4. Toinen alivalikko avautuu, jossa voit tallentaa tietoja eläimestä. Käytä nuolinäppäimiä △ ▽ valitaksesi haluamasi asetuskohteen.

5. Asetuksille `{{<T "TypeAnimal" >}}`,`{{<T "Sex" >}}`, `{{<T "BirthWeight" >}}`, `{{<T "Breed" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "Multiples" >}}` ja `{{<T "CalvingEase" >}}`, käytä nuolinäppäimiä ◁ ▷ valitaksesi haluamasi asetuksen.

6. Asetukselle `{{<T "DateBirth" >}}` käytä nuolinäppäimiä △ ▽ valitaksesi haluamasi asetusvaihtoehdon ja vahvista `{{<T "Ok" >}}`-näppäimellä. Käytä nuolinäppäimiä △ ▽◁ ▷ valitaksesi haluamasi numerot. Lopuksi vahvista `{{<T "Ok" >}}`-näppäimellä.

7. Tallenna asetukset ja luo uusi eläin `F3`-näppäimellä &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Tallenna" />&nbsp;.

{{% alert title="Vihje" %}}
Lisätietoja ja asetusvaihtoehtoja uusien eläinten luomiseen löydät [täältä](../../settings/animal-registration/).
{{% /alert %}}

{{< tabpane >}}
{{< tab header="Eläimen katoaminen:" text=true disabled=true />}}
{{% tab header="Lähetintunnisteen skannaus" text=true %}}
![VitalControl: Valikko uusi eläimen katoaminen](../images/animalloss-scan.png "Kirjaa eläimen katoaminen")
{{% /tab %}}
{{% tab header="Manuaalinen valinta listasta" text=true %}}
![VitalControl: Valikko uusi eläimen katoaminen](../images/animalloss.png "Kirjaa eläimen katoaminen")
{{% /tab %}}
{{< /tabpane >}}
