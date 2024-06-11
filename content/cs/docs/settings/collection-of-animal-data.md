---
title: "Získávání dat"
linkTitle: "Získávání dat"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: data-acquisition
description: >
 Ukládání relevantních nastavení pro sběr dat o zvířatech
categories: [nastavení]
tags: [nastavení, získávání dat]
translationKey: settings/data-acquisition
maphilight: true
---
## Přehled {#overview}

Následující grafika uvádí dostupná nastavení týkající se záznamu dat o zvířatech:

<img src="../images/animaldataacquisition.png" alt="Získávání dat o zvířatech" title="Získávání dat o zvířatech" usemap="#workmap-overview" class="maphilight" />

<map name="workmap-overview">
  <area shape="rect" coords="3,40,239,80" alt="Záznam hmotnosti" title="Podmenu: Nastavení pro záznam hmotnosti&#10;Kliknutí myší: otevřít dokumentaci" href="#settings-weight-recording">
  <area shape="rect" coords="3,80,239,160" alt="Režim hodnocení zvířat" title="Nastavit režim hodnocení zvířat&#10;Kliknutí myší: otevřít dokumentaci" href="#mode-of-animal-rating">
  <area shape="rect" coords="3,160,239,240" alt="Délka kontrolního období čerstvých krav" title="Nastavit délku kontrolního období pro čerstvé krávy&#10;Kliknutí myší: otevřít dokumentaci" href="#control-period-of-fresh-cows">

  <area shape="rect" coords="2,282,125,318" alt="Zpět" title="Přeskočit o úroveň zpět" href="/cs/docs/settings/">
</map>

{{% alert title="Tip" %}}
Přesuňte ukazatel myši nad symbol v níže uvedené grafice a nechte jej chvíli stát. Zobrazí se tooltip s informacemi o příslušném nastavení. Pokud kliknete na jednu z řádků, budete přesměrováni na popis příslušného nastavení.
{{% /alert %}}

## Nastavení *Záznam hmotnosti* {#settings-weight-recording}

Následující grafika uvádí dostupná nastavení týkající se záznamu hmotnosti zvířat:

<img src="../images/weightrecording.png" alt="Položky podmenu nastavení pro záznam hmotnosti" title="Nastavení záznamu hmotnosti" usemap="#workmap-weight" class="maphilight" />

<map name="workmap-weight">
  <area shape="rect" coords="1,40,230,199" alt="Hodnoty prahů hodnocení denního přírůstku hmotnosti" title="Nastavit hodnoty prahů pro hodnocení denního přírůstku hmotnosti&#10;Kliknutí myší: otevřít dokumentaci" href="#assessment-of-daily-weight-gain-threshold-values">
  <area shape="rect" coords="1,200,230,280" alt="Porodní hmotnost" title="Nastavit navrhovanou porodní hmotnost při registraci nového zvířete&#10;Kliknutí myší: otevřít dokumentaci" href="#birth-weight">
  <area shape="rect" coords="1,280,230,360" alt="Průměrný denní přírůstek hmotnosti" title="Nastavit průměrný denní přírůstek hmotnosti používaný při odhadu hmotnosti zvířat&#10;Kliknutí myší: otevřít dokumentaci" href="#average-daily-weight-gain">
  <area shape="rect" coords="1,360,230,440" alt="Přesnost záznamu hmotnosti" title="Nastavit přesnost záznamu hmotnosti&#10;Kliknutí myší: otevřít dokumentaci" href="#precision-of-weight-recording">
</map>

### Hodnocení denního přírůstku hmotnosti: Prahové hodnoty {#assessment-of-daily-weight-gain-threshold-values}

{{% alert title="Tip" %}}
Červené pole ukazuje oblast "kriticky nízkého přírůstku hmotnosti". Žluté pole ukazuje oblast "suboptimálního přírůstku hmotnosti".
{{% /alert %}}

Pro úpravu prahových hodnot pro hodnocení denního přírůstku hmotnosti postupujte následovně:

1. Na hlavní obrazovce vašeho zařízení VitalControl vyberte položku menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Nastavení" /> `{{<T "Settings" >}}` a stiskněte tlačítko `{{<T "Ok" >}}`.

2. Otevře se podmenu, ve kterém jsou zobrazeny různé nastavení. Pomocí šipek △ ▽ vyberte `{{<T "DataAcquisition" >}}`. Potvrďte stisknutím `{{<T "Ok" >}}`.

3. Otevře se další podmenu, ve kterém můžete pomocí šipek △ ▽ přepínat mezi nastaveními pro `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` a `{{<T "ControlPeriodFreshCows" >}}`. Vyberte `{{<T "WeightRecording" >}}` a potvrďte stisknutím `{{<T "Ok" >}}`.

4. Pole předvoleb `{{<T "DailyWeightGain" >}}` je automaticky vybráno. Pomocí šipek ◁ ▷ vyberte požadovaný druh zvířete. Potvrďte stisknutím `{{<T "Ok" >}}`. Alternativně můžete použít ikonu tužky s klávesou <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Upravit" /> `F3` pro přímý přechod k úpravě červených a žlutých oblastí.

5. Pomocí šipek △ ▽ vyberte požadovaný "větší než" nebo "rovný" nárůst g/den v červené a žluté oblasti. Pomocí kláves `F2`/`F3` 🡄 🡆 nebo šipek ◁ ▷ přepínejte mezi červenou a žlutou oblastí.

6. Jakmile nastavíte požadovaný "větší než" nebo "rovný" nárůst g/den, použijte klávesu `F1` <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Ukončit" /> nebo potvrďte stisknutím `{{<T "Ok" >}}` pro návrat k `{{<T "DailyWeightGain" >}}`.

    ![VitalControl: menu nastavení denního přírůstku hmotnosti](../images/dailyweightgain.png "Denní přírůstek hmotnosti")

### Porodní hmotnost {#birth-weight}

Zařízení používá porodní hmotnost uloženou zde v nastaveních jako výchozí hodnotu při vytváření nových zvířat. Aby bylo možné rychleji vybrat individuální porodní hmotnost nově narozeného zvířete, možná budete muset upravit tuto výchozí hodnotu pro vaši farmu. Pro úpravu hodnoty `{{<T "BirthWeight" >}}` postupujte následovně:


1. Na hlavní obrazovce vašeho zařízení VitalControl vyberte položku menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` a stiskněte tlačítko `{{<T "Ok" >}}`.

2. Otevře se podmenu, ve kterém jsou zobrazeny různé nastavení. Pomocí šipek △ ▽ vyberte `{{<T "DataAcquisition" >}}`. Potvrďte stisknutím `{{<T "Ok" >}}`.

3. Otevře se další podmenu, ve kterém můžete pomocí šipek △ ▽ přepínat mezi nastaveními pro `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` a `{{<T "ControlPeriodFreshCows" >}}`. Vyberte `{{<T "WeightRecording" >}}` a potvrďte stisknutím `{{<T "Ok" >}}`.

4. Pomocí šipek △ ▽ vyberte pole nastavení `{{<T "BirthWeight" >}}` a pomocí šipek ◁ ▷ nastavte požadovanou porodní hmotnost. Zařízení nyní používá zde definovanou porodní hmotnost jako standard při vytváření nových zvířat. Individuální porodní hmotnost novorozeného zvířete lze poté vybrat rychleji.

    ![VitalControl: menu nastavení porodní hmotnosti](../images/birthweight.png "Porodní hmotnost")

{{% alert title="Varování" color="warning" %}}
Standardní porodní hmotnost je pouze přibližná hodnota, kterou je třeba individuálně upravit při vytváření nového zvířete.
Pokud nechcete tuto úpravu provádět nebo pokud vytváříte zvířata automaticky [na pozadí](../animal-registration/#auto-registration), neměla by být při vytváření nového zvířete porodní hmotnost dotazována ani ukládána. To lze definovat v nastaveních pro [registraci zvířat](../animal-registration/#set-recorded-weights).
{{% /alert %}}

{{% alert title="Výchozí hodnoty porodních hmotností:" %}}

| Druh nového zvířete           |  Jehně         | Tele          |
|-------------------------------|----------------|---------------| 
| Výchozí hodnota *porodní hmotnost*: | 4 kg           | 40 kg         |
| Rozsah hodnot :               | 1,0 až 99 kg   | 1,0 až 99 kg  |
{{% /alert %}}

### Průměrný denní přírůstek hmotnosti {#average-daily-weight-gain}

{{% alert title="Vysvětlení" %}}
Při [vážení](../../actions/record-weight/) zvířete se pro výpočet navrhované hodnoty hmotnosti během vážení zvířete používá definovaný denní přírůstek. Pokud je navrhovaná hodnota hmotnosti pro většinu vážených zvířat příliš nízká nebo příliš vysoká, měli byste upravit definovanou hodnotu směrem dolů nebo nahoru, aby se zkrátil čas potřebný k úpravě hodnoty hmotnosti pomocí šipek.
{{% /alert %}}


Pro nastavení `{{<T "AverageDailyWeightGain" >}}` použitého při výpočtu přibližné hmotnosti zvířete postupujte následovně.

1. Na hlavní obrazovce vašeho zařízení VitalControl vyberte položku menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` a stiskněte tlačítko `{{<T "Ok" >}}`.

2. Otevře se podmenu, ve kterém jsou zobrazeny různé nastavení. Pomocí šipek △ ▽ vyberte `{{<T "DataAcquisition" >}}`. Potvrďte stisknutím `{{<T "Ok" >}}`.

3. Otevře se další podmenu, ve kterém můžete pomocí šipek △ ▽ přepínat mezi poli nastavení pro `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` a `{{<T "ControlPeriodFreshCows" >}}`. Vyberte `{{<T "WeightRecording" >}}` a potvrďte stisknutím `{{<T "Ok" >}}`.

4. Pomocí šipek △ ▽ vyberte pole nastavení `{{<T "AverageDailyWeightGain" >}}`. Pomocí šipek ◁ ▷ nastavte požadovaný průměrný denní přírůstek g/den. Zařízení nyní používá zde definovaný průměrný denní přírůstek jako standard pro očekávaný denní přírůstek zvířat.

    ![VitalControl: menu settings average daily weight gain](../images/averagedailyweightgain.png "Průměrný denní přírůstek hmotnosti")

### Přesnost záznamu hmotnosti {#precision-of-weight-recording}

{{% alert title="Vysvětlení" %}}
V závislosti na použití a druhu zvířete (*jehně*, *tele*, *kráva*) existují různé požadavky na rozlišení zaznamenané hmotnosti (přesnost *10 g*, *100 g* nebo *1 kg*). K splnění těchto požadavků je nutné použít nastavení *Maximální přesnost*.
{{% /alert %}}

Tabulka níže ukazuje přesnost záznamu hmotnosti v závislosti na rozsahu hmotnosti a nastavení stanoveném pro *Maximální přesnost*:

| Nastavení *Maximální přesnost*:            |  10 g | 100 g | 1 kg |
|--------------------------------------------|-------|-------|------|
| Přesnost v rozsahu *0 až 9,9 kg*:          | 10 g  | 100 g | 1 kg |
| Přesnost v rozsahu *10 až 49,9 kg*:        | 100 g | 100 g | 1 kg |
| Přesnost v rozsahu *50 až 99,9 kg*:        | 500 g | 500 g | 1 kg |
| Přesnost pro hodnoty *≥ 100 kg*:           | 1 kg  | 1 kg  | 1 kg |

Pro nastavení maximální přesnosti při záznamu hmotnosti zvířat pomocí vašeho zařízení postupujte následovně:


1. Na hlavní obrazovce vašeho zařízení VitalControl vyberte položku menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` a stiskněte tlačítko `{{<T "Ok" >}}`.

2. Otevře se podmenu, ve kterém jsou zobrazeny různé nastavení. Pomocí šipek △ ▽ vyberte `{{<T "DataAcquisition" >}}`. Potvrďte stisknutím `{{<T "Ok" >}}`.

3. Otevře se další podmenu, ve kterém můžete pomocí šipek △ ▽ přepínat mezi poli nastavení pro `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` a `{{<T "ControlPeriodFreshCows" >}}`. Vyberte `{{<T "WeightRecording" >}}` a potvrďte stisknutím `{{<T "Ok" >}}`.

4. Pomocí šipek △ ▽ vyberte pole nastavení `{{<T "MaximumPrecision" >}}`. Pomocí šipek ◁ ▷ nastavte požadovanou maximální přesnost. Přesnost záznamu hmotnosti na zařízení nyní odpovídá stanovenému nastavení.

    ![VitalControl: menu cesta nastavení maximální přesnost záznamu hmotnosti](../images/precisionweightrecording.png "Stanovte maximální přesnost záznamu hmotnosti.")

<br>
Uložte nastavení a vraťte se do hlavního menu `{{<T "DataAcquisition" >}}` stisknutím klávesy `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Uložit a vrátit se" />&nbsp;.

## Režim hodnocení zvířat {#mode-of-animal-rating}

{{% alert title="Vysvětlení" %}}
V jednoduchém režimu se při hodnocení zvířat dotazuje pouze na celkový stav (zelená/žlutá/červená). V rozšířeném hodnocení se dotazují 4 kategorie hodnocení: celkový stav, spotřeba krmiva, průjem a respirační onemocnění.
{{% /alert %}}

Pro nastavení `{{<T "RatingAnimals" >}}` na vašem zařízení postupujte následovně.

1. Na hlavní obrazovce vašeho zařízení VitalControl vyberte položku menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` a stiskněte tlačítko `{{<T "Ok" >}}`.

2. Otevře se podmenu, ve kterém jsou zobrazeny různé nastavení. Pomocí šipek △ ▽ vyberte `{{<T "DataAcquisition" >}}`. Potvrďte stisknutím `{{<T "Ok" >}}`.

3. Otevře se další podmenu, ve kterém můžete pomocí šipek △ ▽ přepínat mezi poli nastavení pro `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` a `{{<T "ControlPeriodFreshCows" >}}`. Vyberte `{{<T "RatingAnimals" >}}` a potvrďte stisknutím `{{<T "Ok" >}}`.


4. Použijte klávesy se šipkami ◁ ▷ k nastavení požadovaného hodnocení zvířat.

    ![VitalControl: nastavení menu průměrné hodnocení zvířat](../images/raitingofanimals.png "Hodnocení zvířat")

## Kontrolní období čerstvých krav {#control-period-of-fresh-cows}

{{% alert title="Vysvětlení" %}}
Při správě čerstvých krav se považuje za nejlepší praxi kontrolovat zvířata denně po několik dní po porodu, včetně měření jejich teploty. Délka tohoto kontrolního období se značně liší od farmy k farmě. Z tohoto důvodu lze délku kontrolního období nastavit na hodnotu mezi 3 a 14 dny v nastavení VitalControl. Nastavená hodnota pro kontrolní období čerstvých krav určuje počet sloupců sloupcového grafu zobrazeného pro každé zvíře v [seznamu čerstvých krav](../../lists/fresh-cows/).
{{% /alert %}}

Pro nastavení délky kontrolního období pro vaše čerstvé krávy postupujte následovně:

1. Na hlavní obrazovce vašeho zařízení VitalControl vyberte položku menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Nastavení" /> `{{<T "Settings" >}}` a stiskněte tlačítko `{{<T "Ok" >}}`.

2. Otevře se podmenu, ve kterém jsou zobrazeny různé nastavení. Použijte klávesy se šipkami △ ▽ k výběru `{{<T "DataAcquisition" >}}`. Potvrďte stisknutím `{{<T "Ok" >}}`.

3. Otevře se další podmenu, ve kterém můžete pomocí kláves se šipkami △ ▽ přepínat mezi poli nastavení `{{<T "WeightRecording" >}}`, `{{<T "RatingAnimals" >}}` a `{{<T "ControlPeriodFreshCows" >}}`. Vyberte `{{<T "ControlPeriodFreshCows" >}}` a potvrďte stisknutím `{{<T "Ok" >}}`.

4. Použijte klávesy se šipkami ◁ ▷ k nastavení požadované délky kontrolního období ve dnech po porodu.

    ![VitalControl: nastavení menu kontrolní období čerstvých krav](../images/controlperiodfreshcows.png "Kontrolní období čerstvých krav")

<br>

Uložte nastavení a vraťte se do hlavního menu <img src="/icons/gear.svg" width="25" align="bottom" alt="Nastavení" /> `{{<T "Settings" >}}` stisknutím klávesy `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Uložit a vrátit se" />&nbsp;.
