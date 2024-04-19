---
title: "Toimintaketju: asennus ja käyttö"
linkTitle: "Toimintaketju"
weight: 15
date: 2023-07-28T13:25:28+02:00
draft: false
slug: chain-of-actions
description: >
 Suorita useita eläintoimintoja peräkkäin
categories: [Toimintaketju]
tags: [Toimintaketju, Toiminnot]
translationKey: action-chain
---
## Toimintaketju

Toimintaketju mahdollistaa useiden toimintojen automaattisen suorittamisen eläimelle peräkkäin. Voit esimerkiksi valita toiminnot `Mittaa lämpötila` ja `Arviointi`. Kun suoritat toimintaketjun, voit ensin mitata eläimesi lämpötilan ja kirjata arvioinnin välittömästi sen jälkeen.

### Käytä toimintaketjua

1. VitalControl-laitteesi päävalikossa valitse valikkokohta &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Toimintaketju" />&nbsp; `Toimintaketju` ja paina `OK`-nappia.

2. Joko skannaa eläin transponderilla tai vahvista painamalla `OK` ja käytä nuolinäppäimiä △ ▽ ◁ ▷ syöttääksesi halutun eläin-ID:n.

3. Toimintaketju suoritetaan nyt. Kun kaikki toimintaketjun toiminnot on suoritettu, seuraava eläin voidaan valita suoraan.

{{< tabpane >}}
{{< tab header="Käytä toimintaketjua:" text=true disabled=true />}}
{{% tab header="Transponderin skannaus" text=true %}}
![VitalControl: Valikko toimintaketju](images/chainofactions-scan.png "Toimintaketju")
{{% /tab %}}
{{% tab header="Manuaalinen valinta listasta" text=true %}}
![VitalControl: Valikko toimintaketju](images/chainofactions.png "Toimintaketju")
{{% /tab %}}
{{< /tabpane >}}

### Aseta toimintaketju

1. VitalControl-laitteesi päävalikossa valitse valikkokohta &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Toimintaketju" />&nbsp; `Toimintaketju` ja paina `OK`-nappia.

2. Käytä nappia `F2` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Toimintaketju" />&nbsp; (`asetukset`).

3. Ponnahdusikkuna avautuu. Käytä nuolinäppäimiä △ ▽ valitaksesi listatuista toiminnoista 1 - 4 (voit suorittaa jopa neljä toimintoa peräkkäin). Käytä nuolinäppäimiä ◁ ▷ valitaksesi halutun toiminnon kyseiselle toiminnolle. Tallenna asetukset `F1`-näppäimellä &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Tallenna ja palaa" />&nbsp;.

4. Jos haluat nollata koko toimintoketjun, valitse alavalikosta vaihtoehto `Nollaa toimintoketju` käyttäen nuolinäppäimiä △ ▽ ja vahvista painamalla `OK`.

    ![VitalControl: Toimintoketjun valikko](images/setchainofactions.png "Aseta toimintoketju")

{{% alert title="Vihje" %}}
Yksittäisten toimintojen yhteydessä sinulla on samat asetusvaihtoehdot kuin kuvattu luvussa [Toiminnot](../actions) kullekin yksittäiselle toiminnolle.
{{% /alert %}}

{{% alert title="Vihje" %}}
Toimintoketjun aloitusnäytön symbolit näyttävät, mitkä toiminnot olet asettanut ja missä järjestyksessä.
{{% /alert %}}
