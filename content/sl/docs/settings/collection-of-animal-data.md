---
title: "Pridobivanje podatkov"
linkTitle: "Pridobivanje podatkov"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: data-acquisition
description: >
 Shranjevanje ustreznih nastavitev za zbiranje podatkov o živalih
categories: [nastavitve]
tags: [nastavitve, pridobivanje podatkov]
translationKey: settings/data-acquisition
maphilight: true
---
## Pregled {#overview}

Naslednja grafika prikazuje razpoložljive nastavitve v zvezi z beleženjem podatkov o živalih:

<img src="../images/animaldataacquisition.png" alt="Pridobivanje podatkov o živalih" title="Pridobivanje podatkov o živalih" usemap="#workmap-overview" class="maphilight" />

<map name="workmap-overview">
  <area shape="rect" coords="3,40,239,80" alt="Beleženje teže" title="Podmeni: Nastavitve za beleženje teže&#10;Klik z miško: odpri dokumentacijo" href="#settings-weight-recording">
  <area shape="rect" coords="3,80,239,160" alt="Način ocenjevanja živali" title="Nastavi način ocenjevanja živali&#10;Klik z miško: odpri dokumentacijo" href="#mode-of-animal-rating">
  <area shape="rect" coords="3,160,239,240" alt="Dolžina kontrolnega obdobja svežih krav" title="Nastavi dolžino kontrolnega obdobja za sveže krave&#10;Klik z miško: odpri dokumentacijo" href="#control-period-of-fresh-cows">

  <area shape="rect" coords="2,282,125,318" alt="Nazaj" title="Skoči nazaj za eno raven" href="/sl/docs/settings/">
</map>

{{% alert title="Namig" %}}
Premaknite kazalec miške nad simbol v spodnji grafiki in ga za trenutek zadržite. Pojavi se pojavno okno, ki prikazuje informacije o ustrezni nastavitvi. Če kliknete na eno od vrstic, boste preusmerjeni na opis ustrezne nastavitve.
{{% /alert %}}

## Nastavitve *Beleženje teže* {#settings-weight-recording}

Naslednja grafika prikazuje razpoložljive nastavitve v zvezi z beleženjem teže živali:

<img src="../images/weightrecording.png" alt="Podmeni elementi nastavitve za beleženje teže" title="Nastavitve beleženja teže" usemap="#workmap-weight" class="maphilight" />

<map name="workmap-weight">
  <area shape="rect" coords="1,40,230,199" alt="Mejne vrednosti ocenjevanja dnevnega prirasta teže" title="Nastavi mejne vrednosti za ocenjevanje dnevnega prirasta teže&#10;Klik z miško: odpri dokumentacijo" href="#assessment-of-daily-weight-gain-threshold-values">
  <area shape="rect" coords="1,200,230,280" alt="Porodna teža" title="Nastavi predlagano porodno težo ob registraciji nove živali&#10;Klik z miško: odpri dokumentacijo" href="#birth-weight">
  <area shape="rect" coords="1,280,230,360" alt="Povprečni dnevni prirast teže" title="Nastavi povprečni dnevni prirast teže, uporabljen pri ocenjevanju teže živali&#10;Klik z miško: odpri dokumentacijo" href="#average-daily-weight-gain">
  <area shape="rect" coords="1,360,230,440" alt="Natančnost beleženja teže" title="Nastavi natančnost beleženja teže&#10;Klik z miško: odpri dokumentacijo" href="#precision-of-weight-recording">
</map>

### Ocena dnevnega pridobivanja teže: Pragovne vrednosti {#assessment-of-daily-weight-gain-threshold-values}

{{% alert title="Namig" %}}
Rdeče polje prikazuje območje "kritično prenizkega pridobivanja teže". Rumeno polje prikazuje območje "suboptimalnega pridobivanja teže".
{{% /alert %}}

Za prilagoditev pragovnih vrednosti za oceno dnevnega pridobivanja teže sledite naslednjim korakom:

1. Na glavnem zaslonu vaše naprave VitalControl izberite meni <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` in pritisnite gumb `{{<T "Ok" >}}`.

2. Odpre se podmeni, v katerem so prikazane različne nastavitve. S puščičnimi tipkami △ ▽ izberite `{{<T "DataAcquisition" >}}`. Potrdite z `{{<T "Ok" >}}`.

3. Odpre se drug podmeni, v katerem lahko s puščičnimi tipkami △ ▽ preklapljate med nastavitvenimi polji za `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` in `{{<T "ControlPeriodFreshCows" >}}`. Izberite `{{<T "WeightRecording" >}}` in potrdite z `{{<T "Ok" >}}`.

4. Polje za nastavitev `{{<T "DailyWeightGain" >}}` je samodejno izbrano. S puščičnimi tipkami ◁ ▷ izberite želeno vrsto živali. Potrdite z `{{<T "Ok" >}}`. Alternativno lahko uporabite ikono svinčnika z `F3` tipko <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> za neposreden skok na urejanje rdečih in rumenih območij.

5. S puščičnimi tipkami △ ▽ izberite želeno povečanje "več kot" ali "enako kot" g/dan v rdečem in rumenem območju. Uporabite tipke `F2`/`F3` 🡄 🡆 ali puščične tipke ◁ ▷ za izbiro med rdečim in rumenim območjem.

6. Ko nastavite želeno povečanje "več kot" ali "enako kot" g/dan, uporabite tipko `F1` <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Exit" /> ali potrdite z `{{<T "Ok" >}}` za skok nazaj na `{{<T "DailyWeightGain" >}}`.

    ![VitalControl: meni nastavitve dnevnega pridobivanja teže](../images/dailyweightgain.png "Dnevno pridobivanje teže")

### Porodna teža {#birth-weight}

Naprava uporablja tukaj shranjeno porodno težo kot privzeto vrednost pri ustvarjanju novih živali. Da bi lahko hitreje izbrali posamezno porodno težo novorojenega živali, boste morda morali prilagoditi to privzeto vrednost za vašo kmetijo. Za prilagoditev vrednosti za `{{<T "BirthWeight" >}}`, sledite naslednjim korakom:


1. Na glavnem zaslonu vaše naprave VitalControl izberite menijsko postavko <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` in pritisnite gumb `{{<T "Ok" >}}`.

2. Odpre se podmeni, v katerem so prikazane različne nastavitve. S puščičnimi tipkami △ ▽ izberite `{{<T "DataAcquisition" >}}`. Potrdite z `{{<T "Ok" >}}`.

3. Odpre se še en podmeni, v katerem lahko s puščičnimi tipkami △ ▽ preklapljate med polji nastavitev za `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` in `{{<T "ControlPeriodFreshCows" >}}`. Izberite `{{<T "WeightRecording" >}}` in potrdite z `{{<T "Ok" >}}`.

4. S puščičnimi tipkami △ ▽ izberite polje nastavitev `{{<T "BirthWeight" >}}` in s puščičnimi tipkami ◁ ▷ nastavite želeno rojstno težo. Naprava zdaj uporablja tukaj določeno rojstno težo kot standard pri ustvarjanju novih živali. Posamezno rojstno težo novorojenega živali je nato mogoče hitreje izbrati.

    ![VitalControl: menu settings birth weight](../images/birthweight.png "Birth weight")

{{% alert title="Opozorilo" color="warning" %}}
Standardna rojstna teža je le približna vrednost, ki jo je treba individualno prilagoditi pri ustvarjanju nove živali.
Če te prilagoditve ne želite opraviti ali če živali ustvarjate samodejno [v ozadju](../animal-registration/#auto-registration), pri ustvarjanju nove živali ne bi smeli poizvedovati ali shranjevati rojstne teže. rojstne teže ne bi smeli poizvedovati ali shranjevati pri ustvarjanju nove živali. To je mogoče določiti v nastavitvah za [registracijo živali](../animal-registration/#set-recorded-weights).
{{% /alert %}}

{{% alert title="Privzete vrednosti rojstnih tež:" %}}

| Vrsta nove živali             |  Jagnje        | Tele          |
|-------------------------------|----------------|---------------| 
| Privzeta vrednost *rojstna teža*: | 4 kg           | 40 kg         |
| Razpon vrednosti :            | 1,0 do 99 kg   | 1,0 do 99 kg  |
{{% /alert %}}

### Povprečno dnevno povečanje teže {#average-daily-weight-gain}

{{% alert title="Pojasnilo" %}}
Pri [tehtanju](../../actions/record-weight/) živali se za izračun predlagane vrednosti teže med tehtanjem živali uporablja določeno dnevno povečanje. Če je predlagana vrednost teže za večino živali, ki jih je treba tehtati, prenizka ali previsoka, morate določeno vrednost ustrezno prilagoditi navzdol ali navzgor, da skrajšate čas, potreben za prilagoditev vrednosti teže s puščičnimi tipkami.
{{% /alert %}}

To set the `{{<T "AverageDailyWeightGain" >}}` used in the calculation of the approximate weight of an animal proceed as follows.

1. Na glavnem zaslonu vaše naprave VitalControl izberite menijsko postavko <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` in pritisnite gumb `{{<T "Ok" >}}`.

2. Odpre se podmeni, v katerem so prikazane različne nastavitve. S puščicama △ ▽ izberite `{{<T "DataAcquisition" >}}`. Potrdite z `{{<T "Ok" >}}`.

3. Odpre se še en podmeni, v katerem lahko s puščicama △ ▽ preklapljate med nastavitvenimi polji za `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` in `{{<T "ControlPeriodFreshCows" >}}`. Izberite `{{<T "WeightRecording" >}}` in potrdite z `{{<T "Ok" >}}`.

4. S puščicama △ ▽ izberite nastavitveno polje `{{<T "AverageDailyWeightGain" >}}`. S puščicama ◁ ▷ nastavite želeno povprečno dnevno povečanje g/dan. Naprava zdaj uporablja tukaj določeno povprečno dnevno povečanje kot standard za pričakovano dnevno povečanje živali.

    ![VitalControl: menu settings average daily weight gain](../images/averagedailyweightgain.png "Average daily weight gain")

### Natančnost beleženja teže {#precision-of-weight-recording}

{{% alert title="Explanation" %}}
Glede na primer uporabe in vrsto živali (*jagnje*, *teliček*, *krava*) obstajajo različne zahteve glede ločljivosti vrednosti teže, ki jo je treba beležiti (natančnost *10 g*, *100 g* ali *1 kg*). Da bi izpolnili te zahteve, je treba uporabiti nastavitev *Največja natančnost*.
{{% /alert %}}

Spodnja tabela prikazuje natančnost beleženja teže glede na razpon teže in določeno nastavitev za *Največja natančnost*:

| Nastavitev *Največja natančnost*:          |  10 g | 100 g | 1 kg |
|--------------------------------------------|-------|-------|------|
| Natančnost v razponu *0 do 9,9 kg*:        | 10 g  | 100 g | 1 kg |
| Natančnost v razponu *10 do 49,9 kg*:      | 100 g | 100 g | 1 kg |
| Natančnost v razponu *50 do 99,9 kg*:      | 500 g | 500 g | 1 kg |
| Natančnost za vrednosti *≥ 100 kg*:        | 1 kg  | 1 kg  | 1 kg |

Za nastavitev največje natančnosti pri beleženju teže živali z vašo napravo, sledite naslednjim korakom:

1. Na glavnem zaslonu vaše naprave VitalControl izberite meni <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` in pritisnite gumb `{{<T "Ok" >}}`.

2. Odpre se podmeni, v katerem so prikazane različne nastavitve. S puščicama △ ▽ izberite `{{<T "DataAcquisition" >}}`. Potrdite z `{{<T "Ok" >}}`.

3. Odpre se drug podmeni, v katerem lahko s puščicama △ ▽ preklapljate med nastavitvenimi polji za `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` in `{{<T "ControlPeriodFreshCows" >}}`. Izberite `{{<T "WeightRecording" >}}` in potrdite z `{{<T "Ok" >}}`.

4. S puščicama △ ▽ izberite nastavitveno polje `{{<T "MaximumPrecision" >}}`. S puščicama ◁ ▷ nastavite želeno največjo natančnost. Natančnost beleženja teže na napravi zdaj sledi določeni nastavitvi.

    ![VitalControl: menu path settings maximum precision weight recording](../images/precisionweightrecording.png "Določite največjo natančnost beleženja teže.")

<br>
Shranjene nastavitve in vrnitev v glavni meni `{{<T "DataAcquisition" >}}` dosežete s pritiskom na tipko `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.

## Način ocenjevanja živali {#mode-of-animal-rating}

{{% alert title="Pojasnilo" %}}
V enostavnem načinu se med ocenjevanjem živali preverja samo splošno stanje (zeleno/rumeno/rdeče). V razširjeni oceni se preverjajo 4 kategorije ocenjevanja: splošno stanje, poraba krme, driska in respiratorne bolezni.
{{% /alert %}}

Za nastavitev `{{<T "RatingAnimals" >}}` na vaši napravi sledite naslednjim korakom.

1. Na glavnem zaslonu vaše naprave VitalControl izberite meni <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` in pritisnite gumb `{{<T "Ok" >}}`.

2. Odpre se podmeni, v katerem so prikazane različne nastavitve. S puščicama △ ▽ izberite `{{<T "DataAcquisition" >}}`. Potrdite z `{{<T "Ok" >}}`.


3. Odpre se še en podmeni, v katerem lahko s puščicama △ ▽ preklapljate med polji nastavitev za `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` in `{{<T "ControlPeriodFreshCows" >}}`. Izberite `{{<T "RatingAnimals" >}}` in potrdite z `{{<T "Ok" >}}`.

4. S puščicama ◁ ▷ nastavite želeno oceno živali.

    ![VitalControl: nastavitve menija povprečna ocena živali](../images/raitingofanimals.png "Ocena živali")

## Kontrolno obdobje svežih krav {#control-period-of-fresh-cows}

{{% alert title="Pojasnilo" %}}
Pri upravljanju svežih krav je preverjanje živali vsak dan več dni po rojstvu, vključno z merjenjem njihove temperature, rutinska praksa. Trajanje tega kontrolnega obdobja se med kmetijami precej razlikuje. Zaradi tega je mogoče dolžino kontrolnega obdobja nastaviti na vrednost med 3 in 14 dnevi v nastavitvah VitalControl. Nastavljena vrednost za kontrolno obdobje svežih krav določa število stolpcev stolpčnega diagrama, prikazanega za vsako žival na [seznamu svežih krav](../../lists/fresh-cows/).
{{% /alert %}}

Za nastavitev dolžine kontrolnega obdobja za vaše sveže krave sledite naslednjim korakom:

1. Na glavnem zaslonu vaše naprave VitalControl izberite menijsko postavko <img src="/icons/gear.svg" width="25" align="bottom" alt="Nastavitve" /> `{{<T "Settings" >}}` in pritisnite gumb `{{<T "Ok" >}}`.

2. Odpre se podmeni, v katerem so prikazane različne nastavitve. S puščicama △ ▽ izberite `{{<T "DataAcquisition" >}}`. Potrdite z `{{<T "Ok" >}}`.

3. Odpre se še en podmeni, v katerem lahko s puščicama △ ▽ preklapljate med polji nastavitev za `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` in `{{<T "ControlPeriodFreshCows" >}}`. Izberite `{{<T "ControlPeriodFreshCows" >}}` in potrdite z `{{<T "Ok" >}}`.

4. S puščicama ◁ ▷ nastavite želeno trajanje kontrolnega obdobja v dnevih po porodu.

    ![VitalControl: nastavitve menija kontrolno obdobje svežih krav](../images/controlperiodfreshcows.png "Kontrolno obdobje svežih krav")

<br>

Shrani nastavitve in se vrni v glavni meni <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` s pritiskom na tipko `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.
