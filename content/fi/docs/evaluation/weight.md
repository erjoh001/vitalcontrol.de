---
title: Arvioi paino
linkTitle: Arvioi paino
slug: weight
weight: 10
description: >
 Arvioi tallennetut tietosi Paino-osiossa.
date: 2023-07-26
categories: [luokitus]
tags: [luokitus, paino]
translationKey: evaluation/weight
maphilight: true
---
{{% alert title="Vihje" %}}
Oletusasetuksissa kaikki VitalControl-laitteeseen tallennetut eläimet sisältyvät luokitusin. Voit rajoittaa luokitusa käyttämällä [suodatinta](../../filter/), esimerkiksi vain urospuolisiin eläimiin tai tiettyyn enimmäisikään asti.
{{% /alert %}}

{{% alert title="Vihje" %}}
Kun napsautat valikkokohtaa, sinut ohjataan kyseisen toiminnon kuvaukseen.
{{% /alert %}}

<img src="../images/imagemap.png" alt="VitalControl luokitus" title="Paino" usemap="#workmap" class="maphilight" />

<map name="workmap">
   <area shape="rect" coords="3,40,116,160" alt="Tämän päivän punnitus" title="Arvioi eläintesi VitalControl-laitteella tänään tallennetut painoarvot&#10;Hiiren napsautus: dokumentaatioon" href="/fi/docs/evaluation/weight/#todays-weighings">
   <area shape="rect" coords="116,40,238,160" alt="Syntymäpainot" title="Arvioi tallennetut syntymäpainosi&#10;Hiiren napsautus: dokumentaatioon" href="/fi/docs/evaluation/weight/#birth-weights">
   <area shape="rect" coords="3,160,116,279" alt="Painon kehitys" title="Arvioi eläintesi painon kehitystä&#10;Hiiren napsautus: dokumentaatioon" href="/fi/docs/evaluation/weight/#weight-development">

   <area shape="rect" coords="150,282,238,319" alt="Suodatin" title="Aseta suodatin&#10;Hiiren napsautus: dokumentaatioon" href="/fi/docs/filter">
   <area shape="rect" coords="2,282,95,319" alt="Takaisin" title="Hyppää takaisin yhden tason&#10;Hiiren napsautus: dokumentaatioon" href="/fi/docs/evaluation/">
</map>

## Tämän päivän punnitus {#todays-weighings}
Tässä arvioinnissa näet seuraavat tiedot viimeisen 6 tunnin punnituksista:
- Keskimääräinen eläimen paino
- Keskimääräinen päivittäinen kasvu syntymästä
- Keskimääräinen päivittäinen lisäys viime punnituksesta
- Syntymäpainon kaksinkertaistuminen X päivän jälkeen

Suorittaaksesi arvioinnin, toimi seuraavasti:

1. Laitteesi päävalikossa korosta kuvake &nbsp;<img src="/icons/main/evaluation.svg" width="50" align="bottom" alt="Arvioi" />&nbsp; `{{<T "Evaluation" >}}`. Vahvista painamalla `{{<T "Ok" >}}`.

2. Toinen alavalikko avautuu, jossa voit käyttää nuolinäppäimiä △ ▽ ◁ ▷ valitaksesi valikkojen välillä `{{<T "Weight" >}}`, `{{<T "Temperature" >}}`, `{{<T "Rating" >}}` ja `{{<T "Mortality" >}}`. Valitse &nbsp;<img src="/icons/evaluation/weight.svg" width="40" align="bottom" alt="Paino" />&nbsp; `{{<T "Weight" >}}` ja vahvista painamalla `{{<T "Ok" >}}`.

3. Painon luokitusvaihtoehdot nyt näkyvät. Valitse luokitusvaihtoehto &nbsp;<img src="/icons/evaluation/weighingtoday.svg" width="50" align="bottom" alt="Tämän päivän punnitus" />&nbsp; `{{<T "WeighingToday" >}}` ja vahvista painamalla `{{<T "Ok" >}}`. Laite alkaa nyt laskea menestysmuuttujia.

4. Kun laskenta on valmis, voit tarkastella mainittuja menestysmuuttujia. Käytä nuolinäppäimiä △ ▽ navigoidaksesi näytetyssä valikossa.

   ![VitalControl: valikko luokitus Tämän päivän punnitus](../images/todaysweighings.png "Arvioi Tämän päivän punnitus")

## Syntymäpainot {#birth-weights}
Tässä arvioinnissa voit tarkastella seuraavia tietoja:
- Keskimääräinen syntymäpaino
- Painoluokat

Suorittaaksesi arvioinnin, toimi seuraavasti:

1. Laitteesi päävalikossa korosta kuvake &nbsp;<img src="/icons/main/evaluation.svg" width="50" align="bottom" alt="Arvioi" />&nbsp; `{{<T "Evaluation" >}}`. Vahvista painamalla `{{<T "Ok" >}}`.

2. Toinen alavalikko avautuu, jossa voit käyttää nuolinäppäimiä △ ▽ ◁ ▷ valitaksesi valikkojen välillä `{{<T "Weight" >}}`, `{{<T "Temperature" >}}`, `{{<T "Rating" >}}` ja `{{<T "Mortality" >}}`. Valitse &nbsp;<img src="/icons/evaluation/weight.svg" width="40" align="bottom" alt="Paino" />&nbsp; `{{<T "Weight" >}}` ja vahvista painamalla `{{<T "Ok" >}}`.

3. Nyt painon luokitusvaihtoehdot näkyvät. Valitse &nbsp;<img src="/icons/evaluation/birthweights.svg" width="60" align="bottom" alt="Syntymäpainot" />&nbsp; `{{<T "BirthWeights" >}}` ja vahvista painamalla `{{<T "Ok" >}}`. Laite alkaa nyt laskea menestysmuuttujia.

4. Kun laskenta on valmis, voit tarkastella mainittuja menestysmuuttujia. Käytä nuolinäppäimiä △ ▽ navigoidaksesi näytetyssä valikossa.

![VitalControl: menu Evaluation Birth weights](../images/birthweights.png "Arvioi syntymäpainot")

## Painon kehitys {#weight-development}

Tässä arvioinnissa näet seuraavat tiedot kaikista punnituksista:
- Eläimen keskipaino
- Keskimääräinen päivittäinen painonnousu syntymästä
- Keskimääräinen päivittäinen painonnousu viime punnituksesta
- Syntymäpaino kaksinkertaistui jälkeen

Suorita luokitus seuraavasti:

1. Laitteesi päävalikossa korosta kuvake &nbsp;<img src="/icons/main/evaluation.svg" width="50" align="bottom" alt="Arvioi" />&nbsp; `{{<T "Evaluation" >}}`. Vahvista painamalla `{{<T "Ok" >}}`.

2. Avautuu toinen alivalikko, jossa voit käyttää nuolinäppäimiä △ ▽ ◁ ▷ valitaksesi valikkojen `{{<T "Weight" >}}`, `{{<T "Temperature" >}}`, `{{<T "Rating" >}}` ja `{{<T "Mortality" >}}` välillä. Valitse &nbsp;<img src="/icons/evaluation/weight.svg" width="40" align="bottom" alt="Paino" />&nbsp; `{{<T "Weight" >}}` ja vahvista painamalla `{{<T "Ok" >}}`.

3. Nyt näkyviin tulevat paino-osion luokitusvaihtoehdot. Valitse &nbsp;<img src="/icons/evaluation/weightdevelopment.svg" width="55" align="bottom" alt="Painon kehitys" />&nbsp; `{{<T "WeightDevelopment" >}}` ja vahvista painamalla `{{<T "Ok" >}}`. Laite alkaa nyt laskea menestystekijöitä.

4. Kun laskenta on valmis, voit tarkastella yllä mainittuja menestystekijöitä. Käytä nuolinäppäimiä △ ▽ navigoidaksesi näytetyssä valikossa.

   ![VitalControl: menu Evaluation Weight development](../images/weightdevelopment.png "Arvioi painon kehitys")
