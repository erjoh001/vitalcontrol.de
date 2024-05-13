---
title: "Andmete hankimine"
linkTitle: "Andmete hankimine"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: data-acquisition
description: >
 Loomade andmete kogumiseks vajalike seadistuste salvestamine
categories: [settings]
tags: [settings, data acquisition]
translationKey: settings/data-acquisition
maphilight: true
---
## Ülevaade

Järgnev graafik loetleb saadaolevad seadistused loomade andmete salvestamise kohta:

<img src="../images/animaldataacquisition.png" alt="Loomade andmete hankimine" title="Loomade andmete hankimine" usemap="#workmap-overview" class="maphilight" />

<map name="workmap-overview">
  <area shape="rect" coords="3,40,239,80" alt="Kaalumise salvestamine" title="Alammenüü: Kaalumise salvestamise seaded&#10;Hiireklõps: ava dokumentatsioon" href="#settings-weight-recording">
  <area shape="rect" coords="3,80,239,160" alt="Loomade hindamise režiim" title="Määra loomade hindamise režiim&#10;Hiireklõps: ava dokumentatsioon" href="#mode-of-animal-rating">
  <area shape="rect" coords="3,160,239,240" alt="Värske lehma kontrollperioodi pikkus" title="Määra värske lehma kontrollperioodi pikkus&#10;Hiireklõps: ava dokumentatsioon" href="#control-period-of-fresh-cows">

  <area shape="rect" coords="2,282,125,318" alt="Tagasi" title="Hüppa tagasi ühe taseme võrra" href="/et/docs/settings/">
</map>

{{% alert title="Vihje" %}}
Liiguta kursor graafiku all oleva sümboli kohale ja hoia seda hetke paigal. Ilmub tööriistavihje, mis esitab teavet vastava seade kohta. Kui klõpsate mõnel joonel, suunatakse teid vastava seade kirjelduse juurde.
{{% /alert %}}

## Seaded *Kaalumise salvestamine*

Järgnev graafik loetleb saadaolevad seadistused loomade kaalumise salvestamise kohta:

<img src="../images/weightrecording.png" alt="Alammenüü üksuste seaded kaalumise salvestamiseks" title="Kaalumise salvestamise seaded" usemap="#workmap-weight" class="maphilight" />

<map name="workmap-weight">
  <area shape="rect" coords="1,40,230,199" alt="Päevase kaalutõusu hindamise läviväärtused" title="Määra päevase kaalutõusu hindamise läviväärtused&#10;Hiireklõps: ava dokumentatsioon" href="#assessment-of-daily-weight-gain-threshold-values">
  <area shape="rect" coords="1,200,230,280" alt="Sünnikaal" title="Määra uue looma registreerimisel pakutav sünnikaal&#10;Hiireklõps: ava dokumentatsioon" href="#birth-weight">
  <area shape="rect" coords="1,280,230,360" alt="Keskmine päevane kaalutõus" title="Määra loomade kaalu hindamisel kasutatav keskmine päevane kaalutõus&#10;Hiireklõps: ava dokumentatsioon" href="#average-daily-weight-gain">
  <area shape="rect" coords="1,360,230,440" alt="Kaalumise täpsus" title="Määra kaalumise täpsus&#10;Hiireklõps: ava dokumentatsioon" href="#precision-of-weight-recording">
</map>

### Igapäevase kaalutõusu hindamine: Läviväärtused

{{% alert title="Vihje" %}}
Punane väli näitab "kritiliselt madalat kaalutõusu" piirkonda. Kollane väli näitab "suboptimaalset kaalutõusu" piirkonda.
{{% /alert %}}

Igapäevase kaalutõusu läviväärtuste kohandamiseks toimige järgmiselt:

1. Oma VitalControl seadme põhiekraanil valige menüüpunkt <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `Seaded` ja vajutage `OK` nuppu.

2. Avaneb alammenüü, kus kuvatakse erinevaid seadeid. Kasutage nooleklahve △ ▽, et valida `Andmete hankimine`. Kinnitage valikuga `OK`.

3. Avaneb veel üks alammenüü, kus saate nooleklahvide △ ▽ abil liikuda seadistusväljade vahel `Kaalusalvestus`, `Loomade hindamine` ja `Värskete lehmade kontrollperiood`. Valige `Kaalusalvestus` ja kinnitage valikuga `OK`.

4. Automaatselt valitakse eelistusväli `Igapäevane kaalutõus`. Kasutage nooleklahve ◁ ▷, et valida soovitud loomaliik. Kinnitage valikuga `OK`. Alternatiivina võite kasutada pliiatsiikooni koos <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `F3` klahviga, et otse minna punase ja kollase ala muutmisele.

5. Kasutage nooleklahve △ ▽, et valida soovitud "suurem kui" või "võrdne" g/päevas suurenemine punases ja kollases alas. Kasutage klahve `F2`/`F3` 🡄 🡆 või nooleklahve ◁ ▷, et vahetada punase ja kollase ala vahel.

6. Kui olete seadistanud soovitud "suurem kui" või "võrdne" g/päevas suurenemise, kasutage `F1` klahvi <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Exit" /> või kinnitage valikuga `OK`, et naasta `Igapäevase kaalutõusu` juurde.

    ![VitalControl: menüü seaded igapäevase kaalutõusu jaoks](../images/dailyweightgain.png "Igapäevane kaalutõus")

### Sünnikaal

Seade kasutab siin seadetes salvestatud sünnikaalu vaikimisi väärtusena, kui luuakse uusi loomi. Selleks, et saaksite kiiremini valida äsja sündinud looma individuaalse sünnikaalu, võib teil olla vajalik kohandada seda vaikimisi väärtust oma farmis. `Sünnikaalu` väärtuse kohandamiseks toimige järgmiselt:

1. Valige oma VitalControl seadme põhiekraanil menüüpunkt <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `Seaded` ja vajutage `OK` nuppu.

2. Avaneb alammenüü, kus kuvatakse erinevad seaded. Kasutage nooleklahve △ ▽, et valida `Andmete hankimine`. Kinnitage valikuga `OK`.

3. Avaneb veel üks alammenüü, kus saate nooleklahvidega △ ▽ vahetada seadistusvälju `Kaalumise salvestamine`, `Looma hindamine` ja `Värskete lehmade kontrollperiood`. Valige `Kaalumise salvestamine` ja kinnitage valikuga `OK`.

4. Kasutage nooleklahve △ ▽, et valida seadistusväli `Sünnikaal` ja nooleklahve ◁ ▷, et määrata soovitud sünnikaal. Seade kasutab nüüd siin määratletud sünnikaalu standardina uute loomade loomisel. Uue sündinud looma individuaalne sünnikaal saab seejärel kiiremini valitud.

    ![VitalControl: menüü seaded sünnikaal](../images/birthweight.png "Sünnikaal")

{{% alert title="Hoiatus" color="warning" %}}
Standardne sünnikaal on ainult ligikaudne väärtus, mida tuleb uue looma loomisel individuaalselt kohandada.
Kui te ei soovi seda kohandust teha või kui loote loomi automaatselt [taustal](../animal-registration/#auto-registration), ei tohiks uue looma loomisel sünnikaalu küsida ega salvestada. See saab määratletud [loomade registreerimise](../animal-registration/#set-recorded-weights) seadetes.
{{% /alert %}}

{{% alert title="Sünnikaalude vaikeväärtused:" %}}

| Uue looma liik                |  Lammas        | Vasikas       |
|-------------------------------|----------------|---------------| 
| Vaikeväärtus *sünnikaal*:     | 4 kg           | 40 kg         |
| Väärtuste vahemik:            | 1,0 kuni 99 kg | 1,0 kuni 99 kg |
{{% /alert %}}

### Keskmine päevane kaalutõus

{{% alert title="Selgitus" %}}
Looma [kaalumisel](../../actions/record-weight/) kasutatakse määratletud päevast tõusu soovitatud kaaluväärtuse arvutamisel looma kaalumisel. Kui soovitatud kaaluväärtus on enamiku kaalutavate loomade jaoks liiga madal või liiga kõrge, peaksite määratletud väärtust vastavalt alandama või tõstma, et kaaluväärtuse kohandamiseks nooleklahvidega kuluvat aega lühendada.
{{% /alert %}}

Looma ligikaudse kaalu arvutamiseks kasutatava `keskmise päevase kaalutõusu` seadmiseks toimige järgmiselt.

1. Oma VitalControl seadme põhiekraanil valige menüüpunkt <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `Seaded` ja vajutage `OK` nuppu.

2. Avaneb alammenüü, kus kuvatakse erinevad seaded. Kasutage nooleklahve △ ▽, et valida `Andmete hankimine`. Kinnitage valikuga `OK`.

3. Avaneb veel üks alammenüü, kus saate nooleklahvide △ ▽ abil liikuda seadistusväljade vahel `Kaalusisestus`, `Looma hindamine` ja `Kontrollperiood värsketel lehmadel`. Valige `Kaalusisestus` ja kinnitage valikuga `OK`.

4. Kasutage nooleklahve △ ▽, et valida seadistusväli `Keskmine päevane kaalutõus`. Kasutage nooleklahve ◁ ▷, et määrata soovitud keskmine päevane tõus g/päevas. Seade kasutab nüüd siin määratletud keskmist päevast tõusu loomade eeldatava päevase tõusu standardina.

    ![VitalControl: menüü seaded keskmine päevane kaalutõus](../images/averagedailyweightgain.png "Keskmine päevane kaalutõus")

### Kaalu registreerimise täpsus

{{% alert title="Selgitus" %}}
Sõltuvalt kasutusjuhtumist ja loomaliigist (*lammas*, *vasikas*, *lehm*) on erinevad nõuded registreeritava kaalu väärtuse resolutsioonile (täpsus *10 g*, *100 g* või *1 kg*). Nende nõuete täitmiseks on vajalik kasutada seadistust *Maksimaalne täpsus*.
{{% /alert %}}

Allpool olev tabel näitab kaalu registreerimise täpsust sõltuvalt kaaluvahemikust ja *Maksimaalse täpsuse* seadistusest:

| Seadistus *Maksimaalne täpsus*:               |  10 g | 100 g | 1 kg |
|--------------------------------------------|-------|-------|------|
| Täpsus vahemikus *0 kuni 9,9 kg*:   | 10 g  | 100 g | 1 kg |
| Täpsus vahemikus *10 kuni 49,9 kg*: | 100 g | 100 g | 1 kg |
| Täpsus vahemikus *50 kuni 99,9 kg*: | 500 g | 500 g | 1 kg |
| Täpsus väärtustele *≥ 100 kg*:           | 1 kg  | 1 kg  | 1 kg |

Maksimaalse täpsuse seadmiseks loomade kaalu registreerimisel oma seadmega toimige järgmiselt:

1. Peamenüüs oma VitalControl seadmel valige menüüpunkt <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `Seaded` ja vajutage `OK` nuppu.

2. Avaneb alammenüü, kus kuvatakse erinevaid seadeid. Kasutage nooleklahve △ ▽, et valida `Andmete kogumine`. Kinnitage valikuga `OK`.

3. Avaneb veel üks alammenüü, kus saate nooleklahvide △ ▽ abil liikuda seadistusväljade vahel `Kaalumise salvestamine`, `Looma hindamine` ja `Värskete lehmade kontrollperiood`. Valige `Kaalumise salvestamine` ja kinnitage `OK`-ga.

4. Kasutage nooleklahve △ ▽, et valida seadistusväli `Maksimaalne täpsus`. Kasutage nooleklahve ◁ ▷, et määrata soovitud maksimaalne täpsus. Kaalu salvestamise täpsus seadmel järgib nüüd kehtestatud seadistust.

    ![VitalControl: menüütee seaded maksimaalne täpsus kaalu salvestamisel](../images/precisionweightrecording.png "Määrake kaalu salvestamise maksimaalne täpsus.")

<br>
Salvestage seaded ja naaske peamenüüsse `Andmete kogumine`, vajutades `F1` klahvi &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.

## Looma hindamise režiim

{{% alert title="Selgitus" %}}
Lihtsas režiimis küsitakse looma hindamisel ainult üldist seisundit (roheline/kollane/punane). Laiendatud hindamisel küsitakse 4 hindamiskategooriat: üldine seisund, söödatarbimine, kõhulahtisus ja hingamisteede haigused.
{{% /alert %}}

Looma `Hindamise` seadistamiseks oma seadmel toimige järgnevalt.

1. Peamenüüs oma VitalControl seadmel valige menüüpunkt <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `Seaded` ja vajutage `OK` nuppu.

2. Avaneb alammenüü, kus kuvatakse erinevaid seadeid. Kasutage nooleklahve △ ▽, et valida `Andmete kogumine`. Kinnitage valikuga `OK`.

3. Avaneb veel üks alammenüü, kus saate nooleklahvide △ ▽ abil liikuda seadistusväljade vahel `Kaalumise salvestamine`, `Looma hindamine` ja `Värskete lehmade kontrollperiood`. Valige `Looma hindamine` ja kinnitage `OK`-ga.

4. Kasutage nooleklahve ◁ ▷, et seadistada soovitud loomade hinnang.

    ![VitalControl: menüü seaded loomade keskmine hinnang](../images/raitingofanimals.png "Loomade hinnang")

## Värskete lehmade kontrollperiood

{{% alert title="Selgitus" %}}
Värskete lehmade haldamisel peetakse parimaks praktikaks loomade igapäevast kontrollimist mitme päeva jooksul pärast sünnitust, sealhulgas nende temperatuuri mõõtmist. Selle kontrollperioodi kestus varieerub farmiti oluliselt. Seetõttu saab VitalControl seadetes määrata kontrollperioodi pikkuse vahemikus 3 kuni 14 päeva. Värskete lehmade kontrollperioodi määratud väärtus määrab iga looma jaoks kuvatava tuludiagrammi veergude arvu [värske lehma nimekirjas](../../lists/fresh-cows/).
{{% /alert %}}

Värskete lehmade kontrollperioodi pikkuse seadmiseks toimige järgmiselt:

1. Oma VitalControl seadme põhiekraanil valige menüüpunkt <img src="/icons/gear.svg" width="25" align="bottom" alt="Seaded" /> `Seaded` ja vajutage `OK` nuppu.

2. Avaneb alammenüü, kus kuvatakse erinevaid seadeid. Kasutage nooleklahve △ ▽, et valida `Andmete hankimine`. Kinnitage valikuga `OK`.

3. Avaneb veel üks alammenüü, kus saate nooleklahvide △ ▽ abil vahetada seadistusväljade vahel `Kaalumise salvestamine`, `Looma hinnang` ja `Värskete lehmade kontrollperiood`. Valige `Värskete lehmade kontrollperiood` ja kinnitage valikuga `OK`.

4. Kasutage nooleklahve ◁ ▷, et seadistada soovitud kontrollperioodi kestus päevades pärast poegimist.

    ![VitalControl: menüü seaded värskete lehmade kontrollperiood](../images/controlperiodfreshcows.png "Värskete lehmade kontrollperiood")

<br>

Salvestage seaded ja naaske peamenüüsse <img src="/icons/gear.svg" width="25" align="bottom" alt="Seaded" /> `Seaded`, vajutades `F1` klahvi &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Salvesta ja naase" />&nbsp;.
