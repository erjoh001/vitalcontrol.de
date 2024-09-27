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

Sljedeća grafika prikazuje dostupne postavke vezane uz snimanje podataka o životinjama:

<img src="../images/animaldataacquisition.png" alt="Prikupljanje podataka o životinjama" title="Prikupljanje podataka o životinjama" usemap="#workmap-overview" class="maphilight" />

<map name="workmap-overview">
  <area shape="rect" coords="3,40,239,80" alt="Snimanje težine" title="Podizbornik: Postavke za snimanje težine&#10;Klik mišem: otvori dokumentaciju" href="#settings-weight-recording">
  <area shape="rect" coords="3,80,239,160" alt="Način ocjenjivanja životinja" title="Postavite način ocjenjivanja životinja&#10;Klik mišem: otvori dokumentaciju" href="#mode-of-animal-rating">
  <area shape="rect" coords="3,160,239,240" alt="Duljina kontrolnog razdoblja za svježe krave" title="Postavite duljinu kontrolnog razdoblja za svježe krave&#10;Klik mišem: otvori dokumentaciju" href="#control-period-of-fresh-cows">

  <area shape="rect" coords="2,282,125,318" alt="Natrag" title="Povratak na prethodnu razinu" href="/hr/docs/settings/">
</map>

{{% alert title="Savjet" %}}
Pomaknite pokazivač miša preko simbola u donjoj grafici i ostavite ga na trenutak. Pojavit će se alatni savjet koji prikazuje informacije o odgovarajućoj postavci. Ako kliknete na jednu od linija, bit ćete preusmjereni na opis odgovarajuće postavke.
{{% /alert %}}

## Postavke *Snimanje težine* {#settings-weight-recording}

Sljedeća grafika prikazuje dostupne postavke vezane uz snimanje težine životinja:

<img src="../images/weightrecording.png" alt="Stavke podizbornika postavki za snimanje težine" title="Postavke snimanja težine" usemap="#workmap-weight" class="maphilight" />

<map name="workmap-weight">
  <area shape="rect" coords="1,40,230,199" alt="Granične vrijednosti procjene dnevnog prirasta težine" title="Postavite granične vrijednosti za procjenu dnevnog prirasta težine&#10;Klik mišem: otvori dokumentaciju" href="#assessment-of-daily-weight-gain-threshold-values">
  <area shape="rect" coords="1,200,230,280" alt="Porodna težina" title="Postavite predloženu porodnu težinu prilikom registracije nove životinje&#10;Klik mišem: otvori dokumentaciju" href="#birth-weight">
  <area shape="rect" coords="1,280,230,360" alt="Prosječni dnevni prirast težine" title="Postavite prosječni dnevni prirast težine koji se koristi pri procjeni težine životinja&#10;Klik mišem: otvori dokumentaciju" href="#average-daily-weight-gain">
  <area shape="rect" coords="1,360,230,440" alt="Preciznost snimanja težine" title="Postavite preciznost snimanja težine&#10;Klik mišem: otvori dokumentaciju" href="#precision-of-weight-recording">
</map>

### Procjena dnevnog prirasta težine: Granične vrijednosti {#assessment-of-daily-weight-gain-threshold-values}

{{% alert title="Savjet" %}}
Crveno polje prikazuje područje "kritično preniskog prirasta težine". Žuto polje prikazuje područje "suboptimalnog prirasta težine".
{{% /alert %}}

Kako biste prilagodili granične vrijednosti za procjenu dnevnog prirasta težine, postupite na sljedeći način:

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku izbornika <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` i pritisnite gumb `{{<T "Ok" >}}`.

2. Otvorit će se podizbornik u kojem su prikazane razne postavke. Koristite tipke sa strelicama △ ▽ za odabir `{{<T "DataAcquisition" >}}`. Potvrdite s `{{<T "Ok" >}}`.

3. Otvorit će se još jedan podizbornik u kojem možete koristiti tipke sa strelicama △ ▽ za prebacivanje između polja za postavke `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` i `{{<T "ControlPeriodFreshCows" >}}`. Odaberite `{{<T "WeightRecording" >}}` i potvrdite s `{{<T "Ok" >}}`.

4. Polje za postavke `{{<T "DailyWeightGain" >}}` automatski je odabrano. Koristite tipke sa strelicama ◁ ▷ za odabir željene vrste životinje. Potvrdite s `{{<T "Ok" >}}`. Alternativno, možete koristiti ikonu olovke s tipkom <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `F3` za izravan skok na uređivanje crvenih i žutih područja.

5. Koristite tipke sa strelicama △ ▽ za odabir željenog povećanja "veće od" ili "jednako" g/dan u crvenom i žutom području. Koristite tipke `F2`/`F3` 🡄 🡆 ili tipke sa strelicama ◁ ▷ za odabir između crvenog i žutog područja.

6. Nakon što ste postavili željeno povećanje "veće od" ili "jednako" g/dan, koristite tipku `F1` <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Exit" /> ili potvrdite s `{{<T "Ok" >}}` za povratak na `{{<T "DailyWeightGain" >}}`.

    ![VitalControl: postavke izbornika dnevni prirast težine](../images/dailyweightgain.png "Dnevni prirast težine")

### Porodna težina {#birth-weight}

Uređaj koristi ovdje pohranjenu porođajnu težinu kao zadanu vrijednost prilikom kreiranja novih životinja. Kako biste mogli brže odabrati pojedinačnu porođajnu težinu novorođene životinje, možda ćete trebati prilagoditi ovu zadanu vrijednost za svoju farmu. Da biste prilagodili vrijednost za `{{<T "BirthWeight" >}}`, postupite na sljedeći način:

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku izbornika <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` i pritisnite gumb `{{<T "Ok" >}}`.

2. Otvara se podizbornik u kojem su prikazane razne postavke. Koristite tipke sa strelicama △ ▽ za odabir `{{<T "DataAcquisition" >}}`. Potvrdite s `{{<T "Ok" >}}`.

3. Otvara se drugi podizbornik u kojem možete koristiti tipke sa strelicama △ ▽ za prebacivanje između polja za postavke `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` i `{{<T "ControlPeriodFreshCows" >}}`. Odaberite `{{<T "WeightRecording" >}}` i potvrdite s `{{<T "Ok" >}}`.

4. Koristite tipke sa strelicama △ ▽ za odabir polja za postavke `{{<T "BirthWeight" >}}` i koristite tipke sa strelicama ◁ ▷ za postavljanje željene težine pri rođenju. Uređaj sada koristi ovdje definiranu težinu pri rođenju kao standard prilikom kreiranja novih životinja. Pojedinačna težina pri rođenju novorođene životinje tada se može brže odabrati.

    ![VitalControl: postavke izbornika težina pri rođenju](../images/birthweight.png "Težina pri rođenju")

{{% alert title="Upozorenje" color="warning" %}}
Standardna težina pri rođenju je samo približna vrijednost, koja se mora pojedinačno prilagoditi prilikom kreiranja nove životinje.
Ako ne želite izvršiti ovu prilagodbu ili ako automatski kreirate životinje [u pozadini](../animal-registration/#auto-registration), težina pri rođenju ne bi trebala biti upitana ili spremljena prilikom kreiranja nove životinje. težina pri rođenju ne bi trebala biti upitana ili spremljena prilikom kreiranja nove životinje. Ovo se može definirati u postavkama za [registraciju životinja](../animal-registration/#set-recorded-weights).
{{% /alert %}}

{{% alert title="Standardne vrijednosti težina pri rođenju:" %}}

| Vrsta nove životinje          |  Janje         | Tele          |
|-------------------------------|----------------|---------------| 
| Standardna vrijednost *težina pri rođenju*: | 4 kg           | 40 kg         |
| Raspon vrijednosti :          | 1,0 do 99 kg   | 1,0 do 99 kg  |
{{% /alert %}}

### Prosječni dnevni prirast težine {#average-daily-weight-gain}

{{% alert title="Objašnjenje" %}}
Prilikom [vaganja](../../actions/record-weight/) životinje, definirani dnevni prirast koristi se za izračun predložene vrijednosti težine tijekom vaganja životinje. Ako je predložena vrijednost težine preniska ili previsoka za većinu životinja koje se važu, trebali biste prilagoditi definiranu vrijednost prema dolje ili prema gore, kako biste skratili vrijeme potrebno za prilagodbu vrijednosti težine pomoću tipki sa strelicama.
{{% /alert %}}

Za postavljanje `{{<T "AverageDailyWeightGain" >}}` koji se koristi u izračunu približne težine životinje, postupite na sljedeći način.

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku izbornika <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` i pritisnite gumb `{{<T "Ok" >}}`.

2. Otvorit će se podizbornik u kojem su prikazane razne postavke. Koristite tipke sa strelicama △ ▽ za odabir `{{<T "DataAcquisition" >}}`. Potvrdite s `{{<T "Ok" >}}`.

3. Otvorit će se još jedan podizbornik u kojem možete koristiti tipke sa strelicama △ ▽ za prebacivanje između polja za postavke `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` i `{{<T "ControlPeriodFreshCows" >}}`. Odaberite `{{<T "WeightRecording" >}}` i potvrdite s `{{<T "Ok" >}}`.

4. Koristite tipke sa strelicama △ ▽ za odabir polja za postavke `{{<T "AverageDailyWeightGain" >}}`. Koristite tipke sa strelicama ◁ ▷ za postavljanje željenog prosječnog dnevnog povećanja g/dan. Uređaj sada koristi ovdje definirani prosječni dnevni prirast kao standard za očekivani dnevni prirast životinja.

    ![VitalControl: postavke izbornika prosječni dnevni prirast težine](../images/averagedailyweightgain.png "Prosječni dnevni prirast težine")

### Preciznost snimanja težine {#precision-of-weight-recording}

{{% alert title="Objašnjenje" %}}
Ovisno o slučaju upotrebe i vrsti životinje (*janjad*, *tele*, *krava*), postoje različiti zahtjevi u vezi s rezolucijom vrijednosti težine koja se bilježi (točnost od *10 g*, *100 g* ili *1 kg*). Da bi se ispunili ti zahtjevi, potrebno je koristiti postavku *Maksimalna točnost*.
{{% /alert %}}

Tablica ispod prikazuje preciznost snimanja težine ovisno o rasponu težine i postavci određene za *Maksimalnu točnost*:

| Postavka *Maksimalna preciznost*:          |  10 g | 100 g | 1 kg |
|--------------------------------------------|-------|-------|------|
| Preciznost u rasponu *0 do 9,9 kg*:        | 10 g  | 100 g | 1 kg |
| Preciznost u rasponu *10 do 49,9 kg*:      | 100 g | 100 g | 1 kg |
| Preciznost u rasponu *50 do 99,9 kg*:      | 500 g | 500 g | 1 kg |
| Preciznost za vrijednosti *≥ 100 kg*:      | 1 kg  | 1 kg  | 1 kg |


Za postavljanje maksimalne preciznosti pri bilježenju težine životinja pomoću vašeg uređaja, postupite na sljedeći način:

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku izbornika <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` i pritisnite gumb `{{<T "Ok" >}}`.

2. Otvorit će se podizbornik u kojem su prikazane razne postavke. Koristite tipke sa strelicama △ ▽ za odabir `{{<T "DataAcquisition" >}}`. Potvrdite s `{{<T "Ok" >}}`.

3. Otvorit će se drugi podizbornik u kojem možete koristiti tipke sa strelicama △ ▽ za prebacivanje između polja za postavke `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` i `{{<T "ControlPeriodFreshCows" >}}`. Odaberite `{{<T "WeightRecording" >}}` i potvrdite s `{{<T "Ok" >}}`.

4. Koristite tipke sa strelicama △ ▽ za odabir polja za postavke `{{<T "MaximumPrecision" >}}`. Koristite tipke sa strelicama ◁ ▷ za postavljanje željene maksimalne preciznosti. Preciznost bilježenja težine na uređaju sada slijedi postavljenu vrijednost.

    ![VitalControl: putanja izbornika postavke maksimalne preciznosti bilježenja težine](../images/precisionweightrecording.png "Postavite maksimalnu preciznost bilježenja težine.")

<br>
Spremite postavke i vratite se u glavni izbornik `{{<T "DataAcquisition" >}}` pritiskom na tipku `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.

## Način ocjenjivanja životinja {#mode-of-animal-rating}

{{% alert title="Objašnjenje" %}}
U jednostavnom načinu rada, tijekom ocjenjivanja životinja upituje se samo opće stanje (zeleno/žuto/crveno). U proširenom ocjenjivanju, upituju se 4 kategorije ocjenjivanja: opće stanje, konzumacija hrane, proljev i respiratorne bolesti.
{{% /alert %}}

Za postavljanje `{{<T "RatingAnimals" >}}` na vašem uređaju postupite na sljedeći način.

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku izbornika <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` i pritisnite gumb `{{<T "Ok" >}}`.

2. Otvorit će se podizbornik u kojem su prikazane razne postavke. Koristite tipke sa strelicama △ ▽ za odabir `{{<T "DataAcquisition" >}}`. Potvrdite s `{{<T "Ok" >}}`.

3. Otvorit će se još jedan podizbornik u kojem možete koristiti tipke sa strelicama △ ▽ za prebacivanje između polja za postavke za `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` i `{{<T "ControlPeriodFreshCows" >}}`. Odaberite `{{<T "RatingAnimals" >}}` i potvrdite s `{{<T "Ok" >}}`.

4. Koristite tipke sa strelicama ◁ ▷ za postavljanje željene ocjene životinja.

    ![VitalControl: postavke izbornika prosječna ocjena životinja](../images/raitingofanimals.png "Ocjena životinja")

## Kontrolno razdoblje svježih krava {#control-period-of-fresh-cows}

{{% alert title="Objašnjenje" %}}
Prilikom upravljanja svježim kravama, smatra se najboljom praksom svakodnevno provjeravati životinje nekoliko dana nakon poroda, uključujući mjerenje njihove temperature. Trajanje ovog kontrolnog razdoblja značajno varira od farme do farme. Iz tog razloga, duljina kontrolnog razdoblja može se postaviti na vrijednost između 3 i 14 dana u postavkama VitalControl-a. Postavljena vrijednost za kontrolno razdoblje svježih krava određuje broj stupaca stupčastog grafikona prikazanog za svaku životinju na [popisu svježih krava](../../lists/fresh-cows/).
{{% /alert %}}

Za postavljanje duljine kontrolnog razdoblja za vaše svježe krave postupite na sljedeći način:

1. Na glavnom zaslonu vašeg VitalControl uređaja, odaberite stavku izbornika <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` i pritisnite gumb `{{<T "Ok" >}}`.

2. Otvorit će se podizbornik u kojem su prikazane razne postavke. Koristite tipke sa strelicama △ ▽ za odabir `{{<T "DataAcquisition" >}}`. Potvrdite s `{{<T "Ok" >}}`.

3. Otvorit će se još jedan podizbornik u kojem možete koristiti tipke sa strelicama △ ▽ za prebacivanje između polja za postavke za `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` i `{{<T "ControlPeriodFreshCows" >}}`. Odaberite `{{<T "ControlPeriodFreshCows" >}}` i potvrdite s `{{<T "Ok" >}}`.

4. Koristite tipke sa strelicama ◁ ▷ za postavljanje željenog trajanja kontrolnog razdoblja u danima nakon poroda.

    ![VitalControl: postavke izbornika kontrolno razdoblje svježih krava](../images/controlperiodfreshcows.png "Kontrolno razdoblje svježih krava")

<br>

Spremite postavke i vratite se na glavni izbornik <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` pritiskom na tipku `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.
