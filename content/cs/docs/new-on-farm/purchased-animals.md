---
title: Zakoupená zvířata
linkTitle: Zakoupená zvířata
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: purchased-animals
description: >
  Zde můžete zobrazit své aktuální nákupy a exportovat data.
categories: [Nové na farmě]
tags: [Nové na farmě]
translationKey: new-on-farm/new-on-farm
---
## Zakoupená zvířata {#purchased-animals}

V tomto seznamu najdete všechna zvířata, která jste vytvořili prostřednictvím hromadného záznamu. Tento seznam můžete exportovat a tím přímo zaregistrovat své přírůstky v programu pro správu stáda DSP-Herde a v HI-Tier. Alternativně můžete smazat všechny oznámení o nákupu.

{{% alert title="Tip" %}}
Pro export dat potřebujete přiložený UBS stick. Před pokračováním podle pokynů připojte USB stick s USB-C adaptérem k vašemu zařízení VitalControl.
{{% /alert %}}

1. Na hlavní obrazovce vašeho zařízení VitalControl vyberte položku menu <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Nové na farmě" /> `{{<T "NewOnFarm" >}}` a stiskněte tlačítko `{{<T "Ok" >}}`.

2. Otevře se podmenu, ve kterém si můžete vybrat mezi <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Nové na farmě, bez transpondéru" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Zakoupená zvířata" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Bez národního ID zvířete" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Porody" /> `{{<T "Births" >}}` a <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Bez transpondéru" /> `{{<T "NoTransponderAssigned" >}}`. Pomocí šipek ◁ ▷ △ ▽ vyberte položku menu <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Zakoupená zvířata" /> `{{<T "PurchasedAnimals" >}}` a potvrďte `{{<T "Ok" >}}`.

3. Otevře se seznam s vašimi nákupy, které jste zaregistrovali prostřednictvím položky menu hromadného záznamu.

4. Použijte klávesu `F2` `{{<T "CSVExport" >}}`.

5. Seznam zpráv CSV je nyní uložen na vašem USB sticku.


    ![VitalControl: List of purchased animals, csv export](../images/purchasedanimals.png "Zakoupená zvířata, export csv ")

## Možnosti: Smazat všechny oznámení po exportu {#options-delete-all-notices-after-export}

S touto možností můžete nastavit, zda by měla být všechna oznámení v seznamu `{{<T "PurchasedAnimals" >}}` smazána po exportu CSV souboru. Použijte tuto možnost pouze tehdy, pokud jste si jisti, že již oznámení nepotřebujete!

1. Použijte klávesu `F3`. Otevře se podmenu.

2. Použijte šipky △ ▽ k výběru položky menu `{{<T "DeleteAllNoticesAfterExport" >}}` a potvrďte `{{<T "Ok" >}}`.

3. Pole je nyní označeno zaškrtnutím. Možnost je aktivována. Potvrďte znovu `{{<T "Ok" >}}` pro deaktivaci možnosti. 

    ![VitalControl: List of purchased animals, csv export](../images/delete-all.png "Smazat všechny oznámení po exportu")    

## Přímé volání funkcí {#direct-function-calls}

Kromě vytvoření exportního souboru máte následující možnosti:

- [Odpojit transpondér](#unlink-transponder)
- [Vymazat všechna oznámení o nákupu](#clear-all-purchase-notices)
- [Smazat zvíře + oznámení](#delete-animal--purchase-notice)
- [Vymazat oznámení o nákupu](#clear-notice-of-purchase)
- [Upravit značku](#edit-data-of-purchased-animal)

{{% alert title="Tip" %}}
Vždy nejprve otevřete seznam `{{<T "PurchasedAnimals" >}}` podle pokynů výše.
{{% /alert %}}

### Odpojit transpondér {#unlink-transponder}

Tuto funkci můžete použít k odstranění transpondéru ze zvířete.

1. Použijte klávesu `F3`. Otevře se podmenu.

2. Použijte šipky △ ▽ k výběru položky menu `{{<T "UnlinkTransponder" >}}` a potvrďte `{{<T "Ok" >}}`.

3. Transpondér byl úspěšně odpojen.

    ![VitalControl: List of purchased animals, csv export](../images/unlink-transponder.png "Zakoupená zvířata, odpojit transpondér")

### Vymazat všechna oznámení o nákupu {#clear-all-purchase-notices}

Tuto funkci můžete použít k vymazání všech zvířat ze seznamu `{{<T "PurchasedAnimals" >}}` bez nutnosti nejprve vytvořit exportní soubor.

1. Použijte klávesu `F3`. Otevře se podmenu.

2. Použijte šipky △ ▽ k výběru položky menu `{{<T "ClearAllPurchaseNotices" >}}` a potvrďte `{{<T "Ok" >}}`.

3. Oznámení o nákupu byla úspěšně vymazána.

![VitalControl: List of purchased animals, clear purchase notices](../images/clear.png "Clear all purchase notices ")

### Smazat zvíře + oznámení o nákupu {#delete-animal--purchase-notice}

Chcete-li smazat zvíře a odpovídající oznámení o nákupu, postupujte následovně:

1. Pomocí šipek △ ▽ vyberte zvíře, které chcete smazat.

2. Použijte klávesu `F3`. Otevře se podnabídka.

3. Pomocí šipek △ ▽ vyberte položku nabídky `{{<T "UnregisterAnimalAndBirthNotice" >}}` a potvrďte `{{<T "Ok" >}}`.

4. Zvíře a přístupová zpráva byly úspěšně smazány.

![VitalControl: List of purchased animals, dele animal + notice](../images/delete.png "Delete animal + notice")

### Vymazat oznámení o nákupu {#clear-notice-of-purchase}
 
Chcete-li smazat oznámení o nákupu zvířete ze seznamu, postupujte následovně:

1. Pomocí šipek △ ▽ vyberte zvíře, jehož oznámení o nákupu chcete smazat.

2. Použijte klávesu `F3`. Otevře se podnabídka.

3. Pomocí šipek △ ▽ vyberte položku nabídky `{{<T "ClearPurchaseNotice" >}}` a potvrďte `{{<T "Ok" >}}`.

4. Oznámení o nákupu vybraného zvířete bylo úspěšně smazáno.

![VitalControl: List of purchased animals, clear notice of purchase](../images/clearnotice.png "Clear notice of purchase")

### Upravit údaje o zakoupeném zvířeti {#edit-data-of-purchased-animal}

Chcete-li upravit údaje o zvířeti v seznamu nákupů, postupujte následovně:

1. Pomocí šipek △ ▽ vyberte zvíře, které chcete upravit.

2. Použijte tlačítko `{{<T "Ok" >}}`. Otevře se podnabídka s údaji o zvířeti. Jak tyto údaje upravit, zjistíte [zde](/cs/docs/actions/edit/#edit-animal-data).

![VitalControl: List of purchased animals, Edit animal data](../images/edit.png "Edit data of purchased animal")
