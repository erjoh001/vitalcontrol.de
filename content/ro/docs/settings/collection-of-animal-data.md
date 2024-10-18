---
title: "Achiziția de date"
linkTitle: "Achiziția de date"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: data-acquisition
description: >
 Stocarea setărilor relevante pentru colectarea datelor despre animale
categorii: [settings]
etichete: [settings, data acquisition]
translationKey: settings/data-acquisition
maphilight: true
---
## Prezentare generală {#overview}

Graficul următor listează setările disponibile referitoare la înregistrarea datelor despre animale:

<img src="../images/animaldataacquisition.png" alt="Achiziția de date despre animale" title="Achiziția de date despre animale" usemap="#workmap-overview" class="maphilight" />

<map name="workmap-overview">
  <area shape="rect" coords="3,40,239,80" alt="Înregistrarea greutății" title="Submeniu: Setări pentru înregistrarea greutății&#10;Click mouse: deschide documentația" href="#settings-weight-recording">
  <area shape="rect" coords="3,80,239,160" alt="Modul de evaluare a animalelor" title="Setează modul de evaluare a animalelor&#10;Click mouse: deschide documentația" href="#mode-of-animal-rating">
  <area shape="rect" coords="3,160,239,240" alt="Perioada de control pentru vacile proaspete" title="Setează durata perioadei de control pentru vacile proaspete&#10;Click mouse: deschide documentația" href="#control-period-of-fresh-cows">

  <area shape="rect" coords="2,282,125,318" alt="Înapoi" title="Reveniți un nivel înapoi" href="/ro/docs/settings/">
</map>

{{% alert title="Sfat" %}}
Mutați cursorul mouse-ului peste un simbol din graficul de mai jos și lăsați-l să stea pentru un moment. Va apărea un tooltip, prezentând informații despre setarea respectivă. Dacă faceți clic pe una dintre linii, veți fi redirecționat către o descriere a setării respective.
{{% /alert %}}

## Setări *Înregistrarea greutății* {#settings-weight-recording}

Graficul următor listează setările disponibile referitoare la înregistrarea greutății animalelor:

<img src="../images/weightrecording.png" alt="Elemente de submeniu setări pentru înregistrarea greutății" title="Setări înregistrarea greutății" usemap="#workmap-weight" class="maphilight" />

<map name="workmap-weight">
  <area shape="rect" coords="1,40,230,199" alt="Valori prag pentru evaluarea câștigului zilnic în greutate" title="Setează valorile prag pentru evaluarea câștigului zilnic în greutate&#10;Click mouse: deschide documentația" href="#assessment-of-daily-weight-gain-threshold-values">
  <area shape="rect" coords="1,200,230,280" alt="Greutatea la naștere" title="Setează greutatea la naștere propusă la înregistrarea unui nou animal&#10;Click mouse: deschide documentația" href="#birth-weight">
  <area shape="rect" coords="1,280,230,360" alt="Câștigul zilnic mediu în greutate" title="Setează câștigul zilnic mediu în greutate utilizat la estimarea greutății animalelor&#10;Click mouse: deschide documentația" href="#average-daily-weight-gain">
  <area shape="rect" coords="1,360,230,440" alt="Precizia înregistrării greutății" title="Setează precizia înregistrării greutății&#10;Click mouse: deschide documentația" href="#precision-of-weight-recording">
</map>

### Evaluarea creșterii zilnice în greutate: Valori prag {#assessment-of-daily-weight-gain-threshold-values}

{{% alert title="Sfat" %}}
Câmpul roșu arată zona "creștere în greutate critic prea mică". Câmpul galben arată zona "creștere în greutate suboptimă".
{{% /alert %}}

Pentru a ajusta valorile prag pentru evaluarea creșterii zilnice în greutate, procedați după cum urmează:

1. În ecranul principal al dispozitivului dvs. VitalControl, selectați elementul de meniu <img src="/icons/gear.svg" width="25" align="bottom" alt="Setări" /> `{{<T "Settings" >}}` și apăsați butonul `{{<T "Ok" >}}`.

2. Se deschide un submeniu în care sunt afișate diverse setări. Utilizați tastele săgeată △ ▽ pentru a selecta `{{<T "DataAcquisition" >}}`. Confirmați cu `{{<T "Ok" >}}`.

3. Se deschide un alt submeniu în care puteți utiliza tastele săgeată △ ▽ pentru a comuta între câmpurile de setare pentru `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` și `{{<T "ControlPeriodFreshCows" >}}`. Selectați `{{<T "WeightRecording" >}}` și confirmați cu `{{<T "Ok" >}}`.

4. Câmpul de preferințe `{{<T "DailyWeightGain" >}}` este selectat automat. Utilizați tastele săgeată ◁ ▷ pentru a selecta specia de animal dorită. Confirmați cu `{{<T "Ok" >}}`. Alternativ, puteți utiliza pictograma creionului cu tasta <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Editare" /> `F3` pentru a sări direct la editarea zonelor roșii și galbene.

5. Utilizați tastele săgeată △ ▽ pentru a selecta creșterea dorită "mai mare decât" sau "egală cu" g/zi în zona roșie și galbenă. Utilizați tastele `F2`/`F3` 🡄 🡆 sau tastele săgeată ◁ ▷ pentru a selecta între zonele roșii și galbene.

6. Odată ce ați setat creșterea dorită "mai mare decât" sau "egală cu" g/zi, utilizați tasta `F1` <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Ieșire" /> sau confirmați cu `{{<T "Ok" >}}` pentru a reveni la `{{<T "DailyWeightGain" >}}`.

    ![VitalControl: setări meniu creștere zilnică în greutate](../images/dailyweightgain.png "Creștere zilnică în greutate")

### Greutatea la naștere {#birth-weight}

Dispozitivul folosește greutatea la naștere stocată aici în setări ca valoare implicită atunci când creează animale noi. Pentru a putea selecta mai rapid greutatea individuală la naștere a unui animal nou-născut, poate fi necesar să ajustați această valoare implicită pentru ferma dvs. Pentru a ajusta valoarea pentru `{{<T "BirthWeight" >}}`, procedați după cum urmează:

1. În ecranul principal al dispozitivului dvs. VitalControl, selectați elementul de meniu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` și apăsați butonul `{{<T "Ok" >}}`.

2. Se deschide un submeniu în care sunt afișate diverse setări. Utilizați tastele săgeată △ ▽ pentru a selecta `{{<T "DataAcquisition" >}}`. Confirmați cu `{{<T "Ok" >}}`.

3. Se deschide un alt submeniu în care puteți utiliza tastele săgeată △ ▽ pentru a comuta între câmpurile de setare pentru `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` și `{{<T "ControlPeriodFreshCows" >}}`. Selectați `{{<T "WeightRecording" >}}` și confirmați cu `{{<T "Ok" >}}`.

4. Utilizați tastele săgeată △ ▽ pentru a selecta câmpul de setare `{{<T "BirthWeight" >}}` și utilizați tastele săgeată ◁ ▷ pentru a seta greutatea la naștere dorită. Dispozitivul folosește acum greutatea la naștere definită aici ca standard la crearea de noi animale. Greutatea individuală la naștere a unui animal nou-născut poate fi apoi selectată mai rapid.

    ![VitalControl: setări meniu greutate la naștere](../images/birthweight.png "Greutate la naștere")

{{% alert title="Avertisment" color="warning" %}}
Greutatea standard la naștere este doar o valoare aproximativă, care trebuie ajustată individual la crearea unui nou animal.
Dacă nu doriți să faceți această ajustare sau dacă creați animale automat [în fundal](../animal-registration/#auto-registration), nu ar trebui să fie interogată sau salvată nicio greutate la naștere la crearea unui nou animal. greutatea la naștere nu ar trebui să fie interogată sau salvată la crearea unui nou animal. Acest lucru poate fi definit în setările pentru [înregistrarea animalelor](../animal-registration/#set-recorded-weights).
{{% /alert %}}

{{% alert title="Valori implicite greutăți la naștere:" %}}

| Tip de animal nou             |  Miel          | Vițel         |
|-------------------------------|----------------|---------------| 
| Valoare implicită *greutate la naștere*: | 4 kg           | 40 kg         |
| Interval de valori :          | 1,0 până la 99 kg  | 1,0 până la 99 kg |
{{% /alert %}}

### Creșterea medie zilnică în greutate {#average-daily-weight-gain}

{{% alert title="Explicație" %}}
Când [cântăriți](../../actions/record-weight/) un animal, creșterea zilnică definită este utilizată pentru calcularea valorii sugerate a greutății în timpul cântăririi animalului. Dacă valoarea sugerată a greutății este prea mică sau prea mare pentru majoritatea animalelor care urmează să fie cântărite, ar trebui să ajustați valoarea definită în jos sau în sus, respectiv, pentru a scurta timpul necesar pentru ajustarea valorii greutății cu tastele săgeată.
{{% /alert %}}

Pentru a seta `{{<T "AverageDailyWeightGain" >}}` utilizat în calculul greutății aproximative a unui animal, procedați după cum urmează.

1. În ecranul principal al dispozitivului dvs. VitalControl, selectați elementul de meniu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` și apăsați butonul `{{<T "Ok" >}}`.

2. Se deschide un submeniu în care sunt afișate diverse setări. Utilizați tastele săgeată △ ▽ pentru a selecta `{{<T "DataAcquisition" >}}`. Confirmați cu `{{<T "Ok" >}}`.

3. Se deschide un alt submeniu în care puteți utiliza tastele săgeată △ ▽ pentru a comuta între câmpurile de setare pentru `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` și `{{<T "ControlPeriodFreshCows" >}}`. Selectați `{{<T "WeightRecording" >}}` și confirmați cu `{{<T "Ok" >}}`.

4. Utilizați tastele săgeată △ ▽ pentru a selecta câmpul de setare `{{<T "AverageDailyWeightGain" >}}`. Utilizați tastele săgeată ◁ ▷ pentru a seta creșterea zilnică medie dorită g/zi. Dispozitivul utilizează acum creșterea zilnică medie definită aici ca standard pentru creșterea zilnică așteptată a animalelor.

    ![VitalControl: setări meniu creștere zilnică medie în greutate](../images/averagedailyweightgain.png "Creștere zilnică medie în greutate")

### Precizia înregistrării greutății {#precision-of-weight-recording}

{{% alert title="Explicație" %}}
În funcție de cazurile de utilizare și de specia animalului (*miel*, *vițel*, *vacă*), există cerințe diferite privind rezoluția valorii greutății care trebuie înregistrată (precizie de *10 g*, *100 g* sau *1 kg*). Pentru a îndeplini aceste cerințe, este necesar să se utilizeze setarea *Precizie maximă*.
{{% /alert %}}

Tabelul de mai jos arată precizia înregistrării greutății în funcție de intervalul de greutate și setarea stipulată pentru *Precizie maximă*:

| Setare *Precizie maximă*:                  |  10 g | 100 g | 1 kg |
|--------------------------------------------|-------|-------|------|
| Precizie în intervalul *0 până la 9,9 kg*: | 10 g  | 100 g | 1 kg |
| Precizie în intervalul *10 până la 49,9 kg*: | 100 g | 100 g | 1 kg |
| Precizie în intervalul *50 până la 99,9 kg*: | 500 g | 500 g | 1 kg |
| Precizie pentru valori *≥ 100 kg*:         | 1 kg  | 1 kg  | 1 kg |

Pentru a seta precizia maximă atunci când înregistrați greutatea animalelor cu dispozitivul dvs., procedați după cum urmează:

1. În ecranul principal al dispozitivului dvs. VitalControl, selectați elementul de meniu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` și apăsați butonul `{{<T "Ok" >}}`.

2. Se deschide un submeniu în care sunt afișate diverse setări. Utilizați tastele săgeată △ ▽ pentru a selecta `{{<T "DataAcquisition" >}}`. Confirmați cu `{{<T "Ok" >}}`.

3. Se deschide un alt submeniu în care puteți utiliza tastele săgeată △ ▽ pentru a comuta între câmpurile de setare pentru `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` și `{{<T "ControlPeriodFreshCows" >}}`. Selectați `{{<T "WeightRecording" >}}` și confirmați cu `{{<T "Ok" >}}`.

4. Utilizați tastele săgeată △ ▽ pentru a selecta câmpul de setare `{{<T "MaximumPrecision" >}}`. Utilizați tastele săgeată ◁ ▷ pentru a seta precizia maximă dorită. Precizia înregistrării greutății pe dispozitiv urmează acum setarea stabilită.

    ![VitalControl: menu path settings maximum precision weight recording](../images/precisionweightrecording.png "Stipulați precizia maximă a înregistrării greutății.")

<br>
Salvați setările și reveniți la meniul principal `{{<T "DataAcquisition" >}}` apăsând tasta `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.

## Modul de evaluare a animalelor {#mode-of-animal-rating}

{{% alert title="Explicație" %}}
În modul simplu, doar condiția generală este interogată în timpul evaluării animalelor (verde/galben/roșu). În evaluarea extinsă, sunt interogate 4 categorii de evaluare: condiția generală, consumul de hrană, diareea și boala respiratorie.
{{% /alert %}}

Pentru a seta `{{<T "RatingAnimals" >}}` pe dispozitivul dvs., procedați după cum urmează.

1. În ecranul principal al dispozitivului dvs. VitalControl, selectați elementul de meniu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` și apăsați butonul `{{<T "Ok" >}}`.

2. Se deschide un submeniu în care sunt afișate diverse setări. Utilizați tastele săgeată △ ▽ pentru a selecta `{{<T "DataAcquisition" >}}`. Confirmați cu `{{<T "Ok" >}}`.

3. Un alt submeniu se deschide în care puteți folosi tastele săgeată △ ▽ pentru a comuta între câmpurile de setare pentru `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` și `{{<T "ControlPeriodFreshCows" >}}`. Selectați `{{<T "RatingAnimals" >}}` și confirmați cu `{{<T "Ok" >}}`.

4. Folosiți tastele săgeată ◁ ▷ pentru a seta evaluarea dorită a animalelor.

    ![VitalControl: setări meniu evaluare medie a animalelor](../images/raitingofanimals.png "Evaluarea animalelor")

## Perioada de control a vacilor proaspete {#control-period-of-fresh-cows}

{{% alert title="Explicație" %}}
Când gestionați vacile proaspete, verificarea zilnică a animalelor pentru câteva zile după naștere, inclusiv măsurarea temperaturii lor, este considerată o practică de rutină. Durata acestei perioade de control variază considerabil de la o fermă la alta. Din acest motiv, durata perioadei de control poate fi setată la o valoare între 3 și 14 zile în setările VitalControl. Valoarea setată pentru perioada de control a vacilor proaspete determină numărul de coloane ale graficului cu coloane afișat pentru fiecare animal în [lista vacilor proaspete](../../lists/fresh-cows/).
{{% /alert %}}

Pentru a seta durata perioadei de control pentru vacile proaspete, procedați după cum urmează:

1. În ecranul principal al dispozitivului dvs. VitalControl, selectați elementul de meniu <img src="/icons/gear.svg" width="25" align="bottom" alt="Setări" /> `{{<T "Settings" >}}` și apăsați butonul `{{<T "Ok" >}}`.

2. Se deschide un submeniu în care sunt afișate diverse setări. Folosiți tastele săgeată △ ▽ pentru a selecta `{{<T "DataAcquisition" >}}`. Confirmați cu `{{<T "Ok" >}}`.

3. Un alt submeniu se deschide în care puteți folosi tastele săgeată △ ▽ pentru a comuta între câmpurile de setare pentru `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` și `{{<T "ControlPeriodFreshCows" >}}`. Selectați `{{<T "ControlPeriodFreshCows" >}}` și confirmați cu `{{<T "Ok" >}}`.

4. Folosiți tastele săgeată ◁ ▷ pentru a seta durata dorită a perioadei de control în zile postpartum.

    ![VitalControl: setări meniu perioadă de control vaci proaspete](../images/controlperiodfreshcows.png "Perioada de control vaci proaspete")

<br>

Salvați setările și reveniți la meniul principal <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` apăsând tasta `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.
