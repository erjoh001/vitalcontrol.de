---
title: "Seznam čerstvých krav"
linkTitle: "Seznam čerstvých krav"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: fresh-cows
description: >
  Usnadněte kontrolu vašich čerstvých krav.
kategorie: [Seznamy]
štítky: [Seznamy, čerstvá kráva]
translationKey: lists/fresh-cows
---
### Seznam čerstvých krav {#fresh-cows-list}

{{% alert title="Vysvětlení" %}}
Při správě čerstvých krav se považuje za nejlepší praxi kontrolovat zvířata denně po několik dní po porodu. Seznam čerstvých krav podporuje tuto kontrolu čerstvých krav, zejména pokud jde o zaznamenávání teploty. Pro každé zvíře je zobrazen sloupcový graf za všechny dny kontrolního období, každý den kontrolního období je reprezentován svislou čarou. Podle barvy čáry (zelená, žlutá nebo červená) můžete vidět, zda byla v daný den pro příslušné zvíře naměřena normální, zvýšená nebo kriticky zvýšená teplota.
{{% /alert %}}

Krávy jsou zařazeny na seznam čerstvých krav ihned po zaregistrování jejich porodu. Na tomto seznamu zůstávají po určitou dobu, délku tohoto období (ve dnech) lze nastavit v [nastavení](../../settings/data-acquisition/#control-period-of-fresh-cows)).
 Následující akce jsou k dispozici pro tento seznam:

- [Plné menu akcí](../alarm/#full-action-menu)
- [Data o zvířeti](../alarm/#animal-data)
- [Změřit teplotu](../alarm/#take-temperature)
- [Přepnout stav alarmu](#toggle-alarm-status)
- [Přepnout stav sledování](#toggle-watch-status)
- [Skrýt změřené krávy](#hide-measured-cows)
- [Vyhledat zvíře](../alarm/#search-animal)
- [Nastavit filtr](../alarm/#set-filter)

{{% alert title="Tip" %}}
Některé akce je třeba provést stejným způsobem jako v [seznamu alarmů](../alarm). Ty zde nejsou vysvětleny. Proveďte předběžné kroky a použijte odkaz příslušné akce, abyste se dostali k pokynům.
{{% /alert %}}

### Předběžné kroky {#preliminary-steps}

1. Vyberte položku menu <img src="/icons/main/lists.svg" width="25" align="bottom" alt="Seznamy" /> `{{<T "Lists" >}}` na hlavní obrazovce vašeho zařízení VitalControl a stiskněte tlačítko `{{<T "Ok" >}}`.


2. Otevře se podnabídka, ve které se zobrazí různé seznamy. Vyberte seznam `{{<T "FreshCows" >}}` <img src="/icons/lists/freshcows.svg" width="30" align="bottom" alt="Fresh-cows" />. Potvrďte tlačítkem `{{<T "Ok" >}}`.

3. Seznam čerstvých krav je nyní otevřen.

   ![VitalControl Seznamy Seznam čerstvých krav](../images/firststeps4.png "Seznam čerstvých krav")

### Přepnout stav alarmu {#toggle-alarm-status}

1. Dokončete předběžné kroky.

2. Použijte klávesu `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; k vyvolání vyskakovací nabídky, která uvádí možné akce při stisknutí klávesy `{{<T "Ok" >}}`. Pomocí šipek △ ▽ zvýrazněte akci `{{<T "ToggleAlarmStatus" >}}` a vyberte tuto možnost stisknutím středního tlačítka `{{<T "Ok" >}}` nebo klávesy `F3` `{{<T "Ok" >}}`.

3. V seznamu čerstvých krav použijte šipky △ ▽ k výběru požadovaného zvířete a potvrďte tlačítkem `{{<T "Ok" >}}`. Alternativně můžete vyhledat zvíře. Použijte tlačítko `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> a pomocí šipek ◁ ▷ △ ▽ vyberte požadované číslice. Nakonec potvrďte tlačítkem `{{<T "Ok" >}}`.

4. Zvíře je nyní přidáno nebo odstraněno ze seznamu alarmů v závislosti na jeho počátečním stavu.

   ![VitalControl Seznamy Seznam čerstvých krav](../images/togglealarmstatus.png "Přepnout stav alarmu")

### Přepnout stav sledování {#toggle-watch-status}

1. Dokončete předběžné kroky.

2. Použijte klávesu `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; k vyvolání vyskakovací nabídky, která uvádí možné akce při stisknutí klávesy `{{<T "Ok" >}}`. Pomocí šipek △ ▽ zvýrazněte akci `{{<T "ToggleWatchStatus" >}}` a vyberte tuto možnost stisknutím středního tlačítka `{{<T "Ok" >}}` nebo klávesy `F3` `{{<T "Ok" >}}`.

3. V seznamu čerstvých krav použijte šipky △ ▽ k výběru požadovaného zvířete a potvrďte tlačítkem `{{<T "Ok" >}}`. Alternativně můžete vyhledat zvíře. Použijte tlačítko `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> a pomocí šipek ◁ ▷ △ ▽ vyberte požadované číslice. Nakonec potvrďte tlačítkem `{{<T "Ok" >}}`.

4. Zvíře je nyní přidáno nebo odstraněno ze seznamu sledování v závislosti na jeho počátečním stavu.


   ![VitalControl Lists Fresh cows list](../images/togglewatchstatus.png "Toggle watch status")

### Skrýt měřené krávy {#hide-measured-cows}

Pokud je tato funkce aktivována, zvířata, u kterých bylo provedeno měření teploty, jsou skryta na seznamu suchých krav. Pokud tato funkce není aktivována, zvířata zůstávají viditelná na seznamu.

1. Dokončete předběžné kroky.

2. Použijte klávesu `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Actions" />&nbsp; k vyvolání vyskakovacího menu, které obsahuje různé možnosti. Použijte šipky △ ▽ k zvýraznění možnosti `{{<T "HideMeasuredCows" >}}` a tuto možnost přepněte stisknutím centrálního tlačítka `{{<T "Ok" >}}` nebo klávesy `F3` `{{<T "Ok" >}}`.

3. V seznamu čerstvých krav použijte šipky △ ▽ k výběru požadovaného zvířete a potvrďte stisknutím `{{<T "Ok" >}}`. Alternativně můžete hledat zvíře. Použijte tlačítko `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> a použijte šipky ◁ ▷ △ ▽ k výběru požadovaných číslic. Nakonec potvrďte stisknutím `{{<T "Ok" >}}`.

4. Funkce `{{<T "HideMeasuredCows" >}}` je nyní aktivována. Aktivace je indikována zaškrtnutím políčka.

   ![VitalControl Lists Fresh cows list](../images/hidemeasuredcows.png "Hide measured cows")
