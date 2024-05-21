---
title: Poista eläimen rekisteröinti
linkTitle: Rekisteröimätön
slug: unregister
weight: 100
description: >
 Poista eläimen rekisteröinti
date: 2023-07-26
categories: [Toiminnat]
tags: [Toiminnat, Rekisteröimätön]
translationKey: actions/unregister
---
{{% alert title="Varoitus" color="warning" %}}
Kun poistat eläimen tietueen, sitä ei voi enää käyttää arviointitarkoituksiin! Jos poistat eläimen rekisteröinnin, mutta haluat esimerkiksi arvioida eläimen kehitystä myöhemmin uudelleen, sinun on säilytettävä eläimen tietue!
{{% /alert %}}

## Rekisteröimätön

Toiminto `Rekisteröimätön` mahdollistaa eläimen rekisteröinnin poistamisen, kun se siirretään pois. Toimi seuraavasti eläimen rekisteröinnin poistamiseksi:

1. Valitse VitalControl-laitteesi päävalikosta kohde &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Toiminnat" /> `Toiminnat` ja paina `OK`-nappia.

2. Joko skannaa eläin transponderilla tai valitse eläin listasta. Vahvista `OK`:lla ja valitse eläin nuolinäppäimillä △ ▽. Vahvista `OK`:lla.

3. Alivalikko eläintoiminnoille avautuu. Käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi toiminnon &nbsp;<img src="/icons/actions/unregister.svg" width="33" align="bottom" alt="Rekisteröimätön" /> `Rekisteröimätön` ja vahvista `OK`:lla.

4. Toinen alivalikko avautuu, jossa voit tallentaa erilaisia asetuksia. Käytä nuolinäppäimiä △ ▽ valitaksesi haluamasi asetusvaihtoehdon. Käytä nuolinäppäimiä ◁ ▷ valitaksesi haluamasi asetuksen.

5. Käytä näppäintä `F3` `Rekisteröimätön` poistaaksesi eläimen rekisteröinnin määritetyillä asetuksilla.

{{< tabpane >}}
{{< tab header="Rekisteröimätön:" text=true disabled=true />}}
{{% tab header="Transponderin skannaus" text=true %}}
![VitalControl: Valikko Toiminto Rekisteröimätön](../images/unregister-scan.png "Poista eläimen rekisteröinti")
{{% /tab %}}
{{% tab header="Manuaalinen valinta listalta" text=true %}}
![VitalControl: Valikko Toiminto Rekisteröimätön](../images/unregister.png "Poista eläimen rekisteröinti")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Vihje" %}}
Jos tämä toiminto ei ole käytettävissä, toiminto on todennäköisesti deaktivoitu! Aktivoi toiminto [toimintoasetukset](../setting/) -valikossa. Vaihtoehtoisesti kaikkien toimintojen nollaaminen tuo tämän toiminnon takaisin.
{{% /alert %}}
