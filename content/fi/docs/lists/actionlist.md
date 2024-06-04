---
title: Toimintolista
linkTitle: Toimintolista
weight: 30
date: 2023-07-28T13:25:28+02:00
draft: false
slug: actions
description: >
 Tutustu toimintolistaasi.
categories: [Listat]
tags: [Listat, Toiminta]
translationKey: lists/action
---
## Toimintolista {#action-list}

Toimintolistalla näet eläimet, joille ei ole tehty toimenpiteitä kuuteen tuntiin. Saatavilla on myös seuraavat asetusvaihtoehdot:

- [Mittaa lämpötila](../alarm/#take-temperature)
- [Arvioi eläin](../alarm/#rate-animal)
- [Punnitse eläin](#weigh-animals)
- [Toimintaketju](#chain-of-action)
- [Linkitä transponderi](#link-transponder)
- [Piilota toiminnon jälkeen](#hide-after-action)
- [Etsi eläin](../alarm/#search-animal)
- [Aseta suodatin](../alarm/#set-filter)
{{% alert title="Vihje" %}}
Jotkut toiminnot suoritetaan samalla tavalla kuin [hälytyslistassa](../alarm). Niitä ei selitetä tässä. Suorita alustavat vaiheet ja käytä kyseisen toiminnon linkkiä ohjeiden saamiseksi.
{{% /alert %}}

### Alustavat vaiheet {#preliminary-steps}

1. Valitse päävalikosta <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Listat" />  `{{<T "Lists" >}}` -valikko ja paina `{{<T "Ok" >}}`-painiketta.

2. Avautuu alivalikko, jossa näkyy erilaisia listakuvakkeita. Korosta kuvake <img src="/icons/lists/actionlist.svg" width="30" align="bottom" alt="Toimintolista" /> `{{<T "ActionList" >}}` ja vahvista painamalla `{{<T "Ok" >}}`.

3. Toimintolista on nyt avoinna.

   ![VitalControl Listat Toimintolista](../images/firststeps3.png "Alustavat vaiheet")

### Punnitse eläin {#weigh-animals}

1. Suorita alustavat vaiheet.

2. Käytä `F3`-näppäintä &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Avaa ponnahdusikkuna" />&nbsp; avataksesi ponnahdusvalikon, joka listaa mahdolliset toiminnot painettaessa `{{<T "Ok" >}}`-näppäintä. Käytä nuolinäppäimiä △ ▽ korostaaksesi toiminnon `{{<T "WeighAnimal" >}}` ja valitse tämä vaihtoehto painamalla keskimmäistä `{{<T "Ok" >}}`-painiketta tai `F3`-näppäintä `{{<T "Ok" >}}`.

3. Toimintolistalla käytä nuolinäppäimiä △ ▽ valitaksesi haluamasi eläimen ja vahvista painamalla `{{<T "Ok" >}}`. Vaihtoehtoisesti voit etsiä eläimen. Käytä `On/Off`-painiketta <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Etsi" /> ja käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi haluamasi numerot. Lopuksi vahvista painamalla `{{<T "Ok" >}}`.

4. [Punnitse eläin](../../actions/record-weight/) -valikko avautuu automaattisesti.

   ![VitalControl Lists Action list](../images/weightanimals.png "Punnitse eläin")

### Toimintaketju {#chain-of-action}

1. Suorita alustavat vaiheet.

2. Käytä `F3`-näppäintä &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Avaa ponnahdusikkuna" />&nbsp; avataksesi ponnahdusvalikon, joka listaa mahdolliset toiminnot painettaessa `{{<T "Ok" >}}`-näppäintä. Käytä nuolinäppäimiä △ ▽ korostaaksesi toiminnon `{{<T "ActionChain" >}}` ja valitse tämä vaihtoehto painamalla keskimmäistä `{{<T "Ok" >}}`-painiketta tai `F3`-näppäintä `{{<T "Ok" >}}`.

3. Toimintalistassa käytä nuolinäppäimiä △ ▽ valitaksesi haluamasi eläimen ja vahvista valinta `{{<T "Ok" >}}`:lla. Vaihtoehtoisesti voit etsiä eläimen. Käytä `On/Off`-painiketta <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Haku" /> ja käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi haluamasi numerot. Lopuksi vahvista `{{<T "Ok" >}}`:lla.

4. [Toimintaketju](../../chain-of-actions) -toiminto avautuu automaattisesti.

   ![VitalControl Lists Action list](../images/chainofaction.png "Toimintaketju")

### Linkitä transponderi {#link-transponder}

Tätä toimintoa käytetään lisäämään lähetin niiden eläinten tietueeseen, joille ei ole vielä määritetty lähetintä.

1. Suorita alustavat vaiheet.

2. Käytä `F3`-näppäintä &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Avaa ponnahdusikkuna" />&nbsp; avataksesi ponnahdusvalikon, joka listaa mahdolliset toiminnot painettaessa `{{<T "Ok" >}}`-näppäintä. Käytä nuolinäppäimiä △ ▽ korostaaksesi toiminnon `{{<T "LinkTransponder" >}}` ja valitse tämä vaihtoehto painamalla keskimmäistä `{{<T "Ok" >}}`-painiketta tai `F3`-näppäintä `{{<T "Ok" >}}`.

3. Toimintalistassa käytä nuolinäppäimiä △ ▽ valitaksesi haluamasi eläimen ja vahvista valinta `{{<T "Ok" >}}`:lla. Vaihtoehtoisesti voit etsiä eläimen. Käytä `On/Off`-painiketta <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Haku" /> ja käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi haluamasi numerot. Lopuksi vahvista `{{<T "Ok" >}}`:lla.

4. Skannaa nyt vastaavan eläimen lähetin.

   ![VitalControl Lists Action list](../images/linktransponder.png "Linkitä transponderi")

### Piilota toiminnon jälkeen {#hide-after-action}

Jos tämä toiminto on aktivoitu, eläimet, joille toimenpide on suoritettu, piilotetaan toimintolistalta. Jos tämä toiminto on poistettu käytöstä, käsitellyt eläimet pysyvät näkyvissä listalla.

1. Suorita alustavat vaiheet.

2. Käytä `F3` näppäintä &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Toiminnot" />&nbsp; avataksesi ponnahdusvalikon, joka listaa eri vaihtoehdot. Käytä nuolinäppäimiä △ ▽ korostaaksesi vaihtoehdon `{{<T "HideAfterAction" >}}` ja vaihda tämä asetus painamalla keskellä olevaa `{{<T "Ok" >}}` painiketta tai `F3` näppäintä `{{<T "Ok" >}}`.

3. `{{<T "HideAfterAction" >}}` -toiminto on nyt otettu käyttöön/poistettu käytöstä. Aktivointi osoitetaan rastilla ruudussa.

   ![VitalControl Listat Toimintolista](../images/hideafteraction.png "Piilota toiminnon jälkeen")
