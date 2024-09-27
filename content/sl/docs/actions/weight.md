---
title: Zabeleži težo
linkTitle: Teža
slug: record-weight
weight: 20
description: >
  Zabeležite težo svojih živali.
date: 2023-07-26
categories: [Dejanja]
tags: [Dejanja, teža]
translationKey: actions/weight
---

## Zabeleži težo {#record-weight}
Uporabite dejanje &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Tehtanje" /> `{{<T "Weighing" >}}` za shranjevanje teže vaše živali posamično. Za to stehtajte svoje živali ali ocenite njihovo težo in vnesite to vrednost v napravo VitalControl. To vam omogoča preverjanje razvoja teže vaših živali in njihovo individualno ocenjevanje.

{{% alert title="Namig" %}}
Če povprečna teža zelo odstopa v eno smer (previsoka/premajhna), je treba prilagoditi vrednost za dnevni prirast.
{{% /alert %}}

1. Na glavnem zaslonu vaše naprave VitalControl izberite meni &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Dejanja" /> `{{<T "Actions" >}}` in pritisnite gumb `{{<T "Ok" >}}`.

2. Ali skenirajte žival s transponderjem ali izberite žival s seznama. Potrdite z `{{<T "Ok" >}}` in izberite žival s puščičnimi tipkami △ ▽. Potrdite z `{{<T "Ok" >}}`.

3. Odpre se podmeni z dejanji za živali. S puščičnimi tipkami ◁ ▷ izberite dejanje &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Tehtanje" /> `{{<T "Weighing" >}}` in potrdite z `{{<T "Ok" >}}`.

4. Odpre se meni s specifikacijo teže. Povečajte ali zmanjšajte to s puščičnimi tipkami △ ▽ in shranite rezultat s tipko `F3` <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Shrani" /> ali s tipko `{{<T "Ok" >}}`.

{{< tabpane >}}
{{< tab header="Zabeleži težo:" text=true disabled=true />}}
{{% tab header="Skeniranje transponderja" text=true %}}
  ![VitalControl: Meni Dejanje Tehtanje](../images/weighing-scan.png "Tehtanje")
{{% /tab %}}
{{% tab header="Ročna izbira s seznama" text=true %}}
  ![VitalControl: Meni Dejanje Tehtanje](../images/weighing.png "Tehtanje")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Namig" %}}
Če ta akcija ni na voljo, je verjetno bila deaktivirana! Aktivirajte akcijo v meniju [nastavitve akcij](../setting/). Alternativno, ponastavitev vseh akcij bo ponovno omogočila to akcijo.
{{% /alert %}}
