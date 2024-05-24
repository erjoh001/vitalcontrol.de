---
title: Luokitus
linkTitle: Luokitus
slug: rating
weight: 30
description: >
 Arvioi eläimesi.
date: 2023-07-26
categories: [Toiminnat]
tags: [Toiminnat, Luokitus]
translationKey: actions/animal-rating
---

## Arvioi eläimesi {#rate-your-animals}

Eläimen arvioinnissa dokumentoidaan yksittäisen eläimen kunto. Kunto määritetään visuaalisesti ja kirjataan liikennevalojärjestelmän avulla. Perusarvioinnissa kirjataan vain yleiskunto. Laajennetussa arvioinnissa kirjaat yleiskunnon, rehunsaannin, ulosteen koostumuksen ja hengityssairaudet. Voit joko vaihtaa arviointitilaa suoraan <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Luokitus" /> `Luokitus` toiminnossa tai määritellä sen [asetuksissa](../../settings/data-acquisition/#mode-of-animal-rating).

{{% alert title="Vinkki" %}}
Keltainen tai punainen arviointi tarkoittaa, että VitalControl luokittelee eläimen huomionarvoiseksi ja laittaa sen hälytyslistalle.
{{% /alert %}}

1. Valitse VitalControl-laitteesi päävalikosta kohta &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Toiminnat" /> `Toiminnat` ja paina `OK`-nappia.

2. Joko skannaa eläin transponderilla tai valitse eläin listalta. Vahvista `OK`:lla ja valitse eläin nuolinäppäimillä △ ▽. Vahvista `OK`:lla.

3. Alivalikko eläintoiminnoille avautuu. Käytä nuolinäppäimiä ◁ ▷ valitaksesi toiminnon <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Luokitus" /> `Luokitus` ja vahvista `OK`:lla.

4. Arviointivalikko avautuu. Jos haluat vaihtaa arviointitilaa, käytä `On/Off` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Toimintaketju" />&nbsp; nappia ja nuolinäppäimiä ◁ ▷. `F1`-näppäimellä <img src="/icons/footer/exit.svg" width="24" align="bottom" alt="Takaisin" />&nbsp; pääset takaisin arviointivalikkoon.

5. Käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi tilan ja tallenna se `F3`-näppäimellä <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Tallenna" /> tai `OK`-näppäimellä.

6. Kehittyneessä tilassa käytä `F1` ja `F3` näppäimiä vaihtaaksesi arviointiparametreja.

{{% alert title="Vihje" %}}
Jos et tee valintaa käyttäen nuolinäppäimiä ◁ ▷ vaan tallennat suoraan käyttäen `F3` tai `OK` näppäintä, VitalControl tallentaa neutraalin arvion, joka on esitetty harmaalla värillä.
{{% /alert %}}

### Perusarviointi {#basic-rating}

{{< tabpane >}}
{{< tab header="Perusarviointi:" text=true disabled=true />}}
{{% tab header="Transponderin skannaus" text=true %}}
![VitalControl: Valikko Toiminnat Arviointi](../images/basicrating-scan.png "Perusarviointi")
{{% /tab %}}
{{% tab header="Manuaalinen valinta listasta" text=true %}}
![VitalControl: Valikko Toiminnat Arviointi](../images/basicrating.png "Perusarviointi")
{{% /tab %}}
{{< /tabpane >}}

### Laajennettu arviointi {#extended-rating}

{{< tabpane >}}
{{< tab header="Perusarviointi:" text=true disabled=true />}}
{{% tab header="Transponderin skannaus" text=true %}}
![VitalControl: Valikko Toiminnat Arviointi](../images/extendedrating-scan.png "Laajennettu arviointi")
{{% /tab %}}
{{% tab header="Manuaalinen valinta listasta" text=true %}}
![VitalControl: Valikko Toiminnat Arviointi](../images/extendedrating.png "Laajennettu arviointi")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Vihje" %}}
Jos tämä toiminto ei ole käytettävissä, toiminto on todennäköisesti poistettu käytöstä! Aktivoi toiminto [toimintoasetukset](../setting/) valikossa. Vaihtoehtoisesti kaikkien toimintojen nollaaminen tuo kyseisen toiminnon takaisin.
{{% /alert %}}
