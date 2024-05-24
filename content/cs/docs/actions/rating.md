---
title: Hodnocení
linkTitle: Hodnocení
slug: rating
weight: 30
description: >
 Ohodnoťte svá zvířata.
date: 2023-07-26
categories: [Akce]
tags: [Akce, Hodnocení]
translationKey: actions/animal-rating
---

## Ohodnoťte svá zvířata {#rate-your-animals}

Při hodnocení zvířete dokumentujete stav jednotlivého zvířete. Stav je určen vizuálně a zaznamenán pomocí systému semaforu. V základním hodnocení je zaznamenán pouze obecný stav. V rozšířeném hodnocení zaznamenáváte obecný stav, příjem potravy, konzistenci výkalů a respirační onemocnění. Můžete buď změnit režim hodnocení přímo v akci <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `Hodnocení` nebo jej můžete definovat v [nastavení](../../settings/data-acquisition/#mode-of-animal-rating).

{{% alert title="Tip" %}}
Žluté nebo červené hodnocení znamená, že VitalControl klasifikuje zvíře jako nápadné a zařadí ho na seznam alarmů.
{{% /alert %}}

1. Na hlavní obrazovce vašeho zařízení VitalControl vyberte položku menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `Akce` a stiskněte tlačítko `OK`.

2. Buď naskenujte zvíře pomocí transpondéru, nebo vyberte zvíře ze seznamu. Potvrďte `OK` a vyberte zvíře pomocí šipek △ ▽. Potvrďte `OK`.

3. Otevře se podmenu s akcemi pro zvíře. Pomocí šipek ◁ ▷ vyberte akci <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `Hodnocení` a potvrďte `OK`.

4. Otevře se menu hodnocení. Pokud chcete změnit režim hodnocení, použijte tlačítko `Zap/Vyp` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Chain-of-actions" />&nbsp; a šipky ◁ ▷. Pomocí klávesy `F1` <img src="/icons/footer/exit.svg" width="24" align="bottom" alt="Back" />&nbsp; se vrátíte do menu hodnocení.

5. Pomocí šipek ◁ ▷ △ ▽ vyberte stav a uložte jej klávesou `F3` <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> nebo klávesou `OK`.


6. V pokročilém režimu použijte klávesy `F1` a `F3` pro přepínání mezi hodnotícími parametry.

{{% alert title="Tip" %}}
Pokud neprovedete výběr pomocí šipek ◁ ▷, ale uložíte přímo pomocí klávesy `F3` nebo `OK`, VitalControl uloží neutrální hodnocení, které je reprezentováno šedou barvou.
{{% /alert %}}

### Základní hodnocení {#basic-rating}

{{< tabpane >}}
{{< tab header="Základní hodnocení:" text=true disabled=true />}}
{{% tab header="Skenování transpondéru" text=true %}}
![VitalControl: Menu Akce Hodnocení](../images/basicrating-scan.png "Základní hodnocení")
{{% /tab %}}
{{% tab header="Ruční výběr ze seznamu" text=true %}}
![VitalControl: Menu Akce Hodnocení](../images/basicrating.png "Základní hodnocení")
{{% /tab %}}
{{< /tabpane >}}

### Rozšířené hodnocení {#extended-rating}

{{< tabpane >}}
{{< tab header="Základní hodnocení:" text=true disabled=true />}}
{{% tab header="Skenování transpondéru" text=true %}}
![VitalControl: Menu Akce Hodnocení](../images/extendedrating-scan.png "Rozšířené hodnocení")
{{% /tab %}}
{{% tab header="Ruční výběr ze seznamu" text=true %}}
![VitalControl: Menu Akce Hodnocení](../images/extendedrating.png "Rozšířené hodnocení")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Tip" %}}
Pokud tato akce není dostupná, pravděpodobně byla deaktivována! Aktivujte akci v menu [nastavení akce](../settings/). Alternativně, resetování všech akcí tuto akci obnoví.
{{% /alert %}}
