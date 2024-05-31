---
title: Súly értékelése
linkTitle: Súly értékelése
slug: weight
weight: 10
description: >
 Értékelje a tárolt adatokat a Súly szakaszban.
date: 2023-07-26
categories: [Értékelés]
tags: [Értékelés, súly]
translationKey: evaluation/weight
maphilight: true
---
{{% alert title="Tipp" %}}
Alapértelmezett beállítás szerint az összes állat, amely a VitalControl-on van tárolva, szerepel az értékelésben. Egy [szűrő](../../filter/) használatával korlátozhatja az értékelést az eszközén lévő állatok egy részére, például csak a hím állatokra vagy egy bizonyos maximális korig.
{{% /alert %}}

{{% alert title="Tipp" %}}
Ha rákattint egy menüpontra, átirányítjuk a megfelelő funkció leírására.
{{% /alert %}}

<img src="../images/imagemap.png" alt="VitalControl Értékelés" title="Súly" usemap="#workmap" class="maphilight" />

<map name="workmap">
   <area shape="rect" coords="3,40,116,160" alt="Mai mérlegelések" title="Értékelje az állatok VitalControl-lal rögzített súlyértékeit az aktuális napon&#10;Egérkattintás: a dokumentációhoz" href="/hu/docs/evaluation/weight/#todays-weighings">
   <area shape="rect" coords="116,40,238,160" alt="Születési súlyok" title="Értékelje a tárolt születési súlyokat&#10;Egérkattintás: a dokumentációhoz" href="/hu/docs/evaluation/weight/#birth-weights">
   <area shape="rect" coords="3,160,116,279" alt="Súlyfejlődés" title="Értékelje az állatok súlyfejlődését&#10;Egérkattintás: a dokumentációhoz" href="/hu/docs/evaluation/weight/#weight-development">

   <area shape="rect" coords="150,282,238,319" alt="Szűrő" title="Állítson be egy szűrőt&#10;Egérkattintás: a dokumentációhoz" href="/hu/docs/filter">
   <area shape="rect" coords="2,282,95,319" alt="Vissza" title="Ugorjon vissza egy szintet&#10;Egérkattintás: a dokumentációhoz" href="/hu/docs/evaluation/">
</map>

## Mai mérlegelések {#todays-weighings}
Ebben az értékelésben a következő információkat láthatja az elmúlt 6 óra mérlegeléseivel kapcsolatban:
- Az állatok átlagos súlya
- Az átlagos napi gyarapodás születés óta
- Az utolsó mérlegelés óta eltelt napi átlagos növekedés
- A születési súly megduplázódása X nap után

Az értékelés elvégzéséhez járjon el az alábbiak szerint:

1. A készülék főképernyőjén emelje ki az ikont &nbsp;<img src="/icons/main/evaluation.svg" width="50" align="bottom" alt="Evaluate" />&nbsp; `{{<T "Rating" >}}`. Erősítse meg az `{{<T "Ok" >}}` gombbal.

2. Egy másik almenü nyílik meg, amelyben a △ ▽ ◁ ▷ nyílgombokkal választhat a `{{<T "Weight" >}}`, `{{<T "Temperature" >}}`, `{{<T "Rating" >}}` és `{{<T "Mortality" >}}` menüpontok között. Válassza ki a &nbsp;<img src="/icons/evaluation/weight.svg" width="40" align="bottom" alt="Weight" />&nbsp; `{{<T "Weight" >}}` menüpontot, és erősítse meg az `{{<T "Ok" >}}` gombbal.

3. Most megjelennek a Súly szekció értékelési lehetőségei. Válassza ki az értékelési lehetőséget &nbsp;<img src="/icons/evaluation/weighingtoday.svg" width="50" align="bottom" alt="Today's weighing" />&nbsp; `{{<T "WeighingToday" >}}` és erősítse meg az `{{<T "Ok" >}}` gombbal. A készülék most elkezdi kiszámítani a siker változókat.

4. Amikor a számítás befejeződött, megtekintheti a fent említett siker változókat. Használja a △ ▽ nyílgombokat a megjelenített menüben való navigáláshoz.

   ![VitalControl: menu Evaluation Today's weighings](../images/todaysweighings.png "Evaluate Today's weighings")

## Születési súlyok {#birth-weights}
Ebben az értékelésben a következő információkat tekintheti meg:
- Az átlagos születési súly
- A súlyosztályok

Az értékelés elvégzéséhez járjon el az alábbiak szerint:

1. A készülék főképernyőjén emelje ki az ikont &nbsp;<img src="/icons/main/evaluation.svg" width="50" align="bottom" alt="Evaluate" />&nbsp; `{{<T "Rating" >}}`. Erősítse meg az `{{<T "Ok" >}}` gombbal.

2. Egy másik almenü nyílik meg, amelyben a △ ▽ ◁ ▷ nyílgombokkal választhat a `{{<T "Weight" >}}`, `{{<T "Temperature" >}}`, `{{<T "Rating" >}}` és `{{<T "Mortality" >}}` menüpontok között. Válassza ki a &nbsp;<img src="/icons/evaluation/weight.svg" width="40" align="bottom" alt="Weight" />&nbsp; `{{<T "Weight" >}}` menüpontot, és erősítse meg az `{{<T "Ok" >}}` gombbal.

3. Most megjelennek a súly szekció értékelési lehetőségei. Válassza ki a &nbsp;<img src="/icons/evaluation/birthweights.svg" width="60" align="bottom" alt="Birth weights" />&nbsp; `{{<T "BirthWeights" >}}` és erősítse meg az `{{<T "Ok" >}}` gombbal. A készülék most elkezdi kiszámítani a siker változókat.

4. Amikor a számítás befejeződött, megtekintheti a fent említett siker változókat. Használja a △ ▽ nyílgombokat a megjelenített menüben való navigáláshoz.


   ![VitalControl: menu Értékelés Születési súlyok](../images/birthweights.png "Születési súlyok értékelése")

## Súlyfejlődés {#weight-development}

Ebben az értékelésben a következő információkat láthatja az összes méréshez kapcsolódóan:
- Az állatok átlagos súlya
- Az átlagos napi súlygyarapodás születés óta
- Az átlagos napi súlygyarapodás az utolsó mérés óta
- A születési súly megduplázódása után

Az értékelés elvégzéséhez kövesse az alábbi lépéseket:

1. A készülék főképernyőjén emelje ki az ikont &nbsp;<img src="/icons/main/evaluation.svg" width="50" align="bottom" alt="Értékelés" />&nbsp; `{{<T "Rating" >}}`. Erősítse meg az `{{<T "Ok" >}}` gombbal.

2. Egy másik almenü nyílik meg, amelyben a nyílbillentyűk △ ▽ ◁ ▷ segítségével választhat a `{{<T "Weight" >}}`, `{{<T "Temperature" >}}`, `{{<T "Rating" >}}` és `{{<T "Mortality" >}}` menüpontok között. Válassza ki &nbsp;<img src="/icons/evaluation/weight.svg" width="40" align="bottom" alt="Súly" />&nbsp; `{{<T "Weight" >}}` és erősítse meg az `{{<T "Ok" >}}` gombbal.

3. Most megjelennek a súly szekció értékelési lehetőségei. Válassza ki &nbsp;<img src="/icons/evaluation/weightdevelopment.svg" width="55" align="bottom" alt="Súlyfejlődés" />&nbsp; `{{<T "WeightDevelopment" >}}` és erősítse meg az `{{<T "Ok" >}}` gombbal. A készülék most elkezdi kiszámítani a siker változókat.

4. Amikor a számítás befejeződött, megtekintheti a fent említett siker változókat. Használja a nyílbillentyűket △ ▽ a megjelenített menüben való navigáláshoz.

   ![VitalControl: menu Értékelés Súlyfejlődés](../images/weightdevelopment.png "Súlyfejlődés értékelése")

