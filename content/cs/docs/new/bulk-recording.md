---
title: "Hromadná registrace skupiny zakoupených zvířat"
linkTitle: "Hromadný záznam"
date: 2023-07-28T13:25:28+02:00
weight: 15
draft: false
slug: bulk-recording
description: >
  Použijte čtečku čárových kódů k zaznamenání různých zvířat.
kategorie: [Hromadný záznam]
štítky: [Hromadný záznam]
translationKey: new/bulk-recording
---
## Hromadný záznam {#bulk-recording}

S pomocí hromadné registrace můžete zachytit velké množství zvířat v krátkém čase a uložit je do svého zařízení. Použijte čtečku čárových kódů k naskenování čárových kódů pro číslo ušní známky a datum narození na pasech skotu. Zvíře je automaticky uloženo a můžete okamžitě naskenovat další pas. Pro provedení hromadné registrace zvířat postupujte následovně:

1. Připojte čtečku čárových kódů k VitalControl pomocí kabelu.

2. Na hlavní obrazovce vašeho zařízení VitalControl vyberte položku menu <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="Nové zvíře" /> `{{<T "New" >}}` a stiskněte tlačítko `{{<T "Ok" >}}`.

3. Otevře se podmenu. Pomocí šipek ◁ ▷ △ ▽ vyberte položku menu <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Hromadný záznam" /> `{{<T "BulkRecording" >}}` a potvrďte `{{<T "Ok" >}}`.

4. Otevře se další podmenu, které obsahuje jedno pole pro číslo ušní známky zvířete a další pole pro datum narození zvířete. Nejprve naskenujte čárový kód pro číslo ušní známky. Okraj pole se změní z červené na zelenou. Poté naskenujte datum narození. Okraj se krátce změní na zelenou, než se oba okraje opět objeví červené. Počítadlo pod symbolem pasu <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Pasy zvířat" title="Pasy zvířat" /> v horní části obrazovky se zvýší z 0 na 1. První zvíře bylo uloženo. Pokračujte a naskenujte další pasy skotu. Po každém naskenovaném pasu se počítadlo pod symbolem pasu <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Pasy zvířat" title="Pasy zvířat" /> zvýší o jedno. Počítadlo pod symbolem stáda <img src="/icons/header/group.svg" width="35" align="bottom" alt="Skupina zvířat"  title="Skupina zvířat" /> se také zvýší o jedno.

{{% alert title="Nápověda" %}}
Počítadlo pod symbolem pasu <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Zvířecí pasy" title="Zvířecí pasy" /> ukazuje, kolik pasů jste naskenovali najednou, aniž byste opustili obrazovku `{{<T "BulkRecording" >}}`. Počítadlo pod symbolem stáda <img src="/icons/header/group.svg" width="35" align="bottom" alt="Nové zvíře" /> ukazuje, kolik pasů jste naskenovali celkem. Toto počítadlo se nevrací na nulu, pokud opustíte obrazovku `{{<T "BulkRecording" >}}`. Číslo odpovídá vašim záznamům v položce menu ['Nákupy'](../new-on-farm/purchased-animals/).
{{% /alert %}}

   ![VitalControl: Menu 'Nové - Hromadné nahrávání'](../images/bulk-recording.png "Hromadné nahrávání")

{{% alert title="Nápověda" %}}
V položce menu `{{<T "BulkRecording" >}}` máte další možnosti nastavení. Ty jsou vysvětleny níže. Jako přípravné kroky vždy nejprve přistupte k položce menu `{{<T "BulkRecording" >}}` a poté pokračujte podle pokynů.
{{% /alert %}}

{{% alert title="Nápověda" %}}
Během procesu skenování se mohou objevit chybové zprávy. V tomto případě čtečka čárových kódů vydá zvuk a další skenování není možné. Potvrďte odpovídající chybovou zprávu na displeji VitalControl a pokračujte ve skenování.
{{% /alert %}}

### Povinné datum narození {#birth-date-mandatory}

S touto možností nastavení můžete určit, zda musí být při vytváření zvířat uvedeno datum narození. Pokud tuto možnost deaktivujete, stačí naskenovat čárový kód pro uložení zvířete. Pro tato zvířata je však jako datum narození uloženo aktuální datum! Tato funkce je ve výchozím nastavení povolena. Pro deaktivaci postupujte následovně:

1. Pomocí <img src="/icons/gear.svg" width="25" align="bottom" alt="Nabídka nastavení" /> tlačítka `On/Off` otevřete nabídku nastavení.

2. Pomocí šipek △ ▽ vyberte možnost nastavení `{{<T "BirthDateMandatory" >}}` a potvrďte `{{<T "Ok" >}}`.

3. Žlutý kruh symbolizuje, že funkce je aktivována. Šedý kruh symbolizuje, že funkce je deaktivována.

4. Uložte nastavení a pomocí klávesy `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Uložit a vrátit se" /> se vraťte k položce menu <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Hromadné nahrávání" />&nbsp; `{{<T "BulkRecording" >}}`.

![VitalControl: Menu Nové Datum narození povinné](../images/birthdate.png "Datum narození povinné")

### Výchozí hodnoty {#default-values}

V nabídce nastavení `{{<T "DefaultValues" >}}` nastavíte standardy, které platí pro každé zvíře, které vytvoříte. Proces vytváření pomocí čtečky čárových kódů zůstává nezměněn, jak je popsáno výše. Máte možnost nastavit typ hospodářských zvířat, pohlaví, plemeno a místo pobytu. Pro nastavení `{{<T "DefaultValues" >}}` postupujte následovně:

1. Použijte tlačítko <img src="/icons/gear.svg" width="25" align="bottom" alt="Nabídka nastavení" /> `On/Off` pro otevření nabídky nastavení.

2. Pomocí šipek △ ▽ vyberte položku nabídky `{{<T "DefaultValues" >}}` a potvrďte `{{<T "Ok" >}}`.

3. Otevře se podnabídka s různými možnostmi nastavení. Pomocí šipek △ ▽ vyberte požadovanou možnost nastavení. Pomocí šipek ◁ ▷ vyberte požadované nastavení.

4. Uložte nastavení a pomocí klávesy `F1`&nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Uložit a vrátit se" /> se vraťte k položce nabídky <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Hromadné zaznamenávání" />&nbsp; `{{<T "BulkRecording" >}}` .

![VitalControl: Menu Nové Výchozí hodnoty](../images/defaultvalues.png "Výchozí hodnoty")

### Zaznamenané hodnoty {#recorded-values}

V nabídce nastavení `{{<T "RecordedValues" >}}` můžete určit, které hodnoty by měly být zachyceny kromě čísla ušní známky a data narození. Můžete si vybrat mezi `{{<T "Breed" >}}`, `{{<T "Sex" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "CurrentWeight" >}}`, `{{<T "BirthWeight" >}}` a `{{<T "TypeAnimal" >}}`. Jakmile nastavíte alespoň jednu hodnotu, proces se během skenování změní. Nejprve naskenujte číslo ušní známky a datum narození. Poté pomocí směrových kláves △ ▽ vyberte hodnoty, které chcete nastavit, a nastavte hodnoty. Poté uložte své záznamy pomocí klávesy `F3`. Teprve potom je zvíře vytvořeno! Pro nastavení hodnot, které mají být zaznamenány, postupujte následovně:

1. Použijte tlačítko <img src="/icons/gear.svg" width="25" align="bottom" alt="Nabídka nastavení" /> `On/Off` pro otevření nabídky nastavení.

2. Pomocí šipek △ ▽ vyberte položku nabídky `{{<T "RecordedValues" >}}` a potvrďte `{{<T "Ok" >}}`.


3. Vyberte požadovanou hodnotu k zaznamenání pomocí šipek △ ▽ a potvrďte stisknutím `{{<T "Ok" >}}`. Objeví se žlutý kruh. Pokud chcete deaktivovat hodnotu k zaznamenání, potvrďte znovu stisknutím `{{<T "Ok" >}}`. Žlutý kruh zmizí.

4. Uložte nastavení a použijte klávesu `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Uložit a vrátit se" /> pro návrat do položky menu <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Hromadné zaznamenávání" />&nbsp; `{{<T "BulkRecording" >}}`.

5. Pokud chcete znovu deaktivovat všechny hodnoty k zaznamenání, vyberte možnost nastavení `{{<T "EnableAllResetOrder" >}}` v položce menu `{{<T "RecordedValues" >}}` a potvrďte stisknutím `{{<T "Ok" >}}`.

   ![VitalControl: Menu Nové zaznamenané hodnoty](../images/recordvalues.png "Zaznamenané hodnoty")
