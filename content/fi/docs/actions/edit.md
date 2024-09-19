---
title: Muokkaa eläintietoja
linkTitle: Muokkaa
slug: edit
weight: 90
description: >
 Muokkaa valitun eläimen tietoja.
date: 2023-07-26
luokat: [Toiminnat]
tagit: [Toiminnat, eläintiedot, muokkaa]
translationKey: actions/edit
---

## Muokkaa eläintietoja {#edit-animal-data}

Toiminto <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Muokkaa" /> `{{<T "Edit" >}}` mahdollistaa valitun eläimen tietojen suoran muuttamisen. Tämä toiminto helpottaa eläintietojen korjaamista, jos esimerkiksi eläintarkastuksen aikana huomataan, että sukupuoli on tallennettu väärin. Voit muuttaa seuraavia tietoja:

- Eläinlaji
- Sukupuoli
- Syntymäpaino
- Rotu
- Olinpaikka
- Kansallinen eläin-ID
- ID
- Toistot
- Syntymäpäivä
- Poikimavaikeus

Eläintietojen muuttamiseksi toimi seuraavasti:

1. Valitse päävalikosta VitalControl-laitteellasi kohta &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Toiminnat" /> `{{<T "Actions" >}}` ja paina `{{<T "Ok" >}}`-näppäintä.

2. Skannaa eläin transponderilla tai valitse eläin listasta. Vahvista `{{<T "Ok" >}}`:lla ja valitse eläin nuolinäppäimillä △ ▽. Vahvista `{{<T "Ok" >}}`:lla.

3. Alivalikko eläintoiminnoille avautuu. Käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi toiminnon <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Muokkaa" /> `{{<T "Edit" >}}` ja vahvista `{{<T "Ok" >}}`:lla.

4. Lista eläintiedoista avautuu. Käytä nuolinäppäimiä △ ▽ valitaksesi haluamasi muutosvaihtoehdon.

5. Tiedoille `{{<T "TypeAnimal" >}}`, `{{<T "Sex" >}}`, `{{<T "BirthWeight" >}}`, `{{<T "Breed" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "Multiples" >}}` ja `{{<T "CalvingEase" >}}` käytä nuolinäppäimiä ◁ ▷ tehdäksesi haluamasi muutoksen.

6. Tiedoille `{{<T "ID" >}}` ja `{{<T "DateBirth" >}}` valitse ne nuolinäppäimillä △ ▽ ja vahvista `{{<T "Ok" >}}`:lla. Käytä nuolinäppäimiä △ ▽ valitaksesi vastaavan numeron ja nuolinäppäimiä ◁ ▷ navigoidaksesi numerokentissä.

7. Tallenna muutos `F3`-näppäimellä.

{{< tabpane >}}
{{< tab header="Muokkaa eläintietoja:" text=true disabled=true />}}
{{% tab header="Transponderin skannaus" text=true %}}
![VitalControl: Valikko Toiminto Muokkaa eläintietoja](../images/edit-scan.png "Muokkaa eläintietoja")
{{% /tab %}}
{{% tab header="Manuaalinen valinta listasta" text=true %}}
![VitalControl: Valikko Toiminto Muokkaa eläintietoja](../images/edit.png "Muokkaa eläintietoja")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Vihje" %}}
Jos tämä toiminto ei ole käytettävissä, toiminto on todennäköisesti deaktivoitu! Aktivoi toiminto [toimintoasetukset](../setting/) -valikossa. Vaihtoehtoisesti kaikkien toimintojen nollaaminen palauttaa kyseisen toiminnon.
{{% /alert %}}
