---
title: Linkitä eläimen ID
linkTitle: Linkitä eläimen ID
slug: link-animal-id
weight: 115
description: >
 Määritä Kansallinen eläin ID eläimelle, jolla ei ole kansallista eläintunnusta
date: 2023-07-26
categories: [Kansallinen eläin ID]
tags: [Kansallinen eläin ID]
translationKey: actions/national-animal-id
---
{{% alert title="Varoitus" color="warning" %}}
Tämä toiminto ei ole oletusarvoisesti käytössä! Aktivoi tämä kuten on kuvattu [toimintoasetuksissa](../setting/).
{{% /alert %}}

## Linkitä eläimen ID {#link-animal-id}

Määritä Kansallinen eläin ID eläimelle, jolla ei ole kansallista eläintunnusta, seuraavasti:

1. VitalControl-laitteesi päävalikossa valitse valikkokohta &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Toiminnat" /> `{{<T "Actions" >}}` ja paina `{{<T "Ok" >}}`-painiketta.

2. Joko skannaa eläimen, jolla ei ole kansallista eläintunnusta, transponderi tai valitse eläin listalta. Tee tämä vahvistamalla `{{<T "Ok" >}}` ja valitsemalla eläintunnus nuolinäppäimillä △ ▽. Vahvista `{{<T "Ok" >}}`.

3. Alivalikko eläintoiminnoille avautuu. Käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi toiminnon &nbsp;<img src="/icons/actions/link-nais-id.svg" width="35" align="bottom" alt="Linkitä eläimen ID" /> `{{<T "LinkAnimalID" >}}` ja vahvista `{{<T "Ok" >}}`.

4. Toinen alivalikko avautuu kaikilla asetusvaihtoehdoilla eläintietoja varten. Asetusvaihtoehto `{{<T "NationalAnimalID" >}}` on automaattisesti valittuna. Vahvista `{{<T "Ok" >}}`.

5. Käytä nuolinäppäimiä ◁ ▷ △ ▽ asettaaksesi kansallisen eläintunnuksen. Vahvista uudelleen `{{<T "Ok" >}}`.

6. Tallenna asetukset ja palaa päävalikkoon &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Toiminnat" /> `{{<T "Actions" >}}` käyttäen `F3`-näppäintä.

{{< tabpane >}}
{{< tab header="Linkitä eläimen ID:" text=true disabled=true />}}
{{% tab header="Transponderin skannaus" text=true %}}
![VitalControl: Valikko Toiminto Linkitä eläimen ID](../images/linkanimalid-scan.png "Linkitä eläimen ID")
{{% /tab %}}
{{% tab header="Manuaalinen valinta listalta" text=true %}}
![VitalControl: Valikko Toiminto Linkitä eläimen ID](../images/linkanimalid.png "Linkitä eläimen ID")
{{% /tab %}}
{{< /tabpane >}}

## Linkitä eläimen ID elektroniseen korvamerkkiskannaukseen {#link-animal-id-with-electronic-ear-tag-scan}

Eläimen kansallisen tunnuksen määrittämiseksi eläimelle, jolla on elektroninen korvamerkki, toimi seuraavasti:

1. Valitse VitalControl-laitteen päävalikosta kohta &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Toiminnat" /> `{{<T "Actions" >}}` ja paina `{{<T "Ok" >}}`-painiketta.

2. Joko skannaa eläimen transponderi, jolla ei ole kansallista eläintunnusta, tai valitse eläin listasta. Vahvista painamalla `{{<T "Ok" >}}` ja valitse eläintunnus käyttämällä nuolinäppäimiä △ ▽. Vahvista painamalla `{{<T "Ok" >}}`.

3. Alivalikko eläintoiminnoille avautuu. Käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi toiminnon &nbsp;<img src="/icons/actions/scan-nais-id.svg" width="35" align="bottom" alt="Linkitä eläimen ID" />  `{{<T "LinkAnimalID" >}}` ja vahvista painamalla `{{<T "Ok" >}}`.

4. Skannaa nyt elektroninen korvamerkki.

5. Eläimelle on nyt onnistuneesti määritetty Kansallinen eläin ID.

{{< tabpane >}}
{{< tab header="Linkitä eläimen ID elektroniseen korvamerkkiskannaukseen:" text=true disabled=true />}}
{{% tab header="Transponderin skannaus" text=true %}}
![VitalControl: Valikko Toiminto Linkitä eläimen ID](../images/linkanimalidscan-scan.png "Linkitä eläimen ID")
{{% /tab %}}
{{% tab header="Manuaalinen valinta listalta" text=true %}}
![VitalControl: Valikko Toiminto Linkitä eläimen ID](../images/linkanimalidscan.png "Linkitä eläimen ID")
{{% /tab %}}
{{< /tabpane >}}
