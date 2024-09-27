---
title: "Prikupljanje podataka"
linkTitle: "Prikupljanje podataka"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: data-acquisition
description: >
 Pohranjivanje relevantnih postavki za prikupljanje podataka o životinjama
categories: [settings]
tags: [settings, data acquisition]
translationKey: settings/data-acquisition
maphilight: true
---
## Pregled {#overview}

Sljedeća grafika prikazuje dostupne postavke koje se odnose na snimanje podataka o životinjama:

<img src="../images/animaldataacquisition.png" alt="Prikupljanje podataka o životinjama" title="Prikupljanje podataka o životinjama" usemap="#workmap-overview" class="maphilight" />

<map name="workmap-overview">
  <area shape="rect" coords="3,40,239,80" alt="Snimanje težine" title="Podmeni: Postavke za snimanje težine&#10;Klik mišem: otvori dokumentaciju" href="#settings-weight-recording">
  <area shape="rect" coords="3,80,239,160" alt="Način ocjenjivanja životinja" title="Postavite način ocjenjivanja životinja&#10;Klik mišem: otvori dokumentaciju" href="#mode-of-animal-rating">
  <area shape="rect" coords="3,160,239,240" alt="Dužina kontrolnog perioda za svježe krave" title="Postavite dužinu kontrolnog perioda za svježe krave&#10;Klik mišem: otvori dokumentaciju" href="#control-period-of-fresh-cows">

  <area shape="rect" coords="2,282,125,318" alt="Nazad" title="Skoči nazad jedan nivo" href="/bs/docs/settings/">
</map>

{{% alert title="Savjet" %}}
Pomjerite pokazivač miša preko simbola u donjoj grafici i zadržite ga na trenutak. Pojavit će se tooltip koji prikazuje informacije o odgovarajućoj postavci. Ako kliknete na jednu od linija, bit ćete preusmjereni na opis odgovarajuće postavke.
{{% /alert %}}

## Postavke *Snimanje težine* {#settings-weight-recording}

Sljedeća grafika prikazuje dostupne postavke koje se odnose na snimanje težine životinja:

<img src="../images/weightrecording.png" alt="Stavke podmenija postavki za snimanje težine" title="Postavke snimanja težine" usemap="#workmap-weight" class="maphilight" />

<map name="workmap-weight">
  <area shape="rect" coords="1,40,230,199" alt="Granične vrijednosti procjene dnevnog prirasta težine" title="Postavite granične vrijednosti za procjenu dnevnog prirasta težine&#10;Klik mišem: otvori dokumentaciju" href="#assessment-of-daily-weight-gain-threshold-values">
  <area shape="rect" coords="1,200,230,280" alt="Porodna težina" title="Postavite porodnu težinu koja se predlaže prilikom registracije nove životinje&#10;Klik mišem: otvori dokumentaciju" href="#birth-weight">
  <area shape="rect" coords="1,280,230,360" alt="Prosječni dnevni prirast težine" title="Postavite prosječni dnevni prirast težine koji se koristi prilikom procjene težine životinja&#10;Klik mišem: otvori dokumentaciju" href="#average-daily-weight-gain">
  <area shape="rect" coords="1,360,230,440" alt="Preciznost snimanja težine" title="Postavite preciznost snimanja težine&#10;Klik mišem: otvori dokumentaciju" href="#precision-of-weight-recording">
</map>

### Procjena dnevnog prirasta težine: Granične vrijednosti {#assessment-of-daily-weight-gain-threshold-values}

{{% alert title="Savjet" %}}
Crveno polje prikazuje područje "kritično niskog prirasta težine". Žuto polje prikazuje područje "suboptimalnog prirasta težine".
{{% /alert %}}

Da biste prilagodili granične vrijednosti za procjenu dnevnog prirasta težine, postupite na sljedeći način:

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku izbornika <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` i pritisnite dugme `{{<T "Ok" >}}`.

2. Otvara se podizbornik u kojem su prikazane razne postavke. Koristite tipke sa strelicama △ ▽ za odabir `{{<T "DataAcquisition" >}}`. Potvrdite sa `{{<T "Ok" >}}`.

3. Otvara se drugi podizbornik u kojem možete koristiti tipke sa strelicama △ ▽ za prebacivanje između polja za postavke `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` i `{{<T "ControlPeriodFreshCows" >}}`. Odaberite `{{<T "WeightRecording" >}}` i potvrdite sa `{{<T "Ok" >}}`.

4. Polje za postavke `{{<T "DailyWeightGain" >}}` automatski je odabrano. Koristite tipke sa strelicama ◁ ▷ za odabir željene vrste životinje. Potvrdite sa `{{<T "Ok" >}}`. Alternativno, možete koristiti ikonu olovke sa tipkom <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `F3` za direktan skok na uređivanje crvenih i žutih područja.

5. Koristite tipke sa strelicama △ ▽ za odabir željenog povećanja "veće od" ili "jednako" g/dan u crvenom i žutom području. Koristite tipke `F2`/`F3` 🡄 🡆 ili tipke sa strelicama ◁ ▷ za odabir između crvenih i žutih područja.

6. Kada postavite željeno povećanje "veće od" ili "jednako" g/dan, koristite tipku `F1` <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Exit" /> ili potvrdite sa `{{<T "Ok" >}}` za povratak na `{{<T "DailyWeightGain" >}}`.

    ![VitalControl: postavke izbornika dnevni prirast težine](../images/dailyweightgain.png "Dnevni prirast težine")

### Porodna težina {#birth-weight}

Uređaj koristi porodnu težinu pohranjenu ovdje u postavkama kao zadanu vrijednost prilikom kreiranja novih životinja. Da biste mogli brže odabrati pojedinačnu porodnu težinu novorođene životinje, možda ćete trebati prilagoditi ovu zadanu vrijednost za vašu farmu. Da biste prilagodili vrijednost za `{{<T "BirthWeight" >}}`, postupite na sljedeći način:

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku iz menija <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` i pritisnite dugme `{{<T "Ok" >}}`.

2. Otvara se podmeni u kojem su prikazane razne postavke. Koristite strelice △ ▽ za odabir `{{<T "DataAcquisition" >}}`. Potvrdite sa `{{<T "Ok" >}}`.

3. Otvara se još jedan podmeni u kojem možete koristiti strelice △ ▽ za prebacivanje između polja za postavke `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` i `{{<T "ControlPeriodFreshCows" >}}`. Odaberite `{{<T "WeightRecording" >}}` i potvrdite sa `{{<T "Ok" >}}`.

4. Koristite strelice △ ▽ za odabir polja za postavke `{{<T "BirthWeight" >}}` i koristite strelice ◁ ▷ za postavljanje željene težine pri rođenju. Uređaj sada koristi ovdje definiranu težinu pri rođenju kao standard prilikom kreiranja novih životinja. Pojedinačna težina pri rođenju novorođene životinje može se tada brže odabrati.

    ![VitalControl: postavke menija težina pri rođenju](../images/birthweight.png "Težina pri rođenju")

{{% alert title="Upozorenje" color="warning" %}}
Standardna težina pri rođenju je samo približna vrijednost, koja se mora pojedinačno prilagoditi prilikom kreiranja nove životinje.
Ako ne želite napraviti ovu prilagodbu ili ako automatski kreirate životinje [u pozadini](../animal-registration/#auto-registration), težina pri rođenju ne bi trebala biti upitana ili sačuvana prilikom kreiranja nove životinje. Ovo se može definirati u postavkama za [registraciju životinja](../animal-registration/#set-recorded-weights).
{{% /alert %}}

{{% alert title="Standardne vrijednosti težina pri rođenju:" %}}

| Vrsta nove životinje          |  Janje         | Tele          |
|-------------------------------|----------------|---------------| 
| Standardna vrijednost *težina pri rođenju*: | 4 kg           | 40 kg         |
| Raspon vrijednosti :          | 1,0 do 99 kg   | 1,0 do 99 kg  |
{{% /alert %}}

### Prosječni dnevni prirast težine {#average-daily-weight-gain}

{{% alert title="Objašnjenje" %}}
Prilikom [vaganja](../../actions/record-weight/) životinje, definirani dnevni prirast koristi se za izračunavanje predložene vrijednosti težine tokom vaganja životinje. Ako je predložena vrijednost težine preniska ili previsoka za većinu životinja koje se važu, trebali biste prilagoditi definiranu vrijednost prema dolje ili prema gore, kako biste skratili vrijeme potrebno za prilagođavanje vrijednosti težine pomoću strelica.
{{% /alert %}}


Da biste postavili `{{<T "AverageDailyWeightGain" >}}` koji se koristi u izračunu približne težine životinje, postupite na sljedeći način.

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku izbornika <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` i pritisnite dugme `{{<T "Ok" >}}`.

2. Otvara se podizbornik u kojem su prikazane razne postavke. Koristite tipke sa strelicama △ ▽ da odaberete `{{<T "DataAcquisition" >}}`. Potvrdite sa `{{<T "Ok" >}}`.

3. Otvara se drugi podizbornik u kojem možete koristiti tipke sa strelicama △ ▽ za prebacivanje između polja za postavke `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` i `{{<T "ControlPeriodFreshCows" >}}`. Odaberite `{{<T "WeightRecording" >}}` i potvrdite sa `{{<T "Ok" >}}`.

4. Koristite tipke sa strelicama △ ▽ da odaberete polje za postavke `{{<T "AverageDailyWeightGain" >}}`. Koristite tipke sa strelicama ◁ ▷ da postavite željeni prosječni dnevni prirast g/dan. Uređaj sada koristi ovdje definirani prosječni dnevni prirast kao standard za očekivani dnevni prirast životinja.

    ![VitalControl: postavke izbornika prosječni dnevni prirast težine](../images/averagedailyweightgain.png "Prosječni dnevni prirast težine")

### Preciznost snimanja težine {#precision-of-weight-recording}

{{% alert title="Objašnjenje" %}}
Ovisno o slučaju upotrebe i vrsti životinje (*jagnje*, *tele*, *krava*), postoje različiti zahtjevi u vezi s rezolucijom vrijednosti težine koja se snima (preciznost od *10 g*, *100 g* ili *1 kg*). Da bi se ispunili ovi zahtjevi, potrebno je koristiti postavku *Maksimalna preciznost*.
{{% /alert %}}

Tabela ispod prikazuje preciznost snimanja težine ovisno o rasponu težine i postavci propisanoj za *Maksimalna preciznost*:

| Postavka *Maksimalna preciznost*:          |  10 g | 100 g | 1 kg |
|--------------------------------------------|-------|-------|------|
| Preciznost u rasponu *0 do 9,9 kg*:        | 10 g  | 100 g | 1 kg |
| Preciznost u rasponu *10 do 49,9 kg*:      | 100 g | 100 g | 1 kg |
| Preciznost u rasponu *50 do 99,9 kg*:      | 500 g | 500 g | 1 kg |
| Preciznost za vrijednosti *≥ 100 kg*:      | 1 kg  | 1 kg  | 1 kg |

Da biste postavili maksimalnu tačnost prilikom snimanja težine životinja sa vašim uređajem, postupite na sledeći način:

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku menija <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` i pritisnite dugme `{{<T "Ok" >}}`.

2. Otvara se podmeni u kojem su prikazane razne postavke. Koristite tastere sa strelicama △ ▽ da odaberete `{{<T "DataAcquisition" >}}`. Potvrdite sa `{{<T "Ok" >}}`.

3. Otvara se još jedan podmeni u kojem možete koristiti tastere sa strelicama △ ▽ da se prebacujete između polja za postavke `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` i `{{<T "ControlPeriodFreshCows" >}}`. Odaberite `{{<T "WeightRecording" >}}` i potvrdite sa `{{<T "Ok" >}}`.

4. Koristite tastere sa strelicama △ ▽ da odaberete polje za postavke `{{<T "MaximumPrecision" >}}`. Koristite tastere sa strelicama ◁ ▷ da postavite željenu maksimalnu preciznost. Preciznost snimanja težine na uređaju sada prati postavljenu vrednost.

    ![VitalControl: putanja menija postavke maksimalne preciznosti snimanja težine](../images/precisionweightrecording.png "Postavite maksimalnu preciznost snimanja težine.")

<br>
Sačuvajte postavke i vratite se u glavni meni `{{<T "DataAcquisition" >}}` pritiskom na taster `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.

## Način ocenjivanja životinja {#mode-of-animal-rating}

{{% alert title="Objašnjenje" %}}
U jednostavnom načinu, tokom ocenjivanja životinja se ispituje samo opšte stanje (zeleno/žuto/crveno). U proširenom ocenjivanju se ispituju 4 kategorije ocenjivanja: opšte stanje, konzumacija hrane, dijareja i respiratorne bolesti.
{{% /alert %}}

Da biste postavili `{{<T "RatingAnimals" >}}` na vašem uređaju, postupite na sledeći način.

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku menija <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` i pritisnite dugme `{{<T "Ok" >}}`.

2. Otvara se podmeni u kojem su prikazane razne postavke. Koristite tastere sa strelicama △ ▽ da odaberete `{{<T "DataAcquisition" >}}`. Potvrdite sa `{{<T "Ok" >}}`.

3. Otvoriće se još jedan podmeni u kojem možete koristiti tastere sa strelicama △ ▽ za prebacivanje između polja za podešavanje za `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` i `{{<T "ControlPeriodFreshCows" >}}`. Odaberite `{{<T "RatingAnimals" >}}` i potvrdite sa `{{<T "Ok" >}}`.

4. Koristite tastere sa strelicama ◁ ▷ da postavite željenu ocjenu životinja.

    ![VitalControl: podešavanja menija prosječna ocjena životinja](../images/raitingofanimals.png "Ocjena životinja")

## Kontrolni period za svježe krave {#control-period-of-fresh-cows}

{{% alert title="Objašnjenje" %}}
Kada upravljate svježim kravama, smatra se najboljom praksom svakodnevno provjeravati životinje nekoliko dana nakon rođenja, uključujući mjerenje njihove temperature. Trajanje ovog kontrolnog perioda značajno varira od farme do farme. Iz tog razloga, dužina kontrolnog perioda može se postaviti na vrijednost između 3 i 14 dana u postavkama VitalControl-a. Postavljena vrijednost za kontrolni period svježih krava određuje broj kolona grafikona prikazanog za svaku životinju na [listi svježih krava](../../lists/fresh-cows/).
{{% /alert %}}

Da biste postavili dužinu kontrolnog perioda za vaše svježe krave, postupite na sljedeći način:

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku menija <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` i pritisnite dugme `{{<T "Ok" >}}`.

2. Otvoriće se podmeni u kojem su prikazane razne postavke. Koristite tastere sa strelicama △ ▽ da odaberete `{{<T "DataAcquisition" >}}`. Potvrdite sa `{{<T "Ok" >}}`.

3. Otvoriće se još jedan podmeni u kojem možete koristiti tastere sa strelicama △ ▽ za prebacivanje između polja za podešavanje za `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` i `{{<T "ControlPeriodFreshCows" >}}`. Odaberite `{{<T "ControlPeriodFreshCows" >}}` i potvrdite sa `{{<T "Ok" >}}`.

4. Koristite tastere sa strelicama ◁ ▷ da postavite željeno trajanje kontrolnog perioda u danima nakon porođaja.

    ![VitalControl: podešavanja menija kontrolni period svježih krava](../images/controlperiodfreshcows.png "Kontrolni period svježih krava")

<br>

Sačuvajte postavke i vratite se na glavni meni <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` pritiskom na taster `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.
