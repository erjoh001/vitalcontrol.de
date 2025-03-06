---
title: Výměna dat mezi VitalControl a softwarem pro správu stáda Herde
linkTitle: Výměna dat
date: 2023-08-04T12:22:12+02:00
draft: false
description: >
  Synchronizujte zvířata uložená na zařízení VitalControl se zvířaty spravovanými softwarem *Herde* a přeneste naměřené hodnoty zaznamenané zařízením VitalControl do softwaru *Herde*.
weight: 20
kategorie: [Výměna dat, DSP Herde]
translationKey: DSPherde/data-exchange
---
Postupujte podle níže uvedených kroků pro synchronizaci dat mezi softwarem `Herde` a zařízením VitalControl:

### Připojte VitalControl k PC

1. Připojte zařízení VitalControl k vašemu počítači nebo notebooku pomocí dodaného USB kabelu.

   ![Připojte VitalControl k PC nebo notebooku](/images/synchronisation/connect-to-pc.svg "Připojte VitalControl k PC")

1. Ujistěte se, že je vaše zařízení VitalControl zapnuté.

### Proveďte výměnu dat

1. V softwaru `Herde` proveďte úplnou výměnu dat. V závislosti na konfiguraci vašeho uživatelského rozhraní můžete tuto výměnu vyvolat prostřednictvím položky menu `Úplná výměna dat` v hlavním menu (nejvyšší úroveň položky _Technologie_), v postranním menu nebo ve vaší přizpůsobené sadě nástrojů (horizontální nebo vertikální).

   ![Software Herde: Spuštění úplné výměny dat](../screenshots/data-exchange.png "Herde: Spuštění výměny dat")

1. Otevře se vyskakovací okno, které v postranním panelu vlevo uvádí stanovené technologické vazby. Klikněte na tlačítko označené `VitalControl` pro zahájení výměny dat:

   ![Software Herde, Zahájení výměny dat](../screenshots/start-transfer.png "Herde: Zahájení výměny dat")

1. Při první výměně dat se objeví varování, které naznačuje, že na zařízení VitalControl ještě nejsou zaregistrována žádná zvířata. Potvrďte toto upozornění tlačítkem `Ano`. Poté se zahájí výměna dat.

   ![Software Herde, výměna dat: varování](../screenshots/warning.png "Výměna dat: varování")

1. Výměna dat je dvoukrokový proces: V prvním kroku <span style="font-size: 140%">➊</span> jsou data o zvířatech přenesena ze softwaru `Herde` do zařízení VitalControl. Ve druhém kroku <span style="font-size: 140%">➋</span> jsou naměřená data shromážděná zařízením VitalControl přenesena do softwaru `Herde`. Počet importovaných datových sad (zvířata, porody, upozornění a váhy) je uveden ve vyskakovacím okně:

![Výměna dat se softwarem Herde: Postup](../screenshots/data-transfer.png "Výměna dat: Postup")

1. Úspěšné dokončení výměny dat je signalizováno vyskakovacím oknem s úspěšnou zprávou.

   ![Software Herde: Úspěšná zpráva o výměně dat](../screenshots/success-message.png "Herde: Úspěšná zpráva o výměně dat")

    {{% alert title="Pozor" %}}
Pokud je na zařízení VitalControl zaregistrováno mnoho zvířat, může výměna dat trvat delší dobu. Průběh přenosu dat lze sledovat na displeji zařízení.

![VitalControl, výměna dat: ukazatel průběhu](../../vcsynchronizer/images/import-animals/data-transfer.png "VitalControl: ukazatel průběhu výměny dat")
    {{% /alert %}}
