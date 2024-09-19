---
title: "Duomenų rinkimas"
linkTitle: "Duomenų rinkimas"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: data-acquisition
description: >
 Atitinkamų nustatymų saugojimas gyvūnų duomenų rinkimui
kategorijos: [settings]
Žymos: [settings, data acquisition]
translationKey: settings/data-acquisition
maphilight: true
---
## Apžvalga {#overview}

Šiame grafike pateikiami galimi nustatymai, susiję su gyvūnų duomenų įrašymu:

<img src="../images/animaldataacquisition.png" alt="Gyvūnų duomenų rinkimas" title="Gyvūnų duomenų rinkimas" usemap="#workmap-overview" class="maphilight" />

<map name="workmap-overview">
  <area shape="rect" coords="3,40,239,80" alt="Svorio įrašymas" title="Submeniu: Svorio įrašymo nustatymai&#10;Pelės paspaudimas: atidaryti dokumentaciją" href="#settings-weight-recording">
  <area shape="rect" coords="3,80,239,160" alt="Gyvūnų vertinimo režimas" title="Nustatyti gyvūnų vertinimo režimą&#10;Pelės paspaudimas: atidaryti dokumentaciją" href="#mode-of-animal-rating">
  <area shape="rect" coords="3,160,239,240" alt="Šviežių karvių kontrolės laikotarpio ilgis" title="Nustatyti šviežių karvių kontrolės laikotarpio ilgį&#10;Pelės paspaudimas: atidaryti dokumentaciją" href="#control-period-of-fresh-cows">

  <area shape="rect" coords="2,282,125,318" alt="Atgal" title="Grįžti vienu lygiu atgal" href="/en/docs/settings/">
</map>

{{% alert title="Patarimas" %}}
Perkelkite pelės žymeklį ant simbolio žemiau esančiame grafike ir palikite jį ten trumpam. Pasirodys patarimas, pateikiantis informaciją apie atitinkamą nustatymą. Jei spustelėsite vieną iš linijų, būsite nukreipti į atitinkamo nustatymo aprašymą.
{{% /alert %}}

## Nustatymai *Svorio įrašymas* {#settings-weight-recording}

Šiame grafike pateikiami galimi nustatymai, susiję su gyvūnų svorio įrašymu:

<img src="../images/weightrecording.png" alt="Submeniu elementai svorio įrašymo nustatymams" title="Svorio įrašymo nustatymai" usemap="#workmap-weight" class="maphilight" />

<map name="workmap-weight">
  <area shape="rect" coords="1,40,230,199" alt="Kasdienio svorio padidėjimo vertinimo slenkstinės vertės" title="Nustatyti kasdienio svorio padidėjimo vertinimo slenkstines vertes&#10;Pelės paspaudimas: atidaryti dokumentaciją" href="#assessment-of-daily-weight-gain-threshold-values">
  <area shape="rect" coords="1,200,230,280" alt="Gimimo svoris" title="Nustatyti siūlomą gimimo svorį, registruojant naują gyvūną&#10;Pelės paspaudimas: atidaryti dokumentaciją" href="#birth-weight">
  <area shape="rect" coords="1,280,230,360" alt="Vidutinis kasdienis svorio padidėjimas" title="Nustatyti vidutinį kasdienį svorio padidėjimą, naudojamą gyvūnų svorio vertinimui&#10;Pelės paspaudimas: atidaryti dokumentaciją" href="#average-daily-weight-gain">
  <area shape="rect" coords="1,360,230,440" alt="Svorio įrašymo tikslumas" title="Nustatyti svorio įrašymo tikslumą&#10;Pelės paspaudimas: atidaryti dokumentaciją" href="#precision-of-weight-recording">
</map>

### Dienos svorio prieaugio vertinimas: Ribinės vertės {#assessment-of-daily-weight-gain-threshold-values}

{{% alert title="Patarimas" %}}
Raudonas laukas rodo "kritiškai per mažą svorio prieaugį" sritį. Geltonas laukas rodo "neoptimalų svorio prieaugį" sritį.
{{% /alert %}}

Norėdami sureguliuoti ribines vertes dienos svorio prieaugio vertinimui, atlikite šiuos veiksmus:

1. Pagrindiniame savo VitalControl įrenginio ekrane pasirinkite meniu punktą <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` ir paspauskite `{{<T "Ok" >}}` mygtuką.

2. Atsidarys submeniu, kuriame rodomi įvairūs nustatymai. Naudokite rodyklių klavišus △ ▽, kad pasirinktumėte `{{<T "DataAcquisition" >}}`. Patvirtinkite su `{{<T "Ok" >}}`.

3. Atsidarys kitas submeniu, kuriame galite naudoti rodyklių klavišus △ ▽, kad perjungtumėte nustatymų laukus `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` ir `{{<T "ControlPeriodFreshCows" >}}`. Pasirinkite `{{<T "WeightRecording" >}}` ir patvirtinkite su `{{<T "Ok" >}}`.

4. `{{<T "DailyWeightGain" >}}` nustatymų laukas automatiškai pasirenkamas. Naudokite rodyklių klavišus ◁ ▷, kad pasirinktumėte norimą gyvūnų rūšį. Patvirtinkite su `{{<T "Ok" >}}`. Alternatyviai, galite naudoti pieštuko ikoną su <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `F3` klavišu, kad tiesiogiai pereitumėte prie raudonų ir geltonų sričių redagavimo.

5. Naudokite rodyklių klavišus △ ▽, kad pasirinktumėte norimą "didesnį nei" arba "lygų" g/dieną padidėjimą raudonoje ir geltonoje srityje. Naudokite klavišus `F2`/`F3` 🡄 🡆 arba rodyklių klavišus ◁ ▷, kad pasirinktumėte tarp raudonos ir geltonos sričių.

6. Kai nustatysite norimą "didesnį nei" arba "lygų" g/dieną padidėjimą, naudokite `F1` klavišą <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Exit" /> arba patvirtinkite su `{{<T "Ok" >}}`, kad grįžtumėte į `{{<T "DailyWeightGain" >}}`.

    ![VitalControl: meniu nustatymai dienos svorio prieaugis](../images/dailyweightgain.png "Dienos svorio prieaugis")

### Gimimo svoris {#birth-weight}

Įrenginys naudoja čia nustatytą gimimo svorį kaip numatytąją vertę kuriant naujus gyvūnus. Norėdami greičiau pasirinkti naujai gimusio gyvūno individualų gimimo svorį, gali tekti sureguliuoti šią numatytąją vertę savo ūkiui. Norėdami sureguliuoti `{{<T "BirthWeight" >}}` vertę, atlikite šiuos veiksmus:

1. Pagrindiniame jūsų VitalControl įrenginio ekrane pasirinkite meniu punktą <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` ir paspauskite mygtuką `{{<T "Ok" >}}`.

2. Atsidaro submeniu, kuriame rodomi įvairūs nustatymai. Naudokite rodyklių klavišus △ ▽, kad pasirinktumėte `{{<T "DataAcquisition" >}}`. Patvirtinkite su `{{<T "Ok" >}}`.

3. Atsidaro kitas submeniu, kuriame galite naudoti rodyklių klavišus △ ▽, kad perjungtumėte nustatymų laukus `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` ir `{{<T "ControlPeriodFreshCows" >}}`. Pasirinkite `{{<T "WeightRecording" >}}` ir patvirtinkite su `{{<T "Ok" >}}`.

4. Naudokite rodyklių klavišus △ ▽, kad pasirinktumėte nustatymų lauką `{{<T "BirthWeight" >}}` ir naudokite rodyklių klavišus ◁ ▷, kad nustatytumėte norimą gimimo svorį. Įrenginys dabar naudos čia apibrėžtą gimimo svorį kaip standartą kuriant naujus gyvūnus. Individualus naujagimio gyvūno gimimo svoris gali būti pasirinktas greičiau.

    ![VitalControl: meniu nustatymai gimimo svoris](../images/birthweight.png "Gimimo svoris")

{{% alert title="Įspėjimas" color="warning" %}}
Standartinis gimimo svoris yra tik apytikslė vertė, kurią reikia individualiai koreguoti kuriant naują gyvūną.
Jei nenorite atlikti šio koregavimo arba jei gyvūnus kuriate automatiškai [fone](../animal-registration/#auto-registration), gimimo svoris neturėtų būti užklausiamas ar išsaugomas kuriant naują gyvūną. Tai galima apibrėžti nustatymuose [gyvūnų registracija](../animal-registration/#set-recorded-weights).
{{% /alert %}}

{{% alert title="Numatytosios gimimo svorio vertės:" %}}

| Naujo gyvūno tipas            |  Ėriukas       | Veršelis      |
|-------------------------------|----------------|---------------| 
| Numatytasis *gimimo svoris*:  | 4 kg           | 40 kg         |
| Vertės diapazonas:            | 1,0 iki 99 kg  | 1,0 iki 99 kg |
{{% /alert %}}

### Vidutinis dienos svorio prieaugis {#average-daily-weight-gain}

{{% alert title="Paaiškinimas" %}}
Kai [sveriate](../../actions/record-weight/) gyvūną, apibrėžtas dienos prieaugis naudojamas siūlomos svorio vertės apskaičiavimui gyvūno svėrimo metu. Jei siūloma svorio vertė yra per maža arba per didelė daugumai sveriamų gyvūnų, turėtumėte atitinkamai koreguoti apibrėžtą vertę žemyn arba aukštyn, kad sutrumpintumėte laiką, reikalingą svorio vertės koregavimui rodyklių klavišais.
{{% /alert %}}

Norėdami nustatyti `{{<T "AverageDailyWeightGain" >}}`, naudojamą apytikslio gyvūno svorio apskaičiavimui, atlikite šiuos veiksmus.

1. Pagrindiniame savo VitalControl įrenginio ekrane pasirinkite meniu punktą <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` ir paspauskite mygtuką `{{<T "Ok" >}}`.

2. Atsidarys submeniu, kuriame bus rodomi įvairūs nustatymai. Naudokite rodyklių klavišus △ ▽, kad pasirinktumėte `{{<T "DataAcquisition" >}}`. Patvirtinkite paspausdami `{{<T "Ok" >}}`.

3. Atsidarys kitas submeniu, kuriame galite naudoti rodyklių klavišus △ ▽, kad perjungtumėte nustatymų laukus `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` ir `{{<T "ControlPeriodFreshCows" >}}`. Pasirinkite `{{<T "WeightRecording" >}}` ir patvirtinkite paspausdami `{{<T "Ok" >}}`.

4. Naudokite rodyklių klavišus △ ▽, kad pasirinktumėte nustatymų lauką `{{<T "AverageDailyWeightGain" >}}`. Naudokite rodyklių klavišus ◁ ▷, kad nustatytumėte norimą vidutinį dienos padidėjimą g/dieną. Įrenginys dabar naudos čia apibrėžtą vidutinį dienos padidėjimą kaip standartą tikėtinam gyvūnų dienos padidėjimui.

    ![VitalControl: meniu nustatymai vidutinis dienos svorio padidėjimas](../images/averagedailyweightgain.png "Vidutinis dienos svorio padidėjimas")

### Svorio registravimo tikslumas {#precision-of-weight-recording}

{{% alert title="Paaiškinimas" %}}
Priklausomai nuo naudojimo atvejo ir gyvūnų rūšies (*ėriukas*, *veršelis*, *karvė*), yra skirtingi reikalavimai dėl registruojamo svorio vertės skiriamosios gebos (tikslumas *10 g*, *100 g* arba *1 kg*). Norint atitikti šiuos reikalavimus, būtina naudoti nustatymą *Maksimalus tikslumas*.
{{% /alert %}}

Žemiau pateiktoje lentelėje parodytas svorio registravimo tikslumas priklausomai nuo svorio diapazono ir nustatyto *Maksimalaus tikslumo*:

| Nustatymas *Maksimalus tikslumas*:         |  10 g | 100 g | 1 kg |
|--------------------------------------------|-------|-------|------|
| Tikslumas diapazone *0 iki 9,9 kg*:        | 10 g  | 100 g | 1 kg |
| Tikslumas diapazone *10 iki 49,9 kg*:      | 100 g | 100 g | 1 kg |
| Tikslumas diapazone *50 iki 99,9 kg*:      | 500 g | 500 g | 1 kg |
| Tikslumas vertėms *≥ 100 kg*:              | 1 kg  | 1 kg  | 1 kg |

Norėdami nustatyti maksimalų tikslumą, kai įrašote gyvūnų svorius su savo įrenginiu, atlikite šiuos veiksmus:

1. Pagrindiniame savo VitalControl įrenginio ekrane pasirinkite meniu punktą <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` ir paspauskite mygtuką `{{<T "Ok" >}}`.

2. Atsidaro submeniu, kuriame rodomi įvairūs nustatymai. Naudokite rodyklių klavišus △ ▽, kad pasirinktumėte `{{<T "DataAcquisition" >}}`. Patvirtinkite paspausdami `{{<T "Ok" >}}`.

3. Atsidaro kitas submeniu, kuriame galite naudoti rodyklių klavišus △ ▽, kad perjungtumėte nustatymų laukus `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` ir `{{<T "ControlPeriodFreshCows" >}}`. Pasirinkite `{{<T "WeightRecording" >}}` ir patvirtinkite paspausdami `{{<T "Ok" >}}`.

4. Naudokite rodyklių klavišus △ ▽, kad pasirinktumėte nustatymų lauką `{{<T "MaximumPrecision" >}}`. Naudokite rodyklių klavišus ◁ ▷, kad nustatytumėte norimą maksimalų tikslumą. Svorio įrašymo tikslumas įrenginyje dabar atitiks nustatytą parametrą.

    ![VitalControl: menu path settings maximum precision weight recording](../images/precisionweightrecording.png "Nustatyti maksimalų svorio įrašymo tikslumą.")

<br>
Išsaugokite nustatymus ir grįžkite į pagrindinį meniu `{{<T "DataAcquisition" >}}` paspausdami `F1` klavišą &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.

## Gyvūnų vertinimo režimas {#mode-of-animal-rating}

{{% alert title="Paaiškinimas" %}}
Paprastame režime gyvūnų vertinimo metu klausiama tik apie bendrą būklę (žalia/geltona/raudona). Išplėstiniame vertinime klausiama apie 4 vertinimo kategorijas: bendrą būklę, pašarų suvartojimą, viduriavimą ir kvėpavimo ligas.
{{% /alert %}}

Norėdami nustatyti `{{<T "RatingAnimals" >}}` savo įrenginyje, atlikite šiuos veiksmus.

1. Pagrindiniame savo VitalControl įrenginio ekrane pasirinkite meniu punktą <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` ir paspauskite mygtuką `{{<T "Ok" >}}`.

2. Atsidaro submeniu, kuriame rodomi įvairūs nustatymai. Naudokite rodyklių klavišus △ ▽, kad pasirinktumėte `{{<T "DataAcquisition" >}}`. Patvirtinkite paspausdami `{{<T "Ok" >}}`.

3. Atsidaro kitas submeniu, kuriame galite naudoti rodyklių klavišus △ ▽, kad perjungtumėte nustatymų laukus `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` ir `{{<T "ControlPeriodFreshCows" >}}`. Pasirinkite `{{<T "RatingAnimals" >}}` ir patvirtinkite paspausdami `{{<T "Ok" >}}`.

4. Naudokite rodyklių klavišus ◁ ▷, kad nustatytumėte norimą gyvūnų įvertinimą.

    ![VitalControl: meniu nustatymai vidutinis gyvūnų įvertinimas](../images/raitingofanimals.png "Gyvūnų įvertinimas")

## Šviežių karvių kontrolės laikotarpis {#control-period-of-fresh-cows}

{{% alert title="Paaiškinimas" %}}
Tvarkant šviežias karves, laikoma geriausia praktika kasdien tikrinti gyvūnus kelias dienas po gimimo, įskaitant jų temperatūros matavimą. Šio kontrolės laikotarpio trukmė labai skiriasi nuo ūkio iki ūkio. Dėl šios priežasties kontrolės laikotarpio trukmę galima nustatyti nuo 3 iki 14 dienų VitalControl nustatymuose. Nustatyta šviežių karvių kontrolės laikotarpio vertė lemia stulpelių diagramos stulpelių skaičių, rodomą kiekvienam gyvūnui [šviežių karvių sąraše](../../lists/fresh-cows/).
{{% /alert %}}

Norėdami nustatyti šviežių karvių kontrolės laikotarpio trukmę, atlikite šiuos veiksmus:

1. Pagrindiniame savo VitalControl įrenginio ekrane pasirinkite meniu punktą <img src="/icons/gear.svg" width="25" align="bottom" alt="Nustatymai" /> `{{<T "Settings" >}}` ir paspauskite mygtuką `{{<T "Ok" >}}`.

2. Atsidaro submeniu, kuriame rodomi įvairūs nustatymai. Naudokite rodyklių klavišus △ ▽, kad pasirinktumėte `{{<T "DataAcquisition" >}}`. Patvirtinkite paspausdami `{{<T "Ok" >}}`.

3. Atsidaro kitas submeniu, kuriame galite naudoti rodyklių klavišus △ ▽, kad perjungtumėte nustatymų laukus `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` ir `{{<T "ControlPeriodFreshCows" >}}`. Pasirinkite `{{<T "ControlPeriodFreshCows" >}}` ir patvirtinkite paspausdami `{{<T "Ok" >}}`.

4. Naudokite rodyklių klavišus ◁ ▷, kad nustatytumėte norimą kontrolės laikotarpio trukmę dienomis po gimdymo.

    ![VitalControl: meniu nustatymai šviežių karvių kontrolės laikotarpis](../images/controlperiodfreshcows.png "Šviežių karvių kontrolės laikotarpis")

<br>

Išsaugokite nustatymus ir grįžkite į pagrindinį meniu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` paspausdami `F1` klavišą &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.
