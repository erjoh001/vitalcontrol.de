---
title: "Dataförvärv"
linkTitle: "Dataförvärv"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: data-acquisition
description: >
 Lagring av relevanta inställningar för insamling av djurdata
Kategorier: [settings]
Taggar: [settings, data acquisition]
translationKey: settings/data-acquisition
maphilight: true
---
## Översikt {#overview}

Följande grafik listar de tillgängliga inställningarna för inspelning av djurdata:

<img src="../images/animaldataacquisition.png" alt="Förvärv av djurdata" title="Förvärv av djurdata" usemap="#workmap-overview" class="maphilight" />

<map name="workmap-overview">
  <area shape="rect" coords="3,40,239,80" alt="Viktregistrering" title="Undermeny: Inställningar för viktregistrering&#10;Mus klick: öppna dokumentation" href="#settings-weight-recording">
  <area shape="rect" coords="3,80,239,160" alt="Bedömningsläge för djur" title="Ställ in bedömningsläget för djur&#10;Mus klick: öppna dokumentation" href="#mode-of-animal-rating">
  <area shape="rect" coords="3,160,239,240" alt="Kontrollperiodens längd för nykalvade kor" title="Ställ in längden på kontrollperioden för nykalvade kor&#10;Mus klick: öppna dokumentation" href="#control-period-of-fresh-cows">

  <area shape="rect" coords="2,282,125,318" alt="Tillbaka" title="Hoppa tillbaka en nivå" href="/sv/docs/settings/">
</map>

{{% alert title="Tips" %}}
Flytta muspekaren över en symbol i grafiken nedan och låt den vila en stund. En verktygstips visas, som presenterar information om respektive inställning. Om du klickar på en av linjerna, kommer du att vidarebefordras till en beskrivning av respektive inställning.
{{% /alert %}}

## Inställningar *Viktregistrering* {#settings-weight-recording}

Följande grafik listar de tillgängliga inställningarna för viktregistrering av djur:

<img src="../images/weightrecording.png" alt="Undermenyobjekt inställningar för viktregistrering" title="Inställningar viktregistrering" usemap="#workmap-weight" class="maphilight" />

<map name="workmap-weight">
  <area shape="rect" coords="1,40,230,199" alt="Tröskelvärden bedömning daglig viktökning" title="Ställ in tröskelvärden för bedömning av daglig viktökning&#10;Mus klick: öppna dokumentation" href="#assessment-of-daily-weight-gain-threshold-values">
  <area shape="rect" coords="1,200,230,280" alt="Födelsevikt" title="Ställ in födelsevikten som föreslås vid registrering av ett nytt djur&#10;Mus klick: öppna dokumentation" href="#birth-weight">
  <area shape="rect" coords="1,280,230,360" alt="Genomsnittlig daglig viktökning" title="Ställ in den genomsnittliga dagliga viktökningen som används vid uppskattning av djurens vikt&#10;Mus klick: öppna dokumentation" href="#average-daily-weight-gain">
  <area shape="rect" coords="1,360,230,440" alt="Precision viktregistrering" title="Ställ in precisionen för viktregistrering&#10;Mus klick: öppna dokumentation" href="#precision-of-weight-recording">
</map>

### Bedömning av daglig viktökning: Tröskelvärden {#assessment-of-daily-weight-gain-threshold-values}

{{% alert title="Tips" %}}
Det röda fältet visar området för "kritisk för låg viktökning". Det gula fältet visar området för "suboptimal viktökning".
{{% /alert %}}

För att justera tröskelvärdena för bedömning av den dagliga viktökningen, gör följande:

1. På huvudskärmen på din VitalControl-enhet, välj menyalternativet <img src="/icons/gear.svg" width="25" align="bottom" alt="Inställningar" /> `{{<T "Settings" >}}` och tryck på knappen `{{<T "Ok" >}}`.

2. En undermeny öppnas där olika inställningar visas. Använd piltangenterna △ ▽ för att välja `{{<T "DataAcquisition" >}}`. Bekräfta med `{{<T "Ok" >}}`.

3. En annan undermeny öppnas där du kan använda piltangenterna △ ▽ för att växla mellan inställningsfälten för `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` och `{{<T "ControlPeriodFreshCows" >}}`. Välj `{{<T "WeightRecording" >}}` och bekräfta med `{{<T "Ok" >}}`.

4. Preferensfältet `{{<T "DailyWeightGain" >}}` är automatiskt valt. Använd piltangenterna ◁ ▷ för att välja önskad djurart. Bekräfta med `{{<T "Ok" >}}`. Alternativt kan du använda pennikonen med `F3`-tangenten <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Redigera" /> för att hoppa direkt till redigering av de röda och gula områdena.

5. Använd piltangenterna △ ▽ för att välja önskad "större än" eller "lika med" g/dag ökning i det röda och gula området. Använd tangenterna `F2`/`F3` 🡄 🡆 eller piltangenterna ◁ ▷ för att växla mellan de röda och gula områdena.

6. När du har ställt in önskad "större än" eller "lika med" g/dag ökning, använd `F1`-tangenten <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Avsluta" /> eller bekräfta med `{{<T "Ok" >}}` för att hoppa tillbaka till `{{<T "DailyWeightGain" >}}`.

    ![VitalControl: menyinställningar daglig viktökning](../images/dailyweightgain.png "Daglig viktökning")

### Födelsevikt {#birth-weight}

Enheten använder födelsevikten som lagras här i inställningarna som standardvärde när nya djur skapas. För att kunna välja den individuella födelsevikten för ett nyfött djur snabbare, kan du behöva justera detta standardvärde för din gård. För att justera värdet för `{{<T "BirthWeight" >}}`, gör följande:


1. På huvudskärmen på din VitalControl-enhet, välj menyalternativet <img src="/icons/gear.svg" width="25" align="bottom" alt="Inställningar" /> `{{<T "Settings" >}}` och tryck på knappen `{{<T "Ok" >}}`.

2. En undermeny öppnas där olika inställningar visas. Använd piltangenterna △ ▽ för att välja `{{<T "DataAcquisition" >}}`. Bekräfta med `{{<T "Ok" >}}`.

3. En annan undermeny öppnas där du kan använda piltangenterna △ ▽ för att växla mellan inställningsfälten för `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` och `{{<T "ControlPeriodFreshCows" >}}`. Välj `{{<T "WeightRecording" >}}` och bekräfta med `{{<T "Ok" >}}`.

4. Använd piltangenterna △ ▽ för att välja inställningsfältet `{{<T "BirthWeight" >}}` och använd piltangenterna ◁ ▷ för att ställa in önskad födelsevikt. Enheten använder nu den här definierade födelsevikten som standard när nya djur skapas. Den individuella födelsevikten för ett nyfött djur kan sedan väljas snabbare.

    ![VitalControl: menyinställningar födelsevikt](../images/birthweight.png "Födelsevikt")

{{% alert title="Varning" color="warning" %}}
Standardfödelsevikten är endast ett ungefärligt värde, som måste justeras individuellt när ett nytt djur skapas.
Om du inte vill göra denna justering eller om du skapar djur automatiskt [i bakgrunden](../animal-registration/#auto-registration), bör ingen födelsevikt efterfrågas eller sparas när ett nytt djur skapas. födelsevikt bör inte efterfrågas eller sparas när ett nytt djur skapas. Detta kan definieras i inställningarna för [registrering av djur](../animal-registration/#set-recorded-weights).
{{% /alert %}}

{{% alert title="Standardvärden födelsevikter:" %}}

| Typ av nytt djur              |  Lamm          | Kalv          |
|-------------------------------|----------------|---------------| 
| Standardvärde *födelsevikt*:  | 4 kg           | 40 kg         |
| Värdeintervall :              | 1,0 till 99 kg | 1,0 till 99 kg |
{{% /alert %}}

### Genomsnittlig daglig viktökning {#average-daily-weight-gain}

{{% alert title="Förklaring" %}}
Vid [vägning](../../actions/record-weight/) av ett djur används den definierade dagliga ökningen för beräkningen av det föreslagna viktvärdet under djurvägningen. Om det föreslagna viktvärdet är för lågt eller för högt för majoriteten av de djur som ska vägas, bör du justera det definierade värdet nedåt eller uppåt för att förkorta den tid som behövs för att justera viktvärdet med piltangenterna.
{{% /alert %}}


För att ställa in `{{<T "AverageDailyWeightGain" >}}` som används vid beräkningen av djurets ungefärliga vikt, gör följande.

1. På huvudskärmen på din VitalControl-enhet, välj menyalternativet <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` och tryck på knappen `{{<T "Ok" >}}`.

2. En undermeny öppnas där olika inställningar visas. Använd piltangenterna △ ▽ för att välja `{{<T "DataAcquisition" >}}`. Bekräfta med `{{<T "Ok" >}}`.

3. En annan undermeny öppnas där du kan använda piltangenterna △ ▽ för att växla mellan inställningsfälten för `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` och `{{<T "ControlPeriodFreshCows" >}}`. Välj `{{<T "WeightRecording" >}}` och bekräfta med `{{<T "Ok" >}}`.

4. Använd piltangenterna △ ▽ för att välja inställningsfältet `{{<T "AverageDailyWeightGain" >}}`. Använd piltangenterna ◁ ▷ för att ställa in önskad genomsnittlig daglig viktökning g/dag. Enheten använder nu den genomsnittliga dagliga viktökningen som definieras här som standard för djurens förväntade dagliga viktökning.

    ![VitalControl: menu settings average daily weight gain](../images/averagedailyweightgain.png "Average daily weight gain")

### Noggrannhet vid viktregistrering {#precision-of-weight-recording}

{{% alert title="Explanation" %}}
Beroende på användningsområde och djurart (*lamm*, *kalv*, *ko*) finns det olika krav på upplösningen av det viktvärde som ska registreras (noggrannhet på *10 g*, *100 g* eller *1 kg*). För att uppfylla dessa krav måste man använda inställningen *Maximum accuracy*.
{{% /alert %}}

Tabellen nedan visar noggrannheten vid viktregistrering beroende på viktintervall och inställningen som anges för *Maximum accuracy*:

| Inställning *Maximum precision*:           |  10 g | 100 g | 1 kg |
|--------------------------------------------|-------|-------|------|
| Noggrannhet i intervallet *0 till 9,9 kg*: | 10 g  | 100 g | 1 kg |
| Noggrannhet i intervallet *10 till 49,9 kg*: | 100 g | 100 g | 1 kg |
| Noggrannhet i intervallet *50 till 99,9 kg*: | 500 g | 500 g | 1 kg |
| Noggrannhet för värden *≥ 100 kg*:         | 1 kg  | 1 kg  | 1 kg |

För att ställa in maximal noggrannhet vid registrering av djurvikter med din enhet, gör följande:

1. På huvudskärmen på din VitalControl-enhet, välj menyalternativet <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` och tryck på `{{<T "Ok" >}}`-knappen.

2. En undermeny öppnas där olika inställningar visas. Använd piltangenterna △ ▽ för att välja `{{<T "DataAcquisition" >}}`. Bekräfta med `{{<T "Ok" >}}`.

3. En annan undermeny öppnas där du kan använda piltangenterna △ ▽ för att växla mellan inställningsfälten för `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` och `{{<T "ControlPeriodFreshCows" >}}`. Välj `{{<T "WeightRecording" >}}` och bekräfta med `{{<T "Ok" >}}`.

4. Använd piltangenterna △ ▽ för att välja inställningsfältet `{{<T "MaximumPrecision" >}}`. Använd piltangenterna ◁ ▷ för att ställa in önskad maximal precision. Noggrannheten för viktregistrering på enheten följer nu den angivna inställningen.

    ![VitalControl: menu path settings maximum precision weight recording](../images/precisionweightrecording.png "Stipulera maximal precision för viktregistrering.")

<br>
Spara inställningarna och återgå till huvudmenyn `{{<T "DataAcquisition" >}}` genom att trycka på `F1`-tangenten &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.

## Bedömningsläge för djur {#mode-of-animal-rating}

{{% alert title="Förklaring" %}}
I enkelt läge frågas endast det allmänna tillståndet under djurutvärderingen (grön/gul/röd). I den utökade utvärderingen frågas 4 utvärderingskategorier: allmänt tillstånd, foderkonsumtion, diarré och andningssjukdom.
{{% /alert %}}

För att ställa in `{{<T "RatingAnimals" >}}` på din enhet, gör följande.

1. På huvudskärmen på din VitalControl-enhet, välj menyalternativet <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` och tryck på `{{<T "Ok" >}}`-knappen.

2. En undermeny öppnas där olika inställningar visas. Använd piltangenterna △ ▽ för att välja `{{<T "DataAcquisition" >}}`. Bekräfta med `{{<T "Ok" >}}`.


3. En annan undermeny öppnas där du kan använda piltangenterna △ ▽ för att växla mellan inställningsfälten för `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` och `{{<T "ControlPeriodFreshCows" >}}`. Välj `{{<T "RatingAnimals" >}}` och bekräfta med `{{<T "Ok" >}}`.

4. Använd piltangenterna ◁ ▷ för att ställa in önskat betyg på djuren.

    ![VitalControl: menyinställningar genomsnittligt betyg på djur](../images/raitingofanimals.png "Betyg på djur")

## Kontrollperiod för nykalvade kor {#control-period-of-fresh-cows}

{{% alert title="Förklaring" %}}
Vid hantering av nykalvade kor anses det vara en bästa praxis att kontrollera djuren dagligen under flera dagar efter kalvning, inklusive att ta deras temperatur. Varaktigheten av denna kontrollperiod varierar avsevärt från gård till gård. Av denna anledning kan längden på kontrollperioden ställas in till ett värde mellan 3 och 14 dagar i VitalControl-inställningarna. Det inställda värdet för kontrollperioden för nykalvade kor bestämmer antalet kolumner i kolumndiagrammet som visas för varje djur i [listan över nykalvade kor](../../lists/fresh-cows/).
{{% /alert %}}

För att ställa in längden på kontrollperioden för dina nykalvade kor, gör följande:

1. På huvudskärmen på din VitalControl-enhet, välj menyalternativet <img src="/icons/gear.svg" width="25" align="bottom" alt="Inställningar" /> `{{<T "Settings" >}}` och tryck på knappen `{{<T "Ok" >}}`.

2. En undermeny öppnas där olika inställningar visas. Använd piltangenterna △ ▽ för att välja `{{<T "DataAcquisition" >}}`. Bekräfta med `{{<T "Ok" >}}`.

3. En annan undermeny öppnas där du kan använda piltangenterna △ ▽ för att växla mellan inställningsfälten för `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` och `{{<T "ControlPeriodFreshCows" >}}`. Välj `{{<T "ControlPeriodFreshCows" >}}` och bekräfta med `{{<T "Ok" >}}`.

4. Använd piltangenterna ◁ ▷ för att ställa in önskad varaktighet av kontrollperioden i dagar efter kalvning.

    ![VitalControl: menyinställningar kontrollperiod nykalvade kor](../images/controlperiodfreshcows.png "Kontrollperiod nykalvade kor")

<br>

Spara inställningarna och återgå till huvudmenyn <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` genom att trycka på `F1`-tangenten &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.
