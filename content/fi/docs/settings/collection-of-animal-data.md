---
title: "Tietojen hankinta"
linkTitle: "Tietojen hankinta"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: data-acquisition
description: >
 Eläintietojen keruuseen liittyvien asetusten tallennus
categories: [settings]
tags: [settings, data acquisition]
translationKey: settings/data-acquisition
maphilight: true
---
## Yleiskatsaus

Seuraava kuva esittää saatavilla olevat asetukset eläintietojen tallennuksesta:

<img src="../images/animaldataacquisition.png" alt="Eläintietojen hankinta" title="Eläintietojen hankinta" usemap="#workmap-overview" class="maphilight" />

<map name="workmap-overview">
  <area shape="rect" coords="3,40,239,80" alt="Painon tallennus" title="Alavalikko: Asetukset painon tallennukseen&#10;Hiiren klikkaus: avaa dokumentaatio" href="#settings-weight-recording">
  <area shape="rect" coords="3,80,239,160" alt="Eläinten arvioinnin tila" title="Aseta eläinten arvioinnin tila&#10;Hiiren klikkaus: avaa dokumentaatio" href="#mode-of-animal-rating">
  <area shape="rect" coords="3,160,239,240" alt="Tuoreiden lehmien valvontajakson pituus" title="Aseta tuoreiden lehmien valvontajakson pituus&#10;Hiiren klikkaus: avaa dokumentaatio" href="#control-period-of-fresh-cows">

  <area shape="rect" coords="2,282,125,318" alt="Takaisin" title="Hyppää takaisin yksi taso" href="/fi/docs/settings/">
</map>

{{% alert title="Vihje" %}}
Siirrä hiiren osoitin kuvan alla olevan symbolin päälle ja anna sen olla hetken. Työkaluvihje ilmestyy, esitellen tietoa kyseisestä asetuksesta. Jos klikkaat jotakin riveistä, sinut ohjataan kyseisen asetuksen kuvaukseen.
{{% /alert %}}

## Asetukset *Painon tallennus*

Seuraava kuva esittää saatavilla olevat asetukset eläinten painon tallennuksesta:

<img src="../images/weightrecording.png" alt="Alavalikon kohteet painon tallennuksen asetuksille" title="Painon tallennuksen asetukset" usemap="#workmap-weight" class="maphilight" />

<map name="workmap-weight">
  <area shape="rect" coords="1,40,230,199" alt="Kynnysarvojen arviointi päivittäisessä painonnousussa" title="Aseta kynnysarvot päivittäisen painonnousun arvioinnille&#10;Hiiren klikkaus: avaa dokumentaatio" href="#assessment-of-daily-weight-gain-threshold-values">
  <area shape="rect" coords="1,200,230,280" alt="Syntymäpaino" title="Aseta ehdotettu syntymäpaino uutta eläintä rekisteröitäessä&#10;Hiiren klikkaus: avaa dokumentaatio" href="#birth-weight">
  <area shape="rect" coords="1,280,230,360" alt="Keskimääräinen päivittäinen painonnousu" title="Aseta käytetty keskimääräinen päivittäinen painonnousu eläinten painon arvioinnissa&#10;Hiiren klikkaus: avaa dokumentaatio" href="#average-daily-weight-gain">
  <area shape="rect" coords="1,360,230,440" alt="Painon tallennuksen tarkkuus" title="Aseta painon tallennuksen tarkkuus&#10;Hiiren klikkaus: avaa dokumentaatio" href="#precision-of-weight-recording">
</map>

### Päivittäisen painonnousun arviointi: Kynnysarvot

{{% alert title="Vihje" %}}
Punainen kenttä osoittaa "kriittisen alhaisen painonnousun" alueen. Keltainen kenttä näyttää "suboptimaalisen painonnousun" alueen.
{{% /alert %}}

Päivittäisen painonnousun kynnysarvojen säätämiseksi toimi seuraavasti:

1. Valitse VitalControl-laitteesi päävalikosta kohta <img src="/icons/gear.svg" width="25" align="bottom" alt="Asetukset" /> `Asetukset` ja paina `OK`-nappia.

2. Avautuu alivalikko, jossa näkyy erilaisia asetuksia. Käytä nuolinäppäimiä △ ▽ valitaksesi `Tietojen hankinta`. Vahvista painamalla `OK`.

3. Toinen alivalikko avautuu, jossa voit käyttää nuolinäppäimiä △ ▽ vaihtaaksesi asetuskenttien välillä `Painon tallennus`, `Eläinten arviointi` ja `Tuoreiden lehmien kontrollijakso`. Valitse `Painon tallennus` ja vahvista painamalla `OK`.

4. `Päivittäinen painonnousu` -asetuskenttä valitaan automaattisesti. Käytä nuolinäppäimiä ◁ ▷ valitaksesi haluamasi eläinlaji. Vahvista painamalla `OK`. Vaihtoehtoisesti voit käyttää kynäkuvaketta <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Muokkaa" /> `F3`-näppäintä hypätäksesi suoraan punaisen ja keltaisen alueen muokkaukseen.

5. Käytä nuolinäppäimiä △ ▽ valitaksesi haluamasi "suurempi kuin" tai "yhtä suuri kuin" g/päivä -lisäys punaisella ja keltaisella alueella. Käytä näppäimiä `F2`/`F3` 🡄 🡆 tai nuolinäppäimiä ◁ ▷ valitaksesi punaisen ja keltaisen alueen välillä.

6. Kun olet asettanut haluamasi "suurempi kuin" tai "yhtä suuri kuin" g/päivä -lisäyksen, käytä `F1`-näppäintä <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Poistu" /> tai vahvista painamalla `OK` palataksesi takaisin `Päivittäiseen painonnousuun`.

    ![VitalControl: valikkoasetukset päivittäinen painonnousu](../images/dailyweightgain.png "Päivittäinen painonnousu")

### Syntymäpaino

Laite käyttää tässä asetuksissa tallennettua syntymäpainoa oletusarvona uusia eläimiä luotaessa. Jotta voisit valita nopeammin vastasyntyneen eläimen yksilöllisen syntymäpainon, saatat tarvita tämän oletusarvon säätämistä tilallesi. Syntymäpainon arvon säätämiseksi toimi seuraavasti:

1. Valitse päävalikosta VitalControl-laitteessasi kohde <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `Asetukset` ja paina `OK`-painiketta.

2. Alivalikko avautuu, jossa näkyy erilaisia asetuksia. Käytä nuolinäppäimiä △ ▽ valitaksesi `Tietojen hankinta`. Vahvista painamalla `OK`.

3. Toinen alivalikko avautuu, jossa voit käyttää nuolinäppäimiä △ ▽ vaihtaaksesi asetuskenttien välillä `Painon tallennus`, `Eläimen arviointi` ja `Tuoreiden lehmien kontrollijakso`. Valitse `Painon tallennus` ja vahvista painamalla `OK`.

4. Käytä nuolinäppäimiä △ ▽ valitaksesi asetuskentän `Syntymäpaino` ja käytä nuolinäppäimiä ◁ ▷ asettaaksesi halutun syntymäpainon. Laite käyttää tässä määriteltyä syntymäpainoa oletuksena uusia eläimiä luotaessa. Uuden syntyneen eläimen yksilöllinen syntymäpaino voidaan sitten valita nopeammin.

    ![VitalControl: valikkoasetukset syntymäpaino](../images/birthweight.png "Syntymäpaino")

{{% alert title="Varoitus" color="warning" %}}
Oletussyntymäpaino on vain likimääräinen arvo, joka on yksilöllisesti säädettävä uutta eläintä luotaessa.
Jos et halua tehdä tätä säätöä tai jos luot eläimiä automaattisesti [taustalla](../animal-registration/#auto-registration), syntymäpainoa ei tulisi kysyä tai tallentaa uutta eläintä luotaessa. Tämä voidaan määritellä asetuksissa [eläinten rekisteröinnille](../animal-registration/#set-recorded-weights).
{{% /alert %}}

{{% alert title="Oletusarvot syntymäpainoille:" %}}

| Uuden eläimen tyyppi          |  Karitsa       | Vasikka        |
|-------------------------------|----------------|----------------| 
| Oletusarvo *syntymäpaino*:    | 4 kg           | 40 kg          |
| Arvoalue:                     | 1,0 - 99 kg    | 1,0 - 99 kg    |
{{% /alert %}}

### Keskimääräinen päivittäinen painonnousu

{{% alert title="Selitys" %}}
Eläintä [painottaessa](../../actions/record-weight/) käytetään määriteltyä päivittäistä lisäystä laskettaessa ehdotettua painoarvoa eläimen punnituksen aikana. Jos ehdotettu painoarvo on liian alhainen tai korkea useimmille punnittaville eläimille, sinun tulisi säätää määriteltyä arvoa alaspäin tai ylöspäin vastaavasti, jotta painoarvon säätämiseen käytetty aika lyhenee.
{{% /alert %}}

Aseta `keskimääräinen päivittäinen painonnousu`, jota käytetään eläimen arvioidun painon laskennassa seuraavasti.

1. Valitse VitalControl-laitteesi päävalikosta kohde <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `Asetukset` ja paina `OK`-painiketta.

2. Avautuu alivalikko, jossa näkyy erilaisia asetuksia. Käytä nuolinäppäimiä △ ▽ valitaksesi `Tiedonkeruu`. Vahvista valinta painamalla `OK`.

3. Toinen alivalikko avautuu, jossa voit käyttää nuolinäppäimiä △ ▽ vaihtaaksesi asetuskenttien välillä `Painon tallennus`, `Eläimen arviointi` ja `Tuoreiden lehmien kontrollijakso`. Valitse `Painon tallennus` ja vahvista `OK`-painikkeella.

4. Käytä nuolinäppäimiä △ ▽ valitaksesi asetuskentän `Keskimääräinen päivittäinen painonnousu`. Käytä nuolinäppäimiä ◁ ▷ asettaaksesi halutun keskimääräisen päivittäisen lisäyksen g/päivä. Laite käyttää tässä määriteltyä keskimääräistä päivittäistä nousua eläinten odotetun päivittäisen nousun standardina.

    ![VitalControl: valikkoasetukset keskimääräinen päivittäinen painonnousu](../images/averagedailyweightgain.png "Keskimääräinen päivittäinen painonnousu")

### Painon tallennuksen tarkkuus

{{% alert title="Selitys" %}}
Käyttötarkoituksesta ja eläinlajista (*lammas*, *vasikka*, *lehmä*) riippuen on erilaisia vaatimuksia tallennettavan painoarvon tarkkuudelle (tarkkuus *10 g*, *100 g* tai *1 kg*). Näiden vaatimusten täyttämiseksi on käytettävä *Maksimitarkkuus*-asetusta.
{{% /alert %}}

Alla oleva taulukko näyttää painon tallennuksen tarkkuuden painoalueesta ja *Maksimitarkkuus*-asetuksesta riippuen:

| Asetus *Maksimitarkkuus*:                   |  10 g | 100 g | 1 kg |
|--------------------------------------------|-------|-------|------|
| Tarkkuus alueella *0 - 9,9 kg*:            | 10 g  | 100 g | 1 kg |
| Tarkkuus alueella *10 - 49,9 kg*:          | 100 g | 100 g | 1 kg |
| Tarkkuus alueella *50 - 99,9 kg*:          | 500 g | 500 g | 1 kg |
| Tarkkuus arvoille *≥ 100 kg*:              | 1 kg  | 1 kg  | 1 kg |

Aseta maksimitarkkuus eläinten painon tallennuksessa laitteellasi seuraavasti:

1. Päävalikossa VitalControl-laitteessasi valitse valikkokohta <img src="/icons/gear.svg" width="25" align="bottom" alt="Asetukset" /> `Asetukset` ja paina `OK`-painiketta.

2. Alivalikko avautuu, jossa näkyy erilaisia asetuksia. Käytä nuolinäppäimiä △ ▽ valitaksesi `Tietojen hankinta`. Vahvista painamalla `OK`.

3. Toinen alivalikko avautuu, jossa voit käyttää nuolinäppäimiä △ ▽ vaihtaaksesi asetuskenttien välillä `Painon tallennus`, `Eläimen arviointi` ja `Tuoreiden lehmien kontrollijakso`. Valitse `Painon tallennus` ja vahvista painamalla `OK`.

4. Käytä nuolinäppäimiä △ ▽ valitaksesi asetuskentän `Maksimaalinen tarkkuus`. Käytä nuolinäppäimiä ◁ ▷ asettaaksesi halutun maksimitarkkuuden. Laitteen painon tallennuksen tarkkuus noudattaa nyt määrättyä asetusta.

    ![VitalControl: valikkopolku asetukset maksimaalinen tarkkuus painon tallennus](../images/precisionweightrecording.png "Määritä painon tallennuksen maksimaalinen tarkkuus.")

<br>
Tallenna asetukset ja palaa ylävalikkoon `Tietojen hankinta` painamalla `F1`-näppäintä &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Tallenna ja palaa" />&nbsp;.

## Eläimen arvioinnin tila

{{% alert title="Selitys" %}}
Yksinkertaisessa tilassa kysytään eläimen arvioinnin aikana vain yleiskunto (vihreä/keltainen/punainen). Laajennetussa arvioinnissa kysytään neljä arviointikategoriaa: yleiskunto, rehun kulutus, ripuli ja hengityssairaus.
{{% /alert %}}

Asettaaksesi `Eläimen arvioinnin` laitteellasi, toimi seuraavasti.

1. Päävalikossa VitalControl-laitteessasi valitse valikkokohta <img src="/icons/gear.svg" width="25" align="bottom" alt="Asetukset" /> `Asetukset` ja paina `OK`-painiketta.

2. Alivalikko avautuu, jossa näkyy erilaisia asetuksia. Käytä nuolinäppäimiä △ ▽ valitaksesi `Tietojen hankinta`. Vahvista painamalla `OK`.

3. Toinen alivalikko avautuu, jossa voit käyttää nuolinäppäimiä △ ▽ vaihtaaksesi asetuskenttien välillä `Painon tallennus`, `Eläimen arviointi` ja `Tuoreiden lehmien kontrollijakso`. Valitse `Eläimen arviointi` ja vahvista painamalla `OK`.

4. Käytä ◁ ▷ nuolinäppäimiä asettaaksesi haluamasi eläinten arvioinnin.

    ![VitalControl: menu settings average rating of animals](../images/raitingofanimals.png "Eläinten arviointi")

## Tuoreiden lehmien valvontajakso

{{% alert title="Selitys" %}}
Tuoreiden lehmien hallinnassa pidetään parhaana käytäntönä tarkistaa eläimet päivittäin usean päivän ajan synnytyksen jälkeen, mukaan lukien niiden lämpötilan mittaaminen. Tämän valvontajakson kesto vaihtelee huomattavasti tilasta toiseen. Tästä syystä valvontajakson pituus voidaan asettaa arvoon 3–14 päivää VitalControl-asetuksissa. Asetettu tuoreiden lehmien valvontajakson pituus määrittää kunkin eläimen [tuoreiden lehmien listassa](../../lists/fresh-cows/) näytettävien pylväsdiagrammien määrän.
{{% /alert %}}

Aseta tuoreiden lehmiesi valvontajakson pituus seuraavasti:

1. Valitse VitalControl-laitteesi päävalikosta kohde <img src="/icons/gear.svg" width="25" align="bottom" alt="Asetukset" /> `Asetukset` ja paina `OK`-painiketta.

2. Alivalikko avautuu, jossa näkyy erilaisia asetuksia. Käytä nuolinäppäimiä △ ▽ valitaksesi `Tietojen hankinta`. Vahvista painamalla `OK`.

3. Toinen alivalikko avautuu, jossa voit käyttää nuolinäppäimiä △ ▽ vaihtaaksesi asetuskenttien välillä `Painon tallennus`, `Eläimen arviointi` ja `Tuoreiden lehmien valvontajakso`. Valitse `Tuoreiden lehmien valvontajakso` ja vahvista painamalla `OK`.

4. Käytä ◁ ▷ nuolinäppäimiä asettaaksesi haluamasi valvontajakson keston päivinä synnytyksen jälkeen.

    ![VitalControl: menu settings control period fresh cows](../images/controlperiodfreshcows.png "Tuoreiden lehmien valvontajakso")

<br>

Tallenna asetukset ja palaa ylävalikkoon <img src="/icons/gear.svg" width="25" align="bottom" alt="Asetukset" /> `Asetukset` painamalla `F1`-näppäintä &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Tallenna ja palaa" />&nbsp;.