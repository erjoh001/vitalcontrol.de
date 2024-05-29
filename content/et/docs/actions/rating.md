---
title: Hinnang
linkTitle: Hinnang
slug: rating
weight: 30
description: >
 Hinda oma loomi.
date: 2023-07-26
categories: [Tegevused]
tags: [Tegevused, Hinnang]
translationKey: actions/animal-rating
---

## Hinda oma loomi {#rate-your-animals}

Looma hinnates dokumenteerid sa üksikisendi seisukorda. Seisund määratakse visuaalselt ja registreeritakse liiklusvalgusti süsteemi abil. Põhihinnangus registreeritakse ainult üldine seisund. Laiendatud hindamisel registreerid sa üldise seisundi, sööda tarbimise, väljaheidete konsistentsi ja hingamisteede haigused. Sa võid hinnangu režiimi muuta otse <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Hinnang" /> `{{<T "Rating" >}}` tegevuses või sa võid selle määrata [seadetes](../../settings/data-acquisition/#mode-of-animal-rating).

{{% alert title="Vihje" %}}
Kollane või punane hinnang tähendab, et VitalControl klassifitseerib looma märgatavaks ja paneb selle häire nimekirja.
{{% /alert %}}

1. Oma VitalControl seadme põhiekraanil vali menüüpunkt &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Tegevused" /> `{{<T "Actions" >}}` ja vajuta `{{<T "Ok" >}}` nuppu.

2. Skaneeri loom transponderi abil või vali loom nimekirjast. Kinnita `{{<T "Ok" >}}`-ga ja vali loom nooleklahvidega △ ▽. Kinnita `{{<T "Ok" >}}`-ga.

3. Avaneb alammenüü loomaga seotud tegevustega. Kasuta nooleklahve ◁ ▷, et valida tegevus <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Hinnang" /> `{{<T "Rating" >}}` ja kinnita `{{<T "Ok" >}}`-ga.

4. Avaneb hinnangu menüü. Kui soovid hinnangu režiimi vahetada, kasuta `On/Off` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Tegevuste jada" />&nbsp; nuppu ja nooleklahve ◁ ▷. `F1` klahviga <img src="/icons/footer/exit.svg" width="24" align="bottom" alt="Tagasi" />&nbsp; naased hindamise menüüsse.

5. Kasuta nooleklahve ◁ ▷ △ ▽, et valida seisund ja salvesta see `F3` klahviga <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Salvesta" /> või `{{<T "Ok" >}}` nupuga.

6. Täpsemal režiimil kasutage hinnanguparameetrite vahel lülitumiseks klahve `F1` ja `F3`.

{{% alert title="Vihje" %}}
Kui te ei tee valikut nooleklahvidega ◁ ▷, vaid salvestate otse klahviga `F3` või `{{<T "Ok" >}}`, salvestab VitalControl neutraalse hinnangu, mida esindab hall värv.
{{% /alert %}}

### Põhihinnang {#basic-rating}

{{< tabpane >}}
{{< tab header="Põhihinnang:" text=true disabled=true />}}
{{% tab header="Transponderi skaneerimine" text=true %}}
![VitalControl: Menüü Tegevuste Hinnang](../images/basicrating-scan.png "Põhihinnang")
{{% /tab %}}
{{% tab header="Käsitsi valik nimekirjast" text=true %}}
![VitalControl: Menüü Tegevuste Hinnang](../images/basicrating.png "Põhihinnang")
{{% /tab %}}
{{< /tabpane >}}

### Laiendatud hinnang {#extended-rating}

{{< tabpane >}}
{{< tab header="Põhihinnang:" text=true disabled=true />}}
{{% tab header="Transponderi skaneerimine" text=true %}}
![VitalControl: Menüü Tegevuste Hinnang](../images/extendedrating-scan.png "Laiendatud hinnang")
{{% /tab %}}
{{% tab header="Käsitsi valik nimekirjast" text=true %}}
![VitalControl: Menüü Tegevuste Hinnang](../images/extendedrating.png "Laiendatud hinnang")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Vihje" %}}
Kui see tegevus pole saadaval, on tegevus tõenäoliselt deaktiveeritud! Aktiveerige tegevus menüüs [tegevuste seaded](../setting/). Alternatiivina kõigi tegevuste lähtestamine toob selle tegevuse tagasi.
{{% /alert %}}
