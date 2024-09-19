---
title: Kaalu hindamine
linkTitle: Kaalu hindamine
slug: weight
weight: 10
description: >
 Hinda oma salvestatud andmeid Kaalu sektsioonis.
date: 2023-07-26
kategooriad: [Hindamine]
Sildid: [Hindamine, kaal]
translationKey: evaluation/weight
maphilight: true
---
{{% alert title="Vihje" %}}
Vaikimisi seadetes on hindamisel arvesse võetud kõik VitalControl'is salvestatud loomad. Kasutades [filtrit](../../filter/) saate hindamist piirata seadme teatud loomade alamhulgaga, näiteks ainult isased loomad või loomad kuni teatud maksimaalse vanuseni.
{{% /alert %}}

{{% alert title="Vihje" %}}
Kui klõpsate menüüelemendil, suunatakse teid vastava funktsiooni kirjelduse juurde.
{{% /alert %}}

<img src="../images/imagemap.png" alt="VitalControl Hindamine" title="Kaal" usemap="#workmap" class="maphilight" />

<map name="workmap">
   <area shape="rect" coords="3,40,116,160" alt="Tänane kaalumine" title="Hinda oma loomade tänase päeva VitalControl'iga salvestatud kaalu väärtusi&#10;Hiireklõps: dokumentatsiooni juurde" href="/et/docs/evaluation/weight/#todays-weighings">
   <area shape="rect" coords="116,40,238,160" alt="Sünnikaalud" title="Hinda oma salvestatud sünnikaale&#10;Hiireklõps: dokumentatsiooni juurde" href="/et/docs/evaluation/weight/#birth-weights">
   <area shape="rect" coords="3,160,116,279" alt="Kaalude areng" title="Hinda oma loomade kaalu arengut&#10;Hiireklõps: dokumentatsiooni juurde" href="/et/docs/evaluation/weight/#weight-development">

   <area shape="rect" coords="150,282,238,319" alt="Filter" title="Sea filter&#10;Hiireklõps: dokumentatsiooni juurde" href="/et/docs/filter">
   <area shape="rect" coords="2,282,95,319" alt="Tagasi" title="Hüppa tagasi ühe taseme võrra&#10;Hiireklõps: dokumentatsiooni juurde" href="/et/docs/evaluation/">
</map>

## Tänased kaalumised {#todays-weighings}
Selles hindamises näete järgmist teavet viimase 6 tunni kaalumiste kohta:
- Keskmise looma kaal
- Keskmise päevase juurdekasvu alates sünnist
- Keskmise päevase suurenemise alates viimasest kaalumisest
- Sünnikaalu kahekordistumine pärast X päeva

Hindamise teostamiseks toimige järgmiselt:

1. Seadme põhiekraanil tõstke esile ikoon &nbsp;<img src="/icons/main/evaluation.svg" width="50" align="bottom" alt="Hinnake" />&nbsp; `{{<T "Evaluation" >}}`. Kinnitage valikuga `{{<T "Ok" >}}`.

2. Avaneb veel üks alammenüü, kus saate nooleklahvidega △ ▽ ◁ ▷ valida menüüpunktide `{{<T "Weight" >}}`, `{{<T "Temperature" >}}`, `{{<T "Rating" >}}` ja `{{<T "Mortality" >}}` vahel. Valige &nbsp;<img src="/icons/evaluation/weight.svg" width="40" align="bottom" alt="Kaal" />&nbsp; `{{<T "Weight" >}}` ja kinnitage valikuga `{{<T "Ok" >}}`.

3. Nüüd ilmuvad kaalu jaotise hindamisvalikud. Valige hindamisvalik &nbsp;<img src="/icons/evaluation/weighingtoday.svg" width="50" align="bottom" alt="Tänane kaalumine" />&nbsp; `{{<T "WeighingToday" >}}` ja kinnitage valikuga `{{<T "Ok" >}}`. Seade hakkab nüüd edukuse muutujaid arvutama.

4. Kui arvutus on lõppenud, saate vaadata eelpool mainitud edukuse muutujaid. Kasutage nooleklahve △ ▽, et liikuda kuvatud menüüs.

   ![VitalControl: menüü Hindamine Tänased kaalumised](../images/todaysweighings.png "Hinnake tänaseid kaalumisi")

## Sünnikaalud {#birth-weights}
Selles hindamises saate vaadata järgmist teavet:
- Keskmine sünnikaal
- Kaaluklassid

Hindamise teostamiseks toimige järgmiselt:

1. Seadme põhiekraanil tõstke esile ikoon &nbsp;<img src="/icons/main/evaluation.svg" width="50" align="bottom" alt="Hinnake" />&nbsp; `{{<T "Evaluation" >}}`. Kinnitage valikuga `{{<T "Ok" >}}`.

2. Avaneb veel üks alammenüü, kus saate nooleklahvidega △ ▽ ◁ ▷ valida menüüpunktide `{{<T "Weight" >}}`, `{{<T "Temperature" >}}`, `{{<T "Rating" >}}` ja `{{<T "Mortality" >}}` vahel. Valige &nbsp;<img src="/icons/evaluation/weight.svg" width="40" align="bottom" alt="Kaal" />&nbsp; `{{<T "Weight" >}}` ja kinnitage valikuga `{{<T "Ok" >}}`.

3. Nüüd ilmuvad kaalu jaotise hindamisvalikud. Valige &nbsp;<img src="/icons/evaluation/birthweights.svg" width="60" align="bottom" alt="Sünnikaalud" />&nbsp; `{{<T "BirthWeights" >}}` ja kinnitage valikuga `{{<T "Ok" >}}`. Seade hakkab nüüd edukuse muutujaid arvutama.

4. Kui arvutus on lõppenud, saate vaadata eelpool mainitud edukuse muutujaid. Kasutage nooleklahve △ ▽, et liikuda kuvatud menüüs.

![VitalControl: menüü Hindamine Sünnikaalud](../images/birthweights.png "Hinda sünnikaalusid")

## Kaalu areng {#weight-development}

Selles hindamises näete järgmist teavet kõigi kaalumiste kohta:
- Keskmine looma kaal
- Keskmine päevane kaalutõus sünnist alates
- Keskmine päevane kaalutõus viimasest kaalumisest alates
- Kaal kahekordistus pärast sünnikaalu

Hindamise teostamiseks toimige järgmiselt:

1. Seadme põhiekraanil tõstke esile ikoon &nbsp;<img src="/icons/main/evaluation.svg" width="50" align="bottom" alt="Hinda" />&nbsp; `{{<T "Evaluation" >}}`. Kinnitage `{{<T "Ok" >}}`.

2. Avaneb veel üks alammenüü, kus saate nooleklahvide △ ▽ ◁ ▷ abil valida menüüpunktide `{{<T "Weight" >}}`, `{{<T "Temperature" >}}`, `{{<T "Rating" >}}` ja `{{<T "Mortality" >}}` vahel. Valige &nbsp;<img src="/icons/evaluation/weight.svg" width="40" align="bottom" alt="Kaal" />&nbsp; `{{<T "Weight" >}}` ja kinnitage `{{<T "Ok" >}}`.

3. Nüüd ilmuvad kaalu jaotise hindamisvalikud. Valige &nbsp;<img src="/icons/evaluation/weightdevelopment.svg" width="55" align="bottom" alt="Kaalu areng" />&nbsp; `{{<T "WeightDevelopment" >}}` ja kinnitage `{{<T "Ok" >}}`. Seade hakkab nüüd edukuse näitajaid arvutama.

4. Kui arvutus on lõpetatud, saate ülalmainitud edukuse näitajaid vaadata. Kasutage kuvatud menüüs navigeerimiseks nooleklahve △ ▽.

   ![VitalControl: menüü Hindamine Kaalu areng](../images/weightdevelopment.png "Hinda kaalu arengut")
