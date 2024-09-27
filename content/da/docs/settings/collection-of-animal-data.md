---
title: "Dataindsamling"
linkTitle: "Dataindsamling"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: data-acquisition
description: >
 Opbevaring af relevante indstillinger for dyredataindsamling
kategorier: [settings]
tags: [settings, data acquisition]
translationKey: settings/data-acquisition
maphilight: true
---
## Oversigt {#overview}

Følgende grafik viser de tilgængelige indstillinger vedrørende registrering af dyredata:

<img src="../images/animaldataacquisition.png" alt="Indsamling af dyredata" title="Indsamling af dyredata" usemap="#workmap-overview" class="maphilight" />

<map name="workmap-overview">
  <area shape="rect" coords="3,40,239,80" alt="Vægtregistrering" title="Undermenu: Indstillinger for vægtregistrering&#10;Museklik: åbn dokumentation" href="#settings-weight-recording">
  <area shape="rect" coords="3,80,239,160" alt="Dyrevurderingsmetode" title="Indstil dyrevurderingsmetoden&#10;Museklik: åbn dokumentation" href="#mode-of-animal-rating">
  <area shape="rect" coords="3,160,239,240" alt="Kontrolperiode for nykælvere" title="Indstil længden af kontrolperioden for nykælvere&#10;Museklik: åbn dokumentation" href="#control-period-of-fresh-cows">

  <area shape="rect" coords="2,282,125,318" alt="Tilbage" title="Hop et niveau tilbage" href="/da/docs/settings/">
</map>

{{% alert title="Hint" %}}
Flyt musemarkøren over et symbol i grafikken nedenfor og lad den hvile et øjeblik. En værktøjstip vises, som præsenterer information om den respektive indstilling. Hvis du klikker på en af linjerne, vil du blive videresendt til en beskrivelse af den respektive indstilling.
{{% /alert %}}

## Indstillinger *Vægtregistrering* {#settings-weight-recording}

Følgende grafik viser de tilgængelige indstillinger vedrørende vægtregistrering af dyr:

<img src="../images/weightrecording.png" alt="Undermenu elementer indstillinger for vægtregistrering" title="Indstillinger vægtregistrering" usemap="#workmap-weight" class="maphilight" />

<map name="workmap-weight">
  <area shape="rect" coords="1,40,230,199" alt="Tærskelværdier vurdering daglig vægtøgning" title="Indstil tærskelværdierne for vurdering af den daglige vægtøgning&#10;Museklik: åbn dokumentation" href="#assessment-of-daily-weight-gain-threshold-values">
  <area shape="rect" coords="1,200,230,280" alt="Fødselsvægt" title="Indstil den foreslåede fødselsvægt ved registrering af et nyt dyr&#10;Museklik: åbn dokumentation" href="#birth-weight">
  <area shape="rect" coords="1,280,230,360" alt="Gennemsnitlig daglig vægtøgning" title="Indstil den gennemsnitlige daglige vægtøgning brugt ved estimering af dyrenes vægt&#10;Museklik: åbn dokumentation" href="#average-daily-weight-gain">
  <area shape="rect" coords="1,360,230,440" alt="Præcision vægtregistrering" title="Indstil præcisionen af vægtregistreringen&#10;Museklik: åbn dokumentation" href="#precision-of-weight-recording">
</map>

### Vurdering af daglig vægtøgning: Tærskelværdier {#assessment-of-daily-weight-gain-threshold-values}

{{% alert title="Hint" %}}
Det røde felt viser området "kritisk for lav vægtøgning". Det gule felt viser området "suboptimal vægtøgning".
{{% /alert %}}

For at justere tærskelværdierne for vurdering af den daglige vægtøgning, skal du gøre følgende:

1. På hovedskærmen på din VitalControl-enhed skal du vælge menupunktet <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` og trykke på knappen `{{<T "Ok" >}}`.

2. En undermenu åbnes, hvor forskellige indstillinger vises. Brug piletasterne △ ▽ til at vælge `{{<T "DataAcquisition" >}}`. Bekræft med `{{<T "Ok" >}}`.

3. En anden undermenu åbnes, hvor du kan bruge piletasterne △ ▽ til at skifte mellem indstillingsfelterne for `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` og `{{<T "ControlPeriodFreshCows" >}}`. Vælg `{{<T "WeightRecording" >}}` og bekræft med `{{<T "Ok" >}}`.

4. Præferencefeltet `{{<T "DailyWeightGain" >}}` er automatisk valgt. Brug piletasterne ◁ ▷ til at vælge den ønskede dyreart. Bekræft med `{{<T "Ok" >}}`. Alternativt kan du bruge blyantikonet med <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `F3`-tasten til at springe direkte til redigering af de røde og gule områder.

5. Brug piletasterne △ ▽ til at vælge den ønskede "større end" eller "lig med" g/dag stigning i det røde og gule område. Brug tasterne `F2`/`F3` 🡄 🡆 eller piletasterne ◁ ▷ til at vælge mellem de røde og gule områder.

6. Når du har indstillet den ønskede "større end" eller "lig med" g/dag stigning, skal du bruge `F1`-tasten <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Exit" /> eller bekræfte med `{{<T "Ok" >}}` for at springe tilbage til `{{<T "DailyWeightGain" >}}`.

    ![VitalControl: menuindstillinger daglig vægtøgning](../images/dailyweightgain.png "Daglig vægtøgning")

### Fødselsvægt {#birth-weight}

Enheden bruger den fødselsvægt, der er gemt her i indstillingerne, som standardværdi, når der oprettes nye dyr. For at kunne vælge den individuelle fødselsvægt for et nyfødt dyr hurtigere, kan det være nødvendigt at justere denne standardværdi for din gård. For at justere værdien for `{{<T "BirthWeight" >}}`, skal du gøre følgende:

1. På hovedskærmen på din VitalControl-enhed skal du vælge menupunktet <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` og trykke på `{{<T "Ok" >}}` knappen.

2. En undermenu åbnes, hvor forskellige indstillinger vises. Brug piletasterne △ ▽ til at vælge `{{<T "DataAcquisition" >}}`. Bekræft med `{{<T "Ok" >}}`.

3. En anden undermenu åbnes, hvor du kan bruge piletasterne △ ▽ til at skifte mellem indstillingsfelterne for `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` og `{{<T "ControlPeriodFreshCows" >}}`. Vælg `{{<T "WeightRecording" >}}` og bekræft med `{{<T "Ok" >}}`.

4. Brug piletasterne △ ▽ til at vælge indstillingsfeltet `{{<T "BirthWeight" >}}` og brug piletasterne ◁ ▷ til at indstille den ønskede fødselsvægt. Enheden bruger nu den her definerede fødselsvægt som standard ved oprettelse af nye dyr. Den individuelle fødselsvægt for et nyfødt dyr kan derefter vælges hurtigere.

    ![VitalControl: menu settings birth weight](../images/birthweight.png "Birth weight")

{{% alert title="Advarsel" color="warning" %}}
Standard fødselsvægten er kun en omtrentlig værdi, som skal justeres individuelt ved oprettelse af et nyt dyr.
Hvis du ikke ønsker at foretage denne justering, eller hvis du opretter dyr automatisk [i baggrunden](../animal-registration/#auto-registration), bør der ikke forespørges eller gemmes nogen fødselsvægt ved oprettelse af et nyt dyr. Dette kan defineres i indstillingerne for [registrering af dyr](../animal-registration/#set-recorded-weights).
{{% /alert %}}

{{% alert title="Standardværdier fødselsvægte:" %}}

| Type af nyt dyr               |  Lam           | Kalv          |
|-------------------------------|----------------|---------------| 
| Standardværdi *fødselsvægt*:  | 4 kg           | 40 kg         |
| Værdiområde:                  | 1,0 til 99 kg  | 1,0 til 99 kg |
{{% /alert %}}

### Gennemsnitlig daglig vægtforøgelse {#average-daily-weight-gain}

{{% alert title="Forklaring" %}}
Når [vejning](../../actions/record-weight/) af et dyr, bruges den definerede daglige forøgelse til beregning af den foreslåede vægtværdi under vejning af dyret. Hvis den foreslåede vægtværdi er for lav eller for høj for størstedelen af de dyr, der skal vejes, bør du justere den definerede værdi nedad eller opad for at forkorte den tid, der er nødvendig for at justere vægtværdien med piletasterne.
{{% /alert %}}

For at indstille `{{<T "AverageDailyWeightGain" >}}` brugt i beregningen af den omtrentlige vægt af et dyr, skal du gøre følgende.

1. På hovedskærmen af din VitalControl-enhed, vælg menupunktet <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` og tryk på `{{<T "Ok" >}}` knappen.

2. En undermenu åbnes, hvor forskellige indstillinger vises. Brug piletasterne △ ▽ til at vælge `{{<T "DataAcquisition" >}}`. Bekræft med `{{<T "Ok" >}}`.

3. En anden undermenu åbnes, hvor du kan bruge piletasterne △ ▽ til at skifte mellem indstillingsfelterne for `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` og `{{<T "ControlPeriodFreshCows" >}}`. Vælg `{{<T "WeightRecording" >}}` og bekræft med `{{<T "Ok" >}}`.

4. Brug piletasterne △ ▽ til at vælge indstillingsfeltet `{{<T "AverageDailyWeightGain" >}}`. Brug piletasterne ◁ ▷ til at indstille den ønskede gennemsnitlige daglige vægtøgning g/dag. Enheden bruger nu den her definerede gennemsnitlige daglige vægtøgning som standard for den forventede daglige vægtøgning af dyrene.

    ![VitalControl: menuindstillinger gennemsnitlig daglig vægtøgning](../images/averagedailyweightgain.png "Gennemsnitlig daglig vægtøgning")

### Præcision af vægtregistrering {#precision-of-weight-recording}

{{% alert title="Forklaring" %}}
Afhængigt af anvendelsestilfældet og dyrearten (*lam*, *kalv*, *ko*), er der forskellige krav til opløsningen af den vægtværdi, der skal registreres (nøjagtighed på *10 g*, *100 g* eller *1 kg*). For at opfylde disse krav skal man bruge indstillingen *Maksimal nøjagtighed*.
{{% /alert %}}

Tabellen nedenfor viser præcisionen af vægtregistreringen afhængigt af vægtområdet og den indstilling, der er fastsat for *Maksimal nøjagtighed*:

| Indstilling *Maksimal præcision*:          |  10 g | 100 g | 1 kg |
|--------------------------------------------|-------|-------|------|
| Præcision i området *0 til 9,9 kg*:        | 10 g  | 100 g | 1 kg |
| Præcision i området *10 til 49,9 kg*:      | 100 g | 100 g | 1 kg |
| Præcision i området *50 til 99,9 kg*:      | 500 g | 500 g | 1 kg |
| Præcision for værdier *≥ 100 kg*:          | 1 kg  | 1 kg  | 1 kg |

For at indstille den maksimale nøjagtighed ved registrering af dyrevægte med din enhed, skal du gøre følgende:

1. På hovedskærmen på din VitalControl-enhed skal du vælge menupunktet <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` og trykke på `{{<T "Ok" >}}` knappen.

2. En undermenu åbnes, hvor forskellige indstillinger vises. Brug piletasterne △ ▽ til at vælge `{{<T "DataAcquisition" >}}`. Bekræft med `{{<T "Ok" >}}`.

3. En anden undermenu åbnes, hvor du kan bruge piletasterne △ ▽ til at skifte mellem indstillingsfelterne for `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` og `{{<T "ControlPeriodFreshCows" >}}`. Vælg `{{<T "WeightRecording" >}}` og bekræft med `{{<T "Ok" >}}`.

4. Brug piletasterne △ ▽ til at vælge indstillingsfeltet `{{<T "MaximumPrecision" >}}`. Brug piletasterne ◁ ▷ til at indstille den ønskede maksimale præcision. Præcisionen af vægtregistreringen på enheden følger nu den fastsatte indstilling.

    ![VitalControl: menu path settings maximum precision weight recording](../images/precisionweightrecording.png "Stipuler maksimal præcision af vægtregistrering.")

<br>
Gem indstillingerne og vend tilbage til topmenuen `{{<T "DataAcquisition" >}}` ved at trykke på `F1` tasten &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.

## Mode of animal rating {#mode-of-animal-rating}

{{% alert title="Explanation" %}}
I den simple tilstand bliver kun den generelle tilstand spurgt under dyreevalueringen (grøn/gul/rød). I den udvidede evaluering bliver 4 evalueringskategorier spurgt: generel tilstand, foderforbrug, diarré og luftvejssygdom.
{{% /alert %}}

For at indstille `{{<T "RatingAnimals" >}}` på din enhed skal du gøre følgende.

1. På hovedskærmen på din VitalControl-enhed skal du vælge menupunktet <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` og trykke på `{{<T "Ok" >}}` knappen.

2. En undermenu åbnes, hvor forskellige indstillinger vises. Brug piletasterne △ ▽ til at vælge `{{<T "DataAcquisition" >}}`. Bekræft med `{{<T "Ok" >}}`.


3. En anden undermenu åbnes, hvor du kan bruge piletasterne △ ▽ til at skifte mellem indstillingsfelterne for `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` og `{{<T "ControlPeriodFreshCows" >}}`. Vælg `{{<T "RatingAnimals" >}}` og bekræft med `{{<T "Ok" >}}`.

4. Brug piletasterne ◁ ▷ til at indstille den ønskede vurdering af dyrene.

    ![VitalControl: menuindstillinger gennemsnitlig vurdering af dyr](../images/raitingofanimals.png "Vurdering af dyr")

## Kontrolperiode for nykælvere {#control-period-of-fresh-cows}

{{% alert title="Forklaring" %}}
Når man håndterer nykælvere, betragtes det som en bedste praksis rutine at kontrollere dyrene dagligt i flere dage efter fødslen, herunder at tage deres temperatur. Varigheden af denne kontrolperiode varierer betydeligt fra gård til gård. Af denne grund kan længden af kontrolperioden indstilles til en værdi mellem 3 og 14 dage i VitalControl-indstillingerne. Den indstillede værdi for kontrolperioden for nykælvere bestemmer antallet af kolonner i søjlediagrammet, der vises for hvert dyr på [nykælverlisten](../../lists/fresh-cows/).
{{% /alert %}}

For at indstille længden af kontrolperioden for dine nykælvere skal du gøre følgende:

1. På hovedskærmen på din VitalControl-enhed skal du vælge menupunktet <img src="/icons/gear.svg" width="25" align="bottom" alt="Indstillinger" /> `{{<T "Settings" >}}` og trykke på `{{<T "Ok" >}}`-knappen.

2. En undermenu åbnes, hvor forskellige indstillinger vises. Brug piletasterne △ ▽ til at vælge `{{<T "DataAcquisition" >}}`. Bekræft med `{{<T "Ok" >}}`.

3. En anden undermenu åbnes, hvor du kan bruge piletasterne △ ▽ til at skifte mellem indstillingsfelterne for `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` og `{{<T "ControlPeriodFreshCows" >}}`. Vælg `{{<T "ControlPeriodFreshCows" >}}` og bekræft med `{{<T "Ok" >}}`.

4. Brug piletasterne ◁ ▷ til at indstille den ønskede varighed af kontrolperioden i dage efter fødslen.

    ![VitalControl: menuindstillinger kontrolperiode nykælvere](../images/controlperiodfreshcows.png "Kontrolperiode nykælvere")

<br>

Gem indstillingerne og vend tilbage til hovedmenuen <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` ved at trykke på `F1`-tasten &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.
