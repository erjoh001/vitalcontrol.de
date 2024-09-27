---
title: "Dataregistrering"
linkTitle: "Dataregistrering"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: data-acquisition
description: >
 Lagring av relevante innstillinger for innsamling av dyredata
categories: [settings]
tags: [settings, data acquisition]
translationKey: settings/data-acquisition
maphilight: true
---
## Oversikt {#overview}

Følgende grafikk viser de tilgjengelige innstillingene angående registrering av dyredata:

<img src="../images/animaldataacquisition.png" alt="Innsamling av dyredata" title="Innsamling av dyredata" usemap="#workmap-overview" class="maphilight" />

<map name="workmap-overview">
  <area shape="rect" coords="3,40,239,80" alt="Vektregistrering" title="Undermeny: Innstillinger for vektregistrering&#10;Museklikk: åpne dokumentasjon" href="#settings-weight-recording">
  <area shape="rect" coords="3,80,239,160" alt="Modus for dyrevurdering" title="Sett modus for dyrevurdering&#10;Museklikk: åpne dokumentasjon" href="#mode-of-animal-rating">
  <area shape="rect" coords="3,160,239,240" alt="Lengde på kontrollperiode for ferske kyr" title="Sett lengden på kontrollperioden for ferske kyr&#10;Museklikk: åpne dokumentasjon" href="#control-period-of-fresh-cows">

  <area shape="rect" coords="2,282,125,318" alt="Tilbake" title="Gå tilbake ett nivå" href="/no/docs/settings/">
</map>

{{% alert title="Hint" %}}
Flytt musepekeren over et symbol i grafikken nedenfor og la den hvile et øyeblikk. En verktøytips vises, som presenterer informasjon om den respektive innstillingen. Hvis du klikker på en av linjene, blir du videresendt til en beskrivelse av den respektive innstillingen.
{{% /alert %}}

## Innstillinger *Vektregistrering* {#settings-weight-recording}

Følgende grafikk viser de tilgjengelige innstillingene angående vektregistrering av dyr:

<img src="../images/weightrecording.png" alt="Undermenyelementer innstillinger for vektregistrering" title="Innstillinger vektregistrering" usemap="#workmap-weight" class="maphilight" />

<map name="workmap-weight">
  <area shape="rect" coords="1,40,230,199" alt="Terskelverdier vurdering daglig vektøkning" title="Sett terskelverdiene for vurdering av daglig vektøkning&#10;Museklikk: åpne dokumentasjon" href="#assessment-of-daily-weight-gain-threshold-values">
  <area shape="rect" coords="1,200,230,280" alt="Fødselsvekt" title="Sett fødselsvekten som foreslås ved registrering av et nytt dyr&#10;Museklikk: åpne dokumentasjon" href="#birth-weight">
  <area shape="rect" coords="1,280,230,360" alt="Gjennomsnittlig daglig vektøkning" title="Sett gjennomsnittlig daglig vektøkning brukt ved estimering av dyrenes vekt&#10;Museklikk: åpne dokumentasjon" href="#average-daily-weight-gain">
  <area shape="rect" coords="1,360,230,440" alt="Presisjon vektregistrering" title="Sett presisjonen for vektregistrering&#10;Museklikk: åpne dokumentasjon" href="#precision-of-weight-recording">
</map>

### Vurdering av daglig vektøkning: Terskelverdier {#assessment-of-daily-weight-gain-threshold-values}

{{% alert title="Hint" %}}
Det røde feltet viser området for "kritisk for lav vektøkning". Det gule feltet viser området for "suboptimal vektøkning".
{{% /alert %}}

For å justere terskelverdiene for vurdering av daglig vektøkning, gjør følgende:

1. På hovedskjermen på din VitalControl-enhet, velg menyvalget <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` og trykk på `{{<T "Ok" >}}`-knappen.

2. En undermeny åpnes der ulike innstillinger vises. Bruk piltastene △ ▽ for å velge `{{<T "DataAcquisition" >}}`. Bekreft med `{{<T "Ok" >}}`.

3. En annen undermeny åpnes der du kan bruke piltastene △ ▽ for å bytte mellom innstillingsfeltene for `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` og `{{<T "ControlPeriodFreshCows" >}}`. Velg `{{<T "WeightRecording" >}}` og bekreft med `{{<T "Ok" >}}`.

4. Preferansefeltet `{{<T "DailyWeightGain" >}}` er automatisk valgt. Bruk piltastene ◁ ▷ for å velge ønsket dyreart. Bekreft med `{{<T "Ok" >}}`. Alternativt kan du bruke blyantikonet med <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `F3`-tasten for å hoppe direkte til redigering av de røde og gule områdene.

5. Bruk piltastene △ ▽ for å velge ønsket "større enn" eller "lik" g/dag økning i det røde og gule området. Bruk tastene `F2`/`F3` 🡄 🡆 eller piltastene ◁ ▷ for å velge mellom de røde og gule områdene.

6. Når du har satt ønsket "større enn" eller "lik" g/dag økning, bruk `F1`-tasten <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Exit" /> eller bekreft med `{{<T "Ok" >}}` for å hoppe tilbake til `{{<T "DailyWeightGain" >}}`.

    ![VitalControl: menyinnstillinger daglig vektøkning](../images/dailyweightgain.png "Daglig vektøkning")

### Fødselsvekt {#birth-weight}

Enheten bruker fødselsvekten som er lagret her i innstillingene som standardverdi når nye dyr opprettes. For å kunne velge den individuelle fødselsvekten til et nyfødt dyr raskere, kan det være nødvendig å justere denne standardverdien for din gård. For å justere verdien for `{{<T "BirthWeight" >}}`, gjør følgende:

1. På hovedskjermen til din VitalControl-enhet, velg menyvalget <img src="/icons/gear.svg" width="25" align="bottom" alt="Innstillinger" /> `{{<T "Settings" >}}` og trykk på `{{<T "Ok" >}}`-knappen.

2. En undermeny åpnes der ulike innstillinger vises. Bruk piltastene △ ▽ for å velge `{{<T "DataAcquisition" >}}`. Bekreft med `{{<T "Ok" >}}`.

3. En annen undermeny åpnes der du kan bruke piltastene △ ▽ for å bytte mellom innstillingsfeltene for `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` og `{{<T "ControlPeriodFreshCows" >}}`. Velg `{{<T "WeightRecording" >}}` og bekreft med `{{<T "Ok" >}}`.

4. Bruk piltastene △ ▽ for å velge innstillingsfeltet `{{<T "BirthWeight" >}}` og bruk piltastene ◁ ▷ for å sette ønsket fødselsvekt. Enheten bruker nå den definerte fødselsvekten som standard ved opprettelse av nye dyr. Den individuelle fødselsvekten til et nyfødt dyr kan deretter velges raskere.

    ![VitalControl: menyinnstillinger fødselsvekt](../images/birthweight.png "Fødselsvekt")

{{% alert title="Advarsel" color="warning" %}}
Standard fødselsvekt er kun en omtrentlig verdi, som må justeres individuelt ved opprettelse av et nytt dyr.
Hvis du ikke ønsker å gjøre denne justeringen eller hvis du oppretter dyr automatisk [i bakgrunnen](../animal-registration/#auto-registration), bør ingen fødselsvekt forespørres eller lagres ved opprettelse av et nytt dyr. Dette kan defineres i innstillingene for [registrering av dyr](../animal-registration/#set-recorded-weights).
{{% /alert %}}

{{% alert title="Standardverdier fødselsvekter:" %}}

| Type nytt dyr                 |  Lam           | Kalv          |
|-------------------------------|----------------|---------------| 
| Standardverdi *fødselsvekt*:  | 4 kg           | 40 kg         |
| Verdiområde:                  | 1,0 til 99 kg  | 1,0 til 99 kg |
{{% /alert %}}

### Gjennomsnittlig daglig vektøkning {#average-daily-weight-gain}

{{% alert title="Forklaring" %}}
Når [veiing](../../actions/record-weight/) av et dyr, brukes den definerte daglige økningen for beregning av den foreslåtte vektverdien under dyreveiing. Hvis den foreslåtte vektverdien er for lav eller for høy for flertallet av dyrene som skal veies, bør du justere den definerte verdien nedover eller oppover, henholdsvis, for å forkorte tiden som trengs for å justere vektverdien med piltastene.
{{% /alert %}}

For å sette `{{<T "AverageDailyWeightGain" >}}` brukt i beregningen av den omtrentlige vekten av et dyr, gjør følgende.

1. På hovedskjermen til din VitalControl-enhet, velg menyelementet <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` og trykk på `{{<T "Ok" >}}`-knappen.

2. En undermeny åpnes der ulike innstillinger vises. Bruk piltastene △ ▽ for å velge `{{<T "DataAcquisition" >}}`. Bekreft med `{{<T "Ok" >}}`.

3. En annen undermeny åpnes der du kan bruke piltastene △ ▽ for å bytte mellom innstillingsfeltene for `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` og `{{<T "ControlPeriodFreshCows" >}}`. Velg `{{<T "WeightRecording" >}}` og bekreft med `{{<T "Ok" >}}`.

4. Bruk piltastene △ ▽ for å velge innstillingsfeltet `{{<T "AverageDailyWeightGain" >}}`. Bruk piltastene ◁ ▷ for å sette ønsket gjennomsnittlig daglig økning g/dag. Enheten bruker nå den gjennomsnittlige daglige økningen definert her som standard for den forventede daglige økningen av dyrene.

    ![VitalControl: menu settings average daily weight gain](../images/averagedailyweightgain.png "Average daily weight gain")

### Presisjon av vektregistrering {#precision-of-weight-recording}

{{% alert title="Forklaring" %}}
Avhengig av bruksområde og dyreart (*lam*, *kalv*, *ku*), er det forskjellige krav til oppløsningen av vektverdien som skal registreres (nøyaktighet på *10 g*, *100 g* eller *1 kg*). For å oppfylle disse kravene må man bruke innstillingen *Maksimal nøyaktighet*.
{{% /alert %}}

Tabellen nedenfor viser presisjonen av vektregistrering avhengig av vektområdet og innstillingen fastsatt for *Maksimal nøyaktighet*:

| Innstilling *Maksimal presisjon*:          |  10 g | 100 g | 1 kg |
|--------------------------------------------|-------|-------|------|
| Presisjon i området *0 til 9,9 kg*:        | 10 g  | 100 g | 1 kg |
| Presisjon i området *10 til 49,9 kg*:      | 100 g | 100 g | 1 kg |
| Presisjon i området *50 til 99,9 kg*:      | 500 g | 500 g | 1 kg |
| Presisjon for verdier *≥ 100 kg*:          | 1 kg  | 1 kg  | 1 kg |

For å sette maksimal nøyaktighet når du registrerer dyrevekter med enheten din, gjør følgende:

1. På hovedskjermen til din VitalControl-enhet, velg menyelementet <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` og trykk på `{{<T "Ok" >}}`-knappen.

2. En undermeny åpnes der ulike innstillinger vises. Bruk piltastene △ ▽ for å velge `{{<T "DataAcquisition" >}}`. Bekreft med `{{<T "Ok" >}}`.

3. En annen undermeny åpnes der du kan bruke piltastene △ ▽ for å bytte mellom innstillingsfeltene for `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` og `{{<T "ControlPeriodFreshCows" >}}`. Velg `{{<T "WeightRecording" >}}` og bekreft med `{{<T "Ok" >}}`.

4. Bruk piltastene △ ▽ for å velge innstillingsfeltet `{{<T "MaximumPrecision" >}}`. Bruk piltastene ◁ ▷ for å sette ønsket maksimal presisjon. Presisjonen av vektregistreringen på enheten følger nå den fastsatte innstillingen.

    ![VitalControl: menyvei innstillinger maksimal presisjon vektregistrering](../images/precisionweightrecording.png "Fastsett maksimal presisjon for vektregistrering.")

<br>
Lagre innstillingene og gå tilbake til toppmenyen `{{<T "DataAcquisition" >}}` ved å trykke på `F1`-tasten &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Lagre og gå tilbake" />&nbsp;.

## Modus for dyrevurdering {#mode-of-animal-rating}

{{% alert title="Forklaring" %}}
I enkel modus blir kun den generelle tilstanden spurt om under dyrevurderingen (grønn/gul/rød). I utvidet vurdering blir 4 vurderingskategorier spurt om: generell tilstand, fôropptak, diaré og luftveissykdom.
{{% /alert %}}

For å sette `{{<T "RatingAnimals" >}}` på enheten din, gjør følgende.

1. På hovedskjermen til din VitalControl-enhet, velg menyelementet <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` og trykk på `{{<T "Ok" >}}`-knappen.

2. En undermeny åpnes der ulike innstillinger vises. Bruk piltastene △ ▽ for å velge `{{<T "DataAcquisition" >}}`. Bekreft med `{{<T "Ok" >}}`.


3. En annen undermeny åpnes der du kan bruke piltastene △ ▽ for å bytte mellom innstillingsfeltene for `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` og `{{<T "ControlPeriodFreshCows" >}}`. Velg `{{<T "RatingAnimals" >}}` og bekreft med `{{<T "Ok" >}}`.

4. Bruk piltastene ◁ ▷ for å sette ønsket vurdering av dyrene.

    ![VitalControl: menyinnstillinger gjennomsnittlig vurdering av dyr](../images/raitingofanimals.png "Vurdering av dyr")

## Kontrollperiode for nykalvede kyr {#control-period-of-fresh-cows}

{{% alert title="Forklaring" %}}
Når man håndterer nykalvede kyr, anses det som en beste praksis rutine å sjekke dyrene daglig i flere dager etter fødsel, inkludert å ta temperaturen deres. Varigheten av denne kontrollperioden varierer betydelig fra gård til gård. Av denne grunn kan lengden på kontrollperioden settes til en verdi mellom 3 og 14 dager i VitalControl-innstillingene. Den innstilte verdien for kontrollperioden for nykalvede kyr bestemmer antall kolonner i søylediagrammet som vises for hvert dyr i [nykalvede kyr listen](../../lists/fresh-cows/).
{{% /alert %}}

For å sette lengden på kontrollperioden for dine nykalvede kyr, gjør følgende:

1. På hovedskjermen til din VitalControl-enhet, velg menyelementet <img src="/icons/gear.svg" width="25" align="bottom" alt="Innstillinger" /> `{{<T "Settings" >}}` og trykk på `{{<T "Ok" >}}`-knappen.

2. En undermeny åpnes der ulike innstillinger vises. Bruk piltastene △ ▽ for å velge `{{<T "DataAcquisition" >}}`. Bekreft med `{{<T "Ok" >}}`.

3. En annen undermeny åpnes der du kan bruke piltastene △ ▽ for å bytte mellom innstillingsfeltene for `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` og `{{<T "ControlPeriodFreshCows" >}}`. Velg `{{<T "ControlPeriodFreshCows" >}}` og bekreft med `{{<T "Ok" >}}`.

4. Bruk piltastene ◁ ▷ for å sette ønsket varighet av kontrollperioden i dager etter fødsel.

    ![VitalControl: menyinnstillinger kontrollperiode nykalvede kyr](../images/controlperiodfreshcows.png "Kontrollperiode nykalvede kyr")

<br>

Lagre innstillingene og gå tilbake til hovedmenyen <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` ved å trykke på `F1`-tasten &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.
